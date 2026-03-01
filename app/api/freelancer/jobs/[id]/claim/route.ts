import { NextRequest, NextResponse } from "next/server";
import { db } from "@/lib/db";
import { jobs } from "@/lib/db/schema";
import { eq, and } from "drizzle-orm";
import { verifyFreelancerToken } from "@/lib/auth/freelancer-jwt";

export async function POST(
  req: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id: jobId } = await params;

  // Authenticate freelancer
  const token = req.cookies.get("freelancer_session")?.value;
  if (!token) {
    return NextResponse.json({ error: "Nicht autorisiert." }, { status: 401 });
  }

  let freelancerId: string;
  try {
    const payload = await verifyFreelancerToken(token);
    if (!payload?.freelancerId) {
      return NextResponse.json({ error: "Ungültige Sitzung." }, { status: 401 });
    }
    freelancerId = payload.freelancerId;
  } catch {
    return NextResponse.json({ error: "Ungültige Sitzung." }, { status: 401 });
  }

  // Handle demo jobs
  if (jobId.startsWith("job-demo-")) {
    return NextResponse.json({
      success: true,
      message: "Job erfolgreich angenommen. (Demo-Modus)",
      jobId,
      freelancerId,
    });
  }

  try {
    // Claim the job — only if it's still open
    const [updated] = await db
      .update(jobs)
      .set({
        status: "claimed",
        freelancerId,
        claimedAt: new Date(),
      })
      .where(and(eq(jobs.id, jobId), eq(jobs.status, "open")))
      .returning();

    if (!updated) {
      return NextResponse.json(
        { error: "Job nicht verfügbar oder bereits vergeben." },
        { status: 409 }
      );
    }

    return NextResponse.json({
      success: true,
      message: "Job erfolgreich angenommen.",
      data: updated,
    });
  } catch (err) {
    console.error("Claim job error:", err);
    return NextResponse.json(
      { error: "Interner Serverfehler." },
      { status: 500 }
    );
  }
}
