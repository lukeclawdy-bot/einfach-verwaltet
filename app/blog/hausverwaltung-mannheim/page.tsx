import type { Metadata } from "next";
import Link from "next/link";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

export const metadata: Metadata = {
  title: "Hausverwaltung Mannheim: Kosten, Markt und Tipps für Vermieter 2026 | einfach verwaltet.",
  description:
    "Hausverwaltung Mannheim 2026: Aktuelle Marktpreise, lokale Besonderheiten in Quadraten und Lindenhof, FAQ für Eigentümer. Professionelle Verwaltung ab €24/Einheit.",
  keywords:
    "Hausverwaltung Mannheim, Mietverwaltung Mannheim, Hausverwalter Mannheim, WEG Verwaltung Mannheim, Hausverwaltung Mannheim Kosten 2026",
  openGraph: {
    title: "Hausverwaltung Mannheim: Kosten, Markt und Tipps 2026",
    description:
      "Der komplette Leitfaden zur Hausverwaltung in Mannheim: Marktpreise, lokale Besonderheiten und wie Sie den richtigen Verwalter finden.",
    url: "https://einfach-verwaltet.de/blog/hausverwaltung-mannheim",
    siteName: "einfach verwaltet.",
    locale: "de_DE",
    type: "article",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Hausverwaltung Mannheim: Kosten, Markt und Tipps für Vermieter 2026",
  description:
    "Überblick über den Mannheimer Hausverwaltungsmarkt 2026: Preise, Besonderheiten und worauf Eigentümer beim Verwalterwechsel achten sollten.",
  author: { "@type": "Organization", name: "einfach verwaltet." },
  publisher: {
    "@type": "Organization",
    name: "einfach verwaltet.",
    logo: { "@type": "ImageObject", url: "https://einfach-verwaltet.de/logo.png" },
  },
  datePublished: "2026-02-27",
  inLanguage: "de",
  url: "https://einfach-verwaltet.de/blog/hausverwaltung-mannheim",
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Was kostet eine Hausverwaltung in Mannheim?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "In Mannheim liegen die Kosten für Mietverwaltung bei etwa €24–34 pro Einheit und Monat. WEG-Verwaltung kostet in der Regel €26–36 pro Einheit. Moderne Anbieter wie einfach verwaltet. starten ab €24/Einheit mit einem transparenten Pauschalpreis ohne versteckte Zusatzgebühren.",
      },
    },
    {
      "@type": "Question",
      name: "Welche Stadtteile in Mannheim haben den stärksten Mietmarkt?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Besonders stark sind die Quadrate (Innenstadt), Lindenhof, Neuostheim und die Schwetzingerstadt. Diese Stadtteile verzeichnen niedrige Leerstandsquoten und überdurchschnittliche Mietnachfrage. Für Vermieter in diesen Lagen ist eine professionelle Verwaltung besonders rentabel.",
      },
    },
    {
      "@type": "Question",
      name: "Gibt es in Mannheim eine Mietpreisbremse?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Ja, Mannheim liegt in Baden-Württemberg, das eine Mietpreisbremseverordnung eingeführt hat. In bestimmten Lagen gilt daher die gesetzliche Mietpreisbremse nach § 556d BGB. Bei Neuvermietungen darf die Miete maximal 10 % über der ortsüblichen Vergleichsmiete liegen. Ihr Hausverwaltung sollte dies bei jeder Neuvermietung prüfen.",
      },
    },
    {
      "@type": "Question",
      name: "Wie finde ich eine gute Hausverwaltung in Mannheim?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Wichtige Kriterien sind: Erfahrung mit dem lokalen Markt, transparente Pauschalpreise ohne Extragebühren, schnelle Erreichbarkeit, digitales Eigentümerportal und nachweisbare Referenzen. Holen Sie mindestens drei Angebote ein und vergleichen Sie den Leistungsumfang genau.",
      },
    },
    {
      "@type": "Question",
      name: "Wie läuft ein Wechsel der Hausverwaltung in Mannheim ab?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Der Verwalterwechsel dauert typischerweise 4–8 Wochen. Sie kündigen den bestehenden Verwaltervertrag schriftlich (meist 3–6 Monate zum Jahresende), dann übernimmt der neue Verwalter alle Unterlagen und informiert die Mieter. Ein erfahrener Verwalter begleitet Sie durch den gesamten Prozess.",
      },
    },
  ],
};

export default function HausverwaltungMannheimBlogPage() {
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
          {/* Header */}
          <div className="mb-10">
            <div className="flex gap-2 flex-wrap mb-4">
              <span className="bg-teal/10 text-teal text-xs font-semibold px-3 py-1 rounded-full">Stadtführer</span>
              <span className="bg-navy/5 text-navy text-xs font-semibold px-3 py-1 rounded-full">Mannheim</span>
            </div>
            <h1 className="text-4xl font-bold text-navy mb-4 font-serif leading-tight">
              Hausverwaltung Mannheim: Kosten, Markt und Tipps für Vermieter 2026
            </h1>
            <p className="text-text-light text-lg leading-relaxed">
              Mannheim ist eine der dynamischsten Mietstädte Baden-Württembergs. Mit rund 320.000 Einwohnern, 
              einer starken Hochschullandschaft und einem wachsenden Technologiesektor bietet der Quadratestadt 
              ein attraktives Umfeld für Immobilieneigentümer — aber auch klare Anforderungen an die Hausverwaltung.
            </p>
            <p className="text-text-light/60 text-sm mt-4">Februar 2026 · 9 Min. Lesezeit</p>
          </div>

          {/* Body */}
          <div className="prose prose-navy max-w-none text-text-light leading-relaxed space-y-8">

            <h2 className="text-2xl font-bold text-navy font-serif">Mannheimer Immobilienmarkt 2026: Was Vermieter wissen müssen</h2>
            <p>
              Der Mannheimer Mietmarkt ist geprägt von einer anhaltend hohen Nachfrage, insbesondere in innenstadtnahen 
              Lagen. Die Universität Mannheim und die Hochschule Mannheim sorgen für eine konstante Studierendennachfrage, 
              während der Technologiepark und Unternehmen wie BASF, John Deere und Roche viele Fachkräfte anziehen. 
              Das drückt die Leerstandsquote in Toplagen auf unter 2 %.
            </p>
            <p>
              Die durchschnittliche Nettokaltmiete liegt laut dem Mannheimer Mietspiegel 2024 je nach Lage und 
              Baujahr zwischen 9,50 und 16,50 €/m². Stadtteile wie Neuostheim, Lindenhof und die Schwetzingerstadt 
              erzielen Spitzenwerte, während Vorstädte wie Schönau oder Waldhof deutlich darunter liegen.
            </p>
            <p>
              <strong>Besonderheit Mannheim:</strong> Die Stadt ist für ihr Quadratesystem bekannt — das historische 
              Stadtzentrum ist in benannte Quadrate unterteilt. Diese Lagen sind besonders begehrt und erzielen 
              überproportionale Mietrenditen. Gleichzeitig sind Objekte in den Quadraten oft älter und erfordern 
              erfahrene Hausverwaltungen mit Expertise in Altbausanierung.
            </p>

            <h2 className="text-2xl font-bold text-navy font-serif">Was kostet Hausverwaltung in Mannheim?</h2>
            <p>
              Die Kosten für professionelle Hausverwaltung in Mannheim bewegen sich im landesweiten Rahmen. 
              Für Mietverwaltung zahlen Eigentümer in der Regel zwischen 24 und 34 € pro Einheit und Monat. 
              WEG-Verwaltung liegt etwas höher: 26 bis 36 € pro Einheit sind marktüblich.
            </p>
            <p>
              Vorsicht bei Angeboten mit niedrigem Grundpreis und langen Zusatzkostenlisten: Viele traditionelle 
              Verwalter berechnen extra für Mietersuche, Jahresabrechnungen, Mahnwesen oder Handwerkerkoordination. 
              Moderne Anbieter wie <strong>einfach verwaltet.</strong> arbeiten mit transparenten Pauschalpreisen 
              ab 24 €/Einheit — alle Kernleistungen inklusive.
            </p>

            <h3 className="text-xl font-bold text-navy font-serif">Leistungen, die ein guter Verwalter in Mannheim erbringen muss</h3>
            <ul className="list-disc pl-6 space-y-2">
              <li>Mieterkommunikation und Beschwerdemanagement auf Deutsch und ggf. weiteren Sprachen</li>
              <li>Jährliche Nebenkostenabrechnung nach § 556 BGB (Frist: 12 Monate nach Abrechnungsperiode)</li>
              <li>Mieterhöhungsmanagement nach § 558 BGB (Mietspiegel-Konformität)</li>
              <li>Koordination mit lokalen Handwerkern für Reparaturen und Instandhaltung</li>
              <li>Prüfung der Mietpreisbremse bei Neuvermietungen (§ 556d BGB, gilt in Mannheim)</li>
              <li>Leerstandsmanagement und Mietersuche mit Bonitätsprüfung</li>
              <li>Digitales Eigentümerportal mit Echtzeit-Einblick in Zahlungen und Dokumente</li>
            </ul>

            <h2 className="text-2xl font-bold text-navy font-serif">Mietpreisbremse in Mannheim: Was Vermieter beachten müssen</h2>
            <p>
              Mannheim liegt im Geltungsbereich der Baden-Württembergischen Mietpreisbremseverordnung. Das bedeutet: 
              Bei Neuvermietungen nach dem 01.11.2015 darf die vereinbarte Miete die ortsübliche Vergleichsmiete 
              (laut Mietspiegel) um maximal 10 % überschreiten — sofern keine Ausnahmen greifen (Erstbezug nach 
              Neubau, umfassende Modernisierung, Vormietermiete).
            </p>
            <p>
              Verstöße gegen die Mietpreisbremse können zur Rückzahlungspflicht führen. Eine professionelle 
              Hausverwaltung prüft vor jeder Neuvermietung automatisch die rechtlichen Rahmenbedingungen und 
              dokumentiert eventuelle Ausnahmetatbestände.
            </p>

            <h2 className="text-2xl font-bold text-navy font-serif">Verwalterwechsel in Mannheim: So gelingt der Übergang reibungslos</h2>
            <p>
              Viele Mannheimer Eigentümer sind mit ihrem aktuellen Verwalter unzufrieden — häufige Gründe sind 
              mangelnde Erreichbarkeit, verzögerte Abrechnungen oder unklare Kostenabrechnungen. Ein Wechsel ist 
              möglich und kein komplizierter Prozess:
            </p>
            <ol className="list-decimal pl-6 space-y-2">
              <li><strong>Kündigung prüfen:</strong> Lesen Sie Ihren Verwaltervertrag — üblich sind 3 Monate zum Jahresende oder 6 Monate Frist.</li>
              <li><strong>Neuen Verwalter wählen:</strong> Holen Sie mindestens drei Angebote ein und vergleichen Sie Leistungsumfang und Preis.</li>
              <li><strong>Kündigung einreichen:</strong> Schriftlich per Einschreiben an den bisherigen Verwalter.</li>
              <li><strong>Übergabe koordinieren:</strong> Der neue Verwalter fordert alle Unterlagen (Mietverträge, Abrechnungen, Schlüsselliste) an.</li>
              <li><strong>Mieter informieren:</strong> Schriftliche Mitteilung der neuen Kontaktdaten an alle Mieter.</li>
            </ol>

            <h2 className="text-2xl font-bold text-navy font-serif">Mannheims Wachstumsstadtteile im Fokus</h2>
            <p>
              Für Investoren und Vermieter besonders interessant sind derzeit:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Jungbusch:</strong> Aufwertendes Viertel nahe der Hochschule für Musik und Theater, steigende Mietpreise.</li>
              <li><strong>Neckarstadt-West:</strong> Multikultureller Stadtteil mit starker Nachfrage von Studierenden und jungen Berufstätigen.</li>
              <li><strong>Rheinau:</strong> Ruhige Wohnlage mit gutem Preis-Leistungs-Verhältnis für Familien.</li>
              <li><strong>Franklin Village:</strong> Ehemaliges US-Militärgelände, heute modernes Stadtquartier mit vielen Neubauten.</li>
            </ul>

            <h2 className="text-2xl font-bold text-navy font-serif">Checkliste: Den richtigen Hausverwalter in Mannheim finden</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>Transparenter Pauschalpreis ohne versteckte Zusatzgebühren</li>
              <li>Nachweis von Berufshaftpflicht- und Vermögensschadensversicherung</li>
              <li>Erreichbarkeit 24/7 für Mieternotfälle</li>
              <li>Digitales Eigentümerportal mit Echtzeit-Dokumentenzugriff</li>
              <li>Kenntnis des Mannheimer Mietspiegels und der Mietpreisbremsenregelung</li>
              <li>Nachweisbare Referenzen aus dem Mannheimer Markt</li>
              <li>Klare Vertragslaufzeit und faire Kündigungsbedingungen</li>
            </ul>

            {/* CTA Box */}
            <div className="bg-navy text-white rounded-2xl p-8 my-10 text-center not-prose">
              <h2 className="text-2xl font-bold mb-3 font-serif">Hausverwaltung in Mannheim gesucht?</h2>
              <p className="text-white/75 mb-6">
                einfach verwaltet. bietet transparente Pauschalpreise ab 24 €/Einheit, digitales Eigentümerportal 
                und 24/7 Erreichbarkeit. Kostenloses Erstgespräch — Antwort in 24 Stunden.
              </p>
              <a
                href="/anfrage"
                className="inline-block bg-teal text-white px-8 py-4 rounded-xl font-semibold text-lg hover:bg-teal/85 transition-all"
              >
                Kostenloses Angebot anfragen →
              </a>
            </div>

            {/* FAQ Section */}
            <h2 className="text-2xl font-bold text-navy font-serif">Häufige Fragen zur Hausverwaltung in Mannheim</h2>

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
                <Link href="/blog/hausverwaltung-qualitaet-kriterien" className="text-teal hover:underline">
                  10 Kriterien für eine gute Hausverwaltung
                </Link>
                {" · "}
                <Link href="/hausverwaltung-mannheim" className="text-teal hover:underline">
                  Zur Mannheim-Stadtseite
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
