import type { Metadata } from "next";
import Link from "next/link";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

export const metadata: Metadata = {
  title: "Kautionsrückgabe: Wann und wie viel muss der Vermieter zurückzahlen? | einfach verwaltet.",
  description:
    "Kautionsrückgabe nach §551 BGB: Rückgabefrist, Verzinsung, Abzüge für Schäden. Alles was Vermieter und Mieter zur Kaution wissen müssen.",
  keywords:
    "Kautionsrückgabe Frist, Mietkaution Rückzahlung, §551 BGB Kaution, Kaution zurück Mieter",
  openGraph: {
    title: "Kautionsrückgabe: Wann und wie viel muss der Vermieter zurückzahlen?",
    description:
      "Kautionsrückgabe nach Mietende: Fristen, Verzinsung, Abzugsgründe — der komplette Leitfaden für Vermieter.",
    url: "https://einfach-verwaltet.de/blog/kautionsrueckgabe-frist",
    siteName: "einfach verwaltet.",
    locale: "de_DE",
    type: "article",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Kautionsrückgabe: Wann und wie viel muss der Vermieter zurückzahlen?",
  description:
    "Kautionsrückgabe nach §551 BGB: Fristen, Verzinsung und Abzugsgründe erklärt.",
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
  url: "https://einfach-verwaltet.de/blog/kautionsrueckgabe-frist",
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Wie lange hat der Vermieter Zeit, die Kaution zurückzuzahlen?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Nach §551 Abs. 3 BGB muss der Vermieter die Kaution innerhalb einer angemessenen Frist nach Beendigung des Mietverhältnisses zurückzahlen. Als Richtwert gelten 6-12 Monate, je nach Komplexität der Abrechnungen. Für die Rückzahlung der laufenden Betriebskosten gilt: Sobald die Abrechnung vorliegt, muss das Guthaben umgehend ausgezahlt werden.",
      },
    },
    {
      "@type": "Question",
      name: "Wie hoch ist die Kautionsverzinsung?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Die Kaution ist zu einem angemessenen Zinssatz zu verzinsen (§551 Abs. 3 Satz 2 BGB). Der Basiszinssatz nach §247 BGB dient als Orientierung. Ab 2026 liegt der Basiszinssatz bei 1,27% p.a. Hinzu kommt ein angemessener Aufschlag, sodass Kautionsguthaben typischerweise mit 2-3% p.a. verzinst werden.",
      },
    },
    {
      "@type": "Question",
      name: "Für welche Schäden darf der Vermieter die Kaution einbehalten?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Der Vermieter darf die Kaution nur für tatsächlich entstandene Mängel und Schäden einbehalten, die der Mieter zu vertreten hat. Dazu gehören: Mietrückstände, nicht durchgeführte Schönheitsreparaturen, Beschädigungen an der Mietsache über normale Abnutzung hinaus, offene Nebenkostenforderungen. Vermutete oder nicht nachgewiesene Schäden rechtfertigen keinen Einbehalt.",
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
            <span className="text-gray-700">Kautionsrückgabe</span>
          </nav>

          {/* Header */}
          <header className="mb-10">
            <p className="text-teal text-sm font-semibold uppercase tracking-wider mb-3">
              Ratgeber · 9 min Lesezeit
            </p>
            <h1 className="text-3xl md:text-4xl font-bold text-navy font-playfair mb-4 leading-tight">
              Kautionsrückgabe: Wann und wie viel muss der Vermieter zurückzahlen?
            </h1>
            <p className="text-gray-500 text-sm">Februar 2026 · einfach verwaltet.</p>
          </header>

          {/* Content */}
          <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed space-y-6">
            <p>
              Die Rückzahlung der Mietkaution ist einer der häufigsten Streitpunkte am Ende 
              eines Mietverhältnisses. Mieter erwarten eine schnelle Rückzahlung, Vermieter 
              wollen sichergehen, dass keine Forderungen offen bleiben. Wer die gesetzlichen 
              Regelungen kennt, kann Konflikte vermeiden und das Mietende reibungslos gestalten.
            </p>

            <h2 className="text-2xl font-bold text-navy font-playfair mt-10 mb-4">
              Die gesetzliche Grundlage: §551 BGB
            </h2>
            <p>
              Die Mietkaution wird im Bürgerlichen Gesetzbuch in §551 geregelt. Dieser Paragraph 
              legt fest, wie hoch die Kaution sein darf, wie sie zu hinterlegen ist und unter 
              welchen Bedingungen sie zurückgezahlt werden muss.
            </p>
            <blockquote className="border-l-4 border-teal pl-4 italic text-gray-600">
              §551 Abs. 3 BGB: "Der Vermieter hat die ihm geleistete Sicherheit bei Beendigung 
              des Mietverhältnisses zu erstatten. Er hat sie auf Verlangen des Mieters zu verzinsen."
            </blockquote>
            <p>
              Diese Bestimmung ist zwingendes Recht — Abweichungen im Mietvertrag zu Ungunsten 
              des Mieters sind unwirksam.
            </p>

            <h2 className="text-2xl font-bold text-navy font-playfair mt-10 mb-4">
              Rückgabefrist: Wie lange hat der Vermieter Zeit?
            </h2>
            <p>
              Das Gesetz nennt keine konkrete Frist, sondern spricht von einer "angemessenen Frist". 
              Was angemessen ist, hängt von den Umständen ab:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>
                <strong>Laufende Nebenkosten:</strong> Sobald die Betriebskostenabrechnung vorliegt, 
                muss der entsprechende Anteil umgehend ausgezahlt werden — typischerweise innerhalb 
                weniger Wochen.
              </li>
              <li>
                <strong>Nachzahlungen für Nebenkosten:</strong> Wenn der Mieter Nachzahlungen schuldet, 
                können diese mit der Kaution verrechnet werden.
              </li>
              <li>
                <strong>Schadensersatzansprüche:</strong> Bei unklaren Schäden an der Wohnung kann 
                der Vermieter einen angemessenen Anteil der Kaution zurückhalten, bis die Schäden 
                geklärt sind.
              </li>
            </ul>
            <p>
              Als Faustregel gilt: Die komplette Kautionsrückzahlung sollte innerhalb von 6 bis 
              12 Monaten nach Mietende erfolgen. Längere Verzögerungen müssen der Vermieter 
              begründen können.
            </p>

            <h2 className="text-2xl font-bold text-navy font-playfair mt-10 mb-4">
              Die Pflicht zur Verzinsung der Kaution
            </h2>
            <p>
              Der Vermieter ist verpflichtet, die Kaution zu verzinsen. Die Verzinsungspflicht 
              beginnt mit dem Zugang der Kaution beim Vermieter und endet mit der Rückzahlung. 
              Der Gesetzgeber spricht von einem "angemessenen Zinssatz".
            </p>
            <h3 className="text-xl font-semibold text-navy mt-6 mb-2">
              Welcher Zinssatz ist angemessen?
            </h3>
            <p>
              Als Orientierung dient der Basiszinssatz nach §247 BGB. Ab dem 1. Januar 2026 
              beträgt dieser 1,27% p.a. In der Praxis werden Kautionsguthaben typischerweise 
              mit 2-3% p.a. verzinst — dies entspricht dem, was Banken für vergleichbare 
              Geldanlagen zahlen.
            </p>
            <p className="text-gray-500 italic">
              Tipp: Die konkrete Verzinsung sollte im Mietvertrag vereinbart werden. Fehlt eine 
              Vereinbarung, gilt der gesetzliche Basiszinssatz zuzüglich eines angemessenen Aufschlags.
            </p>

            <h2 className="text-2xl font-bold text-navy font-playfair mt-10 mb-4">
              Wann darf der Vermieter von der Kaution abziehen?
            </h2>
            <p>
              Der Vermieter darf die Kaution nur für tatsächlich bestehende und begründete 
              Forderungen einbehalten. Erlaubte Abzugsgründe sind:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>
                <strong>Mietrückstände:</strong> Offene Mietzahlungen, die der Mieter noch nicht 
                beglichen hat.
              </li>
              <li>
                <strong>Nebenkostennachzahlungen:</strong> Nach der Betriebskostenabrechnung 
                festgestellte Nachzahlungspflichten des Mieters.
              </li>
              <li>
                <strong>Schönheitsreparaturen:</strong> Wenn der Mieter vertraglich vereinbarte 
                Renovierungsarbeiten nicht durchgeführt hat.
              </li>
              <li>
                <strong>Beschädigungen an der Mietsache:</strong> Schäden, die über die normale 
                Abnutzung hinausgehen und vom Mieter verschuldet wurden.
              </li>
              <li>
                <strong>sonstige Vertragsverletzungen:</strong> Beispielsweise Kosten für 
                Ersatzschlüssel oder die Beseitigung von hinterlassenem Müll.
              </li>
            </ul>

            <h2 className="text-2xl font-bold text-navy font-playfair mt-10 mb-4">
              Was der Vermieter nicht von der Kaution abziehen darf
            </h2>
            <p>
              Nicht erlaubt sind Abzüge für:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>
                <strong>Normale Abnutzung:</strong> Verschleiß durch ordnungsgemäßen Gebrauch 
                (z.B. abgenutzter Teppichboden nach 10 Jahren) darf nicht in Rechnung gestellt werden.
              </li>
              <li>
                <strong>Vermutete Schäden:</strong> Schäden, die nicht nachgewiesen werden können, 
                rechtfertigen keinen Einbehalt.
              </li>
              <li>
                <strong>Unbegründete Nebenkostenforderungen:</strong> Forderungen ohne konkrete 
                Abrechnungsgrundlage.
              </li>
              <li>
                <strong>Kleinreparaturen:</strong> Oft verlangte "Pauschalabzüge" für vermeintliche 
                Kleinreparaturen sind unwirksam, wenn nicht konkrete Schäden nachgewiesen werden.
              </li>
            </ul>

            <h2 className="text-2xl font-bold text-navy font-playfair mt-10 mb-4">
              Rückbehalt bei ungeklärten Schäden
            </h2>
            <p>
              Wenn bei der Wohnungsübergabe Schäden festgestellt werden, deren Ursache oder 
              Höhe noch unklar ist, kann der Vermieter einen Teil der Kaution zurückhalten. 
              Dies gilt insbesondere für:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Feuchtigkeitsschäden, deren Ursache noch geklärt werden muss</li>
              <li>Defekte Einbauten, bei denen unklar ist, ob Verschulden des Mieters vorliegt</li>
              <li>Offene Nebenkostenabrechnungen für laufende Abrechnungszeiträume</li>
            </ul>
            <p>
              Der zurückgehaltene Betrag muss jedoch angemessen sein und sollte nach Klärung 
              der offenen Punkte umgehend ausgezahlt oder verrechnet werden.
            </p>

            <h2 className="text-2xl font-bold text-navy font-playfair mt-10 mb-4">
              Ablauf der Kautionsrückgabe: Schritt für Schritt
            </h2>
            <ol className="list-decimal pl-6 space-y-3">
              <li>
                <strong>Wohnungsübergabe dokumentieren:</strong> Erstellen Sie ein detailliertes 
                Übergabeprotokoll mit Fotos aller Räume und festgestellter Mängel.
              </li>
              <li>
                <strong>Betriebskostenabrechnung prüfen:</strong> Stellen Sie sicher, dass alle 
                Nebenkostenabrechnungen für den Mietzeitraum vorliegen.
              </li>
              <li>
                <strong>Forderungen prüfen:</strong> Klären Sie, ob Mietrückstände oder andere 
                offene Forderungen bestehen.
              </li>
              <li>
                <strong>Kautionssumme berechnen:</strong> Ermitteln Sie die endgültige Rückzahlungssumme 
                inklusive Verzinsung und ggf. Abzüge.
              </li>
              <li>
                <strong>Rückzahlung veranlassen:</strong> Überweisen Sie das Guthaben auf das vom 
                Mieter genannte Konto.
              </li>
              <li>
                <strong>Quittung einholen:</strong> Lassen Sie sich die Rückzahlung schriftlich 
                bestätigen, um spätere Streitigkeiten zu vermeiden.
              </li>
            </ol>

            <h2 className="text-2xl font-bold text-navy font-playfair mt-10 mb-4">
              Fazit: Transparente Abläufe vermeiden Konflikte
            </h2>
            <p>
              Die Kautionsrückgabe ist dann unproblematisch, wenn beide Seiten transparent 
              kommunizieren und die gesetzlichen Vorgaben eingehalten werden. Eine vollständige 
              Dokumentation bei der Wohnungsübergabe und eine zeitnahe Abrechnung schaffen 
              Vertrauen und verhindern teure Rechtsstreitigkeiten.
            </p>

            {/* FAQ Section */}
            <h2 className="text-2xl font-bold text-navy font-playfair mt-10 mb-4">
              Häufig gestellte Fragen
            </h2>
            <div className="space-y-6">
              <div className="bg-white rounded-lg border border-gray-200 p-6">
                <h3 className="font-semibold text-navy mb-2">
                  Wie lange hat der Vermieter Zeit, die Kaution zurückzuzahlen?
                </h3>
                <p>
                  Nach §551 Abs. 3 BGB muss der Vermieter die Kaution innerhalb einer angemessenen 
                  Frist nach Beendigung des Mietverhältnisses zurückzahlen. Als Richtwert gelten 
                  6-12 Monate, je nach Komplexität der Abrechnungen. Für die Rückzahlung der laufenden 
                  Betriebskosten gilt: Sobald die Abrechnung vorliegt, muss das Guthaben umgehend 
                  ausgezahlt werden.
                </p>
              </div>
              <div className="bg-white rounded-lg border border-gray-200 p-6">
                <h3 className="font-semibold text-navy mb-2">
                  Wie hoch ist die Kautionsverzinsung?
                </h3>
                <p>
                  Die Kaution ist zu einem angemessenen Zinssatz zu verzinsen (§551 Abs. 3 Satz 2 BGB). 
                  Der Basiszinssatz nach §247 BGB dient als Orientierung. Ab 2026 liegt der Basiszinssatz 
                  bei 1,27% p.a. Hinzu kommt ein angemessener Aufschlag, sodass Kautionsguthaben typischerweise 
                  mit 2-3% p.a. verzinst werden.
                </p>
              </div>
              <div className="bg-white rounded-lg border border-gray-200 p-6">
                <h3 className="font-semibold text-navy mb-2">
                  Für welche Schäden darf der Vermieter die Kaution einbehalten?
                </h3>
                <p>
                  Der Vermieter darf die Kaution nur für tatsächlich entstandene Mängel und Schäden 
                  einbehalten, die der Mieter zu vertreten hat. Dazu gehören: Mietrückstände, nicht 
                  durchgeführte Schönheitsreparaturen, Beschädigungen an der Mietsache über normale 
                  Abnutzung hinaus, offene Nebenkostenforderungen. Vermutete oder nicht nachgewiesene 
                  Schäden rechtfertigen keinen Einbehalt.
                </p>
              </div>
            </div>
          </div>

          {/* CTA */}
          <div className="mt-12 bg-teal/10 border border-teal/20 rounded-xl p-8">
            <h3 className="text-xl font-bold text-navy mb-2 font-playfair">
              Professionelle Kautionsverwaltung gesucht?
            </h3>
            <p className="text-gray-600 mb-4">
              einfach verwaltet. verwaltet Kautionen transparent, verzinst sie korrekt und 
              sorgt für reibungslose Rückzahlungen am Mietende — dokumentiert und rechtssicher.
            </p>
            <Link
              href="/anfrage"
              className="inline-block bg-teal text-white font-semibold px-6 py-3 rounded-lg hover:bg-teal/90 transition-colors"
            >
              Jetzt unverbindlich anfragen
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
