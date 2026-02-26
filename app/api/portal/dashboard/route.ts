import { NextRequest, NextResponse } from 'next/server';
import { db } from '@/lib/db';
import { properties, units, tickets, aiActions, financialTransactions } from '@/lib/db/schema';
import { eq, and, count, sum, desc } from 'drizzle-orm';

export async function GET(req: NextRequest) {
  try {
    const landlordId = req.nextUrl.searchParams.get('landlordId');
    if (!landlordId) return NextResponse.json({ error: 'landlordId required' }, { status: 400 });

    // Properties
    const [propCount] = await db.select({ count: count() }).from(properties)
      .where(eq(properties.landlordId, landlordId));

    // Units
    const props = await db.select({ id: properties.id }).from(properties)
      .where(eq(properties.landlordId, landlordId));
    const propIds = props.map(p => p.id);

    let totalUnits = 0;
    let occupiedUnits = 0;
    for (const pid of propIds) {
      const [total] = await db.select({ count: count() }).from(units).where(eq(units.propertyId, pid));
      const [occupied] = await db.select({ count: count() }).from(units)
        .where(and(eq(units.propertyId, pid), eq(units.occupied, true)));
      totalUnits += Number(total.count);
      occupiedUnits += Number(occupied.count);
    }

    // Tickets
    const [openTickets] = await db.select({ count: count() }).from(tickets)
      .where(and(eq(tickets.landlordId, landlordId), eq(tickets.status, 'open')));

    // AI Actions
    const topActions = await db.select().from(aiActions)
      .where(and(eq(aiActions.landlordId, landlordId), eq(aiActions.status, 'pending')))
      .orderBy(desc(aiActions.urgency), desc(aiActions.createdAt))
      .limit(3);

    const [pendingActionsCount] = await db.select({ count: count() }).from(aiActions)
      .where(and(eq(aiActions.landlordId, landlordId), eq(aiActions.status, 'pending')));

    // Financial — rent this month
    const now = new Date();
    const monthStart = new Date(now.getFullYear(), now.getMonth(), 1);
    const [rentThisMonth] = await db.select({ total: sum(financialTransactions.amountCents) })
      .from(financialTransactions)
      .where(and(
        eq(financialTransactions.landlordId, landlordId),
        eq(financialTransactions.type, 'rent_received'),
        eq(financialTransactions.status, 'confirmed'),
      ));

    return NextResponse.json({
      data: {
        propertiesCount: Number(propCount.count),
        totalUnits,
        occupiedUnits,
        occupancyRate: totalUnits > 0 ? Math.round((occupiedUnits / totalUnits) * 100) : 0,
        openTicketsCount: Number(openTickets.count),
        pendingActionsCount: Number(pendingActionsCount.count),
        rentThisMonthCents: Number(rentThisMonth?.total || 0),
        topAiActions: topActions,
      },
    });
  } catch (e) {
    return NextResponse.json({ error: String(e) }, { status: 500 });
  }
}
