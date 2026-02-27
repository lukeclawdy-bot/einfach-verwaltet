import type { Metadata } from "next";
import Link from "next/link";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

export const metadata: Metadata = {
  title: "Vermieter Pflichten Keller und Gemeinschaftsflächen: Was Sie wissen müssen 2026",
  description:
    "Vermieter Pflichten bei Keller, Treppenhaus und Gemeinschaftsflächen: § 535 BGB, Instandhaltung, Sicherheit und Versicherung. Der komplette Leitfaden für Eigentümer.",
  keywords:
    "Vermieter Pflichten Keller, Vermieter Pflichten Gemeinschaftsflächen, Treppenhaus Pflicht Vermieter, Instandhaltung Gemeinschaftsflächen BGB",
  openGraph: {
    title: "Vermieter Pflichten Keller und Gemeinschaftsflächen: Was Sie wissen müssen",
    description:
      "Was Vermieter bei Keller, Treppenhaus und Gemeinschaftsflächen beachten müssen: § 535 BGB, Instandhaltungspflichten und Sicherheitsanforderungen.",
    url: "https://einfach-verwaltet.de/blog/vermieter-pflichten-keller-gemeinschaftsflaechen",
    siteName: "einfach verwaltet.",
    locale: "de_DE",
    type: "article",
  },
};

const jsonLdArticle = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Vermieter Pflichten Keller und Gemeinschaftsflächen: Was Sie wissen müssen",
  description:
    "Was Vermieter bei Keller, Treppenhaus und Gemeinschaftsflächen beachten müssen: § 535 BGB, Instandhaltungspflichten und Sicherheitsanforderungen.",
  author: {
    "@type": "Person",
    name: "Lukas Schmitz",
    jobTitle: "Gründer",
    worksFor: { "@type": "Organization", name: "einfach verwaltet." },
  },
  publisher: {
    "@type": "Organization",
    name: "einfach verwaltet.",
    logo: { "@type": "ImageObject", url: "https://einfach-verwaltet.de/logo.png" },
  },
  datePublished: "2026-02-27",
  inLanguage: "de",
  url: "https://einfach-verwaltet.de/blog/vermieter-pflichten-keller-gemeinschaftsflaechen",
};

const jsonLdFaq = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Welche Pflichten hat der Vermieter bei Gemeinschaftsflächen?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Der Vermieter muss nach § 535 BGB alle Gemeinschaftsflächen instand halten, instand setzen und verkehrssicher halten. Dazu gehören Treppenhaus, Keller, Flure, Aufzüge, Dachboden und Außenanlagen. Die Kosten können auf die Mieter umgelegt werden, die Pflicht zur Durchführung bleibt aber beim Vermieter.",
      },
    },
    {
      "@type": "Question",
      name: "Muss der Vermieter den Keller renovieren?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Ja, der Vermieter muss den Keller so instand halten, dass er seinen vertragsgemäßen Zweck erfüllen kann. Das bedeutet: keine Feuchtigkeit, keine Schädlinge, funktionierende Beleuchtung, sichere Treppen und Zugänge. Kosmetische Renovierung ist nicht erforderlich, aber Schäden müssen beseitigt werden.",
      },
    },
    {
      "@type": "Question",
      name: "Wer ist verantwortlich für die Reinigung des Treppenhauses?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Die Reinigungspflicht kann im Mietvertrag geregelt werden. Ohne Vereinbarung obliegt die Reinigung dem Vermieter. Die Kosten für eine professionelle Reinigung sind als Betriebskosten umlagefähig (§ 2 Nr. 8 BetrKV). Der Vermieter bleibt aber für die ordnungsgemäße Durchführung verantwortlich.",
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
            <span className="text-gray-700">Vermieter Pflichten Keller und Gemeinschaftsflächen</span>
          </nav>

          <header className="mb-10">
            <p className="text-teal text-sm font-semibold uppercase tracking-wider mb-3">
              Ratgeber · 9 min Lesezeit · Vermieter
            </p>
            <h1 className="text-3xl md:text-4xl font-bold text-navy font-playfair mb-4 leading-tight">
              Vermieter Pflichten Keller und Gemeinschaftsflächen: Was Sie wissen müssen
            </h1>
            <p className="text-gray-500 text-sm">
              Februar 2026 · Lukas Schmitz, Gründer einfach verwaltet.
            </p>
          </header>

          {/* Quick Answer Box */}
          <div className="bg-teal/5 border-l-4 border-teal rounded-r-xl p-6 mb-10">
            <p className="font-semibold text-navy mb-2">Kurzantwort</p>
            <p className="text-gray-700">
              Vermieter müssen nach § 535 BGB alle Gemeinschaftsflächen (Keller, Treppenhaus, Flure, 
              Außenanlagen) instand halten und verkehrssicher halten. Die Kosten sind umlagefähig, 
              die Verantwortung bleibt beim Eigentümer. Sicherheitsmängel müssen sofort beseitigt werden.
            </p>
          </div>

          <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed space-y-6">
            <p>
              Keller, Treppenhaus, Waschküche, Müllraum — Gemeinschaftsflächen sind oft vernachlässigt, 
              können aber erhebliche Haftungsrisiken für Vermieter bedeuten. Wer seine Pflichten nicht 
              kennt oder nicht ernst nimmt, riskiert nicht nur Ärger mit Mietern, sondern auch 
              Schadensersatzansprüche bei Unfällen. Dieser Leitfaden erklärt alle relevanten Pflichten 
              mit BGB-Referenzen.
            </p>

            <h2 className="text-2xl font-bold text-navy font-playfair mt-10 mb-4">
              Rechtsgrundlage: § 535 BGB und die Instandhaltungspflicht
            </h2>
            <p>
              Die zentrale Rechtsgrundlage ist <strong>§ 535 Abs. 1 BGB</strong>: Der Vermieter ist 
              verpflichtet, dem Mieter den vertragsgemäßen Gebrauch der Mietsache zu gewähren und 
              sie während der Mietzeit in einem zum vertragsgemäßen Gebrauch geeigneten Zustand 
              zu erhalten.
            </p>
            <p>
              Für Gemeinschaftsflächen bedeutet das konkret: Der Vermieter muss sicherstellen, dass 
              alle Bereiche, die den Mietern zugänglich sind, sicher, funktionsfähig und nutzbar 
              sind. Das gilt unabhängig davon, ob die Kosten auf die Mieter umgelegt werden können.
            </p>

            <h2 className="text-2xl font-bold text-navy font-playfair mt-10 mb-4">
              Pflichten beim Keller: Was ist erforderlich?
            </h2>
            <p>
              Der Keller ist Teil der Mietsache — auch wenn er nicht bewohnt wird. Vermieter müssen 
              folgende Standards einhalten:
            </p>

            <h3 className="text-xl font-semibold text-navy mt-6 mb-2">
              1. Baustruktur und Feuchtigkeitsschutz
            </h3>
            <ul className="list-disc pl-6 space-y-2">
              <li>Keine eindringende Feuchtigkeit oder Wasserschäden</li>
              <li>Funktionierende Drainage und Abdichtung</li>
              <li>Keine Schimmelbildung durch mangelnde Belüftung</li>
              <li>Intakte Wände, Böden und Decken</li>
            </ul>

            <h3 className="text-xl font-semibold text-navy mt-6 mb-2">
              2. Sicherheit und Zugänglichkeit
            </h3>
            <ul className="list-disc pl-6 space-y-2">
              <li>Sichere Kellertreppen mit Geländern</li>
              <li>Ausreichende Beleuchtung in allen Bereichen</li>
              <li>Funktionierende Türen und Schlösser</li>
              <li>Keine Stolper- oder Unfallgefahren</li>
            </ul>

            <h3 className="text-xl font-semibold text-navy mt-6 mb-2">
              3. Schädlingsbekämpfung
            </h3>
            <p>
              Bei Befall mit Ratten, Mäusen oder Insekten muss der Vermieter unverzüglich eine 
              Schädlingsbekämpfung beauftragen. Die Kosten sind als Betriebskosten umlegbar 
              (§ 2 Nr. 13 BetrKV).
            </p>

            <div className="bg-amber-50 border border-amber-200 rounded-xl p-4 my-4 text-sm">
              <strong>Wichtig:</strong> Bei Kellerbränden oder Überschwemmungen haftet der Vermieter, 
              wenn er nachweislich die nötigen Vorsorge- und Wartungsmaßnahmen vernachlässigt hat 
              (z.B. keine Brandmelder, keine regelmäßige Kontrolle der Heizungsanlage).
            </div>

            <h2 className="text-2xl font-bold text-navy font-playfair mt-10 mb-4">
              Treppenhaus: Die zentrale Verkehrsfläche
            </h2>
            <p>
              Das Treppenhaus ist der am häufigsten genutzte Gemeinschaftsbereich. Hier gelten 
              besonders strenge Sicherheitsanforderungen:
            </p>

            <div className="bg-white border border-gray-200 rounded-xl p-6 my-6">
              <h3 className="font-semibold text-navy mb-4">Checkliste Treppenhaus-Sicherheit</h3>
              <ul className="space-y-3 not-prose">
                {[
                  "Geländer an allen Treppenabsätzen (Pflicht ab 3 Stufen)",
                  "Rutschfeste Stufenbeläge oder strukturierte Oberflächen",
                  "Ausreichende Beleuchtung (auch bei Stromausfall: Notbeleuchtung prüfen)",
                  "Freie Durchgänge — keine Abstellungen von Fahrrädern oder Müll",
                  "Regelmäßige Reinigung (mindestens wöchentlich)",
                  "Funktionierende Briefkastenanlage",
                  "Sichtbare Hausnummer und Klingelschilder",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm">
                    <svg className="w-5 h-5 text-teal flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <h2 className="text-2xl font-bold text-navy font-playfair mt-10 mb-4">
              Außenanlagen: Garten, Wege und Beleuchtung
            </h2>
            <p>
              Auch Außenbereiche unterliegen der Instandhaltungspflicht des Vermieters:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Gehwege und Zugänge:</strong> Rutschfest, frei von Unkraut und Hindernissen</li>
              <li><strong>Außenbeleuchtung:</strong> Funktionierende Beleuchtung von Eingängen und Wegen</li>
              <li><strong>Garten und Grünanlagen:</strong> Pflege nach ortsüblichem Standard</li>
              <li><strong>Müllplätze:</strong> Hygienische und sichere Entsorgungsmöglichkeiten</li>
              <li><strong>Zäune und Tore:</strong> Funktionsfähig und sicher</li>
            </ul>

            <h2 className="text-2xl font-bold text-navy font-playfair mt-10 mb-4">
              Umlagefähigkeit der Kosten
            </h2>
            <p>
              Die gute Nachricht für Vermieter: Fast alle Kosten für Instandhaltung und Instandsetzung 
              von Gemeinschaftsflächen sind als Betriebskosten auf die Mieter umlegbar. Die Rechtsgrundlage 
              ist die <strong>Betriebskostenverordnung (BetrKV)</strong>:
            </p>

            <div className="bg-white border border-gray-200 rounded-xl overflow-hidden my-6">
              <table className="w-full text-sm">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-4 py-3 text-left font-semibold text-navy">Kostenart</th>
                    <th className="px-4 py-3 text-left font-semibold text-navy">BetrKV-Position</th>
                    <th className="px-4 py-3 text-left font-semibold text-navy">Umlagefähig</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  <tr>
                    <td className="px-4 py-3">Treppenhausreinigung</td>
                    <td className="px-4 py-3">§ 2 Nr. 8</td>
                    <td className="px-4 py-3 font-semibold text-teal">Ja</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3">Gartenpflege</td>
                    <td className="px-4 py-3">§ 2 Nr. 10</td>
                    <td className="px-4 py-3 font-semibold text-teal">Ja</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3">Beleuchtung (Strom)</td>
                    <td className="px-4 py-3">§ 2 Nr. 1</td>
                    <td className="px-4 py-3 font-semibold text-teal">Ja</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3">Schädlingsbekämpfung</td>
                    <td className="px-4 py-3">§ 2 Nr. 13</td>
                    <td className="px-4 py-3 font-semibold text-teal">Ja</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3">Wartung Aufzug</td>
                    <td className="px-4 py-3">§ 2 Nr. 12</td>
                    <td className="px-4 py-3 font-semibold text-teal">Ja</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3">Kleinreparaturen (bis €100)</td>
                    <td className="px-4 py-3">§ 28 Abs. 2 II. BV</td>
                    <td className="px-4 py-3 font-semibold text-teal">Ja (bei Klausel)</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <p>
              <strong>Wichtig:</strong> Die Umlagefähigkeit bedeutet nicht, dass der Vermieter die 
              Pflicht zur Durchführung abgeben kann. Auch wenn die Mieter die Kosten tragen, bleibt 
              der Vermieter für die ordnungsgemäße Ausführung verantwortlich.
            </p>

            <h2 className="text-2xl font-bold text-navy font-playfair mt-10 mb-4">
              Haftungsrisiken bei Verletzung der Pflichten
            </h2>
            <p>
              Wer seine Pflichten bei Gemeinschaftsflächen vernachlässigt, riskiert:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Mietminderung nach § 536 BGB:</strong> Bei erheblichen Mängeln können Mieter die Miete mindern</li>
              <li><strong>Schadensersatz nach § 280 BGB:</strong> Bei Unfällen durch nicht beseitigte Mängel</li>
              <li><strong>Verstoß gegen die Verkehrssicherungspflicht:</strong> Strafrechtliche Konsequenzen bei schwerer Fahrlässigkeit</li>
              <li><strong>Versicherungsprobleme:</strong> Gebäudeversicherung kann bei nachweislicher Vernachlässigung leisten verweigern</li>
            </ul>

            <h2 className="text-2xl font-bold text-navy font-playfair mt-10 mb-4">
              Praxistipps für Vermieter
            </h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>Führen Sie vierteljährliche Begehungen aller Gemeinschaftsflächen durch</li>
              <li>Dokumentieren Sie alle festgestellten Mängel und Maßnahmen schriftlich</li>
              <li>Reagieren Sie auf Mieterhinweise innerhalb von 48 Stunden</li>
              <li>Schließen Sie Wartungsverträge für Aufzüge und Heizungsanlagen ab</li>
              <li>Lassen Sie gefährliche Mängel sofort von Fachfirmen beheben</li>
              <li>Kommunizieren Sie geplante Instandhaltungsarbeiten frühzeitig</li>
            </ul>

            {/* FAQ Section */}
            <h2 className="text-2xl font-bold text-navy font-playfair mt-10 mb-4">
              Häufig gestellte Fragen
            </h2>

            <div className="space-y-6 not-prose">
              <div className="bg-white border border-gray-200 rounded-xl p-5">
                <h3 className="font-semibold text-navy mb-2">Welche Pflichten hat der Vermieter bei Gemeinschaftsflächen?</h3>
                <p className="text-gray-600 text-sm">
                  Der Vermieter muss nach § 535 BGB alle Gemeinschaftsflächen instand halten, instand setzen 
                  und verkehrssicher halten. Dazu gehören Treppenhaus, Keller, Flure, Aufzüge, Dachboden 
                  und Außenanlagen. Die Kosten können auf die Mieter umgelegt werden, die Pflicht zur 
                  Durchführung bleibt aber beim Vermieter.
                </p>
              </div>

              <div className="bg-white border border-gray-200 rounded-xl p-5">
                <h3 className="font-semibold text-navy mb-2">Muss der Vermieter den Keller renovieren?</h3>
                <p className="text-gray-600 text-sm">
                  Ja, der Vermieter muss den Keller so instand halten, dass er seinen vertragsgemäßen 
                  Zweck erfüllen kann. Das bedeutet: keine Feuchtigkeit, keine Schädlinge, funktionierende 
                  Beleuchtung, sichere Treppen und Zugänge. Kosmetische Renovierung ist nicht erforderlich, 
                  aber Schäden müssen beseitigt werden.
                </p>
              </div>

              <div className="bg-white border border-gray-200 rounded-xl p-5">
                <h3 className="font-semibold text-navy mb-2">Wer ist verantwortlich für die Reinigung des Treppenhauses?</h3>
                <p className="text-gray-600 text-sm">
                  Die Reinigungspflicht kann im Mietvertrag geregelt werden. Ohne Vereinbarung obliegt 
                  die Reinigung dem Vermieter. Die Kosten für eine professionelle Reinigung sind als 
                  Betriebskosten umlagefähig (§ 2 Nr. 8 BetrKV). Der Vermieter bleibt aber für die 
                  ordnungsgemäße Durchführung verantwortlich.
                </p>
              </div>
            </div>

            <h2 className="text-2xl font-bold text-navy font-playfair mt-10 mb-4">
              Fazit: Pflichten ernst nehmen, Kosten clever umlegen
            </h2>
            <p>
              Die Pflichten des Vermieters bei Keller und Gemeinschaftsflächen sind umfangreich, aber 
              klar geregelt. Wer seine Instandhaltungspflichten gewissenhaft erfüllt und dabei die 
              Umlagemöglichkeiten nach BetrKV nutzt, minimiert Haftungsrisiken und schafft zufriedene 
              Mieter. Die Investition in regelmäßige Wartung und Inspektion zahlt sich langfristig aus.
            </p>
          </div>

          <div className="mt-12 bg-teal/10 border border-teal/20 rounded-xl p-8">
            <h3 className="text-xl font-bold text-navy mb-2 font-playfair">
              Lassen Sie einfach verwaltet.
            </h3>
            <p className="text-gray-600 mb-4">
              Wir übernehmen die Instandhaltung Ihrer Gemeinschaftsflächen — von der regelmäßigen 
              Inspektion bis zur fachgerechten Beauftragung von Handwerkern. Transparent, zuverlässig 
              und mit Echtzeit-Überblick für Sie als Eigentümer.
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
