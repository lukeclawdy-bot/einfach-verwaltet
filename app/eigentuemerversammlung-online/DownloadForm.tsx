"use client";

import { useState } from "react";

export function DownloadForm() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!email) return;
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div className="bg-teal/10 border border-teal/20 rounded-2xl p-6 text-center">
        <div className="text-teal font-semibold mb-2">Vorlage wird gesendet!</div>
        <p className="text-sm text-text-light">
          Prüfen Sie Ihr Postfach — die Vorlage ist auf dem Weg zu {email}.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="ihre@email.de"
        required
        className="flex-1 border border-gray-200 rounded-xl px-4 py-3 text-navy focus:outline-none focus:ring-2 focus:ring-teal/40 text-sm"
      />
      <button
        type="submit"
        className="bg-teal text-white px-6 py-3 rounded-xl font-semibold text-sm hover:bg-teal/85 transition-colors whitespace-nowrap"
      >
        Kostenlos herunterladen
      </button>
    </form>
  );
}
