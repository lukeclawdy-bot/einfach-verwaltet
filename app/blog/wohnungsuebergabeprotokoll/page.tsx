import type { Metadata } from "next";
import Link from "next/link";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

export const metadata: Metadata = {
  title: "Wohnungsubergabeprotokoll: So schutzen Sie sich als Vermieter | einfach verwaltet.",
  description:
    "Wohnungsubergabeprotokoll richtig erstellen: Checkliste, haufige Fehler, Kautionssicherheit. Was Vermieter bei Ein- und Auszug beachten mussen.",
  keywords:
    "Wohnungsubergabeprotokoll, Ubergabeprotokoll Mietwohnung, Wohnungsubergabe Checkliste, Kaution Protokoll",
  openGraph: {
    title: "Wohnungsubergabeprotokoll: So schutzen Sie sich als Vermieter",
    description:
      "Wohnungsubergabeprotokoll richtig erstellen: Checkliste, haufige Fehler, Kautionssicherheit fur Vermieter.",
    url: "https://einfach-verwaltet.de/blog/wohnungsuebergabeprotokoll",
    siteName: "einfach verwaltet.",
    locale: "de_DE",
    type: "article",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Wohnungsubergabeprotokoll: So schutzen Sie sich als Vermieter",
  description:
    "Wohnungsubergabeprotokoll richtig erstellen: Checkliste, haufige Fehler, Kautionssicherheit fur Vermieter.",
  author: { "@type": "Organization", name: "einfach verwaltet." },
  publisher: {
    "@type": "Organization",
    name: "einfach verwaltet.",
    logo: { "@type": "ImageObject", url: "https://einfach-verwaltet.de/logo.png" },
  },
  datePublished: "2026-02-27",
  inLanguage: "de",
  url: "https://einfach-verwaltet.de/blog/wohnungsuebergabeprotokoll",
};

const faqLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Was muss in ein Wohnungsubergabeprotokoll?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Ein vollstandiges Wohnungsubergabeprotokoll enthalt: Adresse und Wohnungsbeschreibung, Datum und Uhrzeit der Ubergabe, Namen von Vermieter und Mieter, Zustand jedes Raums (Boden, Wande, Fenster, Turen), Inventarliste, Zustand der Sanitareinrichtungen, Funktionsfahigkeit von Elektro und Heizung, Zahlstande aller Verbrauchszahler, Schlusselubergabe mit genauer Anzahl, vorhandene Mangel und Schaden, Unterschriften beider Parteien. Fotos als Anlage empfohlen.",
      },
    },
    {
      "@type": "Question",
      name: "Ist ein Ubergabeprotokoll gesetzlich vorgeschrieben?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Nein, ein schriftliches Ubergabeprotokoll ist nicht gesetzlich vorgeschrieben. Allerdings wird dringend empfohlen, eines anzufertigen. Ohne Protokoll kann der Vermieter bei Streitigkeiten uber die Kaution nur schwer beweisen, dass Schaden vom Mieter verursacht wurden. Fur den Mieter dient das Protokoll als Nachweis, dass Mangel bereits bei Einzug vorlagen.",
      },
    },
    {
      "@type": "Question",
      name: "Was tun, wenn der Mieter das Protokoll nicht unterschreibt?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Weigert sich der Mieter zu unterschreiben, sollte der Vermieter das Protokoll dennoch erstellen und den Mieter schriftlich auffordern, es zu unterzeichnen. Der Vermieter kann auch einen Zeugen hinzuziehen (Handwerker, Nachbar, Hausverwalter), der bestatigt, dass das Protokoll korrekt ist. Auch Fotos stutzen den Nachweis erheblich.",
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
            <span className="text-gray-700">Wohnungsubergabeprotokoll</span>
          </nav>

          <header className="mb-10">
            <p className="text-teal text-sm font-semibold uppercase tracking-wider mb-3">
              Ratgeber · 8 min Lesezeit · Vermieter
            </p>
            <h1 className="text-3xl md:text-4xl font-bold text-navy font-playfair mb-4 leading-tight">
              Wohnungsubergabeprotokoll: So schutzen Sie sich als Vermieter
            </h1>
            <p className="text-gray-500 text-sm">Februar 2026 · einfach verwaltet.</p>
          </header>

          <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed space-y-6">
            <p>
              Das Wohnungsubergabeprotokoll ist das wichtigste Dokument bei Mietbeginn und Mietende. 
              Es schutzt sowohl Vermieter als auch Mieter vor Streitigkeiten uber Zustand und Kaution. 
              Doch viele Protokolle sind lickenhaft oder unzureichend. Dieser Artikel zeigt, wie Sie 
              ein wasserdichtes Protokoll erstellen.
            </p>

            <h2 className="text-2xl font-bold text-navy font-playfair mt-10 mb-4">
              Warum ist das Ubergabeprotokoll so wichtig?
            </h2>
            <p>
              Bei Streitigkeiten uber die Ruckzahlung der Kaution kommt es auf Beweise an. 
              Ein vollstandiges Protokoll dokumentiert den Zustand der Wohnung bei Ubergabe und 
              Ruckgabe. Ohne Protokoll steht Aussage gegen Aussage -- mit ungewissem Ausgang fur den Vermieter.
            </p>
            <p>
              Besonders wichtig ist das Protokoll bei:<br/>
              -- Streitigkeiten uber die Kaution<br/>
              -- Mangelragen wahrend der Mietzeit<br/>
              -- Schonheitsreparaturen und Renoviierungspflichten<br/>
              -- Schaden an Inventar und Installationen
            </p>

            <h2 className="text-2xl font-bold text-navy font-playfair mt-10 mb-4">
              Checkliste: Was gehort in ein Ubergabeprotokoll?
            </h2>
            
            <h3 className="text-xl font-semibold text-navy mt-6 mb-2">Allgemeine Angaben</h3>
            <ul className="list-disc pl-6 space-y-2">
              <li>Vollstandige Adresse der Wohnung</li>
              <li>Obergeschoss und Wohnungsnummer</li>
              <li>Datum und Uhrzeit der Ubergabe</li>
              <li>Namen und Kontaktdaten von Vermieter und Mieter</li>
            </ul>

            <h3 className="text-xl font-semibold text-navy mt-6 mb-2">Zustand der Raume</h3>
            <p>Fur jeden Raum sollten folgende Punkte dokumentiert werden:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Boden:</strong> Zustand (neu, gut, abgenutzt), Beschadigungen, Flecken</li>
              <li><strong>Wande:</strong> Tapetenzustand, Risse, Schimmel, Farbe</li>
              <li><strong>Decke:</strong> Zustand, Wasserflecken, Risse</li>
              <li><strong>Fenster:</strong> Funktionsfahigkeit, Dichtheit, Rahmenzustand, Glasbruch</li>
              <li><strong>Turen:</strong> Funktion, Schlosser, Klinke, Beschlage, Scharniere</li>
            </ul>

            <h3 className="text-xl font-semibold text-navy mt-6 mb-2">Sanitar und Kuche</h3>
            <ul className="list-disc pl-6 space-y-2">
              <li>Badewanne/Dusche: Zustand, Versiegelung, Armaturen</li>
              <li>Waschbecken: Kratzer, Armaturen, Siphon</li>
              <li>WC: Spulung, Sitz, Keramik</li>
              <li>Kucheneinbauten: Schranke, Arbeitsplatte, Spule, Herd, Backofen</li>
              <li>Fliesen: Zustand, Fugen, Beschadigungen</li>
            </ul>

            <h3 className="text-xl font-semibold text-navy mt-6 mb-2">Installationen und Gerate</h3>
            <ul className="list-disc pl-6 space-y-2">
              <li>Elektro: Funktion aller Steckdosen und Schalter</li>
              <li>Beleuchtung: Alle Lampen funktionsfahig</li>
              <li>Heizung: Heizkorper heizen, Thermostate funktionieren</li>
              <li>Lufung: Funktionsfahigkeit prufen</li>
              <li>Gerate: Herd, Kuhlschrank, Waschmaschine (falls vorhanden)</li>
            </ul>

            <h3 className="text-xl font-semibold text-navy mt-6 mb-2">Verbrauchszahler</h3>
            <ul className="list-disc pl-6 space-y-2">
              <li>Stromzahlerstand (bei getrennter Messung)</li>
              <li>Wasserzahlerstand (Warm- und Kaltwasser getrennt)</li>
              <li>Gaszahlerstand (falls relevant)</li>
              <li>Heizungsablesung (falls vorhanden)</li>
              <li>Zahler-Nr. und Einbauort notieren</li>
            </ul>

            <h3 className="text-xl font-semibold text-navy mt-6 mb-2">Inventar und Schlussel</h3>
            <ul className="list-disc pl-6 space-y-2">
              <li>Liste aller ubergebenen Gegenstande (Mobel, Vorhange, Gerate)</li>
              <li>Schlusselubergabe: Anzahl und Art (Wohnungstur, Haustur, Kellertur, Briefkasten)</li>
              <li>Wohnungskarte/Chip/Transponder (falls vorhanden)</li>
              <li>Gemeinschaftsschlussel (Mullraum, Waschkuche)</li>
            </ul>

            <h2 className="text-2xl font-bold text-navy font-playfair mt-10 mb-4">
              Fotos: Unverzichtbare Beweissicherung
            </h2>
            <p>
              Fotos sind ein wesentlicher Bestandteil eines guten Ubergabeprotokolls. Fotografieren Sie:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Jeden Raum aus verschiedenen Perspektiven</li>
              <li>Besonderheiten und vorhandene Mangel</li>
              <li>Inventar und Gerate</li>
              <li>Verbrauchszahler mit sichtbarem Stand</li>
              <li>Alle beschadigten Stellen (auch wenn sie alt sind)</li>
            </ul>
            <p>
              <strong>Tipp:</strong> Fotos sollten mit Zeitstempel gemacht werden oder auf dem Protokoll 
              mit Datum und Uhrzeit vermerkt werden.
            </p>

            <h2 className="text-2xl font-bold text-navy font-playfair mt-10 mb-4">
              Die 5 haufigsten Fehler bei Ubergabeprotokollen
            </h2>
            
            <h3 className="text-xl font-semibold text-navy mt-6 mb-2">1. Zu wenig Details</h3>
            <p>
              Formulierungen wie "Wohnung wurde besichtigt, OK" genugen nicht. Jeder Raum muss 
              einzeln beschrieben werden. Nur so kann spater nachgewiesen werden, wo Schaden entstanden sind.
            </p>

            <h3 className="text-xl font-semibold text-navy mt-6 mb-2">2. Keine Fotos</h3>
            <p>
              Ohne Fotos bleibt es bei der gesprochenen Beschreibung. Gerade bei Schonheitsreparaturen 
              oder Mangeln sind Bilder der beste Beweis.
            </p>

            <h3 className="text-xl font-semibold text-navy mt-6 mb-2">3. Nur eine Unterschrift</h3>
            <p>
              Beide Parteien mussen das Protokoll unterschreiben. Weigert sich der Mieter, sollte 
              der Vermieter zumindest einen Zeugen hinzuziehen und das Protokoll dem Mieter schriftlich zustellen.
            </p>

            <h3 className="text-xl font-semibold text-navy mt-6 mb-2">4. Keine Zweitschrift</h3>
            <p>
              Erstellen Sie immer zwei Exemplare -- eines fur den Mieter, eines fur sich. Bei Streitigkeiten 
              mussen beide Parteien das gleiche Protokoll vorweisen konnen.
            </p>

            <h3 className="text-xl font-semibold text-navy mt-6 mb-2">5. Zahlstande nicht notiert</h3>
            <p>
              Verbrauchszahlerstande mussen bei Ein- und Auszug dokumentiert werden. Sonst entsteht 
              spater Streit uber die Abrechnung.
            </p>

            <h2 className="text-2xl font-bold text-navy font-playfair mt-10 mb-4">
              Ubergabeprotokoll bei Wohnungsruckgabe
            </h2>
            <p>
              Bei der Wohnungsruckgabe ist das Protokoll noch wichtiger, weil es uber die Kaution entscheidet. 
              Gehen Sie systematisch vor:
            </p>
            <ol className="list-decimal pl-6 space-y-2">
              <li>Vergleichen Sie den aktuellen Zustand mit dem Einzugsprotokoll</li>
              <li>Dokumentieren Sie neu entstandene Schaden fotografisch</li>
              <li>Notieren Sie fehlende Gegenstande aus dem Inventar</li>
              <li>Vergleichen Sie Verbrauchszahlerstande mit vorherigen Werten</li>
              <li>Prufen Sie, ob alle Schlussel vollstandig zuruckgegeben wurden</li>
              <li>Vereinbaren Sie ggf. eine Reinigungskompensation oder Nachbesserung</li>
              <li>Lassen Sie das Protokoll von beiden Seiten unterschreiben</li>
            </ol>

            <h2 className="text-2xl font-bold text-navy font-playfair mt-10 mb-4">
              Fazit: Praxistipp fur Vermieter
            </h2>
            <p>
              Ein vollstandiges Ubergabeprotokoll ist die beste Versicherung gegen Kautionsstreitigkeiten. 
              Nehmen Sie sich Zeit bei der Erstellung, dokumentieren Sie umfassend und archivieren Sie das 
              Protokoll sicher. Investieren Sie in gute Vorbereitung -- es zahlt sich bei der Ruckgabe aus.
            </p>
          </div>

          <div className="mt-12 bg-teal/10 border border-teal/20 rounded-xl p-8">
            <h3 className="text-xl font-bold text-navy mb-2 font-playfair">
              Ubergabeprotokolle professionell erstellen lassen
            </h3>
            <p className="text-gray-600 mb-4">
              einfach verwaltet. erstellt Ihr Ubergabeprotokoll fachgerecht inklusive Fotodokumentation 
              und Inventarliste. Schutzen Sie sich vor Kautionsstreitigkeiten.
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
