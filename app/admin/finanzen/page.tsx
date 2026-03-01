"use client";

import { AdminLayout } from "../components/AdminLayout";

const landlords = [
  {
    id: 1,
    name: "Thomas Bergmann",
    units: 12,
    monthlyFee: 288,
    status: "aktiv",
    since: "2026-01-01",
  },
  {
    id: 2,
    name: "Sandra Keller GbR",
    units: 8,
    monthlyFee: 192,
    status: "aktiv",
    since: "2026-01-15",
  },
  {
    id: 3,
    name: "Klaus-Dieter Hoffmann",
    units: 15,
    monthlyFee: 300,
    status: "überfällig",
    since: "2025-12-01",
  },
  {
    id: 4,
    name: "Immo Invest HH GmbH",
    units: 4,
    monthlyFee: 96,
    status: "überfällig",
    since: "2026-02-01",
  },
];

const totalMRR = landlords.reduce((sum, l) => sum + l.monthlyFee, 0);
const overdueCount = landlords.filter((l) => l.status === "überfällig").length;

// Last 6 months MRR data (demo)
const mrrTrend = [
  { month: "Okt", value: 384 },
  { month: "Nov", value: 480 },
  { month: "Dez", value: 576 },
  { month: "Jan", value: 672 },
  { month: "Feb", value: 780 },
  { month: "Mär", value: 876 },
];

const maxMrr = Math.max(...mrrTrend.map((d) => d.value));
const chartHeight = 120;
const barWidth = 36;
const barGap = 16;

export default function FinanzenPage() {
  return (
    <AdminLayout>
      <div className="p-8">
        {/* Header */}
        <div className="mb-8 flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold text-gray-900">📊 Finanzen</h1>
            <p className="text-gray-500 text-sm mt-1">
              Finanzübersicht aller Eigentümer — Stand:{" "}
              {new Date().toLocaleDateString("de-DE", {
                day: "2-digit",
                month: "long",
                year: "numeric",
              })}
            </p>
          </div>
          <a
            href="/portal/datev"
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
            DATEV Export
          </a>
        </div>

        {/* KPI Cards */}
        <div className="grid grid-cols-3 gap-6 mb-8">
          <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
            <p className="text-sm text-gray-500 font-medium mb-1">
              Monatliche Einnahmen (MRR)
            </p>
            <p className="text-3xl font-bold text-gray-900">
              €{totalMRR.toLocaleString("de-DE")}
            </p>
            <p className="text-xs text-teal mt-1 font-medium">
              ↑ +12% vs. Vormonat
            </p>
          </div>
          <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
            <p className="text-sm text-gray-500 font-medium mb-1">
              Aktive Eigentümer
            </p>
            <p className="text-3xl font-bold text-gray-900">
              {landlords.length}
            </p>
            <p className="text-xs text-gray-400 mt-1">
              {landlords.reduce((s, l) => s + l.units, 0)} Einheiten gesamt
            </p>
          </div>
          <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
            <p className="text-sm text-gray-500 font-medium mb-1">
              Offene Posten
            </p>
            <p className="text-3xl font-bold text-red-600">{overdueCount}</p>
            <p className="text-xs text-red-400 mt-1">
              Überfällige Rechnungen — Mahnung ausstehend
            </p>
          </div>
        </div>

        <div className="grid grid-cols-5 gap-6 mb-8">
          {/* MRR Chart */}
          <div className="col-span-2 bg-white rounded-xl p-6 shadow-sm border border-gray-100">
            <h2 className="text-sm font-semibold text-gray-700 mb-4">
              MRR-Entwicklung — letzte 6 Monate
            </h2>
            <svg
              width="100%"
              viewBox={`0 0 ${mrrTrend.length * (barWidth + barGap)} ${chartHeight + 40}`}
              className="overflow-visible"
            >
              {mrrTrend.map((d, i) => {
                const barH = Math.round((d.value / maxMrr) * chartHeight);
                const x = i * (barWidth + barGap);
                const y = chartHeight - barH;
                const isLast = i === mrrTrend.length - 1;
                return (
                  <g key={d.month}>
                    <rect
                      x={x}
                      y={y}
                      width={barWidth}
                      height={barH}
                      rx={4}
                      fill={isLast ? "#0d9488" : "#0d948840"}
                    />
                    {/* Value label */}
                    <text
                      x={x + barWidth / 2}
                      y={y - 5}
                      textAnchor="middle"
                      fontSize="9"
                      fill={isLast ? "#0d9488" : "#6b7280"}
                      fontWeight={isLast ? "600" : "400"}
                    >
                      €{d.value}
                    </text>
                    {/* Month label */}
                    <text
                      x={x + barWidth / 2}
                      y={chartHeight + 18}
                      textAnchor="middle"
                      fontSize="10"
                      fill="#9ca3af"
                    >
                      {d.month}
                    </text>
                  </g>
                );
              })}
            </svg>
          </div>

          {/* MRR Breakdown Table */}
          <div className="col-span-3 bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
            <div className="px-6 py-4 border-b border-gray-100">
              <h2 className="text-sm font-semibold text-gray-700">
                MRR Aufschlüsselung nach Eigentümer
              </h2>
            </div>
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-gray-50 text-xs text-gray-500 uppercase tracking-wide">
                  <th className="px-6 py-3 text-left">Eigentümer</th>
                  <th className="px-6 py-3 text-right">Einheiten</th>
                  <th className="px-6 py-3 text-right">Monatl. Gebühr</th>
                  <th className="px-6 py-3 text-center">Status</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-50">
                {landlords.map((l) => (
                  <tr key={l.id} className="hover:bg-gray-50 transition-colors">
                    <td className="px-6 py-3 font-medium text-gray-900">
                      {l.name}
                    </td>
                    <td className="px-6 py-3 text-right text-gray-600">
                      {l.units}
                    </td>
                    <td className="px-6 py-3 text-right font-semibold text-gray-900">
                      €{l.monthlyFee.toLocaleString("de-DE")}
                    </td>
                    <td className="px-6 py-3 text-center">
                      {l.status === "aktiv" ? (
                        <span className="inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-700">
                          Aktiv
                        </span>
                      ) : (
                        <span className="inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium bg-red-100 text-red-700">
                          Überfällig
                        </span>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
              <tfoot>
                <tr className="bg-gray-50 font-semibold">
                  <td className="px-6 py-3 text-gray-900">Gesamt</td>
                  <td className="px-6 py-3 text-right text-gray-600">
                    {landlords.reduce((s, l) => s + l.units, 0)}
                  </td>
                  <td className="px-6 py-3 text-right text-teal text-base">
                    €{totalMRR.toLocaleString("de-DE")}/mo
                  </td>
                  <td />
                </tr>
              </tfoot>
            </table>
          </div>
        </div>

        {/* Offene Posten */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
          <div className="px-6 py-4 border-b border-gray-100 flex items-center justify-between">
            <h2 className="text-sm font-semibold text-gray-700">
              ⚠️ Offene Posten ({overdueCount})
            </h2>
            <span className="text-xs text-red-500 font-medium">
              Mahnung erforderlich
            </span>
          </div>
          <div className="divide-y divide-gray-50">
            {landlords
              .filter((l) => l.status === "überfällig")
              .map((l) => (
                <div
                  key={l.id}
                  className="px-6 py-4 flex items-center justify-between"
                >
                  <div>
                    <p className="font-medium text-gray-900">{l.name}</p>
                    <p className="text-xs text-gray-400 mt-0.5">
                      Rechnung Feb 2026 — {l.units} Einheiten × €
                      {l.monthlyFee / l.units}/Einheit
                    </p>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="text-base font-bold text-red-600">
                      €{l.monthlyFee.toLocaleString("de-DE")}
                    </span>
                    <button className="px-3 py-1.5 text-xs bg-red-50 text-red-600 border border-red-200 rounded-lg hover:bg-red-100 transition-colors font-medium">
                      Mahnung senden
                    </button>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </div>
    </AdminLayout>
  );
}
