"use client";

import { useEffect, useState } from "react";

type QAStatus = "pending" | "approved" | "needs-revision" | "needs-review";

interface QAStatusData {
  qaStatus: QAStatus;
  qaReasons: string[];
}

// ─── CONFIG ───────────────────────────────────────────────────────────────────

const QA_CONFIG: Record<QAStatus, {
  label: string;
  bg: string;
  border: string;
  text: string;
  icon: string;
}> = {
  pending: {
    label: "QA läuft...",
    bg: "bg-gray-50",
    border: "border-gray-200",
    text: "text-gray-500",
    icon: "⏳",
  },
  approved: {
    label: "✓ Abgenommen",
    bg: "bg-green-50",
    border: "border-green-200",
    text: "text-green-700",
    icon: "✓",
  },
  "needs-revision": {
    label: "⚠ Überarbeitung erforderlich",
    bg: "bg-red-50",
    border: "border-red-200",
    text: "text-red-700",
    icon: "⚠",
  },
  "needs-review": {
    label: "Manuelle Prüfung",
    bg: "bg-amber-50",
    border: "border-amber-200",
    text: "text-amber-700",
    icon: "👀",
  },
};

// ─── COMPONENT ────────────────────────────────────────────────────────────────

export function QAStatusBadge({ jobId }: { jobId: string }) {
  const [data, setData] = useState<QAStatusData | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let cancelled = false;

    async function fetchQA() {
      try {
        const res = await fetch(`/api/freelancer/jobs/${jobId}/qa-status`);
        if (!res.ok) return;
        const json: QAStatusData = await res.json();
        if (!cancelled) setData(json);
      } catch {
        // silently fail — component just won't show
      } finally {
        if (!cancelled) setLoading(false);
      }
    }

    fetchQA();

    // Poll every 10s when pending (Inngest function processes async)
    const interval = setInterval(async () => {
      if (data?.qaStatus && data.qaStatus !== "pending") {
        clearInterval(interval);
        return;
      }
      await fetchQA();
    }, 10_000);

    return () => {
      cancelled = true;
      clearInterval(interval);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [jobId]);

  // Don't render until we have data or status is not pending
  if (loading || !data) return null;

  const config = QA_CONFIG[data.qaStatus] || QA_CONFIG.pending;

  return (
    <div className={`rounded-xl border p-4 shadow-sm ${config.bg} ${config.border}`}>
      <div className="flex items-center justify-between">
        <h3 className="font-semibold text-sm text-navy flex items-center gap-2">
          <span className="w-6 h-6 bg-white/60 rounded-md flex items-center justify-center text-xs">
            🔍
          </span>
          Foto-QA Status
        </h3>
        <span className={`text-sm font-semibold ${config.text}`}>
          {config.label}
        </span>
      </div>

      {/* Show reasons for revision */}
      {data.qaStatus === "needs-revision" && data.qaReasons.length > 0 && (
        <div className="mt-3 pt-3 border-t border-red-200">
          <p className="text-xs font-medium text-red-700 mb-2">Bitte folgende Punkte korrigieren:</p>
          <ul className="space-y-1">
            {data.qaReasons.map((reason, i) => (
              <li key={i} className="text-xs text-red-600 flex items-start gap-1.5">
                <span className="mt-0.5 flex-shrink-0">•</span>
                <span>{reason}</span>
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* Explanation for manual review */}
      {data.qaStatus === "needs-review" && (
        <p className="text-xs text-amber-600 mt-2">
          Ein Mitarbeiter prüft die Fotos manuell. Du wirst innerhalb von 24 Stunden benachrichtigt.
        </p>
      )}

      {/* Success message */}
      {data.qaStatus === "approved" && (
        <p className="text-xs text-green-600 mt-2">
          Deine Arbeit wurde automatisch abgenommen. Zahlung wird vorbereitet.
        </p>
      )}

      {/* Pending hint */}
      {data.qaStatus === "pending" && (
        <p className="text-xs text-gray-400 mt-2 flex items-center gap-1">
          <span className="animate-pulse">●</span>
          KI-Prüfung läuft — wird automatisch aktualisiert
        </p>
      )}
    </div>
  );
}
