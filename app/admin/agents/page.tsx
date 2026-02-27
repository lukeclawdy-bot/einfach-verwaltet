export const dynamic = "force-dynamic";

import { db, hasDatabase } from "@/lib/db";
import { aiActions, leads } from "@/lib/db/schema";
import { desc } from "drizzle-orm";
import { AgentsActivity } from "./AgentsActivity";

interface AIAction {
  id: string;
  createdAt: Date;
  type: string;
  title: string;
  status: string;
  landlordId: string;
}

async function getAgentsData() {
  if (!hasDatabase || !db) {
    return null;
  }

  try {
    const actions = await db.query.aiActions.findMany({
      orderBy: desc(aiActions.createdAt),
      limit: 20,
    }) as AIAction[];

    const leadsCount = await db.select({ count: leads.id }).from(leads);
    
    const lastLead = await db.query.leads.findFirst({
      orderBy: desc(leads.createdAt),
    });

    return {
      actions,
      health: {
        leadsCount: leadsCount.length,
        lastEmailSent: lastLead ? lastLead.createdAt : null,
      },
    };
  } catch (error) {
    console.error("Failed to fetch agents data:", error);
    return null;
  }
}

export default async function AdminAgentsPage() {
  const data = await getAgentsData();

  if (!data) {
    return (

        <div className="p-8">
          <div className="mb-8">
            <h1 className="text-2xl font-bold text-navy">AI Agenten</h1>
            <p className="text-text-light text-sm mt-1">
              Aktivitätsfeed und System-Status
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
          <h1 className="text-2xl font-bold text-navy">AI Agenten</h1>
          <p className="text-text-light text-sm mt-1">
            Aktivitätsfeed und System-Status
          </p>
        </div>

        <AgentsActivity actions={data.actions} health={data.health} />
      </div>

  );
}
