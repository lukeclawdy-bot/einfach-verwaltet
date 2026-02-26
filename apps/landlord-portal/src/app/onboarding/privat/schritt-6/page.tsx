"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

interface OnboardingData {
  step2?: {
    strasse: string;
    hausnummer: string;
    plz: string;
    stadt: string;
    einheiten: string;
    verwaltungstyp: string;
  };
  step3?: {
    situation: string;
  };
  step4?: {
    tenantCount: string;
    hasProblems: boolean;
    problemDescription: string;
  };
  step5?: {
    method: string;
    contact: string | null;
  };
}

const SITUATION_LABELS: Record<string, string> = {
  good: "Alles läuft gut",
  problems: "Offene Probleme",
  new: "Neuer Vermieter",
};

const COMMS_LABELS: Record<string, string> = {
  email: "E-Mail",
  whatsapp: "WhatsApp",
  portal: "Nur Portal",
};

const VERWALTUNG_LABELS: Record<string, string> = {
  miet: "Mietverwaltung",
  weg: "WEG-Verwaltung",
  sev: "Sondereigentum (SEV)",
};

export default function Schritt6Page() {
  const router = useRouter();
  const [data, setData] = useState<OnboardingData | null>(null);
  const [useMagicLink, setUseMagicLink] = useState(true);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() => {
    const stored = localStorage.getItem("onboarding");
    if (stored) {
      setData(JSON.parse(stored));
    }
  }, []);

  const isValid = useMagicLink ? email.includes("@") : (email.includes("@") && password.length >= 8);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (isValid) {
      // Save account info
      const existing = JSON.parse(localStorage.getItem("onboarding") || "{}");
      localStorage.setItem("onboarding", JSON.stringify({
        ...existing,
        step6: {
          email,
          useMagicLink,
        }
      }));
      router.push("/onboarding/privat/schritt-7");
    }
  };

  if (!data) {
    return (
      <div className="flex items-center justify-center h-64">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-teal" />
      </div>
    );
  }

  return (
    <div className="space-y-8">
      <div className="text-center space-y-3">
        <h1 className="text-3xl font-bold text-navy">
          Fast geschafft!
        </h1>
        <p className="text-text-light">
          Überprüfen Sie Ihre Angaben und erstellen Sie Ihr Konto
        </p>
      </div>

      {/* Summary Card */}
      <div className="bg-white rounded-2xl border border-light-gray overflow-hidden">
        <div className="bg-navy/5 px-6 py-4 border-b border-light-gray">
          <h2 className="font-semibold text-navy">Zusammenfassung</h2>
        </div>
        <div className="p-6 space-y-4">
          {data.step2 && (
            <div className="flex items-start justify-between">
              <div>
                <p className="text-sm text-text-light">Immobilie</p>
                <p className="font-medium">{data.step2.strasse} {data.step2.hausnummer}, {data.step2.plz} {data.step2.stadt}</p>
                <p className="text-sm text-text-light">{data.step2.einheiten} Einheiten · {VERWALTUNG_LABELS[data.step2.verwaltungstyp]}</p>
              </div>
              <button
                onClick={() => router.push("/onboarding/privat/schritt-2")}
                className="text-teal text-sm hover:underline"
              >
                Bearbeiten
              </button>
            </div>
          )}
          {data.step3 && (
            <div className="flex items-start justify-between pt-4 border-t border-light-gray">
              <div>
                <p className="text-sm text-text-light">Situation</p>
                <p className="font-medium">{SITUATION_LABELS[data.step3.situation]}</p>
              </div>
              <button
                onClick={() => router.push("/onboarding/privat/schritt-3")}
                className="text-teal text-sm hover:underline"
              >
                Bearbeiten
              </button>
            </div>
          )}
          {data.step4 && (
            <div className="flex items-start justify-between pt-4 border-t border-light-gray">
              <div>
                <p className="text-sm text-text-light">Mieter</p>
                <p className="font-medium">{data.step4.tenantCount} Mieter</p>
                {data.step4.hasProblems && (
                  <p className="text-sm text-amber">Mit offenen Problemen</p>
                )}
              </div>
              <button
                onClick={() => router.push("/onboarding/privat/schritt-4")}
                className="text-teal text-sm hover:underline"
              >
                Bearbeiten
              </button>
            </div>
          )}
          {data.step5 && (
            <div className="flex items-start justify-between pt-4 border-t border-light-gray">
              <div>
                <p className="text-sm text-text-light">Kommunikation</p>
                <p className="font-medium">{COMMS_LABELS[data.step5.method]}</p>
                {data.step5.contact && (
                  <p className="text-sm text-text-light">{data.step5.contact}</p>
                )}
              </div>
              <button
                onClick={() => router.push("/onboarding/privat/schritt-5")}
                className="text-teal text-sm hover:underline"
              >
                Bearbeiten
              </button>
            </div>
          )}
        </div>
      </div>

      {/* Account Creation */}
      <form onSubmit={handleSubmit} className="bg-white rounded-2xl p-8 border border-light-gray space-y-6">
        <h2 className="font-semibold text-navy text-lg">Konto erstellen</h2>

        {/* Magic Link Toggle */}
        <div className="flex items-center justify-between p-4 bg-light-gray rounded-lg">
          <div>
            <p className="font-medium text-text-main">Magic Link verwenden</p>
            <p className="text-sm text-text-light">Kein Passwort nötig — wir senden Ihnen einen Login-Link</p>
          </div>
          <button
            type="button"
            onClick={() => setUseMagicLink(!useMagicLink)}
            className={`relative w-14 h-8 rounded-full transition-colors ${
              useMagicLink ? "bg-teal" : "bg-gray-300"
            }`}
          >
            <span
              className={`absolute top-1 left-1 w-6 h-6 bg-white rounded-full transition-transform ${
                useMagicLink ? "translate-x-6" : ""
              }`}
            />
          </button>
        </div>

        {/* Email */}
        <div>
          <label className="block text-sm font-medium text-text-main mb-2">
            E-Mail-Adresse
          </label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="ihre@email.de"
            className="w-full px-4 py-3 rounded-lg border border-light-gray focus:border-teal focus:ring-2 focus:ring-teal/20 outline-none transition-all"
            required
          />
        </div>

        {/* Password (conditional) */}
        {!useMagicLink && (
          <div className="animate-fade-in">
            <label className="block text-sm font-medium text-text-main mb-2">
              Passwort
            </label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Mindestens 8 Zeichen"
              minLength={8}
              className="w-full px-4 py-3 rounded-lg border border-light-gray focus:border-teal focus:ring-2 focus:ring-teal/20 outline-none transition-all"
              required
            />
          </div>
        )}

        <button
          type="submit"
          disabled={!isValid}
          className="w-full py-4 bg-teal text-white font-semibold rounded-lg hover:bg-teal/90 disabled:opacity-50 disabled:cursor-not-allowed transition-all"
        >
          Konto erstellen & starten
        </button>

        <p className="text-xs text-text-light text-center">
          Mit der Erstellung eines Kontos akzeptieren Sie unsere{" "}
          <a href="/agb" className="text-teal hover:underline">AGB</a> und{" "}
          <a href="/datenschutz" className="text-teal hover:underline">Datenschutzerklärung</a>.
        </p>
      </form>
    </div>
  );
}
