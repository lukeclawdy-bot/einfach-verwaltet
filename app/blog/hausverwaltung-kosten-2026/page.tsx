import type { Metadata } from "next";
import Link from "next/link";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

export const metadata: Metadata = {
  title: "Hausverwaltung Kosten 2026: Was kostet eine Hausverwaltung wirklich? | einfach verwaltet.",
  description:
    "Hausverwaltung Kosten 2026: Mietverwaltung €22–38/Einheit, WEG-Verwaltung €20–34/Einheit. Preismodelle, versteckte Kosten und Checkliste zur Auswahl.",
  keywords:
    "Hausverwaltung Kosten 2026, Hausverwaltung Preise, Mietverwaltung Kosten, WEG Verwaltung Preise, Hausverwaltung was kostet",
  openGraph: {
    title: "Hausverwaltung Kosten 2026: Was kostet eine Hausverwaltung wirklich?",
    description:
      "Preismodelle, Leistungsumfang und Checkliste zur Auswahl der richtigen Hausverwaltung — der vollständige Kostenguide für Eigentümer.",
    url: "https://einfach-verwaltet.de/blog/hausverwaltung-kosten-2026",
    siteName: "einfach verwaltet.",
    locale: "de_DE",
    type: "article",
  },
  alternates: {
    canonical: "https://einfach-verwaltet.de/blog/hausverwaltung-kosten-2026",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Hausverwaltung Kosten 2026: Was kostet eine Hausverwaltung wirklich?",
  description:
    "Vollständiger Kostenguide für Hausverwaltung in Deutschland 2026: Preismodelle, Leistungsumfang, versteckte Kosten und Bewertungskriterien.",
  author: { "@type": "Organization", name: "einfach verwaltet." },
  publisher: {
    "@type": "Organization",
    name: "einfach verwaltet.",
    logo: { "@type": "ImageObject", url: "https://einfach-verwaltet.de/logo.png" },
  },
  datePublished: "2026-02-27",
  inLanguage: "de",
  url: "https://einfach-verwaltet.de/blog/hausverwaltung-kosten-2026",
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Was kostet eine Hausverwaltung 2026 pro Einheit?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Eine Mietverwaltung kostet 2026 durchschnittlich €22–38 pro Einheit und Monat, eine WEG-Verwaltung €20–34 pro Einheit. Die genauen Kosten hängen von der Lage, der Anzahl der Einheiten, dem Leistungsumfang und dem Verwaltungsmodell ab. Digitale Anbieter wie einfach verwaltet. bieten Mietverwaltung ab €24/Einheit ohne versteckte Zusatzgebühren.",
      },
    },
    {
      "@type": "Question",
      name: "Was ist im Hausverwaltungshonorar normalerweise enthalten?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Im Grundhonorar einer Hausverwaltung sind üblicherweise enthalten: Mieterkommunikation, Mieteinzug und Mahnwesen, Nebenkostenabrechnung, Koordination von Instandhaltungsarbeiten sowie Berichterstattung an Eigentümer. Oft extra: Jahresabschluss, Eigentümerversammlungen, Leerstandsmanagement, Sonderbeauftragungen und Bonitätsprüfungen.",
      },
    },
    {
      "@type": "Question",
      name: "Lohnt sich eine Hausverwaltung für Kleinvermieter?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Bereits ab 1 Einheit kann eine Hausverwaltung sinnvoll sein, wenn man Zeitaufwand (realistisch 3–5 Stunden/Monat je Einheit) gegen die Verwaltungskosten abwägt. Bei mehreren Einheiten, schwierigen Mietverhältnissen oder fehlenden Rechtskenntnissen rechnet sich professionelle Hausverwaltung fast immer. Die Kosten sind als Werbungskosten steuerlich absetzbar (§21 EStG).",
      },
    },
    {
      "@type": "Question",
      name: "Wie erkenne ich versteckte Kosten bei der Hausverwaltung?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Achten Sie im Verwaltervertrag auf: Aufwandspauschalen für Handwerkerbeauftragungen, Gebühren für Eigentümerversammlungen je nach Anzahl, Kosten für Mieterwechsel (oft €100–300 extra), Gebühren für Mahnbriefe, separate Abrechnung für Sondereigentum und Mindestlaufzeiten mit hohen Kündigungsgebühren. Seriöse Anbieter weisen alle Leistungen und Preise transparent aus.",
      },
    },
  ],
};

export default function HausverwaltungKosten2026Page() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <Navbar />
      <main className="pt-20 min-h-screen bg-warm-white">
        <article className="max-w-[800px] mx-auto px-6 py-12">
          {/* Breadcrumb */}
          <nav className="text-sm text-text-light mb-6" aria-label="Breadcrumb">
            <Link href="/blog" className="hover:text-teal transition-colors">Ratgeber</Link>
            <span className="mx-2">›</span>
            <span>Hausverwaltung Kosten 2026</span>
          </nav>

          {/* Header */}
          <header className="mb-10">
            <div className="flex flex-wrap gap-2 mb-4">
              <span className="bg-teal/10 text-teal text-xs font-semibold px-3 py-1 rounded-full">Kosten & Preise</span>
              <span className="bg-gray-100 text-gray-600 text-xs font-medium px-3 py-1 rounded-full">10 min Lesezeit</span>
              <span className="bg-gray-100 text-gray-600 text-xs font-medium px-3 py-1 rounded-full">Februar 2026</span>
            </div>
            <h1 className="text-3xl md:text-4xl font-bold text-navy leading-tight mb-4">
              Hausverwaltung Kosten 2026: Was kostet eine Hausverwaltung wirklich?
            </h1>
            <p className="text-lg text-text-light leading-relaxed">
              Der vollständige Preisguide für Eigentümer: Preismodelle, was inklusive ist, was extra kostet — und wie Sie Angebote seriös vergleichen.
            </p>
          </header>

          {/* Content */}
          <div className="prose prose-navy max-w-none text-gray-700 leading-relaxed space-y-8">

            <section>
              <h2 className="text-2xl font-bold text-navy mb-4">Was kostet eine Hausverwaltung in Deutschland 2026?</h2>
              <p>
                Eigentümer, die sich erstmals nach einer Hausverwaltung umsehen, sind oft überrascht, wie stark die Preise variieren. Von €15 bis €60 pro Einheit und Monat ist in Deutschland fast alles anzutreffen. Doch Preise allein sagen wenig aus — entscheidend ist, was im Honorar enthalten ist und wie zuverlässig der Verwalter tatsächlich arbeitet.
              </p>
              <p>
                Die Marktpreise 2026 für professionelle Hausverwaltung in Deutschland liegen im Durchschnitt bei:
              </p>
              <div className="bg-white rounded-xl border border-gray-200 overflow-hidden my-6">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="bg-navy text-white">
                      <th className="text-left px-4 py-3 font-semibold">Verwaltungsart</th>
                      <th className="text-left px-4 py-3 font-semibold">Preisspanne</th>
                      <th className="text-left px-4 py-3 font-semibold">Durchschnitt</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-gray-100">
                      <td className="px-4 py-3 font-medium">Mietverwaltung (bis 10 Einheiten)</td>
                      <td className="px-4 py-3">€25–38/Einheit/Monat</td>
                      <td className="px-4 py-3 font-semibold text-navy">€30</td>
                    </tr>
                    <tr className="border-b border-gray-100 bg-gray-50">
                      <td className="px-4 py-3 font-medium">Mietverwaltung (10–30 Einheiten)</td>
                      <td className="px-4 py-3">€22–32/Einheit/Monat</td>
                      <td className="px-4 py-3 font-semibold text-navy">€27</td>
                    </tr>
                    <tr className="border-b border-gray-100">
                      <td className="px-4 py-3 font-medium">WEG-Verwaltung (Eigentumswohnungen)</td>
                      <td className="px-4 py-3">€20–34/Einheit/Monat</td>
                      <td className="px-4 py-3 font-semibold text-navy">€26</td>
                    </tr>
                    <tr className="bg-teal/5">
                      <td className="px-4 py-3 font-medium text-teal">einfach verwaltet.</td>
                      <td className="px-4 py-3 text-teal">ab €24/Einheit/Monat</td>
                      <td className="px-4 py-3 font-semibold text-teal">All-in</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <p>
                Preise in Großstädten wie München, Hamburg oder Berlin liegen tendenziell am oberen Ende der Spanne. In kleineren Städten und ländlichen Regionen sind die Preise oft etwas niedriger, dafür kann die Erreichbarkeit des Verwalters ein Problem sein.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-navy mb-4">Die drei wichtigsten Preismodelle</h2>

              <h3 className="text-xl font-semibold text-navy mb-3">1. Pauschalhonorare (All-in)</h3>
              <p>
                Das beliebteste Modell bei modernen Hausverwaltungen: Ein fester monatlicher Betrag pro Einheit deckt alle Standardleistungen ab. Für Eigentümer ist das die transparenteste Variante — keine Überraschungen auf der Jahresrechnung. Achten Sie darauf, was explizit in der Pauschale enthalten ist.
              </p>

              <h3 className="text-xl font-semibold text-navy mb-3">2. Basishonorar + Einzelleistungen</h3>
              <p>
                Ein günstig wirkendes Basishonorar (oft €15–20/Einheit) wird durch zahlreiche Einzelabrechnungen ergänzt: €80–150 für eine Eigentümerversammlung, €50–100 für eine Mahnung, €200–400 für einen Mieterwechsel. Rechnen Sie bei diesem Modell sorgfältig nach — die tatsächlichen Jahreskosten können das Zwei- bis Dreifache des Basispreises betragen.
              </p>

              <h3 className="text-xl font-semibold text-navy mb-3">3. Prozenthonorar auf Jahresmiete</h3>
              <p>
                Manche traditionellen Verwalter berechnen 5–8 % der Jahresnettomiete. Bei einer Kaltmiete von €800/Monat entspricht das €576–922 jährlich bzw. €48–77/Monat — deutlich über dem Marktdurchschnitt. Dieses Modell ist bei höherwertigen Immobilien besonders teuer.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-navy mb-4">Was ist in der Hausverwaltung inklusive — und was kostet extra?</h2>

              <h3 className="text-xl font-semibold text-navy mb-3">Standardleistungen (sollten inklusive sein)</h3>
              <ul className="space-y-2 mb-4">
                {[
                  "Mieterkommunikation und -betreuung",
                  "Mieteinzug und SEPA-Lastschrift",
                  "Mahnwesen bei Zahlungsrückstand",
                  "Jährliche Nebenkostenabrechnung nach §556 BGB",
                  "Koordination von Routine-Instandhaltungen",
                  "Monatlicher Eigentümerbericht",
                  "Digitales Dokumentenportal",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm">
                    <span className="text-teal font-bold mt-0.5">✓</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              <h3 className="text-xl font-semibold text-navy mb-3">Häufig separat abgerechnete Leistungen</h3>
              <ul className="space-y-2">
                {[
                  "Eigentümerversammlungen (€80–200 je Sitzung)",
                  "Mieterwechsel und Neuvermietungsbegleitung (€100–400)",
                  "Gutachten und Wertermittlungen",
                  "Renovierungskoordination bei größeren Sanierungen",
                  "Rechtliche Auseinandersetzungen und Anwaltskommunikation",
                  "Versicherungsabwicklung bei Schadenfällen",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm">
                    <span className="text-amber-500 font-bold mt-0.5">!</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-navy mb-4">Hausverwaltung Kosten: Steuerliche Absetzbarkeit</h2>
              <p>
                Ein wichtiger Aspekt, den viele Eigentümer unterschätzen: Die Kosten für eine Hausverwaltung sind vollständig als Werbungskosten bei den Einkünften aus Vermietung und Verpachtung absetzbar (§21 Einkommensteuergesetz). Bei einem persönlichen Steuersatz von 35–42 % reduziert sich die effektive Belastung für Hausverwaltungskosten entsprechend.
              </p>
              <p>
                Beispiel: €300/Monat Verwaltungsgebühr für ein Mehrfamilienhaus mit 10 Einheiten entsprechen €3.600/Jahr brutto. Bei 42 % Steuersatz liegt die Nettolast bei nur €2.088 — umgerechnet €208/Monat für professionelle Rundum-Betreuung.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-navy mb-4">5 Kriterien zur Bewertung einer Hausverwaltung</h2>
              <ol className="space-y-4">
                {[
                  {
                    title: "Transparenz beim Preismodell",
                    desc: "Verlangt der Anbieter ein klares Angebot mit vollständiger Leistungsliste? Seriöse Verwalter nennen alle Kosten vorab — keine Überraschungen nach Vertragsunterzeichnung.",
                  },
                  {
                    title: "Erreichbarkeit und Reaktionszeiten",
                    desc: "Fragen Sie konkret: Wie lange dauert die Antwort auf eine Mieterfrage? Wie wird an Feiertagen und Wochenenden reagiert? Gut aufgestellte Verwalter nennen konkrete SLA-Zeiten.",
                  },
                  {
                    title: "Digitale Infrastruktur",
                    desc: "Ein modernes Eigentümerportal spart Zeit und erhöht die Transparenz. Echtzeitübersicht über Mieteingänge, Abrechnungen und offene Tickets sollte Standard sein.",
                  },
                  {
                    title: "Lizenz und Qualifikation",
                    desc: "Hausverwaltungen benötigen in Deutschland die §34c GewO-Erlaubnis. Zudem: Ist der Verwalter Mitglied im VDIV (Verband der Immobilienverwalter Deutschland)? Das signalisiert Seriosität.",
                  },
                  {
                    title: "Referenzen und lokale Marktkenntnis",
                    desc: "Ein Verwalter mit lokalem Netzwerk — Handwerker, Mietspiegel-Expertise, Kenntnis lokaler Bebauungsvorschriften — ist deutlich mehr wert als ein bundesweites Callcenter.",
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

            {/* FAQ */}
            <section className="bg-white rounded-2xl border border-gray-200 p-8 mt-10">
              <h2 className="text-2xl font-bold text-navy mb-6">Häufige Fragen zu Hausverwaltung Kosten 2026</h2>
              <div className="space-y-6">
                {[
                  {
                    q: "Was kostet eine Hausverwaltung 2026 pro Einheit?",
                    a: "Eine Mietverwaltung kostet 2026 durchschnittlich €22–38 pro Einheit und Monat, eine WEG-Verwaltung €20–34. Digitale Anbieter wie einfach verwaltet. bieten Mietverwaltung ab €24/Einheit all-inklusive ohne versteckte Gebühren.",
                  },
                  {
                    q: "Was ist im Hausverwaltungshonorar normalerweise enthalten?",
                    a: "Im Grundhonorar sind üblicherweise enthalten: Mieterkommunikation, Mieteinzug, Mahnwesen, Nebenkostenabrechnung, Instandhaltungskoordination und monatlicher Eigentümerbericht. Oft extra: Eigentümerversammlungen, Mieterwechsel-Begleitung und Großsanierungen.",
                  },
                  {
                    q: "Lohnt sich eine Hausverwaltung für Kleinvermieter?",
                    a: "Bereits ab einer Einheit kann es sich lohnen, wenn man den eigenen Zeitaufwand berücksichtigt (realistisch 3–5 Stunden/Monat). Die Kosten sind als Werbungskosten nach §21 EStG vollständig absetzbar.",
                  },
                  {
                    q: "Wie erkenne ich versteckte Kosten?",
                    a: "Fragen Sie nach dem vollständigen Leistungsverzeichnis und prüfen Sie das Preisblatt auf Einzelabrechnungen für Standardtätigkeiten wie Mahnungen, Versammlungen oder Mieterwechsel. Seriöse Verwalter bieten All-in-Pakete mit klarer Leistungsbeschreibung.",
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
              <h2 className="text-2xl font-bold mb-3">Kostenloses Angebot für Ihre Immobilie</h2>
              <p className="text-white/80 mb-6 max-w-md mx-auto">
                Erhalten Sie in 24 Stunden ein transparentes All-in-Angebot — ohne Überraschungen, ohne versteckte Gebühren.
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
