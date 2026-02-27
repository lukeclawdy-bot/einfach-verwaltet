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
  title: "Hausverwaltung Essen: Professionelle Mietverwaltung | einfach verwaltet.",
  description:
    "Hausverwaltung Essen: Professionelle Mietverwaltung & WEG-Verwaltung in Rüttenscheid, Kettwig & Grugapark-Nähe ab €24/Einheit. Digital, transparent, immer erreichbar.",
  alternates: {
    canonical: "https://einfach-verwaltet.de/hausverwaltung-essen",
  },
  openGraph: {
    title: "Hausverwaltung Essen — einfach verwaltet.",
    description:
      "Moderne Hausverwaltung in Essen. Mietverwaltung & WEG-Verwaltung, digitale Kommunikation, transparente Abrechnung. Ab €24/Einheit.",
  },
};

const localStructuredData = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "einfach verwaltet. — Hausverwaltung Essen",
  description:
    "Professionelle Hausverwaltung in Essen und dem Ruhrgebiet für Miet- und WEG-Immobilien. Digital, transparent, immer erreichbar.",
  url: "https://einfach-verwaltet.de/hausverwaltung-essen",
  areaServed: [
    { "@type": "City", name: "Essen" },
    { "@type": "AdministrativeArea", name: "Ruhrgebiet" },
    { "@type": "City", name: "Hamburg" },
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
      name: "Was kostet eine Hausverwaltung in Essen?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Eine Hausverwaltung in Essen kostet typischerweise €22–38 pro Einheit und Monat. einfach verwaltet. bietet professionelle Hausverwaltung ab €24/Einheit inkl. Mieterbetreuung, Nebenkostenabrechnung und digitalem Portal. Angebot unter einfach-verwaltet.de/anfrage.",
      },
    },
    {
      "@type": "Question",
      name: "Verwaltet einfach verwaltet. auch in Rüttenscheid und Kettwiger Stadtteilen?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Ja — einfach verwaltet. betreut Immobilien in allen Essener Stadtteilen, darunter Rüttenscheid, Kettwig, Steele, Werden und Bredeney in Grugapark-Nähe. Digitale Prozesse ermöglichen effiziente Verwaltung im gesamten Stadtgebiet.",
      },
    },
    {
      "@type": "Question",
      name: "Wie schnell kann einfach verwaltet. eine Essener Immobilie übernehmen?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Nach Vertragsunterzeichnung und Datenübergabe dauert das Onboarding in der Regel 2–4 Wochen. Bei dringenden Fällen (z.B. Vertragskündigung des bisherigen Verwalters) bieten wir beschleunigtes Onboarding an.",
      },
    },
    {
      "@type": "Question",
      name: "Was sind die Besonderheiten der Hausverwaltung in Essen?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Essen ist eine heterogene Stadt mit Gebieten wie dem gehobenen Rüttenscheid, dem historischen Werden, dem Stadtteil Steele und weiteren. Der Mietmarkt unterscheidet sich stark nach Lage und Gebäudetyp. Wir kennen den lokalen Markt und den aktuellen Mietspiegel.",
      },
    },
    {
      "@type": "Question",
      name: "Ist einfach verwaltet. nach §34c GewO lizenziert?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Ja. einfach verwaltet. verfügt über die erforderliche Erlaubnis nach §34c GewO sowie eine Berufshaftpflichtversicherung nach §15 MaBV mit mindestens €500.000 Deckungssumme pro Schadensfall.",
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
    title: "Essen & Ruhrgebiet Expertise",
    desc: "Essener Mietspiegel, NRW Mietrecht, Rüttenscheid bis Kettwig — wir kennen die lokalen Besonderheiten.",
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
  "Rüttenscheid",
  "Kettwig",
  "Bredeney",
  "Werden",
  "Steele",
  "Borbeck",
  "Altenessen",
  "Karnap",
  "Katernberg",
  "Frillendorf",
  "Stadtmitte",
  "Holsterhausen",
];

const leistungen = [
  "Mieterbetreuung & Kommunikation",
  "Nebenkostenabrechnung (NKA) nach §556 BGB",
  "Mieterhöhungen nach Essener Mietspiegel",
  "Handwerker-Koordination & Auftragsvergabe",
  "WEG-Eigentümerversammlung & Beschlussprotokoll",
  "Jahresabrechnung & Wirtschaftsplan",
  "Digitales Mieterportal (Tickets, Dokumente)",
  "Vermietungsbegleitung & Mieterwechsel",
  "Energieausweis-Verwaltung (§16a GEG)",
  "Mahnung & SEPA-Einzug",
];

const steps = [
  {
    number: "01",
    title: "Kostenlos anfragen",
    desc: "Füllen Sie unser kurzes Anfrage-Formular aus. Wir melden uns am selben Tag mit einem individuellen Angebot.",
  },
  {
    number: "02",
    title: "Vertrag & Onboarding",
    desc: "Nach Vertragsunterzeichnung übernehmen wir alle Unterlagen, informieren Ihre Mieter und richten das Portal ein.",
  },
  {
    number: "03",
    title: "Einfach verwaltet.",
    desc: "Sie behalten volle Transparenz im Dashboard — wir kümmern uns um den Rest. Wechsel jederzeit möglich.",
  },
];

export default function HausverwaltungEssenPage() {
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
                Essen · Rüttenscheid · Ruhrgebiet
              </div>
              <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-5">
                Hausverwaltung Essen —<br />
                <span className="text-teal">Professionelle Mietverwaltung</span>
              </h1>
              <p className="text-lg text-white/80 mb-8 leading-relaxed">
                Moderne Mietverwaltung & WEG-Verwaltung für Essener Immobilien — von Rüttenscheid bis Kettwig. Digital, transparent, immer erreichbar — ab €24/Einheit/Monat.
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
              Warum einfach verwaltet. für Essen?
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

        {/* How it works */}
        <section className="py-16 px-6">
          <div className="max-w-[900px] mx-auto">
            <h2 className="text-2xl font-bold text-navy text-center mb-10">
              So funktioniert der Wechsel
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              {steps.map((step) => (
                <div key={step.number} className="text-center">
                  <div className="w-14 h-14 bg-teal/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <span className="text-xl font-bold text-teal">{step.number}</span>
                  </div>
                  <h3 className="font-bold text-navy mb-2">{step.title}</h3>
                  <p className="text-sm text-text-light leading-relaxed">{step.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Leistungen + Stadtteile */}
        <section className="py-16 px-6 bg-white">
          <div className="max-w-[1100px] mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-start">
              <div>
                <h2 className="text-2xl font-bold text-navy mb-6">
                  Leistungen der Hausverwaltung Essen
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
                    Angebot für Essener Immobilie
                    <ArrowRightIcon className="w-4 h-4" />
                  </Link>
                </div>
              </div>
              <div>
                <h2 className="text-2xl font-bold text-navy mb-6">
                  Alle Essener Stadtteile
                </h2>
                <div className="grid grid-cols-2 gap-2">
                  {stadtteile.map((b) => (
                    <div key={b} className="flex items-center gap-2 text-sm text-gray-700 bg-warm-white rounded-xl px-4 py-2.5 border border-gray-100">
                      <CheckIcon className="w-3.5 h-3.5 text-teal flex-shrink-0" />
                      {b}
                    </div>
                  ))}
                </div>
                <p className="mt-4 text-xs text-text-light">
                  Und alle weiteren Essener Stadtteile — von Grugapark bis Kettwig, digitale Prozesse ohne geografische Einschränkungen.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Pricing */}
        <section className="py-16 px-6">
          <div className="max-w-[700px] mx-auto text-center">
            <h2 className="text-2xl font-bold text-navy mb-4">
              Hausverwaltung Essen — Kosten
            </h2>
            <p className="text-text-light mb-8">
              Transparente Preise — keine versteckten Kosten, keine langen Mindestvertragslaufzeiten.
            </p>
            <div className="grid sm:grid-cols-2 gap-6">
              <div className="bg-warm-white rounded-2xl p-6 border-2 border-gray-100 text-left">
                <h3 className="font-bold text-navy mb-1">Mietverwaltung Essen</h3>
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
                <h3 className="font-bold text-white mb-1">WEG-Verwaltung Essen</h3>
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
              Häufige Fragen — Hausverwaltung Essen
            </h2>
            <div className="space-y-4">
              {[
                {
                  q: "Was kostet eine Hausverwaltung in Essen?",
                  a: "Eine professionelle Hausverwaltung in Essen kostet typischerweise €22–38 pro Einheit und Monat. einfach verwaltet. bietet Mietverwaltung ab €24/Einheit und WEG-Verwaltung ab €28/Einheit — keine Mindestvertragslaufzeit, keine versteckten Gebühren.",
                },
                {
                  q: "Welche Stadtteile betreut einfach verwaltet. in Essen?",
                  a: "Wir verwalten Immobilien in allen Essener Stadtteilen — von Rüttenscheid, Kettwig und Bredeney über Werden, Steele und Borbeck bis Altenessen und Katernberg. Digitale Prozesse ermöglichen effiziente Verwaltung im gesamten Stadtgebiet.",
                },
                {
                  q: "Wie funktioniert der Wechsel der Hausverwaltung in Essen?",
                  a: "Nach der Kündigung Ihrer aktuellen Hausverwaltung (meist 3 Monate zum Jahresende) übernehmen wir alle Unterlagen, informieren die Mieter und stellen das Portal ein. Unser Onboarding-Team begleitet den gesamten Prozess.",
                },
                {
                  q: "Gibt es Besonderheiten beim Mietrecht in Essen?",
                  a: "Essen liegt in einem Gebiet mit angespanntem Wohnungsmarkt — die Kappungsgrenze für Mieterhöhungen beträgt 15% in 3 Jahren (statt regulär 20%). Wir kennen den aktuellen Essener Mietspiegel und alle lokalen Regelungen.",
                },
                {
                  q: "Ist einfach verwaltet. nach §34c GewO lizenziert?",
                  a: "Ja. einfach verwaltet. verfügt über die erforderliche Erlaubnis nach §34c GewO sowie eine Berufshaftpflichtversicherung nach §15 MaBV mit mindestens €500.000 Deckungssumme pro Schadensfall und €1.000.000 Jahreshöchstleistung.",
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

        {/* Internal link to blog post */}
        <section className="py-8 px-6">
          <div className="max-w-[700px] mx-auto">
            <div className="bg-teal/5 border border-teal/20 rounded-xl p-4 flex items-center gap-4">
              <div className="w-8 h-8 bg-teal/10 rounded-lg flex items-center justify-center flex-shrink-0">
                <svg className="w-4 h-4 text-teal" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </div>
              <div className="flex-1">
                <p className="text-xs text-text-light mb-0.5">Ratgeber</p>
                <Link href="/blog/hausverwaltung-essen" className="text-sm font-semibold text-navy hover:text-teal transition-colors">
                  Hausverwaltung Essen: Alles was Sie wissen müssen →
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Bottom CTA */}
        <section className="py-16 px-6 bg-navy">
          <div className="max-w-[600px] mx-auto text-center">
            <h2 className="text-2xl font-bold text-white mb-3">
              Essener Immobilie abgeben?
            </h2>
            <p className="text-white/70 mb-8">
              Kostenlos anfragen — wir melden uns am selben Tag mit einem individuellen Angebot für Ihr Objekt in Essen.
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
