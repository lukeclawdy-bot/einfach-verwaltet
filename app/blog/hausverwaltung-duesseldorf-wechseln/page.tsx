import type { Metadata } from "next";
import Link from "next/link";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

export const metadata: Metadata = {
  title: "Hausverwaltung in Düsseldorf wechseln — So geht's in 5 Schritten (2026) | einfach verwaltet.",
  description:
    "Hausverwaltung in Düsseldorf wechseln: Rechtliche Grundlagen (§26 WEG / §621 BGB), die 5 Schritte mit Zeitplan und was Sie bei der Übergabe beachten müssen.",
  keywords:
    "Hausverwaltung Düsseldorf wechseln, Hausverwaltung wechseln Düsseldorf, Verwalter wechseln Düsseldorf, WEG Verwaltung Düsseldorf",
  openGraph: {
    title: "Hausverwaltung in Düsseldorf wechseln — So geht's in 5 Schritten (2026)",
    description:
      "Wann der Wechsel sinnvoll ist, wie er rechtlich funktioniert und wie Sie den Übergang reibungslos gestalten — der Praxisleitfaden für Düsseldorfer Eigentümer.",
    url: "https://einfach-verwaltet.de/blog/hausverwaltung-duesseldorf-wechseln",
    siteName: "einfach verwaltet.",
    locale: "de_DE",
    type: "article",
  },
  alternates: {
    canonical: "https://einfach-verwaltet.de/blog/hausverwaltung-duesseldorf-wechseln",
  },
};

const jsonLdArticle = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Hausverwaltung in Düsseldorf wechseln — So geht's in 5 Schritten (2026)",
  description:
    "Praxisleitfaden für den Hausverwaltungswechsel in Düsseldorf: Rechtliche Grundlagen, 5-Schritte-Plan und Tipps für einen reibungslosen Übergang.",
  author: { "@type": "Organization", name: "einfach verwaltet." },
  publisher: {
    "@type": "Organization",
    name: "einfach verwaltet.",
    logo: { "@type": "ImageObject", url: "https://einfach-verwaltet.de/logo.png" },
  },
  datePublished: "2026-02-27",
  inLanguage: "de",
  url: "https://einfach-verwaltet.de/blog/hausverwaltung-duesseldorf-wechseln",
};

const jsonLdFAQ = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Wie kündige ich eine Hausverwaltung in Düsseldorf?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Bei einer WEG-Verwaltung kann die Eigentümergemeinschaft den Verwalter gemäß §26 WEG jederzeit mit Mehrheitsbeschluss abberufen. Bei Mietverwaltungsverträgen gilt §621 BGB: Kündigung zum Monatsende mit einer Frist, die im Vertrag geregelt ist (meist 3–6 Monate). Die Kündigung muss schriftlich erfolgen.",
      },
    },
    {
      "@type": "Question",
      name: "Wie lange dauert ein Hausverwaltungswechsel in Düsseldorf?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Rechnen Sie mit 3–6 Monaten vom Beschluss bis zum vollständigen Abschluss der Übergabe. Die eigentliche Übergabe (Dokumente, Guthaben, Zugänge) dauert 2–4 Wochen; erfahrungsgemäß verzögern sich manche Altverwalter bei der Herausgabe der Unterlagen.",
      },
    },
    {
      "@type": "Question",
      name: "Was muss der alte Verwalter bei der Übergabe herausgeben?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Der scheidende Verwalter muss herausgeben: alle Vertragsunterlagen (Mietverträge, Dienstleisterverträge), Kontoauszüge und Abrechnungen, Kautionskonten samt Belegen, digitale Zugangsdaten, Versicherungspolicen sowie sämtliche Eigentümer- und Mieterakten. Eine vollständige Übergabe-Checkliste schützt vor späteren Streitigkeiten.",
      },
    },
    {
      "@type": "Question",
      name: "Was kostet ein Hausverwaltungswechsel in Düsseldorf?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Der Wechsel selbst verursacht keine Pflichtgebühren. Möglicherweise fallen Kosten für eine außerordentliche Eigentümerversammlung an (€80–200 je nach Verwalter). Ein neuer Verwalter sollte keine Einrichtungsgebühren verlangen — das ist ein Warnsignal.",
      },
    },
  ],
};

export default function HausverwaltungDuesseldorfWechselnPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdArticle) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdFAQ) }}
      />
      <Navbar />
      <main className="pt-20 min-h-screen bg-warm-white">
        <article className="max-w-[800px] mx-auto px-6 py-12">
          {/* Breadcrumb */}
          <nav className="text-sm text-text-light mb-6" aria-label="Breadcrumb">
            <Link href="/blog" className="hover:text-teal transition-colors">Ratgeber</Link>
            <span className="mx-2">›</span>
            <span>Hausverwaltung Düsseldorf wechseln</span>
          </nav>

          {/* Header */}
          <header className="mb-10">
            <div className="flex flex-wrap gap-2 mb-4">
              <span className="bg-teal/10 text-teal text-xs font-semibold px-3 py-1 rounded-full">Verwalterwechsel</span>
              <span className="bg-gray-100 text-gray-600 text-xs font-medium px-3 py-1 rounded-full">10 min Lesezeit</span>
              <span className="bg-gray-100 text-gray-600 text-xs font-medium px-3 py-1 rounded-full">Februar 2026</span>
            </div>
            <h1 className="text-3xl md:text-4xl font-bold text-navy leading-tight mb-4">
              Hausverwaltung in Düsseldorf wechseln — So geht&apos;s in 5 Schritten (2026)
            </h1>
            <p className="text-lg text-text-light leading-relaxed">
              Wann der Wechsel sinnvoll ist, was rechtlich gilt und wie Sie den Übergang ohne Chaos gestalten — der Praxisleitfaden für Düsseldorfer Eigentümer.
            </p>
          </header>

          {/* Content */}
          <div className="prose prose-navy max-w-none text-gray-700 leading-relaxed space-y-8">

            <section>
              <h2 className="text-2xl font-bold text-navy mb-4">Wann ist ein Hausverwaltungswechsel in Düsseldorf sinnvoll?</h2>
              <p>
                Düsseldorf ist ein anspruchsvoller Immobilienmarkt: hohe Mietniveaus, gemischte Eigentümerstrukturen in Stadtteilen wie Pempelfort, Flingern oder Bilk und ein wachsender Anteil renditeorientierter Kapitalanleger. Genau das macht eine professionelle, reaktionsschnelle Hausverwaltung so wichtig — und macht sich umgekehrt jede Schwäche des Verwalters besonders deutlich bemerkbar.
              </p>
              <p>
                Typische Warnsignale, bei denen ein Wechsel ernsthaft in Betracht gezogen werden sollte:
              </p>
              <ul className="space-y-2 mb-4">
                {[
                  "Nebenkostenabrechnungen kommen zu spät oder enthalten regelmäßig Fehler",
                  "Anfragen von Mietern oder Eigentümern bleiben tagelang unbeantwortet",
                  "Reparaturen werden verschleppt — Handwerker tauchen nicht auf oder viel zu spät",
                  "Transparenz fehlt: Sie wissen nicht, was mit Ihren Rücklagen passiert",
                  "Eigentümerversammlungen finden unregelmäßig oder gar nicht statt",
                  "Der Verwalter rechnet intransparent ab oder stellt Leistungen in Rechnung, die nicht vereinbart waren",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm">
                    <span className="text-red-500 font-bold mt-0.5">✗</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <p>
                Wenn mehrere dieser Punkte zutreffen, ist es Zeit zu handeln. Ein Wechsel klingt komplizierter als er ist — mit dem richtigen Vorgehen läuft er geordnet ab.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-navy mb-4">Rechtliche Grundlage: §26 WEG und §621 BGB</h2>
              <p>
                Bevor Sie handeln, müssen Sie wissen, welches Recht gilt — denn WEG-Verwaltung und Mietverwaltung folgen unterschiedlichen Regeln.
              </p>

              <h3 className="text-xl font-semibold text-navy mb-3">WEG-Verwaltung (Eigentümergemeinschaft)</h3>
              <p>
                Nach <strong>§26 Abs. 3 WEG</strong> kann der Verwalter jederzeit durch Beschluss der Eigentümerversammlung abberufen werden — ohne Angabe von Gründen. Es reicht eine einfache Mehrheit der abgegebenen Stimmen. Der Verwaltervertrag endet dann spätestens 6 Monate nach der Abberufung, sofern nicht ein wichtiger Grund (§626 BGB analog) vorliegt, der zur fristlosen Kündigung berechtigt. Für die Abberufung ist eine ordnungsgemäß einberufene Eigentümerversammlung oder ein Umlaufbeschluss erforderlich.
              </p>

              <h3 className="text-xl font-semibold text-navy mb-3">Mietverwaltung (Einzeleigentümer)</h3>
              <p>
                Mietverwaltungsverträge sind Dienstleistungsverträge nach <strong>§611 ff. BGB</strong>. Die ordentliche Kündigung richtet sich nach <strong>§621 BGB</strong>: Ist keine Laufzeit vereinbart, kann monatlich zum Monatsende gekündigt werden. Sind Laufzeiten vereinbart (häufig 2–3 Jahre), ist eine ordentliche Kündigung erst zum Vertragsende möglich — es sei denn, es liegt ein wichtiger Grund nach §626 BGB vor (z.B. schwere Pflichtverletzungen, Unterschlagung).
              </p>
              <p>
                <strong>Praxistipp:</strong> Lesen Sie Ihren bestehenden Verwaltervertrag genau. Achten Sie auf Kündigungsfristen, Verlängerungsklauseln und eventuelle Vertragsstrafen. Im Zweifelsfall lohnt sich ein kurzes Gespräch mit einem Anwalt für Immobilienrecht.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-navy mb-4">Der 5-Schritte-Plan für den Wechsel in Düsseldorf</h2>

              <ol className="space-y-6">
                {[
                  {
                    step: "Schritt 1: Alternativen recherchieren und Angebote einholen (Monat 1)",
                    content: "Holen Sie mindestens drei Angebote von Hausverwaltungen ein, bevor Sie kündigen. Prüfen Sie Leistungsumfang, Preismodell und Referenzen. Fragen Sie konkret nach Reaktionszeiten, dem Eigentümerportal und dem Abrechnungsturnus. Ein guter neuer Verwalter nimmt sich Zeit für ein ausführliches Erstgespräch — das ist ein gutes Zeichen.",
                  },
                  {
                    step: "Schritt 2: Kündigung vorbereiten und einreichen (Monat 1–2)",
                    content: "Formulieren Sie die Kündigung schriftlich und per Einschreiben. Nennen Sie das Enddatum des Vertrags (auf Basis der im Vertrag vereinbarten Frist). Bei WEG-Verwaltungen muss die Abberufung als Tagesordnungspunkt für die nächste Eigentümerversammlung anberaumt werden — oder per Umlaufbeschluss mit Zustimmung aller Eigentümer.",
                  },
                  {
                    step: "Schritt 3: Neuen Verwalter beauftragen (Monat 2)",
                    content: "Schließen Sie den neuen Verwaltervertrag ab, bevor der alte ausläuft. So gibt es keine Lücke in der Betreuung. Ein guter neuer Verwalter koordiniert die Übergabe aktiv und weiß, was er vom alten Verwalter anfordern muss.",
                  },
                  {
                    step: "Schritt 4: Übergabe koordinieren und dokumentieren (Monat 3–4)",
                    content: "Der scheidende Verwalter ist gesetzlich verpflichtet, alle Unterlagen herauszugeben: Miet- und Dienstleistungsverträge, Kontoauszüge, Kautionskonten, digitale Zugangsdaten, Versicherungspolicen, Eigentümer- und Mieterakten sowie offene Vorgänge. Erstellen Sie ein Übergabeprotokoll und bestätigen Sie den Eingang jedes Dokuments schriftlich. Setzen Sie klare Fristen — der alte Verwalter hat keine unbegrenzte Zeit.",
                  },
                  {
                    step: "Schritt 5: Mieter und Dienstleister informieren (Monat 4–5)",
                    content: "Informieren Sie Ihre Mieter schriftlich über den Verwalterwechsel mit Name, Anschrift und Kontaktdaten des neuen Verwalters. Teilen Sie allen laufenden Dienstleistern (Hausmeister, Reinigung, Versicherungen, Stadtwerke) die neuen Kontaktdaten mit. Der neue Verwalter übernimmt das idealerweise koordiniert.",
                  },
                ].map((item, i) => (
                  <li key={i} className="flex gap-4">
                    <span className="w-8 h-8 rounded-full bg-teal text-white text-sm font-bold flex items-center justify-center shrink-0 mt-0.5">{i + 1}</span>
                    <div>
                      <span className="font-semibold text-navy block mb-1">{item.step}</span>
                      <span className="text-gray-700">{item.content}</span>
                    </div>
                  </li>
                ))}
              </ol>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-navy mb-4">Was Sie bei der Übergabe unbedingt beachten sollten</h2>
              <p>
                Die Übergabe ist erfahrungsgemäß die kritischste Phase. Manche scheidenden Verwalter ziehen die Herausgabe von Unterlagen in die Länge — sei es aus Desorganisation oder bewusst. So schützen Sie sich:
              </p>
              <ul className="space-y-3">
                {[
                  { title: "Übergabe-Checkliste vorab verschicken", desc: "Schicken Sie dem alten Verwalter schriftlich eine Auflistung aller zu übergebenden Dokumente mit konkreter Frist (z.B. 4 Wochen nach Vertragsende)." },
                  { title: "Kautionskonten sichern", desc: "Kautionen müssen auf separaten Treuhandkonten liegen und dürfen nicht mit dem Hausgeld verrechnet werden. Bestehen Sie auf vollständige Kontoauszüge und die Übertragung der Konten." },
                  { title: "Offene Vorgänge schriftlich erfassen", desc: "Laufende Reparaturaufträge, Mahnverfahren oder offene Rechtsfälle müssen übergeben werden. Lassen Sie sich alles schriftlich bestätigen." },
                  { title: "Im Notfall: Anwalt einschalten", desc: "Wenn der alte Verwalter Unterlagen verweigert, ist er in Verzug (§286 BGB). Ein anwaltliches Mahnschreiben bewirkt hier meist Wunder." },
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="text-teal font-bold mt-0.5">✓</span>
                    <div>
                      <span className="font-semibold text-navy">{item.title}: </span>
                      <span>{item.desc}</span>
                    </div>
                  </li>
                ))}
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-navy mb-4">Was eine gute Hausverwaltung in Düsseldorf heute leisten muss</h2>
              <p>
                Der Düsseldorfer Immobilienmarkt stellt hohe Anforderungen: Sorgfältige Nebenkostenabrechnungen, schnelle Kommunikation mit Eigentümern und Mietern sowie ein verlässliches Netzwerk an lokalen Handwerkern sind Mindeststandard. Wer mehr will — und das sollten Eigentümer wollen — bekommt heute Echtzeitübersicht über Zahlungseingänge, digitale Dokumentenarchive und klare Reaktionszeitversprechen.
              </p>
              <p>
                Beim Wechsel ist ein guter Zeitpunkt, die eigenen Anforderungen neu zu formulieren: Was war am alten Verwalter unbefriedigend? Was soll der neue besser machen? Halten Sie diese Erwartungen fest und besprechen Sie sie beim ersten Gespräch mit potenziellen Nachfolgern.
              </p>
            </section>

            {/* FAQ */}
            <section className="bg-white rounded-2xl border border-gray-200 p-8 mt-10">
              <h2 className="text-2xl font-bold text-navy mb-6">Häufige Fragen zum Verwalterwechsel in Düsseldorf</h2>
              <div className="space-y-6">
                {[
                  {
                    q: "Wie kündige ich eine WEG-Verwaltung in Düsseldorf?",
                    a: "Die Eigentümerversammlung beschließt die Abberufung des Verwalters mit einfacher Mehrheit (§26 WEG). Der Verwaltervertrag endet dann spätestens nach 6 Monaten. Bei wichtigem Grund ist sofortige Abberufung möglich.",
                  },
                  {
                    q: "Was muss der alte Verwalter herausgeben?",
                    a: "Alle Vertragsunterlagen, Kontoauszüge, Kautionskonten, digitale Zugangsdaten, Versicherungspolicen und sämtliche Eigentümer- und Mieterakten. Setzen Sie eine schriftliche Frist.",
                  },
                  {
                    q: "Wie lange dauert ein Wechsel erfahrungsgemäß?",
                    a: "Planen Sie 3–6 Monate vom Beschluss bis zur vollständigen Übergabe. Den neuen Verwalter sollten Sie beauftragen, bevor der alte ausläuft.",
                  },
                  {
                    q: "Kostet ein Hausverwaltungswechsel Geld?",
                    a: "Der Wechsel selbst ist gebührenfrei. Kosten können für eine außerordentliche Eigentümerversammlung anfallen (€80–200). Seriöse neue Verwalter verlangen keine Einrichtungsgebühren.",
                  },
                ].map((item, i) => (
                  <div key={i} className="border-b border-gray-100 pb-5 last:border-0 last:pb-0">
                    <h3 className="font-semibold text-navy mb-2">{item.q}</h3>
                    <p className="text-gray-700 text-sm leading-relaxed">{item.a}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* CTA */}
            <section className="bg-navy rounded-2xl p-8 text-white text-center mt-10">
              <h2 className="text-2xl font-bold mb-3">Hausverwaltung in Düsseldorf wechseln — wir begleiten Sie</h2>
              <p className="text-white/80 mb-6 max-w-md mx-auto">
                Transparente Preise, klare Kommunikation, strukturierte Übergabe. Fordern Sie jetzt Ihr persönliches Angebot an.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <Link
                  href="/hausverwaltung-duesseldorf"
                  className="inline-flex items-center justify-center gap-2 bg-teal text-white px-7 py-4 rounded-xl font-semibold text-base hover:bg-teal/90 transition-all hover:shadow-lg"
                >
                  Hausverwaltung Düsseldorf →
                </Link>
                <Link
                  href="/wechseln"
                  className="inline-flex items-center justify-center gap-2 bg-white/10 text-white px-7 py-4 rounded-xl font-semibold text-base hover:bg-white/20 transition-all"
                >
                  Jetzt wechseln
                </Link>
              </div>
              <p className="text-white/50 text-xs mt-4">Kostenlos & unverbindlich · Antwort am selben Tag</p>
            </section>
          </div>
        </article>
      </main>
      <Footer />
    </>
  );
}
