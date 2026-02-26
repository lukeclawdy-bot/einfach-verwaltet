"use client";

import { useState, useEffect, useCallback } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { getToken, getUser, listTickets, logout } from "@/lib/api";
import { BottomNav } from "@/components/ui/BottomNav";
import { TicketCard } from "@/components/ui/TicketCard";
import type { Ticket, User } from "@/types";

export default function DashboardPage() {
  const router = useRouter();
  const [user, setUser] = useState<User | null>(null);
  const [tickets, setTickets] = useState<Ticket[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const loadData = useCallback(async () => {
    if (!getToken()) {
      router.replace("/");
      return;
    }

    const storedUser = getUser();
    setUser(storedUser);

    try {
      const data = await listTickets({ limit: 3 });
      setTickets(data.tickets ?? []);
    } catch (err) {
      setError(
        err instanceof Error ? err.message : "Daten konnten nicht geladen werden."
      );
    } finally {
      setIsLoading(false);
    }
  }, [router]);

  useEffect(() => {
    loadData();
  }, [loadData]);

  const handleLogout = async () => {
    await logout();
    router.push("/");
  };

  const openTickets = tickets.filter((t) => t.status === "open").length;
  const inProgressTickets = tickets.filter(
    (t) => t.status === "in_progress"
  ).length;

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#F8FAFC]">
        <div className="text-center space-y-3">
          <div className="w-8 h-8 border-3 border-[#2DD4BF] border-t-transparent rounded-full animate-spin mx-auto" />
          <p className="text-sm text-slate-500">Wird geladen…</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#F8FAFC] pb-24">
      {/* Header */}
      <div className="bg-[#1B2B4B] px-6 pt-12 pb-8">
        <div className="max-w-md mx-auto">
          <div className="flex items-start justify-between">
            <div>
              <p className="text-[#2DD4BF] text-sm font-medium">
                Guten Tag,
              </p>
              <h1 className="text-white text-2xl font-bold mt-0.5">
                {user?.name ?? "Mieter/in"}
              </h1>
              <p className="text-white/50 text-xs mt-1">
                {user?.email}
              </p>
            </div>
            <button
              onClick={handleLogout}
              className="text-white/50 hover:text-white/80 transition-colors p-1"
              title="Abmelden"
            >
              <svg
                className="w-5 h-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={1.8}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"
                />
              </svg>
            </button>
          </div>

          {/* KPI row */}
          <div className="grid grid-cols-3 gap-3 mt-6">
            {[
              { label: "Offen", value: openTickets, color: "text-amber-300" },
              {
                label: "In Bearbeitung",
                value: inProgressTickets,
                color: "text-blue-300",
              },
              {
                label: "Anfragen gesamt",
                value: tickets.length,
                color: "text-[#2DD4BF]",
              },
            ].map((kpi) => (
              <div
                key={kpi.label}
                className="bg-white/10 rounded-xl p-3 text-center"
              >
                <p className={`text-2xl font-bold ${kpi.color}`}>
                  {kpi.value}
                </p>
                <p className="text-white/50 text-[10px] font-medium mt-0.5 leading-tight">
                  {kpi.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-md mx-auto px-4 mt-6 space-y-6">
        {/* Quick action */}
        <Link
          href="/tickets/new"
          className="flex items-center justify-between bg-white rounded-xl border border-slate-200 p-4 hover:border-[#2DD4BF] hover:shadow-sm transition-all group"
        >
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-[#1B2B4B] flex items-center justify-center">
              <svg
                className="w-5 h-5 text-[#2DD4BF]"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 4v16m8-8H4"
                />
              </svg>
            </div>
            <div>
              <p className="font-semibold text-slate-800 text-sm">
                Neue Anfrage stellen
              </p>
              <p className="text-xs text-slate-500">
                Reparatur, Frage oder sonstiges melden
              </p>
            </div>
          </div>
          <svg
            className="w-4 h-4 text-slate-300 group-hover:text-[#2DD4BF] transition-colors"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M9 5l7 7-7 7"
            />
          </svg>
        </Link>

        {/* Recent tickets */}
        <div>
          <div className="flex items-center justify-between mb-3">
            <h2 className="text-sm font-semibold text-slate-700">
              Aktuelle Anfragen
            </h2>
            <Link
              href="/tickets"
              className="text-xs text-[#2DD4BF] hover:text-teal-600 font-medium"
            >
              Alle anzeigen →
            </Link>
          </div>

          {error ? (
            <div className="bg-red-50 border border-red-200 rounded-xl p-4 text-sm text-red-700">
              <p className="font-medium">Fehler beim Laden</p>
              <p className="text-xs mt-1">{error}</p>
              <button
                onClick={loadData}
                className="text-xs text-red-700 underline mt-2"
              >
                Erneut versuchen
              </button>
            </div>
          ) : tickets.length === 0 ? (
            <div className="bg-white rounded-xl border border-slate-200 p-8 text-center">
              <div className="text-3xl mb-2">📋</div>
              <p className="text-slate-500 text-sm">
                Noch keine Anfragen vorhanden.
              </p>
              <Link
                href="/tickets/new"
                className="inline-block mt-3 text-sm text-[#2DD4BF] font-medium"
              >
                Erste Anfrage stellen →
              </Link>
            </div>
          ) : (
            <div className="space-y-3">
              {tickets.map((ticket) => (
                <TicketCard key={ticket.id} ticket={ticket} />
              ))}
              {tickets.length >= 3 && (
                <Link
                  href="/tickets"
                  className="block text-center text-sm text-[#2DD4BF] font-medium py-2"
                >
                  Alle Anfragen anzeigen →
                </Link>
              )}
            </div>
          )}
        </div>

        {/* Info banner */}
        <div className="bg-[#1B2B4B]/5 border border-[#1B2B4B]/10 rounded-xl p-4">
          <div className="flex items-start gap-3">
            <span className="text-xl">💡</span>
            <div>
              <p className="text-xs font-semibold text-slate-700">
                Notfall? Wir sind für Sie da.
              </p>
              <p className="text-xs text-slate-500 mt-0.5">
                Bei dringenden Problemen (Wasserrohrbruch, Stromausfall) wählen
                Sie bei einer neuen Anfrage &quot;Notfall&quot; — wir reagieren innerhalb
                von 2 Stunden.
              </p>
            </div>
          </div>
        </div>
      </div>

      <BottomNav />
    </div>
  );
}
