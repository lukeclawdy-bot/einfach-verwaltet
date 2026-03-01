"use client";

import { useEffect, useState } from "react";
import { AdminLayout } from "../components/AdminLayout";

type ActivityItem = {
  id: number;
  time: string;
  type: "agent" | "freelancer" | "critical";
  agent: string;
  action: string;
  detail: string;
  object?: string;
};

const DEMO_ACTIVITIES: ActivityItem[] = [
  {
    id: 1,
    time: "15:42",
    type: "agent",
    agent: "🤖 Tenant Agent",
    action: 'Mieteranfrage "Heizung" beantwortet',
    detail: "4 Min Reaktionszeit",
    object: "M. Richter, Musterstr. 12",
  },
  {
    id: 2,
    time: "15:38",
    type: "agent",
    agent: "🤖 Finance Agent",
    action: "Mahnung versendet §286 BGB Stufe 1",
    detail: "Automatisch ausgelöst",
    object: "H. Müller, Whg. 3",
  },
  {
    id: 3,
    time: "15:30",
    type: "agent",
    agent: "🤖 Coordinator",
    action: "Handwerker Müller GmbH angefragt",
    detail: "Eigentümer-Approval ausstehend",
    object: "Heizungswartung €340",
  },
  {
    id: 4,
    time: "15:15",
    type: "agent",
    agent: "🤖 Legal Agent",
    action: "Mieterhöhungspotential erkannt",
    detail: "+4.2% möglich §558 BGB",
    object: "Wohnung 1",
  },
  {
    id: 5,
    time: "14:55",
    type: "freelancer",
    agent: "👤 Freelancer",
    action: 'Job "Wohnungsübergabe Altona" abgeschlossen',
    detail: "3 Fotos hochgeladen",
    object: "Klaus Mertens",
  },
  {
    id: 6,
    time: "14:30",
    type: "critical",
    agent: "🤖 Tenant Agent",
    action: 'Schadensmeldung klassifiziert: "Wasserschaden"',
    detail: "Fachbetrieb benachrichtigt",
    object: "Priorität KRITISCH",
  },
  {
    id: 7,
    time: "14:12",
    type: "agent",
    agent: "🤖 Compliance Agent",
    action: "Energieausweis-Prüfung abgeschlossen",
    detail: "Ablauf in 60 Tagen — Eigentümer informiert",
    object: "Musterstr. 5, Hamburg",
  },
  {
    id: 8,
    time: "13:58",
    type: "agent",
    agent: "🤖 Finance Agent",
    action: "Nebenkostenabrechnung erstellt §556 BGB",
    detail: "PDF generiert + an Mieter versendet",
    object: "8 Mieter, Immo A",
  },
  {
    id: 9,
    time: "13:45",
    type: "freelancer",
    agent: "👤 Freelancer",
    action: "Job angenommen",
    detail: "Beginn: Morgen 09:00",
    object: "Treppenhausreinigung — M. Weber",
  },
  {
    id: 10,
    time: "13:30",
    type: "agent",
    agent: "🤖 Tenant Agent",
    action: "Neue Mieteranfrage klassifiziert",
    detail: "Kategorie: Instandhaltung — SLA 24h",
    object: "A. Schmidt, Osterstraße 22",
  },
  {
    id: 11,
    time: "13:12",
    type: "agent",
    agent: "🤖 Coordinator",
    action: "Eigentümer-Approval angefragt",
    detail: "Angebot Sanitär GmbH €850 — Response required",
    object: "Sandra Keller GbR",
  },
  {
    id: 12,
    time: "12:55",
    type: "critical",
    agent: "🤖 Finance Agent",
    action: "Zahlungsverzug erkannt — Stufe 2",
    detail: "§286 Abs. 2 BGB — Eskalation an Admin",
    object: "K.-D. Hoffmann — Feb-Zahlung",
  },
  {
    id: 13,
    time: "12:40",
    type: "agent",
    agent: "🤖 Legal Agent",
    action: "Mietvertrag-Prüfung abgeschlossen",
    detail: "3 Klauseln überprüft — kein Handlungsbedarf",
    object: "Neueintrag: P. Braun, Whg. 7",
  },
  {
    id: 14,
    time: "12:20",
    type: "freelancer",
    agent: "👤 Freelancer",
    action: "Foto-Upload abgeschlossen",
    detail: "12 Fotos, Übergabeprotokoll erstellt",
    object: "Wohnungsübergabe Barmbek",
  },
  {
    id: 15,
    time: "11:58",
    type: "agent",
    agent: "🤖 Tenant Agent",
    action: "Automatische Erinnerung versendet",
    detail: "Miete März 2026 fällig in 3 Tagen",
    object: "12 Mieter, alle Liegenschaften",
  },
  {
    id: 16,
    time: "11:35",
    type: "agent",
    agent: "🤖 Compliance Agent",
    action: "DSGVO-Check abgeschlossen",
    detail: "Alle Daten DSGVO-konform — kein Handlungsbedarf",
    object: "Wöchentliche Prüfung",
  },
  {
    id: 17,
    time: "11:10",
    type: "critical",
    agent: "🤖 Coordinator",
    action: "Notfall-Handwerker aktiviert",
    detail: "Rohrbruch — Ankunft in 45 Min",
    object: "Hauptstr. 14, Hamburg",
  },
  {
    id: 18,
    time: "10:50",
    type: "agent",
    agent: "🤖 Finance Agent",
    action: "DATEV-Export vorbereitet",
    detail: "Buchungsperiode Feb 2026 — 48 Transaktionen",
    object: "Steuerberater-Upload bereit",
  },
  {
    id: 19,
    time: "10:30",
    type: "freelancer",
    agent: "👤 Freelancer",
    action: "Bewerbung eingegangen",
    detail: "Prüfung durch Admin ausstehend",
    object: "G. Schreiber — Elektriker",
  },
  {
    id: 20,
    time: "10:05",
    type: "agent",
    agent: "🤖 Tenant Agent",
    action: "Willkommens-Mail versendet",
    detail: "Portal-Zugangsdaten + Onboarding",
    object: "Neuer Mieter: T. Lindner, Whg. 4",
  },
];

function getTypeStyle(type: ActivityItem["type"]) {
  if (type === "critical") {
    return {
      dot: "bg-red-500",
      badge: "bg-red-50 text-red-700 border-red-200",
      row: "bg-red-50/30",
    };
  }
  if (type === "freelancer") {
    return {
      dot: "bg-amber-400",
      badge: "bg-amber-50 text-amber-700 border-amber-200",
      row: "",
    };
  }
  return {
    dot: "bg-teal",
    badge: "bg-teal/10 text-teal border-teal/20",
    row: "",
  };
}

export default function AgentFeedPage() {
  const [activities, setActivities] = useState<ActivityItem[]>(DEMO_ACTIVITIES);
  const [lastRefresh, setLastRefresh] = useState<Date>(new Date());
  const [refreshing, setRefreshing] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setRefreshing(true);
      setTimeout(() => {
        // In production this would fetch from /api/agent-feed
        setActivities([...DEMO_ACTIVITIES]);
        setLastRefresh(new Date());
        setRefreshing(false);
      }, 600);
    }, 30000);
    return () => clearInterval(interval);
  }, []);

  const criticalCount = activities.filter((a) => a.type === "critical").length;
  const agentCount = activities.filter((a) => a.type === "agent").length;
  const freelancerCount = activities.filter((a) => a.type === "freelancer").length;

  return (
    <AdminLayout>
      <div className="p-8">
        {/* Header */}
        <div className="mb-6 flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold text-gray-900">
              🤖 Agent Feed
            </h1>
            <p className="text-gray-500 text-sm mt-1">
              Live-Aktivitäten aller KI-Agenten — Auto-Refresh alle 30 Sek.
            </p>
          </div>
          <div className="flex items-center gap-3">
            {refreshing && (
              <span className="text-xs text-gray-400 animate-pulse">
                Aktualisiere…
              </span>
            )}
            <span className="text-xs text-gray-400">
              Zuletzt:{" "}
              {lastRefresh.toLocaleTimeString("de-DE", {
                hour: "2-digit",
                minute: "2-digit",
                second: "2-digit",
              })}
            </span>
            <div
              className={`w-2 h-2 rounded-full ${refreshing ? "bg-amber-400" : "bg-green-500"} animate-pulse`}
            />
          </div>
        </div>

        {/* Summary badges */}
        <div className="flex gap-3 mb-6">
          <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-medium bg-teal/10 text-teal border border-teal/20">
            <span className="w-1.5 h-1.5 rounded-full bg-teal" />
            {agentCount} Agent-Aktionen
          </span>
          <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-medium bg-amber-50 text-amber-700 border border-amber-200">
            <span className="w-1.5 h-1.5 rounded-full bg-amber-400" />
            {freelancerCount} Freelancer
          </span>
          <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-medium bg-red-50 text-red-700 border border-red-200">
            <span className="w-1.5 h-1.5 rounded-full bg-red-500" />
            {criticalCount} Kritisch
          </span>
        </div>

        {/* Activity Feed */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
          <div className="px-6 py-4 border-b border-gray-100 flex items-center justify-between">
            <h2 className="text-sm font-semibold text-gray-700">
              Letzte 20 Aktivitäten
            </h2>
            <span className="text-xs text-gray-400">Heute</span>
          </div>
          <div className="divide-y divide-gray-50">
            {activities.map((item) => {
              const style = getTypeStyle(item.type);
              return (
                <div
                  key={item.id}
                  className={`px-6 py-4 flex items-start gap-4 hover:bg-gray-50/50 transition-colors ${style.row}`}
                >
                  {/* Timeline dot */}
                  <div className="flex flex-col items-center gap-1 pt-1">
                    <div
                      className={`w-2.5 h-2.5 rounded-full flex-shrink-0 ${style.dot}`}
                    />
                  </div>

                  {/* Time */}
                  <span className="text-xs text-gray-400 font-mono w-10 flex-shrink-0 pt-0.5">
                    {item.time}
                  </span>

                  {/* Content */}
                  <div className="flex-1 min-w-0">
                    <div className="flex items-start gap-2 flex-wrap">
                      <span
                        className={`inline-flex items-center px-2 py-0.5 rounded text-xs font-medium border ${style.badge}`}
                      >
                        {item.agent}
                      </span>
                      <span className="text-sm font-medium text-gray-900">
                        {item.action}
                      </span>
                    </div>
                    {item.object && (
                      <p className="text-xs text-gray-500 mt-0.5">
                        {item.object}
                      </p>
                    )}
                  </div>

                  {/* Detail */}
                  <span className="text-xs text-gray-400 flex-shrink-0 text-right max-w-[160px]">
                    {item.detail}
                  </span>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </AdminLayout>
  );
}
