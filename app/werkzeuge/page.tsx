import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Kostenlose Vermieter-Werkzeuge | einfach verwaltet.",
  description:
    "Kostenlose Vermieter Werkzeuge: BKA-Rechner, Mieterhöhungsrechner, WEG Beschlussprotokoll-Generator, Wechsel-Assistent, Preis-Quiz und Vermieter-Checkliste 2025. Sofort nutzbar, kein Login.",
  openGraph: {
    title: "Kostenlose Vermieter-Werkzeuge | einfach verwaltet.",
    description:
      "BKA-Rechner, Mieterhöhungsrechner, Beschlussprotokoll-Generator & mehr – kostenlos für Vermieter und Hauseigentümer.",
    url: "https://einfach-verwaltet.de/werkzeuge",
    siteName: "einfach verwaltet.",
    type: "website",
  },
  alternates: {
    canonical: "https://einfach-verwaltet.de/werkzeuge",
  },
};

const tools = [
  {
    href: "/bka-rechner",
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.8}
          d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 11h.01M12 11h.01M15 11h.01M4 19h16a2 2 0 002-2V7a2 2 0 00-2-2H4a2 2 0 00-2 2v10a2 2 0 002 2z"
        />
      </svg>
    ),
    tag: "Betriebskosten",
    title: "BKA / Nebenkostenrechner",
    description:
      "Berechnen Sie die Betriebskosten für Ihre Immobilie nach §2 BetrKV — inklusive aller umlagefähigen Kostenpositionen und automatischer Abrechnung.",
    badge: "Kostenlos",
    badgeColor: "bg-teal/10 text-teal",
    cta: "Rechner starten",
    ctaVariant: "primary",
  },
  {
    href: "/mieterhohung-rechner",
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.8}
          d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
        />
      </svg>
    ),
    tag: "Mietrecht",
    title: "Mieterhöhungsrechner",
    description:
      "§558 BGB konformes Mieterhöhungs-Tool. Berechnen Sie die maximal zulässige Mieterhöhung anhand des Mietspiegels — rechtssicher und mit Anschreiben-Generator.",
    badge: "§558 BGB",
    badgeColor: "bg-blue-50 text-blue-700",
    cta: "Mieterhöhung berechnen",
    ctaVariant: "primary",
  },
  {
    href: "/beschlussprotokoll",
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.8}
          d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
        />
      </svg>
    ),
    tag: "WEG-Verwaltung",
    title: "Beschlussprotokoll-Generator",
    description:
      "Erstellen Sie rechtssichere WEG Beschlussprotokolle nach §24 WEG — mit intelligenter Ausfüllhilfe, Tagesordnung und sofortigem PDF-Export.",
    badge: "§24 WEG",
    badgeColor: "bg-purple-50 text-purple-700",
    cta: "Protokoll erstellen",
    ctaVariant: "primary",
  },
  {
    href: "/wechseln",
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.8}
          d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4"
        />
      </svg>
    ),
    tag: "Hausverwaltung wechseln",
    title: "Wechsel-Assistent",
    description:
      "Berechnen Sie Ihre Kündigungsfrist in Sekunden. Unser Wizard generiert das rechtssichere Kündigungsschreiben nach §621 BGB — kostenlos zum Herunterladen.",
    badge: "§621 BGB",
    badgeColor: "bg-amber-50 text-amber-700",
    cta: "Kündigung berechnen",
    ctaVariant: "primary",
  },
  {
    href: "/anfrage",
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.8}
          d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
        />
      </svg>
    ),
    tag: "Angebot",
    title: "Anfrage-Quiz",
    description:
      "Kostenlose Preis-Schätzung für Ihre Immobilie in 2 Minuten. Beantworten Sie 5 kurze Fragen und erhalten Sie sofort eine individuelle Kostenübersicht.",
    badge: "Kostenlos",
    badgeColor: "bg-green-50 text-green-700",
    cta: "Preis berechnen",
    ctaVariant: "secondary",
  },
  {
    href: "/checkliste",
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.8}
          d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4"
        />
      </svg>
    ),
    tag: "Checkliste",
    title: "Vermieter-Checkliste 2025",
    description:
      "25 Punkte, die jeder Vermieter kennen muss — von Mietrecht über Nebenkostenabrechnung bis zur Kündigung. Kostenlos als PDF herunterladen.",
    badge: "PDF Download",
    badgeColor: "bg-rose-50 text-rose-700",
    cta: "Checkliste ansehen",
    ctaVariant: "secondary",
  },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  name: "Kostenlose Vermieter-Werkzeuge",
  description:
    "Kostenlose Online-Werkzeuge für Vermieter und Hauseigentümer: BKA-Rechner, Mieterhöhungsrechner, Beschlussprotokoll-Generator, Wechsel-Assistent und Preis-Quiz.",
  url: "https://einfach-verwaltet.de/werkzeuge",
  isPartOf: {
    "@type": "WebSite",
    name: "einfach verwaltet.",
    url: "https://einfach-verwaltet.de",
  },
  breadcrumb: {
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Startseite", item: "https://einfach-verwaltet.de" },
      { "@type": "ListItem", position: 2, name: "Werkzeuge", item: "https://einfach-verwaltet.de/werkzeuge" },
    ],
  },
  mainEntity: {
    "@type": "ItemList",
    name: "Vermieter-Werkzeuge",
    numberOfItems: 6,
    itemListElement: tools.map((t, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: t.title,
      description: t.description,
      url: `https://einfach-verwaltet.de${t.href}`,
    })),
  },
};

export default function WerkzeugePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <main className="min-h-screen bg-light-gray">
        {/* Hero */}
        <section className="bg-navy text-white pt-24 pb-16 px-6">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-teal/20 text-teal rounded-full text-sm font-medium mb-6">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              5 kostenlose Werkzeuge
            </div>

            <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
              Kostenlose Werkzeuge{" "}
              <span className="text-teal">für Vermieter</span>
            </h1>
            <p className="text-lg text-white/75 max-w-2xl mx-auto leading-relaxed">
              Alle wichtigen Rechner und Generatoren für Ihre Immobilienverwaltung — 
              sofort nutzbar, kein Login erforderlich, 100% kostenlos.
            </p>

            {/* Stats bar */}
            <div className="mt-10 flex flex-wrap justify-center gap-8 text-sm">
              {[
                { value: "6", label: "Werkzeuge" },
                { value: "100%", label: "Kostenlos" },
                { value: "0", label: "Registrierung nötig" },
              ].map((s) => (
                <div key={s.label} className="text-center">
                  <div className="text-2xl font-bold text-teal">{s.value}</div>
                  <div className="text-white/60 mt-0.5">{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Tools grid */}
        <section className="max-w-5xl mx-auto px-6 py-16">
          <div className="grid md:grid-cols-2 gap-6">
            {tools.map((tool) => (
              <div
                key={tool.href}
                className="bg-white rounded-2xl border border-gray-100 p-7 hover:shadow-lg hover:border-teal/20 transition-all duration-200 flex flex-col"
              >
                {/* Header */}
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-14 h-14 bg-navy/5 rounded-xl flex items-center justify-center text-navy flex-shrink-0">
                    {tool.icon}
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 mb-1 flex-wrap">
                      <span className={`text-xs font-semibold px-2 py-0.5 rounded-full ${tool.badgeColor}`}>
                        {tool.badge}
                      </span>
                      <span className="text-xs text-gray-400">{tool.tag}</span>
                    </div>
                    <h2 className="text-lg font-bold text-navy leading-snug">{tool.title}</h2>
                  </div>
                </div>

                {/* Description */}
                <p className="text-text-light text-sm leading-relaxed flex-1 mb-6">
                  {tool.description}
                </p>

                {/* CTA */}
                <Link
                  href={tool.href}
                  className={`inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl text-sm font-semibold transition-colors ${
                    tool.ctaVariant === "primary"
                      ? "bg-navy text-white hover:bg-teal"
                      : "bg-teal/10 text-teal hover:bg-teal hover:text-white border border-teal/20"
                  }`}
                >
                  {tool.cta}
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            ))}
          </div>

          {/* CTA Banner */}
          <div className="mt-12 bg-gradient-to-r from-navy to-navy/90 rounded-2xl p-8 md:p-10 text-white text-center">
            <h2 className="text-2xl md:text-3xl font-bold mb-3">
              Alle Werkzeuge inklusive — im Verwaltungspaket
            </h2>
            <p className="text-white/70 mb-8 max-w-xl mx-auto">
              Als Kunde von einfach verwaltet. haben Sie alle Werkzeuge und noch viel mehr — 
              vollständig integriert in Ihr Verwalter-Dashboard.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Link
                href="/anfrage"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-teal text-white font-semibold rounded-xl hover:bg-teal/90 transition-colors"
              >
                Kostenlos anfragen
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
              <Link
                href="/preise"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-white/10 text-white font-semibold rounded-xl hover:bg-white/20 transition-colors border border-white/20"
              >
                Preise ansehen
              </Link>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="max-w-3xl mx-auto px-6 pb-16">
          <h2 className="text-2xl font-bold text-navy mb-6 text-center">Häufige Fragen</h2>
          <div className="space-y-4">
            {[
              {
                q: "Sind alle Werkzeuge wirklich kostenlos?",
                a: "Ja, alle 5 Werkzeuge sind und bleiben dauerhaft kostenlos. Kein Login, keine Registrierung, keine versteckten Kosten.",
              },
              {
                q: "Wie aktuell sind die Berechnungen?",
                a: "Alle Rechner werden regelmäßig aktualisiert. Der Mieterhöhungsrechner berücksichtigt den aktuellen Mietspiegel 2025/2026. Der BKA-Rechner folgt §2 BetrKV in der aktuellen Fassung.",
              },
              {
                q: "Kann ich die Ergebnisse rechtssicher verwenden?",
                a: "Unsere Werkzeuge liefern rechtlich fundierte Ergebnisse (§558 BGB, §2 BetrKV, §24 WEG, §621 BGB). Für individuelle Rechtsfragen empfehlen wir zusätzlich einen Fachanwalt für Mietrecht.",
              },
              {
                q: "Welches Werkzeug eignet sich für WEG-Verwalter?",
                a: "Der Beschlussprotokoll-Generator wurde speziell für WEG-Verwalter entwickelt und erstellt rechtssichere Protokolle nach §24 WEG mit vollständiger Tagesordnung.",
              },
            ].map((faq) => (
              <div key={faq.q} className="bg-white rounded-xl p-6 border border-gray-100">
                <h3 className="font-semibold text-navy mb-2">{faq.q}</h3>
                <p className="text-text-light text-sm leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </section>
      </main>
    </>
  );
}
