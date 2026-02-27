"use client";

import { useState, FormEvent } from "react";

const KATEGORIEN = [
  { value: "Hausmeister", label: "Hausmeister" },
  { value: "Elektriker", label: "Elektriker" },
  { value: "Sanitär", label: "Sanitär" },
  { value: "Reinigung", label: "Reinigung" },
  { value: "Handwerker", label: "Handwerker (Allgemein)" },
  { value: "Schlüsseldienst", label: "Schlüsseldienst" },
];

const STANDORTE = [
  { value: "Hamburg", label: "Hamburg" },
  { value: "Berlin", label: "Berlin" },
  { value: "München", label: "München" },
  { value: "Frankfurt", label: "Frankfurt" },
  { value: "Köln", label: "Köln" },
  { value: "Düsseldorf", label: "Düsseldorf" },
  { value: "Stuttgart", label: "Stuttgart" },
  { value: "Sonstiges", label: "Sonstiges" },
];

export function PartnerRegistrationForm() {
  const [form, setForm] = useState({
    name: "",
    firma: "",
    telefon: "",
    email: "",
    kategorie: "",
    beschreibung: "",
    standort: "",
    dsgvo: false,
  });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    const { name, value, type } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]:
        type === "checkbox" ? (e.target as HTMLInputElement).checked : value,
    }));
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (!form.dsgvo) {
      setError("Bitte bestätigen Sie die Datenschutzerklärung.");
      return;
    }
    setLoading(true);
    setError(null);

    try {
      const res = await fetch("/api/partner-registration", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      if (!res.ok) {
        const data = await res.json().catch(() => ({}));
        throw new Error(data.error || "Fehler beim Senden der Bewerbung.");
      }

      setSuccess(true);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Unbekannter Fehler");
    } finally {
      setLoading(false);
    }
  };

  if (success) {
    return (
      <div className="text-center py-12">
        <div className="w-16 h-16 bg-teal/10 rounded-full flex items-center justify-center mx-auto mb-6">
          <svg
            className="w-8 h-8 text-teal"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M5 13l4 4L19 7"
            />
          </svg>
        </div>
        <h3 className="text-2xl font-bold text-navy mb-3">
          Bewerbung eingegangen!
        </h3>
        <p className="text-text-light text-lg">
          Wir melden uns innerhalb von 2 Werktagen bei Ihnen.
        </p>
        <p className="text-text-light text-sm mt-2">
          Eine Bestätigung wurde an <strong>{form.email}</strong> gesendet.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {/* Name + Firma */}
      <div className="grid md:grid-cols-2 gap-4">
        <div>
          <label
            htmlFor="name"
            className="block text-sm font-medium text-navy mb-1.5"
          >
            Name <span className="text-red-500">*</span>
          </label>
          <input
            id="name"
            name="name"
            type="text"
            required
            value={form.name}
            onChange={handleChange}
            placeholder="Max Mustermann"
            className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-teal/30 focus:border-teal text-navy placeholder:text-gray-400"
          />
        </div>
        <div>
          <label
            htmlFor="firma"
            className="block text-sm font-medium text-navy mb-1.5"
          >
            Firma / Unternehmen
          </label>
          <input
            id="firma"
            name="firma"
            type="text"
            value={form.firma}
            onChange={handleChange}
            placeholder="Muster GmbH"
            className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-teal/30 focus:border-teal text-navy placeholder:text-gray-400"
          />
        </div>
      </div>

      {/* Telefon + Email */}
      <div className="grid md:grid-cols-2 gap-4">
        <div>
          <label
            htmlFor="telefon"
            className="block text-sm font-medium text-navy mb-1.5"
          >
            Telefon <span className="text-red-500">*</span>
          </label>
          <input
            id="telefon"
            name="telefon"
            type="tel"
            required
            value={form.telefon}
            onChange={handleChange}
            placeholder="+49 40 12345678"
            className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-teal/30 focus:border-teal text-navy placeholder:text-gray-400"
          />
        </div>
        <div>
          <label
            htmlFor="email"
            className="block text-sm font-medium text-navy mb-1.5"
          >
            E-Mail <span className="text-red-500">*</span>
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            value={form.email}
            onChange={handleChange}
            placeholder="max@muster.de"
            className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-teal/30 focus:border-teal text-navy placeholder:text-gray-400"
          />
        </div>
      </div>

      {/* Kategorie + Standort */}
      <div className="grid md:grid-cols-2 gap-4">
        <div>
          <label
            htmlFor="kategorie"
            className="block text-sm font-medium text-navy mb-1.5"
          >
            Kategorie <span className="text-red-500">*</span>
          </label>
          <select
            id="kategorie"
            name="kategorie"
            required
            value={form.kategorie}
            onChange={handleChange}
            className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-teal/30 focus:border-teal text-navy bg-white"
          >
            <option value="">Bitte wählen…</option>
            {KATEGORIEN.map((k) => (
              <option key={k.value} value={k.value}>
                {k.label}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label
            htmlFor="standort"
            className="block text-sm font-medium text-navy mb-1.5"
          >
            Standort / Region <span className="text-red-500">*</span>
          </label>
          <select
            id="standort"
            name="standort"
            required
            value={form.standort}
            onChange={handleChange}
            className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-teal/30 focus:border-teal text-navy bg-white"
          >
            <option value="">Bitte wählen…</option>
            {STANDORTE.map((s) => (
              <option key={s.value} value={s.value}>
                {s.label}
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* Beschreibung */}
      <div>
        <label
          htmlFor="beschreibung"
          className="block text-sm font-medium text-navy mb-1.5"
        >
          Kurze Beschreibung Ihrer Leistungen
        </label>
        <textarea
          id="beschreibung"
          name="beschreibung"
          rows={4}
          value={form.beschreibung}
          onChange={handleChange}
          placeholder="Was bieten Sie an? Welche Erfahrung haben Sie? Welche Referenzen können Sie vorweisen?"
          className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-teal/30 focus:border-teal text-navy placeholder:text-gray-400 resize-none"
        />
      </div>

      {/* DSGVO */}
      <div className="flex items-start gap-3">
        <input
          id="dsgvo"
          name="dsgvo"
          type="checkbox"
          checked={form.dsgvo}
          onChange={handleChange}
          className="mt-1 w-4 h-4 rounded border-gray-300 text-teal focus:ring-teal"
        />
        <label htmlFor="dsgvo" className="text-sm text-text-light">
          Ich habe die{" "}
          <a
            href="/datenschutz"
            target="_blank"
            className="text-teal hover:underline"
          >
            Datenschutzerklärung
          </a>{" "}
          gelesen und bin damit einverstanden, dass meine Daten zur Bearbeitung
          meiner Partner-Bewerbung verarbeitet werden.{" "}
          <span className="text-red-500">*</span>
        </label>
      </div>

      {/* Error */}
      {error && (
        <div className="p-4 bg-red-50 border border-red-200 rounded-xl text-red-700 text-sm">
          {error}
        </div>
      )}

      {/* Submit */}
      <button
        type="submit"
        disabled={loading}
        className="w-full py-4 bg-navy text-white font-semibold rounded-xl hover:bg-navy/90 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
      >
        {loading ? (
          <>
            <svg className="animate-spin w-4 h-4" fill="none" viewBox="0 0 24 24">
              <circle
                className="opacity-25"
                cx="12"
                cy="12"
                r="10"
                stroke="currentColor"
                strokeWidth="4"
              />
              <path
                className="opacity-75"
                fill="currentColor"
                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
              />
            </svg>
            Wird gesendet…
          </>
        ) : (
          "Bewerbung absenden"
        )}
      </button>

      <p className="text-xs text-center text-text-light">
        Pflichtfelder sind mit <span className="text-red-500">*</span> markiert.
        Wir melden uns innerhalb von 2 Werktagen bei Ihnen.
      </p>
    </form>
  );
}
