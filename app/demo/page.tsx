import { DemoStartButton } from "./components/DemoStartButton";
import Link from "next/link";

export const metadata = {
  title: "Demo — einfach verwaltet.",
  description: "Testen Sie unsere Hausverwaltungssoftware kostenlos und ohne Registrierung. Erleben Sie die Zukunft der Immobilienverwaltung.",
};

export default function DemoPage() {
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

      {/* Hero */}
      <main className="max-w-6xl mx-auto px-6 py-16 md:py-24">
        {/* Two-column layout: main content + floating CTA */}
        <div className="flex flex-col lg:flex-row gap-8 items-start">
          {/* Main column */}
          <div className="flex-1 min-w-0">
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-teal/10 text-teal rounded-full text-sm font-medium mb-6">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                </svg>
                Kostenlos testen
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-navy mb-6">
                Erleben Sie die Zukunft der <span className="text-teal">Hausverwaltung</span>
              </h1>
              <p className="text-lg text-text-light max-w-2xl mx-auto">
                Testen Sie alle Funktionen unseres Vermieter-Portals ohne Registrierung. 
                Die Demo zeigt Ihnen, wie einfach Immobilienverwaltung sein kann.
              </p>
            </div>

            {/* "Was Sie als echter Kunde sehen" info box */}
            <div className="bg-navy/5 border border-navy/15 rounded-2xl p-6 mb-8">
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 bg-navy/10 rounded-xl flex items-center justify-center flex-shrink-0 mt-0.5">
                  <svg className="w-5 h-5 text-navy" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-bold text-navy mb-3">Was Sie als echter Kunde sehen</h3>
                  <div className="grid sm:grid-cols-2 gap-3 text-sm">
                    <div>
                      <p className="font-semibold text-navy mb-1.5">🎭 In der Demo (jetzt):</p>
                      <ul className="space-y-1 text-text-light">
                        <li>• Fiktive Musterobjekte & Mieter</li>
                        <li>• Simulierte KI-Vorschläge</li>
                        <li>• 1-Stunden-Session, kein Konto</li>
                        <li>• Keine echten Dokumente</li>
                        <li>• Keine DATEV-Anbindung</li>
                      </ul>
                    </div>
                    <div>
                      <p className="font-semibold text-navy mb-1.5">✅ Als echter Kunde:</p>
                      <ul className="space-y-1 text-text-light">
                        <li>• Ihre echten Objekte & Mieter</li>
                        <li>• KI analysiert Ihre Daten</li>
                        <li>• Volles Portal, kein Ablauf</li>
                        <li>• Rechtssichere Dokumente</li>
                        <li>• DATEV + Banking Integration</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Features Grid */}
            <div className="grid md:grid-cols-3 gap-6 mb-12">
              <div className="bg-white p-6 rounded-2xl border border-gray-100">
                <div className="w-12 h-12 bg-teal/10 rounded-xl flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-teal" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  </svg>
                </div>
                <h3 className="font-bold text-navy mb-2">Dashboard & Übersicht</h3>
                <p className="text-sm text-text-light">
                  Alle wichtigen Kennzahlen auf einen Blick: Belegung, Mieteinnahmen, offene Tickets
                </p>
              </div>

              <div className="bg-white p-6 rounded-2xl border border-gray-100">
                <div className="w-12 h-12 bg-teal/10 rounded-xl flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-teal" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                </div>
                <h3 className="font-bold text-navy mb-2">KI-gestützte Aktionen</h3>
                <p className="text-sm text-text-light">
                  Unsere KI schlägt Ihnen intelligente nächste Schritte vor — von Mieterhöhungen bis zur Wartung
                </p>
              </div>

              <div className="bg-white p-6 rounded-2xl border border-gray-100">
                <div className="w-12 h-12 bg-teal/10 rounded-xl flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-teal" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
                  </svg>
                </div>
                <h3 className="font-bold text-navy mb-2">Ticket-Management</h3>
                <p className="text-sm text-text-light">
                  Behalten Sie Mieteranliegen im Blick — priorisiert nach Dringlichkeit
                </p>
              </div>
            </div>

            {/* Demo Preview */}
            <div className="bg-navy rounded-3xl p-8 md:p-12 mb-12 text-center">
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
                Bereit für die Demo?
              </h2>
              <p className="text-white/70 mb-8 max-w-xl mx-auto">
                In wenigen Sekunden sind Sie im Demo-Modus. Keine E-Mail-Adresse nötig, 
                keine Verpflichtungen. Testen Sie in Ruhe.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <DemoStartButton />
                <Link
                  href="/anfrage"
                  className="inline-flex items-center justify-center px-8 py-4 bg-white/10 text-white font-semibold rounded-xl hover:bg-white/20 transition-all duration-200 text-lg"
                >
                  Persönliche Beratung
                </Link>
              </div>
              <p className="text-white/40 text-sm mt-6">
                Demo läuft 1 Stunde • Keine Registrierung erforderlich • Testdaten
              </p>
            </div>

            {/* Trust Indicators */}
            <div className="grid md:grid-cols-3 gap-8 text-center">
              <div>
                <div className="text-3xl font-bold text-navy mb-1">500+</div>
                <div className="text-sm text-text-light">Verwaltete Einheiten</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-navy mb-1">98%</div>
                <div className="text-sm text-text-light">Kundenzufriedenheit</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-navy mb-1">DSGVO</div>
                <div className="text-sm text-text-light">Konform & sicher</div>
              </div>
            </div>
          </div>

          {/* Floating CTA Card (right sidebar on desktop) */}
          <aside className="lg:w-72 lg:sticky lg:top-8 flex-shrink-0">
            <div className="bg-white rounded-3xl border-2 border-teal/30 shadow-lg shadow-teal/10 p-6">
              {/* Badge */}
              <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-teal/10 text-teal rounded-full text-xs font-semibold mb-4">
                <span className="w-1.5 h-1.5 bg-teal rounded-full animate-pulse" />
                Für Vermieter & Hausverwalter
              </div>

              <h3 className="text-xl font-bold text-navy mb-2">
                Bereit für echte Verwaltung?
              </h3>
              <p className="text-sm text-text-light mb-5">
                Erleben Sie, wie einfach verwaltet. Ihre echten Objekte verwaltet — 
                mit Ihren Mietern, Ihren Dokumenten und Ihren Finanzen.
              </p>

              {/* Benefits */}
              <ul className="space-y-2.5 mb-6">
                {[
                  "Onboarding in 48 Stunden",
                  "Keine Einrichtungsgebühr",
                  "KI-Assistent inklusive",
                  "DATEV-Export ready",
                  "Kündigung jederzeit möglich",
                ].map((benefit) => (
                  <li key={benefit} className="flex items-center gap-2 text-sm text-navy">
                    <svg
                      className="w-4 h-4 text-teal flex-shrink-0"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2.5}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    {benefit}
                  </li>
                ))}
              </ul>

              {/* CTA Button */}
              <Link
                href="/anfrage"
                className="block w-full py-3.5 bg-teal text-white text-center font-semibold rounded-xl hover:bg-navy transition-all duration-200 text-sm"
              >
                Kostenlose Beratung anfragen
              </Link>

              <p className="text-xs text-center text-text-light mt-3">
                Kostenlos & unverbindlich · Antwort in 24h
              </p>
            </div>

            {/* Pricing hint */}
            <div className="mt-4 bg-navy/5 rounded-2xl p-4 text-center">
              <p className="text-xs text-text-light">
                Ab <strong className="text-navy">14 €/Einheit/Monat</strong>
              </p>
              <p className="text-xs text-text-light">
                Inkl. Portal, KI & Support
              </p>
              <Link href="/preise" className="text-xs text-teal hover:underline mt-1 block">
                Alle Preise ansehen →
              </Link>
            </div>
          </aside>
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-gray-100 py-8">
        <div className="max-w-6xl mx-auto px-6 text-center text-sm text-text-light">
          © 2025 einfach verwaltet. Alle Rechte vorbehalten.
        </div>
      </footer>
    </div>
  );
}
