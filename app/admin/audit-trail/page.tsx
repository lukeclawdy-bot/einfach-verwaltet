"use client";

import { useState, useMemo } from "react";
import { AdminLayout } from "../components/AdminLayout";

type ActorType = "Agent" | "Admin" | "Eigentümer" | "Mieter" | "Freelancer";

type AuditRow = {
  id: number;
  timestamp: string;
  actor: ActorType;
  actorName: string;
  aktion: string;
  objekt: string;
  details: string;
};

const AUDIT_DATA: AuditRow[] = [
  {
    id: 1,
    timestamp: "2026-03-01 15:42",
    actor: "Agent",
    actorName: "Tenant Agent",
    aktion: "Ticket erstellt",
    objekt: "Ticket #2041",
    details: "Heizungsausfall — Musterstr. 12, Whg. 3",
  },
  {
    id: 2,
    timestamp: "2026-03-01 15:38",
    actor: "Agent",
    actorName: "Finance Agent",
    aktion: "Mahnung ausgelöst",
    objekt: "Mahnung #M-0019",
    details: "§286 BGB Stufe 1 — H. Müller, offener Betrag €192",
  },
  {
    id: 3,
    timestamp: "2026-03-01 15:30",
    actor: "Agent",
    actorName: "Coordinator",
    aktion: "Mail versendet",
    objekt: "Müller GmbH",
    details: "Angebotsanfrage Heizungswartung — €340 Schätzwert",
  },
  {
    id: 4,
    timestamp: "2026-03-01 14:55",
    actor: "Freelancer",
    actorName: "Klaus Mertens",
    aktion: "Job abgeschlossen",
    objekt: "Job #J-0082",
    details: "Wohnungsübergabe Altona — 3 Fotos hochgeladen",
  },
  {
    id: 5,
    timestamp: "2026-03-01 14:30",
    actor: "Admin",
    actorName: "Viktor",
    aktion: "Ticket manuell geschlossen",
    objekt: "Ticket #2035",
    details: "Ursache: Duplikat — Verweis auf Ticket #2031",
  },
  {
    id: 6,
    timestamp: "2026-03-01 13:12",
    actor: "Eigentümer",
    actorName: "Thomas Bergmann",
    aktion: "Genehmigung erteilt",
    objekt: "Angebot #A-0044",
    details: "Sanitär GmbH Auftrag €850 — Wasserrohr Whg. 1 genehmigt",
  },
  {
    id: 7,
    timestamp: "2026-03-01 12:55",
    actor: "Agent",
    actorName: "Finance Agent",
    aktion: "Mahnung ausgelöst",
    objekt: "Mahnung #M-0018",
    details: "§286 BGB Stufe 2 — K.-D. Hoffmann, Eskalation an Admin",
  },
  {
    id: 8,
    timestamp: "2026-03-01 12:40",
    actor: "Mieter",
    actorName: "A. Schmidt",
    aktion: "Ticket eingereicht",
    objekt: "Ticket #2040",
    details: "Defekte Türklingel — Osterstraße 22, Whg. 2",
  },
  {
    id: 9,
    timestamp: "2026-03-01 11:50",
    actor: "Admin",
    actorName: "Viktor",
    aktion: "Freelancer genehmigt",
    objekt: "Freelancer #F-0023",
    details: "G. Schreiber (Elektriker) — Profil + Versicherung geprüft",
  },
  {
    id: 10,
    timestamp: "2026-03-01 10:30",
    actor: "Freelancer",
    actorName: "G. Schreiber",
    aktion: "Job angenommen",
    objekt: "Job #J-0083",
    details: "Elektroinstallation Hauptstr. 14 — Start: 02.03.2026",
  },
  {
    id: 11,
    timestamp: "2026-02-28 17:20",
    actor: "Eigentümer",
    actorName: "Sandra Keller",
    aktion: "Portal-Login",
    objekt: "Eigentümer-Portal",
    details: "Browser: Chrome/Mac — IP: 87.x.x.x (Hamburg)",
  },
  {
    id: 12,
    timestamp: "2026-02-28 16:05",
    actor: "Agent",
    actorName: "Tenant Agent",
    aktion: "Mail versendet",
    objekt: "Mieter-Rundmail",
    details: "Betriebskosten 2025 — Abrechnung PDF an 8 Mieter",
  },
  {
    id: 13,
    timestamp: "2026-02-28 15:30",
    actor: "Mieter",
    actorName: "T. Lindner",
    aktion: "Foto hochgeladen",
    objekt: "Ticket #2033",
    details: "3 Bilder — Wasserschaden Badezimmer, Whg. 4",
  },
  {
    id: 14,
    timestamp: "2026-02-28 14:10",
    actor: "Admin",
    actorName: "Viktor",
    aktion: "Freelancer genehmigt",
    objekt: "Freelancer #F-0022",
    details: "K. Mertens (Hausmeister) — Zuverlässigkeitsprüfung bestanden",
  },
  {
    id: 15,
    timestamp: "2026-02-27 11:00",
    actor: "Eigentümer",
    actorName: "K.-D. Hoffmann",
    aktion: "Genehmigung erteilt",
    objekt: "Angebot #A-0038",
    details: "Dachsanierung — Rückstellung freigegeben, €12.000",
  },
  {
    id: 16,
    timestamp: "2026-02-27 09:45",
    actor: "Agent",
    actorName: "Compliance Agent",
    aktion: "Ticket erstellt",
    objekt: "Ticket #2028",
    details: "Energieausweis abgelaufen — §16a GEG Frist 60 Tage",
  },
  {
    id: 17,
    timestamp: "2026-02-26 18:30",
    actor: "Mieter",
    actorName: "M. Richter",
    aktion: "Ticket eingereicht",
    objekt: "Ticket #2025",
    details: "Heizung funktioniert nicht — Musterstr. 12, Whg. 3",
  },
  {
    id: 18,
    timestamp: "2026-02-26 16:00",
    actor: "Freelancer",
    actorName: "M. Weber",
    aktion: "Job abgeschlossen",
    objekt: "Job #J-0079",
    details: "Treppenhausreinigung — Protokoll + 5 Fotos",
  },
  {
    id: 19,
    timestamp: "2026-02-25 10:15",
    actor: "Agent",
    actorName: "Finance Agent",
    aktion: "Mail versendet",
    objekt: "Erinnerung #E-0012",
    details: "Mietfälligkeit März 2026 — 12 Mieter informiert",
  },
  {
    id: 20,
    timestamp: "2026-02-24 14:00",
    actor: "Eigentümer",
    actorName: "Immo Invest HH GmbH",
    aktion: "Portal-Login",
    objekt: "Eigentümer-Portal",
    details: "Erstanmeldung — Onboarding-Flow abgeschlossen",
  },
];

const ACTOR_COLORS: Record<ActorType, string> = {
  Agent: "bg-teal/10 text-teal border-teal/20",
  Admin: "bg-purple-50 text-purple-700 border-purple-200",
  Eigentümer: "bg-blue-50 text-blue-700 border-blue-200",
  Mieter: "bg-gray-100 text-gray-700 border-gray-200",
  Freelancer: "bg-amber-50 text-amber-700 border-amber-200",
};

const ALL_ACTORS: ActorType[] = [
  "Agent",
  "Admin",
  "Eigentümer",
  "Mieter",
  "Freelancer",
];

function exportCSV(rows: AuditRow[]) {
  const header = ["Zeitstempel", "Aktor", "Akteur", "Aktion", "Objekt", "Details"];
  const lines = rows.map((r) =>
    [r.timestamp, r.actor, r.actorName, r.aktion, r.objekt, r.details]
      .map((v) => `"${v.replace(/"/g, '""')}"`)
      .join(",")
  );
  const csv = [header.join(","), ...lines].join("\n");
  const blob = new Blob(["\uFEFF" + csv], { type: "text/csv;charset=utf-8;" });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = `audit-trail-${new Date().toISOString().slice(0, 10)}.csv`;
  a.click();
  URL.revokeObjectURL(url);
}

export default function AuditTrailPage() {
  const [actorFilter, setActorFilter] = useState<ActorType | "">("");
  const [dateFrom, setDateFrom] = useState("");
  const [dateTo, setDateTo] = useState("");

  const filtered = useMemo(() => {
    return AUDIT_DATA.filter((row) => {
      if (actorFilter && row.actor !== actorFilter) return false;
      if (dateFrom && row.timestamp < dateFrom) return false;
      if (dateTo && row.timestamp > dateTo + " 23:59") return false;
      return true;
    });
  }, [actorFilter, dateFrom, dateTo]);

  return (
    <AdminLayout>
      <div className="p-8">
        {/* Header */}
        <div className="mb-6 flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold text-gray-900">📋 Audit Trail</h1>
            <p className="text-gray-500 text-sm mt-1">
              Vollständiges Protokoll aller Aktionen — letzte 7 Tage
            </p>
          </div>
          <button
            onClick={() => exportCSV(filtered)}
            className="inline-flex items-center gap-2 px-4 py-2 bg-navy text-white rounded-lg text-sm font-medium hover:bg-navy/90 transition-colors"
          >
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
              />
            </svg>
            CSV Export
          </button>
        </div>

        {/* Filter bar */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 px-6 py-4 mb-6 flex flex-wrap items-center gap-4">
          <div className="flex items-center gap-2">
            <label className="text-xs font-medium text-gray-500 whitespace-nowrap">
              Aktor-Typ
            </label>
            <select
              value={actorFilter}
              onChange={(e) => setActorFilter(e.target.value as ActorType | "")}
              className="text-sm border border-gray-200 rounded-lg px-3 py-1.5 focus:outline-none focus:ring-2 focus:ring-teal/30"
            >
              <option value="">Alle</option>
              {ALL_ACTORS.map((a) => (
                <option key={a} value={a}>
                  {a}
                </option>
              ))}
            </select>
          </div>

          <div className="flex items-center gap-2">
            <label className="text-xs font-medium text-gray-500">Von</label>
            <input
              type="date"
              value={dateFrom}
              onChange={(e) => setDateFrom(e.target.value)}
              className="text-sm border border-gray-200 rounded-lg px-3 py-1.5 focus:outline-none focus:ring-2 focus:ring-teal/30"
            />
          </div>

          <div className="flex items-center gap-2">
            <label className="text-xs font-medium text-gray-500">Bis</label>
            <input
              type="date"
              value={dateTo}
              onChange={(e) => setDateTo(e.target.value)}
              className="text-sm border border-gray-200 rounded-lg px-3 py-1.5 focus:outline-none focus:ring-2 focus:ring-teal/30"
            />
          </div>

          {(actorFilter || dateFrom || dateTo) && (
            <button
              onClick={() => {
                setActorFilter("");
                setDateFrom("");
                setDateTo("");
              }}
              className="text-xs text-gray-400 hover:text-gray-600 underline"
            >
              Filter zurücksetzen
            </button>
          )}

          <span className="ml-auto text-xs text-gray-400">
            {filtered.length} Einträge
          </span>
        </div>

        {/* Table */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-gray-50 text-xs text-gray-500 uppercase tracking-wide border-b border-gray-100">
                  <th className="px-4 py-3 text-left font-semibold">
                    Zeitstempel
                  </th>
                  <th className="px-4 py-3 text-left font-semibold">Aktor</th>
                  <th className="px-4 py-3 text-left font-semibold">Akteur</th>
                  <th className="px-4 py-3 text-left font-semibold">Aktion</th>
                  <th className="px-4 py-3 text-left font-semibold">Objekt</th>
                  <th className="px-4 py-3 text-left font-semibold">
                    Details
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-50">
                {filtered.length === 0 ? (
                  <tr>
                    <td
                      colSpan={6}
                      className="px-4 py-12 text-center text-gray-400 text-sm"
                    >
                      Keine Einträge für die gewählten Filter
                    </td>
                  </tr>
                ) : (
                  filtered.map((row) => (
                    <tr
                      key={row.id}
                      className="hover:bg-gray-50/60 transition-colors"
                    >
                      <td className="px-4 py-3 font-mono text-xs text-gray-500 whitespace-nowrap">
                        {row.timestamp}
                      </td>
                      <td className="px-4 py-3">
                        <span
                          className={`inline-flex items-center px-2 py-0.5 rounded text-xs font-medium border ${ACTOR_COLORS[row.actor]}`}
                        >
                          {row.actor}
                        </span>
                      </td>
                      <td className="px-4 py-3 text-gray-700 font-medium whitespace-nowrap">
                        {row.actorName}
                      </td>
                      <td className="px-4 py-3 text-gray-900 font-medium">
                        {row.aktion}
                      </td>
                      <td className="px-4 py-3 text-gray-600 whitespace-nowrap">
                        {row.objekt}
                      </td>
                      <td className="px-4 py-3 text-gray-500 text-xs max-w-[240px] truncate">
                        {row.details}
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </AdminLayout>
  );
}
