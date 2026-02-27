import { Metadata } from "next";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { ETVCalculator } from "./ETVCalculator";
import { DownloadForm } from "./DownloadForm";

export const metadata: Metadata = {
  title: "Eigentümerversammlung online | WEG-Verwaltung Hamburg",
  description:
    "Eigentümerversammlung professionell und §24 WEG-konform organisieren. Einladungsfristen berechnen, Beschlussprotokoll erstellen, digital und rechtssicher. Kostenloser Fristrechner.",
  keywords: [
    "Eigentümerversammlung",
    "ETV online",
    "WEG Versammlung",
    "§24 WEG",
    "Einladungsfrist Eigentümerversammlung",
    "Eigentümerversammlung digital",
    "Beschlussprotokoll Vorlage",
    "WEG Verwaltung Hamburg",
    "Eigentümerversammlung einladen",
    "Eigentümerversammlung Protokoll",
  ],
  openGraph: {
    title: "Eigentümerversammlung online | WEG-Verwaltung Hamburg",
    description:
      "§24 WEG compliant. Keine Papierberge. Alles dokumentiert. Fristrechner + Vorlage kostenlos.",
    url: "https://einfach-verwaltet.de/eigentuemerversammlung-online",
    siteName: "einfach verwaltet.",
    locale: "de_DE",
    type: "website",
  },
};

const faqItems = [
  {
    question: "Wie lädt man zur Eigentümerversammlung ein?",
    answer:
      "Nach §24 Abs. 4 WEG muss die Einladung zur Eigentümerversammlung schriftlich erfolgen und mindestens zwei Wochen (14 Tage) vor dem Versammlungstermin zugestellt werden. Die Einladung muss Ort, Zeit und Tagesordnung enthalten. Seit der WEG-Reform 2020 ist auch die elektronische Einladung zulässig, wenn alle Eigentümer dieser Form zugestimmt haben.",
  },
  {
    question: "Wie lange muss das Protokoll aufbewahrt werden?",
    answer:
      "Es gibt keine gesetzlich festgelegte Aufbewahrungsfrist für Beschlussprotokolle. Empfohlen wird jedoch eine Aufbewahrungsdauer von mindestens 10 Jahren, da Beschlüsse innerhalb dieses Zeitraums angefochten werden können und als Nachweis dienen. Das Protokoll ist Teil der Beschluss-Sammlung (§24 Abs. 7 WEG), die dauerhaft geführt werden muss.",
  },
  {
    question: "Kann die ETV online stattfinden?",
    answer:
      "Ja, seit der WEG-Reform 2020 ist die Online-Eigentümerversammlung grundsätzlich möglich. Nach §23 Abs. 1 WEG kann die Versammlung als Präsenz-, Hybrid- oder reine Online-Versammlung stattfinden — wenn die Eigentümer dies beschlossen haben oder alle einverstanden sind. Eine rein virtuelle ETV ohne Ermächtigung im Beschluss ist rechtlich noch nicht vollständig gesichert; in der Praxis empfiehlt sich ein Hybrid-Format.",
  },
  {
    question: "Wer muss bei der ETV anwesend sein?",
    answer:
      "Der Verwalter ist nach §24 Abs. 1 WEG verpflichtet, die Eigentümerversammlung einzuberufen und zu leiten. Alle Wohnungseigentümer sind berechtigt (und oft verpflichtet) teilzunehmen — persönlich oder durch einen Bevollmächtigten. Ein Vorsitzender (Versammlungsleiter) wird zu Beginn gewählt. Ein Protokollführer und mindestens ein Eigentümer als Unterzeichner des Protokolls sind erforderlich.",
  },
  {
    question: "Was kostet eine professionelle ETV-Organisation?",
    answer:
      "Bei einfach verwaltet. ist die vollständige Organisation Ihrer Eigentümerversammlung inklusive in unserem WEG-Verwaltungsservice. Das umfasst: Einladungsversand, Tagesordnung, Moderation, Beschlussprotokoll, digitale Unterschriften und die Nachverfolgung aller Beschlüsse. Keine versteckten Kosten, keine Extras. Alles in einem Preis ab €22/Einheit/Monat.",
  },
];

const leistungen = [
  {
    title: "Einladungsversand",
    description:
      "Fristgerechte Einladungen nach §24 Abs. 4 WEG — per Post oder elektronisch. Tagesordnung, Ort und Unterlagen automatisch vorbereitet.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
      </svg>
    ),
  },
  {
    title: "Beschlussprotokoll",
    description:
      "Rechtssicheres Protokoll nach §24 Abs. 6 WEG. Alle Abstimmungsergebnisse, Beschlusstexte und Unterschriften — digital archiviert.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Z" />
      </svg>
    ),
  },
  {
    title: "Tagesordnung erstellen",
    description:
      "Strukturierte Tagesordnung mit allen Pflichtpunkten (Jahresabrechnung, Wirtschaftsplan, Verwalterentlastung) und individuellen Anträgen.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 6.75h12M8.25 12h12m-12 5.25h12M3.75 6.75h.007v.008H3.75V6.75Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0ZM3.75 12h.007v.008H3.75V12Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm-.375 5.25h.007v.008H3.75v-.008Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z" />
      </svg>
    ),
  },
  {
    title: "Abstimmungstools",
    description:
      "Digitale Abstimmung in Echtzeit — transparent, nachvollziehbar und manipulationssicher. Auch für Präsenz- und Hybridversammlungen.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
      </svg>
    ),
  },
  {
    title: "Digitale Unterschriften",
    description:
      "Rechtskonforme elektronische Unterschriften für Protokoll und Beschlüsse — kein Papierchaos, keine nachträglichen Versandkosten.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10" />
      </svg>
    ),
  },
  {
    title: "Nachverfolgung der Beschlüsse",
    description:
      "Alle gefassten Beschlüsse werden automatisch in die Beschluss-Sammlung (§24 Abs. 7 WEG) übertragen und bleiben dauerhaft abrufbar.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
      </svg>
    ),
  },
];

export default function EigentuemerversammlungOnlinePage() {
  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqItems.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <Navbar />
      <main className="pt-20 min-h-screen bg-warm-white">
        {/* ── Hero ─────────────────────────────────────────────────────────── */}
        <section className="bg-gradient-to-b from-navy to-navy/90 text-white py-20">
          <div className="max-w-3xl mx-auto px-6 text-center">
            <div className="inline-flex items-center gap-2 bg-teal/20 text-teal border border-teal/30 rounded-full px-4 py-1.5 text-sm font-medium mb-6">
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 0 0 3.741-.479 3 3 0 0 0-4.682-2.72m.94 3.198.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0 1 12 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 0 1 6 18.719m12 0a5.971 5.971 0 0 0-.941-3.197m0 0A5.995 5.995 0 0 0 12 12.75a5.995 5.995 0 0 0-5.058 2.772m0 0a3 3 0 0 0-4.681 2.72 8.986 8.986 0 0 0 3.74.477m.94-3.197a5.971 5.971 0 0 0-.94 3.197M15 6.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm6 3a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Zm-13.5 0a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Z" />
              </svg>
              WEG Eigentümerversammlung
            </div>
            <h1 className="text-3xl md:text-5xl font-bold mb-5 leading-tight">
              Eigentümerversammlung —{" "}
              <span className="text-teal">digital, rechtskonform</span>{" "}
              und entspannt.
            </h1>
            <p className="text-lg md:text-xl text-white/80 max-w-2xl mx-auto mb-8">
              §24 WEG compliant. Keine Papierberge. Alles dokumentiert.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/anfrage"
                className="inline-flex items-center justify-center gap-2 bg-teal text-white px-8 py-4 rounded-xl font-semibold text-base hover:bg-teal/85 transition-all hover:shadow-lg"
              >
                Jetzt anfragen
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                </svg>
              </a>
              <a
                href="#rechner"
                className="inline-flex items-center justify-center gap-2 border border-white/30 text-white px-8 py-4 rounded-xl font-medium text-base hover:bg-white/10 transition-all"
              >
                Fristrechner öffnen
              </a>
            </div>
          </div>
        </section>

        {/* ── Badges ────────────────────────────────────────────────────────── */}
        <section className="bg-white border-b border-gray-100">
          <div className="max-w-4xl mx-auto px-6 py-6">
            <div className="flex flex-wrap gap-x-8 gap-y-3 justify-center text-sm text-text-light">
              {[
                "§24 WEG Einladungsfrist 14 Tage",
                "§24 Abs. 6 WEG Protokollpflicht",
                "WEG-Reform 2020 konform",
                "Digitale Unterschriften",
                "Beschluss-Sammlung automatisch",
              ].map((badge) => (
                <span key={badge} className="flex items-center gap-1.5">
                  <svg className="w-4 h-4 text-teal flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                  </svg>
                  {badge}
                </span>
              ))}
            </div>
          </div>
        </section>

        <div className="max-w-4xl mx-auto px-6 py-12 space-y-16">
          {/* ── ETV Date Calculator ───────────────────────────────────────── */}
          <section id="rechner">
            <div className="text-center mb-8">
              <h2 className="text-2xl md:text-3xl font-bold text-navy mb-3">
                Einladungsfrist berechnen
              </h2>
              <p className="text-text-light max-w-xl mx-auto">
                Geben Sie Ihren geplanten Versammlungstermin ein — wir berechnen automatisch alle relevanten Fristen nach §24 WEG.
              </p>
            </div>
            <ETVCalculator />
          </section>

          {/* ── What we handle ───────────────────────────────────────────── */}
          <section>
            <div className="text-center mb-10">
              <h2 className="text-2xl md:text-3xl font-bold text-navy mb-3">
                Was wir für Sie übernehmen
              </h2>
              <p className="text-text-light max-w-xl mx-auto">
                Von der Einladung bis zum archivierten Protokoll — vollständig organisiert, ohne Aufwand für Sie.
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
              {leistungen.map((item) => (
                <div
                  key={item.title}
                  className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6 hover:shadow-md hover:border-teal/30 transition-all"
                >
                  <div className="w-11 h-11 bg-teal/10 text-teal rounded-xl flex items-center justify-center mb-4">
                    {item.icon}
                  </div>
                  <h3 className="font-bold text-navy mb-2">{item.title}</h3>
                  <p className="text-sm text-text-light leading-relaxed">{item.description}</p>
                </div>
              ))}
            </div>
          </section>

          {/* ── Download Section ─────────────────────────────────────────── */}
          <section id="vorlage">
            <div className="bg-gradient-to-br from-navy/5 to-teal/5 rounded-3xl border border-teal/20 p-8 md:p-10">
              <div className="max-w-2xl mx-auto text-center">
                <div className="w-14 h-14 bg-teal/15 text-teal rounded-2xl flex items-center justify-center mx-auto mb-5">
                  <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5M16.5 12 12 16.5m0 0L7.5 12m4.5 4.5V3" />
                  </svg>
                </div>
                <h2 className="text-2xl font-bold text-navy mb-3">
                  Beschlussprotokoll Vorlage herunterladen
                </h2>
                <p className="text-text-light mb-8">
                  Kostenlose Vorlage nach §24 Abs. 6 WEG — direkt verwendbar für Ihre nächste Eigentümerversammlung. Geben Sie Ihre E-Mail ein und erhalten Sie die Vorlage sofort.
                </p>
                <DownloadForm />
              </div>
            </div>
          </section>

          {/* ── FAQ ──────────────────────────────────────────────────────── */}
          <section id="faq">
            <div className="text-center mb-10">
              <h2 className="text-2xl md:text-3xl font-bold text-navy mb-3">
                Häufige Fragen zur Eigentümerversammlung
              </h2>
              <p className="text-text-light">Alles Wichtige zu §24 WEG, Fristen und Protokollpflichten.</p>
            </div>
            <div className="space-y-4">
              {faqItems.map((item, i) => (
                <details
                  key={i}
                  className="group bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden"
                >
                  <summary className="flex items-center justify-between px-6 py-5 cursor-pointer list-none hover:bg-gray-50/60 transition-colors">
                    <span className="font-semibold text-navy pr-4">{item.question}</span>
                    <svg
                      className="w-5 h-5 text-text-light flex-shrink-0 transition-transform group-open:rotate-180"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                    </svg>
                  </summary>
                  <div className="px-6 pb-5 text-sm text-text-light leading-relaxed">
                    {item.answer}
                  </div>
                </details>
              ))}
            </div>
          </section>

          {/* ── CTA ──────────────────────────────────────────────────────── */}
          <section className="text-center bg-navy rounded-3xl px-8 py-14">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
              Ihre nächste ETV — stressfrei und rechtssicher
            </h2>
            <p className="text-white/75 mb-8 max-w-lg mx-auto">
              Wir übernehmen die komplette Organisation Ihrer Eigentümerversammlung. Fristgerecht, dokumentiert und ohne Papierberge.
            </p>
            <a
              href="/anfrage"
              className="inline-flex items-center gap-2 bg-teal text-white px-10 py-4 rounded-xl font-semibold text-base hover:bg-teal/85 transition-all hover:shadow-lg"
            >
              Jetzt anfragen
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
              </svg>
            </a>
          </section>

          {/* ── SEO Content ──────────────────────────────────────────────── */}
          <section className="space-y-8 text-sm text-text-light leading-relaxed border-t border-gray-100 pt-10">
            <div>
              <h2 className="text-lg font-bold text-navy mb-3">
                Eigentümerversammlung nach §24 WEG — Pflichten und Fristen
              </h2>
              <p>
                Nach §24 Abs. 1 WEG ist der Verwalter verpflichtet, mindestens einmal jährlich eine ordentliche Eigentümerversammlung einzuberufen. Die Einladungsfrist beträgt nach §24 Abs. 4 WEG mindestens zwei Wochen — in dringenden Fällen kann diese Frist verkürzt werden. Die Einladung muss Ort, Zeit und die vollständige Tagesordnung enthalten.
              </p>
            </div>
            <div>
              <h2 className="text-lg font-bold text-navy mb-3">
                Beschlussfähigkeit nach WEG-Reform 2020
              </h2>
              <p>
                Die WEG-Reform 2020 hat die Eigentümerversammlung grundlegend modernisiert. Nach §25 Abs. 1 WEG n.F. ist die Versammlung nun immer beschlussfähig — unabhängig von der Anzahl anwesender Eigentümer oder vertretener Miteigentumsanteile. Die alte Regelung, wonach mehr als die Hälfte der MEA vertreten sein mussten, wurde abgeschafft. Gleichzeitig wurde die Möglichkeit der Umlaufbeschlussfassung (§23 Abs. 3 WEG) erleichtert.
              </p>
            </div>
            <div>
              <h2 className="text-lg font-bold text-navy mb-3">
                Beschluss-Sammlung als Daueraufgabe
              </h2>
              <p>
                Nach §24 Abs. 7 WEG ist der Verwalter verpflichtet, über die in der Eigentümerversammlung gefassten Beschlüsse eine Beschluss-Sammlung zu führen. Diese muss für alle Eigentümer jederzeit einsehbar sein und dauerhaft gepflegt werden. einfach verwaltet. übernimmt diese Aufgabe vollständig digital — alle Beschlüsse werden automatisch erfasst, kategorisiert und archiviert.
              </p>
            </div>
          </section>
        </div>
      </main>
      <Footer />
    </>
  );
}
