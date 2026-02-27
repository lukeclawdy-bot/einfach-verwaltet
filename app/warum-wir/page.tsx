import type { Metadata } from "next";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

export const metadata: Metadata = {
  title: "Warum einfach verwaltet.? | Moderne Hausverwaltung Hamburg",
  description:
    "Schnelle Reaktionszeiten, Echtzeit-Dashboard und volle Transparenz. Erfahren Sie warum Eigentümer uns ihrer Hausverwaltung bevorzugen.",
  openGraph: {
    title: "Warum einfach verwaltet.? | Moderne Hausverwaltung Hamburg",
    description:
      "Schnelle Reaktionszeiten, Echtzeit-Dashboard und volle Transparenz. Erfahren Sie warum Eigentümer uns ihrer Hausverwaltung bevorzugen.",
    url: "https://einfach-verwaltet.de/warum-wir",
    siteName: "einfach verwaltet.",
    locale: "de_DE",
    type: "website",
  },
};

// ── SVG icons (inline, no external deps) ─────────────────────────────────────

function ShieldCheckIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.75}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75m-3-7.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285Z" />
    </svg>
  );
}

function ClockIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.75}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
    </svg>
  );
}

function ChartBarIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.75}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 0 1 3 19.875v-6.75ZM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V8.625ZM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V4.125Z" />
    </svg>
  );
}

function DocumentTextIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.75}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Z" />
    </svg>
  );
}

function MapPinIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.75}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
    </svg>
  );
}

function PhoneIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.75}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z" />
    </svg>
  );
}

function CheckIcon() {
  return (
    <svg className="w-5 h-5 flex-shrink-0 text-teal" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
    </svg>
  );
}

function XIcon() {
  return (
    <svg className="w-5 h-5 flex-shrink-0 text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
    </svg>
  );
}

// ── Data ──────────────────────────────────────────────────────────────────────

const trustSignals = [
  {
    icon: ClockIcon,
    title: "Antwort in unter 15 Minuten",
    description: "Mieterfragen beantworten wir schnell. Kein Warten, keine Hotlines, kein Frust.",
    color: "teal",
  },
  {
    icon: ChartBarIcon,
    title: "Echtzeit-Dashboard",
    description: "Sie sehen jederzeit, was mit Ihrer Immobilie passiert. Transparenz statt Blackbox.",
    color: "navy",
  },
  {
    icon: ShieldCheckIcon,
    title: "§34c GewO lizenziert",
    description: "Wir sind behördlich zugelassen und berufshaftpflichtversichert. Ihr Risiko ist abgesichert.",
    color: "teal",
  },
  {
    icon: MapPinIcon,
    title: "In Hamburg verwurzelt",
    description: "Unser Team kennt den Hamburger Markt. Lokale Partner, lokale Expertise.",
    color: "navy",
  },
  {
    icon: DocumentTextIcon,
    title: "DSGVO-konform",
    description: "Alle Mieterdaten und Dokumente werden sicher und rechtskonform verwaltet.",
    color: "teal",
  },
  {
    icon: PhoneIcon,
    title: "Fester Ansprechpartner",
    description: "Sie haben immer eine direkte Kontaktperson. Kein Callcenter-Roulette.",
    color: "navy",
  },
];

const steps = [
  {
    number: "01",
    title: "Wir übernehmen Ihre Immobilie vollständig",
    description:
      "Onboarding innerhalb von 48 Stunden. Wir koordinieren alles mit dem Vorverwalter — Sie müssen nichts tun.",
  },
  {
    number: "02",
    title: "Ihr Mieter? Gut betreut.",
    description:
      "Anfragen, Reparaturen, Beschwerden — wir kümmern uns. Sie bekommen nur die wichtigen Updates.",
  },
  {
    number: "03",
    title: "Ihr Dashboard. Ihre Zahlen.",
    description:
      "Jederzeit Zugriff auf Mieteinnahmen, Betriebskosten, offene Tickets und Berichte.",
  },
];

const comparisonRows = [
  {
    eigenschaft: "Reaktionszeit auf Mieteranfragen",
    klassisch: "2–5 Tage",
    einfach: "< 15 Minuten",
    klassischBad: true,
  },
  {
    eigenschaft: "Transparenz",
    klassisch: "Jahresbericht",
    einfach: "Echtzeit-Dashboard",
    klassischBad: true,
  },
  {
    eigenschaft: "Erreichbarkeit",
    klassisch: "Mo–Fr 9–17 Uhr",
    einfach: "7 Tage / Woche",
    klassischBad: true,
  },
  {
    eigenschaft: "Nebenkostenabrechnung",
    klassisch: "Auf Anfrage",
    einfach: "Fristgerecht, pünktlich",
    klassischBad: true,
  },
  {
    eigenschaft: "Digitale Dokumente",
    klassisch: "Selten",
    einfach: "Immer",
    klassischBad: true,
  },
  {
    eigenschaft: "Kosten",
    klassisch: "€28–40/Einheit",
    einfach: "€24–34/Einheit",
    klassischBad: true,
  },
];

const promises = [
  {
    title: "Keine Überraschungen bei der Abrechnung",
    description:
      "Transparente Kostenstruktur. Was wir berechnen, erklären wir — Posten für Posten, nachvollziehbar im Dashboard.",
  },
  {
    title: "Ihr Mieter ruft uns an — nicht Sie",
    description:
      "Mieteranfragen, Reparaturmeldungen, Beschwerden — alles landet direkt bei uns. Sie behalten den Überblick, ohne den Alltag.",
  },
  {
    title: "Sie schlafen ruhig — wir kümmern uns",
    description:
      "7 Tage die Woche erreichbar. Egal ob Wasserrohrbruch oder Heizungsausfall — wir sind da, wenn es darauf ankommt.",
  },
];

const faqs = [
  {
    question: "Wie lange läuft ein Hausverwaltungsvertrag?",
    answer:
      "Üblicherweise 2 Jahre, kündbar mit 3 Monaten Frist zum Jahresende. Wir erklären Ihnen die Konditionen transparent vor Vertragsabschluss.",
  },
  {
    question: "Was passiert, wenn ich zu einfach verwaltet. wechsle?",
    answer:
      "Wir koordinieren alles mit Ihrem Vorverwalter. Die Übergabe aller Unterlagen und Prozesse erfolgt innerhalb von 48 Stunden — für Sie vollständig reibungslos.",
  },
  {
    question: "Sind meine Mieterdaten sicher?",
    answer:
      "Ja. Alle Daten werden DSGVO-konform verarbeitet, auf Servern in Deutschland gespeichert und sind zu keinem Zeitpunkt für Dritte zugänglich.",
  },
  {
    question: "Wie schnell sehe ich erste Ergebnisse?",
    answer:
      "Erste messbare Optimierungen — schnellere Reaktionszeiten, strukturierte Kommunikation, klare Abrechnungen — sind nach 30 Tagen spürbar.",
  },
  {
    question: "Was kostet der Wechsel?",
    answer:
      "Nichts. Der Wechsel zu einfach verwaltet. ist für Sie vollständig kostenlos. Wir übernehmen die Koordination mit Ihrem bisherigen Verwalter.",
  },
];

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((f) => ({
    "@type": "Question",
    name: f.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: f.answer,
    },
  })),
};

// ── Page ──────────────────────────────────────────────────────────────────────

export default function WarumWirPage() {
  return (
    <>
      <Navbar />
      <main className="pt-24">

        {/* ── 1. Hero ─────────────────────────────────────────────────────── */}
        <section className="py-16 lg:py-24 bg-navy text-white">
          <div className="max-w-[1100px] mx-auto px-6 text-center">
            <div className="inline-flex items-center gap-2 bg-teal/20 rounded-full px-4 py-1.5 mb-6">
              <span className="text-teal text-sm font-semibold">Vertrauen & Transparenz</span>
            </div>
            <h1 className="text-4xl sm:text-5xl font-bold mb-5 font-serif leading-tight">
              Warum{" "}
              <span className="text-teal">einfach verwaltet.</span>?
            </h1>
            <p className="text-lg text-white/75 max-w-2xl mx-auto leading-relaxed">
              Moderne Hausverwaltung, die wirklich funktioniert. Wir erklären Ihnen, wie wir das machen — und warum es einen Unterschied macht.
            </p>
            <div className="flex flex-wrap justify-center gap-4 mt-8">
              <a
                href="/anfrage"
                className="inline-block bg-teal text-white px-7 py-3.5 rounded-xl font-semibold hover:bg-teal/85 transition-all shadow-lg hover:shadow-xl"
              >
                Jetzt anfragen →
              </a>
              <a
                href="/preise"
                className="inline-block bg-white/10 text-white px-7 py-3.5 rounded-xl font-semibold hover:bg-white/20 transition-all border border-white/20"
              >
                Preise ansehen
              </a>
            </div>
          </div>
        </section>

        {/* ── 2. Trust Signals ────────────────────────────────────────────── */}
        <section className="py-16 lg:py-24 bg-warm-white">
          <div className="max-w-[1100px] mx-auto px-6">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-navy font-serif mb-3">
                Was Sie bei uns bekommen
              </h2>
              <p className="text-text-light max-w-xl mx-auto">
                Sechs Versprechen, die Ihren Alltag als Eigentümer grundlegend verändern.
              </p>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {trustSignals.map((signal) => {
                const Icon = signal.icon;
                return (
                  <div
                    key={signal.title}
                    className="bg-white rounded-2xl border border-gray-100 shadow-sm p-7 hover:shadow-md transition-shadow"
                  >
                    <div
                      className={`w-12 h-12 rounded-xl flex items-center justify-center mb-4 ${
                        signal.color === "teal"
                          ? "bg-teal/10"
                          : "bg-navy/8"
                      }`}
                    >
                      <Icon
                        className={`w-6 h-6 ${
                          signal.color === "teal" ? "text-teal" : "text-navy"
                        }`}
                      />
                    </div>
                    <h3 className="font-bold text-navy mb-2 text-lg">{signal.title}</h3>
                    <p className="text-text-light text-sm leading-relaxed">{signal.description}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* ── 3. Wie wir arbeiten ─────────────────────────────────────────── */}
        <section className="py-16 lg:py-24 bg-navy text-white">
          <div className="max-w-[1100px] mx-auto px-6">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold font-serif mb-3">Wie wir arbeiten</h2>
              <p className="text-white/70 max-w-xl mx-auto">
                Drei klare Schritte — vom ersten Tag an vollständig übernommen.
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              {steps.map((step) => (
                <div key={step.number} className="relative">
                  <div className="text-6xl font-bold text-teal/25 mb-3 font-serif">{step.number}</div>
                  <h3 className="text-xl font-bold mb-3 font-serif leading-snug">{step.title}</h3>
                  <p className="text-white/70 leading-relaxed text-sm">{step.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── 4. Vergleichstabelle ─────────────────────────────────────────── */}
        <section className="py-16 lg:py-24 bg-warm-white">
          <div className="max-w-[900px] mx-auto px-6">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-navy font-serif mb-3">Was uns unterscheidet</h2>
              <p className="text-text-light max-w-xl mx-auto">
                Ein direkter Vergleich mit klassischen Hausverwaltungen.
              </p>
            </div>
            <div className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
              {/* Header */}
              <div className="grid grid-cols-3 bg-navy text-white text-sm font-semibold">
                <div className="px-6 py-4">Eigenschaft</div>
                <div className="px-6 py-4 border-l border-white/10 text-center">Klassische HV</div>
                <div className="px-6 py-4 border-l border-white/10 text-center text-teal">einfach verwaltet.</div>
              </div>
              {/* Rows */}
              {comparisonRows.map((row, idx) => (
                <div
                  key={row.eigenschaft}
                  className={`grid grid-cols-3 text-sm border-t border-gray-100 ${
                    idx % 2 === 0 ? "bg-white" : "bg-gray-50/60"
                  }`}
                >
                  <div className="px-6 py-4 font-medium text-navy">{row.eigenschaft}</div>
                  <div className="px-6 py-4 border-l border-gray-100 text-center text-text-light flex items-center justify-center gap-2">
                    <XIcon />
                    <span>{row.klassisch}</span>
                  </div>
                  <div className="px-6 py-4 border-l border-gray-100 text-center text-navy font-semibold flex items-center justify-center gap-2">
                    <CheckIcon />
                    <span>{row.einfach}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── 5. Versprechen (statt Testimonials) ────────────────────────── */}
        <section className="py-16 lg:py-24 bg-white">
          <div className="max-w-[1100px] mx-auto px-6">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-navy font-serif mb-3">Was wir Ihnen versprechen</h2>
              <p className="text-text-light max-w-xl mx-auto">
                Wir sind neu — aber das sind unsere Grundsätze. Sie gelten vom ersten Tag an.
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-7">
              {promises.map((promise) => (
                <div
                  key={promise.title}
                  className="bg-teal/5 border border-teal/15 rounded-2xl p-8 flex flex-col"
                >
                  <div className="w-10 h-10 bg-teal/15 rounded-xl flex items-center justify-center mb-5">
                    <CheckIcon />
                  </div>
                  <h3 className="font-bold text-navy text-lg mb-3 font-serif leading-snug">{promise.title}</h3>
                  <p className="text-text-light text-sm leading-relaxed flex-1">{promise.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── 6. FAQ ──────────────────────────────────────────────────────── */}
        <section className="py-16 lg:py-24 bg-warm-white">
          <div className="max-w-[800px] mx-auto px-6">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-navy font-serif mb-3">Häufige Fragen</h2>
              <p className="text-text-light">Was Eigentümer uns am häufigsten fragen.</p>
            </div>
            <div className="space-y-4">
              {faqs.map((faq) => (
                <div
                  key={faq.question}
                  className="bg-white rounded-2xl border border-gray-100 shadow-sm p-7"
                >
                  <h3 className="font-bold text-navy mb-3 text-lg leading-snug">{faq.question}</h3>
                  <p className="text-text-light leading-relaxed text-sm">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── 7. CTA Footer ───────────────────────────────────────────────── */}
        <section className="py-16 lg:py-20 bg-navy text-white">
          <div className="max-w-[700px] mx-auto px-6 text-center">
            <h2 className="text-3xl font-bold font-serif mb-4">Überzeugt? Dann reden wir.</h2>
            <p className="text-white/75 mb-8 leading-relaxed">
              Kein Verkaufsgespräch, keine versteckten Kosten. Wir hören zu, verstehen Ihr Portfolio und machen Ihnen ein transparentes Angebot — in 24 Stunden.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a
                href="/anfrage"
                className="inline-block bg-teal text-white px-8 py-4 rounded-xl font-semibold text-lg hover:bg-teal/85 transition-all shadow-lg hover:shadow-xl"
              >
                Jetzt Anfrage stellen →
              </a>
              <a
                href="/kontakt"
                className="inline-block bg-white/10 text-white px-8 py-4 rounded-xl font-semibold text-lg hover:bg-white/20 transition-all border border-white/20"
              >
                Erstgespräch vereinbaren
              </a>
            </div>
          </div>
        </section>
      </main>

      {/* Schema.org FAQPage */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />

      <Footer />
    </>
  );
}
