import type { Metadata } from "next";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { ArrowRightIcon, CheckIcon } from "@/components/Icons";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Nachfolge für Hausverwaltungen — einfach verwaltet.",
  description:
    "Sie suchen einen Nachfolger für Ihre Hausverwaltung in Hamburg? Faire Bewertung, diskrete Übernahme, nahtlose Betreuung Ihrer Eigentümer. Kostenlose Erstberatung.",
  keywords: [
    "Hausverwaltung Nachfolger",
    "Hausverwaltung verkaufen",
    "Nachfolge Hausverwaltung Hamburg",
    "Hausverwaltung Übernahme",
    "Hausverwaltung Ruhestand",
  ],
  openGraph: {
    title: "Nachfolge für Hausverwaltungen — einfach verwaltet.",
    description:
      "Sie suchen einen Nachfolger für Ihre Hausverwaltung? Faire Bewertung, diskrete Übernahme, nahtlose Betreuung.",
    url: "https://einfach-verwaltet.de/nachfolge",
    siteName: "einfach verwaltet.",
    locale: "de_DE",
    type: "website",
  },
};

const benefits = [
  {
    title: "Faire Bewertung",
    desc: "Wir bewerten Ihren Bestand transparent — basierend auf Einheitenzahl, Vertragslaufzeiten und Bestandsqualität.",
  },
  {
    title: "Diskrete Abwicklung",
    desc: "Ihre Kunden erfahren es erst, wenn alles steht. Kein Vertrauensverlust während der Übergabe.",
  },
  {
    title: "Nahtlose Übernahme",
    desc: "Alle Verträge, Dokumente und Mieterbeziehungen werden professionell übernommen. Kein Vakuum.",
  },
  {
    title: "Berater-Option",
    desc: "Sie bleiben so lange an Bord, wie Sie möchten — als Berater, stundenweise oder auf Projektbasis.",
  },
  {
    title: "Beste Betreuung",
    desc: "Ihre Eigentümer profitieren von schnellerer Kommunikation, transparenter Abrechnung und moderner Verwaltung.",
  },
  {
    title: "Schneller Abschluss",
    desc: "Vom Erstgespräch bis zur Übernahme in 4–8 Wochen. Wir übernehmen den Papierkram.",
  },
];

const process = [
  {
    step: "1",
    title: "Erstgespräch",
    desc: "15 Minuten am Telefon. Wir lernen Ihren Bestand kennen und besprechen Ihre Vorstellungen. Kostenlos & unverbindlich.",
  },
  {
    step: "2",
    title: "Bewertung",
    desc: "Wir erstellen eine faire Bewertung Ihres Unternehmens: Einheitenzahl, Vertragsstruktur, Ertragslage.",
  },
  {
    step: "3",
    title: "Angebot",
    desc: "Sie erhalten ein konkretes Angebot — als Einmalkauf, Ratenzahlung oder mit Umsatzbeteiligung.",
  },
  {
    step: "4",
    title: "Übernahme",
    desc: "Wir übernehmen alle Verträge, informieren Ihre Kunden und starten die Verwaltung. Sie können sich zurücklehnen.",
  },
];

export default function NachfolgePage() {
  return (
    <>
      <Navbar />
      <main className="pt-20 min-h-screen">
        {/* Hero */}
        <section className="bg-gradient-to-b from-navy to-navy/90 text-white py-20 lg:py-28">
          <div className="max-w-3xl mx-auto px-6 text-center">
            <div className="inline-flex items-center gap-2 bg-teal/20 text-teal border border-teal/30 rounded-full px-4 py-1.5 text-sm font-medium mb-6">
              Für Hausverwalter
            </div>
            <h1 className="text-3xl md:text-5xl font-bold mb-6 leading-tight">
              Sie verdienen einen Ruhestand
              <br />
              <span className="text-teal">ohne Sorgen.</span>
            </h1>
            <p className="text-lg md:text-xl text-white/80 max-w-xl mx-auto mb-8">
              Nach Jahrzehnten harter Arbeit haben Sie und Ihre Eigentümer eine
              Nachfolge verdient, die funktioniert. Wir übernehmen — diskret,
              fair und professionell.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/kontakt"
                className="inline-flex items-center justify-center gap-2 bg-teal text-white px-8 py-4 rounded-xl font-semibold text-lg hover:bg-teal/90 transition-all hover:shadow-lg"
              >
                Kostenloses Erstgespräch
                <ArrowRightIcon className="w-5 h-5" />
              </Link>
              <a
                href="tel:+4940123456789"
                className="inline-flex items-center justify-center gap-2 bg-white/10 text-white border border-white/20 px-8 py-4 rounded-xl font-semibold text-lg hover:bg-white/20 transition-all"
              >
                040 — Jetzt anrufen
              </a>
            </div>
          </div>
        </section>

        {/* Pain Points */}
        <section className="py-16 bg-warm-white">
          <div className="max-w-3xl mx-auto px-6">
            <h2 className="text-2xl md:text-3xl font-bold text-navy text-center mb-10">
              Kommt Ihnen das bekannt vor?
            </h2>
            <div className="space-y-4">
              {[
                "Die Regulierung wird immer komplexer — WEG-Reform, Energieausweis, DSGVO, Heizkostenverordnung...",
                "Eigentümer erwarten 24/7-Erreichbarkeit, aber Sie haben keine Mitarbeiter",
                "Seit Jahren suchen Sie einen Nachfolger — aber niemand will das Geschäft übernehmen",
                "Sie arbeiten 60+ Stunden, verdienen unter Marktdurchschnitt und denken an Aufhören",
                "Die Angst, Ihre langjährigen Kunden ohne Betreuung zurückzulassen",
              ].map((pain, i) => (
                <div
                  key={i}
                  className="flex items-start gap-3 bg-white rounded-xl p-5 border border-gray-100 shadow-sm"
                >
                  <span className="text-amber-500 text-lg mt-0.5">⚡</span>
                  <p className="text-navy text-sm leading-relaxed">{pain}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits */}
        <section className="py-16 bg-white">
          <div className="max-w-4xl mx-auto px-6">
            <h2 className="text-2xl md:text-3xl font-bold text-navy text-center mb-4">
              So lösen wir das für Sie
            </h2>
            <p className="text-text-light text-center mb-12 max-w-xl mx-auto">
              Wir übernehmen Ihren Bestand komplett — mit der Sorgfalt, die Ihre
              Eigentümer verdienen.
            </p>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {benefits.map((b, i) => (
                <div
                  key={i}
                  className="rounded-xl border border-gray-100 p-6 hover:shadow-md transition-shadow"
                >
                  <div className="w-8 h-8 rounded-full bg-teal/10 flex items-center justify-center mb-3">
                    <CheckIcon className="w-4 h-4 text-teal" />
                  </div>
                  <h3 className="font-semibold text-navy mb-2">{b.title}</h3>
                  <p className="text-sm text-text-light leading-relaxed">
                    {b.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Process */}
        <section className="py-16 bg-warm-white">
          <div className="max-w-3xl mx-auto px-6">
            <h2 className="text-2xl md:text-3xl font-bold text-navy text-center mb-12">
              In 4 Schritten zur Nachfolge
            </h2>
            <div className="space-y-8">
              {process.map((p) => (
                <div key={p.step} className="flex gap-5">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-navy text-white flex items-center justify-center font-bold text-sm">
                    {p.step}
                  </div>
                  <div>
                    <h3 className="font-semibold text-navy text-lg">
                      {p.title}
                    </h3>
                    <p className="text-sm text-text-light mt-1 leading-relaxed">
                      {p.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Financial Case */}
        <section className="py-16 bg-white">
          <div className="max-w-3xl mx-auto px-6">
            <h2 className="text-2xl md:text-3xl font-bold text-navy text-center mb-4">
              Was ist Ihr Bestand wert?
            </h2>
            <p className="text-text-light text-center mb-10 max-w-xl mx-auto">
              Hausverwaltungen werden typischerweise nach Ertragswert bewertet.
              Hier eine grobe Orientierung:
            </p>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="rounded-xl border-2 border-gray-100 p-6 text-center">
                <p className="text-sm text-text-light mb-2">Klein (20–50 Einheiten)</p>
                <p className="text-2xl font-bold text-navy">€15.000–€50.000</p>
                <p className="text-xs text-text-light mt-2">ca. 0,6–1,0× Jahresumsatz</p>
              </div>
              <div className="rounded-xl border-2 border-teal/30 bg-teal/5 p-6 text-center ring-1 ring-teal/20">
                <p className="text-sm text-text-light mb-2">Mittel (50–200 Einheiten)</p>
                <p className="text-2xl font-bold text-navy">€50.000–€200.000</p>
                <p className="text-xs text-text-light mt-2">ca. 3–5× EBIT</p>
              </div>
              <div className="rounded-xl border-2 border-gray-100 p-6 text-center">
                <p className="text-sm text-text-light mb-2">Groß (200+ Einheiten)</p>
                <p className="text-2xl font-bold text-navy">€200.000+</p>
                <p className="text-xs text-text-light mt-2">individuell verhandelt</p>
              </div>
            </div>
            <p className="text-xs text-text-light text-center mt-6">
              Quellen: vonitum.de, VDIV-Marktdaten. Jede Bewertung ist
              individuell — wir besprechen Ihre Situation persönlich.
            </p>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 bg-navy text-white">
          <div className="max-w-2xl mx-auto px-6 text-center">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">
              Bereit für den nächsten Schritt?
            </h2>
            <p className="text-white/80 mb-8 max-w-lg mx-auto">
              Ein vertrauliches Erstgespräch — 15 Minuten, unverbindlich. Wir
              hören zu und schauen gemeinsam, ob eine Zusammenarbeit Sinn
              ergibt.
            </p>
            <Link
              href="/kontakt"
              className="inline-flex items-center gap-2 bg-teal text-white px-8 py-4 rounded-xl font-semibold text-lg hover:bg-teal/90 transition-all hover:shadow-lg"
            >
              Erstgespräch vereinbaren
              <ArrowRightIcon className="w-5 h-5" />
            </Link>
            <p className="text-xs text-white/50 mt-4">
              100% vertraulich. Keine Verpflichtung.
            </p>
          </div>
        </section>

        {/* FAQ Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "FAQPage",
              mainEntity: [
                {
                  "@type": "Question",
                  name: "Was ist meine Hausverwaltung wert?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Deutsche Hausverwaltungen werden typischerweise mit 0,6-1,0× Jahresumsatz oder 3-5× EBIT bewertet. Bei 50 Einheiten à €30/Monat (€18.000 Jahresumsatz) liegt der Kaufpreis meist zwischen €10.800 und €18.000. Größere Bestände mit langfristigen Verträgen erzielen höhere Multiplikatoren.",
                  },
                },
                {
                  "@type": "Question",
                  name: "Wie läuft eine Hausverwaltung-Übernahme ab?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Eine typische Übernahme dauert 4-8 Wochen: Erstgespräch und Bestandsanalyse (Woche 1-2), Bewertung und Angebotsstellung (Woche 2-3), Due Diligence und Vertragsverhandlung (Woche 3-5), Übernahme und Kundenkommunikation (Woche 5-8).",
                  },
                },
                {
                  "@type": "Question",
                  name: "Was passiert mit meinen Eigentümern nach der Übernahme?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Ihre Eigentümer werden nahtlos übernommen und profitieren von schnellerer Kommunikation, transparenter Abrechnung und einem modernen Mieterportal. Wir informieren alle Eigentümer erst nach Vertragsabschluss — diskret und professionell.",
                  },
                },
              ],
            }),
          }}
        />
      </main>
      <Footer />
    </>
  );
}
