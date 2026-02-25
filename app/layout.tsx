import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: ["600", "700"],
});

export const metadata: Metadata = {
  title: "einfach verwaltet. — Hausverwaltung, die funktioniert.",
  description:
    "Hausverwaltung in Hamburg. Transparente Preise, 24/7 Erreichbarkeit, Echtzeit-Dashboard. Ihre Immobilie? Einfach verwaltet.",
  keywords:
    "Hausverwaltung Hamburg, WEG-Verwaltung Hamburg, Mietverwaltung Hamburg, einfach verwaltet, Immobilienverwaltung Hamburg",
  robots: "index, follow",
  openGraph: {
    title: "einfach verwaltet. — Hausverwaltung Hamburg",
    description:
      "Hausverwaltung, die funktioniert. Transparente Preise ab €24/Einheit/Monat.",
    url: "https://einfach-verwaltet.de",
    siteName: "einfach verwaltet.",
    locale: "de_DE",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "einfach verwaltet. — Hausverwaltung Hamburg",
    description:
      "Hausverwaltung, die funktioniert. Transparente Preise ab €24/Einheit/Monat.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="de" className="scroll-smooth">
      <body
        className={`${inter.variable} ${playfair.variable} font-sans antialiased bg-warm-white text-text-main`}
      >
        {children}
      </body>
    </html>
  );
}
