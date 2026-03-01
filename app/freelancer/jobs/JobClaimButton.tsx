'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';

export function JobClaimButton({ jobId }: { jobId: string }) {
  const [isLoading, setIsLoading] = useState(false);
  const [claimed, setClaimed] = useState(false);
  const router = useRouter();

  const handleClaim = async () => {
    setIsLoading(true);
    try {
      const res = await fetch(`/api/freelancer/jobs/${jobId}/claim`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
      });

      if (res.ok) {
        setClaimed(true);
        setTimeout(() => {
          router.push(`/freelancer/jobs/${jobId}`);
        }, 800);
      } else if (res.status === 401) {
        router.push('/freelancer/login');
      } else {
        const data = await res.json();
        alert(data.error || 'Fehler beim Annehmen des Jobs.');
      }
    } catch {
      alert('Verbindungsfehler. Bitte erneut versuchen.');
    } finally {
      setIsLoading(false);
    }
  };

  if (claimed) {
    return (
      <span className="px-4 py-2 bg-green-100 text-green-700 rounded-xl text-sm font-semibold">
        ✓ Angenommen
      </span>
    );
  }

  return (
    <button
      onClick={handleClaim}
      disabled={isLoading}
      className="px-4 py-2 bg-teal text-white rounded-xl text-sm font-semibold hover:bg-teal/90 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
    >
      {isLoading ? 'Wird verarbeitet…' : 'Job annehmen'}
    </button>
  );
}
