import type { Metadata } from "next";
import Link from "next/link";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

export const metadata: Metadata = {
  title: "WEG-Verwaltung Hamburg: Was kostet ein Hausverwalter für WEG?",
  description:
    "WEG Verwaltung Hamburg Kosten 2026: Was kostet ein Hausverwalter für WEG? €22-32/Einheit, Vergleich WEG vs. Mietverwaltung und worauf Eigentümer achten müssen.",
  keywords:
    "WEG Verwaltung Hamburg Kosten, WEG Verwalter Hamburg Preis, Hausverwaltung WEG Hamburg, WEG vs Mietverwaltung Kosten, Hausverwalter WEG Hamburg",
  openGraph: {
    title: "WEG-Verwaltung Hamburg: Was kostet ein Hausverwalter für WEG?",
    description:
      "WEG Verwaltung Hamburg Kosten 2026: Preise, Vergleich WEG vs. Mietverwaltung und Checkliste für die Verwalterwahl.",
    url: "https://einfach-verwaltet.de/blog/weg-verwaltung-hamburg-kosten-vergleich",
    siteName: "einfach verwaltet.",
    locale: "de_DE",
    type: "article",
  },
};

const jsonLdArticle = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "WEG-Verwaltung Hamburg: Was kostet ein Hausverwalter für WEG?",
  description:
    "WEG Verwaltung Hamburg Kosten 2026: Preise, Vergleich WEG vs. Mietverwaltung und Checkliste für die Verwalterwahl.",
  author: {
    "@type": "Person",
    name: "Lukas Schmitz",
    jobTitle: "Gründer",
    worksFor: { "@type": "Organization", name: "einfach verwaltet." },
  },
  publisher: {
    "@type": "Organization",
    name: "einfach verwaltet.",
    logo: { "@type": "ImageObject", url: "https://einfach-verwaltet.de/logo.png" },
  },
  datePublished: "2026-02-27",
  inLanguage: "de",
  url: "https://einfach-verwaltet.de/blog/weg-verwaltung-hamburg-kosten-vergleich",
};

const jsonLdFaq = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Was kostet eine WEG-Verwaltung in Hamburg?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Eine professionelle WEG-Verwaltung in Hamburg kostet zwischen €22 und €32 pro Wohneinheit und Monat. Bei kleineren WEGs unter 10 Einheiten können es bis zu €38/Einheit sein, da der Fixkostenanteil höher ist. Entscheidend ist der Leistungsumfang — billige Angebote unter €18/Einheit sind oft ein Warnsignal.",
      },
    },
    {
      "@type": "Question",
      name: "Was ist der Unterschied zwischen WEG-Verwaltung und Mietverwaltung?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Die WEG-Verwaltung verwaltet das gemeinschaftliche Eigentum einer Wohnungseigentümergemeinschaft (§ 26 WEG): Eigentümerversammlungen, Jahresabrechnungen, Instandhaltungsrücklage, Beschlussdurchführung. Die Mietverwaltung verwaltet Mietverhältnisse für einen einzelnen Eigentümer: Mieterbetreuung, Mietenbuchhaltung, Nebenkostenabrechnungen. Oft werden beide Leistungen kombiniert.",
      },
    },
    {
      "@type": "Question",
      name: "Wie oft muss der WEG-Verwalter eine Eigentümerversammlung einberufen?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Nach §24 Abs. 1 WEG muss der Verwalter mindestens einmal jährlich eine ordentliche Eigentümerversammlung einberufen. Diese muss mindestens 3 Wochen vorher schriftlich mit Tagesordnung angekündigt werden. Außerordentliche Versammlungen können bei dringendem Bedarf jederzeit einberufen werden.",
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
            <span className="text-gray-700">WEG-Verwaltung Hamburg Kosten</span>
          </nav>

          <header className="mb-10">
            <p className="text-teal text-sm font-semibold uppercase tracking-wider mb-3">
              Ratgeber · 10 min Lesezeit · WEG-Eigentümer
            </p>
            <h1 className="text-3xl md:text-4xl font-bold text-navy font-playfair mb-4 leading-tight">
              WEG-Verwaltung Hamburg: Was kostet ein Hausverwalter für WEG?
            </h1>
            <p className="text-gray-500 text-sm">
              Februar 2026 · Lukas Schmitz, Gründer einfach verwaltet.
            </p>
          </header>

          <div className="bg-teal/5 border-l-4 border-teal rounded-r-xl p-6 mb-10">
            <p className="font-semibold text-navy mb-2">Kurzantwort</p>
            <p className="text-gray-700">
              Eine WEG-Verwaltung in Hamburg kostet zwischen €22 und €32 pro Wohneinheit und 
              Monat. Bei kleinen WEGs unter 10 Einheiten können die Kosten auf bis zu €38/Einheit 
              steigen. Die Mietverwaltung derselben Einheiten kostet €24–34/Einheit zusätzlich. 
              Wichtig: Billigangebote unter €18/Einheit sind ein Warnsignal.
            </p>
          </div>

          <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed space-y-6">
            <p>
              Wohnungseigentümergemeinschaften (WEGs) in Hamburg stehen vor einer klaren Entscheidung: 
              Wer verwaltet das Gemeinschaftseigentum professionell — und was kostet das? In Hamburg 
              gibt es hunderte von WEG-Verwaltern, die Preise variieren stark und die Qualität noch 
              stärker. Dieser Artikel gibt einen ehrlichen Überblick über die Kosten, was dafür 
              geleistet werden muss und wie WEG sich vom teurer werdenden Mietrecht unterscheidet.
            </p>

            <h2 className="text-2xl font-bold text-navy font-playfair mt-10 mb-4">
              WEG-Verwaltung Hamburg: Aktuelle Kosten 2026
            </h2>
            <p>
              Die Kosten für WEG-Verwaltung in Hamburg hängen von mehreren Faktoren ab: Anzahl 
              der Einheiten, Komplexität des Gebäudes (Aufzug, Tiefgarage, gewerbliche Einheiten) 
              und dem Leistungsumfang des Vertrags.
            </p>

            <div className="bg-white border border-gray-200 rounded-xl overflow-hidden my-6">
              <table className="w-full text-sm">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-4 py-3 text-left font-semibold text-navy">WEG-Größe</th>
                    <th className="px-4 py-3 text-left font-semibold text-navy">Preis/Einheit/Monat</th>
                    <th className="px-4 py-3 text-left font-semibold text-navy">Jahreskosten (10 WE)</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  <tr>
                    <td className="px-4 py-3">Kleine WEG (2–6 Einheiten)</td>
                    <td className="px-4 py-3 font-semibold text-teal">€28 – €38</td>
                    <td className="px-4 py-3">€3.360 – €4.560</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3">Mittlere WEG (7–20 Einheiten)</td>
                    <td className="px-4 py-3 font-semibold text-teal">€22 – €30</td>
                    <td className="px-4 py-3">€2.640 – €3.600</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3">Große WEG (21–50 Einheiten)</td>
                    <td className="px-4 py-3 font-semibold text-teal">€18 – €26</td>
                    <td className="px-4 py-3">€2.160 – €3.120</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3">Sehr große WEG (50+ Einheiten)</td>
                    <td className="px-4 py-3 font-semibold text-teal">€15 – €22</td>
                    <td className="px-4 py-3">€1.800 – €2.640</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="bg-amber-50 border border-amber-200 rounded-xl p-4 my-4 text-sm">
              <strong>Warnsignal:</strong> Angebote unter €15/Einheit für WEG-Verwaltung in Hamburg 
              sollten kritisch geprüft werden. Bei solchen Preisen fehlt entweder Personal für 
              eine ordnungsgemäße Betreuung, oder es gibt versteckte Zusatzkosten für 
              Standardleistungen wie Eigentümerversammlungen (€300–800/Stück extra).
            </div>

            <h2 className="text-2xl font-bold text-navy font-playfair mt-10 mb-4">
              WEG-Verwaltung vs. Mietverwaltung: Der Unterschied
            </h2>
            <p>
              Viele Eigentümer verwechseln die zwei Verwaltungsformen. Sie haben unterschiedliche 
              Aufgaben, Rechtsgrundlagen und Kosten:
            </p>

            <div className="bg-white border border-gray-200 rounded-xl overflow-hidden my-6">
              <table className="w-full text-sm">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-4 py-3 text-left font-semibold text-navy">Kriterium</th>
                    <th className="px-4 py-3 text-left font-semibold text-navy">WEG-Verwaltung</th>
                    <th className="px-4 py-3 text-left font-semibold text-navy">Mietverwaltung</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  <tr>
                    <td className="px-4 py-3 font-medium">Rechtsgrundlage</td>
                    <td className="px-4 py-3">§ 26 WEG</td>
                    <td className="px-4 py-3">§ 535 ff. BGB</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 font-medium">Auftraggeber</td>
                    <td className="px-4 py-3">Wohnungseigentümergemeinschaft</td>
                    <td className="px-4 py-3">Einzelner Vermieter</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 font-medium">Kernaufgaben</td>
                    <td className="px-4 py-3">ETV, Jahresabrechnung, Rücklage, Beschlüsse</td>
                    <td className="px-4 py-3">Mieterbetreuung, NKA, Mietenbuchhaltung</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 font-medium">Preis Hamburg</td>
                    <td className="px-4 py-3 font-semibold text-teal">€22 – €32/Einheit/Monat</td>
                    <td className="px-4 py-3 font-semibold text-teal">€24 – €34/Einheit/Monat</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 font-medium">Kostenträger</td>
                    <td className="px-4 py-3">Hausgeld (alle Eigentümer)</td>
                    <td className="px-4 py-3">Eigentümer (teilw. über NK)</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 font-medium">Kombination möglich?</td>
                    <td className="px-4 py-3" colSpan={2}>Ja — bei vermieteten WEG-Einheiten oft kombiniert. Günstigere Pakete möglich.</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h2 className="text-2xl font-bold text-navy font-playfair mt-10 mb-4">
              Was muss ein guter WEG-Verwalter in Hamburg leisten?
            </h2>
            <p>
              Die Pflichten des WEG-Verwalters sind in <strong>§ 27 WEG</strong> geregelt. 
              Ein professioneller Verwalter leistet mindestens:
            </p>

            <div className="bg-white border border-gray-200 rounded-xl p-6 my-6">
              <h3 className="font-semibold text-navy mb-4">Pflichtleistungen WEG-Verwalter (§ 27 WEG)</h3>
              <ul className="space-y-3 not-prose">
                {[
                  "Einberufung und Durchführung der jährlichen Eigentümerversammlung (§ 24 WEG)",
                  "Erstellung der Jahresabrechnung mit Einzel- und Gesamtabrechnung",
                  "Verwaltung der Instandhaltungsrücklage (§ 19 Abs. 2 Nr. 4 WEG)",
                  "Umsetzung von Eigentümerbeschlüssen",
                  "Beschluss-Sammlung führen (§ 24 Abs. 7 WEG)",
                  "Abschluss und Verwaltung aller notwendigen Versicherungen",
                  "Koordination von Instandhaltungs- und Instandsetzungsmaßnahmen",
                  "Hausgeldabrechnung und Mahnwesen",
                  "Regelmäßige Objektbegehungen",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm">
                    <svg className="w-5 h-5 text-teal flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <h2 className="text-2xl font-bold text-navy font-playfair mt-10 mb-4">
              Zusatzkosten: Was oft extra berechnet wird
            </h2>
            <p>
              Viele Verwalterverträge haben einen günstigen Grundpreis — aber zahlreiche 
              Zusatzpositionen, die das Bild verzerren:
            </p>

            <div className="bg-white border border-gray-200 rounded-xl overflow-hidden my-6">
              <table className="w-full text-sm">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-4 py-3 text-left font-semibold text-navy">Leistung</th>
                    <th className="px-4 py-3 text-left font-semibold text-navy">Typische Zusatzkosten HH</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  <tr>
                    <td className="px-4 py-3">Außerordentliche Eigentümerversammlung</td>
                    <td className="px-4 py-3 font-semibold">€350 – €800</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3">Bauprojekt-Betreuung (z.B. Dachsanierung)</td>
                    <td className="px-4 py-3 font-semibold">3 – 5% der Baukosten</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3">Mahnbescheid / Klageunterstützung</td>
                    <td className="px-4 py-3 font-semibold">€150 – €400/Fall</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3">Zertifikat §34c GewO Erneuerung</td>
                    <td className="px-4 py-3 font-semibold">Selten extra, sollte inklusive sein</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3">Versicherungsschadensregulierung</td>
                    <td className="px-4 py-3 font-semibold">Häufig extra: €100 – €300</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h2 className="text-2xl font-bold text-navy font-playfair mt-10 mb-4">
              Checkliste: WEG-Verwalter in Hamburg richtig auswählen
            </h2>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>§ 34c GewO Erlaubnis:</strong> Pflicht seit dem WEMoG 2020 — immer prüfen</li>
              <li><strong>Verwaltervertrag lesen:</strong> Was ist inklusive, was kostet extra?</li>
              <li><strong>Referenzen prüfen:</strong> Andere WEGs fragen, Bewertungen auf golocal/jacasa prüfen</li>
              <li><strong>Echtzeit-Reporting:</strong> Gute Verwalter bieten digitale Zugänge zu Kontoständen und Dokumenten</li>
              <li><strong>Reaktionszeiten:</strong> Schriftliche Garantien zu Antwortzeiten einfordern</li>
              <li><strong>Lokale Präsenz:</strong> Ein Verwalter mit Büro in Hamburg kennt lokale Handwerker und Marktpreise</li>
            </ul>

            {/* FAQ Section */}
            <h2 className="text-2xl font-bold text-navy font-playfair mt-10 mb-4">
              Häufig gestellte Fragen
            </h2>

            <div className="space-y-6 not-prose">
              <div className="bg-white border border-gray-200 rounded-xl p-5">
                <h3 className="font-semibold text-navy mb-2">Was kostet eine WEG-Verwaltung in Hamburg?</h3>
                <p className="text-gray-600 text-sm">
                  Eine professionelle WEG-Verwaltung in Hamburg kostet zwischen €22 und €32 pro 
                  Wohneinheit und Monat. Bei kleineren WEGs unter 10 Einheiten können es bis zu 
                  €38/Einheit sein. Entscheidend ist der Leistungsumfang — Billigangebote unter 
                  €18/Einheit sind oft ein Warnsignal für unvollständige Leistungen.
                </p>
              </div>

              <div className="bg-white border border-gray-200 rounded-xl p-5">
                <h3 className="font-semibold text-navy mb-2">Was ist der Unterschied zwischen WEG-Verwaltung und Mietverwaltung?</h3>
                <p className="text-gray-600 text-sm">
                  Die WEG-Verwaltung verwaltet das gemeinschaftliche Eigentum einer 
                  Wohnungseigentümergemeinschaft (§ 26 WEG): Eigentümerversammlungen, Jahresabrechnungen, 
                  Instandhaltungsrücklage. Die Mietverwaltung verwaltet Mietverhältnisse für einen 
                  einzelnen Eigentümer. Beide Leistungen werden oft kombiniert.
                </p>
              </div>

              <div className="bg-white border border-gray-200 rounded-xl p-5">
                <h3 className="font-semibold text-navy mb-2">Wie oft muss der WEG-Verwalter eine Eigentümerversammlung einberufen?</h3>
                <p className="text-gray-600 text-sm">
                  Nach §24 Abs. 1 WEG muss der Verwalter mindestens einmal jährlich eine ordentliche 
                  Eigentümerversammlung einberufen. Diese muss mindestens 3 Wochen vorher schriftlich 
                  mit Tagesordnung angekündigt werden. Außerordentliche Versammlungen können bei 
                  dringendem Bedarf jederzeit einberufen werden.
                </p>
              </div>
            </div>

            <h2 className="text-2xl font-bold text-navy font-playfair mt-10 mb-4">
              Fazit: WEG-Verwaltung in Hamburg ist Vertrauenssache
            </h2>
            <p>
              Die Kosten für WEG-Verwaltung in Hamburg sind überschaubar — wenn man sie in 
              Relation zum verwalteten Vermögen setzt. Ein Fehler bei der Eigentümerversammlung, 
              eine falsche Jahresabrechnung oder mangelnde Instandhaltung kann weit teurer werden. 
              Wählen Sie einen Verwalter, dem Sie vertrauen, der transparent arbeitet und mit dem 
              Sie jederzeit kommunizieren können.
            </p>
          </div>

          <div className="mt-12 bg-teal/10 border border-teal/20 rounded-xl p-8">
            <h3 className="text-xl font-bold text-navy mb-2 font-playfair">
              WEG-Verwaltung Hamburg — fair und transparent
            </h3>
            <p className="text-gray-600 mb-4">
              einfach verwaltet. übernimmt Ihre WEG-Verwaltung in Hamburg: Eigentümerversammlungen, 
              Jahresabrechnungen, Rücklagenverwaltung und Handwerkerkoordination — alles inklusive, 
              kein Kleingedrucktes.
            </p>
            <Link
              href="/anfrage"
              className="inline-block bg-teal text-white font-semibold px-6 py-3 rounded-lg hover:bg-teal/90 transition-colors"
            >
              Jetzt anfragen →
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
