import type { Metadata } from "next";
import Link from "next/link";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

export const metadata: Metadata = {
  title: "Hausordnung Mietwohnung: Was ist erlaubt und was nicht? (2026)",
  description:
    "Hausordnung in der Mietwohnung: Rechtsgrundlagen, was Vermieter vorschreiben dürfen (BVerfG), Ruhezeiten, Treppenhaus, Haustiere und Konsequenzen bei Verstößen.",
  keywords:
    "Hausordnung Mietwohnung, Hausordnung erlaubt, Ruhezeiten Mietwohnung, Haustiere Mietwohnung, Hausordnung Verstoß",
  openGraph: {
    title: "Hausordnung Mietwohnung: Was ist erlaubt und was nicht?",
    description:
      "Vermieter und Mieter: Was darf in einer Hausordnung stehen? Rechte, Pflichten und häufige Konflikte erklärt.",
    url: "https://einfach-verwaltet.de/blog/hausordnung-mietwohnung",
    siteName: "einfach verwaltet.",
    locale: "de_DE",
    type: "article",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Hausordnung Mietwohnung: Was ist erlaubt und was nicht?",
  description:
    "Die Hausordnung regelt das Zusammenleben im Mietshaus. Wir erklären, was Vermieter vorschreiben dürfen und welche Rechte Mieter haben.",
  author: { "@type": "Organization", name: "einfach verwaltet." },
  publisher: {
    "@type": "Organization",
    name: "einfach verwaltet.",
    logo: { "@type": "ImageObject", url: "https://einfach-verwaltet.de/logo.png" },
  },
  datePublished: "2026-02-26",
  inLanguage: "de",
  url: "https://einfach-verwaltet.de/blog/hausordnung-mietwohnung",
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
            <span className="text-gray-700">Hausordnung Mietwohnung</span>
          </nav>

          <header className="mb-10">
            <p className="text-teal text-sm font-semibold uppercase tracking-wider mb-3">
              Ratgeber · 9 min Lesezeit · Mietrecht
            </p>
            <h1 className="text-3xl md:text-4xl font-bold text-navy font-playfair mb-4 leading-tight">
              Hausordnung Mietwohnung: Was ist erlaubt und was nicht?
            </h1>
            <p className="text-gray-500 text-sm">Februar 2026 · einfach verwaltet.</p>
          </header>

          <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed space-y-6">
            <p>
              Die <strong>Hausordnung</strong> soll das Zusammenleben im Mietshaus regeln — doch 
              oft entstehen Konflikte darüber, was erlaubt ist und was nicht. Dürfen Haustiere 
              grundsätzlich verboten werden? Was gilt bei den Ruhezeiten? Und wer entscheidet, 
              wie das Treppenhaus genutzt wird? Dieser Leitfaden klärt Vermieter und Mieter über 
              Rechte und Pflichten auf.
            </p>

            <div className="bg-teal/5 border-l-4 border-teal rounded-r-xl p-5 my-6">
              <p className="font-semibold text-navy mb-2">Für beide Seiten relevant</p>
              <p className="text-sm">
                Dieser Artikel richtet sich an <strong>Mieter und Vermieter</strong>. Als Mieter 
                erfahren Sie, welche Vorschriften rechtens sind. Als Vermieter lernen Sie, welche 
                Regelungen durchsetzbar sind — und welche nicht.
              </p>
            </div>

            <h2 className="text-2xl font-bold text-navy font-playfair mt-10 mb-4">
              Was ist die Hausordnung und wo ist sie verankert?
            </h2>
            <p>
              Die Hausordnung ist eine <strong>Nebenabrede zum Mietvertrag</strong>, die das 
              Zusammenleben der Bewohner in einem Mehrfamilienhaus regelt. Sie ist nicht im 
              BGB explizit geregelt, sondern ergibt sich aus dem Mietverhältnis und der 
              allgemeinen Vertragspflicht der Parteien.
            </p>
            <p>
              Die Hausordnung kann direkt in den Mietvertrag aufgenommen oder als Anlage 
              beigefügt werden. Bei Eigentümergemeinschaften (WEG) kann sie auch durch 
              Beschluss der Eigentümerversammlung für das gesamte Haus festgelegt werden.
            </p>

            <h3 className="text-xl font-semibold text-navy mt-6 mb-2">
              Rechtliche Grundlagen
            </h3>
            <ul className="list-disc pl-6 space-y-2">
              <li>
                <strong>§ 241 BGB:</strong> Schuldverhältnis erfordert Rücksicht auf die 
                Rechte, Rechtsgüter und Interessen der anderen Partei
              </li>
              <li>
                <strong>§ 242 BGB:</strong> Treu und Glauben bei der Vertragserfüllung
              </li>
              <li>
                <strong>§ 535 BGB:</strong> Vermieterpflicht zur Gebrauchsgewährung, 
                Mieterpflicht zum vertragsmäßigen Gebrauch
              </li>
            </ul>

            <h2 className="text-2xl font-bold text-navy font-playfair mt-10 mb-4">
              Was darf in einer Hausordnung stehen?
            </h2>
            <p>
              Eine wirksame Hausordnung muss den Grundsatz der <strong>Verhältnismäßigkeit</strong> 
              beachten. Sie darf den Mieter nicht unangemessen benachteiligen und muss einem 
              berechtigten Interesse des Vermieters dienen. Folgende Regelungen sind grundsätzlich 
              zulässig:
            </p>

            <h3 className="text-xl font-semibold text-navy mt-6 mb-2">
              Erlaubte Regelungen (zulässig)
            </h3>
            <div className="grid md:grid-cols-2 gap-4 my-6 not-prose">
              {[
                { title: "Ruhezeiten", text: "Nachtruhe 22-6 Uhr, Mittagsruhe 13-15 Uhr an Werktagen" },
                { title: "Treppenhausnutzung", text: "Kein Abstellen von Gegenständen, Gehweg freihalten" },
                { title: "Müllentsorgung", text: "Trennung nach Müllarten, zeitgerechte Entsorgung" },
                { title: "Kellernutzung", text: "Nutzung nur für zugewiesenen Kellerraum" },
                { title: "Gartenpflege", text: "Regelung zur gemeinschaftlichen Nutzung und Pflege" },
                { title: "Fahrzeuge", text: "Parken nur auf zugewiesenen Stellplätzen" },
              ].map((item) => (
                <div key={item.title} className="bg-green-50 border border-green-200 rounded-xl p-4">
                  <div className="font-semibold text-green-800 mb-1 flex items-center gap-2">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    {item.title}
                  </div>
                  <p className="text-sm text-gray-700">{item.text}</p>
                </div>
              ))}
            </div>

            <h2 className="text-2xl font-bold text-navy font-playfair mt-10 mb-4">
              Was darf NICHT in einer Hausordnung stehen?
            </h2>
            <p>
              Das Bundesverfassungsgericht (BVerfG) und die höchstrichterliche Rechtsprechung 
              haben klare Grenzen gezogen. Bestimmte Regelungen verstoßen gegen das 
              <strong> Grundrecht auf informationelle Selbstbestimmung</strong> oder die 
              <strong> Verhältnismäßigkeit</strong>:
            </p>

            <h3 className="text-xl font-semibold text-navy mt-6 mb-2">
              Unzulässige Regelungen (nicig)
            </h3>
            <div className="grid md:grid-cols-2 gap-4 my-6 not-prose">
              {[
                { title: "Generelles Tierverbot", text: "Grundsätzliches Verbot von Haustieren ist unzulässig (BVerfG)" },
                { title: "Besuchsmeldung", text: "Pflicht zur Anmeldung von Besuchern verstößt gegen Privatsphäre" },
                { title: "Wäscheaufhängeverbot", text: "Balkon-Wäsche bei angemessener Optik ist erlaubt" },
                { title: "Kinderlärmverbot", text: "Kindergemäßer Lärm ist im Allgemeinbereich nicht zu unterbinden" },
                { title: "Fernsehverbot", text: "Generelle Lautstärkebeschränkungen für TV/Radio sind unangemessen" },
                { title: "Schlüsselpflicht", text: "Zwingende Nachbarschaftsschlüssel dürfen nicht gefordert werden" },
              ].map((item) => (
                <div key={item.title} className="bg-red-50 border border-red-200 rounded-xl p-4">
                  <div className="font-semibold text-red-800 mb-1 flex items-center gap-2">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                    {item.title}
                  </div>
                  <p className="text-sm text-gray-700">{item.text}</p>
                </div>
              ))}
            </div>

            <div className="bg-amber-50 border border-amber-200 rounded-xl p-4 my-4 text-sm">
              <strong>⚖️ BVerfG-Entscheidung zum Tierhaltungsverbot:</strong> Das Bundesverfassungsgericht 
              hat bereits 1980 (BVerfGE 53, 366) entschieden, dass ein generelles Haustierverbot in 
              der Hausordnung gegen das Grundrecht auf allgemeine Handlungsfreiheit verstößt. Ein 
              Kleintier (z.B. Hamster, Meerschweinchen, Zierfische) darf daher grundsätzlich gehalten 
              werden.
            </div>

            <h2 className="text-2xl font-bold text-navy font-playfair mt-10 mb-4">
              Ruhezeiten in der Mietwohnung: Was gilt wirklich?
            </h2>
            <p>
              Ruhezeiten sind ein Dauerbrenner in der Hausordnung. Die typische Regelung sieht 
              <strong> Nachtruhe von 22:00 bis 06:00 Uhr</strong> und oft <strong>Mittagsruhe 
              von 13:00 bis 15:00 Uhr</strong> vor. Doch was ist rechtlich bindend?
            </p>

            <h3 className="text-xl font-semibold text-navy mt-6 mb-2">
              Verbindliche Ruhezeiten
            </h3>
            <p>
              Die in der Hausordnung festgelegten Ruhezeiten sind verbindlich, sofern sie 
              verhältnismäßig sind. Die genannten Zeiten (22-6 Uhr, 13-15 Uhr) gelten als 
              angemessen und werden von Gerichten anerkannt.
            </p>

            <h3 className="text-xl font-semibold text-navy mt-6 mb-2">
              Was ist während der Ruhezeit erlaubt?
            </h3>
            <ul className="list-disc pl-6 space-y-2">
              <li>Normales Wohnen (Kochen, Fernsehen in angemessener Lautstärke)</li>
              <li>Besuchsempfang (ohne übermäßigen Lärm)</li>
              <li>Notwendige Reparaturen bei akuten Schäden</li>
              <li>Notruf und medizinische Versorgung</li>
            </ul>

            <h3 className="text-xl font-semibold text-navy mt-6 mb-2">
              Was ist während der Ruhezeit NICHT erlaubt?
            </h3>
            <ul className="list-disc pl-6 space-y-2">
              <li>Laute Musik, Partys, Fernsehen mit hoher Lautstärke</li>
              <li>Bohren, Hämmern, Staubsaugen (außer bei akutem Bedarf)</li>
              <li>Laute Renovierungsarbeiten</li>
              <li>Piano- oder Instrumentalüben (je nach Dauer und Lautstärke)</li>
            </ul>

            <div className="bg-amber-50 border border-amber-200 rounded-xl p-4 my-4 text-sm">
              <strong>💡 Hinweis:</strong> Kinderlärm ist kein "vermeidbarer Lärm" und kann daher 
              nicht generell verboten werden. Allerdings sind Eltern verpflichtet, ihre Kinder 
              zu angemessenem Verhalten anzuhalten und übermäßige Lärmbelästigung zu vermeiden.
            </div>

            <h2 className="text-2xl font-bold text-navy font-playfair mt-10 mb-4">
              Treppenhaus: Nutzung und Verbotene
            </h2>
            <p>
              Das Treppenhaus ist <strong>gemeinschaftlicher Fluchtweg</strong> und muss jederzeit 
              frei zugänglich sein. Die Hausordnung kann hier sinnvolle Regelungen treffen.
            </p>

            <h3 className="text-xl font-semibold text-navy mt-6 mb-2">
              Was Vermieter vorschreiben dürfen
            </h3>
            <ul className="list-disc pl-6 space-y-2">
              <li>Verbot von Fahrrädern, Kinderwagen und Abfall im Treppenhaus</li>
              <li>Verbot von Fußmatten (brandgefährlich)</li>
              <li>Pflicht zur Sauberhaltung des eigenen Zugangsbereichs</li>
              <li>Regelungen zur Beleuchtung (z.B. automatisches Licht)</li>
            </ul>

            <h3 className="text-xl font-semibold text-navy mt-6 mb-2">
              Was NICHT verboten werden kann
            </h3>
            <ul className="list-disc pl-6 space-y-2">
              <li>Kurzzeitiges Abstellen bei Umzug oder Lieferung</li>
              <li>Dekoration in angemessenem Rahmen (z.B. Blumenkasten am Fensterbrett)</li>
              <li>Installation von Sicherheitseinrichtungen (z.B. Türspion)</li>
            </ul>

            <h2 className="text-2xl font-bold text-navy font-playfair mt-10 mb-4">
              Haustiere in der Mietwohnung: Was ist wirklich erlaubt?
            </h2>
            <p>
              Die Haltung von Haustieren ist ein häufiger Konfliktpunkt. Nach der Rechtsprechung 
              des BVerfG und des BGH gibt es klare Regelungen.
            </p>

            <h3 className="text-xl font-semibold text-navy mt-6 mb-2">
              Kleintiere: Grundsätzlich erlaubt
            </h3>
            <p>
              Kleintiere wie <strong>Hamster, Meerschweinchen, Kaninchen, Zierfische oder Vögel</strong> 
              dürfen grundsätzlich gehalten werden, auch wenn die Hausordnung ein generelles 
              Tierverbot enthält. Ein Verbot verstößt gegen die allgemeine Handlungsfreiheit 
              und ist daher unwirksam.
            </p>

            <h3 className="text-xl font-semibold text-navy mt-6 mb-2">
              Hunde und Katzen: Einzelfallentscheidung
            </h3>
            <p>
              Bei Hunden und Katzen gilt ein differenzierteres Bild. Ein generelles Verbot ist 
              unwirksam, aber der Vermieter kann <strong>zustimmenspflichtig</strong> sein. Das 
              bedeutet: Der Mieter muss den Wunsch zur Tierhaltung anmelden und der Vermieter 
              kann aus wichtigem Grund widersprechen.
            </p>
            <p>
              Wichtige Gründe für einen Widerspruch können sein:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Besondere Gefährdung anderer Mieter (z.B. bei Allergien)</li>
              <li>Übermäßige Belästigung durch Lärm oder Geruch</li>
              <li>Besondere Gefahr für die Substanz der Immobilie</li>
              <li>Verstoß gegen geltende Satzung (z.B. gefährliche Hunderassen)</li>
            </ul>

            <h2 className="text-2xl font-bold text-navy font-playfair mt-10 mb-4">
              Was passiert bei Verstößen gegen die Hausordnung?
            </h2>
            <p>
              Verstöße gegen die Hausordnung können ernsthafte Konsequenzen haben — sowohl für 
              Mieter als auch für Vermieter, die ihre Rechte nicht durchsetzen.
            </p>

            <h3 className="text-xl font-semibold text-navy mt-6 mb-2">
              Mögliche Konsequenzen für Mieter
            </h3>
            <div className="bg-white border border-gray-200 rounded-xl p-5 my-4">
              <ol className="space-y-3 not-prose">
                {[
                  "Abmahnung durch Vermieter/Hausverwaltung",
                  "Aufforderung zur Unterlassung",
                  "Bei Wiederholung: Ordentliche oder außerordentliche Kündigung",
                  "Schadensersatzansprüche bei Sachbeschädigung",
                  "Auskunftsanspruch bei Verdacht auf Verstoß",
                ].map((item, i) => (
                  <li key={i} className="flex gap-4 items-start">
                    <div className="w-6 h-6 bg-navy text-white rounded-full flex items-center justify-center flex-shrink-0 text-sm font-bold">{i + 1}</div>
                    <span className="text-sm text-gray-700">{item}</span>
                  </li>
                ))}
              </ol>
            </div>

            <h3 className="text-xl font-semibold text-navy mt-6 mb-2">
              Eskalationsstufen bei Verstößen
            </h3>
            <p>
              Bei wiederholten oder schwerwiegenden Verstößen kann der Vermieter schrittweise 
              vorgehen:
            </p>
            <ol className="list-decimal pl-6 space-y-2">
              <li><strong>Erste Abmahnung:</strong> Schriftliche Mahnung mit Frist zur Unterlassung</li>
              <li><strong>Zweite Abmahnung:</strong> Bei Wiederholung mit Hinweis auf Kündigungsfolgen</li>
              <li><strong>Kündigung:</strong> Nach erfolgloser zweiter Abmahnung ist eine fristlose Kündigung möglich</li>
            </ol>

            <div className="bg-amber-50 border border-amber-200 rounded-xl p-4 my-4 text-sm">
              <strong>⚠️ Wichtig:</strong> Bei der Kündigung wegen Hausordnungsverstößen muss 
              der Vermieter strikte Fristen und Formvorschriften beachten. Eine Kündigung ohne 
              vorherige Abmahnung ist in der Regel unwirksam.
            </div>

            <h3 className="text-xl font-semibold text-navy mt-6 mb-2">
              Rechte des Mieters bei ungerechtfertigten Vorwürfen
            </h3>
            <p>
              Mieter haben ebenfalls Rechte. Wenn der Vermieter unberechtigt Abmahnungen ausspricht 
              oder unzulässige Hausordnungsbestimmungen durchsetzen will, kann der Mieter:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Widerspruch gegen die Abmahnung einlegen</li>
              <li>Negative Feststellungsklage erheben</li>
              <li>Bei Kündigung Kündigungsschutzklage einreichen</li>
              <li>Mietminderung bei unzumutbarer Belästigung durch andere Mieter verlangen</li>
            </ul>

            <h2 className="text-2xl font-bold text-navy font-playfair mt-10 mb-4">
              Fazit: Verhältnismäßigkeit ist der Maßstab
            </h2>
            <p>
              Die Hausordnung soll das Zusammenleben erleichtern, nicht erschweren. Sie muss 
              stets den Grundsatz der <strong>Verhältnismäßigkeit</strong> wahren und darf weder 
              Mieter unangemessen einschränken noch Vermieter übermäßig belasten.
            </p>
            <p>
              Als Vermieter sollten Sie Ihre Hausordnung regelmäßig prüfen und an aktuelle 
              Rechtsprechung anpassen. Als Mieter sollten Sie Ihre Rechte kennen und berechtigte 
              Interessen vertreten. Bei Konflikten ist oft ein konstruktiver Dialog der beste 
              Weg — bevor es zu rechtlichen Schritten kommt.
            </p>
          </div>

          <div className="mt-12 bg-teal/10 border border-teal/20 rounded-xl p-8">
            <h3 className="text-xl font-bold text-navy mb-2 font-playfair">
              Hausordnung professionell verwalten
            </h3>
            <p className="text-gray-600 mb-4">
              einfach verwaltet. hilft Vermietern bei der Erstellung rechtskonformer Hausordnungen 
              und der Durchsetzung bei Verstößen. Für Mieter prüfen wir die Wirksamkeit von 
              Hausordnungsbestimmungen und vertreten berechtigte Interessen.
            </p>
            <Link
              href="/anfrage"
              className="inline-block bg-teal text-white font-semibold px-6 py-3 rounded-lg hover:bg-teal/90 transition-colors"
            >
              Jetzt unverbindlich anfragen
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
