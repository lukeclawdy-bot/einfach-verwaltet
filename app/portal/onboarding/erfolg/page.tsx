"use client";

import { useSearchParams } from "next/navigation";
import { Suspense } from "react";

function ErfolgContent() {
  const params = useSearchParams();
  const email = params.get("email") || "Ihre E-Mail-Adresse";

  return (
    <div className="min-h-screen bg-warm-white flex items-center justify-center px-4">
      <div className="max-w-md w-full text-center">
        {/* Logo */}
        <a href="/" className="inline-flex items-center gap-2 mb-10">
          <div className="w-9 h-9 bg-navy rounded-xl flex items-center justify-center">
            <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
            </svg>
          </div>
          <span className="font-bold text-xl text-navy">einfach <span className="text-teal">verwaltet.</span></span>
        </a>

        {/* Success icon */}
        <div className="w-20 h-20 bg-teal/10 rounded-full flex items-center justify-center mx-auto mb-6">
          <svg className="w-10 h-10 text-teal" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
          </svg>
        </div>

        <h1 className="text-3xl font-bold text-navy mb-3">Fast fertig!</h1>
        <p className="text-text-light text-lg mb-2">
          Wir haben einen Anmelde-Link an
        </p>
        <p className="font-semibold text-navy text-lg mb-6">{email}</p>
        <p className="text-text-light mb-8">
          Klicken Sie auf den Link in der E-Mail, um Ihr Portal zu öffnen. Kein Passwort notwendig.
        </p>

        <div className="bg-white rounded-2xl border border-gray-100 p-5 text-sm text-text-light">
          <p className="font-medium text-navy mb-1">Keine E-Mail erhalten?</p>
          <p>Prüfen Sie Ihren Spam-Ordner oder schreiben Sie uns unter{" "}
            <a href="mailto:portal@einfach-verwaltet.de" className="text-teal hover:underline">
              portal@einfach-verwaltet.de
            </a>
          </p>
        </div>

        <p className="text-xs text-text-light mt-8">
          Der Link ist 24 Stunden gültig.
        </p>
      </div>
    </div>
  );
}

export default function ErfolgPage() {
  return (
    <Suspense fallback={<div className="min-h-screen bg-warm-white flex items-center justify-center"><div className="text-navy">Laden...</div></div>}>
      <ErfolgContent />
    </Suspense>
  );
}
