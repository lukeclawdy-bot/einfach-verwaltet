import type { Metadata } from "next";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

export const metadata: Metadata = {
  title: "Hausverwaltung Erfurt — einfach verwaltet.",
  description:
    "Professionelle Hausverwaltung in Erfurt: transparente Preise ab €24/Einheit, bundesweites Know-how, digitales Eigentümer-Portal. Für WEG und Mietverwaltung in Thüringen.",
  openGraph: {
    title: "Hausverwaltung Erfurt — einfach verwaltet.",
    description: "Die moderne Hausverwaltung für Erfurt. Transparente Preise, immer erreichbar, bundesweite Expertise.",
    url: "https://einfach-verwaltet.de/hausverwaltung-erfurt",
    siteName: "einfach verwaltet.",
    locale: "de_DE",
    type: "website",
  },
};

// Schema.org structured data for Service
const serviceStructuredData = {
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "Hausverwaltung Erfurt",
  "provider": {
    "@type": "Organization",
    "name": "einfach verwaltet.",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Erfurt",
      "addressCountry": "DE"
    }
  },
  "areaServed": {
    "@type": "City",
    "name": "Erfurt"
  },
  "description": "Professionelle Hausverwaltung in Erfurt für WEG und Mietverwaltung. Transparente Preise, bundesweites Know-how, 24/7 Erreichbarkeit.",
  "offers": {
    "@type": "Offer",
    "price": "24",
    "priceCurrency": "EUR",
    "priceValidUntil": "2026-12-31",
    "availability": "https://schema.org/InStock"
  }
};

// Schema.org FAQPage
const faqStructuredData = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Was kostet eine Hausverwaltung in Erfurt?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Bei einfach verwaltet. kosten unsere Hausverwaltungsleistungen ab 24 € pro Einheit und Monat für Mietverwaltung, ab 28 € für WEG-Verwaltung. Alle Leistungen inklusive: Mieterkommunikation, Nebenkostenabrechnung, Instandhaltungskoordination und digitales Eigentümer-Portal. Keine versteckten Kosten. Auch für Thüringen mit dem bundesweiten Standard.",
      },
    },
    {
      "@type": "Question",
      "name": "Wie ist der Immobilienmarkt in Erfurt?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Erfurt ist die Landeshauptstadt Thüringens und hat einen stabilen Wohnungsmarkt. Die Mieten liegen unter dem Bundesdurchschnitt (ca. 8,50 €/m²), wodurch Erfurt attraktiv für Wohnungseigentümer ist. Die Stadt profitiert von ihrer zentralen Lage und dem wachsenden Zuzug.",
      },
    },
    {
      "@type": "Question",
      "name": "Wie schnell ist der Wechsel der Hausverwaltung in Erfurt?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Der Wechsel zur einfach verwaltet. dauert in der Regel 4-8 Wochen. Nach Ihrer Kündigung beim bisherigen Verwalter übernehmen wir die Dokumentation, informieren alle Mieter und koordinieren die Übergabe. Der genaue Zeitpunkt richtet sich nach Ihrer individuellen Kündigungsfrist.",
      },
    },
    {
      "@type": "Question",
      "name": "Was ist bei einfach verwaltet. alles inklusive?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Unser Service umfasst: 24/7 Mieterkommunikation mit Reaktionszeit unter 15 Minuten, fristgerechte Nebenkostenabrechnung nach § 556 BGB, Mieterhöhungsmanagement nach § 558 BGB, Instandhaltungskoordination mit geprüftem Handwerkernetzwerk, digitales Dokumentenportal und monatliche Eigentümerberichte. Keine Zusatzkosten für Standardleistungen.",
      },
    },
    {
      "@type": "Question",
      "name": "Wie funktioniert die Zusammenarbeit aus der Ferne?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Durch unser digitales Eigentümer-Portal haben Sie jederzeit Zugriff auf alle Informationen zu Ihren Erfurter Immobilien. Online-Termine, digitale Dokumentation und lokale Handwerkerkontakte ermöglichen eine nahtlose Zusammenarbeit — egal wo Sie sich gerade befinden.",
      },
    },
  ],
};

// Schema.org LocalBusiness
const localBusinessStructuredData = {
  "@context": "https://schema.org",
  "@type": "RealEstateAgent",
  "name": "einfach verwaltet. — Hausverwaltung Erfurt",
  "description": "Professionelle Hausverwaltung in Erfurt. Transparente Preise, bundesweites Know-how, digitales Eigentümer-Portal.",
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "Erfurt",
    "addressCountry": "DE"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": "50.9787",
    "longitude": "11.0328"
  },
  "url": "https://einfach-verwaltet.de/hausverwaltung-erfurt",
  "telephone": "+49-40-22863755",
  "priceRange": "€€",
  "openingHours": "Mo-So 00:00-23:59"
};

const features = [
  {
    title: "Thüringen-Expertise",
    description: "Wir verstehen den Thüringer Immobilienmarkt — von Landeshauptstadt Erfurt bis zu den ländlichen Wohngebieten.",
  },
  {
    title: "Transparente Preise",
    description: "Ab 24 €/Einheit/Monat für Mietverwaltung. Alle Kosten auf einen Blick — keine versteckten Gebühren, faire Konditionen für Thüringen.",
  },
  {
    title: "24/7 Erreichbarkeit",
    description: "Mieteranfragen werden innerhalb von 15 Minuten bestätigt. Rückrufe am selben Werktag. Digitale Kommunikation reduziert Distanzen.",
  },
  {
    title: "Digitales Portal",
    description: "Rund um die Uhr Zugriff auf alle Dokumente, Mieteingänge, Reparaturstatus und Mieterkommunikation. Volle Transparenz, egal wo Sie sind.",
  },
];

const localKnowledge = [
  {
    title: "Stabiler Mietmarkt",
    description: "Erfurt bietet im thüringischen Vergleich stabile Mieten und eine hohe Wohnqualität. Die Nachfrage übersteigt das Angebot leicht.",
  },
  {
    title: "Wachsende Metropole",
    description: "Erfurt wächst kontinuierlich und profiliert sich als attraktiver Wirtschaftsstandort. Positive Entwicklung für Immobilieneigentümer.",
  },
  {
    title: "Lokales Handwerkernetz",
    description: "Wir kooperieren mit geprüften Handwerkern in Erfurt und Umgebung für schnelle Reparaturen und faire Preise.",
  },
];

export default function HausverwaltungErfurtPage() {
  return (
    <>
      {/* Schema.org Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceStructuredData) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqStructuredData) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessStructuredData) }}
      />
      <Navbar />
      <main className="pt-24">
        {/* Hero */}
        <section className="py-16 lg:py-24 bg-navy text-white">
          <div className="max-w-[1100px] mx-auto px-6 text-center">
            <div className="inline-flex items-center gap-2 bg-teal/20 rounded-full px-4 py-1.5 mb-6">
              <span className="text-teal text-sm font-semibold">Hausverwaltung in Erfurt</span>
            </div>
            <h1 className="text-4xl sm:text-5xl font-bold mb-4 font-serif leading-tight">
              Hausverwaltung Erfurt
              <br />
              <span className="text-teal">professionell, transparent, zuverlässig.</span>
            </h1>
            <p className="text-lg text-white/75 max-w-2xl mx-auto">
              Professionelle Hausverwaltung für Erfurt. Bundesweites Know-how für Thüringen, transparente