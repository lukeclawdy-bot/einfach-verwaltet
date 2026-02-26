import { NextRequest, NextResponse } from "next/server";
import { db } from "@/lib/db";
import { tenants, units, properties, financialTransactions, documents } from "@/lib/db/schema";
import { eq, and, gte, isNull, desc, sql } from "drizzle-orm";

export async function GET(req: NextRequest) {
  try {
    const { searchParams } = new URL(req.url);
    const landlordId = searchParams.get("landlordId");
    const filter = searchParams.get("filter"); // all | paid | pending | overdue

    if (!landlordId) {
      return NextResponse.json({ error: "landlordId required" }, { status: 400 });
    }

    // Get all properties for this landlord
    const props = await db.select({ id: properties.id }).from(properties).where(eq(properties.landlordId, landlordId));
    const propIds = props.map((p) => p.id);

    if (propIds.length === 0) {
      return NextResponse.json({
        items: [],
        stats: {
          totalRentRollCents: 0,
          collectedThisMonthCents: 0,
          outstandingCents: 0,
          collectionRate: 0,
          overdueCount: 0,
        },
      });
    }

    // Get all units with tenants for these properties
    const unitsWithTenants = await db
      .select({
        unit: units,
        tenant: tenants,
        property: properties,
      })
      .from(units)
      .innerJoin(tenants, eq(tenants.unitId, units.id))
      .innerJoin(properties, eq(properties.id, units.propertyId))
      .where(and(eq(tenants.active, true), sql`${units.propertyId} IN (${sql.join(propIds)}))`));

    const today = new Date();
    const firstOfMonth = new Date(today.getFullYear(), today.getMonth(), 1);
    const dueDate = new Date(today.getFullYear(), today.getMonth(), 3); // 3rd of month

    // Get all rent payments for this month
    const rentPayments = await db
      .select({
        unitId: financialTransactions.unitId,
        amountCents: financialTransactions.amountCents,
        paidAt: financialTransactions.paidAt,
      })
      .from(financialTransactions)
      .where(
        and(
          eq(financialTransactions.landlordId, landlordId),
          eq(financialTransactions.type, "rent_received"),
          gte(financialTransactions.paidAt, firstOfMonth)
        )
      );

    // Get all Mahnungen (as documents)
    const mahnungen = await db
      .select({
        tenantId: documents.tenantId,
        createdAt: documents.createdAt,
        metadata: documents.metadata,
      })
      .from(documents)
      .where(and(eq(documents.landlordId, landlordId), eq(documents.type, "mahnung")))
      .orderBy(desc(documents.createdAt));

    // Build rent collection items
    const items = [];
    let totalRentRollCents = 0;
    let collectedThisMonthCents = 0;
    let outstandingCents = 0;
    let overdueCount = 0;

    for (const { unit, tenant, property } of unitsWithTenants) {
      if (!unit.coldRentCents) continue;

      const coldRentCents = Number(unit.coldRentCents) * 100; // Convert to cents
      totalRentRollCents += coldRentCents;

      // Check if rent was paid this month
      const payment = rentPayments.find((p) => p.unitId === unit.id);
      const isPaid = !!payment;

      if (isPaid && payment) {
        collectedThisMonthCents += Number(payment.amountCents);
      } else {
        outstandingCents += coldRentCents;
      }

      // Calculate days overdue
      let daysOverdue = 0;
      let paymentStatus: "paid" | "overdue" | "pending" = isPaid ? "paid" : "pending";

      if (!isPaid && today > dueDate) {
        daysOverdue = Math.floor((today.getTime() - dueDate.getTime()) / (1000 * 60 * 60 * 24));
        paymentStatus = daysOverdue > 0 ? "overdue" : "pending";
        if (daysOverdue > 0) overdueCount++;
      }

      // Determine Mahnung level based on days overdue
      let mahnungLevel = 0;
      if (daysOverdue >= 1 && daysOverdue <= 7) mahnungLevel = 1; // Zahlungserinnerung
      else if (daysOverdue >= 8 && daysOverdue <= 30) mahnungLevel = 2; // 1. Mahnung
      else if (daysOverdue >= 31 && daysOverdue <= 60) mahnungLevel = 3; // 2. Mahnung
      else if (daysOverdue > 60) mahnungLevel = 4; // Inkasso

      // Get Mahnung history for this tenant
      const tenantMahnungen = mahnungen.filter((m) => m.tenantId === tenant.id);
      const mahnungCount = tenantMahnungen.length;
      const lastMahnung = tenantMahnungen[0];

      // If mahnungen exist, use the highest level sent
      if (tenantMahnungen.length > 0 && lastMahnung?.metadata) {
        const lastLevel = (lastMahnung.metadata as any)?.mahnungLevel || 1;
        // Only escalate if calculated level is higher
        mahnungLevel = Math.max(mahnungLevel, lastLevel);
      }

      const item = {
        tenantId: tenant.id,
        tenantName: `${tenant.firstName} ${tenant.lastName}`,
        propertyAddress: property.address,
        unitDesignation: unit.designation,
        coldRentCents,
        dueDate: dueDate.toISOString(),
        paymentStatus,
        daysOverdue,
        mahnungLevel,
        lastMahnungDate: lastMahnung?.createdAt?.toISOString(),
        mahnungCount,
      };

      // Apply filter if specified
      if (filter === "overdue" && paymentStatus !== "overdue") continue;
      if (filter === "paid" && paymentStatus !== "paid") continue;
      if (filter === "pending" && paymentStatus !== "pending") continue;

      items.push(item);
    }

    const collectionRate = totalRentRollCents > 0 ? Math.round((collectedThisMonthCents / totalRentRollCents) * 100) : 0;

    return NextResponse.json({
      items,
      stats: {
        totalRentRollCents,
        collectedThisMonthCents,
        outstandingCents,
        collectionRate,
        overdueCount,
      },
    });
  } catch (error) {
    console.error("Error fetching rent collection data:", error);
    return NextResponse.json({ error: "Failed to fetch rent collection data" }, { status: 500 });
  }
}
