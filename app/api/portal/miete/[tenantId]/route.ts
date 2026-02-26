import { NextRequest, NextResponse } from "next/server";
import { db } from "@/lib/db";
import { financialTransactions, tenants, units, properties } from "@/lib/db/schema";
import { eq, and } from "drizzle-orm";

// POST handler for marking rent as paid (form action)
export async function POST(req: NextRequest) {
  try {
    const formData = await req.formData();
    const tenantId = formData.get("tenantId") as string;
    const action = formData.get("action") as string;
    const redirect = (formData.get("redirect") as string) || "/portal/miete";

    if (!tenantId || action !== "mark_paid") {
      return NextResponse.json({ error: "Invalid request" }, { status: 400 });
    }

    // Get tenant info
    const [tenant] = await db.select().from(tenants).where(eq(tenants.id, tenantId));
    if (!tenant) {
      return NextResponse.json({ error: "Tenant not found" }, { status: 404 });
    }

    // Get unit info
    const [unit] = await db.select().from(units).where(eq(units.id, tenant.unitId));
    if (!unit || !unit.coldRentCents) {
      return NextResponse.json({ error: "Unit not found or no rent set" }, { status: 404 });
    }

    // Get property for landlordId
    const [property] = await db.select().from(properties).where(eq(properties.id, unit.propertyId));
    if (!property) {
      return NextResponse.json({ error: "Property not found" }, { status: 404 });
    }

    const coldRentCents = Number(unit.coldRentCents) * 100;

    // Check if payment already exists for this month
    const today = new Date();
    const firstOfMonth = new Date(today.getFullYear(), today.getMonth(), 1);

    const [existingPayment] = await db
      .select()
      .from(financialTransactions)
      .where(
        and(
          eq(financialTransactions.tenantId, tenantId),
          eq(financialTransactions.type, "rent_received"),
          eq(financialTransactions.status, "confirmed")
        )
      )
      .limit(1);

    if (existingPayment) {
      // Payment already recorded - redirect with message
      return NextResponse.redirect(new URL(`${redirect}?message=already-paid`, req.url));
    }

    // Create financial transaction for rent received
    await db.insert(financialTransactions).values({
      landlordId: property.landlordId,
      propertyId: unit.propertyId,
      unitId: unit.id,
      tenantId: tenant.id,
      type: "rent_received",
      amountCents: coldRentCents,
      currency: "EUR",
      status: "confirmed",
      description: `Miete ${today.toLocaleDateString("de-DE", { month: "long", year: "numeric" })}`,
      paidAt: new Date(),
      metadata: {
        paymentMethod: "bank_transfer",
        markedManually: true,
        markedBy: "portal",
      },
    });

    // Redirect back to the page
    return NextResponse.redirect(new URL(`${redirect}?success=payment-recorded`, req.url));
  } catch (error) {
    console.error("Error marking payment as paid:", error);
    return NextResponse.json({ error: "Failed to record payment" }, { status: 500 });
  }
}

// PATCH handler for API calls
export async function PATCH(req: NextRequest, { params }: { params: Promise<{ tenantId: string }> }) {
  try {
    const { tenantId } = await params;
    const body = await req.json();
    const { action, amountCents } = body;

    if (!tenantId || action !== "mark_paid") {
      return NextResponse.json({ error: "Invalid request" }, { status: 400 });
    }

    // Get tenant info
    const [tenant] = await db.select().from(tenants).where(eq(tenants.id, tenantId));
    if (!tenant) {
      return NextResponse.json({ error: "Tenant not found" }, { status: 404 });
    }

    // Get unit info
    const [unit] = await db.select().from(units).where(eq(units.id, tenant.unitId));
    if (!unit) {
      return NextResponse.json({ error: "Unit not found" }, { status: 404 });
    }

    // Get property for landlordId
    const [property] = await db.select().from(properties).where(eq(properties.id, unit.propertyId));
    if (!property) {
      return NextResponse.json({ error: "Property not found" }, { status: 404 });
    }

    const rentCents = amountCents || (unit.coldRentCents ? Number(unit.coldRentCents) * 100 : 0);

    // Create financial transaction for rent received
    const today = new Date();
    await db.insert(financialTransactions).values({
      landlordId: property.landlordId,
      propertyId: unit.propertyId,
      unitId: unit.id,
      tenantId: tenant.id,
      type: "rent_received",
      amountCents: rentCents,
      currency: "EUR",
      status: "confirmed",
      description: `Miete ${today.toLocaleDateString("de-DE", { month: "long", year: "numeric" })}`,
      paidAt: new Date(),
      metadata: {
        paymentMethod: "bank_transfer",
        markedManually: true,
        markedBy: "portal-api",
      },
    });

    return NextResponse.json({
      success: true,
      message: "Payment recorded successfully",
      data: {
        tenantId,
        amountCents: rentCents,
        paidAt: today.toISOString(),
      },
    });
  } catch (error) {
    console.error("Error marking payment as paid:", error);
    return NextResponse.json({ error: "Failed to record payment" }, { status: 500 });
  }
}
