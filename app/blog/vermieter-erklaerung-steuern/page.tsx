import type { Metadata } from "next";
import Link from "next/link";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

export const metadata: Metadata = {
  title: "Steuererklärung als Vermieter: Was kann man absetzen? (2025/2026) | einfach verwaltet.",
  description:
    "Steuererklärung als Vermieter 2025/2026: Welche Kosten sind absetzbar? Werbungskosten, AfA, Erhaltungsaufwand, Finanzierungskosten, Hausverwaltungsgebühren — der vollständige Leitfaden.",
  keywords:
    "Steuererklärung Vermieter, Vermieter Steuern absetzen, Werbungskosten Vermieter, AfA Immobilie, Hausverwaltung absetzen Steuer, Erhaltungsaufwand Vermieter",
  openGraph: {
    title: "Steuererklärung als Vermieter: Was kann man absetzen? (2025/2026)",
    description:
      "Der komplette Steuerratgeber für Vermieter: Alle absetzbaren Kosten, AfA-Sätze und Tipps zur Steueroptimierung 2025/2026.",
    url: "https://einfach-verwaltet.de/blog/vermieter-erklaerung-steuern",
    siteName: "einfach verwaltet.",
    locale: "de_DE",
    type: "article",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Steuererklärung als Vermieter: Was kann man absetzen? (2025/2026)",
  description:
    "Vollständiger Ratgeber zu Werbungskosten, AfA und Steuerabzügen für Vermieter nach §21 EStG.",
  author: { "@type": "Organization", name: "einfach verwaltet." },
  publisher: {
    "@type": "Organization",
    name: "einfach verwaltet.",
    logo: { "@type": "ImageObject", url: "https://einfach-verwaltet.de/logo.png" },
  },
  datePublished: "2026-02-27",
  inLanguage: "de",
  url: "https://einfach-verwaltet.de/blog/vermieter-erklaerung-steuern",
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Welche Kosten kann ein Vermieter von der Steuer absetzen?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Als Vermieter können Sie eine Vielzahl von Werbungskosten nach §21 EStG absetzen: Hausverwaltungsgebühren, Instandhaltungs- und Reparaturkosten, Gebäudeabschreibung (AfA), Finanzierungszinsen, Grundsteuer, Versicherungsprämien, Maklergebühren bei Mietersuche, Rechtsanwaltskosten, Fahrtkosten zur Immobilie und Werbungskosten für Bürobedarf und Telefon.",
      },
    },
    {
      "@type": "Question",
      name: "Wie hoch ist die AfA (Abschreibung) für Immobilien 2025/2026?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Für Wohngebäude gilt nach §7 Abs. 4 EStG: Neubauten (Baugenehmigung ab 1. Oktober 2023): 3% p.a. linear. Gebäude mit Baugenehmigung vor dem 1. Januar 1925: 2,5% p.a. Alle anderen Gebäude: 2% p.a. Bei Denkmalschutz-Immobilien oder Sanierungsgebieten können erhöhte AfA-Sätze von bis zu 9% (Eigennutzung) bzw. 7% (Fremdvermietung) gelten.",
      },
    },
    {
      "@type": "Question",
      name: "Kann man Hausverwaltungsgebühren steuerlich absetzen?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Ja, Hausverwaltungsgebühren sind als Werbungskosten nach §21 EStG vollständig absetzbar. Dies gilt für alle Kosten der Miet- und WEG-Verwaltung — einschließlich Verwalterpauschale, Mietervermittlungsgebühren und Nebenkostenabrechnungskosten. Die Kosten mindern direkt die steuerpflichtigen Einnahmen aus Vermietung und Verpachtung.",
      },
    },
    {
      "@type": "Question",
      name: "Was ist der Unterschied zwischen Erhaltungsaufwand und Herstellungskosten?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Erhaltungsaufwand (Reparaturen, die den Zustand erhalten) ist im Jahr der Zahlung voll absetzbar. Herstellungskosten (Maßnahmen, die den Gebäudestandard wesentlich erhöhen, wie ein neues Stockwerk oder völlige Kernsanierung) müssen über die AfA abgeschrieben werden. Anschaffungsnaher Erhaltungsaufwand (über 15% der Anschaffungskosten in 3 Jahren nach Kauf) wird als Herstellungskosten behandelt.",
      },
    },
    {
      "@type": "Question",
      name: "Können Vermieter Fahrtkosten zur Mietimmobilie absetzen?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Ja. Fahrten zur Mietimmobilie — für Besichtigungen, Übergaben, Kontrollen — können als Werbungskosten geltend gemacht werden. Die steuerliche Pauschale beträgt 0,30 Euro pro Kilometer (einfache Fahrt). Bei mehr als 20 km Entfernung steigt sie auf 0,38 Euro/km für jeden weiteren Kilometer (ab 2024).",
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
          <nav className="text-sm text-gray-500 mb-8">
            <Link href="/" className="hover:text-teal">Startseite</Link>
            <span className="mx-2">›</span>
            <Link href="/blog" className="hover:text-teal">Ratgeber</Link>
            <span className="mx-2">›</span>
            <span className="text-gray-700">Steuererklärung als Vermieter</span>
          </nav>

          <header className="mb-10">
            <p className="text-teal text-sm font-semibold uppercase tracking-wider mb-3">
              Ratgeber · 11 min Lesezeit
            </p>
            <h1 className="text-3xl md:text-4xl font-bold text-navy font-playfair mb-4 leading-tight">
              Steuererklärung als Vermieter: Was kann man absetzen? (2025/2026)
            </h1>
            <p className="text-gray-500 text-sm">Februar 2026 · einfach verwaltet.</p>
          </header>

          <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed space-y-6">
            <p className="text-lg font-medium text-gray-800 leading-relaxed">
              Als Vermieter zahlen Sie Steuern auf Mieteinnahmen — aber Sie können zahlreiche 
              Kosten steuerlich absetzen und so Ihre Steuerlast erheblich reduzieren. 
              Dieser Ratgeber gibt Ihnen einen vollständigen Überblick über alle 
              Werbungskosten, Abschreibungsmöglichkeiten und steuerlichen Vorteile.
            </p>

            <h2 className="text-2xl font-bold text-navy font-playfair mt-10 mb-4">
              Grundlage: Vermietung und Verpachtung nach §21 EStG
            </h2>
            <p>
              Mieteinnahmen unterliegen der Einkommensteuer als <strong>Einkünfte aus Vermietung 
              und Verpachtung</strong> nach §21 EStG. Steuerpflichtig ist aber nicht die Bruttomiete, 
              sondern der <em>Überschuss</em> — also Mieteinnahmen minus aller abzugsfähigen Werbungskosten. 
              Wer seine Abzugsmöglichkeiten kennt und nutzt, zahlt deutlich weniger Steuern.
            </p>
            <p>
              Die Steuererklärung erfolgt über die <strong>Anlage V</strong> (Vermietung und Verpachtung) 
              in der Einkommensteuererklärung. Jede Immobilie erhält dabei eine eigene Aufstellung.
            </p>

            <h2 className="text-2xl font-bold text-navy font-playfair mt-10 mb-4">
              1. Werbungskosten: Was ist alles absetzbar?
            </h2>
            <p>
              Werbungskosten sind alle Ausgaben, die im direkten Zusammenhang mit der Vermietungstätigkeit 
              stehen. Hier die wichtigsten Kategorien:
            </p>

            <h3 className="text-xl font-bold text-navy font-playfair mt-8 mb-3">
              Hausverwaltungskosten
            </h3>
            <p>
              <strong>Vollständig absetzbar.</strong> Alle Kosten für die professionelle Verwaltung 
              Ihrer Immobilie sind Werbungskosten — die monatliche Verwalterpauschale, 
              Kosten für Nebenkostenabrechnungen, Mietervermittlungsprovisionen, 
              Beschlussprotokoll-Erstellung und ähnliche Leistungen. 
              Bei einem professionellen Verwalter mit €25/Einheit/Monat und 3 Einheiten 
              sind das €900/Jahr — sofort und vollständig absetzbar.
            </p>

            <h3 className="text-xl font-bold text-navy font-playfair mt-8 mb-3">
              Instandhaltungs- und Reparaturkosten (Erhaltungsaufwand)
            </h3>
            <p>
              Reparaturen, die bestehende Einrichtungen erhalten (defekte Heizung reparieren, 
              Fenster abdichten, Sanitäranlage instandsetzen), sind im Jahr der Zahlung als 
              Werbungskosten vollständig absetzbar. Das unterscheidet sie von 
              Herstellungskosten (s.u.).
            </p>
            <p>
              <strong>Achtung: Anschaffungsnaher Erhaltungsaufwand!</strong> Wenn Sie in den 
              ersten 3 Jahren nach dem Kauf mehr als 15% des Kaufpreises des Gebäudes für 
              Renovierungen ausgeben, werden diese Kosten steuerlich als Herstellungskosten 
              behandelt und müssen über die AfA abgeschrieben werden (§6 Abs. 1 Nr. 1a EStG).
            </p>

            <h3 className="text-xl font-bold text-navy font-playfair mt-8 mb-3">
              Finanzierungskosten
            </h3>
            <p>
              Zinsen für Darlehen, die für den Kauf, Bau oder Umbau der vermieteten 
              Immobilie aufgenommen wurden, sind vollständig absetzbar. Achtung: 
              Die Tilgungsanteile sind <em>nicht</em> absetzbar — nur die Zinsen. 
              Bereitstellungszinsen und Bearbeitungsgebühren können ebenfalls 
              als Werbungskosten geltend gemacht werden.
            </p>

            <div className="bg-navy/5 rounded-xl p-6 border border-navy/10 my-6">
              <h3 className="text-lg font-bold text-navy mb-4">Absetzbare Werbungskosten im Überblick</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-2 text-sm">
                {[
                  "Hausverwaltungsgebühren",
                  "Grundsteuer",
                  "Gebäudeversicherung (Anteil)",
                  "Haftpflichtversicherung",
                  "Finanzierungszinsen",
                  "Instandhaltung und Reparaturen",
                  "Reinigungskosten Gemeinschaftsflächen",
                  "Maklergebühren für Mietersuche",
                  "Rechtsanwalts- und Steuerberaterkosten",
                  "Fahrtkosten zur Immobilie",
                  "Bürobedarf (anteilig)",
                  "Kontoführungsgebühren",
                  "Telefon- und Internetkosten (anteilig)",
                  "Hausmeisterkosten",
                  "Schneeschutz und Winterdienst",
                  "Müllabfuhr (nicht umlagefähiger Anteil)",
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-2 py-1">
                    <span className="text-teal">✓</span>
                    <span className="text-gray-700">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <h2 className="text-2xl font-bold text-navy font-playfair mt-10 mb-4">
              2. AfA — Abschreibung für Abnutzung (Gebäude)
            </h2>
            <p>
              Die <strong>AfA (Absetzung für Abnutzung)</strong> nach §7 Abs. 4 EStG erlaubt es, 
              den Gebäudewert über die Nutzungsdauer steuerlich abzuschreiben. 
              Dabei gilt ein wichtiges Prinzip: Nur das <em>Gebäude</em> wird abgeschrieben, 
              nicht der Grundstücksanteil (der altert nicht).
            </p>

            <div className="bg-navy/5 rounded-xl p-6 border border-navy/10 my-6">
              <h3 className="text-lg font-bold text-navy mb-4">AfA-Sätze 2025/2026</h3>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between py-2 border-b border-navy/10">
                  <span>Neubauten (Baugenehmigung ab 1. Oktober 2023)</span>
                  <span className="font-semibold text-navy">3% p.a. (§7 Abs. 4 Nr. 1 EStG)</span>
                </div>
                <div className="flex justify-between py-2 border-b border-navy/10">
                  <span>Gebäude mit Baugenehmigung vor 1925</span>
                  <span className="font-semibold text-navy">2,5% p.a.</span>
                </div>
                <div className="flex justify-between py-2 border-b border-navy/10">
                  <span>Alle anderen Gebäude</span>
                  <span className="font-semibold text-navy">2% p.a. (→ 50 Jahre)</span>
                </div>
                <div className="flex justify-between py-2">
                  <span>Denkmalschutz (§7i EStG, Fremdvermietung)</span>
                  <span className="font-semibold text-navy">9% p.a. (8 Jahre) + 7% (4 Jahre)</span>
                </div>
              </div>
            </div>

            <p>
              <strong>Praxisbeispiel:</strong> Sie kaufen eine Wohnung für €300.000. 
              Der Grundstücksanteil beträgt €60.000, das Gebäude €240.000. 
              Bei 2% AfA können Sie jedes Jahr €4.800 abschreiben — über 50 Jahre.
            </p>

            <h2 className="text-2xl font-bold text-navy font-playfair mt-10 mb-4">
              3. Modernisierungskosten: Sofort absetzbar oder AfA?
            </h2>
            <p>
              Hier liegt die häufigste Fehlerquelle in der Steuererklärung von Vermietern:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700">
              <li>
                <strong>Sofort absetzbar (Erhaltungsaufwand):</strong> Reparaturen und Modernisierungen, 
                die den bestehenden Zustand erhalten oder wiederherstellen — auch wenn dabei 
                neue Materialien oder bessere Techniken verwendet werden. 
                Beispiel: Alter Heizkörper durch modernere ersetzt, gleiche Funktion.
              </li>
              <li>
                <strong>AfA-pflichtig (Herstellungskosten):</strong> Maßnahmen, die den 
                Wohnstandard wesentlich erhöhen, neue Wohnfläche schaffen oder die Wesensart 
                des Gebäudes verändern. Beispiel: Dachausbau mit neuem Stockwerk, Anbau, 
                Vollkernsanierung (alle 3 Kernbereiche Heizung, Fenster, Dach erneuert).
              </li>
            </ul>

            <h2 className="text-2xl font-bold text-navy font-playfair mt-10 mb-4">
              4. Steuerfreie Mieteinnahmen: Gibt es Ausnahmen?
            </h2>
            <p>
              In einigen Sonderfällen bleiben Mieteinnahmen steuerfrei:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700">
              <li>
                <strong>Vermietung unter 520 Euro/Jahr:</strong> Wer pro Jahr weniger als 
                520 Euro Mieteinnahmen erzielt, muss diese grundsätzlich nicht versteuern 
                (Freigrenze, nicht Freibetrag).
              </li>
              <li>
                <strong>Eigengenutzte Ferienwohnung:</strong> Wenn Sie Ihre Ferienwohnung 
                zeitweise selbst nutzen, können nur die anteiligen Kosten für 
                Vermietungszeiten abgesetzt werden — aber auch die Einnahmen 
                aus der Vermietung sind nur anteilig steuerpflichtig.
              </li>
            </ul>

            <div className="bg-teal/10 border border-teal/20 rounded-xl p-6 my-8">
              <p className="font-semibold text-navy mb-2">Steuern sparen mit professioneller Verwaltung</p>
              <p className="text-gray-700 text-sm mb-4">
                Hausverwaltungsgebühren sind als Werbungskosten vollständig absetzbar — 
                das bedeutet: Je nach Steuersatz kostet Sie eine professionelle Verwaltung 
                netto deutlich weniger als der Bruttopreis. Sprechen Sie mit Ihrem Steuerberater.
              </p>
              <Link
                href="/anfrage"
                className="inline-block bg-teal text-white px-6 py-3 rounded-xl font-semibold hover:bg-teal/85 transition-all"
              >
                Kostenlos beraten lassen →
              </Link>
            </div>

            <h2 className="text-2xl font-bold text-navy font-playfair mt-10 mb-4">
              Häufige Fragen: Steuererklärung für Vermieter
            </h2>

            <div className="space-y-4">
              {[
                {
                  q: "Welche Kosten kann ein Vermieter von der Steuer absetzen?",
                  a: "Als Vermieter können Sie Hausverwaltungsgebühren, Instandhaltungskosten, Gebäudeabschreibung (AfA), Finanzierungszinsen, Grundsteuer, Versicherungsprämien, Maklergebühren, Rechtsanwaltskosten und Fahrtkosten als Werbungskosten nach §21 EStG geltend machen.",
                },
                {
                  q: "Wie hoch ist die AfA für Immobilien 2025/2026?",
                  a: "Für Neubauten (Baugenehmigung ab Oktober 2023) gilt 3% p.a. Für ältere Gebäude gilt 2% p.a. (50 Jahre Nutzungsdauer). Für Gebäude vor 1925 gilt 2,5% p.a. Denkmalschutzimmobilien bieten bis zu 9% erhöhte AfA.",
                },
                {
                  q: "Kann man Hausverwaltungsgebühren steuerlich absetzen?",
                  a: "Ja, Hausverwaltungsgebühren sind als Werbungskosten nach §21 EStG vollständig absetzbar. Sie mindern direkt die steuerpflichtigen Einnahmen aus Vermietung und Verpachtung.",
                },
                {
                  q: "Was ist der Unterschied zwischen Erhaltungsaufwand und Herstellungskosten?",
                  a: "Erhaltungsaufwand (Reparaturen) ist sofort abzugsfähig. Herstellungskosten (werterhöhende Maßnahmen) müssen über die AfA abgeschrieben werden. Anschaffungsnaher Erhaltungsaufwand (>15% der Anschaffungskosten in 3 Jahren) gilt steuerlich als Herstellungskosten.",
                },
                {
                  q: "Können Vermieter Fahrtkosten zur Mietimmobilie absetzen?",
                  a: "Ja. Fahrten zur Mietimmobilie für Besichtigungen, Übergaben und Kontrollen können mit 0,30 Euro/km (einfache Fahrt, erste 20 km) und 0,38 Euro/km (ab 21 km) als Werbungskosten geltend gemacht werden.",
                },
              ].map((item, i) => (
                <div key={i} className="bg-white rounded-xl p-6 border border-gray-100">
                  <h3 className="font-bold text-navy mb-2">{item.q}</h3>
                  <p className="text-text-light text-sm leading-relaxed">{item.a}</p>
                </div>
              ))}
            </div>

            <div className="mt-10 pt-8 border-t border-gray-200">
              <p className="text-sm text-gray-500 mb-3">Weitere Ratgeber:</p>
              <div className="flex flex-wrap gap-3">
                <Link href="/blog/vermieter-steuern-optimieren" className="text-teal text-sm hover:underline">
                  Vermieter Steuern optimieren →
                </Link>
                <Link href="/blog/immobilien-vermieten-steuern" className="text-teal text-sm hover:underline">
                  Immobilien vermieten: Steuerinfo →
                </Link>
                <Link href="/blog/mietrecht-aenderungen-2026" className="text-teal text-sm hover:underline">
                  Mietrecht 2026: Änderungen →
                </Link>
              </div>
            </div>
          </div>
        </article>
      </main>
      <Footer />
    </>
  );
}
