"use client";

import { useRouter } from "next/navigation";
import { OnboardingShell } from "../../../components/OnboardingShell";

const CheckIcon = () => (
  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
  </svg>
);
const WarnIcon = () => (
  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
  </svg>
);
const StarIcon = () => (
  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
  </svg>
);

const options = [
  {
    value: "gut",
    icon: <CheckIcon />,
    iconBg: "bg-green-50 text-green-600",
    title: "Alles läuft gut",
    desc: "Ich will die Verwaltung einfach einfacher machen",
  },
  {
    value: "probleme",
    icon: <WarnIcon />,
    iconBg: "bg-amber-50 text-amber-600",
    title: "Ich habe offene Probleme",
    desc: "Streitigkeiten, Reparaturen oder unbezahlte Miete",
  },
  {
    value: "neu",
    icon: <StarIcon />,
    iconBg: "bg-teal/10 text-teal",
    title: "Ich bin neu als Vermieter",
    desc: "Erste Erfahrungen, ich brauche Orientierung",
  },
];

export default function Schritt3() {
  const router = useRouter();

  const handleSelect = (value: string) => {
    // Pure auto-advance — no Weiter button needed for single-choice
    setTimeout(() => router.push(`/portal/onboarding/privat/schritt-4?situation=${value}`), 300);
  };

  return (
    <OnboardingShell>
      <h1 className="text-2xl font-bold text-navy mb-2">Wie ist Ihre aktuelle Situation?</h1>
      <p className="text-text-light mb-8">Damit wir die richtigen ersten Schritte vorschlagen können.</p>

      <div className="space-y-3">
        {options.map((o) => (
          <button
            key={o.value}
            onClick={() => handleSelect(o.value)}
            className="w-full flex items-center gap-5 px-6 py-5 rounded-2xl border-2 border-gray-200 bg-white text-left
              hover:border-teal hover:bg-teal/5 hover:shadow-md active:scale-[0.99] transition-all duration-150 group"
          >
            <div className={`w-9 h-9 rounded-lg flex items-center justify-center flex-shrink-0 ${o.iconBg}`}>{o.icon}</div>
            <div>
              <p className="font-semibold text-navy group-hover:text-teal transition-colors">{o.title}</p>
              <p className="text-sm text-text-light">{o.desc}</p>
            </div>
            <svg className="w-5 h-5 text-gray-300 group-hover:text-teal ml-auto flex-shrink-0 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        ))}
      </div>
    </OnboardingShell>
  );
}
