import type { Metadata } from "next";
import Link from "next/link";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

export const metadata: Metadata = {
  title: "Mietminderung Hamburg: Wann und wie viel darf man kürzen? (2026)",
  description:
    "Mietminderung in Hamburg: Rechtsgrundlage §536 BGB, Höhe bei typischen Mängeln (Schimmel, Heizungsausfall), Verfahren und Mustervorlage für Mieter.",
  keywords:
    "Mietminderung Hamburg, Mietminderung Höhe, Schimmel Mietminderung, Heizungsausfall Mietminderung, §536 BGB Mietminderung",
  openGraph: {
    title: "Mietminderung Hamburg: Wann und wie viel darf man kürzen?",
    description:
      "Alles über Mietminderung in Hamburg: Rechtsgrundlagen, Höhe bei Schimmel und Heizungsausfall, Verfahren und Mustervorlage.",
    url: "https://einfach-verwaltet.de/blog/mietminderung-hamburg",
    siteName: "einfach verwaltet.",
    locale: "de_DE",
    type: "article",
  },
};

const jsonLdArticle = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Mietminderung Hamburg: Wann und wie viel darf man kürzen?",
  description:
    "Alles über Mietminderung in Hamburg: Rechtsgrundlagen, Höhe bei Schimmel und Heizungsausfall, Verfahren und Mustervorlage.",
  author: { 
    "@type": "Person", 
    name: "Lukas Schmitz",
    jobTitle: "Gründer",
    worksFor: { "@type": "Organization", name: "einfach verwaltet." }
  },
  publisher: {
    "@type": "Organization",
    name: "einfach verwaltet.",
    logo: { "@type": "ImageObject", url: "https://einfach-verwaltet.de/logo.png" },
  },
  datePublished: "2026-02-26",
  inLanguage: "de",
  url: "https://einfach-verwaltet.de/blog/mietminderung-hamburg",
};

const jsonLdFaq = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Wie viel Mietminderung ist bei Schimmel möglich?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Bei Schimmel liegt die Mietminderung je nach Schwere zwischen 20% und 100%. Leichter Schimmel ohne Gesundheitsrisiko: 20-30%. Mittelschwerer Schimmel mit gesundheitlicher Beeinträchtigung: 40-60%. Massiver Schimmel mit Unbewohnbarkeit: bis zu 100%.",
      },
    },
    {
      "@type": "Question",
      name: "Ab wann kann ich die Miete bei Heizungsausfall mindern?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Bei Heizungsausfall in der Heizperiode kann die Miete sofort gemindert werden. In der Heizperiode (1. Oktober bis 30. April) gilt eine Minderung von 10-20%, bei Dauerkälte oder komplettem Ausfall auch 30-50%.",
      },
    },
    {
      "@type": "Question",
      name: "Muss ich den Mangel vorher angezeigt haben?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Ja, grundsätzlich müssen Mieter Mängel dem Vermieter anzeigen und eine angemessene Frist zur Beseitigung setzen. Bei akuten Gefahren oder wenn der Vermieter den Mangel bereits kennt, entfällt diese Pflicht.",
      },
    },
    {
      "@type": "Question",
      name: "Was passiert, wenn der Vermieter die Mietminderung ablehnt?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Bei Ablehnung kann der Mieter die Minderungssumme weiterhin zurückhalten oder beim Gericht ein Mietzinsminderungsverfahren einleiten. Das Amtsgericht entscheidet dann rechtskräftig über die angemessene Minderungshöhe.",
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
            <span className="text-gray-700">Mietminderung Hamburg</span>
          </nav>

          <header className="mb-10">
            <p className="text-teal text-sm font-semibold uppercase tracking-wider mb-3">
              Ratgeber · 8 min Lesezeit · Mietrecht
            </p>
            <h1 className="text-3xl md:text-4xl font-bold text-navy font-playfair mb-4 leading-tight">
              Mietminderung Hamburg: Wann und wie viel darf man kürzen?
            </h1>
            <p className="text-gray-500 text-sm">Februar 2026 · Lukas Schmitz, Gründer einfach verwaltet.</p>
          </header>

          {/* Quick Answer Box */}
          <div className="bg-teal/5 border-l-4 border-teal rounded-r-xl p-6 mb-10">
            <p className="font-semibold text-navy mb-2">Kurzantwort</p>
            <p className="text-gray-700">
              Mieter können bei Mängeln nach §536 BGB die Miete mindern. Bei Schimmel liegt 
              die Minderung zwischen 20-100%, bei Heizungsausfall in der Heizperiode bei 
              10-50%. Die Höhe richtet sich nach Schwere und Dauer des Mangels.
            </p>
          </div>

          <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed space-y-6">
            <p>
              Ein defekter Boiler im Winter, Schimmel an den Wänden oder ein undichtes Dach: 
              Wenn die Wohnung Mängel aufweist, haben Mieter das Recht zur Mietminderung. 
              Doch wie viel ist angemessen? Und was muss vorher passieren? Dieser Leitfaden 
              klärt über die Rechtslage in Hamburg auf.
            </p>

            <h2 className="text-2xl font-bold text-navy font-playfair mt-10 mb-4">
              Rechtsgrundlage: §536 BGB
            </h2>
            <p>
              Die <strong>Mietminderung</strong> ist im <strong>§536 BGB</strong> geregelt. 
              Danach kann der Mieter die Miete herabsetzen, wenn der Gebrauch der Mietsache 
              ganz oder teilweise entzogen ist oder wenn ihr Zustand eine Beeinträchtigung 
              des vertragsgemäßen Gebrauchs darstellt.
            </p>
            <p>
              Wichtig: Die Minderung erfolgt im Verhältnis zur <strong>Wertminderung</strong> 
              der Wohnung. Eine 100%ige Miete ist bei einem 50%igen Wertverlust nicht mehr 
              angemessen.
            </p>

            <div className="bg-teal/5 border-l-4 border-teal rounded-r-xl p-5 my-6">
              <p className="font-semibold text-navy mb-2">Zentrale Voraussetzungen</p>
              <ul className="text-sm space-y-1">
                <li>• Ein Mangel muss vorliegen (nicht nur Unannehmlichkeit)</li>
                <li>• Der Mangel muss die Wohnung im Wert mindern</li>
                <li>• Bei nicht offensichtlichen Mängeln: Anzeige an den Vermieter</li>
                <li>• Angemessene Frist zur Beseitigung setzen (außer bei Akutgefahr)</li>
              </ul>
            </div>

            <h2 className="text-2xl font-bold text-navy font-playfair mt-10 mb-4">
              Mietminderung bei typischen Mängeln
            </h2>
            <p>
              Die Höhe der Mietminderung orientiert sich an der Schwere und Dauer des Mangels. 
              Gerichte haben hierzu Richtwerte entwickelt:
            </p>

            <h3 className="text-xl font-semibold text-navy mt-6 mb-2">
              Schimmel in der Wohnung
            </h3>
            <p>
              Schimmel ist einer der häufigsten Gründe für Mietminderungen. Die Höhe richtet 
              sich nach Ausmaß und Gesundheitsgefährdung:
            </p>

            <div className="bg-white border border-gray-200 rounded-xl overflow-hidden my-6">
              <table className="w-full text-sm">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-4 py-3 text-left font-semibold text-navy">Schimmel-Schwere</th>
                    <th className="px-4 py-3 text-left font-semibold text-navy">Mietminderung</th>
                    <th className="px-4 py-3 text-left font-semibold text-navy">Beispiel</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  <tr>
                    <td className="px-4 py-3">Leicht, kleine Flächen</td>
                    <td className="px-4 py-3 font-semibold text-teal">10-20%</td>
                    <td className="px-4 py-3">Wenige Flecken, kein Geruch</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3">Mittel, mehrere Stellen</td>
                    <td className="px-4 py-3 font-semibold text-teal">20-30%</td>
                    <td className="px-4 py-3">Fensterfalzen, einzelne Wände</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3">Erheblich, gesundheitsrelevant</td>
                    <td className="px-4 py-3 font-semibold text-teal">30-50%</td>
                    <td className="px-4 py-3">Schwarzer Schimmel, Geruch</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3">Schwer, Raum unbenutzbar</td>
                    <td className="px-4 py-3 font-semibold text-teal">50-80%</td>
                    <td className="px-4 py-3">Ganze Räume betroffen</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3">Massiv, Wohnung unbewohnbar</td>
                    <td className="px-4 py-3 font-semibold text-teal">80-100%</td>
                    <td className="px-4 py-3">Ausgesiedet nötig</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h3 className="text-xl font-semibold text-navy mt-6 mb-2">
              Heizungsausfall in der Heizperiode
            </h3>
            <p>
              Ein funktionierendes Heizsystem ist essenziell. Bei Ausfall greift die Mietminderung 
              besonders schnell:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>1-3 Tage Ausfall:</strong> 10-15% Minderung</li>
              <li><strong>4-7 Tage Ausfall:</strong> 20-30% Minderung</li>
              <li><strong>Ab 1 Woche Ausfall:</strong> 30-50% Minderung</li>
              <li><strong>Bei Dauerkälte unter 0°C:</strong> Zusätzlich bis zu 20% mehr</li>
            </ul>

            <div className="bg-amber-50 border border-amber-200 rounded-xl p-4 my-4 text-sm">
              <strong>⚠️ Wichtig:</strong> Die gesetzliche Mindesttemperatur beträgt 20°C tagsüber 
              und 18°C nachts (01:00-05:00). Unterschreitet die Wohnungstemperatur diese Werte 
              über längere Zeit, liegt ein erheblicher Mangel vor.
            </div>

            <h3 className="text-xl font-semibold text-navy mt-6 mb-2">
              Weitere typische Mängel und Minderungshöhen
            </h3>

            <div className="bg-white border border-gray-200 rounded-xl overflow-hidden my-6">
              <table className="w-full text-sm">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-4 py-3 text-left font-semibold text-navy">Mangel</th>
                    <th className="px-4 py-3 text-left font-semibold text-navy">Mietminderung</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  <tr>
                    <td className="px-4 py-3">Wasserschaden / Undichtes Dach</td>
                    <td className="px-4 py-3 font-semibold text-teal">15-40%</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3">Defekte Fenster (nicht schließbar)</td>
                    <td className="px-4 py-3 font-semibold text-teal">5-15%</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3">Lärmbelästigung (Baustelle, Nachbarn)</td>
                    <td className="px-4 py-3 font-semibold text-teal">10-30%</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3">Lift-Ausfall (ab 3. Stock)</td>
                    <td className="px-4 py-3 font-semibold text-teal">10-20%</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3">Kein Warmwasser</td>
                    <td className="px-4 py-3 font-semibold text-teal">15-25%</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3">Stromausfall (Teil der Wohnung)</td>
                    <td className="px-4 py-3 font-semibold text-teal">20-40%</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h2 className="text-2xl font-bold text-navy font-playfair mt-10 mb-4">
              Das richtige Verfahren
            </h2>
            <p>
              Damit die Mietminderung rechtssicher ist, sollten Mieter diese Schritte befolgen:
            </p>

            <ol className="list-decimal pl-6 space-y-3">
              <li>
                <strong>Mangel dokumentieren:</strong> Fotos, Videos, Temperaturaufzeichnungen 
                (bei Kälte) oder Gutachten (bei Schimmel) erstellen.
              </li>
              <li>
                <strong>Mangel anzeigen:</strong> Schriftliche Mängelanzeige an den Vermieter 
                mit Beseitigungsfrist (14 Tage bei nicht-akuten Mängeln).
              </li>
              <li>
                <strong>Frist abwarten:</strong> Dem Vermieter angemessene Zeit zur Beseitigung 
                geben, es sei denn, es liegt Akutgefahr vor.
              </li>
              <li>
                <strong>Mietminderung erklären:</strong> Schriftliche Erklärung mit Begründung 
                und Minderungshöhe an den Vermieter senden.
              </li>
              <li>
                <strong>Minderungsbetrag zurückhalten:</strong> Die geminderte Miete zahlen, 
                den Differenzbetrag zurückbehalten.
              </li>
            </ol>

            <h2 className="text-2xl font-bold text-navy font-playfair mt-10 mb-4">
              Muster: Mietminderung erklären
            </h2>
            <div className="bg-gray-50 border border-gray-200 rounded-xl p-6 font-mono text-sm leading-relaxed not-prose">
              <p className="font-semibold text-navy mb-4">Muster: Erklärung der Mietminderung</p>
              <p>[Ihr Name]<br />[Ihre Adresse]<br />[PLZ Ort]</p>
              <br />
              <p>[Name des Vermieters / der Hausverwaltung]<br />[Adresse]</p>
              <br />
              <p>[Ort, Datum]</p>
              <br />
              <p>
                <strong>Erklärung der Mietminderung</strong><br />
                Mietobjekt: [Adresse], Wohnung: [Nr.]
              </p>
              <br />
              <p>Sehr geehrte Damen und Herren,</p>
              <br />
              <p>
                hiermit erkläre ich die Minderung der Miete für das oben genannte Mietobjekt 
                aufgrund folgender Mängel:
              </p>
              <br />
              <p>
                1. [Mangel beschreiben, z.B. „Schimmelbefall im Schlafzimmer seit [Datum]"]<br />
                2. [Weitere Mängel]
              </p>
              <br />
              <p>
                Der Mangel wurde Ihnen am [Datum] angezeigt. Eine Beseitigung ist bis heute 
                nicht erfolgt.
              </p>
              <br />
              <p>
                Ich mindere die Miete ab sofort um [XX]% von [EUR X.XXX] auf [EUR X.XXX] 
                monatlich.
              </p>
              <br />
              <p>
                Die Differenz von [EUR XXX] behalte ich bis zur vollständigen Beseitigung 
                des Mangels zurück.
              </p>
              <br />
              <p>Mit freundlichen Grüßen,<br />[Unterschrift]<br />[Name]</p>
            </div>

            {/* FAQ Section */}
            <h2 className="text-2xl font-bold text-navy font-playfair mt-10 mb-4">
              Häufig gestellte Fragen
            </h2>
            
            <div className="space-y-6 not-prose">
              <div className="bg-white border border-gray-200 rounded-xl p-5">
                <h3 className="font-semibold text-navy mb-2">Wie viel Mietminderung ist bei Schimmel möglich?</h3>
                <p className="text-gray-600 text-sm">
                  Bei Schimmel liegt die Mietminderung je nach Schwere zwischen 20% und 100%. Leichter Schimmel ohne Gesundheitsrisiko: 20-30%. Mittelschwerer Schimmel mit gesundheitlicher Beeinträchtigung: 40-60%. Massiver Schimmel mit Unbewohnbarkeit: bis zu 100%.
                </p>
              </div>

              <div className="bg-white border border-gray-200 rounded-xl p-5">
                <h3 className="font-semibold text-navy mb-2">Ab wann kann ich die Miete bei Heizungsausfall mindern?</h3>
                <p className="text-gray-600 text-sm">
                  Bei Heizungsausfall in der Heizperiode kann die Miete sofort gemindert werden. In der Heizperiode (1. Oktober bis 30. April) gilt eine Minderung von 10-20%, bei Dauerkälte oder komplettem Ausfall auch 30-50%.
                </p>
              </div>

              <div className="bg-white border border-gray-200 rounded-xl p-5">
                <h3 className="font-semibold text-navy mb-2">Muss ich den Mangel vorher angezeigt haben?</h3>
                <p className="text-gray-600 text-sm">
                  Ja, grundsätzlich müssen Mieter Mängel dem Vermieter anzeigen und eine angemessene Frist zur Beseitigung setzen. Bei akuten Gefahren oder wenn der Vermieter den Mangel bereits kennt, entfällt diese Pflicht.
                </p>
              </div>

              <div className="bg-white border border-gray-200 rounded-xl p-5">
                <h3 className="font-semibold text-navy mb-2">Was passiert, wenn der Vermieter die Mietminderung ablehnt?</h3>
                <p className="text-gray-600 text-sm">
                  Bei Ablehnung kann der Mieter die Minderungssumme weiterhin zurückhalten oder beim Gericht ein Mietzinsminderungsverfahren einleiten. Das Amtsgericht entscheidet dann rechtskräftig über die angemessene Minderungshöhe.
                </p>
              </div>

              <div className="bg-white border border-gray-200 rounded-xl p-5">
                <h3 className="font-semibold text-navy mb-2">Kann ich die Miete rückwirkend mindern?</h3>
                <p className="text-gray-600 text-sm">
                  Die Mietminderung kann grundsätzlich vom Zeitpunkt der Mangelentstehung an geltend gemacht werden. Mieter sollten Mängel jedoch sofort anzeigen und die Minderung zeitnah erklären, um Zweifel an der Rechtmäßigkeit zu vermeiden.
                </p>
              </div>
            </div>

            <h2 className="text-2xl font-bold text-navy font-playfair mt-10 mb-4">
              Fazit: Mietminderung ist ein Recht, kein Verzicht
            </h2>
            <p>
              Die Mietminderung ist ein legitimes Instrument, um bei Mängeln eine angemessene 
              Gegenleistung zu erhalten. Wichtig ist, das Verfahren einzuhalten: Mangel anzeigen, 
              Frist setzen, dokumentieren und schriftlich mindern. Bei Unsicherheiten über die 
              Höhe oder bei Ablehnung durch den Vermieter sollten Mieter rechtlichen Rat einholen.
            </p>
          </div>

          <div className="mt-12 bg-teal/10 border border-teal/20 rounded-xl p-8">
            <h3 className="text-xl font-bold text-navy mb-2 font-playfair">
              Lassen Sie einfach verwaltet.
            </h3>
            <p className="text-gray-600 mb-4">
              Ihre Immobilie professionell verwalten. Schnelle Mängelbeseitigung, 
              transparente Kommunikation und zufriedene Mieter.
            </p>
            <Link
              href="/anfrage"
              className="inline-block bg-teal text-white font-semibold px-6 py-3 rounded-lg hover:bg-teal/90 transition-colors"
            >
              Jetzt anfragen →
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
