import type { Metadata } from "next";
import Link from "next/link";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

export const metadata: Metadata = {
  title: "Mietminderung: Voraussetzungen, Berechnung und haufige Fehler | einfach verwaltet.",
  description:
    "Mietminderung nach SS 536 BGB: Voraussetzungen, Berechnungstabellen, haufige Fehler beim Mindern und Rechte von Vermieter und Mieter.",
  keywords:
    "Mietminderung Voraussetzungen, Mietminderung berechnen, SS 536 BGB, Mietminderung Hochstbetrag, Mietminderung Fehler",
  openGraph: {
    title: "Mietminderung: Voraussetzungen, Berechnung und haufige Fehler",
    description:
      "Alles uber Mietminderung: Voraussetzungen, Berechnungstabellen, haufige Fehler und wie Vermieter reagieren.",
    url: "https://einfach-verwaltet.de/blog/mietminderung-voraussetzungen",
    siteName: "einfach verwaltet.",
    locale: "de_DE",
    type: "article",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Mietminderung: Voraussetzungen, Berechnung und haufige Fehler",
  description:
    "Kompletter Leitfaden zur Mietminderung: Voraussetzungen nach SS 536 BGB, Berechnungstabellen, haufige Fehler.",
  author: { "@type": "Organization", name: "einfach verwaltet." },
  publisher: {
    "@type": "Organization",
    name: "einfach verwaltet.",
    logo: { "@type": "ImageObject", url: "https://einfach-verwaltet.de/logo.png" },
  },
  datePublished: "2026-02-27",
  inLanguage: "de",
  url: "https://einfach-verwaltet.de/blog/mietminderung-voraussetzungen",
};

const faqLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Wann darf ich als Mieter die Miete mindern?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Nach SS 536 BGB kann der Mieter die Miete mindern, wenn die Mietsache einen Mangel aufweist, der deren Tauglichkeit zur vertragsgemassen Nutzung aufhebt oder mindert. Voraussetzung ist: 1) Ein Mangel liegt vor, 2) Der Mangel ist nicht vom Mieter zu vertreten, 3) Der Mangel wurde dem Vermieter rechtzeitig angezeigt (Mangelanzeige), 4) Der Vermieter hatte angemessene Zeit zur Beseitigung.",
      },
    },
    {
      "@type": "Question",
      name: "Wie hoch darf die Mietminderung sein?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Die Mietminderung richtet sich nach dem Grad der Beeintrachtigung. Bei leichten Mangeln: 5-10%, mittelschweren Mangeln: 10-20%, schweren Mangeln: 20-100%. Die Minderung darf 100% der Miete nicht uberschreiten. Bei Totalunbrauchbarkeit kann in extremen Fallen 100% gemindert werden.",
      },
    },
    {
      "@type": "Question",
      name: "Muss ich als Mieter die Minderung ankundigen?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Ja, der Mieter muss vor der Mietminderung den Mangel dem Vermieter anzeigen und ihm eine angemessene Frist zur Beseitigung setzen. Erst nach fruchtlosem Ablauf dieser Frist darf gemindert werden. Bei Gefahr im Verzug entfallt die Wartefrist. Die Minderung sollte schriftlich erklart werden.",
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
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }}
      />
      <Navbar />
      <main className="bg-warm-white min-h-screen pt-16">
        <article className="max-w-3xl mx-auto px-4 py-16">
          <nav className="text-sm text-gray-500 mb-8">
            <Link href="/" className="hover:text-teal">Startseite</Link>
            <span className="mx-2">/</span>
            <Link href="/blog" className="hover:text-teal">Ratgeber</Link>
            <span className="mx-2">/</span>
            <span className="text-gray-700">Mietminderung Voraussetzungen</span>
          </nav>

          <header className="mb-10">
            <p className="text-teal text-sm font-semibold uppercase tracking-wider mb-3">
              Ratgeber · 9 min Lesezeit · Mieter & Vermieter
            </p>
            <h1 className="text-3xl md:text-4xl font-bold text-navy font-playfair mb-4 leading-tight">
              Mietminderung: Voraussetzungen, Berechnung und haufige Fehler
            </h1>
            <p className="text-gray-500 text-sm">Februar 2026 · einfach verwaltet.</p>
          </header>

          <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed space-y-6">
            <p>
              Mietminderung ist ein machtiges Instrument des Mieters -- aber auch haufig Gegenstand von Streitigkeiten. 
              Oft werden Minderungen zu hoch oder zu fruhtig angesetzt. Dieser Artikel erklart die rechtlichen 
              Voraussetzungen, zeigt, wie Hochstsatze berechnet werden, und weist auf typische Fehler hin.
            </p>

            <h2 className="text-2xl font-bold text-navy font-playfair mt-10 mb-4">
              Die rechtliche Grundlage: SS 536 BGB
            </h2>
            <p>
              Nach <strong>SS 536 Abs. 1 BGB</strong> kann der Mieter die Miete mindern, wenn die Mietsache 
              einen Mangel aufweist, der deren <strong>Tauglichkeit zur vertragsgemassen Nutzung aufhebt oder mindert</strong>. 
              Die Minderung erfolgt in dem Verhaltnis, in dem der Wert der mangelhaften Sache zu dem einer mangelfreien 
              Sache steht.
            </p>
            <p>
              Der Mieter hat dabei die Wahl: Er kann die Miete mindern oder Schadensersatz statt der Leistung verlangen. 
              Die Minderung ist jedoch das einfachere Instrument und wird daher haufiger genutzt.
            </p>

            <h2 className="text-2xl font-bold text-navy font-playfair mt-10 mb-4">
              Voraussetzungen fur eine wirksame Mietminderung
            </h2>
            <p>
              Eine Mietminderung muss bestimmte Voraussetzungen erfullen, um rechtssicher zu sein. Fehlt auch nur eine, 
              kann der Vermieter die Minderung erfolgreich anfechten.
            </p>

            <h3 className="text-xl font-semibold text-navy mt-6 mb-2">1. Mangel liegt vor</h3>
            <p>
              Ein Mangel ist jede Abweichung vom vereinbarten oder gewohnlichen Zustand. Dazu gehoren:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Bauliche Mangel: Feuchtigkeit, Schimmel, undichte Fenster, Dachschaden</li>
              <li>Funktionelle Mangel: Defekte Heizung, ausgefallene Elektrik, blockierte Sanitaranlagen</li>
              <li>Geruchsbeeintrachtigungen: Abwassergestank, Schimmelgeruch, Rauchschaden</li>
              <li>Larmbelastigung: Verkehrslarm uber dem ortsublichen Ma, Baularm</li>
            </ul>

            <h3 className="text-xl font-semibold text-navy mt-6 mb-2">2. Mangelanzeige an den Vermieter</h3>
            <p>
              Der Mieter muss den Mangel dem Vermieter <strong>unverzuglich anzeigen</strong> (SS 536c BGB). 
              Bei unterlassener Anzeige haftet der Mieter fur den entstandenen Schaden. Die Anzeige sollte schriftlich 
              erfolgen (Einschreiben oder E-Mail mit Lesebestatigung).
            </p>

            <h3 className="text-xl font-semibold text-navy mt-6 mb-2">3. Abwarten der Beseitigungsfrist</h3>
            <p>
              Der Vermieter muss eine angemessene Frist zur Beseitigung des Mangels erhalten. Fur gewohnliche Mangel 
              sind das typischerweise <strong>2-4 Wochen</strong>, bei dringenden Mangeln (Heizungsausfall im Winter) 
              nur wenige Tage. Erst nach fruchtlosem Ablauf der Frist ist die Minderung zulassig.
            </p>
            <p>
              <strong>Ausnahme:</strong> Bei <strong>gefahr im Verzug</strong> (akute Gesundheitsgefahrdung durch Schimmel, 
              Unbewohnbarkeit) kann sofort gemindert werden.
            </p>

            <h2 className="text-2xl font-bold text-navy font-playfair mt-10 mb-4">
              Berechnung der Mietminderung: Leitlinien
            </h2>
            <p>
              Die Minderung erfolgt nach dem Verhaltnis: <strong>Wert der mangelhaften zur mangelfreien Mietsache</strong>. 
              In der Praxis werden folgende Richtwerte angewendet:
            </p>

            <h3 className="text-xl font-semibold text-navy mt-6 mb-2">Typische Mietminderungstabellen</h3>
            <table className="w-full text-sm border-collapse my-4">
              <thead>
                <tr className="bg-gray-100">
                  <th className="text-left p-2 border">Art des Mangels</th>
                  <th className="text-left p-2 border">Minderungssatz</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="p-2 border">Leichter Schimmel (begrenzte Flache)</td>
                  <td className="p-2 border">5-15%</td>
                </tr>
                <tr>
                  <td className="p-2 border">Extensiver Schimmelbefall</td>
                  <td className="p-2 border">20-40%</td>
                </tr>
                <tr>
                  <td className="p-2 border">Heizungsausfall (kurzfristig)</td>
                  <td className="p-2 border">10-30%</td>
                </tr>
                <tr>
                  <td className="p-2 border">Heizungsausfall (langerfristig)</td>
                  <td className="p-2 border">40-100%</td>
                </tr>
                <tr>
                  <td className="p-2 border">Fehlende Balkonnutzung</td>
                  <td className="p-2 border">5-10%</td>
                </tr>
                <tr>
                  <td className="p-2 border">Baularm (taguber)</td>
                  <td className="p-2 border">10-20%</td>
                </tr>
                <tr>
                  <td className="p-2 border">Geruchsbeeintrachtigung (erheblich)</td>
                  <td className="p-2 border">30-60%</td>
                </tr>
                <tr>
                  <td className="p-2 border">Totalunbrauchbarkeit (z.B. nach Wasserschaden)</td>
                  <td className="p-2 border">80-100%</td>
                </tr>
              </tbody>
            </table>

            <h2 className="text-2xl font-bold text-navy font-playfair mt-10 mb-4">
              Maximal mogliche Mietminderung
            </h2>
            <p>
              Die Minderung darf <strong>100% der Miete nicht uberschreiten</strong>. Daruber hinaus kann der Mieter 
              weitere Anspruche geltend machen (Schadensersatz wegen Nichterfullung). Bei 100% Minderung muss 
              die Wohnung jedoch praktisch unbewohnbar sein.
            </p>

            <h2 className="text-2xl font-bold text-navy font-playfair mt-10 mb-4">
              Haufige Fehler bei der Mietminderung
            </h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>
                <strong>Zu hohe Minderung:</strong> Oft werden 30-50% fur leichte Mangel geltend gemacht. 
                Das ist nachweislich zu hoch und verpflichtet zur Ruckzahlung.
              </li>
              <li>
                <strong>Keine Beseitigungsfrist gesetzt:</strong> Viele Mieter mindern sofort, ohne dem Vermieter 
                eine angemessene Zeit zur Reparatur gegeben zu haben.
              </li>
              <li>
                <strong>Keine Mangelanzeige:</strong> Die Pflicht zur unverzuglichen Anzeige wird oft ubergangen.
              </li>
              <li>
                <strong>Milde "Sammelminderung":</strong> Mehrere kleine Mangel werden nicht einzeln, sondern 
                global bewertet. Das fuhrt oft zu uberhohten Forderungen.
              </li>
            </ul>

            <h2 className="text-2xl font-bold text-navy font-playfair mt-10 mb-4">
              So reagieren Vermieter richtig
            </h2>
            <p>
              Erhalten Sie eine Mietminderungserklarung, sollten Sie folgende Schritte einleiten:
            </p>
            <ol className="list-decimal pl-6 space-y-2">
              <li><strong>Mangel prufen:</strong> Lassen Sie den beanstandeten Mangel durch einen Fachmann bewerten.</li>
              <li><strong>Minderungssatz uberprufen:</strong> Vergleichen Sie den beanstandeten Satz mit Richtwerten.</li>
              <li><strong>Formalien checken:</strong> Gab es eine rechtzeitige Mangelanzeige? Wurde eine Frist gesetzt?</li>
              <li><strong>Mangel beseitigen:</strong> Schnelle Reparatur verhindert weitere Minderung und zeigt Kulanz.</li>
              <li><strong>Schriftlich reagieren:</strong> Teilen Sie dem Mieter mit, ob Sie die Minderung akzeptieren oder ablehnen.</li>
            </ol>

            <h2 className="text-2xl font-bold text-navy font-playfair mt-10 mb-4">
              Fazit: Rechtsicher handeln
            </h2>
            <p>
              Mietminderung hat klare rechtliche Voraussetzungen und Berechnungsgrundlagen. Mieter sollten ihre 
              Minderung realistisch bemessen und alle Formalien einhalten. Vermieter profitieren von schneller 
              Reaktion bei Mangelanzeigen und professioneller Unterstutzung bei der Bewertung von Minderungen.
            </p>
          </div>

          <div className="mt-12 bg-teal/10 border border-teal/20 rounded-xl p-8">
            <h3 className="text-xl font-bold text-navy mb-2 font-playfair">
              Mietminderungssrisiko minimieren
            </h3>
            <p className="text-gray-600 mb-4">
              einfach verwaltet. reagiert auf Mangelanzeigen innerhalb von 15 Minuten und koordiniert 
              Reparaturen umgehend. Professionelle Kommunikation verhindert uberzogene Minderungen.
            </p>
            <Link
              href="/anfrage"
              className="inline-block bg-teal text-white font-semibold px-6 py-3 rounded-lg hover:bg-teal/90 transition-colors"
            >
              Jetzt kostenlos anfragen
            </Link>
          </div>

          <div className="mt-10">
            <Link href="/blog" className="text-teal hover:underline text-sm">
              Zuruck zum Ratgeber
            </Link>
          </div>
        </article>
      </main>
      <Footer />
    </>
  );
}
