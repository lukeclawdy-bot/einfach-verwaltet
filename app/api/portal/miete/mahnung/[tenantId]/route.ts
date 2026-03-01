import { NextRequest, NextResponse } from "next/server";
import { db } from "@/lib/db";
import { documents, tenants } from "@/lib/db/schema";
import { eq, desc } from "drizzle-orm";

// Mahnung level labels
const MAHNUNG_LABELS: Record<number, string> = {
  1: "Zahlungserinnerung",
  2: "1. Mahnung",
  3: "2. Mahnung",
  4: "Inkasso-Übergabe",
};

// GET handler for Mahnung history
export async function GET(_req: NextRequest, { params }: { params: Promise<{ tenantId: string }> }) {
  try {
    const { tenantId } = await params;

    if (!tenantId) {
      return NextResponse.json({ error: "tenantId required" }, { status: 400 });
    }

    // Get tenant info
    const [tenant] = await db.select().from(tenants).where(eq(tenants.id, tenantId));
    if (!tenant) {
      return NextResponse.json({ error: "Tenant not found" }, { status: 404 });
    }

    // Get all Mahnungen for this tenant
    const mahnungen = await db
      .select({
        id: documents.id,
        name: documents.name,
        type: documents.type,
        url: documents.url,
        createdAt: documents.createdAt,
        metadata: documents.metadata,
      })
      .from(documents)
      .where(eq(documents.tenantId, tenantId))
      .orderBy(desc(documents.createdAt));

    // Format the response
    const history = mahnungen.map((doc) => {
      const meta = (doc.metadata as Record<string, any>) || {};
      return {
        id: doc.id,
        type: doc.type,
        name: doc.name,
        createdAt: doc.createdAt?.toISOString(),
        url: doc.url,
        mahnungLevel: meta.mahnungLevel || 1,
        levelLabel: MAHNUNG_LABELS[meta.mahnungLevel || 1],
        daysOverdue: meta.daysOverdue || 0,
        amountCents: meta.amountCents || 0,
        verzugszinsenCents: meta.verzugszinsenCents || 0,
        status: meta.status || "pending_review",
        sentVia: meta.sentVia || "unknown",
        letterContent: meta.letterContent || null,
      };
    });

    // Calculate summary statistics
    const totalMahnungen = history.length;
    const byLevel: Record<number, number> = { 1: 0, 2: 0, 3: 0, 4: 0 };
    let totalAmountCents = 0;
    let totalVerzugszinsenCents = 0;

    for (const m of history) {
      byLevel[m.mahnungLevel] = (byLevel[m.mahnungLevel] || 0) + 1;
      totalAmountCents += m.amountCents;
      totalVerzugszinsenCents += m.verzugszinsenCents;
    }

    return NextResponse.json({
      success: true,
      data: {
        tenant: {
          id: tenant.id,
          name: `${tenant.firstName} ${tenant.lastName}`,
        },
        history,
        summary: {
          totalMahnungen,
          byLevel,
          totalAmountCents,
          totalVerzugszinsenCents,
          totalOutstandingCents: totalAmountCents + totalVerzugszinsenCents,
        },
      },
    });
  } catch (error) {
    console.error("Error fetching Mahnung history:", error);
    return NextResponse.json({ error: "Failed to fetch Mahnung history" }, { status: 500 });
  }
}
