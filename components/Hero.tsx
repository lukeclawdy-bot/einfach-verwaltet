import Image from "next/image";
import { CheckIcon, ArrowRightIcon } from "./Icons";

const heroChecks = [
  "Antwort innerhalb von 24 Stunden — garantiert",
  "Preise ab €24/Einheit/Monat — offen auf dieser Seite",
  "Hamburger Unternehmen, kein anonymes Callcenter",
];

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center bg-warm-white pt-16 overflow-hidden">
      {/* Background gradients */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full opacity-[0.04]"
          style={{ background: "radial-gradient(circle, #1B3A5C 0%, transparent 70%)", transform: "translate(30%, -30%)" }}
        />
        <div
          className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full opacity-[0.03]"
          style={{ background: "radial-gradient(circle, #2A7F7F 0%, transparent 70%)", transform: "translate(-30%, 30%)" }}
        />
      </div>

      <div className="relative max-w-[1100px] mx-auto px-6 py-20 lg:py-32">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left */}
          <div>
            <div className="inline-flex items-center gap-2 bg-navy/8 rounded-full px-4 py-1.5 mb-8">
              <div className="w-2 h-2 rounded-full bg-teal" />
              <span className="text-navy text-sm font-medium">Hausverwaltung Hamburg</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-navy leading-tight mb-6 font-serif">
              Ihre Immobilie.{" "}
              <span className="text-teal">Einfach verwaltet.</span>
            </h1>

            <p className="text-lg sm:text-xl text-text-light leading-relaxed mb-10 max-w-xl">
              Professionelle Hausverwaltung in Hamburg — mit echten Reaktionszeiten,
              transparenten Preisen und einer Verwaltung, die hält, was sie verspricht.
            </p>

            <div className="space-y-3 mb-10">
              {heroChecks.map((text) => (
                <div key={text} className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-5 h-5 rounded-full bg-green/15 flex items-center justify-center mt-0.5">
                    <CheckIcon className="w-3 h-3 text-green" />
                  </div>
                  <span className="text-navy font-medium">{text}</span>
                </div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="#kontakt"
                className="inline-flex items-center justify-center gap-2 bg-navy text-white px-8 py-4 rounded-xl font-semibold text-base hover:bg-navy/85 transition-all hover:shadow-lg hover:-translate-y-0.5"
              >
                Kostenloses Erstgespräch
                <ArrowRightIcon className="w-4 h-4" />
              </a>
              <a
                href="#preise"
                className="inline-flex items-center justify-center gap-2 border-2 border-navy/20 text-navy px-8 py-4 rounded-xl font-semibold text-base hover:border-navy/40 hover:bg-navy/5 transition-all"
              >
                Preise ansehen
              </a>
            </div>
          </div>

          {/* Right — Hamburg hero image */}
          <div className="relative hidden lg:block">
            <div className="rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="/hero-hamburg.png"
                alt="Hamburg HafenCity — Standort von einfach verwaltet."
                width={1408}
                height={768}
                priority
                className="w-full h-auto object-cover"
              />
            </div>
            <div className="absolute -bottom-4 -left-4 bg-white rounded-xl px-5 py-3 shadow-lg border border-gray-100">
              <div className="text-xs font-medium text-text-light">Ab sofort in Hamburg</div>
              <div className="text-xl font-bold text-navy">ab €24<span className="text-sm font-normal text-text-light">/Einheit/Monat</span></div>
            </div>
            <div className="absolute -top-3 -right-3 bg-teal text-white rounded-xl px-4 py-2 shadow-lg">
              <div className="text-xs font-semibold">✓ 24h Antwortgarantie</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
