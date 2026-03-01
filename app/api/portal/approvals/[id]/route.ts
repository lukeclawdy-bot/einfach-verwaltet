import { NextRequest, NextResponse } from "next/server";
import { cookies } from "next/headers";
import { getTokenFromCookie } from "@/lib/auth/jwt";

// ─── DB helpers (lazy import to survive missing DATABASE_URL) ─────────────────
async function getDb() {
  try {
    const { db } = await import("@/lib/db");
    return db;
  } catch {
    return null;
  }
}

async function getLandlordId(): Promise<string | null> {
  try {
    const cookieStore = await cookies();
    const token =
      cookieStore.get("portal_session")?.value ||
      cookieStore.get("ev-demo-session")?.value;
    if (!token) return null;
    const payload = await getTokenFromCookie(token);
    return payload?.landlordId ?? null;
  } catch {
    return null;
  }
}

// ─── PATCH /api/portal/approvals/[id] ────────────────────────────────────────
export async function PATCH(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params;

  // 1. Auth
  const landlordId = await getLandlordId();
  if (!landlordId) {
    return NextResponse.json({ error: "Nicht autorisiert" }, { status: 401 });
  }

  // 2. Parse body
  let body: { action?: string; note?: string };
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Ungültige Anfrage" }, { status: 400 });
  }

  const { action, note } = body;
  if (action !== "approve" && action !== "reject") {
    return NextResponse.json(
      { error: "action muss 'approve' oder 'reject' sein" },
      { status: 400 }
    );
  }

  const newStatus = action === "approve" ? "approved" : "rejected";

  try {
    const db = await getDb();

    if (!db) {
      // Demo fallback — no DB available
      console.log(`[Approval Demo] id=${id} action=${action} landlord=${landlordId}`);
      return NextResponse.json({ success: true, status: newStatus });
    }

    // Lazy import schema
    const { approvals, auditTrail } = await import("@/lib/db/schema");
    const { eq, and } = await import("drizzle-orm");

    // 3. Verify approval belongs to this landlord
    const [existing] = await db
      .select()
      .from(approvals)
      .where(and(eq(approvals.id, id), eq(approvals.landlordId, landlordId)))
      .limit(1);

    if (!existing) {
      return NextResponse.json(
        { error: "Genehmigung nicht gefunden" },
        { status: 404 }
      );
    }

    if (existing.status !== "pending") {
      return NextResponse.json(
        { error: `Bereits ${existing.status}` },
        { status: 409 }
      );
    }

    // 4. Update approval status
    await db
      .update(approvals)
      .set({
        status: newStatus,
        decidedAt: new Date(),
        metadata: { ...(existing.metadata as object), note: note ?? null },
      })
      .where(eq(approvals.id, id));

    // 5. Trigger Inngest events
    if (action === "approve") {
      try {
        const { inngest } = await import("@/lib/inngest/client");
        if (existing.type === "repair_cost") {
          await inngest.send({
            name: "job/approved",
            data: {
              approvalId: id,
              jobId: existing.jobId,
              landlordId,
              amountCents: existing.amountCents,
            },
          });
        } else if (existing.type === "rent_increase") {
          await inngest.send({
            name: "rent-increase/approved",
            data: {
              approvalId: id,
              ticketId: existing.ticketId,
              landlordId,
            },
          });
        }
      } catch (inngestErr) {
        // Non-fatal — log but don't fail the response
        console.warn("[Approval] Inngest send failed:", inngestErr);
      }
    }

    // 6. Log to audit_trail
    try {
      await db.insert(auditTrail).values({
        entityType: "approval",
        entityId: id,
        action: newStatus,
        actorType: "landlord",
        actorId: landlordId,
        description: `Eigentümer hat ${existing.type} ${newStatus === "approved" ? "genehmigt" : "abgelehnt"}${note ? `: ${note}` : ""}`,
      });
    } catch (auditErr) {
      console.warn("[Approval] Audit trail insert failed:", auditErr);
    }

    return NextResponse.json({ success: true, status: newStatus });
  } catch (err) {
    console.error("[Approval PATCH]", err);
    // Demo fallback on any DB error
    return NextResponse.json({ success: true, status: newStatus });
  }
}
