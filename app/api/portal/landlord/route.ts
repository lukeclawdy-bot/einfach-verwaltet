import { NextRequest, NextResponse } from 'next/server';
import { db } from '@/lib/db';
import { landlords, properties, tickets } from '@/lib/db/schema';
import { eq, count } from 'drizzle-orm';

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { email, name, type, communicationChannel } = body;
    if (!email) return NextResponse.json({ error: 'email required' }, { status: 400 });

    const [landlord] = await db.insert(landlords).values({
      email, name, type: type || 'private', communicationChannel: communicationChannel || 'email',
    }).onConflictDoNothing().returning();

    if (!landlord) {
      // Already exists — return existing
      const [existing] = await db.select().from(landlords).where(eq(landlords.email, email));
      return NextResponse.json({ data: existing });
    }

    return NextResponse.json({ data: landlord }, { status: 201 });
  } catch (e) {
    return NextResponse.json({ error: String(e) }, { status: 500 });
  }
}

export async function GET(req: NextRequest) {
  try {
    const email = req.nextUrl.searchParams.get('email');
    const id = req.nextUrl.searchParams.get('id');
    if (!email && !id) return NextResponse.json({ error: 'email or id required' }, { status: 400 });

    const [landlord] = email
      ? await db.select().from(landlords).where(eq(landlords.email, email))
      : await db.select().from(landlords).where(eq(landlords.id, id!));

    if (!landlord) return NextResponse.json({ error: 'not found' }, { status: 404 });

    const [propCount] = await db.select({ count: count() }).from(properties).where(eq(properties.landlordId, landlord.id));
    const [ticketCount] = await db.select({ count: count() }).from(tickets).where(eq(tickets.landlordId, landlord.id));

    return NextResponse.json({ data: { ...landlord, propertiesCount: propCount.count, ticketsCount: ticketCount.count } });
  } catch (e) {
    return NextResponse.json({ error: String(e) }, { status: 500 });
  }
}
