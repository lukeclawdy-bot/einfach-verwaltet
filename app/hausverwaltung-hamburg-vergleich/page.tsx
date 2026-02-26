import type { Metadata } from "next";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

export const metadata: Metadata = {
  title: "Hausverwaltung Hamburg Vergleich 2026 — einfach verwaltet.",
  description:
    "Vergleichen Sie Hausverwaltungen in Hamburg: einfach verwaltet. vs. Buena vs. Matera vs. traditionelle Verwalter. Preise, Erreichbarkeit, Transparenz im Überblick.",
  openGraph: {
    title: "Hausverwaltung Hamburg Vergleich 2026",
    description: "Unabhängiger Vergleich: einfach verwaltet. vs. Buena vs. Matera vs. typische Hausverwaltung in Hamburg.",
    url: "https://einfach-verwaltet.de/hausverwaltung-hamburg-vergleich",
    siteName: "einfach verwaltet.",
    locale: "de_DE",
    type: "article",
  },
};

// Schema.org structured data for FAQ
const faqStructuredData = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Was kostet Buena Hausverwaltung in Hamburg?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Buena Hausverwaltung bietet in Hamburg Preise ab ca. 25-30 € pro Einheit und Monat. Die genauen Kosten hängen von Portfoliogröße und Leistungsumfang ab. Im Vergleich bieten wir bei einfach verwaltet. transparente Preise ab 24 €/Einheit mit vollem Serviceumfang.",
      },
    },
    {
      "@type": "Question",
      name: "Ist Matera eine gute Alternative für Hausverwaltung in Hamburg?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Matera ist ein digitaler Anbieter mit Schwerpunkt auf Software-Lösungen. Für Eigentümer, die persönliche Betreuung und lokale Expertise in Hamburg suchen, bietet einfach verwaltet. eine umfassendere Alternative mit dediziertem Ansprechpartner und lokalem Handwerkernetzwerk.",
      },
    },
    {
      "@type": "Question",
      name: "Wie schnell ist eine typische Hausverwaltung in Hamburg erreichbar?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Traditionelle Hausverwaltungen in Hamburg haben oft nur zu Bürozeiten (Mo-Fr 9-17 Uhr) telefonisch erreichbar. Bei einfach verwaltet. garantieren wir eine Reaktionszeit unter 15 Minuten bei digitalen Anfragen und Rückrufe noch am selben Werktag.",
      },
    },
    {
      "@type": "Question",
      name: "Welche Vertragslaufzeit ist bei Hausverwaltungen üblich?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Viele traditionelle Hausverwaltungen in Hamburg verlangen Vertragslaufzeiten von 24-36 Monaten mit langen Kündigungsfristen. Bei einfach verwaltet. starten wir mit 12 Monaten Laufzeit und 3 Monaten Kündigungsfrist — ohne automatische Verlängerung.",
      },
    },
    {
      "@type": "Question",
      name: "Was unterscheidet einfach verwaltet. von anderen Hamburger Hausverwaltungen?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Unser Hauptunterschied liegt in der Geschwindigkeit und Transparenz: Preise sind auf der Website sichtbar, Anfragen werden innerhalb von Minuten bestätigt, und Eigentümer haben jederzeit Zugriff auf alle Dokumente über das digitale Portal. Dazu kommt unser lokales Handwerkernetzwerk speziell für Hamburg.",
      },
    },
  ],
};

const comparisonRows = [
  { feature: "Monatspreis pro Einheit", us: "ab €24", buena: "ab €25", matera: "ab €22", typical: "€20-35" },
  { feature: "Erreichbarkeit", us: "< 15 Min. Reaktionszeit", buena: "Bürozeiten", matera: "Digital/App", typical: "Mo-Fr 9-17h" },
  { feature: "Transparenz", us: "Preise online sichtbar", buena: "Auf Anfrage", matera: "Preise online", typical: "Nicht veröffentlicht" },
  { feature: "Digitales Portal", us: "✓ Inklusive", buena: "✓ Inklusive", matera: "✓ Fokus", typical: "Teilweise" },
  { feature: "Vertragslaufzeit", us: "12 Monate", buena: "24 Monate", matera: "12 Monate", typical: "24-36 Monate" },
  { feature: "Hamburg-lokal", us: "✓ Eigene Partner", buena: "✓ Lokal", matera: "✗ Netzwerk", typical: "Variabel" },
  { feature: "Nebenkostenabrechnung", us: "✓ Inklusive", buena: "✓ Inklusive", matera: "Teilweise", typical: "Oft extra" },
  { feature: "Mieterhöhungen", us: "✓ Inklusive", buena: "✓ Inklusive", matera: "Teilweise", typical: "Oft extra" },
];

function CheckIcon() {
  return (
    <svg className="w-5 h-5 text-green flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
    </svg>
  );
}

function CrossIcon() {
  return (
    <svg className="w-5 h-5 text-red-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
    </svg>
  );
}

function renderValue(value: string) {
  if (value === "✓ Inklusive") return <CheckIcon />;
  if (value === "✓ Eigene Partner") return <CheckIcon />;
  if (value === "✓ Lokal") return <CheckIcon />;
  if (value === "✓ Fokus") return <CheckIcon />;
  if (value.startsWith("✗")) return <CrossIcon />;
  return <span className="text-sm">{value}</span>;
}

export default function VergleichPage() {
  return (
    <>
      {/* Schema.org FAQ Structured Data */}
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
              <span className="text-teal text-sm font-semibold">Unabhängiger Vergleich 2026</span>
            </div>
            <h1 className="text-4xl sm:text-5xl font-bold mb-4 font-serif leading-tight">
              Hausverwaltung Hamburg
              <br />
              <span className="text-teal">Vergleich 2026</span>
            </h1>
            <p className="text-lg text-white/75 max-w-2xl mx-auto">
              Wir vergleichen einfach verwaltet. mit Buena, Matera und typischen Hausverwaltungen in Hamburg. 
              Transparente Preise, echte Erreichbarkeit und lokalen Service im Überblick.
            </p>
          </div>
        </section>

        {/* Comparison Table */}
        <section className="py-16 lg:py-24 bg-white">
          <div className="max-w-[1100px] mx-auto px-6">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-navy mb-4 font-serif">Hausverwaltungen im direkten Vergleich</h2>
              <p className="text-text-light max-w-xl mx-auto">
                Finden Sie die beste Hausverwaltung für Ihre Immobilie in Hamburg. 
                Vergleichen Sie Preise, Service und Erreichbarkeit auf einen Blick.
              </p>
            </div>

            {/* Desktop Table */}
            <div className="hidden lg:block bg-warm-white rounded-2xl border border-gray-100 overflow-hidden">
              {/* Header */}
              <div className="grid grid-cols-[1.5fr_1fr_1fr_1fr_1fr] bg-navy text-white text-sm font-semibold">
                <div className="px-6 py-4">Kriterium</div>
                <div className="px-4 py-4 text-center bg-teal/20">einfach verwaltet.</div>
                <div className="px-4 py-4 text-center">Buena</div>
                <div className="px-4 py-4 text-center">Matera</div>
                <div className="px-4 py-4 text-center text-white/70">Typische HV</div>
              </div>
              {/* Rows */}
              {comparisonRows.map((row, i) => (
                <div
                  key={row.feature}
                  className={`grid grid-cols-[1.5fr_1fr_1fr_1fr_1fr] items-center ${i % 2 === 0 ? "bg-white" : "bg-warm-white"}`}
                >
                  <div className="px-6 py-4 text-sm text-navy font-medium">{row.feature}</div>
                  <div className="px-4 py-4 flex items-center justify-center bg-teal/5 font-semibold text-teal">
                    {renderValue(row.us)}
                  </div>
                  <div className="px-4 py-4 flex items-center justify-center text-navy">{renderValue(row.buena)}</div>
                  <div className="px-4 py-4 flex items-center justify-center text-navy">{renderValue(row.matera)}</div>
                  <div className="px-4 py-4 flex items-center justify-center text-text-light">{renderValue(row.typical)}</div>
                </div>
              ))}
            </div>

            {/* Mobile Cards */}
            <div className="lg:hidden space-y-6">
              {comparisonRows.map((row) => (
                <div key={row.feature} className="bg-warm-white rounded-xl p-4 border border-gray-100">
                  <div className="font-semibold text-navy mb-3 pb-2 border-b border-gray-200">{row.feature}</div>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between items-center bg-teal/10 rounded-lg px-3 py-2">
                      <span className="font-medium text-teal">einfach verwaltet.</span>
                      <span className="font-semibold">{row.us}</span>
                    </div>
                    <div className="flex justify-between items-center px-3 py-1">
                      <span className="text-text-light">Buena</span>
                      <span>{row.buena}</span>
                    </div>
                    <div className="flex justify-between items-center px-3 py-1">
                      <span className="text-text-light">Matera</span>
                      <span>{row.matera}</span>
                    </div>
                    <div className="flex justify-between items-center px-3 py-1">
                      <span className="text-text-light">Typische HV</span>
                      <span>{row.typical}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Content Section */}
        <section className="py-16 lg:py-24 bg-warm-white">
          <div className="max-w-[800px] mx-auto px-6">
            <h2 className="text-3xl font-bold text-navy mb-8 font-serif">Der Markt für Hausverwaltung in Hamburg</h2>
            
            <p className="text-text-light leading-relaxed mb-6">
              Hamburg zählt zu den dynamischsten Immobilienmärkten Deutschlands. Mit über 1,9 Millionen Einwohnern und 
              einer der höchsten Mietpreise pro Quadratmeter stellt die professionelle Verwaltung von Wohnimmobilien 
              eine besondere Herausforderung dar. Eigentümer stehen vor der Frage: Welche Hausverwaltung passt am 
              besten zu meinen Anforderungen?
            </p>

            <h3 className="text-xl font-bold text-navy mb-4 mt-8">Buena Alternative Hamburg: Moderne Verwaltung mit Tradition</h3>
            <p className="text-text-light leading-relaxed mb-6">
              Buena Hausverwaltung hat sich in Hamburg als etablierter Anbieter positioniert. Das Unternehmen kombiniert 
              traditionelle Verwaltungsleistungen mit digitalen Elementen. Die Preise beginnen bei rund 25-30 € pro 
              Einheit und Monat. Besonders für WEG-Verwaltungen ist Buena eine häufig gewählte Option. Allerdings fallen 
              bei Buena längere Vertragslaufzeiten von typischerweise 24 Monaten an, und die Preisgestaltung bleibt oft 
              intransparent bis zur konkreten Anfrage.
            </p>

            <h3 className="text-xl font-bold text-navy mb-4 mt-8">Matera Alternative: Digital-first Ansatz</h3>
            <p className="text-text-light leading-relaxed mb-6">
              Matera setzt stark auf Digitalisierung und bietet eine moderne Plattform für die Immobilienverwaltung. 
              Die Preise starten bei etwa 22 € pro Einheit, was Matera zu einem preislich attraktiven Anbieter macht. 
              Jedoch liegt der Fokus stark auf Software-Lösungen. Eigentümer, die persönliche Betreuung und direkten 
              Kontakt zu einem lokalen Ansprechpartner suchen, finden bei Matera nicht immer das passende Angebot. 
              Das Handwerkernetzwerk ist weniger ausgeprägt als bei lokalen Verwaltern.
            </p>

            <h3 className="text-xl font-bold text-navy mb-4 mt-8">Typische Hausverwaltungen in Hamburg: Altbewährt, aber langsam</h3>
            <p className="text-text-light leading-relaxed mb-6">
              Die klassischen Hamburger Hausverwaltungen prägen das Marktbild. Viele Familienbetriebe und mittelständische 
              Verwalter haben über Jahrzehhte Erfahrung aufgebaut. Doch genau diese Tradition bringt auch Herausforderungen 
              mit sich: Telefonische Erreichbarkeit meist nur zu Bürozeiten, Reaktionszeiten von mehreren Tagen bei E-Mails, 
              und oft fehlende digitale Infrastruktur. Die Preisspanne liegt zwischen 20 und 35 € pro Einheit, wobei 
              Zusatzleistungen häufig extra berechnet werden.
            </p>

            <h3 className="text-xl font-bold text-navy mb-4 mt-8">Warum Eigentümer zu einfach verwaltet. wechseln</h3>
            <p className="text-text-light leading-relaxed mb-6">
              Bei einfach verwaltet. verbinden wir das Beste aus beiden Welten: Die persönliche Betreuung und das lokale 
              Know-how traditioneller Verwalter mit der Geschwindigkeit und Transparenz moderner Anbieter. Unsere Preise 
              sind auf der Website einsehbar — keine versteckten Kosten, keine Überraschungen. Mit 12 Monaten Laufzeit 
              und kurzen Kündigungsfristen binden wir niemanden gegen seinen Willen.
            </p>

            <p className="text-text-light leading-relaxed mb-6">
              Besonders unser lokales Handwerkernetzwerk in Hamburg — von der HafenCity bis nach Eimsbüttel — ermöglicht 
              schnelle Reaktionen bei Reparaturen. Eigentümer erhalten ein digitales Portal mit Echtzeit-Einblick in 
              alle Vorgänge. Und bei Fragen? Wir antworten innerhalb von 15 Minuten, nicht Tagen.
            </p>
          </div>
        </section>

        {/* FAQ Section with Schema.org */}
        <section className="py-16 lg:py-24 bg-white">
          <div className="max-w-[800px] mx-auto px-6">
            <h2 className="text-3xl font-bold text-navy mb-8 text-center font-serif">Häufig gestellte Fragen</h2>
            
            <div className="space-y-4">
              <div className="bg-warm-white rounded-xl p-6 border border-gray-100">
                <h3 className="font-bold text-navy mb-2">Was kostet Buena Hausverwaltung in Hamburg?</h3>
                <p className="text-text-light text-sm leading-relaxed">
                  Buena Hausverwaltung bietet in Hamburg Preise ab ca. 25-30 € pro Einheit und Monat. Die genauen Kosten 
                  hängen von Portfoliogröße und Leistungsumfang ab. Im Vergleich bieten wir bei einfach verwaltet. 
                  transparente Preise ab 24 €/Einheit mit vollem Serviceumfang.
                </p>
              </div>

              <div className="bg-warm-white rounded-xl p-6 border border-gray-100">
                <h3 className="font-bold text-navy mb-2">Ist Matera eine gute Alternative für Hausverwaltung in Hamburg?</h3>
                <p className="text-text-light text-sm leading-relaxed">
                  Matera ist ein digitaler Anbieter mit Schwerpunkt auf Software-Lösungen. Für Eigentümer, die 
                  persönliche Betreuung und lokale Expertise in Hamburg suchen, bietet einfach verwaltet. eine 
                  umfassendere Alternative mit dediziertem Ansprechpartner und lokalem Handwerkernetzwerk.
                </p>
              </div>

              <div className="bg-warm-white rounded-xl p-6 border border-gray-100">
                <h3 className="font-bold text-navy mb-2">Wie schnell ist eine typische Hausverwaltung in Hamburg erreichbar?</h3>
                <p className="text-text-light text-sm leading-relaxed">
                  Traditionelle Hausverwaltungen in Hamburg haben oft nur zu Bürozeiten (Mo-Fr 9-17 Uhr) telefonisch 
                  erreichbar. Bei einfach verwaltet. garantieren wir eine Reaktionszeit unter 15 Minuten bei digitalen 
                  Anfragen und Rückrufe noch am selben Werktag.
                </p>
              </div>

              <div className="bg-warm-white rounded-xl p-6 border border-gray-100">
                <h3 className="font-bold text-navy mb-2">Welche Vertragslaufzeit ist bei Hausverwaltungen üblich?</h3>
                <p className="text-text-light text-sm leading-relaxed">
                  Viele traditionelle Hausverwaltungen in Hamburg verlangen Vertragslaufzeiten von 24-36 Monaten mit 
                  langen Kündigungsfristen. Bei einfach verwaltet. starten wir mit 12 Monaten Laufzeit und 3 Monaten 
                  Kündigungsfrist — ohne automatische Verlängerung.
                </p>
              </div>

              <div className="bg-warm-white rounded-xl p-6 border border-gray-100">
                <h3 className="font-bold text-navy mb-2">Was unterscheidet einfach verwaltet. von anderen Hamburger Hausverwaltungen?</h3>
                <p className="text-text-light text-sm leading-relaxed">
                  Unser Hauptunterschied liegt in der Geschwindigkeit und Transparenz: Preise sind auf der Website 
                  sichtbar, Anfragen werden innerhalb von Minuten bestätigt, und Eigentümer haben jederzeit Zugriff 
                  auf alle Dokumente über das digitale Portal. Dazu kommt unser lokales Handwerkernetzwerk speziell 
                  für Hamburg.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 lg:py-20 bg-navy text-white">
          <div className="max-w-[700px] mx-auto px-6 text-center">
            <h2 className="text-3xl font-bold mb-4 font-serif">Überzeugen Sie sich selbst</h2>
            <p className="text-white/75 mb-8">
              Vereinbaren Sie ein kostenloses Erstgespräch. Wir analysieren Ihr Portfolio und zeigen Ihnen, 
              wie viel Zeit und Nerven Sie mit einfach verwaltet. sparen können.
            </p>
            <a
              href="/anfrage"
              className="inline-block bg-teal text-white px-8 py-4 rounded-xl font-semibold text-lg hover:bg-teal/85 transition-all shadow-lg hover:shadow-xl"
            >
              Kostenloses Erstgespräch vereinbaren →
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
