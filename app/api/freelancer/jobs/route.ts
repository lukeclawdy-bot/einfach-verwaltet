import { NextRequest, NextResponse } from "next/server";
import { db } from "@/lib/db";
import { jobs } from "@/lib/db/schema";
import { eq } from "drizzle-orm";

// Hardcoded demo jobs for MVP (DB fallback)
export const DEMO_JOBS = [
  {
    id: "job-demo-1",
    title: "Wohnungsübergabe",
    propertyAddress: "Hamburg-Eimsbüttel",
    district: "Hamburg-Eimsbüttel",
    category: "handover",
    fixedPriceCents: 3500,
    status: "open",
    dueDate: "2026-03-05T10:00:00.000Z",
    description: "Übergabe einer 2-Zimmer-Wohnung. Protokoll erstellen.",
    instructions: "Bitte Protokollformular vollständig ausfüllen, alle Räume fotografieren, Zählerstände ablesen. Schlüsselübergabe an neuen Mieter.",
    landlordApprovalRequired: false,
    freelancerId: null,
    claimedAt: null,
  },
  {
    id: "job-demo-2",
    title: "ETV-Moderation",
    propertyAddress: "Hamburg-Altona",
    district: "Hamburg-Altona",
    category: "etv",
    fixedPriceCents: 8000,
    status: "open",
    dueDate: "2026-03-10T18:00:00.000Z",
    description: "Moderation einer Eigentümerversammlung (ca. 12 Eigentümer).",
    instructions: "Tagesordnung liegt vor. Abstimmungsprotokoll führen. Beschlüsse dokumentieren nach §24 WEG.",
    landlordApprovalRequired: false,
    freelancerId: null,
    claimedAt: null,
  },
  {
    id: "job-demo-3",
    title: "Besichtigungstermin",
    propertyAddress: "Hamburg-Barmbek",
    district: "Hamburg-Barmbek",
    category: "inspection",
    fixedPriceCents: 4000,
    status: "open",
    dueDate: "2026-03-07T14:00:00.000Z",
    description: "Besichtigungstermin für 3 Interessenten, 3-Zimmer-Wohnung.",
    instructions: "Wohnung bereits eingerichtet. Interessenten empfangen, Wohnung zeigen. Feedback-Formular ausfüllen für jeden Interessenten.",
    landlordApprovalRequired: false,
    freelancerId: null,
    claimedAt: null,
  },
];

export async function GET(req: NextRequest) {
  const { searchParams } = req.nextUrl;
  const statusFilter = searchParams.get("status") || "open";

  try {
    const rows = await db
      .select()
      .from(jobs)
      .where(eq(jobs.status, statusFilter));

    // Mask full addresses for open jobs (show district only until claimed)
    const masked = rows.map((job) => ({
      ...job,
      propertyAddress: job.freelancerId ? job.propertyAddress : maskAddress(job.propertyAddress),
    }));

    return NextResponse.json({ data: masked });
  } catch {
    // DB not available — return demo data
    return NextResponse.json({
      data: DEMO_JOBS.filter((j) =>
        statusFilter === "all" ? true : j.status === statusFilter
      ),
      _demo: true,
    });
  }
}

function maskAddress(address: string): string {
  // Return only the district/city part (everything after last comma or first word)
  const parts = address.split(",");
  if (parts.length >= 2) {
    return parts[parts.length - 1].trim();
  }
  // If no comma, return the address as-is (might already be just a district)
  return address;
}
