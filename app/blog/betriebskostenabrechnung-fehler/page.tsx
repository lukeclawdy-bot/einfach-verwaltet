import type { Metadata } from "next";
import Link from "next/link";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

export const metadata: Metadata = {
  title: "Betriebskostenabrechnung Fehler: Die 10 häufigsten Fehler und wie man sie vermeidet | einfach verwaltet.",
  description:
    "Betriebskostenabrechnung Fehler 2026: Fristversäumnis, falsche Umlageschlüssel, nicht umlagefähige Kosten — die 10 häufigsten Abrechnungsfehler und wie Vermieter sie vermeiden.",
  keywords:
    "Betriebskostenabrechnung Fehler, Nebenkostenabrechnung Fehler, NKA Fehler, §556 BGB Abrechnung, Betriebskostenabrechnung prüfen",
  openGraph: {
    title: "Betriebskostenabrechnung Fehler: Die 10 häufigsten Fehler und wie man sie vermeidet",
    description:
      "Fristversäumnis, falsche Umlageschlüssel, nicht umlagefähige Kosten — 10 Fehler in der Betriebskostenabrechnung und wie Sie sie vermeiden.",
    url: "https://einfach-verwaltet.de/blog/betriebskostenabrechnung-fehler",
    siteName: "einfach verwaltet.",
    locale: "de_DE",
    type: "article",
  },
  alternates: {
    canonical: "https://einfach-verwaltet.de/blog/betriebskostenabrechnung-fehler",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Betriebskostenabrechnung Fehler: Die 10 häufigsten Fehler und wie man sie vermeidet",
  description:
    "Die häufigsten Fehler bei der Betriebskostenabrechnung und wie Vermieter und Hausverwaltungen sie vermeiden.",
  author: { "@type": "Organization", name: "einfach verwaltet." },
  publisher: {
    "@type": "Organization",
    name: "einfach verwaltet.",
    logo: { "@type": "ImageObject", url: "https://einfach-verwaltet.de/logo.png" },
  },
  datePublished: "2026-02-27",
  inLanguage: "de",
  url: "https://einfach-verwaltet.de/blog/betriebskostenabrechnung-fehler",
};

const errors = [
  {
    nr: 1,
    title: "Die 12-Monats-Abrechnungsfrist versäumen",
    problem:
      "Der Vermieter muss die Betriebskostenabrechnung spätestens 12 Monate nach Ende des Abrechnungszeitraums zustellen (§556 Abs. 3 BGB). Wer diese Frist verpasst, verliert seinen Anspruch auf Nachzahlungen — der Mieter muss dann nicht mehr zahlen.",
    loesung:
      "Kalenderreminder setzen: Abrechnung für Abrechnungsjahr 2025 muss bis 31. Dezember 2026 beim Mieter ankommen. Wichtig: Es gilt der Zugang beim Mieter, nicht der Versandtag.",
    schwere: "hoch",
  },
  {
    nr: 2,
    title: "Nicht umlagefähige Kosten abrechnen",
    problem:
      "Verwaltungskosten, Instandhaltungsrücklagen, Reparaturkosten und Kosten für Leerstand sind laut Betriebskostenverordnung (BetrKV) nicht umlagefähig. Viele Vermieter rechnen versehentlich Hausmeisterkosten zu hoch ab, wenn der Hausmeister auch Reparaturen übernimmt — diese müssen herausgerechnet werden.",
    loesung:
      "Checkliste der umlagefähigen Betriebskosten nach Anlage 1 BetrKV anlegen. Jede Position prüfen: Ist sie in der BetrKV gelistet? Ist sie im Mietvertrag vereinbart?",
    schwere: "hoch",
  },
  {
    nr: 3,
    title: "Falschen Umlageschlüssel verwenden",
    problem:
      "Der Umlageschlüssel muss dem Mietvertrag entsprechen. Oft ist Wohnfläche vereinbart, aber der Vermieter rechnet nach Personenzahl ab — oder umgekehrt. Das führt zur formellen Unwirksamkeit der Abrechnung.",
    loesung:
      "Mietvertrag genau prüfen: Welcher Umlageschlüssel ist für welche Kostenart vereinbart? Abweichungen sind nur einvernehmlich per Ergänzungsvereinbarung möglich.",
    schwere: "mittel",
  },
  {
    nr: 4,
    title: "Heizkosten nicht nach HeizkostenV aufteilen",
    problem:
      "Bei zentraler Heizanlage müssen die Heizkosten zwingend zu 50–70 % nach Verbrauch (Wärmemengenzähler) und zu 30–50 % nach Wohnfläche aufgeteilt werden (§7 HeizkostenV). Eine reine Flächenaufteilung ist unzulässig.",
    loesung:
      "Wärmemengenzähler installieren und ablesen lassen. Den verbrauchsabhängigen Anteil gemäß §7 HeizkostenV ermitteln. Fehler hier berechtigen den Mieter zu einem Abzug von 15 % (§12 HeizkostenV).",
    schwere: "hoch",
  },
  {
    nr: 5,
    title: "Abrechnungszeitraum weicht vom Mietvertrag ab",
    problem:
      "Der Abrechnungszeitraum darf maximal 12 Monate betragen und muss im Mietvertrag vereinbart sein. Viele Vermieter rechnen nach Kalenderjahr ab, der Mietvertrag sieht aber ein abweichendes Wirtschaftsjahr vor — oder umgekehrt.",
    loesung:
      "Abrechnungszeitraum konsequent aus dem Mietvertrag übernehmen. Bei Übernahme einer Immobilie den bestehenden Abrechnungszeitraum beibehalten oder einvernehmlich ändern.",
    schwere: "mittel",
  },
  {
    nr: 6,
    title: "Kosten auf leerstehende Wohnungen nicht korrekt behandeln",
    problem:
      "Bei Leerstand darf der Vermieter die auf die Leerwohnung entfallenden Kosten nicht auf andere Mieter umlegen. Er muss den Leeranteil selbst tragen. Vermieter, die dies vergessen, rechnen zu viel ab.",
    loesung:
      "Leerstandszeiten dokumentieren. Bei der Abrechnung den Anteil der Leerwohnung vom umlagefähigen Gesamtbetrag abziehen und vom Eigentümer tragen lassen.",
    schwere: "mittel",
  },
  {
    nr: 7,
    title: "Belege nicht aufbewahren oder Einsicht verweigern",
    problem:
      "Mieter haben das Recht, alle Belege zur Betriebskostenabrechnung einzusehen (BGH-Urteil VIII ZR 195/03). Verweigert der Vermieter die Belegeinsicht, kann der Mieter die Nachzahlung zurückhalten.",
    loesung:
      "Alle Rechnungen, Zählerstände und Abrechnungsgrundlagen mindestens 3 Jahre aufbewahren. Bei Belegeinsichtswunsch Termin anbieten oder Kopien gegen Kostenerstattung versenden.",
    schwere: "mittel",
  },
  {
    nr: 8,
    title: "Umsatzsteuer falsch behandeln",
    problem:
      "Vermieter, die umsatzsteuerpflichtig vermieten (z.B. Gewerberäume mit Option zur Steuerpflicht), müssen die Umsatzsteuer in der Betriebskostenabrechnung korrekt ausweisen. Bei steuerfreier Vermietung darf keine USt auf die Mieter umgelegt werden.",
    loesung:
      "Steuerberater konsultieren für Umsatzsteueroptierung. Im Standardfall (private Wohnungsvermietung) keine USt auf Betriebskosten aufschlagen.",
    schwere: "mittel",
  },
  {
    nr: 9,
    title: "Fehler bei Ein- und Auszug von Mietern",
    problem:
      "Zieht ein Mieter während des Abrechnungszeitraums ein oder aus, muss die Abrechnung dies anteilig berücksichtigen. Viele Vermieter vergessen die Zeitanteiligkeit oder rechnen für den gesamten Zeitraum ab.",
    loesung:
      "Einzugs- und Auszugsdatum exakt dokumentieren. Abrechnungssoftware oder Hausverwaltung nutzen, die Zeitanteiligkeit automatisch berechnet.",
    schwere: "niedrig",
  },
  {
    nr: 10,
    title: "Formelle Mindestanforderungen nicht erfüllen",
    problem:
      "Eine Betriebskostenabrechnung muss zwingend enthalten: Abrechnungszeitraum, Gesamtkosten je Position, Verteilungsschlüssel, Anteil des Mieters und Abzug der geleisteten Vorauszahlungen. Fehlt ein Pflichtbestandteil, ist die Abrechnung formell unwirksam.",
    loesung:
      "Standardvorlagen verwenden oder Hausverwaltungssoftware einsetzen, die alle Pflichtbestandteile automatisch enthält. Vor dem Versand Checkliste abarbeiten.",
    schwere: "hoch",
  },
];

export default function BetriebskostenabrechnungFehlerPage() {
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
            <span>Betriebskostenabrechnung Fehler</span>
          </nav>

          {/* Header */}
          <header className="mb-10">
            <div className="flex flex-wrap gap-2 mb-4">
              <span className="bg-teal/10 text-teal text-xs font-semibold px-3 py-1 rounded-full">Betriebskosten</span>
              <span className="bg-gray-100 text-gray-600 text-xs font-medium px-3 py-1 rounded-full">11 min Lesezeit</span>
              <span className="bg-gray-100 text-gray-600 text-xs font-medium px-3 py-1 rounded-full">Februar 2026</span>
            </div>
            <h1 className="text-3xl md:text-4xl font-bold text-navy leading-tight mb-4">
              Betriebskostenabrechnung Fehler: Die 10 häufigsten Fehler und wie man sie vermeidet
            </h1>
            <p className="text-lg text-text-light leading-relaxed">
              Fristversäumnis, falsche Umlageschlüssel, nicht umlagefähige Kosten — wir zeigen die 10 häufigsten Fehler bei der Betriebskostenabrechnung und wie Sie diese rechtssicher vermeiden.
            </p>
          </header>

          <div className="prose prose-navy max-w-none text-gray-700 leading-relaxed space-y-8">

            <section>
              <h2 className="text-2xl font-bold text-navy mb-4">Warum Fehler in der Betriebskostenabrechnung teuer werden</h2>
              <p>
                Die Betriebskostenabrechnung ist eine der fehleranfälligsten Aufgaben in der Hausverwaltung. Schätzungen zufolge enthält jede zweite Nebenkostenabrechnung in Deutschland Fehler — teils zu Ungunsten des Mieters, teils zu Ungunsten des Vermieters. Die Konsequenzen können erheblich sein: Verlust des Nachzahlungsanspruchs, Rückzahlungspflichten, Belegeinsichtsklagen oder schlicht schlechte Mieterbeziehungen.
              </p>
              <p>
                Gleichzeitig ist die Betriebskostenabrechnung gesetzlich streng geregelt (§556 BGB, Betriebskostenverordnung, HeizkostenV). Wer die Regeln kennt, macht keine Fehler. Die folgende Liste zeigt die zehn häufigsten Stolperfallen.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-navy mb-6">Die 10 häufigsten Fehler</h2>
              <div className="space-y-6">
                {errors.map((err) => (
                  <div key={err.nr} className={`rounded-xl border-2 p-6 ${
                    err.schwere === "hoch" ? "border-red-200 bg-red-50/50" :
                    err.schwere === "mittel" ? "border-amber-200 bg-amber-50/30" :
                    "border-gray-200 bg-white"
                  }`}>
                    <div className="flex items-start gap-4">
                      <span className={`w-8 h-8 rounded-full text-white text-sm font-bold flex items-center justify-center shrink-0 ${
                        err.schwere === "hoch" ? "bg-red-500" :
                        err.schwere === "mittel" ? "bg-amber-500" :
                        "bg-gray-400"
                      }`}>{err.nr}</span>
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-2">
                          <h3 className="font-bold text-navy">{err.title}</h3>
                          <span className={`text-xs px-2 py-0.5 rounded-full font-medium ${
                            err.schwere === "hoch" ? "bg-red-100 text-red-700" :
                            err.schwere === "mittel" ? "bg-amber-100 text-amber-700" :
                            "bg-gray-100 text-gray-600"
                          }`}>Risiko: {err.schwere}</span>
                        </div>
                        <p className="text-sm text-gray-700 mb-3"><strong>Das Problem:</strong> {err.problem}</p>
                        <div className="bg-white/80 rounded-lg p-3">
                          <p className="text-sm text-gray-700"><strong className="text-teal">✓ Lösung:</strong> {err.loesung}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-navy mb-4">Pflichtbestandteile einer gültigen Betriebskostenabrechnung</h2>
              <p>Eine formell gültige BKA muss nach ständiger BGH-Rechtsprechung mindestens enthalten:</p>
              <div className="bg-white rounded-xl border border-gray-200 p-5 mt-4">
                <ul className="space-y-2">
                  {[
                    "Abrechnungszeitraum (max. 12 Monate)",
                    "Vollständige Aufstellung der Gesamtkosten je Kostenposition",
                    "Angewandter Verteilungsschlüssel (z.B. Wohnfläche in m²) für jede Position",
                    "Anteil des Mieters an den Gesamtkosten",
                    "Abzug der geleisteten Vorauszahlungen",
                    "Saldo (Nachzahlung oder Guthaben)",
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm">
                      <span className="text-teal font-bold mt-0.5">✓</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </section>

            {/* Internal links */}
            <section className="bg-white rounded-xl border border-gray-200 p-6">
              <h2 className="text-xl font-bold text-navy mb-4">Weiterführende Ratgeber</h2>
              <ul className="space-y-2 text-sm">
                {[
                  { href: "/blog/nebenkostenabrechnung-fehler", label: "Nebenkostenabrechnung Fehler: Was Mieter wissen müssen" },
                  { href: "/blog/nebenkostenabrechnung-pruefen-checkliste", label: "Nebenkostenabrechnung prüfen: Checkliste für Mieter" },
                  { href: "/blog/betriebskosten-checkliste-vermieter", label: "Betriebskosten Checkliste für Vermieter" },
                  { href: "/bka-rechner", label: "BKA-Rechner: Betriebskosten online berechnen" },
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
              <h2 className="text-2xl font-bold mb-3">Betriebskostenabrechnung ohne Fehler</h2>
              <p className="text-white/80 mb-6 max-w-md mx-auto">
                einfach verwaltet. erstellt Ihre Betriebskostenabrechnung automatisch und rechtssicher — alle Fristen, alle Pflichtbestandteile, alle Umlageschlüssel korrekt.
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
