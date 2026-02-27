import type { Metadata } from "next";
import Link from "next/link";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

export const metadata: Metadata = {
  title: "WEG-Verwaltung Hannover: Was Eigentümer 2026 wissen müssen | einfach verwaltet.",
  description:
    "WEG-Verwaltung Hannover: §24 WEG Eigentümerversammlung, Auswahlkriterien, Warnsignale und was moderne Verwalter heute leisten müssen. Der Ratgeber für Hannoveraner Eigentümer.",
  keywords:
    "WEG Verwaltung Hannover, WEG Verwalter Hannover, Hausverwaltung Hannover WEG, Eigentümerversammlung Hannover",
  openGraph: {
    title: "WEG-Verwaltung Hannover: Was Eigentümer 2026 wissen müssen",
    description:
      "§24 WEG, Eigentümerversammlungen, Auswahlkriterien und Warnsignale — der vollständige WEG-Ratgeber für Hannoveraner Eigentümer.",
    url: "https://einfach-verwaltet.de/blog/weg-verwaltung-hannover",
    siteName: "einfach verwaltet.",
    locale: "de_DE",
    type: "article",
  },
  alternates: {
    canonical: "https://einfach-verwaltet.de/blog/weg-verwaltung-hannover",
  },
};

const jsonLdArticle = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "WEG-Verwaltung Hannover: Was Eigentümer 2026 wissen müssen",
  description:
    "Ratgeber für WEG-Eigentümer in Hannover: gesetzliche Pflichten, Auswahlkriterien, Warnsignale und wie man einen guten WEG-Verwalter erkennt.",
  author: { "@type": "Organization", name: "einfach verwaltet." },
  publisher: {
    "@type": "Organization",
    name: "einfach verwaltet.",
    logo: { "@type": "ImageObject", url: "https://einfach-verwaltet.de/logo.png" },
  },
  datePublished: "2026-02-27",
  inLanguage: "de",
  url: "https://einfach-verwaltet.de/blog/weg-verwaltung-hannover",
};

const jsonLdFAQ = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Was macht ein WEG-Verwalter in Hannover?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Der WEG-Verwalter ist gesetzlicher Vertreter der Eigentümergemeinschaft und zuständig für die Verwaltung des Gemeinschaftseigentums, die Durchführung der Eigentümerversammlung (§24 WEG), die Jahresabrechnung, die Instandhaltungsplanung sowie die Kommunikation mit Eigentümern, Mietern und Dienstleistern.",
      },
    },
    {
      "@type": "Question",
      name: "Wie oft muss eine Eigentümerversammlung in Hannover stattfinden?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Nach §24 Abs. 1 WEG muss mindestens einmal jährlich eine ordentliche Eigentümerversammlung stattfinden. Der Verwalter ist zur Einberufung verpflichtet. Außerordentliche Versammlungen können bei dringendem Bedarf oder auf Verlangen von mehr als 25% der Miteigentumsanteile einberufen werden.",
      },
    },
    {
      "@type": "Question",
      name: "Was kostet eine WEG-Verwaltung in Hannover?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Die Kosten für eine WEG-Verwaltung in Hannover liegen 2026 typischerweise zwischen €18 und €30 pro Einheit und Monat. Digitale Verwalter bieten oft transparente All-in-Pakete ohne Zusatzgebühren für Standardleistungen wie die Eigentümerversammlung.",
      },
    },
    {
      "@type": "Question",
      name: "Woran erkenne ich einen schlechten WEG-Verwalter?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Warnsignale: Jahresabrechnung kommt regelmäßig zu spät, Eigentümerversammlungen finden unregelmäßig statt oder werden schlecht vorbereitet, Beschlussprotokolle fehlen oder sind fehlerhaft, Rücklage ist intransparent, Handwerkerbeauftragungen erfolgen ohne Vergleichsangebote, keine digitale Eigentümerplattform.",
      },
    },
  ],
};

export default function WegVerwaltungHannoverPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdArticle) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdFAQ) }}
      />
      <Navbar />
      <main className="pt-20 min-h-screen bg-warm-white">
        <article className="max-w-[800px] mx-auto px-6 py-12">
          {/* Breadcrumb */}
          <nav className="text-sm text-text-light mb-6" aria-label="Breadcrumb">
            <Link href="/blog" className="hover:text-teal transition-colors">Ratgeber</Link>
            <span className="mx-2">›</span>
            <span>WEG-Verwaltung Hannover</span>
          </nav>

          {/* Header */}
          <header className="mb-10">
            <div className="flex flex-wrap gap-2 mb-4">
              <span className="bg-teal/10 text-teal text-xs font-semibold px-3 py-1 rounded-full">WEG-Verwaltung</span>
              <span className="bg-gray-100 text-gray-600 text-xs font-medium px-3 py-1 rounded-full">10 min Lesezeit</span>
              <span className="bg-gray-100 text-gray-600 text-xs font-medium px-3 py-1 rounded-full">Februar 2026</span>
            </div>
            <h1 className="text-3xl md:text-4xl font-bold text-navy leading-tight mb-4">
              WEG-Verwaltung Hannover: Was Eigentümer 2026 wissen müssen
            </h1>
            <p className="text-lg text-text-light leading-relaxed">
              Gesetzliche Pflichten, Auswahlkriterien, Warnsignale und der Unterschied zwischen traditioneller und moderner WEG-Verwaltung — der Ratgeber für Hannoveraner Eigentümer.
            </p>
          </header>

          {/* Content */}
          <div className="prose prose-navy max-w-none text-gray-700 leading-relaxed space-y-8">

            <section>
              <h2 className="text-2xl font-bold text-navy mb-4">WEG-Verwaltung in Hannover: Was steckt dahinter?</h2>
              <p>
                Hannover ist eine Stadt im Wandel: Wachsende Universitätsnähe, steigende Zuwanderung aus dem Umland und ein stabiler Immobilienmarkt machen die niedersächsische Landeshauptstadt zu einem attraktiven Standort für Kapitalanleger. Viele dieser Anleger besitzen Eigentumswohnungen in Mehrfamilienhäusern — und damit eine Mitverantwortung in einer Wohnungseigentümergemeinschaft (WEG).
              </p>
              <p>
                Die WEG-Verwaltung ist gesetzlich geregelt und in ihrer Bedeutung nicht zu unterschätzen: Ein guter Verwalter schützt Ihren Immobilienwert, führt die Eigentümergemeinschaft rechtssicher und sorgt dafür, dass Beschlüsse korrekt gefasst und umgesetzt werden. Ein schlechter Verwalter kostet Sie Geld, Nerven und im schlimmsten Fall den Wert Ihrer Immobilie.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-navy mb-4">Die Kernaufgaben des WEG-Verwalters nach WEG-Reform 2020</h2>
              <p>
                Die WEG-Reform von 2020 hat die Aufgaben und Rechte des Verwalters deutlich präzisiert. Diese gesetzlichen Mindestpflichten sollte jeder Eigentümer in Hannover kennen:
              </p>
              <ul className="space-y-3">
                {[
                  {
                    title: "Eigentümerversammlung (§24 WEG)",
                    desc: "Mindestens einmal jährlich muss eine ordentliche Eigentümerversammlung stattfinden. Der Verwalter lädt schriftlich mit einer Frist von mindestens 3 Wochen ein (§24 Abs. 4 WEG) und stellt eine ordnungsgemäße Tagesordnung auf.",
                  },
                  {
                    title: "Jahresabrechnung und Wirtschaftsplan (§28 WEG)",
                    desc: "Jährlich erstellt der Verwalter eine Einzel- und Gesamtabrechnung für alle Eigentümer sowie einen Wirtschaftsplan für das kommende Jahr. Fehler oder Verspätungen hier sind ein klares Warnsignal.",
                  },
                  {
                    title: "Gemeinschaftseigentum erhalten",
                    desc: "Dach, Fassade, Treppenhäuser, technische Anlagen — der Verwalter koordiniert Instandhaltung und Instandsetzung, beauftragt Handwerker und überwacht Arbeiten.",
                  },
                  {
                    title: "Instandhaltungsrücklage verwalten",
                    desc: "Die Rücklage (§19 Abs. 2 Nr. 4 WEG) muss separat und transparent geführt werden. Der Verwalter ist für ihre sachgerechte Verwendung verantwortlich.",
                  },
                  {
                    title: "Beschlusssammlung führen",
                    desc: "Seit der WEG-Reform 2020 ist der Verwalter verpflichtet, eine lückenlose Beschlusssammlung zu führen (§24 Abs. 7 WEG). Eigentümer können jederzeit Einsicht verlangen.",
                  },
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="text-teal font-bold mt-0.5 text-lg">→</span>
                    <div>
                      <span className="font-semibold text-navy">{item.title}: </span>
                      <span>{item.desc}</span>
                    </div>
                  </li>
                ))}
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-navy mb-4">WEG-spezifische Besonderheiten in Hannover</h2>
              <p>
                Hannover hat seine eigenen Marktbesonderheiten, die ein WEG-Verwalter kennen muss:
              </p>
              <div className="bg-white rounded-xl border border-gray-200 p-6 space-y-4">
                <div>
                  <h3 className="font-semibold text-navy mb-1">Gründerzeitbestand in der Südstadt und List</h3>
                  <p className="text-sm">Viele Eigentumswohnungen befinden sich in Gründerzeithäusern mit spezifischen Sanierungsanforderungen. Ein guter Verwalter kennt die typischen Schwachstellen (Dachdeckungen, Heizsysteme, Balkonsanierungen) und plant Rücklagen entsprechend vor.</p>
                </div>
                <div>
                  <h3 className="font-semibold text-navy mb-1">Wachsende Neubauquartiere</h3>
                  <p className="text-sm">In Stadtteilen wie der Wasserstadt Limmer oder dem Kronsberg entstehen neue WEG-Strukturen mit modernen Verwalterverträgen und aktueller technischer Ausstattung. Hier ist Erfahrung mit neuen Gebäudetechnologien gefragt.</p>
                </div>
                <div>
                  <h3 className="font-semibold text-navy mb-1">Studentischer Markt rund um die Leibniz-Universität</h3>
                  <p className="text-sm">Wohnungen in Hochschulnähe haben höhere Fluktuation — was besondere Anforderungen an Mieterwechsel, Kautionsverwaltung und Nebenkostenabrechnungen stellt.</p>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-navy mb-4">So wählen Sie einen WEG-Verwalter in Hannover aus</h2>

              <h3 className="text-xl font-semibold text-navy mb-3">Auswahlkriterien</h3>
              <ol className="space-y-4">
                {[
                  {
                    title: "§34c GewO-Erlaubnis prüfen",
                    desc: "Hausverwaltungen benötigen zwingend die Erlaubnis nach §34c Gewerbeordnung. Fragen Sie nach dem Nachweis — kein Nachweis, kein Auftrag.",
                  },
                  {
                    title: "VDIV-Mitgliedschaft",
                    desc: "Mitglied im Verband der Immobilienverwalter Deutschland (VDIV) zu sein signalisiert Professionalität und Weiterbildungsbereitschaft. In Niedersachsen gibt es einen eigenen Landesverband.",
                  },
                  {
                    title: "Referenzen und Portfoliogröße",
                    desc: "Fragen Sie nach vergleichbaren Objekten in Hannover. Ein Verwalter mit 50 WEG-Objekten in der Stadt kennt lokale Handwerker, Behörden und Marktpreise.",
                  },
                  {
                    title: "Digitales Eigentümerportal",
                    desc: "Zeitgemäße Verwalter bieten eine Plattform, über die Sie jederzeit Beschlüsse, Abrechnungen, Rücklagenstand und aktuelle Vorgänge einsehen können — ohne Telefon und Wartezeit.",
                  },
                  {
                    title: "Transparentes Preismodell",
                    desc: "Fragen Sie explizit: Was ist in der Monatspauschale inklusive? Werden Eigentümerversammlungen extra berechnet? Was kostet eine außerordentliche Versammlung? Seriöse Verwalter antworten klar.",
                  },
                ].map((item, i) => (
                  <li key={i} className="flex gap-4">
                    <span className="w-7 h-7 rounded-full bg-teal text-white text-sm font-bold flex items-center justify-center shrink-0 mt-0.5">{i + 1}</span>
                    <div>
                      <span className="font-semibold text-navy">{item.title}: </span>
                      <span>{item.desc}</span>
                    </div>
                  </li>
                ))}
              </ol>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-navy mb-4">Warnsignale: Wann Sie den Verwalter wechseln sollten</h2>
              <ul className="space-y-2">
                {[
                  "Jahresabrechnung erscheint nach dem 30. Juni des Folgejahres (gesetzlicher Richtwert)",
                  "Eigentümerversammlung findet seltener als einmal jährlich statt",
                  "Beschlüsse werden nicht oder fehlerhaft protokolliert",
                  "Rücklagenstand ist nicht nachvollziehbar oder deutlich unter dem Soll",
                  "Handwerker werden ohne Vergleichsangebote beauftragt",
                  "Auf Eigentümerfragen gibt es keine oder sehr späte Rückmeldung",
                  "Kein digitales Portal, keine Echtzeittransparenz",
                  "Verwalter ist häufig nicht erreichbar oder wechselt Personal ständig",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm">
                    <span className="text-red-500 font-bold mt-0.5">✗</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <p className="mt-4">
                Wenn drei oder mehr dieser Punkte auf Ihren aktuellen Verwalter zutreffen, lohnt sich eine Neubewerbung spätestens bei der nächsten Eigentümerversammlung als Tagesordnungspunkt.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-navy mb-4">Modern vs. traditionell: Was der Unterschied für Eigentümer bedeutet</h2>
              <div className="bg-white rounded-xl border border-gray-200 overflow-hidden my-6">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="bg-navy text-white">
                      <th className="text-left px-4 py-3 font-semibold">Merkmal</th>
                      <th className="text-left px-4 py-3 font-semibold">Traditionell</th>
                      <th className="text-left px-4 py-3 font-semibold">Modern</th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      ["Kommunikation", "Telefon & Briefpost", "Portal, E-Mail, schnelle Antwortzeiten"],
                      ["Abrechnung", "Jährliche Papiermappe", "Digitales Echtzeit-Dashboard"],
                      ["Transparenz", "Auf Anfrage", "Jederzeit einsehbar"],
                      ["Reaktionszeit", "Tage bis Wochen", "24–48 Stunden"],
                      ["Preismodell", "Basis + viele Einzelgebühren", "All-in-Pauschale"],
                      ["Handwerker", "Bekannte Stammfirmen", "Vergleichsangebote, Qualitätskontrolle"],
                    ].map(([merkmal, trad, modern], i) => (
                      <tr key={i} className={i % 2 === 0 ? "border-b border-gray-100" : "border-b border-gray-100 bg-gray-50"}>
                        <td className="px-4 py-3 font-medium">{merkmal}</td>
                        <td className="px-4 py-3 text-gray-500">{trad}</td>
                        <td className="px-4 py-3 text-teal font-medium">{modern}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </section>

            {/* FAQ */}
            <section className="bg-white rounded-2xl border border-gray-200 p-8 mt-10">
              <h2 className="text-2xl font-bold text-navy mb-6">Häufige Fragen zur WEG-Verwaltung Hannover</h2>
              <div className="space-y-6">
                {[
                  {
                    q: "Wie oft muss eine Eigentümerversammlung in Hannover stattfinden?",
                    a: "Nach §24 Abs. 1 WEG mindestens einmal jährlich. Der Verwalter lädt mit mindestens 3 Wochen Vorlauf ein. Außerordentliche Versammlungen sind bei dringendem Bedarf oder auf Verlangen von mehr als 25% der Miteigentumsanteile möglich.",
                  },
                  {
                    q: "Was kostet WEG-Verwaltung in Hannover 2026?",
                    a: "Typisch sind €18–30 pro Einheit und Monat. Moderne Anbieter mit All-in-Paketen beginnen ab €22 — ohne Zusatzkosten für Standardleistungen wie die Jahresversammlung.",
                  },
                  {
                    q: "Muss der WEG-Verwalter eine Erlaubnis haben?",
                    a: "Ja — die Erlaubnis nach §34c GewO ist Pflicht. Fragen Sie immer nach dem Nachweis. Zusätzlich ist eine Berufshaftpflichtversicherung empfehlenswert.",
                  },
                  {
                    q: "Kann ich als einzelner Eigentümer den WEG-Verwalter abberufen?",
                    a: "Nein — die Abberufung erfordert einen Mehrheitsbeschluss der Eigentümerversammlung (§26 WEG). Als einzelner Eigentümer können Sie aber eine außerordentliche Versammlung beantragen, wenn Sie mehr als 25% der Miteigentumsanteile halten oder genug Mitstreiter finden.",
                  },
                ].map((item, i) => (
                  <div key={i} className="border-b border-gray-100 pb-5 last:border-0 last:pb-0">
                    <h3 className="font-semibold text-navy mb-2">{item.q}</h3>
                    <p className="text-gray-700 text-sm leading-relaxed">{item.a}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* CTA */}
            <section className="bg-navy rounded-2xl p-8 text-white text-center mt-10">
              <h2 className="text-2xl font-bold mb-3">WEG-Verwaltung Hannover — professionell und transparent</h2>
              <p className="text-white/80 mb-6 max-w-md mx-auto">
                Jahresabrechnung, Eigentümerversammlung, Instandhaltungsplanung — alles in einem Paket. Fordern Sie Ihr Angebot an.
              </p>
              <Link
                href="/hausverwaltung-hannover"
                className="inline-flex items-center gap-2 bg-teal text-white px-8 py-4 rounded-xl font-semibold text-base hover:bg-teal/90 transition-all hover:shadow-lg"
              >
                Hausverwaltung Hannover →
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
