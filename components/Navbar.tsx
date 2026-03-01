"use client";

import { useState } from "react";
import { HouseLogoIcon } from "./Icons";

const navLinks = [
  { href: "/leistungen", label: "Leistungen" },
  { href: "/preise", label: "Preise" },
  { href: "/referenzen", label: "Referenzen" },
  { href: "/blog", label: "Ratgeber" },
  { href: "/kontakt", label: "Kontakt" },
];

const werkzeuge = [
  { href: "/werkzeuge", label: "Alle Werkzeuge", sub: "Übersicht aller kostenlosen Tools" },
  { href: "/bka-rechner", label: "BKA-Rechner", sub: "Betriebskosten nach §2 BetrKV" },
  { href: "/mieterhohung-rechner", label: "Mieterhöhungsrechner", sub: "§ 558 BGB berechnen" },
  { href: "/beschlussprotokoll", label: "Beschlussprotokoll", sub: "WEG-Protokoll erstellen" },
  { href: "/wechseln", label: "Wechsel-Guide", sub: "Hausverwaltung wechseln — kostenlos" },
  { href: "/eigentuemerversammlung-online", label: "ETV Online", sub: "Eigentümerversammlung §24 WEG" },
  { href: "/anfrage", label: "Anfrage-Quiz", sub: "Kostenlose Preis-Schätzung" },
];

const standorte = [
  { href: "/hausverwaltung-hamburg", label: "Hausverwaltung Hamburg", sub: "Vollservice für Hamburg" },
  { href: "/mietverwaltung-hamburg", label: "Mietverwaltung Hamburg", sub: "Mieteinzug, NKA, Kommunikation" },
  { href: "/weg-verwaltung", label: "WEG-Verwaltung Hamburg", sub: "Eigentümergemeinschaft ab €22/Einheit" },
  { href: "/hausverwaltung-berlin", label: "Hausverwaltung Berlin", sub: "Miet- & WEG-Verwaltung in Berlin" },
  { href: "/hausverwaltung-muenchen", label: "Hausverwaltung München", sub: "WEG & Mietverwaltung in München" },
  { href: "/hausverwaltung-koeln", label: "Hausverwaltung Köln", sub: "Miet- & WEG-Verwaltung in Köln" },
  { href: "/hausverwaltung-frankfurt", label: "Hausverwaltung Frankfurt", sub: "Miet- & WEG-Verwaltung in Frankfurt" },
  { href: "/hausverwaltung-augsburg", label: "Hausverwaltung Augsburg", sub: "Miet- & WEG-Verwaltung in Augsburg" },
  { href: "/hausverwaltung-wiesbaden", label: "Hausverwaltung Wiesbaden", sub: "Miet- & WEG-Verwaltung in Wiesbaden" },
  { href: "/hausverwaltung-freiburg", label: "Hausverwaltung Freiburg", sub: "Miet- & WEG-Verwaltung in Freiburg" },
  { href: "/hausverwaltung-mannheim", label: "Hausverwaltung Mannheim", sub: "Miet- & WEG-Verwaltung in Mannheim" },
  { href: "/hausverwaltung-magdeburg", label: "Hausverwaltung Magdeburg", sub: "Miet- & WEG-Verwaltung in Magdeburg" },
  { href: "/hausverwaltung-kiel", label: "Hausverwaltung Kiel", sub: "Miet- & WEG-Verwaltung in Kiel" },
  { href: "/standorte", label: "Weitere Städte →", sub: "Alle Standorte ansehen" },
];

const portalLinks = [
  {
    href: "/portal/login",
    label: "Eigentümer",
    sub: "Ihr Dashboard, Tickets & Finanzen",
    icon: "M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6",
  },
  {
    href: "/tenant/login",
    label: "Mieter",
    sub: "Schäden melden & Nachrichten",
    icon: "M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z",
  },
  {
    href: "/freelancer/login",
    label: "Dienstleister",
    sub: "Aufträge & Abrechnung",
    icon: "M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a2 2 0 110-4h1a1 1 0 001-1V7a1 1 0 011-1h3a1 1 0 001-1V4z",
  },
];

export function Navbar() {
  const [toolsOpen, setToolsOpen] = useState(false);
  const [standorteOpen, setStandorteOpen] = useState(false);
  const [portalOpen, setPortalOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileToolsOpen, setMobileToolsOpen] = useState(false);
  const [mobileStandorteOpen, setMobileStandorteOpen] = useState(false);
  const [mobilePortalOpen, setMobilePortalOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full z-50 bg-warm-white/95 backdrop-blur-sm border-b border-navy/8">
      <div className="max-w-[1100px] mx-auto px-6 py-4 flex justify-between items-center">

        {/* Logo */}
        <a href="/" className="flex items-center gap-2 group">
          <div className="w-8 h-8 bg-navy rounded-lg flex items-center justify-center group-hover:bg-teal transition-colors">
            <HouseLogoIcon className="w-[18px] h-[18px] text-white" />
          </div>
          <span className="font-bold text-xl text-navy tracking-tight">
            einfach <span className="text-teal">verwaltet.</span>
          </span>
        </a>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-6">
          {navLinks.map((l) => (
            <a key={l.href} href={l.href} className="text-text-light hover:text-navy text-sm font-medium transition-colors">
              {l.label}
            </a>
          ))}

          {/* Standorte & Service dropdown */}
          <div className="relative">
            <button
              onClick={() => setStandorteOpen(!standorteOpen)}
              onBlur={() => setTimeout(() => setStandorteOpen(false), 150)}
              className="text-text-light hover:text-navy text-sm font-medium transition-colors flex items-center gap-1"
            >
              Standorte
              <svg className={`w-4 h-4 transition-transform ${standorteOpen ? "rotate-180" : ""}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            {standorteOpen && (
              <div className="absolute top-full left-0 mt-2 w-72 bg-white rounded-xl shadow-lg border border-gray-100 py-2 z-50">
                {standorte.map((s) => (
                  <a key={s.href} href={s.href} className="block px-4 py-2.5 text-sm text-navy hover:bg-teal/5 hover:text-teal transition-colors">
                    <span className="font-medium">{s.label}</span>
                    <span className="block text-xs text-text-light">{s.sub}</span>
                  </a>
                ))}
              </div>
            )}
          </div>

          {/* Werkzeuge dropdown */}
          <div className="relative">
            <button
              onClick={() => setToolsOpen(!toolsOpen)}
              onBlur={() => setTimeout(() => setToolsOpen(false), 150)}
              className="text-text-light hover:text-navy text-sm font-medium transition-colors flex items-center gap-1"
            >
              Werkzeuge
              <svg className={`w-4 h-4 transition-transform ${toolsOpen ? "rotate-180" : ""}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            {toolsOpen && (
              <div className="absolute top-full left-0 mt-2 w-64 bg-white rounded-xl shadow-lg border border-gray-100 py-2 z-50">
                {werkzeuge.map((w) => (
                  <a key={w.href} href={w.href} className="block px-4 py-2.5 text-sm text-navy hover:bg-teal/5 hover:text-teal transition-colors">
                    <span className="font-medium">{w.label}</span>
                    <span className="block text-xs text-text-light">{w.sub}</span>
                  </a>
                ))}
              </div>
            )}
          </div>

          {/* Portal dropdown */}
          <div
            className="relative"
            onMouseEnter={() => setPortalOpen(true)}
            onMouseLeave={() => setPortalOpen(false)}
          >
            <button
              onClick={() => setPortalOpen(!portalOpen)}
              className="text-text-light hover:text-navy text-sm font-medium transition-colors whitespace-nowrap flex items-center gap-1.5"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
              </svg>
              Portal
              <svg className={`w-3.5 h-3.5 transition-transform duration-200 ${portalOpen ? "rotate-180" : ""}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 9l-7 7-7-7" />
              </svg>
            </button>

            {portalOpen && (
              <div className="absolute right-0 top-full mt-1 w-64 bg-white rounded-2xl shadow-xl border border-navy/8 py-2 z-50">
                <p className="px-4 pt-2 pb-1 text-[11px] font-semibold text-text-light uppercase tracking-wider">
                  Portal wählen
                </p>
                {portalLinks.map((item) => (
                  <a
                    key={item.href}
                    href={item.href}
                    onClick={() => setPortalOpen(false)}
                    className="flex items-start gap-3 px-4 py-3 hover:bg-navy/4 transition-colors group"
                  >
                    <div className="w-8 h-8 rounded-lg bg-navy/6 flex items-center justify-center flex-shrink-0 mt-0.5 group-hover:bg-teal/10 transition-colors">
                      <svg className="w-4 h-4 text-navy group-hover:text-teal transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={item.icon} />
                      </svg>
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-navy">{item.label}</p>
                      <p className="text-xs text-text-light mt-0.5">{item.sub}</p>
                    </div>
                  </a>
                ))}
              </div>
            )}
          </div>
          <a href="/anfrage" className="bg-teal text-white px-5 py-2.5 rounded-lg text-sm font-semibold hover:bg-navy transition-colors whitespace-nowrap">
            Angebot anfragen
          </a>
        </div>

        {/* Mobile: CTA + burger */}
        <div className="flex md:hidden items-center gap-3">
          <a href="/anfrage" className="bg-teal text-white px-4 py-2 rounded-lg text-sm font-semibold hover:bg-navy transition-colors">
            Angebot
          </a>
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="w-9 h-9 flex flex-col items-center justify-center gap-1.5 rounded-lg hover:bg-navy/5 transition-colors"
            aria-label="Menü"
          >
            <span className={`block w-5 h-0.5 bg-navy transition-all duration-200 ${mobileOpen ? "rotate-45 translate-y-2" : ""}`} />
            <span className={`block w-5 h-0.5 bg-navy transition-all duration-200 ${mobileOpen ? "opacity-0" : ""}`} />
            <span className={`block w-5 h-0.5 bg-navy transition-all duration-200 ${mobileOpen ? "-rotate-45 -translate-y-2" : ""}`} />
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden border-t border-navy/8 bg-warm-white/98 backdrop-blur-sm">
          <div className="px-6 py-4 space-y-1">
            {navLinks.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setMobileOpen(false)}
                className="block py-3 text-navy font-medium border-b border-gray-100 last:border-0 hover:text-teal transition-colors"
              >
                {l.label}
              </a>
            ))}

            {/* Standorte accordion */}
            <button
              onClick={() => setMobileStandorteOpen(!mobileStandorteOpen)}
              className="w-full flex justify-between items-center py-3 text-navy font-medium border-b border-gray-100 hover:text-teal transition-colors"
            >
              Standorte
              <svg className={`w-4 h-4 transition-transform ${mobileStandorteOpen ? "rotate-180" : ""}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            {mobileStandorteOpen && (
              <div className="pl-4 space-y-1 pb-1">
                {standorte.map((s) => (
                  <a
                    key={s.href}
                    href={s.href}
                    onClick={() => setMobileOpen(false)}
                    className="block py-2.5 text-sm text-navy hover:text-teal transition-colors"
                  >
                    <span className="font-medium">{s.label}</span>
                    <span className="block text-xs text-text-light">{s.sub}</span>
                  </a>
                ))}
              </div>
            )}

            {/* Werkzeuge accordion */}
            <button
              onClick={() => setMobileToolsOpen(!mobileToolsOpen)}
              className="w-full flex justify-between items-center py-3 text-navy font-medium border-b border-gray-100 hover:text-teal transition-colors"
            >
              Werkzeuge
              <svg className={`w-4 h-4 transition-transform ${mobileToolsOpen ? "rotate-180" : ""}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            {mobileToolsOpen && (
              <div className="pl-4 space-y-1 pb-1">
                {werkzeuge.map((w) => (
                  <a
                    key={w.href}
                    href={w.href}
                    onClick={() => setMobileOpen(false)}
                    className="block py-2.5 text-sm text-navy hover:text-teal transition-colors"
                  >
                    <span className="font-medium">{w.label}</span>
                    <span className="block text-xs text-text-light">{w.sub}</span>
                  </a>
                ))}
              </div>
            )}

            <div className="pt-3 space-y-2">
              <a
                href="/anfrage"
                onClick={() => setMobileOpen(false)}
                className="block w-full text-center bg-teal text-white py-3.5 rounded-xl font-semibold hover:bg-navy transition-colors"
              >
                Angebot anfragen
              </a>
              {/* Mobile portal accordion */}
              <div>
                <button
                  onClick={() => setMobilePortalOpen(!mobilePortalOpen)}
                  className="w-full flex items-center justify-between border border-navy/20 text-navy py-3 px-4 rounded-xl font-medium hover:bg-navy/5 transition-colors text-sm"
                >
                  <span className="flex items-center gap-2">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                    </svg>
                    Portal
                  </span>
                  <svg className={`w-4 h-4 transition-transform ${mobilePortalOpen ? "rotate-180" : ""}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                {mobilePortalOpen && (
                  <div className="mt-1 border border-navy/10 rounded-xl overflow-hidden">
                    {portalLinks.map((item) => (
                      <a
                        key={item.href}
                        href={item.href}
                        onClick={() => setMobileOpen(false)}
                        className="flex items-center gap-3 px-4 py-3 hover:bg-navy/5 transition-colors border-b border-navy/5 last:border-0"
                      >
                        <svg className="w-4 h-4 text-teal flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={item.icon} />
                        </svg>
                        <div>
                          <p className="text-sm font-semibold text-navy">{item.label}</p>
                          <p className="text-xs text-text-light">{item.sub}</p>
                        </div>
                      </a>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
