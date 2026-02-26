"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

const COMMS_OPTIONS = [
  {
    id: "email",
    icon: "📧",
    title: "Per E-Mail",
    description: "Wir senden Ihnen Updates und Benachrichtigungen per E-Mail",
    inputType: "email",
    inputPlaceholder: "ihre@email.de",
    inputLabel: "E-Mail-Adresse",
  },
  {
    id: "whatsapp",
    icon: "💬",
    title: "Per WhatsApp",
    description: "Schnelle Updates direkt auf Ihr Smartphone",
    inputType: "tel",
    inputPlaceholder: "+49 170 1234567",
    inputLabel: "Handynummer",
  },
  {
    id: "portal",
    icon: "🏠",
    title: "Über das Portal",
    description: "Nur über das Vermieterportal — keine externen Benachrichtigungen",
    inputType: null,
    inputPlaceholder: "",
    inputLabel: "",
  },
];

export default function Schritt5Page() {
  const router = useRouter();
  const [selected, setSelected] = useState<string | null>(null);
  const [contactValue, setContactValue] = useState("");

  const selectedOption = COMMS_OPTIONS.find(o => o.id === selected);
  const isValid = selected && (selected === "portal" || contactValue.trim() !== "");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (isValid) {
      const existing = JSON.parse(localStorage.getItem("onboarding") || "{}");
      localStorage.setItem("onboarding", JSON.stringify({
        ...existing,
        step5: {
          method: selected,
          contact: selected === "portal" ? null : contactValue,
        }
      }));
      router.push("/onboarding/privat/schritt-6");
    }
  };

  return (
    <div className="space-y-8">
      <div className="text-center space-y-3">
        <h1 className="text-3xl font-bold text-navy">
          Wie möchten wir kommunizieren?
        </h1>
        <p className="text-text-light">
          Wählen Sie Ihre bevorzugte Kontaktmethode
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="space-y-4">
          {COMMS_OPTIONS.map((option) => (
            <div
              key={option.id}
              onClick={() => {
                setSelected(option.id);
                setContactValue("");
              }}
              className={`cursor-pointer bg-white rounded-xl p-5 border-2 transition-all duration-300 ${
                selected === option.id
                  ? "border-teal shadow-lg"
                  : "border-light-gray hover:border-teal/50 hover:shadow-md"
              }`}
            >
              <div className="flex items-start gap-4">
                <span className="text-2xl">{option.icon}</span>
                <div className="flex-grow">
                  <h3 className="font-semibold text-navy">{option.title}</h3>
                  <p className="text-sm text-text-light">{option.description}</p>
                  
                  {selected === option.id && option.inputType && (
                    <div className="mt-4 animate-fade-in">
                      <label className="block text-sm font-medium text-text-main mb-2">
                        {option.inputLabel}
                      </label>
                      <input
                        type={option.inputType}
                        value={contactValue}
                        onChange={(e) => setContactValue(e.target.value)}
                        placeholder={option.inputPlaceholder}
                        className="w-full px-4 py-3 rounded-lg border border-light-gray focus:border-teal focus:ring-2 focus:ring-teal/20 outline-none transition-all"
                        autoFocus
                      />
                    </div>
                  )}
                </div>
                <div className={`w-6 h-6 rounded-full border-2 flex items-center justify-center flex-shrink-0 mt-1 ${
                  selected === option.id ? "border-teal bg-teal" : "border-gray-300"
                }`}>
                  {selected === option.id && (
                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                    </svg>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        <button
          type="submit"
          disabled={!isValid}
          className="w-full py-4 bg-teal text-white font-semibold rounded-lg hover:bg-teal/90 disabled:opacity-50 disabled:cursor-not-allowed transition-all flex items-center justify-center gap-2"
        >
          Weiter
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </button>
      </form>
    </div>
  );
}
