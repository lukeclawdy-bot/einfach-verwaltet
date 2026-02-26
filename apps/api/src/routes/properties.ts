/**
 * Extended Properties Routes
 * GET    /api/properties              — list all properties for authenticated landlord
 * POST   /api/properties              — create new property
 * GET    /api/properties/:id          — get single property with units
 * PATCH  /api/properties/:id          — update property
 * DELETE /api/properties/:id          — soft delete
 */

import { Hono } from 'hono';
import { z } from 'zod';
import { MockDB, type Property } from '../mock/db.js';
import { authMiddleware, requireRole, enforceOrgIsolation } from '../middleware/auth.js';
import { validationError, notFound, serverError } from '../lib/errors.js';

const properties = new Hono();

// Apply JWT auth to all property routes
properties.use('/*', authMiddleware);

// ─── Schemas ─────────────────────────────────────────────────────────────────

const CreatePropertySchema = z.object({
  name: z.string().min(1, 'Name ist erforderlich').max(200),
  addressStreet: z.string().min(1, 'Straße ist erforderlich'),
  addressCity: z.string().min(1, 'Stadt ist erforderlich'),
  addressZip: z.string().regex(/^\d{5}$/, 'Postleitzahl muss 5 Ziffern haben'),
  addressCountry: z.string().length(2).default('DE'),
  propertyType: z.enum(['weg', 'miet', 'mixed'], {
    errorMap: () => ({ message: 'Typ muss weg, miet oder mixed sein' }),
  }),
  yearBuilt: z.number().int().min(1800).max(2100).optional(),
  totalUnits: z.number().int().min(1).max(9999).default(1),
  energyClass: z.enum(['A+', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H']).optional(),
  settings: z.record(z.unknown()).default({}),
});

const UpdatePropertySchema = z.object({
  name: z.string().min(1).max(200).optional(),
  addressStreet: z.string().min(1).optional(),
  addressCity: z.string().min(1).optional(),
  addressZip: z.string().regex(/^\d{5}$/).optional(),
  propertyType: z.enum(['weg', 'miet', 'mixed']).optional(),
  yearBuilt: z.number().int().min(1800).max(2100).optional(),
  totalUnits: z.number().int().min(1).max(9999).optional(),
  energyClass: z.enum(['A+', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H']).optional(),
  settings: z.record(z.unknown()).optional(),
});

// ─── GET /api/properties ──────────────────────────────────────────────────────

properties.get('/', async (c) => {
  try {
    const user = c.get('user');
    const propertiesList = await MockDB.listProperties(user.org);

    // Enrich with unit counts
    const enriched = await Promise.all(
      propertiesList.map(async (p) => {
        const units = await MockDB.listUnitsByProperty(p.id);
        const occupiedCount = units.filter(u => u.status === 'occupied').length;
        const vacantCount = units.filter(u => u.status === 'vacant').length;

        return {
          ...serializeProperty(p),
          unitSummary: {
            total: units.length,
            occupied: occupiedCount,
            vacant: vacantCount,
            maintenance: units.filter(u => u.status === 'maintenance').length,
            occupancyRate: units.length > 0
              ? Math.round((occupiedCount / units.length) * 1000) / 10
              : 0,
          },
        };
      })
    );

    return c.json({
      data: {
        properties: enriched,
        total: enriched.length,
      },
      error: null,
    });
  } catch (err) {
    return serverError(c, err);
  }
});

// ─── POST /api/properties ─────────────────────────────────────────────────────

properties.post('/', requireRole('admin', 'agent', 'owner'), async (c) => {
  try {
    const body = await c.req.json();
    const parsed = CreatePropertySchema.safeParse(body);

    if (!parsed.success) return validationError(c, parsed.error);

    const user = c.get('user');

    const property = await MockDB.createProperty({
      ...parsed.data,
      organizationId: user.org,
      addressCountry: parsed.data.addressCountry ?? 'DE',
      settings: parsed.data.settings ?? {},
    });

    return c.json({
      data: { property: serializeProperty(property) },
      error: null,
    }, 201);
  } catch (err) {
    return serverError(c, err);
  }
});

// ─── GET /api/properties/:id ──────────────────────────────────────────────────

properties.get('/:id', async (c) => {
  try {
    const user = c.get('user');
    const property = await MockDB.findPropertyById(c.req.param('id'), user.org);

    if (!property) return notFound(c, 'Immobilie');
    enforceOrgIsolation(c, property.organizationId);

    const units = await MockDB.listUnitsByProperty(property.id);
    const occupiedCount = units.filter(u => u.status === 'occupied').length;

    return c.json({
      data: {
        property: {
          ...serializeProperty(property),
          units: units.map(u => ({
            id: u.id,
            unitNumber: u.unitNumber,
            floor: u.floor,
            areaSqm: u.areaSqm,
            rooms: u.rooms,
            unitType: u.unitType,
            status: u.status,
          })),
          unitSummary: {
            total: units.length,
            occupied: occupiedCount,
            vacant: units.filter(u => u.status === 'vacant').length,
            maintenance: units.filter(u => u.status === 'maintenance').length,
            occupancyRate: units.length > 0
              ? Math.round((occupiedCount / units.length) * 1000) / 10
              : 0,
          },
        },
      },
      error: null,
    });
  } catch (err) {
    return serverError(c, err);
  }
});

// ─── PATCH /api/properties/:id ────────────────────────────────────────────────

properties.patch('/:id', async (c) => {
  try {
    const user = c.get('user');
    const property = await MockDB.findPropertyById(c.req.param('id'), user.org);

    if (!property) return notFound(c, 'Immobilie');
    enforceOrgIsolation(c, property.organizationId);

    const body = await c.req.json();
    const parsed = UpdatePropertySchema.safeParse(body);
    if (!parsed.success) return validationError(c, parsed.error);

    const updates = parsed.data;

    // Apply updates
    const updatedProperty: Property = {
      ...property,
      ...updates,
      updatedAt: new Date(),
    };

    // Persist to mock store
    const { mockDB } = await import('../mock/db.js');
    mockDB.properties.set(property.id, updatedProperty);

    return c.json({
      data: { property: serializeProperty(updatedProperty) },
      error: null,
    });
  } catch (err) {
    return serverError(c, err);
  }
});

// ─── DELETE /api/properties/:id ───────────────────────────────────────────────

properties.delete('/:id', async (c) => {
  try {
    const user = c.get('user');
    const property = await MockDB.findPropertyById(c.req.param('id'), user.org);

    if (!property) return notFound(c, 'Immobilie');
    enforceOrgIsolation(c, property.organizationId);

    // Soft delete
    const { mockDB } = await import('../mock/db.js');
    const deletedProperty: Property = {
      ...property,
      deletedAt: new Date(),
      updatedAt: new Date(),
    };
    mockDB.properties.set(property.id, deletedProperty);

    return c.json({
      data: {
        message: 'Immobilie erfolgreich gelöscht',
        propertyId: property.id,
        deletedAt: deletedProperty.deletedAt!.toISOString(),
      },
      error: null,
    });
  } catch (err) {
    return serverError(c, err);
  }
});

// ─── Helpers ──────────────────────────────────────────────────────────────────

function serializeProperty(p: Property) {
  return {
    id: p.id,
    name: p.name,
    address: {
      street: p.addressStreet,
      city: p.addressCity,
      zip: p.addressZip,
      country: p.addressCountry,
    },
    propertyType: p.propertyType,
    yearBuilt: p.yearBuilt,
    totalUnits: p.totalUnits,
    energyClass: p.energyClass,
    settings: p.settings,
    createdAt: p.createdAt.toISOString(),
    updatedAt: p.updatedAt.toISOString(),
    deletedAt: p.deletedAt?.toISOString(),
  };
}

export default properties;
