"use client";

import { useState } from "react";

export function ETVCalculator() {
  const [date, setDate] = useState("");
  const [result, setResult] = useState<{ einladung: string; frist: string } | null>(null);

  function calculate() {
    if (!date) return;
    const versammlung = new Date(date);
    const einladung = new Date(versammlung);
    einladung.setDate(einladung.getDate() - 14);
    setResult({
      einladung: einladung.toLocaleDateString("de-DE", { day: "2-digit", month: "2-digit", year: "numeric" }),
      frist: versammlung.toLocaleDateString("de-DE", { day: "2-digit", month: "2-digit", year: "numeric" }),
    });
  }

  return (
    <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-8 max-w-lg mx-auto">
      <div className="mb-5">
        <label className="block text-sm font-semibold text-navy mb-2">
          Geplanter Versammlungstermin
        </label>
        <input
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
          className="w-full border border-gray-200 rounded-xl px-4 py-3 text-navy focus:outline-none focus:ring-2 focus:ring-teal/40"
        />
      </div>
      <button
        onClick={calculate}
        className="w-full bg-teal text-white py-3.5 rounded-xl font-semibold hover:bg-teal/85 transition-colors"
      >
        Fristen berechnen
      </button>
      {result && (
        <div className="mt-6 space-y-3">
          <div className="flex justify-between items-center bg-teal/5 border border-teal/15 rounded-xl px-5 py-4">
            <span className="text-sm text-text-light">Einladung spätestens am</span>
            <span className="font-bold text-navy">{result.einladung}</span>
          </div>
          <div className="flex justify-between items-center bg-navy/5 border border-navy/10 rounded-xl px-5 py-4">
            <span className="text-sm text-text-light">Versammlungstermin</span>
            <span className="font-bold text-navy">{result.frist}</span>
          </div>
          <p className="text-xs text-text-light mt-2">
            Gemäß §24 Abs. 4 WEG — Einladungsfrist mindestens 14 Tage vor dem Versammlungstermin.
          </p>
        </div>
      )}
    </div>
  );
}
