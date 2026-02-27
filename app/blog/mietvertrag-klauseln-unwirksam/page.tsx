import type { Metadata } from "next";
import Link from "next/link";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

export const metadata: Metadata = {
  title: "Unwirksame Klauseln im Mietvertrag — Was Vermieter 2025 wissen müssen | einfach verwaltet.",
  description:
    "8 häufige unwirksame Mietvertragsklauseln nach §307 BGB: Schönheitsreparaturen, Kleinreparaturklausel, Haustierhaltung & mehr. Was ist erlaubt, was nicht?",
  keywords:
    "unwirksame Mietvertragsklauseln, §307 BGB, AGB Mietvertrag, Schönheitsreparaturen unwirksam, Kleinreparaturklausel",
  openGraph: {
    title: "Unwirksame Klauseln im Mietvertrag — Was Vermieter 2025 wissen müssen",
    description:
      "8 häufige unwirksame Klauseln im Mietvertrag — §307 BGB AGB-Kontrolle für Vermieter erklärt.",
    url: "https://einfach-verwaltet.de/blog/mietvertrag-klauseln-unwirksam",
    siteName: "einfach verwaltet.",
    locale: "de_DE",
    type: "article",
  },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Was macht eine Mietvertragsklausel unwirksam?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Standardmietverträge sind Allgemeine Geschäftsbedingungen (AGB) nach §305 BGB und unterliegen der Inhaltskontrolle nach §307 BGB. Eine Klausel ist unwirksam, wenn sie den Mieter unangemessen benachteiligt, gegen gesetzliche Grundsätze verstößt oder unklar formuliert ist.",
      },
    },
    {
      "@type": "Question",
      name: "Sind Schönheitsreparaturklauseln generell unwirksam?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Starre Fristenpläne (z.B. 'alle 3 Jahre Küche, alle 5 Jahre Wohnräume') sind nach BGH-Rechtsprechung generell unwirksam. Wirksam sind nur flexible Klauseln, die auf den tatsächlichen Renovierungsbedarf abstellen — und nur, wenn die Wohnung bei Einzug frisch renoviert übergeben wurde.",
      },
    },
    {
      "@type": "Question",
      name: "Was passiert, wenn eine Klausel im Mietvertrag unwirksam ist?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Unwirksame Klauseln werden durch das gesetzliche Mietrecht ersetzt (§306 BGB). Der Rest des Mietvertrags bleibt wirksam. Der Vermieter kann aus einer unwirksamen Klausel keine Ansprüche herleiten — Forderungen aus solchen Klauseln sind unbegründet.",
      },
    },
  ],
};

const unwirksameKlauseln = [
  {
    title: "Schönheitsreparaturen mit starrem Fristenplan",
    legal: "§307 BGB, BGH VIII ZR 361/03",
    problem: "Klauseln wie \"Küche und Bad alle 3 Jahre, Wohnräume alle 5 Jahre\" sind unabhängig vom tatsächlichen Zustand — das benachteiligt Mieter unangemessen.",
    wirksam: "Nur flexible Klauseln mit Bedarfsvorbehalt sind zulässig. Und nur wenn die Wohnung bei Einzug frisch renoviert war.",
  },
  {
    title: "Kleinreparaturklausel ohne Betragsobergrenze",
    legal: "§307 BGB, BGH VIII ZR 152/05",
    problem: "Vermieter dürfen Kleinstschäden auf Mieter abwälzen — aber nur mit einer klaren Obergrenze pro Einzelfall (BGH: max. €75–100) UND einer Jahresobergrenze (max. 6-8% der Jahresmiete).",
    wirksam: "Klausel mit Einzelbetragsgrenze €75-100 und Jahresgesamtgrenze 8% der Jahresmiete ist wirksam.",
  },
  {
    title: "Absolutes Haustierhaltungsverbot",
    legal: "§307 BGB, BGH VIII ZR 340/06",
    problem: "Ein generelles Verbot aller Haustiere ist unwirksam, weil es auch harmlose Kleintiere erfasst (Hamster, Vögel), die keine Belastung darstellen.",
    wirksam: "Klausel, die Kleintiere erlaubt und große Tiere von Genehmigung abhängig macht, ist zulässig.",
  },
  {
    title: "Endrenovierungsklausel ohne Rücksicht auf Mietdauer",
    legal: "§307 BGB, BGH VIII ZR 178/05",
    problem: "Klauseln, die Renovierung bei Auszug unabhängig vom tatsächlichen Zustand verlangen, sind unwirksam — besonders wenn der Mieter erst kurz eingezogen ist.",
    wirksam: "Nur bei tatsächlichem Renovierungsbedarf und anteilig gemessen an der Mietdauer.",
  },
  {
    title: "Abgeltungsklauseln für laufende Schönheitsreparaturen",
    legal: "§307 BGB, BGH VIII ZR 181/07",
    problem: "Klauseln, die den Mieter bei Auszug zur Zahlung eines Geldbetrags für \"nicht ausgeführte Schönheitsreparaturen\" verpflichten, ohne dass tatsächliche Renovierungspflicht bestand, sind unwirksam.",
    wirksam: "Abgeltungsklauseln sind nur zulässig, wenn die zugrundeliegende Renovierungspflicht wirksam vereinbart war.",
  },
  {
    title: "Verpflichtung zur Fachhandwerkerpflicht für Kleinreparaturen",
    legal: "§307 BGB",
    problem: "Klauseln, die bei Kleinreparaturen zwingend Fachbetriebe vorschreiben, belasten den Mieter unangemessen — besonders bei Bagatellfällen.",
    wirksam: "Fachbetriebspflicht nur für sicherheitsrelevante Arbeiten (z.B. Gas, Elektro) zulässig.",
  },
  {
    title: "Bürgschaftsklauseln mit zu weitgehendem Umfang",
    legal: "§307, §765 BGB",
    problem: "Klauseln, die eine selbstschuldnerische Bürgschaft für alle denkbaren Forderungen ohne Betragsobergrenze verlangen, können den Bürgen unangemessen belasten.",
    wirksam: "Bürgschaft mit klarer Betragsobergrenze und sachlichem Bezug ist zulässig.",
  },
  {
    title: "Verbot des Untermietens ohne triftigen Grund",
    legal: "§553 BGB",
    problem: "Mieter haben nach §553 BGB einen Anspruch auf Erlaubnis zur Untervermietung, wenn ein berechtigtes Interesse besteht. Pauschales Verbot ist unwirksam.",
    wirksam: "Vermieter darf Untervermietung von Genehmigung abhängig machen, darf sie aber nicht grundlos verweigern.",
  },
  {
    title: "Formularklauseln zur Kostenumlage für Verwaltungskosten",
    legal: "§307 BGB, §2 BetrKV",
    problem: "Verwaltungskosten sind nach §2 BetrKV nicht als Betriebskosten umlagefähig. Klauseln, die Verwaltungskosten als Betriebskosten deklarieren, sind unwirksam.",
    wirksam: "Nur die in §2 BetrKV genannten Positionen dürfen als Betriebskosten umgelegt werden.",
  },
  {
    title: "Klauseln zur Verschlechterungshaftung für unvermeidlichen Verschleiß",
    legal: "§538 BGB, §307 BGB",
    problem: "Mieter haften nach §538 BGB nicht für Verschlechterungen durch vertragsgemäßen Gebrauch. Klauseln, die dies dennoch vorsehen, sind unwirksam.",
    wirksam: "Haftung nur für Schäden durch übermäßigen oder nicht vertragsgemäßen Gebrauch.",
  },
];

export default function MietvertragKlauselnUnwirksam() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <Navbar />
      <main className="bg-warm-white min-h-screen pt-16">
        <div className="bg-navy py-16 px-6">
          <div className="max-w-3xl mx-auto">
            <div className="inline-block bg-teal/20 text-teal text-xs font-semibold px-3 py-1 rounded-full mb-4">
              Ratgeber · Mietrecht
            </div>
            <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Unwirksame Klauseln im Mietvertrag — Was Vermieter 2025 wissen müssen
            </h1>
            <p className="text-white/70 text-lg">
              §307 BGB, AGB-Kontrolle und 10 Klauseln, die regelmäßig vor Gericht scheitern.
            </p>
            <div className="flex items-center gap-4 mt-6 text-white/50 text-sm">
              <span>Februar 2026</span>
              <span>·</span>
              <span>9 min Lesezeit</span>
            </div>
          </div>
        </div>

        <article className="max-w-3xl mx-auto px-4 py-12">
          <nav className="text-sm text-gray-500 mb-8">
            <Link href="/" className="hover:text-teal">Startseite</Link>
            <span className="mx-2">›</span>
            <Link href="/blog" className="hover:text-teal">Ratgeber</Link>
            <span className="mx-2">›</span>
            <span className="text-gray-700">Unwirksame Mietvertragsklauseln</span>
          </nav>

          <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed space-y-6">

            <h2 className="text-2xl font-bold text-navy mt-2 mb-4">
              Warum viele Standardmietverträge unwirksame Klauseln enthalten
            </h2>
            <p>
              Der Bundesgerichtshof (BGH) hat in den letzten 20 Jahren zahlreiche weit verbreitete Mietvertragsklauseln für unwirksam erklärt. Trotzdem kursieren viele alte Formularmietverträge weiter — aus dem Internet, von Maklern oder Hausverwaltungen, die ihre Vorlagen nicht aktualisiert haben.
            </p>
            <p>
              Das Problem: Als Vermieter haben Sie die <strong>Beweislast</strong>. Wenn Sie aus einer unwirksamen Klausel Ansprüche herleiten — etwa Schönheitsreparaturen bei Auszug oder Kleinreparaturkosten — und der Mieter widerspricht, verlieren Sie vor Gericht. Ohne Anspruch, ohne Ersatz.
            </p>
            <div className="not-prose bg-amber/10 border border-amber/30 rounded-xl p-4 my-4 text-sm">
              <strong className="text-navy">Rechtsgrundlage:</strong> Standardmietverträge gelten als Allgemeine Geschäftsbedingungen (AGB) nach §305 ff. BGB. Die AGB-Kontrolle nach §307 BGB setzt Grenzen: Klauseln, die den Mieter unangemessen benachteiligen, sind nichtig — auch wenn beide Parteien unterschrieben haben.
            </div>

            <h2 className="text-2xl font-bold text-navy mt-10 mb-4">
              10 häufige unwirksame Klauseln im Überblick
            </h2>

            <div className="not-prose space-y-5 my-4">
              {unwirksameKlauseln.map((klausel, i) => (
                <div key={i} className="bg-white border border-navy/10 rounded-2xl p-5 shadow-sm">
                  <div className="flex items-start gap-3 mb-3">
                    <div className="w-7 h-7 rounded-full bg-red-50 border border-red-200 flex items-center justify-center text-xs font-bold text-red-600 flex-shrink-0">
                      ✗
                    </div>
                    <div>
                      <p className="font-bold text-navy">{klausel.title}</p>
                      <p className="text-xs text-teal font-mono mt-0.5">{klausel.legal}</p>
                    </div>
                  </div>
                  <div className="space-y-2 pl-10">
                    <div className="text-sm">
                      <span className="font-semibold text-red-700 text-xs uppercase tracking-wide">Problem: </span>
                      <span className="text-text-light">{klausel.problem}</span>
                    </div>
                    <div className="text-sm">
                      <span className="font-semibold text-teal text-xs uppercase tracking-wide">Was wirksam ist: </span>
                      <span className="text-text-light">{klausel.wirksam}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <h2 className="text-2xl font-bold text-navy mt-10 mb-4">
              Was tun, wenn der Mietvertrag unwirksame Klauseln enthält?
            </h2>
            <p>
              <strong>Als Vermieter</strong> sollten Sie Ihren Mietvertrag von einem Fachanwalt für Mietrecht oder einer erfahrenen Hausverwaltung prüfen lassen, bevor Sie ihn neuen Mietern vorlegen. Unwirksame Klauseln können bei Auszug zu erheblichen Kosten führen — etwa wenn Sie auf Schönheitsreparaturen verzichten müssen.
            </p>
            <p>
              Eine unwirksame Klausel führt nach §306 BGB nicht zur Unwirksamkeit des gesamten Mietvertrags, sondern wird durch die gesetzlichen Regelungen ersetzt. Das schützt den Mieter — und belastet Sie als Vermieter.
            </p>

            <h2 className="text-2xl font-bold text-navy mt-10 mb-4">
              Häufige Fragen zu unwirksamen Mietvertragsklauseln
            </h2>

            <div className="not-prose space-y-4 my-4">
              <div className="bg-white border border-navy/10 rounded-xl p-5">
                <p className="font-semibold text-navy mb-2">Was macht eine Mietvertragsklausel unwirksam?</p>
                <p className="text-text-light text-sm">Standardmietverträge unterliegen der AGB-Kontrolle nach §307 BGB. Eine Klausel ist unwirksam, wenn sie den Mieter unangemessen benachteiligt, gegen gesetzliche Grundsätze verstößt oder unklar formuliert ist.</p>
              </div>
              <div className="bg-white border border-navy/10 rounded-xl p-5">
                <p className="font-semibold text-navy mb-2">Sind Schönheitsreparaturklauseln generell unwirksam?</p>
                <p className="text-text-light text-sm">Starre Fristenpläne (z.B. "alle 3 Jahre Küche") sind nach BGH-Rechtsprechung generell unwirksam. Wirksam sind nur flexible Klauseln bei tatsächlichem Bedarf — und nur wenn die Wohnung bei Einzug frisch renoviert war.</p>
              </div>
              <div className="bg-white border border-navy/10 rounded-xl p-5">
                <p className="font-semibold text-navy mb-2">Was passiert, wenn eine Klausel unwirksam ist?</p>
                <p className="text-text-light text-sm">Unwirksame Klauseln werden durch das gesetzliche Mietrecht ersetzt (§306 BGB). Der Rest des Mietvertrags bleibt wirksam. Der Vermieter kann aus unwirksamen Klauseln keine Ansprüche herleiten.</p>
              </div>
            </div>

            <div className="not-prose bg-teal/10 border border-teal/20 rounded-2xl p-6 my-8">
              <h3 className="text-lg font-bold text-navy mb-2">Mietvertrag prüfen lassen — oder professionell verwalten</h3>
              <p className="text-text-light text-sm mb-4">
                Mit einfach verwaltet. nutzen Sie aktuelle, rechtssichere Mustermietverträge und eine erfahrene Verwaltung, die Ihre Verträge kennt.{" "}
                <Link href="/preise" className="text-teal underline hover:no-underline">Preise ansehen →</Link>
              </p>
              <Link
                href="/anfrage"
                className="inline-flex items-center gap-2 bg-amber hover:bg-amber/90 text-white font-semibold px-6 py-3 rounded-xl transition-colors text-sm"
              >
                Kostenloses Angebot anfragen →
              </Link>
            </div>

          </div>
        </article>
      </main>
      <Footer />
    </>
  );
}
