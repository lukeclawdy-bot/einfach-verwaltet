import type { Metadata } from "next";
import Link from "next/link";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

export const metadata: Metadata = {
  title: "Mietkaution Rückzahlung 2026: Fristen, Rechte und was Vermieter wissen müssen | einfach verwaltet.",
  description:
    "Mietkaution Rückzahlung: Wann muss der Vermieter zahlen? Was darf einbehalten werden? §551 BGB, Zinspflicht und häufige Fehler — der vollständige Leitfaden.",
  keywords:
    "Mietkaution Rückzahlung, Kaution zurückbekommen, §551 BGB, Mietkaution Frist, Kaution einbehalten",
  openGraph: {
    title: "Mietkaution Rückzahlung 2026: Fristen, Rechte und was Vermieter wissen müssen",
    description:
      "Alles zur Mietkaution Rückzahlung: gesetzliche Fristen, was Vermieter einbehalten dürfen, Zinspflicht nach §551 BGB und häufige Fehler.",
    url: "https://einfach-verwaltet.de/blog/mietkaution-rueckzahlung",
    siteName: "einfach verwaltet.",
    locale: "de_DE",
    type: "article",
  },
  alternates: {
    canonical: "https://einfach-verwaltet.de/blog/mietkaution-rueckzahlung",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Mietkaution Rückzahlung 2026: Fristen, Rechte und was Vermieter wissen müssen",
  description:
    "Vollständiger Leitfaden zur Mietkaution Rückzahlung nach deutschem Mietrecht — §551 BGB, Fristen, zulässige Einbehalte.",
  author: { "@type": "Organization", name: "einfach verwaltet." },
  publisher: {
    "@type": "Organization",
    name: "einfach verwaltet.",
    logo: { "@type": "ImageObject", url: "https://einfach-verwaltet.de/logo.png" },
  },
  datePublished: "2026-02-27",
  inLanguage: "de",
  url: "https://einfach-verwaltet.de/blog/mietkaution-rueckzahlung",
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Wie lange hat der Vermieter Zeit, die Mietkaution zurückzuzahlen?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Nach BGH-Rechtsprechung hat der Vermieter eine angemessene Prüfungsfrist von 3 bis 6 Monaten nach Mietende, um etwaige Forderungen zu prüfen. Danach muss er die Kaution mit Zinsen zurückzahlen oder schriftlich begründen, warum er Teile einbehält.",
      },
    },
    {
      "@type": "Question",
      name: "Was darf der Vermieter von der Kaution einbehalten?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Zulässige Einbehalte: Mietrückstände, nachweisliche Schäden über normale Abnutzung hinaus, ausstehende Nebenkostennachzahlungen und fehlende Schlüssel. Nicht zulässig: normale Gebrauchsspuren, Schönheitsreparaturen bei unwirksamen Klauseln, pauschale Renovierungskosten.",
      },
    },
    {
      "@type": "Question",
      name: "Muss der Vermieter die Kaution verzinsen?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Ja. Gemäß §551 Abs. 3 BGB muss die Kaution auf einem separaten Konto getrennt vom Vermögen des Vermieters angelegt werden. Die anfallenden Zinsen stehen dem Mieter zu und sind bei der Rückzahlung hinzuzurechnen.",
      },
    },
  ],
};

export default function MietkautionRueckzahlungPage() {
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
            <span>Mietkaution Rückzahlung</span>
          </nav>

          {/* Header */}
          <header className="mb-10">
            <div className="flex flex-wrap gap-2 mb-4">
              <span className="bg-teal/10 text-teal text-xs font-semibold px-3 py-1 rounded-full">Mietkaution</span>
              <span className="bg-gray-100 text-gray-600 text-xs font-medium px-3 py-1 rounded-full">9 min Lesezeit</span>
              <span className="bg-gray-100 text-gray-600 text-xs font-medium px-3 py-1 rounded-full">Februar 2026</span>
            </div>
            <h1 className="text-3xl md:text-4xl font-bold text-navy leading-tight mb-4">
              Mietkaution Rückzahlung: Fristen, Rechte und was Vermieter wissen müssen
            </h1>
            <p className="text-lg text-text-light leading-relaxed">
              Wie lange darf der Vermieter warten? Was darf er einbehalten? Was passiert mit den Zinsen? Alles zur Mietkautionsrückzahlung nach §551 BGB — rechtssicher und verständlich erklärt.
            </p>
          </header>

          <div className="prose prose-navy max-w-none text-gray-700 leading-relaxed space-y-8">

            <section>
              <h2 className="text-2xl font-bold text-navy mb-4">Rechtliche Grundlage: §551 BGB</h2>
              <p>
                Die Mietkaution ist in §551 BGB geregelt. Die wichtigsten gesetzlichen Eckpunkte:
              </p>
              <div className="bg-white rounded-xl border border-gray-200 overflow-hidden my-4">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="bg-navy text-white">
                      <th className="text-left px-4 py-3 font-semibold">Regelung</th>
                      <th className="text-left px-4 py-3 font-semibold">Gesetzliche Grundlage</th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      ["Maximale Kaution: 3 Nettokaltmieten", "§551 Abs. 1 BGB"],
                      ["Ratenzahlung: 3 Monatsraten möglich", "§551 Abs. 2 BGB"],
                      ["Getrennte Anlage auf Kautionskonto", "§551 Abs. 3 BGB"],
                      ["Zinsen stehen dem Mieter zu", "§551 Abs. 3 BGB"],
                      ["Prüffrist: 3–6 Monate nach BGH", "BGH-Urteil VIII ZR 71/05"],
                    ].map(([rule, law]) => (
                      <tr key={rule} className="border-b border-gray-100 last:border-0">
                        <td className="px-4 py-3">{rule}</td>
                        <td className="px-4 py-3 text-teal font-medium">{law}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-navy mb-4">Wie lange darf der Vermieter die Kaution einbehalten?</h2>
              <p>
                Es gibt keine gesetzlich festgelegte Rückzahlungsfrist. Der Bundesgerichtshof hat jedoch mehrfach entschieden, dass dem Vermieter eine angemessene Prüfungsfrist zusteht — üblicherweise <strong>3 bis 6 Monate</strong> nach Ende des Mietverhältnisses.
              </p>
              <p>
                Diese Frist dient dazu, dass der Vermieter:
              </p>
              <ul className="space-y-2 mt-3">
                {[
                  "Schäden in der Wohnung prüfen und Kostenvoranschläge einholen kann",
                  "Die Nebenkostenabrechnung für das laufende Jahr erstellt hat",
                  "Eventuelle Mietrückstände beziffert hat",
                  "Mögliche Forderungen gegen den Mieter gesichert hat",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm">
                    <span className="text-teal mt-0.5">•</span>
                    {item}
                  </li>
                ))}
              </ul>
              <p className="mt-4">
                Nach Ablauf der Prüffrist ohne Einbehalt muss der Vermieter die Kaution inklusive Zinsen zurückzahlen. Behält er einen Teil ein, muss er dies <strong>schriftlich begründen</strong> und die entsprechende Höhe benennen.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-navy mb-4">Was darf der Vermieter von der Kaution einbehalten?</h2>

              <h3 className="text-xl font-semibold text-navy mb-3">✓ Zulässige Einbehalte</h3>
              <div className="space-y-3 mb-6">
                {[
                  {
                    title: "Mietrückstände",
                    desc: "Offene Mietforderungen, die der Mieter bis Mietende nicht beglichen hat, können vollständig von der Kaution abgezogen werden.",
                  },
                  {
                    title: "Echte Schäden über normale Abnutzung hinaus",
                    desc: "Löcher in Wänden, zerstörte Türen, Brandflecken auf dem Parkett — Schäden, die nicht durch normalen Mietgebrauch entstehen. Wichtig: Fotodokumentation beim Einzugs- und Auszugsprotokoll.",
                  },
                  {
                    title: "Offene Nebenkostennachzahlungen",
                    desc: "Steht noch eine Betriebskostenabrechnung aus, darf der Vermieter einen angemessenen Anteil der Kaution bis zur Abrechnung zurückhalten.",
                  },
                  {
                    title: "Fehlende Schlüssel",
                    desc: "Gibt der Mieter nicht alle Schlüssel zurück, können die Kosten für Schlüsseldienst und neue Schließzylinder einbehalten werden.",
                  },
                ].map((item, i) => (
                  <div key={i} className="flex gap-3 bg-green-50 rounded-xl p-4">
                    <span className="text-green-600 font-bold mt-0.5">✓</span>
                    <div>
                      <span className="font-semibold text-navy text-sm">{item.title}: </span>
                      <span className="text-sm text-gray-700">{item.desc}</span>
                    </div>
                  </div>
                ))}
              </div>

              <h3 className="text-xl font-semibold text-navy mb-3">✗ Unzulässige Einbehalte</h3>
              <div className="space-y-3">
                {[
                  {
                    title: "Normale Gebrauchsspuren",
                    desc: "Verfärbungen an Lichtschaltern, leichte Kratzer im Parkett, minimale Wandverfärbungen durch Aufhängen von Bildern — all das ist normaler Abnutzungsverschleiß, den der Vermieter nicht abziehen darf.",
                  },
                  {
                    title: "Schönheitsreparaturen bei unwirksamen Vertragsklauseln",
                    desc: "Viele Schönheitsreparaturklauseln in Mietverträgen sind unwirksam (BGH seit 2015). Wenn die Klausel starr oder unverhältnismäßig ist, kann der Vermieter keine Renovierungskosten einbehalten.",
                  },
                  {
                    title: "Pauschale Renovierungskosten ohne Nachweis",
                    desc: "Pauschal €500 für Malerarbeiten einzubehalten ohne konkrete Schadensaufstellung ist unzulässig. Jede Forderung muss einzeln nachgewiesen werden.",
                  },
                ].map((item, i) => (
                  <div key={i} className="flex gap-3 bg-red-50 rounded-xl p-4">
                    <span className="text-red-600 font-bold mt-0.5">✗</span>
                    <div>
                      <span className="font-semibold text-navy text-sm">{item.title}: </span>
                      <span className="text-sm text-gray-700">{item.desc}</span>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-navy mb-4">Zinsen auf die Mietkaution</h2>
              <p>
                Die Kaution muss gemäß §551 Abs. 3 BGB auf einem separaten, insolvenzsicheren Konto angelegt werden — getrennt vom Privatvermögen des Vermieters. Die anfallenden Zinsen (bei Tagesgeldkonten derzeit 2–4 % p.a.) gehören dem Mieter und müssen bei der Rückzahlung hinzugerechnet werden.
              </p>
              <p>
                Legt der Vermieter die Kaution nicht ordnungsgemäß an, kann der Mieter Schadensersatz fordern — nämlich die Zinsen, die er auf einem vergleichbaren Konto hätte erzielen können.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-navy mb-4">Checkliste für Vermieter: Kautionsrückzahlung richtig abwickeln</h2>
              <ol className="space-y-3">
                {[
                  "Wohnungsübergabeprotokoll beim Auszug erstellen und unterschreiben lassen",
                  "Alle Schäden fotografisch dokumentieren (Datum im EXIF sichtbar)",
                  "Handwerkerofferten für Schadensbeseitigung einholen",
                  "Nebenkostenabrechnung für laufendes Jahr vorbereiten",
                  "Mietrückstände prüfen und beziffern",
                  "Alle Schlüssel entgegennehmen und Rückgabe schriftlich bestätigen",
                  "Innerhalb von 3–6 Monaten: Kaution + Zinsen zurückzahlen oder schriftlich begründet einbehalten",
                ].map((item, i) => (
                  <li key={i} className="flex gap-3">
                    <span className="w-6 h-6 rounded-full bg-teal text-white text-xs font-bold flex items-center justify-center shrink-0 mt-0.5">{i + 1}</span>
                    <span className="text-sm text-gray-700">{item}</span>
                  </li>
                ))}
              </ol>
            </section>

            {/* FAQ */}
            <section className="bg-white rounded-2xl border border-gray-200 p-8">
              <h2 className="text-2xl font-bold text-navy mb-6">Häufige Fragen zur Mietkaution Rückzahlung</h2>
              <div className="space-y-5">
                {[
                  {
                    q: "Wie lange hat der Vermieter Zeit, die Mietkaution zurückzuzahlen?",
                    a: "Es gibt keine gesetzlich fixierte Frist. Nach BGH-Rechtsprechung hat der Vermieter eine angemessene Prüfungsfrist von 3 bis 6 Monaten. In dieser Zeit kann er Schäden prüfen, Abrechnungen erstellen und Forderungen beziffern.",
                  },
                  {
                    q: "Was passiert, wenn der Vermieter die Kaution nicht zurückzahlt?",
                    a: "Der Mieter kann nach Ablauf der Prüfungsfrist schriftlich zur Rückzahlung auffordern. Bei Nichtzahlung ist eine Klage vor dem Amtsgericht möglich (Streitwert bestimmt die Zuständigkeit). In vielen Fällen reicht schon ein Anwaltschreiben.",
                  },
                  {
                    q: "Kann der Vermieter die Kaution für zukünftige Nebenkostenabrechnungen einbehalten?",
                    a: "Ja, aber nur in angemessenem Umfang. Der Vermieter darf den Teil der Kaution zurückhalten, der voraussichtlich für eine noch ausstehende Nebenkostenabrechnung benötigt wird.",
                  },
                  {
                    q: "Was ist, wenn der Vermieter die Kaution schon ausgegeben hat?",
                    a: "Der Vermieter bleibt persönlich zur Rückzahlung verpflichtet — unabhängig davon, ob er die Kaution korrekt angelegt hat. Fehlende Insolvenzabsicherung ändert nichts an der Rückzahlungspflicht.",
                  },
                ].map((faq, i) => (
                  <div key={i} className="border-b border-gray-100 pb-5 last:border-0 last:pb-0">
                    <h3 className="font-semibold text-navy mb-2">{faq.q}</h3>
                    <p className="text-gray-700 text-sm leading-relaxed">{faq.a}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* Internal links */}
            <section className="bg-white rounded-xl border border-gray-200 p-6">
              <h2 className="text-xl font-bold text-navy mb-4">Weiterführende Ratgeber</h2>
              <ul className="space-y-2 text-sm">
                {[
                  { href: "/blog/mietkaution-vermieter", label: "Mietkaution als Vermieter: Anlage, Verwaltung und Rückgabe" },
                  { href: "/blog/mietkaution-zurueckhalten-vermieter", label: "Mietkaution zurückhalten: Was Vermieter einbehalten dürfen" },
                  { href: "/blog/wohnungsuebergabe-protokoll", label: "Wohnungsübergabeprotokoll: Vorlage und Checkliste" },
                  { href: "/blog/mietrecht-faq", label: "Mietrecht FAQ 2026: Die 20 häufigsten Fragen" },
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
              <h2 className="text-2xl font-bold mb-3">Kautionsmanagement ohne Aufwand</h2>
              <p className="text-white/80 mb-6 max-w-md mx-auto">
                einfach verwaltet. übernimmt die gesamte Kautionsverwaltung — von der sicheren Anlage bis zur rechtssicheren Rückabwicklung beim Mieterwechsel.
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
