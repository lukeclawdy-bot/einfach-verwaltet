"use client";

import { useState, useEffect, useCallback } from "react";
import { useRouter, useParams } from "next/navigation";
import Link from "next/link";
import { getToken, getTicket } from "@/lib/api";
import { BottomNav } from "@/components/ui/BottomNav";
import { StatusBadge } from "@/components/ui/StatusBadge";
import { categoryLabel, formatDate, formatDateShort, priorityColor } from "@/lib/utils";
import { PRIORITY_LABELS } from "@/types";
import type { Ticket } from "@/types";

// Timeline events derived from ticket data
function buildTimeline(ticket: Ticket) {
  const events: Array<{
    date: string;
    label: string;
    description: string;
    icon: string;
    color: string;
  }> = [];

  events.push({
    date: ticket.createdAt,
    label: "Anfrage eingereicht",
    description: "Ihre Anfrage wurde erfolgreich übermittelt.",
    icon: "📋",
    color: "bg-slate-100",
  });

  if (ticket.status === "in_progress" || ticket.status === "resolved" || ticket.status === "closed") {
    events.push({
      date: ticket.updatedAt,
      label: "In Bearbeitung",
      description: "Ihre Anfrage wird von der Hausverwaltung bearbeitet.",
      icon: "🔨",
      color: "bg-blue-50",
    });
  }

  if (ticket.status === "resolved" || ticket.status === "closed") {
    events.push({
      date: ticket.resolvedAt ?? ticket.updatedAt,
      label: "Erledigt",
      description:
        ticket.resolutionNote ?? "Die Anfrage wurde abgeschlossen.",
      icon: "✅",
      color: "bg-emerald-50",
    });
  }

  return events.reverse(); // newest first
}

export default function TicketDetailPage() {
  const router = useRouter();
  const params = useParams<{ id: string }>();
  const [ticket, setTicket] = useState<Ticket | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const loadTicket = useCallback(async () => {
    if (!getToken()) {
      router.replace("/");
      return;
    }

    try {
      const data = await getTicket(params.id);
      setTicket(data.ticket);
    } catch (err) {
      setError(
        err instanceof Error ? err.message : "Ticket konnte nicht geladen werden."
      );
    } finally {
      setIsLoading(false);
    }
  }, [router, params.id]);

  useEffect(() => {
    loadTicket();
  }, [loadTicket]);

  if (isLoading) {
    return (
      <div className="min-h-screen bg-[#F8FAFC] flex items-center justify-center">
        <div className="text-center space-y-3">
          <div className="w-8 h-8 border-2 border-[#2DD4BF] border-t-transparent rounded-full animate-spin mx-auto" />
          <p className="text-sm text-slate-500">Wird geladen…</p>
        </div>
      </div>
    );
  }

  if (error || !ticket) {
    return (
      <div className="min-h-screen bg-[#F8FAFC] flex items-center justify-center px-4">
        <div className="text-center bg-white rounded-xl border border-slate-200 p-8 max-w-sm w-full">
          <div className="text-4xl mb-3">⚠️</div>
          <p className="font-semibold text-slate-700">Ticket nicht gefunden</p>
          <p className="text-sm text-slate-400 mt-1">
            {error ?? "Das angeforderte Ticket konnte nicht geladen werden."}
          </p>
          <Link
            href="/tickets"
            className="inline-block mt-4 text-sm text-[#2DD4BF] font-medium"
          >
            ← Zurück zur Übersicht
          </Link>
        </div>
      </div>
    );
  }

  const timeline = buildTimeline(ticket);
  const prioColors = priorityColor(ticket.priority);

  return (
    <div className="min-h-screen bg-[#F8FAFC] pb-24">
      {/* Header */}
      <div className="bg-white border-b border-slate-200 px-4 pt-12 pb-4 sticky top-0 z-40">
        <div className="max-w-md mx-auto flex items-center gap-3">
          <Link
            href="/tickets"
            className="p-2 -ml-2 rounded-lg hover:bg-slate-100 transition-colors text-slate-600"
          >
            <svg
              className="w-5 h-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </Link>
          <div className="flex-1 min-w-0">
            <h1 className="text-base font-bold text-slate-800 truncate">
              {ticket.title}
            </h1>
            <p className="text-xs text-slate-500">
              #{ticket.id.slice(-8).toUpperCase()}
            </p>
          </div>
          <StatusBadge status={ticket.status} size="sm" />
        </div>
      </div>

      {/* Content */}
      <div className="max-w-md mx-auto px-4 mt-4 space-y-4">
        {/* Ticket info card */}
        <div className="bg-white rounded-xl border border-slate-200 p-5">
          <h2 className="text-sm font-semibold text-slate-700 mb-4">Details</h2>

          <div className="space-y-3">
            {/* Status */}
            <div className="flex items-center justify-between">
              <span className="text-xs text-slate-500">Status</span>
              <StatusBadge status={ticket.status} size="sm" />
            </div>

            {/* Category */}
            <div className="flex items-center justify-between">
              <span className="text-xs text-slate-500">Kategorie</span>
              <span className="text-xs font-medium text-slate-700">
                {categoryLabel(ticket.category)}
              </span>
            </div>

            {/* Priority */}
            <div className="flex items-center justify-between">
              <span className="text-xs text-slate-500">Dringlichkeit</span>
              <span
                className={`text-xs font-medium px-2 py-0.5 rounded-full ${prioColors.bg} ${prioColors.text}`}
              >
                {PRIORITY_LABELS[ticket.priority]}
              </span>
            </div>

            {/* Created */}
            <div className="flex items-center justify-between">
              <span className="text-xs text-slate-500">Eingereicht am</span>
              <span className="text-xs font-medium text-slate-700">
                {formatDate(ticket.createdAt)}
              </span>
            </div>

            {/* Updated */}
            {ticket.updatedAt !== ticket.createdAt && (
              <div className="flex items-center justify-between">
                <span className="text-xs text-slate-500">Zuletzt aktualisiert</span>
                <span className="text-xs font-medium text-slate-700">
                  {formatDateShort(ticket.updatedAt)}
                </span>
              </div>
            )}
          </div>
        </div>

        {/* Description */}
        <div className="bg-white rounded-xl border border-slate-200 p-5">
          <h2 className="text-sm font-semibold text-slate-700 mb-3">
            Beschreibung
          </h2>
          <p className="text-sm text-slate-600 leading-relaxed">
            {ticket.description}
          </p>
        </div>

        {/* Resolution note (if resolved) */}
        {ticket.resolutionNote && (
          <div className="bg-emerald-50 border border-emerald-200 rounded-xl p-5">
            <div className="flex items-start gap-2">
              <span className="text-lg">✅</span>
              <div>
                <h2 className="text-sm font-semibold text-emerald-800 mb-1">
                  Lösungsnotiz der Hausverwaltung
                </h2>
                <p className="text-sm text-emerald-700 leading-relaxed">
                  {ticket.resolutionNote}
                </p>
              </div>
            </div>
          </div>
        )}

        {/* Timeline */}
        <div className="bg-white rounded-xl border border-slate-200 p-5">
          <h2 className="text-sm font-semibold text-slate-700 mb-4">
            Verlauf
          </h2>

          <div className="relative">
            {/* Vertical line */}
            <div className="absolute left-4 top-5 bottom-0 w-px bg-slate-100" />

            <div className="space-y-4">
              {timeline.map((event, idx) => (
                <div key={idx} className="flex gap-3 relative">
                  <div
                    className={`w-8 h-8 rounded-full ${event.color} flex items-center justify-center flex-shrink-0 z-10 text-sm border-2 border-white`}
                  >
                    {event.icon}
                  </div>
                  <div className="flex-1 pb-1">
                    <p className="text-xs font-semibold text-slate-700">
                      {event.label}
                    </p>
                    <p className="text-xs text-slate-500 mt-0.5">
                      {event.description}
                    </p>
                    <p className="text-[10px] text-slate-400 mt-1">
                      {formatDate(event.date)}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Contact info */}
        <div className="bg-slate-50 border border-slate-200 rounded-xl p-4">
          <p className="text-xs text-slate-500 text-center">
            Fragen zu dieser Anfrage?{" "}
            <a
              href="mailto:service@einfach-verwaltet.de"
              className="text-[#2DD4BF] font-medium"
            >
              service@einfach-verwaltet.de
            </a>
          </p>
        </div>
      </div>

      <BottomNav />
    </div>
  );
}
