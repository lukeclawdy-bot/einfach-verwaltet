import type { Metadata } from "next";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

export const metadata: Metadata = {
  title: "Mietverwaltung Hamburg — einfach verwaltet.",
  description:
    "Professionelle Mietverwaltung in Hamburg ab 24 €/Einheit/Monat. Mieterkommunikation, Mieteinzug, Nebenkostenabrechnung, Instandhaltung. Für private Eigentümer.",
  openGraph: {
    title: "Mietverwaltung Hamburg — einfach verwaltet.",
    description: "Die moderne Mietverwaltung für Hamburg. Lokales Know-how, transparente Preise, voller Service.",
    url: "https://einfach-verwaltet.de/mietverwaltung-hamburg",
    siteName: "einfach verwaltet.",
    locale: "de_DE",
    type: "website",
  },
};

// Schema.org structured data for Service
const serviceStructuredData = {
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "Mietverwaltung Hamburg",
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
  "description": "Professionelle Mietverwaltung in Hamburg für private Eigentümer. Mieterkommunikation, Mieteinzug, Nebenkostenabrechnung, Instandhaltung.",
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
      "name": "Was kostet eine Mietverwaltung in Hamburg?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Bei einfach verwaltet. kostet die Mietverwaltung ab 24 € pro Einheit und Monat. Dabei sind alle Leistungen inklusive: Mieterkommunikation, Mieteinzug, Nebenkostenabrechnung, Instandhaltungskoordination und das digitale Eigentümer-Portal. Keine versteckten Kosten, keine Einrichtungsgebühren.",
      },
    },
    {
      "@type": "Question",
      "name": "Was macht eine Mietverwaltung genau?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Eine Mietverwaltung übernimmt alle Aufgaben rund um Ihre vermietete Immobilie: Mieterkommunikation und -betreuung, Mieteinzug und Mahnwesen, Nebenkostenabrechnung nach § 556 BGB, Mieterhöhungen nach § 558 BGB, Koordination von Reparaturen und Instandhaltung, Übergaben bei Ein- und Auszug, sowie lückenlose Dokumentation. Sie bleiben Eigentümer — wir kümmern uns um den Rest.",
      },
    },
    {
      "@type": "Question",
      "name": "Wie läuft die Mieterkommunikation bei einfach verwaltet.?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Mieter erreichen uns per Telefon, E-Mail und digitalem Portal. Jede Anfrage wird innerhalb von 15 Minuten bestätigt, verbindliche Rückmeldungen erfolgen am selben Werktag. Bei dringenden Problemen wie Wasserschaden oder Heizungsausfall garantieren wir eine Reaktion innerhalb von 60 Minuten — 365 Tage im Jahr.",
      },
    },
    {
      "@type": "Question",
      "name": "Wer kümmert sich um die Nebenkostenabrechnung?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Wir erstellen die jährliche Nebenkostenabrechnung vollständig nach § 556 Abs. 3 BGB. Das bedeutet: Erfassung aller umlagefähigen Kosten, korrekte Verteilung nach den vereinbarten Schlüsseln, vollständige Belegprüfung, fristgerechte Versendung bis zum 31.12. des Folgejahres. Mieter und Eigentümer erhalten die Abrechnung gleichzeitig, transparent dokumentiert im Portal.",
      },
    },
    {
      "@type": "Question",
      "name": "Wie schnell finden Sie neue Mieter in Hamburg?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Bei Leerstand unterstützen wir Sie bei der schnellen Vermietung: Marktanalyse für die optimale Kaltmiete, professionelle Exposé-Erstellung, Inserierung auf relevanten Portalen, Besichtigungskoordination, Bonitätsprüfung inklusive SCHUFA-Abfrage, Vertragsgestaltung und lückenlose Übergabeprotokolle. Durch unser Hamburg-Netzwerk kennen wir die Nachfrage in jedem Stadtteil.",
      },
    },
  ],
};

const services = [
  {
    icon: "01",
    title: "Mieterkommunikation",
    description: "Professioneller, freundlicher Kontakt zu Ihren Mietern. Anfragen werden innerhalb von 15 Minuten bestätigt, Rückmeldungen erfolgen am selben Werktag. Keine Eskalationen, die Sie überraschen.",
  },
  {
    icon: "02",
    title: "Mieteinzug & Mahnwesen",
    description: "Überwachung aller Mietzahlungen auf einem separaten Treuhandkonto. Bei Zahlungsverzug erfolgen Erinnerungen nach § 286 BGB, bei weiterem Ausbleiben Mahnungen und gegebenenfalls das Mahnverfahren.",
  },
  {
    icon: "03",
    title: "Nebenkostenabrechnung",
    description: "Fristgerechte, vollständige Nebenkostenabrechnung nach § 556 Abs. 3 BGB. Alle Kosten erfasst, korrekt umgelegt, transparent dokumentiert. Versand an Mieter und Eigentümer gleichzeitig.",
  },
  {
    icon: "04",
    title: "Instandhaltung",
    description: "Koordination aller Reparaturen und Wartungsarbeiten über unser geprüftes Handwerkernetzwerk in Hamburg. Vorabgenehmigung bei Kosten über dem vereinbarten Schwellenwert. Qualitätskontrolle nach Abschluss.",
  },
];

const process = [
  {
    step: "1",
    title: "Kennenlernen",
    description: "Wir besprechen Ihre Immobilie, Ihre Mieter und Ihre Wünsche. Ziel: ein maßgeschneidertes Verwaltungskonzept.",
  },
  {
    step: "2",
    title: "Angebot",
    description: "Sie erhalten ein transparentes Angebot mit Festpreis — keine versteckten Kosten, keine Überraschungen.",
  },
  {
    step: "3",
    title: "Übergabe",
    description: "Wir übernehmen die Kommunikation zu den Mietern, erstellen die Dokumentation und starten die Verwaltung.",
  },
  {
    step: "4",
    title: "Laufende Betreuung",
    description: "Sie erhalten monatliche Berichte und haben jederzeit Zugriff auf alle Informationen im Eigentümer-Portal.",
  },
];

export default function MietverwaltungHamburgPage() {
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
              <span className="text-teal text-sm font-semibold">Mietverwaltung Hamburg</span>
            </div>
            <h1 className="text-4xl sm:text-5xl font-bold mb-4 font-serif leading-tight">
              Mietverwaltung Hamburg
              <br />
              <span className="text-teal">für private Eigentümer.</span>
            </h1>
            <p className="text-lg text-white/75 max-w-2xl mx-auto">
              Professionelle Mietverwaltung in Hamburg ab 24 €/Einheit/Monat. 
              Mieterkommunikation, Mieteinzug, Nebenkostenabrechnung, Instandhaltung. 
              Sie bleiben Eigentümer — wir kümmern uns um den Rest.
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

        {/* Services */}
        <section className="py-16 lg:py-24 bg-warm-white">
          <div className="max-w-[1100px] mx-auto px-6">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-navy mb-4 font-serif">
                Unser Mietverwaltungs-Service
              </h2>
              <p className="text-text-light max-w-xl mx-auto">
                Von der Mieterkommunikation bis zur Nebenkostenabrechnung: 
                Wir übernehmen alle Aufgaben rund um Ihre vermietete Immobilie.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 gap-6">
              {services.map((service) => (
                <div key={service.title} className="bg-white rounded-2xl p-8 border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                  <div className="text-4xl font-bold text-teal/20 mb-4">{service.icon}</div>
                  <h3 className="text-xl font-bold text-navy mb-3 font-serif">{service.title}</h3>
                  <p className="text-text-light leading-relaxed">{service.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Process */}
        <section className="py-16 lg:py-24 bg-white">
          <div className="max-w-[1100px] mx-auto px-6">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-navy mb-4 font-serif">
                So startet Ihre Mietverwaltung
              </h2>
              <p className="text-text-light max-w-xl mx-auto">
                In vier Schritten zur professionellen Mietverwaltung. 
                Unkompliziert, transparent, schnell.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {process.map((step) => (
                <div key={step.step} className="text-center">
                  <div className="w-12 h-12 rounded-full bg-teal/10 flex items-center justify-center mx-auto mb-4">
                    <span className="text-teal font-bold text-lg">{step.step}</span>
                  </div>
                  <h3 className="font-bold text-navy mb-2">{step.title}</h3>
                  <p className="text-text-light text-sm">{step.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Local Hamburg Section */}
        <section className="py-16 lg:py-24 bg-navy/5">
          <div className="max-w-[1100px] mx-auto px-6">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold text-navy mb-6 font-serif">
                  Mietverwaltung mit Hamburg-Know-how
                </h2>
                <p className="text-text-light leading-relaxed mb-6">
                  Hamburgs Mietmarkt ist einzigartig. Von den hohen Mieten in der HafenCity über 
                  die gefragten Altbauten in Eimsbüttel bis zu den familienfreundlichen Vierteln 
                  in Winterhude — wir kennen jeden Stadtteil.
                </p>
                <p className="text-text-light leading-relaxed mb-6">
                  Das nutzen wir für Ihre Mietverwaltung: korrekte Mietspiegel-Analysen, 
                  marktgerechte Anpassungen innerhalb der gesetzlichen Grenzen, schnelle 
                  Vermietung bei Leerstand durch lokales Netzwerk.
                </p>
                <div className="bg-white rounded-xl p-6 border border-gray-100">
                  <h4 className="font-bold text-navy mb-3">Unsere Stärken in Hamburg:</h4>
                  <ul className="space-y-2 text-text-light text-sm">
                    <li className="flex items-start gap-2">
                      <span className="text-teal">✓</span>
                      <span>Geprüftes Handwerkernetzwerk in allen Bezirken</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-teal">✓</span>
                      <span>Aktueller Hamburger Mietspiegel in allen Berechnungen</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-teal">✓</span>
                      <span>Berücksichtigung von Mietpreisbremse-Zonen</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-teal">✓</span>
                      <span>Schnelle Reaktion bei Notfällen — 365 Tage/Jahr</span>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="bg-white rounded-2xl p-8 border border-gray-100 shadow-sm">
                <h3 className="text-xl font-bold text-navy mb-6 font-serif">Was Eigentümer sagen</h3>
                <blockquote className="text-text-light italic mb-6">
                  "Endlich eine Hausverwaltung, die hält was sie verspricht. Die Kommunikation mit 
                  meinen Mietern läuft reibungslos, die Nebenkostenabrechnung kommt pünktlich, 
                  und ich habe jederzeit den Überblick über mein Portfolio."
                </blockquote>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-teal/10 flex items-center justify-center">
                    <span className="text-teal font-bold">M.K.</span>
                  </div>
                  <div>
                    <p className="font-semibold text-navy">Eigentümer, Hamburg-Eimsbüttel</p>
                    <p className="text-text-light text-sm">12 Wohnungen verwaltet</p>
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
              Häufige Fragen zur Mietverwaltung
            </h2>
            
            <div className="space-y-4">
              <div className="bg-warm-white rounded-xl p-6 border border-gray-100">
                <h3 className="font-bold text-navy mb-2">Was kostet eine Mietverwaltung in Hamburg?</h3>
                <p className="text-text-light text-sm leading-relaxed">
                  Bei einfach verwaltet. kostet die Mietverwaltung ab 24 € pro Einheit und Monat. 
                  Dabei sind alle Leistungen inklusive: Mieterkommunikation, Mieteinzug, Nebenkostenabrechnung, 
                  Instandhaltungskoordination und das digitale Eigentümer-Portal. Keine versteckten Kosten, 
                  keine Einrichtungsgebühren.
                </p>
              </div>

              <div className="bg-warm-white rounded-xl p-6 border border-gray-100">
                <h3 className="font-bold text-navy mb-2">Was macht eine Mietverwaltung genau?</h3>
                <p className="text-text-light text-sm leading-relaxed">
                  Eine Mietverwaltung übernimmt alle Aufgaben rund um Ihre vermietete Immobilie: 
                  Mieterkommunikation und -betreuung, Mieteinzug und Mahnwesen, Nebenkostenabrechnung nach § 556 BGB, 
                  Mieterhöhungen nach § 558 BGB, Koordination von Reparaturen und Instandhaltung, 
                  Übergaben bei Ein- und Auszug, sowie lückenlose Dokumentation. Sie bleiben Eigentümer — wir kümmern uns um den Rest.
                </p>
              </div>

              <div className="bg-warm-white rounded-xl p-6 border border-gray-100">
                <h3 className="font-bold text-navy mb-2">Wie läuft die Mieterkommunikation bei einfach verwaltet.?</h3>
                <p className="text-text-light text-sm leading-relaxed">
                  Mieter erreichen uns per Telefon, E-Mail und digitalem Portal. Jede Anfrage wird innerhalb 
                  von 15 Minuten bestätigt, verbindliche Rückmeldungen erfolgen am selben Werktag. 
                  Bei dringenden Problemen wie Wasserschaden oder Heizungsausfall garantieren wir eine 
                  Reaktion innerhalb von 60 Minuten — 365 Tage im Jahr.
                </p>
              </div>

              <div className="bg-warm-white rounded-xl p-6 border border-gray-100">
                <h3 className="font-bold text-navy mb-2">Wer kümmert sich um die Nebenkostenabrechnung?</h3>
                <p className="text-text-light text-sm leading-relaxed">
                  Wir erstellen die jährliche Nebenkostenabrechnung vollständig nach § 556 Abs. 3 BGB. 
                  Das bedeutet: Erfassung aller umlagefähigen Kosten, korrekte Verteilung nach den vereinbarten 
                  Schlüsseln, vollständige Belegprüfung, fristgerechte Versendung bis zum 31.12. des Folgejahres. 
                  Mieter und Eigentümer erhalten die Abrechnung gleichzeitig, transparent dokumentiert im Portal.
                </p>
              </div>

              <div className="bg-warm-white rounded-xl p-6 border border-gray-100">
                <h3 className="font-bold text-navy mb-2">Wie schnell finden Sie neue Mieter in Hamburg?</h3>
                <p className="text-text-light text-sm leading-relaxed">
                  Bei Leerstand unterstützen wir Sie bei der schnellen Vermietung: Marktanalyse für die optimale 
                  Kaltmiete, professionelle Exposé-Erstellung, Inserierung auf relevanten Portalen, 
                  Besichtigungskoordination, Bonitätsprüfung inklusive SCHUFA-Abfrage, Vertragsgestaltung und 
                  lückenlose Übergabeprotokolle. Durch unser Hamburg-Netzwerk kennen wir die Nachfrage in jedem Stadtteil.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 lg:py-20 bg-navy text-white">
          <div className="max-w-[700px] mx-auto px-6 text-center">
            <h2 className="text-3xl font-bold mb-4 font-serif">
              Starten Sie Ihre Mietverwaltung
            </h2>
            <p className="text-white/75 mb-8">
              Vereinbaren Sie ein kostenloses Erstgespräch. Wir analysieren Ihre Immobilie 
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
