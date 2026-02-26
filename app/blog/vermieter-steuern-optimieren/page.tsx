import type { Metadata } from "next";
import Link from "next/link";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

export const metadata: Metadata = {
  title: "Vermieter Steuern optimieren: Abschreibungen, Werbungskosten und Steuervorteile 2026 | einfach verwaltet.",
  description:
    "Vermieter Steuern 2026: Abschreibung (AfA), Werbungskosten, Hausverwaltungsgebühren absetzen. Alle Steuervorteile für Immobilienvermieter im Überblick.",
  keywords:
    "Vermieter Steuern, AfA Abschreibung Immobilie, Werbungskosten Vermieter, Steuervorteile Vermieter 2026",
  openGraph: {
    title: "Vermieter Steuern optimieren: Abschreibungen, Werbungskosten und Steuervorteile 2026",
    description:
      "Steueroptimierung für Vermieter: Alle Abzugsmöglichkeiten, AfA-Tabellen und Werbungskosten im kompletten Überblick.",
    url: "https://einfach-verwaltet.de/blog/vermieter-steuern-optimieren",
    siteName: "einfach verwaltet.",
    locale: "de_DE",
    type: "article",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Vermieter Steuern optimieren: Abschreibungen, Werbungskosten und Steuervorteile 2026",
  description:
    "Steuerliche Optimierung für Immobilienvermieter: AfA, Werbungskosten und alle Steuervorteile nach §21 EStG.",
  author: { "@type": "Organization", name: "einfach verwaltet." },
  publisher: {
    "@type": "Organization",
    name: "einfach verwaltet.",
    logo: {
      "@type": "ImageObject",
      url: "https://einfach-verwaltet.de/logo.png",
    },
  },
  datePublished: "2026-02-26",
  inLanguage: "de",
  url: "https://einfach-verwaltet.de/blog/vermieter-steuern-optimieren",
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Wie hoch ist die AfA für Wohngebäude in 2026?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Für Wohngebäude, die nach 31.12.2022 fertiggestellt wurden, beträgt die AfA 3% linear (§7 Abs. 4 Satz 1 Nr. 1 EStG). Für ältere Gebäude, die zwischen 1925 und 2022 fertiggestellt wurden, gilt weiterhin 2% linear. Bei Denkmalschutzimmobilien können 9% geometrisch-degressiv oder 2,5% linear abgeschrieben werden.",
      },
    },
    {
      "@type": "Question",
      name: "Sind Hausverwaltungsgebühren steuerlich absetzbar?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Ja, Hausverwaltungsgebühren sind als Werbungskosten nach §21 EStG vollständig steuerlich absetzbar. Dies gilt für alle Kosten der Mietverwaltung, inklusive Mietersuche, Mietvertragsgestaltung, Nebenkostenabrechnung und Schönheitsreparatur-Koordination.",
      },
    },
    {
      "@type": "Question",
      name: "Welche Instandhaltungskosten können Vermieter sofort absetzen?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Instandhaltungskosten können in voller Höhe im Jahr der Aufwendung als Werbungskosten geltend gemacht werden, wenn sie den Wert der Immobilie nicht wesentlich erhöhen. Dazu gehören Reparaturen, Renovierungen, Malerarbeiten und Ersatz defekter Einbauten. Modernisierungen, die den Wert wesentlich erhöhen, müssen dagegen über die AfA abgeschrieben werden.",
      },
    },
  ],
};

export default function Post() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <Navbar />
      <main className="bg-warm-white min-h-screen pt-16">
        <article className="max-w-3xl mx-auto px-4 py-16">
          {/* Breadcrumb */}
          <nav className="text-sm text-gray-500 mb-8">
            <Link href="/" className="hover:text-teal">Startseite</Link>
            <span className="mx-2">›</span>
            <Link href="/blog" className="hover:text-teal">Ratgeber</Link>
            <span className="mx-2">›</span>
            <span className="text-gray-700">Vermieter Steuern optimieren</span>
          </nav>

          {/* Header */}
          <header className="mb-10">
            <p className="text-teal text-sm font-semibold uppercase tracking-wider mb-3">
              Ratgeber · 10 min Lesezeit
            </p>
            <h1 className="text-3xl md:text-4xl font-bold text-navy font-playfair mb-4 leading-tight">
              Vermieter Steuern optimieren: Abschreibungen, Werbungskosten und Steuervorteile 2026
            </h1>
            <p className="text-gray-500 text-sm">Februar 2026 · einfach verwaltet.</p>
          </header>

          {/* Content */}
          <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed space-y-6">
            <p>
              Die Vermietung von Immobilien bietet nicht nur regelmäßige Einnahmen, sondern auch 
              erhebliche steuerliche Gestaltungsmöglichkeiten. Wer die geltenden Regelungen kennt, 
              kann seine Steuerlast deutlich reduzieren. Dieser Leitfaden zeigt Ihnen alle 
              relevanten Abzugsmöglichkeiten für Vermieter im Jahr 2026.
            </p>

            <h2 className="text-2xl font-bold text-navy font-playfair mt-10 mb-4">
              Steuerliche Grundlage: §21 EStG
            </h2>
            <p>
              Einkünfte aus Vermietung und Verpachtung werden nach §21 des Einkommensteuergesetzes 
              (EStG) erfasst. Das bedeutet: Sie müssen Ihre Mieteinnahmen versteuern, können jedoch 
              alle mit der Vermietung zusammenhängenden Kosten als Werbungskosten abziehen. 
              Das Ergebnis ist Ihr "Überschuss der Einkünfte aus Vermietung", auf den die 
              Einkommensteuer erhoben wird.
            </p>

            <h2 className="text-2xl font-bold text-navy font-playfair mt-10 mb-4">
              Abschreibung (AfA): Die wichtigste Steuerersparnis
            </h2>
            <p>
              Die Absetzung für Abnutzung (AfA) ermöglicht es Vermietern, den Kaufpreis ihrer 
              Immobilie über Jahrzehnte steuerlich geltend zu machen. Die Höhe der AfA hängt 
              vom Jahr der Fertigstellung des Gebäudes ab:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>
                <strong>3% linear:</strong> Für Wohngebäude, die nach dem 31.12.2022 fertiggestellt 
                wurden (§7 Abs. 4 Satz 1 Nr. 1 EStG). AfA-Dauer: 33 Jahre.
              </li>
              <li>
                <strong>2% linear:</strong> Für Gebäude, die zwischen 1925 und 2022 fertiggestellt 
                wurden. AfA-Dauer: 50 Jahre.
              </li>
              <li>
                <strong>2,5% linear oder 9% geometrisch-degressiv:</strong> Für Gebäude im 
                Denkmalschutz oder in Sanierungsgebieten nach den §§10f, 10g EStG.
              </li>
            </ul>
            <p className="text-gray-500 italic">
              Tipp: Die geometrisch-degressive AfA bietet in den ersten Jahren höhere 
              Abschreibungsbeträge, empfiehlt sich aber nur bei hohen Grenzsteuersätzen 
              und langfristiger Halteperspektive.
            </p>

            <h2 className="text-2xl font-bold text-navy font-playfair mt-10 mb-4">
              Hausverwaltungsgebühren steuerlich absetzen
            </h2>
            <p>
              Alle Kosten für eine professionelle Hausverwaltung sind als Werbungskosten 
              nach §21 EStG vollständig absetzbar. Dazu gehören:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Grundhonorar der Hausverwaltung</li>
              <li>Kosten für Mietersuche und -auswahl</li>
              <li>Gebühren für Mietvertragsgestaltung</li>
              <li>Kosten der Nebenkostenabrechnung</li>
              <li>Instandhaltungsmanagement und Koordination</li>
              <li>Mieterhöhungsverfahren und Mietspiegelabfragen</li>
            </ul>
            <p>
              Bei einer Hausverwaltungsgebühr von beispielsweise €30 pro Einheit und Monat 
              können Sie €360 pro Jahr und Einheit steuerlich geltend machen. Bei einem 
              Portfolio von 10 Einheiten sind das €3.600 jährlich absetzbare Kosten.
            </p>

            <h2 className="text-2xl font-bold text-navy font-playfair mt-10 mb-4">
              Instandhaltung und Modernisierung richtig abgrenzen
            </h2>
            <p>
              Eine zentrale Unterscheidung bei den Werbungskosten ist die Abgrenzung zwischen 
              Instandhaltung und Modernisierung:
            </p>
            <h3 className="text-xl font-semibold text-navy mt-6 mb-2">
              Sofort absetzbar: Instandhaltung
            </h3>
            <p>
              Maßnahmen, die das Gebäude in seinen ursprünglichen Zustand zurückversetzen, 
              können sofort als Werbungskosten abgezogen werden. Dazu gehören:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Reparaturen defekter Einbauten (Heizung, Sanitär, Elektro)</li>
              <li>Malerarbeiten und Tapezierungen</li>
              <li>Erneuerung von Fußböden in gleicher Qualität</li>
              <li>Reparatur von Dach und Fassade</li>
              <li>Wartung und Instandsetzung von Aufzügen</li>
            </ul>
            <h3 className="text-xl font-semibold text-navy mt-6 mb-2">
              Über AfA abzuschreiben: Modernisierung
            </h3>
            <p>
              Werterhöhende Maßnahmen, die den Gebrauchswert oder die Nutzungsdauer 
              wesentlich erhöhen, müssen über die AfA abgeschrieben werden (§7 Abs. 4 EStG). 
              Dazu zählen beispielsweise:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Austausch von Einbauküche gegen hochwertigere</li>
              <li>Einbau von Dämmung und neuen Fenstern (Energetische Sanierung)</li>
              <li>Erweiterung von Wohnfläche (Dachgeschossausbau)</li>
              <li>Erneuerung der Haustechnik (Heizungssanierung)</li>
            </ul>

            <h2 className="text-2xl font-bold text-navy font-playfair mt-10 mb-4">
              Weitere absetzbare Werbungskosten
            </h2>
            <p>
              Neben den bereits genannten Positionen können Vermieter zahlreiche weitere 
              Kosten steuerlich geltend machen:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>
                <strong>Grundsteuer:</strong> Vollständig als Werbungskosten absetzbar, 
                sofern nicht auf den Mieter umgelegt.
              </li>
              <li>
                <strong>Grundschuld- und Hypothekenzinsen:</strong> Zinsen für Fremdkapital 
                zur Finanzierung der vermieteten Immobilie.
              </li>
              <li>
                <strong>Versicherungen:</strong> Gebäudeversicherung, Haftpflichtversicherung 
                für Vermieter, Rechtsschutzversicherung.
              </li>
              <li>
                <strong>Werbungskosten für Mietersuche:</strong> Anzeigenkosten, Maklercourtage 
                (im begrenzten Umfang).
              </li>
              <li>
                <strong>Rechts- und Beratungskosten:</strong> Steuerberater, Anwalt für 
                Mietrecht, Gutachter.
              </li>
              <li>
                <strong>Entfernungspauschale:</strong> 30 Cent pro Kilometer für Fahrten 
                zur Immobilie (Hin- und Rückweg).
              </li>
              <li>
                <strong>Kontoführungsgebühren:</strong> Für das Mietkonto oder das Konto, 
                auf dem die Mieteingänge gebucht werden.
              </li>
            </ul>

            <h2 className="text-2xl font-bold text-navy font-playfair mt-10 mb-4">
              Steuerliche Verlustverrechnung und Verlustvortrag
            </h2>
            <p>
              Werden die Werbungskosten höher sein als die Mieteinnahmen, entsteht ein 
              Verlust aus Vermietung. Dieser Verlust kann mit anderen Einkünften (z.B. 
              aus nichtselbstständiger Arbeit) verrechnet werden und mindert so Ihre 
              Gesamtsteuerlast. Nicht verrechenbare Verluste können ins nächste Jahr 
              vorgetragen werden (§10d EStG).
            </p>
            <p className="text-gray-500 italic">
              Hinweis: Die Verlustverrechnung bei der Vermietung kann eingeschränkt werden, 
              wenn die Immobilie als "übliche Vermietung" angesehen wird und hohe Zinsaufwendungen 
              bestehen. Ein Steuerberater kann hier individuell beraten.
            </p>

            <h2 className="text-2xl font-bold text-navy font-playfair mt-10 mb-4">
              Fazit: Steueroptimierung mit System
            </h2>
            <p>
              Die steuerliche Optimierung für Vermieter erfordert keine komplexen 
              Gestaltungsmodelle, sondern konsequentes Erfassen aller absetzbaren Kosten. 
              Mit der richtigen AfA, professioneller Hausverwaltung und sorgfältiger 
              Dokumentation lassen sich Steuerersparnisse im vier- bis fünfstelligen 
              Bereich realisieren — Jahr für Jahr.
            </p>

            {/* FAQ Section */}
            <h2 className="text-2xl font-bold text-navy font-playfair mt-10 mb-4">
              Häufig gestellte Fragen
            </h2>
            <div className="space-y-6">
              <div className="bg-white rounded-lg border border-gray-200 p-6">
                <h3 className="font-semibold text-navy mb-2">
                  Wie hoch ist die AfA für Wohngebäude in 2026?
                </h3>
                <p>
                  Für Wohngebäude, die nach 31.12.2022 fertiggestellt wurden, beträgt die AfA 
                  3% linear (§7 Abs. 4 Satz 1 Nr. 1 EStG). Für ältere Gebäude, die zwischen 1925 
                  und 2022 fertiggestellt wurden, gilt weiterhin 2% linear. Bei Denkmalschutzimmobilien 
                  können 9% geometrisch-degressiv oder 2,5% linear abgeschrieben werden.
                </p>
              </div>
              <div className="bg-white rounded-lg border border-gray-200 p-6">
                <h3 className="font-semibold text-navy mb-2">
                  Sind Hausverwaltungsgebühren steuerlich absetzbar?
                </h3>
                <p>
                  Ja, Hausverwaltungsgebühren sind als Werbungskosten nach §21 EStG vollständig 
                  steuerlich absetzbar. Dies gilt für alle Kosten der Mietverwaltung, inklusive 
                  Mietersuche, Mietvertragsgestaltung, Nebenkostenabrechnung und Schönheitsreparatur-Koordination.
                </p>
              </div>
              <div className="bg-white rounded-lg border border-gray-200 p-6">
                <h3 className="font-semibold text-navy mb-2">
                  Welche Instandhaltungskosten können Vermieter sofort absetzen?
                </h3>
                <p>
                  Instandhaltungskosten können in voller Höhe im Jahr der Aufwendung als Werbungskosten 
                  geltend gemacht werden, wenn sie den Wert der Immobilie nicht wesentlich erhöhen. 
                  Dazu gehören Reparaturen, Renovierungen, Malerarbeiten und Ersatz defekter Einbauten. 
                  Modernisierungen, die den Wert wesentlich erhöhen, müssen dagegen über die AfA 
                  abgeschrieben werden.
                </p>
              </div>
            </div>
          </div>

          {/* CTA */}
          <div className="mt-12 bg-teal/10 border border-teal/20 rounded-xl p-8">
            <h3 className="text-xl font-bold text-navy mb-2 font-playfair">
              Steuervorteile voll ausschöpfen?
            </h3>
            <p className="text-gray-600 mb-4">
              einfach verwaltet. dokumentiert alle Kosten steueroptimiert und stellt 
              Ihnen übersichtliche Auswertungen für Ihren Steuerberater zur Verfügung.
            </p>
            <Link
              href="/anfrage"
              className="inline-block bg-teal text-white font-semibold px-6 py-3 rounded-lg hover:bg-teal/90 transition-colors"
            >
              Kostenlose Beratung vereinbaren
            </Link>
          </div>

          {/* Back */}
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
