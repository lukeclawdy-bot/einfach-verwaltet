/**
 * Tickets Routes (comms.tickets schema)
 * POST /api/tickets              — create a maintenance/support ticket
 * GET  /api/tickets              — list tickets with filters
 * GET  /api/tickets/:id          — get ticket detail
 * PATCH /api/tickets/:id         — update ticket status
 */

import { Hono } from 'hono';
import { z } from 'zod';
import { MockDB, type Ticket } from '../../mock/db.js';
import { authMiddleware, enforceOrgIsolation } from '../../middleware/auth.js';
import { validationError, notFound, forbidden, serverError } from '../../lib/errors.js';

const tickets = new Hono();

// Apply JWT auth to all ticket routes
tickets.use('/*', authMiddleware);

// ─── Schemas ─────────────────────────────────────────────────────────────────

const CreateTicketSchema = z.object({
  title: z.string().min(3, 'Titel muss mindestens 3 Zeichen lang sein').max(200),
  description: z.string().max(5000).optional(),
  category: z.enum([
    'repair', 'billing', 'noise', 'cleanliness', 'emergency',
    'contract', 'neighbor', 'general', 'other'
  ], { errorMap: () => ({ message: 'Ungültige Kategorie' }) }),
  priority: z.enum(['low', 'normal', 'high', 'emergency']).default('normal'),
  propertyId: z.string().optional(),
  unitId: z.string().optional(),
  tenancyId: z.string().optional(),
});

const UpdateTicketSchema = z.object({
  status: z.enum([
    'open', 'ai_processing', 'waiting_tenant', 'waiting_partner',
    'in_progress', 'resolved', 'closed', 'escalated'
  ]).optional(),
  priority: z.enum(['low', 'normal', 'high', 'emergency']).optional(),
  assignedTo: z.string().optional(),
  resolutionNote: z.string().max(5000).optional(),
  aiSummary: z.string().max(2000).optional(),
});

const ListTicketsQuerySchema = z.object({
  propertyId: z.string().optional(),
  unitId: z.string().optional(),
  status: z.enum([
    'open', 'ai_processing', 'waiting_tenant', 'waiting_partner',
    'in_progress', 'resolved', 'closed', 'escalated'
  ]).optional(),
  priority: z.enum(['low', 'normal', 'high', 'emergency']).optional(),
  category: z.enum([
    'repair', 'billing', 'noise', 'cleanliness', 'emergency',
    'contract', 'neighbor', 'general', 'other'
  ]).optional(),
  page: z.coerce.number().int().min(1).default(1),
  limit: z.coerce.number().int().min(1).max(100).default(20),
});

// ─── POST /api/tickets ────────────────────────────────────────────────────────

tickets.post('/', async (c) => {
  try {
    const body = await c.req.json();
    const parsed = CreateTicketSchema.safeParse(body);

    if (!parsed.success) return validationError(c, parsed.error);

    const user = c.get('user');
    const data = parsed.data;

    // Compute SLA due date based on priority
    const slaDurations: Record<string, number> = {
      emergency: 2 * 60 * 60 * 1000,         // 2 hours
      high: 24 * 60 * 60 * 1000,              // 24 hours
      normal: 5 * 24 * 60 * 60 * 1000,        // 5 business days
      low: 30 * 24 * 60 * 60 * 1000,          // 30 days
    };

    const ticket = await MockDB.createTicket({
      organizationId: user.org,
      reporterId: user.sub,
      title: data.title,
      description: data.description,
      category: data.category,
      priority: data.priority,
      status: 'open',
      propertyId: data.propertyId,
      unitId: data.unitId,
      tenancyId: data.tenancyId,
      slaDueAt: new Date(Date.now() + slaDurations[data.priority]),
    });

    return c.json({ ticket: serializeTicket(ticket) }, 201);
  } catch (err) {
    return serverError(c, err);
  }
});

// ─── GET /api/tickets ─────────────────────────────────────────────────────────

tickets.get('/', async (c) => {
  try {
    const user = c.get('user');
    const queryParsed = ListTicketsQuerySchema.safeParse(c.req.query());

    if (!queryParsed.success) return validationError(c, queryParsed.error);

    const { propertyId, unitId, status, priority, category, page, limit } = queryParsed.data;

    const { tickets: ticketList, total } = await MockDB.listTickets({
      organizationId: user.org,
      propertyId,
      unitId,
      status,
      priority,
      category,
      page,
      limit,
    });

    // Summary counts across all (un-paginated) for the dashboard
    const allOpen = await MockDB.listTickets({ organizationId: user.org });
    const statusCounts: Record<string, number> = {};
    for (const t of allOpen.tickets) {
      statusCounts[t.status] = (statusCounts[t.status] ?? 0) + 1;
    }

    return c.json({
      tickets: ticketList.map(serializeTicket),
      pagination: {
        total,
        page,
        limit,
        pages: Math.ceil(total / limit),
      },
      summary: {
        open: statusCounts['open'] ?? 0,
        inProgress: statusCounts['in_progress'] ?? 0,
        waitingPartner: statusCounts['waiting_partner'] ?? 0,
        resolved: statusCounts['resolved'] ?? 0,
        total: allOpen.total,
      },
    });
  } catch (err) {
    return serverError(c, err);
  }
});

// ─── GET /api/tickets/:id ─────────────────────────────────────────────────────

tickets.get('/:id', async (c) => {
  try {
    const user = c.get('user');
    const ticket = await MockDB.findTicketById(c.req.param('id'), user.org);

    if (!ticket) return notFound(c, 'Ticket');
    enforceOrgIsolation(c, ticket.organizationId);

    return c.json({ ticket: serializeTicket(ticket) });
  } catch (err) {
    return serverError(c, err);
  }
});

// ─── PATCH /api/tickets/:id ───────────────────────────────────────────────────

tickets.patch('/:id', async (c) => {
  try {
    const user = c.get('user');
    const ticket = await MockDB.findTicketById(c.req.param('id'), user.org);

    if (!ticket) return notFound(c, 'Ticket');
    enforceOrgIsolation(c, ticket.organizationId);

    // Tenants can't resolve tickets
    if (user.role === 'tenant' && ['resolved', 'closed'].includes(c.req.query('status') ?? '')) {
      return forbidden(c, 'Mieter können Tickets nicht abschließen');
    }

    const body = await c.req.json();
    const parsed = UpdateTicketSchema.safeParse(body);
    if (!parsed.success) return validationError(c, parsed.error);

    const updates = parsed.data;

    // Apply updates
    const updatedTicket: Ticket = {
      ...ticket,
      ...updates,
      resolvedAt: updates.status === 'resolved' ? new Date() : ticket.resolvedAt,
      updatedAt: new Date(),
    };

    // Persist to mock store
    const { mockDB } = await import('../../mock/db.js');
    mockDB.tickets.set(ticket.id, updatedTicket);

    return c.json({ ticket: serializeTicket(updatedTicket) });
  } catch (err) {
    return serverError(c, err);
  }
});

// ─── Helpers ──────────────────────────────────────────────────────────────────

function serializeTicket(t: Ticket) {
  return {
    id: t.id,
    title: t.title,
    description: t.description,
    category: t.category,
    priority: t.priority,
    status: t.status,
    propertyId: t.propertyId,
    unitId: t.unitId,
    tenancyId: t.tenancyId,
    reporterId: t.reporterId,
    assignedTo: t.assignedTo,
    aiSummary: t.aiSummary,
    resolutionNote: t.resolutionNote,
    slaDueAt: t.slaDueAt?.toISOString(),
    resolvedAt: t.resolvedAt?.toISOString(),
    slaStatus: t.slaDueAt
      ? (t.resolvedAt
        ? (t.resolvedAt <= t.slaDueAt ? 'met' : 'breached')
        : (new Date() <= t.slaDueAt ? 'on_track' : 'overdue'))
      : 'no_sla',
    createdAt: t.createdAt.toISOString(),
    updatedAt: t.updatedAt.toISOString(),
  };
}

export default tickets;
