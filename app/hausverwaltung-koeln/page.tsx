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
  title: "Hausverwaltung Koln — Professionelle Mietverwaltung | einfach verwaltet.",
  description:
    "Professionelle Hausverwaltung in Koln: Mietverwaltung & WEG-Verwaltung ab EUR24/Einheit. Transparent, digital, immer erreichbar. Jetzt Angebot anfragen.",
  alternates: {
    canonical: "https://einfach-verwaltet.de/hausverwaltung-koeln",
  },
  openGraph: {
    title: "Hausverwaltung Koln — einfach verwaltet.",
    description:
      "Moderne Hausverwaltung in Koln. Mietverwaltung & WEG-Verwaltung, digitale Kommunikation, transparente Abrechnung. Ab EUR24/Einheit.",
  },
};

const localStructuredData = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "einfach verwaltet. — Hausverwaltung Koln",
  description:
    "Professionelle Hausverwaltung in Koln fur Miet- und WEG-Immobilien. Digital, transparent, immer erreichbar.",
  url: "https://einfach-verwaltet.de/hausverwaltung-koeln",
  areaServed: [
    { "@type": "City", name: "Koln" },
    { "@type": "City", name: "Leverkusen" },
    { "@type": "City", name: "Bergisch Gladbach" },
  ],
  serviceType: ["Mietverwaltung", "WEG-Verwaltung", "Hausverwaltung"],
  priceRange: "EUR",
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
      name: "Was kostet eine Hausverwaltung in Koln?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Eine professionelle Hausverwaltung in Koln kostet typischerweise EUR20-35 pro Einheit und Monat. einfach verwaltet. bietet Mietverwaltung ab EUR24/Einheit und WEG-Verwaltung ab EUR28/Einheit. Transparente Preise ohne versteckte Gebuhren.",
      },
    },
    {
      "@type": "Question",
      name: "Welche Stadtteile in Koln betreut einfach verwaltet.?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "einfach verwaltet. betreut Immobilien in allen Kolner Stadtteilen -- von der Innenstadt, Neustadt-Sud und Neustadt-Nord uber Ehrenfeld, Nippes, Mulheim und Kalk bis Porz, Rodenkirchen und Zollstock. Digitale Prozesse ermoglichen effiziente Verwaltung in ganz Koln.",
      },
    },
    {
      "@type": "Question",
      name: "Wie schnell kann einfach verwaltet. meine Kolner Immobilie ubernehmen?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Nach Vertragsunterzeichnung und Datenubergabe dauert der Onboarding-Prozess in der Regel 2-4 Wochen. Fur dringende Falle (z. B. Vertragskundigung des bisherigen Verwalters) bieten wir beschleunigtes Onboarding an.",
      },
    },
    {
      "@type": "Question",
      name: "Gibt es Besonderheiten beim Kolner Mietrecht und Wohnungsmarkt?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Koln ist ein angespannter Wohnungsmarkt mit hoher Nachfrage und steigenden Mieten. Die Mietpreisbremse gilt in ausgewiesenen Gebieten. Ein professioneller Hausverwalter kennt den Kolner Mietspiegel und lokale Regelungen -- etwa spezifische Anforderungen an Altbauten im historischen Stadtbild.",
      },
    },
    {
      "@type": "Question",
      name: "Was ist typisch bei der Hausverwaltung in Koln?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Als Medien- und Messestadt hat Koln eine besondere Mietstruktur mit vielen befristeten Mietvertragen wahrend Messen wie der gamescom oder der Art Cologne. Immobilien im Kolner Umland (Leverkusen, Bergisch Gladbach) gewinnen zunehmend an Bedeutung als alternativer Wohnraum.",
      },
    },
  ],
};

const features = [
  {
    icon: ClockIcon,
    title: "Reaktionszeit unter 15 Minuten",
    desc: "Mieteranfragen werden rund um die Uhr bearbeitet -- keine Warteschleifen, kein Anrufbeantworter.",
  },
  {
    icon: BuildingIcon,
    title: "Kolner Mietrecht-Expertise",
    desc: "Kolner Mietspiegel, Mietpreisbremse, befristete Mietvertrage bei Messen -- wir kennen die lokalen Besonderheiten.",
  },
  {
    icon: ShieldIcon,
    title: "DSGVO-konformes Dokumentenportal",
    desc: "Alle Mietvertrage, Abrechnungen und Protokolle sicher digital verfugbar -- fur Sie und Ihre Mieter.",
  },
  {
    icon: StarIcon,
    title: "Transparente Abrechnung",
    desc: "Echtzeit-Dashboard statt Papierberge. Sehen Sie jeden Euro -- Einnahmen, Ausgaben, Rucklagen.",
  },
];

const stadtteile = [
  "Innenstadt",
  "Altstadt-Nord",
  "Altstadt-Sud",
  "Neustadt-Nord",
  "Neustadt-Sud",
  "Ehrenfeld",
  "Nippes",
  "Mulheim",
  "Kalk",
  "Porz",
  "Rodenkirchen",
  "Zollstock",
];

const leistungen = [
  "Mieterbetreuung & Kommunikation",
  "Nebenkostenabrechnung (NKA) nach SS556 BGB",
  "Mieterhohungen nach Kolner Mietspiegel",
  "Handwerker-Koordination & Auftragsvergabe",
  "WEG-Eigentumerversammlung & Beschlussprotokoll",
  "Jahresabrechnung & Wirtschaftsplan",
  "Digitales Mieterportal (Tickets, Dokumente)",
  "Vermietungsbegleitung & Mieterwechsel",
  "Energieausweis-Verwaltung (SS16a GEG)",
  "Mahnung & SEPA-Einzug",
];

export default function HausverwaltungKolnPage() {
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
                Rheinland & NRW
              </div>
              <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-5">
                Hausverwaltung Koln --<br />
                <span className="text-teal">einfach verwaltet.</span>
              </h1>
              <p className="text-lg text-white/80 mb-8 leading-relaxed">
                Professionelle Mietverwaltung & WEG-Verwaltung fur Kolner Immobilien. Digital, transparent, immer erreichbar -- ab EUR24/Einheit/Monat.
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
                <span className="flex items-center gap-1.5"><CheckIcon className="w-4 h-4 text-teal" />SS34c GewO lizenziert</span>
              </div>
            </div>
          </div>
        </section>

        {/* Features */}
        <section className="py-16 px-6 bg-white">
          <div className="max-w-[1100px] mx-auto">
            <h2 className="text-2xl font-bold text-navy text-center mb-10">
              Warum einfach verwaltet. fur Koln?
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
                  Leistungen der Hausverwaltung Koln
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
                    Angebot fur Kolner Immobilie
                    <ArrowRightIcon className="w-4 h-4" />
                  </Link>
                </div>
              </div>
              <div>
                <h2 className="text-2xl font-bold text-navy mb-6">
                  Alle Kolner Stadtteile
                </h2>
                <div className="grid grid-cols-2 gap-2">
                  {stadtteile.map((s) => (
                    <div key={s} className="flex items-center gap-2 text-sm text-gray-700 bg-white rounded-xl px-4 py-2.5 border border-gray-100">
                      <CheckIcon className="w-3.5 h-3.5 text-teal flex-shrink-0" />
                      {s}
                    </div>
                  ))}
                </div>
                <p className="mt-4 text-xs text-text-light">
                  Und alle weiteren Kolner Stadtteile -- digitale Prozesse ohne geografische Einschrankungen.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Pricing teaser */}
        <section className="py-16 px-6 bg-white">
          <div className="max-w-[700px] mx-auto text-center">
            <h2 className="text-2xl font-bold text-navy mb-4">
              Hausverwaltung Koln Kosten
            </h2>
            <p className="text-text-light mb-8">
              Transparente Preise -- keine versteckten Kosten, keine Mindestvertragslaufzeit uber 1 Jahr.
            </p>
            <div className="grid sm:grid-cols-2 gap-6">
              <div className="bg-warm-white rounded-2xl p-6 border-2 border-gray-100 text-left">
                <h3 className="font-bold text-navy mb-1">Mietverwaltung Koln</h3>
                <div className="text-3xl font-bold text-teal mb-1">ab EUR24</div>
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
                <h3 className="font-bold text-white mb-1">WEG-Verwaltung Koln</h3>
                <div className="text-3xl font-bold text-teal mb-1">ab EUR28</div>
                <div className="text-sm text-white/60 mb-4">/Einheit/Monat</div>
                <ul className="space-y-2 text-sm text-white/80">
                  {["Alles aus Mietverwaltung", "Eigentumerversammlung", "Beschlussprotokoll", "Jahresabrechnung WEG"].map((i) => (
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
              Haugste Fragen -- Hausverwaltung Koln
            </h2>
            <div className="space-y-4">
              {[
                {
                  q: "Was kostet eine Hausverwaltung in Koln?",
                  a: "Eine professionelle Hausverwaltung in Koln kostet typischerweise EUR20-35 pro Einheit und Monat. einfach verwaltet. bietet Mietverwaltung ab EUR24/Einheit und WEG-Verwaltung ab EUR28/Einheit. Keine Mindestvertragslaufzeit uber ein Jahr, keine versteckten Gebuhren.",
                },
                {
                  q: "Welche Stadtteile betreut einfach verwaltet. in Koln?",
                  a: "Wir verwalten Immobilien in allen Kolner Stadtteilen -- von der Innenstadt, Altstadt-Nord, Neustadt-Sud uber Ehrenfeld und Nippes bis Mulheim, Kalk, Porz, Rodenkirchen und Zollstock. Digitale Prozesse ermoglichen effiziente Verwaltung in ganz Koln und dem Umland.",
                },
                {
                  q: "Wie funktioniert der Wechsel der Hausverwaltung in Koln?",
                  a: "Der Wechsel ist einfacher als gedacht: Nach der Kundigung (meist 3 Monate zum Jahresende) ubernehmen wir alle Unterlagen, informieren die Mieter und stellen das Portal ein. Unser Onboarding-Team begleitet den gesamten Prozess.",
                },
                {
                  q: "Gibt es Besonderheiten beim Kolner Mietrecht?",
                  a: "Ja -- Koln ist ein angespannter Wohnungsmarkt mit hoher Nachfrage. Die Mietpreisbremse gilt in ausgewiesenen Gebieten. Als Messe- und Medienstadt gibt es besondere Mietstrukturen mit befristeten Vertragen. Wir kennen den Kolner Mietspiegel und lokale Regelungen.",
                },
                {
                  q: "Was zeichnet den Kolner Immobilienmarkt aus?",
                  a: "Koln ist im Rheinland das wirtschaftliche und kulturelle Zentrum mit uber 1,1 Millionen Einwohnern. Besonders gefragt sind Immobilien in der Innenstadt, Ehrenfeld und Agnesviertel. Das Umland wie Leverkusen und Bergisch Gladbach gewinnt als Wohnalternativen zunehmend an Bedeutung.",
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
              Kolner Immobilie abgeben?
            </h2>
            <p className="text-white/70 mb-8">
              Kostenlos anfragen -- wir melden uns am selben Tag mit einem individuellen Angebot.
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
