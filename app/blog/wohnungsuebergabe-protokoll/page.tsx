import type { Metadata } from "next";
import Link from "next/link";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

export const metadata: Metadata = {
  title: "Wohnungsübergabe Protokoll: Checkliste für Mieter und Vermieter (2026)",
  description:
    "Wohnungsübergabe Protokoll: Was muss dokumentiert werden? Checkliste Raum für Raum, Zählerstände, Schlüssel, Fotos und rechtliche Bedeutung.",
  keywords:
    "Wohnungsübergabe Protokoll, Übergabeprotokoll Wohnung, Wohnungsübergabe Checkliste, Wohnungsübergabe Mieter Vermieter, Übergabeprotokoll Vorlage",
  openGraph: {
    title: "Wohnungsübergabe Protokoll: Checkliste für Mieter und Vermieter",
    description:
      "Alles zum Wohnungsübergabe Protokoll: Was dokumentieren, welche Checkliste nutzen und warum das Protokoll rechtlich entscheidend ist.",
    url: "https://einfach-verwaltet.de/blog/wohnungsuebergabe-protokoll",
    siteName: "einfach verwaltet.",
    locale: "de_DE",
    type: "article",
  },
};

const jsonLdArticle = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Wohnungsübergabe Protokoll: Checkliste für Mieter und Vermieter",
  description:
    "Alles zum Wohnungsübergabe Protokoll: Was dokumentieren, welche Checkliste nutzen und warum das Protokoll rechtlich entscheidend ist.",
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
  url: "https://einfach-verwaltet.de/blog/wohnungsuebergabe-protokoll",
};

const jsonLdFaq = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Ist ein Wohnungsübergabe Protokoll gesetzlich vorgeschrieben?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Ein Wohnungsübergabe Protokoll ist gesetzlich nicht vorgeschrieben, aber dringend empfohlen. Es ist das einzige Beweismittel bei Streitigkeiten über den Zustand der Wohnung bei Ein- und Auszug.",
      },
    },
    {
      "@type": "Question",
      name: "Was muss im Wohnungsübergabe Protokoll stehen?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Das Protokoll muss Datum und Uhrzeit, Namen beider Parteien, alle Räume mit Zustandsbeschreibung, Zählerstände (Strom, Gas, Wasser, Wärme), Anzahl der Schlüssel und alle festgestellten Mängel enthalten.",
      },
    },
    {
      "@type": "Question",
      name: "Kann ich Mängel nach der Übergabe noch geltend machen?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Mängel, die im Protokoll nicht erfasst wurden, sind nachträglich schwer durchzusetzen. Bei arglistig verschwiegenen Mängeln gilt die Regelverjährung von 3 Jahren. Deshalb ist eine gründliche Protokollierung bei der Übergabe unerlässlich.",
      },
    },
    {
      "@type": "Question",
      name: "Was passiert, wenn der Vermieter kein Protokoll ausstellen will?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Wenn der Vermieter kein Protokoll ausstellen möchte, sollte der Mieter selbst ein Protokoll erstellen, es dem Vermieter zukommen lassen und dessen Quittierung schriftlich anfordern. Fotos und Zeugen sind zusätzliche Beweismittel.",
      },
    },
    {
      "@type": "Question",
      name: "Wie lange ist das Übergabeprotokoll aufzubewahren?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Das Übergabeprotokoll sollte mindestens bis zum Ende der möglichen Verjährungsfristen aufbewahrt werden. Bei Wohnraum beträgt die Verjährungsfrist für Ansprüche aus dem Mietverhältnis in der Regel 3 Jahre.",
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
            <span className="text-gray-700">Wohnungsübergabe Protokoll</span>
          </nav>

          <header className="mb-10">
            <p className="text-teal text-sm font-semibold uppercase tracking-wider mb-3">
              Ratgeber · 9 min Lesezeit · Mieter &amp; Vermieter
            </p>
            <h1 className="text-3xl md:text-4xl font-bold text-navy font-playfair mb-4 leading-tight">
              Wohnungsübergabe Protokoll: Checkliste für die Übergabe
            </h1>
            <p className="text-gray-500 text-sm">
              Februar 2026 · Lukas Schmitz, Gründer einfach verwaltet.
            </p>
          </header>

          {/* Quick Answer Box */}
          <div className="bg-teal/5 border-l-4 border-teal rounded-r-xl p-6 mb-10">
            <p className="font-semibold text-navy mb-2">Kurzantwort</p>
            <p className="text-gray-700">
              Das Wohnungsübergabe Protokoll dokumentiert den Zustand der Wohnung bei Ein- und Auszug.
              Es muss Zählerstände, alle Räume, Mängel, Schlüsselübergabe und die Unterschriften
              beider Parteien enthalten. Das Protokoll ist das wichtigste Beweismittel bei späteren
              Streitigkeiten über Schäden oder Kaution.
            </p>
          </div>

          <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed space-y-6">
            <p>
              Die Wohnungsübergabe ist ein rechtlich bedeutsamer Moment — sowohl beim Einzug als
              auch beim Auszug. Ein lückenloses Protokoll schützt Mieter vor unberechtigten
              Kautionseinbehalten und Vermieter vor der Haftung für Schäden, die sie nicht
              verursacht haben. Dieser Leitfaden zeigt, wie Sie ein rechtssicheres
              Übergabeprotokoll erstellen.
            </p>

            <h2 className="text-2xl font-bold text-navy font-playfair mt-10 mb-4">
              Warum das Protokoll so wichtig ist
            </h2>
            <p>
              Das Übergabeprotokoll ist kein bürokratischer Formalismus — es ist das wichtigste
              Beweismittel bei Streitigkeiten. Ohne Protokoll gilt im Zweifel: Der Vermieter kann
              Schäden nur schwer einem bestimmten Mieter zuordnen; der Mieter kann die ordnungsgemäße
              Rückgabe nicht belegen.
            </p>
            <p>
              Gerichte verlassen sich auf das Protokoll, wenn Vermieter Kautionseinbehalte
              begründen oder Mieter Schadenersatzforderungen zurückweisen wollen. Ein fehlendes
              oder unvollständiges Protokoll kann daher beide Seiten teuer zu stehen kommen.
            </p>

            <div className="bg-amber-50 border border-amber-200 rounded-xl p-4 my-4 text-sm">
              <strong>⚠️ Praxishinweis:</strong> Auch wenn kein gesetzliches Schriftformerfordernis
              gilt, sollte das Protokoll immer schriftlich erstellt und von beiden Parteien
              unterzeichnet werden. Eine digitale Fassung mit Fotos ist besonders gut geeignet.
            </div>

            <h2 className="text-2xl font-bold text-navy font-playfair mt-10 mb-4">
              Pflichtangaben im Übergabeprotokoll
            </h2>
            <p>Diese Angaben gehören in jedes Protokoll:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Datum und Uhrzeit</strong> der Übergabe</li>
              <li><strong>Namen und Adressen</strong> von Vermieter und Mieter</li>
              <li><strong>Anschrift der Wohnung</strong> mit Wohnungsnummer und Stockwerk</li>
              <li><strong>Art der Übergabe:</strong> Einzug oder Auszug</li>
              <li><strong>Zählerstände</strong> für alle Verbraucher (Strom, Gas, Wasser, Wärme)</li>
              <li><strong>Schlüsselübergabe:</strong> Anzahl und Art aller ausgehändigten Schlüssel</li>
              <li><strong>Zustandsbeschreibung aller Räume</strong></li>
              <li><strong>Unterschriften</strong> beider Parteien</li>
            </ul>

            <h2 className="text-2xl font-bold text-navy font-playfair mt-10 mb-4">
              Checkliste: Raum für Raum
            </h2>
            <p>
              Gehen Sie die Wohnung systematisch Raum für Raum durch. Notieren Sie für jeden Raum:
              Wände, Decken, Böden, Fenster, Türen, Einbauteile.
            </p>

            {/* Room by room */}
            <div className="space-y-4 not-prose">
              {[
                {
                  room: "Eingangsbereich / Flur",
                  items: ["Wände und Decke auf Risse und Flecken", "Bodenbelag (Kratzer, Abnutzung)", "Eingangstür: Schloss, Rahmen, Dichtung", "Garderobenhaken, Briefkasteneinsatz"],
                },
                {
                  room: "Wohnzimmer",
                  items: ["Alle Wände und Decke vollständig", "Bodenbelag: Parkett, Fliesen, Teppich", "Fenster: Glas, Rahmen, Griffe, Dichtungen", "Steckdosen und Lichtschalter", "Heizkörper inkl. Thermostat"],
                },
                {
                  room: "Schlafzimmer",
                  items: ["Wände auf Schimmelspuren (besonders Ecken)", "Bodenbelag und Sockelleisten", "Einbauschränke: innen und außen", "Fenster und Rolladen"],
                },
                {
                  room: "Küche",
                  items: ["Einbauküche: alle Schränke, Schubladen, Scharniere", "Herd, Backofen, Dunstabzug: Funktion und Sauberkeit", "Spüle und Armatur: Dichtheit, Flecken", "Arbeitsplatte: Kratzer, Verfärbungen", "Fliesenspiegel: vollständig, keine Risse"],
                },
                {
                  room: "Badezimmer / WC",
                  items: ["Sanitärobjekte: Wanne, Dusche, WC, Waschbecken", "Armaturen auf Dichtheit und Kalkschäden", "Fliesen: komplett, keine Risse", "Silikon-Fugen: Zustand und Schimmel", "Lüftung: Funktion prüfen"],
                },
                {
                  room: "Keller / Abstellraum",
                  items: ["Feuchtigkeit und Schimmelspuren", "Tür und Schloss", "Beleuchtung funktionsfähig"],
                },
              ].map((section) => (
                <div key={section.room} className="bg-white border border-gray-200 rounded-xl p-5">
                  <h3 className="font-semibold text-navy mb-3">{section.room}</h3>
                  <ul className="space-y-2">
                    {section.items.map((item, i) => (
                      <li key={i} className="flex items-start gap-3 text-sm text-gray-700">
                        <svg className="w-4 h-4 text-teal flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            <h2 className="text-2xl font-bold text-navy font-playfair mt-10 mb-4">
              Zählerstände ablesen
            </h2>
            <p>
              Zählerstände sind besonders wichtig für die spätere Nebenkostenabrechnung.
              Notieren Sie exakt:
            </p>
            <div className="bg-white border border-gray-200 rounded-xl overflow-hidden my-6">
              <table className="w-full text-sm">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-4 py-3 text-left font-semibold text-navy">Zähler</th>
                    <th className="px-4 py-3 text-left font-semibold text-navy">Zählernummer</th>
                    <th className="px-4 py-3 text-left font-semibold text-navy">Stand</th>
                    <th className="px-4 py-3 text-left font-semibold text-navy">Einheit</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {[
                    { name: "Strom", einheit: "kWh" },
                    { name: "Gas", einheit: "m³" },
                    { name: "Kaltwasser", einheit: "m³" },
                    { name: "Warmwasser", einheit: "m³" },
                    { name: "Wärme (Heizung)", einheit: "kWh" },
                  ].map((z) => (
                    <tr key={z.name}>
                      <td className="px-4 py-3">{z.name}</td>
                      <td className="px-4 py-3 text-gray-400 italic">________</td>
                      <td className="px-4 py-3 text-gray-400 italic">________</td>
                      <td className="px-4 py-3">{z.einheit}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <h2 className="text-2xl font-bold text-navy font-playfair mt-10 mb-4">
              Fotos als Beweis
            </h2>
            <p>
              Fotos ergänzen das schriftliche Protokoll und sind im Streitfall unersetzlich.
              So dokumentieren Sie richtig:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Jeden Raum vollständig fotografieren (4 Ecken + Decke + Boden)</li>
              <li>Alle festgestellten Mängel aus nächster Nähe fotografieren</li>
              <li>Datum und Uhrzeit in den Kamera-Metadaten sichern</li>
              <li>Fotos mit dem Protokoll zusammen aufbewahren</li>
              <li>Zählerstände fotografieren — mit gut lesbarer Ziffernfolge</li>
            </ul>

            <h2 className="text-2xl font-bold text-navy font-playfair mt-10 mb-4">
              Schlüsselübergabe dokumentieren
            </h2>
            <p>
              Notieren Sie jeden einzelnen Schlüssel nach Typ und Anzahl:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Wohnungsschlüssel (Anzahl)</li>
              <li>Hauseingangsschlüssel (Anzahl)</li>
              <li>Briefkastenschlüssel (Anzahl)</li>
              <li>Kellerschlüssel (Anzahl)</li>
              <li>Garagenschlüssel oder -fernbedienung (Anzahl)</li>
              <li>Sonstige Schlüssel (z.B. Dachboden, Fahrradkeller)</li>
            </ul>

            <div className="bg-amber-50 border border-amber-200 rounded-xl p-4 my-4 text-sm">
              <strong>⚠️ Wichtig:</strong> Wenn ein Mieter bei Auszug nicht alle Schlüssel zurückgibt,
              kann der Vermieter die Kosten für einen Schlosswechsel in Rechnung stellen — auch aus
              der Kaution. Deshalb ist die genaue Dokumentation der Schlüsselanzahl beim Einzug
              so entscheidend.
            </div>

            <h2 className="text-2xl font-bold text-navy font-playfair mt-10 mb-4">
              Rechtliche Bedeutung des Protokolls
            </h2>
            <p>
              Das unterzeichnete Übergabeprotokoll hat folgende rechtliche Wirkung:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>
                <strong>Beweislast umkehren:</strong> Im Streitfall muss derjenige, der Ansprüche
                geltend macht, Abweichungen vom Protokoll beweisen.
              </li>
              <li>
                <strong>Kautionseinbehalt begrenzen:</strong> Vermieter können nur Schäden geltend
                machen, die im Protokoll dokumentiert oder nachweislich nach Einzug entstanden sind.
              </li>
              <li>
                <strong>Normalen Verschleiß ausschließen:</strong> Was als normaler Gebrauchsverschleiß
                dokumentiert ist, kann nicht als Schaden abgezogen werden.
              </li>
            </ul>

            {/* FAQ Section */}
            <h2 className="text-2xl font-bold text-navy font-playfair mt-10 mb-4">
              Häufig gestellte Fragen
            </h2>

            <div className="space-y-6 not-prose">
              <div className="bg-white border border-gray-200 rounded-xl p-5">
                <h3 className="font-semibold text-navy mb-2">Ist ein Wohnungsübergabe Protokoll gesetzlich vorgeschrieben?</h3>
                <p className="text-gray-600 text-sm">
                  Ein Wohnungsübergabe Protokoll ist gesetzlich nicht vorgeschrieben, aber dringend empfohlen. Es ist das einzige Beweismittel bei Streitigkeiten über den Zustand der Wohnung bei Ein- und Auszug.
                </p>
              </div>

              <div className="bg-white border border-gray-200 rounded-xl p-5">
                <h3 className="font-semibold text-navy mb-2">Was muss im Wohnungsübergabe Protokoll stehen?</h3>
                <p className="text-gray-600 text-sm">
                  Das Protokoll muss Datum und Uhrzeit, Namen beider Parteien, alle Räume mit Zustandsbeschreibung, Zählerstände (Strom, Gas, Wasser, Wärme), Anzahl der Schlüssel und alle festgestellten Mängel enthalten.
                </p>
              </div>

              <div className="bg-white border border-gray-200 rounded-xl p-5">
                <h3 className="font-semibold text-navy mb-2">Kann ich Mängel nach der Übergabe noch geltend machen?</h3>
                <p className="text-gray-600 text-sm">
                  Mängel, die im Protokoll nicht erfasst wurden, sind nachträglich schwer durchzusetzen. Bei arglistig verschwiegenen Mängeln gilt die Regelverjährung von 3 Jahren. Deshalb ist eine gründliche Protokollierung bei der Übergabe unerlässlich.
                </p>
              </div>

              <div className="bg-white border border-gray-200 rounded-xl p-5">
                <h3 className="font-semibold text-navy mb-2">Was passiert, wenn der Vermieter kein Protokoll ausstellen will?</h3>
                <p className="text-gray-600 text-sm">
                  Wenn der Vermieter kein Protokoll ausstellen möchte, sollte der Mieter selbst ein Protokoll erstellen, es dem Vermieter zukommen lassen und dessen Quittierung schriftlich anfordern. Fotos und Zeugen sind zusätzliche Beweismittel.
                </p>
              </div>

              <div className="bg-white border border-gray-200 rounded-xl p-5">
                <h3 className="font-semibold text-navy mb-2">Wie lange ist das Übergabeprotokoll aufzubewahren?</h3>
                <p className="text-gray-600 text-sm">
                  Das Übergabeprotokoll sollte mindestens bis zum Ende der möglichen Verjährungsfristen aufbewahrt werden. Bei Wohnraum beträgt die Verjährungsfrist für Ansprüche aus dem Mietverhältnis in der Regel 3 Jahre.
                </p>
              </div>
            </div>

            <h2 className="text-2xl font-bold text-navy font-playfair mt-10 mb-4">
              Fazit: Kein Aufwand, kein Streit
            </h2>
            <p>
              Ein sorgfältig ausgefülltes Übergabeprotokoll dauert 30 bis 60 Minuten — und spart
              im Streitfall möglicherweise Monate und tausende Euro. Gehen Sie die Checkliste
              konsequent durch, fotografieren Sie alles und lassen Sie das Protokoll von beiden
              Seiten unterschreiben.
            </p>
            <p>
              Professionelle Hausverwaltungen führen Übergaben strukturiert durch und stellen
              rechtssichere Protokolle aus — damit weder Mieter noch Vermieter unangenehme
              Überraschungen erleben.
            </p>
          </div>

          <div className="mt-12 bg-teal/10 border border-teal/20 rounded-xl p-8">
            <h3 className="text-xl font-bold text-navy mb-2 font-playfair">
              Lassen Sie einfach verwaltet.
            </h3>
            <p className="text-gray-600 mb-4">
              Ihre Immobilie professionell verwalten. Rechtssichere Wohnungsübergaben,
              vollständige Dokumentation und kein Kautions-Ärger mehr.
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
