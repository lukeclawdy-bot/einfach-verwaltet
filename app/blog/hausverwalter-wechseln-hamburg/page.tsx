import type { Metadata } from "next";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

export const metadata: Metadata = {
  title: "Hausverwalter wechseln in Hamburg: Schritt-für-Schritt Anleitung (2026)",
  description: "So wechseln Sie Ihren Hausverwalter in Hamburg: Kündigungsfristen, Checkliste mit 14 Punkten, häufige Fehler und was tun, wenn der alte Verwalter nicht kooperiert.",
};

const howToSchema = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  "name": "Hausverwalter wechseln in Hamburg",
  "description": "Schritt-für-Schritt: So wechseln Sie Ihren Hausverwalter in Hamburg",
  "step": [
    { "@type": "HowToStep", "name": "Kündigung fristgerecht einreichen", "text": "Kündigung schriftlich mit Einschreiben, meist 3 Monate zum Jahresende." },
    { "@type": "HowToStep", "name": "Neuen Verwalter beauftragen", "text": "Vergleich einholen, Hausverwaltungsvertrag prüfen (lassen), Starttermin festlegen." },
    { "@type": "HowToStep", "name": "Unterlagenübergabe organisieren", "text": "Mietverträge, Konten, Schlüssel, Versicherungspolicen, offene Forderungen übergeben lassen." },
    { "@type": "HowToStep", "name": "Mieter und Behörden informieren", "text": "Mieter schriftlich über Verwalterwechsel informieren, Finanzamt und Versicherungen aktualisieren." },
  ],
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "Hausverwalter wechseln in Hamburg: Schritt-für-Schritt Anleitung (2026)",
  "datePublished": "2026-02-26",
  "author": { "@type": "Organization", "name": "einfach verwaltet. Redaktion" },
  "publisher": { "@type": "Organization", "name": "einfach verwaltet.", "url": "https://einfach-verwaltet.de" },
};

const warnsignale = [
  { icon: "📵", title: "Keine Erreichbarkeit", desc: "Anrufe werden nicht zurückgegeben, E-Mails bleiben tagelang unbeantwortet." },
  { icon: "📄", title: "Fehlerhafte Abrechnungen", desc: "Betriebskostenabrechnungen enthalten Fehler, sind unvollständig oder kommen dauerhaft zu spät." },
  { icon: "🔧", title: "Reparaturen werden verschleppt", desc: "Handwerkeraufträge werden nicht vergeben oder Mängel über Monate ignoriert." },
  { icon: "💸", title: "Intransparente Kosten", desc: "Keine Belege für Ausgaben, unklare Rücklagenentwicklung, fehlende Kontoauszüge." },
  { icon: "⚖️", title: "Rechtsverstöße", desc: "Eigentümerversammlung findet nicht statt, Beschlüsse werden nicht umgesetzt." },
];

const checklist = [
  "Kündigungsschreiben aufsetzen (schriftlich, Einschreiben mit Rückschein)",
  "Kündigungsfrist prüfen (meist 3 Monate zum 31.12. — Vertrag genau lesen)",
  "Bei WEG: Eigentümerbeschluss für Abberufung (§ 26 WEG)",
  "Mindestens 3 neue Verwalter vergleichen (Angebote einholen)",
  "Hausverwaltungsvertrag des neuen Verwalters prüfen (ggf. Anwalt)",
  "Starttermin nahtlos planen (kein Verwaltungsvakuum)",
  "Liste aller zu übergebenden Unterlagen erstellen",
  "Treuhandkonto-Übertragung koordinieren",
  "Alle Mietverträge und Nebenkostenabrechnungen übergeben lassen",
  "Schlüsselliste und Zugangsdaten übergeben lassen",
  "Versicherungspolicen auf neuen Verwalter umschreiben",
  "Mieter schriftlich über Verwalterwechsel informieren (neue Kontaktdaten)",
  "Finanzamt informieren (bei Mietverwaltung)",
  "Offene Forderungen und laufende Prozesse dokumentieren",
];

export default function HausverwalterWechseln() {
  return (
    <>
      <Navbar />
      <main className="pt-16">
        <div className="bg-navy py-16 px-6">
          <div className="max-w-3xl mx-auto">
            <div className="inline-block bg-teal/20 text-teal text-xs font-semibold px-3 py-1 rounded-full mb-4">Verwalterwechsel</div>
            <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Hausverwalter wechseln in Hamburg: Schritt-für-Schritt Anleitung (2026)
            </h1>
            <p className="text-white/70 text-lg">Kündigungsfristen, Checkliste und was tun, wenn der alte Verwalter nicht kooperiert.</p>
            <div className="flex items-center gap-4 mt-6 text-white/50 text-sm">
              <span>26. Februar 2026</span><span>•</span><span>10 min Lesezeit</span>
            </div>
          </div>
        </div>

        <article className="max-w-3xl mx-auto px-6 py-12">
          <div className="prose prose-lg max-w-none text-text-main">

            <h2 className="text-2xl font-bold text-navy mt-2 mb-4">5 Warnsignale: Wann ist ein Wechsel sinnvoll?</h2>
            <p>Ein Verwalterwechsel ist aufwendig — aber manchmal unumgänglich. Diese Warnsignale sollten Sie nicht ignorieren:</p>
            <div className="not-prose space-y-3 my-6">
              {warnsignale.map((w) => (
                <div key={w.title} className="flex items-start gap-4 bg-white border border-gray-100 rounded-xl p-4">
                  <span className="text-2xl">{w.icon}</span>
                  <div><p className="font-semibold text-navy">{w.title}</p><p className="text-sm text-text-light">{w.desc}</p></div>
                </div>
              ))}
            </div>

            <h2 className="text-2xl font-bold text-navy mt-10 mb-4">Kündigungsfristen und -rechte</h2>
            <p>Die Kündigung des Hausverwaltungsvertrags hängt von der Vertragsart ab:</p>
            <div className="not-prose bg-light-gray rounded-xl p-5 my-4 text-sm space-y-3">
              <div><strong className="text-navy">Mietverwaltung (BGB-Vertrag):</strong> Kündigung nach vertraglich vereinbarter Frist — meist 3 Monate zum Jahresende. Im Vertrag nachschauen.</div>
              <div><strong className="text-navy">WEG-Verwaltung (§ 26 WEG):</strong> Abberufung jederzeit mit einfacher Mehrheit. Vertragsende automatisch nach 6 Monaten (oder laut Vertragsklausel früher).</div>
              <div><strong className="text-navy">Außerordentliche Kündigung:</strong> Bei schwerwiegenden Pflichtverletzungen (Untreue, grobe Vernachlässigung) fristlos möglich — rechtliche Beratung empfohlen.</div>
            </div>
            <p><strong>Tipp:</strong> Schicken Sie die Kündigung immer per <strong>Einschreiben mit Rückschein</strong>. Ein Nachweis über den Eingang ist essenziell, falls es später zu Streitigkeiten kommt.</p>

            <h2 className="text-2xl font-bold text-navy mt-10 mb-4">Checkliste: 14 Schritte für einen reibungslosen Wechsel</h2>
            <div className="not-prose space-y-2 my-4">
              {checklist.map((item, i) => (
                <div key={i} className="flex items-start gap-3 p-3 bg-white border border-gray-100 rounded-lg text-sm">
                  <div className="w-6 h-6 bg-navy text-white rounded-full flex items-center justify-center flex-shrink-0 text-xs font-bold">{i + 1}</div>
                  <span className="text-text-main">{item}</span>
                </div>
              ))}
            </div>

            <h2 className="text-2xl font-bold text-navy mt-10 mb-4">Häufige Fehler beim Verwalterwechsel</h2>
            <ul className="not-prose space-y-2 my-4">
              {[
                { e: "Kündigung zu spät", l: "Verpassen Sie die Frist, verlängert sich der Vertrag oft automatisch um 1 Jahr." },
                { e: "Kein Verwaltungsvakuum einkalkuliert", l: "Neuer Verwalter braucht 4-8 Wochen Einarbeitung. Start früh planen." },
                { e: "Unterlagen nicht vollständig übergeben", l: "Bestehen Sie auf vollständiger Übergabe — notfalls gerichtlich durchsetzbar." },
                { e: "Mieter nicht informiert", l: "Mieter zahlen Miete ans falsche Konto. Informieren Sie umgehend schriftlich." },
              ].map((f) => (
                <li key={f.e} className="flex gap-3 items-start text-sm">
                  <span className="text-red-500 font-bold flex-shrink-0">✗</span>
                  <span><strong>{f.e}:</strong> {f.l}</span>
                </li>
              ))}
            </ul>

            <h2 className="text-2xl font-bold text-navy mt-10 mb-4">Was tun, wenn der alte Verwalter nicht kooperiert?</h2>
            <p>Leider kommt es vor, dass Verwalter die Unterlagenübergabe verzögern. Ihre Rechte:</p>
            <ol className="not-prose space-y-2 my-4">
              {[
                "Formlose Aufforderung zur Übergabe mit Frist (14 Tage)",
                "Schriftliche Mahnung per Einschreiben mit konkreter Frist",
                "Anwaltsschreiben (oft reicht das, um Bewegung zu erzeugen)",
                "Klage auf Herausgabe der Verwaltungsunterlagen (AG Hamburg, schnelles Verfahren)",
              ].map((s, i) => (
                <li key={i} className="flex gap-3 items-start text-sm">
                  <div className="w-5 h-5 bg-teal text-white rounded-full flex items-center justify-center flex-shrink-0 text-xs font-bold">{i + 1}</div>
                  <span>{s}</span>
                </li>
              ))}
            </ol>
          </div>

          {/* CTA */}
          <div className="bg-navy rounded-2xl p-8 mt-12 text-center">
            <h3 className="text-2xl font-bold text-white mb-3">Wir begleiten Ihren Verwalterwechsel</h3>
            <p className="text-white/70 mb-6">Nahtlose Übernahme, vollständige Unterlagensicherung, transparente Abrechnung vom ersten Tag.</p>
            <a href="/anfrage" className="inline-block bg-teal text-white px-8 py-4 rounded-xl font-semibold hover:bg-teal/80 transition-colors">
              Kostenloses Angebot in 2 Minuten →
            </a>
          </div>
        </article>

        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      </main>
      <Footer />
    </>
  );
}
