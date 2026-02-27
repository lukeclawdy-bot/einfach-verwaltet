/**
 * DATEV Export API Route
 *
 * GET /portal/api/datev/export?from=2025-01-01&to=2025-01-31
 *
 * Returns a DATEV Buchungsstapel CSV file for the given date range.
 * Auth is enforced by middleware protecting /portal/*.
 */

import { NextRequest, NextResponse } from "next/server";
import { headers, cookies } from "next/headers";
import { getTokenFromCookie } from "@/lib/auth/jwt";
import { generateDatevExport } from "@/lib/datev/export";

async function getLandlordId(): Promise<string | null> {
  const hdrs = await headers();
  const fromHeader = hdrs.get("x-landlord-id");
  const isDemo = hdrs.get("x-is-demo") === "true";
  if (isDemo) return null; // No DATEV export in demo mode

  if (fromHeader) return fromHeader;

  const cookieStore = await cookies();
  const token = cookieStore.get("portal_session")?.value;
  if (token) {
    const payload = await getTokenFromCookie(token);
    if (payload?.landlordId && !payload.isDemo) return payload.landlordId as string;
  }
  return null;
}

export async function GET(req: NextRequest) {
  const landlordId = await getLandlordId();
  if (!landlordId) {
    return NextResponse.json({ error: "Unauthorized or demo mode" }, { status: 401 });
  }

  const { searchParams } = req.nextUrl;
  const fromParam = searchParams.get("from");
  const toParam = searchParams.get("to");

  if (!fromParam || !toParam) {
    return NextResponse.json(
      { error: "Missing required params: from, to (format: YYYY-MM-DD)" },
      { status: 400 }
    );
  }

  const from = new Date(fromParam);
  const to = new Date(toParam);
  to.setHours(23, 59, 59, 999); // Include full last day

  if (isNaN(from.getTime()) || isNaN(to.getTime())) {
    return NextResponse.json({ error: "Invalid date format" }, { status: 400 });
  }

  if (from > to) {
    return NextResponse.json({ error: "from must be before to" }, { status: 400 });
  }

  try {
    const result = await generateDatevExport(landlordId, from, to, {
      beraterNr: process.env.DATEV_BERATER_NR || "00000",
      mandantNr: process.env.DATEV_MANDANT_NR || "00001",
      sachkontenlänge: 4,
    });

    const filename = `DATEV_Buchungsjournal_${from.toISOString().substring(0, 7)}.csv`;

    // DATEV CSV must be Windows-1252 encoded; here we use UTF-8 with BOM as fallback
    const bom = "\uFEFF";
    const csvWithBom = bom + result.csv;

    return new NextResponse(csvWithBom, {
      status: 200,
      headers: {
        "Content-Type": "text/csv; charset=utf-8",
        "Content-Disposition": `attachment; filename="${filename}"`,
        "X-Transaction-Count": String(result.transactionCount),
        "X-Total-Income": String(result.totalIncome),
        "X-Total-Expenses": String(result.totalExpenses),
      },
    });
  } catch (error) {
    console.error("[datev/export] Error generating export:", error);
    return NextResponse.json(
      { error: "Failed to generate DATEV export" },
      { status: 500 }
    );
  }
}

// Preview endpoint — returns JSON list of transactions for display in UI
export async function POST(req: NextRequest) {
  const landlordId = await getLandlordId();
  if (!landlordId) {
    return NextResponse.json({ error: "Unauthorized or demo mode" }, { status: 401 });
  }

  const body = await req.json();
  const { from: fromParam, to: toParam } = body;

  if (!fromParam || !toParam) {
    return NextResponse.json({ error: "Missing from/to in request body" }, { status: 400 });
  }

  const from = new Date(fromParam);
  const to = new Date(toParam);
  to.setHours(23, 59, 59, 999);

  try {
    const result = await generateDatevExport(landlordId, from, to);

    return NextResponse.json({
      transactionCount: result.transactionCount,
      totalIncome: result.totalIncome,
      totalExpenses: result.totalExpenses,
      rows: result.rows,
    });
  } catch (error) {
    console.error("[datev/export] Preview error:", error);
    return NextResponse.json({ error: "Failed to fetch preview" }, { status: 500 });
  }
}
