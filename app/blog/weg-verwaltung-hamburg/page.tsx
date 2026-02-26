import type { Metadata } from "next";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

export const metadata: Metadata = {
  title: "WEG-Verwaltung Hamburg: Pflichten, Kosten & Eigentümerrechte (2026)",
  description: "Alles zur WEG-Verwaltung in Hamburg: §§ 20-28 WEG erklärt, Pflichten des Verwalters, Kosten, Eigentümerversammlung und wie Sie den Verwalter wechseln.",
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    { "@type": "Question", "name": "Was kostet WEG-Verwaltung in Hamburg?", "acceptedAnswer": { "@type": "Answer", "text": "WEG-Verwaltung in Hamburg kostet zwischen €22-35 pro Einheit und Monat. Bei einfach verwaltet. ab €28/Einheit/Monat inklusive digitaler Eigentümerversammlung, Jahresabrechnung und Wirtschaftsplan." }},
    { "@type": "Question", "name": "Wie oft muss eine Eigentümerversammlung stattfinden?", "acceptedAnswer": { "@type": "Answer", "text": "Mindestens einmal jährlich (§ 24 Abs. 1 WEG). Der Verwalter muss die Einladung mindestens 2 Wochen vorher verschicken (§ 24 Abs. 4 WEG)." }},
    { "@type": "Question", "name": "Kann ich den WEG-Verwalter abberufen?", "acceptedAnswer": { "@type": "Answer", "text": "Ja. Die Eigentümergemeinschaft kann den Verwalter jederzeit mit einfacher Mehrheit abberufen (§ 26 Abs. 3 WEG). Der Vertrag endet dann spätestens nach 6 Monaten." }},
    { "@type": "Question", "name": "Was ist der Unterschied zwischen WEG und Mietverwaltung?", "acceptedAnswer": { "@type": "Answer", "text": "WEG-Verwaltung betrifft das gemeinschaftliche Eigentum (Treppenhaus, Dach, Fassade) einer Eigentümergemeinschaft. Mietverwaltung betrifft das Verhältnis zwischen Vermieter und Mieter im Sondereigentum." }},
  ],
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "WEG-Verwaltung Hamburg: Pflichten, Kosten & Eigentümerrechte (2026)",
  "datePublished": "2026-02-26",
  "author": { "@type": "Organization", "name": "einfach verwaltet. Redaktion" },
  "publisher": { "@type": "Organization", "name": "einfach verwaltet.", "url": "https://einfach-verwaltet.de" },
};

export default function WEGVerwaltungHamburg() {
  return (
    <>
      <Navbar />
      <main className="pt-16">
        {/* Hero */}
        <div className="bg-navy py-16 px-6">
          <div className="max-w-3xl mx-auto">
            <div className="inline-block bg-teal/20 text-teal text-xs font-semibold px-3 py-1 rounded-full mb-4">WEG-Verwaltung</div>
            <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">
              WEG-Verwaltung Hamburg: Pflichten, Kosten & Eigentümerrechte (2026)
            </h1>
            <p className="text-white/70 text-lg">Alles, was Wohnungseigentümer in Hamburg wissen müssen — §§ WEG verständlich erklärt.</p>
            <div className="flex items-center gap-4 mt-6 text-white/50 text-sm">
              <span>26. Februar 2026</span>
              <span>•</span>
              <span>12 min Lesezeit</span>
              <span>•</span>
              <span>einfach verwaltet. Redaktion</span>
            </div>
          </div>
        </div>

        {/* Content */}
        <article className="max-w-3xl mx-auto px-6 py-12">
          <div className="prose prose-lg max-w-none text-text-main">

            <h2 className="text-2xl font-bold text-navy mt-8 mb-4">Was ist WEG-Verwaltung?</h2>
            <p>Wenn mehrere Eigentümer ein Gebäude gemeinsam besitzen, entsteht eine <strong>Wohnungseigentümergemeinschaft (WEG)</strong>. Das Wohnungseigentumsgesetz (WEG) regelt, wie diese Gemeinschaft organisiert wird — und wer für das gemeinschaftliche Eigentum (Treppenhaus, Dach, Fassade, Heizungsanlage) verantwortlich ist.</p>
            <p>Die <strong>WEG-Verwaltung</strong> übernimmt genau diese Verantwortung: Sie vertritt die Gemeinschaft nach außen, verwaltet das Gemeinschaftsvermögen, organisiert Eigentümerversammlungen und sorgt dafür, dass alle gesetzlichen Pflichten erfüllt werden.</p>

            <div className="bg-teal/5 border-l-4 border-teal rounded-r-xl p-5 my-6">
              <p className="font-semibold text-navy mb-2">Wichtig: WEG vs. Mietverwaltung</p>
              <p className="text-sm">WEG-Verwaltung = gemeinschaftliches Eigentum (alle Eigentümer). Mietverwaltung = Verhältnis Vermieter/Mieter im Sondereigentum. Viele Eigentümer brauchen <strong>beides</strong>: WEG-Verwaltung für das Gebäude, Sondereigentumsverwaltung (SEV) für ihre eigene Wohnung.</p>
            </div>

            <h2 className="text-2xl font-bold text-navy mt-10 mb-4">Pflichten des WEG-Verwalters (§§ 24–28 WEG)</h2>
            <p>Das WEG definiert klare Pflichten für den Verwalter. Wer diese nicht erfüllt, macht sich schadensersatzpflichtig:</p>

            <div className="grid md:grid-cols-2 gap-4 my-6 not-prose">
              {[
                { para: "§ 24 WEG", title: "Eigentümerversammlung", text: "Mindestens 1× jährlich einberufen, Einladung ≥2 Wochen vorher, Protokoll führen und aufbewahren." },
                { para: "§ 25 WEG", title: "Abstimmung & Beschlüsse", text: "Stimmrecht nach Köpfen (Grundsatz) oder Miteigentumsanteilen. Einfache Mehrheit für laufende Beschlüsse." },
                { para: "§ 26 WEG", title: "Bestellung & Abberufung", text: "Verwalter wird für max. 5 Jahre bestellt, kann jederzeit mit einfacher Mehrheit abberufen werden." },
                { para: "§ 28 WEG", title: "Wirtschaftsplan & Abrechnung", text: "Jährlicher Wirtschaftsplan aufstellen, Jahresabrechnung erstellen, Rücklagen verwalten." },
              ].map((item) => (
                <div key={item.para} className="bg-white border border-gray-100 rounded-xl p-5">
                  <div className="text-xs font-bold text-teal mb-1">{item.para}</div>
                  <div className="font-semibold text-navy mb-2">{item.title}</div>
                  <p className="text-sm text-text-light">{item.text}</p>
                </div>
              ))}
            </div>

            <h2 className="text-2xl font-bold text-navy mt-10 mb-4">Eigentümerversammlung: Rechte und Ablauf</h2>
            <p>Die Eigentümerversammlung ist das wichtigste Organ der WEG. Hier werden alle wesentlichen Entscheidungen getroffen — von Instandhaltungsmaßnahmen bis zur Verwalterbestellung.</p>

            <h3 className="text-lg font-semibold text-navy mt-6 mb-3">Ihre Rechte als Eigentümer:</h3>
            <ul className="space-y-2 not-prose">
              {[
                "Einberufung einer außerordentlichen Versammlung (wenn ≥25% der Eigentümer es verlangen, § 24 Abs. 2 WEG)",
                "Akteneinsicht in Verwaltungsunterlagen",
                "Anfechtung von Beschlüssen innerhalb von 1 Monat (§ 44 WEG)",
                "Widerspruch gegen fehlerhafte Jahresabrechnungen",
                "Abberufung des Verwalters bei wichtigem Grund (auch außerordentlich)",
              ].map((r) => (
                <li key={r} className="flex items-start gap-2 text-sm">
                  <svg className="w-4 h-4 text-teal flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" /></svg>
                  <span>{r}</span>
                </li>
              ))}
            </ul>

            <h2 className="text-2xl font-bold text-navy mt-10 mb-4">Jahresabrechnung und Wirtschaftsplan</h2>
            <p>Zwei Dokumente, die jede WEG jährlich braucht:</p>
            <p><strong>Wirtschaftsplan (§ 28 Abs. 1 WEG):</strong> Prognose der Einnahmen und Ausgaben für das kommende Jahr. Grundlage für die monatlichen Hausgeldvorauszahlungen jedes Eigentümers.</p>
            <p><strong>Jahresabrechnung (§ 28 Abs. 2 WEG):</strong> Abrechnung der tatsächlichen Kosten des vergangenen Jahres. Enthält Einzelabrechnungen pro Einheit (Ihr Anteil) und die Gesamtabrechnung der WEG.</p>
            <div className="bg-amber-50 border border-amber-200 rounded-xl p-4 my-4 text-sm">
              <strong>⚠️ Häufiges Problem:</strong> Viele Verwalter liefern die Jahresabrechnung zu spät oder fehlerhaft. Das Gesetz schreibt keine feste Frist vor — üblich ist jedoch bis zum 30. Juni des Folgejahres. Kontrollieren Sie Ihre Abrechnung genau.
            </div>

            <h2 className="text-2xl font-bold text-navy mt-10 mb-4">Kosten WEG-Verwaltung Hamburg: Preisvergleich</h2>
            <div className="not-prose overflow-x-auto my-6">
              <table className="w-full border-collapse text-sm">
                <thead>
                  <tr className="bg-navy text-white">
                    <th className="px-4 py-3 text-left rounded-tl-lg">Anbietertyp</th>
                    <th className="px-4 py-3 text-center">Preis/Einheit/Monat</th>
                    <th className="px-4 py-3 text-center rounded-tr-lg">Reaktionszeit</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    ["Traditionelle HV Hamburg", "€22–32", "2–5 Werktage"],
                    ["Große Verwaltungsgesellschaften", "€25–35", "1–3 Werktage"],
                    ["einfach verwaltet.", "ab €28", "< 15 Minuten"],
                  ].map(([type, price, time], i) => (
                    <tr key={type} className={i % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                      <td className="px-4 py-3 font-medium text-navy border-b border-gray-100">{type}</td>
                      <td className="px-4 py-3 text-center border-b border-gray-100">{price}</td>
                      <td className="px-4 py-3 text-center border-b border-gray-100">{time}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <h2 className="text-2xl font-bold text-navy mt-10 mb-4">Verwalter abberufen: So geht's nach § 26 WEG</h2>
            <p>Die WEG-Reform 2020 hat die Abberufung deutlich vereinfacht. Sie brauchen keinen wichtigen Grund mehr:</p>
            <ol className="space-y-3 not-prose my-4">
              {[
                { n: "1", t: "Tagesordnungspunkt beantragen", d: "Mindestens 25% der Eigentümer können die Aufnahme in die TO verlangen." },
                { n: "2", t: "Eigentümerversammlung einberufen", d: "Einladung ≥2 Wochen vorher. Alternativ: außerordentliche Versammlung." },
                { n: "3", t: "Abstimmung: einfache Mehrheit", d: "Mehr als 50% der abgegebenen Stimmen genügen. Verwalter ist sofort abberufen." },
                { n: "4", t: "Vertragsende", d: "Verwaltervertrag endet automatisch nach § 26 Abs. 3 WEG mit Ablauf von 6 Monaten (oder früher, wenn im Vertrag vereinbart)." },
              ].map((s) => (
                <li key={s.n} className="flex gap-4 items-start">
                  <div className="w-7 h-7 bg-teal text-white rounded-full flex items-center justify-center flex-shrink-0 text-sm font-bold">{s.n}</div>
                  <div><p className="font-semibold text-navy">{s.t}</p><p className="text-sm text-text-light">{s.d}</p></div>
                </li>
              ))}
            </ol>

          </div>

          {/* CTA */}
          <div className="bg-navy rounded-2xl p-8 mt-12 text-center">
            <h3 className="text-2xl font-bold text-white mb-3">Ihre WEG professionell verwalten lassen</h3>
            <p className="text-white/70 mb-6">Transparente Abrechnung, digitale Eigentümerversammlung, garantierte Reaktionszeiten.</p>
            <a href="/anfrage" className="inline-block bg-teal text-white px-8 py-4 rounded-xl font-semibold hover:bg-teal/80 transition-colors">
              Kostenloses Angebot in 2 Minuten →
            </a>
          </div>
        </article>

        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      </main>
      <Footer />
    </>
  );
}
