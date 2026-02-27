export const dynamic = "force-dynamic";

import { db, hasDatabase } from "@/lib/db";
import { leads } from "@/lib/db/schema";
import { desc } from "drizzle-orm";
import { LeadCRMTable } from "./LeadCRMTable";

interface Lead {
  id: string;
  createdAt: Date;
  name: string;
  email: string;
  telefon: string | null;
  verwaltungstyp: string | null;
  einheiten: string | null;
  standort: string | null;
  situation: string | null;
  prioritaet: string | null;
  status: string | null;
  notes: string | null;
}

async function getLeads(): Promise<Lead[]> {
  if (!hasDatabase || !db) {
    return [];
  }

  try {
    const data = await db.query.leads.findMany({
      orderBy: desc(leads.createdAt),
    }) as Lead[];
    return data;
  } catch (error) {
    console.error("Failed to fetch leads:", error);
    return [];
  }
}

export default async function AdminLeadsPage() {
  const leadsData = await getLeads();

  return (

      <div className="p-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-2xl font-bold text-navy">Leads CRM</h1>
          <p className="text-text-light text-sm mt-1">
            Alle Anfragen verwalten und tracken
          </p>
        </div>

        {!hasDatabase ? (
          <div className="bg-amber/10 border border-amber/30 rounded-xl p-6 text-center">
            <p className="text-amber font-medium">Keine Verbindung zur Datenbank</p>
            <p className="text-text-light text-sm mt-2">
              Bitte überprüfe die DATABASE_URL Umgebungsvariable.
            </p>
          </div>
        ) : (
          <LeadCRMTable leads={leadsData} />
        )}
      </div>

  );
}
