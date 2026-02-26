import type { Metadata } from "next";
import Link from "next/link";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

export const metadata: Metadata = {
  title: "Vermieter Pflichten Heizung: Mindesttemperaturen und Heizperiode 2026",
  description:
    "Vermieter Pflichten Heizung: 20°C tagsüber, 18°C nachts, Heizperiode 1. Oktober bis 30. April. Strafen und Mietminderungsrisiken bei Verstoß.",
  keywords:
    "Vermieter Pflichten Heizung, Mindesttemperatur Wohnung, Heizperiode, Heizsaison Vermieter, Heizpflicht Vermieter",
  openGraph: {
    title: "Vermieter Pflichten Heizung: Mindesttemperaturen und Heizperiode",
    description:
      "Was Vermieter bei der Heizpflicht wissen müssen: Mindesttemperaturen, Heizperiode, Rechtsfolgen bei Verstoß und Mietminderungsrisiko.",
    url: "https://einfach-verwaltet.de/blog/vermieter-pflichten-heizung",
    siteName: "einfach verwaltet.",
    locale: "de_DE",
    type: "article",
  },
};

const jsonLdArticle = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Vermieter Pflichten Heizung: Mindesttemperaturen und Heizperiode",
  description:
    "Was Vermieter bei der Heizpflicht wissen müssen: Mindesttemperaturen, Heizperiode, Rechtsfolgen bei Verstoß und Mietminderungsrisiko.",
  author: {
    "@type": "Person",
    name: "Lukas Schmitz",
    jobTitle: "Gründer",
    worksFor: { "@type": "Organization", name: "einfach verwaltet." },
  },
  publisher: {
    "@type": "Organization",
    name: "einfach verwaltet.",
    logo: { "@type": "ImageObject", url: "https://einfach-verwaltet.de/logo.png" },
  },
  datePublished: "2026-02-26",
  inLanguage: "de",
  url: "https://einfach-verwaltet.de/blog/vermieter-pflichten-heizung",
};

const jsonLdFaq = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Welche Mindesttemperatur muss ein Vermieter in der Wohnung gewährleisten?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Vermieter müssen tagsüber (06:00–23:00 Uhr) mindestens 20°C in Wohnräumen und 18°C in Schlafzimmern und Nebenräumen gewährleisten. Nachts (23:00–06:00 Uhr) gilt eine Mindesttemperatur von 18°C.",
      },
    },
    {
      "@type": "Question",
      name: "Wann ist die gesetzliche Heizperiode?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Die gesetzliche Heizperiode läuft vom 1. Oktober bis zum 30. April. In dieser Zeit muss der Vermieter die Heizungsanlage betriebsbereit halten und die Mindesttemperaturen gewährleisten.",
      },
    },
    {
      "@type": "Question",
      name: "Was passiert, wenn der Vermieter die Heizpflicht verletzt?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Bei Verletzung der Heizpflicht haben Mieter das Recht zur Mietminderung nach §536 BGB. Bei kurzfristigem Heizungsausfall sind 10-20% Minderung üblich, bei längerem Ausfall in der Heizperiode auch bis zu 50%.",
      },
    },
    {
      "@type": "Question",
      name: "Darf der Vermieter die Heizung nachts oder im Sommer abstellen?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Nachts darf die Temperatur auf 18°C abgesenkt werden, aber nicht darunter. Außerhalb der Heizperiode (Mai bis September) besteht bei normalen Witterungsverhältnissen keine Heizpflicht — bei außergewöhnlicher Kälte schon.",
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
            <span className="text-gray-700">Vermieter Pflichten Heizung</span>
          </nav>

          <header className="mb-10">
            <p className="text-teal text-sm font-semibold uppercase tracking-wider mb-3">
              Ratgeber · 8 min Lesezeit · Vermieter
            </p>
            <h1 className="text-3xl md:text-4xl font-bold text-navy font-playfair mb-4 leading-tight">
              Vermieter Pflichten Heizung: Mindesttemperaturen und Heizperiode
            </h1>
            <p className="text-gray-500 text-sm">
              Februar 2026 · Lukas Schmitz, Gründer einfach verwaltet.
            </p>
          </header>

          {/* Quick Answer Box */}
          <div className="bg-teal/5 border-l-4 border-teal rounded-r-xl p-6 mb-10">
            <p className="font-semibold text-navy mb-2">Kurzantwort</p>
            <p className="text-gray-700">
              Vermieter müssen in der Heizperiode (1. Oktober bis 30. April) Wohnräume auf
              mindestens 20°C (tagsüber) und 18°C (nachts) beheizen. Bei Verstoß droht
              Mietminderung von 10–50%. Die Heizungsanlage muss jederzeit betriebsbereit sein.
            </p>
          </div>

          <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed space-y-6">
            <p>
              Eine funktionierende Heizung ist keine Selbstverständlichkeit — sie ist eine
              gesetzliche Pflicht des Vermieters. Wer die Mindesttemperaturen nicht einhält
              oder die Heizungsanlage vernachlässigt, riskiert Mietminderungen und rechtliche
              Auseinandersetzungen. Dieser Leitfaden erklärt alle Pflichten im Detail.
            </p>

            <h2 className="text-2xl font-bold text-navy font-playfair mt-10 mb-4">
              Rechtsgrundlage: §535 BGB und die Heizpflicht
            </h2>
            <p>
              Die Heizpflicht ergibt sich aus <strong>§535 Abs. 1 BGB</strong>: Der Vermieter
              muss dem Mieter den vertragsgemäßen Gebrauch der Mietsache gewähren und sie in
              diesem Zustand erhalten. Eine bewohnbare Wohnung setzt eine funktionierende
              Heizung voraus.
            </p>
            <p>
              Konkrete Temperaturvorgaben kommen aus der Rechtsprechung und sind bundesweit
              etabliert — auch wenn es kein einheitliches Bundesgesetz mit exakten Gradzahlen gibt.
            </p>

            <h2 className="text-2xl font-bold text-navy font-playfair mt-10 mb-4">
              Mindesttemperaturen im Überblick
            </h2>

            <div className="bg-white border border-gray-200 rounded-xl overflow-hidden my-6">
              <table className="w-full text-sm">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-4 py-3 text-left font-semibold text-navy">Raumtyp</th>
                    <th className="px-4 py-3 text-left font-semibold text-navy">Tagsüber (06–23 Uhr)</th>
                    <th className="px-4 py-3 text-left font-semibold text-navy">Nachts (23–06 Uhr)</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  <tr>
                    <td className="px-4 py-3 font-medium">Wohnzimmer, Küche</td>
                    <td className="px-4 py-3 font-semibold text-teal">20°C</td>
                    <td className="px-4 py-3 font-semibold text-teal">18°C</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 font-medium">Schlafzimmer</td>
                    <td className="px-4 py-3 font-semibold text-teal">18°C</td>
                    <td className="px-4 py-3 font-semibold text-teal">16°C</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 font-medium">Badezimmer</td>
                    <td className="px-4 py-3 font-semibold text-teal">21°C</td>
                    <td className="px-4 py-3 font-semibold text-teal">18°C</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 font-medium">Treppenhaus, Flure</td>
                    <td className="px-4 py-3 font-semibold text-teal">15°C</td>
                    <td className="px-4 py-3 font-semibold text-teal">15°C</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="bg-amber-50 border border-amber-200 rounded-xl p-4 my-4 text-sm">
              <strong>Hinweis:</strong> Diese Temperaturen sind Richtwerte aus der Rechtsprechung
              (u.a. BGH). Im Mietvertrag können höhere, aber keine niedrigeren Temperaturen
              vereinbart werden. Temperaturmessungen sind immer in der Raummitte in 1 m Höhe
              vorzunehmen.
            </div>

            <h2 className="text-2xl font-bold text-navy font-playfair mt-10 mb-4">
              Die Heizperiode: 1. Oktober bis 30. April
            </h2>
            <p>
              Die offizielle Heizperiode — auch Heizsaison genannt — läuft in Deutschland
              üblicherweise vom <strong>1. Oktober bis zum 30. April</strong>. In dieser Zeit
              muss der Vermieter:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Die Heizungsanlage betriebsbereit halten</li>
              <li>Die gesetzlichen Mindesttemperaturen gewährleisten</li>
              <li>Störungen zeitnah beseitigen</li>
              <li>Bei Ausfall einen Notdienst beauftragen</li>
            </ul>

            <div className="bg-teal/5 border-l-4 border-teal rounded-r-xl p-5 my-6">
              <p className="font-semibold text-navy mb-2">Außerhalb der Heizperiode</p>
              <p className="text-sm text-gray-700">
                Von Mai bis September besteht grundsätzlich keine Heizpflicht. Ausnahme:
                Sinkt die Außentemperatur auch im Sommer über mehrere Tage unter 12°C,
                müssen Vermieter die Heizung in Betrieb nehmen. Die Bewohnbarkeit der
                Wohnung steht immer im Vordergrund.
              </p>
            </div>

            <h2 className="text-2xl font-bold text-navy font-playfair mt-10 mb-4">
              Was Vermieter konkret sicherstellen müssen
            </h2>
            <p>Diese Pflichten hat der Vermieter in der Heizperiode:</p>

            <div className="bg-white border border-gray-200 rounded-xl p-6 my-6">
              <ul className="space-y-3 not-prose">
                {[
                  "Jährliche Wartung der Heizungsanlage vor Heizsaisonbeginn (September)",
                  "Notdienst-Nummer für Heizungsausfälle bereithalten und dem Mieter mitteilen",
                  "Ölvorrat / Gasvertrag rechtzeitig sichern",
                  "Heizkörper und Thermostate auf Funktion prüfen",
                  "Heizkostenverteiler ablesen lassen (§4 HeizkV)",
                  "Bei Ausfall: Sofortige Reaktion und Interim-Lösung (z.B. Elektroheizungen stellen)",
                  "Dokumentation aller Wartungsmaßnahmen und Reparaturen",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm">
                    <svg className="w-5 h-5 text-teal flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <h2 className="text-2xl font-bold text-navy font-playfair mt-10 mb-4">
              Folgen bei Verstoß: Mietminderung und Schadensersatz
            </h2>
            <p>
              Verletzt der Vermieter seine Heizpflicht, entstehen erhebliche Risiken:
            </p>

            <h3 className="text-xl font-semibold text-navy mt-6 mb-2">
              Mietminderung nach §536 BGB
            </h3>
            <p>
              Mieter können bei Unterschreitung der Mindesttemperaturen sofort die Miete
              mindern — ohne gesonderte Abmahnung, wenn die Temperatur messbar zu niedrig ist:
            </p>
            <div className="bg-white border border-gray-200 rounded-xl overflow-hidden my-4">
              <table className="w-full text-sm">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-4 py-3 text-left font-semibold text-navy">Situation</th>
                    <th className="px-4 py-3 text-left font-semibold text-navy">Mietminderung</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  <tr>
                    <td className="px-4 py-3">Heizung 1–3 Tage ausgefallen</td>
                    <td className="px-4 py-3 font-semibold text-teal">10–15%</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3">Heizung 4–7 Tage ausgefallen</td>
                    <td className="px-4 py-3 font-semibold text-teal">20–30%</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3">Heizung &gt;1 Woche ausgefallen</td>
                    <td className="px-4 py-3 font-semibold text-teal">30–50%</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3">Dauerhaft zu kalte Wohnung (unter 18°C)</td>
                    <td className="px-4 py-3 font-semibold text-teal">20–40%</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3">Wohnung unbewohnbar kalt</td>
                    <td className="px-4 py-3 font-semibold text-teal">bis 100%</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h3 className="text-xl font-semibold text-navy mt-6 mb-2">
              Schadensersatz
            </h3>
            <p>
              Über die Mietminderung hinaus können Mieter bei Gesundheitsschäden durch Kälte
              oder Schimmelbildung infolge unzureichender Heizung Schadensersatz nach
              <strong> §280 BGB</strong> fordern. Das schließt Arztkosten, Hotelkosten bei
              vorübergehender Unbewohnbarkeit und Sachschäden ein.
            </p>

            <h2 className="text-2xl font-bold text-navy font-playfair mt-10 mb-4">
              Tipps für Vermieter: Heizungsausfall vermeiden
            </h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>Wartungsvertrag mit qualifiziertem Heizungsbauer abschließen</li>
              <li>Jährliche Heizungswartung im September durchführen lassen</li>
              <li>Notdienstnummer an alle Mieter kommunizieren</li>
              <li>Temperaturen in Gemeinschaftsbereichen regelmäßig prüfen</li>
              <li>Mieter zur sofortigen Meldung von Heizungsproblemen auffordern</li>
              <li>Dokumentation aller Meldungen und Reaktionszeiten führen</li>
            </ul>

            {/* FAQ Section */}
            <h2 className="text-2xl font-bold text-navy font-playfair mt-10 mb-4">
              Häufig gestellte Fragen
            </h2>

            <div className="space-y-6 not-prose">
              <div className="bg-white border border-gray-200 rounded-xl p-5">
                <h3 className="font-semibold text-navy mb-2">Welche Mindesttemperatur muss ein Vermieter in der Wohnung gewährleisten?</h3>
                <p className="text-gray-600 text-sm">
                  Vermieter müssen tagsüber (06:00–23:00 Uhr) mindestens 20°C in Wohnräumen und 18°C in Schlafzimmern und Nebenräumen gewährleisten. Nachts (23:00–06:00 Uhr) gilt eine Mindesttemperatur von 18°C.
                </p>
              </div>

              <div className="bg-white border border-gray-200 rounded-xl p-5">
                <h3 className="font-semibold text-navy mb-2">Wann ist die gesetzliche Heizperiode?</h3>
                <p className="text-gray-600 text-sm">
                  Die gesetzliche Heizperiode läuft vom 1. Oktober bis zum 30. April. In dieser Zeit muss der Vermieter die Heizungsanlage betriebsbereit halten und die Mindesttemperaturen gewährleisten.
                </p>
              </div>

              <div className="bg-white border border-gray-200 rounded-xl p-5">
                <h3 className="font-semibold text-navy mb-2">Was passiert, wenn der Vermieter die Heizpflicht verletzt?</h3>
                <p className="text-gray-600 text-sm">
                  Bei Verletzung der Heizpflicht haben Mieter das Recht zur Mietminderung nach §536 BGB. Bei kurzfristigem Heizungsausfall sind 10-20% Minderung üblich, bei längerem Ausfall in der Heizperiode auch bis zu 50%.
                </p>
              </div>

              <div className="bg-white border border-gray-200 rounded-xl p-5">
                <h3 className="font-semibold text-navy mb-2">Darf der Vermieter die Heizung nachts oder im Sommer abstellen?</h3>
                <p className="text-gray-600 text-sm">
                  Nachts darf die Temperatur auf 18°C abgesenkt werden, aber nicht darunter. Außerhalb der Heizperiode (Mai bis September) besteht bei normalen Witterungsverhältnissen keine Heizpflicht — bei außergewöhnlicher Kälte schon.
                </p>
              </div>

              <div className="bg-white border border-gray-200 rounded-xl p-5">
                <h3 className="font-semibold text-navy mb-2">Muss der Vermieter bei Heizungsausfall eine Ersatzheizung stellen?</h3>
                <p className="text-gray-600 text-sm">
                  Bei längerem Heizungsausfall (ab 2-3 Tagen) müssen Vermieter dem Mieter eine Ersatzheizung zur Verfügung stellen, um die Mindesttemperaturen zu gewährleisten. Andernfalls steigt das Mietminderungsrisiko erheblich.
                </p>
              </div>
            </div>

            <h2 className="text-2xl font-bold text-navy font-playfair mt-10 mb-4">
              Fazit: Heizpflicht ist keine Ermessenssache
            </h2>
            <p>
              Die Heizpflicht des Vermieters ist klar geregelt und rechtlich bindend.
              Wer die Mindesttemperaturen nicht einhält oder Ausfälle nicht zeitnah behebt,
              riskiert erhebliche Mietminderungen und im Extremfall Schadensersatzforderungen.
              Regelmäßige Wartung, klare Kommunikation mit Mietern und schnelle Reaktion bei
              Störungen sind die beste Prävention.
            </p>
          </div>

          <div className="mt-12 bg-teal/10 border border-teal/20 rounded-xl p-8">
            <h3 className="text-xl font-bold text-navy mb-2 font-playfair">
              Lassen Sie einfach verwaltet.
            </h3>
            <p className="text-gray-600 mb-4">
              Ihre Immobilie professionell verwalten. Wartungsmanagement, schnelle Störungsreaktion
              und zufriedene Mieter — ohne Stress für Sie als Eigentümer.
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
