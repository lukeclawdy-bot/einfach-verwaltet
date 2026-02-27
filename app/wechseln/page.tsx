"use client";

import { useState } from "react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

// ── Icons ─────────────────────────────────────────────────────────────────────

function CheckCircleIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
    </svg>
  );
}

function DocumentTextIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m2.25 0H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Z" />
    </svg>
  );
}

function ArrowRightIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
    </svg>
  );
}

function ChevronDownIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
    </svg>
  );
}

function ClipboardIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M15.666 3.888A2.25 2.25 0 0 0 13.5 2.25h-3c-1.03 0-1.9.693-2.166 1.638m7.332 0c.055.194.084.4.084.612v0a.75.75 0 0 1-.75.75H9a.75.75 0 0 1-.75-.75v0c0-.212.03-.418.084-.612m7.332 0c.646.049 1.288.11 1.927.184 1.1.128 1.907 1.077 1.907 2.185V19.5a2.25 2.25 0 0 1-2.25 2.25H6.75A2.25 2.25 0 0 1 4.5 19.5V6.257c0-1.108.806-2.057 1.907-2.185a48.208 48.208 0 0 1 1.927-.184" />
    </svg>
  );
}

function CheckIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
    </svg>
  );
}

// ── Helpers ───────────────────────────────────────────────────────────────────

/** Compute Kündigungsdatum: 3 months from today, last day of that month */
function computeKuendigungsdatum(): string {
  const today = new Date();
  const target = new Date(today.getFullYear(), today.getMonth() + 4, 0); // last day, 3 months ahead
  const yyyy = target.getFullYear();
  const mm = String(target.getMonth() + 1).padStart(2, "0");
  const dd = String(target.getDate()).padStart(2, "0");
  return `${dd}.${mm}.${yyyy}`;
}

/** Format today as DD.MM.YYYY */
function formatToday(): string {
  const d = new Date();
  return `${String(d.getDate()).padStart(2, "0")}.${String(d.getMonth() + 1).padStart(2, "0")}.${d.getFullYear()}`;
}

// ── Kündigung Generator ───────────────────────────────────────────────────────

interface KuendigungForm {
  eigentuemer: string;
  eigentuemerStrasse: string;
  eigentuemerOrt: string;
  hvName: string;
  hvStrasse: string;
  hvOrt: string;
  objektAdresse: string;
  kuendigungsdatum: string;
}

function generateBrief(form: KuendigungForm): string {
  const today = formatToday();
  return `${form.eigentuemer}
${form.eigentuemerStrasse}
${form.eigentuemerOrt}

${form.hvName}
${form.hvStrasse}
${form.hvOrt}

Hamburg, den ${today}


Kündigung des Hausverwaltungsvertrages
Objekt: ${form.objektAdresse}


Sehr geehrte Damen und Herren,

hiermit kündige ich den mit Ihnen geschlossenen Hausverwaltungsvertrag für das oben genannte Objekt ordentlich gemäß § 621 BGB zum ${form.kuendigungsdatum || computeKuendigungsdatum()}.

Ich bitte um schriftliche Bestätigung des Eingangs dieser Kündigung sowie um Mitteilung des genauen Übergabetermins.

Ich erwarte von Ihnen bis zum Vertragsende die vollständige Übergabe aller Verwaltungsunterlagen, insbesondere:

- Mietverträge und Mieterakten
- aktuelle Nebenkostenabrechnungen und Belege
- Kontoauszüge und Buchhaltungsunterlagen
- Kautionskonten und Nachweise
- Schlüssel und Schlüsselprotokolle
- laufende Wartungs- und Dienstleistungsverträge
- Versicherungspolicen und Schadensunterlagen

Ich behalte mir vor, bei nicht fristgerechter oder unvollständiger Übergabe der Unterlagen Schadensersatzansprüche geltend zu machen.

Mit freundlichen Grüßen


__________________________
${form.eigentuemer}`;
}

function KuendigungGenerator() {
  const [form, setForm] = useState<KuendigungForm>({
    eigentuemer: "",
    eigentuemerStrasse: "",
    eigentuemerOrt: "",
    hvName: "",
    hvStrasse: "",
    hvOrt: "",
    objektAdresse: "",
    kuendigungsdatum: computeKuendigungsdatum(),
  });
  const [showBrief, setShowBrief] = useState(false);
  const [copied, setCopied] = useState(false);

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }));
  }

  function handleGenerate(e: React.FormEvent) {
    e.preventDefault();
    setShowBrief(true);
    setCopied(false);
  }

  function handleCopy() {
    navigator.clipboard.writeText(generateBrief(form));
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  }

  const brief = generateBrief(form);
  const isComplete = form.eigentuemer && form.hvName && form.objektAdresse;

  return (
    <div className="bg-white rounded-2xl border border-navy/10 overflow-hidden">
      {/* Header */}
      <div className="bg-navy px-8 py-6">
        <div className="flex items-center gap-3">
          <DocumentTextIcon className="w-6 h-6 text-teal" />
          <h3 className="text-white font-bold text-xl">Kündigungsschreiben erstellen</h3>
        </div>
        <p className="text-white/70 text-sm mt-1">Kostenlos. Rechtssicher. In 2 Minuten fertig.</p>
      </div>

      <div className="p-8">
        {!showBrief ? (
          <form onSubmit={handleGenerate} className="space-y-6">
            {/* Eigentümer */}
            <div>
              <h4 className="font-semibold text-navy mb-3 text-sm uppercase tracking-wider">Ihre Angaben (Eigentümer)</h4>
              <div className="grid gap-4">
                <div>
                  <label className="block text-sm font-medium text-text-main mb-1">Vor- und Nachname *</label>
                  <input
                    name="eigentuemer"
                    value={form.eigentuemer}
                    onChange={handleChange}
                    required
                    placeholder="z. B. Thomas Müller"
                    className="w-full border border-gray-200 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:border-teal focus:ring-1 focus:ring-teal/30"
                  />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-text-main mb-1">Straße + Hausnummer</label>
                    <input
                      name="eigentuemerStrasse"
                      value={form.eigentuemerStrasse}
                      onChange={handleChange}
                      placeholder="Musterstraße 1"
                      className="w-full border border-gray-200 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:border-teal focus:ring-1 focus:ring-teal/30"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-text-main mb-1">PLZ + Ort</label>
                    <input
                      name="eigentuemerOrt"
                      value={form.eigentuemerOrt}
                      onChange={handleChange}
                      placeholder="20095 Hamburg"
                      className="w-full border border-gray-200 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:border-teal focus:ring-1 focus:ring-teal/30"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Aktuelle HV */}
            <div>
              <h4 className="font-semibold text-navy mb-3 text-sm uppercase tracking-wider">Aktuelle Hausverwaltung</h4>
              <div className="grid gap-4">
                <div>
                  <label className="block text-sm font-medium text-text-main mb-1">Firma / Name der HV *</label>
                  <input
                    name="hvName"
                    value={form.hvName}
                    onChange={handleChange}
                    required
                    placeholder="z. B. Müller Immobilienverwaltung GmbH"
                    className="w-full border border-gray-200 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:border-teal focus:ring-1 focus:ring-teal/30"
                  />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-text-main mb-1">Straße + Hausnummer</label>
                    <input
                      name="hvStrasse"
                      value={form.hvStrasse}
                      onChange={handleChange}
                      placeholder="Verwaltungsstraße 5"
                      className="w-full border border-gray-200 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:border-teal focus:ring-1 focus:ring-teal/30"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-text-main mb-1">PLZ + Ort</label>
                    <input
                      name="hvOrt"
                      value={form.hvOrt}
                      onChange={handleChange}
                      placeholder="20354 Hamburg"
                      className="w-full border border-gray-200 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:border-teal focus:ring-1 focus:ring-teal/30"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Objekt */}
            <div>
              <h4 className="font-semibold text-navy mb-3 text-sm uppercase tracking-wider">Ihr Objekt</h4>
              <div className="grid gap-4">
                <div>
                  <label className="block text-sm font-medium text-text-main mb-1">Adresse des Objekts *</label>
                  <input
                    name="objektAdresse"
                    value={form.objektAdresse}
                    onChange={handleChange}
                    required
                    placeholder="z. B. Alsterblick 12, 20354 Hamburg"
                    className="w-full border border-gray-200 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:border-teal focus:ring-1 focus:ring-teal/30"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-text-main mb-1">
                    Kündigungsdatum{" "}
                    <span className="text-text-light font-normal">(automatisch: 3 Monate = letzter Tag des Monats)</span>
                  </label>
                  <input
                    name="kuendigungsdatum"
                    value={form.kuendigungsdatum}
                    onChange={handleChange}
                    placeholder={computeKuendigungsdatum()}
                    className="w-full border border-gray-200 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:border-teal focus:ring-1 focus:ring-teal/30"
                  />
                  <p className="text-xs text-text-light mt-1">
                    Basierend auf der gesetzlichen Frist nach § 621 BGB. Sie können das Datum anpassen, falls Ihr Vertrag eine längere Frist enthält.
                  </p>
                </div>
              </div>
            </div>

            <button
              type="submit"
              disabled={!isComplete}
              className="w-full bg-teal text-white py-3.5 rounded-xl font-semibold text-base hover:bg-navy transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
            >
              <DocumentTextIcon className="w-5 h-5" />
              Kündigungsschreiben erstellen
            </button>
            <p className="text-center text-xs text-text-light">
              * Pflichtfelder. Das Schreiben wird nur in Ihrem Browser erstellt — keine Daten werden gespeichert.
            </p>
          </form>
        ) : (
          <div>
            {/* Preview */}
            <div className="bg-warm-white border border-gray-200 rounded-xl p-6 mb-6 font-mono text-sm text-text-main whitespace-pre-wrap leading-relaxed">
              {brief}
            </div>

            <div className="flex flex-col sm:flex-row gap-3">
              <button
                onClick={handleCopy}
                className="flex-1 flex items-center justify-center gap-2 bg-teal text-white py-3 rounded-xl font-semibold hover:bg-navy transition-colors"
              >
                {copied ? (
                  <>
                    <CheckIcon className="w-5 h-5" />
                    Kopiert!
                  </>
                ) : (
                  <>
                    <ClipboardIcon className="w-5 h-5" />
                    Text kopieren
                  </>
                )}
              </button>
              <button
                onClick={() => setShowBrief(false)}
                className="flex-1 border border-navy/20 text-navy py-3 rounded-xl font-medium hover:bg-navy/5 transition-colors"
              >
                Angaben bearbeiten
              </button>
            </div>

            <div className="mt-6 bg-teal/5 border border-teal/20 rounded-xl p-5">
              <p className="text-sm text-navy font-medium mb-1">✓ Nächster Schritt: Beauftragen Sie uns</p>
              <p className="text-sm text-text-light mb-3">
                Senden Sie uns gleichzeitig eine Anfrage — wir übernehmen ab dem Tag nach Vertragsende nahtlos.
              </p>
              <a
                href="/anfrage"
                className="inline-flex items-center gap-2 bg-navy text-white px-5 py-2.5 rounded-lg text-sm font-semibold hover:bg-teal transition-colors"
              >
                Jetzt Angebot anfragen
                <ArrowRightIcon className="w-4 h-4" />
              </a>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

// ── FAQ ───────────────────────────────────────────────────────────────────────

const faqs = [
  {
    q: "Wie lange dauert ein Wechsel der Hausverwaltung?",
    a: "In der Regel 4 bis 8 Wochen ab Eingang der Kündigung beim alten Verwalter. Die gesetzliche Mindestkündigungsfrist nach § 621 BGB beträgt 3 Monate zum Monatsende — aber viele Verwalterverträge sehen längere Fristen vor. Wir empfehlen, Ihren Vertrag zu prüfen und frühzeitig zu kündigen.",
  },
  {
    q: "Was passiert mit dem laufenden Mietvertrag beim Wechsel?",
    a: "Der Mietvertrag bleibt vollständig gültig. Ein Wechsel der Hausverwaltung berührt das Mietverhältnis nicht — für Ihre Mieter ändert sich rechtlich nichts. Wir übernehmen lediglich die verwaltende Rolle gegenüber den Mietern und informieren diese schriftlich über die neue Ansprechperson.",
  },
  {
    q: "Wer informiert die Mieter über den Verwalterwechsel?",
    a: "Das erledigen wir für Sie. Nach Beauftragung verschicken wir ein Begrüßungsschreiben an alle Mieter mit unseren neuen Kontaktdaten, dem neuen Bankkonto für die Mietzahlungen und einem kurzen Hinweis auf den Wechsel. Sie müssen sich um nichts kümmern.",
  },
  {
    q: "Kann ich während der Kündigungsfrist bereits mit einfach verwaltet. wechseln?",
    a: "Ja. Sie können uns jederzeit beauftragen — auch wenn die Kündigung beim alten Verwalter noch läuft. Wir bereiten den Übergang vor, sammeln alle notwendigen Unterlagen und sind ab dem ersten Tag nach Vertragsende vollständig operativ. So gibt es keine Lücke in der Verwaltung.",
  },
  {
    q: "Was kostet der Wechsel zu einfach verwaltet.?",
    a: "Der Wechsel selbst ist kostenlos. Keine Einrichtungsgebühr, keine Transferkosten. Unsere laufende Verwaltungsgebühr liegt bei 14–20 €/Einheit/Monat — deutlich unter dem Marktdurchschnitt von 22–35 €. Ein persönliches Angebot erhalten Sie innerhalb von 24 Stunden nach Ihrer Anfrage.",
  },
];

function FAQItem({ q, a, isOpen, onToggle }: { q: string; a: string; isOpen: boolean; onToggle: () => void }) {
  return (
    <div className="border border-gray-200 rounded-xl overflow-hidden">
      <button
        onClick={onToggle}
        className="w-full flex items-center justify-between px-6 py-5 text-left hover:bg-warm-white transition-colors"
      >
        <span className="font-semibold text-navy pr-4">{q}</span>
        <ChevronDownIcon className={`w-5 h-5 text-teal flex-shrink-0 transition-transform ${isOpen ? "rotate-180" : ""}`} />
      </button>
      {isOpen && (
        <div className="px-6 pb-5 text-text-light text-sm leading-relaxed border-t border-gray-100 pt-4">
          {a}
        </div>
      )}
    </div>
  );
}

// ── FAQ Page-level JSON-LD (injected at server render) ─────────────────────

const faqStructuredData = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map(({ q, a }) => ({
    "@type": "Question",
    name: q,
    acceptedAnswer: {
      "@type": "Answer",
      text: a,
    },
  })),
};

// ── Main Page ─────────────────────────────────────────────────────────────────

export default function WechselnPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <>
      {/* JSON-LD FAQPage */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqStructuredData) }}
      />

      <div className="min-h-screen bg-warm-white">
        <Navbar />

        {/* ── HERO ── */}
        <section className="pt-28 pb-16 px-6 bg-navy text-white">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 bg-teal/20 text-teal rounded-full px-4 py-1.5 text-sm font-medium mb-6">
              <CheckCircleIcon className="w-4 h-4" />
              Kostenloser Wechselservice
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-5 leading-tight">
              Hausverwaltung wechseln?{" "}
              <span className="text-teal">So einfach geht's.</span>
            </h1>
            <p className="text-white/80 text-lg max-w-2xl mx-auto mb-10">
              Viele Eigentümer sind unzufrieden mit ihrer Hausverwaltung — trauen sich aber nicht zu wechseln.
              Dabei ist der Wechsel unkomplizierter als gedacht. Wir begleiten Sie durch jeden Schritt.
            </p>

            {/* 3-Step Timeline */}
            <div className="grid md:grid-cols-3 gap-6 mt-10">
              {[
                {
                  step: "1",
                  title: "Sie kündigen",
                  desc: "Kündigen Sie Ihrer bisherigen HV schriftlich mit der vertraglich vereinbarten Frist.",
                },
                {
                  step: "2",
                  title: "Wir übernehmen",
                  desc: "Wir koordinieren die vollständige Übergabe aller Unterlagen, Schlüssel und Konten.",
                },
                {
                  step: "3",
                  title: "Sie genießen Ruhe",
                  desc: "Ab Tag 1 läuft alles über uns — Ihre Mieter haben immer einen zuverlässigen Ansprechpartner.",
                },
              ].map((s, i) => (
                <div key={i} className="bg-white/10 rounded-2xl p-6 text-left border border-white/10">
                  <div className="w-10 h-10 bg-teal rounded-full flex items-center justify-center text-white font-bold text-lg mb-4">
                    {s.step}
                  </div>
                  <h3 className="font-bold text-white text-lg mb-2">{s.title}</h3>
                  <p className="text-white/70 text-sm leading-relaxed">{s.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── STEP 1: Kündigung ── */}
        <section id="schritt-1" className="py-16 px-6">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-start gap-6">
              <div className="w-12 h-12 bg-teal rounded-full flex items-center justify-center text-white font-bold text-xl flex-shrink-0 mt-1">
                1
              </div>
              <div className="flex-1">
                <h2 className="text-3xl font-bold text-navy mb-4">
                  Sie kündigen Ihrer bisherigen Hausverwaltung
                </h2>
                <p className="text-text-light text-lg mb-6">
                  Der erste Schritt gehört Ihnen — aber wir helfen Ihnen dabei. Hier alles, was Sie wissen müssen.
                </p>

                {/* Info Box */}
                <div className="bg-amber/5 border border-amber/30 rounded-2xl p-6 mb-8">
                  <h3 className="font-bold text-navy mb-4 flex items-center gap-2">
                    <svg className="w-5 h-5 text-amber" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="m11.25 11.25.041-.02a.75.75 0 0 1 1.063.852l-.708 2.836a.75.75 0 0 0 1.063.853l.041-.021M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9-3.75h.008v.008H12V8.25Z" />
                    </svg>
                    Wichtige Informationen zur Kündigung
                  </h3>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-semibold text-navy mb-2 text-sm">Kündigungsfristen (§ 621 BGB)</h4>
                      <ul className="space-y-1.5 text-sm text-text-light">
                        <li className="flex items-start gap-2">
                          <CheckCircleIcon className="w-4 h-4 text-teal flex-shrink-0 mt-0.5" />
                          Gesetzliche Mindestfrist: 3 Monate zum Monatsende
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircleIcon className="w-4 h-4 text-teal flex-shrink-0 mt-0.5" />
                          Viele Verträge: 6 Monate zum Jahresende — prüfen Sie Ihren Vertrag
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircleIcon className="w-4 h-4 text-teal flex-shrink-0 mt-0.5" />
                          Tipp: Außerordentliche Kündigung bei Pflichtverletzung möglich
                        </li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold text-navy mb-2 text-sm">Was muss die Kündigung enthalten?</h4>
                      <ul className="space-y-1.5 text-sm text-text-light">
                        <li className="flex items-start gap-2">
                          <CheckCircleIcon className="w-4 h-4 text-teal flex-shrink-0 mt-0.5" />
                          Schriftform (Brief oder E-Mail mit Bestätigung)
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircleIcon className="w-4 h-4 text-teal flex-shrink-0 mt-0.5" />
                          Eindeutiges Kündigungsdatum
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircleIcon className="w-4 h-4 text-teal flex-shrink-0 mt-0.5" />
                          Angabe des Objekts (Adresse)
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircleIcon className="w-4 h-4 text-teal flex-shrink-0 mt-0.5" />
                          Eigenhändige Unterschrift
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>

                <p className="text-text-light mb-6">
                  Nutzen Sie unseren kostenlosen Generator unten, um ein rechtssicheres Kündigungsschreiben zu erstellen.
                  In 2 Minuten fertig — zum Kopieren, Ausdrucken oder Versenden.
                </p>

                <a href="#kuendigung-generator" className="inline-flex items-center gap-2 bg-teal text-white px-6 py-3 rounded-xl font-semibold hover:bg-navy transition-colors">
                  Jetzt Kündigung erstellen
                  <ArrowRightIcon className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* ── STEP 2: Übergabe ── */}
        <section id="schritt-2" className="py-16 px-6 bg-light-gray">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-start gap-6">
              <div className="w-12 h-12 bg-teal rounded-full flex items-center justify-center text-white font-bold text-xl flex-shrink-0 mt-1">
                2
              </div>
              <div className="flex-1">
                <h2 className="text-3xl font-bold text-navy mb-4">
                  Wir übernehmen alle Unterlagen
                </h2>
                <p className="text-text-light text-lg mb-8">
                  Sobald Sie uns beauftragen, kümmern wir uns um alles. Sie müssen sich um keine einzige
                  Übergabe selbst kümmern.
                </p>

                <div className="grid md:grid-cols-2 gap-4">
                  {[
                    {
                      icon: "📬",
                      title: "Mieterbenachrichtigung",
                      desc: "Wir informieren alle Mieter schriftlich über den Verwalterwechsel, die neuen Kontaktdaten und die neue Bankverbindung.",
                    },
                    {
                      icon: "🏦",
                      title: "Bankverbindung & Daueraufträge",
                      desc: "Wir richten das neue Verwaltungskonto ein und koordinieren die Umstellung aller Daueraufträge für Mietzahlungen.",
                    },
                    {
                      icon: "📁",
                      title: "Dokumentenübergabe",
                      desc: "Wir fordern alle Unterlagen von der alten Verwaltung an: Mietverträge, NKA-Belege, Wartungsverträge, Versicherungen.",
                    },
                    {
                      icon: "🔑",
                      title: "Schlüsselübergabe",
                      desc: "Wir protokollieren die Übergabe aller Schlüssel für Hauseingang, Keller, Dachboden und sonstige Gemeinschaftsflächen.",
                    },
                    {
                      icon: "📞",
                      title: "Dienstleister-Koordination",
                      desc: "Wir übernehmen alle laufenden Wartungsverträge (Fahrstuhl, Heizung, Hausmeister) und prüfen diese auf Optimierungspotenzial.",
                    },
                    {
                      icon: "⚖️",
                      title: "Laufende Verfahren",
                      desc: "Offene Mahnverfahren, laufende Reparaturaufträge oder schwebende Versicherungsfälle — wir übernehmen und führen fort.",
                    },
                  ].map((item, i) => (
                    <div key={i} className="bg-white rounded-xl p-5 border border-gray-100">
                      <div className="text-2xl mb-3">{item.icon}</div>
                      <h3 className="font-semibold text-navy mb-2">{item.title}</h3>
                      <p className="text-sm text-text-light leading-relaxed">{item.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── STEP 3: Ruhe ── */}
        <section id="schritt-3" className="py-16 px-6">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-start gap-6">
              <div className="w-12 h-12 bg-teal rounded-full flex items-center justify-center text-white font-bold text-xl flex-shrink-0 mt-1">
                3
              </div>
              <div className="flex-1">
                <h2 className="text-3xl font-bold text-navy mb-4">
                  Sie genießen Ruhe. Wir erledigen den Rest.
                </h2>
                <p className="text-text-light text-lg mb-8">
                  Nach der Übergabe übernehmen wir die vollständige Verwaltung Ihres Objekts.
                  Transparent, zuverlässig — und zu einem fairen Preis.
                </p>

                <div className="bg-navy rounded-2xl p-8 text-white">
                  <div className="grid md:grid-cols-3 gap-8 mb-8">
                    {[
                      { value: "24h", label: "Reaktionszeit bei Notfällen" },
                      { value: "100%", label: "Digitale Eigentümerberichte" },
                      { value: "0 €", label: "Wechselkosten" },
                    ].map((stat, i) => (
                      <div key={i} className="text-center">
                        <div className="text-4xl font-bold text-teal mb-1">{stat.value}</div>
                        <div className="text-white/70 text-sm">{stat.label}</div>
                      </div>
                    ))}
                  </div>
                  <div className="text-center">
                    <a
                      href="/anfrage"
                      className="inline-flex items-center gap-2 bg-teal text-white px-8 py-3.5 rounded-xl font-semibold text-lg hover:bg-teal/80 transition-colors"
                    >
                      Jetzt kostenlos anfragen
                      <ArrowRightIcon className="w-5 h-5" />
                    </a>
                    <p className="text-white/60 text-sm mt-3">
                      Persönliches Angebot in 24 Stunden. Keine versteckten Kosten.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── KÜNDIGUNG GENERATOR ── */}
        <section id="kuendigung-generator" className="py-16 px-6 bg-light-gray">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-10">
              <h2 className="text-3xl font-bold text-navy mb-3">
                Kündigungsschreiben kostenlos erstellen
              </h2>
              <p className="text-text-light">
                Füllen Sie das Formular aus — wir generieren ein rechtssicheres Kündigungsschreiben
                für Sie. Keine Anmeldung, keine Speicherung Ihrer Daten.
              </p>
            </div>
            <KuendigungGenerator />
          </div>
        </section>

        {/* ── FAQ ── */}
        <section id="faq" className="py-16 px-6">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-10">
              <h2 className="text-3xl font-bold text-navy mb-3">
                Häufige Fragen zum Verwalterwechsel
              </h2>
              <p className="text-text-light">
                Alles, was Sie über den Wechsel der Hausverwaltung wissen müssen.
              </p>
            </div>
            <div className="space-y-3">
              {faqs.map((faq, i) => (
                <FAQItem
                  key={i}
                  q={faq.q}
                  a={faq.a}
                  isOpen={openFaq === i}
                  onToggle={() => setOpenFaq(openFaq === i ? null : i)}
                />
              ))}
            </div>
          </div>
        </section>

        {/* ── FINAL CTA ── */}
        <section className="py-16 px-6 bg-teal text-white">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">
              Bereit für einen reibungslosen Wechsel?
            </h2>
            <p className="text-white/80 text-lg mb-8">
              Fordern Sie jetzt Ihr persönliches Angebot an. Wir melden uns innerhalb von 24 Stunden
              mit einem konkreten Angebot und begleiten Sie durch den gesamten Wechselprozess.
            </p>
            <a
              href="/anfrage"
              className="inline-flex items-center gap-2 bg-white text-teal px-8 py-4 rounded-xl font-bold text-lg hover:bg-navy hover:text-white transition-colors"
            >
              Kostenloses Angebot anfragen
              <ArrowRightIcon className="w-5 h-5" />
            </a>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
}
