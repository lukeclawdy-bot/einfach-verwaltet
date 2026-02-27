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
  title: "Hausverwaltung Bonn — Modern, Digital & Zuverlässig | einfach verwaltet.",
  description:
    "Professionelle Hausverwaltung in Bonn: Mietverwaltung & WEG-Verwaltung ab €24/Einheit. Beuel, Bad Godesberg, Hardtberg — transparent, digital, immer erreichbar.",
  alternates: {
    canonical: "https://einfach-verwaltet.de/hausverwaltung-bonn",
  },
  openGraph: {
    title: "Hausverwaltung Bonn — einfach verwaltet.",
    description:
      "Moderne Hausverwaltung in Bonn. Mietverwaltung & WEG-Verwaltung in Beuel, Bad Godesberg, Hardtberg, Innenstadt. Ab €24/Einheit.",
  },
};

const localStructuredData = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "einfach verwaltet. — Hausverwaltung Bonn",
  description:
    "Professionelle Hausverwaltung in Bonn für Miet- und WEG-Immobilien. Digital, transparent, immer erreichbar.",
  url: "https://einfach-verwaltet.de/hausverwaltung-bonn",
  areaServed: [
    { "@type": "City", name: "Bonn" },
    { "@type": "City", name: "Beuel" },
    { "@type": "City", name: "Bad Godesberg" },
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
      name: "Was kostet eine Hausverwaltung in Bonn?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Eine Hausverwaltung in Bonn kostet typischerweise €20–38 pro Einheit und Monat. einfach verwaltet. bietet professionelle Hausverwaltung ab €24/Einheit inkl. Mieterbetreuung, Nebenkostenabrechnung und digitalem Portal — ohne versteckte Gebühren.",
      },
    },
    {
      "@type": "Question",
      name: "Welche Bonner Stadtteile betreut einfach verwaltet.?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "einfach verwaltet. betreut Immobilien in allen Bonner Stadtteilen — von der Altstadt und Beuel über Bad Godesberg, Hardtberg und Auerberg bis Dottendorf, Endenich und Kessenich. Digitale Prozesse ermöglichen effiziente Verwaltung bonnweit.",
      },
    },
    {
      "@type": "Question",
      name: "Was sind die Besonderheiten der Bonner Immobilienlage?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Bonn profitiert als ehemaliger Bundeshauptstadt von stabiler UN/EU-Behördennachfrage, internationalen Mietern und einem soliden WEG-Markt in Beuel und Bad Godesberg. Die Nähe zu Köln beeinflusst die Mietpreisentwicklung positiv. Der Bonner Mietspiegel ist Grundlage für Mieterhöhungen nach §558 BGB.",
      },
    },
    {
      "@type": "Question",
      name: "Wie läuft der Wechsel der Hausverwaltung in Bonn ab?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Nach der Kündigung beim alten Verwalter (meist 3 Monate zum Jahresende) übernimmt einfach verwaltet. alle Unterlagen, informiert die Mieter und richtet das digitale Portal ein. Unser Onboarding-Team begleitet den gesamten Prozess.",
      },
    },
    {
      "@type": "Question",
      name: "Verwaltet einfach verwaltet. auch WEG-Objekte in Bonn?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Ja. einfach verwaltet. übernimmt die vollständige WEG-Verwaltung nach §26 WEG — Eigentümerversammlungen, Beschlussprotokolle, Jahresabrechnung, Wirtschaftsplan und digitale Kommunikation mit allen Eigentümern.",
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
    title: "Bonner Markt-Expertise",
    desc: "Bonner Mietspiegel, §558 BGB Mieterhöhungen, WEG-Verwaltung in Beuel und Bad Godesberg — wir kennen die lokalen Besonderheiten.",
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
  "Altstadt",
  "Beuel",
  "Bad Godesberg",
  "Hardtberg",
  "Auerberg",
  "Dottendorf",
  "Endenich",
  "Kessenich",
  "Poppelsdorf",
  "Gronau",
  "Friesdorf",
  "Mehlem",
];

const leistungen = [
  "Mieterbetreuung & Kommunikation",
  "Nebenkostenabrechnung (NKA) nach §556 BGB",
  "Mieterhöhungen nach Bonner Mietspiegel",
  "Handwerker-Koordination & Auftragsvergabe",
  "WEG-Eigentümerversammlung & Beschlussprotokoll",
  "Jahresabrechnung & Wirtschaftsplan",
  "Digitales Mieterportal (Tickets, Dokumente)",
  "Vermietungsbegleitung & Mieterwechsel",
  "Energieausweis-Verwaltung (§16a GEG)",
  "Mahnung & SEPA-Einzug",
];

export default function HausverwaltungBonnPage() {
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
                Bonn & Rhein-Sieg-Kreis
              </div>
              <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-5">
                Hausverwaltung Bonn —<br />
                <span className="text-teal">einfach verwaltet.</span>
              </h1>
              <p className="text-lg text-white/80 mb-8 leading-relaxed">
                Professionelle Mietverwaltung & WEG-Verwaltung für Bonner Immobilien. Beuel, Bad Godesberg, Hardtberg und alle Stadtteile — digital, transparent, immer erreichbar. Ab €24/Einheit/Monat.
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
              Warum einfach verwaltet. für Bonn?
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
                  Leistungen der Hausverwaltung Bonn
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
                    Angebot für Bonner Immobilie
                    <ArrowRightIcon className="w-4 h-4" />
                  </Link>
                </div>
              </div>
              <div>
                <h2 className="text-2xl font-bold text-navy mb-6">
                  Alle Bonner Stadtteile
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
                  Und alle weiteren Bonner Stadtteile — digitale Prozesse ohne geografische Einschränkungen.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Bonn local context */}
        <section className="py-16 px-6 bg-white">
          <div className="max-w-[1100px] mx-auto">
            <h2 className="text-2xl font-bold text-navy mb-6 text-center">Immobilienmarkt Bonn: Was Eigentümer wissen müssen</h2>
            <div className="grid md:grid-cols-3 gap-6">
              {[
                {
                  title: "Stabile UN/EU-Nachfrage",
                  desc: "Als UN-Stadt und ehemaliger Bundeshauptstadt profitiert Bonn von konstantem Bedarf durch internationale Behörden, Diplomaten und Kongressbesucher — besonders in Bad Godesberg und der Innenstadt.",
                },
                {
                  title: "Wachsender WEG-Markt in Beuel",
                  desc: "Beuel verzeichnet eine überdurchschnittlich hohe WEG-Dichte durch Neubauprojekte am rechten Rheinufer. Professionelle WEG-Verwaltung ist hier besonders gefragt.",
                },
                {
                  title: "Bonner Mietspiegel als Basis",
                  desc: "Der Bonner Mietspiegel regelt zulässige Mieterhöhungen nach §558 BGB. Wir kennen die aktuellen Werte und setzen Mieterhöhungen rechtssicher für Sie durch.",
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
              Hausverwaltung Bonn Kosten
            </h2>
            <p className="text-text-light mb-8">
              Transparente Preise — keine versteckten Kosten, keine Mindestvertragslaufzeit über 1 Jahr.
            </p>
            <div className="grid sm:grid-cols-2 gap-6">
              <div className="bg-warm-white rounded-2xl p-6 border-2 border-gray-100 text-left">
                <h3 className="font-bold text-navy mb-1">Mietverwaltung Bonn</h3>
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
                <h3 className="font-bold text-white mb-1">WEG-Verwaltung Bonn</h3>
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
              Häufige Fragen — Hausverwaltung Bonn
            </h2>
            <div className="space-y-4">
              {[
                {
                  q: "Was kostet eine Hausverwaltung in Bonn?",
                  a: "Eine professionelle Hausverwaltung in Bonn kostet typischerweise €20–38 pro Einheit und Monat. einfach verwaltet. bietet Mietverwaltung ab €24/Einheit und WEG-Verwaltung ab €28/Einheit — all-inclusive ohne versteckte Gebühren.",
                },
                {
                  q: "Welche Stadtteile in Bonn betreut einfach verwaltet.?",
                  a: "Wir verwalten Immobilien in allen Bonner Stadtteilen — von der Altstadt und Beuel über Bad Godesberg, Hardtberg, Auerberg, Dottendorf, Endenich bis Kessenich, Poppelsdorf und Friesdorf. Digitale Prozesse ermöglichen effiziente Verwaltung bonnweit.",
                },
                {
                  q: "Hat Bonn besondere Regelungen für Mieterhöhungen?",
                  a: "Mieterhöhungen in Bonn richten sich nach dem Bonner Mietspiegel (§558 BGB). Bonn ist kein ausgewiesenes Gebiet mit Mietpreisbremse nach §556d BGB — Mieterhöhungen bis 20% in 3 Jahren sind möglich, sofern die Vergleichsmiete erreicht wird.",
                },
                {
                  q: "Wie funktioniert der Verwalterwechsel in Bonn?",
                  a: "Nach Kündigung beim bisherigen Verwalter (meist 3 Monate zum Jahresende) übernehmen wir alle Unterlagen, informieren Ihre Mieter und stellen das digitale Portal ein. Unser Onboarding dauert 2–4 Wochen.",
                },
                {
                  q: "Gibt es besondere WEG-Aspekte in Bonn?",
                  a: "Beuel und Bad Godesberg haben eine hohe Konzentration älterer WEG-Bestände (1960er–1990er Baujahre), bei denen oft Instandhaltungsrücklagen aufgebaut oder Sanierungsmaßnahmen beschlossen werden müssen. Wir begleiten Eigentümergemeinschaften durch diese Prozesse.",
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
              Bonner Immobilie abgeben?
            </h2>
            <p className="text-white/70 mb-8">
              Kostenlos anfragen — wir melden uns am selben Tag mit einem individuellen Angebot für Ihre Bonner Immobilie.
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
