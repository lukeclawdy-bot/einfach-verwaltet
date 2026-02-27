"use client";

import { useMemo } from "react";
import { formatDistanceToNow } from "date-fns";
import { de } from "date-fns/locale";

interface AIAction {
  id: string;
  createdAt: Date | string;
  type: string;
  title: string;
  status: string;
  landlordId: string;
}

interface SystemHealth {
  leadsCount: number;
  lastEmailSent: Date | null;
}

const AGENT_COLORS: Record<string, string> = {
  viktor: "bg-purple-100 text-purple-700",
  "p3-legal": "bg-red-100 text-red-700",
  "p3-ops": "bg-blue-100 text-blue-700",
  "p3-product": "bg-teal-100 text-teal-700",
  "p3-growth": "bg-green-100 text-green-700",
  "p3-finance": "bg-amber-100 text-amber-700",
};

const STATUS_ICONS: Record<string, string> = {
  success: "✓",
  failed: "✕",
  running: "⟳",
  pending: "○",
};

const STATUS_COLORS: Record<string, string> = {
  success: "text-green",
  failed: "text-red-500",
  running: "text-amber",
  pending: "text-gray-400",
};

// Mock data when table is empty
const MOCK_ACTIONS = [
  {
    id: "mock-1",
    agent: "p3-ops",
    action: "Ticket #1234 automatisch kategorisiert als 'Wartung' mit Dringlichkeit 3/5",
    status: "success",
    timestamp: new Date(Date.now() - 5 * 60 * 1000),
    tokens: 245,
  },
  {
    id: "mock-2",
    agent: "p3-growth",
    action: "Lead-Score für M. Schmidt berechnet: 85/100 (Hochpriorität)",
    status: "success",
    timestamp: new Date(Date.now() - 12 * 60 * 1000),
    tokens: 189,
  },
  {
    id: "mock-3",
    agent: "p3-finance",
    action: "Nebenkostenabrechnung für Objekt #42 validiert - keine Fehler gefunden",
    status: "success",
    timestamp: new Date(Date.now() - 23 * 60 * 1000),
    tokens: 412,
  },
  {
    id: "mock-4",
    agent: "p3-legal",
    action: "Mietvertrag für Wohnung 3b auf §§ 535-580a BGB geprüft",
    status: "success",
    timestamp: new Date(Date.now() - 45 * 60 * 1000),
    tokens: 892,
  },
  {
    id: "mock-5",
    agent: "viktor",
    action: "Wochenbericht generiert und an Lukas gesendet",
    status: "success",
    timestamp: new Date(Date.now() - 2 * 60 * 60 * 1000),
    tokens: 1256,
  },
];

interface AgentsActivityProps {
  actions: AIAction[];
  health: SystemHealth;
}

export function AgentsActivity({ actions, health }: AgentsActivityProps) {
  const displayActions = useMemo(() => {
    if (actions.length > 0) {
      return actions.slice(0, 20).map((action) => ({
        id: action.id,
        agent: action.type.includes("legal") 
          ? "p3-legal" 
          : action.type.includes("finance")
          ? "p3-finance"
          : action.type.includes("ops")
          ? "p3-ops"
          : action.type.includes("growth")
          ? "p3-growth"
          : "viktor",
        action: action.title,
        status: action.status === "actioned" ? "success" : action.status === "dismissed" ? "failed" : "pending",
        timestamp: new Date(action.createdAt),
        tokens: null as number | null,
      }));
    }
    return MOCK_ACTIONS;
  }, [actions]);

  const isMock = actions.length === 0;

  return (
    <div className="space-y-6">
      {isMock && (
        <div className="bg-amber/10 border border-amber/30 rounded-xl p-4">
          <p className="text-amber text-sm">
            <span className="font-medium">Demo-Modus:</span> Zeigt Beispieldaten. 
            Sobald echte AI Actions in der Datenbank vorhanden sind, werden diese angezeigt.
          </p>
        </div>
      )}

      {/* Activity Feed */}
      <div className="bg-white rounded-2xl border border-gray-100 p-6 shadow-sm">
        <h2 className="font-bold text-navy mb-4">Agent Activity Feed</h2>
        <div className="space-y-0">
          {displayActions.map((action, index) => (
            <div
              key={action.id}
              className={`flex items-start gap-4 py-4 ${
                index !== displayActions.length - 1 ? "border-b border-gray-100" : ""
              }`}
            >
              <div
                className={`px-2 py-1 rounded text-xs font-medium ${
                  AGENT_COLORS[action.agent] || "bg-gray-100 text-gray-600"
                }`}
              >
                {action.agent}
              </div>
              <div className="flex-1">
                <p className="text-sm text-navy">{action.action}</p>
                <p className="text-xs text-text-light mt-1">
                  {formatDistanceToNow(action.timestamp, { addSuffix: true, locale: de })}
                  {action.tokens && ` • ${action.tokens} tokens`}
                </p>
              </div>
              <div className={`text-lg font-bold ${STATUS_COLORS[action.status]}`}>
                {STATUS_ICONS[action.status]}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* System Health */}
      <div className="bg-white rounded-2xl border border-gray-100 p-6 shadow-sm">
        <h2 className="font-bold text-navy mb-4">System Health</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <a
            href="https://dashboard.inngest.com"
            target="_blank"
            rel="noopener noreferrer"
            className="p-4 rounded-xl border border-gray-100 hover:border-teal transition-colors group"
          >
            <div className="flex items-center gap-2 mb-2">
              <div className="w-2 h-2 rounded-full bg-green" />
              <span className="text-sm font-medium text-navy">Inngest</span>
            </div>
            <p className="text-xs text-text-light">Workflow Engine</p>
            <p className="text-xs text-teal mt-2 group-hover:underline">Dashboard öffnen →</p>
          </a>

          <a
            href="https://vercel.com/dashboard"
            target="_blank"
            rel="noopener noreferrer"
            className="p-4 rounded-xl border border-gray-100 hover:border-teal transition-colors group"
          >
            <div className="flex items-center gap-2 mb-2">
              <div className="w-2 h-2 rounded-full bg-green" />
              <span className="text-sm font-medium text-navy">Vercel</span>
            </div>
            <p className="text-xs text-text-light">Deployment</p>
            <p className="text-xs text-teal mt-2 group-hover:underline">Dashboard öffnen →</p>
          </a>

          <div className="p-4 rounded-xl border border-gray-100">
            <div className="flex items-center gap-2 mb-2">
              <div className="w-2 h-2 rounded-full bg-green" />
              <span className="text-sm font-medium text-navy">Neon DB</span>
            </div>
            <p className="text-xs text-text-light">{health.leadsCount} Leads in DB</p>
            <p className="text-xs text-green mt-2">Verbindung OK</p>
          </div>

          <div className="p-4 rounded-xl border border-gray-100">
            <div className="flex items-center gap-2 mb-2">
              <div className="w-2 h-2 rounded-full bg-green" />
              <span className="text-sm font-medium text-navy">Resend</span>
            </div>
            <p className="text-xs text-text-light">Email Service</p>
            {health.lastEmailSent ? (
              <p className="text-xs text-text-light mt-2">
                Letzte Email: {formatDistanceToNow(health.lastEmailSent, { addSuffix: true, locale: de })}
              </p>
            ) : (
              <p className="text-xs text-text-light mt-2">Noch keine Emails</p>
            )}
          </div>
        </div>
      </div>

      {/* Agent Legend */}
      <div className="bg-white rounded-2xl border border-gray-100 p-6 shadow-sm">
        <h2 className="font-bold text-navy mb-4">Agenten Übersicht</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {Object.entries(AGENT_COLORS).map(([agent, colorClass]) => (
            <div key={agent} className="flex items-center gap-2">
              <div className={`px-2 py-1 rounded text-xs font-medium ${colorClass}`}>
                {agent}
              </div>
            </div>
          ))}
        </div>
        <div className="mt-4 text-sm text-text-light">
          <p className="mb-1"><span className="font-medium text-navy">viktor</span> — CEO & Chief Architect</p>
          <p className="mb-1"><span className="font-medium text-navy">p3-legal</span> — German Property Law</p>
          <p className="mb-1"><span className="font-medium text-navy">p3-ops</span> — Operations & Tickets</p>
          <p className="mb-1"><span className="font-medium text-navy">p3-product</span> — Product & Tech</p>
          <p className="mb-1"><span className="font-medium text-navy">p3-growth</span> — Business Development</p>
          <p><span className="font-medium text-navy">p3-finance</span> — Finance & Accounting</p>
        </div>
      </div>
    </div>
  );
}
