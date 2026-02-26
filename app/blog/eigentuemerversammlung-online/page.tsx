import type { Metadata } from "next";
import Link from "next/link";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

export const metadata: Metadata = {
  title: "Eigentümerversammlung online durchführen: Rechtslage 2026 | einfach verwaltet.",
  description:
    "Digitale Eigentümerversammlung 2026: §23 WEG, hybride vs. reine Online-ETV, technische Anforderungen & Abstimmung — der komplette Leitfaden.",
  keywords:
    "eigentümerversammlung online, digitale eigentümerversammlung, §23 WEG online etv",
  openGraph: {
    title: "Eigentümerversammlung online durchführen: Rechtslage 2026",
    description:
      "Hybride vs. rein digitale ETV, §23 WEG, technische Anforderungen, Abstimmungsquoren — alle Details.",
    url: "https://einfach-verwaltet.de/blog/eigentuemerversammlung-online",
    siteName: "einfach verwaltet.",
    locale: "de_DE",
    type: "article",
  },
};

const jsonLdArticle = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Eigentümerversammlung online durchführen: Rechtslage 2026",
  description:
    "Alles zur digitalen Eigentümerversammlung: §23 WEG, Hybride vs. reine Online-ETV, technische Anforderungen und Abstimmungsmodalitäten.",
  author: { "@type": "Organization", name: "einfach verwaltet." },
  publisher: {
    "@type": "Organization",
    name: "einfach verwaltet.",
    logo: { "@type": "ImageObject", url: "https://einfach-verwaltet.de/logo.png" },
  },
  datePublished: "2026-02-26",
  inLanguage: "de",
  url: "https://einfach-verwaltet.de/blog/eigentuemerversammlung-online",
};

const jsonLdFAQ = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Ist eine rein digitale Eigentümerversammlung nach §23 WEG möglich?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Ja, §23 Abs. 5 WEG seit der Reform 2020 sieht ausdrücklich die Möglichkeit vor, Eigentümerversammlungen „unter Ausschluss der persönlichen Anwesenheit“ durchzuführen, wenn die Teilnahme auf elektronischem Wege ermöglicht wird.",
      },
    },
    {
      "@type": "Question",
      name: "Welche technischen Anforderungen gelten für Online-ETVs?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Erforderlich sind sichere Authentifizierung der Teilnehmer, verlässliche Audio-Übertragung, Möglichkeit zur aktiven Teilnahme (Rede- und Antragsrecht), sowie eine protokollierte Stimmabgabe. Video-Übertragung wird empfohlen.",
      },
    },
    {
      "@type": "Question",
      name: "Können Beschlüsse bei rein digitalen ETVs angefochten werden?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Beschlüsse werden nicht allein deswegen anfechtbar, weil sie online gefasst wurden. Fehler bei der Einberufung, technische Probleme bei der Teilnahme oder Verstöße gegen Anforderungen der Teilgemeinschaftsordnung können jedoch Anfechtungsgründe sein.",
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
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdFAQ) }}
      />
      <Navbar />
      <main className="bg-warm-white min-h-screen pt-16">
        <article className="max-w-3xl mx-auto px-4 py-16">
          <nav className="text-sm text-gray-500 mb-8">
            <Link href="/" className="hover:text-teal">Startseite</Link>
            <span className="mx-2">›</span>
            <Link href="/blog" className="hover:text-teal">Ratgeber</Link>
            <span className="mx-2">›</span>
            <span className="text-gray-700">Eigentümerversammlung online</span>
          </nav>

          <header className="mb-10">
            <p className="text-teal text-sm font-semibold uppercase tracking-wider mb-3">
              Ratgeber · 8 min Lesezeit
            </p>
            <h1 className="text-3xl md:text-4xl font-bold text-navy font-playfair mb-4 leading-tight">
              Eigentümerversammlung online durchführen: Rechtslage 2026
            </h1>
            <p className="text-gray-500 text-sm">Februar 2026 · einfach verwaltet.</p>
          </header>

          <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed space-y-6">
            <p>
              Die digitale Eigentümerversammlung hat sich seit der WEG-Reform 2020 als dauerhaftes Instrument etabliert. Was während der Pandemie als Notlösung begann, bietet heute Effizienzvorteile: höhere Teilnahmequoten, geringere Kosten und mehr Flexibilität. Doch welche Rechtsgrundlagen gelten, und wie führt man eine Online-ETV technisch korrekt durch?
            </p>

            <h2 className="text-2xl font-bold text-navy font-playfair mt-10 mb-4">
              Die Rechtsgrundlage: §23 Abs. 5 WEG
            </h2>
            <p>
              Seit der WEG-Reform 2020 regelt §23 Abs. 5 WEG ausdrücklich die digitale Eigentümerversammlung. Die Norm erlaubt es, Versammlungen „unter Ausschluss der persönlichen Anwesenheit“ durchzuführen, sofern alle Eigentümer die Möglichkeit zur elektronischen Teilnahme erhalten.
            </p>
            <p className="bg-teal/10 border-l-4 border-teal p-4 rounded">
              <strong>Rechtswortlaut §23 Abs. 5 WEG:</strong> „Die Teilnehmer können sich auch ohne persönliche Anwesenheit untereinander sowie mit dem Verwalter verständigen, soweit die Teilgemeinschaftsordnung nichts anderes bestimmt."
            </p>

            <h2 className="text-2xl font-bold text-navy font-playfair mt-10 mb-4">
              Hybride vs. rein digitale ETV
            </h2>
            <p>
              Essenziell für die Planung ist die Entscheidung zwischen hybriden und rein digitalen Formaten:
            </p>
            <div className="bg-gray-50 p-6 rounded-lg my-4">
              <h3 className="font-bold text-navy mb-3">Hybride ETV</h3>
              <ul className="list-disc pl-6 space-y-1">
                <li>Einige Eigentümer vor Ort, andere online zugeschaltet</li>
                <li>Ermöglicht persönlichen Austausch bei gleichzeitiger Remote-Teilnahme</li>
                <li>Technisch aufwändiger (Raumtechnik + Streaming)</li>
                <li>Höhere Anforderungen an die Moderation</li>
              </ul>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg my-4">
              <h3 className="font-bold text-navy mb-3">Rein digitale ETV</h3>
              <ul className="list-disc pl-6 space-y-1">
                <li>Alle Teilnehmer sind remote zugeschaltet</li>
                <li>Kein physischer Versammlungsort notwendig</li>
                <li>Niedrigere Barrieren für Teilnahme (Zeit, Ort, Mobilität)</li>
                <li>Technisch einfacher umsetzbar</li>
              </ul>
            </div>

            <h2 className="text-2xl font-bold text-navy font-playfair mt-10 mb-4">
              Technische Anforderungen an die Plattform
            </h2>
            <p>
              Nach herrschender Meinung müssen Online-ETV-Plattformen folgende Mindeststandards erfüllen:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Sichere Authentifizierung:</strong> Eindeutige Identifikation aller Teilnehmer vor Versammlungsbeginn</li>
              <li><strong>Audio-Übertragung:</strong> Verlässliche, latenzarme Sprachübertragung in beide Richtungen</li>
              <li><strong>Rederecht:</strong> Möglichkeit für Teilnehmer, sich zu Wort zu melden und Beiträge zu leisten</li>
              <li><strong>Antragsrecht:</strong> Formale Möglichkeit zur Stellung von Anträgen während der Versammlung</li>
              <li><strong>Stimmabgabe:</strong> Protokollierte, verlässliche Abstimmungsmöglichkeit</li>
              <li><strong>Datenschutz:</strong> DSGVO-konforme Verarbeitung personenbezogener Daten</li>
            </ul>
            <p className="bg-amber-50 border-l-4 border-amber-400 p-4 rounded">
              <strong>Empfehlung:</strong> Video-Übertragung wird von Rechtsanwälten empfohlen, um das persönliche Element der Versammlung zu wahren und Anfechtungsrisiken zu minimieren.
            </p>

            <h2 className="text-2xl font-bold text-navy font-playfair mt-10 mb-4">
              Abstimmung und Beschlussfassung
            </h2>
            <p>
              Die Abstimmung in Online-ETVs unterliegt denselben Quoren wie Präsenzversammlungen:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Einfache Mehrheit:</strong> Mehr als 50% der abgegebenen Stimmen</li>
              <li><strong>Mehrheit der MEA:</strong> Mehr als 25% der Miteigentumsanteile (für Verwalterwahl, -abberufung)</li>
              <li><strong>3/4-Mehrheit der MEA:</strong> Für Sondernutzungsrechtsänderungen, Veränderungen am Gemeinschaftseigentum</li>
            </ul>
            <p>
              Die Stimmabgabe erfolgt bei Online-ETVs in der Regel über Chat-Funktion, Umfrage-Tool oder per Sprachbeitrag mit anschließender Bestätigung.
            </p>

            <h2 className="text-2xl font-bold text-navy font-playfair mt-10 mb-4">
              Einladung und Einberufung
            </h2>
            <p>
              Die Einberufung einer Online-ETV folgt denselben Fristen wie eine Präsenzversammlung:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Einladung mindestens 2 Wochen vor dem Termin</li>
              <li>Zusendung an alle Eigentümer an die letzte bekannte Anschrift (§23 Abs. 2 WEG)</li>
              <li>Bekanntgabe des technischen Zugangs (Link, Zugangsdaten) mit der Einladung</li>
              <li>Aufforderung, technische Voraussetzungen zu prüfen</li>
              <li>Angebot einer Testverbindung vor der eigentlichen ETV</li>
            </ul>

            <h2 className="text-2xl font-bold text-navy font-playfair mt-10 mb-4">
              Protokollführung und Nachweis
            </h2>
            <p>
              Das Protokoll einer Online-ETV muss dieselben Elemente enthalten wie bei Präsenzversammlungen:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Ort und Zeit der Versammlung (bei rein digital: Hinweis auf Online-Format)</li>
              <li>Teilnehmerliste mit MEA-Angaben</li>
              <li>Verlauf der Diskussion und Anträge</li>
              <li>Abstimmungsergebnisse mit Mehrheitsverhältnissen</li>
              <li>Dokumentation der technischen Durchführung (für Nachweise)</li>
            </ul>

            <h2 className="text-2xl font-bold text-navy font-playfair mt-10 mb-4">
              Fazit: Digital ist das neue Normal
            </h2>
            <p>
              Online-ETVs sind rechtlich fundiert, praktisch etabliert und bieten erhebliche Vorteile für Eigentümergemeinschaften. Wer bei der technischen Umsetzung auf Qualität setzt und die gesetzlichen Anforderungen beachtet, profitiert von höheren Teilnahmequoten und effizienteren Entscheidungsprozessen.
            </p>
          </div>

          <div className="mt-12 bg-teal/10 border border-teal/20 rounded-xl p-8">
            <h3 className="text-xl font-bold text-navy mb-2 font-playfair">
              Online-ETV professionell durchführen
            </h3>
            <p className="text-gray-600 mb-4">
              einfach verwaltet. bietet digitale ETV-Plattformen mit rechtssicherer Protokollierung, sicherer Authentifizierung und DSGVO-konformer Archivierung.
            </p>
            <Link
              href="/anfrage"
              className="inline-block bg-teal text-white font-semibold px-6 py-3 rounded-lg hover:bg-teal/90 transition-colors"
            >
              Digital-ETV anfragen
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
