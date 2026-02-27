import type { Metadata } from "next";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

export const metadata: Metadata = {
  title: "Hausverwaltung Bremen — einfach verwaltet.",
  description:
    "Professionelle Hausverwaltung in Bremen: transparente Preise ab €24/Einheit, 24/7 Erreichbarkeit, lokales Handwerkernetzwerk. Für WEG und Mietverwaltung in der Hansestadt.",
  openGraph: {
    title: "Hausverwaltung Bremen — einfach verwaltet.",
    description: "Die moderne Hausverwaltung für Bremen. Lokales Know-how, transparente Preise, immer erreichbar.",
    url: "https://einfach-verwaltet.de/hausverwaltung-bremen",
    siteName: "einfach verwaltet.",
    locale: "de_DE",
    type: "website",
  },
};

const serviceStructuredData = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "einfach verwaltet. — Hausverwaltung Bremen",
  description: "Professionelle Hausverwaltung in Bremen für WEG und Mietverwaltung. Transparente Preise, lokales Know-how, 24/7 Erreichbarkeit.",
  url: "https://einfach-verwaltet.de/hausverwaltung-bremen",
  telephone: "+49-40-XXXXXXX",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Bremen",
    addressRegion: "HB",
    addressCountry: "DE",
  },
  areaServed: {
    "@type": "City",
    name: "Bremen",
  },
  priceRange: "€€",
  openingHours: "Mo-Fr 09:00-18:00",
  offers: {
    "@type": "Offer",
    price: "24",
    priceCurrency: "EUR",
    priceValidUntil: "2026-12-31",
    availability: "https://schema.org/InStock",
  },
};

const faqStructuredData = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Was kostet eine Hausverwaltung in Bremen?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Bei einfach verwaltet. kosten unsere Hausverwaltungsleistungen ab 24 € pro Einheit und Monat für Mietverwaltung, ab 28 € für WEG-Verwaltung. Alle Leistungen inklusive: Mieterkommunikation, Nebenkostenabrechnung, Instandhaltungskoordination und digitales Eigentümer-Portal. Keine versteckten Kosten.",
      },
    },
    {
      "@type": "Question",
      name: "Welche Stadtteile in Bremen betreut einfach verwaltet.?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Wir betreuen Immobilien in allen Bremer Stadtteilen — darunter das Viertel, Schwachhausen, Überseestadt, Horn-Lehe, Findorff, Walle, Neustadt und Gröpelingen. Unser lokales Handwerkernetzwerk ist in ganz Bremen aktiv.",
      },
    },
    {
      "@type": "Question",
      name: "Wie kann ich meinen Hausverwalter in Bremen kündigen?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Die Kündigung eines Hausverwalters in Bremen folgt den vertraglichen Vereinbarungen. Üblich sind Kündigungsfristen von 3–6 Monaten zum Jahresende. Wir begleiten Sie durch den Wechsel: von der Kündigung beim alten Verwalter über die Dokumentenübergabe bis zur Mieterinformation.",
      },
    },
    {
      "@type": "Question",
      name: "Was ist bei einfach verwaltet. alles inklusive?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Unser Service umfasst: 24/7 Mieterkommunikation mit Reaktionszeit unter 15 Minuten, fristgerechte Nebenkostenabrechnung nach §556 BGB, Mieterhöhungsmanagement nach §558 BGB, Instandhaltungskoordination mit geprüftem Handwerkernetzwerk in Bremen, digitales Dokumentenportal und monatliche Eigentümerberichte. Keine Zusatzkosten für Standardleistungen.",
      },
    },
    {
      "@type": "Question",
      name: "Wie lange dauert der Wechsel der Hausverwaltung in Bremen?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Der Wechsel zur einfach verwaltet. dauert in der Regel 4–8 Wochen. Nach Ihrer Kündigung beim bisherigen Verwalter übernehmen wir die Dokumentation, informieren alle Mieter und koordinieren die Übergabe. Der genaue Zeitpunkt richtet sich nach Ihrer individuellen Kündigungsfrist.",
      },
    },
  ],
};

const features = [
  {
    title: "Lokales Bremen-Know-how",
    description: "Wir kennen den Bremer Immobilienmarkt — von der Überseestadt bis Schwachhausen, von der Weserpromenade bis ins Viertel. Mit aktuellem Wissen zu Mietpreisen und lokalen Anforderungen.",
  },
  {
    title: "Transparente Preise",
    description: "Ab 24 €/Einheit/Monat für Mietverwaltung. Alle Kosten auf einen Blick — keine versteckten Gebühren, keine Überraschungen bei der Jahresabrechnung.",
  },
  {
    title: "24/7 Erreichbarkeit",
    description: "Mieteranfragen werden innerhalb von 15 Minuten bestätigt. Rückrufe am selben Werktag. Kein Warten, keine Mailbox-Schleifen.",
  },
  {
    title: "Digitales Eigentümer-Portal",
    description: "Rund um die Uhr Zugriff auf alle Dokumente, Mieteingänge, Reparaturstatus und Mieterkommunikation. Volle Transparenz in Echtzeit.",
  },
];

const localKnowledge = [
  {
    title: "Das Viertel & Schwachhausen",
    description: "Bremens begehrteste Wohnlagen mit hoher Nachfrage. Altbausubstanz mit besonderen Anforderungen — wir kennen die lokalen Besonderheiten und geprüften Handwerker für historische Gebäude.",
  },
  {
    title: "Überseestadt am Weser",
    description: "Bremens Stadtentwicklungs-Vorzeigeprojekt: Neubauten, Lofts, Hafencharme. Anspruchsvolle Mieter erwarten schnelle, digitale Kommunikation — genau das liefern wir.",
  },
  {
    title: "Bremer Mietrecht & Mietspiegel",
    description: "Wir kennen den Bremer Mietspiegel und die rechtlichen Rahmenbedingungen vor Ort. Mieterhöhungen, Nebenkostenabrechnungen und Kündigungen werden rechtssicher abgewickelt.",
  },
];

export default function HausverwaltungBremenPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceStructuredData) }}
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
              <span className="text-teal text-sm font-semibold">Hausverwaltung in Bremen</span>
            </div>
            <h1 className="text-4xl sm:text-5xl font-bold mb-4 font-serif leading-tight">
              Hausverwaltung Bremen:
              <br />
              <span className="text-teal">Professionelle Mietverwaltung</span>
            </h1>
            <p className="text-lg text-white/75 max-w-2xl mx-auto">
              Professionelle Hausverwaltung für Bremens Hansaviertel, Überseestadt, Schwachhausen und alle 
              Stadtteile entlang der Weser. Transparente Preise ab 24 €/Einheit, 24/7 Erreichbarkeit.
            </p>
            <div className="flex flex-wrap justify-center gap-4 mt-8">
              <a
                href="/anfrage"
                className="inline-block bg-teal text-white px-8 py-4 rounded-xl font-semibold text-lg hover:bg-teal/85 transition-all shadow-lg hover:shadow-xl"
              >
                Kostenloses Angebot anfragen →
              </a>
              <a
                href="/preise"
                className="inline-block bg-white/10 text-white px-8 py-4 rounded-xl font-semibold text-lg hover:bg-white/20 transition-all border border-white/20"
              >
                Preise ansehen
              </a>
            </div>
          </div>
        </section>

        {/* Features */}
        <section className="py-16 lg:py-24 bg-warm-white">
          <div className="max-w-[1100px] mx-auto px-6">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-navy mb-4 font-serif">
                Warum Bremer Eigentümer einfach verwaltet. wählen
              </h2>
              <p className="text-text-light max-w-xl mx-auto">
                In Bremens wachsendem Immobilienmarkt zählt verlässliche Verwaltung. 
                Wir kombinieren lokales Know-how mit modernem Service.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 gap-6">
              {features.map((feature) => (
                <div key={feature.title} className="bg-white rounded-2xl p-8 border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                  <h3 className="text-xl font-bold text-navy mb-3 font-serif">{feature.title}</h3>
                  <p className="text-text-light leading-relaxed">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing Table */}
        <section className="py-16 lg:py-24 bg-white">
          <div className="max-w-[900px] mx-auto px-6">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-navy mb-4 font-serif">
                Transparente Preise für Bremen
              </h2>
              <p className="text-text-light max-w-xl mx-auto">
                Keine versteckten Gebühren. Alle Leistungen inklusive. 
                Festpreise ohne böse Überraschungen.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {/* Mietverwaltung */}
              <div className="bg-warm-white rounded-2xl p-8 border border-gray-100">
                <h3 className="text-xl font-bold text-navy mb-2 font-serif">Mietverwaltung</h3>
                <div className="text-4xl font-bold text-teal mb-1">ab 24 €</div>
                <div className="text-gray-500 text-sm mb-6">pro Einheit / Monat</div>
                <ul className="space-y-2 text-gray-700 text-sm">
                  {[
                    "Mietenkassierung & Mahnwesen",
                    "Nebenkostenabrechnung (§556 BGB)",
                    "Mieterhöhungsmanagement",
                    "24/7 Mieterkommunikation",
                    "Instandhaltungskoordination",
                    "Digitales Eigentümerportal",
                    "Monatliche Eigentümerberichte",
                    "Jahresabschluss & Dokumentation",
                  ].map((item) => (
                    <li key={item} className="flex items-center gap-2">
                      <span className="text-teal">✓</span> {item}
                    </li>
                  ))}
                </ul>
                <a
                  href="/anfrage"
                  className="mt-6 inline-block w-full text-center bg-navy text-white px-6 py-3 rounded-xl font-semibold hover:bg-navy/85 transition-all"
                >
                  Angebot anfordern →
                </a>
              </div>

              {/* WEG-Verwaltung */}
              <div className="bg-navy rounded-2xl p-8 border border-navy text-white">
                <h3 className="text-xl font-bold mb-2 font-serif">WEG-Verwaltung</h3>
                <div className="text-4xl font-bold text-teal mb-1">ab 28 €</div>
                <div className="text-white/60 text-sm mb-6">pro Einheit / Monat</div>
                <ul className="space-y-2 text-white/80 text-sm">
                  {[
                    "Alle Mietverwaltungsleistungen",
                    "Eigentümerversammlungen",
                    "Beschlussprotokolle",
                    "Jahresabrechnungen & Wirtschaftsplan",
                    "Rücklagenmanagement",
                    "Handwerkerkoordination",
                    "Versicherungsmanagement",
                    "Rechtliche Beratung (Ersteinschätzung)",
                  ].map((item) => (
                    <li key={item} className="flex items-center gap-2">
                      <span className="text-teal">✓</span> {item}
                    </li>
                  ))}
                </ul>
                <a
                  href="/anfrage"
                  className="mt-6 inline-block w-full text-center bg-teal text-white px-6 py-3 rounded-xl font-semibold hover:bg-teal/85 transition-all"
                >
                  Angebot anfordern →
                </a>
              </div>
            </div>

            <p className="text-center text-sm text-gray-400 mt-6">
              Preise zzgl. MwSt. · Mindestlaufzeit 12 Monate · Kündigung 3 Monate zum Monatsende
            </p>
          </div>
        </section>

        {/* Local Knowledge */}
        <section className="py-16 lg:py-24 bg-warm-white">
          <div className="max-w-[1100px] mx-auto px-6">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-navy mb-4 font-serif">
                Bremen — lokales Wissen, das zählt
              </h2>
              <p className="text-text-light max-w-xl mx-auto">
                Jede Stadt ist anders. Wir verstehen Bremens Besonderheiten.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              {localKnowledge.map((item) => (
                <div key={item.title} className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm">
                  <h3 className="text-lg font-bold text-navy mb-3 font-serif">{item.title}</h3>
                  <p className="text-text-light text-sm leading-relaxed">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Stats */}
        <section className="py-16 lg:py-24 bg-white">
          <div className="max-w-[1100px] mx-auto px-6">
            <div className="grid md:grid-cols-2 gap-8 items-start">
              <div>
                <h2 className="text-3xl font-bold text-navy mb-6 font-serif">
                  Was Sie von einfach verwaltet. erwarten können
                </h2>
                <div className="space-y-4 text-text-light">
                  {[
                    {
                      title: "Reaktionszeit unter 15 Minuten",
                      description: "Jede Mieteranfrage wird innerhalb von 15 Minuten bestätigt — rund um die Uhr, 365 Tage im Jahr.",
                    },
                    {
                      title: "Fristgerechte Nebenkostenabrechnung",
                      description: "Gemäß §556 Abs. 3 BGB erstellen wir die Abrechnung jährlich fristgerecht — nie zu spät, nie fehlerhaft.",
                    },
                    {
                      title: "Geprüftes Handwerkernetzwerk in Bremen",
                      description: "Über 30 geprüfte Handwerker und Dienstleister in Bremen — für schnelle Notfalleinsätze und faire Preise.",
                    },
                    {
                      title: "Rechtssichere Mieterhöhungen",
                      description: "Wir prüfen die Voraussetzungen nach §558 BGB und erstellen formell korrekte Mieterhöhungsschreiben.",
                    },
                  ].map((item) => (
                    <div key={item.title} className="flex gap-3">
                      <div className="w-2 h-2 rounded-full bg-teal mt-2 flex-shrink-0" />
                      <div>
                        <h4 className="font-bold text-navy mb-1">{item.title}</h4>
                        <p className="text-text-light text-sm">{item.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="bg-navy/5 rounded-2xl p-8 border border-navy/10">
                <h3 className="text-xl font-bold text-navy mb-6 font-serif">Unser Bremer Netzwerk</h3>
                <div className="space-y-4 text-text-light">
                  <div className="flex justify-between py-2 border-b border-navy/10">
                    <span>Geprüfte Handwerker</span>
                    <span className="font-semibold text-navy">30+ Partner</span>
                  </div>
                  <div className="flex justify-between py-2 border-b border-navy/10">
                    <span>Betreute Stadtteile</span>
                    <span className="font-semibold text-navy">Alle Bremer Stadtteile</span>
                  </div>
                  <div className="flex justify-between py-2 border-b border-navy/10">
                    <span>Durchschnittliche Reaktionszeit</span>
                    <span className="font-semibold text-navy">&lt; 15 Min.</span>
                  </div>
                  <div className="flex justify-between py-2 border-b border-navy/10">
                    <span>Nebenkostenabrechnung</span>
                    <span className="font-semibold text-navy">Fristgerecht</span>
                  </div>
                  <div className="flex justify-between py-2">
                    <span>Verfügbarkeit</span>
                    <span className="font-semibold text-navy">365 Tage/Jahr</span>
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
              Häufige Fragen zur Hausverwaltung in Bremen
            </h2>

            <div className="space-y-4">
              <div className="bg-warm-white rounded-xl p-6 border border-gray-100">
                <h3 className="font-bold text-navy mb-2">Was kostet eine Hausverwaltung in Bremen?</h3>
                <p className="text-text-light text-sm leading-relaxed">
                  Bei einfach verwaltet. kosten unsere Hausverwaltungsleistungen ab 24 € pro Einheit und Monat 
                  für Mietverwaltung, ab 28 € für WEG-Verwaltung. Alle Leistungen inklusive: Mieterkommunikation, 
                  Nebenkostenabrechnung, Instandhaltungskoordination und digitales Eigentümer-Portal. 
                  Keine versteckten Kosten.
                </p>
              </div>

              <div className="bg-warm-white rounded-xl p-6 border border-gray-100">
                <h3 className="font-bold text-navy mb-2">Welche Stadtteile in Bremen betreut einfach verwaltet.?</h3>
                <p className="text-text-light text-sm leading-relaxed">
                  Wir betreuen Immobilien in allen Bremer Stadtteilen — darunter das Viertel, Schwachhausen, 
                  Überseestadt, Horn-Lehe, Findorff, Walle, Neustadt und Gröpelingen. Unser lokales 
                  Handwerkernetzwerk ist in ganz Bremen aktiv.
                </p>
              </div>

              <div className="bg-warm-white rounded-xl p-6 border border-gray-100">
                <h3 className="font-bold text-navy mb-2">Wie kann ich meinen Hausverwalter in Bremen kündigen?</h3>
                <p className="text-text-light text-sm leading-relaxed">
                  Die Kündigung eines Hausverwalters in Bremen folgt den vertraglichen Vereinbarungen. 
                  Üblich sind Kündigungsfristen von 3–6 Monaten zum Jahresende. Wir begleiten Sie durch 
                  den Wechsel: von der Kündigung beim alten Verwalter über die Dokumentenübergabe bis 
                  zur Mieterinformation.
                </p>
              </div>

              <div className="bg-warm-white rounded-xl p-6 border border-gray-100">
                <h3 className="font-bold text-navy mb-2">Was ist bei einfach verwaltet. alles inklusive?</h3>
                <p className="text-text-light text-sm leading-relaxed">
                  Unser Service umfasst: 24/7 Mieterkommunikation mit Reaktionszeit unter 15 Minuten, 
                  fristgerechte Nebenkostenabrechnung nach §556 BGB, Mieterhöhungsmanagement nach §558 BGB, 
                  Instandhaltungskoordination mit geprüftem Handwerkernetzwerk in Bremen, digitales 
                  Dokumentenportal und monatliche Eigentümerberichte. Keine Zusatzkosten für Standardleistungen.
                </p>
              </div>

              <div className="bg-warm-white rounded-xl p-6 border border-gray-100">
                <h3 className="font-bold text-navy mb-2">Wie lange dauert der Wechsel der Hausverwaltung?</h3>
                <p className="text-text-light text-sm leading-relaxed">
                  Der Wechsel zur einfach verwaltet. dauert in der Regel 4–8 Wochen. Nach Ihrer Kündigung 
                  beim bisherigen Verwalter übernehmen wir die Dokumentation, informieren alle Mieter und 
                  koordinieren die Übergabe. Der genaue Zeitpunkt richtet sich nach Ihrer individuellen 
                  Kündigungsfrist.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 lg:py-20 bg-navy text-white">
          <div className="max-w-[700px] mx-auto px-6 text-center">
            <h2 className="text-3xl font-bold mb-4 font-serif">
              Bereit für eine bessere Hausverwaltung in Bremen?
            </h2>
            <p className="text-white/75 mb-8">
              Vereinbaren Sie ein kostenloses Erstgespräch. Wir analysieren Ihr Bremer Portfolio 
              und erstellen Ihnen ein maßgeschneidertes Angebot — in 24 Stunden.
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
