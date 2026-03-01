import type { Metadata } from "next";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

export const metadata: Metadata = {
  title: "Hausverwaltung wechseln — Schritt für Schritt | einfach verwaltet.",
  description:
    "So wechseln Sie Ihre Hausverwaltung reibungslos. Kündigungsfristen, Dokumentenübergabe, Mieterinformation — wir begleiten Sie durch den gesamten Prozess.",
  openGraph: {
    title: "Hausverwaltung wechseln — Schritt für Schritt | einfach verwaltet.",
    description: "Der komplette Guide zum Wechsel der Hausverwaltung. Rechtssicher, unkompliziert, ohne Stress.",
    url: "https://einfach-verwaltet.de/hausverwaltung-wechseln",
    siteName: "einfach verwaltet.",
    locale: "de_DE",
    type: "article",
  },
};

// Schema.org structured data for HowTo
const howtoStructuredData = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  "name": "Hausverwaltung wechseln",
  "description": "Schritt-für-Schritt-Anleitung zum Wechsel der Hausverwaltung in Hamburg. Von der Kündigung bis zur Übergabe.",
  "totalTime": "P4W",
  "supply": [
    { "@type": "HowToSupply", "name": "Kündigungsbestätigung" },
    { "@type": "HowToSupply", "name": "Mietverträge" },
    { "@type": "HowToSupply", "name": "Nebenkostenabrechnungen" }
  ],
  "step": [
    {
      "@type": "HowToStep",
      "position": 1,
      "name": "Bestehenden Verwalter kündigen",
      "text": "Kündigen Sie Ihren aktuellen Hausverwalter rechtzeitig. Die Kündigungsfrist beträgt in der Regel 3-6 Monate zum Jahresende. Die Kündigung muss schriftlich erfolgen.",
      "url": "https://einfach-verwaltet.de/hausverwaltung-wechseln#schritt-1"
    },
    {
      "@type": "HowToStep",
      "position": 2,
      "name": "Neuen Verwalter beauftragen",
      "text": "Wählen Sie Ihren neuen Hausverwalter und unterzeichnen Sie den Verwaltungsvertrag. Timing ist wichtig: Der neue Verwalter sollte zeitnah mit der Kündigung beim alten Verwalter beauftragt werden.",
      "url": "https://einfach-verwaltet.de/hausverwaltung-wechseln#schritt-2"
    },
    {
      "@type": "HowToStep",
      "position": 3,
      "name": "Dokumentation zusammenstellen",
      "text": "Sammeln Sie alle relevanten Unterlagen: Mietverträge, aktuelle Nebenkostenabrechnungen, Übergabeprotokolle, Wartungsverträge, Versicherungspolicen und Eigentümerversammlungsprotokolle.",
      "url": "https://einfach-verwaltet.de/hausverwaltung-wechseln#schritt-3"
    },
    {
      "@type": "HowToStep",
      "position": 4,
      "name": "Mieter informieren",
      "text": "Die Mieter müssen schriftlich über den Wechsel informiert werden. Der neue Verwalter stellt die neue Bankverbindung für Mietzahlungen vor. Wir übernehmen die Kommunikation für Sie.",
      "url": "https://einfach-verwaltet.de/hausverwaltung-wechseln#schritt-4"
    },
    {
      "@type": "HowToStep",
      "position": 5,
      "name": "Übergabe koordinieren",
      "text": "Der alte Verwalter übergibt alle Unterlagen an den neuen Verwalter. Treuhandkonten werden übertragen, laufende Verträge übergeben. Wir koordinieren diesen Prozess für Sie.",
      "url": "https://einfach-verwaltet.de/hausverwaltung-wechseln#schritt-5"
    }
  ]
};

// Schema.org structured data for FAQ
const faqStructuredData = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Wie kündige ich meinen Hausverwalter?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Die Kündigung muss schriftlich erfolgen. Die Kündigungsfrist beträgt in der Regel 3-6 Monate zum Jahresende, je nach Vertrag. Prüfen Sie Ihren Verwaltungsvertrag auf die genaue Frist. Die Kündigung sollte per Einschreiben mit Rückschein erfolgen, um den Nachweis zu haben.",
      },
    },
    {
      "@type": "Question",
      "name": "Wann ist der beste Zeitpunkt für einen Verwalterwechsel?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Der ideale Zeitpunkt ist nach Abschluss einer Nebenkostenabrechnung, typischerweise zum Jahresende. So startet der neue Verwalter mit einer 'sauberen' Periode. Planen Sie den Wechsel mindestens 6 Monate im Voraus, um alle Fristen einhalten zu können.",
      },
    },
    {
      "@type": "Question",
      "name": "Welche Unterlagen muss ich beim Wechsel bereitstellen?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Folgende Unterlagen sind erforderlich: Alle Mietverträge mit aktuellen Mieterdaten, letzte 3 Nebenkostenabrechnungen, Übergabeprotokolle bei Einzügen, Wartungs- und Versicherungsverträge, Protokolle der letzten Eigentümerversammlungen (bei WEG), aktuelle Kontoauszüge des Treuhandkontos, offene Reparatur- und Instandhaltungsvorgänge, sowie Schlüsselbestand und -übergabeprotokolle.",
      },
    },
    {
      "@type": "Question",
      "name": "Wer informiert die Mieter über den Verwalterwechsel?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Die Mieter müssen schriftlich über den Wechsel informiert werden — in der Regel durch den neuen Verwalter. Wichtig: Mitteilung der neuen Bankverbindung für Mietzahlungen, neue Kontaktdaten, Bestätigung, dass bestehende Mietverträge unverändert bleiben. Bei einfach verwaltet. übernehmen wir die gesamte Kommunikation für Sie.",
      },
    },
    {
      "@type": "Question",
      "name": "Wie lange dauert ein Verwalterwechsel?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Der gesamte Prozess dauert in der Regel 4-8 Wochen ab Kündigung beim alten Verwalter. Die Kündigungsfrist selbst (3-6 Monate) kommt hinzu. Die eigentliche Übergabe der Unterlagen erfolgt in den letzten 2 Wochen vor dem Stichtag. Wir begleiten Sie durch den gesamten Zeitraum und koordinieren alle Beteiligten.",
      },
    },
  ],
};

const steps = [
  {
    number: "01",
    title: "Bestehenden Verwalter kündigen",
    content: "Kündigen Sie Ihren aktuellen Hausverwalter rechtzeitig. Die Kündigungsfrist beträgt in der Regel 3-6 Monate zum Jahresende. Die Kündigung muss schriftlich erfolgen — wir stellen Ihnen ein Musterschreiben zur Verfügung.",
    tip: "Tipp: Kündigen Sie per Einschreiben mit Rückschein, um den Nachweis zu haben.",
  },
  {
    number: "02",
    title: "Neuen Verwalter beauftragen",
    content: "Wählen Sie Ihren neuen Hausverwalter und unterzeichnen Sie den Verwaltungsvertrag. Timing ist wichtig: Der neue Verwalter sollte zeitnah mit der Kündigung beim alten Verwalter beauftragt werden, um einen nahtlosen Übergang zu gewährleisten.",
    tip: "Wir erstellen Ihnen ein transparentes Angebot — in 24 Stunden, ohne versteckte Kosten.",
  },
  {
    number: "03",
    title: "Dokumentation zusammenstellen",
    content: "Sammeln Sie alle relevanten Unterlagen für die Übergabe: Mietverträge, aktuelle Nebenkostenabrechnungen, Übergabeprotokolle, Wartungsverträge, Versicherungspolicen und Eigentümerversammlungsprotokolle.",
    tip: "Wir schicken Ihnen eine Checkliste mit allen erforderlichen Dokumenten.",
  },
  {
    number: "04",
    title: "Mieter informieren",
    content: "Die Mieter müssen schriftlich über den Wechsel informiert werden. Der neue Verwalter stellt die neue Bankverbindung für Mietzahlungen vor und teilt die neuen Kontaktdaten mit. Die bestehenden Mietverträge bleiben unverändert.",
    tip: "Wir übernehmen die gesamte Kommunikation mit Ihren Mietern für Sie.",
  },
  {
    number: "05",
    title: "Übergabe koordinieren",
    content: "Der alte Verwalter übergibt alle Unterlagen an den neuen Verwalter. Treuhandkonten werden übertragen, laufende Verträge übergeben, Schlüssel übergeben. Wir koordinieren diesen Prozess und stellen sicher, dass nichts verloren geht.",
    tip: "Wir führen ein detailliertes Übergabeprotokoll — für Ihre Sicherheit.",
  },
];

const painPoints = [
  {
    title: "Unzuverlässige Kommunikation",
    description: "Der alte Verwalter reagiert nicht auf Mieteranfragen? Wir garantieren eine Reaktionszeit unter 15 Minuten — 365 Tage im Jahr.",
  },
  {
    title: "Unübersichtliche Abrechnungen",
    description: "Die Nebenkostenabrechnung kommt unverständlich oder zu spät? Wir erstellen transparente, fristgerechte Abrechnungen nach § 556 BGB.",
  },
  {
    title: "Versteckte Kosten",
    description: "Unvorhergesehene Rechnungen auf der Jahresabrechnung? Bei uns sind alle Leistungen im Festpreis inklusive — keine Überraschungen.",
  },
  {
    title: "Lange Vertragslaufzeiten",
    description: "Gefangen in einem Vertrag mit 36 Monaten Laufzeit? Wir starten mit 12 Monaten — danach monatlich kündbar.",
  },
];

const checklist = [
  "Mietverträge mit aktuellen Mieterdaten",
  "Letzte 3 Nebenkostenabrechnungen",
  "Übergabeprotokolle bei Ein- und Auszügen",
  "Wartungs- und Versicherungsverträge",
  "Protokolle der letzten Eigentümerversammlungen (WEG)",
  "Aktuelle Kontoauszüge des Treuhandkontos",
  "Offene Reparatur- und Instandhaltungsvorgänge",
  "Schlüsselbestand und Übergabeprotokolle",
];

export default function HausverwaltungWechselnPage() {
  return (
    <>
      {/* Schema.org Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(howtoStructuredData) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqStructuredData) }}
      />
      <Navbar />
      <main className="pt-24">
        {/* Hero */}
        <section className="py-16 lg:py-24 bg-navy text-white">
          <div className="max-w-[1100px] mx-auto px-6 text-center">
            <div className="inline-flex items-center gap-2 bg-teal/20 rounded-full px-4 py-1.5 mb-6">
              <span className="text-teal text-sm font-semibold">Der komplette Guide</span>
            </div>
            <h1 className="text-4xl sm:text-5xl font-bold mb-4 font-serif leading-tight">
              Hausverwaltung wechseln
              <br />
              <span className="text-teal">Schritt für Schritt.</span>
            </h1>
            <p className="text-lg text-white/75 max-w-2xl mx-auto">
              So wechseln Sie Ihre Hausverwaltung reibungslos. Von der Kündigung über die 
              Dokumentenübergabe bis zur Mieterinformation — wir begleiten Sie durch den gesamten Prozess.
            </p>
            <div className="flex flex-wrap justify-center gap-4 mt-8">
              <a
                href="/anfrage"
                className="inline-block bg-teal text-white px-8 py-4 rounded-xl font-semibold text-lg hover:bg-teal/85 transition-all shadow-lg hover:shadow-xl"
              >
                Kostenlose Wechselberatung →
              </a>
              <a
                href="#ablauf"
                className="inline-block bg-white/10 text-white px-8 py-4 rounded-xl font-semibold text-lg hover:bg-white/20 transition-all border border-white/20"
              >
                Zum Ablauf
              </a>
            </div>
          </div>
        </section>

        {/* Pain Points */}
        <section className="py-16 lg:py-24 bg-warm-white">
          <div className="max-w-[1100px] mx-auto px-6">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-navy mb-4 font-serif">
                Gründe für einen Verwalterwechsel
              </h2>
              <p className="text-text-light max-w-xl mx-auto">
                Viele Eigentümer zögern zu lange. Diese Probleme sind typisch — 
                und lösbar.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 gap-6">
              {painPoints.map((point) => (
                <div key={point.title} className="bg-white rounded-2xl p-8 border border-gray-100 shadow-sm">
                  <h3 className="text-xl font-bold text-navy mb-3 font-serif">{point.title}</h3>
                  <p className="text-text-light leading-relaxed">{point.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Step by Step */}
        <section id="ablauf" className="py-16 lg:py-24 bg-white">
          <div className="max-w-[1100px] mx-auto px-6">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-navy mb-4 font-serif">
                Der Wechsel in 5 Schritten
              </h2>
              <p className="text-text-light max-w-xl mx-auto">
                Ein Verwalterwechsel ist unkompliziert, wenn man ihn richtig angeht. 
                So funktioniert es:
              </p>
            </div>

            <div className="space-y-8">
              {steps.map((step, _idx) => (
                <div key={step.number} className="bg-warm-white rounded-2xl p-8 border border-gray-100">
                  <div className="flex flex-col md:flex-row gap-6">
                    <div className="flex-shrink-0">
                      <div className="w-16 h-16 rounded-full bg-teal/10 flex items-center justify-center">
                        <span className="text-teal font-bold text-2xl">{step.number}</span>
                      </div>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-navy mb-3 font-serif">{step.title}</h3>
                      <p className="text-text-light leading-relaxed mb-4">{step.content}</p>
                      <div className="inline-flex items-center gap-2 bg-teal/10 rounded-lg px-4 py-2">
                        <span className="text-teal text-sm font-medium">{step.tip}</span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Checklist */}
        <section className="py-16 lg:py-24 bg-navy/5">
          <div className="max-w-[1100px] mx-auto px-6">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold text-navy mb-6 font-serif">
                  Ihre Checkliste für die Übergabe
                </h2>
                <p className="text-text-light leading-relaxed mb-8">
                  Eine vollständige Dokumentation ist die Basis für eine reibungslose Übergabe. 
                  Diese Unterlagen sollten Sie zusammenstellen:
                </p>
                <div className="bg-white rounded-xl p-6 border border-gray-100 shadow-sm">
                  <ul className="space-y-3">
                    {checklist.map((item) => (
                      <li key={item} className="flex items-start gap-3">
                        <svg className="w-5 h-5 text-teal flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.5 12.75l6 6 9-13.5" />
                        </svg>
                        <span className="text-navy text-sm">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              <div className="bg-white rounded-2xl p-8 border border-gray-100 shadow-sm">
                <h3 className="text-xl font-bold text-navy mb-6 font-serif">
                  Wir machen den Wechsel einfach
                </h3>
                <div className="space-y-6">
                  <div className="flex gap-4">
                    <div className="w-10 h-10 rounded-full bg-teal/10 flex items-center justify-center flex-shrink-0">
                      <span className="text-teal font-bold">1</span>
                    </div>
                    <div>
                      <h4 className="font-bold text-navy mb-1">Kostenlose Beratung</h4>
                      <p className="text-text-light text-sm">Wir besprechen Ihre Situation und erstellen einen individuellen Wechselplan.</p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="w-10 h-10 rounded-full bg-teal/10 flex items-center justify-center flex-shrink-0">
                      <span className="text-teal font-bold">2</span>
                    </div>
                    <div>
                      <h4 className="font-bold text-navy mb-1">Vollständige Begleitung</h4>
                      <p className="text-text-light text-sm">Von der Kündigung bis zur Übergabe begleiten wir Sie durch den Prozess.</p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="w-10 h-10 rounded-full bg-teal/10 flex items-center justify-center flex-shrink-0">
                      <span className="text-teal font-bold">3</span>
                    </div>
                    <div>
                      <h4 className="font-bold text-navy mb-1">Nahtlose Übernahme</h4>
                      <p className="text-text-light text-sm">Ihre Mieter merken vom Wechsel kaum etwas — außer besserem Service.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-16 lg:py-24 bg-white">
          <div className="max-w-[800px] mx-auto px-6">
            <h2 className="text-3xl font-bold text-navy mb-8 text-center font-serif">
              Häufige Fragen zum Verwalterwechsel
            </h2>
            
            <div className="space-y-4">
              <div className="bg-warm-white rounded-xl p-6 border border-gray-100">
                <h3 className="font-bold text-navy mb-2">Wie kündige ich meinen Hausverwalter?</h3>
                <p className="text-text-light text-sm leading-relaxed">
                  Die Kündigung muss schriftlich erfolgen. Die Kündigungsfrist beträgt in der Regel 3-6 Monate 
                  zum Jahresende, je nach Vertrag. Prüfen Sie Ihren Verwaltungsvertrag auf die genaue Frist. 
                  Die Kündigung sollte per Einschreiben mit Rückschein erfolgen, um den Nachweis zu haben.
                </p>
              </div>

              <div className="bg-warm-white rounded-xl p-6 border border-gray-100">
                <h3 className="font-bold text-navy mb-2">Wann ist der beste Zeitpunkt für einen Verwalterwechsel?</h3>
                <p className="text-text-light text-sm leading-relaxed">
                  Der ideale Zeitpunkt ist nach Abschluss einer Nebenkostenabrechnung, typischerweise zum Jahresende. 
                  So startet der neue Verwalter mit einer "sauberen" Periode. Planen Sie den Wechsel mindestens 
                  6 Monate im Voraus, um alle Fristen einhalten zu können.
                </p>
              </div>

              <div className="bg-warm-white rounded-xl p-6 border border-gray-100">
                <h3 className="font-bold text-navy mb-2">Welche Unterlagen muss ich beim Wechsel bereitstellen?</h3>
                <p className="text-text-light text-sm leading-relaxed">
                  Folgende Unterlagen sind erforderlich: Alle Mietverträge mit aktuellen Mieterdaten, 
                  letzte 3 Nebenkostenabrechnungen, Übergabeprotokolle bei Einzügen, Wartungs- und Versicherungsverträge, 
                  Protokolle der letzten Eigentümerversammlungen (bei WEG), aktuelle Kontoauszüge des Treuhandkontos, 
                  offene Reparatur- und Instandhaltungsvorgänge, sowie Schlüsselbestand und -übergabeprotokolle.
                </p>
              </div>

              <div className="bg-warm-white rounded-xl p-6 border border-gray-100">
                <h3 className="font-bold text-navy mb-2">Wer informiert die Mieter über den Verwalterwechsel?</h3>
                <p className="text-text-light text-sm leading-relaxed">
                  Die Mieter müssen schriftlich über den Wechsel informiert werden — in der Regel durch den neuen Verwalter. 
                  Wichtig: Mitteilung der neuen Bankverbindung für Mietzahlungen, neue Kontaktdaten, Bestätigung, 
                  dass bestehende Mietverträge unverändert bleiben. Bei einfach verwaltet. übernehmen wir die gesamte Kommunikation für Sie.
                </p>
              </div>

              <div className="bg-warm-white rounded-xl p-6 border border-gray-100">
                <h3 className="font-bold text-navy mb-2">Wie lange dauert ein Verwalterwechsel?</h3>
                <p className="text-text-light text-sm leading-relaxed">
                  Der gesamte Prozess dauert in der Regel 4-8 Wochen ab Kündigung beim alten Verwalter. 
                  Die Kündigungsfrist selbst (3-6 Monate) kommt hinzu. Die eigentliche Übergabe der Unterlagen 
                  erfolgt in den letzten 2 Wochen vor dem Stichtag. Wir begleiten Sie durch den gesamten Zeitraum und koordinieren alle Beteiligten.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 lg:py-20 bg-navy text-white">
          <div className="max-w-[700px] mx-auto px-6 text-center">
            <h2 className="text-3xl font-bold mb-4 font-serif">
              Bereit für den Wechsel?
            </h2>
            <p className="text-white/75 mb-8">
              Vereinbaren Sie ein kostenloses Erstgespräch. Wir analysieren Ihre Situation 
              und erstellen einen individuellen Wechselplan — unverbindlich und kostenlos.
            </p>
            <a
              href="/anfrage"
              className="inline-block bg-teal text-white px-8 py-4 rounded-xl font-semibold text-lg hover:bg-teal/85 transition-all shadow-lg hover:shadow-xl"
            >
              Kostenlose Wechselberatung vereinbaren →
            </a>
            <p className="text-white/50 text-sm mt-4">
              Keine versteckten Kosten. Keine Verpflichtungen. Antwort noch am selben Tag.
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
