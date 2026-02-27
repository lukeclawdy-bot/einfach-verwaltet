import type { Metadata } from "next";
import Link from "next/link";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

export const metadata: Metadata = {
  title: "Vermieter Pflichten 2026: Vollständige Checkliste für Eigentümer | einfach verwaltet.",
  description:
    "Vermieter Pflichten 2026: Instandhaltung, Nebenkostenabrechnung, Rauchmelder, Heizung, Schönheitsreparaturen und DSGVO — alle Pflichten auf einen Blick.",
  keywords:
    "Vermieter Pflichten, Vermieter Pflichten Checkliste, Vermieter Pflichten 2026, Vermieter Rechte und Pflichten, Vermieter gesetzliche Pflichten",
  openGraph: {
    title: "Vermieter Pflichten 2026: Vollständige Checkliste",
    description:
      "Alle gesetzlichen Pflichten für Vermieter 2026: Was müssen Sie tun, was dürfen Sie ablehnen? Checkliste mit BGH-aktuellen Urteilen.",
    url: "https://einfach-verwaltet.de/blog/vermieter-pflichten-checkliste",
    siteName: "einfach verwaltet.",
    locale: "de_DE",
    type: "article",
  },
};

const jsonLdArticle = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Vermieter Pflichten 2026: Vollständige Checkliste für Eigentümer",
  description:
    "Alle gesetzlichen Pflichten für Vermieter in Deutschland 2026: Instandhaltung, Nebenkosten, Schönheitsreparaturen, Heizung, Rauchmelder und DSGVO.",
  author: { "@type": "Organization", name: "einfach verwaltet." },
  publisher: {
    "@type": "Organization",
    name: "einfach verwaltet.",
    logo: { "@type": "ImageObject", url: "https://einfach-verwaltet.de/logo.png" },
  },
  datePublished: "2026-02-27",
  inLanguage: "de",
  url: "https://einfach-verwaltet.de/blog/vermieter-pflichten-checkliste",
};

const jsonLdFaq = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Was sind die wichtigsten Pflichten eines Vermieters?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Die wichtigsten Pflichten sind: Übergabe der Wohnung in vertragsgemäßem Zustand (§535 BGB), Instandhaltungspflicht (§535 Abs. 1 BGB), jährliche Nebenkostenabrechnung bis zum 31. Dezember (§556 Abs. 3 BGB), Sicherstellung der Heizversorgung von Oktober bis April sowie das Anbringen funktionsfähiger Rauchmeldegeräte.",
      },
    },
    {
      "@type": "Question",
      name: "Wann verjähren Vermieter Pflichten?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Die reguläre Verjährungsfrist beträgt 3 Jahre (§195 BGB). Für Mängelansprüche aus dem Mietvertrag gilt ebenfalls die 3-Jahres-Frist. Die Frist beginnt zum Jahresende des Jahres, in dem der Anspruch entstanden ist. Bei arglistig verschwiegenen Mängeln gilt die längere 10-Jahres-Frist.",
      },
    },
    {
      "@type": "Question",
      name: "Welche Pflichten können auf den Mieter übertragen werden?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Zulässig übertragbar sind: Schönheitsreparaturen (nur bei renovierter Übergabe, BGH), Kleinreparaturen bis max. €150–200 pro Einzelreparatur, Gartenpflege und bestimmte Hausordnungsaufgaben. Nicht übertragbar sind die Instandhaltungspflicht für die Bausubstanz, die Heizkostenabrechnung nach §21 HeizkV und die Verkehrssicherungspflicht.",
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
            <span className="text-gray-700">Vermieter Pflichten Checkliste</span>
          </nav>

          <header className="mb-10">
            <p className="text-teal text-sm font-semibold uppercase tracking-wider mb-3">
              Ratgeber · 9 min Lesezeit
            </p>
            <h1 className="text-3xl md:text-4xl font-bold text-navy font-playfair mb-4 leading-tight">
              Vermieter Pflichten 2026: Die vollständige Checkliste
            </h1>
            <p className="text-gray-500 text-sm">Februar 2026 · einfach verwaltet.</p>
          </header>

          <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed space-y-6">
            <p className="text-xl text-gray-600">
              Als Vermieter tragen Sie erhebliche gesetzliche Verantwortung. 
              Was müssen Sie tun, was dürfen Sie ablehnen, was können Sie auf 
              den Mieter übertragen? Diese Checkliste gibt eine aktuelle Übersicht 
              — mit Paragraphen und BGH-Urteilen.
            </p>

            <h2 className="text-2xl font-bold text-navy font-playfair mt-10 mb-4">
              1. Grundpflichten nach §535 BGB
            </h2>
            <p>
              Das Mietrecht verpflichtet Sie als Vermieter zur Überlassung der 
              Mietsache in einem zum vertragsgemäßen Gebrauch geeigneten Zustand 
              und zur Erhaltung dieses Zustands während der Mietzeit (§535 Abs. 1 BGB).
            </p>
            <div className="bg-navy/5 border border-navy/10 rounded-xl p-6">
              <h3 className="font-bold text-navy mb-3">Checkliste: Grundpflichten</h3>
              <div className="space-y-2 text-sm">
                {[
                  "Übergabe in vertragsgemäßem Zustand (§535 Abs. 1 S. 1 BGB)",
                  "Instandhaltung während der gesamten Mietzeit",
                  "Beseitigung von Mängeln auf Kosten des Vermieters",
                  "Duldung notwendiger Reparaturarbeiten durch Mieter",
                  "Informationspflicht über bekannte Mängel",
                ].map((item) => (
                  <div key={item} className="flex items-start gap-2">
                    <span className="text-teal font-bold mt-0.5">✓</span>
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <h2 className="text-2xl font-bold text-navy font-playfair mt-10 mb-4">
              2. Nebenkostenabrechnung (§556 Abs. 3 BGB)
            </h2>
            <p>
              Die Betriebskostenabrechnung muss dem Mieter spätestens{" "}
              <strong>12 Monate nach Ende des Abrechnungszeitraums</strong> zugehen.
              Bei einem Abrechnungsjahr Januar–Dezember 2025 bedeutet das: 
              Abrechnung bis zum 31. Dezember 2026. Nach dieser Frist können Sie 
              Nachzahlungen nicht mehr verlangen — der Mieter behält jedoch 
              seinen Erstattungsanspruch.
            </p>
            <p className="bg-amber-50 border-l-4 border-amber-400 p-4 rounded">
              <strong>Wichtig:</strong> Die Frist ist eine Ausschlussfrist, keine 
              Verjährungsfrist. Versäumen Sie sie, verlieren Sie den Nachzahlungsanspruch 
              unwiederbringlich — auch wenn der Mieter formlos zugestimmt hätte.
            </p>

            <h2 className="text-2xl font-bold text-navy font-playfair mt-10 mb-4">
              3. Heizpflicht: Oktober bis April
            </h2>
            <p>
              Von Oktober bis April müssen Sie sicherstellen, dass die Wohnung 
              auf mindestens <strong>20–22°C</strong> heizbar ist (abhängig von 
              Tages- und Nachtzeiten). Diese Pflicht ergibt sich aus der 
              Betriebskostenverordnung (§4 BetrKV) und der Rechtsprechung.
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Mindesttemperatur tagsüber: 20–22°C (je nach Rechtsprechung der Bundesländer)</li>
              <li>Nachts (23:00–6:00 Uhr): mindestens 18°C</li>
              <li>Heizungsausfall: Mängelbeseitigung unverzüglich, Mietminderung ab dem ersten Tag möglich</li>
              <li>Heizkostenabrechnung nach §21 HeizkV — nicht auf Mieter übertragbar</li>
            </ul>

            <h2 className="text-2xl font-bold text-navy font-playfair mt-10 mb-4">
              4. Rauchmelderpflicht
            </h2>
            <p>
              In allen 16 Bundesländern gilt die Rauchmelderpflicht. Als Vermieter 
              sind Sie verpflichtet, funktionstüchtige Rauchmelder in allen 
              Schlafräumen, Kinderzimmern und Fluren zu installieren. In den 
              meisten Bundesländern obliegt die <em>Wartung</em> dem Vermieter, 
              kann aber per Mietvertrag auf den Mieter übertragen werden.
            </p>
            <div className="bg-navy/5 border border-navy/10 rounded-xl p-6">
              <h3 className="font-bold text-navy mb-3">Rauchmelder: Pflichtbereiche</h3>
              <div className="space-y-1 text-sm">
                {[
                  "Schlafzimmer (alle)",
                  "Kinderzimmer",
                  "Flure, die Rettungswege darstellen",
                  "Wohnzimmer (Hamburg, Brandenburg, Bremen, Sachsen-Anhalt)",
                ].map((item) => (
                  <div key={item} className="flex items-start gap-2">
                    <span className="text-teal font-bold">✓</span>
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <h2 className="text-2xl font-bold text-navy font-playfair mt-10 mb-4">
              5. Schönheitsreparaturen: Was gilt nach BGH?
            </h2>
            <p>
              Der BGH hat in mehreren Grundsatzurteilen (zuletzt BGH VIII ZR 185/14) 
              klargestellt: Schönheitsreparaturen können nur bei{" "}
              <strong>renoviert übergebener Wohnung</strong> wirksam auf den Mieter 
              übertragen werden. Unrenoviert übernommene Wohnungen bedeuten: 
              Sie als Vermieter bleiben verantwortlich.
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Starre Fristen (z.B. „alle 3 Jahre streichen") sind unwirksam</li>
              <li>Quotenabgeltungsklauseln ohne Wahlrecht sind unwirksam</li>
              <li>Endrenovierungsklauseln bei unrenoviert übergebener Wohnung: unwirksam</li>
              <li>Wirksam: flexible Fristenpläne bei renoviert übergebener Wohnung</li>
            </ul>

            <h2 className="text-2xl font-bold text-navy font-playfair mt-10 mb-4">
              6. Verkehrssicherungspflicht
            </h2>
            <p>
              Als Eigentümer und Vermieter haften Sie für Schäden, die durch 
              mangelhafte Verkehrssicherung entstehen — Treppenhaus, Gehweg, 
              Kellerbeleuchtung, Außenanlagen. Diese Pflicht können Sie 
              vertraglich auf einen Hausmeister oder die Hausverwaltung übertragen, 
              die Letztverantwortung bleibt jedoch beim Eigentümer.
            </p>

            <h2 className="text-2xl font-bold text-navy font-playfair mt-10 mb-4">
              7. DSGVO-Pflichten für Vermieter
            </h2>
            <p>
              Seit 2018 gelten die Datenschutz-Grundverordnung (DSGVO) und das 
              neue Bundesdatenschutzgesetz (BDSG) auch für private Vermieter. 
              Konkret bedeutet das:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Mieterbewerberdaten dürfen nur so lange gespeichert werden, wie sie für die Entscheidung benötigt werden</li>
              <li>Schufa- und SCHUFA-Bonitätsauskünfte dürfen nur mit ausdrücklicher Einwilligung eingeholt werden</li>
              <li>Mieterdaten dürfen nicht ohne Einwilligung an Dritte weitergegeben werden</li>
              <li>Mieter haben Auskunfts- und Löschungsrechte (Art. 15–17 DSGVO)</li>
            </ul>

            <h2 className="text-2xl font-bold text-navy font-playfair mt-10 mb-4">
              8. Energieausweis-Pflichten (§16a GEG 2024)
            </h2>
            <p>
              Seit dem Gebäudeenergiegesetz (GEG) 2024 sind Vermieter verpflichtet, 
              bei Neu- oder Wiedervermietung einen gültigen Energieausweis vorzulegen. 
              In Inseraten muss die Energieeffizienzklasse angegeben werden. 
              Verstöße können mit bis zu €15.000 Bußgeld geahndet werden.
            </p>

            <h2 className="text-2xl font-bold text-navy font-playfair mt-10 mb-4">
              Zusammenfassung: Was können Vermieter delegieren?
            </h2>
            <div className="bg-navy/5 border border-navy/10 rounded-xl p-6">
              <div className="grid md:grid-cols-2 gap-6 text-sm">
                <div>
                  <h3 className="font-bold text-navy mb-3">✓ Übertragbar auf Mieter</h3>
                  <ul className="space-y-1">
                    <li>Schönheitsreparaturen (bei renovierter Übergabe)</li>
                    <li>Kleinreparaturen bis €150–200</li>
                    <li>Gartenpflege (vertraglich)</li>
                    <li>Rauchwartung (in einigen Bundesländern)</li>
                    <li>Treppenhausreinigung</li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-bold text-navy mb-3">✗ Nicht übertragbar</h3>
                  <ul className="space-y-1">
                    <li>Instandhaltung Bausubstanz</li>
                    <li>Heizkostenabrechnung (§21 HeizkV)</li>
                    <li>Verkehrssicherungspflicht (Haftung)</li>
                    <li>DSGVO-Verantwortung</li>
                    <li>Nebenkostenabrechnung (§556 BGB)</li>
                  </ul>
                </div>
              </div>
            </div>

            <h2 className="text-2xl font-bold text-navy font-playfair mt-10 mb-4">
              Häufige Fragen zu Vermieter Pflichten
            </h2>
            <div className="space-y-4">
              {[
                {
                  q: "Was sind die wichtigsten Pflichten eines Vermieters?",
                  a: "Die wichtigsten Pflichten sind: Übergabe in vertragsgemäßem Zustand (§535 BGB), Instandhaltungspflicht, jährliche Nebenkostenabrechnung bis 31. Dezember (§556 Abs. 3 BGB), Sicherstellung der Heizversorgung von Oktober bis April sowie funktionstüchtige Rauchmelder.",
                },
                {
                  q: "Wann verjähren Vermieter Pflichten?",
                  a: "Die reguläre Verjährungsfrist beträgt 3 Jahre (§195 BGB). Bei arglistig verschwiegenen Mängeln gilt die 10-Jahres-Frist. Die Nebenkostenfrist ist eine Ausschlussfrist — nach 12 Monaten können Nachzahlungen nicht mehr verlangt werden.",
                },
                {
                  q: "Welche Pflichten können auf den Mieter übertragen werden?",
                  a: "Zulässig übertragbar sind: Schönheitsreparaturen (nur bei renovierter Übergabe, BGH), Kleinreparaturen bis max. €150–200 pro Reparatur und Gartenpflege. Nicht übertragbar sind die Instandhaltungspflicht und die Heizkostenabrechnung.",
                },
              ].map((faq, i) => (
                <div key={i} className="bg-white rounded-xl border border-gray-100 p-5">
                  <h3 className="font-semibold text-navy text-sm mb-2">{faq.q}</h3>
                  <p className="text-sm text-gray-700 leading-relaxed">{faq.a}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-12 bg-teal/10 border border-teal/20 rounded-xl p-8">
            <h3 className="text-xl font-bold text-navy mb-2 font-playfair">
              Pflichten auslagern — Zeit und Haftung sparen
            </h3>
            <p className="text-gray-600 mb-4">
              Eine professionelle Hausverwaltung übernimmt alle operativen Vermieterpflichten — 
              Nebenkostenabrechnung, Instandhaltungskoordination, Mieterkommunikation und mehr.
            </p>
            <Link
              href="/anfrage"
              className="inline-block bg-teal text-white font-semibold px-6 py-3 rounded-lg hover:bg-teal/90 transition-colors"
            >
              Kostenlos anfragen
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
