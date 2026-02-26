import type { Metadata } from "next";
import Link from "next/link";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

export const metadata: Metadata = {
  title: "WEG Hamburg: Was Wohnungseigentümer über die Verwaltung wissen müssen (2026)",
  description:
    "WEG-Verwaltung in Hamburg erklärt: §26 WEG Verwalterbestellung, Eigentümerversammlung, Jahresabrechnung, Rücklagen und wie Sie den richtigen WEG-Verwalter wählen.",
  keywords:
    "WEG Hamburg, WEG Verwaltung Hamburg, Wohnungseigentümer Hamburg, §26 WEG, Eigentümerversammlung Hamburg",
  openGraph: {
    title: "WEG Hamburg: Was Wohnungseigentümer über die Verwaltung wissen müssen",
    description:
      "Alles über WEG-Verwaltung in Hamburg: Rechte, Pflichten, Kosten und wie Sie den besten Verwalter für Ihre Eigentümergemeinschaft finden.",
    url: "https://einfach-verwaltet.de/blog/weg-hamburg",
    siteName: "einfach verwaltet.",
    locale: "de_DE",
    type: "article",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "WEG Hamburg: Was Wohnungseigentümer über die Verwaltung wissen müssen",
  description:
    "Der komplette Leitfaden für Wohnungseigentümer in Hamburg: WEG-Grundlagen, Verwalterwahl, Eigentümerversammlung und Finanzplanung.",
  author: { "@type": "Organization", name: "einfach verwaltet." },
  publisher: {
    "@type": "Organization",
    name: "einfach verwaltet.",
    logo: { "@type": "ImageObject", url: "https://einfach-verwaltet.de/logo.png" },
  },
  datePublished: "2026-02-26",
  inLanguage: "de",
  url: "https://einfach-verwaltet.de/blog/weg-hamburg",
};

export default function Post() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Navbar />
      <main className="bg-warm-white min-h-screen pt-16">
        <article className="max-w-3xl mx-auto px-4 py-16">
          <nav className="text-sm text-gray-500 mb-8">
            <Link href="/" className="hover:text-teal">Startseite</Link>
            <span className="mx-2">›</span>
            <Link href="/blog" className="hover:text-teal">Ratgeber</Link>
            <span className="mx-2">›</span>
            <span className="text-gray-700">WEG Hamburg</span>
          </nav>

          <header className="mb-10">
            <p className="text-teal text-sm font-semibold uppercase tracking-wider mb-3">
              Ratgeber · 10 min Lesezeit · WEG
            </p>
            <h1 className="text-3xl md:text-4xl font-bold text-navy font-playfair mb-4 leading-tight">
              WEG Hamburg: Was Wohnungseigentümer über die Verwaltung wissen müssen
            </h1>
            <p className="text-gray-500 text-sm">Februar 2026 · einfach verwaltet.</p>
          </header>

          <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed space-y-6">
            <p>
              Als Wohnungseigentümer in Hamburg sind Sie Teil einer Wohnungseigentümergemeinschaft (WEG). 
              Doch was bedeutet das konkret? Wer entscheidet über Sanierungen? Wie wird der Verwalter bestellt? 
              Und was kostet eine professionelle WEG-Verwaltung in Hamburg? Dieser Leitfaden gibt Ihnen alle 
              Antworten, die Sie als Eigentümer brauchen.
            </p>

            <h2 className="text-2xl font-bold text-navy font-playfair mt-10 mb-4">
              Was ist eine WEG und wie funktioniert sie?
            </h2>
            <p>
              Das <strong>Wohnungseigentumsgesetz (WEG)</strong> regelt das Zusammenleben mehrerer Eigentümer 
              in einem Gebäude. Jedes Stockwerkwerk oder jede Wohnung kann Sondereigentum sein — während 
              Treppenhaus, Dach, Keller und Außenanlagen <strong>gemeinschaftliches Eigentum</strong> bleiben. 
              Diese Gemeinschaft muss verwaltet werden, damit alles reibungslos läuft.
            </p>
            <p>
              Die WEG hat eigene Organe: die <strong>Eigentümerversammlung</strong> als oberstes Gremium, 
              den <strong>WEG-Verwalter</strong> als geschäftsführendes Organ und optional einen 
              <strong>Verwaltungsbeirat</strong> zur Kontrolle des Verwalters. Jeder Eigentümer hat Stimmrecht 
              — meist entsprechend dem Miteigentumsanteil.
            </p>

            <div className="bg-teal/5 border-l-4 border-teal rounded-r-xl p-5 my-6">
              <p className="font-semibold text-navy mb-2">Wichtiger Unterschied</p>
              <p className="text-sm">
                Die WEG-Verwaltung kümmert sich um das <strong>gemeinschaftliche Eigentum</strong> (Dach, Fassade, Treppenhaus). 
                Für Ihre eigene Wohnung brauchen Sie eine separate <Link href="/blog/weg-vs-mietverwaltung" className="text-teal hover:underline">Mietverwaltung</Link>, 
                wenn Sie vermieten. Viele Eigentümer benötigen beides.
              </p>
            </div>

            <h2 className="text-2xl font-bold text-navy font-playfair mt-10 mb-4">
              § 26 WEG: Verwalterbestellung und Abberufung
            </h2>
            <p>
              Die Bestellung des WEG-Verwalters erfolgt durch die Eigentümerversammlung. Der Verwalter 
              benötigt grundsätzlich eine <strong>§ 34c GewO-Erlaubnis</strong> — ein wichtiges Qualitätskriterium 
              bei der Auswahl. Bei einfach verwaltet. erfüllen alle Verwalter diese Voraussetzung.
            </p>

            <h3 className="text-xl font-semibold text-navy mt-6 mb-2">
              Wesentliche Regelungen nach § 26 WEG:
            </h3>
            <ul className="list-disc pl-6 space-y-2">
              <li>
                <strong>Bestellung:</strong> Durch Beschluss der Eigentümerversammlung mit einfacher Mehrheit
              </li>
              <li>
                <strong>Bestellungsdauer:</strong> Maximal 5 Jahre (§ 26 Abs. 2 WEG), anschließend neue Bestellung erforderlich
              </li>
              <li>
                <strong>Abberufung:</strong> Jederzeit mit einfacher Mehrheit möglich (§ 26 Abs. 3 WEG), Vertrag endet spätestens nach 6 Monaten
              </li>
              <li>
                <strong>Vergütung:</strong> Muss angemessen sein und im Verwaltervertrag festgelegt werden
              </li>
            </ul>

            <div className="bg-amber-50 border border-amber-200 rounded-xl p-4 my-4 text-sm">
              <strong>💡 Praxistipp:</strong> Die Abberufung wurde durch die WEG-Reform 2020 erleichtert. 
              Sie brauchen keinen wichtigen Grund mehr — eine einfache Mehrheit genügt. Das stärkt die 
              Position der Eigentümer gegenüber dem Verwalter erheblich.
            </div>

            <h2 className="text-2xl font-bold text-navy font-playfair mt-10 mb-4">
              Eigentümerversammlung: Das oberste Organ der WEG
            </h2>
            <p>
              Die Eigentümerversammlung trifft alle wesentlichen Entscheidungen: Von der Verwalterwahl 
              über Instandhaltungsmaßnahmen bis zur Höhe der Hausgeldrücklage. Wer hier nicht teilnimmt, 
              lässt wichtige Entscheidungen anderen.
            </p>

            <h3 className="text-xl font-semibold text-navy mt-6 mb-2">
              Rechtliche Grundlagen (§ 24 WEG):
            </h3>
            <ul className="list-disc pl-6 space-y-2">
              <li>
                <strong>Mindestens einmal jährlich</strong> stattzufinden (meist im ersten Quartal)
              </li>
              <li>
                <strong>Einladung:</strong> Mindestens 2 Wochen vorher schriftlich oder per E-Mail
              </li>
              <li>
                <strong>Tagesordnung:</strong> Muss in der Einladung enthalten sein
              </li>
              <li>
                <strong>Außerordentliche Versammlung:</strong> Kann von 25% der Eigentümer verlangt werden
              </li>
            </ul>

            <h3 className="text-xl font-semibold text-navy mt-6 mb-2">
              Ihre Rechte als Wohnungseigentümer:
            </h3>
            <div className="grid md:grid-cols-2 gap-4 my-6 not-prose">
              {[
                { title: "Stimmrecht", text: "Abstimmung über alle Beschlüsse entsprechend Ihrem Miteigentumsanteil" },
                { title: "Akteneinsicht", text: "Recht auf Einsicht in alle Verwaltungsunterlagen" },
                { title: "Beschlussanfechtung", text: "Rechtswidrige Beschlüsse innerhalb von 1 Monat anfechten (§ 46 WEG)" },
                { title: "Widerspruch", text: "Gegen fehlerhafte Abrechnungen Widerspruch einlegen" },
              ].map((item) => (
                <div key={item.title} className="bg-white border border-gray-100 rounded-xl p-4">
                  <div className="font-semibold text-navy mb-1">{item.title}</div>
                  <p className="text-sm text-gray-600">{item.text}</p>
                </div>
              ))}
            </div>

            <h2 className="text-2xl font-bold text-navy font-playfair mt-10 mb-4">
              Jahresabrechnung und Wirtschaftsplan
            </h2>
            <p>
              Jedes Jahr erhalten Wohnungseigentümer zwei wichtige Dokumente vom Verwalter: 
              den <strong>Wirtschaftsplan</strong> für das kommende Jahr und die <strong>Jahresabrechnung</strong> 
              für das vergangene Jahr. Beide sind Pflicht — und beide sollten Sie genau prüfen.
            </p>

            <h3 className="text-xl font-semibold text-navy mt-6 mb-2">
              Wirtschaftsplan (§ 28 Abs. 1 WEG)
            </h3>
            <p>
              Der Wirtschaftsplan ist eine Prognose der Einnahmen und Ausgaben für das nächste Jahr. 
              Er bildet die Grundlage für Ihre <strong>Hausgeldvorauszahlungen</strong>. Prüfen Sie hier 
              besonders geplante Instandhaltungsmaßnahmen und die Höhe der Rücklage.
            </p>

            <h3 className="text-xl font-semibold text-navy mt-6 mb-2">
              Jahresabrechnung (§ 28 Abs. 2 WEG)
            </h3>
            <p>
              Die Jahresabrechnung zeigt die tatsächlichen Einnahmen und Ausgaben. Sie enthält:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Gesamtabrechnung der WEG mit allen Positionen</li>
              <li>Einzelabrechnung für Ihre Wohnung (Ihr Anteil)</li>
              <li>Abrechnung der Instandhaltungsrücklage</li>
              <li>Eventuelle Nachzahlungen oder Rückzahlungen</li>
            </ul>

            <div className="bg-amber-50 border border-amber-200 rounded-xl p-4 my-4 text-sm">
              <strong>⚠️ Häufiges Problem:</strong> Viele Verwalter liefern die Jahresabrechnung verspätet 
              oder mit Fehlern. Obwohl das Gesetz keine strikte Frist vorsieht, gilt: Spätestens bis 
              zum 30. Juni des Folgejahres sollte die Abrechnung vorliegen. Bei Verzögerung kann ein 
              <Link href="/blog/nebenkostenabrechnung-pruefen" className="text-teal hover:underline"> Widerspruch</Link> gerechtfertigt sein.
            </div>

            <h2 className="text-2xl font-bold text-navy font-playfair mt-10 mb-4">
              Instandhaltungsrücklage: Die finanzielle Reserve der WEG
            </h2>
            <p>
              Die <strong>Instandhaltungsrücklage</strong> ist das Sparkonto der WEG. Sie dient für 
              zukünftige Instandhaltungs-, Instandsetzungs- und Modernisierungsmaßnahmen. Als Eigentümer 
              zahlen Sie monatlich einen festen Betrag in diese Rücklage ein.
            </p>

            <h3 className="text-xl font-semibold text-navy mt-6 mb-2">
              Wichtige Regelungen zur Rücklage:
            </h3>
            <ul className="list-disc pl-6 space-y-2">
              <li>
                <strong>Zweckbindung:</strong> Die Rücklage darf nur für Instandhaltung verwendet werden
              </li>
              <li>
                <strong>Keine Auszahlung:</strong> Bei Verkauf der Wohnung haben Sie keinen Anspruch auf Rücklageauszahlung
              </li>
              <li>
                <strong>Übertragung:</strong> Der Rücklageanteil geht auf den Käufer über
              </li>
              <li>
                <strong>Verzinsung:</strong> Muss angemessen erfolgen (meist Tagesgeldzinsen)
              </li>
            </ul>

            <div className="bg-amber-50 border border-amber-200 rounded-xl p-4 my-4 text-sm">
              <strong>💡 Empfehlung:</strong> Eine gesunde Rücklage beträgt mindestens 5-10% der 
              Jahresnebenkosten multipliziert mit dem Alter des Gebäudes. Bei einer 50-jährigen Immobilie 
              sollten also 250-500% der Jahresnebenkosten auf der hohen Kante sein.
            </div>

            <h2 className="text-2xl font-bold text-navy font-playfair mt-10 mb-4">
              Wie wählen Sie den richtigen WEG-Verwalter in Hamburg?
            </h2>
            <p>
              Die Wahl des WEG-Verwalters ist eine der wichtigsten Entscheidungen für Ihre 
              Eigentümergemeinschaft. Ein guter Verwalter entlastet Sie, ein schlechter macht 
              Ihnen das Leben schwer. Worauf sollten Sie achten?
            </p>

            <h3 className="text-xl font-semibold text-navy mt-6 mb-2">
              Checkliste: Qualitätskriterien für WEG-Verwalter
            </h3>
            <div className="bg-white border border-gray-200 rounded-xl p-5 my-4">
              <ul className="space-y-3 not-prose">
                {[
                  "§ 34c GewO-Erlaubnis vorhanden",
                  "Berufshaftpflichtversicherung nachgewiesen",
                  "Transparente Vergütungsstruktur (keine versteckten Kosten)",
                  "Garantierte Reaktionszeiten für Eigentümer und Mieter",
                  "Digitale Eigentümerversammlung möglich",
                  "Erfahrung mit Hamburger Immobilien",
                  "Lokales Handwerkernetzwerk",
                  "Gute Bewertungen von anderen WEGs",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-teal flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span className="text-sm text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <h3 className="text-xl font-semibold text-navy mt-6 mb-2">
              Preise für WEG-Verwaltung in Hamburg
            </h3>
            <p>
              Die Kosten für eine WEG-Verwaltung in Hamburg liegen typischerweise zwischen 
              <strong> €22 und €35 pro Einheit und Monat</strong>. Dazu kommen oft einmalige 
              Gebühren für die Eigentümerversammlung oder Sonderaufgaben. Achten Sie auf 
              transparente Preismodelle ohne versteckte Kosten.
            </p>

            <h2 className="text-2xl font-bold text-navy font-playfair mt-10 mb-4">
              Fazit: Aktive Eigentümerschaft zahlt sich aus
            </h2>
            <p>
              Wer als Wohnungseigentümer in Hamburg aktiv bleibt, hat mehr Kontrolle über seine 
              Immobilie. Nehmen Sie an Eigentümerversammlungen teil, prüfen Sie Abrechnungen 
              und wählen Sie Ihren Verwalter sorgfältig. Die gesetzlichen Grundlagen — besonders 
              § 26 WEG — stärken Ihre Position als Eigentümer deutlich.
            </p>
            <p>
              Wenn Ihr aktueller Verwalter unpünktlich abrechnet, schwer erreichbar ist oder 
              bei wichtigen Entscheidungen nicht berät, ist ein Wechsel oft die beste Lösung. 
              Die rechtlichen Hürden sind niedrig — nutzen Sie Ihre Rechte als Eigentümer.
            </p>
          </div>

          <div className="mt-12 bg-teal/10 border border-teal/20 rounded-xl p-8">
            <h3 className="text-xl font-bold text-navy mb-2 font-playfair">
              Professionelle WEG-Verwaltung in Hamburg
            </h3>
            <p className="text-gray-600 mb-4">
              einfach verwaltet. bietet transparente WEG-Verwaltung für Hamburger Eigentümergemeinschaften. 
              Mit garantierten Reaktionszeiten, digitaler Eigentümerversammlung und fairer Vergütung.
            </p>
            <Link
              href="/weg-verwaltung"
              className="inline-block bg-teal text-white font-semibold px-6 py-3 rounded-lg hover:bg-teal/90 transition-colors mr-4"
            >
              Mehr über WEG-Verwaltung
            </Link>
            <Link
              href="/anfrage"
              className="inline-block bg-navy text-white font-semibold px-6 py-3 rounded-lg hover:bg-navy/90 transition-colors"
            >
              Jetzt anfragen
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
