import type { Metadata } from "next";
import Link from "next/link";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

export const metadata: Metadata = {
  title: "Heizung im Mietrecht: Was Vermieter leisten mussen (SS 535 BGB) | einfach verwaltet.",
  description:
    "Pflichten von Vermietern bei der Heizung: Mindesttemperaturen, Heizperiode, Wartung und Reparatur nach SS 535 BGB. Alles was Vermieter wissen mussen.",
  keywords:
    "Vermieter Pflichten Heizung, Heizung Mietrecht, SS 535 BGB Heizung, Heizperiode, Mindesttemperatur Wohnung",
  openGraph: {
    title: "Heizung im Mietrecht: Was Vermieter leisten mussen (SS 535 BGB)",
    description:
      "Pflichten von Vermietern bei der Heizung: Mindesttemperaturen, Heizperiode, Wartung und Reparatur nach SS 535 BGB.",
    url: "https://einfach-verwaltet.de/blog/vermieter-pflichten-heizung",
    siteName: "einfach verwaltet.",
    locale: "de_DE",
    type: "article",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Heizung im Mietrecht: Was Vermieter leisten mussen (SS 535 BGB)",
  description:
    "Pflichten von Vermietern bei der Heizung: Mindesttemperaturen, Heizperiode, Wartung und Reparatur nach SS 535 BGB.",
  author: { "@type": "Organization", name: "einfach verwaltet." },
  publisher: {
    "@type": "Organization",
    name: "einfach verwaltet.",
    logo: { "@type": "ImageObject", url: "https://einfach-verwaltet.de/logo.png" },
  },
  datePublished: "2026-02-27",
  inLanguage: "de",
  url: "https://einfach-verwaltet.de/blog/vermieter-pflichten-heizung",
};

const faqLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Welche Mindesttemperatur muss der Vermieter garantieren?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Nach der Heizkostenverordnung und dem Mietrecht muss der Vermieter eine Raumtemperatur von mindestens 20-22 Grad Celsius tagsuber (6-22 Uhr) und 18 Grad Celsius nachts (22-6 Uhr) garantieren. Bad und Wohnraume mussen beheizbar sein.",
      },
    },
    {
      "@type": "Question",
      name: "Wann beginnt und endet die Heizperiode?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Die gesetzliche Heizperiode dauert vom 1. Oktober bis zum 30. April. Bei anhaltender Kalte kann die Heizung fruher betrieben werden, bei warmem Wetter ist ein spaterer Beginn moglich. Die genauen Zeiten hangen von den ortlichen Gegebenheiten ab.",
      },
    },
    {
      "@type": "Question",
      name: "Wer ist fur die Heizungswartung zustandig?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Der Vermieter ist fur die regelmassige Wartung und Instandhaltung der Heizungsanlage verantwortlich (SS 535 Abs. 1 BGB). Dazu gehoren die jahrliche Wartung durch einen Fachbetrieb, der TUV-Abnahme bei Brennwertkesseln und die Beseitigung von Storungen.",
      },
    },
    {
      "@type": "Question",
      name: "Was passiert bei Heizungsausfall?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Bei Heizungsausfall muss der Vermieter umgehend fur Ersatz sorgen. Reparaturen mussen innerhalb angemessener Fristen erfolgen. Bei langerem Ausfall kann der Mieter eine Mietminderung geltend machen (SS 536 BGB), typischerweise 10-50 Prozent, bei sehr kalten Temperaturen auch mehr.",
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
            <span className="text-gray-700">Heizung im Mietrecht</span>
          </nav>

          <header className="mb-10">
            <p className="text-teal text-sm font-semibold uppercase tracking-wider mb-3">
              Ratgeber · 8 min Lesezeit · Vermieter
            </p>
            <h1 className="text-3xl md:text-4xl font-bold text-navy font-playfair mb-4 leading-tight">
              Heizung im Mietrecht: Was Vermieter leisten mussen (SS 535 BGB)
            </h1>
            <p className="text-gray-500 text-sm">Februar 2026 · einfach verwaltet.</p>
          </header>

          <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed space-y-6">
            <p>
              Die Heizung gehort zu den wichtigsten Mangeln, die bei Mietwohnungen auftreten konnen. 
              Fur Vermieter ist es wichtig zu wissen: Welche Pflichten hat ein Vermieter bezuglich der Heizung? 
              Was muss er garantieren, und was passiert bei Verstossen? Dieser Artikel gibt einen umfassenden Uberblick 
              uber die Heizungspflichten nach SS 535 BGB und der Heizkostenverordnung.
            </p>

            <h2 className="text-2xl font-bold text-navy font-playfair mt-10 mb-4">
              Die gesetzliche Grundlage: SS 535 BGB
            </h2>
            <p>
              Nach <strong>SS 535 Abs. 1 BGB</strong> muss der Vermieter die Mietsache wahrend der Mietzeit 
              in einem vertragsgemassen Zustand erhalten. Das umfasst auch die Heizungsanlage und die 
              Sorge fur angemessene Raumtemperaturen. Der Gesetzgeber hat hieruber in der Heizkostenverordnung (HeizkostenV) 
              konkrete Vorgaben gemacht.
            </p>
            <p>
              Nach <strong>SS 2 Abs. 1 der Heizkostenverordnung</strong> muss der Vermieter dafur sorgen, 
              dass die Wohnraume angemessen beheizt werden konnen. Was angemessen bedeutet, ist weitgehend geklart 
              durch Richtwerte, die vor allem bei Mietminderungsfallen gerne herangezogen werden.
            </p>

            <h2 className="text-2xl font-bold text-navy font-playfair mt-10 mb-4">
              Mindesttemperaturen: Was garantiert der Vermieter?
            </h2>
            <p>
              Obwohl keine exakte Temperaturvorschrift im Gesetz steht, hat sich durch Rechtsprechung ein 
              Richtwert etabliert, der fur Vermieter bindend ist:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Tagsuber (6:00 bis 22:00 Uhr):</strong> Mindestens 20-22 Grad Celsius</li>
              <li><strong>Nachts (22:00 bis 6:00 Uhr):</strong> Mindestens 18 Grad Celsius</li>
              <li><strong>Bader:</strong> Mindestens 20 Grad Celsius (da vermehrte Kalte nicht zumutbar)</li>
            </ul>
            <p>
              <strong>Wichtig:</strong> Diese Werte sind Mindestanforderungen. Der konkrete Anspruch 
              kann je nach Vertrag oder Wohnlage hoher sein. Bei besonders kalten Wintertagen wird erwartet, 
              dass das Heizsystem diese Temperaturen auch unter extremen Bedingungen halten kann.
            </p>

            <h2 className="text-2xl font-bold text-navy font-playfair mt-10 mb-4">
              Die Heizperiode: Wann muss geheizt werden?
            </h2>
            <p>
              Die gesetzliche Heizperiode dauert vom <strong>1. Oktober bis zum 30. April</strong>. 
              Das bedeutet nicht, dass taglich geheizt werden muss, sondern dass das Heizsystem in dieser Zeit 
              betriebsbereit sein und bei Bedarf aktiviert werden muss.
            </p>
            <p>
              Bei ungewohnlich warmer Witterung kann die Heizperiode kurzer ausfallen. Umgekehrt kann bei 
              fruh einsetzendem Frost die Heizung auch vor dem 1. Oktober laufen. Entscheidend ist, dass 
              die Mindesttemperaturen eingehalten werden.
            </p>

            <h2 className="text-2xl font-bold text-navy font-playfair mt-10 mb-4">
              Wartung und Instandhaltung: Pflichten des Vermieters
            </h2>
            <p>
              Der Vermieter ist fur die Funktionsfahigkeit und Sicherheit der Heizungsanlage verantwortlich. 
              Das umfasst folgende Pflichten:
            </p>
            <h3 className="text-xl font-semibold text-navy mt-6 mb-2">Regelmassige Wartung</h3>
            <ul className="list-disc pl-6 space-y-2">
              <li>Jahrliche Wartung der Heizungsanlage durch einen Fachbetrieb</li>
              <li>Bei Brennwertkesseln: Regelmassige TUV-Abnahme</li>
              <li>Prufung der Sicherheitseinrichtungen</li>
              <li>Dokumentation aller Wartungsarbeiten</li>
            </ul>

            <h3 className="text-xl font-semibold text-navy mt-6 mb-2">Instandsetzung bei Schaden</h3>
            <p>
              Treten Mangel an der Heizung auf, muss der Vermieter umgehend handeln. Das gilt fur:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Heizungsausfall oder -storungen</li>
              <li>Undichtheiten in der Anlage</li>
              <li>Defekte Thermostate oder Heizkorper</li>
              <li>Pumpenausfall oder Zirkulationsprobleme</li>
            </ul>

            <h2 className="text-2xl font-bold text-navy font-playfair mt-10 mb-4">
              Was passiert bei Verstossen gegen die Heizpflicht?
            </h2>
            <p>
              Erfullt der Vermieter seine Heizungspflichten nicht, hat der Mieter verschiedene Rechte:
            </p>
            <h3 className="text-xl font-semibold text-navy mt-6 mb-2">Mietminderung</h3>
            <p>
              Bei unzureichender Heizung kann der Mieter nach <strong>SS 536 BGB</strong> eine Mietminderung 
              geltend machen. Die Hohe der Minderung richtet sich nach der Schwere des Mangels:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Leichte Untertemperatur (unter 2 Grad): 10-15 Prozent</li>
              <li>Deutliche Untertemperatur (2-4 Grad): 20-30 Prozent</li>
              <li>Starke Untertemperatur (uber 4 Grad): 30-50 Prozent</li>
              <li>Totalausfall: Bis zu 100 Prozent bei sehr kalter Aussentemperatur</li>
            </ul>

            <h3 className="text-xl font-semibold text-navy mt-6 mb-2">Schadensersatz</h3>
            <p>
              Bei Gesundheitsbeeintrachtigungen durch kalte Wohnungen oder beschadigten Inventar durch 
              Kalte/Feuchtigkeit kann der Mieter Schadensersatz nach <strong>SS 538 BGB</strong> verlangen. 
              Krankheitskosten, Arztbesuche oder Schaden an Mobeln konnen ersetzt werden.
            </p>

            <h3 className="text-xl font-semibold text-navy mt-6 mb-2">Ordentliche Kundigung</h3>
            <p>
              Bei wiederholtem oder anhaltendem Verstoss gegen die Heizungspflicht kann der Mieter 
              unter Umstanden das Mietverhaltnis aus wichtigem Grund kundigen, ohne die ordentliche 
              Kundigungsfrist einzuhalten.
            </p>

            <h2 className="text-2xl font-bold text-navy font-playfair mt-10 mb-4">
              Checkliste: Heizungspflichten fur Vermieter
            </h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>Heizsystem vor Beginn der Heizperiode prufen lassen</li>
              <li>Wartungsvertrag mit Fachfirma abschliessen</li>
              <li>Mindesttemperaturen tagsuber (20-22C) und nachts (18C) garantieren</li>
              <li>Bei Storungen schnellstmoglich reagieren (idealerweise innerhalb 24-48 Stunden)</li>
              <li>Bei Totalausfall beheizte Ersatzraumlichkeiten anbieten oder Hotelkosten ubernehmen</li>
              <li>Alle Wartungen und Reparaturen dokumentieren</li>
            </ul>

            <h2 className="text-2xl font-bold text-navy font-playfair mt-10 mb-4">
              Fazit: Proaktives Handeln verhindert Probleme
            </h2>
            <p>
              Die Heizungspflichten des Vermieters sind klar geregelt und verbindlich. Mindesttemperaturen, 
              regelmassige Wartung und zugige Instandsetzung bei Schaden sind Pflicht. Mit einer proaktiven 
              Wartungsstrategie konnen Vermieter teure Mietminderungen und rechtliche Konflikte vermeiden.
            </p>
            <p>
              Professionelle Hausverwaltung ubernimmt die Koordination von Wartung, Reparaturen und 
              Mieterkommunikation -- sodass Sie als Vermieter sorgenfrei bleiben.
            </p>
          </div>

          <div className="mt-12 bg-teal/10 border border-teal/20 rounded-xl p-8">
            <h3 className="text-xl font-bold text-navy mb-2 font-playfair">
              Heizungspflichten ohne Aufwand umsetzen
            </h3>
            <p className="text-gray-600 mb-4">
              einfach verwaltet. ubernimmt fur Sie die Koordination von Wartung und Reparaturen. 
              Mieteranfragen werden innerhalb von 15 Minuten beantwortet.
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
