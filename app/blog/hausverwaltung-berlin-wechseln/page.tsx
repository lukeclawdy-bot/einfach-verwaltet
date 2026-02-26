import type { Metadata } from "next";
import Link from "next/link";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

export const metadata: Metadata = {
  title: "Hausverwaltung in Berlin wechseln: So klappt's 2026 | einfach verwaltet.",
  description:
    "Hausverwaltung in Berlin wechseln: Mietpreisbremse, Milieuschutz & Berliner Besonderheiten. So finden Sie den richtigen Verwalter 2026.",
  keywords:
    "hausverwaltung berlin wechseln, verwalter wechseln berlin, hausverwalter wechseln berlin 2026",
  openGraph: {
    title: "Hausverwaltung in Berlin wechseln: So klappt's 2026",
    description:
      "Berlin-spezifische Herausforderungen beim Verwalterwechsel: Mietpreisbremse, Milieuschutz, EVT-Mehrheiten.",
    url: "https://einfach-verwaltet.de/blog/hausverwaltung-berlin-wechseln",
    siteName: "einfach verwaltet.",
    locale: "de_DE",
    type: "article",
  },
};

const jsonLdArticle = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Hausverwaltung in Berlin wechseln: So klappt's 2026",
  description:
    "Berlin-spezifische Besonderheiten beim Hausverwaltungswechsel: Mietpreisbremse, Milieuschutzgebiete und mehr.",
  author: { "@type": "Organization", name: "einfach verwaltet." },
  publisher: {
    "@type": "Organization",
    name: "einfach verwaltet.",
    logo: { "@type": "ImageObject", url: "https://einfach-verwaltet.de/logo.png" },
  },
  datePublished: "2026-02-26",
  inLanguage: "de",
  url: "https://einfach-verwaltet.de/blog/hausverwaltung-berlin-wechseln",
};

const jsonLdFAQ = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Wie hoch ist die Mehrheit für einen Verwalterwechsel in Berlin?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Für die Abberufung oder Neuwahl eines WEG-Verwalters ist eine Stimmenmehrheit von mehr als 25% der Miteigentumsanteile erforderlich. Bei der Ersatzwahl kann mit einfacher Mehrheit entschieden werden.",
      },
    },
    {
      "@type": "Question",
      name: "Gilt die Mietpreisbremse in ganz Berlin?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Ja, die Mietpreisbremse gilt flächendeckend in allen Berliner Bezirken. Bei Neuvermietungen darf die Miete maximal 10% über der ortsüblichen Vergleichsmiete liegen.",
      },
    },
    {
      "@type": "Question",
      name: "Was ist ein Milieuschutzgebiet in Berlin?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "In Milieuschutzgebieten gelten Verschärfungen der Mietpreisbremse und Umwandlungsbeschränkungen. Ein qualifizierter Verwalter muss diese Regelungen kennen und umsetzen können.",
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
            <span className="text-gray-700">Hausverwaltung Berlin wechseln</span>
          </nav>

          <header className="mb-10">
            <p className="text-teal text-sm font-semibold uppercase tracking-wider mb-3">
              Ratgeber · 8 min Lesezeit
            </p>
            <h1 className="text-3xl md:text-4xl font-bold text-navy font-playfair mb-4 leading-tight">
              Hausverwaltung in Berlin wechseln: So klappt's 2026
            </h1>
            <p className="text-gray-500 text-sm">Februar 2026 · einfach verwaltet.</p>
          </header>

          <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed space-y-6">
            <p>
              Der Wechsel der Hausverwaltung ist in einer Wohnungseigentümergemeinschaft eine der wichtigsten Entscheidungen. In Berlin kommen dabei besondere Herausforderungen hinzu: die Mietpreisbremse, Milieuschutzgebiete und ein angespannter Wohnungsmarkt erfordern von Verwaltern umfassende Fachkenntnis.
            </p>

            <h2 className="text-2xl font-bold text-navy font-playfair mt-10 mb-4">
              Warum Berlin anders ist
            </h2>
            <p>
              Berlin unterscheidet sich in punkto Wohnungspolitik deutlich von anderen deutschen Großstädten. Wer hier als Eigentümergemeinschaft einen neuen Verwalter sucht, muss sicherstellen, dass dieser mit den lokalen Besonderheiten vertraut ist:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Mietpreisbremse:</strong> Gilt flächendeckend in allen Bezirken</li>
              <li><strong>Milieuschutzgebiete:</strong> Zusätzliche Verschärfungen in vielen Stadtteilen</li>
              <li><strong>Umwandlungsverbot:</strong> Beschränkungen bei der Umwandlung von Miet- in Eigentumswohnungen</li>
              <li><strong>Afg-Sonderregelung:</strong> Berlin-spezifische Mietpreisregelungen</li>
            </ul>

            <h2 className="text-2xl font-bold text-navy font-playfair mt-10 mb-4">
              Die rechtlichen Grundlagen: § 26 WEG
            </h2>
            <p>
              Ein Verwalterwechsel erfolgt nach § 26 WEG durch Beschluss der Eigentümerversammlung. Die Abberufung und Neuwahl erfordert eine Mehrheit von mehr als 25% der Miteigentumsanteile. Diese Schwelle ist absichtlich hochangesetzt, um kurzfristige Wechsel zu verhindern.
            </p>
            <p className="bg-amber-50 border-l-4 border-amber-400 p-4 rounded">
              <strong>Wichtig:</strong> Ein Verwaltervertrag läuft typischerweise über 5 Jahre. Eine ordentliche Kündigung ist meist erst mit einer Frist von 6-12 Monaten zum Vertragsende möglich.
            </p>

            <h2 className="text-2xl font-bold text-navy font-playfair mt-10 mb-4">
              Die Berliner Mietpreisbremse
            </h2>
            <p>
              Die Mietpreisbremse gilt in Berlin flächendeckend. Bei Neuvermietungen darf die Miete maximal 10% über der ortsüblichen Vergleichsmiete liegen. Für Vermieter bedeutet dies:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Strikte Einhaltung der Mietobergrenzen bei Neuvermietung</li>
              <li>Dokumentationspflicht für Modernisierungsmaßnahmen</li>
              <li>Sanktionen bei Verstößen bis zu €500.000 nach § 505 BGB</li>
            </ul>
            <p>
              Ein qualifizierter Berliner Verwalter muss diese Regelungen nicht nur kennen, sondern intern validierte Prozesse für die Einhaltung haben.
            </p>

            <h2 className="text-2xl font-bold text-navy font-playfair mt-10 mb-4">
              Milieuschutzgebiete: Was Vermieter wissen müssen
            </h2>
            <p>
              Berlin hat zahlreiche Milieuschutzgebiete ausgewiesen. Hier gelten verschärfte Regeln:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Verstärkte Erhaltungssatzung bei Modernisierungen</li>
              <li>Zusätzliche Umwandlungsbeschränkungen</li>
              <li>Erhöhte Anforderungen an Veränderungsgenehmigungen</li>
            </ul>
            <p>
              Betreibt Ihre Eigentümergemeinschaft Mietwohnungen in Milieuschutzgebieten, ist ein Verwalter mit lokaler Expertise unverzichtbar.
            </p>

            <h2 className="text-2xl font-bold text-navy font-playfair mt-10 mb-4">
              Die besten Berliner Stadtteile für WEG-Eigentümer
            </h2>
            <p>
              Wo Ihre Immobilie liegt, beeinflusst den Verwaltungsaufwand erheblich:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Mitte & Friedrichshain-Kreuzberg:</strong> Hohe Mietpreise, komplexe Milieuschutzregelungen</li>
              <li><strong>Charlottenburg-Wilmersdorf:</strong> Traditionelle Eigentümerstrukturen, etablierte Verwaltungspraxis</li>
              <li><strong>Treptow-Köpenick:</strong> Wachsende Nachfrage, moderate Regulierung</li>
              <li><strong>Neukölln:</strong> Starke Gentrifizierung, intensive Milieuschutzaufsicht</li>
            </ul>

            <h2 className="text-2xl font-bold text-navy font-playfair mt-10 mb-4">
              Checkliste: Verwalterwechsel in Berlin
            </h2>
            <ol className="list-decimal pl-6 space-y-2">
              <li>Kündigungsfrist des bestehenden Vertrages prüfen (6-12 Monate üblich)</li>
              <li>Termin für Eigentümerversammlung setzen (Einladung 2 Wochen im Voraus)</li>
              <li>Mehrheitsrechnung: &gt;25% MEA für Abberufung + Neuwahl erforderlich</li>
              <li>Neue Verwalteroptionen evaluieren (mindestens 3 Angebote einholen)</li>
              <li>Beschlussfassung in der ETV protokollieren</li>
              <li>Übergabeprotokoll zwischen altem und neuem Verwalter erstellen</li>
            </ol>

            <h2 className="text-2xl font-bold text-navy font-playfair mt-10 mb-4">
              Fazit: Der Wechsel lohnt sich — mit dem richtigen Partner
            </h2>
            <p>
              Ein Verwalterwechsel in Berlin ist aufwendig, aber oft notwendig. Wer einen Verwalter sucht, der die Berliner Besonderheiten beherrscht und gleichzeitig modern arbeitet, sollte bei der Auswahl besonders sorgfältig sein. Die Investition in einen qualifizierten Berliner Verwalter zahlt sich durch weniger Stress und bessere Mieterträge langfristig aus.
            </p>
          </div>

          <div className="mt-12 bg-teal/10 border border-teal/20 rounded-xl p-8">
            <h3 className="text-xl font-bold text-navy mb-2 font-playfair">
              Hausverwaltung in Berlin wechseln?
            </h3>
            <p className="text-gray-600 mb-4">
              einfach verwaltet. versteht die Berliner Besonderheiten — von der Mietpreisbremse bis zum Milieuschutz. Wir bereiten Ihren Verwalterwechsel professionell vor.
            </p>
            <Link
              href="/anfrage"
              className="inline-block bg-teal text-white font-semibold px-6 py-3 rounded-lg hover:bg-teal/90 transition-colors"
            >
              Jetzt unverbindlich anfragen
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
