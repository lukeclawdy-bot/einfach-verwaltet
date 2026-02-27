import type { Metadata } from "next";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

export const metadata: Metadata = {
  title: "Hausverwaltung Münster — einfach verwaltet.",
  description:
    "Professionelle Hausverwaltung in Münster: transparente Preise ab €24/Einheit, lokales Know-how, digitales Eigentümer-Portal. Für WEG und Mietverwaltung im Münsterland.",
  openGraph: {
    title: "Hausverwaltung Münster — einfach verwaltet.",
    description: "Die moderne Hausverwaltung für Münster. Lokale Expertise, transparente Preise, immer erreichbar.",
    url: "https://einfach-verwaltet.de/hausverwaltung-muenster",
    siteName: "einfach verwaltet.",
    locale: "de_DE",
    type: "website",
  },
};

// Schema.org structured data for Service
const serviceStructuredData = {
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "Hausverwaltung Münster",
  "provider": {
    "@type": "Organization",
    "name": "einfach verwaltet.",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Münster",
      "addressCountry": "DE"
    }
  },
  "areaServed": {
    "@type": "City",
    "name": "Münster"
  },
  "description": "Professionelle Hausverwaltung in Münster für WEG und Mietverwaltung. Transparente Preise, lokales Know-how, 24/7 Erreichbarkeit.",
  "offers": {
    "@type": "Offer",
    "price": "24",
    "priceCurrency": "EUR",
    "priceValidUntil": "2026-12-31",
    "availability": "https://schema.org/InStock"
  }
};

// Schema.org FAQPage
const faqStructuredData = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Was kostet eine Hausverwaltung in Münster?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Bei einfach verwaltet. kosten unsere Hausverwaltungsleistungen ab 24 € pro Einheit und Monat für Mietverwaltung, ab 28 € für WEG-Verwaltung. Alle Leistungen inklusive: Mieterkommunikation, Nebenkostenabrechnung, Instandhaltungskoordination und digitales Eigentümer-Portal. Keine versteckten Kosten.",
      },
    },
    {
      "@type": "Question",
      "name": "Was unterscheidet den Münsterlander Immobilienmarkt?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Münster hat mit etwa 55.000 Studenten einen besonders dynamischen Wohnungsmarkt. Die stark wachsende Universitätsstadt zeichnet sich durch eine hohe Nachfrage nach Mietwohnungen und eine stabile Preisentwicklung aus. Wir kennen die Besonderheiten des studentischen Wohnraums und der gehobenen Wohnlagen.",
      },
    },
    {
      "@type": "Question",
      "name": "Wie schnell ist der Wechsel zur einfach verwaltet. in Münster?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Der Wechsel dauert in der Regel 4-8 Wochen. Nach Ihrer Kündigung beim bisherigen Verwalter übernehmen wir die Dokumentation, informieren alle Mieter und koordinieren die Übergabe. Der genaue Zeitpunkt richtet sich nach Ihrer individuellen Kündigungsfrist.",
      },
    },
    {
      "@type": "Question",
      "name": "Was ist bei einfach verwaltet. alles inklusive?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Unser Service umfasst: 24/7 Mieterkommunikation mit Reaktionszeit unter 15 Minuten, fristgerechte Nebenkostenabrechnung nach § 556 BGB, Mieterhöhungsmanagement nach § 558 BGB, Instandhaltungskoordination mit geprüftem Handwerkernetzwerk, digitales Dokumentenportal und monatliche Eigentümerberichte. Keine Zusatzkosten für Standardleistungen.",
      },
    },
    {
      "@type": "Question",
      "name": "Wie ist der Mietspiegel in Münster aktuell?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Der Münsteraner Mietspiegel wurde zuletzt 2023 aktualisiert. Die Kaltmieten liegen zwischen ca. 9,50 €/m² (einfache Lagen) und über 14 €/m² (gute Lagen). Wir überwachen die Marktentwicklung und beraten Sie bei Mieterhöhungen innerhalb der gesetzlichen Grenzen.",
      },
    },
  ],
};

// Schema.org LocalBusiness
const localBusinessStructuredData = {
  "@context": "https://schema.org",
  "@type": "RealEstateAgent",
  "name": "einfach verwaltet. — Hausverwaltung Münster",
  "description": "Professionelle Hausverwaltung in Münster. Transparente Preise, lokales Know-how, digitales Eigentümer-Portal.",
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "Münster",
    "addressCountry": "DE"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": "51.9607",
    "longitude": "7.6261"
  },
  "url": "https://einfach-verwaltet.de/hausverwaltung-muenster",
  "telephone": "+49-40-22863755",
  "priceRange": "€€",
  "openingHours": "Mo-So 00:00-23:59"
};

const features = [
  {
    title: "Münsterland-Expertise",
    description: "Wir kennen den Münsteraner Immobilienmarkt — von der Innenstadt bis zu den attraktiven Wohnlagen in Kinderhaus, Gievenbeck und Albachten.",
  },
  {
    title: "Transparente Preise",
    description: "Ab 24 €/Einheit/Monat für Mietverwaltung. Alle Kosten auf einen Blick — keine versteckten Gebühren, keine Überraschungen bei der Jahresabrechnung.",
  },
  {
    title: "24/7 Erreichbarkeit",
    description: "Mieteranfragen werden innerhalb von 15 Minuten bestätigt. Rückrufe am selben Werktag. Keine Warteschleifen, keine Mailbox-Ansagen.",
  },
  {
    title: "Studierenden-Hochburg",
    description: "Mit über 55.000 Studenten ist Münster ein besonderer Markt. Wir verstehen die Anforderungen an studentischen Wohnraum und Campus-nahe Immobilien.",
  },
];

const localKnowledge = [
  {
    title: "Dynamischer Wohnungsmarkt",
    description: "Münster gehört zu den wachstumsstärksten Städten Nordrhein-Westfalens. Die Nachfrage nach Wohnraum ist konstant hoch, besonders in Universitätsnähe.",
  },
  {
    title: "Münsteraner Mietspiegel",
    description: "Der aktuelle Mietspiegel (2023) bildet die Basis für rechtssichere Mieterhöhungen. Wir überwachen die Entwicklung und maximieren Ihre Rendite.",
  },
  {
    title: "Handwerkernetzwerk Münsterland",
    description: "Von Haustechnik bis Gartepflege: Unser Netzwerk aus geprüften Handwerkern garantiert schnelle Reaktionszeiten bei Reparaturen.",
  },
];

export default function HausverwaltungMuensterPage() {
  return (
    <>
      {/* Schema.org Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceStructuredData) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqStructuredData) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessStructuredData) }}
      />
      <Navbar />
      <main className="pt-24">
        {/* Hero */}
        <section className="py-16 lg:py-24 bg-navy text-white">
          <div className="max-w-[1100px] mx-auto px-6 text-center">
            <div className="inline-flex items-center gap-2 bg-teal/20 rounded-full px-4 py-1.5 mb-6">
              <span className="text-teal text-sm font-semibold">Hausverwaltung in Münster</span>
            </div>
            <h1 className="text-4xl sm:text-5xl font-bold mb-4 font-serif leading-tight">
              Hausverwaltung Münster
              <br />
              <span className="text-teal">professionell, transparent, zuverlässig.</span>
            </h1>
            <p className="text-lg text-white/75 max-w-2xl mx-auto">
              Professionelle Hausverwaltung für Münster. Lokales Know-how für diestudentische Hochburg, transparente Preise ab 24 €/Einheit, 
              24/7 Erreichbarkeit. Für WEG und Mietverwaltung im gesamten Münsterland.
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

        {/* Local Stats */}
        <section className="py-12 bg-warm-white border-b border-gray-200">
          <div className="max-w-[1100px] mx-auto px-6">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
              <div>
                <p className="text-3xl font-bold text-navy font-serif">~316.000</p>
                <p className="text-text-light text-sm mt-1">Einwohner</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-navy font-serif">~55.000</p>
                <p className="text-text-light text-sm mt-1">Studenten</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-navy font-serif">~11,5 €</p>
                <p className="text-text-light text-sm mt-1">Ø Kaltmiete/m²</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-navy font-serif">&lt;15 Min.</p>
                <p className="text-text-light text-sm mt-1">Reaktionszeit</p>
              </div>
            </div>
          </div>
        </section>

        {/* Leistungen Section */}
        <section className="py-16 lg:py-24 bg-white">
          <div className="max-w-[1100px] mx-auto px-6">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-navy mb-4 font-serif">
                Unsere Leistungen für Münster
              </h2>
              <p className="text-text-light max-w-xl mx-auto">
                Alles, was Ihre Immobilie braucht — von der Mieterkommunikation bis zur Nebenkostenabrechnung.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                { title: "Mieterkommunikation", desc: "24/7 Erreichbarkeit für Mieteranfragen, schnelle Bearbeitung von Mängelmeldern und Anliegen." },
                { title: "Nebenkostenabrechnung", desc: "Fristgerechte Erstellung nach § 556 BGB. Transparent, prüfbar, rechtssicher." },
                { title: "Mietvertragsmanagement", desc: "Vorbereitung, Prüfung und Fortschreibung von Mietverträgen inklusive Kündigungsfristen-Tracking." },
                { title: "Instandhaltung", desc: "Koordination von Reparaturen mit geprüften Handwerkern aus dem Münsterland." },
                { title: "Mieterhöhungen", desc: "Rechtssichere Mieterhöhungen nach § 558 BGB unter Berücksichtigung des Münsteraner Mietspiegels." },
                { title: "Digitales Portal", desc: "Rund-um-die-Uhr Zugriff auf Dokumente, Mieteingänge und Mieterkommunikation." },
              ].map((service, i) => (
                <div key={i} className="bg-warm-white rounded-xl p-6 border border-gray-100">
                  <h3 className="font-bold text-navy mb-2">{service.title}</h3>
                  <p className="text-text-light text-sm leading-relaxed">{service.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Features */}
        <section className="py-16 lg:py-24 bg-warm-white">
          <div className="max-w-[1100px] mx-auto px-6">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-navy mb-4 font-serif">
                Warum Münster-Landlords einfach verwaltet. wählen
              </h2>
              <p className="text-text-light max-w-xl mx-auto">
                In Münsters dynamischem Immobilienmarkt zählt Servicequalität. 
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

        {/* Preise Section */}
        <section className="py-16 lg:py-24 bg-navy text-white">
          <div className="max-w-[1100px] mx-auto px-6">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4 font-serif">
                Transparente Preise für Münster
              </h2>
              <p className="text-white/75 max-w-xl mx-auto">
                Keine versteckten Kosten. Keine Überraschungen. Alles inklusive.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6 max-w-3xl mx-auto">
              <div className="bg-white/10 rounded-2xl p-8 border border-white/20">
                <h3 className="text-xl font-bold mb-2">Mietverwaltung</h3>
                <p className="text-white/60 text-sm mb-4">Für Vermieter von Mietwohnungen</p>
                <div className="mb-6">
                  <span className="text-4xl font-bold">€24</span>
                  <span className="text-white/60"> – €34</span>
                  <span className="text-sm text-white/60"> / Einheit / Monat</span>
                </div>
                <ul className="space-y-2 text-sm text-white/80">
                  <li className="flex items-center gap-2">✓ Mieterkommunikation inklusive</li>
                  <li className="flex items-center gap-2">✓ Nebenkostenabrechnung inklusive</li>
                  <li className="flex items-center gap-2">✓ Mieterhöhungsmanagement inklusive</li>
                  <li className="flex items-center gap-2">✓ Digitales Eigentümer-Portal</li>
                </ul>
              </div>

              <div className="bg-white/10 rounded-2xl p-8 border border-white/20">
                <h3 className="text-xl font-bold mb-2">WEG-Verwaltung</h3>
                <p className="text-white/60 text-sm mb-4">Für Eigentümergemeinschaften</p>
                <div className="mb-6">
                  <span className="text-4xl font-bold">€28</span>
                  <span className="text-white/60"> – €38</span>
                  <span className="text-sm text-white/60"> / Einheit / Monat</span>
                </div>
                <ul className="space-y-2 text-sm text-white/80">
                  <li className="flex items-center gap-2">✓ Eigentümerversammlung inklusive</li>
                  <li className="flex items-center gap-2">✓ Wirtschaftsplan & Abrechnung</li>
                  <li className="flex items-center gap-2">✓ Instandhaltungskoordination</li>
                  <li className="flex items-center gap-2">✓ Digitales Eigentümer-Portal</li>
                </ul>
              </div>
            </div>

            <div className="text-center mt-8">
              <p className="text-white/60 text-sm">
                Einmalige Einrichtungsgebühr: €50 – €100 pro Einheit. Monatliche Kündigung nach 12 Monaten Mindestlaufzeit.
              </p>
            </div>
          </div>
        </section>

        {/* Local Knowledge */}
        <section className="py-16 lg:py-24 bg-white">
          <div className="max-w-[1100px] mx-auto px-6">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold text-navy mb-6 font-serif">
                  Münsterland-Expertise, die sich auszahlt
                </h2>
                <p className="text-text-light leading-relaxed mb-8">
                  Münster ist mehr als eine Universitätsstadt. Als wirtschaftliches Zentrum des Münsterlandes 
                  bietet die Stadt eine stabile Immobilienlage mit attraktiven Renditen. Wir kennen den Markt 
                  — von der Promenade bis nach Hiltrup.
                </p>
                <div className="space-y-6">
                  {localKnowledge.map((item) => (
                    <div key={item.title} className="flex gap-4">
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
                <h3 className="text-xl font-bold text-navy mb-6 font-serif">Münster in Zahlen</h3>
                <div className="space-y-4 text-text-light">
                  <div className="flex justify-between py-2 border-b border-navy/10">
                    <span>Einwohner</span>
                    <span className="font-semibold text-navy">~316.000</span>
                  </div>
                  <div className="flex justify-between py-2 border-b border-navy/10">
                    <span>Studenten (Uni + FH)</span>
                    <span className="font-semibold text-navy">~55.000</span>
                  </div>
                  <div className="flex justify-between py-2 border-b border-navy/10">
                    <span>Durchschnittsmiete kalt</span>
                    <span className="font-semibold text-navy">~11,50 €/m²</span>
                  </div>
                  <div className="flex justify-between py-2 border-b border-navy/10">
                    <span>Mietspiegel gültig bis</span>
                    <span className="font-semibold text-navy">2026</span>
                  </div>
                  <div className="flex justify-between py-2 border-b border-navy/10">
                    <span>Durchschnittliche Reaktionszeit</span>
                    <span className="font-semibold text-navy">15 Min.</span>
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
        <section className="py-16 lg:py-24 bg-warm-white">
          <div className="max-w-[800px] mx-auto px-6">
            <h2 className="text-3xl font-bold text-navy mb-8 text-center font-serif">
              Häufige Fragen zur Hausverwaltung in Münster
            </h2>
            
            <div className="space-y-4">
              <div className="bg-white rounded-xl p-6 border border-gray-100">
                <h3 className="font-bold text-navy mb-2">Was kostet eine Hausverwaltung in Münster?</h3>
                <p className="text-text-light text-sm leading-relaxed">
                  Bei einfach verwaltet. kosten unsere Hausverwaltungsleistungen ab 24 € pro Einheit und Monat für Mietverwaltung, 
                  ab 28 € für WEG-Verwaltung. Alle Leistungen inklusive: Mieterkommunikation, Nebenkostenabrechnung, 
                  Instandhaltungskoordination und digitales Eigentümer-Portal. Keine versteckten Kosten.
                </p>
              </div>

              <div className="bg-white rounded-xl p-6 border border-gray-100">
                <h3 className="font-bold text-navy mb-2">Was unterscheidet den Münsterlander Immobilienmarkt?</h3>
                <p className="text-text-light text-sm leading-relaxed">
                  Münster hat mit etwa 55.000 Studenten einen besonders dynamischen Wohnungsmarkt. Die stark wachsende 
                  Universitätsstadt zeichnet sich durch eine hohe Nachfrage nach Mietwohnungen und eine stabile 
                  Preisentwicklung aus. Wir kennen die Besonderheiten des studentischen Wohnraums und der gehobenen Wohnlagen.
                </p>
              </div>

              <div className="bg-white rounded-xl p-6 border border-gray-100">
                <h3 className="font-bold text-navy mb-2">Wie schnell ist der Wechsel zur einfach verwaltet. in Münster?</h3>
                <p className="text-text-light text-sm leading-relaxed">
                  Der Wechsel dauert in der Regel 4-8 Wochen. Nach Ihrer Kündigung beim bisherigen Verwalter übernehmen 
                  wir die Dokumentation, informieren alle Mieter und koordinieren die Übergabe. Der genaue Zeitpunkt 
                  richtet sich nach Ihrer individuellen Kündigungsfrist.
                </p>
              </div>

              <div className="bg-white rounded-xl p-6 border border-gray-100">
                <h3 className="font-bold text-navy mb-2">Was ist bei einfach verwaltet. alles inklusive?</h3>
                <p className="text-text-light text-sm leading-relaxed">
                  Unser Service umfasst: 24/7 Mieterkommunikation mit Reaktionszeit unter 15 Minuten, fristgerechte 
                  Nebenkostenabrechnung nach § 556 BGB, Mieterhöhungsmanagement nach § 558 BGB, Instandhaltungskoordination 
                  mit geprüftem Handwerkernetzwerk, digitales Dokumentenportal und monatliche Eigentümerberichte. 
                  Keine Zusatzkosten für Standardleistungen.
                </p>
              </div>

              <div className="bg-white rounded-xl p-6 border border-gray-100">
                <h3 className="font-bold text-navy mb-2">Wie ist der Mietspiegel in Münster aktuell?</h3>
                <p className="text-text-light text-sm leading-relaxed">
                  Der Münsteraner Mietspiegel wurde zuletzt 2023 aktualisiert. Die Kaltmieten liegen zwischen ca. 
                  9,50 €/m² (einfache Lagen) und über 14 €/m² (gute Lagen). Wir überwachen die Marktentwicklung 
                  und beraten Sie bei Mieterhöhungen innerhalb der gesetzlichen Grenzen.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 lg:py-20 bg-navy text-white">
          <div className="max-w-[700px] mx-auto px-6 text-center">
            <h2 className="text-3xl font-bold mb-4 font-serif">
              Bereit für eine bessere Hausverwaltung?
            </h2>
            <p className="text-white/75 mb-8">
              Vereinbaren Sie ein kostenloses Erstgespräch. Wir analysieren Ihr Münsteraner Portfolio 
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
