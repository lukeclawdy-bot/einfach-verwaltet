import type { Metadata } from "next";
import Link from "next/link";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

export const metadata: Metadata = {
  title: "10 Kriterien für eine gute Hausverwaltung: Qualität erkennen und bewerten | einfach verwaltet.",
  description:
    "Wie Sie die Qualität einer Hausverwaltung bewerten: 10 konkrete Kriterien für Eigentümer — von Transparenz und Erreichbarkeit bis zur rechtlichen Kompetenz. Checkliste 2026.",
  keywords:
    "Hausverwaltung Qualität Kriterien, gute Hausverwaltung finden, Hausverwaltung bewerten, Hausverwaltung wählen Tipps, Hausverwaltung Checkliste 2026",
  openGraph: {
    title: "10 Kriterien für eine gute Hausverwaltung: Wie Sie Qualität erkennen",
    description:
      "Praxisnahe Checkliste für Eigentümer: So bewerten Sie Hausverwaltungen objektiv und finden den besten Anbieter für Ihre Immobilie.",
    url: "https://einfach-verwaltet.de/blog/hausverwaltung-qualitaet-kriterien",
    siteName: "einfach verwaltet.",
    locale: "de_DE",
    type: "article",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "10 Kriterien für eine gute Hausverwaltung: Qualität erkennen und bewerten",
  description:
    "10 objektive Qualitätskriterien, mit denen Eigentümer professionelle Hausverwaltungen bewerten und vergleichen können.",
  author: { "@type": "Organization", name: "einfach verwaltet." },
  publisher: {
    "@type": "Organization",
    name: "einfach verwaltet.",
    logo: { "@type": "ImageObject", url: "https://einfach-verwaltet.de/logo.png" },
  },
  datePublished: "2026-02-27",
  inLanguage: "de",
  url: "https://einfach-verwaltet.de/blog/hausverwaltung-qualitaet-kriterien",
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Woran erkenne ich eine schlechte Hausverwaltung?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Warnsignale für eine schlechte Hausverwaltung: Schwer erreichbar oder lange Reaktionszeiten, keine klare Aufschlüsselung der Leistungen und Kosten, verspätete Nebenkostenabrechnung, keine digitale Dokumentenverwaltung, häufige Verwaltervertreter ohne Konstanz, fehlende oder fehlerhafte Protokolle von Eigentümerversammlungen, Beschwerden vieler Mieter.",
      },
    },
    {
      "@type": "Question",
      name: "Was sollte im Verwaltervertrag stehen?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Ein guter Verwaltervertrag enthält: exakte Leistungsbeschreibung ohne versteckte Extraleistungen, Vergütung mit klarer Pauschalpreisstruktur, Reaktionszeitversprechen, Vertragslaufzeit und Kündigungsfristen, Regelung für Notfälle, Datenschutzvereinbarung (DSGVO-konform) und Klauseln zur Rechenschaftspflicht (§ 259 BGB).",
      },
    },
    {
      "@type": "Question",
      name: "Wie viel sollte eine gute Hausverwaltung kosten?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Für Mietverwaltung sind €24–34 pro Einheit und Monat marktüblich; für WEG-Verwaltung €26–36. Günstigere Angebote gehen oft mit versteckten Zusatzkosten oder geringerer Servicequalität einher. Teurere Angebote sind nicht automatisch besser. Entscheidend ist das Preis-Leistungs-Verhältnis: Was ist inklusive, und welche Services kosten extra?",
      },
    },
    {
      "@type": "Question",
      name: "Sollte die Hausverwaltung lokal oder bundesweit tätig sein?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Beide Modelle haben Vor- und Nachteile. Lokale Verwalter kennen den spezifischen Markt, haben etablierte Handwerkernetze vor Ort und können schnell reagieren. Überregionale oder digitale Anbieter haben oft bessere Technologie, standardisierte Prozesse und günstigere Preise. Entscheidend ist, ob der Verwalter Ihr Objekt kennt und schnell handeln kann.",
      },
    },
    {
      "@type": "Question",
      name: "Wie oft sollte ein Verwalter das verwaltete Objekt besuchen?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Mindestens einmal jährlich sollte eine Begehung des Objekts stattfinden — bei größeren WEG-Anlagen öfter. Dabei werden Gemeinschaftsflächen, Hausordnung und technische Anlagen geprüft. Zusätzlich sollten nach Mieterwechseln Wohnungsübergaben persönlich begleitet werden.",
      },
    },
  ],
};

const criteria = [
  {
    num: "01",
    title: "Transparente Preisstruktur",
    desc: "Ein seriöser Verwalter nennt seinen Preis klar und listet auf, welche Leistungen im Pauschalpreis enthalten sind — ohne langes Kleingedrucktes. Fragen Sie explizit: Was kostet extra? Gibt es Sondergebühren für Mieterwechsel, Jahresabrechnung oder Handwerkerbeauftragung?"
  },
  {
    num: "02",
    title: "Erreichbarkeit und Reaktionszeit",
    desc: "24/7-Erreichbarkeit für Notfälle ist Standard bei guten Verwaltern. Für reguläre Anfragen von Mietern und Eigentümern sollte die Reaktionszeit unter einem Werktag liegen. Fragen Sie im Erstgespräch: Wie wird ein Wasserrohrbruch um 22 Uhr gehandhabt?"
  },
  {
    num: "03",
    title: "Digitales Eigentümerportal",
    desc: "Moderne Hausverwaltungen bieten Eigentümern Echtzeit-Einblick in Mieteingänge, Reparaturstatus und alle Dokumente. Ein Excel-File per E-Mail ist kein adäquater Ersatz. Fragen Sie nach einer Demo des Portals, bevor Sie unterschreiben."
  },
  {
    num: "04",
    title: "Fristgerechte Nebenkostenabrechnung",
    desc: "Die Abrechnung nach § 556 BGB muss innerhalb von 12 Monaten nach Jahresende vorliegen. Fragen Sie: In welchem Monat des Folgejahres versenden Sie Ihre Abrechnungen? Antworten wie 'so schnell wie möglich' sind kein gutes Zeichen."
  },
  {
    num: "05",
    title: "Rechtliche Kompetenz",
    desc: "Mietrecht ändert sich regelmäßig. Gute Verwalter kennen aktuelle BGH-Urteile, die Anforderungen des § 558 BGB zur Mieterhöhung und die Mietpreisbremseregelung in Ihrer Region. Stellen Sie gezielte Rechtsfragen im Erstgespräch."
  },
  {
    num: "06",
    title: "Lokales Handwerkernetzwerk",
    desc: "Gute Verwalter haben ein geprüftes Netzwerk aus Handwerkern mit fairen Konditionen und kurzen Reaktionszeiten. Fragen Sie nach typischen Reaktionszeiten bei Notfällen und ob Handwerkerrechnungen transparent weitergegeben werden."
  },
  {
    num: "07",
    title: "Klare Vertragsbedingungen",
    desc: "Lesen Sie den Verwaltervertrag genau: Wie lange ist die Mindestlaufzeit? Welche Kündigungsfristen gelten? Gibt es Automatik-Verlängerungen? Ein fairer Verwalter bindet nicht durch versteckte Klauseln, sondern durch Servicequalität."
  },
  {
    num: "08",
    title: "Referenzen und Nachweise",
    desc: "Bitten Sie um Referenzkunden — und sprechen Sie mit ihnen. Fragen Sie: Wie waren die Reaktionszeiten? Gab es Überraschungen bei den Kosten? Würden Sie den Verwalter wieder nehmen? Online-Bewertungen sind ergänzend, aber keine Ersatz für persönliche Referenzen."
  },
  {
    num: "09",
    title: "Versicherungsschutz",
    desc: "Professionelle Verwalter haben eine Berufshaftpflichtversicherung und eine Vermögensschadenshaftpflicht. Letztere schützt Sie, falls der Verwalter durch Fehler finanzielle Schäden verursacht. Lassen Sie sich den Versicherungsnachweis zeigen."
  },
  {
    num: "10",
    title: "Kommunikation und Berichtswesen",
    desc: "Wie oft erhalten Sie als Eigentümer einen Statusbericht? Werden Reparaturen und Mieterwechsel proaktiv kommuniziert? Gute Verwalter informieren — schlechte warten, bis Eigentümer nachfragen. Klären Sie den Kommunikationsrhythmus vorab."
  },
];

export default function HausverwaltungQualitaetKriterienPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <Navbar />
      <main className="pt-24">
        <article className="max-w-[800px] mx-auto px-6 py-16">
          <div className="mb-10">
            <div className="flex gap-2 flex-wrap mb-4">
              <span className="bg-teal/10 text-teal text-xs font-semibold px-3 py-1 rounded-full">Ratgeber</span>
              <span className="bg-navy/5 text-navy text-xs font-semibold px-3 py-1 rounded-full">Checkliste</span>
            </div>
            <h1 className="text-4xl font-bold text-navy mb-4 font-serif leading-tight">
              10 Kriterien für eine gute Hausverwaltung: Wie Sie Qualität erkennen und bewerten
            </h1>
            <p className="text-text-light text-lg leading-relaxed">
              Nicht jede Hausverwaltung ist gleich. Die Unterschiede in Erreichbarkeit, Transparenz und 
              rechtlicher Kompetenz sind erheblich — und können Ihnen als Eigentümer tausende Euro und viel 
              Ärger ersparen oder kosten. Mit diesen 10 Kriterien wählen Sie fundiert.
            </p>
            <p className="text-text-light/60 text-sm mt-4">Februar 2026 · 9 Min. Lesezeit</p>
          </div>

          <div className="prose prose-navy max-w-none text-text-light leading-relaxed space-y-8">

            <h2 className="text-2xl font-bold text-navy font-serif">Warum die Wahl des Verwalters so entscheidend ist</h2>
            <p>
              Ihre Immobilie ist wahrscheinlich Ihr wertvollstes Asset. Der Verwalter verwaltet es in Ihrem 
              Auftrag — inklusive Ihres Geldes, Ihrer Mieterbeziehungen und Ihrer rechtlichen Risiken. 
              Eine schlechte Hausverwaltung kostet Sie nicht nur Geld, sondern auch Nerven und im schlimmsten 
              Fall Ihre Mieter oder Ihren Immobilienwert.
            </p>
            <p>
              In Deutschland gibt es über 20.000 Hausverwaltungsunternehmen — von der Ein-Mann-Verwaltung 
              bis zum bundesweiten Konzern. Die Qualitätsunterschiede sind enorm. Wissen Sie, wonach Sie suchen? 
              Diese 10 Kriterien helfen Ihnen beim Vergleich.
            </p>

            {/* Criteria */}
            <div className="space-y-6 not-prose">
              {criteria.map((c) => (
                <div key={c.num} className="bg-warm-white rounded-xl p-6 border border-gray-100 flex gap-5">
                  <div className="text-3xl font-bold text-teal/30 font-serif flex-shrink-0 w-10">{c.num}</div>
                  <div>
                    <h3 className="font-bold text-navy mb-2 text-lg">{c.title}</h3>
                    <p className="text-text-light text-sm leading-relaxed">{c.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <h2 className="text-2xl font-bold text-navy font-serif">Rote Flaggen: So erkennen Sie eine schlechte Hausverwaltung frühzeitig</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>Unklare oder versteckte Kostenstruktur</li>
              <li>Lange Reaktionszeiten im Erstgespräch (wie wird es nach dem Vertragsabschluss sein?)</li>
              <li>Keine Referenzkunden oder Ausweichen bei Referenzanfragen</li>
              <li>Kein digitales Portal oder veraltete Systeme</li>
              <li>Lange Bindungsverträge mit automatischer Verlängerung</li>
              <li>Fehlende Versicherungsnachweise</li>
              <li>Unklare Aussagen zu rechtlichen Anforderungen (§ 558, § 556 BGB, Mietpreisbremse)</li>
            </ul>

            <h2 className="text-2xl font-bold text-navy font-serif">So nutzen Sie diese Kriterien im Erstgespräch</h2>
            <p>
              Bereiten Sie für das erste Gespräch mit einem potenziellen Verwalter eine Liste mit gezielten Fragen vor:
            </p>
            <ol className="list-decimal pl-6 space-y-2">
              <li>"Was ist exakt in Ihrem Monatspreis inklusive — und was kostet extra?"</li>
              <li>"Wie lange dauert es bei einem Wasserrohrbruch um Mitternacht, bis jemand vor Ort ist?"</li>
              <li>"Können Sie mir eine Demo Ihres Eigentümerportals zeigen?"</li>
              <li>"Bis wann genau versenden Sie Ihre Nebenkostenabrechnung?"</li>
              <li>"Haben Sie eine Berufshaftpflicht- und Vermögensschadenshaftpflicht?"</li>
              <li>"Darf ich mit zwei Ihrer aktuellen Kunden sprechen?"</li>
              <li>"Was ist die Mindestvertragslaufzeit und wie lange ist die Kündigungsfrist?"</li>
            </ol>

            {/* CTA */}
            <div className="bg-navy text-white rounded-2xl p-8 my-10 text-center not-prose">
              <h2 className="text-2xl font-bold mb-3 font-serif">Hausverwaltung, die alle 10 Kriterien erfüllt?</h2>
              <p className="text-white/75 mb-6">
                einfach verwaltet. bietet transparente Pauschalpreise ab 24 €/Einheit, digitales Eigentümerportal, 
                24/7 Erreichbarkeit und volle Rechtssicherheit. Überzeugen Sie sich selbst im kostenlosen Erstgespräch.
              </p>
              <a
                href="/anfrage"
                className="inline-block bg-teal text-white px-8 py-4 rounded-xl font-semibold text-lg hover:bg-teal/85 transition-all"
              >
                Kostenloses Angebot anfragen →
              </a>
            </div>

            {/* FAQ */}
            <h2 className="text-2xl font-bold text-navy font-serif">Häufige Fragen zur Hausverwaltungswahl</h2>
            <div className="space-y-6 not-prose">
              {faqJsonLd.mainEntity.map((item, i) => (
                <div key={i} className="bg-warm-white rounded-xl p-6 border border-gray-100">
                  <h3 className="font-bold text-navy mb-2">{item.name}</h3>
                  <p className="text-text-light text-sm leading-relaxed">{item.acceptedAnswer.text}</p>
                </div>
              ))}
            </div>

            <div className="mt-10 pt-8 border-t border-gray-100 not-prose">
              <p className="text-text-light text-sm">
                Weiterführende Artikel:{" "}
                <Link href="/blog/verwaltervertrag-kuendigen" className="text-teal hover:underline">
                  Verwaltervertrag kündigen: Schritt-für-Schritt
                </Link>
                {" · "}
                <Link href="/blog/immobilienverwaltung-software-2026" className="text-teal hover:underline">
                  Immobilienverwaltung Software 2026 im Vergleich
                </Link>
              </p>
            </div>
          </div>
        </article>
      </main>
      <Footer />
    </>
  );
}
