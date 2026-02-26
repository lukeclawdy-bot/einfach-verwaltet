"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

interface Transaction {
  id: string;
  createdAt: string;
  type: string;
  amountCents: number;
  description: string;
  propertyAddress: string | null;
  status: string;
}

interface MonthlySummary {
  month: string;
  income: number;
  expenses: number;
}

interface Stats {
  totalIncome: number;
  pending: number;
  expenses: number;
}

export default function FinanzenPage() {
  const [transactions, setTransactions] = useState<Transaction[]>([]);
  const [monthlySummary, setMonthlySummary] = useState<MonthlySummary[]>([]);
  const [stats, setStats] = useState<Stats | null>(null);
  const [loading, setLoading] = useState(true);

  // Mock landlord ID for demo
  const landlordId = process.env.NEXT_PUBLIC_DEMO_LANDLORD_ID || "";

  useEffect(() => {
    fetchData();
  }, []);

  async function fetchData() {
    try {
      const res = await fetch(`/api/portal/finanzen?landlordId=${landlordId}`);
      const data = await res.json();
      setTransactions(data.data?.transactions || []);
      setMonthlySummary(data.data?.monthlySummary || []);
      setStats(data.data?.stats || null);
    } catch (e) {
      console.error("Failed to fetch financial data:", e);
    } finally {
      setLoading(false);
    }
  }

  function formatAmount(cents: number): string {
    return `€${(cents / 100).toLocaleString("de-DE", {
      minimumFractionDigits: 2,
    })}`;
  }

  function getTransactionTypeLabel(type: string): string {
    const labels: Record<string, string> = {
      rent_received: "Mieteingang",
      expense: "Ausgabe",
      deposit: "Kaution",
      refund: "Erstattung",
      mahnung: "Mahnung",
    };
    return labels[type] || type;
  }

  function getTransactionTypeClass(type: string): string {
    if (type === "rent_received" || type === "refund") {
      return "text-green-600";
    }
    if (type === "expense" || type === "mahnung") {
      return "text-red-600";
    }
    return "text-navy";
  }

  // Calculate max value for chart scaling
  const maxValue = Math.max(
    ...monthlySummary.map((m) => Math.max(m.income, m.expenses)),
    1
  );

  return (
    <div className="min-h-screen bg-light-gray flex">
      {/* Sidebar */}
      <aside className="w-56 bg-navy min-h-screen flex flex-col fixed left-0 top-0 bottom-0">
        <div className="px-5 py-5 border-b border-white/10">
          <a href="/" className="flex items-center gap-2">
            <div className="w-7 h-7 bg-teal rounded-md flex items-center justify-center">
              <svg
                className="w-4 h-4 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                />
              </svg>
            </div>
            <span className="text-white text-sm font-bold">
              einfach <span className="text-teal">verwaltet.</span>
            </span>
          </a>
        </div>
        <nav className="flex-1 px-3 py-4 space-y-1">
          {[
            { label: "Übersicht", href: "/portal/dashboard", active: false },
            { label: "Chat", href: "/portal/chat", active: false },
            { label: "Einheiten", href: "/portal/einheiten", active: false },
            { label: "Mieter", href: "/portal/mieter", active: false },
            { label: "Tickets", href: "/portal/tickets", active: false },
            { label: "Partner", href: "/portal/partner", active: false },
            { label: "Dokumente", href: "/portal/dokumente", active: false },
            { label: "Finanzen", href: "/portal/finanzen", active: true },
            { label: "Mieterhöhung", href: "/portal/mieterhohung", active: false },
          ].map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm transition-colors
                ${
                  item.active
                    ? "bg-teal/20 text-teal font-medium"
                    : "text-white/60 hover:bg-white/5 hover:text-white"
                }`}
            >
              {item.label}
            </Link>
          ))}
        </nav>
        <div className="px-4 py-4 border-t border-white/10 space-y-2">
          <a
            href="/api/portal/auth/logout"
            className="block text-white/40 hover:text-white/70 text-xs transition-colors"
          >
            Abmelden
          </a>
          <p className="text-white/30 text-xs">einfach verwaltet. v1</p>
        </div>
      </aside>

      {/* Main */}
      <div className="flex-1 ml-56">
        <div className="max-w-5xl mx-auto px-8 py-8">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h1 className="text-2xl font-bold text-navy">Finanzen</h1>
              <p className="text-text-light text-sm mt-0.5">
                Übersicht über Einnahmen und Ausgaben
              </p>
            </div>
            <Link
              href="/portal/abrechnung"
              className="bg-teal hover:bg-teal/90 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors flex items-center gap-2"
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
                  d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z"
                />
              </svg>
              Nebenkostenabrechnung
            </Link>
          </div>

          {loading ? (
            <div className="text-center py-12 text-text-light">Laden...</div>
          ) : (
            <>
              {/* Stats Cards */}
              {stats && (
                <div className="grid grid-cols-3 gap-4 mb-8">
                  <div className="bg-white rounded-2xl border border-gray-100 p-6">
                    <p className="text-text-light text-sm mb-1">
                      Mieteinnahmen (Monat)
                    </p>
                    <p className="text-2xl font-bold text-navy">
                      {formatAmount(stats.totalIncome)}
                    </p>
                    <p className="text-green-600 text-xs mt-1">✓ Eingegangen</p>
                  </div>
                  <div className="bg-white rounded-2xl border border-gray-100 p-6">
                    <p className="text-text-light text-sm mb-1">Ausstehend</p>
                    <p className="text-2xl font-bold text-navy">
                      {formatAmount(stats.pending)}
                    </p>
                    <p className="text-amber-600 text-xs mt-1">⚠ Offen</p>
                  </div>
                  <div className="bg-white rounded-2xl border border-gray-100 p-6">
                    <p className="text-text-light text-sm mb-1">Nebenkosten</p>
                    <p className="text-2xl font-bold text-navy">
                      {formatAmount(stats.expenses)}
                    </p>
                    <p className="text-red-600 text-xs mt-1">− Ausgaben</p>
                  </div>
                </div>
              )}

              {/* Monthly Chart */}
              {monthlySummary.length > 0 && (
                <div className="bg-white rounded-2xl border border-gray-100 p-6 mb-8">
                  <h2 className="font-semibold text-navy mb-6">
                    Monatliche Übersicht (letzte 6 Monate)
                  </h2>
                  <div className="h-48 flex items-end gap-4">
                    {monthlySummary.map((month, index) => {
                      const incomeHeight = (month.income / maxValue) * 100;
                      const expenseHeight = (month.expenses / maxValue) * 100;
                      return (
                        <div key={index} className="flex-1 flex flex-col items-center gap-2">
                          <div className="w-full flex gap-1 h-40 items-end">
                            <div
                              className="flex-1 bg-teal rounded-t"
                              style={{ height: `${incomeHeight}%` }}
                              title={`Einnahmen: ${formatAmount(month.income)}`}
                            />
                            <div
                              className="flex-1 bg-red-400 rounded-t"
                              style={{ height: `${expenseHeight}%` }}
                              title={`Ausgaben: ${formatAmount(month.expenses)}`}
                            />
                          </div>
                          <span className="text-xs text-text-light">{month.month}</span>
                        </div>
                      );
                    })}
                  </div>
                  <div className="flex justify-center gap-6 mt-4 text-xs">
                    <div className="flex items-center gap-2">
                      <div className="w-3 h-3 bg-teal rounded" />
                      <span className="text-text-light">Einnahmen</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-3 h-3 bg-red-400 rounded" />
                      <span className="text-text-light">Ausgaben</span>
                    </div>
                  </div>
                </div>
              )}

              {/* Transactions List */}
              <div className="bg-white rounded-2xl border border-gray-100 overflow-hidden">
                <div className="px-6 py-4 border-b border-gray-50 flex items-center justify-between">
                  <h2 className="font-semibold text-navy">Transaktionen</h2>
                </div>
                {transactions.length === 0 ? (
                  <div className="px-6 py-12 text-center">
                    <div className="text-4xl mb-3">💰</div>
                    <p className="text-navy font-semibold">
                      Noch keine Transaktionen
                    </p>
                    <p className="text-text-light text-sm mt-1">
                      Finanzielle Daten werden hier angezeigt.
                    </p>
                  </div>
                ) : (
                  <table className="w-full">
                    <thead>
                      <tr className="text-xs text-text-light uppercase tracking-wide bg-gray-50">
                        <th className="px-6 py-3 text-left">Datum</th>
                        <th className="px-6 py-3 text-left">Beschreibung</th>
                        <th className="px-6 py-3 text-left">Objekt</th>
                        <th className="px-6 py-3 text-left">Typ</th>
                        <th className="px-6 py-3 text-right">Betrag</th>
                      </tr>
                    </thead>
                    <tbody>
                      {transactions.map((t) => (
                        <tr
                          key={t.id}
                          className="border-t border-gray-50 hover:bg-gray-50/50 transition-colors"
                        >
                          <td className="px-6 py-4 text-sm text-text-light">
                            {new Date(t.createdAt).toLocaleDateString("de-DE")}
                          </td>
                          <td className="px-6 py-4 text-sm text-navy">
                            {t.description || getTransactionTypeLabel(t.type)}
                          </td>
                          <td className="px-6 py-4 text-sm text-text-light">
                            {t.propertyAddress || "—"}
                          </td>
                          <td className="px-6 py-4">
                            <span
                              className={`px-2.5 py-1 rounded-full text-xs font-medium ${
                                t.type === "rent_received"
                                  ? "bg-green-50 text-green-600"
                                  : t.type === "expense"
                                  ? "bg-red-50 text-red-600"
                                  : "bg-gray-100 text-gray-600"
                              }`}
                            >
                              {getTransactionTypeLabel(t.type)}
                            </span>
                          </td>
                          <td
                            className={`px-6 py-4 text-sm font-medium text-right ${getTransactionTypeClass(
                              t.type
                            )}`}
                          >
                            {t.type === "expense" || t.type === "mahnung"
                              ? "-"
                              : "+"}
                            {formatAmount(t.amountCents)}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                )}
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
