import type { Metadata } from "next";
import Link from "next/link";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

export const metadata: Metadata = {
  title: "Nebenkostenabrechnung prufen: So erkennen Mieter und Vermieter Fehler | einfach verwaltet.",
  description:
    "Nebenkostenabrechnung richtig prufen: Checkliste fur Mieter und Vermieter, 12-Monats-Frist, umlagefahige Kosten nach SS2 BetrKV und wie man Fehler findet.",
  keywords:
    "Nebenkostenabrechnung prufen, Nebenkostenabrechnung Fehler, SS 556 BGB, Nebenkosten prufen Checkliste, Betriebskostenabrechnung",
  openGraph: {
    title: "Nebenkostenabrechnung prufen: So erkennen Mieter und Vermieter Fehler",
    description:
      "Checkliste zur Prufung der Nebenkostenabrechnung. Fur Mieter und Vermieter: Fristen, umlagefahige Kosten, haufige Fehler vermeiden.",
    url: "https://einfach-verwaltet.de/blog/nebenkostenabrechnung-pruefen",
    siteName: "einfach verwaltet.",
    locale: "de_DE",
    type: "article",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Nebenkostenabrechnung prufen: So erkennen Mieter und Vermieter Fehler",
  description:
    "Umfassende Checkliste zur Prufung der Nebenkostenabrechnung. Fur Mieter und Vermieter: Fristen, umlagefahige Kosten, haufige Fehler vermeiden.",
  author: { "@type": "Organization", name: "einfach verwaltet." },
  publisher: {
    "@type": "Organization",
    name: "einfach verwaltet.",
    logo: { "@type": "ImageObject", url: "https://einfach-verwaltet.de/logo.png" },
  },
  datePublished: "2026-02-27",
  inLanguage: "de",
  url: "https://einfach-verwaltet.de/blog/nebenkostenabrechnung-pruefen",
};

const faqLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Was muss in einer Nebenkostenabrechnung enthalten sein?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Eine korrekte Nebenkostenabrechnung muss enthalten: Abrechnungszeitraum, alle umlagefahigen Kosten nach SS2 BetrKV, den verwendeten Verteilerschlussel, Vorauszahlungen des Mieters und das Ergebnis (Nachzahlung oder Guthaben). Die Abrechnung muss nachvollziehbar aufbereitet sein.",
      },
    },
    {
      "@type": "Question",
      name: "Welche Frist gilt fur die Nebenkostenabrechnung?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Der Vermieter muss die Nebenkostenabrechnung innerhalb von 12 Monaten nach Ende des Abrechnungsjahres vorlegen (SS 556 Abs. 3 BGB). Lassen Sie er diese Frist verstreifen, verliert er das Recht auf Nachforderungen. Der Mieter hat nach Erhalt 12 Monate Zeit, Einwendungen zu erheben.",
      },
    },
    {
      "@type": "Question",
      name: "Welche Kosten darf der Vermieter umlagen?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Nur die in SS2 BetrKV aufgefuhrten Kosten sind umlagefahig. Dazu gehoren: Grundstuckssteuer, Gebaudeversicherung, Straenreinigung, Mullbeseitigung, Wasserversorgung, Kanal, Heizung, Warmwasser, Aufzugswartung, Beleuchtung, Gartenpflege, Schornsteinfeger und Hauswartung. Nicht umlagefahig sind Reparaturen, Instandhaltungsrucklagen oder Verwaltungskosten.",
      },
    },
  ],
};

export default function Post() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }}
      />
      <Navbar />
      <main className="bg-warm-white min-h-screen pt-16">
        <article className="max-w-3xl mx-auto px-4 py-16">
          <nav className="text-sm text-gray-500 mb-8">
            <Link href="/" className="hover:text-teal">Startseite</Link>
            <span className="mx-2">/</span>
            <Link href="/blog" className="hover:text-teal">Ratgeber</Link>
            <span className="mx-2">/</span>
            <span className="text-gray-700">Nebenkostenabrechnung prüfen</span>
          </nav>

          <header className="mb-10">
            <p className="text-teal text-sm font-semibold uppercase tracking-wider mb-3">
              Ratgeber · 9 min Lesezeit · Mieter & Vermieter
            </p>
            <h1 className="text-3xl md:text-4xl font-bold text-navy font-playfair mb-4 leading-tight">
              Nebenkostenabrechnung prufen: So erkennen Mieter und Vermieter Fehler
            </h1>
            <p className="text-gray-500 text-sm">Februar 2026 · einfach verwaltet.</p>
          </header>

          <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed space-y-6">
            <p>
              Die Nebenkostenabrechnung ist ein Jahrliches Pflichtubel fur Vermieter und spannungsgeladenes Thema fur Mieter. 
              Doch viele Abrechnungen enthalten Fehler -- sowohl in Form als auch inhaltlich. Fur beide Seiten lohnt sich eine 
              sorgfaltige Prufung. Dieser Artikel zeigt, worauf Mieter und Vermieter achten mussen.
            </p>

            <h2 className="text-2xl font-bold text-navy font-playfair mt-10 mb-4">
              Die gesetzliche Grundlage: SS 556 BGB und SS2 BetrKV
            </h2>
            <p>
              Die Nebenkostenabrechnung ist im <strong>SS 556 BGB</strong> geregelt. Der Vermieter ist verpflichtet, 
              dem Mieter <strong>jahrlich</strong> eine Abrechnung der Betriebskosten zu ubermitteln. 
              Die <strong>BetrKV (BetrVGebV)</strong> legt in <strong>SS2</strong> abschlieend fest, welche Kosten umlagefahig sind.
            </p>
            <p>
              Wichtig: Eine Abrechnung muss <strong>formal und inhaltlich korrekt</strong> sein. Formale Fehler konnen zur 
              Unwirksamkeit der gesamten Abrechnung fuhren -- mit erheblichen finanziellen Folgen fur den Vermieter.
            </p>

            <h2 className="text-2xl font-bold text-navy font-playfair mt-10 mb-4">
              Die 12-Monats-Frist: Was Mieter und Vermieter wissen mussen
            </h2>
            <p>
              <strong>SS 556 Abs. 3 BGB</strong> sieht eine doppelte 12-Monats-Frist vor:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>
                <strong>Vermieterfrist:</strong> Die Abrechnung muss innerhalb von 12 Monaten nach Ende des Abrechnungsjahres 
                beim Mieter eingegangen sein. Andernfalls verliert der Vermieter das Recht auf Nachzahlungen (Ausschlussfrist).
              </li>
              <li>
                <strong>Mieterfrist:</strong> Der Mieter hat nach Erhalt der Abrechnung 12 Monate Zeit, Einwendungen zu erheben. 
                Danach ist die Abrechnung auBer Streit gestellt, wenn keine offensichtlichen Rechenfehler vorliegen.
              </li>
            </ul>

            <h2 className="text-2xl font-bold text-navy font-playfair mt-10 mb-4">
              Checkliste fur Mieter: So prufen Sie Ihre Abrechnung
            </h2>
            
            <h3 className="text-xl font-semibold text-navy mt-6 mb-2">1. Formale Vollstandigkeit prufen</h3>
            <ul className="list-disc pl-6 space-y-2">
              <li>Ist ein klarer Abrechnungszeitraum angegeben (z.B. 01.01.-31.12.2025)?</li>
              <li>Sind alle Vorauszahlungen aufgefuhrt und stimmen sie mit Ihren Zahlungen uberein?</li>
              <li>Ist ein Verteilerschlussel genannt (Wohnflache, Personen, Verbrauch)?</li>
              <li>Ist das Ergebnis klar ausgewiesen (Nachzahlung/Guthaben)?</li>
              <li>Ist die 12-Monats-Frist eingehalten worden?</li>
            </ul>

            <h3 className="text-xl font-semibold text-navy mt-6 mb-2">2. Umlagefahigkeit der Kosten prufen</h3>
            <p>Nicht alle Kosten darf der Vermieter umlagen. Prufen Sie jede Position anhand der <strong>SS2 BetrKV</strong>:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Umlagefahig:</strong> Grundsteuer, Versicherungen, Wasser, Heizung, Mull, Straenreinigung, Aufzug, Garten, Hauswartung</li>
              <li><strong>Nicht umlagefahig:</strong> Verwaltungskosten, Reparaturen, Instandhaltungsrucklagen, Leerstandskosten</li>
            </ul>

            <h3 className="text-xl font-semibold text-navy mt-6 mb-2">3. Verteilerschlussel uberprufen</h3>
            <p>
              Der im Mietvertrag vereinbarte Schlussel muss angewendet werden. Huafige Fehler:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Falsche Gesamtflache zugrunde gelegt</li>
              <li>Falscher Schlussel verwendet (z.B. Nutzflache statt Wohnflache)</li>
              <li>Verbrauchskosten nicht nach tatsachlichem Verbrauch abgerechnet</li>
            </ul>

            <h2 className="text-2xl font-bold text-navy font-playfair mt-10 mb-4">
              Checkliste fur Vermieter: Fehlerfreie Abrechnung erstellen
            </h2>
            <p>
              Fehlerhafte Abrechnungen kosten Vermieter bares Geld. Mit dieser Checkliste erstellen Sie eine 
              widerspruchsfeste Abrechnung:
            </p>
            
            <h3 className="text-xl font-semibold text-navy mt-6 mb-2">Vor der Abrechnung</h3>
            <ul className="list-disc pl-6 space-y-2">
              <li>Mietvertrag auf umlagefahige Kosten und Verteilerschlussel prufen</li>
              <li>Alle Rechnungen und Belege sortiert vorliegen haben</li>
              <li>Vorauszahlungen des Mieters mit Buchhaltung abstimmen</li>
              <li>Personenstande prufen (Umzuge, Neueinzuge, Todesfalle)</li>
            </ul>

            <h3 className="text-xl font-semibold text-navy mt-6 mb-2">Bei der Erstellung</h3>
            <ul className="list-disc pl-6 space-y-2">
              <li>Nur Kosten aus SS2 BetrKV einbeziehen</li>
              <li>Korrekten Verteilerschlussel anwenden</li>
              <li>Verbrauchskosten nur mit tatsachlichem Verbrauch (Ablesewerte)</li>
              <li>Klare Gliederung: Kostenposition, Gesamtkosten, Umlageschlussel, Mieteranteil</li>
              <li>Saldo aus Vorauszahlungen exakt berechnen</li>
            </ul>

            <h3 className="text-xl font-semibold text-navy mt-6 mb-2">Nach der Erstellung</h3>
            <ul className="list-disc pl-6 space-y-2">
              <li>Rechenergebnisse stichprobenartig prufen</li>
              <li>12-Monats-Frist unbedingt einhalten (Puffer einplanen!)</li>
              <li>Belege ordnen und fur 12-Monats-Einwendungsfrist bereithalten</li>
              <li>Schlussrechnung und Nachzahlungsfristen dokumentieren</li>
            </ul>

            <h2 className="text-2xl font-bold text-navy font-playfair mt-10 mb-4">
              Die haufigsten Fehler in Nebenkostenabrechnungen
            </h2>
            <p>
              Aus Erfahrung mit tausenden Abrechnungen haben sich diese Fehler als besonders haufig erwiesen:
            </p>
            <table className="w-full text-sm border-collapse my-4">
              <thead>
                <tr className="bg-gray-100">
                  <th className="text-left p-2 border">Fehler</th>
                  <th className="text-left p-2 border">Folge</th>
                  <th className="text-left p-2 border">Vermeidung</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="p-2 border">Fristuberschreitung (Vermieter)</td>
                  <td className="p-2 border">Verlust aller Nachforderungen</td>
                  <td className="p-2 border">Spatestens November erstellen</td>
                </tr>
                <tr>
                  <td className="p-2 border">Nicht umlagefahige Kosten</td>
                  <td className="p-2 border">Ruckforderung durch Mieter</td>
                  <td className="p-2 border">Nur SS2 BetrKV-Positionen</td>
                </tr>
                <tr>
                  <td className="p-2 border">Falscher Verteilerschlussel</td>
                  <td className="p-2 border">Falsche Mieteranteile</td>
                  <td className="p-2 border">Mietvertrag prufen</td>
                </tr>
                <tr>
                  <td className="p-2 border">Fehlende Vorauszahlungen</td>
                  <td className="p-2 border">Formelle Unwirksamkeit</td>
                  <td className="p-2 border">Vorauszahlungen separat ausweisen</td>
                </tr>
              </tbody>
            </table>

            <h2 className="text-2xl font-bold text-navy font-playfair mt-10 mb-4">
              Wie reagiere ich auf Fehler?
            </h2>
            
            <h3 className="text-xl font-semibold text-navy mt-6 mb-2">Als Mieter</h3>
            <p>
              Schreiben Sie eine schriftliche Einwendung innerhalb der 12-Monats-Frist. Formulieren Sie 
              den Beanstandungspunkt konkret und fordern Sie eine korrigierte Abrechnung unter Setzung 
              einer angemessenen Frist (z.B. 4 Wochen).
            </p>

            <h3 className="text-xl font-semibold text-navy mt-6 mb-2">Als Vermieter</h3>
            <p>
              Reagieren Sie auf berechtigte Einwendungen umgehend. Erstellen Sie eine korrigierte Abrechnung 
              oder begrunden Sie, warum die ursprungliche Abrechnung korrekt war. Dokumentieren Sie alle 
              Schritte fur den Fall eines Rechtsstreits.
            </p>

            <h2 className="text-2xl font-bold text-navy font-playfair mt-10 mb-4">
              Fazit: Grundlichkeit zahlt sich aus
            </h2>
            <p>
              Eine korrekte Nebenkostenabrechnung zu erstellen oder zu prufen erfordert Sorgfalt und 
              Fachwissen. Mieter sollten ihre Abrechnungen grundlich durchsehen, da Fehler haufig sind. 
              Vermieter profitieren von professioneller Unterstutzung, um teure Fehler und Nachforderungsverluste 
              zu vermeiden.
            </p>
          </div>

          <div className="mt-12 bg-teal/10 border border-teal/20 rounded-xl p-8">
            <h3 className="text-xl font-bold text-navy mb-2 font-playfair">
              Korrekte Nebenkostenabrechnungen ohne Aufwand
            </h3>
            <p className="text-gray-600 mb-4">
              einfach verwaltet. erstellt Ihre Nebenkostenabrechnungen fristgerecht und fehlerfrei -- 
              nach SS 556 BGB und SS2 BetrKV. Inklusive Belegverwaltung und Widerspruchsabwicklung.
            </p>
            <Link
              href="/anfrage"
              className="inline-block bg-teal text-white font-semibold px-6 py-3 rounded-lg hover:bg-teal/90 transition-colors"
            >
              Jetzt kostenlos anfragen
            </Link>
          </div>

          <div className="mt-10">
            <Link href="/blog" className="text-teal hover:underline text-sm">
              Zuruck zum Ratgeber
            </Link>
          </div>
        </article>
      </main>
      <Footer />
    </>
  );
}
