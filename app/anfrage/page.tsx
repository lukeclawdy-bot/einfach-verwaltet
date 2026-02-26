import { Suspense } from "react";
import { AnfrageQuiz } from "@/components/AnfrageQuiz";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Angebot anfragen — einfach verwaltet.",
  description: "In 2 Minuten zum individuellen Angebot für Ihre Hausverwaltung in Hamburg.",
};

export default function Anfrage() {
  return (
    <>
      <Navbar />
      <main className="pt-20 min-h-screen bg-warm-white">
        <Suspense fallback={<div className="max-w-xl mx-auto px-6 py-20 text-center"><div className="animate-pulse text-text-light">Laden...</div></div>}>
          <AnfrageQuiz />
        </Suspense>
      </main>
      <Footer />
    </>
  );
}
