import type { Metadata } from "next";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { BKACalculator } from "@/components/BKACalculator";
import { ArrowRightIcon, CheckIcon } from "@/components/Icons";

export const metadata: Metadata = {
  title: "Betriebskostenrechner — kostenlos | einfach verwaltet.",
  description: "Berechnen Sie Ihre Betriebskosten nach §2 BetrKV — kostenlos und ohne Anmeldung. Verwenden Sie unseren BKA/NKA Rechner für Nebenkostenabrechnungen in Hamburg.",
  keywords: "Betriebskostenrechner, Nebenkostenabrechnung, BKA Rechner, Betriebskosten berechnen, §2 BetrKV, Hamburg Hausverwaltung",
  robots: "index, follow",
  openGraph: {
    title: "Betriebskostenrechner — kostenlos | einfach verwaltet.",
    description: "Berechnen Sie Ihre Betriebskosten nach §2 BetrKV — kostenlos und ohne Anmeldung.",
    url: "https://einfach-verwaltet.de/bka-rechner",
    siteName: "einfach verwaltet.",
    locale: "de_DE",
    type: "website",
  },
};

export default function BKACalculatorPage() {
  return (
    <>
      <Navbar />
      <main className="pt-24">
        {/* Hero Section */}
        <section className="py-12 lg:py-20 bg-navy text-white">
          <div className="max-w-[1100px] mx-auto px-6 text-center">
            <div className="inline-flex items-center gap-2 bg-teal/20 rounded-full px-4 py-1.5 mb-6">
              <span className="text-teal text-sm font-semibold">Kostenloser Rechner</span>
            </div>
            <h1 className="text-4xl sm:text-5xl font-bold mb-4 font-serif leading-tight">
              Betriebskostenrechner
              <br />
              <span className="text-teal">nach §2 BetrKV</span>
            </h1>
            <p className="text-lg text-white/75 max-w-2xl mx-auto">
              Berechnen Sie Ihre Betriebskosten für Nebenkostenabrechnungen — vollständig, fristgerecht und rechtskonform.
              Ohne Anmeldung. Ohne versteckte Kosten.
            </p>
            
            {/* Trust indicators */}
            <div className="flex flex-wrap justify-center gap-6 mt-8 text-sm text-white/70">
              <span className="flex items-center gap-2">
                <CheckIcon className="w-4 h-4 text-teal" />
                Alle §2 BetrKV Kategorien
              </span>
              <span className="flex items-center gap-2">
                <CheckIcon className="w-4 h-4 text-teal" />
                Echtzeit-Berechnung
              </span>
              <span className="flex items-center gap-2">
                <CheckIcon className="w-4 h-4 text-teal" />
                PDF-Export
              </span>
            </div>
          </div>
        </section>

        {/* Calculator Section */}
        <section className="py-12 lg:py-20 bg-warm-white">
          <div className="max-w-[800px] mx-auto px-6">
            <BKACalculator />
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 lg:py-24 bg-navy text-white">
          <div className="max-w-[800px] mx-auto px-6 text-center">
            <h2 className="text-3xl font-bold mb-4 font-serif">
              Wir erstellen Ihre Betriebskostenabrechnung
            </h2>
            <p className="text-white/75 mb-8 text-lg">
              Vollständig, fristgerecht, DSGVO-konform. Lassen Sie die Arbeit von Profis erledigen — 
              damit Sie Zeit für das Wesentliche haben.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a
                href="/anfrage"
                className="inline-flex items-center gap-2 bg-teal text-white px-8 py-4 rounded-xl font-semibold text-lg hover:bg-teal/85 transition-all shadow-lg hover:shadow-xl"
              >
                Jetzt Angebot anfragen
                <ArrowRightIcon className="w-5 h-5" />
              </a>
              <a
                href="/kontakt"
                className="inline-flex items-center gap-2 bg-white/10 text-white px-8 py-4 rounded-xl font-semibold text-lg hover:bg-white/20 transition-all border border-white/20"
              >
                Kostenlos beraten lassen
              </a>
            </div>
            
            {/* Service promises */}
            <div className="grid sm:grid-cols-3 gap-6 mt-12 pt-8 border-t border-white/10">
              <div className="text-center">
                <div className="text-3xl font-bold text-teal mb-1">&lt;24h</div>
                <div className="text-sm text-white/60">Antwort auf Anfragen</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-teal mb-1">DSGVO</div>
                <div className="text-sm text-white/60">Vollständig konform</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-teal mb-1">§556 BGB</div>
                <div className="text-sm text-white/60">Fristgerechte Abrechnung</div>
              </div>
            </div>
          </div>
        </section>

        {/* Legal Disclaimer */}
        <section className="py-8 bg-light-gray">
          <div className="max-w-[800px] mx-auto px-6">
            <div className="flex items-start gap-3 text-sm text-text-light">
              <div className="w-5 h-5 rounded-full bg-navy/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                <span className="text-navy text-xs font-bold">i</span>
              </div>
              <p>
                <strong className="text-navy">Rechtlicher Hinweis:</strong>{" "}
                Dieser Rechner dient nur zur Orientierung. Die berechneten Werte sind Schätzungen 
                basierend auf Ihren Eingaben. Für eine rechtssichere Abrechnung nach § 556 BGB und 
                § 2 BetrKV empfehlen wir professionelle Hausverwaltung. Alle Angaben ohne Gewähr.
              </p>
            </div>
          </div>
        </section>

        {/* SEO Content */}
        <section className="py-16 lg:py-20 bg-white">
          <div className="max-w-[800px] mx-auto px-6">
            <h2 className="text-2xl font-bold text-navy mb-6 font-serif">
              Was sind Betriebskosten nach §2 BetrKV?
            </h2>
            <div className="prose prose-gray max-w-none text-text-light">
              <p className="mb-4">
                Die <strong className="text-navy">Betriebskostenverordnung (BetrKV)</strong> regelt, 
                welche Kosten eines Gebäudes als Betriebskosten auf die Mieter umgelegt werden dürfen. 
                Dabei unterscheidet § 2 BetrKV verschiedene Kostenarten, die alle in unserem 
                Betriebskostenrechner berücksichtigt werden.
              </p>
              <p className="mb-4">
                Die wichtigsten Kategorien umfassen <strong className="text-navy">Grundsteuer</strong>, 
                {" "}<strong className="text-navy">Wasser und Abwasser</strong>, 
                {" "}<strong className="text-navy">Heizung und Warmwasser</strong>, 
                {" "}<strong className="text-navy">Müllabfuhr</strong>, 
                {" "}<strong className="text-navy">Gebäudereinigung</strong> und 
                {" "}<strong className="text-navy">Versicherungen</strong>. Jede dieser Kategorien 
                wird nach einem bestimmten Umlageschlüssel auf die Mieter verteilt — in der Regel 
                nach Wohnfläche, bei Heizung und Warmwasser nach Verbrauch.
              </p>
              <h3 className="text-xl font-semibold text-navy mt-8 mb-4 font-serif">
                Betriebskosten in Hamburg: Was ist normal?
              </h3>
              <p className="mb-4">
                In Hamburg liegen die durchschnittlichen Betriebskosten bei etwa <strong className="text-navy">2,80 € pro Quadratmeter und Monat</strong> (Quelle: empirica 2024). 
                Dieser Wert kann je nach Altersbau, Ausstattung und Lage deutlich variieren. 
                Moderne Neubauten mit Wärmepumpe und guter Dämmung haben oft niedrigere Heizkosten, 
                während Altbauten in zentraler Lage höhere Nebenkosten verursachen können.
              </p>
              <p>
                Unser Rechner hilft Ihnen, Ihre Kosten einzuschätzen und mit dem Marktstandard zu 
                vergleichen. Für eine präzise und rechtssichere Nebenkostenabrechnung empfehlen wir 
                eine professionelle Hausverwaltung, die alle relevanten Fristen und Vorschriften einhält.
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
