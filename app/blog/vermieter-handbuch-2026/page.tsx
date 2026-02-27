import type { Metadata } from "next";
import Link from "next/link";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

export const metadata: Metadata = {
  title: "Vermieter-Handbuch 2026: §556, §558 BGB, GEG und WEG-Reform | einfach verwaltet.",
  description:
    "Das komplette Vermieter-Handbuch 2026: Mieterhöhung nach §558 BGB, Nebenkostenabrechnung nach §556 BGB, Energieausweis §16a GEG und WEG-Reform. Rechtssicher vermieten.",
  keywords:
    "Vermieter Handbuch 2026, §558 BGB Mieterhöhung, §556 BGB Nebenkostenabrechnung, Energieausweis §16a GEG, WEG Reform 2024, Vermieter Pflichten 2026",
  openGraph: {
    title: "Vermieter-Handbuch 2026: Alle wichtigen Gesetze und Pflichten",
    description:
      "Vollständiger Überblick für Vermieter 2026: §556 BGB, §558 BGB, Energieausweis nach §16a GEG und WEG-Reform — praxisnah erklärt.",
    url: "https://einfach-verwaltet.de/blog/vermieter-handbuch-2026",
    siteName: "einfach verwaltet.",
    locale: "de_DE",
    type: "article",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Vermieter-Handbuch 2026: §556, §558 BGB, Energieausweis und WEG-Reform",
  description:
    "Der vollständige Leitfaden für Vermieter in Deutschland 2026 — von der Nebenkostenabrechnung über Mieterhöhungen bis zum Energieausweis.",
  author: { "@type": "Organization", name: "einfach verwaltet." },
  publisher: {
    "@type": "Organization",
    name: "einfach verwaltet.",
    logo: { "@type": "ImageObject", url: "https://einfach-verwaltet.de/logo.png" },
  },
  datePublished: "2026-02-27",
  dateModified: "2026-02-27",
  inLanguage: "de",
  url: "https://einfach-verwaltet.de/blog/vermieter-handbuch-2026",
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Wie oft darf ich die Miete erhöhen?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Nach §558 Abs. 3 BGB darf die Miete innerhalb von 3 Jahren um maximal 20 % erhöht werden (in Gebieten mit Wohnungsmangel 15 %). Zwischen zwei Mieterhöhungen muss mindestens ein Jahr liegen. Die Miete darf die ortsübliche Vergleichsmiete nicht übersteigen.",
      },
    },
    {
      "@type": "Question",
      name: "Wann muss die Nebenkostenabrechnung vorliegen?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Die Nebenkostenabrechnung muss dem Mieter nach §556 Abs. 3 BGB spätestens 12 Monate nach Ende des Abrechnungszeitraums zugehen. Wird die Frist versäumt, verliert der Vermieter seinen Anspruch auf Nachzahlungen — Guthaben muss er jedoch weiterhin erstatten.",
      },
    },
    {
      "@type": "Question",
      name: "Wer braucht einen Energieausweis nach §16a GEG?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Nach §16a GEG sind Vermieter verpflichtet, potenziellen Mietern bei Besichtigungen den Energieausweis unaufgefordert vorzulegen und eine Kopie auszuhändigen. Kennwerte wie Energieeffizienzklasse und Endenergiebedarf müssen in Immobilienanzeigen angegeben werden. Verstöße können mit Bußgeldern bis zu 15.000 € geahndet werden.",
      },
    },
    {
      "@type": "Question",
      name: "Was hat sich durch die WEG-Reform geändert?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Die WEG-Reform 2020 hat wichtige Änderungen gebracht: Eigentümerversammlungen können online abgehalten werden, die Beschlussfähigkeit ist unabhängig von der Anzahl der anwesenden Eigentümer, und einzelne Eigentümer haben ein Recht auf privilegierten Einbau (Ladestation, Rollstuhlrampe, Glasfaser). Außerdem wurde die Verwalterzertifizierungspflicht eingeführt.",
      },
    },
    {
      "@type": "Question",
      name: "Muss ich als Vermieter einen Hausverwalter haben?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Bei Wohnungseigentümergemeinschaften (WEG) ist die Bestellung eines Verwalters nach §26 WEG zwingend. Bei reinen Mietobjekten ist keine Verwalterpflicht vorgesehen, aber eine professionelle Hausverwaltung kann erheblichen Aufwand ersparen und rechtliche Risiken minimieren.",
      },
    },
  ],
};

export default function VermieterHandbuch2026Page() {
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
        {/* Hero */}
        <section className="py-16 lg:py-24 bg-warm-white">
          <div className="max-w-[800px] mx-auto px-6">
            <div className="mb-6">
              <Link
                href="/blog"
                className="text-teal text-sm font-medium hover:underline"
              >
                ← Zurück zum Ratgeber
              </Link>
            </div>
            <div className="flex items-center gap-3 mb-6">
              <span className="bg-navy/10 text-navy text-xs font-semibold px-3 py-1 rounded-full">
                Mietrecht
              </span>
              <span className="text-text-light text-sm">12 min Lesezeit · Februar 2026</span>
            </div>
            <h1 className="text-4xl lg:text-5xl font-bold text-navy mb-6 font-serif leading-tight">
              Vermieter-Handbuch 2026: §556, §558 BGB, Energieausweis und WEG-Reform
            </h1>
            <p className="text-xl text-text-light leading-relaxed">
              Die rechtlichen Anforderungen an Vermieter wachsen. 2026 müssen Sie §558 BGB bei 
              Mieterhöhungen beachten, §556 BGB korrekt umsetzen, den Energieausweis nach §16a GEG 
              vorlegen und die WEG-Reform im Blick behalten. Dieser Leitfaden fasst alles Wesentliche zusammen.
            </p>
          </div>
        </section>

        {/* Content */}
        <section className="py-12 lg:py-16 bg-white">
          <div className="max-w-[800px] mx-auto px-6 prose prose-lg max-w-none">

            <h2 className="text-3xl font-bold text-navy mb-6 font-serif">
              §558 BGB: Mieterhöhung bis zur ortsüblichen Vergleichsmiete
            </h2>
            <p className="text-text-light leading-relaxed mb-4">
              Die Mieterhöhung ist eines der sensibelsten Themen im Mietverhältnis. §558 BGB regelt, 
              unter welchen Voraussetzungen Sie als Vermieter die Miete erhöhen dürfen.
            </p>

            <h3 className="text-xl font-bold text-navy mb-3 font-serif mt-8">
              Voraussetzungen für eine Mieterhöhung
            </h3>
            <ul className="space-y-2 text-text-light mb-6">
              <li className="flex gap-2"><span className="text-teal font-bold">✓</span> Die Miete ist seit mindestens 15 Monaten unverändert (§558 Abs. 1 BGB)</li>
              <li className="flex gap-2"><span className="text-teal font-bold">✓</span> Die neue Miete übersteigt die ortsübliche Vergleichsmiete nicht</li>
              <li className="flex gap-2"><span className="text-teal font-bold">✓</span> Die Kappungsgrenze von 20 % innerhalb von 3 Jahren wird eingehalten (in angespannten Märkten: 15 %)</li>
              <li className="flex gap-2"><span className="text-teal font-bold">✓</span> Das Erhöhungsverlangen ist schriftlich und begründet</li>
            </ul>

            <h3 className="text-xl font-bold text-navy mb-3 font-serif mt-8">
              Begründungsmittel nach §558a BGB
            </h3>
            <p className="text-text-light leading-relaxed mb-4">
              Sie müssen Ihr Erhöhungsverlangen begründen. Anerkannte Begründungsmittel sind:
            </p>
            <div className="bg-warm-white rounded-xl p-6 mb-6 border border-gray-100">
              <ul className="space-y-3 text-text-light">
                <li><strong className="text-navy">Mietspiegel</strong> — Der qualifizierte Mietspiegel ist das wichtigste Instrument. Er gibt die ortsübliche Vergleichsmiete für vergleichbare Wohnungen an.</li>
                <li><strong className="text-navy">Sachverständigengutachten</strong> — Ein vereidigter Sachverständiger kann die ortsübliche Vergleichsmiete ermitteln.</li>
                <li><strong className="text-navy">Vergleichswohnungen</strong> — Drei vergleichbare Wohnungen im selben Ort mit ähnlicher Ausstattung können als Referenz dienen.</li>
                <li><strong className="text-navy">Mietdatenbank</strong> — Von Gemeinde oder Interessenvertretungen geführte Datenbanken.</li>
              </ul>
            </div>
            <p className="text-text-light leading-relaxed mb-4">
              Der Mieter hat nach §558b BGB zwei Monate Zeit, der Erhöhung zuzustimmen. Verweigert er die 
              Zustimmung, können Sie auf Erteilung der Zustimmung klagen — jedoch nur innerhalb von 3 weiteren Monaten.
            </p>

            <h2 className="text-3xl font-bold text-navy mb-6 font-serif mt-12">
              §556 BGB: Nebenkostenabrechnung korrekt erstellen
            </h2>
            <p className="text-text-light leading-relaxed mb-4">
              §556 BGB regelt die Betriebskosten und deren Abrechnung. Fehler hier können teuer werden — 
              entweder durch den Verlust von Nachzahlungsansprüchen oder durch Bußgelder.
            </p>

            <h3 className="text-xl font-bold text-navy mb-3 font-serif mt-8">
              Die 12-Monats-Frist: Entscheidend für Nachzahlungen
            </h3>
            <p className="text-text-light leading-relaxed mb-4">
              Nach §556 Abs. 3 BGB müssen Sie die Nebenkostenabrechnung dem Mieter spätestens 
              12 Monate nach Ende des Abrechnungszeitraums zustellen. Versäumen Sie diese Frist:
            </p>
            <div className="bg-red-50 rounded-xl p-6 mb-6 border border-red-100">
              <p className="text-red-800 font-semibold mb-2">⚠️ Wichtig: Fristversäumnis hat Folgen</p>
              <ul className="space-y-1 text-red-700 text-sm">
                <li>• Nachzahlungsansprüche gegenüber dem Mieter erlöschen</li>
                <li>• Guthaben des Mieters muss trotzdem erstattet werden</li>
                <li>• Der Mieter kann die Vorauszahlung auf Null reduzieren</li>
              </ul>
            </div>

            <h3 className="text-xl font-bold text-navy mb-3 font-serif mt-8">
              Umlagefähige Betriebskosten nach der BetrKV
            </h3>
            <p className="text-text-light leading-relaxed mb-4">
              Die Betriebskostenverordnung (BetrKV) listet abschließend auf, welche Kosten auf den 
              Mieter umgelegt werden dürfen. Zu den wichtigsten gehören:
            </p>
            <div className="grid sm:grid-cols-2 gap-4 mb-6">
              {[
                "Grundsteuer", "Wasserversorgung", "Entwässerung", "Heizkosten",
                "Warmwasser", "Aufzug", "Straßenreinigung", "Müllbeseitigung",
                "Gebäudereinigung", "Gartenpflege", "Beleuchtung", "Schornsteinreinigung",
                "Versicherungen", "Hauswart", "Gemeinschafts-TV", "Sonstige Betriebskosten"
              ].map((item) => (
                <div key={item} className="flex gap-2 items-center text-text-light text-sm">
                  <span className="text-teal">✓</span> {item}
                </div>
              ))}
            </div>
            <p className="text-text-light leading-relaxed mb-4">
              <strong className="text-navy">Nicht umlagefähig</strong> sind Verwaltungskosten, Instandhaltungs- 
              und Instandsetzungskosten sowie Kosten der Erstausstattung.
            </p>

            <h2 className="text-3xl font-bold text-navy mb-6 font-serif mt-12">
              §16a GEG: Energieausweis-Pflichten für Vermieter
            </h2>
            <p className="text-text-light leading-relaxed mb-4">
              Das Gebäudeenergiegesetz (GEG) verpflichtet Vermieter zur Vorlage des Energieausweises. 
              §16a GEG regelt die konkreten Pflichten bei Wohnungsvermietung.
            </p>

            <h3 className="text-xl font-bold text-navy mb-3 font-serif mt-8">
              Was §16a GEG von Ihnen verlangt
            </h3>
            <div className="space-y-4 mb-6">
              <div className="bg-warm-white rounded-xl p-5 border border-gray-100">
                <h4 className="font-bold text-navy mb-2">Bei Inserierung</h4>
                <p className="text-text-light text-sm">In kommerziellen Immobilienanzeigen müssen die Energieeffizienzklasse, der Endenergiebedarf oder -verbrauch, der Hauptenergieträger und das Baujahr des Gebäudes angegeben werden.</p>
              </div>
              <div className="bg-warm-white rounded-xl p-5 border border-gray-100">
                <h4 className="font-bold text-navy mb-2">Bei Besichtigungen</h4>
                <p className="text-text-light text-sm">Der Energieausweis muss potenziellen Mietern bei der Besichtigung unaufgefordert zugänglich gemacht werden — nicht erst auf Nachfrage.</p>
              </div>
              <div className="bg-warm-white rounded-xl p-5 border border-gray-100">
                <h4 className="font-bold text-navy mb-2">Bei Vertragsabschluss</h4>
                <p className="text-text-light text-sm">Spätestens bei Abschluss des Mietvertrags muss dem Mieter eine Kopie des Energieausweises ausgehändigt werden.</p>
              </div>
            </div>
            <p className="text-text-light leading-relaxed mb-4">
              Verstöße gegen §16a GEG können als Ordnungswidrigkeit mit Bußgeldern bis zu 15.000 € 
              geahndet werden. Stellen Sie sicher, dass Ihr Energieausweis aktuell ist — die Gültigkeit 
              beträgt 10 Jahre.
            </p>

            <h2 className="text-3xl font-bold text-navy mb-6 font-serif mt-12">
              WEG-Reform: Was Wohnungseigentümer 2026 wissen müssen
            </h2>
            <p className="text-text-light leading-relaxed mb-4">
              Die Reform des Wohnungseigentumsgesetzes (WEG-Reform 2020) hat die Rechte und 
              Pflichten von Eigentümern und Verwaltern grundlegend modernisiert. Fünf Jahre später 
              sind die Änderungen vollständig in der Praxis angekommen.
            </p>

            <h3 className="text-xl font-bold text-navy mb-3 font-serif mt-8">
              Die wichtigsten WEG-Reform-Änderungen im Überblick
            </h3>
            <div className="space-y-4 mb-6">
              <div className="flex gap-4">
                <div className="w-8 h-8 bg-teal rounded-full flex items-center justify-center flex-shrink-0 text-white font-bold text-sm">1</div>
                <div>
                  <h4 className="font-bold text-navy mb-1">Online-Eigentümerversammlungen (§23 WEG)</h4>
                  <p className="text-text-light text-sm">Eigentümerversammlungen können vollständig online oder hybrid durchgeführt werden. Ein Mehrheitsbeschluss genügt — eine Vereinbarung ist nicht notwendig.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-8 h-8 bg-teal rounded-full flex items-center justify-center flex-shrink-0 text-white font-bold text-sm">2</div>
                <div>
                  <h4 className="font-bold text-navy mb-1">Beschlussfähigkeit ohne Quorum (§25 WEG)</h4>
                  <p className="text-text-light text-sm">Eigentümerversammlungen sind immer beschlussfähig, unabhängig von der Anzahl der erschienenen Eigentümer. Frustrierende Wiederholungsversammlungen gehören der Vergangenheit an.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-8 h-8 bg-teal rounded-full flex items-center justify-center flex-shrink-0 text-white font-bold text-sm">3</div>
                <div>
                  <h4 className="font-bold text-navy mb-1">Privilegierter Einbau (§20 WEG)</h4>
                  <p className="text-text-light text-sm">Einzelne Eigentümer haben einen Anspruch auf Genehmigung für: Ladeinfrastruktur für Elektroautos, barrierefreien Umbau, Einbruchsschutz und Glasfaseranschluss. Die Gemeinschaft kann nicht mehr einfach blockieren.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-8 h-8 bg-teal rounded-full flex items-center justify-center flex-shrink-0 text-white font-bold text-sm">4</div>
                <div>
                  <h4 className="font-bold text-navy mb-1">Verwalterkompetenzen (§27 WEG)</h4>
                  <p className="text-text-light text-sm">Der Verwalter kann dringende Maßnahmen bis zu einer bestimmten Wertgrenze eigenständig beauftragen. Die Gemeinschaft kann den Rahmen durch Beschluss erweitern oder einschränken.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-8 h-8 bg-teal rounded-full flex items-center justify-center flex-shrink-0 text-white font-bold text-sm">5</div>
                <div>
                  <h4 className="font-bold text-navy mb-1">Zertifizierungspflicht für Verwalter</h4>
                  <p className="text-text-light text-sm">Auf Verlangen der Eigentümergemeinschaft muss der Verwalter einen zertifizierten Verwalter nach §26a WEG bestellen. Dies stellt sicher, dass Verwalter grundlegende fachliche Qualifikationen nachweisen können.</p>
                </div>
              </div>
            </div>

            <h2 className="text-3xl font-bold text-navy mb-6 font-serif mt-12">
              Praktische Checkliste: Jahresaufgaben für Vermieter 2026
            </h2>
            <div className="bg-warm-white rounded-xl p-6 border border-gray-100 mb-8">
              <div className="grid sm:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-bold text-navy mb-3">Erstes Quartal</h4>
                  <ul className="space-y-2 text-text-light text-sm">
                    <li className="flex gap-2"><span className="text-teal">☐</span> Nebenkostenabrechnung für Vorjahr erstellen</li>
                    <li className="flex gap-2"><span className="text-teal">☐</span> Vorauszahlungen anpassen</li>
                    <li className="flex gap-2"><span className="text-teal">☐</span> Steuererklärung: Anlage V vorbereiten</li>
                    <li className="flex gap-2"><span className="text-teal">☐</span> Mietspiegel auf Aktualisierungen prüfen</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-bold text-navy mb-3">Zweites Quartal</h4>
                  <ul className="space-y-2 text-text-light text-sm">
                    <li className="flex gap-2"><span className="text-teal">☐</span> Gebäudeversicherung überprüfen</li>
                    <li className="flex gap-2"><span className="text-teal">☐</span> WEG-Jahresversammlung vorbereiten (bis 30.06. laut WEG)</li>
                    <li className="flex gap-2"><span className="text-teal">☐</span> Energieausweis-Gültigkeit prüfen</li>
                    <li className="flex gap-2"><span className="text-teal">☐</span> Mieterhöhungspotenzial analysieren</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-bold text-navy mb-3">Drittes Quartal</h4>
                  <ul className="space-y-2 text-text-light text-sm">
                    <li className="flex gap-2"><span className="text-teal">☐</span> Heizanlage Wartung beauftragen</li>
                    <li className="flex gap-2"><span className="text-teal">☐</span> Rauchmelderwartung koordinieren</li>
                    <li className="flex gap-2"><span className="text-teal">☐</span> Winterdienst-Regelung prüfen</li>
                    <li className="flex gap-2"><span className="text-teal">☐</span> Handwerker-Rahmenverträge prüfen</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-bold text-navy mb-3">Viertes Quartal</h4>
                  <ul className="space-y-2 text-text-light text-sm">
                    <li className="flex gap-2"><span className="text-teal">☐</span> Jahresendablesungen beauftragen</li>
                    <li className="flex gap-2"><span className="text-teal">☐</span> Betriebskosten-Vorschau für Folgejahr</li>
                    <li className="flex gap-2"><span className="text-teal">☐</span> Instandhaltungsrücklage prüfen (WEG)</li>
                    <li className="flex gap-2"><span className="text-teal">☐</span> Grundsteuer-Bescheid prüfen</li>
                  </ul>
                </div>
              </div>
            </div>

            <p className="text-text-light leading-relaxed">
              Diese Checkliste gibt eine Orientierung — individuelle Situationen können abweichen. 
              Eine professionelle Hausverwaltung übernimmt all diese Aufgaben für Sie, termingenau 
              und rechtssicher.
            </p>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-16 lg:py-24 bg-warm-white">
          <div className="max-w-[800px] mx-auto px-6">
            <h2 className="text-3xl font-bold text-navy mb-8 font-serif">
              Häufige Fragen für Vermieter 2026
            </h2>
            <div className="space-y-4">
              {[
                {
                  q: "Wie oft darf ich die Miete erhöhen?",
                  a: "Nach §558 Abs. 3 BGB darf die Miete innerhalb von 3 Jahren um maximal 20 % erhöht werden (in Gebieten mit Wohnungsmangel 15 %). Zwischen zwei Mieterhöhungen muss mindestens ein Jahr liegen.",
                },
                {
                  q: "Wann muss die Nebenkostenabrechnung vorliegen?",
                  a: "Die Nebenkostenabrechnung muss nach §556 Abs. 3 BGB spätestens 12 Monate nach Ablauf des Abrechnungszeitraums beim Mieter eingehen. Verspätete Abrechnungen führen zum Verlust von Nachzahlungsansprüchen.",
                },
                {
                  q: "Brauche ich zwingend einen Energieausweis?",
                  a: "Ja. Bei jeder Neuvermietung muss ein gültiger Energieausweis vorliegen und dem Interessenten bei Besichtigungen zugänglich gemacht werden. Fehlt er, drohen Bußgelder bis zu 15.000 € nach §16a GEG.",
                },
                {
                  q: "Was ändert sich durch die WEG-Reform für mich als Eigentümer?",
                  a: "Die wichtigsten Änderungen: Eigentümerversammlungen können online stattfinden, Versammlungen sind immer beschlussfähig, und einzelne Eigentümer haben einen Anspruch auf privilegierten Einbau (E-Ladestation, Glasfaser, Rollstuhlrampe).",
                },
              ].map((faq) => (
                <div key={faq.q} className="bg-white rounded-xl p-6 border border-gray-100">
                  <h3 className="font-bold text-navy mb-2">{faq.q}</h3>
                  <p className="text-text-light text-sm leading-relaxed">{faq.a}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 lg:py-20 bg-navy text-white">
          <div className="max-w-[700px] mx-auto px-6 text-center">
            <h2 className="text-3xl font-bold mb-4 font-serif">
              Rechtssicher vermieten — ohne den Aufwand selbst zu tragen
            </h2>
            <p className="text-white/75 mb-8">
              §556, §558 BGB, GEG, WEG-Reform: einfach verwaltet. kennt alle Anforderungen 
              und sorgt dafür, dass Sie stets compliant sind. Kostenloses Erstgespräch in 24 Stunden.
            </p>
            <Link
              href="/anfrage"
              className="inline-block bg-teal text-white px-8 py-4 rounded-xl font-semibold text-lg hover:bg-teal/85 transition-all shadow-lg hover:shadow-xl"
            >
              Kostenloses Erstgespräch vereinbaren →
            </Link>
            <p className="text-white/50 text-sm mt-4">
              Keine versteckten Kosten. Keine Verpflichtungen. Antwort noch am selben Tag.
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
