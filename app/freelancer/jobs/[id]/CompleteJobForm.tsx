'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';

export function CompleteJobForm({ jobId }: { jobId: string }) {
  const [notes, setNotes] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [completed, setCompleted] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError(null);

    try {
      const res = await fetch(`/api/freelancer/jobs/${jobId}/complete`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ notes, photoUrls: [] }),
      });

      if (res.ok) {
        setCompleted(true);
        setTimeout(() => {
          router.push('/freelancer/dashboard');
        }, 2000);
      } else if (res.status === 401) {
        router.push('/freelancer/login');
      } else {
        const data = await res.json();
        setError(data.error || 'Fehler beim Abschließen des Jobs.');
      }
    } catch {
      setError('Verbindungsfehler. Bitte erneut versuchen.');
    } finally {
      setIsLoading(false);
    }
  };

  if (completed) {
    return (
      <div className="bg-green-50 border border-green-200 rounded-xl p-6 text-center">
        <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-3">
          <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h3 className="font-bold text-green-800 mb-1">Job abgeschlossen!</h3>
        <p className="text-sm text-green-700">Vielen Dank. Sie werden weitergeleitet…</p>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-xl border border-gray-100 p-5 shadow-sm">
      <h3 className="font-bold text-navy mb-3 flex items-center gap-2">
        <span className="w-6 h-6 bg-amber-50 text-amber-600 rounded-md flex items-center justify-center text-xs">📸</span>
        Abschluss melden
      </h3>

      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Photo upload placeholder */}
        <div>
          <label className="block text-sm font-medium text-navy mb-1.5">
            Fotos hochladen
          </label>
          <div className="border-2 border-dashed border-gray-200 rounded-xl p-6 text-center hover:border-teal/50 transition-colors cursor-pointer">
            <svg className="w-8 h-8 text-gray-300 mx-auto mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
            <p className="text-sm text-gray-400">Fotos auswählen oder hier ablegen</p>
            <p className="text-xs text-gray-300 mt-1">JPG, PNG bis 10 MB</p>
          </div>
        </div>

        {/* Notes */}
        <div>
          <label className="block text-sm font-medium text-navy mb-1.5">
            Abschlussnotizen <span className="text-gray-400 font-normal">(optional)</span>
          </label>
          <textarea
            value={notes}
            onChange={(e) => setNotes(e.target.value)}
            rows={3}
            placeholder="Besonderheiten, Auffälligkeiten, Anmerkungen…"
            className="w-full px-4 py-3 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-teal/30 focus:border-teal resize-none"
          />
        </div>

        {error && (
          <p className="text-sm text-red-600 bg-red-50 px-3 py-2 rounded-lg">{error}</p>
        )}

        <button
          type="submit"
          disabled={isLoading}
          className="w-full py-3 bg-teal text-white rounded-xl font-semibold text-sm hover:bg-teal/90 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
        >
          {isLoading ? 'Wird gesendet…' : 'Abgeschlossen melden ✓'}
        </button>
      </form>
    </div>
  );
}
