import type { Metadata } from "next";
import Link from "next/link";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

export const metadata: Metadata = {
  title: "Verwaltervertrag: Was muss ein guter Hausverwaltungsvertrag enthalten? (2026)",
  description:
    "Verwaltervertrag Checkliste: §34c GewO Pflichten, Leistungsumfang, Vergütung, Kündigung, Haftung. Red Flags erkennen und den richtigen Hausverwalter wählen.",
  keywords:
    "Verwaltervertrag Hausverwaltung, Hausverwaltungsvertrag Muster, Verwaltervertrag Pflichten, Hausverwalter wechseln Vertrag",
  openGraph: {
    title: "Verwaltervertrag: Was muss ein guter Hausverwaltungsvertrag enthalten?",
    description:
      "Checkliste für den Verwaltervertrag: Diese Klauseln müssen drin sein, diese Red Flags sollten Sie meiden.",
    url: "https://einfach-verwaltet.de/blog/verwaltervertrag-hausverwaltung",
    siteName: "einfach verwaltet.",
    locale: "de_DE",
    type: "article",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Verwaltervertrag: Was muss ein guter Hausverwaltungsvertrag enthalten?",
  description:
    "Der komplette Leitfaden zum Verwaltervertrag: Pflichtangaben, Klauseln, Kündigung und worauf beim Verwalterwechsel zu achten ist.",
  author: { "@type": "Organization", name: "einfach verwaltet." },
  publisher: {
    "@type": "Organization",
    name: "einfach verwaltet.",
    logo: { "@type": "ImageObject", url: "https://einfach-verwaltet.de/logo.png" },
  },
  datePublished: "2026-02-26",
  inLanguage: "de",
  url: "https://einfach-verwaltet.de/blog/verwaltervertrag-hausverwaltung",
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
            <span className="text-gray-700">Verwaltervertrag</span>
          </nav>

          <header className="mb-10">
            <p className="text-teal text-sm font-semibold uppercase tracking-wider mb-3">
              Ratgeber · 10 min Lesezeit · Verträge
            </p>
            <h1 className="text-3xl md:text-4xl font-bold text-navy font-playfair mb-4 leading-tight">
              Verwaltervertrag: Was muss ein guter Hausverwaltungsvertrag enthalten?
            </h1>
            <p className="text-gray-500 text-sm">Februar 2026 · einfach verwaltet.</p>
          </header>

          <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed space-y-6">
            <p>
              Der <strong>Verwaltervertrag</strong> ist die Grundlage der Zusammenarbeit zwischen 
              Eigentümer und Hausverwaltung. Doch was muss ein guter Vertrag enthalten? Welche 
              Klauseln sind Pflicht? Und woran erkennen Sie problematische Verträge, bevor Sie 
              unterschreiben? Dieser Leitfaden gibt alle Antworten — inklusive einer praktischen 
              Checkliste.
            </p>

            <div className="bg-teal/5 border-l-4 border-teal rounded-r-xl p-5 my-6">
              <p className="font-semibold text-navy mb-2">Wichtig vorab</p>
              <p className="text-sm">
                Ein Verwaltervertrag ist kein Standardmietvertrag — er regelt komplexe, 
                langfristige Dienstleistungen mit erheblichen finanziellen Folgen. Nehmen Sie 
                sich Zeit zur Prüfung. Bei einfach verwaltet. zeigen wir Ihnen den Vertrag 
                vorab transparent — keine Überraschungen, keine versteckten Klauseln.
              </p>
            </div>

            <h2 className="text-2xl font-bold text-navy font-playfair mt-10 mb-4">
              § 34c GewO: Die Pflicht zur Erlaubnis
            </h2>
            <p>
              Eine der wichtigsten Voraussetzungen für einen wirksamen Verwaltervertrag: 
              Der Verwalter muss eine <strong>§ 34c GewO-Erlaubnis</strong> besitzen. Diese 
              Gewerbeerlaubnis ist Pflicht für alle gewerblichen Verwalter und stellt sicher, 
              dass der Verwalter über die notwendige Sachkunde und Zuverlässigkeit verfügt.
            </p>

            <h3 className="text-xl font-semibold text-navy mt-6 mb-2">
              Was prüft die IHK bei § 34c?
            </h3>
            <ul className="list-disc pl-6 space-y-2">
              <li>
                <strong>Sachkunde:</strong> Nachweis durch Prüfung, Ausbildung oder mehrjährige 
                praktische Tätigkeit
              </li>
              <li>
                <strong>Zuverlässigkeit:</strong> Keine strafrechtlichen Verurteilungen, keine 
                Insolvenzverschleppung
              </li>
              <li>
                <strong>Finanzielle Sicherheit:</strong> Nachweis ausreichender finanzieller 
                Mittel für den Geschäftsbetrieb
              </li>
            </ul>

            <div className="bg-amber-50 border border-amber-200 rounded-xl p-4 my-4 text-sm">
              <strong>⚠️ Warnung:</strong> Ein Verwalter ohne § 34c GewO-Erlaubnis arbeitet 
              <strong> schwarz</strong>. Der Vertrag ist dann nichtig, geleistete Zahlungen können 
              zurückverlangt werden. Lassen Sie sich die Erlaubnis immer vorlegen!
            </div>

            <h2 className="text-2xl font-bold text-navy font-playfair mt-10 mb-4">
              Pflichtangaben im Verwaltervertrag
            </h2>
            <p>
              Ein ordentlicher Verwaltervertrag muss bestimmte Mindestangaben enthalten. Fehlen 
              diese, ist der Vertrag unvollständig oder sogar unwirksam.
            </p>

            <h3 className="text-xl font-semibold text-navy mt-6 mb-2">
              1. Vertragsparteien
            </h3>
            <ul className="list-disc pl-6 space-y-2">
              <li>Vollständiger Name und Anschrift des Eigentümers/Vermieters</li>
              <li>Firma und Rechtsform der Hausverwaltung</li>
              <li>Vertretungsberechtigte Personen der Verwaltung</li>
              <li>Anschrift und Kontaktdaten beider Seiten</li>
            </ul>

            <h3 className="text-xl font-semibold text-navy mt-6 mb-2">
              2. Vertragsgegenstand (Leistungsumfang)
            </h3>
            <p>
              Der Vertrag muss präzise definieren, <strong>welche Leistungen</strong> die 
              Hausverwaltung erbringt. Undurchsichtige Formulierungen wie "alle üblichen 
              Verwaltungsleistungen" sind problematisch.
            </p>
            <div className="bg-white border border-gray-200 rounded-xl p-5 my-4">
              <p className="font-semibold text-navy mb-2">Typischer Leistungsumfang:</p>
              <ul className="space-y-2 not-prose text-sm">
                {[
                  "Mieter-Akquise und -auswahl (inkl. Bonitätsprüfung)",
                  "Mietvertragsgestaltung und -abschluss",
                  "Überwachung der Mietzahlungen und Mahnwesen",
                  "Nebenkostenabrechnung ( jährlich)",
                  "Koordination von Instandhaltung und Reparaturen",
                  "Kommunikation mit Mietern",
                  "Jahresabrechnung und Steuerunterlagen",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <svg className="w-4 h-4 text-teal flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <h3 className="text-xl font-semibold text-navy mt-6 mb-2">
              3. Vergütung
            </h3>
            <p>
              Die Vergütung muss klar und transparent geregelt sein. Typische Modelle:
            </p>
            <div className="not-prose overflow-x-auto my-6">
              <table className="w-full border-collapse text-sm">
                <thead>
                  <tr className="bg-navy text-white">
                    <th className="px-4 py-3 text-left rounded-tl-lg">Vergütungsmodell</th>
                    <th className="px-4 py-3 text-center">Typischer Betrag</th>
                    <th className="px-4 py-3 text-left rounded-tr-lg">Bemerkung</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    ["Pauschal pro Einheit/Monat", "€24-34", "Am weitesten verbreitet"],
                    ["Prozentual der Kaltmiete", "2-4%", "Selten bei Wohnimmobilien"],
                    ["Pauschal plus Provision", "€20 + Mieterfindung", "Bei hoher Fluktuation"],
                    ["Stundensatz für Sonderaufgaben", "€60-120/h", "Zusätzlich zur Grundvergütung"],
                  ].map(([modell, betrag, bem], i) => (
                    <tr key={modell} className={i % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                      <td className="px-4 py-3 font-medium text-navy border-b border-gray-100">{modell}</td>
                      <td className="px-4 py-3 text-center border-b border-gray-100">{betrag}</td>
                      <td className="px-4 py-3 text-sm border-b border-gray-100">{bem}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <h3 className="text-xl font-semibold text-navy mt-6 mb-2">
              4. Zahlungsmodalitäten
            </h3>
            <ul className="list-disc pl-6 space-y-2">
              <li>Rechnungsstellung (monatlich, quartalsweise, jährlich?)</li>
              <li>Zahlungsziel (typisch: 14 Tage)</li>
              <li>Verzugszinsen bei Zahlungsverzug</li>
              <li>Zahlungsmethode (Überweisung, Lastschrift)</li>
            </ul>

            <h2 className="text-2xl font-bold text-navy font-playfair mt-10 mb-4">
              Checkliste: Was ein guter Verwaltervertrag enthalten muss
            </h2>
            <p>
              Nutzen Sie diese Checkliste, um jeden Verwaltervertrag systematisch zu prüfen. 
              Je mehr Punkte erfüllt sind, desto transparenter und sicherer ist der Vertrag.
            </p>

            <div className="bg-white border border-gray-200 rounded-xl p-5 my-6">
              <h3 className="text-lg font-semibold text-navy mb-4">✅ Pflichtklauseln-Checkliste</h3>
              <div className="space-y-3 not-prose">
                {[
                  { cat: "Grundlagen", items: [
                    "Nennung der Vertragsparteien mit vollständigen Daten",
                    "Nachweis § 34c GewO-Erlaubnis der Verwaltung",
                    "Genaue Bezeichnung der zu verwaltenden Objekte",
                  ]},
                  { cat: "Leistungen", items: [
                    "Detaillierter Leistungskatalog (nicht nur 'übliche Leistungen')",
                    "Klare Abgrenzung: Was ist inklusive, was kostet extra?",
                    "Reaktionszeiten für Standardanfragen und Notfälle",
                    "Berichtspflichten (wie oft, in welcher Form?)",
                  ]},
                  { cat: "Vergütung", items: [
                    "Klare Vergütungsvereinbarung ohne versteckte Klauseln",
                    "Transparente Darstellung aller Kostenpositionen",
                    "Keine Mindestlaufzeit ohne Ausstiegsmöglichkeit",
                    "Regelung zur Preisanpassung (maximal jährlich, nachvollziehbar)",
                  ]},
                  { cat: "Kündigung", items: [
                    "Ordentliche Kündigungsfristen (3 Monate Standard)",
                    "Außerordentliche Kündigung bei wichtigem Grund",
                    "Übergabeprozess und Aktenübergabe geregelt",
                    "Keine Kündigungsausschlüsse oder automatische Verlängerungen",
                  ]},
                  { cat: "Haftung", items: [
                    "Haftungsregelung bei Pflichtverletzungen",
                    "Nachweis Berufshaftpflichtversicherung",
                    "Keine pauschale Haftungsausschlussklauseln",
                    "Vermögenssorge-Pflichten klar definiert",
                  ]},
                ].map((group) => (
                  <div key={group.cat} className="border-t border-gray-100 pt-3 first:border-t-0 first:pt-0">
                    <p className="font-semibold text-navy text-sm mb-2">{group.cat}</p>
                    <ul className="space-y-1">
                      {group.items.map((item, i) => (
                        <li key={i} className="flex items-start gap-2 text-sm">
                          <input type="checkbox" className="mt-0.5" readOnly />
                          <span className="text-gray-600">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>

            <h2 className="text-2xl font-bold text-navy font-playfair mt-10 mb-4">
              Red Flags: Diese Klauseln sollten Sie meiden
            </h2>
            <p>
              Manche Vertragsklauseln sind Warnsignale für problematische Verwalter. Achten Sie 
              auf diese Red Flags:
            </p>

            <div className="grid md:grid-cols-2 gap-4 my-6 not-prose">
              {[
                { title: "Lange Mindestlaufzeiten", text: "Verträge mit 3-5 Jahren Mindestlaufzeit ohne Ausstiegsmöglichkeit sind unüblich und binden Sie zu stark" },
                { title: "Automatische Verlängerung", text: "Stillschweigende Verlängerung um weitere Jahre bei Nichtkündigung ist problematisch" },
                { title: "Unklare Vergütung", text: '"Übliche Vergütung" oder "nach Aufwand" ohne Rahmen sind undurchsichtig und Konfliktpotenzial' },
                { title: "Einseitige Kündigungsrechte", text: "Wenn nur die Verwaltung kündigen kann, aber Sie nicht — Vorsicht!" },
                { title: "Pauschale Haftungsausschlüsse", text: "Haftungsausschluss für alle Pflichtverletzungen ist unwirksam und unseriös" },
                { title: "Vollmachten ohne Einschränkung", text: "Unbegrenzte Vollmachten ohne Ihre Zustimmung bei wichtigen Entscheidungen" },
              ].map((item) => (
                <div key={item.title} className="bg-red-50 border border-red-200 rounded-xl p-4">
                  <div className="font-semibold text-red-800 mb-1 flex items-center gap-2">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                    </svg>
                    {item.title}
                  </div>
                  <p className="text-sm text-gray-700">{item.text}</p>
                </div>
              ))}
            </div>

            <h2 className="text-2xl font-bold text-navy font-playfair mt-10 mb-4">
              Kündigung: Ihre Rechte als Auftraggeber
            </h2>
            <p>
              Die Kündigungsregelung ist eine der wichtigsten Vertragsklauseln. Sie bestimmt, 
              wie einfach Sie den Verwalter wechseln können, wenn Sie unzufrieden sind.
            </p>

            <h3 className="text-xl font-semibold text-navy mt-6 mb-2">
              Ordentliche Kündigung
            </h3>
            <p>
              Die <strong>ordentliche Kündigung</strong> erfolgt ohne Angabe von Gründen. 
              Typische Fristen im Verwaltervertrag:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Standard:</strong> 3 Monate zum Monatsende</li>
              <li><strong>Langfristige Verträge:</strong> Bis zu 6 Monate möglich</li>
              <li><strong>Erste Kündigung:</strong> Ofter kürzere Frist (z.B. 1 Monat im ersten Jahr)</li>
            </ul>

            <h3 className="text-xl font-semibold text-navy mt-6 mb-2">
              Außerordentliche Kündigung
            </h3>
            <p>
              Bei <strong>wichtigem Grund</strong> kann der Vertrag fristlos gekündigt werden. 
              Wichtige Gründe können sein:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Schwere Pflichtverletzungen (z.B. Veruntreuung von Mieten)</li>
              <li>Wiederholte Verstöße gegen vereinbarte Reaktionszeiten</li>
              <li>Fehlerhafte Abrechnungen trotz Abmahnung</li>
              <li>Unberechtigte Preiserhöhungen</li>
              <li>Verlust der § 34c GewO-Erlaubnis</li>
            </ul>

            <div className="bg-amber-50 border border-amber-200 rounded-xl p-4 my-4 text-sm">
              <strong>⚠️ Wichtig:</strong> Bei außerordentlicher Kündigung sollten Sie immer 
              einen Rechtsanwalt konsultieren. Fristlose Kündigungen sind anfechtbar, wenn 
              der Grund nicht ausreicht oder nicht nachgewiesen werden kann.
            </div>

            <h2 className="text-2xl font-bold text-navy font-playfair mt-10 mb-4">
              So wechseln Sie den Hausverwalter reibungslos
            </h2>
            <p>
              Ein Verwalterwechsel muss gut geplant sein, damit keine Mieterdaten verloren gehen 
              und die laufende Verwaltung nicht unterbricht. Hier ist der optimale Ablauf:
            </p>

            <h3 className="text-xl font-semibold text-navy mt-6 mb-2">
              Schritt-für-Schritt zum Verwalterwechsel
            </h3>
            <div className="bg-white border border-gray-200 rounded-xl p-5 my-4">
              <ol className="space-y-4 not-prose">
                {[
                  { step: "1", title: "Neuen Verwalter auswählen", desc: "Mehrere Angebote einholen, Referenzen prüfen, Vertragsentwurf anfordern" },
                  { step: "2", title: "Kündigung beim alten Verwalter", desc: "Kündigungsfrist beachten, schriftlich per Einschreiben" },
                  { step: "3", title: "Übergabetermin abstimmen", desc: "Termin mit altem und neuem Verwalter festlegen, Mieter informieren" },
                  { step: "4", title: "Aktenübergabe überwachen", desc: "Vollständigkeit prüfen: Mietverträge, Abrechnungen, Kautionen, Korrespondenz" },
                  { step: "5", title: "Bankvollmachten ändern", desc: "Alte Vollmachten widerrufen, neue beim Kreditinstitut hinterlegen" },
                  { step: "6", title: "Mieter informieren", desc: "Schriftliche Mitteilung an alle Mieter mit neuen Kontaktdaten" },
                ].map((s) => (
                  <li key={s.step} className="flex gap-4 items-start">
                    <div className="w-7 h-7 bg-teal text-white rounded-full flex items-center justify-center flex-shrink-0 text-sm font-bold">{s.step}</div>
                    <div>
                      <p className="font-semibold text-navy">{s.title}</p>
                      <p className="text-sm text-gray-600">{s.desc}</p>
                    </div>
                  </li>
                ))}
              </ol>
            </div>

            <h3 className="text-xl font-semibold text-navy mt-6 mb-2">
              Übergabe: Was muss der alte Verwalter herausgeben?
            </h3>
            <div className="grid md:grid-cols-2 gap-4 my-6 not-prose">
              {[
                { title: "Vertragsunterlagen", items: ["Alle Mietverträge", "Kündigungen", "Nebenabreden", "Bürgschaften"] },
                { title: "Finanzen", items: ["Mietkautionen (inkl. Zinsen)", "Nebenkostenabrechnungen", "Mietkontoauszüge", "Offene Posten"] },
                { title: "Korrespondenz", items: ["Mieter-Emails", "Schreiben", "Protokolle", "Mängelanzeigen"] },
                { title: "Technisch", items: ["Schlüssel", "Zugangsdaten", "Baupläne", "Wartungsverträge"] },
              ].map((group) => (
                <div key={group.title} className="bg-gray-50 rounded-xl p-4">
                  <p className="font-semibold text-navy text-sm mb-2">{group.title}</p>
                  <ul className="space-y-1">
                    {group.items.map((item, i) => (
                      <li key={i} className="text-sm text-gray-600 flex items-center gap-2">
                        <svg className="w-3 h-3 text-teal" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            <h2 className="text-2xl font-bold text-navy font-playfair mt-10 mb-4">
              Fazit: Der Verwaltervertrag ist Ihr Schutz
            </h2>
            <p>
              Ein guter Verwaltervertrag schützt beide Seiten: Er macht Leistungen und 
              Vergütung transparent und regelt den Ausstieg für den Fall der Fälle. Nehmen 
              Sie sich Zeit zur Prüfung — ein unvorteilhafter Vertrag kann Sie Jahre lang 
              belasten.
            </p>
            <p>
              Achten Sie besonders auf transparente Vergütung, faire Kündigungsfristen und 
              klare Leistungsbeschreibungen. Bei Unsicherheiten lohnt sich der Blick in den 
              Vertrag durch einen Rechtsanwalt. Die Kosten dafür sind überschaubar, die 
              Konsequenzen eines schlechten Vertrags können erheblich sein.
            </p>
          </div>

          <div className="mt-12 bg-teal/10 border border-teal/20 rounded-xl p-8">
            <h3 className="text-xl font-bold text-navy mb-2 font-playfair">
              Transparenter Verwaltervertrag bei einfach verwaltet.
            </h3>
            <p className="text-gray-600 mb-4">
              Wir zeigen Ihnen unseren Verwaltervertrag vorab — ohne versteckte Klauseln, 
              ohne automatische Verlängerungen, mit fairen Kündigungsfristen. Transparente 
              Vergütung, klare Leistungsbeschreibung, Ihre Kontrolle.
            </p>
            <Link
              href="/anfrage"
              className="inline-block bg-teal text-white font-semibold px-6 py-3 rounded-lg hover:bg-teal/90 transition-colors"
            >
              Vertragsentwurf anfordern
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
