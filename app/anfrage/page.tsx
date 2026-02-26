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
        <AnfrageQuiz />
      </main>
      <Footer />
    </>
  );
}
