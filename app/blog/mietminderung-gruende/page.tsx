import type { Metadata } from "next";
import Link from "next/link";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

export const metadata: Metadata = {
  title: "Mietminderung Gründe: Was Mieter mindern dürfen — Vermieter-Leitfaden | einfach verwaltet.",
  description:
    "Mietminderung Gründe 2026: Heizungsausfall, Schimmel, Lärmbelästigung — was berechtigt zu welcher Minderung? Wie Vermieter Konflikte vermeiden und Mängel rechtssicher beheben.",
  keywords:
    "Mietminderung Gründe, Mietminderung Vermieter, Mietminderung Tabelle, Mietminderung §536 BGB, Mietmangel",
  openGraph: {
    title: "Mietminderung Gründe: Was Mieter mindern dürfen — Vermieter-Leitfaden",
    description:
      "§536 BGB erklärt: Gründe für Mietminderung, Minderungsquoten, Mangelanzeige-Pflicht und wie Sie als Vermieter Konflikte lösen.",
    url: "https://einfach-verwaltet.de/blog/mietminderung-gruende",
    siteName: "einfach verwaltet.",
    locale: "de_DE",
    type: "article",
  },
  alternates: {
    canonical: "https://einfach-verwaltet.de/blog/mietminderung-gruende",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Mietminderung Gründe: Was Mieter mindern dürfen — Vermieter-Leitfaden 2026",
  description:
    "Rechtliche Grundlagen der Mietminderung nach §536 BGB, häufige Minderungsgründe mit Quoten und Handlungsempfehlungen für Vermieter.",
  author: { "@type": "Organization", name: "einfach verwaltet." },
  publisher: {
    "@type": "Organization",
    name: "einfach verwaltet.",
    logo: { "@type": "ImageObject", url: "https://einfach-verwaltet.de/logo.png" },
  },
  datePublished: "2026-02-27",
  inLanguage: "de",
  url: "https://einfach-verwaltet.de/blog/mietminderung-gruende",
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Wann darf ein Mieter die Miete mindern?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Ein Mieter darf die Miete nach §536 BGB mindern, wenn die Mietsache einen Mangel aufweist, der ihre Tauglichkeit zum vertragsgemäßen Gebrauch erheblich mindert. Voraussetzung: Der Mieter muss den Mangel beim Vermieter angezeigt haben und eine angemessene Frist zur Beseitigung gesetzt haben. Zu den häufigsten Mietminderungsgründen zählen Heizungsausfall, Schimmel, Lärmbelästigung, defekte Fenster und Wasserschäden.",
      },
    },
    {
      "@type": "Question",
      name: "Wie hoch darf eine Mietminderung ausfallen?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Die Höhe der Mietminderung hängt vom Schweregrad des Mangels ab. Typische Richtwerte aus der Rechtsprechung: Heizungsausfall im Winter 20–100%, Schimmelbefall 10–80% je nach Ausmaß, Lärmbelästigung durch Baustelle 10–25%, defekte Klingel 5–10%. Diese Quoten sind keine festen Sätze — jeder Fall wird individuell beurteilt.",
      },
    },
    {
      "@type": "Question",
      name: "Was müssen Vermieter tun, wenn ein Mieter einen Mangel anzeigt?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Vermieter müssen nach §535 Abs. 1 BGB die Mietsache in einem zum vertragsgemäßen Gebrauch geeigneten Zustand erhalten. Bei einer Mangelanzeige sollten Sie: 1. Den Mangel unverzüglich dokumentieren, 2. Eine Besichtigung vereinbaren, 3. Einen Handwerker beauftragen und die Frist kommunizieren, 4. Die Mangelbeseitigung schriftlich bestätigen. Reaktionszeiten unter 48 Stunden bei dringenden Mängeln (Heizung, Wasser) sind Standard.",
      },
    },
    {
      "@type": "Question",
      name: "Kann ein Mieter ohne Ankündigung die Miete mindern?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Nein — eine Mietminderung setzt grundsätzlich voraus, dass der Mieter den Mangel beim Vermieter angezeigt hat. Mindert ein Mieter ohne vorherige Mangelanzeige und ohne angemessene Reaktionsfrist, kann dies rechtlich unwirksam sein. Ausnahme: Bei offensichtlichen, dem Vermieter bereits bekannten Mängeln kann die Anzeigepflicht entfallen.",
      },
    },
  ],
};

const mangelQuoten = [
  { mangel: "Heizungsausfall (Winter)", minderung: "20–100 %", hinweis: "Je nach Dauer und Außentemperatur" },
  { mangel: "Schimmelbefall (erheblich)", minderung: "10–80 %", hinweis: "Je nach betroffener Fläche" },
  { mangel: "Baustellenlärm (tagsüber)", minderung: "10–25 %", hinweis: "BGH-Urteil VIII ZR 281/03" },
  { mangel: "Feuchtigkeitsschäden", minderung: "10–20 %", hinweis: "Abhängig von Schadensumfang" },
  { mangel: "Ausfall Warmwasser", minderung: "10–15 %", hinweis: "Dauerhafter Ausfall" },
  { mangel: "Defekte Fenster (undicht)", minderung: "5–15 %", hinweis: "Abhängig von Anzahl und Lage" },
  { mangel: "Ausfall Aufzug (hohe Etage)", minderung: "5–10 %", hinweis: "Bei vereinbarter Leistung" },
  { mangel: "Defekte Klingel/Gegensprechanlage", minderung: "3–5 %", hinweis: "Kleinere Beeinträchtigung" },
];

export default function MietminderungGruendePage() {
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
      <main className="pt-20 min-h-screen bg-warm-white">
        <article className="max-w-[800px] mx-auto px-6 py-12">
          <nav className="text-sm text-text-light mb-6" aria-label="Breadcrumb">
            <Link href="/blog" className="hover:text-teal transition-colors">Ratgeber</Link>
            <span className="mx-2">›</span>
            <span>Mietminderung Gründe</span>
          </nav>

          <header className="mb-10">
            <div className="flex flex-wrap gap-2 mb-4">
              <span className="bg-teal/10 text-teal text-xs font-semibold px-3 py-1 rounded-full">Mietrecht</span>
              <span className="bg-gray-100 text-gray-600 text-xs font-medium px-3 py-1 rounded-full">9 min Lesezeit</span>
              <span className="bg-gray-100 text-gray-600 text-xs font-medium px-3 py-1 rounded-full">Februar 2026</span>
            </div>
            <h1 className="text-3xl md:text-4xl font-bold text-navy leading-tight mb-4">
              Mietminderung Gründe: Was Mieter mindern dürfen — und wie Vermieter reagieren
            </h1>
            <p className="text-lg text-text-light leading-relaxed">
              §536 BGB erklärt: Welche Mängel berechtigen zur Mietminderung? Typische Minderungsquoten, was Vermieter tun müssen — und wie Sie Konflikte rechtssicher lösen.
            </p>
          </header>

          <div className="prose prose-navy max-w-none text-gray-700 leading-relaxed space-y-8">

            <section>
              <h2 className="text-2xl font-bold text-navy mb-4">Rechtliche Grundlage: §536 BGB</h2>
              <p>
                Das Recht auf Mietminderung ist in §536 Bürgerliches Gesetzbuch (BGB) geregelt. Danach ist die Miete von Gesetzes wegen gemindert, wenn die Mietsache zur Zeit der Überlassung einen Mangel aufweist, der ihre Tauglichkeit zum vertragsgemäßen Gebrauch aufhebt oder erheblich mindert.
              </p>
              <p>
                Wichtig für Vermieter: Die Mietminderung tritt nicht erst durch Erklärung des Mieters ein — sie gilt kraft Gesetzes ab dem Zeitpunkt, ab dem der Mangel besteht und dem Vermieter bekannt ist. Deshalb ist schnelles Handeln bei Mängelanzeigen so entscheidend.
              </p>
              <div className="bg-amber-50 border border-amber-200 rounded-xl p-5 my-4">
                <p className="text-sm font-semibold text-amber-800 mb-1">⚠️ Wichtig für Vermieter</p>
                <p className="text-sm text-amber-700">
                  Wenn ein Mieter einen Mangel anzeigt und Sie nicht reagieren, riskieren Sie nicht nur die Mietminderung — sondern auch Schadensersatzansprüche nach §536a BGB, wenn sich der Mangel verschlimmert.
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-navy mb-4">Häufige Mietminderungsgründe mit Richtwerten</h2>
              <p>
                Gerichte haben über Jahrzehnte eine umfangreiche Rechtsprechung zu Mietminderungen entwickelt. Die folgenden Richtwerte aus der deutschen Rechtsprechung sind keine festen Sätze — jeder Fall wird individuell beurteilt. Sie geben jedoch eine Orientierung:
              </p>
              <div className="bg-white rounded-xl border border-gray-200 overflow-hidden my-6">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="bg-navy text-white">
                      <th className="text-left px-4 py-3 font-semibold">Mangel</th>
                      <th className="text-left px-4 py-3 font-semibold">Minderungsquote</th>
                      <th className="text-left px-4 py-3 font-semibold">Hinweis</th>
                    </tr>
                  </thead>
                  <tbody>
                    {mangelQuoten.map((row, i) => (
                      <tr key={i} className={`border-b border-gray-100 ${i % 2 === 1 ? "bg-gray-50" : ""}`}>
                        <td className="px-4 py-3 font-medium">{row.mangel}</td>
                        <td className="px-4 py-3 text-red-600 font-semibold">{row.minderung}</td>
                        <td className="px-4 py-3 text-gray-500 text-xs">{row.hinweis}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <p className="text-sm text-gray-500 italic">
                Quelle: Zusammenstellung aus BGH-Rechtsprechung und Instanzgerichten. Keine Rechtsberatung.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-navy mb-4">Voraussetzungen für eine wirksame Mietminderung</h2>
              <p>
                Eine Mietminderung ist nur dann rechtswirksam, wenn bestimmte Voraussetzungen erfüllt sind. Als Vermieter sollten Sie diese kennen, um unberechtigte Minderungen abzuwehren:
              </p>
              <ol className="space-y-4 mt-4">
                {[
                  {
                    title: "Erheblichkeit des Mangels",
                    desc: "Nur erhebliche Mängel berechtigen zur Minderung (§536 Abs. 1 Satz 3 BGB). Eine quietschende Türangel oder ein leicht abgenutzter Teppich sind keine Minderungsgründe. Die Tauglichkeit der Wohnung muss spürbar beeinträchtigt sein.",
                  },
                  {
                    title: "Mangelanzeige beim Vermieter",
                    desc: "Der Mieter muss den Mangel beim Vermieter angezeigt haben. Ohne Mangelanzeige ist eine Mietminderung in der Regel unwirksam — außer bei Mängeln, die dem Vermieter bereits bekannt sind.",
                  },
                  {
                    title: "Kein Selbstverschulden",
                    desc: "Hat der Mieter den Mangel selbst verursacht oder durch unzureichendes Lüften und Heizen (z.B. bei Schimmel) mitverursacht, entfällt das Minderungsrecht ganz oder teilweise.",
                  },
                  {
                    title: "Keine Kenntnis bei Vertragsschluss",
                    desc: "Wusste der Mieter beim Einzug vom Mangel und hat ihn dennoch akzeptiert, ist eine spätere Mietminderung ausgeschlossen (§536b BGB).",
                  },
                ].map((item, i) => (
                  <li key={i} className="flex gap-4">
                    <span className="w-7 h-7 rounded-full bg-navy text-white text-sm font-bold flex items-center justify-center shrink-0 mt-0.5">{i + 1}</span>
                    <div>
                      <span className="font-semibold text-navy">{item.title}: </span>
                      <span>{item.desc}</span>
                    </div>
                  </li>
                ))}
              </ol>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-navy mb-4">Wie Vermieter Konflikte vermeiden: Präventive Maßnahmen</h2>
              <p>
                Die beste Mietminderung ist die, die nie entsteht. Mit der richtigen Strategie lassen sich die meisten Konflikte im Vorfeld vermeiden:
              </p>
              <ul className="space-y-3 mt-4">
                {[
                  "Regelmäßige Wartung technischer Anlagen (Heizung, Aufzug, Rauchmelder) nach Plan",
                  "Schnelle Reaktionszeiten bei Mängelanzeigen — idealerweise unter 24 Stunden",
                  "Klare Kommunikationskanäle für Mieter (kein Anrufbeantworter als einzige Option)",
                  "Dokumentation aller gemeldeten Mängel und durchgeführten Maßnahmen",
                  "Proaktive Information der Mieter bei bekannten Einschränkungen (z.B. Bauarbeiten)",
                  "Qualifizierte Handwerker mit verlässlichen Terminzusagen im Netzwerk",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm">
                    <span className="text-teal font-bold mt-0.5">✓</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-navy mb-4">Der Ablauf bei einer Mietminderung: Schritt für Schritt</h2>
              <p>Wenn ein Mieter eine Mietminderung ankündigt oder durchführt, sollten Vermieter strukturiert vorgehen:</p>
              <div className="space-y-4 mt-4">
                {[
                  { step: "Mangel prüfen", desc: "Besichtigung vereinbaren und Mangel dokumentieren (Fotos, Datum, Beschreibung). Ist der Mangel real und erheblich?" },
                  { step: "Fristsetzung bewerten", desc: "Hat der Mieter eine angemessene Frist gesetzt? Bei Heizungsausfall im Winter: 24–48 Stunden. Bei anderen Mängeln: 1–2 Wochen." },
                  { step: "Beseitigung in Auftrag geben", desc: "Handwerker beauftragen und Termin dem Mieter mitteilen. Schriftliche Bestätigung per E-Mail oder Brief." },
                  { step: "Minderungshöhe prüfen", desc: "Ist die angesetzte Minderungsquote angemessen? Bei überhöhten Minderungen schriftlich widersprechen." },
                  { step: "Dokumentation abschließen", desc: "Nach Mangelbeseitigung schriftliche Bestätigung vom Mieter einholen und gesamten Vorgang archivieren." },
                ].map((item, i) => (
                  <div key={i} className="flex gap-4 p-4 bg-white rounded-xl border border-gray-200">
                    <span className="w-7 h-7 rounded-full bg-teal text-white text-sm font-bold flex items-center justify-center shrink-0">{i + 1}</span>
                    <div>
                      <p className="font-semibold text-navy">{item.step}</p>
                      <p className="text-sm text-gray-600 mt-0.5">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* FAQ */}
            <section className="bg-white rounded-2xl border border-gray-200 p-8 mt-10">
              <h2 className="text-2xl font-bold text-navy mb-6">Häufige Fragen zu Mietminderung Gründen</h2>
              <div className="space-y-6">
                {[
                  {
                    q: "Wann darf ein Mieter die Miete mindern?",
                    a: "Bei einem erheblichen Mangel, der die Nutzbarkeit der Wohnung beeinträchtigt (§536 BGB). Voraussetzung: Der Mieter muss den Mangel angezeigt haben und der Vermieter hat nicht rechtzeitig reagiert.",
                  },
                  {
                    q: "Wie hoch darf eine Mietminderung ausfallen?",
                    a: "Je nach Schwere des Mangels. Heizungsausfall im Winter: 20–100 %, Schimmelbefall: 10–80 %, Baustellenlärm: 10–25 %. Die Quoten sind Richtwerte — jeder Fall wird individuell beurteilt.",
                  },
                  {
                    q: "Kann ich als Vermieter eine Mietminderung ablehnen?",
                    a: "Ja, wenn die Voraussetzungen nicht erfüllt sind: Der Mangel ist nicht erheblich, der Mieter hat ihn selbst verursacht, oder es gab keine Mangelanzeige. Lehnen Sie schriftlich und begründet ab.",
                  },
                  {
                    q: "Was passiert, wenn ein Mieter zu viel mindert?",
                    a: "Mindert ein Mieter in erheblichem Umfang unberechtigt, kann dies nach §543 BGB ein Kündigungsgrund sein, wenn die Mietrückstände zwei volle Monatsmieten erreichen.",
                  },
                ].map((item, i) => (
                  <div key={i} className="border-b border-gray-100 pb-5 last:border-0 last:pb-0">
                    <h3 className="font-semibold text-navy mb-2">{item.q}</h3>
                    <p className="text-gray-700 text-sm leading-relaxed">{item.a}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* CTA */}
            <section className="bg-navy rounded-2xl p-8 text-white text-center mt-10">
              <h2 className="text-2xl font-bold mb-3">Mängel schnell gelöst — Konflikte vermieden</h2>
              <p className="text-white/80 mb-6 max-w-md mx-auto">
                Professionelle Hausverwaltung mit schnellen Reaktionszeiten schützt Sie vor Mietminderungen. Jetzt kostenloses Angebot einholen.
              </p>
              <Link
                href="/anfrage"
                className="inline-flex items-center gap-2 bg-teal text-white px-8 py-4 rounded-xl font-semibold text-base hover:bg-teal/90 transition-all hover:shadow-lg"
              >
                Kostenlos anfragen →
              </Link>
              <p className="text-white/50 text-xs mt-4">Kostenlos & unverbindlich · Antwort am selben Tag</p>
            </section>
          </div>
        </article>
      </main>
      <Footer />
    </>
  );
}
