import type { Metadata } from "next";
import Link from "next/link";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

export const metadata: Metadata = {
  title: "Mietspiegel Hamburg 2025: Aktuelle Mietpreise und was Vermieter wissen müssen",
  description:
    "Hamburger Mietspiegel 2023/2025 erklärt: Aktuelle Mietpreise nach Stadtteilen, §558c BGB, Mieterhöhung mit Mietspiegel, ortsübliche Vergleichsmiete — der komplette Leitfaden.",
  keywords:
    "Mietspiegel Hamburg 2025, Mietspiegel Hamburg 2023, Hamburger Mietspiegel, ortsübliche Vergleichsmiete Hamburg, Mieterhöhung Mietspiegel",
  openGraph: {
    title: "Mietspiegel Hamburg 2025: Aktuelle Mietpreise für Vermieter",
    description:
      "Wie nutzen Sie den Hamburger Mietspiegel für rechtssichere Mieterhöhungen? Alle Preise, Stadtteile und rechtlichen Grundlagen erklärt.",
    url: "https://einfach-verwaltet.de/blog/mietspiegel-hamburg-2025",
    siteName: "einfach verwaltet.",
    locale: "de_DE",
    type: "article",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Mietspiegel Hamburg 2025: Aktuelle Mietpreise und was Vermieter wissen müssen",
  description:
    "Der Hamburger Mietspiegel ist das wichtigste Instrument für Mieterhöhungen. Wir zeigen aktuelle Preise, Stadtteil-Vergleiche und die korrekte Anwendung nach §558c BGB.",
  author: { "@type": "Organization", name: "einfach verwaltet." },
  publisher: {
    "@type": "Organization",
    name: "einfach verwaltet.",
    logo: { "@type": "ImageObject", url: "https://einfach-verwaltet.de/logo.png" },
  },
  datePublished: "2026-02-26",
  inLanguage: "de",
  url: "https://einfach-verwaltet.de/blog/mietspiegel-hamburg-2025",
};

export default function Post() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Navbar />
      <main className="bg-warm-white min-h-screen pt-16">
        <article className="max-w-3xl mx-auto px-4 py-16">
          <nav className="text-sm text-gray-500 mb-8">
            <Link href="/" className="hover:text-teal">Startseite</Link>
            <span className="mx-2">›</span>
            <Link href="/blog" className="hover:text-teal">Ratgeber</Link>
            <span className="mx-2">›</span>
            <span className="text-gray-700">Mietspiegel Hamburg 2025</span>
          </nav>

          <header className="mb-10">
            <p className="text-teal text-sm font-semibold uppercase tracking-wider mb-3">
              Ratgeber · 9 min Lesezeit · Mietrecht
            </p>
            <h1 className="text-3xl md:text-4xl font-bold text-navy font-playfair mb-4 leading-tight">
              Mietspiegel Hamburg 2025: Aktuelle Mietpreise und was Vermieter wissen müssen
            </h1>
            <p className="text-gray-500 text-sm">Februar 2026 · einfach verwaltet.</p>
          </header>

          <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed space-y-6">
            <p>
              Der <strong>Hamburger Mietspiegel</strong> ist für Vermieter unverzichtbar: Er bildet 
              die Grundlage für rechtssichere Mieterhöhungen und zeigt, welche Mieten in welchen 
              Stadtteilen üblich sind. Doch wie funktioniert der Mietspiegel? Welche Preise sind 
              2025 aktuell? Und wie wenden Sie ihn korrekt an? Dieser Leitfaden gibt alle Antworten.
            </p>

            <div className="bg-teal/5 border-l-4 border-teal rounded-r-xl p-5 my-6">
              <p className="font-semibold text-navy mb-2">Wichtig zu wissen</p>
              <p className="text-sm">
                Der aktuelle Hamburger Mietspiegel wurde 2023 veröffentlicht und gilt bis zur 
                Veröffentlichung eines neuen Mietspiegels (voraussichtlich 2026). Wir sprechen 
                daher vom <strong>Mietspiegel Hamburg 2023/2025</strong>.
              </p>
            </div>

            <h2 className="text-2xl font-bold text-navy font-playfair mt-10 mb-4">
              Was ist der Hamburger Mietspiegel?
            </h2>
            <p>
              Der Hamburger Mietspiegel wird von der Stadt Hamburg in Zusammenarbeit mit 
              Mieter- und Vermieterverbänden erstellt. Er dokumentiert die <strong>ortsübliche 
              Vergleichsmiete</strong> für verschiedene Wohnungstypen in allen Hamburger Stadtteilen 
              und Quartieren.
            </p>
            <p>
              Der Mietspiegel ist nach <strong>§ 558c BGB</strong> anerkannt und dient als Grundlage 
              für Mieterhöhungen auf die ortsübliche Vergleichsmiete. Er unterscheidet nach:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Wohnfläche:</strong> Bis 40 m², 40-60 m², 60-80 m², 80-100 m², über 100 m²</li>
              <li><strong>Baualtersklasse:</strong> Vor 1948, 1949-1978, 1979-2002, ab 2003</li>
              <li><strong>Ausstattung:</strong> Einfach, mittel, gut</li>
              <li><strong>Stadtteil/Quartier:</strong> 104 Quartiere in 7 Bezirken</li>
            </ul>

            <h2 className="text-2xl font-bold text-navy font-playfair mt-10 mb-4">
              Aktuelle Mietpreise in Hamburg (Stand 2023/2025)
            </h2>
            <p>
              Die folgenden Durchschnittsmieten zeigen die Spanne der ortsüblichen Vergleichsmiete 
              für eine 60-80 m² Wohnung mittlerer Ausstattung. Die tatsächlichen Preise variieren 
              je nach Lage im Quartier, Gebäudezustand und Ausstattung.
            </p>

            <h3 className="text-xl font-semibold text-navy mt-6 mb-2">
              Mietpreise nach Hamburger Bezirken (€/m², kalt)
            </h3>
            <div className="not-prose overflow-x-auto my-6">
              <table className="w-full border-collapse text-sm">
                <thead>
                  <tr className="bg-navy text-white">
                    <th className="px-4 py-3 text-left rounded-tl-lg">Bezirk</th>
                    <th className="px-4 py-3 text-center">Spanne (€/m²)</th>
                    <th className="px-4 py-3 text-center">Beispiel-Stadtteile</th>
                    <th className="px-4 py-3 text-center rounded-tr-lg">Tendenz</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    ["Hamburg-Mitte", "12,00 - 18,50", "HafenCity, Neustadt", "↗ steigend"],
                    ["Altona", "11,50 - 17,00", "Ottensen, Blankenese", "→ stabil"],
                    ["Eimsbüttel", "10,50 - 15,00", "Eimsbüttel, Hoheluft", "→ stabil"],
                    ["Hamburg-Nord", "11,00 - 16,50", "Eppendorf, Winterhude", "→ stabil"],
                    ["Wandsbek", "9,00 - 13,50", "Wandsbek, Bramfeld", "↗ steigend"],
                    ["Bergedorf", "8,50 - 12,00", "Bergedorf, Billwerder", "→ stabil"],
                    ["Harburg", "8,00 - 12,50", "Harburg, Heimfeld", "↗ steigend"],
                  ].map(([bezirk, spanne, stadtteile, tendenz], i) => (
                    <tr key={bezirk} className={i % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                      <td className="px-4 py-3 font-medium text-navy border-b border-gray-100">{bezirk}</td>
                      <td className="px-4 py-3 text-center border-b border-gray-100">{spanne}</td>
                      <td className="px-4 py-3 text-center border-b border-gray-100 text-sm">{stadtteile}</td>
                      <td className="px-4 py-3 text-center border-b border-gray-100">{tendenz}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="text-sm text-gray-500 italic">
              Quelle: Hamburger Mietspiegel 2023, vereinfachte Darstellung. Aktuelle Preise können 
              je nach spezifischer Lage variieren.
            </p>

            <h3 className="text-xl font-semibold text-navy mt-6 mb-2">
              Spitzenmieten in Hamburger Top-Lagen
            </h3>
            <p>
              In den begehrtesten Lagen Hamburgs liegen die Mieten deutlich höher. Besonders 
              gefragt sind weiterhin:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>HafenCity:</strong> Bis zu 22 €/m² für Neubauwohnungen</li>
              <li><strong>Blankenese:</strong> 16-20 €/m² für Villenlage mit Elbblick</li>
              <li><strong>Eppendorf:</strong> 14-18 €/m² für Altbauten in Bestlage</li>
              <li><strong>Pöseldorf (Harvestehude):</strong> 15-19 €/m²</li>
              <li><strong>Ottensen:</strong> 13-17 €/m² für Gründerzeit-Altbauten</li>
            </ul>

            <h2 className="text-2xl font-bold text-navy font-playfair mt-10 mb-4">
              § 558c BGB: Der Mietspiegel als Begründung für Mieterhöhungen
            </h2>
            <p>
              Der Hamburger Mietspiegel ist ein <strong>qualifizierter Mietspiegel</strong> nach 
              § 558c BGB. Das bedeutet: Wenn Sie als Vermieter eine Mieterhöhung auf die ortsübliche 
              Vergleichsmiete verlangen, genügt der Verweis auf den Mietspiegel als Begründung.
            </p>

            <h3 className="text-xl font-semibold text-navy mt-6 mb-2">
              Voraussetzungen für Mieterhöhung nach Mietspiegel
            </h3>
            <div className="bg-white border border-gray-200 rounded-xl p-5 my-4">
              <ol className="space-y-3 not-prose">
                {[
                  "Die Wohnung ist mindestens 15 Monate seit Vertragsbeginn oder der letzten Mieterhöhung vermietet (Sperrfrist)",
                  "Die neue Miete darf die ortsübliche Vergleichsmiete nicht überschreiten",
                  "Die Mieterhöhung darf maximal 15% innerhalb von 6 Jahren betragen (Kappungsgrenze)",
                  "Formale Anforderungen: Schriftliche Erklärung mit Begründung und Zustimmungsfrist",
                ].map((item, i) => (
                  <li key={i} className="flex gap-4 items-start">
                    <div className="w-6 h-6 bg-navy text-white rounded-full flex items-center justify-center flex-shrink-0 text-sm font-bold">{i + 1}</div>
                    <span className="text-sm text-gray-700">{item}</span>
                  </li>
                ))}
              </ol>
            </div>

            <div className="bg-amber-50 border border-amber-200 rounded-xl p-4 my-4 text-sm">
              <strong>⚠️ Wichtig:</strong> Der Mietspiegel zeigt Durchschnittswerte. Bei einer 
              Mieterhöhung müssen Sie die <strong>konkrete Vergleichswohnung</strong> im Mietspiegel 
              zuordnen können (Baualtersklasse, Wohnfläche, Ausstattung). Bei Abweichungen muss 
              der Mietspiegelwert angepasst werden.
            </div>

            <h2 className="text-2xl font-bold text-navy font-playfair mt-10 mb-4">
              Ortsübliche Vergleichsmiete richtig ermitteln
            </h2>
            <p>
              Die <strong>ortsübliche Vergleichsmiete</strong> ist nicht einfach der Durchschnitt 
              aller Mieten in Hamburg. Sie bezeichnet die Miete, die für eine vergleichbare Wohnung 
              in vergleichbarer Lage und Ausstattung in den letzten vier Jahren vereinbart wurde.
            </p>

            <h3 className="text-xl font-semibold text-navy mt-6 mb-2">
              Vergleichbarkeitsmerkmale nach § 558 Abs. 2 BGB
            </h3>
            <div className="grid md:grid-cols-2 gap-4 my-6 not-prose">
              {[
                { title: "Art der Wohnung", text: "Zimmerzahl, Wohnfläche, Wohnungstyp" },
                { title: "Lage", text: "Stadtteil, Quartier, infrastrukturelle Anbindung" },
                { title: "Ausstattung", text: "Bad, Heizung, Balkon/Terrasse, EBK, Lift" },
                { title: "Gebäudezustand", text: "Baujahr, energetischer Zustand, Denkmalschutz" },
              ].map((item) => (
                <div key={item.title} className="bg-white border border-gray-100 rounded-xl p-4">
                  <div className="font-semibold text-navy mb-1">{item.title}</div>
                  <p className="text-sm text-gray-600">{item.text}</p>
                </div>
              ))}
            </div>

            <h3 className="text-xl font-semibold text-navy mt-6 mb-2">
              Wann liegt die ortsübliche Vergleichsmiete vor?
            </h3>
            <p>
              Ihre aktuelle Kaltmiete liegt im Bereich der ortsüblichen Vergleichsmiete, wenn sie 
              innerhalb der im Mietspiegel ausgewiesenen Spanne liegt. Die Spanne reicht typischerweise 
              vom unteren Quartil (25. Perzentil) bis zum oberen Quartil (75. Perzentil).
            </p>
            <p>
              Beispiel: Der Mietspiegel zeigt für Ihre Wohnung eine Spanne von 10,50 €/m² bis 
              13,50 €/m². Ihre aktuelle Miete von 11,20 €/m² liegt im unteren Bereich — hier ist 
              eine Mieterhöhung möglich.
            </p>

            <h2 className="text-2xl font-bold text-navy font-playfair mt-10 mb-4">
              Mietspiegel bereinigen: Sondermerkmale berücksichtigen
            </h2>
            <p>
              Nicht jede Wohnung entspricht exakt den Mietspiegel-Kategorien. Für Abweichungen gibt 
              es <strong>Merkmalsminderungen und -mehrungen</strong>, die den Mietspiegelwert anpassen.
            </p>

            <h3 className="text-xl font-semibold text-navy mt-6 mb-2">
              Typische Minderungen (Miete niedriger als Mietspiegel)
            </h3>
            <ul className="list-disc pl-6 space-y-2">
              <li>Eingeschränkte Wohnfläche (Dachschrägen unter 1 m Höhe)</li>
              <li>Schlechte Lage im Gebäude (Souterrain, Straßenlärm)</li>
              <li>Fehlende Ausstattung (kein Bad im Wohnungsinneren, kein Lift ab 4. OG)</li>
              <li>Baubedingte Beeinträchtigungen (Lärmbelästigung, Sichtschutz)</li>
            </ul>

            <h3 className="text-xl font-semibold text-navy mt-6 mb-2">
              Typische Mehrungen (Miete höher als Mietspiegel)
            </h3>
            <ul className="list-disc pl-6 space-y-2">
              <li>Besondere Ausstattung (EBK, hochwertiges Bad, Balkon/Terrasse)</li>
              <li>Renoviert/Saniert (neue Fenster, Boden, Bad)</li>
              <li>Exklusive Lage (Gartenmitbenutzung, besonders ruhig)</li>
              <li>Barrierereduziert (ebenerdig, breite Türen)</li>
            </ul>

            <h2 className="text-2xl font-bold text-navy font-playfair mt-10 mb-4">
              Stadtteil-Check: Wo mieten in Hamburg am teuersten?
            </h2>
            <p>
              Hamburgs Mietpreise variieren stark zwischen den Bezirken. Hier eine Übersicht der 
              durchschnittlichen Kaltmieten für eine 70 m²-Wohnung mittlerer Ausstattung:
            </p>

            <div className="not-prose overflow-x-auto my-6">
              <table className="w-full border-collapse text-sm">
                <thead>
                  <tr className="bg-navy text-white">
                    <th className="px-4 py-3 text-left rounded-tl-lg">Stadtteil</th>
                    <th className="px-4 py-3 text-center">Kaltmiete (70 m²)</th>
                    <th className="px-4 py-3 text-center">Preisniveau</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    ["HafenCity", "ca. 1.400 €", "Sehr hoch 🔴"],
                    ["Eppendorf", "ca. 1.120 €", "Sehr hoch 🔴"],
                    ["Harvestehude", "ca. 1.050 €", "Sehr hoch 🔴"],
                    ["Blankenese", "ca. 1.050 €", "Sehr hoch 🔴"],
                    ["Ottensen", "ca. 980 €", "Hoch 🟠"],
                    ["Winterhude", "ca. 945 €", "Hoch 🟠"],
                    ["Uhlenhorst", "ca. 910 €", "Hoch 🟠"],
                    ["Eimsbüttel", "ca. 840 €", "Mittel 🟡"],
                    ["Wandsbek", "ca. 770 €", "Mittel 🟡"],
                    ["Bergedorf", "ca. 700 €", "Mittel 🟡"],
                    ["Harburg", "ca. 700 €", "Mittel 🟡"],
                  ].map(([stadtteil, miete, niveau], i) => (
                    <tr key={stadtteil} className={i % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                      <td className="px-4 py-3 font-medium text-navy border-b border-gray-100">{stadtteil}</td>
                      <td className="px-4 py-3 text-center border-b border-gray-100">{miete}</td>
                      <td className="px-4 py-3 text-center border-b border-gray-100">{niveau}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="text-sm text-gray-500 italic">
              Schätzwerte basierend auf Hamburger Mietspiegel 2023. Tatsächliche Preise variieren 
              je nach konkreter Lage und Ausstattung.
            </p>

            <h2 className="text-2xl font-bold text-navy font-playfair mt-10 mb-4">
              Fazit: Mietspiegel als Vermieter effektiv nutzen
            </h2>
            <p>
              Der Hamburger Mietspiegel ist ein mächtiges Instrument für Vermieter — wenn Sie ihn 
              richtig anwenden. Achten Sie auf die korrekte Zuordnung Ihrer Wohnung, berücksichtigen 
              Sie Sondermerkmale und beachten Sie die rechtlichen Rahmenbedingungen (Sperrfrist, 
              Kappungsgrenze).
            </p>
            <p>
              Wer regelmäßig prüft, ob die eigene Miete noch im Markt liegt, kann durch 
              rechtssichere Mieterhöhungen den Ertrag der Immobilie optimieren. Die meisten 
              Hamburger Vermieter können ihre Mieten deutlich steigern — ohne ihre Mieter zu 
              überfordern.
            </p>
          </div>

          <div className="mt-12 bg-teal/10 border border-teal/20 rounded-xl p-8">
            <h3 className="text-xl font-bold text-navy mb-2 font-playfair">
              Mieterhöhungen professionell umsetzen
            </h3>
            <p className="text-gray-600 mb-4">
              einfach verwaltet. prüft für Sie den Mietspiegel, berechnet die maximal mögliche 
              Mieterhöhung und setzt diese rechtssicher um — inklusive korrekter Begründung 
              und Fristenmanagement.
            </p>
            <Link
              href="/mieterhohung-hamburg-2026"
              className="inline-block bg-teal text-white font-semibold px-6 py-3 rounded-lg hover:bg-teal/90 transition-colors mr-4"
            >
              Mehr zu Mieterhöhungen
            </Link>
            <Link
              href="/anfrage"
              className="inline-block bg-navy text-white font-semibold px-6 py-3 rounded-lg hover:bg-navy/90 transition-colors"
            >
              Jetzt anfragen
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
