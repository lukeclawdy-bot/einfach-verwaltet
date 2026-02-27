import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Hausverwaltung wechseln — So einfach geht's | einfach verwaltet.",
  description:
    "Hausverwaltung wechseln leicht gemacht: 3-Schritte-Guide, kostenloser Kündigung-Generator und nahtlose Übernahme durch einfach verwaltet. Jetzt kostenlos anfragen.",
  alternates: {
    canonical: "https://einfach-verwaltet.de/wechseln",
  },
  openGraph: {
    title: "Hausverwaltung wechseln — So einfach geht's | einfach verwaltet.",
    description:
      "Unzufrieden mit Ihrer Hausverwaltung? Wir begleiten Sie durch den Wechsel: Kündigung, Übergabe, nahtlose Übernahme. Kostenloses Kündigungsschreiben inklusive.",
    url: "https://einfach-verwaltet.de/wechseln",
    siteName: "einfach verwaltet.",
    locale: "de_DE",
    type: "website",
  },
};

export default function WechselnLayout({ children }: { children: React.ReactNode }) {
  return children;
}
