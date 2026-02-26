"use client";

import { useState, useRef } from "react";
import { useRouter } from "next/navigation";
import { createTicket } from "@/lib/api";
import type { TicketCategory, TicketPriority } from "@/types";

const CATEGORIES: Array<{ value: TicketCategory; label: string; icon: string }> = [
  { value: "repair", label: "Heizung", icon: "🔥" },
  { value: "repair", label: "Wasser / Sanitär", icon: "💧" },
  { value: "repair", label: "Elektrik", icon: "⚡" },
  { value: "repair", label: "Türen / Fenster", icon: "🚪" },
  { value: "other", label: "Sonstiges", icon: "🔧" },
];

// Maps label → title prefix for auto-title generation
const LABEL_TO_TITLE: Record<string, string> = {
  Heizung: "Heizungsproblem",
  "Wasser / Sanitär": "Wasserproblem / Sanitär",
  Elektrik: "Elektrisches Problem",
  "Türen / Fenster": "Problem mit Türen/Fenstern",
  Sonstiges: "Sonstige Anfrage",
};

export function RepairForm() {
  const router = useRouter();
  const fileRef = useRef<HTMLInputElement>(null);

  const [selectedCategory, setSelectedCategory] = useState<number | null>(null);
  const [description, setDescription] = useState("");
  const [priority, setPriority] = useState<TicketPriority>("normal");
  const [photo, setPhoto] = useState<File | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handlePhotoChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0] ?? null;
    setPhoto(file);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (selectedCategory === null) {
      setError("Bitte wählen Sie eine Kategorie.");
      return;
    }
    if (description.trim().length < 10) {
      setError("Bitte beschreiben Sie das Problem (mindestens 10 Zeichen).");
      return;
    }

    setError(null);
    setIsSubmitting(true);

    try {
      const cat = CATEGORIES[selectedCategory];
      const title = LABEL_TO_TITLE[cat.label] ?? cat.label;

      const result = await createTicket({
        title,
        description: description.trim(),
        category: cat.value,
        priority,
      });

      // Navigate to the new ticket detail
      router.push(`/tickets/${result.ticket.id}`);
    } catch (err) {
      setError(
        err instanceof Error
          ? err.message
          : "Fehler beim Senden. Bitte versuchen Sie es erneut."
      );
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {/* Category selection */}
      <div>
        <label className="block text-sm font-semibold text-slate-700 mb-3">
          Kategorie *
        </label>
        <div className="grid grid-cols-2 gap-2 sm:grid-cols-3">
          {CATEGORIES.map((cat, idx) => (
            <button
              key={`${cat.label}-${idx}`}
              type="button"
              onClick={() => setSelectedCategory(idx)}
              className={`flex flex-col items-center gap-2 p-3 rounded-xl border-2 transition-all duration-150 ${
                selectedCategory === idx
                  ? "border-[#2DD4BF] bg-[#2DD4BF10] text-[#1B2B4B]"
                  : "border-slate-200 bg-white text-slate-600 hover:border-slate-300"
              }`}
            >
              <span className="text-2xl">{cat.icon}</span>
              <span className="text-xs font-medium text-center leading-tight">
                {cat.label}
              </span>
            </button>
          ))}
        </div>
      </div>

      {/* Priority */}
      <div>
        <label className="block text-sm font-semibold text-slate-700 mb-3">
          Dringlichkeit
        </label>
        <div className="flex gap-2">
          {(
            [
              { value: "low", label: "Niedrig" },
              { value: "normal", label: "Normal" },
              { value: "high", label: "Dringend" },
              { value: "emergency", label: "Notfall 🚨" },
            ] as Array<{ value: TicketPriority; label: string }>
          ).map((p) => (
            <button
              key={p.value}
              type="button"
              onClick={() => setPriority(p.value)}
              className={`flex-1 py-2 px-1 text-xs font-medium rounded-lg border transition-all ${
                priority === p.value
                  ? p.value === "emergency"
                    ? "border-red-500 bg-red-50 text-red-700"
                    : "border-[#1B2B4B] bg-[#1B2B4B] text-white"
                  : "border-slate-200 bg-white text-slate-600"
              }`}
            >
              {p.label}
            </button>
          ))}
        </div>
      </div>

      {/* Description */}
      <div>
        <label
          htmlFor="description"
          className="block text-sm font-semibold text-slate-700 mb-2"
        >
          Beschreibung *
        </label>
        <textarea
          id="description"
          rows={4}
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          placeholder="Bitte beschreiben Sie das Problem so genau wie möglich. Z.B.: Seit wann? Wo genau? Wie äußert sich das Problem?"
          className="w-full rounded-xl border border-slate-200 px-4 py-3 text-sm text-slate-800 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-[#2DD4BF] focus:border-transparent resize-none bg-white transition-all"
          required
          minLength={10}
        />
        <p className="text-xs text-slate-400 mt-1">{description.length}/500 Zeichen</p>
      </div>

      {/* Photo upload */}
      <div>
        <label className="block text-sm font-semibold text-slate-700 mb-2">
          Foto hinzufügen{" "}
          <span className="font-normal text-slate-400">(optional)</span>
        </label>
        <div
          onClick={() => fileRef.current?.click()}
          className="border-2 border-dashed border-slate-200 rounded-xl p-6 text-center cursor-pointer hover:border-[#2DD4BF] transition-colors bg-white"
        >
          {photo ? (
            <div className="space-y-1">
              <div className="text-2xl">📸</div>
              <p className="text-sm font-medium text-slate-700">{photo.name}</p>
              <p className="text-xs text-slate-400">
                {(photo.size / 1024).toFixed(0)} KB
              </p>
              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  setPhoto(null);
                  if (fileRef.current) fileRef.current.value = "";
                }}
                className="text-xs text-red-500 hover:text-red-700"
              >
                Entfernen
              </button>
            </div>
          ) : (
            <div className="space-y-1">
              <div className="text-2xl">📷</div>
              <p className="text-sm text-slate-500">Foto auswählen</p>
              <p className="text-xs text-slate-400">JPG, PNG bis 10 MB</p>
            </div>
          )}
        </div>
        <input
          ref={fileRef}
          type="file"
          accept="image/*"
          onChange={handlePhotoChange}
          className="hidden"
        />
      </div>

      {/* Error */}
      {error && (
        <div className="rounded-lg bg-red-50 border border-red-200 px-4 py-3 text-sm text-red-700">
          {error}
        </div>
      )}

      {/* Submit */}
      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full py-4 rounded-xl bg-[#1B2B4B] text-white font-semibold text-base transition-all hover:bg-[#263d6e] active:scale-[0.98] disabled:opacity-60 disabled:cursor-not-allowed shadow-sm"
      >
        {isSubmitting ? (
          <span className="flex items-center justify-center gap-2">
            <svg
              className="w-4 h-4 animate-spin"
              viewBox="0 0 24 24"
              fill="none"
            >
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
          </span>
        ) : (
          "Anfrage senden"
        )}
      </button>

      <p className="text-xs text-slate-400 text-center">
        Wir werden Ihre Anfrage so schnell wie möglich bearbeiten.
      </p>
    </form>
  );
}
