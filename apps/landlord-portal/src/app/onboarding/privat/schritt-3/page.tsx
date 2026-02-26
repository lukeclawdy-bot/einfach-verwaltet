"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

const SITUATIONS = [
  {
    id: "good",
    emoji: "✅",
    title: "Alles läuft gut",
    subtitle: "ich will's einfacher machen",
  },
  {
    id: "problems",
    emoji: "⚠️",
    title: "Ich habe offene Probleme",
    subtitle: "Streitigkeiten oder Konflikte",
  },
  {
    id: "new",
    emoji: "🌱",
    title: "Ich bin neu als Vermieter",
    subtitle: "erste Schritte in der Verwaltung",
  },
];

export default function Schritt3Page() {
  const router = useRouter();
  const [selected, setSelected] = useState<string | null>(null);

  const handleContinue = () => {
    if (selected) {
      const existing = JSON.parse(localStorage.getItem("onboarding") || "{}");
      localStorage.setItem("onboarding", JSON.stringify({ ...existing, step3: { situation: selected } }));
      router.push("/onboarding/privat/schritt-4");
    }
  };

  return (
    <div className="space-y-8">
      <div className="text-center space-y-3">
        <h1 className="text-3xl font-bold text-navy">
          Wie ist Ihre aktuelle Situation?
        </h1>
        <p className="text-text-light">
          Damit wir Sie bestmöglich unterstützen können
        </p>
      </div>

      <div className="space-y-4">
        {SITUATIONS.map((situation) => (
          <button
            key={situation.id}
            onClick={() => setSelected(situation.id)}
            className={`w-full bg-white rounded-xl p-6 border-2 text-left transition-all duration-300 ${
              selected === situation.id
                ? "border-teal shadow-lg"
                : "border-light-gray hover:border-teal/50 hover:shadow-md"
            }`}
          >
            <div className="flex items-center gap-4">
              <span className="text-3xl">{situation.emoji}</span>
              <div>
                <h3 className="font-semibold text-navy text-lg">{situation.title}</h3>
                <p className="text-text-light">{situation.subtitle}</p>
              </div>
              <div className="ml-auto">
                <div className={`w-6 h-6 rounded-full border-2 flex items-center justify-center ${
                  selected === situation.id ? "border-teal bg-teal" : "border-gray-300"
                }`}>
                  {selected === situation.id && (
                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                    </svg>
                  )}
                </div>
              </div>
            </div>
          </button>
        ))}
      </div>

      <button
        onClick={handleContinue}
        disabled={!selected}
        className="w-full py-4 bg-teal text-white font-semibold rounded-lg hover:bg-teal/90 disabled:opacity-50 disabled:cursor-not-allowed transition-all flex items-center justify-center gap-2"
      >
        Weiter
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
        </svg>
      </button>
    </div>
  );
}
