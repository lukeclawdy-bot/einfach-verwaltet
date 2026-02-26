import { NextRequest, NextResponse } from 'next/server';
import { db } from '@/lib/db';
import { units, tenants, properties } from '@/lib/db/schema';
import { eq, and } from 'drizzle-orm';

export async function GET(req: NextRequest) {
  try {
    const propertyId = req.nextUrl.searchParams.get('propertyId');
    const landlordId = req.nextUrl.searchParams.get('landlordId');
    
    if (!propertyId && !landlordId) {
      return NextResponse.json({ error: 'propertyId or landlordId required' }, { status: 400 });
    }

    let query = db.select().from(units);
    
    if (propertyId) {
      query = query.where(eq(units.propertyId, propertyId)) as typeof query;
    }
    
    const rows = await query;

    // Enrich with tenant info if occupied
    const enriched = await Promise.all(rows.map(async (u) => {
      const tenant = u.occupied 
        ? (await db.select().from(tenants).where(eq(tenants.unitId, u.id)))[0]
        : null;
      return { 
        ...u, 
        tenantName: tenant ? `${tenant.firstName} ${tenant.lastName}` : null,
        tenantEmail: tenant?.email || null,
      };
    }));

    return NextResponse.json({ data: enriched });
  } catch (e) {
    return NextResponse.json({ error: String(e) }, { status: 500 });
  }
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { propertyId, designation, areaM2, floor, rooms, coldRentCents } = body;
    
    if (!propertyId || !designation) {
      return NextResponse.json({ error: 'propertyId and designation required' }, { status: 400 });
    }

    const [unit] = await db.insert(units).values({
      propertyId,
      designation,
      areaM2: areaM2 ? String(areaM2) : null,
      floor: floor || null,
      rooms: rooms ? String(rooms) : null,
      coldRentCents: coldRentCents || null,
      occupied: false,
    }).returning();

    return NextResponse.json({ data: unit }, { status: 201 });
  } catch (e) {
    return NextResponse.json({ error: String(e) }, { status: 500 });
  }
}
