import type { Metadata } from "next";
import Link from "next/link";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

export const metadata: Metadata = {
  title: "Mietpreisbremse Berlin 2026: Was Vermieter wissen müssen | einfach verwaltet.",
  description:
    "Mietpreisbremse Berlin 2026: §556d BGB, Ausnahmen, Rügepflicht & Sanktionen. Alles, was Vermieter jetzt wissen müssen.",
  keywords:
    "mietpreisbremse berlin 2026, mietpreisbremse vermieter, mietpreisbremse §556d bgb",
  openGraph: {
    title: "Mietpreisbremse Berlin 2026: Was Vermieter jetzt wissen müssen",
    description:
      "§556d BGB, 10%-Obergrenze, Rügepflicht, Sanktionen bis €500.000 — der komplette Überblick.",
    url: "https://einfach-verwaltet.de/blog/mietpreisbremse-berlin-2026",
    siteName: "einfach verwaltet.",
    locale: "de_DE",
    type: "article",
  },
};

const jsonLdArticle = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Mietpreisbremse Berlin 2026: Was Vermieter jetzt wissen müssen",
  description:
    "Alles zur Mietpreisbremse in Berlin: Regelungen nach §556d BGB, Ausnahmen, Rügepflicht des Mieters und Sanktionen.",
  author: { "@type": "Organization", name: "einfach verwaltet." },
  publisher: {
    "@type": "Organization",
    name: "einfach verwaltet.",
    logo: { "@type": "ImageObject", url: "https://einfach-verwaltet.de/logo.png" },
  },
  datePublished: "2026-02-26",
  inLanguage: "de",
  url: "https://einfach-verwaltet.de/blog/mietpreisbremse-berlin-2026",
};

const jsonLdFAQ = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Bis zu welchem Betrag darf ich bei Neuvermietung über der Vergleichsmiete liegen?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Nach §556d Abs. 1 BGB darf die Miete bei Neuvermietung in einem Gebiet mit angespanntem Wohnungsmarkt maximal 10% über der ortsüblichen Vergleichsmiete liegen (einschließlich Betriebskostenvorauszahlungen).",
      },
    },
    {
      "@type": "Question",
      name: "Wann muss ein Mieter die Mietpreisbremse rügen?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Nach §556d Abs. 2 BGB muss der Mieter die Rüge innerhalb von 30 Monaten nach Vertragsschluss erheben. Danach kann die Mietpreisbremse nicht mehr als Verteidigungsmittel geltend gemacht werden.",
      },
    },
    {
      "@type": "Question",
      name: "Welche Sanktionen drohen bei Verstoß gegen die Mietpreisbremse?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Nach §505 BGB droht bei vorsätzlichem Verstoß gegen die Mietpreisbremse eine Geldbuße bis zu €500.000. Zudem kann der Mieter die Rückzahlung der überhöhten Miete fordern.",
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
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdFAQ) }}
      />
      <Navbar />
      <main className="bg-warm-white min-h-screen pt-16">
        <article className="max-w-3xl mx-auto px-4 py-16">
          <nav className="text-sm text-gray-500 mb-8">
            <Link href="/" className="hover:text-teal">Startseite</Link>
            <span className="mx-2">›</span>
            <Link href="/blog" className="hover:text-teal">Ratgeber</Link>
            <span className="mx-2">›</span>
            <span className="text-gray-700">Mietpreisbremse Berlin 2026</span>
          </nav>

          <header className="mb-10">
            <p className="text-teal text-sm font-semibold uppercase tracking-wider mb-3">
              Ratgeber · 7 min Lesezeit
            </p>
            <h1 className="text-3xl md:text-4xl font-bold text-navy font-playfair mb-4 leading-tight">
              Mietpreisbremse Berlin 2026: Was Vermieter jetzt wissen müssen
            </h1>
            <p className="text-gray-500 text-sm">Februar 2026 · einfach verwaltet.</p>
          </header>

          <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed space-y-6">
            <p>
              Die Mietpreisbremse ist für Berliner Vermieter allgegenwärtig. Seit 2015 gilt sie flächendeckend in allen Berliner Bezirken und begrenzt die Spielräume bei Neuvermietungen erheblich. Wer die Regeln nicht beherrscht, riskiert sanktionierte Verstöße und Rechtsstreitigkeiten.
            </p>

            <h2 className="text-2xl font-bold text-navy font-playfair mt-10 mb-4">
              Die Rechtsgrundlage: §556d BGB
            </h2>
            <p>
              Die Mietpreisbremse basiert auf §556d Abs. 1 BGB. Das Gesetz besagt, dass in Gebieten mit angespanntem Wohnungsmarkt die Miete bei Neuvermietung maximal 10% über der ortsüblichen Vergleichsmiete liegen darf.
            </p>
            <p className="bg-teal/10 border-l-4 border-teal p-4 rounded">
              <strong>Formel:</strong> Mietobergrenze = Vergleichsmiete × 1,10 (zzgl. Betriebskostenvorauszahlung, für die keine 10% gelten)
            </p>

            <h2 className="text-2xl font-bold text-navy font-playfair mt-10 mb-4">
              Was ist die ortsübliche Vergleichsmiete?
            </h2>
            <p>
              Die ortsübliche Vergleichsmiete wird in Berlin durch den offiziellen Berliner Mietspiegel bestimmt. Bei der Berechnung beachten:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Jährlich aktualisierter Mietspiegel der Senatsverwaltung</li>
              <li>Wohnfläche, Baujahr, Ausstattung als Hauptfaktoren</li>
              <li>Lagebewertung innerhalb des Bezirks (mittel, gut, sehr gut)</li>
              <li>Bezugsfristigkeit der Vergleichsdaten (max. 6 Jahre alt)</li>
            </ul>

            <h2 className="text-2xl font-bold text-navy font-playfair mt-10 mb-4">
              Ausnahmen von der Mietpreisbremse
            </h2>
            <p>
              Nicht jede Wohnung unterliegt der 10%-Grenze. Folgende Ausnahmen gelten:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Neubauwohnungen (Erstbezug ab 2014):</strong> Vollständig ausgenommen nach §556d Abs. 1 Satz 2 BGB</li>
              <li><strong>Umfassend modernisierte Wohnungen:</strong> Kosten können unter bestimmten Voraussetzungen angerechnet werden</li>
              <li><strong>Wohnungen mit bestehender Miete über der Obergrenze:</strong> Nachvermietung zum gleichen Preis möglich</li>
              <li><strong>Sozialwohnungen und öffentlich geförderter Wohnraum:</strong> Besondere Regelungen</li>
            </ul>

            <h2 className="text-2xl font-bold text-navy font-playfair mt-10 mb-4">
              Die Rügepflicht des Mieters: 30-Monats-Frist
            </h2>
            <p>
              Ein zentrales Element der Mietpreisbremse ist die Rügepflicht nach §556d Abs. 2 BGB. Der Mieter muss den Verstoß gegen die Mietpreisbremse innerhalb von 30 Monaten nach Vertragsschluss rügen.
            </p>
            <p className="bg-amber-50 border-l-4 border-amber-400 p-4 rounded">
              <strong>Praxisrelevanz:</strong> Nach Ablauf der 30 Monate kann sich der Vermieter auf die Mietabrede berufen — auch wenn sie die Obergrenze überschreitet. Diese Regelung gibt Planungssicherheit.
            </p>

            <h2 className="text-2xl font-bold text-navy font-playfair mt-10 mb-4">
              Sanktionen bei Verstößen
            </h2>
            <p>
              Die Einhaltung der Mietpreisbremse wird streng überwacht. Bei Verstößen drohen:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Rückzahlungspflicht:</strong> Der Mieter kann überhöhte Mieten zurückfordern</li>
              <li><strong>Geldbuße:</strong> Bis zu €500.000 nach §505 BGB bei vorsätzlichen Verstößen</li>
              <li><strong>Ordnungsgeld:</strong> Bei wiederholten oder systematischen Verstößen</li>
            </ul>

            <h2 className="text-2xl font-bold text-navy font-playfair mt-10 mb-4">
              Milieuschutzgebiete: Zusätzliche Einschränkungen
            </h2>
            <p>
              In Berliner Milieuschutzgebieten (z.B. Teile von Neukölln, Kreuzberg, Friedrichshain) gelgen über die Mietpreisbremse hinaus Verschärfungen:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Anzeigepflicht bei Modernisierungen</li>
              <li>Beschränkungen bei Umwandlungen</li>
              <li>Erhöhte Genehmigungspflichten für bauliche Veränderungen</li>
            </ul>

            <h2 className="text-2xl font-bold text-navy font-playfair mt-10 mb-4">
              Best Practices für Vermieter
            </h2>
            <ol className="list-decimal pl-6 space-y-2">
              <li>Immer aktuellen Mietspiegel zu Rate ziehen vor Neuvermietung</li>
              <li>Dokumentation aller Modernisierungskosten mit Belegen</li>
              <li>Bei Zweifeln: Sachverständigengutachten einholen</li>
              <li>Mietvertrag mit Klausel zur Wirksamkeit bei mietpreisrechtlichen Verstößen versehen</li>
              <li>Regelmäßige Überprüfung durch qualifizierte Hausverwaltung</li>
            </ol>

            <h2 className="text-2xl font-bold text-navy font-playfair mt-10 mb-4">
              Fazit: Rechtssicher handeln schützt vor Sanktionen
            </h2>
            <p>
              Die Mietpreisbremse ist kein unüberwindbares Hindernis — sie erfordert jedoch präzise Kenntnis der Rechtslage und sorgfältige Einhaltung der Grenzwerte. Vermieter profitieren von einer professionellen Hausverwaltung, die die Berliner Besonderheiten beherrscht und rechtssichere Prozesse implementiert hat.
            </p>
          </div>

          <div className="mt-12 bg-teal/10 border border-teal/20 rounded-xl p-8">
            <h3 className="text-xl font-bold text-navy mb-2 font-playfair">
              Mietpreisbremse-konform vermieten
            </h3>
            <p className="text-gray-600 mb-4">
              einfach verwaltet. prüft vor jeder Neuvermietung die mietrechtlichen Grenzen und dokumentiert die Berechnung rechtssicher.
            </p>
            <Link
              href="/anfrage"
              className="inline-block bg-teal text-white font-semibold px-6 py-3 rounded-lg hover:bg-teal/90 transition-colors"
            >
              Vermietungsberatung anfragen
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
