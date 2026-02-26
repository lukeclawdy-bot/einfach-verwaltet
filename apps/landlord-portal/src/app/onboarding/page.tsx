"use client";

import Link from "next/link";

function HouseIcon() {
  return (
    <svg className="w-16 h-16 text-teal" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
    </svg>
  );
}

function BuildingIcon() {
  return (
    <svg className="w-16 h-16 text-navy" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
    </svg>
  );
}

function CheckIcon() {
  return (
    <svg className="w-5 h-5 text-teal mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
    </svg>
  );
}

export default function OnboardingStep1Page() {
  return (
    <div className="space-y-8">
      <div className="text-center space-y-3">
        <h1 className="text-3xl sm:text-4xl font-bold text-navy">
          Willkommen bei einfach verwaltet.
        </h1>
        <p className="text-text-light text-lg">
          Wie möchten Sie starten?
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-6 mt-12">
        {/* Card 1: Privatvermieter */}
        <Link
          href="/onboarding/privat/schritt-2"
          className="group relative bg-white rounded-2xl p-8 border-2 border-light-gray hover:border-teal hover:shadow-xl transition-all duration-300 flex flex-col"
        >
          <div className="mb-6 group-hover:scale-110 transition-transform duration-300">
            <HouseIcon />
          </div>
          <h2 className="text-2xl font-bold text-navy mb-2">
            Privatvermieter
          </h2>
          <p className="text-text-light mb-6">
            1–10 Einheiten, ich verwalte selbst
          </p>
          <ul className="space-y-3 mb-8 flex-grow">
            <li className="flex items-center text-sm text-text-main">
              <CheckIcon />
              Einfacher Start
            </li>
            <li className="flex items-center text-sm text-text-main">
              <CheckIcon />
              Keine Vorkenntnisse nötig
            </li>
            <li className="flex items-center text-sm text-text-main">
              <CheckIcon />
              In 10 Minuten startklar
            </li>
          </ul>
          <div className="flex items-center text-teal font-semibold group-hover:translate-x-2 transition-transform duration-300">
            Als Privatvermieter starten
            <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </div>
        </Link>

        {/* Card 2: Professioneller Verwalter */}
        <Link
          href="/onboarding/profi/schritt-2"
          className="group relative bg-white rounded-2xl p-8 border-2 border-light-gray hover:border-teal hover:shadow-xl transition-all duration-300 flex flex-col"
        >
          <div className="mb-6 group-hover:scale-110 transition-transform duration-300">
            <BuildingIcon />
          </div>
          <h2 className="text-2xl font-bold text-navy mb-2">
            Professioneller Verwalter
          </h2>
          <p className="text-text-light mb-6">
            10+ Einheiten oder WEG-Verwaltung
          </p>
          <ul className="space-y-3 mb-8 flex-grow">
            <li className="flex items-center text-sm text-text-main">
              <CheckIcon />
              Portfolio-Import
            </li>
            <li className="flex items-center text-sm text-text-main">
              <CheckIcon />
              Team-Zugang
            </li>
            <li className="flex items-center text-sm text-text-main">
              <CheckIcon />
              WEG & Mietverwaltung
            </li>
          </ul>
          <div className="flex items-center text-teal font-semibold group-hover:translate-x-2 transition-transform duration-300">
            Als Profi starten
            <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </div>
        </Link>
      </div>
    </div>
  );
}
