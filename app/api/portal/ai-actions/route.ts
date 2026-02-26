import { NextRequest, NextResponse } from 'next/server';
import { db } from '@/lib/db';
import { aiActions } from '@/lib/db/schema';
import { eq, and, desc } from 'drizzle-orm';

export async function GET(req: NextRequest) {
  try {
    const landlordId = req.nextUrl.searchParams.get('landlordId');
    if (!landlordId) return NextResponse.json({ error: 'landlordId required' }, { status: 400 });

    const actions = await db.select().from(aiActions)
      .where(and(eq(aiActions.landlordId, landlordId), eq(aiActions.status, 'pending')))
      .orderBy(desc(aiActions.urgency), desc(aiActions.createdAt));

    return NextResponse.json({ data: actions });
  } catch (e) {
    return NextResponse.json({ error: String(e) }, { status: 500 });
  }
}

export async function PATCH(req: NextRequest) {
  try {
    const body = await req.json();
    const { id, status } = body;
    if (!id || !status) return NextResponse.json({ error: 'id and status required' }, { status: 400 });

    const [action] = await db.update(aiActions)
      .set({ status })
      .where(eq(aiActions.id, id))
      .returning();

    return NextResponse.json({ data: action });
  } catch (e) {
    return NextResponse.json({ error: String(e) }, { status: 500 });
  }
}
