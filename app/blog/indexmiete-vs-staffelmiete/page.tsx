import type { Metadata } from "next";
import Link from "next/link";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

export const metadata: Metadata = {
  title: "Indexmiete vs. Staffelmiete: Was ist besser für Vermieter? | einfach verwaltet.",
  description:
    "Indexmiete vs. Staffelmiete im Vergleich: Vor- und Nachteile, rechtliche Grundlagen §557b BGB, Staffelmietvertrag Muster. Was Vermieter wissen müssen.",
  keywords:
    "Indexmiete Staffelmiete Vergleich, Staffelmietvertrag, §557b BGB, Mietanpassung Index",
  openGraph: {
    title: "Indexmiete vs. Staffelmiete: Was ist besser für Vermieter?",
    description:
      "Der komplette Vergleich: Indexmiete automatisch, Staffelmiete planbar — welche Mietanpassung passt zu Ihnen?",
    url: "https://einfach-verwaltet.de/blog/indexmiete-vs-staffelmiete",
    siteName: "einfach verwaltet.",
    locale: "de_DE",
    type: "article",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Indexmiete vs. Staffelmiete: Was ist besser für Vermieter?",
  description:
    "Vergleich von Indexmiete und Staffelmiete: Vor- und Nachteile für Vermieter nach §557b BGB.",
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
  url: "https://einfach-verwaltet.de/blog/indexmiete-vs-staffelmiete",
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Was ist der Unterschied zwischen Indexmiete und Staffelmiete?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Bei einer Indexmiete passt sich die Miete automatisch an die Entwicklung des Verbraucherpreisindex an (§557b BGB). Bei einer Staffelmiete werden im Voraus feste Mietsätze für bestimmte Zeiträume vereinbart. Die Indexmiete folgt der Inflation, während die Staffelmiete Planungssicherheit für beide Seiten bietet.",
      },
    },
    {
      "@type": "Question",
      name: "Kann eine Indexmiete auch sinken?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Ja, bei einer Indexmiete kann die Miete auch sinken, wenn der Verbraucherpreisindex gegenüber dem Basisindexwert sinkt. Dies ist jedoch in der Praxis selten. In den meisten Fällen steigt der Index und damit auch die Miete. Der Vermieter muss eine Indexanpassung auch bei sinkendem Index vornehmen, wenn die Klausel dies vorsieht.",
      },
    },
    {
      "@type": "Question",
      name: "Was ist bei einer Staffelmiete nach oben zu beachten?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Bei einer Staffelmiete müssen die Staffeln im Mietvertrag vorab festgelegt werden. Die Staffelmiete unterliegt keinen prozentualen Grenzen wie die Kappungsgrenze bei Mieterhöhungen nach §558 BGB, jedoch dürfen die Staffeln nicht das Maß einer Mieterhöhung nach §5 WiStG überschreiten, wenn sie während einer laufenden Staffelmiete vereinbart werden. Die Staffeln sollten angemessen und nachvollziehbar sein.",
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
            <span className="text-gray-700">Indexmiete vs. Staffelmiete</span>
          </nav>

          {/* Header */}
          <header className="mb-10">
            <p className="text-teal text-sm font-semibold uppercase tracking-wider mb-3">
              Ratgeber · 10 min Lesezeit
            </p>
            <h1 className="text-3xl md:text-4xl font-bold text-navy font-playfair mb-4 leading-tight">
              Indexmiete vs. Staffelmiete: Was ist besser für Vermieter?
            </h1>
            <p className="text-gray-500 text-sm">Februar 2026 · einfach verwaltet.</p>
          </header>

          {/* Content */}
          <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed space-y-6">
            <p>
              Mieterhöhungen gehören zu den sensibelsten Themen im Mietrecht. Nicht jeder 
              Vermieter möchte jährlich eine formelle Mieterhöhung nach §558 BGB durchführen — 
              mit Gutachten, Zustimmungsfristen und möglichen Widersprüchen. Indexmiete und 
              Staffelmiete bieten hier attraktive Alternativen. Doch welche passt besser zu 
              Ihrem Portfolio?
            </p>

            <h2 className="text-2xl font-bold text-navy font-playfair mt-10 mb-4">
              Was ist eine Indexmiete?
            </h2>
            <p>
              Die Indexmiete ist eine dynamische Mietanpassungsklausel, die die Miete an 
              die Entwicklung des Verbraucherpreisindex (VPI) koppelt. Sie wird in §557b BGB 
              geregelt und funktioniert vollautomatisch: Steigt der VPI, steigt die Miete 
              — ohne separates Zustimmungsverfahren.
            </p>
            <h3 className="text-xl font-semibold text-navy mt-6 mb-2">
              Funktionsweise der Indexmiete
            </h3>
            <p>
              Im Mietvertrag wird ein Basisindexwert festgelegt — typischerweise der VPI zum 
              Zeitpunkt des Vertragsschlusses. Bei jeder Indexanpassung wird die neue Miete 
              nach folgender Formel berechnet:
            </p>
            <div className="bg-gray-50 p-4 rounded-lg font-mono text-sm my-4">
              Neue Miete = Basismiete × (aktueller VPI / Basisindex)
            </div>
            <p>
              Die Anpassung kann vom Vermieter oder Mieter verlangt werden und ist an keine 
              Frist gebunden. Sie erfolgt automatisch mit Wirksamkeit zum Monatsende, wenn 
              der andere Teil informiert wurde.
            </p>

            <h2 className="text-2xl font-bold text-navy font-playfair mt-10 mb-4">
              Was ist eine Staffelmiete?
            </h2>
            <p>
              Die Staffelmiete (auch gestaffelte Miete genannt) legt im Mietvertrag feste 
              Mietsätze für bestimmte Zeiträume fest. Beispiel: Die Miete beträgt in den 
              ersten drei Jahren €800, steigt dann auf €850 und nach weiteren drei Jahren 
              auf €900.
            </p>
            <h3 className="text-xl font-semibold text-navy mt-6 mb-2">
              Rechtliche Grundlagen
            </h3>
            <p>
              Die Staffelmiete wird ebenfalls in §557b BGB geregelt. Sie darf maximal für 
              den Zeitraum von zehn Jahren im Voraus festgelegt werden. Die Staffeln müssen 
              im Mietvertrag klar und verbindlich festgelegt sein.
            </p>

            <h2 className="text-2xl font-bold text-navy font-playfair mt-10 mb-4">
              Vergleich: Indexmiete vs. Staffelmiete
            </h2>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse border border-gray-200">
                <thead>
                  <tr className="bg-gray-50">
                    <th className="border border-gray-200 p-3 text-left">Kriterium</th>
                    <th className="border border-gray-200 p-3 text-left">Indexmiete</th>
                    <th className="border border-gray-200 p-3 text-left">Staffelmiete</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border border-gray-200 p-3 font-semibold">Anpassung</td>
                    <td className="border border-gray-200 p-3">Automatisch nach VPI</td>
                    <td className="border border-gray-200 p-3">Festgelegte Staffeln</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-200 p-3 font-semibold">Planbarkeit</td>
                    <td className="border border-gray-200 p-3">Niedrig (abhängig von Inflation)</td>
                    <td className="border border-gray-200 p-3">Hoch (fest im Voraus)</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-200 p-3 font-semibold">Maximaldauer</td>
                    <td className="border border-gray-200 p-3">Unbegrenzt</td>
                    <td className="border border-gray-200 p-3">Max. 10 Jahre</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-200 p-3 font-semibold">Miete kann sinken</td>
                    <td className="border border-gray-200 p-3">Ja (wenn VPI sinkt)</td>
                    <td className="border border-gray-200 p-3">Nein (nur steigend)</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-200 p-3 font-semibold">Mietpreisbremse</td>
                    <td className="border border-gray-200 p-3">Bei Erstvermietung relevant</td>
                    <td className="border border-gray-200 p-3">Bei Erstvermietung relevant</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-200 p-3 font-semibold">Aufwand</td>
                    <td className="border border-gray-200 p-3">Gering (nur VPI-Abfrage)</td>
                    <td className="border border-gray-200 p-3">Sehr gering (automatisch)</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h2 className="text-2xl font-bold text-navy font-playfair mt-10 mb-4">
              Vorteile der Indexmiete für Vermieter
            </h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>
                <strong>Inflationsschutz:</strong> Die Miete steigt automatisch mit der 
                allgemeinen Preisentwicklung. In Zeiten hoher Inflation ist das ein erheblicher Vorteil.
              </li>
              <li>
                <strong>Keine Zustimmung erforderlich:</strong> Der Mieter muss der 
                Indexanpassung nicht zustimmen. Eine Ablehnung ist nicht möglich.
              </li>
              <li>
                <strong>Keine Sperrfristen:</strong> Anders als bei Mieterhöhungen nach 
                §558 BGB gibt es bei Indexmieten keine Wartezeiten.
              </li>
              <li>
                <strong>Keine Kappungsgrenze:</strong> Indexanpassungen unterliegen nicht 
                der 15%-Kappungsgrenze über drei Jahre.
              </li>
              <li>
                <strong>Geringer Verwaltungsaufwand:</strong> Keine Mietspiegelabfragen, 
                keine Gutachten, keine Formvorschriften.
              </li>
            </ul>

            <h2 className="text-2xl font-bold text-navy font-playfair mt-10 mb-4">
              Nachteile der Indexmiete
            </h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>
                <strong>Miete kann sinken:</strong> Bei sinkendem VPI müssen Sie die Miete 
                theoretisch senken. In der Praxis ist dies selten.
              </li>
              <li>
                <strong>Unberechenbare Entwicklung:</strong> Bei deflationärer Entwicklung 
                oder sehr niedriger Inflation steigt die Miete nur minimal oder gar nicht.
              </li>
              <li>
                <strong>Mieterakzeptanz:</strong> Manche Mieter sehen Indexmieten kritisch, 
                da sie das Gefühl haben, keine Kontrolle zu haben.
              </li>
            </ul>

            <h2 className="text-2xl font-bold text-navy font-playfair mt-10 mb-4">
              Vorteile der Staffelmiete für Vermieter
            </h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>
                <strong>Absolute Planungssicherheit:</strong> Sie kennen die Mieteinnahmen 
                für die nächsten Jahre exakt.
              </li>
              <li>
                <strong>Keine Nachweise erforderlich:</strong> Es muss kein Mietspiegel oder 
                Gutachten eingeholt werden.
              </li>
              <li>
                <strong>Automatische Anpassung:</strong> Die Staffelanpassung erfolgt 
                automatisch, ohne Mitwirkung des Mieters.
              </li>
              <li>
                <strong>Attraktiv für Mieter:</strong> Die Transparenz der Staffeln kann 
                bei der Vermietung ein Vorteil sein.
              </li>
            </ul>

            <h2 className="text-2xl font-bold text-navy font-playfair mt-10 mb-4">
              Nachteile der Staffelmiete
            </h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>
                <strong>Begrenzte Dauer:</strong> Nach maximal zehn Jahren müssen neue 
                Staffeln vereinbart oder auf eine andere Mieterhöhungsform umgestiegen werden.
              </li>
              <li>
                <strong>Kein Inflationsschutz:</strong> Wenn die Inflation höher ausfällt 
                als erwartet, verlieren Sie real an Mieteinnahmen.
              </li>
              <li>
                <strong>Rigide Struktur:</strong> Die festen Staffeln bieten keine Flexibilität, 
                wenn sich der Markt stark verändert.
              </li>
            </ul>

            <h2 className="text-2xl font-bold text-navy font-playfair mt-10 mb-4">
              Wann welche Mietform wählen?
            </h2>
            <h3 className="text-xl font-semibold text-navy mt-6 mb-2">
              Indexmiete empfohlen bei:
            </h3>
            <ul className="list-disc pl-6 space-y-2">
              <li>Langfristigen Mietverhältnissen (über 10 Jahre)</li>
              <li>Unsicherer wirtschaftlicher Entwicklung</li>
              <li>Wenig Zeit für Mieterhöhungsverfahren</li>
              <li>Bestandsmieten, die unter Marktniveau liegen</li>
            </ul>
            <h3 className="text-xl font-semibold text-navy mt-6 mb-2">
              Staffelmiete empfohlen bei:
            </h3>
            <ul className="list-disc pl-6 space-y-2">
              <li>Kurz- bis mittelfristigen Planungshorizonten</li>
              <li>Stabilem Marktumfeld mit vorhersehbarer Entwicklung</li>
              <li>Mieterwunsch nach Kalkulationssicherheit</li>
              <li>Erstvermietung mit Mietpreisbremse (Staffeln planbar)</li>
            </ul>

            <h2 className="text-2xl font-bold text-navy font-playfair mt-10 mb-4">
              Praktische Umsetzung im Mietvertrag
            </h2>
            <p>
              Sowohl Indexmiete als auch Staffelmiete müssen klar und verständlich im 
              Mietvertrag geregelt sein. Unklare oder verschachtelte Klauseln können 
              unwirksam sein. Eine professionelle Mietvertragsgestaltung ist daher 
              empfehlenswert.
            </p>
            <p className="text-gray-500 italic">
              Wichtig: Bei einer Indexmiete muss explizit auf §557b BGB verwiesen werden 
              und der Basisindexwert genannt sein. Bei Staffelmieten müssen alle Staffeln 
              konkret und unmissverständlich benannt werden.
            </p>

            <h2 className="text-2xl font-bold text-navy font-playfair mt-10 mb-4">
              Fazit: Flexibilität vs. Planungssicherheit
            </h2>
            <p>
              Indexmiete und Staffelmiete sind beide attraktive Alternativen zur klassischen 
              Mieterhöhung nach §558 BGB. Die Indexmiete bietet Inflationsschutz und Flexibilität, 
              die Staffelmiete bietet Planungssicherheit für beide Seiten. Die Wahl hängt von 
              Ihren Zielen, dem Marktumfeld und der geplanten Mietdauer ab.
            </p>

            {/* FAQ Section */}
            <h2 className="text-2xl font-bold text-navy font-playfair mt-10 mb-4">
              Häufig gestellte Fragen
            </h2>
            <div className="space-y-6">
              <div className="bg-white rounded-lg border border-gray-200 p-6">
                <h3 className="font-semibold text-navy mb-2">
                  Was ist der Unterschied zwischen Indexmiete und Staffelmiete?
                </h3>
                <p>
                  Bei einer Indexmiete passt sich die Miete automatisch an die Entwicklung des 
                  Verbraucherpreisindex an (§557b BGB). Bei einer Staffelmiete werden im Voraus 
                  feste Mietsätze für bestimmte Zeiträume vereinbart. Die Indexmiete folgt der 
                  Inflation, während die Staffelmiete Planungssicherheit für beide Seiten bietet.
                </p>
              </div>
              <div className="bg-white rounded-lg border border-gray-200 p-6">
                <h3 className="font-semibold text-navy mb-2">
                  Kann eine Indexmiete auch sinken?
                </h3>
                <p>
                  Ja, bei einer Indexmiete kann die Miete auch sinken, wenn der Verbraucherpreisindex 
                  gegenüber dem Basisindexwert sinkt. Dies ist jedoch in der Praxis selten. In den 
                  meisten Fällen steigt der Index und damit auch die Miete. Der Vermieter muss eine 
                  Indexanpassung auch bei sinkendem Index vornehmen, wenn die Klausel dies vorsieht.
                </p>
              </div>
              <div className="bg-white rounded-lg border border-gray-200 p-6">
                <h3 className="font-semibold text-navy mb-2">
                  Was ist bei einer Staffelmiete nach oben zu beachten?
                </h3>
                <p>
                  Bei einer Staffelmiete müssen die Staffeln im Mietvertrag vorab festgelegt werden. 
                  Die Staffelmiete unterliegt keinen prozentualen Grenzen wie die Kappungsgrenze bei 
                  Mieterhöhungen nach §558 BGB, jedoch dürfen die Staffeln nicht das Maß einer 
                  Mieterhöhung nach §5 WiStG überschreiten, wenn sie während einer laufenden 
                  Staffelmiete vereinbart werden. Die Staffeln sollten angemessen und nachvollziehbar sein.
                </p>
              </div>
            </div>
          </div>

          {/* CTA */}
          <div className="mt-12 bg-teal/10 border border-teal/20 rounded-xl p-8">
            <h3 className="text-xl font-bold text-navy mb-2 font-playfair">
              Professionelle Mieterhöhungen verwalten?
            </h3>
            <p className="text-gray-600 mb-4">
              einfach verwaltet. unterstützt Sie bei Index- und Staffelmieten, automatisiert 
              Anpassungen und dokumentiert alles rechtssicher.
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
