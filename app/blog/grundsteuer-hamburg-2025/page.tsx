import type { Metadata } from "next";
import Link from "next/link";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

export const metadata: Metadata = {
  title: "Grundsteuer Hamburg 2025: Was Vermieter jetzt wissen müssen",
  description:
    "Grundsteuerreform 2025 Hamburg: Neue Messbeträge, Hebesätze, wie Vermieter die Grundsteuer auf Mieter umlegen und was jetzt zu tun ist.",
  keywords:
    "Grundsteuer Hamburg 2025, Grundsteuerreform Hamburg, Grundsteuer Vermieter Hamburg, Grundsteuer Betriebskosten, Hebesatz Hamburg 2025",
  openGraph: {
    title: "Grundsteuer Hamburg 2025: Was Vermieter jetzt wissen müssen",
    description:
      "Die Grundsteuerreform 2025 in Hamburg: Neue Berechnung, Messbeträge, Hebesätze und wie Vermieter korrekt auf Mieter umlegen.",
    url: "https://einfach-verwaltet.de/blog/grundsteuer-hamburg-2025",
    siteName: "einfach verwaltet.",
    locale: "de_DE",
    type: "article",
  },
};

const jsonLdArticle = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Grundsteuer Hamburg 2025: Was Vermieter jetzt wissen müssen",
  description:
    "Die Grundsteuerreform 2025 in Hamburg: Neue Berechnung, Messbeträge, Hebesätze und wie Vermieter korrekt auf Mieter umlegen.",
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
  datePublished: "2026-02-26",
  inLanguage: "de",
  url: "https://einfach-verwaltet.de/blog/grundsteuer-hamburg-2025",
};

const jsonLdFaq = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Wann tritt die neue Grundsteuer in Hamburg in Kraft?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Die reformierte Grundsteuer gilt ab dem 1. Januar 2025. Die neuen Grundsteuerbescheide auf Basis der reformierten Bewertung werden ab 2025 von den Finanzämtern verschickt.",
      },
    },
    {
      "@type": "Question",
      name: "Kann ich die Grundsteuer auf Mieter umlegen?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Ja, die Grundsteuer ist nach §2 Nr. 1 BetrKV eine umlagefähige Betriebskosten und kann im Rahmen der Nebenkostenabrechnung auf Mieter umgelegt werden, sofern dies im Mietvertrag vereinbart ist.",
      },
    },
    {
      "@type": "Question",
      name: "Was ist der Hamburger Hebesatz für die Grundsteuer B 2025?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Hamburg hat den Hebesatz für die Grundsteuer B 2025 auf 975% festgesetzt. Dieser Hebesatz gilt für bebaute Grundstücke und Wohngebäude in Hamburg.",
      },
    },
    {
      "@type": "Question",
      name: "Wie berechnet sich die Grundsteuer nach der Reform?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Die neue Grundsteuer berechnet sich aus: Grundsteuerwert × Steuermesszahl × Hebesatz. Hamburg nutzt das Bundesmodell mit angepassten Steuermesszahlen. Der Grundsteuerwert basiert auf aktualisierten Bodenrichtwerten und Gebäudewerten.",
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
            <span className="text-gray-700">Grundsteuer Hamburg 2025</span>
          </nav>

          <header className="mb-10">
            <p className="text-teal text-sm font-semibold uppercase tracking-wider mb-3">
              Ratgeber · 8 min Lesezeit · Vermieter
            </p>
            <h1 className="text-3xl md:text-4xl font-bold text-navy font-playfair mb-4 leading-tight">
              Grundsteuer Hamburg 2025: Was Vermieter jetzt wissen müssen
            </h1>
            <p className="text-gray-500 text-sm">
              Februar 2026 · Lukas Schmitz, Gründer einfach verwaltet.
            </p>
          </header>

          {/* Quick Answer Box */}
          <div className="bg-teal/5 border-l-4 border-teal rounded-r-xl p-6 mb-10">
            <p className="font-semibold text-navy mb-2">Kurzantwort</p>
            <p className="text-gray-700">
              Ab 2025 gilt in Hamburg die reformierte Grundsteuer mit neuen Grundsteuerwerten und
              einem Hebesatz von 975%. Die Grundsteuer bleibt umlagefähig nach §2 Nr. 1 BetrKV.
              Vermieter müssen neue Bescheide prüfen und die Betriebskostenabrechnung anpassen.
            </p>
          </div>

          <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed space-y-6">
            <p>
              Die Grundsteuerreform ist die größte Steuerreform seit Jahrzehnten — und sie
              betrifft jeden Immobilieneigentümer in Deutschland. In Hamburg treten die neuen
              Bemessungsgrundlagen ab dem 1. Januar 2025 in Kraft. Was ändert sich konkret?
              Wie werden Vermieter in Hamburg betroffen? Und wie legen Sie die Grundsteuer
              korrekt auf Mieter um?
            </p>

            <h2 className="text-2xl font-bold text-navy font-playfair mt-10 mb-4">
              Hintergrund: Die Grundsteuerreform 2025
            </h2>
            <p>
              Das Bundesverfassungsgericht hatte 2018 entschieden, dass die bisherige
              Grundsteuerberechnung auf Basis von Einheitswerten aus den Jahren 1964 (West)
              und 1935 (Ost) verfassungswidrig ist. Die Einheitswerte spiegelten die
              tatsächlichen Immobilienwerte nicht mehr wider — in Hamburg mit seinen
              stark gestiegenen Grundstückspreisen besonders deutlich.
            </p>
            <p>
              Der Gesetzgeber hat die Grundsteuer daher grundlegend reformiert. Die neuen
              Regelungen gelten bundesweit ab dem <strong>1. Januar 2025</strong>.
            </p>

            <div className="bg-teal/5 border-l-4 border-teal rounded-r-xl p-5 my-6">
              <p className="font-semibold text-navy mb-2">Das ändert sich 2025</p>
              <ul className="text-sm space-y-1">
                <li>• Neue Bewertungsgrundlage: Grundsteuerwert statt Einheitswert</li>
                <li>• Hamburg nutzt das Bundesmodell (kein Landesmodell)</li>
                <li>• Neue Steuermesszahlen und angepasste Hebesätze</li>
                <li>• Alle Eigentümer erhielten neue Grundsteuerwertbescheide (2022-2024)</li>
              </ul>
            </div>

            <h2 className="text-2xl font-bold text-navy font-playfair mt-10 mb-4">
              Berechnung der Grundsteuer in Hamburg
            </h2>
            <p>
              Die Grundsteuer berechnet sich weiterhin in drei Schritten — aber mit neuen Werten:
            </p>

            <div className="bg-white border border-gray-200 rounded-xl overflow-hidden my-6">
              <table className="w-full text-sm">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-4 py-3 text-left font-semibold text-navy">Schritt</th>
                    <th className="px-4 py-3 text-left font-semibold text-navy">Formel</th>
                    <th className="px-4 py-3 text-left font-semibold text-navy">Wert (Hamburg)</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  <tr>
                    <td className="px-4 py-3 font-medium">1. Grundsteuerwert</td>
                    <td className="px-4 py-3">Bodenrichtwert × Fläche + Gebäudewert</td>
                    <td className="px-4 py-3 text-teal">Individuell je Objekt</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 font-medium">2. Steuermessbetrag</td>
                    <td className="px-4 py-3">Grundsteuerwert × Steuermesszahl</td>
                    <td className="px-4 py-3 text-teal">0,031‰ (Wohngebäude)</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 font-medium">3. Jahresgrundsteuer</td>
                    <td className="px-4 py-3">Steuermessbetrag × Hebesatz</td>
                    <td className="px-4 py-3 text-teal">975% (Hamburg 2025)</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="bg-amber-50 border border-amber-200 rounded-xl p-5 my-6 not-prose">
              <p className="font-semibold text-navy mb-2">Rechenbeispiel</p>
              <p className="text-sm text-gray-700 mb-2">
                Eine Hamburger Eigentumswohnung mit einem Grundsteuerwert von 200.000 € und
                Steuermesszahl 0,031‰:
              </p>
              <ul className="text-sm space-y-1">
                <li>Steuermessbetrag: 200.000 € × 0,031‰ = <strong>6,20 €</strong></li>
                <li>Jahresgrundsteuer: 6,20 € × 975% = <strong>60,45 €/Jahr</strong></li>
              </ul>
              <p className="text-sm text-gray-500 mt-2">
                <em>Hinweis: Dies ist ein vereinfachtes Beispiel. Die tatsächliche Berechnung
                berücksichtigt Bodenrichtwert, Gebäudetyp, Baujahr und weitere Faktoren.</em>
              </p>
            </div>

            <h2 className="text-2xl font-bold text-navy font-playfair mt-10 mb-4">
              Hamburger Hebesatz 2025
            </h2>
            <p>
              Hamburg hat den Hebesatz für die Grundsteuer B (bebaute Grundstücke) auf
              <strong> 975 %</strong> festgesetzt. Der Hebesatz für Grundsteuer A (land- und
              forstwirtschaftliche Grundstücke) beträgt 220 %.
            </p>
            <p>
              Im bundesweiten Vergleich liegt Hamburg damit im oberen Mittelfeld. Zum Vergleich:
              Berlin 810%, München 535%, Köln 515%.
            </p>

            <h2 className="text-2xl font-bold text-navy font-playfair mt-10 mb-4">
              Umlage auf Mieter: So machen Sie es richtig
            </h2>
            <p>
              Die Grundsteuer ist nach <strong>§2 Nr. 1 BetrKV</strong> eine umlagefähige
              Betriebskosten — sofern sie im Mietvertrag als solche vereinbart ist. So gehen
              Sie bei der Umlage vor:
            </p>
            <ol className="list-decimal pl-6 space-y-3">
              <li>
                <strong>Mietvertrag prüfen:</strong> Ist die Grundsteuer als Betriebskosten
                explizit genannt? Ohne Vereinbarung können Sie nicht umlegen.
              </li>
              <li>
                <strong>Neuen Grundsteuerbescheid einholen:</strong> Der aktuelle Bescheid
                der Finanzbehörde Hamburg zeigt den neuen Jahresbetrag.
              </li>
              <li>
                <strong>Anteilig verteilen:</strong> Bei mehreren Mietern wird die Grundsteuer
                anteilig nach Wohnfläche (oder dem im Mietvertrag vereinbarten Schlüssel) verteilt.
              </li>
              <li>
                <strong>In der Betriebskostenabrechnung ausweisen:</strong> Die Grundsteuer
                wird als eigene Position in der jährlichen Betriebskostenabrechnung aufgeführt.
              </li>
              <li>
                <strong>Vorauszahlungen anpassen:</strong> Wenn sich die Grundsteuer deutlich
                verändert hat, passen Sie die monatlichen Betriebskostenvorauszahlungen an.
              </li>
            </ol>

            <h2 className="text-2xl font-bold text-navy font-playfair mt-10 mb-4">
              Einspruch gegen den Grundsteuerbescheid
            </h2>
            <p>
              Wenn Sie als Vermieter den neuen Grundsteuerwertbescheid oder den
              Grundsteuermessbescheid für fehlerhaft halten, haben Sie die Möglichkeit,
              Einspruch einzulegen.
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Frist:</strong> 1 Monat nach Bekanntgabe des Bescheids</li>
              <li><strong>Zuständig:</strong> Das ausstellende Finanzamt</li>
              <li><strong>Form:</strong> Schriftlich oder zur Niederschrift beim Finanzamt</li>
              <li><strong>Begründung:</strong> Konkrete Fehler benennen (z.B. falsche Wohnfläche, falscher Bodenrichtwert)</li>
            </ul>

            <div className="bg-amber-50 border border-amber-200 rounded-xl p-4 my-4 text-sm">
              <strong>💡 Empfehlung:</strong> Viele Grundsteuerwertbescheide enthalten Fehler bei
              Wohnflächenangaben oder Nutzungsart. Ein Steuerberater oder Immobilienfachmann kann
              helfen, Fehler zu identifizieren und den Einspruch zu begründen.
            </div>

            <h2 className="text-2xl font-bold text-navy font-playfair mt-10 mb-4">
              Was Vermieter jetzt konkret tun sollten
            </h2>
            <div className="bg-white border border-gray-200 rounded-xl p-6 my-6">
              <ul className="space-y-3 not-prose">
                {[
                  "Neuen Grundsteuerbescheid 2025 mit dem alten Bescheid vergleichen",
                  "Bei erheblicher Abweichung: Einspruch prüfen (Frist 1 Monat)",
                  "Mietverträge auf Umlagevereinbarung prüfen",
                  "Betriebskostenvorauszahlungen ggf. anpassen",
                  "Neue Grundsteuer in die nächste Betriebskostenabrechnung einarbeiten",
                  "Bei Erhöhung: Mieter transparently informieren",
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

            {/* FAQ Section */}
            <h2 className="text-2xl font-bold text-navy font-playfair mt-10 mb-4">
              Häufig gestellte Fragen
            </h2>

            <div className="space-y-6 not-prose">
              <div className="bg-white border border-gray-200 rounded-xl p-5">
                <h3 className="font-semibold text-navy mb-2">Wann tritt die neue Grundsteuer in Hamburg in Kraft?</h3>
                <p className="text-gray-600 text-sm">
                  Die reformierte Grundsteuer gilt ab dem 1. Januar 2025. Die neuen Grundsteuerbescheide auf Basis der reformierten Bewertung werden ab 2025 von den Finanzämtern verschickt.
                </p>
              </div>

              <div className="bg-white border border-gray-200 rounded-xl p-5">
                <h3 className="font-semibold text-navy mb-2">Kann ich die Grundsteuer auf Mieter umlegen?</h3>
                <p className="text-gray-600 text-sm">
                  Ja, die Grundsteuer ist nach §2 Nr. 1 BetrKV eine umlagefähige Betriebskosten und kann im Rahmen der Nebenkostenabrechnung auf Mieter umgelegt werden, sofern dies im Mietvertrag vereinbart ist.
                </p>
              </div>

              <div className="bg-white border border-gray-200 rounded-xl p-5">
                <h3 className="font-semibold text-navy mb-2">Was ist der Hamburger Hebesatz für die Grundsteuer B 2025?</h3>
                <p className="text-gray-600 text-sm">
                  Hamburg hat den Hebesatz für die Grundsteuer B 2025 auf 975% festgesetzt. Dieser Hebesatz gilt für bebaute Grundstücke und Wohngebäude in Hamburg.
                </p>
              </div>

              <div className="bg-white border border-gray-200 rounded-xl p-5">
                <h3 className="font-semibold text-navy mb-2">Wie berechnet sich die Grundsteuer nach der Reform?</h3>
                <p className="text-gray-600 text-sm">
                  Die neue Grundsteuer berechnet sich aus: Grundsteuerwert × Steuermesszahl × Hebesatz. Hamburg nutzt das Bundesmodell mit angepassten Steuermesszahlen. Der Grundsteuerwert basiert auf aktualisierten Bodenrichtwerten und Gebäudewerten.
                </p>
              </div>

              <div className="bg-white border border-gray-200 rounded-xl p-5">
                <h3 className="font-semibold text-navy mb-2">Muss ich Mieter über die neue Grundsteuer informieren?</h3>
                <p className="text-gray-600 text-sm">
                  Eine gesetzliche Informationspflicht gibt es nicht, aber es ist empfehlenswert, Mieter proaktiv zu informieren, wenn sich die Grundsteuer erheblich verändert und dadurch die Betriebskosten-Vorauszahlungen angepasst werden müssen.
                </p>
              </div>
            </div>

            <h2 className="text-2xl font-bold text-navy font-playfair mt-10 mb-4">
              Fazit: Jetzt handeln, Überraschungen vermeiden
            </h2>
            <p>
              Die Grundsteuerreform 2025 betrifft alle Hamburger Immobilieneigentümer. Als
              Vermieter sollten Sie die neuen Bescheide prüfen, Fehler ggf. anfechten und
              Ihre Betriebskostenabrechnungen rechtzeitig anpassen. Die Grundsteuer bleibt
              umlagefähig — aber nur wenn Ihre Verträge und Abrechnungen korrekt aufgestellt sind.
            </p>
          </div>

          <div className="mt-12 bg-teal/10 border border-teal/20 rounded-xl p-8">
            <h3 className="text-xl font-bold text-navy mb-2 font-playfair">
              Lassen Sie einfach verwaltet.
            </h3>
            <p className="text-gray-600 mb-4">
              Ihre Immobilie professionell verwalten. Korrekte Betriebskostenabrechnungen
              inkl. Grundsteuer, transparente Kommunikation und kein Reformchaos mehr.
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
