import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Hausverwaltung Rostock — professionell & transparent | einfach verwaltet.',
  description: 'Professionelle Hausverwaltung in Rostock. Faire Preise ab €24/Einheit. Transparent, zuverlässig, digital. Jetzt kostenloses Erstgespräch anfragen.',
}

export default function HausverwaltungRostock() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: 'einfach verwaltet. — Hausverwaltung Rostock',
    description: 'Professionelle Hausverwaltung in Rostock',
    address: { '@type': 'PostalAddress', addressLocality: 'Hamburg', addressCountry: 'DE' },
    url: 'https://einfach-verwaltet.de/hausverwaltung-rostock',
  }
  const faqLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      { '@type': 'Question', name: 'Was kostet eine Hausverwaltung in Rostock?', acceptedAnswer: { '@type': 'Answer', text: 'Eine professionelle Hausverwaltung in Rostock kostet zwischen €24 und €34 pro Einheit und Monat.' } },
      { '@type': 'Question', name: 'Welche Leistungen bietet einfach verwaltet. in Rostock an?', acceptedAnswer: { '@type': 'Answer', text: 'Wir übernehmen Mietermanagement, Nebenkostenabrechnung, Instandhaltungskoordination und rechtliche Begleitung.' } },
    ]
  }

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }} />
      <main>
        <section className="bg-navy-900 text-white py-20 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl font-bold mb-4">Hausverwaltung Rostock</h1>
            <p className="text-xl text-gray-300 mb-8">Professionell. Transparent. Zuverlässig.</p>
            <Link href="/anfrage" className="bg-teal-500 text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-teal-400">
              Kostenloses Erstgespräch
            </Link>
          </div>
        </section>

        <section className="max-w-4xl mx-auto px-4 py-16">
          <h2 className="text-3xl font-bold mb-6">Hausverwaltung in Rostock</h2>
          <p className="text-lg text-gray-700 mb-8">Rostock ist Norddeutschlands bedeutendster Hafenstandort und wächst als Wirtschaftszentrum. Der Immobilienmarkt profitiert von der Nähe zur Ostsee und dem Universitätscampus.</p>
          
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <div className="p-6 border rounded-xl"><h3 className="font-bold text-lg mb-2">Mietverwaltung</h3><p>Vollständige Verwaltung Ihrer Mietimmobilien in Rostock.</p></div>
            <div className="p-6 border rounded-xl"><h3 className="font-bold text-lg mb-2">WEG-Verwaltung</h3><p>Professionelle Verwaltung von Wohnungseigentümergemeinschaften.</p></div>
            <div className="p-6 border rounded-xl"><h3 className="font-bold text-lg mb-2">Nebenkostenabrechnung</h3><p>Rechtssichere Abrechnungen nach §2 BetrKV.</p></div>
          </div>
        </section>

        <section className="bg-gray-50 py-16 px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8">Häufige Fragen zur Hausverwaltung in Rostock</h2>
            <div className="space-y-4">
              <div><h3 className="font-bold">Was kostet eine Hausverwaltung in Rostock?</h3><p>€24–34 pro Einheit/Monat. Keine versteckten Gebühren.</p></div>
              <div><h3 className="font-bold">Wie lange dauert der Wechsel?</h3><p>In der Regel 2–4 Wochen. Wir übernehmen die gesamte Koordination.</p></div>
              <div><h3 className="font-bold">Muss ich einen langen Vertrag unterschreiben?</h3><p>Nein. Unser Standardvertrag hat eine Kündigungsfrist von 3 Monaten.</p></div>
            </div>
          </div>
        </section>

        <section className="py-16 px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Jetzt Hausverwaltung in Rostock anfragen</h2>
          <p className="text-xl text-gray-600 mb-8">Kostenlose Beratung in 24h. Keine Verpflichtung.</p>
          <Link href="/anfrage" className="bg-teal-600 text-white px-10 py-4 rounded-lg font-bold text-xl hover:bg-teal-700">
            Anfrage starten
          </Link>
        </section>
      </main>
    </>
  )
}