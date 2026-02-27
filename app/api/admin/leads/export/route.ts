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

    // Generate CSV
    const headers = [
      "ID",
      "Datum",
      "Name",
      "E-Mail",
      "Telefon",
      "Verwaltungstyp",
      "Einheiten",
      "Standort",
      "Situation",
      "Priorität",
      "Status",
      "Notizen",
    ];

    const rows = data.map((lead) => [
      lead.id,
      new Date(lead.createdAt).toISOString(),
      lead.name,
      lead.email,
      lead.telefon || "",
      lead.verwaltungstyp || "",
      lead.einheiten || "",
      lead.standort || "",
      lead.situation || "",
      lead.prioritaet || "",
      lead.status || "",
      lead.notes || "",
    ]);

    const csvContent = [
      headers.join(";"),
      ...rows.map((row) =>
        row
          .map((cell) => {
            const cellStr = String(cell);
            if (cellStr.includes(";") || cellStr.includes('"')) {
              return `"${cellStr.replace(/"/g, '""')}"`;
            }
            return cellStr;
          })
          .join(";")
      ),
    ].join("\n");

    return new NextResponse(csvContent, {
      headers: {
        "Content-Type": "text/csv; charset=utf-8",
        "Content-Disposition": `attachment; filename="leads-${new Date().toISOString().split("T")[0]}.csv"`,
      },
    });
  } catch (error) {
    console.error("Failed to export leads:", error);
    return NextResponse.json({ error: "Failed to export leads" }, { status: 500 });
  }
}
