export const dynamic = "force-dynamic";

import { db, hasDatabase } from "@/lib/db";
import { outreachContacts } from "@/lib/db/schema";
import { desc } from "drizzle-orm";
import { AdminLayout } from "../components/AdminLayout";
import { OutreachTable } from "./OutreachTable";

interface OutreachContact {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  name: string;
  company: string | null;
  email: string | null;
  phone: string | null;
  channel: string;
  status: string;
  lastContactAt: Date | null;
  notes: string | null;
  source: string | null;
}

async function getOutreachContacts(): Promise<OutreachContact[]> {
  if (!hasDatabase || !db) {
    return [];
  }

  try {
    const data = await db.query.outreachContacts.findMany({
      orderBy: desc(outreachContacts.createdAt),
    }) as OutreachContact[];
    return data;
  } catch (error) {
    console.error("Failed to fetch outreach contacts:", error);
    return [];
  }
}

export default async function AdminOutreachPage() {
  const contacts = await getOutreachContacts();

  return (
    <AdminLayout>
      <div className="p-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-2xl font-bold text-navy">Outreach Tracker</h1>
          <p className="text-text-light text-sm mt-1">
            Manuelles CRM für Vertriebsaktivitäten
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
          <OutreachTable contacts={contacts} />
        )}
      </div>
    </AdminLayout>
  );
}
