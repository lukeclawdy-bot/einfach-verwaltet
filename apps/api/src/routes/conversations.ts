/**
 * Conversations Routes
 * POST   /api/conversations           — new message (tenant or system)
 * GET    /api/conversations/:tenantId — full message history
 */

import { Hono } from 'hono';
import { z } from 'zod';
import { MockDB, type Message } from '../mock/db.js';
import { authMiddleware, enforceOrgIsolation } from '../middleware/auth.js';
import { validationError, notFound, serverError } from '../lib/errors.js';

const conversations = new Hono();

// Apply JWT auth to all conversation routes
conversations.use('/*', authMiddleware);

// ─── Schemas ─────────────────────────────────────────────────────────────────

const CreateMessageSchema = z.object({
  ticketId: z.string().min(1, 'Ticket ID ist erforderlich'),
  content: z.string().min(1, 'Nachricht darf nicht leer sein').max(5000),
  channel: z.enum(['email', 'whatsapp', 'portal', 'sms', 'phone']).default('portal'),
  isInternal: z.boolean().default(false),
  attachments: z.array(z.object({
    name: z.string(),
    url: z.string().url(),
    mimeType: z.string(),
  })).optional(),
});

const ListMessagesQuerySchema = z.object({
  page: z.coerce.number().int().min(1).default(1),
  limit: z.coerce.number().int().min(1).max(100).default(20),
});

// ─── POST /api/conversations ──────────────────────────────────────────────────

conversations.post('/', async (c) => {
  try {
    const body = await c.req.json();
    const parsed = CreateMessageSchema.safeParse(body);

    if (!parsed.success) return validationError(c, parsed.error);

    const user = c.get('user');
    const data = parsed.data;

    // Verify ticket exists and user has access
    const ticket = await MockDB.findTicketById(data.ticketId, user.org);
    if (!ticket) {
      return c.json({ data: null, error: 'Ticket nicht gefunden' }, 404);
    }

    const message = await MockDB.createMessage({
      ticketId: data.ticketId,
      senderId: user.sub,
      senderType: user.role === 'system' ? 'system' : user.role === 'tenant' ? 'tenant' : 'agent',
      content: data.content,
      channel: data.channel,
      isInternal: data.isInternal,
      attachments: data.attachments,
    });

    return c.json({
      data: { message: serializeMessage(message) },
      error: null,
    }, 201);
  } catch (err) {
    return serverError(c, err);
  }
});

// ─── GET /api/conversations/:tenantId ─────────────────────────────────────────

conversations.get('/:tenantId', async (c) => {
  try {
    const user = c.get('user');
    const tenantId = c.req.param('tenantId');
    const queryParsed = ListMessagesQuerySchema.safeParse(c.req.query());

    if (!queryParsed.success) return validationError(c, queryParsed.error);
    const { page, limit } = queryParsed.data;

    // Get all tickets for this tenant
    const tenancy = await MockDB.findTenancyById(tenantId, user.org);
    if (!tenancy) return notFound(c, 'Mieter');
    enforceOrgIsolation(c, tenancy.organizationId);

    // Get all messages for tickets associated with this tenancy
    const tenantTickets = await MockDB.listTicketsByTenancy(tenantId, user.org);
    const ticketIds = new Set(tenantTickets.map(t => t.id));

    // Also get tenant's direct messages (not associated with specific tickets)
    const allMessages = await MockDB.listMessagesByTenant(tenantId, user.org);
    
    // Filter to only show messages from tenant's tickets or direct messages
    const filteredMessages = allMessages.filter(m => 
      ticketIds.has(m.ticketId) || m.senderId === tenantId || m.recipientId === tenantId
    );

    // Sort by date descending
    filteredMessages.sort((a, b) => b.createdAt.getTime() - a.createdAt.getTime());

    const total = filteredMessages.length;
    const paginated = filteredMessages.slice((page - 1) * limit, page * limit);

    return c.json({
      data: {
        tenantId,
        tenantName: tenancy.tenantName,
        messages: paginated.map(serializeMessage),
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

// ─── Helpers ──────────────────────────────────────────────────────────────────

function serializeMessage(m: Message) {
  return {
    id: m.id,
    ticketId: m.ticketId,
    senderId: m.senderId,
    senderType: m.senderType,
    recipientId: m.recipientId,
    content: m.content,
    channel: m.channel,
    isInternal: m.isInternal,
    attachments: m.attachments,
    metadata: m.metadata,
    createdAt: m.createdAt.toISOString(),
  };
}

export default conversations;
