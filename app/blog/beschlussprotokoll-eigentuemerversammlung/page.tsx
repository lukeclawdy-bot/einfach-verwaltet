import type { Metadata } from "next";
import Link from "next/link";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

export const metadata: Metadata = {
  title: "Beschlussprotokoll Eigentümerversammlung: Muster, Pflichten & Tipps 2026",
  description:
    "Alles zum Beschlussprotokoll der WEG-Eigentümerversammlung: Pflichtangaben nach § 24 WEG, Muster, häufige Fehler und kostenloser Generator. Jetzt lesen.",
  openGraph: {
    title: "Beschlussprotokoll WEG 2026 — Was muss rein?",
    description:
      "Rechtssicheres Beschlussprotokoll für die Eigentümerversammlung erstellen: Pflichtangaben, WEG-Reform 2020, Muster & kostenloser KI-Generator.",
    type: "article",
  },
};

const articleStructuredData = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Beschlussprotokoll Eigentümerversammlung: Pflichten, Muster & Tipps 2026",
  description:
    "Rechtssicheres Beschlussprotokoll für WEG-Versammlungen erstellen: Pflichtangaben nach § 24 WEG, WEG-Reform 2020, häufige Fehler und KI-Generator.",
  author: { "@type": "Organization", name: "einfach verwaltet." },
  publisher: {
    "@type": "Organization",
    name: "einfach verwaltet.",
    url: "https://einfach-verwaltet.de",
  },
  datePublished: "2026-02-26",
  dateModified: "2026-02-26",
  mainEntityOfPage: {
    "@type": "WebPage",
    "@id": "https://einfach-verwaltet.de/blog/beschlussprotokoll-eigentuemerversammlung",
  },
};

const faqStructuredData = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Wer muss das Beschlussprotokoll der Eigentümerversammlung erstellen?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Nach § 24 Abs. 6 WEG ist der Verwalter verpflichtet, über die Beschlüsse der Eigentümerversammlung ein Protokoll aufzunehmen. Der Versammlungsleiter und der Protokollführer müssen das Protokoll unterschreiben. Ein Wohnungseigentümer kann als Protokollführer eingesetzt werden.",
      },
    },
    {
      "@type": "Question",
      name: "Bis wann muss das Beschlussprotokoll zugestellt werden?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Das WEG schreibt keine feste Frist für die Zustellung des Protokolls vor, aber die Praxis empfiehlt binnen 2-4 Wochen nach der Versammlung. Die Beschlüsse müssen jedoch unverzüglich in die Beschluss-Sammlung eingetragen werden.",
      },
    },
    {
      "@type": "Question",
      name: "Was ist der Unterschied zwischen Versammlungsprotokoll und Beschluss-Sammlung?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Das Versammlungsprotokoll dokumentiert den Verlauf der gesamten Eigentümerversammlung inkl. Diskussionen. Die Beschluss-Sammlung (§ 24 Abs. 7 WEG) ist ein separates Dokument, in dem alle gefassten Beschlüsse mit Datum und Abstimmungsergebnis chronologisch gelistet werden.",
      },
    },
    {
      "@type": "Question",
      name: "Kann ein Beschluss wegen Protokollfehlern angefochten werden?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Protokollfehler allein machen einen Beschluss in der Regel nicht anfechtbar. Der Beschluss ist anfechtbar, wenn die Beschlussfassung selbst fehlerhaft war (falsche Mehrheit, fehlende Ladung, Rechtswidrigkeit). Reine Protokollfehler können nachträglich berichtigt werden.",
      },
    },
  ],
};

export default function BeschlussprotokollBlogPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleStructuredData) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqStructuredData) }}
      />
      <Navbar />
      <main className="pt-20 min-h-screen bg-warm-white">
        <article className="max-w-2xl mx-auto px-6 py-12">
          {/* Header */}
          <div className="mb-8">
            <div className="flex items-center gap-2 text-sm text-teal font-medium mb-3">
              <Link href="/blog" className="hover:underline">Blog</Link>
              <span className="text-gray-400">/</span>
              <span>WEG-Verwaltung</span>
            </div>
            <h1 className="text-3xl font-bold text-navy leading-tight mb-4">
              Beschlussprotokoll Eigentümerversammlung: Pflichten, Muster & Tipps 2026
            </h1>
            <p className="text-text-light text-base leading-relaxed">
              Das Beschlussprotokoll ist das wichtigste Dokument nach jeder Eigentümerversammlung. Fehler darin können teuer werden. Wir erklären, was rein muss — und wie Sie es einfach erstellen.
            </p>
            <div className="flex items-center gap-4 mt-5 text-xs text-gray-500">
              <span>26. Februar 2026</span>
              <span>·</span>
              <span>7 Min. Lesezeit</span>
              <span>·</span>
              <span>einfach verwaltet., Hamburg</span>
            </div>
          </div>

          {/* Tool CTA */}
          <div className="bg-teal/10 border border-teal/30 rounded-2xl p-5 mb-8">
            <p className="text-sm font-semibold text-navy mb-2">💡 Direkt zum Tool</p>
            <p className="text-sm text-gray-700 mb-3">
              Beschlussprotokoll in 2 Minuten erstellen — kostenlos, KI-gestützt, WEG-konform.
            </p>
            <Link
              href="/beschlussprotokoll"
              className="inline-flex items-center gap-2 bg-teal text-white px-5 py-2.5 rounded-xl text-sm font-semibold hover:bg-teal/90 transition-all"
            >
              Zum Beschlussprotokoll-Generator →
            </Link>
          </div>

          {/* Content */}
          <div className="prose prose-sm max-w-none text-gray-800 space-y-6">
            <h2 className="text-xl font-bold text-navy">Was ist ein Beschlussprotokoll?</h2>
            <p>
              Das Beschlussprotokoll (auch: Versammlungsprotokoll oder Protokoll der Eigentümerversammlung) ist die schriftliche Dokumentation aller Beschlüsse, die in einer Eigentümerversammlung (ETV) gefasst wurden. Es bildet die rechtliche Grundlage für die Umsetzung der Beschlüsse durch den Verwalter.
            </p>
            <p>
              Nach <strong>§ 24 Abs. 6 WEG</strong> ist der Verwalter verpflichtet, über die in der Versammlung gefassten Beschlüsse ein Protokoll aufzunehmen, das er und der Vorsitzende der Versammlung sowie mindestens ein anwesender Wohnungseigentümer unterschreiben müssen.
            </p>

            <h2 className="text-xl font-bold text-navy">Pflichtangaben im Beschlussprotokoll</h2>
            <p>Ein rechtssicheres Beschlussprotokoll muss folgende Angaben enthalten:</p>
            <ul className="space-y-2">
              {[
                { item: "Bezeichnung der WEG", desc: "Vollständige Adresse der Wohnanlage" },
                { item: "Datum, Uhrzeit und Ort", desc: "Beginn und Ende der Versammlung" },
                { item: "Namen der Anwesenden", desc: "Eigentümer und Vertreter mit Vollmacht" },
                { item: "Feststellung der Beschlussfähigkeit", desc: "Vertretene Miteigentumsanteile" },
                { item: "Tagesordnung", desc: "Alle behandelten Punkte in der beschlossenen Reihenfolge" },
                { item: "Beschlusswortlaut", desc: "Exakter Wortlaut jedes Beschlusses" },
                { item: "Abstimmungsergebnis", desc: "Ja / Nein / Enthaltung für jeden TOP" },
                { item: "Unterschriften", desc: "Versammlungsleiter, Protokollführer, ein Eigentümer" },
              ].map((row, i) => (
                <li key={i} className="flex items-start gap-3 text-sm">
                  <span className="text-teal font-bold mt-0.5">✓</span>
                  <span>
                    <strong>{row.item}:</strong> {row.desc}
                  </span>
                </li>
              ))}
            </ul>

            <h2 className="text-xl font-bold text-navy">WEG-Reform 2020: Was hat sich geändert?</h2>
            <p>
              Die WEG-Reform von Dezember 2020 hat einige wichtige Änderungen für Eigentümerversammlungen und Protokolle gebracht:
            </p>
            <ul className="space-y-2 list-disc pl-5">
              <li className="text-sm">
                <strong>Kein Mindestquorum mehr:</strong> Nach § 25 Abs. 4 WEG n.F. ist jede ordnungsgemäß einberufene Versammlung beschlussfähig — unabhängig davon, wie viele Miteigentumsanteile vertreten sind.
              </li>
              <li className="text-sm">
                <strong>Online-Teilnahme möglich:</strong> § 23 Abs. 1 S. 2 WEG erlaubt mit Zustimmung der WEG die Teilnahme per Video-Konferenz.
              </li>
              <li className="text-sm">
                <strong>Beschluss-Sammlung bleibt Pflicht:</strong> § 24 Abs. 7 WEG: Der Verwalter muss alle gefassten Beschlüsse in einer Beschluss-Sammlung führen.
              </li>
              <li className="text-sm">
                <strong>Einpersonengesellschaft:</strong> Eine WEG kann nun auch von einem einzigen Eigentümer gebildet werden (§ 9a Abs. 1 WEG).
              </li>
            </ul>

            <h2 className="text-xl font-bold text-navy">Häufige Fehler im Beschlussprotokoll</h2>
            <p>Diese Fehler führen immer wieder zu Problemen:</p>
            <div className="bg-red-50 border border-red-100 rounded-xl p-5 space-y-3">
              {[
                {
                  fehler: "Unklarer Beschlusswortlaut",
                  folge: "Der Beschluss ist schwer umsetzbar und angreifbar. Immer präzise formulieren: Wer macht was, bis wann, für wieviel?",
                },
                {
                  fehler: "Fehlendes Abstimmungsergebnis",
                  folge: "Ohne genaue Stimmenzahlen kann nicht nachvollzogen werden, ob die erforderliche Mehrheit erreicht wurde.",
                },
                {
                  fehler: "Nicht alle Anwesenden aufgeführt",
                  folge: "Vollmachten müssen vermerkt werden. Nicht anwesende, aber vertretene Eigentümer sind zu dokumentieren.",
                },
                {
                  fehler: "Fehlende Unterschriften",
                  folge: "§ 24 Abs. 6 S. 2 WEG: Drei Unterschriften erforderlich. Ohne sie ist das Protokoll formell mangelhaft.",
                },
              ].map((row, i) => (
                <div key={i} className="text-sm">
                  <p className="font-semibold text-red-700">✗ {row.fehler}</p>
                  <p className="text-gray-700 mt-1">{row.folge}</p>
                </div>
              ))}
            </div>

            <h2 className="text-xl font-bold text-navy">Beschlussprotokoll vs. Beschluss-Sammlung</h2>
            <p className="text-sm">
              Oft werden beide Begriffe verwechselt. So unterscheiden sie sich:
            </p>
            <div className="overflow-x-auto">
              <table className="w-full text-sm border-collapse">
                <thead>
                  <tr className="bg-navy/5">
                    <th className="text-left p-3 font-semibold text-navy border border-gray-200">Merkmal</th>
                    <th className="text-left p-3 font-semibold text-navy border border-gray-200">Beschlussprotokoll</th>
                    <th className="text-left p-3 font-semibold text-navy border border-gray-200">Beschluss-Sammlung</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    ["Inhalt", "Gesamter Verlauf der ETV", "Nur die Beschlüsse"],
                    ["Rechtsgrundlage", "§ 24 Abs. 6 WEG", "§ 24 Abs. 7 WEG"],
                    ["Wann erstellt", "Nach jeder Versammlung", "Laufend geführt"],
                    ["Unterschriften", "3 Unterschriften", "Nicht erforderlich"],
                    ["Zugang", "Allen Eigentümern", "Allen Eigentümern"],
                  ].map(([merkmal, proto, sammlung], i) => (
                    <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                      <td className="p-3 border border-gray-200 font-medium">{merkmal}</td>
                      <td className="p-3 border border-gray-200">{proto}</td>
                      <td className="p-3 border border-gray-200">{sammlung}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <h2 className="text-xl font-bold text-navy">Anfechtung von Beschlüssen</h2>
            <p className="text-sm">
              Ein Beschluss kann gemäß <strong>§ 44 Abs. 1 WEG</strong> innerhalb eines Monats nach der Beschlussfassung beim Amtsgericht angefochten werden. Zuständig ist das Amtsgericht, in dessen Bezirk die WEG liegt.
            </p>
            <p className="text-sm">
              <strong>Wichtig:</strong> Protokollfehler allein machen einen Beschluss nicht anfechtbar. Anfechtbar ist ein Beschluss nur, wenn er rechtswidrig ist (falsche Mehrheit, fehlende ordnungsgemäße Einladung, Verstoß gegen WEG oder Gemeinschaftsordnung). Protokollfehler können nachträglich berichtigt werden.
            </p>

            {/* FAQ Section */}
            <h2 className="text-xl font-bold text-navy mt-8">Häufige Fragen</h2>
            <div className="space-y-4">
              {[
                {
                  q: "Wer muss das Protokoll unterschreiben?",
                  a: "Nach § 24 Abs. 6 S. 2 WEG müssen mindestens der Vorsitzende der Versammlung und der Protokollführer (in der Regel der Verwalter) sowie ein weiterer anwesender Wohnungseigentümer unterschreiben.",
                },
                {
                  q: "Wie lange muss das Protokoll aufbewahrt werden?",
                  a: "Das Gesetz schreibt keine konkrete Aufbewahrungsfrist vor. Die Praxis empfiehlt mindestens 10 Jahre, da Ansprüche aus WEG-Beschlüssen im Einzelfall dieser Verjährungsfrist unterliegen können.",
                },
                {
                  q: "Kann das Protokoll digital erstellt und unterschrieben werden?",
                  a: "Ja, seit der WEG-Reform 2020 ist dies möglich, sofern die WEG dies per Beschluss erlaubt. Qualifizierte elektronische Signaturen sind empfehlenswert für maximale Rechtssicherheit.",
                },
                {
                  q: "Was passiert, wenn der Verwalter kein Protokoll erstellt?",
                  a: "Der Verwalter verletzt damit seine gesetzliche Pflicht aus § 24 Abs. 6 WEG. Die Eigentümer können Schadensersatz geltend machen und den Verwalter gemäß § 26 Abs. 3 WEG abberufen.",
                },
              ].map((faq, i) => (
                <div key={i} className="border border-gray-200 rounded-xl p-4">
                  <h3 className="font-semibold text-navy text-sm mb-2">{faq.q}</h3>
                  <p className="text-sm text-gray-700">{faq.a}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Bottom CTA */}
          <div className="mt-12 bg-navy text-white rounded-2xl p-8 text-center">
            <h2 className="text-xl font-bold mb-3">WEG-Protokolle ohne Stress</h2>
            <p className="text-white/80 text-sm mb-6 max-w-md mx-auto">
              einfach verwaltet. übernimmt Ihre WEG-Verwaltung — inklusive Eigentümerversammlung, Protokoll und Beschluss-Sammlung.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Link
                href="/beschlussprotokoll"
                className="inline-flex items-center justify-center gap-2 bg-teal text-white px-6 py-3 rounded-xl text-sm font-semibold hover:bg-teal/90 transition-all"
              >
                Protokoll-Generator öffnen →
              </Link>
              <Link
                href="/anfrage"
                className="inline-flex items-center justify-center gap-2 bg-white/10 text-white border border-white/30 px-6 py-3 rounded-xl text-sm font-semibold hover:bg-white/20 transition-all"
              >
                WEG-Verwaltung anfragen
              </Link>
            </div>
          </div>

          {/* Back link */}
          <div className="mt-8 pt-6 border-t border-gray-200">
            <Link href="/blog" className="text-sm text-teal hover:underline">
              ← Zurück zum Blog
            </Link>
          </div>
        </article>
      </main>
      <Footer />
    </>
  );
}
