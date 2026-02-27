import type { Metadata } from "next";
import Link from "next/link";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

export const metadata: Metadata = {
  title: "Mietrecht FAQ 2026: Die 20 häufigsten Fragen beantwortet | einfach verwaltet.",
  description:
    "Mietrecht FAQ 2026: Kündigungsfristen, Mietkaution, Nebenkostenabrechnung, Eigenbedarfskündigung und mehr — alle wichtigen Mietrechtsfragen kompakt beantwortet.",
  keywords:
    "Mietrecht FAQ, Mietrecht Fragen, Mietrecht 2026, häufige Fragen Mietrecht, Mietrecht Deutschland",
  openGraph: {
    title: "Mietrecht FAQ 2026: Die 20 häufigsten Fragen beantwortet",
    description:
      "Kündigungsfristen, Mietkaution, Nebenkostenabrechnung, Eigenbedarfskündigung — alle wichtigen Mietrechtsfragen für Vermieter und Mieter.",
    url: "https://einfach-verwaltet.de/blog/mietrecht-faq",
    siteName: "einfach verwaltet.",
    locale: "de_DE",
    type: "article",
  },
  alternates: {
    canonical: "https://einfach-verwaltet.de/blog/mietrecht-faq",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Mietrecht FAQ 2026: Die 20 häufigsten Fragen beantwortet",
  description:
    "Alle wichtigen Mietrechtsfragen 2026 kompakt und verständlich beantwortet — von Kündigungsfristen bis Nebenkosten.",
  author: { "@type": "Organization", name: "einfach verwaltet." },
  publisher: {
    "@type": "Organization",
    name: "einfach verwaltet.",
    logo: { "@type": "ImageObject", url: "https://einfach-verwaltet.de/logo.png" },
  },
  datePublished: "2026-02-27",
  inLanguage: "de",
  url: "https://einfach-verwaltet.de/blog/mietrecht-faq",
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Wie lange sind die Kündigungsfristen im Mietrecht?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Mieter können mit 3 Monaten Frist kündigen (§573c BGB). Vermieter haben gestaffelte Fristen: 3 Monate bei bis zu 5 Jahren Mietdauer, 6 Monate bei 5–8 Jahren, 9 Monate ab 8 Jahren Mietdauer.",
      },
    },
    {
      "@type": "Question",
      name: "Wie hoch darf die Mietkaution sein?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Die Mietkaution darf laut §551 BGB maximal 3 Nettokaltmieten betragen. Der Mieter darf die Kaution in 3 Monatsraten zahlen.",
      },
    },
    {
      "@type": "Question",
      name: "Wann muss der Vermieter die Mietkaution zurückzahlen?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Der Vermieter hat eine angemessene Prüffrist von 3 bis 6 Monaten nach Mietende, um berechtigte Forderungen zu prüfen. Danach muss die Kaution mit den angefallenen Zinsen zurückgezahlt werden.",
      },
    },
    {
      "@type": "Question",
      name: "Darf der Vermieter die Miete erhöhen?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Ja, unter bestimmten Voraussetzungen. Mieterhöhungen bis zur ortsüblichen Vergleichsmiete (§558 BGB) sind zulässig. Die Miete darf binnen 3 Jahren um max. 20% steigen (15% in angespannten Märkten). Zwischen Erhöhungen muss mindestens 1 Jahr liegen.",
      },
    },
  ],
};

const faqs = [
  {
    category: "Kündigung & Vertragsende",
    questions: [
      {
        q: "Wie lange sind die Kündigungsfristen im Mietrecht?",
        a: "Mieter können mit 3 Monaten Frist zum Monatsende kündigen (§573c BGB). Die Kündigung muss bis zum dritten Werktag eines Monats zugehen, um zum Ablauf des übernächsten Monats wirksam zu sein. Vermieter haben gestaffelte Fristen: 3 Monate bei bis zu 5 Jahren Mietdauer, 6 Monate bei 5–8 Jahren, 9 Monate ab 8 Jahren. Eine Kündigung durch den Vermieter erfordert stets einen gesetzlich anerkannten Grund (z.B. Eigenbedarf nach §573 BGB).",
      },
      {
        q: "Wann darf der Vermieter wegen Eigenbedarf kündigen?",
        a: "Eigenbedarf ist zulässig, wenn der Vermieter die Wohnung für sich selbst, Familienangehörige oder Angehörige seines Haushalts benötigt (§573 Abs. 2 Nr. 2 BGB). Der Bedarf muss ernsthaft, konkret und nachvollziehbar sein — ein bloßer Wunsch reicht nicht. Die Kündigungsfristen nach §573c BGB gelten auch hier. Mieter haben unter Umständen ein Widerspruchsrecht bei besonderer Härte.",
      },
      {
        q: "Kann ein Mieter außerordentlich kündigen?",
        a: "Ja. Ein Mieter kann bei erheblichen Mängeln, die die Nutzung der Wohnung wesentlich beeinträchtigen, fristlos kündigen (§543 BGB) — wenn der Vermieter trotz Fristsetzung nicht reagiert. Auch unzumutbare Vertragsverletzungen durch den Vermieter können eine außerordentliche Kündigung begründen.",
      },
      {
        q: "Was passiert mit der Mietwohnung bei Tod des Mieters?",
        a: "Das Mietverhältnis geht gemäß §563 BGB auf Personen über, die zum Zeitpunkt des Todes mit dem Mieter einen gemeinsamen Haushalt geführt haben (Ehe-/Lebenspartner, Kinder, andere Familienangehörige). Erben, die das Mietverhältnis nicht fortsetzen wollen, können mit einer Monatsfrist außerordentlich kündigen.",
      },
    ],
  },
  {
    category: "Miete & Mieterhöhung",
    questions: [
      {
        q: "Darf der Vermieter die Miete erhöhen?",
        a: "Ja, unter bestimmten Voraussetzungen. Mieterhöhungen bis zur ortsüblichen Vergleichsmiete sind zulässig (§558 BGB). Die Miete darf binnen 3 Jahren um maximal 20 % steigen (in Gebieten mit angespanntem Wohnungsmarkt: 15 %). Zwischen zwei Erhöhungen muss mindestens 1 Jahr liegen. Der Vermieter muss die Erhöhung schriftlich begründen — durch Bezugnahme auf den Mietspiegel, Sachverständigengutachten oder Vergleichswohnungen.",
      },
      {
        q: "Was ist die Mietpreisbremse?",
        a: "Die Mietpreisbremse (§556d BGB) gilt in Gebieten mit angespanntem Wohnungsmarkt, die von der jeweiligen Landesregierung festgelegt werden. Bei Neuvermietungen darf die Miete dort höchstens 10 % über der ortsüblichen Vergleichsmiete liegen. Es gibt Ausnahmen für Neubauten (Erstbezug nach Oktober 2014), umfassend modernisierte Wohnungen und die Vormiete.",
      },
      {
        q: "Wann darf der Mieter die Miete mindern?",
        a: "Der Mieter darf die Miete mindern, wenn die Wohnung mit einem Mangel behaftet ist, der ihre Tauglichkeit zum vertragsgemäßen Gebrauch erheblich mindert (§536 BGB). Typische Beispiele: Heizungsausfall, Schimmelbefall, Wasserschaden, dauerhafter Lärm. Die Minderungsquote hängt von der Schwere des Mangels ab. Voraussetzung: Der Mieter muss den Mangel dem Vermieter anzeigen.",
      },
      {
        q: "Was ist bei der Indexmiete zu beachten?",
        a: "Bei einer Indexmiete (§557b BGB) ist die Miete an den Verbraucherpreisindex des Statistischen Bundesamts gekoppelt. Anpassungen sind nur einmal jährlich möglich und müssen schriftlich erklärt werden. Eine Indexmiete schließt andere Mieterhöhungen (außer für Modernisierungsmaßnahmen) aus, solange der Index gilt.",
      },
    ],
  },
  {
    category: "Mietkaution",
    questions: [
      {
        q: "Wie hoch darf die Mietkaution sein?",
        a: "Die Mietkaution darf gemäß §551 BGB maximal 3 Nettokaltmieten betragen. Höhere Kautionsvereinbarungen sind unwirksam. Der Mieter hat das Recht, die Kaution in 3 gleichen Monatsraten zu zahlen — die erste Rate ist bei Mietbeginn fällig.",
      },
      {
        q: "Wie muss der Vermieter die Kaution anlegen?",
        a: "Der Vermieter ist verpflichtet, die Kaution getrennt vom eigenen Vermögen auf einem Kautionskonto (Spar- oder Tagesgeldkonto) anzulegen (§551 Abs. 3 BGB). Die Kaution ist insolvenzsicher anzulegen. Zinsen stehen dem Mieter zu.",
      },
      {
        q: "Wann muss der Vermieter die Kaution zurückzahlen?",
        a: "Nach Mietende hat der Vermieter eine angemessene Prüffrist, um offene Forderungen zu prüfen und abzurechnen. Diese beträgt nach BGH-Rechtsprechung 3–6 Monate. Der Vermieter darf nur berechtigte Forderungen einbehalten (Schäden, Mietrückstände, offene Nebenkostennachzahlungen). Danach muss er die Kaution mit Zinsen zurückzahlen.",
      },
    ],
  },
  {
    category: "Nebenkosten",
    questions: [
      {
        q: "Welche Kosten darf der Vermieter auf den Mieter umlegen?",
        a: "Nur die in der Betriebskostenverordnung (BetrKV) genannten Betriebskosten sind umlagefähig — z.B. Grundsteuer, Wasser, Heizung, Müllabfuhr, Hausmeister, Gebäudeversicherung. Verwaltungskosten, Instandhaltungsrücklagen und Reparaturkosten sind NICHT umlagefähig.",
      },
      {
        q: "Bis wann muss der Vermieter die Nebenkostenabrechnung schicken?",
        a: "Der Vermieter muss die Nebenkostenabrechnung spätestens 12 Monate nach Ende des Abrechnungszeitraums zuschicken (§556 Abs. 3 BGB). Verpasst er diese Frist, verliert er seinen Anspruch auf etwaige Nachzahlungen. Der Mieter kann dennoch seine Vorauszahlungen zurückfordern.",
      },
      {
        q: "Was kann der Mieter tun, wenn er der Nebenkostenabrechnung widerspricht?",
        a: "Der Mieter muss innerhalb von 12 Monaten nach Erhalt der Abrechnung schriftlich widersprechen (§556 Abs. 3 BGB). Er hat das Recht auf Einsicht in alle Originalbelege. Bei schwerwiegenden formellen Mängeln kann die Abrechnung unwirksam sein.",
      },
    ],
  },
  {
    category: "Instandhaltung & Modernisierung",
    questions: [
      {
        q: "Wer zahlt die Reparaturen in der Mietwohnung?",
        a: "Grundsätzlich trägt der Vermieter die Kosten für Instandhaltung und Instandsetzung der Mietsache (§535 BGB). Kleine Instandhaltungen (Kleinreparaturen) können per Vertrag auf den Mieter übertragen werden — maximal ca. €100–150 pro Einzelfall und ca. €200–400/Jahr. Schönheitsreparaturen (Tapezieren, Streichen) sind nur bei wirksamen Vertragsklauseln Sache des Mieters.",
      },
      {
        q: "Wann ist eine Modernisierung durch den Vermieter zulässig?",
        a: "Vermieter dürfen Modernisierungsmaßnahmen nach §555b BGB durchführen (z.B. Energieeinsparung, Barrierefreiheit, Verbesserung der Wohnqualität). Sie müssen dem Mieter mindestens 3 Monate vorher ankündigen. Der Vermieter kann anschließend die Jahresmiete um max. 8 % der auf die Wohnung entfallenden Modernisierungskosten erhöhen (§559 BGB).",
      },
    ],
  },
];

export default function MietrechtFaqPage() {
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
          {/* Breadcrumb */}
          <nav className="text-sm text-text-light mb-6" aria-label="Breadcrumb">
            <Link href="/blog" className="hover:text-teal transition-colors">Ratgeber</Link>
            <span className="mx-2">›</span>
            <span>Mietrecht FAQ 2026</span>
          </nav>

          {/* Header */}
          <header className="mb-10">
            <div className="flex flex-wrap gap-2 mb-4">
              <span className="bg-teal/10 text-teal text-xs font-semibold px-3 py-1 rounded-full">Mietrecht</span>
              <span className="bg-gray-100 text-gray-600 text-xs font-medium px-3 py-1 rounded-full">12 min Lesezeit</span>
              <span className="bg-gray-100 text-gray-600 text-xs font-medium px-3 py-1 rounded-full">Februar 2026</span>
            </div>
            <h1 className="text-3xl md:text-4xl font-bold text-navy leading-tight mb-4">
              Mietrecht FAQ 2026: Die 20 häufigsten Fragen beantwortet
            </h1>
            <p className="text-lg text-text-light leading-relaxed">
              Von Kündigungsfristen über Mietkaution bis zur Nebenkostenabrechnung — die wichtigsten Mietrechtsfragen für Vermieter und Mieter kompakt und verständlich erklärt.
            </p>
          </header>

          {/* Intro */}
          <div className="bg-teal/5 border border-teal/20 rounded-xl p-6 mb-8">
            <p className="text-sm text-gray-700 leading-relaxed">
              <strong>Hinweis:</strong> Diese FAQ bietet allgemeine Informationen zum deutschen Mietrecht. Für rechtliche Beratung im Einzelfall wenden Sie sich an einen Fachanwalt für Mietrecht oder den Haus- und Grundbesitzerverein in Ihrer Region.
            </p>
          </div>

          <div className="prose prose-navy max-w-none text-gray-700 leading-relaxed space-y-10">
            {faqs.map((section) => (
              <section key={section.category}>
                <h2 className="text-2xl font-bold text-navy mb-6 flex items-center gap-3">
                  <span className="w-8 h-0.5 bg-teal inline-block" />
                  {section.category}
                </h2>
                <div className="space-y-6">
                  {section.questions.map((faq, i) => (
                    <div key={i} className="bg-white rounded-xl border border-gray-200 p-6">
                      <h3 className="font-bold text-navy text-base mb-3">{faq.q}</h3>
                      <p className="text-gray-700 text-sm leading-relaxed">{faq.a}</p>
                    </div>
                  ))}
                </div>
              </section>
            ))}

            {/* Internal links */}
            <section className="bg-white rounded-xl border border-gray-200 p-6">
              <h2 className="text-xl font-bold text-navy mb-4">Weiterführende Ratgeber</h2>
              <ul className="space-y-2 text-sm">
                {[
                  { href: "/blog/mietkaution-rueckzahlung", label: "Mietkaution Rückzahlung: Fristen, Rechte und was Vermieter wissen müssen" },
                  { href: "/blog/mietrecht-aenderungen-2026", label: "Mietrecht 2026: Wichtige Änderungen für Vermieter" },
                  { href: "/blog/hausverwaltung-kuendigen-vorlage", label: "Hausverwaltung kündigen: Muster und Vorlage" },
                  { href: "/blog/nebenkostenabrechnung-fehler", label: "Nebenkostenabrechnung Fehler: Die häufigsten Irrtümer" },
                  { href: "/blog/eigenbedarfskuendigung-fristen", label: "Eigenbedarfskündigung: Fristen und Voraussetzungen" },
                ].map((link) => (
                  <li key={link.href}>
                    <Link href={link.href} className="text-teal hover:underline">
                      → {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </section>

            {/* CTA */}
            <section className="bg-navy rounded-2xl p-8 text-white text-center">
              <h2 className="text-2xl font-bold mb-3">Hausverwaltung, die Mietrecht kennt</h2>
              <p className="text-white/80 mb-6 max-w-md mx-auto">
                Unsere Hausverwaltung übernimmt alle mietrechtlichen Aufgaben — von der Mieterhöhung bis zur Nebenkostenabrechnung. Korrekt, fristgerecht und transparent.
              </p>
              <Link
                href="/anfrage"
                className="inline-flex items-center gap-2 bg-teal text-white px-8 py-4 rounded-xl font-semibold text-base hover:bg-teal/90 transition-all hover:shadow-lg"
              >
                Jetzt kostenlos anfragen →
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
