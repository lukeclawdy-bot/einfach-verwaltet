"use client";

import { useRouter } from "next/navigation";

export default function ProfiSchritt2Page() {
  const router = useRouter();

  return (
    <div className="space-y-8">
      <div className="text-center space-y-3">
        <h1 className="text-3xl font-bold text-navy">
          Professionelle Verwaltung
        </h1>
        <p className="text-text-light">
          Dieser Bereich ist für professionelle Verwalter und WEG-Verwaltungen.
        </p>
      </div>

      <div className="bg-white rounded-2xl p-8 border border-light-gray text-center space-y-6">
        <div className="w-20 h-20 bg-teal/10 rounded-full flex items-center justify-center mx-auto">
          <svg className="w-10 h-10 text-teal" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
          </svg>
        </div>

        <div className="space-y-2">
          <h2 className="text-xl font-semibold text-navy">
            Demnächst verfügbar
          </h2>
          <p className="text-text-light max-w-md mx-auto">
            Der Pro-Bereich mit Portfolio-Import, Team-Zugang und WEG-Funktionen wird in Kürze freigeschaltet.
          </p>
        </div>

        <div className="pt-4">
          <button
            onClick={() => router.push("/onboarding")}
            className="px-6 py-3 bg-teal text-white font-semibold rounded-lg hover:bg-teal/90 transition-all"
          >
            Zurück zur Auswahl
          </button>
        </div>

        <div className="pt-4 border-t border-light-gray">
          <p className="text-sm text-text-light">
            Haben Sie Fragen? Kontaktieren Sie uns unter{" "}
            <a href="mailto:pro@einfach-verwaltet.de" className="text-teal hover:underline">
              pro@einfach-verwaltet.de
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
