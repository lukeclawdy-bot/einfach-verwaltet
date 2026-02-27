import type { Metadata } from "next";
import Link from "next/link";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

export const metadata: Metadata = {
  title: "Hausverwaltungssoftware Vergleich 2026: Die besten Tools für Vermieter | einfach verwaltet.",
  description:
    "Hausverwaltungssoftware Vergleich 2026: DOMUS, Immoware24, Casavi und einfach verwaltet. im Vergleich — Kosten, Funktionen und wer für welchen Vermieter geeignet ist.",
  keywords:
    "Hausverwaltungssoftware Vergleich, Hausverwaltung Software, Vermieter Software, Immobilienverwaltung Software 2026",
  openGraph: {
    title: "Hausverwaltungssoftware Vergleich 2026: Die besten Tools für Vermieter",
    description:
      "DOMUS, Immoware24, Casavi, Verimi und einfach verwaltet. im direkten Vergleich — Kosten, Funktionen, Vor- und Nachteile.",
    url: "https://einfach-verwaltet.de/blog/hausverwaltung-software-vergleich",
    siteName: "einfach verwaltet.",
    locale: "de_DE",
    type: "article",
  },
  alternates: {
    canonical: "https://einfach-verwaltet.de/blog/hausverwaltung-software-vergleich",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Hausverwaltungssoftware Vergleich 2026: Die besten Tools für Vermieter",
  description:
    "Vollständiger Softwarevergleich für Hausverwaltungen und Vermieter in Deutschland 2026.",
  author: { "@type": "Organization", name: "einfach verwaltet." },
  publisher: {
    "@type": "Organization",
    name: "einfach verwaltet.",
    logo: { "@type": "ImageObject", url: "https://einfach-verwaltet.de/logo.png" },
  },
  datePublished: "2026-02-27",
  inLanguage: "de",
  url: "https://einfach-verwaltet.de/blog/hausverwaltung-software-vergleich",
};

const tools = [
  {
    name: "einfach verwaltet.",
    type: "Full-Service + KI-Plattform",
    preis: "ab €24/Einheit/Monat (All-in)",
    fuerWen: "Eigentümer ab 1 Einheit, die alles aus einer Hand wollen",
    vorteile: [
      "KI-gestützte Mieterbetreuung in <15 Min.",
      "Automatische Nebenkostenabrechnung",
      "Digitales Mieter- & Eigentümerportal",
      "Keine separate Software nötig — Full-Service",
      "Transparente All-in-Preise, keine Lizenzgebühren",
      "§34c GewO lizenziert",
    ],
    nachteile: [
      "Volle Verwaltungsübergabe erforderlich",
      "Nicht für Do-it-yourself-Vermieter",
    ],
    highlight: true,
  },
  {
    name: "DOMUS Software",
    type: "Desktop-Software (klassisch)",
    preis: "ab ca. €1.200/Jahr (Lizenz)",
    fuerWen: "Traditionelle Hausverwaltungen mit 50+ Einheiten",
    vorteile: [
      "Marktführer mit jahrzehntelanger Erfahrung",
      "Umfangreiche WEG- und Mietverwaltungsfunktionen",
      "DATEV-Schnittstelle für Steuerberater",
      "Sehr gute NKA-Automatisierung",
    ],
    nachteile: [
      "Veraltete Benutzeroberfläche",
      "Kaum Cloud/Mobile-Unterstützung",
      "Hohe Einarbeitungszeit",
      "Kein integriertes Mieterportal",
    ],
    highlight: false,
  },
  {
    name: "Immoware24",
    type: "Cloud-Software",
    preis: "ab ca. €25/Einheit/Monat (Software only)",
    fuerWen: "Kleine bis mittlere Verwaltungen (5–100 Einheiten)",
    vorteile: [
      "Moderne Cloud-Oberfläche",
      "Gute WEG-Verwaltungsfunktionen",
      "Mieterportal inklusive",
      "Regelmäßige Updates",
    ],
    nachteile: [
      "Nur Software — kein Verwaltungsservice",
      "Buchhaltung separat oder DATEV-Anbindung nötig",
      "Kundensupport teils träge",
      "Zusatzkosten für erweiterte Module",
    ],
    highlight: false,
  },
  {
    name: "Casavi",
    type: "Mieter- & Kommunikationsplattform",
    preis: "Auf Anfrage (ca. €15–30/Einheit/Monat)",
    fuerWen: "Hausverwaltungen, die Kommunikation digitalisieren wollen",
    vorteile: [
      "Starkes Mieterportal und Ticketsystem",
      "Gute mobile App für Mieter",
      "Einfach zu bedienen",
      "Integrationen mit DOMUS/Immoware möglich",
    ],
    nachteile: [
      "Kein vollständiges Buchhaltungsmodul",
      "Kombination mit anderer Software nötig",
      "Nur Software, kein Verwaltungsservice",
    ],
    highlight: false,
  },
];

export default function HausverwaltungSoftwareVergleichPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Navbar />
      <main className="pt-20 min-h-screen bg-warm-white">
        <article className="max-w-[800px] mx-auto px-6 py-12">
          {/* Breadcrumb */}
          <nav className="text-sm text-text-light mb-6" aria-label="Breadcrumb">
            <Link href="/blog" className="hover:text-teal transition-colors">Ratgeber</Link>
            <span className="mx-2">›</span>
            <span>Hausverwaltungssoftware Vergleich 2026</span>
          </nav>

          {/* Header */}
          <header className="mb-10">
            <div className="flex flex-wrap gap-2 mb-4">
              <span className="bg-teal/10 text-teal text-xs font-semibold px-3 py-1 rounded-full">Software & Tools</span>
              <span className="bg-gray-100 text-gray-600 text-xs font-medium px-3 py-1 rounded-full">10 min Lesezeit</span>
              <span className="bg-gray-100 text-gray-600 text-xs font-medium px-3 py-1 rounded-full">Februar 2026</span>
            </div>
            <h1 className="text-3xl md:text-4xl font-bold text-navy leading-tight mb-4">
              Hausverwaltungssoftware Vergleich 2026: Die besten Tools für Vermieter
            </h1>
            <p className="text-lg text-text-light leading-relaxed">
              DOMUS, Immoware24, Casavi oder gleich Full-Service mit einfach verwaltet.? Wir vergleichen die wichtigsten Hausverwaltungstools ehrlich — mit Kosten, Stärken und Schwächen.
            </p>
          </header>

          <div className="prose prose-navy max-w-none text-gray-700 leading-relaxed space-y-8">

            <section>
              <h2 className="text-2xl font-bold text-navy mb-4">Software kaufen oder Verwaltung abgeben?</h2>
              <p>
                Viele Vermieter stehen vor derselben Frage: Sollen sie in eine Hausverwaltungssoftware investieren und alles selbst erledigen — oder sollen sie die Verwaltung vollständig an einen professionellen Dienstleister abgeben? Die ehrliche Antwort hängt von der Anzahl der Einheiten, dem verfügbaren Zeitbudget und dem Know-how des Eigentümers ab.
              </p>
              <p>
                Für Eigentümer mit 1–10 Einheiten ohne Hausverwaltungserfahrung ist eine reine Softwarelösung oft die schlechtere Wahl: Die Einarbeitungszeit in deutsche Mietrechtsthemen (Nebenkostenabrechnung nach §556 BGB, Mieterhöhungsverfahren nach §558 BGB, WEG-Verwaltung) ist erheblich. Ein Full-Service-Anbieter wie einfach verwaltet. ist in diesem Fall die sinnvollere und oft günstigere Alternative — wenn man die eigene Arbeitszeit einkalkuliert.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-navy mb-4">Welche Software-Kategorien gibt es?</h2>
              <div className="grid sm:grid-cols-3 gap-4 mb-6">
                {[
                  { title: "Klassische Desktop-Software", desc: "DOMUS, Haufe-WOWINEX — lokal installiert, umfangreich, aber veraltet. Für große traditionelle Verwaltungen.", color: "bg-gray-50" },
                  { title: "Cloud-Lösungen", desc: "Immoware24, Curasoft — modern, browserbasiert. Für digitale Verwaltungen mit eigener Buchhaltungskompetenz.", color: "bg-blue-50" },
                  { title: "Full-Service-Plattformen", desc: "einfach verwaltet. — Software + Verwaltungsdienstleistung in einem. Ideal für Eigentümer ohne Zeitressourcen.", color: "bg-teal/5 border border-teal/20" },
                ].map((cat) => (
                  <div key={cat.title} className={`rounded-xl p-4 ${cat.color}`}>
                    <h3 className="font-bold text-navy text-sm mb-2">{cat.title}</h3>
                    <p className="text-xs text-gray-600 leading-relaxed">{cat.desc}</p>
                  </div>
                ))}
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-navy mb-6">Die 4 wichtigsten Anbieter im Vergleich</h2>
              <div className="space-y-6">
                {tools.map((tool) => (
                  <div key={tool.name} className={`rounded-xl border-2 p-6 ${tool.highlight ? "border-teal bg-teal/5" : "border-gray-200 bg-white"}`}>
                    <div className="flex items-start justify-between mb-3">
                      <div>
                        <h3 className={`text-lg font-bold ${tool.highlight ? "text-teal" : "text-navy"}`}>
                          {tool.name}
                          {tool.highlight && <span className="ml-2 text-xs bg-teal text-white px-2 py-0.5 rounded-full">Empfehlung</span>}
                        </h3>
                        <p className="text-sm text-gray-500">{tool.type}</p>
                      </div>
                      <div className="text-right">
                        <div className="text-sm font-bold text-navy">{tool.preis}</div>
                      </div>
                    </div>
                    <p className="text-xs text-gray-500 mb-4"><strong>Für wen:</strong> {tool.fuerWen}</p>
                    <div className="grid sm:grid-cols-2 gap-4">
                      <div>
                        <p className="text-xs font-semibold text-green-700 mb-2">✓ Vorteile</p>
                        <ul className="space-y-1">
                          {tool.vorteile.map((v) => (
                            <li key={v} className="text-xs text-gray-700 flex items-start gap-1.5">
                              <span className="text-green-600 mt-0.5">+</span> {v}
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <p className="text-xs font-semibold text-red-600 mb-2">✗ Nachteile</p>
                        <ul className="space-y-1">
                          {tool.nachteile.map((n) => (
                            <li key={n} className="text-xs text-gray-700 flex items-start gap-1.5">
                              <span className="text-red-500 mt-0.5">−</span> {n}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-navy mb-4">Worauf kommt es bei der Auswahl wirklich an?</h2>
              <ol className="space-y-4">
                {[
                  {
                    title: "Nebenkostenabrechnung nach §556 BGB",
                    desc: "Das ist die Pflichtdisziplin jeder Hausverwaltungssoftware. Kann die Software NKA automatisch erstellen, Heizkosten nach der HeizkostenV aufteilen und Fristenmanagement übernehmen? Das spart die meiste Zeit.",
                  },
                  {
                    title: "WEG-Verwaltung: Eigentümerversammlungen und Beschlussprotokolle",
                    desc: "Für WEG-Verwaltungen ist die Protokollführung nach §24 WEG und die Umsetzungskontrolle von Beschlüssen entscheidend. Nicht alle Softwarelösungen bieten hier vollständige Unterstützung.",
                  },
                  {
                    title: "Mieterportal und Kommunikation",
                    desc: "Modernes Ticketsystem für Reparaturmeldungen, digitale Dokumentenbereitstellung und WhatsApp/E-Mail-Integration sparen Stunden pro Monat. Casavi und einfach verwaltet. sind hier besonders stark.",
                  },
                  {
                    title: "DATEV-Integration für den Steuerberater",
                    desc: "Falls Sie einen Steuerberater beauftragen, sollte die Software eine DATEV-Schnittstelle haben. DOMUS und Immoware24 bieten das; einfach verwaltet. stellt Jahresberichte in DATEV-kompatibler Form bereit.",
                  },
                  {
                    title: "Kosten realistisch kalkulieren",
                    desc: "Softwarelizenzen klingen günstig — bis man die eigene Arbeitszeit einrechnet. Bei 5 Einheiten sind das leicht 10–15 Stunden/Monat für NKA, Mieterbetreuung und Buchhaltung. Full-Service lohnt sich ab ca. 3 Einheiten für Eigentümer, die Wert auf Zeit legen.",
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
              <h2 className="text-2xl font-bold text-navy mb-4">Fazit: Software oder Full-Service?</h2>
              <p>
                Für Hausverwaltungsunternehmen, die selbst verwalten und skalieren wollen, sind Cloud-Lösungen wie Immoware24 oder klassische Tools wie DOMUS eine sinnvolle Investition. Für private Eigentümer und kleine Vermieter ist der Zeitaufwand für Einrichtung, Einarbeitung und laufenden Betrieb einer Softwarelösung oft höher als der vermeintliche Kostenvorteil.
              </p>
              <p>
                einfach verwaltet. kombiniert modernste Softwaretechnologie mit einem vollständigen Verwaltungsservice: Eigentümer bekommen das beste aus beiden Welten — das digitale Dashboard und die KI-gestützte Kommunikation ohne die eigene Arbeitszeit zu opfern. Ab €24/Einheit/Monat, all-inclusive.
              </p>
            </section>

            {/* Internal links */}
            <section className="bg-white rounded-xl border border-gray-200 p-6">
              <h2 className="text-xl font-bold text-navy mb-4">Weiterführende Ratgeber</h2>
              <ul className="space-y-2 text-sm">
                {[
                  { href: "/blog/hausverwaltung-kosten-2026", label: "Hausverwaltung Kosten 2026: Was kostet eine Hausverwaltung wirklich?" },
                  { href: "/blog/hausverwaltung-selbst-machen", label: "Hausverwaltung selbst machen: Wann lohnt es sich?" },
                  { href: "/blog/hausverwaltung-wechseln-checkliste", label: "Hausverwaltung wechseln: Die ultimative Checkliste" },
                  { href: "/preise", label: "einfach verwaltet. Preise im Überblick" },
                ].map((link) => (
                  <li key={link.href}>
                    <Link href={link.href} className="text-teal hover:underline">
                      → {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </section>

            {/* CTA */}
            <section className="bg-navy rounded-2xl p-8 text-white text-center">
              <h2 className="text-2xl font-bold mb-3">Die modernste Alternative zu alter Software</h2>
              <p className="text-white/80 mb-6 max-w-md mx-auto">
                einfach verwaltet. ist mehr als Software — es ist Ihre vollständige Hausverwaltung mit KI-Unterstützung. Kein Setup, keine Einarbeitung, kein Wartungsaufwand.
              </p>
              <Link
                href="/anfrage"
                className="inline-flex items-center gap-2 bg-teal text-white px-8 py-4 rounded-xl font-semibold text-base hover:bg-teal/90 transition-all hover:shadow-lg"
              >
                Jetzt kostenlos anfragen →
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
