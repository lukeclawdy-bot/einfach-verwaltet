import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { Leistungen } from "@/components/Leistungen";
import { Preise } from "@/components/Preise";
import { SoFunktionierts } from "@/components/SoFunktionierts";
import { WarumWir } from "@/components/WarumWir";
import { Kontakt } from "@/components/Kontakt";
import { FAQ } from "@/components/FAQ";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Leistungen />
        <Preise />
        <SoFunktionierts />
        <WarumWir />
        <Kontakt />
        <FAQ />
      </main>
      <Footer />
    </>
  );
}
