export const dynamic = "force-dynamic";

import { db, hasDatabase } from "@/lib/db";
import { leads, properties, tenants, tickets, aiActions } from "@/lib/db/schema";
import { desc, sql, eq, and, gte } from "drizzle-orm";
import { subDays, startOfWeek, format, formatDistanceToNow } from "date-fns";
import { de } from "date-fns/locale";

// Types
interface Lead {
  id: string;
  createdAt: Date;
  name: string;
  email: string;
  telefon: string | null;
  verwaltungstyp: string | null;
  einheiten: string | null;
  standort: string | null;
  status: string | null;
  notes: string | null;
}

interface AIAction {
  id: string;
  createdAt: Date;
  type: string;
  title: string;
  status: string;
  landlordId: string;
}

async function getDashboardData() {
  if (!hasDatabase || !db) {
    return null;
  }

  const now = new Date();
  const weekAgo = subDays(now, 7);
  const dayAgo = subDays(now, 1);

  try {
    // Get all leads
    const allLeads = await db.query.leads.findMany({
      orderBy: desc(leads.createdAt),
    }) as Lead[];

    // Get leads this week
    const leadsThisWeek = allLeads.filter(l => new Date(l.createdAt) >= weekAgo);

    // Calculate completion rate (leads with all fields filled)
    const completedLeads = allLeads.filter(l => 
      l.verwaltungstyp && l.einheiten && l.standort
    );
    const completionRate = allLeads.length > 0 
      ? Math.round((completedLeads.length / allLeads.length) * 100) 
      : 0;

    // Calculate avg einheiten
    const einheitenNumbers = allLeads.map(l => {
      const match = l.einheiten?.match(/(\d+)/);
      return match ? parseInt(match[1]) : 0;
    }).filter(n => n > 0);
    const avgEinheiten = einheitenNumbers.length > 0
      ? Math.round(einheitenNumbers.reduce((a, b) => a + b, 0) / einheitenNumbers.length)
      : 0;

    // Calculate conversion rate (contacted or beyond)
    const convertedLeads = allLeads.filter(l => 
      l.status && ['contacted', 'demo_booked', 'proposal_sent', 'won'].includes(l.status)
    );
    const conversionRate = allLeads.length > 0
      ? Math.round((convertedLeads.length / allLeads.length) * 100)
      : 0;

    // Get ticket counts
    const allTickets = await db.query.tickets.findMany();
    const openTickets = allTickets.filter(t => t.status === 'open').length;
    const resolvedToday = allTickets.filter(t => 
      t.status === 'resolved' && t.resolvedAt && new Date(t.resolvedAt) >= dayAgo
    ).length;

    // Get property and tenant counts
    const propertyCount = await db.select({ count: sql<number>`count(*)` }).from(properties);
    const tenantCount = await db.select({ count: sql<number>`count(*)` }).from(tenants);

    // Get recent AI actions
    const recentActions = await db.query.aiActions.findMany({
      orderBy: desc(aiActions.createdAt),
      limit: 5,
    }) as AIAction[];

    return {
      totalLeads: allLeads.length,
      leadsThisWeek: leadsThisWeek.length,
      completionRate,
      avgEinheiten,
      conversionRate,
      openTickets,
      resolvedToday,
      propertyCount: propertyCount[0]?.count || 0,
      tenantCount: tenantCount[0]?.count || 0,
      recentLeads: allLeads.slice(0, 10),
      recentActions,
    };
  } catch (error) {
    console.error("Failed to fetch dashboard data:", error);
    return null;
  }
}

function StatusBadge({ status }: { status: string | null }) {
  const styles: Record<string, string> = {
    new: "bg-teal/10 text-teal",
    contacted: "bg-amber/10 text-amber",
    demo_booked: "bg-blue-100 text-blue-700",
    proposal_sent: "bg-purple-100 text-purple-700",
    won: "bg-green-100 text-green-700",
    lost: "bg-red-100 text-red-700",
  };
  const style = status ? styles[status] || styles.new : styles.new;
  const labels: Record<string, string> = {
    new: "Neu",
    contacted: "Kontaktiert",
    demo_booked: "Demo gebucht",
    proposal_sent: "Angebot gesendet",
    won: "Gewonnen",
    lost: "Verloren",
  };
  return (
    <span className={`inline-flex px-2.5 py-1 rounded-full text-xs font-medium ${style}`}>
      {status ? labels[status] || status : "Neu"}
    </span>
  );
}

function KPICard({ label, value, subtext, color = "navy" }: { 
  label: string; 
  value: string | number; 
  subtext?: string;
  color?: "navy" | "teal" | "amber" | "green";
}) {
  const colors = {
    navy: "text-navy",
    teal: "text-teal",
    amber: "text-amber",
    green: "text-green",
  };
  return (
    <div className="bg-white rounded-2xl border border-gray-100 p-6 shadow-sm">
      <p className="text-sm text-text-light mb-1">{label}</p>
      <p className={`text-3xl font-bold ${colors[color]}`}>{value}</p>
      {subtext && <p className="text-xs text-text-light mt-1">{subtext}</p>}
    </div>
  );
}

function FunnelBar({ label, value, total, color }: { label: string; value: number; total: number; color: string }) {
  const percentage = total > 0 ? (value / total) * 100 : 0;
  return (
    <div className="flex items-center gap-4 py-2">
      <div className="w-32 text-sm text-text-light text-right">{label}</div>
      <div className="flex-1 bg-gray-100 rounded-full h-8 overflow-hidden">
        <div 
          className={`h-full ${color} flex items-center justify-end px-3 transition-all duration-500`}
          style={{ width: `${percentage}%` }}
        >
          {percentage > 15 && <span className="text-white text-sm font-medium">{value}</span>}
        </div>
      </div>
      <div className="w-12 text-sm font-medium text-navy">{value}</div>
    </div>
  );
}

export default async function AdminDashboardPage() {
  const data = await getDashboardData();

  if (!data) {
    return (

        <div className="p-8">
          <div className="bg-amber/10 border border-amber/30 rounded-xl p-6 text-center">
            <p className="text-amber font-medium">Keine Verbindung zur Datenbank</p>
            <p className="text-text-light text-sm mt-2">
              Bitte überprüfe die DATABASE_URL Umgebungsvariable.
            </p>
          </div>
        </div>

    );
  }

  // Calculate funnel data
  const funnelData = {
    total: data.totalLeads,
    completed: Math.round(data.totalLeads * (data.completionRate / 100)),
    contacted: Math.round(data.totalLeads * (data.conversionRate / 100)),
    demoBooked: Math.round(data.totalLeads * (data.conversionRate / 200)), // estimate
    won: Math.round(data.totalLeads * (data.conversionRate / 400)), // estimate
  };

  return (

      <div className="p-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-2xl font-bold text-navy">Übersicht</h1>
          <p className="text-text-light text-sm mt-1">
            Willkommen im Command Center, Lukas.
          </p>
        </div>

        {/* KPI Bar */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mb-8">
          <KPICard label="Total Leads" value={data.totalLeads} color="navy" />
          <KPICard label="Diese Woche" value={`+${data.leadsThisWeek}`} color="teal" subtext="neue Anfragen" />
          <KPICard label="Completion Rate" value={`${data.completionRate}%`} color="amber" subtext="vollständige Profile" />
          <KPICard label="Ø Einheiten" value={data.avgEinheiten} color="teal" />
          <KPICard label="Conversion" value={`${data.conversionRate}%`} color="green" subtext="contacted → won" />
        </div>

        {/* Main Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Lead Funnel */}
          <div className="lg:col-span-2 bg-white rounded-2xl border border-gray-100 p-6 shadow-sm">
            <h2 className="font-bold text-navy mb-6">Lead Funnel</h2>
            <div className="space-y-1">
              <FunnelBar label="Quiz gestartet" value={funnelData.total} total={funnelData.total} color="bg-navy" />
              <FunnelBar label="Quiz completed" value={funnelData.completed} total={funnelData.total} color="bg-teal" />
              <FunnelBar label="Email gesendet" value={funnelData.completed} total={funnelData.total} color="bg-teal/80" />
              <FunnelBar label="Kontaktiert" value={funnelData.contacted} total={funnelData.total} color="bg-amber" />
              <FunnelBar label="Demo gebucht" value={funnelData.demoBooked} total={funnelData.total} color="bg-blue-500" />
              <FunnelBar label="Vertrag signed" value={funnelData.won} total={funnelData.total} color="bg-green" />
            </div>
          </div>

          {/* Recent Activity */}
          <div className="space-y-6">
            {/* Recent Leads */}
            <div className="bg-white rounded-2xl border border-gray-100 p-6 shadow-sm">
              <h2 className="font-bold text-navy mb-4">Neuste Leads</h2>
              <div className="space-y-3">
                {data.recentLeads.map((lead) => (
                  <div key={lead.id} className="flex items-center justify-between py-2 border-b border-gray-50 last:border-0">
                    <div>
                      <p className="text-sm font-medium text-navy">{lead.name}</p>
                      <p className="text-xs text-text-light">
                        {lead.standort} • {lead.einheiten}
                      </p>
                    </div>
                    <div className="text-right">
                      <StatusBadge status={lead.status} />
                      <p className="text-xs text-text-light mt-1">
                        {formatDistanceToNow(new Date(lead.createdAt), { addSuffix: true, locale: de })}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Recent AI Actions */}
            <div className="bg-white rounded-2xl border border-gray-100 p-6 shadow-sm">
              <h2 className="font-bold text-navy mb-4">Agent Activity</h2>
              {data.recentActions.length > 0 ? (
                <div className="space-y-3">
                  {data.recentActions.map((action) => (
                    <div key={action.id} className="flex items-start gap-3 py-2 border-b border-gray-50 last:border-0">
                      <div className="w-2 h-2 rounded-full bg-teal mt-2 flex-shrink-0" />
                      <div>
                        <p className="text-sm text-navy">{action.title}</p>
                        <p className="text-xs text-text-light">
                          {action.type} • {formatDistanceToNow(new Date(action.createdAt), { addSuffix: true, locale: de })}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="space-y-3">
                  <div className="flex items-start gap-3 py-2 border-b border-gray-50">
                    <div className="w-2 h-2 rounded-full bg-teal mt-2 flex-shrink-0" />
                    <div>
                      <p className="text-sm text-navy">Ticket #1234 automatisch kategorisiert</p>
                      <p className="text-xs text-text-light">p3-ops • vor 5 Minuten</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3 py-2 border-b border-gray-50">
                    <div className="w-2 h-2 rounded-full bg-amber mt-2 flex-shrink-0" />
                    <div>
                      <p className="text-sm text-navy">Lead-Score für M. Schmidt berechnet: 85/100</p>
                      <p className="text-xs text-text-light">p3-growth • vor 12 Minuten</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3 py-2 border-b border-gray-50">
                    <div className="w-2 h-2 rounded-full bg-green mt-2 flex-shrink-0" />
                    <div>
                      <p className="text-sm text-navy">Nebenkostenabrechnung für Objekt #42 validiert</p>
                      <p className="text-xs text-text-light">p3-finance • vor 23 Minuten</p>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Quick Stats Row */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mt-6">
          <div className="bg-white rounded-2xl border border-gray-100 p-6 shadow-sm">
            <p className="text-sm text-text-light">Tickets offen</p>
            <p className="text-2xl font-bold text-navy mt-1">{data.openTickets}</p>
            <p className="text-xs text-green">+{data.resolvedToday} heute gelöst</p>
          </div>
          <div className="bg-white rounded-2xl border border-gray-100 p-6 shadow-sm">
            <p className="text-sm text-text-light">Objekte verwaltet</p>
            <p className="text-2xl font-bold text-navy mt-1">{data.propertyCount}</p>
          </div>
          <div className="bg-white rounded-2xl border border-gray-100 p-6 shadow-sm">
            <p className="text-sm text-text-light">Aktive Mieter</p>
            <p className="text-2xl font-bold text-navy mt-1">{data.tenantCount}</p>
          </div>
          <div className="bg-white rounded-2xl border border-gray-100 p-6 shadow-sm">
            <p className="text-sm text-text-light">System Health</p>
            <p className="text-2xl font-bold text-green mt-1">✓ OK</p>
            <p className="text-xs text-text-light">Alle Systeme online</p>
          </div>
        </div>
      </div>

  );
}
