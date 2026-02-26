import type { Metadata } from "next";
import Link from "next/link";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

export const metadata: Metadata = {
  title: "WEG-Verwaltung Hamburg | WEG Verwalter ab €22/Einheit | einfach verwaltet.",
  description:
    "Professionelle WEG-Verwaltung in Hamburg ab €22/Einheit/Monat. Eigentümerversammlung, Jahresabrechnung, Instandhaltungsrücklage — transparent, zuverlässig, digital.",
  keywords:
    "WEG Verwaltung Hamburg, WEG Verwalter Hamburg, Eigentümergemeinschaft Verwalter Hamburg, WEG Verwaltung Kosten Hamburg, Wohnungseigentümergemeinschaft Verwaltung",
  openGraph: {
    title: "WEG-Verwaltung Hamburg | einfach verwaltet.",
    description:
      "Professionelle WEG-Verwaltung ab €22/Einheit/Monat: Eigentümerversammlung, Jahresabrechnung, Rücklage und Instandhaltung — alles aus einer Hand.",
    url: "https://einfach-verwaltet.de/weg-verwaltung",
    siteName: "einfach verwaltet.",
    locale: "de_DE",
    type: "website",
  },
};

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "einfach verwaltet.",
  description:
    "Professionelle WEG-Verwaltung und Mietverwaltung in Hamburg. Transparent, digital, zuverlässig.",
  url: "https://einfach-verwaltet.de",
  telephone: "",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Singapurstr. 19",
    addressLocality: "Hamburg",
    postalCode: "20457",
    addressCountry: "DE",
  },
  areaServed: {
    "@type": "City",
    name: "Hamburg",
  },
  priceRange: "ab €22/Einheit/Monat",
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "WEG-Verwaltungsleistungen",
    itemListElement: [
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "WEG-Verwaltung",
          description: "Vollständige WEG-Verwaltung inkl. Eigentümerversammlung, Jahresabrechnung und Rücklage",
        },
        priceSpecification: {
          "@type": "PriceSpecification",
          price: "22",
          priceCurrency: "EUR",
          unitText: "Einheit/Monat",
        },
      },
    ],
  },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Was ist WEG-Verwaltung?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "WEG-Verwaltung (Wohnungseigentümergemeinschaft) kümmert sich um das gemeinschaftliche Eigentum eines Mehrfamilienhauses mit mehreren Eigentümern — also Treppenhaus, Dach, Fassade, Heizungsanlage. Der WEG-Verwalter wird von der Eigentümergemeinschaft bestellt (§ 26 WEG) und ist für Eigentümerversammlung, Jahresabrechnung, Wirtschaftsplan und Instandhaltungsrücklage zuständig.",
      },
    },
    {
      "@type": "Question",
      name: "Was kostet WEG-Verwaltung in Hamburg?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "WEG-Verwaltung in Hamburg kostet je nach Anbieter und Leistungsumfang zwischen €22 und €35 pro Einheit und Monat. Bei einfach verwaltet. starten unsere WEG-Pakete ab €22/Einheit/Monat inklusive Eigentümerversammlung, Jahresabrechnung, Wirtschaftsplan und digitaler Eigentümerportal.",
      },
    },
    {
      "@type": "Question",
      name: "Wie wähle ich einen WEG-Verwalter?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Ein guter WEG-Verwalter sollte: eine §34c GewO-Zulassung haben, Erfahrung mit WEG-Recht und Eigentümerversammlungen nachweisen, transparente Abrechnungen liefern, schnell erreichbar sein (< 24h Reaktionszeit) und ein lokales Handwerkernetzwerk mitbringen. Holen Sie mindestens drei Angebote ein und fragen Sie nach Referenzen vergleichbarer WEG-Objekte.",
      },
    },
    {
      "@type": "Question",
      name: "Wie oft muss eine Eigentümerversammlung stattfinden?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Mindestens einmal jährlich (§ 24 Abs. 1 WEG). Der Verwalter muss die Einladung mindestens zwei Wochen vorher versenden (§ 24 Abs. 4 WEG). Außerordentliche Versammlungen können jederzeit einberufen werden — auch auf Antrag von mindestens 25% der Eigentümer.",
      },
    },
    {
      "@type": "Question",
      name: "Was ist der Unterschied zwischen WEG-Verwaltung und Mietverwaltung?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "WEG-Verwaltung betrifft das gemeinschaftliche Eigentum (Treppenhaus, Dach, Fassade) einer Eigentümergemeinschaft nach WEG. Mietverwaltung betrifft das Verhältnis zwischen Vermieter und Mieter im Sondereigentum. Wer eine Wohnung in einer WEG vermietet, braucht oft beides: WEG-Verwaltung für das Gebäude, Sondereigentumsverwaltung (SEV) für sein Mietverhältnis.",
      },
    },
    {
      "@type": "Question",
      name: "Kann ich den WEG-Verwalter kündigen?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Ja. Seit der WEG-Reform 2020 kann die Eigentümergemeinschaft den WEG-Verwalter jederzeit durch einfachen Mehrheitsbeschluss abberufen (§ 26 Abs. 3 WEG) — auch ohne wichtigen Grund. Der Vertrag endet dann spätestens sechs Monate nach der Abberufung.",
      },
    },
  ],
};

const leistungenIcons: Record<string, React.ReactNode> = {
  versammlung: (
    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
    </svg>
  ),
  abrechnung: (
    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
    </svg>
  ),
  ruecklage: (
    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
  ),
  instandhaltung: (
    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
    </svg>
  ),
  wirtschaftsplan: (
    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
    </svg>
  ),
  portal: (
    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
    </svg>
  ),
};

const leistungen = [
  {
    iconKey: "versammlung",
    title: "Eigentümerversammlung",
    para: "§ 24 WEG",
    desc: "Einberufung, Vorbereitung und Durchführung der jährlichen Eigentümerversammlung. Tagesordnung, Stimmrechtslisten, Protokoll und Beschlussumsetzung — alles aus einer Hand. Auf Wunsch auch digital (hybride ETV).",
  },
  {
    iconKey: "abrechnung",
    title: "Jahresabrechnung",
    para: "§ 28 Abs. 2 WEG",
    desc: "Klare, prüffähige Jahresabrechnung mit Einzelabrechnungen je Eigentümer, Gesamtabrechnung und Belegsatz. Fristgerecht, korrekt und vollständig — kein Ärger mit Einwendungen.",
  },
  {
    iconKey: "ruecklage",
    title: "Instandhaltungsrücklage",
    para: "§ 19 Abs. 2 Nr. 4 WEG",
    desc: "Aufbau, Verwaltung und Anlage der Instandhaltungsrücklage. Wir empfehlen Rücklagehöhen nach dem Peters'schen Formel und passen den Wirtschaftsplan an Ihren Bestand an.",
  },
  {
    iconKey: "instandhaltung",
    title: "Instandhaltung & Reparatur",
    para: "§ 27 Abs. 1 WEG",
    desc: "Beauftragung und Koordination von Handwerkern für Gemeinschaftseigentum. Angebote einholen, Aufträge vergeben, Arbeiten abnehmen. Mit lokalen Handwerkern, die wir kennen und denen wir vertrauen.",
  },
  {
    iconKey: "wirtschaftsplan",
    title: "Wirtschaftsplan",
    para: "§ 28 Abs. 1 WEG",
    desc: "Jährlicher Wirtschaftsplan mit Kostenprognose und Hausgeldberechnung. Grundlage der monatlichen Vorauszahlungen aller Eigentümer — transparent und nachvollziehbar.",
  },
  {
    iconKey: "portal",
    title: "Digitales Eigentümerportal",
    para: "Echtzeit-Einblick",
    desc: "Alle Dokumente, Beschlüsse, Abrechnungen und Handwerkeraufträge — online, jederzeit abrufbar. Kein Warten auf Briefpost, kein Aktenordner-Chaos.",
  },
];

const pflichten = [
  { para: "§ 24 WEG", title: "Eigentümerversammlung", desc: "Mindestens 1× jährlich einberufen, Einladung ≥ 2 Wochen vorher, Protokoll führen." },
  { para: "§ 26 WEG", title: "Bestellung & Abberufung", desc: "Bestellung für max. 5 Jahre. Abberufung jederzeit durch einfache Mehrheit möglich." },
  { para: "§ 27 WEG", title: "Verwaltungsaufgaben", desc: "Maßnahmen ordnungsgemäßer Verwaltung durchführen, Gemeinschaftseigentum schützen, Notmaßnahmen treffen." },
  { para: "§ 28 WEG", title: "Wirtschaftsplan & Abrechnung", desc: "Wirtschaftsplan aufstellen, Jahresabrechnung erstellen, Rücklagen verwalten und anlegen." },
];

export default function WEGVerwaltungPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <Navbar />
      <main className="pt-16">
        {/* Hero */}
        <section className="bg-navy py-20 px-6">
          <div className="max-w-4xl mx-auto">
            <div className="inline-block bg-teal/20 text-teal text-xs font-semibold px-3 py-1 rounded-full mb-4 uppercase tracking-wider">
              WEG-Verwaltung Hamburg
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-white font-playfair mb-5 leading-tight">
              WEG-Verwaltung Hamburg —<br className="hidden md:block" /> professionell und transparent
            </h1>
            <p className="text-xl text-white/75 mb-8 max-w-2xl leading-relaxed">
              Eigentümerversammlung, Jahresabrechnung, Instandhaltungsrücklage und Instandhaltung
              aus einer Hand. Ab <strong className="text-white">€22/Einheit/Monat</strong>.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/anfrage"
                className="inline-block bg-teal text-white font-semibold px-8 py-4 rounded-xl hover:bg-teal/80 transition-colors text-center"
              >
                Kostenloses Angebot anfragen →
              </Link>
              <a
                href="#leistungen"
                className="inline-block border border-white/30 text-white font-semibold px-8 py-4 rounded-xl hover:bg-white/10 transition-colors text-center"
              >
                Leistungen ansehen
              </a>
            </div>
            <div className="flex flex-wrap gap-6 mt-10 text-white/60 text-sm">
              <span>✓ Hamburg &amp; Umgebung</span>
              <span>✓ Ab €22/Einheit/Monat</span>
              <span>✓ Digitales Eigentümerportal</span>
              <span>✓ §34c GewO lizenziert</span>
            </div>
          </div>
        </section>

        {/* Was ist WEG-Verwaltung */}
        <section className="bg-white py-20 px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-navy font-playfair mb-6">
              Was ist WEG-Verwaltung?
            </h2>
            <div className="grid md:grid-cols-2 gap-8 items-start">
              <div className="space-y-4 text-gray-700 leading-relaxed">
                <p>
                  Wenn mehrere Personen gemeinsam ein Haus besitzen, entsteht eine{" "}
                  <strong>Wohnungseigentümergemeinschaft (WEG)</strong>. Jeder Eigentümer
                  besitzt seine Wohnung (Sondereigentum) — und ist gleichzeitig Miteigentümer
                  des Gebäudes und Grundstücks (Gemeinschaftseigentum).
                </p>
                <p>
                  Das <strong>Wohnungseigentumsgesetz (WEG)</strong> regelt, wie diese
                  Gemeinschaft organisiert wird. Der WEG-Verwalter wird von der Gemeinschaft
                  bestellt (<strong>§ 26 WEG</strong>) und übernimmt die Verwaltung des
                  Gemeinschaftseigentums: Treppenhaus, Dach, Fassade, Heizungsanlage,
                  Aufzug und gemeinsame Außenanlagen.
                </p>
                <p>
                  Die WEG-Verwaltung ist <strong>Pflicht</strong> — ohne bestellten Verwalter
                  ist die Gemeinschaft gesetzlich schlecht aufgestellt und riskiert Schäden,
                  Streit und Haftungsrisiken.
                </p>
              </div>
              <div className="bg-teal/5 border border-teal/20 rounded-2xl p-6 space-y-3">
                <p className="font-semibold text-navy text-lg mb-4">WEG vs. Mietverwaltung</p>
                {[
                  ["WEG-Verwaltung", "Gemeinschaftseigentum (alle Eigentümer)", "WEG §§ 18–48"],
                  ["Mietverwaltung", "Sondereigentum (einzelner Vermieter)", "BGB §§ 535 ff."],
                ].map(([typ, zustaend, basis]) => (
                  <div key={typ} className="bg-white rounded-xl p-4 border border-gray-100">
                    <p className="font-semibold text-navy text-sm">{typ}</p>
                    <p className="text-gray-600 text-xs mt-1">{zustaend}</p>
                    <p className="text-teal text-xs font-semibold mt-1">{basis}</p>
                  </div>
                ))}
                <p className="text-xs text-gray-500 pt-2">
                  Wer als WEG-Eigentümer vermietet, braucht häufig beides — wir bieten beide Leistungen aus einer Hand.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Leistungen */}
        <section id="leistungen" className="bg-warm-white py-20 px-6">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <p className="text-teal text-sm font-semibold uppercase tracking-wider mb-3">Unsere Leistungen</p>
              <h2 className="text-3xl font-bold text-navy font-playfair mb-4">
                Was WEG-Verwaltung bei einfach verwaltet. umfasst
              </h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Alle gesetzlich vorgeschriebenen Aufgaben nach WEG — plus digitale Services,
                die Ihren Alltag als Eigentümer einfacher machen.
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {leistungen.map((l) => (
                <div key={l.title} className="bg-white rounded-2xl p-6 border border-gray-100 hover:border-teal/30 hover:shadow-sm transition-all">
                  <div className="w-12 h-12 bg-teal/10 rounded-xl flex items-center justify-center text-teal mb-4">
                    {leistungenIcons[l.iconKey]}
                  </div>
                  <div className="text-xs font-bold text-teal mb-1">{l.para}</div>
                  <h3 className="font-bold text-navy text-lg mb-2">{l.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{l.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Preise */}
        <section className="bg-navy py-20 px-6">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <p className="text-teal text-sm font-semibold uppercase tracking-wider mb-3">Transparente Preise</p>
              <h2 className="text-3xl font-bold text-white font-playfair mb-4">
                WEG-Verwaltung ab €22/Einheit/Monat
              </h2>
              <p className="text-white/70 max-w-2xl mx-auto">
                Kein Kleingedrucktes. Kein Extrapreise für Eigentümerversammlungen.
                Eine monatliche Pauschale — alles inklusive.
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-6">
              {[
                {
                  name: "WEG Starter",
                  price: "22",
                  units: "ab 6 Einheiten",
                  features: [
                    "Eigentümerversammlung (1×/Jahr)",
                    "Jahresabrechnung",
                    "Wirtschaftsplan",
                    "Instandhaltungsrücklage",
                    "Digitales Eigentümerportal",
                    "E-Mail-Support",
                  ],
                  highlight: false,
                },
                {
                  name: "WEG Professional",
                  price: "27",
                  units: "ab 10 Einheiten",
                  features: [
                    "Alles aus Starter",
                    "Handwerkerkoordination",
                    "Mieterkommunikation (SEV optional)",
                    "Hybride/digitale ETV",
                    "Priorisierter Support",
                    "Quartalsbericht",
                  ],
                  highlight: true,
                },
                {
                  name: "WEG Premium",
                  price: "auf Anfrage",
                  units: "ab 25 Einheiten",
                  features: [
                    "Alles aus Professional",
                    "Persönlicher Ansprechpartner",
                    "Individuelle Berichterstattung",
                    "Großprojekt-Koordination",
                    "Sondereigentumsverwaltung",
                    "SLA-Garantie",
                  ],
                  highlight: false,
                },
              ].map((plan) => (
                <div
                  key={plan.name}
                  className={`rounded-2xl p-6 ${
                    plan.highlight
                      ? "bg-teal text-white ring-2 ring-teal/50"
                      : "bg-white/10 text-white border border-white/20"
                  }`}
                >
                  <p className={`text-xs font-semibold uppercase tracking-wider mb-2 ${plan.highlight ? "text-white/80" : "text-white/60"}`}>
                    {plan.name}
                  </p>
                  <div className="mb-1">
                    {plan.price !== "auf Anfrage" ? (
                      <>
                        <span className="text-4xl font-bold">€{plan.price}</span>
                        <span className={`text-sm ml-1 ${plan.highlight ? "text-white/80" : "text-white/60"}`}>/Einheit/Monat</span>
                      </>
                    ) : (
                      <span className="text-2xl font-bold">Auf Anfrage</span>
                    )}
                  </div>
                  <p className={`text-xs mb-5 ${plan.highlight ? "text-white/70" : "text-white/50"}`}>{plan.units}</p>
                  <ul className="space-y-2 mb-6">
                    {plan.features.map((f) => (
                      <li key={f} className="flex items-start gap-2 text-sm">
                        <svg className={`w-4 h-4 flex-shrink-0 mt-0.5 ${plan.highlight ? "text-white" : "text-teal"}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                        </svg>
                        {f}
                      </li>
                    ))}
                  </ul>
                  <Link
                    href="/anfrage"
                    className={`block text-center font-semibold py-3 rounded-xl transition-colors text-sm ${
                      plan.highlight
                        ? "bg-white text-teal hover:bg-white/90"
                        : "bg-white/10 text-white hover:bg-white/20 border border-white/30"
                    }`}
                  >
                    Angebot anfragen
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Pflichten des WEG-Verwalters */}
        <section className="bg-white py-20 px-6">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <p className="text-teal text-sm font-semibold uppercase tracking-wider mb-3">Rechtliche Grundlagen</p>
              <h2 className="text-3xl font-bold text-navy font-playfair mb-4">
                Pflichten des WEG-Verwalters nach §§ 24–28 WEG
              </h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Das Wohnungseigentumsgesetz definiert klare Pflichten. Wer diese nicht erfüllt,
                macht sich schadensersatzpflichtig. Das ist unser Mindeststandard — nicht unser Maximum.
              </p>
            </div>
            <div className="grid md:grid-cols-2 gap-4">
              {pflichten.map((p) => (
                <div key={p.para} className="bg-gray-50 rounded-2xl p-6 border border-gray-100">
                  <div className="text-xs font-bold text-teal mb-2">{p.para}</div>
                  <h3 className="font-bold text-navy text-lg mb-2">{p.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{p.desc}</p>
                </div>
              ))}
            </div>
            <div className="mt-6 bg-amber-50 border border-amber-200 rounded-xl p-4 text-sm text-gray-700">
              <strong>§ 27 WEG — Aufgaben des Verwalters (seit WEG-Reform 2020):</strong> Der
              Verwalter führt die Maßnahmen ordnungsgemäßer Verwaltung durch, die nicht der
              Beschlussfassung bedürfen. Er ist berechtigt, ohne Beschluss dringende
              Notmaßnahmen zu ergreifen, um Schäden am Gemeinschaftseigentum abzuwenden.
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="bg-warm-white py-20 px-6">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <p className="text-teal text-sm font-semibold uppercase tracking-wider mb-3">Häufige Fragen</p>
              <h2 className="text-3xl font-bold text-navy font-playfair">
                FAQ: WEG-Verwaltung Hamburg
              </h2>
            </div>
            <div className="space-y-4">
              {faqSchema.mainEntity.map((faq) => (
                <details
                  key={faq.name}
                  className="group bg-white rounded-2xl border border-gray-100 overflow-hidden"
                >
                  <summary className="flex items-center justify-between px-6 py-5 cursor-pointer font-semibold text-navy hover:text-teal transition-colors list-none">
                    <span>{faq.name}</span>
                    <svg
                      className="w-5 h-5 flex-shrink-0 ml-4 transition-transform group-open:rotate-180"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </summary>
                  <div className="px-6 pb-5 text-gray-600 leading-relaxed text-sm border-t border-gray-50 pt-4">
                    {faq.acceptedAnswer.text}
                  </div>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="bg-teal py-20 px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white font-playfair mb-4">
              Ihre WEG in besten Händen
            </h2>
            <p className="text-white/80 text-lg mb-8 max-w-xl mx-auto">
              Transparente Abrechnung, zuverlässige Eigentümerversammlung, digitales Portal.
              Starten Sie jetzt — kostenlos und unverbindlich.
            </p>
            <Link
              href="/anfrage"
              className="inline-block bg-white text-teal font-bold px-10 py-5 rounded-2xl hover:bg-white/90 transition-colors text-lg"
            >
              Kostenloses Angebot in 2 Minuten →
            </Link>
            <p className="text-white/60 text-sm mt-4">
              Kein Spam. Kein Kleingedrucktes. Angebot innerhalb von 24 Stunden.
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
