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
  title: "Hausverwaltung Karlsruhe — Modern, Digital & Zuverlässig | einfach verwaltet.",
  description:
    "Professionelle Hausverwaltung in Karlsruhe: Mietverwaltung & WEG-Verwaltung ab €24/Einheit. Baden-Württemberg Tech Hub — transparent, digital, immer erreichbar.",
  alternates: {
    canonical: "https://einfach-verwaltet.de/hausverwaltung-karlsruhe",
  },
  openGraph: {
    title: "Hausverwaltung Karlsruhe — einfach verwaltet.",
    description:
      "Moderne Hausverwaltung in Karlsruhe. Mietverwaltung & WEG-Verwaltung, Innenstadt, Weststadt, Südstadt und mehr. Ab €24/Einheit.",
  },
};

const localStructuredData = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "einfach verwaltet. — Hausverwaltung Karlsruhe",
  description:
    "Professionelle Hausverwaltung in Karlsruhe für Miet- und WEG-Immobilien. Digital, transparent, immer erreichbar.",
  url: "https://einfach-verwaltet.de/hausverwaltung-karlsruhe",
  areaServed: [
    { "@type": "City", name: "Karlsruhe" },
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
      name: "Was kostet eine Hausverwaltung in Karlsruhe?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Eine Hausverwaltung in Karlsruhe kostet typischerweise €22–38 pro Einheit und Monat. einfach verwaltet. bietet professionelle Hausverwaltung ab €24/Einheit inkl. Mieterbetreuung, Nebenkostenabrechnung und digitalem Portal — ohne versteckte Gebühren.",
      },
    },
    {
      "@type": "Question",
      name: "Welche Karlsruher Stadtteile betreut einfach verwaltet.?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "einfach verwaltet. betreut Immobilien in allen Karlsruher Stadtteilen — von Innenstadt, Weststadt und Südstadt über Mühlburg, Daxlanden und Grötzingen bis Durlach, Waldstadt und Hagsfeld. Digitale Prozesse ermöglichen effiziente Verwaltung karlsruheweit.",
      },
    },
    {
      "@type": "Question",
      name: "Hat Karlsruhe eine Mietpreisbremse?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Ja, Karlsruhe ist als Gebiet mit angespanntem Wohnungsmarkt eingestuft. Die Mietpreisbremse nach §556d BGB gilt für Neuvermietungen — die Miete darf höchstens 10% über der ortsüblichen Vergleichsmiete liegen. Ausnahmen gelten für Neubauten und umfassend modernisierte Wohnungen.",
      },
    },
    {
      "@type": "Question",
      name: "Wie funktioniert die WEG-Verwaltung in Karlsruhe?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "einfach verwaltet. übernimmt die vollständige WEG-Verwaltung nach §26 WEG — Eigentümerversammlungen, Beschlussprotokolle, Jahresabrechnung, Wirtschaftsplan und digitale Kommunikation mit allen Eigentümern. In Karlsruhe besonders relevant für Neubauprojekte im Tech-Quartier.",
      },
    },
    {
      "@type": "Question",
      name: "Warum ist Karlsruhe ein attraktiver Investitionsstandort?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Karlsruhe ist einer der führenden Technologiestandorte in Deutschland — KIT (Karlsruher Institut für Technologie), Cyber Valley, zahlreiche IT- und Technologieunternehmen. Das sorgt für konstante Nachfrage nach Mietwohnungen durch Studenten, Forscher und Fachkräfte.",
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
    title: "Karlsruher Markt-Expertise",
    desc: "Karlsruher Mietspiegel, Mietpreisbremse §556d BGB, WEG-Verwaltung im Tech-Quartier — wir kennen die lokalen Besonderheiten.",
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
  "Innenstadt",
  "Weststadt",
  "Südstadt",
  "Mühlburg",
  "Daxlanden",
  "Durlach",
  "Waldstadt",
  "Hagsfeld",
  "Grünwinkel",
  "Bulach",
  "Grötzingen",
  "Stupferich",
];

const leistungen = [
  "Mieterbetreuung & Kommunikation",
  "Nebenkostenabrechnung (NKA) nach §556 BGB",
  "Mieterhöhungen nach Karlsruher Mietspiegel",
  "Mietpreisbremse-Compliance (§556d BGB)",
  "Handwerker-Koordination & Auftragsvergabe",
  "WEG-Eigentümerversammlung & Beschlussprotokoll",
  "Jahresabrechnung & Wirtschaftsplan",
  "Digitales Mieterportal (Tickets, Dokumente)",
  "Vermietungsbegleitung & Mieterwechsel",
  "Energieausweis-Verwaltung (§16a GEG)",
];

export default function HausverwaltungKarlsruhePage() {
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
                Karlsruhe & Baden-Württemberg
              </div>
              <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-5">
                Hausverwaltung Karlsruhe —<br />
                <span className="text-teal">einfach verwaltet.</span>
              </h1>
              <p className="text-lg text-white/80 mb-8 leading-relaxed">
                Professionelle Mietverwaltung & WEG-Verwaltung für Karlsruher Immobilien. Innenstadt, Weststadt, Durlach und alle Stadtteile — digital, transparent, immer erreichbar. Ab €24/Einheit/Monat.
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
              Warum einfach verwaltet. für Karlsruhe?
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
                  Leistungen der Hausverwaltung Karlsruhe
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
                    Angebot für Karlsruher Immobilie
                    <ArrowRightIcon className="w-4 h-4" />
                  </Link>
                </div>
              </div>
              <div>
                <h2 className="text-2xl font-bold text-navy mb-6">
                  Alle Karlsruher Stadtteile
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
                  Und alle weiteren Karlsruher Stadtteile — digitale Prozesse ohne geografische Einschränkungen.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Karlsruhe local context */}
        <section className="py-16 px-6 bg-white">
          <div className="max-w-[1100px] mx-auto">
            <h2 className="text-2xl font-bold text-navy mb-6 text-center">Immobilienmarkt Karlsruhe: Was Eigentümer wissen müssen</h2>
            <div className="grid md:grid-cols-3 gap-6">
              {[
                {
                  title: "KIT & Cyber Valley: Tech-Boom",
                  desc: "Das Karlsruher Institut für Technologie (ca. 25.000 Studierende) und das KI-Forschungszentrum Cyber Valley ziehen Wissenschaftler und Tech-Fachkräfte aus aller Welt. Die Nachfrage nach qualitativ hochwertigen Mietwohnungen ist konstant hoch.",
                },
                {
                  title: "Mietpreisbremse beachten",
                  desc: "Karlsruhe ist als angespannter Wohnungsmarkt eingestuft. Die Mietpreisbremse (§556d BGB) gilt bei Neuvermietungen — wir stellen die Compliance automatisch sicher und berechnen die zulässige Miete.",
                },
                {
                  title: "Wachsende Neubaugebiete",
                  desc: "Karlsruhe expandiert mit neuen WEG-Projekten in der Südstadt und im Bereich Rintheim. Professionelle WEG-Verwaltung von Beginn an sichert Eigentümer vor Beschlussmängeln und Rücklagenfehlern.",
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
              Hausverwaltung Karlsruhe Kosten
            </h2>
            <p className="text-text-light mb-8">
              Transparente Preise — keine versteckten Kosten, keine Mindestvertragslaufzeit über 1 Jahr.
            </p>
            <div className="grid sm:grid-cols-2 gap-6">
              <div className="bg-warm-white rounded-2xl p-6 border-2 border-gray-100 text-left">
                <h3 className="font-bold text-navy mb-1">Mietverwaltung Karlsruhe</h3>
                <div className="text-3xl font-bold text-teal mb-1">ab €24</div>
                <div className="text-sm text-text-light mb-4">/Einheit/Monat</div>
                <ul className="space-y-2 text-sm text-gray-700">
                  {["Mieterbetreuung 24/7", "Nebenkostenabrechnung", "Mietpreisbremse-Check", "Digitales Portal"].map((i) => (
                    <li key={i} className="flex items-center gap-2">
                      <CheckIcon className="w-3.5 h-3.5 text-teal flex-shrink-0" />
                      {i}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="bg-navy rounded-2xl p-6 text-left">
                <h3 className="font-bold text-white mb-1">WEG-Verwaltung Karlsruhe</h3>
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
              Häufige Fragen — Hausverwaltung Karlsruhe
            </h2>
            <div className="space-y-4">
              {[
                {
                  q: "Was kostet eine Hausverwaltung in Karlsruhe?",
                  a: "Eine professionelle Hausverwaltung in Karlsruhe kostet typischerweise €22–38 pro Einheit und Monat. einfach verwaltet. bietet Mietverwaltung ab €24/Einheit und WEG-Verwaltung ab €28/Einheit — all-inclusive ohne versteckte Gebühren.",
                },
                {
                  q: "Gilt in Karlsruhe die Mietpreisbremse?",
                  a: "Ja. Karlsruhe ist als Gebiet mit angespanntem Wohnungsmarkt nach §556d BGB eingestuft. Bei Neuvermietungen darf die Miete höchstens 10 % über der ortsüblichen Vergleichsmiete liegen. Ausnahmen: Erstbezug nach 2014, umfassende Modernisierung, Vormiete über der Grenze.",
                },
                {
                  q: "Wie verläuft der Verwalterwechsel in Karlsruhe?",
                  a: "Nach Kündigung beim bisherigen Verwalter (meist 3 Monate zum Jahresende) übernehmen wir alle Unterlagen, informieren Ihre Mieter und richten das digitale Portal ein. Das Onboarding dauert 2–4 Wochen.",
                },
                {
                  q: "Verwaltet einfach verwaltet. auch Objekte in der Karlsruher Region?",
                  a: "Ja. Neben Karlsruhe verwalten wir auch Immobilien im Karlsruher Umland — Ettlingen, Bruchsal, Bretten und weitere Kommunen in der TechnologieRegion Karlsruhe.",
                },
                {
                  q: "Was sind typische WEG-Themen in Karlsruhe?",
                  a: "Karlsruhe hat einen hohen Anteil an Neubauprojekten mit komplexen WEG-Strukturen sowie ältere Bestände aus der Nachkriegszeit, die Sanierungsdiskussionen erfordern. Wir begleiten Eigentümergemeinschaften durch Beschlussfassung, KfW-Förderanträge und Modernisierungsplanungen.",
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
              Karlsruher Immobilie abgeben?
            </h2>
            <p className="text-white/70 mb-8">
              Kostenlos anfragen — wir melden uns am selben Tag mit einem individuellen Angebot für Ihre Karlsruher Immobilie.
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
