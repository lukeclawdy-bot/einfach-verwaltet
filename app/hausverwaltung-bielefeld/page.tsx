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
  title: "Hausverwaltung Bielefeld — Modern, Digital & Zuverlässig | einfach verwaltet.",
  description:
    "Professionelle Hausverwaltung in Bielefeld: Mietverwaltung & WEG-Verwaltung ab €24/Einheit. Teutoburger Wald Region — transparent, digital, immer erreichbar.",
  alternates: {
    canonical: "https://einfach-verwaltet.de/hausverwaltung-bielefeld",
  },
  openGraph: {
    title: "Hausverwaltung Bielefeld — einfach verwaltet.",
    description:
      "Moderne Hausverwaltung in Bielefeld. Mietverwaltung & WEG-Verwaltung, Mitte, Schildesche, Brackwede und mehr. Ab €24/Einheit.",
  },
};

const localStructuredData = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "einfach verwaltet. — Hausverwaltung Bielefeld",
  description:
    "Professionelle Hausverwaltung in Bielefeld für Miet- und WEG-Immobilien. Digital, transparent, immer erreichbar.",
  url: "https://einfach-verwaltet.de/hausverwaltung-bielefeld",
  areaServed: [
    { "@type": "City", name: "Bielefeld" },
  ],
  serviceType: ["Mietverwaltung", "WEG-Verwaltung", "Hausverwaltung"],
  priceRange: "€€",
  telephone: "+49-40-0000000",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Hamburg",
    addressCountry: "DE",
  },
};

const faqStructuredData = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Was kostet eine Hausverwaltung in Bielefeld?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Eine Hausverwaltung in Bielefeld kostet typischerweise €18–34 pro Einheit und Monat. einfach verwaltet. bietet professionelle Hausverwaltung ab €24/Einheit inkl. Mieterbetreuung, Nebenkostenabrechnung und digitalem Portal.",
      },
    },
    {
      "@type": "Question",
      name: "Welche Bielefelder Stadtteile betreut einfach verwaltet.?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "einfach verwaltet. betreut Immobilien in allen Bielefelder Stadtteilen — von Mitte und Schildesche über Brackwede, Gadderbaum und Stieghorst bis Heepen, Sennestadt und Dornberg. Digitale Prozesse ermöglichen effiziente Verwaltung bielefeld-weit.",
      },
    },
    {
      "@type": "Question",
      name: "Hat Bielefeld eine Mietpreisbremse?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Bielefeld hat keine Mietpreisbremse nach §556d BGB. Mieterhöhungen richten sich nach dem Bielefelder Mietspiegel und §558 BGB — maximal 20% in 3 Jahren bis zur ortsüblichen Vergleichsmiete.",
      },
    },
    {
      "@type": "Question",
      name: "Wie schnell übernimmt einfach verwaltet. eine Bielefelder Immobilie?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Nach Vertragsunterzeichnung und Datenübergabe dauert das Onboarding in der Regel 2–4 Wochen. Für dringende Fälle bieten wir beschleunigtes Onboarding an.",
      },
    },
    {
      "@type": "Question",
      name: "Ist Bielefeld für Vermieter ein guter Markt?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Ja. Bielefeld (340.000 Einwohner) verfügt über eine stabile Nachfrage durch die Universität Bielefeld, die Fachhochschule und mehrere Großunternehmen (Oetker, Gildemeister). Die Leerstandsquote ist niedrig, die Mietrenditen solide.",
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
    title: "Bielefelder Markt-Expertise",
    desc: "Bielefelder Mietspiegel, Mieterhöhungsverfahren, WEG-Verwaltung in der Teutoburger-Wald-Region — wir kennen die lokalen Besonderheiten.",
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

const stadtteile = [
  "Mitte",
  "Schildesche",
  "Brackwede",
  "Gadderbaum",
  "Stieghorst",
  "Heepen",
  "Sennestadt",
  "Dornberg",
  "Joellenbeck",
  "Brake",
  "Oldentrup",
  "Jöllenbeck",
];

const leistungen = [
  "Mieterbetreuung & Kommunikation",
  "Nebenkostenabrechnung (NKA) nach §556 BGB",
  "Mieterhöhungen nach Bielefelder Mietspiegel",
  "Handwerker-Koordination & Auftragsvergabe",
  "WEG-Eigentümerversammlung & Beschlussprotokoll",
  "Jahresabrechnung & Wirtschaftsplan",
  "Digitales Mieterportal (Tickets, Dokumente)",
  "Vermietungsbegleitung & Mieterwechsel",
  "Energieausweis-Verwaltung (§16a GEG)",
  "Mahnung & SEPA-Einzug",
];

export default function HausverwaltungBielefeldPage() {
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
                Bielefeld & OWL
              </div>
              <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-5">
                Hausverwaltung Bielefeld —<br />
                <span className="text-teal">einfach verwaltet.</span>
              </h1>
              <p className="text-lg text-white/80 mb-8 leading-relaxed">
                Professionelle Mietverwaltung & WEG-Verwaltung für Bielefelder Immobilien. Von Mitte über Schildesche bis Brackwede — digital, transparent, immer erreichbar. Ab €24/Einheit/Monat.
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
              <div className="mt-8 flex items-center gap-6 text-sm text-white/60">
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
              Warum einfach verwaltet. für Bielefeld?
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

        {/* Leistungen + Stadtteile */}
        <section className="py-16 px-6">
          <div className="max-w-[1100px] mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-start">
              <div>
                <h2 className="text-2xl font-bold text-navy mb-6">
                  Leistungen der Hausverwaltung Bielefeld
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
                    Angebot für Bielefelder Immobilie
                    <ArrowRightIcon className="w-4 h-4" />
                  </Link>
                </div>
              </div>
              <div>
                <h2 className="text-2xl font-bold text-navy mb-6">
                  Alle Bielefelder Stadtteile
                </h2>
                <div className="grid grid-cols-2 gap-2">
                  {stadtteile.map((b) => (
                    <div key={b} className="flex items-center gap-2 text-sm text-gray-700 bg-white rounded-xl px-4 py-2.5 border border-gray-100">
                      <CheckIcon className="w-3.5 h-3.5 text-teal flex-shrink-0" />
                      {b}
                    </div>
                  ))}
                </div>
                <p className="mt-4 text-xs text-text-light">
                  Und alle weiteren Bielefelder Stadtteile — digitale Prozesse ohne geografische Einschränkungen.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Bielefeld local context */}
        <section className="py-16 px-6 bg-white">
          <div className="max-w-[1100px] mx-auto">
            <h2 className="text-2xl font-bold text-navy mb-6 text-center">Immobilienmarkt Bielefeld: Was Eigentümer wissen müssen</h2>
            <div className="grid md:grid-cols-3 gap-6">
              {[
                {
                  title: "Stabiler Hochschulstandort",
                  desc: "Bielefeld beherbergt die Universität Bielefeld (ca. 25.000 Studierende) und die FH Bielefeld — eine konstante Nachfrage nach kleineren Wohnungen und WGs prägt den Markt, besonders rund um das Uni-Viertel.",
                },
                {
                  title: "Industriestandort mit Ausstrahlung",
                  desc: "Oetker, Gildemeister (DMG Mori) und weitere Mittelständler sichern Beschäftigung und Wohnungsnachfrage. Sennestadt und Stieghorst profitieren von Nähe zu Industriezentren.",
                },
                {
                  title: "Wachsende Immobilienpreise",
                  desc: "Bielefeld zählt zu den dynamischsten Immobilienmärkten in NRW (außerhalb der großen Metropolen). Die Mietrenditen liegen stabil über dem NRW-Schnitt — professionelle Verwaltung sichert diese Erträge.",
                },
              ].map((item) => (
                <div key={item.title} className="bg-warm-white rounded-2xl p-6">
                  <h3 className="font-bold text-navy text-sm mb-3">{item.title}</h3>
                  <p className="text-xs text-text-light leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing */}
        <section className="py-16 px-6">
          <div className="max-w-[700px] mx-auto text-center">
            <h2 className="text-2xl font-bold text-navy mb-4">
              Hausverwaltung Bielefeld Kosten
            </h2>
            <p className="text-text-light mb-8">
              Transparente Preise — keine versteckten Kosten, keine Mindestvertragslaufzeit über 1 Jahr.
            </p>
            <div className="grid sm:grid-cols-2 gap-6">
              <div className="bg-warm-white rounded-2xl p-6 border-2 border-gray-100 text-left">
                <h3 className="font-bold text-navy mb-1">Mietverwaltung Bielefeld</h3>
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
                <h3 className="font-bold text-white mb-1">WEG-Verwaltung Bielefeld</h3>
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
        <section className="py-16 px-6 bg-white">
          <div className="max-w-[700px] mx-auto">
            <h2 className="text-2xl font-bold text-navy text-center mb-8">
              Häufige Fragen — Hausverwaltung Bielefeld
            </h2>
            <div className="space-y-4">
              {[
                {
                  q: "Was kostet eine Hausverwaltung in Bielefeld?",
                  a: "Eine professionelle Hausverwaltung in Bielefeld kostet typischerweise €18–34 pro Einheit und Monat. einfach verwaltet. bietet Mietverwaltung ab €24/Einheit und WEG-Verwaltung ab €28/Einheit — all-inclusive ohne versteckte Gebühren.",
                },
                {
                  q: "Hat Bielefeld eine Mietpreisbremse?",
                  a: "Nein, Bielefeld ist nicht als Gebiet mit angespanntem Wohnungsmarkt nach §556d BGB ausgewiesen. Mieterhöhungen orientieren sich am Bielefelder Mietspiegel — maximal 20% in 3 Jahren bis zur Vergleichsmiete sind möglich.",
                },
                {
                  q: "Wie verläuft ein Verwalterwechsel in Bielefeld?",
                  a: "Nach der Kündigung beim bisherigen Verwalter (meist 3 Monate zum Jahresende) übernehmen wir alle Unterlagen, informieren Ihre Mieter und richten das digitale Portal ein. Das Onboarding dauert 2–4 Wochen.",
                },
                {
                  q: "Betreut einfach verwaltet. auch Objekte im Umland (OWL)?",
                  a: "Ja. Neben Bielefeld verwalten wir auch Objekte im Ostwestfalen-Lippe Umland — dank digitaler Prozesse ohne geografische Einschränkungen.",
                },
                {
                  q: "Welche Besonderheiten hat die Bielefelder WEG-Verwaltung?",
                  a: "Bielefeld hat einen hohen Anteil an WEG-Anlagen aus den 1960er–1980er Jahren, die oft Sanierungsbedarf aufweisen. Wir begleiten Eigentümergemeinschaften durch Beschlussfassung, Fördermittelrecherche (z.B. KfW) und Handwerkerbeauftragung.",
                },
              ].map((faq, i) => (
                <div key={i} className="bg-warm-white rounded-xl border border-gray-100 p-5">
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
              Bielefelder Immobilie abgeben?
            </h2>
            <p className="text-white/70 mb-8">
              Kostenlos anfragen — wir melden uns am selben Tag mit einem individuellen Angebot für Ihre Bielefelder Immobilie.
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
