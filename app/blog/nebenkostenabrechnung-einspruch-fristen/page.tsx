import type { Metadata } from "next";
import Link from "next/link";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

export const metadata: Metadata = {
  title: "Widerspruch gegen die Nebenkostenabrechnung — Fristen und Rechte 2025 | einfach verwaltet.",
  description:
    "Widerspruch Nebenkostenabrechnung: 12-Monats-Frist nach §556 BGB, Rechte von Mieter und Vermieter, häufige Fehler und wie man sie vermeidet.",
  keywords:
    "Widerspruch Nebenkostenabrechnung, NKA Einspruch Frist, §556 BGB, Nebenkostenabrechnung anfechten, Betriebskosten Widerspruch",
  openGraph: {
    title: "Widerspruch gegen die Nebenkostenabrechnung — Fristen und Rechte 2025",
    description:
      "12-Monats-Frist, Belegeinsichtsrecht und wie Vermieter und Mieter bei NKA-Streitigkeiten vorgehen sollten.",
    url: "https://einfach-verwaltet.de/blog/nebenkostenabrechnung-einspruch-fristen",
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
      name: "Wie lange hat der Mieter Zeit, der Nebenkostenabrechnung zu widersprechen?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Der Mieter hat nach §556 Abs. 3 BGB 12 Monate ab Zugang der Abrechnung Zeit, Einwände zu erheben. Nach Ablauf dieser Frist sind Einwendungen des Mieters ausgeschlossen — auch wenn die Abrechnung inhaltliche Fehler enthält.",
      },
    },
    {
      "@type": "Question",
      name: "Kann der Vermieter auch nach 12 Monaten noch nachfordern?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Nein. Die 12-Monats-Frist gilt auch für den Vermieter: Die Abrechnung muss dem Mieter spätestens 12 Monate nach Ende des Abrechnungszeitraums zugehen (§556 Abs. 3 S. 2 BGB). Später zugesandte Abrechnungen begründen keine Nachzahlungsansprüche mehr.",
      },
    },
    {
      "@type": "Question",
      name: "Was muss in einem Widerspruch gegen die Nebenkostenabrechnung stehen?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Der Widerspruch muss schriftlich erfolgen und die beanstandeten Positionen konkret benennen. Allgemeine Formeln wie 'ich widerspreche der Abrechnung' reichen nicht aus. Der Mieter sollte konkret erläutern, warum eine Position fehlerhaft ist — z.B. falsche Fläche, nicht umlagefähige Kosten, falscher Schlüssel.",
      },
    },
  ],
};

export default function NebenkostenabrechnungEinspruchFristen() {
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
              Widerspruch gegen die Nebenkostenabrechnung — Fristen und Rechte 2025
            </h1>
            <p className="text-white/70 text-lg">
              §556 BGB: Wer darf wann widersprechen — und was müssen Vermieter zwingend beachten?
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
            <span className="text-gray-700">NKA Widerspruch Fristen</span>
          </nav>

          <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed space-y-6">

            <h2 className="text-2xl font-bold text-navy mt-2 mb-4">
              Die doppelte 12-Monats-Frist nach §556 BGB
            </h2>
            <p>
              Das Nebenkostenrecht kennt zwei entscheidende 12-Monats-Fristen, die beide in <strong>§556 Abs. 3 BGB</strong> geregelt sind. Beide Seiten — Vermieter und Mieter — sind durch diese Fristen gebunden:
            </p>
            <div className="not-prose grid gap-4 my-6 md:grid-cols-2">
              <div className="bg-navy rounded-2xl p-5 text-white">
                <p className="text-amber font-bold text-sm uppercase tracking-wide mb-2">Für den Vermieter</p>
                <p className="text-white text-sm leading-relaxed">
                  Die Abrechnung muss dem Mieter spätestens <strong>12 Monate nach Ende des Abrechnungszeitraums</strong> zugehen. Bei Abrechnungszeitraum 2025 also bis <strong>31.12.2026</strong>.
                </p>
                <p className="text-white/60 text-xs mt-3">§556 Abs. 3 S. 2 BGB — Ausschlussfrist für Nachforderungen</p>
              </div>
              <div className="bg-teal/10 border border-teal/20 rounded-2xl p-5">
                <p className="text-teal font-bold text-sm uppercase tracking-wide mb-2">Für den Mieter</p>
                <p className="text-navy text-sm leading-relaxed">
                  Einwände gegen eine erhaltene Abrechnung müssen innerhalb von <strong>12 Monaten ab Zugang</strong> geltend gemacht werden.
                </p>
                <p className="text-text-light text-xs mt-3">§556 Abs. 3 S. 5 BGB — Einwendungsausschluss für Mieter</p>
              </div>
            </div>
            <p>
              Beide Fristen sind <strong>Ausschlussfristen</strong> — sie können weder verlängert noch nachgeholt werden. Wer sie versäumt, verliert seinen Anspruch endgültig.
            </p>

            <h2 className="text-2xl font-bold text-navy mt-10 mb-4">
              Wann kann der Mieter widersprechen?
            </h2>
            <p>
              Ein Widerspruch des Mieters gegen die Nebenkostenabrechnung ist berechtigt, wenn:
            </p>
            <ul className="space-y-2 my-4 pl-4">
              <li className="flex items-start gap-2"><span className="text-teal mt-1">✓</span><span><strong>Nicht umlagefähige Positionen</strong> abgerechnet wurden (z.B. Verwaltungskosten, Reparaturen)</span></li>
              <li className="flex items-start gap-2"><span className="text-teal mt-1">✓</span><span><strong>Falscher Umlageschlüssel</strong> angewendet wurde (z.B. Köpfe statt Fläche ohne Vereinbarung)</span></li>
              <li className="flex items-start gap-2"><span className="text-teal mt-1">✓</span><span><strong>Falsche Gesamtfläche</strong> in der Abrechnung verwendet wird</span></li>
              <li className="flex items-start gap-2"><span className="text-teal mt-1">✓</span><span><strong>Abrechnungsfehler</strong> in der Addition, Zuordnung oder Aufteilung vorliegen</span></li>
              <li className="flex items-start gap-2"><span className="text-teal mt-1">✓</span><span><strong>Belegeinsicht verweigert</strong> wurde und Mieter die Richtigkeit nicht überprüfen kann</span></li>
            </ul>

            <h2 className="text-2xl font-bold text-navy mt-10 mb-4">
              Das Belegeinsichtsrecht des Mieters
            </h2>
            <p>
              Mieter haben nach §§ 259, 810 BGB (analog) einen Anspruch auf <strong>Einsicht in die Originalbelege</strong> der Betriebskostenabrechnung. Das bedeutet:
            </p>
            <div className="not-prose bg-light-gray rounded-xl p-5 my-4 text-sm space-y-3">
              <div><strong className="text-navy">Umfang:</strong> Alle Rechnungen, Lieferscheine, Kontoauszüge, die der Abrechnung zugrundeliegen.</div>
              <div><strong className="text-navy">Ort:</strong> In der Regel beim Vermieter oder der Hausverwaltung — der Mieter muss die Einsicht vor Ort nehmen, hat aber Anspruch auf Kopien gegen Kostenerstattung.</div>
              <div><strong className="text-navy">Frist:</strong> Der Vermieter muss die Einsicht zeitnah ermöglichen. Wird sie grundlos verweigert, kann der Mieter die Nachzahlung einbehalten.</div>
            </div>

            <h2 className="text-2xl font-bold text-navy mt-10 mb-4">
              Was Vermieter bei Widersprüchen tun sollten
            </h2>
            <p>
              Erhält der Vermieter oder die Hausverwaltung einen Widerspruch des Mieters, sollte folgendes beachtet werden:
            </p>
            <div className="not-prose space-y-3 my-4">
              {[
                { step: "1", title: "Widerspruch schriftlich bestätigen", desc: "Eingangsdatum dokumentieren — für eventuelle spätere Streitigkeiten über Fristen." },
                { step: "2", title: "Einwände inhaltlich prüfen", desc: "Sind die Beanstandungen berechtigt? Rechenfehler, falsche Schlüssel, nicht umlagefähige Positionen?" },
                { step: "3", title: "Belegeinsicht gewähren", desc: "Mieter zur Einsicht einladen oder Belege übersenden. Nicht gewähren kann zur Einbehaltung der Nachzahlung berechtigen." },
                { step: "4", title: "Korrektur oder begründete Ablehnung", desc: "Ist der Einwand berechtigt: Abrechnung korrigieren. Ist er unberechtigt: schriftlich mit Begründung ablehnen." },
              ].map((s) => (
                <div key={s.step} className="flex items-start gap-4 bg-white border border-navy/10 rounded-xl p-4">
                  <div className="w-8 h-8 rounded-full bg-teal text-white flex items-center justify-center text-sm font-bold flex-shrink-0">{s.step}</div>
                  <div>
                    <p className="font-semibold text-navy">{s.title}</p>
                    <p className="text-text-light text-sm">{s.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <h2 className="text-2xl font-bold text-navy mt-10 mb-4">
              5 häufige Fehler, die zu Widersprüchen führen
            </h2>
            <p>
              Die meisten Widersprüche gegen Nebenkostenabrechnungen lassen sich vermeiden. Diese Fehler sehen wir am häufigsten:
            </p>
            <div className="not-prose space-y-3 my-4">
              {[
                { title: "Verwaltungskosten in der NKA", desc: "Verwaltungskosten sind nach §2 BetrKV nicht umlagefähig — trotzdem tauchen sie regelmäßig in Abrechnungen auf." },
                { title: "Falsche Gesamtfläche", desc: "Fehler bei der Wohnfläche des Gebäudes verfälschen alle flächenbasierten Umlagen." },
                { title: "Reparaturkosten als Betriebskosten", desc: "Reparaturen sind Instandhaltungskosten — nicht umlagefähig, auch wenn sie jedes Jahr anfallen." },
                { title: "Fehlende Einzelabrechnungen", desc: "Mieter haben Anspruch auf eine nachvollziehbare Aufschlüsselung, keine Sammelposten." },
                { title: "Fristversäumnis", desc: "Die 12-Monatsfrist nach §556 Abs. 3 BGB ist unverrückbar. Zu spät = kein Nachzahlungsanspruch." },
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-3 bg-white border border-navy/10 rounded-xl p-4">
                  <span className="text-amber font-bold mt-0.5">!</span>
                  <div>
                    <p className="font-semibold text-navy text-sm">{item.title}</p>
                    <p className="text-text-light text-sm">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <h2 className="text-2xl font-bold text-navy mt-10 mb-4">
              Häufige Fragen zum NKA-Widerspruch
            </h2>

            <div className="not-prose space-y-4 my-4">
              <div className="bg-white border border-navy/10 rounded-xl p-5">
                <p className="font-semibold text-navy mb-2">Wie lange hat der Mieter Zeit, der Nebenkostenabrechnung zu widersprechen?</p>
                <p className="text-text-light text-sm">Nach §556 Abs. 3 BGB hat der Mieter 12 Monate ab Zugang der Abrechnung. Nach Ablauf sind Einwände ausgeschlossen — auch bei inhaltlichen Fehlern.</p>
              </div>
              <div className="bg-white border border-navy/10 rounded-xl p-5">
                <p className="font-semibold text-navy mb-2">Kann der Vermieter auch nach 12 Monaten noch nachfordern?</p>
                <p className="text-text-light text-sm">Nein. Die Abrechnung muss dem Mieter innerhalb von 12 Monaten nach Ende des Abrechnungszeitraums zugehen. Spätere Abrechnungen begründen keine Nachzahlungsansprüche mehr (§556 Abs. 3 S. 2 BGB).</p>
              </div>
              <div className="bg-white border border-navy/10 rounded-xl p-5">
                <p className="font-semibold text-navy mb-2">Was muss in einem Widerspruch stehen?</p>
                <p className="text-text-light text-sm">Der Widerspruch muss schriftlich erfolgen und die beanstandeten Positionen konkret benennen. Allgemeine Formeln reichen nicht aus — der Mieter muss erklären, warum eine Position fehlerhaft ist.</p>
              </div>
            </div>

            <div className="not-prose bg-teal/10 border border-teal/20 rounded-2xl p-6 my-8">
              <h3 className="text-lg font-bold text-navy mb-2">Nebenkostenabrechnung professionell erstellen und verwalten</h3>
              <p className="text-text-light text-sm mb-4">
                Mit einfach verwaltet. erhalten Sie jedes Jahr eine fristgerechte, vollständige Betriebskostenabrechnung — automatisch erstellt, digital übermittelt, mit Belegarchivierung.{" "}
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
