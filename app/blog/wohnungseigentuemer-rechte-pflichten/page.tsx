import type { Metadata } from "next";
import Link from "next/link";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

export const metadata: Metadata = {
  title: "Wohnungseigentümer: Rechte und Pflichten im WEG 2026 | einfach verwaltet.",
  description:
    "WEG-Eigentümer: Rechte & Pflichten nach §§13-19 WEG. Sondereigentum vs. Gemeinschaftseigentum, Instandhaltung, Stimmrecht, Anfechtung.",
  keywords:
    "wohnungseigentümer rechte pflichten, weg eigentümer, §13 WEG, §14 WEG, sonder- gemeinschaftseigentum",
  openGraph: {
    title: "Wohnungseigentümer: Rechte und Pflichten im WEG 2026",
    description:
      "Sondereigentum vs. Gemeinschaftseigentum, §§13-19 WEG, Stimmrecht, Instandhaltungspflichten — der komplette Überblick.",
    url: "https://einfach-verwaltet.de/blog/wohnungseigentuemer-rechte-pflichten",
    siteName: "einfach verwaltet.",
    locale: "de_DE",
    type: "article",
  },
};

const jsonLdArticle = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Wohnungseigentümer: Rechte und Pflichten im WEG 2026",
  description:
    "Überblick über Rechte und Pflichten von WEG-Eigentümern: Sondereigentum, Gemeinschaftseigentum, Instandhaltung, Stimmrecht nach §§13-19 WEG.",
  author: { "@type": "Organization", name: "einfach verwaltet." },
  publisher: {
    "@type": "Organization",
    name: "einfach verwaltet.",
    logo: { "@type": "ImageObject", url: "https://einfach-verwaltet.de/logo.png" },
  },
  datePublished: "2026-02-26",
  inLanguage: "de",
  url: "https://einfach-verwaltet.de/blog/wohnungseigentuemer-rechte-pflichten",
};

const jsonLdFAQ = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Was ist der Unterschied zwischen Sondereigentum und Gemeinschaftseigentum?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Sondereigentum (§3 WEG) umfasst die Wohnung selbst und deren Einbauten (bspw. Küche, Fußböden). Gemeinschaftseigentum (§1 Abs. 5 WEG) umfasst Gebäudeteile, die dem gemeinschaftlichen Gebrauch dienen (Treppenhaus, Dach, Keller, Fassade).",
      },
    },
    {
      "@type": "Question",
      name: "Wie berechnet sich mein Stimmrecht in der WEG?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Das Stimmrecht richtet sich nach dem Miteigentumsanteil (MEA). Wer z.B. 100/1000 MEA besitzt, hat 10% der Stimmen und zahlt 10% der Kosten. Bei Sachentscheidungen hat jeder Eigentümer gemäß §25 Abs. 2 WEG eine Stimme.",
      },
    },
    {
      "@type": "Question",
      name: "Welche Instandhaltungspflichten habe ich als Eigentümer?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Als Eigentümer sind Sie nach §13 Abs. 1 Nr. 1 WEG verpflichtet, Ihre Wohnung so zu unterhalten, dass keine Gefahr für andere entsteht. Darüber hinaus müssen Sie Ihren Anteil an gemeinschaftlichen Instandhaltungskosten tragen (§16 Nr. 2 WEG).",
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
            <span className="text-gray-700">Wohnungseigentümer Rechte Pflichten</span>
          </nav>

          <header className="mb-10">
            <p className="text-teal text-sm font-semibold uppercase tracking-wider mb-3">
              Ratgeber · 9 min Lesezeit
            </p>
            <h1 className="text-3xl md:text-4xl font-bold text-navy font-playfair mb-4 leading-tight">
              Wohnungseigentümer: Rechte und Pflichten im WEG 2026
            </h1>
            <p className="text-gray-500 text-sm">Februar 2026 · einfach verwaltet.</p>
          </header>

          <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed space-y-6">
            <p>
              Als Wohnungseigentümer einer Eigentumswohnung sind Sie gleichzeitig Teil einer Gemeinschaft — der Wohnungseigentümergemeinschaft (WEG). Diese Doppelnatur bringt spezifische Rechte und Pflichten mit sich, die sich aus dem Wohnungseigentumsgesetz (WEG) ergeben. Wer seine Position als Eigentümer verstehen will, muss die Unterschiede zwischen Sondereigentum und Gemeinschaftseigentum kennen.
            </p>

            <h2 className="text-2xl font-bold text-navy font-playfair mt-10 mb-4">
              Die Grundlage: Was ist Wohnungseigentum?
            </h2>
            <p>
              Wohnungseigentum ist eine besondere Form des Eigentums, die sich aus drei Komponenten zusammensetzt:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Sondereigentum:</strong> Die Wohnung selbst (Räume aufgrund der Teilungserklärung)</li>
              <li><strong>Miteigentumsanteil:</strong> Anteil am gemeinschaftlichen Eigentum (prozentual)</li>
              <li><strong>Sondernutzungsrecht:</strong> Ausschließliches Nutzungsrecht an Gemeinschaftseigentum (z.B. Gartenstellplatz)</li>
            </ul>

            <h2 className="text-2xl font-bold text-navy font-playfair mt-10 mb-4">
              Sondereigentum vs. Gemeinschaftseigentum
            </h2>
            <p>
              Die Unterscheidung zwischen Sondereigentum und Gemeinschaftseigentum ist fundamental für Ihre Verantwortlichkeiten:
            </p>
            
            <div className="bg-gray-50 p-6 rounded-lg my-4">
              <h3 className="font-bold text-navy mb-3">Sondereigentum (§3 WEG)</h3>
              <ul className="list-disc pl-6 space-y-1">
                <li>Räume, die allein Ihnen gehören (Wohnung, Einbauten)</li>
                <li>Sie sind für Instandhaltung und Instandsetzung allein verantwortlich</li>
                <li>Kosmetische Instandsetzung bei Auszug nach §28 WEG</li>
                <li>Freie Gestaltung (innerhalb der Grenzen von §14 WEG)</li>
              </ul>
            </div>
            
            <div className="bg-gray-50 p-6 rounded-lg my-4">
              <h3 className="font-bold text-navy mb-3">Gemeinschaftseigentum (§1 Abs. 5 WEG)</h3>
              <ul className="list-disc pl-6 space-y-1">
                <li>Gebäudeteile für gemeinschaftlichen Gebrauch (Treppenhaus, Dach, Fassade)</li>
                <li>Instandhaltung durch die Gemeinschaft via Verwalter</li>
                <li>Beschlussfassung in ETV über Maßnahmen</li>
                <li>Kostenverteilung nach MEA</li>
              </ul>
            </div>

            <h2 className="text-2xl font-bold text-navy font-playfair mt-10 mb-4">
              Ihre wichtigsten Rechte als Eigentümer (§§13-14 WEG)
            </h2>
            <p>Als WEG-Eigentümer haben Sie folgende zentrale Rechte:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Wohnungseigentum an der Wohnung (§3 WEG):</strong> Alleiniges Eigentum an Ihrer Einheit</li>
              <li><strong>Mitwirkung an der Gemeinschaft (§13 Abs. 1 Nr. 2 WEG):</strong> Stimmrecht in der Eigentümerversammlung</li>
              <li><strong>Nutzung Gemeinschaftseigentum (§13 Abs. 1 Nr. 3 WEG):</strong> Uneingeschränkte Nutzung gemeinschaftlicher Räume</li>
              <li><strong>Information (§13 Abs. 1 Nr. 4 WEG):</strong> Einsicht in das Verwalterverzeichnis und Beschlussprotokolle</li>
              <li><strong>Anfechtung von Beschlüssen (§46 WEG):</strong> Möglichkeit, rechtswidrige Beschlüsse anzufechten</li>
              <li><strong>Verwalterwahl und -kontrolle (§26 WEG):</strong> Mittelbarer Einfluss über die Verwaltung</li>
            </ul>

            <h2 className="text-2xl font-bold text-navy font-playfair mt-10 mb-4">
              Ihre zentralen Pflichten als Eigentümer (§13-16 WEG)
            </h2>
            <p>
              Mit den Rechten gehen zahlreiche Pflichten einher:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Instandhaltungspflicht (§13 Abs. 1 Nr. 1 WEG):</strong> Sorge für den Erhalt Ihrer Wohneinheit</li>
              <li><strong>Rücksichtnahme (§14 WEG):</strong> Keine Belästigung anderer Eigentümer, z.B. durch Lärm</li>
              <li><strong>Gemeinschaftsordnung beachten:</strong> Umgangsregeln mit anderen Eigentümern</li>
              <li><strong>Kostenlasten tragen (§16 WEG):</strong> Verhältnismäßige Beteiligung an Gemeinschaftsausgaben nach MEA</li>
              <li><strong>Rückbaupflicht (§16 Nr. 2 WEG):</strong> Rückbau bei Veränderungen, die andere beeinträchtigen</li>
              <li><strong>Vollstreckung von Beschlüssen dulden:</strong> Umsetzung rechtmäßiger Gemeinschaftsbeschlüsse</li>
            </ul>

            <h2 className="text-2xl font-bold text-navy font-playfair mt-10 mb-4">
              Ihr Stimmrecht in der Eigentümerversammlung
            </h2>
            <p>
              Das Stimmrecht richtet sich primär nach Ihrem Miteigentumsanteil (MEA):
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>100/1000 MEA = 10% der Stimmen</li>
              <li>Mehrheitserfordernisse: >50% der abgegebenen Stimmen (einfach) oder >25% der MEA (für Verwalterwahl)</li>
              <li>Ausnahme bei Sachentscheidungen (§25 Abs. 2 WEG): Jeder hat eine Stimme</li>
            </ul>
            <p className="bg-amber-50 border-l-4 border-amber-400 p-4 rounded">
              <strong>Tipp:</strong> Bei wichtigen Beschlüssen (Modernisierung, Sonderumlage) ist Ihre Teilnahme an der ETV essentiell, da Sie sonst übermaßige Belastungen hinnehmen müssen.
            </p>

            <h2 className="text-2xl font-bold text-navy font-playfair mt-10 mb-4">
              Instandhaltungspflichten: Wofür sind Sie verantwortlich?
            </h2>
            <p>
              Die Verteilung der Instandhaltungspflichten zwischen Eigentümer und Gemeinschaft ist klar geregelt:
            </p>
            <table className="w-full border-collapse my-4">
              <thead>
                <tr className="bg-gray-100">
                  <th className="border p-3 text-left">Bereich</th>
                  <th className="border p-3 text-left">Zuständig</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border p-3">Wohnung (innen), Einbauten</td>
                  <td className="border p-3">Sondereigentümer (Sie)</td>
                </tr>
                <tr>
                  <td className="border p-3">Fassade, Dach, Treppenhaus</td>
                  <td className="border p-3">WEG / Verwalter</td>
                </tr>
                <tr>
                  <td className="border p-3">Fenster (Rahmen & Glas)</td>
                  <td className="border p-3">WEG / Verwalter</td>
                </tr>
                <tr>
                  <td className="border p-3">Rohrleitungen (bis Hauptleitung)</td>
                  <td className="border p-3">Sondereigentümer (Sie)</td>
                </tr>
              </tbody>
            </table>

            <h2 className="text-2xl font-bold text-navy font-playfair mt-10 mb-4">
              Anfechtung von Beschlüssen: Ihr Schutzrecht
            </h2>
            <p>
              §46 WEG gibt Ihnen die Möglichkeit, rechtswidrige Beschlüsse der Eigentümerversammlung anzufechten:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Frist:</strong> Innerhalb von 1 Monat nach Kenntnis des Beschlusses</li>
              <li><strong>Gründe:</strong> Verfahrensfehler, Inhaltsfehler, Verstoß gegen Gesetz oder Gemeinschaftsordnung</li>
              <li><strong>Zuständigkeit:</strong> Amtsgericht am Sitz der Gemeinschaft</li>
              <li><strong>Kosten:</strong> Bei erfolglosem Anfechtungsklage: Streitwert nach MEA (oft €3.000-€10.000)</li>
            </ul>

            <h2 className="text-2xl font-bold text-navy font-playfair mt-10 mb-4">
              Fazit: Eigentümer sein bedeutet Verantwortung teilen
            </h2>
            <p>
              Wohnungseigentum verbindet individuelle Freiheiten mit gemeinschaftlicher Verantwortung. Wer seine Rechte und Pflichten kennt, kann sich effektiv in die WEG einbringen und seine Interessen durchsetzen — sei es in der Eigentümerversammlung, beim Verwalterwechsel oder bei Instandhaltungsfragen.
            </p>
          </div>

          <div className="mt-12 bg-teal/10 border border-teal/20 rounded-xl p-8">
            <h3 className="text-xl font-bold text-navy mb-2 font-playfair">
              WEG-Beratung für Eigentümer
            </h3>
            <p className="text-gray-600 mb-4">
              einfach verwaltet. berät Eigentümergemeinschaften bei allen Fragen zu Rechten, Pflichten und der optimalen Organisation der WEG.
            </p>
            <Link
              href="/anfrage"
              className="inline-block bg-teal text-white font-semibold px-6 py-3 rounded-lg hover:bg-teal/90 transition-colors"
            >
              WEG-Beratung anfragen
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
