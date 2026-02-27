import type { Metadata } from "next";
import Link from "next/link";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

export const metadata: Metadata = {
  title: "Eigenbedarfskündigung: Voraussetzungen, Fristen und was Vermieter beachten müssen | einfach verwaltet.",
  description:
    "Eigenbedarfskündigung nach §573 BGB: Welche Voraussetzungen gelten? Was sind die Kündigungsfristen? Welche Fehler müssen Vermieter vermeiden? Der vollständige Ratgeber.",
  keywords:
    "Eigenbedarfskündigung Voraussetzungen, §573 BGB Eigenbedarf, Eigenbedarfskündigung Fristen, Eigenbedarfskündigung Anforderungen, Eigenbedarf anmelden",
  openGraph: {
    title: "Eigenbedarfskündigung: Voraussetzungen, Fristen und was Vermieter beachten müssen",
    description:
      "§573 BGB Eigenbedarf: Voraussetzungen, Verfahren, Fehler vermeiden und Mieterrechte — der komplette Leitfaden für Vermieter.",
    url: "https://einfach-verwaltet.de/blog/eigenbedarfskuendigung-anforderungen",
    siteName: "einfach verwaltet.",
    locale: "de_DE",
    type: "article",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Eigenbedarfskündigung: Voraussetzungen, Fristen und was Vermieter beachten müssen",
  description:
    "Vollständiger Ratgeber zu Eigenbedarfskündigung nach §573 BGB: Voraussetzungen, Fristen, Verfahren und häufige Fehler.",
  author: { "@type": "Organization", name: "einfach verwaltet." },
  publisher: {
    "@type": "Organization",
    name: "einfach verwaltet.",
    logo: { "@type": "ImageObject", url: "https://einfach-verwaltet.de/logo.png" },
  },
  datePublished: "2026-02-27",
  inLanguage: "de",
  url: "https://einfach-verwaltet.de/blog/eigenbedarfskuendigung-anforderungen",
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Welche Voraussetzungen müssen für eine Eigenbedarfskündigung erfüllt sein?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Nach §573 Abs. 2 Nr. 2 BGB muss der Vermieter vernünftige und nachvollziehbare Gründe für den Eigenbedarf haben. Der Eigenbedarf muss für den Vermieter selbst oder für nahe Familienangehörige (Ehegatten, Kinder, Eltern, Geschwister, Schwiegereltern) bestehen. Der Bedarf muss ernsthaft und konkret sein — eine 'Vorsorgekündigung' für vage zukünftige Pläne ist unwirksam. Außerdem muss die Kündigung schriftlich erklärt werden und den Bedarfsgrund genau benennen.",
      },
    },
    {
      "@type": "Question",
      name: "Welche Kündigungsfristen gelten bei Eigenbedarfskündigung?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Die Fristen richten sich nach §573c BGB: Mietdauer bis 5 Jahre: 3 Monate Frist. Mietdauer 5–8 Jahre: 6 Monate Frist. Mietdauer über 8 Jahre: 9 Monate Frist. Die Frist beginnt mit Zugang des Kündigungsschreibens beim Mieter.",
      },
    },
    {
      "@type": "Question",
      name: "Kann der Mieter einer Eigenbedarfskündigung widersprechen?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Ja. Nach §574 BGB kann der Mieter der Kündigung widersprechen, wenn ein Härtefall vorliegt. Anerkannte Härtegründe sind: schwere Krankheit, hohes Alter, Schwangerschaft, fehlende zumutbare Ersatzwohnung am Ort, lange Verwurzelung im sozialen Umfeld. Der Widerspruch muss spätestens 2 Monate vor dem Beendigungstermin schriftlich eingelegt werden.",
      },
    },
    {
      "@type": "Question",
      name: "Was passiert, wenn Eigenbedarf nur vorgetäuscht wurde?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Wer Eigenbedarf nur vortäuscht oder ihn nach dem Auszug des Mieters nicht realisiert, haftet nach §573 Abs. 2 Nr. 2 BGB und der BGH-Rechtsprechung auf Schadensersatz. Der Mieter kann Umzugskosten, Mehrmiete in der neuen Wohnung und weitere Schäden geltend machen. In schweren Fällen kann dies sogar den Tatbestand des Betruges erfüllen.",
      },
    },
    {
      "@type": "Question",
      name: "Wie muss das Kündigungsschreiben bei Eigenbedarfskündigung aussehen?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Das Kündigungsschreiben muss: schriftlich verfasst sein, den konkreten Eigenbedarf begründen (Name der Person, die einziehen wird, und deren Grund), die gesetzliche Kündigungsfrist einhalten, auf die Widerspruchsmöglichkeit des Mieters hinweisen und per Einschreiben oder persönlicher Übergabe zugestellt werden. Formfehler machen die Kündigung unwirksam.",
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
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <Navbar />
      <main className="bg-warm-white min-h-screen pt-16">
        <article className="max-w-3xl mx-auto px-4 py-16">
          <nav className="text-sm text-gray-500 mb-8">
            <Link href="/" className="hover:text-teal">Startseite</Link>
            <span className="mx-2">›</span>
            <Link href="/blog" className="hover:text-teal">Ratgeber</Link>
            <span className="mx-2">›</span>
            <span className="text-gray-700">Eigenbedarfskündigung Anforderungen</span>
          </nav>

          <header className="mb-10">
            <p className="text-teal text-sm font-semibold uppercase tracking-wider mb-3">
              Ratgeber · 10 min Lesezeit
            </p>
            <h1 className="text-3xl md:text-4xl font-bold text-navy font-playfair mb-4 leading-tight">
              Eigenbedarfskündigung: Voraussetzungen, Fristen und was Vermieter beachten müssen
            </h1>
            <p className="text-gray-500 text-sm">Februar 2026 · einfach verwaltet.</p>
          </header>

          <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed space-y-6">
            <p className="text-lg font-medium text-gray-800 leading-relaxed">
              Die Eigenbedarfskündigung ist eines der sensibelsten Themen im deutschen Mietrecht. 
              Vermieter haben das Recht, ihre Wohnung für den eigenen Bedarf oder den von 
              Familienangehörigen zu nutzen — müssen dabei aber strenge formelle und 
              inhaltliche Anforderungen erfüllen. Fehler kosten Zeit, Geld und Nerven.
            </p>

            <h2 className="text-2xl font-bold text-navy font-playfair mt-10 mb-4">
              Rechtsgrundlage: §573 BGB — Berechtigtes Interesse des Vermieters
            </h2>
            <p>
              Das Bürgerliche Gesetzbuch kennt grundsätzlich <strong>keinen freien Kündigungsgrund</strong> 
              für Vermieter von Wohnraum. Eine ordentliche Kündigung ist nur möglich, wenn 
              der Vermieter ein <em>berechtigtes Interesse</em> nachweisen kann (§573 Abs. 1 BGB). 
              Als gesetzlich anerkannter Fall gilt nach §573 Abs. 2 Nr. 2 BGB der Eigenbedarf: 
              der Vermieter benötigt die Wohnung als Wohnung für sich selbst, 
              seine Familienangehörigen oder Angehörige seines Haushalts.
            </p>

            <h2 className="text-2xl font-bold text-navy font-playfair mt-10 mb-4">
              Voraussetzungen der Eigenbedarfskündigung im Detail
            </h2>

            <h3 className="text-xl font-bold text-navy font-playfair mt-8 mb-3">
              1. Berechtigte Personen
            </h3>
            <p>
              Eigenbedarf kann für folgende Personen geltend gemacht werden:
            </p>
            <ul className="list-disc pl-6 space-y-1 text-gray-700">
              <li>Den Vermieter selbst</li>
              <li>Ehegatten oder eingetragene Lebenspartner</li>
              <li>Eltern, Kinder und Enkelkinder</li>
              <li>Geschwister</li>
              <li>Schwiegereltern und Schwiegerkinder (str.)</li>
              <li>Andere Haushaltsmitglieder (z.B. Pflegepersonen)</li>
            </ul>
            <p>
              <strong>Nicht berechtigt:</strong> Nichten, Neffen, Cousins und entfernte Bekannte. 
              Auch für Gesellschafter einer GmbH (die als Vermieter auftritt) kann kein 
              Eigenbedarf geltend gemacht werden — Eigenbedarf setzt eine natürliche Person 
              als Vermieter voraus.
            </p>

            <h3 className="text-xl font-bold text-navy font-playfair mt-8 mb-3">
              2. Ernsthafter und konkreter Bedarf
            </h3>
            <p>
              Der Eigenbedarf muss <strong>real und nachvollziehbar</strong> sein. 
              Die Rechtsprechung verlangt konkrete Gründe:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700">
              <li>
                Die begünstigte Person muss einen echten Wohnbedarf haben 
                (z.B. Umzug in die Stadt wegen Studium, Arbeit, Pflege eines Elternteils)
              </li>
              <li>
                Der Bedarf darf nicht durch eine andere, gleichwertige Wohnung des Vermieters 
                bereits gedeckt sein
              </li>
              <li>
                Eine Vorsorgekündigung ("falls ich irgendwann brauche") ist unzulässig
              </li>
            </ul>

            <h3 className="text-xl font-bold text-navy font-playfair mt-8 mb-3">
              3. Verhältnismäßigkeit
            </h3>
            <p>
              Wenn der Vermieter mehrere Wohnungen besitzt und eine leer steht oder 
              für den beabsichtigten Bedarf geeigneter wäre, kann die Kündigung 
              unverhältnismäßig und damit unwirksam sein. 
              Der Bundesgerichtshof (BGH) hat hier wiederholt zugunsten von Mietern entschieden.
            </p>

            <h2 className="text-2xl font-bold text-navy font-playfair mt-10 mb-4">
              Kündigungsfristen: §573c BGB
            </h2>

            <div className="bg-navy/5 rounded-xl p-6 border border-navy/10 my-6">
              <h3 className="text-lg font-bold text-navy mb-4">Kündigungsfristen bei Eigenbedarfskündigung</h3>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between py-2 border-b border-navy/10">
                  <span>Mietdauer bis 5 Jahre</span>
                  <span className="font-semibold text-navy">3 Monate</span>
                </div>
                <div className="flex justify-between py-2 border-b border-navy/10">
                  <span>Mietdauer 5–8 Jahre</span>
                  <span className="font-semibold text-navy">6 Monate</span>
                </div>
                <div className="flex justify-between py-2">
                  <span>Mietdauer über 8 Jahre</span>
                  <span className="font-semibold text-navy">9 Monate</span>
                </div>
              </div>
              <p className="text-xs text-gray-500 mt-3">
                Die Frist beginnt mit Zugang des Kündigungsschreibens beim Mieter 
                und läuft zum Ende eines Kalendermonats ab.
              </p>
            </div>

            <h2 className="text-2xl font-bold text-navy font-playfair mt-10 mb-4">
              Das korrekte Kündigungsschreiben: Formale Anforderungen
            </h2>
            <p>
              Das Kündigungsschreiben muss folgende Elemente enthalten, um wirksam zu sein:
            </p>
            <ol className="list-decimal pl-6 space-y-3 text-gray-700">
              <li>
                <strong>Schriftform (§568 BGB):</strong> Die Kündigung muss handschriftlich 
                unterzeichnet sein — eine E-Mail oder Fax ist nicht ausreichend.
              </li>
              <li>
                <strong>Name der begünstigten Person:</strong> Der Vermieter muss den Namen 
                der Person angeben, für die er die Wohnung benötigt.
              </li>
              <li>
                <strong>Konkreter Bedarfsgrund:</strong> Warum benötigt diese Person 
                die Wohnung? Keine allgemeinen Floskeln — konkrete Darlegung erforderlich.
              </li>
              <li>
                <strong>Kündigungstermin:</strong> Das Datum, zu dem das Mietverhältnis 
                enden soll (mindestens die gesetzliche Frist einhalten).
              </li>
              <li>
                <strong>Hinweis auf Widerspruchsrecht:</strong> Der Mieter muss über sein 
                Recht auf Widerspruch nach §574 BGB informiert werden.
              </li>
              <li>
                <strong>Zustellung:</strong> Per Einschreiben mit Rückschein oder 
                persönliche Übergabe gegen Quittung — für einen Zugangsnachweis.
              </li>
            </ol>

            <h2 className="text-2xl font-bold text-navy font-playfair mt-10 mb-4">
              Häufige Fehler bei der Eigenbedarfskündigung
            </h2>
            <ul className="list-disc pl-6 space-y-2 text-gray-700">
              <li>
                <strong>Unzureichende Begründung:</strong> Vage Angaben wie "Ich möchte 
                selbst einziehen" ohne konkrete Darlegung des Bedarfs führen zur Unwirksamkeit.
              </li>
              <li>
                <strong>Keine Schriftform:</strong> Mündliche Kündigung oder E-Mail ist unwirksam.
              </li>
              <li>
                <strong>Falsche Frist:</strong> Zu kurze Kündigungsfrist macht die Kündigung nicht 
                unwirksam, verlängert aber die tatsächliche Frist auf das gesetzliche Minimum.
              </li>
              <li>
                <strong>Vorgetäuschter Eigenbedarf:</strong> Wer Eigenbedarf nur vorspiegelt und 
                ihn nicht realisiert, haftet auf Schadensersatz — inklusive höherer Mietkosten, 
                die der Mieter in der neuen Wohnung zahlt.
              </li>
              <li>
                <strong>Kündigung durch GmbH oder GbR:</strong> Juristische Personen können 
                keinen Eigenbedarf geltend machen.
              </li>
            </ul>

            <h2 className="text-2xl font-bold text-navy font-playfair mt-10 mb-4">
              Mieterrechte: Soziale Härte und Widerspruch
            </h2>
            <p>
              Selbst bei formal korrekter Eigenbedarfskündigung hat der Mieter nach §574 BGB 
              das Recht, der Kündigung zu widersprechen, wenn:
            </p>
            <ul className="list-disc pl-6 space-y-1 text-gray-700">
              <li>Ein Umzug aus gesundheitlichen Gründen nicht zumutbar ist</li>
              <li>Der Mieter sehr alt oder schwer krank ist</li>
              <li>Eine Schwangerschaft vorliegt</li>
              <li>Keine zumutbare Ersatzwohnung am Ort gefunden werden kann</li>
              <li>Kinder im schulpflichtigen Alter betroffen sind (im Extremfall)</li>
            </ul>
            <p>
              Der Widerspruch muss spätestens 2 Monate vor dem Beendigungstermin schriftlich 
              eingelegt werden. Über den Widerspruch entscheidet im Streitfall das Amtsgericht.
            </p>

            <div className="bg-teal/10 border border-teal/20 rounded-xl p-6 my-8">
              <p className="font-semibold text-navy mb-2">Professionelle Verwaltung schützt Vermieter</p>
              <p className="text-gray-700 text-sm mb-4">
                Eine professionelle Hausverwaltung unterstützt Sie bei rechtssicheren 
                Kündigungsverfahren und erkennt frühzeitig mögliche Risiken. 
                Sprechen Sie uns an — wir beraten Sie gern.
              </p>
              <Link
                href="/anfrage"
                className="inline-block bg-teal text-white px-6 py-3 rounded-xl font-semibold hover:bg-teal/85 transition-all"
              >
                Jetzt Beratungsgespräch vereinbaren →
              </Link>
            </div>

            <h2 className="text-2xl font-bold text-navy font-playfair mt-10 mb-4">
              Häufige Fragen zur Eigenbedarfskündigung
            </h2>

            <div className="space-y-4">
              {[
                {
                  q: "Welche Voraussetzungen müssen für eine Eigenbedarfskündigung erfüllt sein?",
                  a: "Nach §573 Abs. 2 Nr. 2 BGB muss der Eigenbedarf für den Vermieter selbst oder nahe Familienangehörige bestehen, ernsthaft und konkret sein sowie schriftlich mit konkretem Bedarfsgrund begründet werden. Vage Vorsorgekündigungen sind unwirksam.",
                },
                {
                  q: "Welche Kündigungsfristen gelten bei Eigenbedarfskündigung?",
                  a: "Nach §573c BGB: Bis 5 Jahre Mietdauer = 3 Monate Frist. 5–8 Jahre = 6 Monate. Über 8 Jahre = 9 Monate. Die Frist beginnt mit Zugang des Kündigungsschreibens.",
                },
                {
                  q: "Kann der Mieter einer Eigenbedarfskündigung widersprechen?",
                  a: "Ja. Nach §574 BGB kann der Mieter widersprechen, wenn ein Härtefall vorliegt (schwere Krankheit, hohes Alter, Schwangerschaft, fehlende zumutbare Ersatzwohnung). Der Widerspruch muss spätestens 2 Monate vor dem Beendigungstermin schriftlich erfolgen.",
                },
                {
                  q: "Was passiert, wenn Eigenbedarf nur vorgetäuscht wurde?",
                  a: "Der Vermieter haftet auf Schadensersatz — einschließlich Umzugskosten und Mehrmiete des Mieters in der neuen Wohnung. In schweren Fällen kann es strafrechtlich als Betrug gewertet werden.",
                },
                {
                  q: "Wie muss das Kündigungsschreiben bei Eigenbedarfskündigung aussehen?",
                  a: "Es muss schriftlich sein, den Namen der begünstigten Person sowie den konkreten Bedarfsgrund nennen, den Kündigungstermin angeben und auf das Widerspruchsrecht des Mieters hinweisen. Zustellung per Einschreiben empfohlen.",
                },
              ].map((item, i) => (
                <div key={i} className="bg-white rounded-xl p-6 border border-gray-100">
                  <h3 className="font-bold text-navy mb-2">{item.q}</h3>
                  <p className="text-text-light text-sm leading-relaxed">{item.a}</p>
                </div>
              ))}
            </div>

            <div className="mt-10 pt-8 border-t border-gray-200">
              <p className="text-sm text-gray-500 mb-3">Weitere Ratgeber:</p>
              <div className="flex flex-wrap gap-3">
                <Link href="/blog/eigenbedarfskuendigung-fristen" className="text-teal text-sm hover:underline">
                  Eigenbedarfskündigung: Fristen im Detail →
                </Link>
                <Link href="/blog/mietrecht-aenderungen-2026" className="text-teal text-sm hover:underline">
                  Mietrecht 2026: Was gilt? →
                </Link>
                <Link href="/blog/vermieterrechte-mietrecht" className="text-teal text-sm hover:underline">
                  Vermieterrechte im Mietrecht →
                </Link>
              </div>
            </div>
          </div>
        </article>
      </main>
      <Footer />
    </>
  );
}
