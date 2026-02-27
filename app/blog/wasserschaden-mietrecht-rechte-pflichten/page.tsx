import type { Metadata } from "next";
import Link from "next/link";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

export const metadata: Metadata = {
  title: "Wasserschaden im Mietrecht: Rechte und Pflichten von Mieter und Vermieter",
  description:
    "Wasserschaden Mietrecht: Wer zahlt, welche Fristen gelten und wie viel Mietminderung nach §536 BGB ist möglich. Kompletter Leitfaden für Vermieter und Mieter.",
  keywords:
    "Wasserschaden Mietrecht, Wasserschaden Mietwohnung Rechte, Mietminderung Wasserschaden, §536 BGB Wasserschaden, Rohrbruch Wer zahlt",
  openGraph: {
    title: "Wasserschaden im Mietrecht: Rechte und Pflichten",
    description:
      "Wasserschaden Mietrecht: Wer zahlt, Fristen, Mietminderung nach §536 BGB und was Vermieter sofort tun müssen.",
    url: "https://einfach-verwaltet.de/blog/wasserschaden-mietrecht-rechte-pflichten",
    siteName: "einfach verwaltet.",
    locale: "de_DE",
    type: "article",
  },
};

const jsonLdArticle = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Wasserschaden im Mietrecht: Rechte und Pflichten von Mieter und Vermieter",
  description:
    "Wasserschaden Mietrecht: Wer zahlt, Fristen, Mietminderung nach §536 BGB und was Vermieter sofort tun müssen.",
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
  url: "https://einfach-verwaltet.de/blog/wasserschaden-mietrecht-rechte-pflichten",
};

const jsonLdFaq = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Wer zahlt bei einem Wasserschaden in der Mietwohnung?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Das hängt von der Ursache ab. Bei einem Rohrbruch oder Dachschaden zahlt in der Regel die Gebäudeversicherung des Vermieters. Hat ein Mieter den Schaden verursacht (z.B. defekte Waschmaschine, vergessener Wasserhahn), haftet der Mieter — entweder selbst oder über seine Hausratversicherung. Der Vermieter muss in jedem Fall sofort die Reparatur veranlassen.",
      },
    },
    {
      "@type": "Question",
      name: "Wie viel Mietminderung ist bei einem Wasserschaden möglich?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Die Mietminderung nach §536 BGB richtet sich nach dem Ausmaß der Beeinträchtigung. Bei einem kleineren Schaden in einem Raum sind 10-20% üblich. Bei Unbewohnbarkeit einzelner Räume 20-50%, bei vollständiger Unbewohnbarkeit bis zu 100%. Der Mieter muss den Schaden anzeigen und darf erst dann mindern.",
      },
    },
    {
      "@type": "Question",
      name: "Welche Frist hat der Vermieter zur Reparatur eines Wasserschadens?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Der Vermieter muss einen Wasserschaden unverzüglich beseitigen. Bei akutem Schaden (Rohrbruch, laufendes Wasser) muss sofort gehandelt werden — Notdienst noch am selben Tag. Bei aufgetrocknetem Schaden und Folgereparaturen (Renovierung, Malerarbeiten) gelten je nach Umfang 2-8 Wochen als angemessen. Konkrete Fristen sollten schriftlich vereinbart werden.",
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
            <span className="text-gray-700">Wasserschaden Mietrecht</span>
          </nav>

          <header className="mb-10">
            <p className="text-teal text-sm font-semibold uppercase tracking-wider mb-3">
              Ratgeber · 9 min Lesezeit · Mietrecht
            </p>
            <h1 className="text-3xl md:text-4xl font-bold text-navy font-playfair mb-4 leading-tight">
              Wasserschaden im Mietrecht: Rechte und Pflichten von Mieter und Vermieter
            </h1>
            <p className="text-gray-500 text-sm">
              Februar 2026 · Lukas Schmitz, Gründer einfach verwaltet.
            </p>
          </header>

          <div className="bg-teal/5 border-l-4 border-teal rounded-r-xl p-6 mb-10">
            <p className="font-semibold text-navy mb-2">Kurzantwort</p>
            <p className="text-gray-700">
              Bei einem Wasserschaden in der Mietwohnung muss der Vermieter sofort handeln und 
              die Ursache beheben — unabhängig davon, wer den Schaden verursacht hat. Mieter 
              können nach §536 BGB die Miete mindern (10–100%), sobald der Schaden angezeigt wurde. 
              Die Kostenfrage (Versicherung vs. Mieter vs. Vermieter) hängt von der Schadensursache ab.
            </p>
          </div>

          <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed space-y-6">
            <p>
              Ein Wasserschaden gehört zu den häufigsten und teuersten Schadensereignissen in 
              Mietobjekten. Ob Rohrbruch, undichtes Dach, defekte Waschmaschine oder übergelaufene 
              Badewanne — die rechtlichen Fragen sind komplex: Wer muss reparieren? Wer zahlt? 
              Hat der Mieter das Recht auf Mietminderung? Dieser Leitfaden gibt klare Antworten 
              auf Basis des deutschen Mietrechts.
            </p>

            <h2 className="text-2xl font-bold text-navy font-playfair mt-10 mb-4">
              Erste Pflicht des Vermieters: Sofortmaßnahmen
            </h2>
            <p>
              Bei einem Wasserschaden gilt: Handeln geht vor Klären. Unabhängig von der Schuldfrage 
              muss der Vermieter unverzüglich reagieren. Das ergibt sich aus der 
              <strong> Instandhaltungspflicht nach §535 Abs. 1 BGB</strong>.
            </p>

            <div className="bg-white border border-gray-200 rounded-xl p-6 my-6">
              <h3 className="font-semibold text-navy mb-4">Sofortmaßnahmen bei Wasserschaden</h3>
              <ul className="space-y-3 not-prose">
                {[
                  "Wasserversorgung zur betroffenen Stelle absperren",
                  "Notdienst oder Klempner beauftragen (sofort, auch nachts und am Wochenende)",
                  "Elektrizität in betroffenen Bereichen abschalten (Sicherheitsrisiko)",
                  "Schaden fotografisch dokumentieren (vor allen Aufräumarbeiten)",
                  "Mieter über Maßnahmen und voraussichtliche Dauer informieren",
                  "Versicherung unverzüglich benachrichtigen",
                  "Schadensprotokoll aufsetzen (Datum, Uhrzeit, Ursache, Zeugen)",
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
              Wer zahlt? Die Kostenfrage im Überblick
            </h2>
            <p>
              Die Haftungsfrage beim Wasserschaden ist komplex und hängt stark von der Ursache ab:
            </p>

            <div className="bg-white border border-gray-200 rounded-xl overflow-hidden my-6">
              <table className="w-full text-sm">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-4 py-3 text-left font-semibold text-navy">Schadensursache</th>
                    <th className="px-4 py-3 text-left font-semibold text-navy">Wer haftet?</th>
                    <th className="px-4 py-3 text-left font-semibold text-navy">Versicherung</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  <tr>
                    <td className="px-4 py-3">Rohrbruch (im Haus)</td>
                    <td className="px-4 py-3">Vermieter</td>
                    <td className="px-4 py-3 text-teal font-semibold">Gebäudeversicherung</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3">Undichtes Dach</td>
                    <td className="px-4 py-3">Vermieter</td>
                    <td className="px-4 py-3 text-teal font-semibold">Gebäudeversicherung</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3">Defekte Waschmaschine (Mieter)</td>
                    <td className="px-4 py-3">Mieter</td>
                    <td className="px-4 py-3 text-teal font-semibold">Hausratversicherung Mieter</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3">Überlaufende Badewanne</td>
                    <td className="px-4 py-3">Mieter (Fahrlässigkeit)</td>
                    <td className="px-4 py-3 text-teal font-semibold">Privathaftpflicht Mieter</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3">Starkregen / Hochwasser</td>
                    <td className="px-4 py-3">Niemand (höhere Gewalt)</td>
                    <td className="px-4 py-3 text-teal font-semibold">Elementarschadenvers.</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3">Mangelnde Wartung (Vermieter)</td>
                    <td className="px-4 py-3">Vermieter (Schadensersatz)</td>
                    <td className="px-4 py-3 text-teal font-semibold">Ggf. Gebäudevers. (prüfen)</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="bg-amber-50 border border-amber-200 rounded-xl p-4 my-4 text-sm">
              <strong>Wichtig:</strong> Auch wenn der Mieter den Schaden verursacht hat, muss der 
              Vermieter die Reparatur veranlassen. Er kann die Kosten anschließend vom Mieter 
              zurückfordern. Der Mieter kann nicht zur Selbstreparatur verpflichtet werden.
            </div>

            <h2 className="text-2xl font-bold text-navy font-playfair mt-10 mb-4">
              Mietminderung nach §536 BGB: Wie viel ist möglich?
            </h2>
            <p>
              <strong>§536 Abs. 1 BGB</strong> gibt dem Mieter das Recht auf Mietminderung, wenn 
              die Tauglichkeit der Mietsache erheblich gemindert ist. Das gilt auch während und 
              nach einem Wasserschaden. Entscheidend ist der Grad der Beeinträchtigung:
            </p>

            <div className="bg-white border border-gray-200 rounded-xl overflow-hidden my-6">
              <table className="w-full text-sm">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-4 py-3 text-left font-semibold text-navy">Situation</th>
                    <th className="px-4 py-3 text-left font-semibold text-navy">Mietminderung</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  <tr>
                    <td className="px-4 py-3">Kleiner Schaden (feuchter Fleck an Wand), ein Raum beeinträchtigt</td>
                    <td className="px-4 py-3 font-semibold text-teal">5 – 10%</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3">Mittlerer Schaden, Renovierungsarbeiten laufend</td>
                    <td className="px-4 py-3 font-semibold text-teal">10 – 20%</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3">Schwerer Schaden, ein oder mehrere Zimmer nicht nutzbar</td>
                    <td className="px-4 py-3 font-semibold text-teal">20 – 50%</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3">Küche oder Bad nicht nutzbar</td>
                    <td className="px-4 py-3 font-semibold text-teal">30 – 60%</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3">Wohnung vollständig unbewohnbar</td>
                    <td className="px-4 py-3 font-semibold text-teal">bis 100%</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h3 className="text-xl font-semibold text-navy mt-6 mb-2">
              Voraussetzungen für die Mietminderung
            </h3>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Mängelanzeige:</strong> Der Mieter muss den Schaden dem Vermieter schriftlich anzeigen</li>
              <li><strong>Kein Verschulden des Mieters:</strong> Hat der Mieter den Schaden selbst verursacht, entfällt die Mietminderung</li>
              <li><strong>Erheblichkeit:</strong> Geringfügige Mängel berechtigen nicht zur Minderung (§536 Abs. 1 S. 3 BGB)</li>
              <li><strong>Dauer:</strong> Die Minderung gilt für den gesamten Zeitraum der Beeinträchtigung</li>
            </ul>

            <h2 className="text-2xl font-bold text-navy font-playfair mt-10 mb-4">
              Fristen für die Reparatur
            </h2>
            <p>
              Das BGB sieht keine starren Fristen für die Schadensbeseitigung vor. 
              Maßgeblich ist das Gebot der <strong>Unverzüglichkeit</strong> (§121 BGB):
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Akuter Schaden (Wasser läuft):</strong> Sofortiger Notdienst, noch am selben Tag</li>
              <li><strong>Trocknungsarbeiten:</strong> Beginnen innerhalb von 24-48 Stunden</li>
              <li><strong>Abtrocknung:</strong> Je nach Ausmaß 1–6 Wochen (mit professionellen Trocknungsgeräten)</li>
              <li><strong>Folgerenovierung (Tapete, Farbe):</strong> Üblicherweise 2–8 Wochen nach Abtrocknung</li>
            </ul>

            <div className="bg-teal/5 border-l-4 border-teal rounded-r-xl p-5 my-6">
              <p className="font-semibold text-navy mb-2">Tipp für Vermieter</p>
              <p className="text-sm text-gray-700">
                Setzen Sie dem Mieter schriftlich konkrete Fristen für die einzelnen 
                Reparaturschritte. Das schafft Vertrauen und schützt Sie vor Mietminderungsansprüchen 
                wegen angeblicher Untätigkeit. Eine Hausverwaltung übernimmt diese Kommunikation 
                professionell und dokumentiert alle Maßnahmen lückenlos.
              </p>
            </div>

            <h2 className="text-2xl font-bold text-navy font-playfair mt-10 mb-4">
              Pflichten des Mieters bei Wasserschaden
            </h2>
            <p>
              Auch Mieter haben Pflichten beim Wasserschaden:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Schadensminderungspflicht (§254 BGB):</strong> Der Mieter muss alles tun, um den Schaden zu begrenzen (z.B. Wasser aufwischen, bewegliche Sachen in Sicherheit bringen)</li>
              <li><strong>Unverzügliche Meldung:</strong> Der Schaden ist sofort zu melden — Verzögerung kann Schadensersatzpflicht des Mieters begründen</li>
              <li><strong>Duldungspflicht:</strong> Der Mieter muss Reparaturarbeiten dulden (§554 BGB), auch wenn sie mit Beeinträchtigungen verbunden sind</li>
              <li><strong>Zugang gewähren:</strong> Handwerker und Fachleute müssen die Wohnung betreten dürfen</li>
            </ul>

            {/* FAQ Section */}
            <h2 className="text-2xl font-bold text-navy font-playfair mt-10 mb-4">
              Häufig gestellte Fragen
            </h2>

            <div className="space-y-6 not-prose">
              <div className="bg-white border border-gray-200 rounded-xl p-5">
                <h3 className="font-semibold text-navy mb-2">Wer zahlt bei einem Wasserschaden in der Mietwohnung?</h3>
                <p className="text-gray-600 text-sm">
                  Das hängt von der Ursache ab. Bei einem Rohrbruch oder Dachschaden zahlt in der 
                  Regel die Gebäudeversicherung des Vermieters. Hat ein Mieter den Schaden verursacht 
                  (z.B. defekte Waschmaschine, vergessener Wasserhahn), haftet der Mieter — entweder 
                  selbst oder über seine Hausratversicherung.
                </p>
              </div>

              <div className="bg-white border border-gray-200 rounded-xl p-5">
                <h3 className="font-semibold text-navy mb-2">Wie viel Mietminderung ist bei einem Wasserschaden möglich?</h3>
                <p className="text-gray-600 text-sm">
                  Die Mietminderung nach §536 BGB richtet sich nach dem Ausmaß der Beeinträchtigung. 
                  Bei einem kleineren Schaden in einem Raum sind 5-10% üblich. Bei Unbewohnbarkeit 
                  einzelner Räume 20-50%, bei vollständiger Unbewohnbarkeit bis zu 100%. Der Mieter 
                  muss den Schaden anzeigen und darf erst dann mindern.
                </p>
              </div>

              <div className="bg-white border border-gray-200 rounded-xl p-5">
                <h3 className="font-semibold text-navy mb-2">Welche Frist hat der Vermieter zur Reparatur eines Wasserschadens?</h3>
                <p className="text-gray-600 text-sm">
                  Der Vermieter muss einen Wasserschaden unverzüglich beseitigen. Bei akutem Schaden 
                  (Rohrbruch, laufendes Wasser) muss sofort gehandelt werden — Notdienst noch am 
                  selben Tag. Bei Folgereparaturen (Renovierung) gelten je nach Umfang 2–8 Wochen 
                  nach abgeschlossener Trocknung als angemessen.
                </p>
              </div>
            </div>

            <h2 className="text-2xl font-bold text-navy font-playfair mt-10 mb-4">
              Fazit: Schnell handeln, sauber dokumentieren
            </h2>
            <p>
              Beim Wasserschaden gilt: Wer schnell und transparent handelt, vermeidet Eskalation. 
              Vermieter müssen sofort reagieren, klar kommunizieren und alle Maßnahmen dokumentieren. 
              Eine professionelle Hausverwaltung übernimmt genau das — von der Erstreaktion bis zur 
              Schlussabnahme nach der Renovierung.
            </p>
          </div>

          <div className="mt-12 bg-teal/10 border border-teal/20 rounded-xl p-8">
            <h3 className="text-xl font-bold text-navy mb-2 font-playfair">
              Wasserschaden? Wir sind sofort für Sie da.
            </h3>
            <p className="text-gray-600 mb-4">
              Als Ihre Hausverwaltung koordinieren wir im Schadensfall alle Maßnahmen: Notdienst, 
              Versicherungsmeldung, Handwerker und Mieterkommunikation — damit Sie sich keine 
              Sorgen machen müssen.
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
