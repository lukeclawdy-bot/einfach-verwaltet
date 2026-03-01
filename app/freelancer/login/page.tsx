'use client';

import { useState } from 'react';
import Link from 'next/link';

type Step = 'email' | 'pin';

export default function FreelancerLoginPage() {
  const [step, setStep] = useState<Step>('email');
  const [email, setEmail] = useState('');
  const [pin, setPin] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [devPin, setDevPin] = useState<string | null>(null);

  const handleRequestPin = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError(null);

    try {
      const res = await fetch('/api/freelancer/auth/magic-link', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email: email.trim() }),
      });
      const data = await res.json();

      if (!res.ok) {
        setError(data.error || 'Ein Fehler ist aufgetreten.');
        return;
      }

      if (data.pin) setDevPin(data.pin); // dev mode
      setStep('pin');
    } catch {
      setError('Verbindungsfehler. Bitte erneut versuchen.');
    } finally {
      setIsLoading(false);
    }
  };

  const handleVerifyPin = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError(null);
    try {
      const url = `/api/freelancer/auth/verify?pin=${encodeURIComponent(pin.trim().toUpperCase())}&email=${encodeURIComponent(email.trim())}`;
      window.location.href = url;
    } catch {
      setError('Fehler bei der Verifikation.');
      setIsLoading(false);
    }
  };

  const Logo = () => (
    <div className="text-center mb-8">
      <Link href="/" className="inline-flex items-center gap-3">
        <div className="w-10 h-10 bg-teal rounded-xl flex items-center justify-center">
          <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
          </svg>
        </div>
        <span className="text-xl font-bold text-navy">einfach <span className="text-teal">verwaltet.</span></span>
      </Link>
      <p className="text-sm text-gray-500 mt-2">Handwerker-Portal</p>
    </div>
  );

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4">
      <div className="w-full max-w-sm">
        <Logo />

        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8">

          {step === 'email' && (
            <>
              <h1 className="text-xl font-bold text-navy mb-1">Anmelden</h1>
              <p className="text-sm text-gray-500 mb-6">
                Geben Sie Ihre E-Mail-Adresse ein. Wir senden Ihnen einen 6-stelligen Code.
              </p>
              <form onSubmit={handleRequestPin} className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-navy mb-1.5">
                    E-Mail-Adresse
                  </label>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="ihre@email.de"
                    required
                    autoFocus
                    className="w-full px-4 py-3 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-teal/30 focus:border-teal"
                  />
                </div>
                {error && (
                  <p className="text-sm text-red-600 bg-red-50 px-3 py-2 rounded-lg">{error}</p>
                )}
                <button
                  type="submit"
                  disabled={isLoading || !email}
                  className="w-full py-3 bg-teal text-white rounded-xl font-semibold text-sm hover:bg-teal/90 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                >
                  {isLoading ? 'Wird gesendet…' : 'Code anfordern →'}
                </button>
              </form>
            </>
          )}

          {step === 'pin' && (
            <>
              <h1 className="text-xl font-bold text-navy mb-1">Code eingeben</h1>
              <p className="text-sm text-gray-500 mb-2">
                Wir haben einen 6-stelligen Code an <strong>{email}</strong> gesendet.
              </p>
              {devPin && (
                <div className="bg-amber-50 border border-amber-200 rounded-lg px-3 py-2 mb-4 text-xs text-amber-700">
                  <strong>Dev-Modus:</strong> Code = <code className="font-mono font-bold">{devPin}</code>
                </div>
              )}
              <form onSubmit={handleVerifyPin} className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-navy mb-1.5">
                    Ihr Zugangscode
                  </label>
                  <input
                    type="text"
                    value={pin}
                    onChange={(e) => setPin(e.target.value.toUpperCase())}
                    placeholder="XXXXXX"
                    maxLength={6}
                    required
                    autoFocus
                    className="w-full px-4 py-3 border border-gray-200 rounded-xl text-sm font-mono text-center text-lg tracking-widest focus:outline-none focus:ring-2 focus:ring-teal/30 focus:border-teal uppercase"
                  />
                </div>
                {error && (
                  <p className="text-sm text-red-600 bg-red-50 px-3 py-2 rounded-lg">{error}</p>
                )}
                <button
                  type="submit"
                  disabled={isLoading || pin.length < 6}
                  className="w-full py-3 bg-teal text-white rounded-xl font-semibold text-sm hover:bg-teal/90 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                >
                  {isLoading ? 'Wird geprüft…' : 'Anmelden →'}
                </button>
                <button
                  type="button"
                  onClick={() => { setStep('email'); setPin(''); setError(null); setDevPin(null); }}
                  className="w-full text-sm text-gray-500 hover:text-gray-700 transition-colors"
                >
                  ← Andere E-Mail verwenden
                </button>
              </form>
            </>
          )}
        </div>

        <p className="text-center text-xs text-gray-400 mt-6">
          Noch nicht registriert?{' '}
          <Link href="/partner-werden" className="text-teal hover:underline">
            Jetzt bewerben
          </Link>
        </p>
      </div>
    </div>
  );
}
