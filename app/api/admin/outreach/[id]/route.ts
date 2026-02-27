export const dynamic = "force-dynamic";

import { db, hasDatabase } from "@/lib/db";
import { outreachContacts } from "@/lib/db/schema";
import { eq } from "drizzle-orm";
import { NextResponse } from "next/server";

export async function PATCH(
  request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  if (!hasDatabase || !db) {
    return NextResponse.json({ error: "Database not available" }, { status: 500 });
  }

  const { id } = await params;

  try {
    const body = await request.json();
    const { status, notes } = body;

    const updateData: { status?: string; notes?: string; lastContactAt?: Date } = {};
    if (status !== undefined) {
      updateData.status = status;
      updateData.lastContactAt = new Date();
    }
    if (notes !== undefined) updateData.notes = notes;

    await db.update(outreachContacts)
      .set(updateData)
      .where(eq(outreachContacts.id, id));

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Failed to update outreach contact:", error);
    return NextResponse.json({ error: "Failed to update contact" }, { status: 500 });
  }
}
