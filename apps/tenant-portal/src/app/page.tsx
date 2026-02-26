"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { demoLogin, getToken } from "@/lib/api";

export default function LoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [linkSent, setLinkSent] = useState(false);
  const [isDemoLoading, setIsDemoLoading] = useState(false);
  const [demoError, setDemoError] = useState<string | null>(null);

  // Redirect if already logged in
  useEffect(() => {
    if (getToken()) {
      router.replace("/dashboard");
    }
  }, [router]);

  const handleMagicLink = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    // Simulate sending magic link
    setLinkSent(true);
  };

  const handleDemoLogin = async () => {
    setIsDemoLoading(true);
    setDemoError(null);
    try {
      await demoLogin();
      router.push("/dashboard");
    } catch (err) {
      setDemoError(
        err instanceof Error
          ? `Demo-Login fehlgeschlagen: ${err.message}`
          : "Demo-Login fehlgeschlagen. Ist die API erreichbar? (localhost:3001)"
      );
      setIsDemoLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#1B2B4B]">
      {/* Header */}
      <div className="flex-1 flex flex-col items-center justify-center px-6 pt-16 pb-8">
        {/* Logo */}
        <div className="mb-8 text-center">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-[#2DD4BF] mb-4">
            <svg
              className="w-8 h-8 text-[#1B2B4B]"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3 9.5L12 4l9 5.5V20a1 1 0 01-1 1H4a1 1 0 01-1-1V9.5z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M9 21V12h6v9"
              />
            </svg>
          </div>
          <h1 className="text-2xl font-bold text-white">
            einfach verwaltet.
          </h1>
          <p className="text-[#2DD4BF] text-sm mt-1">Mieterportal</p>
        </div>

        {/* Card */}
        <div className="w-full max-w-sm bg-white rounded-2xl shadow-2xl p-6">
          {linkSent ? (
            // Link sent state
            <div className="text-center space-y-4">
              <div className="w-16 h-16 rounded-full bg-emerald-100 flex items-center justify-center mx-auto">
                <svg
                  className="w-8 h-8 text-emerald-600"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
              </div>
              <div>
                <h2 className="text-lg font-semibold text-slate-800">
                  Link versendet!
                </h2>
                <p className="text-sm text-slate-500 mt-1">
                  Wir haben einen Anmeldelink an{" "}
                  <span className="font-medium text-slate-700">{email}</span>{" "}
                  gesendet.
                </p>
                <p className="text-sm text-slate-400 mt-2">
                  Bitte prüfen Sie Ihren Posteingang und klicken Sie auf den
                  Link.
                </p>
              </div>

              <div className="pt-2 border-t border-slate-100">
                <p className="text-xs text-slate-400 mb-3">Demo-Zugang:</p>
                <button
                  onClick={handleDemoLogin}
                  disabled={isDemoLoading}
                  className="w-full py-3 rounded-xl bg-[#1B2B4B] text-white text-sm font-semibold hover:bg-[#263d6e] transition-colors disabled:opacity-60"
                >
                  {isDemoLoading ? "Wird angemeldet…" : "Demo-Login (Julia Klein)"}
                </button>
                {demoError && (
                  <p className="text-xs text-red-600 mt-2">{demoError}</p>
                )}
              </div>

              <button
                onClick={() => {
                  setLinkSent(false);
                  setEmail("");
                }}
                className="text-sm text-slate-400 hover:text-slate-600 transition-colors"
              >
                Andere E-Mail-Adresse verwenden
              </button>
            </div>
          ) : (
            // Login form
            <>
              <div className="mb-5">
                <h2 className="text-lg font-semibold text-slate-800">
                  Willkommen zurück
                </h2>
                <p className="text-sm text-slate-500 mt-0.5">
                  Geben Sie Ihre E-Mail-Adresse ein — wir senden Ihnen einen
                  sicheren Anmeldelink.
                </p>
              </div>

              <form onSubmit={handleMagicLink} className="space-y-4">
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-slate-700 mb-1"
                  >
                    E-Mail-Adresse
                  </label>
                  <input
                    id="email"
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="ihre@email.de"
                    className="w-full rounded-xl border border-slate-200 px-4 py-3 text-sm text-slate-800 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-[#2DD4BF] focus:border-transparent transition-all"
                    autoComplete="email"
                    inputMode="email"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-3 rounded-xl bg-[#2DD4BF] text-[#1B2B4B] font-semibold text-sm hover:bg-[#14b8a6] transition-colors active:scale-[0.98]"
                >
                  Anmeldelink senden
                </button>
              </form>

              <div className="mt-5 pt-4 border-t border-slate-100">
                <p className="text-xs text-slate-400 text-center mb-3">
                  Oder direkt mit Demo-Account anmelden:
                </p>
                <button
                  onClick={handleDemoLogin}
                  disabled={isDemoLoading}
                  className="w-full py-3 rounded-xl border-2 border-[#1B2B4B] text-[#1B2B4B] font-semibold text-sm hover:bg-[#1B2B4B] hover:text-white transition-all disabled:opacity-60 active:scale-[0.98]"
                >
                  {isDemoLoading
                    ? "Wird angemeldet…"
                    : "🚀 Demo-Login (Julia Klein, Mieterin)"}
                </button>
                {demoError && (
                  <p className="text-xs text-red-600 mt-2 text-center">
                    {demoError}
                  </p>
                )}
                <p className="text-xs text-slate-400 mt-2 text-center">
                  Demo: julia.klein@example.de / demo1234
                </p>
              </div>
            </>
          )}
        </div>
      </div>

      {/* Footer */}
      <div className="text-center pb-8 px-4">
        <p className="text-[#2DD4BF]/60 text-xs">
          © 2026 einfach verwaltet. GmbH · Hamburg
        </p>
        <p className="text-white/30 text-xs mt-1">
          Fragen? support@einfach-verwaltet.de
        </p>
      </div>
    </div>
  );
}
