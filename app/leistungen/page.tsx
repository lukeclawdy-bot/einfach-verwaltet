import type { Metadata } from "next";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

export const metadata: Metadata = {
  title: "Leistungen — einfach verwaltet.",
  description:
    "Professionelle Hausverwaltung in Hamburg: Mieterkommunikation, Nebenkostenabrechnung, Mieterhöhung, Dokumentenmanagement, Instandhaltung und mehr.",
  openGraph: {
    title: "Leistungen — einfach verwaltet.",
    description: "Vollständige Hausverwaltung in Hamburg. Alles aus einer Hand.",
    url: "https://einfach-verwaltet.de/leistungen",
    siteName: "einfach verwaltet.",
    locale: "de_DE",
    type: "website",
  },
};

const services = [
  {
    number: "01",
    title: "Mieterkommunikation",
    subtitle: "Schnell. Verbindlich. Immer erreichbar.",
    description:
      "Ihre Mieter erreichen uns — nicht eine Mailbox. Anfragen werden innerhalb weniger Minuten bestätigt und am selben Tag bearbeitet. Kein Warteschlangensystem, keine Wochenverzögerungen.",
    points: [
      "Eingangsbestätigung innerhalb von Minuten",
      "Verbindliche Rückmeldungen am selben Werktag",
      "Erreichbar per Telefon, E-Mail und digitalem Portal",
      "Klare Kommunikation — auch bei unangenehmen Themen",
    ],
    color: "teal",
  },
  {
    number: "02",
    title: "Nebenkostenabrechnung",
    subtitle: "Präzise. Fristgerecht. Rechtssicher.",
    description:
      "Die Jahresabrechnung kommt nicht irgendwann — sie kommt fristgerecht nach § 556 Abs. 3 BGB. Vollständig, nachvollziehbar und geprüft. Mieter und Eigentümer erhalten sie gleichzeitig, transparent dokumentiert.",
    points: [
      "Fristgerecht nach § 556 Abs. 3 BGB",
      "Vollständige Belegprüfung vor Versand",
      "Digitale Übermittlung und Archivierung",
      "Rückfragen klären wir direkt — kein Weiterleiten",
    ],
    color: "navy",
  },
  {
    number: "03",
    title: "Mieterhöhungsmanagement",
    subtitle: "Korrekt umgesetzt. Rechtlich abgesichert.",
    description:
      "Mieterhöhungen erfordern präzise Kenntnis des lokalen Mietspiegels und der gesetzlichen Grenzen. Wir analysieren den aktuellen Mietspiegel, prüfen Vergleichswohnungen und setzen Erhöhungen nach § 558 BGB korrekt und nachweisbar um.",
    points: [
      "Mietspiegel-Analyse und Vergleichswohnungen",
      "Korrekte Umsetzung nach § 558 BGB",
      "Fristen und Kappungsgrenzen im Blick",
      "Schriftliche Begründung für Mieter",
    ],
    color: "teal",
  },
  {
    number: "04",
    title: "Dokumentenmanagement",
    subtitle: "Digitales Archiv. Jederzeit zugänglich.",
    description:
      "Schluss mit Papierbergen und verlorenen Dokumenten. Alle Unterlagen — Verträge, Protokolle, Abrechnungen, Belege — werden digital archiviert und sind rund um die Uhr über Ihr Eigentümer-Portal abrufbar.",
    points: [
      "Zentrales digitales Archiv für alle Dokumente",
      "Mietverträge, Protokolle, Abrechnungen, Belege",
      "Zugriff jederzeit über das Eigentümer-Portal",
      "Revisionssichere Speicherung nach DSGVO",
    ],
    color: "navy",
  },
  {
    number: "05",
    title: "Eigentümer-Dashboard",
    subtitle: "Echtzeit-Übersicht. Monatliche Berichte.",
    description:
      "Volle Transparenz über Ihr Portfolio — nicht einmal im Jahr bei der Jahresabrechnung, sondern jederzeit. Das Dashboard zeigt Mieteinnahmen, offene Posten, Reparaturstatus und Dokumente in Echtzeit.",
    points: [
      "Live-Übersicht: Mieteingänge, offene Posten",
      "Monatliche Abrechnungsberichte automatisch",
      "Reparaturstatus und Beauftragungen einsehbar",
      "Alle Dokumente zentral und durchsuchbar",
    ],
    color: "teal",
  },
  {
    number: "06",
    title: "Instandhaltung & Reparaturen",
    subtitle: "Lokales Partnernetzwerk. Qualitätskontrolle.",
    description:
      "Schadensmeldung rein — Handwerker raus. Wir koordinieren Reparaturen mit unserem geprüften lokalen Partnernetzwerk. Sie erhalten Vorabgenehmigung bei Kosten über vereinbarten Schwellenwerten und sehen jeden Auftrag im Dashboard.",
    points: [
      "Geprüftes lokales Handwerker-Partnernetz",
      "Vorabgenehmigung bei Kosten über Schwellenwert",
      "Auftragsverfolgung im Eigentümer-Portal",
      "Qualitätskontrolle nach Abschluss",
    ],
    color: "navy",
  },
  {
    number: "07",
    title: "Neue Mieter finden",
    subtitle: "Bonitätsprüfung. Vertragsabschluss. Übergabe.",
    description:
      "Von der Inserierung bis zur Übergabe übernehmen wir den gesamten Prozess. Bonitätsprüfung, Selbstauskunft, Vertragsgestaltung und ein lückenloses Übergabeprotokoll — damit es keine Überraschungen nach Einzug gibt.",
    points: [
      "Inserierung und Besichtigungskoordination",
      "SCHUFA-Abfrage und Bonitätsprüfung",
      "Mietvertragsgestaltung nach aktuellem Recht",
      "Lückenloses digitales Übergabeprotokoll",
    ],
    color: "teal",
  },
];

function CheckIcon() {
  return (
    <svg
      className="w-4 h-4 flex-shrink-0 text-teal mt-0.5"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
      strokeWidth={2.5}
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
    </svg>
  );
}

export default function LeistungenPage() {
  return (
    <>
      <Navbar />
      <main className="pt-24">
        {/* Hero */}
        <section className="py-16 lg:py-24 bg-navy text-white">
          <div className="max-w-[1100px] mx-auto px-6 text-center">
            <div className="inline-flex items-center gap-2 bg-teal/20 rounded-full px-4 py-1.5 mb-6">
              <span className="text-teal text-sm font-semibold">Unsere Leistungen</span>
            </div>
            <h1 className="text-4xl sm:text-5xl font-bold mb-4 font-serif leading-tight">
              Alles, was gute Hausverwaltung
              <br />
              <span className="text-teal">wirklich braucht.</span>
            </h1>
            <p className="text-lg text-white/75 max-w-2xl mx-auto">
              Keine halbe Verwaltung. Wir übernehmen vollständig — damit Sie sich auf das Wesentliche konzentrieren können.
            </p>
            <div className="flex flex-wrap justify-center gap-4 mt-8">
              <a
                href="/preise"
                className="inline-block bg-teal text-white px-6 py-3 rounded-xl font-semibold hover:bg-teal/85 transition-all"
              >
                Preise ansehen →
              </a>
              <a
                href="/kontakt"
                className="inline-block bg-white/10 text-white px-6 py-3 rounded-xl font-semibold hover:bg-white/20 transition-all border border-white/20"
              >
                Kostenloses Erstgespräch
              </a>
            </div>
          </div>
        </section>

        {/* Services */}
        <section className="py-16 lg:py-24 bg-warm-white">
          <div className="max-w-[1100px] mx-auto px-6">
            <div className="space-y-12">
              {services.map((service, idx) => (
                <div
                  key={service.number}
                  className={`bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden ${
                    idx % 2 === 0 ? "" : "md:flex-row-reverse"
                  }`}
                >
                  <div className="grid md:grid-cols-[1fr_2fr] gap-0">
                    {/* Number + Title column */}
                    <div
                      className={`p-8 flex flex-col justify-center ${
                        service.color === "teal"
                          ? "bg-teal/8 border-r border-teal/15"
                          : "bg-navy/5 border-r border-navy/10"
                      }`}
                    >
                      <div
                        className={`text-5xl font-bold mb-3 ${
                          service.color === "teal" ? "text-teal/30" : "text-navy/20"
                        }`}
                      >
                        {service.number}
                      </div>
                      <h2 className="text-2xl font-bold text-navy mb-1 font-serif">{service.title}</h2>
                      <p className={`text-sm font-semibold ${service.color === "teal" ? "text-teal" : "text-navy/60"}`}>
                        {service.subtitle}
                      </p>
                    </div>
                    {/* Content column */}
                    <div className="p-8">
                      <p className="text-text-light leading-relaxed mb-6">{service.description}</p>
                      <ul className="space-y-2.5">
                        {service.points.map((point) => (
                          <li key={point} className="flex items-start gap-3">
                            <CheckIcon />
                            <span className="text-sm text-navy">{point}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 lg:py-20 bg-navy text-white">
          <div className="max-w-[700px] mx-auto px-6 text-center">
            <h2 className="text-3xl font-bold mb-4 font-serif">Bereit für den Wechsel?</h2>
            <p className="text-white/75 mb-8">
              Vereinbaren Sie ein kostenloses Erstgespräch. Wir analysieren Ihr Portfolio und erstellen ein maßgeschneidertes Angebot — in 24 Stunden.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a
                href="/kontakt"
                className="inline-block bg-teal text-white px-8 py-4 rounded-xl font-semibold text-lg hover:bg-teal/85 transition-all shadow-lg hover:shadow-xl"
              >
                Kostenloses Erstgespräch vereinbaren →
              </a>
              <a
                href="/preise"
                className="inline-block bg-white/10 text-white px-8 py-4 rounded-xl font-semibold text-lg hover:bg-white/20 transition-all border border-white/20"
              >
                Preise ansehen
              </a>
            </div>
          </div>
        </section>
      </main>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({"@context":"https://schema.org","@type":"FAQPage","mainEntity":[{"@type":"Question","name":"Was kostet eine Hausverwaltung in Hamburg?","acceptedAnswer":{"@type":"Answer","text":"Professionelle Hausverwaltungen in Hamburg kosten zwischen 20ac20-35 pro Einheit und Monat. Bei einfach verwaltet. starten die Preise ab 20ac24/Einheit/Monat, inklusive 24/7 Erreichbarkeit und digitalem Dashboard."}},{"@type":"Question","name":"Was macht eine Hausverwaltung genau?","acceptedAnswer":{"@type":"Answer","text":"Eine Hausverwaltung übernimmt Mieterkorrespondenz, Betriebskostenabrechnung, Reparaturkoordination, Zahlungsverzug-Management sowie die Einhaltung rechtlicher Verpflichtungen nach BGB und WEG."}},{"@type":"Question","name":"Wie wechsle ich meinen Hausverwalter?","acceptedAnswer":{"@type":"Answer","text":"Der Verwalterwechsel: 1. Kündigung des bestehenden Vertrags (meist 3 Monate zum Jahresende), 2. Beauftragung des neuen Verwalters, 3. Übergabe aller Unterlagen. Wir begleiten Sie durch den gesamten Prozess."}},{"@type":"Question","name":"Wie schnell reagiert einfach verwaltet. auf Mieteranfragen?","acceptedAnswer":{"@type":"Answer","text":"Wir garantieren eine Reaktionszeit von unter 15 Minuten auf alle Mieteranfragen — rund um die Uhr, 365 Tage im Jahr."}},{"@type":"Question","name":"Ist ein langfristiger Vertrag erforderlich?","acceptedAnswer":{"@type":"Answer","text":"Nein. Unsere Verträge haben eine Mindestlaufzeit von 12 Monaten mit anschließender monatlicher Kündbarkeit. Kein Lock-in."}}]}) }} />
      <Footer />
    </>
  );
}
