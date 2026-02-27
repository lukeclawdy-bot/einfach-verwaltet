'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function PortalLoginPage() {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [devToken, setDevToken] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError(null);

    try {
      const res = await fetch('/api/portal/auth/magic-link', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email: email.trim() }),
      });

      const data = await res.json();

      if (!res.ok) {
        setError(data.message || 'Ein Fehler ist aufgetreten.');
        return;
      }

      // No account found — redirect to onboarding
      if (data.noAccount) {
        window.location.href = `/portal/onboarding?email=${encodeURIComponent(email.trim())}`;
        return;
      }

      setSubmitted(true);
      // In dev mode, the token is returned directly
      if (data.token) {
        setDevToken(data.token);
      }
    } catch {
      setError('Ein Fehler ist aufgetreten. Bitte versuchen Sie es später erneut.');
    } finally {
      setIsLoading(false);
    }
  };

  if (submitted) {
    return (
      <div className="min-h-screen bg-light-gray flex items-center justify-center p-4">
        <div className="w-full max-w-md bg-white rounded-2xl shadow-xl p-8 text-center">
          <div className="w-16 h-16 bg-teal/10 rounded-full flex items-center justify-center mx-auto mb-6">
            <svg className="w-8 h-8 text-teal" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
          </div>
          <h1 className="text-2xl font-bold text-navy mb-3">
            Anmeldelink gesendet
          </h1>
          <p className="text-text-light mb-6">
            Wir haben Ihnen einen Anmeldelink geschickt. Bitte prüfen Sie Ihre E-Mails.
          </p>
          <p className="text-sm text-text-light/70 mb-6">
            Keine E-Mail erhalten? Prüfen Sie Ihren Spam-Ordner oder{' '}
            <button
              onClick={() => { setSubmitted(false); setDevToken(null); }}
              className="text-teal hover:underline"
            >
              versuchen Sie es erneut
            </button>
          </p>

          {devToken && (
            <div className="bg-gray-50 rounded-lg p-4 text-left">
              <p className="text-xs font-medium text-navy mb-2">DEV MODE:</p>
              <a
                href={`/api/portal/auth/verify?token=${devToken}`}
                className="text-xs text-teal hover:underline break-all"
              >
                {`/api/portal/auth/verify?token=${devToken}`}
              </a>
            </div>
          )}

          <Link
            href="/"
            className="inline-flex items-center gap-2 text-sm text-text-light hover:text-navy transition-colors mt-6"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            Zurück zur Startseite
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-light-gray flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        {/* Logo */}
        <div className="text-center mb-8">
          <Link href="/" className="inline-flex items-center gap-3">
            <div className="w-10 h-10 bg-teal rounded-lg flex items-center justify-center">
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
              </svg>
            </div>
            <span className="text-xl font-bold text-navy">
              einfach <span className="text-teal">verwaltet.</span>
            </span>
          </Link>
          <p className="text-text-light text-sm mt-2">Eigentümer-Login</p>
        </div>

        {/* Form */}
        <div className="bg-white rounded-2xl shadow-xl p-8">
          <h1 className="text-xl font-bold text-navy mb-2">
            Anmelden
          </h1>
          <p className="text-text-light text-sm mb-6">
            Geben Sie Ihre E-Mail-Adresse ein, um auf Ihr Dashboard zuzugreifen
          </p>

          {error && (
            <div className="bg-red-50 text-red-600 text-sm rounded-lg p-3 mb-4">
              {error}
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-navy mb-1.5">
                E-Mail-Adresse
              </label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="ihre@email.de"
                required
                disabled={isLoading}
                className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-teal/20 focus:border-teal transition-colors disabled:opacity-50"
              />
            </div>

            <button
              type="submit"
              disabled={isLoading || !email.trim()}
              className="w-full bg-navy text-white font-medium py-3 rounded-xl hover:bg-navy/90 transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
            >
              {isLoading ? (
                <>
                  <svg className="animate-spin h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  Wird gesendet...
                </>
              ) : (
                'Anmeldelink senden'
              )}
            </button>
          </form>

          <div className="mt-6 pt-6 border-t border-gray-100 text-center">
            <p className="text-xs text-text-light/70">
              Noch kein Konto?{' '}
              <Link href="/anfrage" className="text-teal hover:underline">
                Jetzt anfragen
              </Link>
            </p>
          </div>
        </div>

        <Link
          href="/"
          className="inline-flex items-center gap-2 text-sm text-text-light hover:text-navy transition-colors mt-6 mx-auto w-full justify-center"
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
          </svg>
          Zurück zur Startseite
        </Link>
      </div>
    </div>
  );
}
