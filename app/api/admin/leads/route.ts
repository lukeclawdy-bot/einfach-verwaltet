export const dynamic = "force-dynamic";

import { db, hasDatabase } from "@/lib/db";
import { leads } from "@/lib/db/schema";
import { desc } from "drizzle-orm";
import { NextResponse } from "next/server";

export async function GET() {
  if (!hasDatabase || !db) {
    return NextResponse.json({ error: "Database not available" }, { status: 500 });
  }

  try {
    const data = await db.query.leads.findMany({
      orderBy: desc(leads.createdAt),
    });

    return NextResponse.json({ leads: data });
  } catch (error) {
    console.error("Failed to fetch leads:", error);
    return NextResponse.json({ error: "Failed to fetch leads" }, { status: 500 });
  }
}
