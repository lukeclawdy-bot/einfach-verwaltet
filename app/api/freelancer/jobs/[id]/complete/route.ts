import { NextRequest, NextResponse } from "next/server";
import { db } from "@/lib/db";
import { jobs } from "@/lib/db/schema";
import { eq, and } from "drizzle-orm";
import { verifyFreelancerToken } from "@/lib/auth/freelancer-jwt";
import { inngest } from "@/lib/inngest/client";

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

  const body = await req.json().catch(() => ({}));
  const { notes, photoUrls } = body as {
    notes?: string;
    photoUrls?: string[];
  };

  // Handle demo jobs
  if (jobId.startsWith("job-demo-")) {
    return NextResponse.json({
      success: true,
      message: "Job als abgeschlossen gemeldet. (Demo-Modus)",
      jobId,
    });
  }

  try {
    const [updated] = await db
      .update(jobs)
      .set({
        status: "completed",
        completedAt: new Date(),
        completionNotes: notes || null,
        completionPhotoUrls: photoUrls || [],
      })
      .where(
        and(
          eq(jobs.id, jobId),
          eq(jobs.freelancerId, freelancerId)
        )
      )
      .returning();

    if (!updated) {
      return NextResponse.json(
        { error: "Job nicht gefunden oder keine Berechtigung." },
        { status: 404 }
      );
    }

    // Fire Inngest job/completed event for photo QA
    await inngest.send({
      name: "job/completed",
      data: {
        jobId: updated.id,
        freelancerId,
        photoUrls: photoUrls || [],
        jobType: updated.category || "unknown",
        jobDescription: updated.description || updated.title,
      },
    });

    return NextResponse.json({
      success: true,
      message: "Job als abgeschlossen gemeldet.",
      data: updated,
    });
  } catch (err) {
    console.error("Complete job error:", err);
    return NextResponse.json(
      { error: "Interner Serverfehler." },
      { status: 500 }
    );
  }
}
