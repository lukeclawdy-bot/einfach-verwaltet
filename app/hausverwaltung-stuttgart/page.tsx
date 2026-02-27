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
  title: "Hausverwaltung Stuttgart — Professionelle Mietverwaltung | einfach verwaltet.",
  description:
    "Professionelle Hausverwaltung in Stuttgart: Mietverwaltung & WEG-Verwaltung ab EUR24/Einheit. Transparent, digital, immer erreichbar. Jetzt Angebot anfragen.",
  alternates: {
    canonical: "https://einfach-verwaltet.de/hausverwaltung-stuttgart",
  },
  openGraph: {
    title: "Hausverwaltung Stuttgart — einfach verwaltet.",
    description:
      "Moderne Hausverwaltung in Stuttgart. Mietverwaltung & WEG-Verwaltung, digitale Kommunikation, transparente Abrechnung. Baden-Wurttemberg Spezialist.",
  },
};

const localStructuredData = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "einfach verwaltet. — Hausverwaltung Stuttgart",
  description:
    "Professionelle Hausverwaltung in Stuttgart fur Miet- und WEG-Immobilien. Digital, transparent, immer erreichbar. Baden-Wurttemberg Experte.",
  url: "https://einfach-verwaltet.de/hausverwaltung-stuttgart",
  areaServed: [
    { "@type": "City", name: "Stuttgart" },
    { "@type": "State", name: "Baden-Wurttemberg" },
    { "@type": "City", name: "Ludwigsburg" },
    { "@type": "City", name: "Esslingen" },
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
      name: "Was kostet eine Hausverwaltung in Stuttgart?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Eine professionelle Hausverwaltung in Stuttgart kostet typischerweise EUR24-34 pro Einheit und Monat. einfach verwaltet. bietet Mietverwaltung ab EUR24/Einheit und WEG-Verwaltung ab EUR28/Einheit. Transparente Preise ohne versteckte Gebuhren.",
      },
    },
    {
      "@type": "Question",
      name: "Welche Stadtteile in Stuttgart betreut einfach verwaltet.?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "einfach verwaltet. betreut Immobilien in allen Stuttgarter Stadtteilen -- von der Innenstadt, West und Sud uber Stuttgart-Vaihingen, Stuttgart-Mohringen und Stuttgart-Plieningen bis Feuerbach, Bad Cannstatt, Zuffenhausen und Degerloch. Digitale Prozesse ermoglichen effiziente Verwaltung in ganz Stuttgart und Baden-Wurttemberg.",
      },
    },
    {
      "@type": "Question",
      name: "Wie schnell kann einfach verwaltet. meine Stuttgarter Immobilie ubernehmen?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Nach Vertragsunterzeichnung und Datenubergabe dauert der Onboarding-Prozess in der Regel 2-4 Wochen. Fur dringende Falle (z. B. Vertragskundigung des bisherigen Verwalters) bieten wir beschleunigtes Onboarding an.",
      },
    },
    {
      "@type": "Question",
      name: "Gibt es Besonderheiten beim baden-wurttembergischen Mietrecht?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Baden-Wurttemberg hat aktuell keine landesspezifischen Mietrechtsabweichungen zum Bundesrecht. Allerdings kennt Baden-Wurttemberg das Heizkostenverfahren nach den Richtlinien VDI 2077, das hier besonders streng angewendet wird. Zudem gibt es landesspezifische Regelungen bei der Heizkostenverteilung und der energetischen Sanierung.",
      },
    },
    {
      "@type": "Question",
      name: "Wie ist der Immobilienmarkt in Stuttgart?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Stuttgart gehort zu den teuersten Wohnungsmarkten Deutschlands. Die Mieten liegen mit uber EUR15/qm deutlich uber dem Bundesdurchschnitt. Als Industriestandort (Daimler, Porsche, Bosch) besteht hohe Nachfrage nach Wohnraum. Die Region hat eine starke Wirtschaft mit vielen hochqualifizierten Mietern.",
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
    title: "Baden-Wurttemberg Expertise",
    desc: "Stuttgarter Mietspiegel, VDI 2077 Heizkosten, energetische Sanierung -- wir kennen die Besonderheiten des Marktes.",
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
  "Stuttgart-West",
  "Stuttgart-Sud",
  "Feuerbach",
  "Bad Cannstatt",
  "Vaihingen",
  "Mohringen",
  "Plieningen",
  "Zuffenhausen",
  "Degerloch",
  "Sillenbuch",
  "Unterturkheim",
];

const leistungen = [
  "Mieterbetreuung & Kommunikation",
  "Nebenkostenabrechnung (NKA) nach SS556 BGB",
  "Mieterhohungen nach Stuttgarter Mietspiegel",
  "Handwerker-Koordination & Auftragsvergabe",
  "WEG-Eigentumerversammlung & Beschlussprotokoll",
  "Jahresabrechnung & Wirtschaftsplan",
  "Digitales Mieterportal (Tickets, Dokumente)",
  "Vermietungsbegleitung & Mieterwechsel",
  "Energieausweis-Verwaltung (SS16a GEG)",
  "Mahnung & SEPA-Einzug",
];

export default function HausverwaltungStuttgartPage() {
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
                Baden-Wurttemberg
              </div>
              <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-5">
                Hausverwaltung Stuttgart --<br />
                <span className="text-teal">einfach verwaltet.</span>
              </h1>
              <p className="text-lg text-white/80 mb-8 leading-relaxed">
                Professionelle Mietverwaltung & WEG-Verwaltung fur Stuttgarter Immobilien. Digital, transparent, immer erreichbar -- ab EUR24/Einheit/Monat.
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
              Warum einfach verwaltet. fur Stuttgart?
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
                  Leistungen der Hausverwaltung Stuttgart
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
                    Angebot fur Stuttgarter Immobilie
                    <ArrowRightIcon className="w-4 h-4" />
                  </Link>
                </div>
              </div>
              <div>
                <h2 className="text-2xl font-bold text-navy mb-6">
                  Alle Stuttgarter Stadtteile
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
                  Und alle weiteren Stadtteile -- digitale Prozesse ohne geografische Einschrankungen.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Pricing teaser */}
        <section className="py-16 px-6 bg-white">
          <div className="max-w-[700px] mx-auto text-center">
            <h2 className="text-2xl font-bold text-navy mb-4">
              Hausverwaltung Stuttgart Kosten
            </h2>
            <p className="text-text-light mb-8">
              Transparente Preise -- keine versteckten Kosten, keine Mindestvertragslaufzeit uber 1 Jahr.
            </p>
            <div className="grid sm:grid-cols-2 gap-6">
              <div className="bg-warm-white rounded-2xl p-6 border-2 border-gray-100 text-left">
                <h3 className="font-bold text-navy mb-1">Mietverwaltung Stuttgart</h3>
                <div className="text-2xl font-bold text-teal mb-1">EUR24-34</div>
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
                <h3 className="font-bold text-white mb-1">WEG-Verwaltung Stuttgart</h3>
                <div className="text-2xl font-bold text-teal mb-1">EUR28-34</div>
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
              Haugste Fragen -- Hausverwaltung Stuttgart
            </h2>
            <div className="space-y-4">
              {[
                {
                  q: "Was kostet eine Hausverwaltung in Stuttgart?",
                  a: "Eine professionelle Hausverwaltung in Stuttgart kostet typischerweise EUR24-34 pro Einheit und Monat. einfach verwaltet. bietet Mietverwaltung ab EUR24/Einheit und WEG-Verwaltung ab EUR28/Einheit. Keine Mindestvertragslaufzeit uber ein Jahr, keine versteckten Gebuhren.",
                },
                {
                  q: "Welche Stadtteile betreut einfach verwaltet. in Stuttgart?",
                  a: "Wir verwalten Immobilien in allen Stuttgarter Stadtteilen -- von der Innenstadt, West und Sud uber Vaihingen, Mohringen und Feuerbach bis Bad Cannstatt, Zuffenhausen und Degerloch. Digitale Prozesse ermoglichen effiziente Verwaltung in ganz Stuttgart und Baden-Wurttemberg.",
                },
                {
                  q: "Wie funktioniert der Wechsel der Hausverwaltung in Stuttgart?",
                  a: "Der Wechsel ist einfacher als gedacht: Nach der Kundigung (meist 3 Monate zum Jahresende) ubernehmen wir alle Unterlagen, informieren die Mieter und stellen das Portal ein. Unser Onboarding-Team begleitet den gesamten Prozess.",
                },
                {
                  q: "Gibt es Besonderheiten beim baden-wurttembergischen Mietrecht?",
                  a: "Baden-Wurttemberg kennt besonders strenge Anforderungen bei der Heizkostenabrechnung nach VDI 2077. Zudem gibt es landesspezifische Eigenheiten bei energetischen Sanierungen. Wir kennen die Stuttgarter Marktbesonderheiten und die Vorgaben des Landes Baden-Wurttemberg.",
                },
                {
                  q: "Was zeichnet den Stuttgarter Immobilienmarkt aus?",
                  a: "Stuttgart gehort zu den teuersten Wohnungsmarkten Deutschlands mit Mieten uber EUR15/qm. Als Standort von Daimler, Porsche und Bosch herrscht hohe Nachfrage nach Wohnraum. Die Region bietet jedoch auch besonders solvente Mieter und eine stabile Wirtschaft.",
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
              Stuttgarter Immobilie abgeben?
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
