"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { OnboardingShell } from "../../../components/OnboardingShell";

const EmailIcon = () => <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>;
const ChatIcon = () => <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" /></svg>;
const PortalIcon = () => <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" /></svg>;

const channels = [
  { value: "email", icon: <EmailIcon />, label: "Per E-Mail", desc: "Klassisch, zuverlässig", placeholder: "ihre@email.de", type: "email" },
  { value: "whatsapp", icon: <ChatIcon />, label: "Per WhatsApp", desc: "Schnell & direkt", placeholder: "+49 170 1234567", type: "tel" },
  { value: "portal", icon: <PortalIcon />, label: "Nur über das Portal", desc: "Alles an einem Ort", placeholder: "ihre@email.de", type: "email" },
];

export default function Schritt5() {
  const router = useRouter();
  const [selected, setSelected] = useState<string>("");
  const [contact, setContact] = useState("");

  const handleChannel = (val: string) => {
    setSelected(val);
    setContact("");
  };

  const canAdvance = selected && contact.length > 4;

  const handleContinue = () => {
    if (canAdvance) router.push("/portal/onboarding/privat/schritt-6");
  };

  const selectedChannel = channels.find((c) => c.value === selected);

  return (
    <OnboardingShell>
      <h1 className="text-2xl font-bold text-navy mb-2">Wie erreichen wir Sie?</h1>
      <p className="text-text-light mb-8">Hierüber erhalten Sie Mieteranfragen und Updates.</p>

      <div className="space-y-3 mb-6">
        {channels.map((c) => (
          <button
            key={c.value}
            onClick={() => handleChannel(c.value)}
            className={`w-full flex items-center gap-4 px-5 py-4 rounded-2xl border-2 text-left transition-all duration-150
              ${selected === c.value ? "border-teal bg-teal/5" : "border-gray-200 bg-white hover:border-teal/40"}`}
          >
            <div className={`w-9 h-9 rounded-lg flex items-center justify-center flex-shrink-0 ${selected === c.value ? "bg-teal text-white" : "bg-navy/8 text-navy"}`}>{c.icon}</div>
            <div className="flex-1">
              <p className="font-semibold text-navy">{c.label}</p>
              <p className="text-xs text-text-light">{c.desc}</p>
            </div>
            {selected === c.value && (
              <svg className="w-5 h-5 text-teal flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
              </svg>
            )}
          </button>
        ))}
      </div>

      {/* Contact input appears after channel selection */}
      {selectedChannel && (
        <div className="space-y-4">
          <input
            type={selectedChannel.type}
            value={contact}
            onChange={(e) => setContact(e.target.value)}
            placeholder={selectedChannel.placeholder}
            onKeyDown={(e) => e.key === "Enter" && handleContinue()}
            className="w-full px-4 py-3.5 rounded-xl border border-gray-200 focus:border-teal focus:ring-2 focus:ring-teal/20 outline-none text-navy transition-all text-base"
            autoFocus
          />
          <button
            onClick={handleContinue}
            disabled={!canAdvance}
            className={`w-full py-4 rounded-xl font-semibold transition-all
              ${canAdvance ? "bg-teal text-white hover:bg-navy" : "bg-gray-100 text-gray-400 cursor-not-allowed"}`}
          >
            Weiter →
          </button>
        </div>
      )}
    </OnboardingShell>
  );
}
