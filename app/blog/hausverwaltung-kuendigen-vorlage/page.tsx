import type { Metadata } from "next";
import Link from "next/link";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

export const metadata: Metadata = {
  title: "Hausverwaltung kündigen: Muster & Vorlage für die fristgerechte Kündigung 2026 | einfach verwaltet.",
  description:
    "Hausverwaltung kündigen mit Muster und Vorlage: §621 BGB Kündigungsfristen, Kündigung von WEG-Verwaltern nach §26 WEG, copy-paste Vorlage und Schritt-für-Schritt-Anleitung.",
  keywords:
    "Hausverwaltung kündigen Vorlage, Hausverwaltung kündigen Muster, Verwaltervertrag kündigen, §621 BGB Kündigung, Hausverwaltung wechseln",
  openGraph: {
    title: "Hausverwaltung kündigen: Muster & Vorlage 2026",
    description:
      "§621 BGB und §26 WEG: Kündigungsfristen, korrekter Ablauf und copy-paste Kündigungsvorlage für Miet- und WEG-Hausverwaltungen.",
    url: "https://einfach-verwaltet.de/blog/hausverwaltung-kuendigen-vorlage",
    siteName: "einfach verwaltet.",
    locale: "de_DE",
    type: "article",
  },
  alternates: {
    canonical: "https://einfach-verwaltet.de/blog/hausverwaltung-kuendigen-vorlage",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Hausverwaltung kündigen: Muster & Vorlage für die fristgerechte Kündigung 2026",
  description:
    "Vollständiger Leitfaden zur Kündigung eines Hausverwaltungsvertrags — §621 BGB, §26 WEG, Muster und Vorlage.",
  author: { "@type": "Organization", name: "einfach verwaltet." },
  publisher: {
    "@type": "Organization",
    name: "einfach verwaltet.",
    logo: { "@type": "ImageObject", url: "https://einfach-verwaltet.de/logo.png" },
  },
  datePublished: "2026-02-27",
  inLanguage: "de",
  url: "https://einfach-verwaltet.de/blog/hausverwaltung-kuendigen-vorlage",
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Wie kündigt man einen Hausverwaltungsvertrag?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Ein Mietverwaltungsvertrag kann gemäß §621 BGB ohne Angabe von Gründen gekündigt werden — bei monatlicher Vergütung mit einer Frist von einem Monat zum Monatsende. Bei WEG-Verwaltern gilt §26 WEG: Abberufung durch Beschluss der Eigentümergemeinschaft. Die Kündigung muss schriftlich per Einschreiben erfolgen.",
      },
    },
    {
      "@type": "Question",
      name: "Welche Kündigungsfristen gelten für die Hausverwaltung?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Bei Mietverwaltungsverträgen gilt §621 BGB: bei monatlicher Vergütung 1 Monat zum Monatsende, bei vierteljährlicher Vergütung 6 Wochen zum Quartalsende. Vertraglich vereinbarte Fristen (oft 3 Monate zum Jahresende) gehen vor, solange sie nicht unangemessen lang sind.",
      },
    },
  ],
};

export default function HausverwaltungKuendigenVorlagePage() {
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
            <span>Hausverwaltung kündigen Vorlage</span>
          </nav>

          {/* Header */}
          <header className="mb-10">
            <div className="flex flex-wrap gap-2 mb-4">
              <span className="bg-teal/10 text-teal text-xs font-semibold px-3 py-1 rounded-full">Hausverwaltung wechseln</span>
              <span className="bg-gray-100 text-gray-600 text-xs font-medium px-3 py-1 rounded-full">9 min Lesezeit</span>
              <span className="bg-gray-100 text-gray-600 text-xs font-medium px-3 py-1 rounded-full">Februar 2026</span>
            </div>
            <h1 className="text-3xl md:text-4xl font-bold text-navy leading-tight mb-4">
              Hausverwaltung kündigen: Muster und Vorlage für die fristgerechte Kündigung
            </h1>
            <p className="text-lg text-text-light leading-relaxed">
              Sie möchten Ihre Hausverwaltung wechseln? Wir erklären die Kündigungsfristen nach §621 BGB und §26 WEG, den korrekten Ablauf — und stellen eine kostenlose Kündigungsvorlage zum direkten Verwenden bereit.
            </p>
          </header>

          <div className="prose prose-navy max-w-none text-gray-700 leading-relaxed space-y-8">

            <section>
              <h2 className="text-2xl font-bold text-navy mb-4">Mietverwaltung vs. WEG-Verwaltung: Unterschiedliche Rechtsgrundlagen</h2>
              <p>
                Ob Sie einen Mietverwaltungsvertrag oder einen WEG-Verwaltervertrag kündigen möchten, macht rechtlich einen großen Unterschied:
              </p>
              <div className="grid sm:grid-cols-2 gap-4 mt-4">
                <div className="bg-white rounded-xl border-2 border-teal/30 p-5">
                  <h3 className="font-bold text-navy mb-2">Mietverwaltungsvertrag</h3>
                  <p className="text-sm text-gray-600 mb-3">Für einzelne Mietobjekte (kein WEG)</p>
                  <ul className="space-y-1 text-sm text-gray-700">
                    <li>• Rechtsgrundlage: <strong>§621 BGB</strong></li>
                    <li>• Kündigung: jederzeit möglich</li>
                    <li>• Kein Grund erforderlich</li>
                    <li>• Frist: je nach Vertrag/Gesetz</li>
                  </ul>
                </div>
                <div className="bg-white rounded-xl border-2 border-navy/30 p-5">
                  <h3 className="font-bold text-navy mb-2">WEG-Verwaltervertrag</h3>
                  <p className="text-sm text-gray-600 mb-3">Bei Wohnungseigentümergemeinschaften</p>
                  <ul className="space-y-1 text-sm text-gray-700">
                    <li>• Rechtsgrundlage: <strong>§26 WEG</strong></li>
                    <li>• Abberufung durch Eigentümerbeschluss</li>
                    <li>• Einfache Mehrheit reicht seit WEG-Reform 2020</li>
                    <li>• Vertragsbeendigung folgt Abberufung</li>
                  </ul>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-navy mb-4">Kündigungsfristen nach §621 BGB (Mietverwaltung)</h2>
              <p>
                §621 BGB regelt die ordentliche Kündigung von Dienstverträgen mit periodischer Vergütung. Für Hausverwaltungsverträge gelten die dort genannten gesetzlichen Fristen — sofern der Vertrag keine günstigeren oder ungünstigeren Regelungen enthält:
              </p>
              <div className="bg-white rounded-xl border border-gray-200 overflow-hidden my-4">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="bg-navy text-white">
                      <th className="text-left px-4 py-3 font-semibold">Vergütungszeitraum</th>
                      <th className="text-left px-4 py-3 font-semibold">Kündigungsfrist</th>
                      <th className="text-left px-4 py-3 font-semibold">Zum</th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      ["Tagesweise", "Jederzeit", "Ende des folgenden Tages"],
                      ["Wochenweise", "3 Werktage", "Ende der Woche"],
                      ["Monatlich (üblich)", "1 Monat", "Monatsende"],
                      ["Quartalsmäßig", "6 Wochen", "Quartalsende"],
                    ].map(([zeitr, frist, zum]) => (
                      <tr key={zeitr} className="border-b border-gray-100 last:border-0">
                        <td className="px-4 py-3">{zeitr}</td>
                        <td className="px-4 py-3 font-semibold text-navy">{frist}</td>
                        <td className="px-4 py-3 text-gray-500">{zum}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <p>
                <strong>Wichtig:</strong> Die meisten Verwalterverträge enthalten abweichende (längere) Kündigungsfristen — z.B. 3 Monate zum Jahresende. Diese gehen den gesetzlichen Fristen vor, solange sie nicht unangemessen benachteiligend sind (§307 BGB).
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-navy mb-4">Außerordentliche Kündigung: Wann ist sie möglich?</h2>
              <p>
                Eine fristlose Kündigung aus wichtigem Grund ist nach §626 BGB jederzeit möglich, wenn die Fortsetzung des Vertrags bis zum nächsten ordentlichen Kündigungstermin unzumutbar ist. Wichtige Gründe für eine außerordentliche Kündigung der Hausverwaltung:
              </p>
              <ul className="space-y-2 mt-3">
                {[
                  "Schwerwiegende Pflichtverletzungen (z.B. Unterschlagung von Mietgeldern)",
                  "Dauerhafter Vertrauensverlust durch nachweisliche Misswirtschaft",
                  "Wiederholte Fristversäumnisse bei Nebenkostenabrechnungen",
                  "Nachweisliche Falschabrechnung oder Betrug",
                  "Insolvenz des Verwalters",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm">
                    <span className="text-teal mt-0.5">•</span>
                    {item}
                  </li>
                ))}
              </ul>
            </section>

            {/* VORLAGE */}
            <section>
              <h2 className="text-2xl font-bold text-navy mb-4">Kostenlose Kündigungsvorlage (Copy & Paste)</h2>
              <p className="mb-4 text-sm text-gray-600">
                Verwenden Sie diese Vorlage für die ordentliche Kündigung eines Mietverwaltungsvertrags. Bitte passen Sie die markierten Felder an Ihre individuelle Situation an und versenden Sie die Kündigung per Einschreiben mit Rückschein.
              </p>

              <div className="bg-gray-50 border-2 border-dashed border-gray-300 rounded-xl p-6 font-mono text-sm leading-relaxed text-gray-800 whitespace-pre-wrap">
{`[Ihr Name]
[Ihre Adresse]
[Ihre Stadt, Datum]

[Name der Hausverwaltung]
[Anschrift der Hausverwaltung]

Betreff: Kündigung des Verwaltervertrags für [Adresse der Immobilie]
        Vertragsnummer: [falls vorhanden]

Sehr geehrte Damen und Herren,

hiermit kündige ich den zwischen uns bestehenden Hausverwaltungsvertrag
vom [Datum des Vertragsabschlusses] für die oben genannte Immobilie
ordentlich und fristgerecht zum [frühestmöglichen Kündigungstermin gemäß Vertrag].

Bitte bestätigen Sie mir den Eingang dieser Kündigung sowie das Ende des
Vertragsverhältnisses schriftlich.

Für die Übergabe aller relevanten Unterlagen (Mietverträge, Betriebskosten-
unterlagen, Schlüssel, Kontoauszüge, Kautionsunterlagen) bitte ich Sie,
zeitnah einen Termin zu vereinbaren. Ich weise darauf hin, dass die Übergabe
sämtlicher Verwaltungsunterlagen und Eigentumsbelege unverzüglich nach
Vertragsende zu erfolgen hat.

Mit freundlichen Grüßen,

[Ihre Unterschrift]
[Ihr Name]
[Telefon / E-Mail für Rückfragen]`}
              </div>
              <p className="mt-3 text-xs text-gray-500">
                ⚠️ Diese Vorlage ist ein unverbindliches Muster. Bei komplexen Sachverhalten oder WEG-Verwaltungen empfehlen wir anwaltliche Beratung.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-navy mb-4">Schritt-für-Schritt: So läuft der Wechsel der Hausverwaltung ab</h2>
              <ol className="space-y-4">
                {[
                  {
                    title: "Verwaltervertrag prüfen",
                    desc: "Lesen Sie Ihren aktuellen Vertrag sorgfältig durch: Welche Kündigungsfristen sind vereinbart? Gibt es Sonderkündigungsrechte?",
                  },
                  {
                    title: "Frühestmöglichen Kündigungstermin berechnen",
                    desc: "Zählen Sie die Kündigungsfrist vom heutigen Tag zurück. Die häufigste Kombination: 3 Monate zum 31.12. → Kündigung muss bis 30. September zugehen.",
                  },
                  {
                    title: "Kündigung per Einschreiben versenden",
                    desc: "Schicken Sie die Kündigung per Einschreiben mit Rückschein. So haben Sie einen rechtsicheren Nachweis des Zugangs.",
                  },
                  {
                    title: "Neue Hausverwaltung suchen und beauftragen",
                    desc: "Holen Sie mindestens 3 Angebote ein. Prüfen Sie §34c GewO-Lizenz, Referenzen und Leistungsumfang. Tipp: einfach verwaltet. bietet transparente All-in-Preise ab €24/Einheit.",
                  },
                  {
                    title: "Übergabe der Verwaltungsunterlagen organisieren",
                    desc: "Der alte Verwalter ist verpflichtet, alle Unterlagen zu übergeben: Mietverträge, Kautionsnachweise, NKA-Unterlagen, Schlüssel, Handwerkerverträge, Kontoauszüge.",
                  },
                  {
                    title: "Mieter über den Verwalterwechsel informieren",
                    desc: "Nach Kündigung und Abschluss des neuen Vertrags informieren Sie Ihre Mieter schriftlich über den Wechsel und die neuen Kontaktdaten.",
                  },
                ].map((step, i) => (
                  <li key={i} className="flex gap-4">
                    <span className="w-7 h-7 rounded-full bg-teal text-white text-sm font-bold flex items-center justify-center shrink-0 mt-0.5">{i + 1}</span>
                    <div>
                      <span className="font-semibold text-navy">{step.title}: </span>
                      <span>{step.desc}</span>
                    </div>
                  </li>
                ))}
              </ol>
            </section>

            {/* FAQ */}
            <section className="bg-white rounded-2xl border border-gray-200 p-8">
              <h2 className="text-2xl font-bold text-navy mb-6">Häufige Fragen zur Kündigung der Hausverwaltung</h2>
              <div className="space-y-5">
                {[
                  {
                    q: "Muss ich einen Grund für die Kündigung angeben?",
                    a: "Bei einer ordentlichen Kündigung nach §621 BGB ist keine Begründung erforderlich. Sie können Ihre Hausverwaltung ohne Angabe von Gründen kündigen — sofern Sie die Fristen einhalten.",
                  },
                  {
                    q: "Was passiert, wenn die Hausverwaltung die Unterlagen nicht herausgibt?",
                    a: "Die Herausgabe aller Verwaltungsunterlagen ist eine gesetzliche Pflicht. Bei Verweigerung können Sie gerichtliche Hilfe in Anspruch nehmen und auch Schadensersatz fordern. Im Extremfall hilft eine einstweilige Verfügung.",
                  },
                  {
                    q: "Kann ich die WEG-Hausverwaltung als Einzeleigentümer kündigen?",
                    a: "Nein. Bei einer WEG-Verwaltung (§26 WEG) muss die gesamte Eigentümergemeinschaft per Beschluss abstimmen. Seit der WEG-Reform 2020 reicht einfache Mehrheit. Als Einzeleigentümer können Sie jedoch die Abberufung auf die Tagesordnung der nächsten Eigentümerversammlung setzen.",
                  },
                  {
                    q: "Wie lange vor dem Wechsel sollte ich mit der Suche beginnen?",
                    a: "Mindestens 6 Monate vor dem geplanten Wechseltermin. So haben Sie Zeit für Angebote, Vertragsverhandlungen und einen reibungslosen Onboarding-Prozess.",
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
                  { href: "/blog/hausverwaltung-wechseln-checkliste", label: "Hausverwaltung wechseln: Die ultimative Checkliste" },
                  { href: "/blog/verwaltervertrag-hausverwaltung", label: "Verwaltervertrag: Was muss drin stehen?" },
                  { href: "/blog/verwaltervertrag-kuendigen", label: "Verwaltervertrag kündigen: Fristen und Ablauf" },
                  { href: "/wechseln", label: "Wechsel-Guide: So wechseln Sie zu einfach verwaltet." },
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
              <h2 className="text-2xl font-bold mb-3">Bereit für eine bessere Hausverwaltung?</h2>
              <p className="text-white/80 mb-6 max-w-md mx-auto">
                Kündigen Sie Ihre alte Hausverwaltung und wechseln Sie zu einfach verwaltet. — transparente Preise, digitale Abwicklung, keine versteckten Gebühren.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <Link
                  href="/anfrage"
                  className="inline-flex items-center gap-2 bg-teal text-white px-8 py-4 rounded-xl font-semibold text-base hover:bg-teal/90 transition-all hover:shadow-lg"
                >
                  Jetzt Angebot anfragen →
                </Link>
                <Link
                  href="/wechseln"
                  className="inline-flex items-center gap-2 bg-white/10 border border-white/30 text-white px-8 py-4 rounded-xl font-semibold text-base hover:bg-white/20 transition-all"
                >
                  Wechsel-Guide lesen
                </Link>
              </div>
              <p className="text-white/50 text-xs mt-4">Kostenlos & unverbindlich · Antwort am selben Tag</p>
            </section>
          </div>
        </article>
      </main>
      <Footer />
    </>
  );
}
