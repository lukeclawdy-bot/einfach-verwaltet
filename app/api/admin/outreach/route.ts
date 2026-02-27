export const dynamic = "force-dynamic";

import { db, hasDatabase } from "@/lib/db";
import { outreachContacts } from "@/lib/db/schema";
import { desc } from "drizzle-orm";
import { NextResponse } from "next/server";

export async function GET() {
  if (!hasDatabase || !db) {
    return NextResponse.json({ error: "Database not available" }, { status: 500 });
  }

  try {
    const data = await db.query.outreachContacts.findMany({
      orderBy: desc(outreachContacts.createdAt),
    });

    return NextResponse.json({ contacts: data });
  } catch (error) {
    console.error("Failed to fetch outreach contacts:", error);
    return NextResponse.json({ error: "Failed to fetch contacts" }, { status: 500 });
  }
}

export async function POST(request: Request) {
  if (!hasDatabase || !db) {
    return NextResponse.json({ error: "Database not available" }, { status: 500 });
  }

  try {
    const body = await request.json();
    const { name, company, email, phone, channel, status, source, notes } = body;

    const result = await db.insert(outreachContacts).values({
      name,
      company,
      email,
      phone,
      channel,
      status,
      source,
      notes,
      lastContactAt: new Date(),
    }).returning();

    return NextResponse.json({ success: true, contact: result[0] });
  } catch (error) {
    console.error("Failed to create outreach contact:", error);
    return NextResponse.json({ error: "Failed to create contact" }, { status: 500 });
  }
}
