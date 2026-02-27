import Link from "next/link";

export function DemoBanner() {
  return (
    <div className="w-full bg-gradient-to-r from-amber-500 to-orange-500 text-white px-4 py-3 flex items-center justify-center gap-3 text-sm font-medium shadow-sm">
      <span className="flex items-center gap-2 flex-wrap justify-center">
        <svg
          className="w-5 h-5 flex-shrink-0"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M8 11V7a4 4 0 118 0m-4 8v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2z"
          />
        </svg>
        <span>
          <span className="font-bold">🔓 Demo-Modus</span>
          <span className="hidden sm:inline"> — Alle Daten sind fiktiv.</span>
        </span>
        <Link
          href="/anfrage"
          className="inline-flex items-center gap-1 bg-white text-orange-600 px-3 py-1.5 rounded-lg text-xs font-bold hover:bg-orange-50 transition-colors whitespace-nowrap shadow-sm"
        >
          Jetzt kostenlos starten
          <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </Link>
      </span>
    </div>
  );
}
