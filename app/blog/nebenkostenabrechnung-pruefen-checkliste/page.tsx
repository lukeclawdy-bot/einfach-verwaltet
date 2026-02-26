import type { Metadata } from "next";
import Link from "next/link";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

export const metadata: Metadata = {
  title: "Nebenkostenabrechnung prüfen: Checkliste für Mieter und Vermieter (2026)",
  description:
    "Nebenkostenabrechnung prüfen mit Checkliste: 12-Monats-Frist §556 BGB, häufige Fehler, Widerspruchsrecht — für Mieter und Vermieter kompetent erklärt.",
  keywords:
    "Nebenkostenabrechnung prüfen Checkliste, §556 BGB Frist, Nebenkostenabrechnung Fehler finden, Nebenkostenabrechnung prüfen Mieter, Nebenkostenabrechnung prüfen Vermieter",
  openGraph: {
    title: "Nebenkostenabrechnung prüfen: Checkliste für Mieter und Vermieter",
    description:
      "Die komplette Checkliste zur Prüfung der Nebenkostenabrechnung: Fristen, Fehlerquellen und Widerspruch für Mieter und Vermieter.",
    url: "https://einfach-verwaltet.de/blog/nebenkostenabrechnung-pruefen-checkliste",
    siteName: "einfach verwaltet.",
    locale: "de_DE",
    type: "article",
  },
};

const jsonLdArticle = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Nebenkostenabrechnung prüfen: Checkliste für Mieter und Vermieter",
  description:
    "Die komplette Checkliste zur Prüfung der Nebenkostenabrechnung: Fristen, Fehlerquellen und Widerspruch für Mieter und Vermieter.",
  author: { 
    "@type": "Person", 
    name: "Lukas Schmitz",
    jobTitle: "Gründer",
    worksFor: { "@type": "Organization", name: "einfach verwaltet." }
  },
  publisher: {
    "@type": "Organization",
    name: "einfach verwaltet.",
    logo: { "@type": "ImageObject", url: "https://einfach-verwaltet.de/logo.png" },
  },
  datePublished: "2026-02-26",
  inLanguage: "de",
  url: "https://einfach-verwaltet.de/blog/nebenkostenabrechnung-pruefen-checkliste",
};

const jsonLdFaq = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Wie lange habe ich Zeit, eine Nebenkostenabrechnung zu prüfen?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Mieter haben nach §556 Abs. 3 Satz 5 BGB 12 Monate ab Zugang der Abrechnung Zeit, Einwendungen zu erheben. Nach Ablauf dieser Frist ist ein Widerspruch ausgeschlossen.",
      },
    },
    {
      "@type": "Question",
      name: "Welche Frist gilt für Vermieter bei der Abrechnungserstellung?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Der Vermieter muss die Nebenkostenabrechnung spätestens 12 Monate nach Ende des Abrechnungszeitraums vorlegen (§556 Abs. 3 BGB). Bei Versäumnis verliert er das Recht auf Nachforderungen.",
      },
    },
    {
      "@type": "Question",
      name: "Was passiert bei Fehlern in der Nebenkostenabrechnung?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Bei formalen Fehlern (fehlender Zeitraum, fehlender Umlageschlüssel) ist die gesamte Abrechnung unwirksam. Bei inhaltlichen Fehlern (falsche Positionen) können diese einzeln korrigiert werden.",
      },
    },
    {
      "@type": "Question",
      name: "Kann ich als Mieter die Belege der Nebenkostenabrechnung einsehen?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Ja, Mieter haben nach §259 BGB analog das Recht auf Einsicht in die Originalbelege. Die Belegeinsicht kann schriftlich beantragt und muss innerhalb angemessener Zeit gewährt werden.",
      },
    },
  ],
};

export default function Post() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdArticle) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdFaq) }}
      />
      <Navbar />
      <main className="bg-warm-white min-h-screen pt-16">
        <article className="max-w-3xl mx-auto px-4 py-16">
          <nav className="text-sm text-gray-500 mb-8">
            <Link href="/" className="hover:text-teal">Startseite</Link>
            <span className="mx-2">›</span>
            <Link href="/blog" className="hover:text-teal">Ratgeber</Link>
            <span className="mx-2">›</span>
            <span className="text-gray-700">Nebenkostenabrechnung prüfen Checkliste</span>
          </nav>

          <header className="mb-10">
            <p className="text-teal text-sm font-semibold uppercase tracking-wider mb-3">
              Ratgeber · 9 min Lesezeit · Mieter &amp; Vermieter
            </p>
            <h1 className="text-3xl md:text-4xl font-bold text-navy font-playfair mb-4 leading-tight">
              Nebenkostenabrechnung prüfen: Checkliste für Mieter und Vermieter
            </h1>
            <p className="text-gray-500 text-sm">Februar 2026 · Lukas Schmitz, Gründer einfach verwaltet.</p>
          </header>

          {/* Quick Answer Box */}
          <div className="bg-teal/5 border-l-4 border-teal rounded-r-xl p-6 mb-10">
            <p className="font-semibold text-navy mb-2">Kurzantwort</p>
            <p className="text-gray-700">
              Mieter und Vermieter müssen die Nebenkostenabrechnung auf Fristen, formale Vollständigkeit 
              und inhaltliche Korrektheit prüfen. Die 12-Monats-Frist nach §556 BGB gilt für beide Seiten. 
              Formale Mängel machen die Abrechnung unwirksam, inhaltliche Fehler können korrigiert werden.
            </p>
          </div>

          <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed space-y-6">
            <p>
              Die Nebenkostenabrechnung ist ein jährlicher Pflichttermin für Mieter und Vermieter. 
              Doch fast die Hälfte aller Abrechnungen enthält Fehler — oft zu Lasten einer Partei. 
              Diese Checkliste zeigt Ihnen systematisch, worauf Sie bei der Prüfung achten müssen.
            </p>

            <h2 className="text-2xl font-bold text-navy font-playfair mt-10 mb-4">
              Checkliste Teil 1: Fristen prüfen
            </h2>
            <p>
              Die Fristen nach <strong>§556 BGB</strong> sind zwingend. Wer sie verpasst, verliert Rechte.
            </p>
            
            <div className="bg-white border border-gray-200 rounded-xl p-6 my-6">
              <h3 className="text-lg font-semibold text-navy mb-4">☑️ Fristen-Checkliste</h3>
              <ul className="space-y-3 not-prose">
                <li className="flex items-start gap-3">
                  <input type="checkbox" className="mt-1.5 w-4 h-4 text-teal" readOnly />
                  <span><strong>Vermieter-Frist:</strong> Abrechnung innerhalb 12 Monate nach Abrechnungszeitraum (§556 Abs. 3 BGB)</span>
                </li>
                <li className="flex items-start gap-3">
                  <input type="checkbox" className="mt-1.5 w-4 h-4 text-teal" readOnly />
                  <span><strong>Mieter-Frist:</strong> Widerspruch innerhalb 12 Monate nach Zugang (§556 Abs. 3 Satz 5 BGB)</span>
                </li>
                <li className="flex items-start gap-3">
                  <input type="checkbox" className="mt-1.5 w-4 h-4 text-teal" readOnly />
                  <span><strong>Zugangsdatum dokumentieren:</strong> Briefeingang oder E-Mail-Datum notieren</span>
                </li>
                <li className="flex items-start gap-3">
                  <input type="checkbox" className="mt-1.5 w-4 h-4 text-teal" readOnly />
                  <span><strong>Fristenkollision prüfen:</strong> Bei Nachforderung beide Fristen gegenüberstellen</span>
                </li>
              </ul>
            </div>

            <div className="bg-amber-50 border border-amber-200 rounded-xl p-4 my-4 text-sm">
              <strong>⚠️ Wichtig:</strong> Verpasst der Vermieter die 12-Monats-Frist, verliert er das 
              Recht auf Nachforderungen komplett. Guthaben des Mieters bleiben jedoch bestehen und müssen 
              ausgezahlt werden.
            </div>

            <h2 className="text-2xl font-bold text-navy font-playfair mt-10 mb-4">
              Checkliste Teil 2: Formale Anforderungen
            </h2>
            <p>
              Formale Fehler machen die gesamte Abrechnung unwirksam. Prüfen Sie diese Pflichtangaben:
            </p>

            <div className="bg-white border border-gray-200 rounded-xl p-6 my-6">
              <h3 className="text-lg font-semibold text-navy mb-4">☑️ Formalia-Checkliste</h3>
              <ul className="space-y-3 not-prose">
                <li className="flex items-start gap-3">
                  <input type="checkbox" className="mt-1.5 w-4 h-4 text-teal" readOnly />
                  <span><strong>Abrechnungszeitraum:</strong> Vom-bis-Datum klar erkennbar (z.B. 01.01.-31.12.2025)</span>
                </li>
                <li className="flex items-start gap-3">
                  <input type="checkbox" className="mt-1.5 w-4 h-4 text-teal" readOnly />
                  <span><strong>Anschrift der Wohnung:</strong> Vollständige Adresse mit Wohnungsnummer</span>
                </li>
                <li className="flex items-start gap-3">
                  <input type="checkbox" className="mt-1.5 w-4 h-4 text-teal" readOnly />
                  <span><strong>Umlageschlüssel:</strong> Wie werden Kosten verteilt? (Wohnfläche, Personen, Verbrauch)</span>
                </li>
                <li className="flex items-start gap-3">
                  <input type="checkbox" className="mt-1.5 w-4 h-4 text-teal" readOnly />
                  <span><strong>Gesamtfläche des Gebäudes:</strong> Bezugsgröße für Ihren Anteil</span>
                </li>
                <li className="flex items-start gap-3">
                  <input type="checkbox" className="mt-1.5 w-4 h-4 text-teal" readOnly />
                  <span><strong>Vorauszahlungen aufgeführt:</strong> Alle geleisteten Abschläge müssen ersichtlich sein</span>
                </li>
                <li className="flex items-start gap-3">
                  <input type="checkbox" className="mt-1.5 w-4 h-4 text-teal" readOnly />
                  <span><strong>Saldo klar ausgewiesen:</strong> Nachzahlung oder Guthaben eindeutig benannt</span>
                </li>
              </ul>
            </div>

            <h2 className="text-2xl font-bold text-navy font-playfair mt-10 mb-4">
              Checkliste Teil 3: Inhaltliche Prüfung
            </h2>
            <p>
              Hier prüfen Sie, ob die abgerechneten Kosten korrekt sind:
            </p>

            <div className="bg-white border border-gray-200 rounded-xl p-6 my-6">
              <h3 className="text-lg font-semibold text-navy mb-4">☑️ Inhalts-Checkliste</h3>
              <ul className="space-y-3 not-prose">
                <li className="flex items-start gap-3">
                  <input type="checkbox" className="mt-1.5 w-4 h-4 text-teal" readOnly />
                  <span><strong>Umlagefähigkeit prüfen:</strong> Alle Positionen gegen §2 BetrKV vergleichen</span>
                </li>
                <li className="flex items-start gap-3">
                  <input type="checkbox" className="mt-1.5 w-4 h-4 text-teal" readOnly />
                  <span><strong>Keine nicht umlagefähigen Kosten:</strong> Verwaltungskosten, Instandhaltung, Leerstandskosten entfernt</span>
                </li>
                <li className="flex items-start gap-3">
                  <input type="checkbox" className="mt-1.5 w-4 h-4 text-teal" readOnly />
                  <span><strong>Heizkosten korrekt:</strong> 30/70-Verteilung nach Heizkostenverordnung beachtet</span>
                </li>
                <li className="flex items-start gap-3">
                  <input type="checkbox" className="mt-1.5 w-4 h-4 text-teal" readOnly />
                  <span><strong>Grundsteuer:</strong> Nur der Grundstücksanteil, nicht der Erbbauzins</span>
                </li>
                <li className="flex items-start gap-3">
                  <input type="checkbox" className="mt-1.5 w-4 h-4 text-teal" readOnly />
                  <span><strong>Versicherungen:</strong> Nur Gebäudeversicherung, keine Inhaltsversicherung</span>
                </li>
                <li className="flex items-start gap-3">
                  <input type="checkbox" className="mt-1.5 w-4 h-4 text-teal" readOnly />
                  <span><strong>Keine Doppelabrechnungen:</strong> Keine Überlappungen zwischen Positionen</span>
                </li>
              </ul>
            </div>

            <h2 className="text-2xl font-bold text-navy font-playfair mt-10 mb-4">
              Wie Sie einen Widerspruch formulieren
            </h2>
            <p>
              Bei Fehlern sollten Sie zeitnah und schriftlich widersprechen. Diese Punkte gehören in jeden Widerspruch:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Datum und Zugang der beanstandeten Abrechnung</li>
              <li>Konkrete Fehlerbeschreibung (Position, Betrag, gesetzliche Grundlage)</li>
              <li>Fristgerechte Einwendung innerhalb der 12-Monats-Frist</li>
              <li>Aufforderung zur Korrektur und Neuberechnung</li>
              <li>Bitte um Belegeinsicht bei Zweifeln</li>
            </ul>

            <h2 className="text-2xl font-bold text-navy font-playfair mt-10 mb-4">
              Tipps für Vermieter: Fehler vermeiden
            </h2>
            <p>
              Als Vermieter können Sie durch sorgfältige Arbeit Ärger vermeiden:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Abrechnung bis November erstellen (Puffer zur Frist)</li>
              <li>Umlageschlüssel im Mietvertrag klar definieren</li>
              <li>Belege mindestens 10 Jahre aufbewahren</li>
              <li>Vorauszahlungen monatlich genau erfassen</li>
              <li>Professionelle Software oder Hausverwaltung nutzen</li>
            </ul>

            {/* FAQ Section */}
            <h2 className="text-2xl font-bold text-navy font-playfair mt-10 mb-4">
              Häufig gestellte Fragen
            </h2>
            
            <div className="space-y-6 not-prose">
              <div className="bg-white border border-gray-200 rounded-xl p-5">
                <h3 className="font-semibold text-navy mb-2">Wie lange habe ich Zeit, eine Nebenkostenabrechnung zu prüfen?</h3>
                <p className="text-gray-600 text-sm">
                  Mieter haben nach §556 Abs. 3 Satz 5 BGB 12 Monate ab Zugang der Abrechnung Zeit, Einwendungen zu erheben. Nach Ablauf dieser Frist ist ein Widerspruch ausgeschlossen.
                </p>
              </div>

              <div className="bg-white border border-gray-200 rounded-xl p-5">
                <h3 className="font-semibold text-navy mb-2">Welche Frist gilt für Vermieter bei der Abrechnungserstellung?</h3>
                <p className="text-gray-600 text-sm">
                  Der Vermieter muss die Nebenkostenabrechnung spätestens 12 Monate nach Ende des Abrechnungszeitraums vorlegen (§556 Abs. 3 BGB). Bei Versäumnis verliert er das Recht auf Nachforderungen.
                </p>
              </div>

              <div className="bg-white border border-gray-200 rounded-xl p-5">
                <h3 className="font-semibold text-navy mb-2">Was passiert bei Fehlern in der Nebenkostenabrechnung?</h3>
                <p className="text-gray-600 text-sm">
                  Bei formalen Fehlern (fehlender Zeitraum, fehlender Umlageschlüssel) ist die gesamte Abrechnung unwirksam. Bei inhaltlichen Fehlern (falsche Positionen) können diese einzeln korrigiert werden.
                </p>
              </div>

              <div className="bg-white border border-gray-200 rounded-xl p-5">
                <h3 className="font-semibold text-navy mb-2">Kann ich als Mieter die Belege der Nebenkostenabrechnung einsehen?</h3>
                <p className="text-gray-600 text-sm">
                  Ja, Mieter haben nach §259 BGB analog das Recht auf Einsicht in die Originalbelege. Die Belegeinsicht kann schriftlich beantragt und muss innerhalb angemessener Zeit gewährt werden.
                </p>
              </div>

              <div className="bg-white border border-gray-200 rounded-xl p-5">
                <h3 className="font-semibold text-navy mb-2">Was ist der Unterschied zwischen formalen und inhaltlichen Fehlern?</h3>
                <p className="text-gray-600 text-sm">
                  Formale Fehler (fehlende Pflichtangaben) machen die gesamte Abrechnung unwirksam. Inhaltliche Fehler (falsche Beträge, nicht umlagefähige Kosten) betreffen nur die betroffenen Positionen und können korrigiert werden.
                </p>
              </div>
            </div>

            <h2 className="text-2xl font-bold text-navy font-playfair mt-10 mb-4">
              Fazit: Systematisch prüfen lohnt sich
            </h2>
            <p>
              Eine systematische Prüfung der Nebenkostenabrechnung schützt vor finanziellen Überraschungen. 
              Nutzen Sie diese Checkliste für jeden Abrechnungszeitraum — als Mieter und als Vermieter. 
              Bei Unsicherheiten lohnt sich die professionelle Unterstützung durch eine erfahrene Hausverwaltung.
            </p>
          </div>

          <div className="mt-12 bg-teal/10 border border-teal/20 rounded-xl p-8">
            <h3 className="text-xl font-bold text-navy mb-2 font-playfair">
              Lassen Sie einfach verwaltet.
            </h3>
            <p className="text-gray-600 mb-4">
              Ihre Immobilie professionell verwalten. Rechtssichere Nebenkostenabrechnungen, 
              transparente Kommunikation und keine Überraschungen mehr.
            </p>
            <Link
              href="/anfrage"
              className="inline-block bg-teal text-white font-semibold px-6 py-3 rounded-lg hover:bg-teal/90 transition-colors"
            >
              Jetzt anfragen →
            </Link>
          </div>

          <div className="mt-10">
            <Link href="/blog" className="text-teal hover:underline text-sm">
              ← Zurück zum Ratgeber
            </Link>
          </div>
        </article>
      </main>
      <Footer />
    </>
  );
}
