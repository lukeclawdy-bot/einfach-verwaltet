import Link from "next/link";

export function DemoBanner() {
  return (
    <div className="w-full bg-amber-500 text-white px-4 py-3 flex items-center justify-center gap-4 text-sm font-medium">
      <span className="flex items-center gap-2">
        <svg
          className="w-4 h-4 flex-shrink-0"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
        Sie befinden sich im Demo-Modus. Echte Daten werden nicht verändert.
      </span>
      <Link
        href="/anfrage"
        className="inline-flex items-center gap-1 bg-white text-amber-600 px-3 py-1 rounded-lg text-xs font-semibold hover:bg-amber-50 transition-colors whitespace-nowrap"
      >
        Jetzt anfragen →
      </Link>
    </div>
  );
}
