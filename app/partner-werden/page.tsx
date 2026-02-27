import { Metadata } from "next";
import Link from "next/link";
import { PartnerRegistrationForm } from "./PartnerRegistrationForm";

export const metadata: Metadata = {
  title: "Partner werden — einfach verwaltet.",
  description:
    "Werden Sie Servicepartner von einfach verwaltet. Profitieren Sie von direkten Auftragsempfehlungen für Hausmeister, Elektriker, Sanitär, Reinigung und mehr.",
};

export default function PartnerWerdenPage() {
  return (
    <div className="min-h-screen bg-light-gray">
      {/* Header */}
      <header className="bg-white border-b border-gray-100">
        <div className="max-w-6xl mx-auto px-6 py-4">
          <Link href="/" className="flex items-center gap-2">
            <div className="w-8 h-8 bg-navy rounded-lg flex items-center justify-center">
              <span className="text-teal font-bold text-sm">ev</span>
            </div>
            <span className="text-navy font-bold">
              einfach <span className="text-teal">verwaltet.</span>
            </span>
          </Link>
        </div>
      </header>

      <main className="max-w-4xl mx-auto px-6 py-16">
        {/* Hero */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-teal/10 text-teal rounded-full text-sm font-medium mb-6">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
            </svg>
            Für Handwerker & Dienstleister
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-navy mb-6">
            Partner werden bei{" "}
            <span className="text-teal">einfach verwaltet.</span>
          </h1>
          <p className="text-lg text-text-light max-w-2xl mx-auto">
            Wir vermitteln Ihnen regelmäßige Aufträge aus unserem wachsenden
            Immobilienbestand in Hamburg, Berlin und München. Direkt, transparent
            und zuverlässig.
          </p>
        </div>

        {/* Benefits */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          <div className="bg-white p-6 rounded-2xl border border-gray-100">
            <div className="w-12 h-12 bg-teal/10 rounded-xl flex items-center justify-center mb-4">
              <svg className="w-6 h-6 text-teal" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
              </svg>
            </div>
            <h3 className="font-bold text-navy mb-2">Regelmäßige Aufträge</h3>
            <p className="text-sm text-text-light">
              Unser wachsendes Immobilienportfolio bedeutet kontinuierliche
              Auftragsvolumen für verlässliche Partner.
            </p>
          </div>
          <div className="bg-white p-6 rounded-2xl border border-gray-100">
            <div className="w-12 h-12 bg-teal/10 rounded-xl flex items-center justify-center mb-4">
              <svg className="w-6 h-6 text-teal" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className="font-bold text-navy mb-2">Faire Vergütung</h3>
            <p className="text-sm text-text-light">
              Pünktliche Bezahlung, keine Zahlungsverzögerungen. Wir schätzen
              unsere Partner und zahlen fair.
            </p>
          </div>
          <div className="bg-white p-6 rounded-2xl border border-gray-100">
            <div className="w-12 h-12 bg-teal/10 rounded-xl flex items-center justify-center mb-4">
              <svg className="w-6 h-6 text-teal" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <h3 className="font-bold text-navy mb-2">Einfache Abwicklung</h3>
            <p className="text-sm text-text-light">
              Klare Auftragserteilung, digitale Dokumentation, unkomplizierte
              Kommunikation über unsere Plattform.
            </p>
          </div>
        </div>

        {/* Registration Form */}
        <div className="bg-white rounded-3xl border border-gray-100 p-8 md:p-12">
          <h2 className="text-2xl font-bold text-navy mb-2">
            Jetzt als Partner bewerben
          </h2>
          <p className="text-text-light mb-8">
            Füllen Sie das Formular aus — wir melden uns innerhalb von 2
            Werktagen bei Ihnen.
          </p>
          <PartnerRegistrationForm />
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-gray-100 py-8 mt-16">
        <div className="max-w-6xl mx-auto px-6 text-center text-sm text-text-light">
          © 2025 einfach verwaltet. Alle Rechte vorbehalten. &nbsp;·&nbsp;
          <Link href="/datenschutz" className="hover:text-navy">
            Datenschutz
          </Link>{" "}
          &nbsp;·&nbsp;
          <Link href="/impressum" className="hover:text-navy">
            Impressum
          </Link>
        </div>
      </footer>
    </div>
  );
}
