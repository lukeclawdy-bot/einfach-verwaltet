import type { Metadata } from "next";
import Link from "next/link";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

export const metadata: Metadata = {
  title: "Befristeter Mietvertrag nach §575 BGB: Voraussetzungen & Risiken 2026 | einfach verwaltet.",
  description:
    "Befristeter Mietvertrag 2026: Wann ist er nach §575 BGB zulässig? Eigenbedarfsbefristung, Abrissbefristung, Risiken unwirksamer Befristung und aktuelle BGH-Rechtsprechung.",
  keywords:
    "Befristeter Mietvertrag, Mietvertrag befristet §575 BGB, Zeitmietvertrag, befristeter Mietvertrag Voraussetzungen, Mietvertrag Befristung unwirksam",
  openGraph: {
    title: "Befristeter Mietvertrag nach §575 BGB: Voraussetzungen 2026",
    description:
      "§575 BGB befristeter Mietvertrag: Was sind die Voraussetzungen? Wann ist die Befristung unwirksam? BGH-aktuell erklärt.",
    url: "https://einfach-verwaltet.de/blog/mietvertrag-befristet",
    siteName: "einfach verwaltet.",
    locale: "de_DE",
    type: "article",
  },
};

const jsonLdArticle = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Befristeter Mietvertrag nach §575 BGB: Voraussetzungen & Risiken 2026",
  description:
    "Wann ist ein befristeter Mietvertrag nach §575 BGB wirksam? Voraussetzungen, Risiken unwirksamer Befristung und BGH-Rechtsprechung für Vermieter.",
  author: { "@type": "Organization", name: "einfach verwaltet." },
  publisher: {
    "@type": "Organization",
    name: "einfach verwaltet.",
    logo: { "@type": "ImageObject", url: "https://einfach-verwaltet.de/logo.png" },
  },
  datePublished: "2026-02-27",
  inLanguage: "de",
  url: "https://einfach-verwaltet.de/blog/mietvertrag-befristet",
};

const jsonLdFaq = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Wann ist ein befristeter Mietvertrag nach §575 BGB zulässig?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Ein Zeitmietvertrag nach §575 BGB ist nur in drei Fällen zulässig: (1) Eigenbedarf — der Vermieter oder ein Familienmitglied will die Wohnung nach Ablauf selbst nutzen. (2) Umbau/Abriss — die Wohnung soll wesentlich umgebaut oder abgerissen werden. (3) Vermietete Werkswohnung — der Mieter ist Arbeitnehmer des Vermieters. Der Befristungsgrund muss bei Vertragsschluss schriftlich mitgeteilt werden.",
      },
    },
    {
      "@type": "Question",
      name: "Was passiert, wenn ein befristeter Mietvertrag unwirksam ist?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Ist die Befristung nach §575 BGB unwirksam — weil kein anerkannter Befristungsgrund vorliegt oder dieser nicht schriftlich mitgeteilt wurde — gilt der Mietvertrag als unbefristet geschlossen. Der Mieter kann dann nur durch ordentliche Kündigung nach §573 BGB oder außerordentliche Kündigung ausziehen.",
      },
    },
    {
      "@type": "Question",
      name: "Kann ein befristeter Mietvertrag verlängert werden?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Ja, ein Zeitmietvertrag kann auf Wunsch des Mieters bis zum Fristende verlängert werden. Der Mieter hat nach §575a BGB das Recht, von Anfang an eine Verlängerung von bis zu 4 Jahren zu verlangen, wenn berechtigte Interessen (Arbeit, Schule, persönliche Umstände) dies erfordern. Außerdem kann der Vermieter formlos eine Verlängerung anbieten.",
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
            <span className="text-gray-700">Befristeter Mietvertrag §575 BGB</span>
          </nav>

          <header className="mb-10">
            <p className="text-teal text-sm font-semibold uppercase tracking-wider mb-3">
              Ratgeber · 8 min Lesezeit
            </p>
            <h1 className="text-3xl md:text-4xl font-bold text-navy font-playfair mb-4 leading-tight">
              Befristeter Mietvertrag nach §575 BGB: Voraussetzungen & Risiken
            </h1>
            <p className="text-gray-500 text-sm">Februar 2026 · einfach verwaltet.</p>
          </header>

          <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed space-y-6">
            <p className="text-xl text-gray-600">
              Ein befristeter Mietvertrag ist im deutschen Mietrecht die Ausnahme, 
              nicht die Regel. §575 BGB erlaubt ihn nur in eng definierten Fällen. 
              Wer diese Regeln missachtet, erhält keinen Zeitmietvertrag — sondern 
              einen unbefristeten mit allen Konsequenzen.
            </p>

            <h2 className="text-2xl font-bold text-navy font-playfair mt-10 mb-4">
              Grundregel: Mietverträge sind unbefristet
            </h2>
            <p>
              Das deutsche Mietrecht schützt Mieter vor willkürlicher Beendigung 
              des Mietverhältnisses. §573 BGB erlaubt die Kündigung nur bei 
              berechtigtem Interesse des Vermieters (Eigenbedarf, Vertragspflichtverletzung, 
              wirtschaftliche Verwertung). Reine Zeitablaufkündigung ist nicht möglich.
            </p>
            <p>
              §575 BGB schafft hiervon eine begrenzte Ausnahme: Den{" "}
              <strong>Zeitmietvertrag</strong>, der automatisch mit Fristablauf 
              endet — aber nur unter strengen Voraussetzungen.
            </p>

            <h2 className="text-2xl font-bold text-navy font-playfair mt-10 mb-4">
              §575 BGB: Die drei anerkannten Befristungsgründe
            </h2>
            <div className="space-y-4">
              {[
                {
                  title: "1. Eigenbedarf (§575 Abs. 1 Nr. 1 BGB)",
                  content: "Der Vermieter will die Wohnung nach Ablauf der Mietzeit für sich selbst, seine Familienangehörigen oder Angehörige seines Haushalts als Wohnraum nutzen. Der Eigenbedarf muss bereits bei Vertragsschluss konkret geplant sein — eine spätere Änderung der Lebensplanung genügt nicht.",
                },
                {
                  title: "2. Wesentlicher Umbau oder Abriss (§575 Abs. 1 Nr. 2 BGB)",
                  content: "Der Vermieter will das Gebäude so wesentlich verändern oder instand setzen, dass die Maßnahmen durch das fortbestehende Mietverhältnis erheblich erschwert würden. Einfache Renovierungen genügen nicht — der Umbau muss die Nutzung der Wohnung während der Bauzeit faktisch ausschließen.",
                },
                {
                  title: "3. Dienstwohnung / Vermietete Werkswohnung (§575 Abs. 1 Nr. 3 BGB)",
                  content: "Der Vermieter will die Wohnung an einen noch zu bestimmenden Nachmieter vermieten, der als Arbeitnehmer bei ihm beschäftigt ist oder bei ihm beschäftigt werden soll. Dieser Befristungsgrund ist in der Praxis selten.",
                },
              ].map((item, i) => (
                <div key={i} className="bg-navy/5 border border-navy/10 rounded-xl p-5">
                  <h3 className="font-bold text-navy mb-2">{item.title}</h3>
                  <p className="text-sm text-gray-700">{item.content}</p>
                </div>
              ))}
            </div>

            <h2 className="text-2xl font-bold text-navy font-playfair mt-10 mb-4">
              Formvorschrift: Schriftliche Mitteilung des Befristungsgrunds
            </h2>
            <p>
              §575 Abs. 1 S. 2 BGB schreibt vor: Der Befristungsgrund muss dem 
              Mieter bei Vertragsschluss <strong>schriftlich mitgeteilt</strong> werden. 
              Diese Mitteilung kann im Mietvertrag selbst erfolgen oder als gesondertes 
              Schreiben, das gleichzeitig mit dem Mietvertrag übergeben wird.
            </p>
            <p className="bg-red-50 border-l-4 border-red-400 p-4 rounded">
              <strong>Risiko:</strong> Fehlt die schriftliche Mitteilung des Befristungsgrunds 
              — auch wenn der mündliche Grund anerkannt wäre — gilt der Mietvertrag als 
              auf unbestimmte Zeit geschlossen (§575 Abs. 1 S. 3 BGB). Der Vermieter 
              kann das Mietverhältnis dann nur noch ordentlich kündigen.
            </p>

            <h2 className="text-2xl font-bold text-navy font-playfair mt-10 mb-4">
              Auskunftsrecht des Mieters (§575 Abs. 3 BGB)
            </h2>
            <p>
              Der Mieter kann vier Monate vor Ablauf der Mietzeit verlangen, dass 
              der Vermieter ihm Auskunft erteilt, ob der Befristungsgrund noch besteht. 
              Gibt der Vermieter keine oder falsche Auskunft, kann der Mieter das 
              Mietverhältnis außerordentlich kündigen.
            </p>

            <h2 className="text-2xl font-bold text-navy font-playfair mt-10 mb-4">
              Verlängerungsrecht des Mieters (§575a BGB)
            </h2>
            <p>
              Auch bei wirksamer Befristung hat der Mieter unter bestimmten 
              Umständen ein Recht auf Verlängerung:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Erhebliche Schwierigkeit, Ersatzwohnraum zu finden (§574 BGB analog)</li>
              <li>Gesundheitliche Gründe oder besondere Härte</li>
              <li>Schulpflichtige Kinder oder Pflegebedürftigkeit</li>
            </ul>
            <p>
              Der Mieter muss das Verlängerungsverlangen spätestens{" "}
              <strong>zwei Monate vor Vertragsende</strong> geltend machen 
              (§575a Abs. 2 BGB). Der Vermieter kann die Verlängerung ablehnen, 
              wenn sein berechtigtes Interesse überwiegt — darüber entscheidet 
              im Streitfall das Gericht.
            </p>

            <h2 className="text-2xl font-bold text-navy font-playfair mt-10 mb-4">
              Häufige Fehler beim Zeitmietvertrag
            </h2>
            <ul className="list-disc pl-6 space-y-3">
              <li>
                <strong>Kein konkreter Befristungsgrund:</strong> „Wir wollen die 
                Wohnung vielleicht irgendwann selbst nutzen" genügt nicht. Der Eigenbedarf 
                muss bei Vertragsschluss ernsthaft und konkret beabsichtigt sein.
              </li>
              <li>
                <strong>Mündliche Befristungsmitteilung:</strong> Jede mündliche Abrede 
                ist wertlos — §575 Abs. 1 S. 2 BGB verlangt Schriftform.
              </li>
              <li>
                <strong>Befristungsgrund fällt nachträglich weg:</strong> Fällt der 
                Eigenbedarfsgrund vor Mietende weg (z.B. Familienangehöriger zieht doch 
                nicht ein), kann der Mieter Schadensersatz verlangen.
              </li>
              <li>
                <strong>Zu kurze Befristung:</strong> Eine Befristung unter einem Jahr 
                sollte gut begründet sein — Gerichte beurteilen sehr kurze Laufzeiten 
                kritisch.
              </li>
            </ul>

            <h2 className="text-2xl font-bold text-navy font-playfair mt-10 mb-4">
              Zeitmietvertrag vs. Staffelmiete vs. Indexmiete
            </h2>
            <p>
              Der Zeitmietvertrag nach §575 BGB ist nicht zu verwechseln mit:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>
                <strong>Staffelmietvertrag (§557a BGB):</strong> Unbefristetes Mietverhältnis 
                mit vorab vereinbarten Mietsteigerungen — keine zeitliche Begrenzung 
                des Mietverhältnisses selbst
              </li>
              <li>
                <strong>Indexmietvertrag (§557b BGB):</strong> Miete an VPI gekoppelt, 
                ebenfalls unbefristet
              </li>
              <li>
                <strong>Probezeit-Klauseln:</strong> Nicht zulässig — das Mietrecht 
                kennt keine Probemietzeit
              </li>
            </ul>

            <h2 className="text-2xl font-bold text-navy font-playfair mt-10 mb-4">
              Praxistipp: Wann lohnt der Zeitmietvertrag?
            </h2>
            <p>
              Ein Zeitmietvertrag lohnt sich, wenn Sie die Wohnung nach einem 
              klar planbaren Zeitraum selbst benötigen — etwa bei bevorstehendem 
              Renteneintritt, geplantem Rückkehr aus dem Ausland oder konkreter 
              Renovierungsmaßnahme. Wichtig: Planen Sie ausreichend Puffer ein und 
              formulieren Sie den Befristungsgrund im Mietvertrag präzise und vollständig.
            </p>
            <p>
              Wer lediglich flexibel bleiben will, ohne konkreten Anlass: Lieber 
              unbefristeter Vertrag mit sorgfältig formulierter Eigenbedarfsklausel — 
              das ist rechtssicherer als ein angreifbarer Zeitmietvertrag.
            </p>

            <h2 className="text-2xl font-bold text-navy font-playfair mt-10 mb-4">
              Häufige Fragen zum befristeten Mietvertrag
            </h2>
            <div className="space-y-4">
              {[
                {
                  q: "Wann ist ein befristeter Mietvertrag nach §575 BGB zulässig?",
                  a: "Ein Zeitmietvertrag ist nur in drei Fällen zulässig: (1) Eigenbedarf — der Vermieter oder ein Familienangehöriger will die Wohnung selbst nutzen. (2) Wesentlicher Umbau oder Abriss. (3) Dienstwohnung für einen zukünftigen Arbeitnehmer. Der Befristungsgrund muss schriftlich im Vertrag mitgeteilt werden.",
                },
                {
                  q: "Was passiert, wenn ein befristeter Mietvertrag unwirksam ist?",
                  a: "Ist die Befristung nach §575 BGB unwirksam — weil kein anerkannter Befristungsgrund vorliegt oder er nicht schriftlich mitgeteilt wurde — gilt der Mietvertrag als unbefristet. Der Mieter genießt dann vollen Kündigungsschutz nach §573 BGB.",
                },
                {
                  q: "Kann ein befristeter Mietvertrag verlängert werden?",
                  a: "Ja. Unter bestimmten Voraussetzungen hat der Mieter ein Verlängerungsrecht (§575a BGB) — z.B. bei erheblicher Schwierigkeit, Ersatzwohnraum zu finden, oder bei Härtefällen. Das Verlängerungsverlangen muss spätestens zwei Monate vor Vertragsende geltend gemacht werden.",
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
              Rechtssichere Mietverträge mit einfach verwaltet.
            </h3>
            <p className="text-gray-600 mb-4">
              Unsere Hausverwaltung erstellt und prüft Mietverträge nach aktuellem 
              Recht — inklusive BGH-konformer Klauseln und rechtssicherer Befristungsregelungen.
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
