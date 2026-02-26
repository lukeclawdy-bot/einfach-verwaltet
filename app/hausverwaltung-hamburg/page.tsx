import type { Metadata } from "next";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

export const metadata: Metadata = {
  title: "Hausverwaltung Hamburg — einfach verwaltet.",
  description:
    "Professionelle Hausverwaltung in Hamburg: transparente Preise ab €24/Einheit, 24/7 Erreichbarkeit, lokales Handwerkernetzwerk. Für WEG und Mietverwaltung.",
  openGraph: {
    title: "Hausverwaltung Hamburg — einfach verwaltet.",
    description: "Die moderne Hausverwaltung für Hamburg. Lokales Know-how, transparente Preise, immer erreichbar.",
    url: "https://einfach-verwaltet.de/hausverwaltung-hamburg",
    siteName: "einfach verwaltet.",
    locale: "de_DE",
    type: "website",
  },
};

// Schema.org structured data for Service
const serviceStructuredData = {
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "Hausverwaltung Hamburg",
  "provider": {
    "@type": "Organization",
    "name": "einfach verwaltet.",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Hamburg",
      "addressCountry": "DE"
    }
  },
  "areaServed": {
    "@type": "City",
    "name": "Hamburg"
  },
  "description": "Professionelle Hausverwaltung in Hamburg für WEG und Mietverwaltung. Transparente Preise, lokales Know-how, 24/7 Erreichbarkeit.",
  "offers": {
    "@type": "Offer",
    "price": "24",
    "priceCurrency": "EUR",
    "priceValidUntil": "2026-12-31",
    "availability": "https://schema.org/InStock"
  }
};

// Schema.org structured data for FAQ
const faqStructuredData = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Was kostet eine Hausverwaltung in Hamburg?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Bei einfach verwaltet. kosten unsere Hausverwaltungsleistungen ab 24 € pro Einheit und Monat für Mietverwaltung, ab 28 € für WEG-Verwaltung. Alle Leistungen inklusive: Mieterkommunikation, Nebenkostenabrechnung, Instandhaltungskoordination und digitales Eigentümer-Portal. Keine versteckten Kosten.",
      },
    },
    {
      "@type": "Question",
      "name": "Wie kann ich meinen Hausverwalter in Hamburg kündigen?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Die Kündigung eines Hausverwalters in Hamburg folgt den vertraglichen Vereinbarungen. Üblich sind Kündigungsfristen von 3-6 Monaten zum Jahresende. Wir begleiten Sie durch den Wechsel: von der Kündigung beim alten Verwalter über die Dokumentenübergabe bis zur Mieterinformation.",
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
      "name": "Wie lange dauert der Wechsel der Hausverwaltung?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Der Wechsel zur einfach verwaltet. dauert in der Regel 4-8 Wochen. Nach Ihrer Kündigung beim bisherigen Verwalter übernehmen wir die Dokumentation, informieren alle Mieter und koordinieren die Übergabe. Der genaue Zeitpunkt richtet sich nach Ihrer individuellen Kündigungsfrist.",
      },
    },
    {
      "@type": "Question",
      "name": "Gibt es eine Mindestvertragslaufzeit bei einfach verwaltet.?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Ja, die Mindestvertragslaufzeit beträgt 12 Monate. Danach können Sie mit einer Frist von 3 Monaten zum Monatsende kündigen. Keine automatische Verlängerung ohne Ihre ausdrückliche Zustimmung. Wir überzeugen durch Servicequalität, nicht durch Vertragsfesseln.",
      },
    },
    {
      "@type": "Question",
      "name": "Was passiert bei Leerstand meiner Immobilie in Hamburg?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Bei Leerstand unterstützen wir Sie bei der Neumiete: von der Marktanalyse und Preisgestaltung über die Erstellung von Exposés und die Koordination von Besichtigungen bis zur Bonitätsprüfung und Vertragsgestaltung. In Hamburg kennen wir den lokalen Mietmarkt — von der HafenCity bis zu den Stadtteilen Eimsbüttel, Altona und Winterhude.",
      },
    },
  ],
};

const features = [
  {
    title: "Hamburg-lokales Know-how",
    description: "Wir kennen den Hamburger Immobilienmarkt — von Mietpreisbremse bis zum lokalen Mietspiegel. Egal ob HafenCity, Eimsbüttel, Altona oder Winterhude.",
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
    title: "Digitales Eigentümer-Portal",
    description: "Rund um die Uhr Zugriff auf alle Dokumente, Mieteingänge, Reparaturstatus und Mieterkommunikation. Volle Transparenz in Echtzeit.",
  },
];

const localKnowledge = [
  {
    title: "Mietpreisbremse Hamburg",
    description: "Hamburg hat aktive Mietpreisbremsezonen in vielen Stadtteilen. Wir prüfen vor jeder Mieterhöhung die rechtlichen Rahmenbedingungen und sichern Ihre Erträge ab.",
  },
  {
    title: "Hamburger Mietspiegel",
    description: "Der neue Hamburger Mietspiegel gilt für Mietverhältnisse ab 2015. Wir analysieren kontinuierlich die Vergleichsmieten und maximieren Ihre Rendite innerhalb der gesetzlichen Grenzen.",
  },
  {
    title: "Lokales Handwerkernetzwerk",
    description: "Von der HafenCity bis nach Rahlstedt: Unser Netzwerk aus geprüften Handwerkern garantiert schnelle Reaktionszeiten bei Reparaturen und faire Preise.",
  },
];

export default function HausverwaltungHamburgPage() {
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
      <Navbar />
      <main className="pt-24">
        {/* Hero */}
        <section className="py-16 lg:py-24 bg-navy text-white">
          <div className="max-w-[1100px] mx-auto px-6 text-center">
            <div className="inline-flex items-center gap-2 bg-teal/20 rounded-full px-4 py-1.5 mb-6">
              <span className="text-teal text-sm font-semibold">Hausverwaltung in Hamburg</span>
            </div>
            <h1 className="text-4xl sm:text-5xl font-bold mb-4 font-serif leading-tight">
              Hausverwaltung Hamburg
              <br />
              <span className="text-teal">die funktioniert.</span>
            </h1>
            <p className="text-lg text-white/75 max-w-2xl mx-auto">
              Professionelle Hausverwaltung für Hamburg. Lokales Know-how, transparente Preise ab 24 €/Einheit, 
              24/7 Erreichbarkeit. Für WEG und Mietverwaltung — von der HafenCity bis nach Rahlstedt.
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
                Warum Hamburg-Landlords einfach verwaltet. wählen
              </h2>
              <p className="text-text-light max-w-xl mx-auto">
                In Hamburgs dynamischem Immobilienmarkt zählt jede Minute. 
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

        {/* Local Knowledge */}
        <section className="py-16 lg:py-24 bg-white">
          <div className="max-w-[1100px] mx-auto px-6">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold text-navy mb-6 font-serif">
                  Hamburg-Expertise, die sich auszahlt
                </h2>
                <p className="text-text-light leading-relaxed mb-8">
                  Hamburgs Immobilienmarkt ist einzigartig. Von den Mietpreisbremsen-Zonen über den Hamburger Mietspiegel 
                  bis zu den spezifischen Anforderungen an Neubau in der HafenCity — wir kennen die lokalen Besonderheiten.
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
                <h3 className="text-xl font-bold text-navy mb-6 font-serif">Unser Hamburger Netzwerk</h3>
                <div className="space-y-4 text-text-light">
                  <div className="flex justify-between py-2 border-b border-navy/10">
                    <span>Geprüfte Handwerker</span>
                    <span className="font-semibold text-navy">40+ Partner</span>
                  </div>
                  <div className="flex justify-between py-2 border-b border-navy/10">
                    <span>Betreute Stadtteile</span>
                    <span className="font-semibold text-navy">Alle Bezirke</span>
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

        {/* Comparison Teaser */}
        <section className="py-16 lg:py-24 bg-warm-white">
          <div className="max-w-[800px] mx-auto px-6 text-center">
            <h2 className="text-3xl font-bold text-navy mb-4 font-serif">
              Hausverwaltung Hamburg im Vergleich
            </h2>
            <p className="text-text-light mb-8">
              Vergleichen Sie einfach verwaltet. mit anderen Anbietern in Hamburg. 
              Transparente Kriterien, ehrliche Einordnung.
            </p>
            <a
              href="/hausverwaltung-hamburg-vergleich"
              className="inline-flex items-center gap-2 bg-navy text-white px-8 py-4 rounded-xl font-semibold text-lg hover:bg-navy/85 transition-all"
            >
              Zum Vergleich 2026 →
            </a>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-16 lg:py-24 bg-white">
          <div className="max-w-[800px] mx-auto px-6">
            <h2 className="text-3xl font-bold text-navy mb-8 text-center font-serif">
              Häufige Fragen zur Hausverwaltung in Hamburg
            </h2>
            
            <div className="space-y-4">
              <div className="bg-warm-white rounded-xl p-6 border border-gray-100">
                <h3 className="font-bold text-navy mb-2">Was kostet eine Hausverwaltung in Hamburg?</h3>
                <p className="text-text-light text-sm leading-relaxed">
                  Bei einfach verwaltet. kosten unsere Hausverwaltungsleistungen ab 24 € pro Einheit und Monat für Mietverwaltung, 
                  ab 28 € für WEG-Verwaltung. Alle Leistungen inklusive: Mieterkommunikation, Nebenkostenabrechnung, 
                  Instandhaltungskoordination und digitales Eigentümer-Portal. Keine versteckten Kosten.
                </p>
              </div>

              <div className="bg-warm-white rounded-xl p-6 border border-gray-100">
                <h3 className="font-bold text-navy mb-2">Wie kann ich meinen Hausverwalter in Hamburg kündigen?</h3>
                <p className="text-text-light text-sm leading-relaxed">
                  Die Kündigung eines Hausverwalters in Hamburg folgt den vertraglichen Vereinbarungen. Üblich sind 
                  Kündigungsfristen von 3-6 Monaten zum Jahresende. Wir begleiten Sie durch den Wechsel: von der 
                  Kündigung beim alten Verwalter über die Dokumentenübergabe bis zur Mieterinformation.
                </p>
              </div>

              <div className="bg-warm-white rounded-xl p-6 border border-gray-100">
                <h3 className="font-bold text-navy mb-2">Was ist bei einfach verwaltet. alles inklusive?</h3>
                <p className="text-text-light text-sm leading-relaxed">
                  Unser Service umfasst: 24/7 Mieterkommunikation mit Reaktionszeit unter 15 Minuten, fristgerechte 
                  Nebenkostenabrechnung nach § 556 BGB, Mieterhöhungsmanagement nach § 558 BGB, Instandhaltungskoordination 
                  mit geprüftem Handwerkernetzwerk, digitales Dokumentenportal und monatliche Eigentümerberichte. 
                  Keine Zusatzkosten für Standardleistungen.
                </p>
              </div>

              <div className="bg-warm-white rounded-xl p-6 border border-gray-100">
                <h3 className="font-bold text-navy mb-2">Wie lange dauert der Wechsel der Hausverwaltung?</h3>
                <p className="text-text-light text-sm leading-relaxed">
                  Der Wechsel zur einfach verwaltet. dauert in der Regel 4-8 Wochen. Nach Ihrer Kündigung beim bisherigen 
                  Verwalter übernehmen wir die Dokumentation, informieren alle Mieter und koordinieren die Übergabe. 
                  Der genaue Zeitpunkt richtet sich nach Ihrer individuellen Kündigungsfrist.
                </p>
              </div>

              <div className="bg-warm-white rounded-xl p-6 border border-gray-100">
                <h3 className="font-bold text-navy mb-2">Gibt es eine Mindestvertragslaufzeit bei einfach verwaltet.?</h3>
                <p className="text-text-light text-sm leading-relaxed">
                  Ja, die Mindestvertragslaufzeit beträgt 12 Monate. Danach können Sie mit einer Frist von 3 Monaten 
                  zum Monatsende kündigen. Keine automatische Verlängerung ohne Ihre ausdrückliche Zustimmung. 
                  Wir überzeugen durch Servicequalität, nicht durch Vertragsfesseln.
                </p>
              </div>

              <div className="bg-warm-white rounded-xl p-6 border border-gray-100">
                <h3 className="font-bold text-navy mb-2">Was passiert bei Leerstand meiner Immobilie in Hamburg?</h3>
                <p className="text-text-light text-sm leading-relaxed">
                  Bei Leerstand unterstützen wir Sie bei der Neumiete: von der Marktanalyse und Preisgestaltung über 
                  die Erstellung von Exposés und die Koordination von Besichtigungen bis zur Bonitätsprüfung und 
                  Vertragsgestaltung. In Hamburg kennen wir den lokalen Mietmarkt — von der HafenCity bis zu den 
                  Stadtteilen Eimsbüttel, Altona und Winterhude.
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
              Vereinbaren Sie ein kostenloses Erstgespräch. Wir analysieren Ihr Hamburger Portfolio 
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
