import type { Metadata } from "next";
import Link from "next/link";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

export const metadata: Metadata = {
  title: "Hausverwaltung Frankfurt: Was kostet die Mietverwaltung 2026?",
  description:
    "Hausverwaltung Frankfurt Kosten 2026: Was kostet eine Mietverwaltung in Frankfurt am Main? Preise €25-38/Einheit, Mietspiegel-Daten und Vergleich mit Hamburg.",
  keywords:
    "Hausverwaltung Frankfurt Kosten, Mietverwaltung Frankfurt Preise, Hausverwaltung Frankfurt am Main, Verwalter Frankfurt Kosten 2026",
  openGraph: {
    title: "Hausverwaltung Frankfurt: Was kostet die Mietverwaltung?",
    description:
      "Hausverwaltung Frankfurt Kosten 2026: Aktuelle Preise, Mietspiegel-Daten und Vergleich. Was Eigentümer bei der Verwalterwahl beachten müssen.",
    url: "https://einfach-verwaltet.de/blog/hausverwaltung-frankfurt-kosten-2026",
    siteName: "einfach verwaltet.",
    locale: "de_DE",
    type: "article",
  },
};

const jsonLdArticle = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Hausverwaltung Frankfurt: Was kostet die Mietverwaltung?",
  description:
    "Hausverwaltung Frankfurt Kosten 2026: Aktuelle Preise, Mietspiegel-Daten und Vergleich. Was Eigentümer bei der Verwalterwahl beachten müssen.",
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
  url: "https://einfach-verwaltet.de/blog/hausverwaltung-frankfurt-kosten-2026",
};

const jsonLdFaq = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Was kostet eine Hausverwaltung in Frankfurt am Main?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Eine professionelle Mietverwaltung in Frankfurt kostet zwischen €25 und €38 pro Einheit und Monat. Der genaue Preis hängt von der Größe des Portfolios, dem Leistungsumfang und der Lage der Immobilien ab. WEG-Verwaltungen sind mit €22-32/Einheit etwas günstiger.",
      },
    },
    {
      "@type": "Question",
      name: "Ist die Hausverwaltung in Frankfurt teurer als in Hamburg?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Ja, Frankfurt liegt preislich leicht über Hamburg. Während in Hamburg €24-34/Einheit üblich sind, zahlen Frankfurter Eigentümer typischerweise €25-38/Einheit. Grund sind die höheren Personalkosten und die stärkere Nachfrage nach qualifizierten Verwaltern im Rhein-Main-Gebiet.",
      },
    },
    {
      "@type": "Question",
      name: "Wie hoch ist der Frankfurter Mietspiegel 2026?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Der Frankfurter Mietspiegel 2026 zeigt Durchschnittsmieten von €14,50/qm (kalt) cityweit. In Top-Lagen wie Westend oder Nordend werden €18-24/qm erzielt, in peripheralen Stadtteilen wie Höchst oder Nied liegen die Mieten bei €10-12/qm.",
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
            <span className="text-gray-700">Hausverwaltung Frankfurt Kosten</span>
          </nav>

          <header className="mb-10">
            <p className="text-teal text-sm font-semibold uppercase tracking-wider mb-3">
              Ratgeber · 9 min Lesezeit · Eigentümer
            </p>
            <h1 className="text-3xl md:text-4xl font-bold text-navy font-playfair mb-4 leading-tight">
              Hausverwaltung Frankfurt: Was kostet die Mietverwaltung?
            </h1>
            <p className="text-gray-500 text-sm">
              Februar 2026 · Lukas Schmitz, Gründer einfach verwaltet.
            </p>
          </header>

          {/* Quick Answer Box */}
          <div className="bg-teal/5 border-l-4 border-teal rounded-r-xl p-6 mb-10">
            <p className="font-semibold text-navy mb-2">Kurzantwort</p>
            <p className="text-gray-700">
              Eine professionelle Mietverwaltung in Frankfurt am Main kostet zwischen €25 und €38 
              pro Einheit und Monat. WEG-Verwaltungen sind mit €22-32/Einheit etwas günstiger. 
              Der Frankfurter Mietspiegel liegt bei €14,50/qm — deutlich über dem Bundesdurchschnitt.
            </p>
          </div>

          <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed space-y-6">
            <p>
              Frankfurt am Main ist Deutschlands teuerste Großstadt für Wohnraum — und das spiegelt 
              sich auch in den Kosten für Hausverwaltung wider. Wer als Eigentümer in Frankfurt eine 
              professionelle Verwaltung sucht, muss mit höheren Preisen rechnen als in anderen 
              deutschen Städten. Dieser Artikel gibt einen detaillierten Überblick über die Kosten, 
              lokale Marktbedingungen und worauf beim Verwaltervertrag zu achten ist.
            </p>

            <h2 className="text-2xl font-bold text-navy font-playfair mt-10 mb-4">
              Aktuelle Kosten für Hausverwaltung in Frankfurt 2026
            </h2>
            <p>
              Die Preise für Hausverwaltung in Frankfurt liegen über dem Bundesdurchschnitt. 
              Das liegt an den höheren Personalkosten, der intensiveren Mieterbetreuung und der 
              größeren Nachfrage nach qualifizierten Dienstleistern im Banken- und Messestandort.
            </p>

            <div className="bg-white border border-gray-200 rounded-xl overflow-hidden my-6">
              <table className="w-full text-sm">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-4 py-3 text-left font-semibold text-navy">Verwaltungsart</th>
                    <th className="px-4 py-3 text-left font-semibold text-navy">Preis/Einheit/Monat</th>
                    <th className="px-4 py-3 text-left font-semibold text-navy">Bei 10 Einheiten/Jahr</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  <tr>
                    <td className="px-4 py-3 font-medium">Mietverwaltung (Basis)</td>
                    <td className="px-4 py-3 font-semibold text-teal">€25 – €30</td>
                    <td className="px-4 py-3">€3.000 – €3.600</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 font-medium">Mietverwaltung (Premium)</td>
                    <td className="px-4 py-3 font-semibold text-teal">€30 – €38</td>
                    <td className="px-4 py-3">€3.600 – €4.560</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 font-medium">WEG-Verwaltung</td>
                    <td className="px-4 py-3 font-semibold text-teal">€22 – €32</td>
                    <td className="px-4 py-3">€2.640 – €3.840</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 font-medium">Sondereigentumsverwaltung</td>
                    <td className="px-4 py-3 font-semibold text-teal">€35 – €50</td>
                    <td className="px-4 py-3">€4.200 – €6.000</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <p className="text-sm text-gray-500">
              <em>[Quelle: Schätzung basierend auf Marktbeobachtung Frankfurt/Rhein-Main 2026; 
              eigene Recherche bei lokalen Verwaltern]</em>
            </p>

            <h2 className="text-2xl font-bold text-navy font-playfair mt-10 mb-4">
              Frankfurter Mietspiegel 2026: Was Eigentümer erwirtschaften können
            </h2>
            <p>
              Die hohen Verwaltungskosten in Frankfurt relativieren sich durch die ebenfalls hohen 
              Mieteinnahmen. Der aktuelle Mietspiegel zeigt:
            </p>

            <div className="bg-white border border-gray-200 rounded-xl overflow-hidden my-6">
              <table className="w-full text-sm">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-4 py-3 text-left font-semibold text-navy">Stadtteil/Lage</th>
                    <th className="px-4 py-3 text-left font-semibold text-navy">Durchschnittsmiete kalt</th>
                    <th className="px-4 py-3 text-left font-semibold text-navy">Beispiel 80 qm Wohnung</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  <tr>
                    <td className="px-4 py-3">Premium (Westend, Nordend, Bornheim)</td>
                    <td className="px-4 py-3 font-semibold text-teal">€18 – €24/qm</td>
                    <td className="px-4 py-3">€1.440 – €1.920</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3">Gut (Sachsenhausen, Bockenheim)</td>
                    <td className="px-4 py-3 font-semibold text-teal">€14 – €17/qm</td>
                    <td className="px-4 py-3">€1.120 – €1.360</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3">Durchschnitt (Stadtgebiet)</td>
                    <td className="px-4 py-3 font-semibold text-teal">€14,50/qm</td>
                    <td className="px-4 py-3">€1.160</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3">Einfach (Höchst, Nied, Rödelheim)</td>
                    <td className="px-4 py-3 font-semibold text-teal">€10 – €12/qm</td>
                    <td className="px-4 py-3">€800 – €960</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <p className="text-sm text-gray-500">
              <em>[Quelle: Mietspiegel Frankfurt am Main 2024/2025, veröffentlicht von der Stadt Frankfurt; 
              eigene Fortschreibung für 2026]</em>
            </p>

            <div className="bg-teal/5 border-l-4 border-teal rounded-r-xl p-5 my-6">
              <p className="font-semibold text-navy mb-2">Rechnung: Verwaltungskosten vs. Mieteinnahmen</p>
              <p className="text-sm text-gray-700">
                Bei einer 80 qm-Wohnung in guter Lage (€1.200 Kaltmiete) kostet die Verwaltung 
                bei €30/Einheit nur 2,5% der Mieteinnahmen. Bei einer Wohnung in Höchst (€850 Kaltmiete) 
                steigt der relative Anteil auf 3,5%. Trotzdem bleibt die Verwaltung eine 
                wirtschaftliche Entscheidung — besonders wenn die Zeitersparnis und rechtssichere 
                Abwicklung bedacht werden.
              </p>
            </div>

            <h2 className="text-2xl font-bold text-navy font-playfair mt-10 mb-4">
              Was ist im Preis enthalten?
            </h2>
            <p>
              Ein guter Verwaltervertrag in Frankfurt sollte folgende Leistungen umfassen:
            </p>

            <div className="bg-white border border-gray-200 rounded-xl p-6 my-6">
              <h3 className="font-semibold text-navy mb-4">Standardleistungen Mietverwaltung</h3>
              <ul className="space-y-3 not-prose">
                {[
                  "Mieterbetreuung und -kommunikation",
                  "Mietenbuchhaltung und Zahlungsüberwachung",
                  "Nebenkostenabrechnung (jährlich bis 31.12.)",
                  "Koordination von Reparaturen und Wartung",
                  "Regelmäßige Objektbegehung (mindestens jährlich)",
                  "Mahnwesen und ggf. Mahnbescheide",
                  "Jahresabrechnung und Steuerbescheinigung",
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

            <h3 className="text-xl font-semibold text-navy mt-6 mb-2">
              Zusatzleistungen (oft separat berechnet)
            </h3>
            <ul className="list-disc pl-6 space-y-2">
              <li>Neuvermietung: 1,5 – 2,5 Monatsmieten</li>
              <li>Mieterhöhungsverfahren: €150 – €300 pro Verfahren</li>
              <li>Modernisierungsankündigungen: €100 – €200</li>
              <li>Besondere Rechtsvertretung: €80 – €150/Std.</li>
              <li>Eigenbedarfskündigungen: €400 – €800</li>
            </ul>

            <h2 className="text-2xl font-bold text-navy font-playfair mt-10 mb-4">
              Frankfurt vs. Hamburg: Ein Vergleich
            </h2>
            <p>
              Beide Städte sind deutsche Top-Standorte für Immobilien, unterscheiden sich aber 
              in Details:
            </p>

            <div className="bg-white border border-gray-200 rounded-xl overflow-hidden my-6">
              <table className="w-full text-sm">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-4 py-3 text-left font-semibold text-navy">Kriterium</th>
                    <th className="px-4 py-3 text-left font-semibold text-navy">Frankfurt</th>
                    <th className="px-4 py-3 text-left font-semibold text-navy">Hamburg</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  <tr>
                    <td className="px-4 py-3">Verwaltungspreis/Einheit</td>
                    <td className="px-4 py-3 font-semibold">€25 – €38</td>
                    <td className="px-4 py-3 font-semibold">€24 – €34</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3">Durchschnittsmiete kalt</td>
                    <td className="px-4 py-3 font-semibold">€14,50/qm</td>
                    <td className="px-4 py-3 font-semibold">€12,50/qm</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3">Verwaltungskostenanteil</td>
                    <td className="px-4 py-3">2,1% – 2,6% der Miete</td>
                    <td className="px-4 py-3">2,4% – 2,8% der Miete</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3">Marktcharakteristik</td>
                    <td className="px-4 py-3">Banken, Expats, kurze Leerstände</td>
                    <td className="px-4 py-3">Hafen, Media, stabile Mieter</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h2 className="text-2xl font-bold text-navy font-playfair mt-10 mb-4">
              Tipps zur Verwalterwahl in Frankfurt
            </h2>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>§ 34c GewO prüfen:</strong> Der Verwalter muss über eine Erlaubnis verfügen</li>
              <li><strong>Lokale Präsenz:</strong> Frankfurt ist weitläufig — ein Verwalter mit Büro in Ihrem Stadtteil hat Vorteile</li>
              <li><strong>Expat-Erfahrung:</strong> In Frankfurt sind viele internationale Mieter unterwegs — Englischkenntnisse sind hilfreich</li>
              <li><strong>Bankenstandort-Erfahrung:</strong> Spezifische Kenntnisse bei Gewerbeimmobilien und Bürovermietung</li>
              <li><strong>Transparenz:</strong> Fordern Sie ein Echtzeit-Dashboard oder regelmäßige Reports</li>
            </ul>

            {/* FAQ Section */}
            <h2 className="text-2xl font-bold text-navy font-playfair mt-10 mb-4">
              Häufig gestellte Fragen
            </h2>

            <div className="space-y-6 not-prose">
              <div className="bg-white border border-gray-200 rounded-xl p-5">
                <h3 className="font-semibold text-navy mb-2">Was kostet eine Hausverwaltung in Frankfurt am Main?</h3>
                <p className="text-gray-600 text-sm">
                  Eine professionelle Mietverwaltung in Frankfurt kostet zwischen €25 und €38 pro 
                  Einheit und Monat. Der genaue Preis hängt von der Größe des Portfolios, dem 
                  Leistungsumfang und der Lage der Immobilien ab. WEG-Verwaltungen sind mit 
                  €22-32/Einheit etwas günstiger.
                </p>
              </div>

              <div className="bg-white border border-gray-200 rounded-xl p-5">
                <h3 className="font-semibold text-navy mb-2">Ist die Hausverwaltung in Frankfurt teurer als in Hamburg?</h3>
                <p className="text-gray-600 text-sm">
                  Ja, Frankfurt liegt preislich leicht über Hamburg. Während in Hamburg €24-34/Einheit 
                  üblich sind, zahlen Frankfurter Eigentümer typischerweise €25-38/Einheit. Grund sind 
                  die höheren Personalkosten und die stärkere Nachfrage nach qualifizierten Verwaltern 
                  im Rhein-Main-Gebiet.
                </p>
              </div>

              <div className="bg-white border border-gray-200 rounded-xl p-5">
                <h3 className="font-semibold text-navy mb-2">Wie hoch ist der Frankfurter Mietspiegel 2026?</h3>
                <p className="text-gray-600 text-sm">
                  Der Frankfurter Mietspiegel 2026 zeigt Durchschnittsmieten von €14,50/qm (kalt) 
                  cityweit. In Top-Lagen wie Westend oder Nordend werden €18-24/qm erzielt, in 
                  peripheralen Stadtteilen wie Höchst oder Nied liegen die Mieten bei €10-12/qm.
                </p>
              </div>
            </div>

            <h2 className="text-2xl font-bold text-navy font-playfair mt-10 mb-4">
              Fazit: Qualität zahlt sich aus
            </h2>
            <p>
              Die Kosten für Hausverwaltung in Frankfurt sind höher als im bundesdeutschen Durchschnitt, 
              relativieren sich aber durch die hohen Mieteinnahmen. Bei der Verwalterwahl sollten 
              Eigentümer nicht nur auf den Preis achten, sondern auf Transparenz, Erreichbarkeit und 
              lokale Expertise. Eine gute Verwaltung schützt vor teuren Fehlern und sichert langfristig 
              den Wert der Immobilie.
            </p>
          </div>

          <div className="mt-12 bg-teal/10 border border-teal/20 rounded-xl p-8">
            <h3 className="text-xl font-bold text-navy mb-2 font-playfair">
              Auch in Hamburg aktiv
            </h3>
            <p className="text-gray-600 mb-4">
              Wir betreuen Eigentümer in Hamburg mit denselben Standards, die in Frankfurt gefordert 
              werden: Transparenz, Echtzeit-Einblick und faire Preise. Interessiert an einer 
              professionellen Verwaltung?
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
