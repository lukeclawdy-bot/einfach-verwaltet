import type { Metadata } from "next";
import Link from "next/link";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

export const metadata: Metadata = {
  title: "Immobilien vermieten und Steuern: Was Vermieter 2025 wissen müssen",
  description:
    "Steuern für Vermieter 2025: §21 EStG, Werbungskosten, Hausverwaltungsgebühren steuerlich absetzbar, AfA, Verluste und Spekulationssteuer nach §23 EStG erklärt.",
  keywords:
    "Immobilien vermieten Steuern, Vermieter Steuer 2025, Werbungskosten Vermieter, Hausverwaltung steuerlich absetzbar, AfA Immobilien",
  openGraph: {
    title: "Immobilien vermieten und Steuern: Was Vermieter 2025 wissen müssen",
    description:
      "Steuertipps für Vermieter: Was ist absetzbar? Wie funktioniert die AfA? Alle Steueraspekte der Vermietung erklärt.",
    url: "https://einfach-verwaltet.de/blog/immobilien-vermieten-steuern",
    siteName: "einfach verwaltet.",
    locale: "de_DE",
    type: "article",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Immobilien vermieten und Steuern: Was Vermieter 2025 wissen müssen",
  description:
    "Der komplette Steuerleitfaden für Vermieter: Einkünfte aus Vermietung, Werbungskosten, AfA und Spekulationssteuer erklärt.",
  author: { "@type": "Organization", name: "einfach verwaltet." },
  publisher: {
    "@type": "Organization",
    name: "einfach verwaltet.",
    logo: { "@type": "ImageObject", url: "https://einfach-verwaltet.de/logo.png" },
  },
  datePublished: "2026-02-26",
  inLanguage: "de",
  url: "https://einfach-verwaltet.de/blog/immobilien-vermieten-steuern",
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
            <span className="text-gray-700">Immobilien vermieten Steuern</span>
          </nav>

          <header className="mb-10">
            <p className="text-teal text-sm font-semibold uppercase tracking-wider mb-3">
              Ratgeber · 10 min Lesezeit · Steuern
            </p>
            <h1 className="text-3xl md:text-4xl font-bold text-navy font-playfair mb-4 leading-tight">
              Immobilien vermieten und Steuern: Was Vermieter 2025 wissen müssen
            </h1>
            <p className="text-gray-500 text-sm">Februar 2026 · einfach verwaltet.</p>
          </header>

          <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed space-y-6">
            <p>
              Wer Immobilien vermietet, muss die Mieteinnahmen versteuern — aber auch zahlreiche 
              Kosten absetzen. Die <strong>steuerliche Optimierung</strong> ist für Vermieter oft 
              wichtiger als die Miethöhe selbst. Doch was ist absetzbar? Wie funktioniert die 
              Abschreibung? Und was gilt bei Verlusten? Dieser Leitfaden bringt Licht ins Steuer-Dunkel.
            </p>

            <div className="bg-teal/5 border-l-4 border-teal rounded-r-xl p-5 my-6">
              <p className="font-semibold text-navy mb-2">Wichtige Erkenntnis</p>
              <p className="text-sm">
                <strong>Hausverwaltungsgebühren sind zu 100% steuerlich absetzbar</strong> als 
                Werbungskosten. Das bedeutet: Die Kosten für eine professionelle Hausverwaltung 
                reduzieren sich effektiv um Ihren persönlichen Steuersatz. Bei einem Spitzensteuersatz 
                von 42% zahlen Sie effektiv nur noch knapp 60% der Verwaltungskosten selbst.
              </p>
            </div>

            <h2 className="text-2xl font-bold text-navy font-playfair mt-10 mb-4">
              Einkünfte aus Vermietung und Verpachtung (§ 21 EStG)
            </h2>
            <p>
              Mieteinnahmen zählen zu den <strong>Einkünften aus Vermietung und Verpachtung</strong> 
              nach § 21 EStG. Sie sind im Kalenderjahr der Zuflüsse steuerpflichtig — also wenn 
              die Miete auf Ihrem Konto eingeht.
            </p>

            <h3 className="text-xl font-semibold text-navy mt-6 mb-2">
              Was zählt zu den Einnahmen?
            </h3>
            <ul className="list-disc pl-6 space-y-2">
              <li>Alle laufenden Mietzahlungen (Kaltmiete)</li>
              <li>Nebenkostenvorauszahlungen (werden später mit den tatsächlichen Kosten verrechnet)</li>
              <li>Mietkautionen (nur bei Einbehalt, nicht bei Treuhand)</li>
              <li>Sonstige Zahlungen des Mieters (z.B. für Kleinreparaturen)</li>
            </ul>

            <h3 className="text-xl font-semibold text-navy mt-6 mb-2">
              Steuerliche Besonderheiten
            </h3>
            <div className="grid md:grid-cols-2 gap-4 my-6 not-prose">
              {[
                { title: "Progressionsvorbehalt", text: "Mieteinnahmen erhöhen Ihr zu versteuerndes Einkommen und können den Steuersatz auf andere Einkünfte erhöhen" },
                { title: "Grundfreibetrag", text: "Nur Einkommen über dem Grundfreibetrag (2025: €11.784 Single, €23.568 Verheiratete) wird versteuert" },
                { title: "Werbungskosten", text: "Alle Kosten zur Erlangung, Sicherung und Erhaltung der Einnahmen sind absetzbar" },
                { title: "Verlustverrechnung", text: "Negative Einkünfte können mit anderen positiven Einkünften verrechnet werden" },
              ].map((item) => (
                <div key={item.title} className="bg-white border border-gray-100 rounded-xl p-4">
                  <div className="font-semibold text-navy mb-1">{item.title}</div>
                  <p className="text-sm text-gray-600">{item.text}</p>
                </div>
              ))}
            </div>

            <h2 className="text-2xl font-bold text-navy font-playfair mt-10 mb-4">
              Werbungskosten: Was Vermieter absetzen können
            </h2>
            <p>
              <strong>Werbungskosten</strong> sind Aufwendungen zur Erlangung, Sicherung und 
              Erhaltung der Einnahmen. Für Vermieter gibt es eine lange Liste absetzbarer Kosten — 
              die korrekte Erfassung ist entscheidend für die Steuerersparnis.
            </p>

            <h3 className="text-xl font-semibold text-navy mt-6 mb-2">
              Voll absetzbare Kosten (laufend)
            </h3>
            <div className="bg-white border border-gray-200 rounded-xl p-5 my-4">
              <ul className="space-y-2 not-prose">
                {[
                  "Hausverwaltungsgebühren (100% absetzbar!)",
                  "Grundsteuer",
                  "Gebäudeversicherung (Feuer, Elementar, Haftpflicht)",
                  "Rechtsanwaltskosten für Mietverhältnis",
                  "Reparaturen und Instandhaltungen",
                  "Grundstückspflege (Garten, Winterdienst)",
                  "Müllgebühren und Entwässerung",
                  "Schornsteinfeger",
                  "Bankgebühren für Mietkonto",
                  "Fahrtkosten zur Immobilie",
                  "Telefon- und Portoaufwendungen",
                  "Büromaterial für Verwaltung",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm">
                    <svg className="w-4 h-4 text-teal flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-amber-50 border border-amber-200 rounded-xl p-4 my-4 text-sm">
              <strong>💡 Steuertipp:</strong> <strong>Hausverwaltungsgebühren sind vollständig 
              als Werbungskosten absetzbar.</strong> Bei einem Steuersatz von 42% reduziert sich 
              Ihre effektive Belastung erheblich. Eine professionelle Hausverwaltung kostet 
              effektiv oft nur noch die Hälfte des Bruttopreises.
            </div>

            <h3 className="text-xl font-semibold text-navy mt-6 mb-2">
              Absetzbare Finanzierungskosten
            </h3>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Zinsen für Fremdkapital:</strong> Voll absetzbar für Baudarlehen, Anschlussfinanzierung</li>
              <li><strong>Tilgung:</strong> Nicht absetzbar, aber erhöht den Anteil der AfA später</li>
              <li><strong>Bearbeitungsgebühren:</strong> Sofort absetzbar oder über Laufzeit verteilbar</li>
              <li><strong>Grundschuldeintragungsgebühren:</strong> Absetzbar bei Neuvermietung</li>
            </ul>

            <h2 className="text-2xl font-bold text-navy font-playfair mt-10 mb-4">
              AfA: Abschreibung auf das Gebäude
            </h2>
            <p>
              Die <strong>Absetzung für Abnutzung (AfA)</strong> ist ein zentrales Instrument 
              für Vermieter. Sie erlaubt es, die Anschaffungskosten des Gebäudes über viele Jahre 
              steuerlich geltend zu machen — auch wenn Sie die Immobilie bar gekauft haben.
            </p>

            <h3 className="text-xl font-semibold text-navy mt-6 mb-2">
              AfA-Sätze für Wohngebäude
            </h3>
            <div className="not-prose overflow-x-auto my-6">
              <table className="w-full border-collapse text-sm">
                <thead>
                  <tr className="bg-navy text-white">
                    <th className="px-4 py-3 text-left rounded-tl-lg">Gebäudetyp</th>
                    <th className="px-4 py-3 text-center">AfA-Satz</th>
                    <th className="px-4 py-3 text-center">AfA-Dauer</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    ["Wohngebäude vor 1925 (Alt-AfA)", "2,5%", "40 Jahre"],
                    ["Wohngebäude 1925-2003 (neue AfA)", "2,0%", "50 Jahre"],
                    ["Wohngebäude ab 2004 (neue AfA)", "2,0%", "50 Jahre"],
                    ["Außenanlagen", "4,0%", "25 Jahre"],
                  ].map(([typ, satz, dauer], i) => (
                    <tr key={typ} className={i % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                      <td className="px-4 py-3 font-medium text-navy border-b border-gray-100">{typ}</td>
                      <td className="px-4 py-3 text-center border-b border-gray-100 font-semibold text-teal">{satz}</td>
                      <td className="px-4 py-3 text-center border-b border-gray-100">{dauer}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <h3 className="text-xl font-semibold text-navy mt-6 mb-2">
              Was wird abgeschrieben?
            </h3>
            <p>
              Nicht der gesamte Kaufpreis ist absetzbar. Der <strong>Grundstückswert</strong> 
              muss herausgerechnet werden — er wird nicht abgeschrieben. Nur der reine 
              <strong> Gebäudewert</strong> (Herstellungskosten) kann abgeschrieben werden.
            </p>

            <h3 className="text-xl font-semibold text-navy mt-6 mb-2">
              Beispielrechnung AfA
            </h3>
            <div className="bg-white border border-gray-200 rounded-xl p-5 my-4">
              <p className="text-sm text-gray-700 mb-3">
                <strong>Annahme:</strong> Kaufpreis €400.000, davon Grundstück 20% = €80.000
              </p>
              <ul className="space-y-2 not-prose text-sm">
                <li>• Abschreibungsfähiger Gebäudewert: €320.000</li>
                <li>• AfA-Satz: 2,0% (Gebäude von 1990)</li>
                <li>• <strong>Jährliche AfA: €6.400</strong></li>
                <li>• Bei 42% Steuersatz: Steuerersparnis ca. <strong>€2.688/Jahr</strong></li>
              </ul>
            </div>

            <h2 className="text-2xl font-bold text-navy font-playfair mt-10 mb-4">
              Steuerklärung für Vermieter: Was gehört wohin?
            </h2>
            <p>
              Vermieter müssen ihre Einkünfte aus Vermietung in der <strong>Anlage V</strong> 
              der Einkommensteuererklärung angeben. Hier werden alle Einnahmen und Werbungskosten 
              gegengerechnet.
            </p>

            <h3 className="text-xl font-semibold text-navy mt-6 mb-2">
              Unterlagen für die Steuererklärung
            </h3>
            <div className="bg-white border border-gray-200 rounded-xl p-5 my-4">
              <ul className="space-y-2 not-prose">
                {[
                  "Mietvertrag und alle Nebenabreden",
                  "Kontoauszüge der Mietsicherheiten",
                  "Nebenkostenabrechnungen (Eigentümer und Mieter)",
                  "Alle Rechnungen für Werbungskosten (Hausverwaltung, Reparaturen, Versicherungen)",
                  "Finanzierungsunterlagen (Zinsbescheinigung der Bank)",
                  "AfA-Berechnung (Kaufvertrag mit Aufteilung Grundstück/Gebäude)",
                  "Fahrtenbuch oder Entfernungspauschale",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm">
                    <svg className="w-4 h-4 text-teal flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <h2 className="text-2xl font-bold text-navy font-playfair mt-10 mb-4">
              Verluste aus der Vermietung
            </h2>
            <p>
              Nicht selten entstehen in den ersten Jahren nach dem Kauf <strong>Verluste aus 
              der Vermietung</strong> — wenn die Zinsen und AfA höher sind als die Mieteinnahmen. 
              Diese Verluste können mit anderen positiven Einkünften verrechnet werden.
            </p>

            <h3 className="text-xl font-semibold text-navy mt-6 mb-2">
              Verlustverrechnung nach § 21 EStG
            </h3>
            <ul className="list-disc pl-6 space-y-2">
              <li>Negative Einkünfte aus Vermietung mindern das Gesamteinkommen</li>
              <li>Verluste können mit positiven Einkünften aus Lohn, Gewerbe oder Kapital verrechnet werden</li>
              <li>Verlustvortrag in Folgejahre möglich (bei nicht ausgereichten positiven Einkünften)</li>
              <li>Keine Verlustverrechnungsbeschränkung für gewerbliche Vermieter</li>
            </ul>

            <div className="bg-amber-50 border border-amber-200 rounded-xl p-4 my-4 text-sm">
              <strong>💡 Steuertipp:</strong> Hohe Zinszahlungen in den ersten Jahren führen oft 
              zu steuerlichen Verlusten. Diese reduzieren Ihre Steuerlast bei anderen Einkünften 
              und können zu erheblichen Steuererstattungen führen.
            </div>

            <h2 className="text-2xl font-bold text-navy font-playfair mt-10 mb-4">
              Spekulationssteuer bei Verkauf (§ 23 EStG)
            </h2>
            <p>
              Wer eine vermietete Immobilie verkauft, muss möglicherweise <strong>Spekulationssteuer</strong> 
              zahlen. Die Regelung des § 23 EStG greift bei bestimmten Haltefristen und Gewinnen.
            </p>

            <h3 className="text-xl font-semibold text-navy mt-6 mb-2">
              Spekulationsfrist für Immobilien
            </h3>
            <p>
              Bei Immobilien gilt eine <strong>Haltefrist von 10 Jahren</strong>. Wird die Immobilie 
              innerhalb von 10 Jahren nach Anschaffung oder Fertigstellung veräußert, unterliegt 
              der Gewinn der Spekulationsbesteuerung.
            </p>

            <h3 className="text-xl font-semibold text-navy mt-6 mb-2">
              Steuerfreier Verkauf nach 10 Jahren
            </h3>
            <p>
              Nach Ablauf der 10-jährigen Haltefrist ist der Verkaufgewinn <strong>steuerfrei</strong>, 
              unabhängig von der Höhe des Gewinns. Dies gilt auch für private Veräußerungsgeschäfte.
            </p>

            <h3 className="text-xl font-semibold text-navy mt-6 mb-2">
              Berechnung der Spekulationssteuer
            </h3>
            <div className="bg-white border border-gray-200 rounded-xl p-5 my-4">
              <p className="text-sm font-semibold text-navy mb-2">Formel:</p>
              <p className="text-sm text-gray-700">
                Veräußerungspreis<br />
                - Anschaffungskosten<br />
                - Anschaffungsnebenkosten<br />
                - Werbungskosten (Makler, Notar)<br />
                - Herstellungskosten (Sanierungen)<br />
                <strong>= Spekulationsgewinn</strong>
              </p>
            </div>
            <p>
              Der Spekulationsgewinn wird mit Ihrem <strong>persönlichen Steuersatz</strong> versteuert 
              (inkl. Solidaritätszuschlag und ggf. Kirchensteuer). Es gibt keinen Freibetrag für 
              Immobilien — im Gegensatz zu anderen Wirtschaftsgütern.
            </p>

            <h2 className="text-2xl font-bold text-navy font-playfair mt-10 mb-4">
              Steuerliche Optimierung für Vermieter
            </h2>
            <p>
              Mit der richtigen Strategie können Vermieter ihre Steuerlast erheblich reduzieren. 
              Hier sind die wichtigsten Hebel:
            </p>

            <h3 className="text-xl font-semibold text-navy mt-6 mb-2">
              Steuertipps für Vermieter
            </h3>
            <div className="grid md:grid-cols-2 gap-4 my-6 not-prose">
              {[
                { title: "Sofortabschreibung", text: "Geringwertige Wirtschaftsgüter bis €1.500 sofort abschreiben (Schränke, Lampen, etc.)" },
                { title: "Sanierungskosten", text: "Moderne Sanierungen mit hoher AfA (Energiesparende Maßnahmen bis 2026 mit erhöhten Sätzen)" },
                { title: "Fahrtenbuch", text: "Werden zum Objekt fahren (Kontrolle, Übergabe), Fahrtkosten als Werbungskosten geltend machen" },
                { title: "Arbeitszimmer", text: "Dediziertes Büro für Verwaltung mit AfA oder Pauschale absetzen" },
                { title: "Modernisierungsumlage", text: "11% der Modernisierungskosten können umgelegt werden (§ 559 BGB)" },
                { title: "Hausverwaltung", text: "Professionelle Verwaltung ist voll absetzbar und schafft transparente Dokumentation" },
              ].map((item) => (
                <div key={item.title} className="bg-teal/5 border border-teal/20 rounded-xl p-4">
                  <div className="font-semibold text-navy mb-1">{item.title}</div>
                  <p className="text-sm text-gray-600">{item.text}</p>
                </div>
              ))}
            </div>

            <h2 className="text-2xl font-bold text-navy font-playfair mt-10 mb-4">
              Fazit: Steuerliche Optimierung ist Pflicht
            </h2>
            <p>
              Wer Immobilien vermietet, muss Steuern zahlen — aber auch jede Möglichkeit zur 
              Steuerersparnis nutzen. Die <strong>AfA</strong>, <strong>Werbungskosten</strong> 
              und die <strong>Verlustverrechnung</strong> sind mächtige Instrumente, die Ihre 
              effektive Steuerlast erheblich senken können.
            </p>
            <p>
              Besonders die Entscheidung für eine <strong>professionelle Hausverwaltung</strong> 
              zahlt sich doppelt aus: Sie entlasten sich organisatorisch UND reduzieren durch 
              die volle Absetzbarkeit der Kosten Ihre Steuerlast. Transparente Abrechnungen 
              erleichtern zudem die Steuererklärung erheblich.
            </p>
          </div>

          <div className="mt-12 bg-teal/10 border border-teal/20 rounded-xl p-8">
            <h3 className="text-xl font-bold text-navy mb-2 font-playfair">
              Steueroptimierte Hausverwaltung
            </h3>
            <p className="text-gray-600 mb-4">
              einfach verwaltet. bietet transparente Abrechnungen und Dokumentation, die Ihre 
              Steuererklärung erheblich vereinfachen. Alle Verwaltungsgebühren sind voll 
              steuerlich absetzbar — bei transparentem Preismodell leicht nachweisbar.
            </p>
            <Link
              href="/preise"
              className="inline-block bg-teal text-white font-semibold px-6 py-3 rounded-lg hover:bg-teal/90 transition-colors mr-4"
            >
              Transparente Preise
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
