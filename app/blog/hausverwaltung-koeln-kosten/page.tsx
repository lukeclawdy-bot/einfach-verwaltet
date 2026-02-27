import type { Metadata } from "next";
import Link from "next/link";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

export const metadata: Metadata = {
  title: "Hausverwaltung Köln Kosten 2026: Was kostet eine Mietverwaltung? | einfach verwaltet.",
  description:
    "Hausverwaltung Köln Kosten 2026: Marktpreise €20–35/Einheit, Preisfaktoren, Leistungsumfang und ROI. Transparent erklärt von einfach verwaltet.",
  keywords:
    "Hausverwaltung Köln Kosten, Hausverwaltung Köln Preise, Mietverwaltung Köln Kosten, Hausverwaltung Köln Vergleich",
  openGraph: {
    title: "Hausverwaltung Köln Kosten 2026: Was kostet eine Mietverwaltung?",
    description:
      "Marktpreise, Leistungsumfang und versteckte Kosten bei der Hausverwaltung in Köln.",
    url: "https://einfach-verwaltet.de/blog/hausverwaltung-koeln-kosten",
    siteName: "einfach verwaltet.",
    locale: "de_DE",
    type: "article",
  },
};

const jsonLdArticle = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Hausverwaltung Köln Kosten 2026: Was kostet eine Mietverwaltung?",
  description:
    "Hausverwaltung Köln Kosten 2026: Marktpreise, Leistungsumfang, versteckte Gebühren und ROI-Berechnung für private Vermieter.",
  author: { "@type": "Organization", name: "einfach verwaltet." },
  publisher: {
    "@type": "Organization",
    name: "einfach verwaltet.",
    logo: { "@type": "ImageObject", url: "https://einfach-verwaltet.de/logo.png" },
  },
  datePublished: new Date().toISOString(),
  inLanguage: "de",
  url: "https://einfach-verwaltet.de/blog/hausverwaltung-koeln-kosten",
};

const jsonLdFaq = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Was kostet eine Hausverwaltung in Köln?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Eine professionelle Hausverwaltung in Köln kostet typischerweise zwischen €20 und €35 pro Einheit und Monat. Der genaue Preis hängt von der Anzahl der Einheiten, dem Stadtteil und dem gewählten Leistungsumfang ab.",
      },
    },
    {
      "@type": "Question",
      name: "Was ist beim Hausverwaltung Köln Preis alles inklusive?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Der Basispreis umfasst typischerweise: Mieterkommunikation, Mietzahlungsüberwachung, Nebenkostenabrechnung, Belegmanagement, Handwerkereinsätze und Eigentümerreporting. Achten Sie auf Zusatzkosten wie Vermietungsprovisionen oder Mieterhöhungsgebühren.",
      },
    },
    {
      "@type": "Question",
      name: "Lohnt sich eine Hausverwaltung in Köln?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Ja, besonders bei mehreren Einheiten. Die Selbstverwaltung kostet 4–8 Stunden pro Einheit monatlich. Bei 10 Einheiten sind das 40–80 Stunden — eine Halbzeitstelle unbezahlt. Dazu kommt persönliche Haftung und keine Urlaubsvertretung.",
      },
    },
  ],
};

export default function Post() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdArticle) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdFaq) }}
      />
      <Navbar />
      <main className="bg-warm-white min-h-screen pt-16">
        <article className="max-w-3xl mx-auto px-4 py-16">
          <nav className="text-sm text-gray-500 mb-8">
            <Link href="/" className="hover:text-teal">Startseite</Link>
            <span className="mx-2">›</span>
            <Link href="/blog" className="hover:text-teal">Ratgeber</Link>
            <span className="mx-2">›</span>
            <span className="text-gray-700">Hausverwaltung Köln Kosten</span>
          </nav>

          <header className="mb-10">
            <p className="text-teal text-sm font-semibold uppercase tracking-wider mb-3">
              Ratgeber · 8 min Lesezeit
            </p>
            <h1 className="text-3xl md:text-4xl font-bold text-navy font-playfair mb-4 leading-tight">
              Hausverwaltung Köln Kosten 2026: Was kostet eine Mietverwaltung?
            </h1>
            <p className="text-gray-500 text-sm">Februar 2026 · einfach verwaltet.</p>
          </header>

          <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed space-y-6">
            <p className="text-xl text-gray-600">
              Köln ist einer der angespanntesten Immobilienmärkte Deutschlands. 
              Wer hier als Eigentümer erfolgreich sein will, braucht eine professionelle 
              Hausverwaltung — aber was kostet das? Ein transparente Kostenaufstellung.
            </p>

            <h2 className="text-2xl font-bold text-navy font-playfair mt-10 mb-4">
              Marktpreise Köln 2026: Der aktuelle Überblick
            </h2>
            <p>
              Für die Mietverwaltung liegt das Marktpreisniveau in Köln bei{" "}
              <strong>€20–35 pro Einheit und Monat</strong>. Je mehr Einheiten 
              ein Eigentümer hat, desto günstiger wird der Preis pro Einheit.
            </p>
            <div className="bg-navy/5 border border-navy/10 rounded-xl p-6">
              <h3 className="font-bold text-navy mb-3">Orientierungsrahmen Köln 2026</h3>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span>1–5 Einheiten</span>
                  <span className="font-semibold">€30–35/Einheit/Monat</span>
                </div>
                <div className="flex justify-between">
                  <span>6–20 Einheiten</span>
                  <span className="font-semibold">€26–30/Einheit/Monat</span>
                </div>
                <div className="flex justify-between">
                  <span>21–50 Einheiten</span>
                  <span className="font-semibold">€22–26/Einheit/Monat</span>
                </div>
                <div className="flex justify-between">
                  <span>50+ Einheiten</span>
                  <span className="font-semibold">individuell</span>
                </div>
              </div>
            </div>

            <h2 className="text-2xl font-bold text-navy font-playfair mt-10 mb-4">
              Was beeinflusst die Kosten in Köln?
            </h2>
            <p>Mehrere Faktoren bestimmen den Preis für Hausverwaltung in Köln:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Stadtteil:</strong> Innenstadt, Ehrenfeld und Agnesviertel haben höhere Verwaltungsaufwände</li>
              <li><strong>Objektzustand:</strong> Altbauten erfordern mehr Instandhaltungskoordination</li>
              <li><strong>Mieterstruktur:</strong> Gewerbemieter oder Kurzzeitmieten erhöhen den Aufwand</li>
              <li><strong>Leistungsumfang:</strong> WEG-Verwaltung ist aufwändiger als reine Mietverwaltung</li>
              <li><strong>Dokumentenlage:</strong> Fehlende Unterlagen beim Verwalterwechsel erhöhen den Initialaufwand</li>
            </ul>

            <h2 className="text-2xl font-bold text-navy font-playfair mt-10 mb-4">
              Was sollte im Grundhonorar enthalten sein?
            </h2>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Mieterkommunikation:</strong> Entgegennahme und Bearbeitung von Mieteranfragen</li>
              <li><strong>Mietzahlungsüberwachung:</strong> Kontrolle des Mieteingangs, Mahnwesen</li>
              <li><strong>Betriebskostenabrechnung:</strong> Erstellung und Versand der jährlichen Abrechnung</li>
              <li><strong>Belegmanagement:</strong> Verwaltung von Rechnungen, Verträgen, Wartungsnachweisen</li>
              <li><strong>Handwerkereinsätze:</strong> Organisation von Reparaturen und Wartungen</li>
              <li><strong>Eigentümerreporting:</strong> Regelmäßige Berichte über Einnahmen und Ausgaben</li>
            </ul>

            <h2 className="text-2xl font-bold text-navy font-playfair mt-10 mb-4">
              Versteckte Kosten: Was oft extra berechnet wird
            </h2>
            <p>Typische Posten, die nicht im Basispreis enthalten sind:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Vermietungsprovisionen:</strong> 1–2 Nettokaltmieten bei Mieterwechsel</li>
              <li><strong>Mieterhöhungsverlangen:</strong> Formulierung und Versand als Extraleistung</li>
              <li><strong>Mahngebühren:</strong> Pauschale pro Mahnschreiben</li>
              <li><strong>Außerordentliche Korrespondenz:</strong> Jedes Schreiben über das "Normale" hinaus</li>
              <li><strong>Eigentümerversammlungen:</strong> Teilnahmegebühren pro Stunde</li>
            </ul>
            <p className="bg-amber-50 border-l-4 border-amber-400 p-4 rounded">
              <strong>Tipp:</strong> Verlangen Sie vor Vertragsschluss ein vollständiges 
              Leistungsverzeichnis mit allen möglichen Zusatzgebühren. Ein günstiger 
              Grundpreis kann sich durch diese Positionen schnell verdoppeln.
            </p>

            <h2 className="text-2xl font-bold text-navy font-playfair mt-10 mb-4">
              Kölner Besonderheiten bei der Hausverwaltung
            </h2>
            <p>
              Köln hat als Messe- und Medienstadt besondere Mietstrukturen. Befristete 
              Mietverträge während Messen wie der gamescom oder Art Cologne sind üblich. 
              Die Mietpreisbremse gilt in ausgewiesenen Gebieten und muss bei jeder 
              Mieterhöhung berücksichtigt werden.
            </p>
            <p>
              Der Kölner Mietspiegel bildet die Grundlage für Mieterhöhungen nach §558 BGB. 
              Aktuelle Vergleichsmieten liegen bei €12–15/qm in zentralen Lagen.
            </p>

            <h2 className="text-2xl font-bold text-navy font-playfair mt-10 mb-4">
              Selbstverwaltung: Die versteckten Kosten
            </h2>
            <p>
              Die Selbstverwaltung einer Einheit kostet erfahrungsgemäß 4–8 
              Stunden pro Monat. Bei 10 Einheiten: 40–80 Stunden monatlich — eine 
              Halbzeitstelle, unbezahlt, mit persönlicher Haftung und ohne Urlaub.
            </p>

            <h2 className="text-2xl font-bold text-navy font-playfair mt-10 mb-4">
              Der ROI einer professionellen Hausverwaltung
            </h2>
            <p>
              Bei 10 Einheiten à €28/Monat zahlen Sie €3.360 im Jahr. Im 
              Gegenzug gewinnen Sie:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Mehrere hundert Stunden Ihrer Zeit zurück</li>
              <li>Rechtssicherheit bei Abrechnungen und Mieterhöhungen</li>
              <li>Professionelles Mahnwesen, das Mietausfälle reduziert</li>
              <li>Schnelle Handwerkerkoordination, die Leerstandszeiten verkürzt</li>
              <li>Lokales Know-how für den Kölner Markt</li>
            </ul>
            <p>
              Wer eine einzige fehlerhafte Betriebskostenabrechnung vermeidet, 
              hat die Verwaltungskosten eines ganzen Jahres bereits refinanziert.
            </p>

            <h2 className="text-2xl font-bold text-navy font-playfair mt-10 mb-4">
              Fazit: Qualität zahlt sich aus
            </h2>
            <p>
              Beim Hausverwaltung zahlen Sie nicht für einen Dienstleister — Sie 
              zahlen für Ihre Ruhe und die Sicherheit Ihres Investments. Wer auf 
              das vermeintlich billigste Angebot setzt, zahlt häufig doppelt. 
              In Köln mit seinem dynamischen Markt lohnt sich eine professionelle 
              Verwaltung besonders.
            </p>
          </div>

          <div className="mt-12 bg-teal/10 border border-teal/20 rounded-xl p-8">
            <h3 className="text-xl font-bold text-navy mb-2 font-playfair">
              Transparente Preise für Köln
            </h3>
            <p className="text-gray-600 mb-4">
              einfach verwaltet. bietet Hausverwaltung in Köln ab €24/Einheit/Monat. 
              Keine versteckten Gebühren, kein Kleingedrucktes.
            </p>
            <Link
              href="/preise"
              className="inline-block bg-teal text-white font-semibold px-6 py-3 rounded-lg hover:bg-teal/90 transition-colors mr-3"
            >
              Preise ansehen
            </Link>
            <Link
              href="/anfrage"
              className="inline-block border border-teal text-teal font-semibold px-6 py-3 rounded-lg hover:bg-teal/5 transition-colors"
            >
              Angebot anfordern
            </Link>
          </div>

          <div className="mt-10">
            <Link href="/blog" className="text-teal hover:underline text-sm">
              ← Zurück zum Ratgeber
            </Link>
          </div>
        </article>
      </main>
      <Footer />
    </>
  );
}
