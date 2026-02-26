/**
 * Tenants Routes
 * GET    /api/tenants                 — list tenants (filter by property)
 * POST   /api/tenants                 — create tenant
 * GET    /api/tenants/:id             — tenant detail with ticket history
 * PATCH  /api/tenants/:id             — update tenant
 */

import { Hono } from 'hono';
import { z } from 'zod';
import { MockDB, type Tenancy, generateId } from '../mock/db.js';
import { authMiddleware, enforceOrgIsolation } from '../middleware/auth.js';
import { validationError, notFound, serverError } from '../lib/errors.js';

const tenants = new Hono();

// Apply JWT auth to all tenant routes
tenants.use('/*', authMiddleware);

// ─── Schemas ─────────────────────────────────────────────────────────────────

const CreateTenantSchema = z.object({
  unitId: z.string().min(1, 'Einheit ist erforderlich'),
  tenantName: z.string().min(1, 'Name ist erforderlich').max(200),
  tenantEmail: z.string().email('Gültige E-Mail-Adresse erforderlich'),
  tenantPhone: z.string().optional(),
  rentColdCents: z.number().int().min(0, 'Kaltmiete muss positiv sein'),
  rentWarmCents: z.number().int().min(0, 'Warmmiete muss positiv sein'),
  depositCents: z.number().int().min(0).optional(),
  leaseStart: z.string().datetime({ message: 'Gültiges Startdatum erforderlich (ISO 8601)' }),
  leaseEnd: z.string().datetime().optional(),
  noticePeriodMonths: z.number().int().min(1).max(12).default(3),
  leaseType: z.enum(['unbefristet', 'befristet', 'gewerblich']).default('unbefristet'),
});

const UpdateTenantSchema = z.object({
  tenantName: z.string().min(1).max(200).optional(),
  tenantEmail: z.string().email().optional(),
  tenantPhone: z.string().optional(),
  rentColdCents: z.number().int().min(0).optional(),
  rentWarmCents: z.number().int().min(0).optional(),
  depositCents: z.number().int().min(0).optional(),
  leaseEnd: z.string().datetime().optional(),
  noticePeriodMonths: z.number().int().min(1).max(12).optional(),
  status: z.enum(['active', 'notice', 'ended', 'archived']).optional(),
});

const ListTenantsQuerySchema = z.object({
  propertyId: z.string().optional(),
  unitId: z.string().optional(),
  status: z.enum(['active', 'notice', 'ended', 'archived']).optional(),
  page: z.coerce.number().int().min(1).default(1),
  limit: z.coerce.number().int().min(1).max(100).default(20),
});

// ─── GET /api/tenants ─────────────────────────────────────────────────────────

tenants.get('/', async (c) => {
  try {
    const user = c.get('user');
    const queryParsed = ListTenantsQuerySchema.safeParse(c.req.query());

    if (!queryParsed.success) return validationError(c, queryParsed.error);

    const { propertyId, unitId, status, page, limit } = queryParsed.data;

    // Get all tenancies for org
    let tenancies = await MockDB.listTenanciesByOrg(user.org);

    // Apply filters
    if (status) {
      tenancies = tenancies.filter(t => t.status === status);
    }
    if (unitId) {
      tenancies = tenancies.filter(t => t.unitId === unitId);
    }
    if (propertyId) {
      // Get units for this property
      const units = await MockDB.listUnitsByProperty(propertyId);
      const unitIds = new Set(units.map(u => u.id));
      tenancies = tenancies.filter(t => unitIds.has(t.unitId));
    }

    // Enrich with unit info
    const enriched = await Promise.all(
      tenancies.map(async (t) => {
        const unit = await MockDB.findUnitById(t.unitId);
        const property = unit ? await MockDB.findPropertyById(unit.propertyId, user.org) : null;
        return {
          ...serializeTenancy(t),
          unit: unit ? {
            id: unit.id,
            unitNumber: unit.unitNumber,
            propertyId: unit.propertyId,
            propertyName: property?.name,
          } : null,
        };
      })
    );

    // Pagination
    const total = enriched.length;
    const paginated = enriched.slice((page - 1) * limit, page * limit);

    return c.json({
      data: {
        tenants: paginated,
        pagination: {
          total,
          page,
          limit,
          pages: Math.ceil(total / limit),
        },
      },
      error: null,
    });
  } catch (err) {
    return serverError(c, err);
  }
});

// ─── POST /api/tenants ────────────────────────────────────────────────────────

tenants.post('/', async (c) => {
  try {
    const body = await c.req.json();
    const parsed = CreateTenantSchema.safeParse(body);

    if (!parsed.success) return validationError(c, parsed.error);

    const user = c.get('user');
    const data = parsed.data;

    // Verify unit exists and belongs to org
    const unit = await MockDB.findUnitById(data.unitId);
    if (!unit || unit.organizationId !== user.org) {
      return c.json({ data: null, error: 'Einheit nicht gefunden' }, 404);
    }

    const tenancy = await MockDB.createTenancy({
      unitId: data.unitId,
      organizationId: user.org,
      tenantName: data.tenantName,
      tenantEmail: data.tenantEmail,
      tenantPhone: data.tenantPhone,
      rentColdCents: data.rentColdCents,
      rentWarmCents: data.rentWarmCents,
      depositCents: data.depositCents ?? 0,
      leaseStart: new Date(data.leaseStart),
      leaseEnd: data.leaseEnd ? new Date(data.leaseEnd) : undefined,
      noticePeriodMonths: data.noticePeriodMonths,
      leaseType: data.leaseType,
      status: 'active',
    });

    return c.json({
      data: { tenant: serializeTenancy(tenancy) },
      error: null,
    }, 201);
  } catch (err) {
    return serverError(c, err);
  }
});

// ─── GET /api/tenants/:id ─────────────────────────────────────────────────────

tenants.get('/:id', async (c) => {
  try {
    const user = c.get('user');
    const tenancy = await MockDB.findTenancyById(c.req.param('id'), user.org);

    if (!tenancy) return notFound(c, 'Mieter');
    enforceOrgIsolation(c, tenancy.organizationId);

    // Get unit and property info
    const unit = await MockDB.findUnitById(tenancy.unitId);
    const property = unit ? await MockDB.findPropertyById(unit.propertyId, user.org) : null;

    // Get ticket history for this tenant
    const tickets = await MockDB.listTicketsByTenancy(tenancy.id, user.org);

    return c.json({
      data: {
        tenant: {
          ...serializeTenancy(tenancy),
          unit: unit ? {
            id: unit.id,
            unitNumber: unit.unitNumber,
            floor: unit.floor,
            areaSqm: unit.areaSqm,
            propertyId: unit.propertyId,
            propertyName: property?.name,
            propertyAddress: property ? {
              street: property.addressStreet,
              city: property.addressCity,
              zip: property.addressZip,
            } : null,
          } : null,
          tickets: tickets.map(t => ({
            id: t.id,
            title: t.title,
            category: t.category,
            priority: t.priority,
            status: t.status,
            createdAt: t.createdAt.toISOString(),
            resolvedAt: t.resolvedAt?.toISOString(),
          })),
        },
      },
      error: null,
    });
  } catch (err) {
    return serverError(c, err);
  }
});

// ─── PATCH /api/tenants/:id ───────────────────────────────────────────────────

tenants.patch('/:id', async (c) => {
  try {
    const user = c.get('user');
    const tenancy = await MockDB.findTenancyById(c.req.param('id'), user.org);

    if (!tenancy) return notFound(c, 'Mieter');
    enforceOrgIsolation(c, tenancy.organizationId);

    const body = await c.req.json();
    const parsed = UpdateTenantSchema.safeParse(body);
    if (!parsed.success) return validationError(c, parsed.error);

    const updates = parsed.data;

    // Apply updates
    const updatedTenancy: Tenancy = {
      ...tenancy,
      ...updates,
      leaseEnd: updates.leaseEnd ? new Date(updates.leaseEnd) : tenancy.leaseEnd,
      updatedAt: new Date(),
    };

    // Persist to mock store
    const { mockDB } = await import('../mock/db.js');
    mockDB.tenancies.set(tenancy.id, updatedTenancy);

    return c.json({
      data: { tenant: serializeTenancy(updatedTenancy) },
      error: null,
    });
  } catch (err) {
    return serverError(c, err);
  }
});

// ─── Helpers ──────────────────────────────────────────────────────────────────

function serializeTenancy(t: Tenancy) {
  return {
    id: t.id,
    tenantName: t.tenantName,
    tenantEmail: t.tenantEmail,
    tenantPhone: t.tenantPhone,
    rentColdCents: t.rentColdCents,
    rentWarmCents: t.rentWarmCents,
    depositCents: t.depositCents,
    leaseStart: t.leaseStart.toISOString(),
    leaseEnd: t.leaseEnd?.toISOString(),
    noticePeriodMonths: t.noticePeriodMonths,
    leaseType: t.leaseType,
    status: t.status,
    userId: t.userId,
    createdAt: t.createdAt.toISOString(),
    updatedAt: t.updatedAt.toISOString(),
  };
}

export default tenants;
