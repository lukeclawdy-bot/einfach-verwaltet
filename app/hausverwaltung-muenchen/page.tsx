import type { Metadata } from "next";
import Link from "next/link";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import {
  CheckIcon,
  ArrowRightIcon,
  BuildingIcon,
  ShieldIcon,
  ClockIcon,
  StarIcon,
} from "@/components/Icons";

export const metadata: Metadata = {
  title: "Hausverwaltung München | einfach verwaltet.",
  description:
    "Professionelle Hausverwaltung in München — WEG & Mietverwaltung ab €24/Einheit. 24h Reaktionszeit. Jetzt kostenloses Angebot anfragen.",
  alternates: {
    canonical: "https://einfach-verwaltet.de/hausverwaltung-muenchen",
  },
  openGraph: {
    title: "Hausverwaltung München | einfach verwaltet.",
    description:
      "Hausverwaltung in München für WEG & Mietverwaltung. Digital, transparent, ab €24/Einheit. Jetzt Angebot sichern.",
  },
};

const localStructuredData = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "einfach verwaltet. — Hausverwaltung München",
  description:
    "Professionelle Hausverwaltung in München für Miet- und WEG-Immobilien. Digital, transparent, immer erreichbar.",
  url: "https://einfach-verwaltet.de/hausverwaltung-muenchen",
  areaServed: [
    { "@type": "City", name: "München" },
    { "@type": "City", name: "Hamburg" },
    { "@type": "City", name: "Berlin" },
  ],
  serviceType: ["Mietverwaltung", "WEG-Verwaltung", "Hausverwaltung"],
  priceRange: "€€",
  telephone: "+49-40-0000000",
  address: {
    "@type": "PostalAddress",
    addressLocality: "München",
    addressCountry: "DE",
  },
};

const faqStructuredData = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Was kostet eine Hausverwaltung in München?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Eine Hausverwaltung in München kostet typischerweise €22–45 pro Einheit und Monat. einfach verwaltet. bietet professionelle Hausverwaltung ab €24/Einheit inkl. Mieterbetreuung, Nebenkostenabrechnung und digitalem Portal.",
      },
    },
    {
      "@type": "Question",
      name: "Welche Stadtteile in München betreut einfach verwaltet.?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "einfach verwaltet. betreut Immobilien in Schwabing, Maxvorstadt, Bogenhausen, Haidhausen, Neuhausen, Sendling, Lehel, Au-Haidhausen, Glockenbach und Schwanthalerhöhe sowie allen weiteren Münchner Stadtteilen.",
      },
    },
    {
      "@type": "Question",
      name: "Wie funktioniert der Milieuschutz in München?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "München hat in 39 Gebieten das Soziale Erhaltungsrecht (Milieuschutz) aktiviert. Neuanmietungen dürfen hier maximal 10% über der ortsüblichen Vergleichsmiete liegen.",
      },
    },
    {
      "@type": "Question",
      name: "Was ist der Mietspiegel München 2024?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Der Mietspiegel München 2024 ist der höchste Deutschlands: €19,50/qm bei Neubau, €13-17/qm bei Bestandswohnungen. Der Mietspiegel München bildet die Basis für alle Miethöhen.",
      },
    },
    {
      "@type": "Question",
      name: "Wie wechsle ich die Hausverwaltung in München?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Der Wechsel der Hausverwaltung in München erfordert eine ordentliche Kündigung (meist 3 Monate zum Jahresende). Wir übernehmen die Kommunikation, Datenmigration und Mieterinformation.",
      },
    },
  ],
};

const features = [
  {
    icon: ClockIcon,
    title: "Reaktionszeit unter 15 Minuten",
    desc: "Mieteranfragen werden rund um die Uhr bearbeitet — keine Warteschleifen, kein Anrufbeantworter.",
  },
  {
    icon: BuildingIcon,
    title: "Münchner Mietrecht-Expertise",
    desc: "Mietspiegel München, Soziales Erhaltungsrecht, §558 BGB — wir kennen die höchste Mietpreisregion Deutschlands.",
  },
  {
    icon: ShieldIcon,
    title: "DSGVO-konformes Dokumentenportal",
    desc: "Alle Mietverträge, Abrechnungen und Protokolle sicher digital verfügbar — für Sie und Ihre Mieter.",
  },
  {
    icon: StarIcon,
    title: "Transparente Abrechnung",
    desc: "Echtzeit-Dashboard statt Papierberge. Sehen Sie jeden Euro — Einnahmen, Ausgaben, Rücklagen.",
  },
];

const bezirke = [
  "Schwabing",
  "Maxvorstadt",
  "Bogenhausen",
  "Haidhausen",
  "Neuhausen",
  "Sendling",
  "Lehel",
  "Au-Haidhausen",
  "Glockenbach",
  "Schwanthalerhöhe",
];

const leistungen = [
  "Mieterbetreuung & Kommunikation",
  "Nebenkostenabrechnung (NKA) nach §556 BGB",
  "Mieterhöhungen nach Münchner Mietspiegel",
  "Handwerker-Koordination & Auftragsvergabe",
  "WEG-Eigentümerversammlung & Beschlussprotokoll",
  "Jahresabrechnung & Wirtschaftsplan",
  "Digitales Mieterportal (Tickets, Dokumente)",
  "Vermietungsbegleitung & Mieterwechsel",
  "Energieausweis-Verwaltung (§16a GEG)",
  "Mahnung & SEPA-Einzug",
];

export default function HausverwaltungMuenchenPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localStructuredData) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqStructuredData) }}
      />
      <Navbar />
      <main className="pt-20 min-h-screen bg-warm-white">
        {/* Hero */}
        <section className="bg-navy text-white py-20 px-6">
          <div className="max-w-[1100px] mx-auto">
            <div className="max-w-2xl">
              <div className="inline-flex items-center gap-2 bg-white/10 rounded-full px-4 py-1.5 text-sm font-medium mb-6">
                <BuildingIcon className="w-4 h-4" />
                München
              </div>
              <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-5">
                Hausverwaltung München
              </h1>
              <p className="text-lg text-white/80 mb-8 leading-relaxed">
                Ihr zuverlässiger Partner für WEG- und Mietverwaltung in München. Professionell, digital, immer erreichbar — ab €24/Einheit/Monat.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="/anfrage"
                  className="inline-flex items-center justify-center gap-2 bg-teal text-white px-7 py-4 rounded-xl font-semibold text-base hover:bg-teal/90 transition-all hover:shadow-lg"
                >
                  Kostenlos anfragen
                  <ArrowRightIcon className="w-5 h-5" />
                </Link>
                <Link
                  href="/preise"
                  className="inline-flex items-center justify-center gap-2 bg-white/10 text-white border border-white/30 px-7 py-4 rounded-xl font-semibold text-base hover:bg-white/20 transition-all"
                >
                  Preise ansehen
                </Link>
              </div>
              <div className="mt-8 flex flex-wrap items-center gap-6 text-sm text-white/60">
                <span className="flex items-center gap-1.5"><CheckIcon className="w-4 h-4 text-teal" />Kostenlos & unverbindlich</span>
                <span className="flex items-center gap-1.5"><CheckIcon className="w-4 h-4 text-teal" />Antwort am selben Tag</span>
                <span className="flex items-center gap-1.5"><CheckIcon className="w-4 h-4 text-teal" />§34c GewO lizenziert</span>
              </div>
            </div>
          </div>
        </section>

        {/* Features */}
        <section className="py-16 px-6 bg-white">
          <div className="max-w-[1100px] mx-auto">
            <h2 className="text-2xl font-bold text-navy text-center mb-10">
              Warum einfach verwaltet. für München?
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {features.map((f) => (
                <div key={f.title} className="bg-warm-white rounded-2xl p-6">
                  <div className="w-10 h-10 bg-teal/10 rounded-xl flex items-center justify-center mb-4">
                    <f.icon className="w-5 h-5 text-teal" />
                  </div>
                  <h3 className="font-bold text-navy text-sm mb-2">{f.title}</h3>
                  <p className="text-xs text-text-light leading-relaxed">{f.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Leistungen */}
        <section className="py-16 px-6">
          <div className="max-w-[1100px] mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-start">
              <div>
                <h2 className="text-2xl font-bold text-navy mb-6">
                  Leistungen der Hausverwaltung München
                </h2>
                <ul className="space-y-3">
                  {leistungen.map((l) => (
                    <li key={l} className="flex items-center gap-3 text-sm text-gray-700">
                      <CheckIcon className="w-4 h-4 text-teal flex-shrink-0" />
                      {l}
                    </li>
                  ))}
                </ul>
                <div className="mt-8">
                  <Link
                    href="/anfrage"
                    className="inline-flex items-center gap-2 bg-navy text-white px-6 py-3 rounded-xl font-semibold text-sm hover:bg-navy/85 transition-all"
                  >
                    Angebot für Münchner Immobilie
                    <ArrowRightIcon className="w-4 h-4" />
                  </Link>
                </div>
              </div>
              <div>
                <h2 className="text-2xl font-bold text-navy mb-6">
                  Münchner Bezirke & Stadtteile
                </h2>
                <div className="grid grid-cols-2 gap-2">
                  {bezirke.map((b) => (
                    <div key={b} className="flex items-center gap-2 text-sm text-gray-700 bg-white rounded-xl px-4 py-2.5 border border-gray-100">
                      <CheckIcon className="w-3.5 h-3.5 text-teal flex-shrink-0" />
                      {b}
                    </div>
                  ))}
                </div>
                <p className="mt-4 text-xs text-text-light">
                  Und alle weiteren Münchner Stadtteile — digitale Prozesse ohne geografische Einschränkungen.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Munich specifics */}
        <section className="py-16 px-6 bg-navy/5">
          <div className="max-w-[1100px] mx-auto">
            <h2 className="text-2xl font-bold text-navy text-center mb-10">
              München-Spezial: Lokales Mietrecht
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white rounded-2xl p-6 border border-gray-100">
                <h3 className="font-bold text-navy mb-2">Mietspiegel München 2024</h3>
                <p className="text-sm text-gray-700 leading-relaxed mb-4">
                  München hat den höchsten Mietspiegel Deutschlands. Bei Neubau werden im Durchschnitt €19,50/qm verlangt. Bestandswohnungen liegen bei €13-17/qm. Diese hohe Nachfrage erfordert professionelle Vermietungsbetreuung und Marktkenntnis.
                </p>
                <div className="text-sm text-teal font-medium">
                  Quelle: Mietspiegel München 2024
                </div>
              </div>
              <div className="bg-white rounded-2xl p-6 border border-gray-100">
                <h3 className="font-bold text-navy mb-2">Soziales Erhaltungsrecht (Milieuschutz)</h3>
                <p className="text-sm text-gray-700 leading-relaxed mb-4">
                  In 39 Münchner Gebieten gilt das Soziale Erhaltungsrecht. Miethöhungen bei Neuanmietungen dürfen hier maximal 10% über der ortsüblichen Vergleichsmiete liegen. Wir prüfen automatisch vor jeder Anpassung.
                </p>
                <div className="text-sm text-teal font-medium">
                  Quelle: Landeshauptstadt München
                </div>
              </div>
              <div className="bg-white rounded-2xl p-6 border border-gray-100">
                <h3 className="font-bold text-navy mb-2">Hohe Eigentumswohnungsdichte</h3>
                <p className="text-sm text-gray-700 leading-relaxed mb-4">
                  München zählt zu den Städten mit der höchsten Wohnungseigentumsdichte. Über 35% sind Eigentumswohnungen — das bedeutet hohe Nachfrage nach professioneller WEG-Verwaltung.
                </p>
                <div className="text-sm text-teal font-medium">
                  Quelle: Destatis 2024
                </div>
              </div>
              <div className="bg-white rounded-2xl p-6 border border-gray-100">
                <h3 className="font-bold text-navy mb-2">WEG-Expertise für München</h3>
                <p className="text-sm text-gray-700 leading-relaxed mb-4">
                  WEG-Verwaltung in München erfordert besondere Sorgfalt bei Beschlussprotokollen, Rücklagenbildung und Eigentümerversammlungen. Mit unserem digitalen Portal behalten alle Eigentümer die Wirtschaftslage im Blick.
                </p>
                <div className="text-sm text-teal font-medium">
                  Inkl. §24 WEG-konformer Beschlussprotokolle
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Pricing teaser */}
        <section className="py-16 px-6 bg-white">
          <div className="max-w-[700px] mx-auto text-center">
            <h2 className="text-2xl font-bold text-navy mb-4">
              Hausverwaltung München Kosten
            </h2>
            <p className="text-text-light mb-8">
              Transparente Preise — keine versteckten Kosten über 1 Monat hinaus.
            </p>
            <div className="grid sm:grid-cols-2 gap-6">
              <div className="bg-warm-white rounded-2xl p-6 border-2 border-gray-100 text-left">
                <h3 className="font-bold text-navy mb-1">Mietverwaltung München</h3>
                <div className="text-3xl font-bold text-teal mb-1">ab €24</div>
                <div className="text-sm text-text-light mb-4">/Einheit/Monat</div>
                <ul className="space-y-2 text-sm text-gray-700">
                  {["Mieterbetreuung 24/7", "Nebenkostenabrechnung", "Mahnung & SEPA", "Digitales Portal"].map((i) => (
                    <li key={i} className="flex items-center gap-2">
                      <CheckIcon className="w-3.5 h-3.5 text-teal flex-shrink-0" />
                      {i}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="bg-navy rounded-2xl p-6 text-left">
                <h3 className="font-bold text-white mb-1">WEG-Verwaltung München</h3>
                <div className="text-3xl font-bold text-teal mb-1">ab €28</div>
                <div className="text-sm text-white/60 mb-4">/Einheit/Monat</div>
                <ul className="space-y-2 text-sm text-white/80">
                  {["Alles aus Mietverwaltung", "Eigentümerversammlung", "Beschlussprotokoll", "Jahresabrechnung WEG"].map((i) => (
                    <li key={i} className="flex items-center gap-2">
                      <CheckIcon className="w-3.5 h-3.5 text-teal flex-shrink-0" />
                      {i}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="mt-8">
              <Link
                href="/anfrage"
                className="inline-flex items-center gap-2 bg-teal text-white px-8 py-4 rounded-xl font-semibold hover:bg-teal/90 transition-all hover:shadow-md"
              >
                Kostenloses Angebot anfordern
                <ArrowRightIcon className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-16 px-6">
          <div className="max-w-[700px] mx-auto">
            <h2 className="text-2xl font-bold text-navy text-center mb-8">
              Häufige Fragen — Hausverwaltung München
            </h2>
            <div className="space-y-4">
              {[
                {
                  q: "Was kostet eine Hausverwaltung in München?",
                  a: "Eine professionelle Hausverwaltung in München kostet typischerweise €22–45 pro Einheit und Monat. einfach verwaltet. bietet Mietverwaltung ab €24/Einheit und WEG-Verwaltung ab €28/Einheit. Keine Mindestvertragslaufzeit über 1 Monat, keine versteckten Gebühren.",
                },
                {
                  q: "Welche Stadtteile betreut einfach verwaltet. in München?",
                  a: "Wir verwalten Immobilien in allen zentralen Münchner Stadtteilen: Schwabing, Maxvorstadt, Bogenhausen, Haidhausen, Neuhausen, Sendling, Lehel, Au-Haidhausen, Glockenbach und Schwanthalerhöhe. Das digitale System ermöglicht effiziente Verwaltung in ganz München.",
                },
                {
                  q: "Wie funktioniert der Milieuschutz in München?",
                  a: "München hat das Soziale Erhaltungsrecht in 39 Gebieten aktiviert. Bei Neuanmietungen darf die Miete maximal 10% über der ortsüblichen Vergleichsmiete liegen. Wir prüfen bei jeder Mieterhöhung automatisch die geltenden Milieuschutzbestimmungen für Ihr Objekt.",
                },
                {
                  q: "Was ist besonders am Mietspiegel München?",
                  a: "Der Mietspiegel München 2024 liegt mit durchschnittlich €19,50/qm bei Neubau und €13-17/qm bei Bestandswohnungen an der Spitze Deutschlands. Die hohe Nachfrage erfordert professionelle Marktkenntnis bei Vermietung und Mieterhöhungen.",
                },
                {
                  q: "Wie funktioniert der Wechsel der Hausverwaltung in München?",
                  a: "Nach ordentlicher Kündigung (meist 3 Monate) übernehmen wir alle Unterlagen, informieren die Mieter und stellen das digitale Portal ein. Wir begleiten den gesamten Prozess und kümmern uns um die Kommunikation mit dem bisherigen Verwalter.",
                },
              ].map((faq, i) => (
                <div key={i} className="bg-white rounded-xl border border-gray-100 p-5">
                  <h3 className="font-semibold text-navy text-sm mb-2">{faq.q}</h3>
                  <p className="text-sm text-gray-700 leading-relaxed">{faq.a}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Bottom CTA */}
        <section className="py-16 px-6 bg-navy">
          <div className="max-w-[600px] mx-auto text-center">
            <h2 className="text-2xl font-bold text-white mb-3">
              Münchner Immobilie abgeben?
            </h2>
            <p className="text-white/70 mb-8">
              Kostenlos anfragen — wir melden uns am selben Tag mit einem individuellen Angebot.
            </p>
            <Link
              href="/anfrage"
              className="inline-flex items-center gap-2 bg-teal text-white px-8 py-4 rounded-xl font-semibold text-base hover:bg-teal/90 transition-all hover:shadow-lg"
            >
              Jetzt Angebot anfragen
              <ArrowRightIcon className="w-5 h-5" />
            </Link>
            <p className="mt-4 text-xs text-white/40">Kostenlos & unverbindlich · Antwort am selben Tag</p>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
