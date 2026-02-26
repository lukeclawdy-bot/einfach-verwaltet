import { NextRequest, NextResponse } from 'next/server';
import { db } from '@/lib/db';
import { tickets, conversations } from '@/lib/db/schema';
import { eq } from 'drizzle-orm';

export async function GET(_req: NextRequest, { params }: { params: Promise<{ id: string }> }) {
  try {
    const { id } = await params;
    const [ticket] = await db.select().from(tickets).where(eq(tickets.id, id));
    if (!ticket) return NextResponse.json({ error: 'not found' }, { status: 404 });

    const messages = await db.select().from(conversations)
      .where(eq(conversations.ticketId, id))
      .orderBy(conversations.createdAt);

    return NextResponse.json({ data: { ...ticket, messages } });
  } catch (e) {
    return NextResponse.json({ error: String(e) }, { status: 500 });
  }
}

export async function PATCH(req: NextRequest, { params }: { params: Promise<{ id: string }> }) {
  try {
    const { id } = await params;
    const body = await req.json();
    const { status, assignee, resolvedAt } = body;

    const updates: Record<string, unknown> = { updatedAt: new Date() };
    if (status) updates.status = status;
    if (assignee) updates.assignee = assignee;
    if (resolvedAt || status === 'resolved') updates.resolvedAt = resolvedAt ? new Date(resolvedAt) : new Date();

    const [ticket] = await db.update(tickets).set(updates).where(eq(tickets.id, id)).returning();
    return NextResponse.json({ data: ticket });
  } catch (e) {
    return NextResponse.json({ error: String(e) }, { status: 500 });
  }
}
