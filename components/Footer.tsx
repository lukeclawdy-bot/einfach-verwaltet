import { HouseLogoIcon } from "./Icons";

export function Footer() {
  return (
    <footer className="bg-navy text-white">
      <div className="max-w-[1100px] mx-auto px-6 py-16">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          <div className="md:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-teal rounded-lg flex items-center justify-center">
                <HouseLogoIcon className="w-[18px] h-[18px] text-white" />
              </div>
              <span className="font-bold text-xl">einfach verwaltet.</span>
            </div>
            <p className="text-white/70 text-sm leading-relaxed max-w-xs">
              Professionelle Hausverwaltung in Hamburg. Transparent, zuverlässig, menschlich.
            </p>
            <div className="mt-4 text-sm font-semibold text-teal italic">
              „Ihre Immobilie? Einfach verwaltet."
            </div>
          </div>

          <div>
            <h4 className="font-semibold text-white text-sm mb-4 uppercase tracking-wide">Leistungen</h4>
            <ul className="space-y-2.5">
              {["Mietverwaltung", "WEG-Verwaltung", "Nebenkostenabrechnung", "Handwerker-Service", "Preise"].map((item) => (
                <li key={item}>
                  <a href="#leistungen" className="text-white/60 text-sm hover:text-white transition-colors">{item}</a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-white text-sm mb-4 uppercase tracking-wide">Rechtliches</h4>
            <ul className="space-y-2.5">
              {[
                { label: "Impressum", href: "/impressum" },
                { label: "Datenschutz", href: "/datenschutz" },
                { label: "AGB", href: "/agb" },
              ].map((item) => (
                <li key={item.label}>
                  <a href={item.href} className="text-white/60 text-sm hover:text-white transition-colors">{item.label}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-white/50 text-sm">
            © {new Date().getFullYear()} einfach verwaltet. Hausverwaltung Hamburg GmbH (in Gründung). Alle Rechte vorbehalten.
          </div>
          <div className="flex items-center gap-2 text-white/50 text-xs">
            <span>Made in Hamburg 🏴‍☠️</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
