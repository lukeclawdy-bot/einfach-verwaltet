"use client";

import { useState } from "react";
import Link from "next/link";

const NAV_ITEMS = [
  { id: "overview", label: "Übersicht", icon: "📊", active: true },
  { id: "units", label: "Einheiten", icon: "🏢", active: false },
  { id: "tenants", label: "Mieter", icon: "👥", active: false },
  { id: "tickets", label: "Tickets", icon: "🎫", active: false },
  { id: "documents", label: "Dokumente", icon: "📄", active: false },
  { id: "finances", label: "Finanzen", icon: "💰", active: false },
];

const AI_ACTIONS = [
  {
    id: 1,
    priority: "high",
    color: "red",
    icon: "🔴",
    message: "Mieter Wohnung 2 hat seit 3 Tagen nicht auf die Nebenkostenabrechnung reagiert — Erinnerung senden?",
    actions: ["Jetzt senden", "Ignorieren"],
  },
  {
    id: 2,
    priority: "medium",
    color: "yellow",
    icon: "🟡",
    message: "Mieterhöhung für Wohnung 1 ist seit 18 Monaten nicht angepasst — §558 BGB erlaubt Erhöhung um bis zu 4,2%",
    actions: ["Berechnen", "Später"],
  },
  {
    id: 3,
    priority: "low",
    color: "green",
    icon: "🟢",
    message: "Heizungswartung Wohnung 3 — Angebot von Müller Heizung: €340. Beauftragen?",
    actions: ["Beauftragen", "Ablehnen"],
  },
];

const TICKETS = [
  {
    id: "T-1001",
    title: "Wasserhahn tropft im Bad",
    tenant: "Maria Schmidt",
    unit: "Wohnung 2",
    status: "open",
    priority: "normal",
    date: "26.02.2026",
  },
];

function StatusBadge({ status }: { status: string }) {
  const styles: Record<string, string> = {
    open: "bg-amber/10 text-amber border-amber/20",
    in_progress: "bg-blue-100 text-blue-700 border-blue-200",
    resolved: "bg-green/10 text-green border-green/20",
    closed: "bg-gray-100 text-gray-600 border-gray-200",
  };
  
  const labels: Record<string, string> = {
    open: "Offen",
    in_progress: "In Bearbeitung",
    resolved: "Gelöst",
    closed: "Geschlossen",
  };

  return (
    <span className={`px-2.5 py-1 rounded-full text-xs font-medium border ${styles[status] || styles.open}`}>
      {labels[status] || status}
    </span>
  );
}

export default function DashboardPage() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="min-h-screen bg-warm-white flex">
      {/* Sidebar */}
      <aside className={`fixed inset-y-0 left-0 z-50 w-64 bg-navy text-white transform transition-transform duration-300 lg:translate-x-0 lg:static ${sidebarOpen ? "translate-x-0" : "-translate-x-full"}`}>
        <div className="p-6">
          <Link href="/" className="text-xl font-semibold">
            einfach verwaltet.
          </Link>
        </div>
        <nav className="px-4 space-y-1">
          {NAV_ITEMS.map((item) => (
            <button
              key={item.id}
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg text-left transition-colors ${
                item.active
                  ? "bg-teal text-white"
                  : "text-white/70 hover:bg-white/10 hover:text-white"
              }`}
            >
              <span>{item.icon}</span>
              <span>{item.label}</span>
            </button>
          ))}
        </nav>
      </aside>

      {/* Mobile overlay */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-40 lg:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* Main content */}
      <main className="flex-1 min-w-0">
        {/* Mobile header */}
        <header className="lg:hidden bg-white border-b border-light-gray px-4 py-3 flex items-center gap-4">
          <button
            onClick={() => setSidebarOpen(true)}
            className="p-2 rounded-lg hover:bg-gray-100"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
          <span className="font-semibold text-navy">einfach verwaltet.</span>
        </header>

        <div className="p-6 lg:p-8 space-y-8">
          {/* Greeting */}
          <div>
            <h1 className="text-2xl lg:text-3xl font-bold text-navy">
              Guten Morgen, Lukas.
            </h1>
            <p className="text-text-light mt-1">
              Hier ist Ihr Überblick.
            </p>
          </div>

          {/* AI Action Feed */}
          <div className="bg-white rounded-2xl border-l-4 border-teal shadow-sm overflow-hidden">
            <div className="px-6 py-4 border-b border-light-gray">
              <h2 className="font-semibold text-navy flex items-center gap-2">
                <span>🤖</span> Ihre nächsten Schritte
              </h2>
            </div>
            <div className="divide-y divide-light-gray">
              {AI_ACTIONS.map((action) => (
                <div key={action.id} className="p-6">
                  <div className="flex items-start gap-3">
                    <span className="text-lg">{action.icon}</span>
                    <div className="flex-1">
                      <p className="text-text-main">{action.message}</p>
                      <div className="flex flex-wrap gap-3 mt-3">
                        {action.actions.map((label, idx) => (
                          <button
                            key={idx}
                            className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                              idx === 0
                                ? "bg-teal text-white hover:bg-teal/90"
                                : "bg-gray-100 text-text-light hover:bg-gray-200"
                            }`}
                          >
                            {label}
                          </button>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Stats Row */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div className="bg-white rounded-xl p-6 border border-light-gray">
              <p className="text-sm text-text-light mb-1">Einheiten</p>
              <p className="text-3xl font-bold text-navy">3</p>
            </div>
            <div className="bg-white rounded-xl p-6 border border-light-gray">
              <p className="text-sm text-text-light mb-1">Offene Tickets</p>
              <p className="text-3xl font-bold text-amber">1</p>
            </div>
            <div className="bg-white rounded-xl p-6 border border-light-gray">
              <p className="text-sm text-text-light mb-1">Miete diesen Monat</p>
              <p className="text-3xl font-bold text-green">€3.200</p>
              <p className="text-sm text-green flex items-center gap-1">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                €3.200 ✅
              </p>
            </div>
          </div>

          {/* Ticket List */}
          <div className="bg-white rounded-2xl border border-light-gray overflow-hidden">
            <div className="px-6 py-4 border-b border-light-gray flex items-center justify-between">
              <h2 className="font-semibold text-navy">Aktuelle Tickets</h2>
              <button className="text-teal text-sm hover:underline">Alle anzeigen</button>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-text-light uppercase tracking-wider">Ticket</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-text-light uppercase tracking-wider">Mieter</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-text-light uppercase tracking-wider">Einheit</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-text-light uppercase tracking-wider">Status</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-text-light uppercase tracking-wider">Datum</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-light-gray">
                  {TICKETS.map((ticket) => (
                    <tr key={ticket.id} className="hover:bg-gray-50">
                      <td className="px-6 py-4">
                        <div className="font-medium text-navy">{ticket.id}</div>
                        <div className="text-sm text-text-light">{ticket.title}</div>
                      </td>
                      <td className="px-6 py-4 text-text-main">{ticket.tenant}</td>
                      <td className="px-6 py-4 text-text-light">{ticket.unit}</td>
                      <td className="px-6 py-4">
                        <StatusBadge status={ticket.status} />
                      </td>
                      <td className="px-6 py-4 text-text-light">{ticket.date}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            {TICKETS.length === 0 && (
              <div className="px-6 py-12 text-center text-text-light">
                Keine offenen Tickets 🎉
              </div>
            )}
          </div>
        </div>
      </main>
    </div>
  );
}
