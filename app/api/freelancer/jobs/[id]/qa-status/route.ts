import { NextRequest, NextResponse } from "next/server";
import { db } from "@/lib/db";
import { jobs } from "@/lib/db/schema";
import { eq } from "drizzle-orm";

// Demo fallback data for jobs that don't exist in DB
const DEMO_QA: Record<string, { qaStatus: string; qaReasons: string[] }> = {
  "job-demo-1": { qaStatus: "approved", qaReasons: [] },
  "job-demo-2": { qaStatus: "needs-review", qaReasons: ["Foto 2 hat niedrige Konfidenz (62%): Beschlüsse nicht vollständig sichtbar"] },
  "job-demo-3": { qaStatus: "approved", qaReasons: [] },
};

export async function GET(
  _req: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id: jobId } = await params;

  // Demo fallback
  if (jobId.startsWith("job-demo-")) {
    const demo = DEMO_QA[jobId] || { qaStatus: "pending", qaReasons: [] };
    return NextResponse.json(demo);
  }

  try {
    const [job] = await db
      .select({ qaStatus: jobs.qaStatus, completionNotes: jobs.completionNotes })
      .from(jobs)
      .where(eq(jobs.id, jobId))
      .limit(1);

    if (!job) {
      return NextResponse.json({ error: "Job nicht gefunden." }, { status: 404 });
    }

    // Parse reasons from completionNotes if present
    const qaReasons: string[] = [];
    if (job.completionNotes?.startsWith("QA-Feedback:")) {
      const rawReasons = job.completionNotes.replace("QA-Feedback:", "").trim();
      qaReasons.push(...rawReasons.split(";").map((r) => r.trim()).filter(Boolean));
    }

    return NextResponse.json({
      qaStatus: job.qaStatus || "pending",
      qaReasons,
    });
  } catch {
    // DB unavailable — return pending
    return NextResponse.json({ qaStatus: "pending", qaReasons: [] });
  }
}
