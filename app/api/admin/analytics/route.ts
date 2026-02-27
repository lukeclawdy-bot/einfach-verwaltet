export const dynamic = "force-dynamic";

import { db, hasDatabase } from "@/lib/db";
import { leads } from "@/lib/db/schema";
import { desc, sql } from "drizzle-orm";
import { NextResponse } from "next/server";
import { subDays, format } from "date-fns";

export async function GET() {
  if (!hasDatabase || !db) {
    return NextResponse.json({ error: "Database not available" }, { status: 500 });
  }

  try {
    const allLeads = await db.query.leads.findMany({
      orderBy: desc(leads.createdAt),
    });

    // Leads by day (last 30 days)
    const leadsByDay = [];
    for (let i = 29; i >= 0; i--) {
      const date = subDays(new Date(), i);
      const dateStr = format(date, "yyyy-MM-dd");
      const displayStr = format(date, "dd.MM");
      const count = allLeads.filter(
        (l) => format(new Date(l.createdAt), "yyyy-MM-dd") === dateStr
      ).length;
      leadsByDay.push({ date: displayStr, count });
    }

    // Standort distribution
    const standortCounts: Record<string, number> = {};
    allLeads.forEach((lead) => {
      const standort = lead.standort || "Unbekannt";
      standortCounts[standort] = (standortCounts[standort] || 0) + 1;
    });

    // Verwaltungstyp split
    const typCounts = { WEG: 0, Miet: 0, Beides: 0 };
    allLeads.forEach((lead) => {
      const typ = lead.verwaltungstyp?.toLowerCase() || "";
      if (typ.includes("weg")) typCounts.WEG++;
      else if (typ.includes("miet")) typCounts.Miet++;
      else typCounts.Beides++;
    });

    // Einheiten distribution
    const einheitenBuckets = {
      "1-3": 0,
      "4-10": 0,
      "11-30": 0,
      "31-100": 0,
      "100+": 0,
    };
    allLeads.forEach((lead) => {
      const num = parseInt(lead.einheiten?.match(/(\d+)/)?.[1] || "0");
      if (num >= 1 && num <= 3) einheitenBuckets["1-3"]++;
      else if (num >= 4 && num <= 10) einheitenBuckets["4-10"]++;
      else if (num >= 11 && num <= 30) einheitenBuckets["11-30"]++;
      else if (num >= 31 && num <= 100) einheitenBuckets["31-100"]++;
      else if (num > 100) einheitenBuckets["100+"]++;
    });

    // Status funnel
    const statusCounts = {
      new: 0,
      contacted: 0,
      demo_booked: 0,
      proposal_sent: 0,
      won: 0,
      lost: 0,
    };
    allLeads.forEach((lead) => {
      const status = lead.status || "new";
      if (statusCounts[status as keyof typeof statusCounts] !== undefined) {
        statusCounts[status as keyof typeof statusCounts]++;
      }
    });

    return NextResponse.json({
      total: allLeads.length,
      leadsByDay,
      standortDistribution: standortCounts,
      verwaltungstypSplit: typCounts,
      einheitenDistribution: einheitenBuckets,
      statusFunnel: statusCounts,
    });
  } catch (error) {
    console.error("Failed to fetch analytics:", error);
    return NextResponse.json({ error: "Failed to fetch analytics" }, { status: 500 });
  }
}
