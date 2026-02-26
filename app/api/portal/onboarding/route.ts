import { NextRequest, NextResponse } from 'next/server';
import { db } from '@/lib/db';
import { onboardingSessions } from '@/lib/db/schema';
import { eq } from 'drizzle-orm';

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { landlordId, currentStep, type, data } = body;
    if (!landlordId) return NextResponse.json({ error: 'landlordId required' }, { status: 400 });

    const existing = await db.select().from(onboardingSessions).where(eq(onboardingSessions.landlordId, landlordId));

    let session;
    if (existing.length > 0) {
      [session] = await db.update(onboardingSessions)
        .set({ currentStep, type, data, updatedAt: new Date() })
        .where(eq(onboardingSessions.landlordId, landlordId))
        .returning();
    } else {
      [session] = await db.insert(onboardingSessions)
        .values({ landlordId, currentStep, type, data })
        .returning();
    }

    return NextResponse.json({ data: session });
  } catch (e) {
    return NextResponse.json({ error: String(e) }, { status: 500 });
  }
}

export async function GET(req: NextRequest) {
  try {
    const landlordId = req.nextUrl.searchParams.get('landlordId');
    if (!landlordId) return NextResponse.json({ error: 'landlordId required' }, { status: 400 });

    const [session] = await db.select().from(onboardingSessions).where(eq(onboardingSessions.landlordId, landlordId));
    return NextResponse.json({ data: session || null });
  } catch (e) {
    return NextResponse.json({ error: String(e) }, { status: 500 });
  }
}
