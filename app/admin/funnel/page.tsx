export const dynamic = "force-dynamic";

import { db, hasDatabase } from "@/lib/db";
import { leads } from "@/lib/db/schema";
import { desc } from "drizzle-orm";
import { FunnelCharts } from "./FunnelCharts";
import { subDays, format } from "date-fns";

interface Lead {
  id: string;
  createdAt: Date;
  verwaltungstyp: string | null;
  einheiten: string | null;
  standort: string | null;
  status: string | null;
}

async function getAnalyticsData() {
  if (!hasDatabase || !db) {
    return null;
  }

  try {
    const allLeads = await db.query.leads.findMany({
      orderBy: desc(leads.createdAt),
    }) as Lead[];

    // Group leads by day for last 30 days
    const leadsByDay: { date: string; count: number }[] = [];
    for (let i = 29; i >= 0; i--) {
      const date = subDays(new Date(), i);
      const dateStr = format(date, "dd.MM");
      const count = allLeads.filter(
        (l) => format(new Date(l.createdAt), "yyyy-MM-dd") === format(date, "yyyy-MM-dd")
      ).length;
      leadsByDay.push({ date: dateStr, count });
    }

    return {
      leads: allLeads,
      leadsByDay,
    };
  } catch (error) {
    console.error("Failed to fetch analytics data:", error);
    return null;
  }
}

export default async function AdminFunnelPage() {
  const data = await getAnalyticsData();

  if (!data) {
    return (

        <div className="p-8">
          <div className="mb-8">
            <h1 className="text-2xl font-bold text-navy">Funnel Analytics</h1>
            <p className="text-text-light text-sm mt-1">
              Marketing- und Conversion-Metriken
            </p>
          </div>
          <div className="bg-amber/10 border border-amber/30 rounded-xl p-6 text-center">
            <p className="text-amber font-medium">Keine Verbindung zur Datenbank</p>
            <p className="text-text-light text-sm mt-2">
              Bitte überprüfe die DATABASE_URL Umgebungsvariable.
            </p>
          </div>
        </div>

    );
  }

  return (

      <div className="p-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-2xl font-bold text-navy">Funnel Analytics</h1>
          <p className="text-text-light text-sm mt-1">
            Marketing- und Conversion-Metriken
          </p>
        </div>

        <FunnelCharts data={data} />
      </div>

  );
}
