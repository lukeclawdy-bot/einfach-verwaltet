/**
 * Extended Tickets Routes
 * GET    /api/tickets                 — list tickets (filter: open/closed, property, urgency)
 * POST   /api/tickets                 — create ticket
 * PATCH  /api/tickets/:id             — update status, assignee, resolution
 * GET    /api/tickets/:id/messages    — conversation thread
 */

import { Hono } from 'hono';
import { z } from 'zod';
import { MockDB, type Ticket, type Message } from '../mock/db.js';
import { authMiddleware, enforceOrgIsolation } from '../middleware/auth.js';
import { validationError, notFound, forbidden, serverError } from '../lib/errors.js';

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
  urgency: z.enum(['open_only', 'high_priority', 'all']).default('all'),
  page: z.coerce.number().int().min(1).default(1),
  limit: z.coerce.number().int().min(1).max(100).default(20),
});

// ─── GET /api/tickets ─────────────────────────────────────────────────────────

tickets.get('/', async (c) => {
  try {
    const user = c.get('user');
    const queryParsed = ListTicketsQuerySchema.safeParse(c.req.query());

    if (!queryParsed.success) return validationError(c, queryParsed.error);

    let { propertyId, unitId, status, priority, category, urgency, page, limit } = queryParsed.data;

    // Handle urgency filter shortcuts
    if (urgency === 'open_only') {
      // Only show non-resolved tickets
      const { tickets: ticketList, total } = await MockDB.listTickets({
        organizationId: user.org,
        propertyId,
        unitId,
        status,
        priority,
        category,
        page: 1,
        limit: 1000, // Get all for filtering
      });
      
      const openTickets = ticketList.filter(t => !['resolved', 'closed'].includes(t.status));
      const paginated = openTickets.slice((page - 1) * limit, page * limit);
      
      return c.json({
        data: {
          tickets: paginated.map(serializeTicket),
          pagination: {
            total: openTickets.length,
            page,
            limit,
            pages: Math.ceil(openTickets.length / limit),
          },
          summary: {
            filter: 'open_only',
            totalOpen: openTickets.length,
          },
        },
        error: null,
      });
    }

    if (urgency === 'high_priority') {
      priority = 'high';
    }

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
    const allTickets = await MockDB.listTickets({ organizationId: user.org });
    const statusCounts: Record<string, number> = {};
    for (const t of allTickets.tickets) {
      statusCounts[t.status] = (statusCounts[t.status] ?? 0) + 1;
    }

    return c.json({
      data: {
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
          closed: statusCounts['closed'] ?? 0,
          total: allTickets.total,
        },
      },
      error: null,
    });
  } catch (err) {
    return serverError(c, err);
  }
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

    return c.json({
      data: { ticket: serializeTicket(ticket) },
      error: null,
    }, 201);
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

    return c.json({
      data: { ticket: serializeTicket(ticket) },
      error: null,
    });
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
    const { mockDB } = await import('../mock/db.js');
    mockDB.tickets.set(ticket.id, updatedTicket);

    return c.json({
      data: { ticket: serializeTicket(updatedTicket) },
      error: null,
    });
  } catch (err) {
    return serverError(c, err);
  }
});

// ─── GET /api/tickets/:id/messages ────────────────────────────────────────────

tickets.get('/:id/messages', async (c) => {
  try {
    const user = c.get('user');
    const ticket = await MockDB.findTicketById(c.req.param('id'), user.org);

    if (!ticket) return notFound(c, 'Ticket');
    enforceOrgIsolation(c, ticket.organizationId);

    // Get messages for this ticket
    const messages = await MockDB.listMessagesByTicket(ticket.id);

    return c.json({
      data: {
        ticketId: ticket.id,
        ticketTitle: ticket.title,
        messages: messages.map(serializeMessage),
      },
      error: null,
    });
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

function serializeMessage(m: Message) {
  return {
    id: m.id,
    ticketId: m.ticketId,
    senderId: m.senderId,
    senderType: m.senderType,
    content: m.content,
    channel: m.channel,
    isInternal: m.isInternal,
    attachments: m.attachments,
    createdAt: m.createdAt.toISOString(),
  };
}

export default tickets;
