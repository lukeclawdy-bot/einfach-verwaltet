"use client";

import { useState, useEffect, useCallback } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { getToken, listTickets } from "@/lib/api";
import { BottomNav } from "@/components/ui/BottomNav";
import { TicketCard } from "@/components/ui/TicketCard";
import type { Ticket } from "@/types";

type FilterStatus = "all" | "open" | "in_progress" | "resolved";

const FILTERS: Array<{ value: FilterStatus; label: string }> = [
  { value: "all", label: "Alle" },
  { value: "open", label: "Offen" },
  { value: "in_progress", label: "In Bearbeitung" },
  { value: "resolved", label: "Erledigt" },
];

export default function TicketsPage() {
  const router = useRouter();
  const [tickets, setTickets] = useState<Ticket[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [filter, setFilter] = useState<FilterStatus>("all");

  const loadTickets = useCallback(async () => {
    if (!getToken()) {
      router.replace("/");
      return;
    }

    setIsLoading(true);
    setError(null);
    try {
      const params =
        filter !== "all" ? { status: filter, limit: 50 } : { limit: 50 };
      const data = await listTickets(params);
      setTickets(data.tickets ?? []);
    } catch (err) {
      setError(
        err instanceof Error
          ? err.message
          : "Fehler beim Laden der Anfragen."
      );
    } finally {
      setIsLoading(false);
    }
  }, [router, filter]);

  useEffect(() => {
    loadTickets();
  }, [loadTickets]);

  const filteredTickets =
    filter === "all"
      ? tickets
      : tickets.filter((t) => t.status === filter);

  return (
    <div className="min-h-screen bg-[#F8FAFC] pb-24">
      {/* Header */}
      <div className="bg-white border-b border-slate-200 px-4 pt-12 pb-4 sticky top-0 z-40">
        <div className="max-w-md mx-auto">
          <div className="flex items-center justify-between mb-4">
            <h1 className="text-xl font-bold text-slate-800">
              Meine Anfragen
            </h1>
            <Link
              href="/tickets/new"
              className="flex items-center gap-1.5 bg-[#1B2B4B] text-white text-xs font-semibold px-3 py-2 rounded-lg hover:bg-[#263d6e] transition-colors"
            >
              <svg
                className="w-3.5 h-3.5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2.5}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 4v16m8-8H4"
                />
              </svg>
              Neue Anfrage
            </Link>
          </div>

          {/* Filter tabs */}
          <div className="flex gap-2 overflow-x-auto pb-1 -mx-1 px-1 scrollbar-none">
            {FILTERS.map((f) => (
              <button
                key={f.value}
                onClick={() => setFilter(f.value)}
                className={`flex-shrink-0 px-3 py-1.5 rounded-full text-xs font-medium transition-all ${
                  filter === f.value
                    ? "bg-[#1B2B4B] text-white"
                    : "bg-slate-100 text-slate-600 hover:bg-slate-200"
                }`}
              >
                {f.label}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-md mx-auto px-4 mt-4">
        {isLoading ? (
          <div className="space-y-3">
            {[1, 2, 3].map((i) => (
              <div
                key={i}
                className="bg-white rounded-xl border border-slate-200 p-4 animate-pulse"
              >
                <div className="flex gap-3">
                  <div className="w-10 h-10 rounded-lg bg-slate-200" />
                  <div className="flex-1 space-y-2">
                    <div className="h-4 bg-slate-200 rounded w-3/4" />
                    <div className="h-3 bg-slate-100 rounded w-full" />
                    <div className="h-3 bg-slate-100 rounded w-1/2" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : error ? (
          <div className="bg-red-50 border border-red-200 rounded-xl p-4 text-sm text-red-700">
            <p className="font-medium">Fehler beim Laden</p>
            <p className="text-xs mt-1">{error}</p>
            <button
              onClick={loadTickets}
              className="text-xs text-red-700 underline mt-2"
            >
              Erneut versuchen
            </button>
          </div>
        ) : filteredTickets.length === 0 ? (
          <div className="bg-white rounded-xl border border-slate-200 p-10 text-center mt-4">
            <div className="text-4xl mb-3">
              {filter === "all" ? "📋" : filter === "resolved" ? "✅" : "🔍"}
            </div>
            <p className="font-medium text-slate-700">
              {filter === "all"
                ? "Noch keine Anfragen"
                : `Keine ${
                    filter === "open"
                      ? "offenen"
                      : filter === "in_progress"
                      ? "aktiven"
                      : "erledigten"
                  } Anfragen`}
            </p>
            <p className="text-sm text-slate-400 mt-1">
              {filter === "all"
                ? "Stellen Sie Ihre erste Anfrage über den Button oben."
                : "Wechseln Sie den Filter oder stellen Sie eine neue Anfrage."}
            </p>
            {filter === "all" && (
              <Link
                href="/tickets/new"
                className="inline-block mt-4 px-5 py-2.5 bg-[#1B2B4B] text-white text-sm font-semibold rounded-xl hover:bg-[#263d6e] transition-colors"
              >
                Erste Anfrage stellen
              </Link>
            )}
          </div>
        ) : (
          <div className="space-y-3">
            {filteredTickets.map((ticket) => (
              <TicketCard key={ticket.id} ticket={ticket} />
            ))}
            <p className="text-xs text-slate-400 text-center py-2">
              {filteredTickets.length}{" "}
              {filteredTickets.length === 1 ? "Anfrage" : "Anfragen"}
            </p>
          </div>
        )}
      </div>

      <BottomNav />
    </div>
  );
}
