import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Beschlussprotokoll Generator — Eigentümerversammlung | einfach verwaltet.",
  description:
    "Erstellen Sie rechtssichere Beschlussprotokolle für Ihre WEG-Eigentümerversammlung. Kostenloser Online-Generator nach § 24 WEG — in Minuten statt Stunden.",
  keywords: [
    "Beschlussprotokoll",
    "Eigentümerversammlung",
    "WEG",
    "Protokoll Generator",
    "Wohnungseigentümergemeinschaft",
    "§ 24 WEG",
    "Beschlussfähigkeit",
    "Hausverwaltung",
    "Hamburg",
  ],
  openGraph: {
    title: "Beschlussprotokoll Generator — einfach verwaltet.",
    description:
      "Rechtssichere Beschlussprotokolle für Ihre Eigentümerversammlung. Kostenlos online erstellen.",
    url: "https://einfach-verwaltet.de/beschlussprotokoll",
    siteName: "einfach verwaltet.",
    locale: "de_DE",
    type: "website",
  },
};

export default function BeschlussprotokollLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
