import type { Metadata } from "next";
import Link from "next/link";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

export const metadata: Metadata = {
  title: "Mietminderungstabelle: Welche Mängel berechtigen zur Mietminderung? | einfach verwaltet.",
  description:
    "Mietminderungstabelle 2026: Welche Mängel berechtigen zur Mietminderung und um wie viel Prozent? Heizungsausfall, Schimmel, Wasserschaden, Lärm und mehr — mit typischen Minderungsquoten.",
  keywords:
    "Mietminderungstabelle, Mietminderung Prozent, Heizungsausfall Mietminderung, Schimmel Mietminderung, Mietminderung Tabelle 2026, Mängel Mietminderung",
  openGraph: {
    title: "Mietminderungstabelle: Welche Mängel berechtigen zur Mietminderung?",
    description:
      "Umfassende Tabelle der Mietminderungsquoten: Schimmel, Heizungsausfall, Wasserschaden, Lärm — Minderungsquoten und rechtliche Grundlagen.",
    url: "https://einfach-verwaltet.de/blog/mietminderung-tabelle",
    siteName: "einfach verwaltet.",
    locale: "de_DE",
    type: "article",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Mietminderungstabelle: Welche Mängel berechtigen zur Mietminderung?",
  description:
    "Ratgeber und Tabelle zu Mietminderungsquoten: typische Minderungsquoten bei Heizungsausfall, Schimmel, Wasserschaden und anderen Mängeln.",
  author: { "@type": "Organization", name: "einfach verwaltet." },
  publisher: {
    "@type": "Organization",
    name: "einfach verwaltet.",
    logo: { "@type": "ImageObject", url: "https://einfach-verwaltet.de/logo.png" },
  },
  datePublished: "2026-02-27",
  inLanguage: "de",
  url: "https://einfach-verwaltet.de/blog/mietminderung-tabelle",
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Wann hat ein Mieter das Recht auf Mietminderung?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Nach §536 BGB hat ein Mieter das Recht auf Mietminderung, wenn die Wohnung einen Mangel aufweist, der ihre Tauglichkeit zum vertragsgemäßen Gebrauch erheblich mindert. Voraussetzungen: Der Mangel muss bei Mietbeginn noch nicht bekannt gewesen sein, der Vermieter muss in Kenntnis gesetzt worden sein (Mängelanzeige), und der Mangel muss nicht durch den Mieter selbst verursacht worden sein.",
      },
    },
    {
      "@type": "Question",
      name: "Wie hoch ist die Mietminderung bei Heizungsausfall?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Bei Heizungsausfall im Winter sind Mietminderungen von 10% bis 100% je nach Schwere möglich. Ein vollständiger Heizungsausfall im Winter rechtfertigt nach Rechtsprechung typischerweise 10–20% Mietminderung, in extremen Fällen (Totalausfall mehrere Tage bei Frost) bis zu 100% der Miete für die betroffenen Tage.",
      },
    },
    {
      "@type": "Question",
      name: "Was muss ein Mieter tun, bevor er die Miete mindert?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Der Mieter muss zunächst den Mangel schriftlich beim Vermieter anzeigen (Mängelanzeige) und dem Vermieter eine angemessene Frist zur Beseitigung setzen. Erst nach erfolglosem Ablauf dieser Frist ist eine Mietminderung rechtlich gesichert. Eine sofortige Minderung ohne vorherige Anzeige kann als Zahlungsverzug gewertet werden.",
      },
    },
    {
      "@type": "Question",
      name: "Wie schützt ein Vermieter sich vor Mietminderungen?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Vermieter schützen sich durch: schnelle Reaktion auf Mängelanzeigen, professionelle Instandhaltungsplanung, regelmäßige Gebäudeinspektionen und ein verlässliches Handwerkernetzwerk. Eine professionelle Hausverwaltung erkennt Mängel frühzeitig und behebt sie, bevor sie zu Mietminderungstatbeständen werden.",
      },
    },
  ],
};

const minderungsTabelle = [
  {
    mangel: "Heizungsausfall (komplett, Winter)",
    quote: "10–100%",
    hinweis: "Je nach Dauer und Jahreszeit; 100% für betroffene Tage bei Totalausfall im Winter",
  },
  {
    mangel: "Heizungsausfall (partiell)",
    quote: "5–15%",
    hinweis: "Wenn Heizung unter 18°C tagsüber",
  },
  {
    mangel: "Schimmel (großflächig, Wohnraum)",
    quote: "20–80%",
    hinweis: "Abhängig von Ausmaß und betroffenen Räumen; BGH bestätigt bis 80% bei schwerem Befall",
  },
  {
    mangel: "Schimmel (kleinflächig, Bad/Keller)",
    quote: "5–15%",
    hinweis: "Kleinere Befallsstellen in Nebenräumen",
  },
  {
    mangel: "Wasserschaden (aktiver Wassereintritt)",
    quote: "10–50%",
    hinweis: "Bei Nässeschäden, die Wohnräume beeinträchtigen",
  },
  {
    mangel: "Defekte Fenster (Undichtigkeit, kein Schließen)",
    quote: "5–10%",
    hinweis: "Pro betroffenes Fenster; höher bei mehreren Zimmern",
  },
  {
    mangel: "Lärm (Baulärm, Nachbarlärm)",
    quote: "10–30%",
    hinweis: "BGH: 10% bei erheblichem Baulärm tagsüber; höher bei Nachtlärm",
  },
  {
    mangel: "Fehlende oder defekte Klingel/Sprechanlage",
    quote: "3–5%",
    hinweis: "Geringer Wohnwertabzug, aber trotzdem als Mangel anerkannt",
  },
  {
    mangel: "Defekter Aufzug (mehrstöckiges Gebäude)",
    quote: "5–10%",
    hinweis: "Besonders bei Personen mit Gehbehinderung kann die Quote höher sein",
  },
  {
    mangel: "Schädlingsbefall (Ratten, Kakerlaken)",
    quote: "50–100%",
    hinweis: "Schwerer Befall macht Wohnung unzumutbar; BGH bestätigt bis 100%",
  },
  {
    mangel: "Ausfall Warmwasser (komplett)",
    quote: "10–15%",
    hinweis: "Pro Tag des Ausfalls; dauerhafter Ausfall rechtfertigt höhere Quoten",
  },
  {
    mangel: "Defektes oder fehlendes Kochfeld",
    quote: "10–20%",
    hinweis: "Wenn Kochfeld Bestandteil des Mietverhältnisses ist",
  },
  {
    mangel: "Unbenutzbarkeit eines Raumes (Wasserschaden/Schimmel)",
    quote: "Anteilig nach Raumgröße",
    hinweis: "z.B. 4-Zimmer-Wohnung, 1 Zimmer betroffen = ca. 25% Minderung",
  },
  {
    mangel: "Eingeschränkter Zugang zur Wohnung (Baustelle, Gerüst)",
    quote: "5–10%",
    hinweis: "Bei Gerüst mit erheblicher Verdunkelung bis 20%",
  },
  {
    mangel: "Fehlende Keller- oder Abstellfläche (vertraglich vereinbart)",
    quote: "3–8%",
    hinweis: "Wenn im Mietvertrag ausdrücklich vereinbart",
  },
];

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
            <span className="text-gray-700">Mietminderungstabelle</span>
          </nav>

          <header className="mb-10">
            <p className="text-teal text-sm font-semibold uppercase tracking-wider mb-3">
              Ratgeber · 9 min Lesezeit
            </p>
            <h1 className="text-3xl md:text-4xl font-bold text-navy font-playfair mb-4 leading-tight">
              Mietminderungstabelle: Welche Mängel berechtigen zur Mietminderung?
            </h1>
            <p className="text-gray-500 text-sm">Februar 2026 · einfach verwaltet.</p>
          </header>

          <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed space-y-6">
            <p className="text-lg font-medium text-gray-800 leading-relaxed">
              Mietminderung ist ein häufiger Streitpunkt zwischen Mietern und Vermietern. 
              Für Vermieter ist es entscheidend zu wissen, bei welchen Mängeln Mieter 
              die Miete kürzen dürfen — und wie hoch die typischen Minderungsquoten sind. 
              Nur wer informiert ist, kann präventiv handeln und teure Auseinandersetzungen vermeiden.
            </p>

            <h2 className="text-2xl font-bold text-navy font-playfair mt-10 mb-4">
              Grundlage: §536 BGB — Mietminderung bei Mängeln
            </h2>
            <p>
              Nach <strong>§536 BGB</strong> ist die Miete kraft Gesetzes (also automatisch, 
              ohne dass der Mieter dies erklären muss) gemindert, wenn die Mietsache 
              einen Mangel hat, der ihre Tauglichkeit zum vertragsgemäßen Gebrauch 
              erheblich mindert. Es gibt <em>keine</em> Pflicht für den Mieter, 
              vor Gericht zu gehen oder den Vermieter zuerst zu verklagen — 
              die Minderung tritt rechtlich direkt ein.
            </p>
            <p>
              <strong>Voraussetzungen für die Mietminderung:</strong>
            </p>
            <ol className="list-decimal pl-6 space-y-2 text-gray-700">
              <li>Es liegt ein Mangel vor, der die Gebrauchstauglichkeit erheblich mindert</li>
              <li>Der Mangel war bei Vertragsschluss nicht bekannt (§536b BGB)</li>
              <li>Der Mieter hat den Mangel angezeigt (Mängelanzeige an den Vermieter)</li>
              <li>Der Mieter hat den Mangel nicht selbst verursacht</li>
            </ol>

            <h2 className="text-2xl font-bold text-navy font-playfair mt-10 mb-4">
              Mietminderungstabelle: Typische Quoten nach Mangel
            </h2>
            <p className="text-sm text-gray-500 italic">
              Hinweis: Die Quoten basieren auf Gerichtsentscheidungen und Rechtsprechungsübersichten. 
              Im Einzelfall kann die tatsächliche Minderungsquote abweichen. 
              Diese Tabelle ersetzt keine Rechtsberatung.
            </p>

            <div className="my-6 overflow-x-auto">
              <table className="w-full text-sm border-collapse">
                <thead>
                  <tr className="bg-navy text-white">
                    <th className="text-left p-3 font-semibold">Mangel</th>
                    <th className="text-left p-3 font-semibold">Typische Quote</th>
                    <th className="text-left p-3 font-semibold hidden md:table-cell">Hinweis</th>
                  </tr>
                </thead>
                <tbody>
                  {minderungsTabelle.map((row, i) => (
                    <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-navy/5"}>
                      <td className="p-3 font-medium text-navy">{row.mangel}</td>
                      <td className="p-3 font-semibold text-teal whitespace-nowrap">{row.quote}</td>
                      <td className="p-3 text-gray-600 hidden md:table-cell">{row.hinweis}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <h2 className="text-2xl font-bold text-navy font-playfair mt-10 mb-4">
              Die wichtigsten Mängel im Detail
            </h2>

            <h3 className="text-xl font-bold text-navy font-playfair mt-8 mb-3">
              Heizungsausfall
            </h3>
            <p>
              Ein Heizungsausfall ist einer der häufigsten Gründe für Mietminderungen — 
              besonders in den Wintermonaten. Die zulässige Raumtemperatur liegt 
              nach allgemeiner Rechtsprechung bei <strong>mindestens 20–22°C tagsüber</strong> 
              und 18°C nachts. Fällt die Heizung komplett aus, können Mieter die Miete 
              für die betroffene Zeit erheblich mindern.
            </p>
            <p>
              <strong>Für Vermieter:</strong> Schnelle Reaktion ist Pflicht und Schutz zugleich. 
              Wer einen Notfallservice hat und den Ausfall innerhalb von 24–48 Stunden behebt, 
              begrenzt das Minderungsrisiko erheblich.
            </p>

            <h3 className="text-xl font-bold text-navy font-playfair mt-8 mb-3">
              Schimmel
            </h3>
            <p>
              Schimmel ist ein komplexes Thema: In vielen Fällen streiten Vermieter und Mieter, 
              ob der Schimmel durch bauliche Mängel (Vermieterverantwortung) oder falsches 
              Lüftungsverhalten des Mieters (Mieterverantwortung) entstanden ist.
            </p>
            <p>
              Die Rechtsprechung hat Schimmel an Außenwänden häufig als baulichen Mangel 
              eingestuft, der den Vermieter zur Abhilfe verpflichtet. Bei großflächigem 
              Schimmel in Wohnräumen sind Mietminderungen von 20–80% anerkannt worden.
            </p>

            <h3 className="text-xl font-bold text-navy font-playfair mt-8 mb-3">
              Wasserschaden
            </h3>
            <p>
              Ein aktiver Wassereintritt — sei es durch ein defektes Dach, eine geplante 
              Wasserleitung oder eine Havarie — berechtigt zur Mietminderung. Die Quote 
              richtet sich nach dem Umfang der Beeinträchtigung. 
              Ist ein ganzer Raum unbenutzbar, kann die Minderung dem Raumanteil 
              an der Gesamtfläche entsprechen.
            </p>

            <h3 className="text-xl font-bold text-navy font-playfair mt-8 mb-3">
              Lärm und Immissionen
            </h3>
            <p>
              Lärm aus dem Gebäude (z.B. durch andere Mieter) fällt grundsätzlich in die 
              Verantwortung des Vermieters. Baulärm durch öffentliche Baustellen in der 
              Nachbarschaft ist dagegen schwieriger — der BGH hat 2019 entschieden, 
              dass der Vermieter für behördlich genehmigten Baulärm in der Nachbarschaft 
              grundsätzlich nicht haftbar ist (BGH, 29.04.2020, VIII ZR 31/18). 
              Bei Baulärm durch eigene Sanierungsarbeiten des Vermieters hingegen 
              sind 10–20% Mietminderung anerkannt.
            </p>

            <h2 className="text-2xl font-bold text-navy font-playfair mt-10 mb-4">
              Als Vermieter vorbeugen — mit professioneller Hausverwaltung
            </h2>
            <p>
              Mietminderungen entstehen fast immer aus unbehandelten Mängeln. 
              Wer präventiv handelt, schützt sein Mietverhältnis und vermeidet Streit:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700">
              <li>
                <strong>Regelmäßige Gebäudeinspektionen</strong> — Mängel erkennen, 
                bevor der Mieter sie meldet
              </li>
              <li>
                <strong>Schnelle Reaktion auf Mängelanzeigen</strong> — je schneller 
                die Beseitigung, desto geringer die Minderungsdauer
              </li>
              <li>
                <strong>Dokumentation aller Reparaturen</strong> — schützt im Streitfall
              </li>
              <li>
                <strong>Verlässliches Handwerkernetzwerk</strong> — für schnelle 
                Notfallreparaturen, besonders bei Heizung und Wasser
              </li>
            </ul>

            <div className="bg-teal/10 border border-teal/20 rounded-xl p-6 my-8">
              <p className="font-semibold text-navy mb-2">
                Als Vermieter vorbeugen — mit professioneller Hausverwaltung
              </p>
              <p className="text-gray-700 text-sm mb-4">
                Eine professionelle Hausverwaltung erkennt Mängel frühzeitig, 
                koordiniert schnelle Reparaturen und dokumentiert alles rechtssicher. 
                So vermeiden Sie Mietminderungen und schützen Ihre Mieteinnahmen.
              </p>
              <Link
                href="/anfrage"
                className="inline-block bg-teal text-white px-6 py-3 rounded-xl font-semibold hover:bg-teal/85 transition-all"
              >
                Jetzt Angebot anfordern →
              </Link>
            </div>

            <h2 className="text-2xl font-bold text-navy font-playfair mt-10 mb-4">
              Häufige Fragen zur Mietminderung
            </h2>

            <div className="space-y-4">
              {[
                {
                  q: "Wann hat ein Mieter das Recht auf Mietminderung?",
                  a: "Nach §536 BGB hat ein Mieter das Recht auf Mietminderung, wenn die Wohnung einen Mangel aufweist, der ihre Tauglichkeit erheblich mindert. Der Vermieter muss informiert worden sein, und der Mieter darf den Mangel nicht selbst verursacht haben.",
                },
                {
                  q: "Wie hoch ist die Mietminderung bei Heizungsausfall?",
                  a: "Bei vollständigem Heizungsausfall im Winter sind Mietminderungen von 10–100% je nach Dauer möglich. Bei Totalausfall über mehrere Tage bei Frosttemperaturen sind bis zu 100% der Tagesmiete anerkannt.",
                },
                {
                  q: "Was muss ein Mieter tun, bevor er die Miete mindert?",
                  a: "Der Mieter muss den Mangel schriftlich beim Vermieter anzeigen und eine angemessene Frist zur Beseitigung setzen. Erst nach erfolglosem Fristablauf ist eine Mietminderung rechtssicher.",
                },
                {
                  q: "Wie schützt ein Vermieter sich vor Mietminderungen?",
                  a: "Durch schnelle Reaktion auf Mängelanzeigen, regelmäßige Inspektionen, ein verlässliches Handwerkernetzwerk und professionelle Verwaltung. Je schneller Mängel beseitigt werden, desto kürzer die Minderungsdauer.",
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
                <Link href="/blog/mietminderung-voraussetzungen" className="text-teal text-sm hover:underline">
                  Mietminderung: Voraussetzungen →
                </Link>
                <Link href="/blog/wasserschaden-mietrecht-rechte-pflichten" className="text-teal text-sm hover:underline">
                  Wasserschaden: Rechte und Pflichten →
                </Link>
                <Link href="/blog/vermieter-pflichten-heizung" className="text-teal text-sm hover:underline">
                  Vermieter Pflichten: Heizung →
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
