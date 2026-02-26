"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { OnboardingShell } from "../../../components/OnboardingShell";

const CheckIcon = () => (
  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
  </svg>
);
const WarnIcon = () => (
  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
  </svg>
);
const UploadIcon = () => (
  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
  </svg>
);

export default function Schritt4() {
  const router = useRouter();
  const [mieter, setMieter] = useState<string>("");
  const [probleme, setProbleme] = useState<boolean | null>(null);
  const [beschreibung, setBeschreibung] = useState("");
  const [fileName, setFileName] = useState<string | null>(null);
  const [uploading, setUploading] = useState(false);

  const mieterOptions = ["1", "2", "3", "4", "5", "6–10", "Mehr als 10"];

  const handleMieter = (val: string) => setMieter(val);

  const handleProbleme = (val: boolean) => {
    setProbleme(val);
    if (!val && mieter) {
      setTimeout(() => router.push("/portal/onboarding/privat/schritt-5"), 300);
    }
  };

  const handleFile = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    setFileName(file.name);
    setUploading(true);
    // Store in sessionStorage for now — real upload to Vercel Blob happens post-account-creation
    try {
      const reader = new FileReader();
      reader.onload = () => {
        sessionStorage.setItem("onboarding_doc_name", file.name);
        sessionStorage.setItem("onboarding_doc_type", file.type);
        setUploading(false);
      };
      reader.readAsDataURL(file);
    } catch {
      setUploading(false);
    }
  };

  const canContinue = mieter && probleme !== null && (!probleme || beschreibung.length > 5);

  return (
    <OnboardingShell>
      <h1 className="text-2xl font-bold text-navy mb-2">Ihre Mieter</h1>
      <p className="text-text-light mb-8">Kurze Bestandsaufnahme — dauert 30 Sekunden.</p>

      <div className="space-y-6">
        {/* Mieteranzahl */}
        <div>
          <label className="block text-sm font-medium text-navy mb-2">Wie viele Mieter haben Sie aktuell?</label>
          <div className="flex flex-wrap gap-2">
            {mieterOptions.map((o) => (
              <button key={o} onClick={() => handleMieter(o)}
                className={`px-4 py-2.5 rounded-xl border-2 text-sm font-medium transition-all duration-150
                  ${mieter === o ? "border-teal bg-teal text-white" : "border-gray-200 bg-white text-navy hover:border-teal/40"}`}>
                {o}
              </button>
            ))}
          </div>
        </div>

        {/* Probleme */}
        {mieter && (
          <div>
            <label className="block text-sm font-medium text-navy mb-2">Gibt es offene Probleme mit Mietern?</label>
            <div className="grid grid-cols-2 gap-3">
              <button onClick={() => handleProbleme(false)}
                className={`flex items-center justify-center gap-2 px-4 py-3.5 rounded-xl border-2 text-sm font-medium transition-all duration-150
                  ${probleme === false ? "border-teal bg-teal/5 text-teal" : "border-gray-200 bg-white text-navy hover:border-teal/40"}`}>
                <span className={probleme === false ? "text-teal" : "text-green-500"}><CheckIcon /></span>
                Nein, alles gut
              </button>
              <button onClick={() => handleProbleme(true)}
                className={`flex items-center justify-center gap-2 px-4 py-3.5 rounded-xl border-2 text-sm font-medium transition-all duration-150
                  ${probleme === true ? "border-amber-400 bg-amber-50 text-amber-700" : "border-gray-200 bg-white text-navy hover:border-amber-300"}`}>
                <span className={probleme === true ? "text-amber-500" : "text-amber-400"}><WarnIcon /></span>
                Ja, es gibt Probleme
              </button>
            </div>
          </div>
        )}

        {/* Problembeschreibung */}
        {probleme === true && (
          <div>
            <label className="block text-sm font-medium text-navy mb-2">Kurze Beschreibung</label>
            <textarea value={beschreibung} onChange={(e) => setBeschreibung(e.target.value)}
              placeholder="z.B. Mieter zahlt seit 2 Monaten nicht..." rows={3}
              className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-teal focus:ring-2 focus:ring-teal/20 outline-none text-navy resize-none transition-all" />
            <button onClick={() => canContinue && router.push("/portal/onboarding/privat/schritt-5")}
              disabled={!canContinue}
              className={`mt-3 w-full py-3.5 rounded-xl font-semibold transition-all
                ${canContinue ? "bg-navy text-white hover:bg-teal" : "bg-gray-100 text-gray-400 cursor-not-allowed"}`}>
              Weiter →
            </button>
          </div>
        )}

        {/* Document upload — functional */}
        <div className={`border-2 border-dashed rounded-xl p-5 text-center transition-colors
          ${fileName ? "border-teal bg-teal/5" : "border-gray-200 hover:border-teal/40"}`}>
          {fileName ? (
            <div className="flex items-center justify-center gap-3">
              <div className="w-8 h-8 bg-teal rounded-lg flex items-center justify-center">
                <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <div className="text-left">
                <p className="text-sm font-medium text-navy">{fileName}</p>
                <p className="text-xs text-text-light">Gespeichert — wird nach Registrierung hochgeladen</p>
              </div>
              <button onClick={() => { setFileName(null); sessionStorage.removeItem("onboarding_doc_name"); }}
                className="ml-auto text-gray-400 hover:text-red-500 transition-colors">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
          ) : (
            <label className="cursor-pointer block">
              <div className="flex flex-col items-center gap-2">
                <div className="w-10 h-10 bg-navy/8 rounded-xl flex items-center justify-center text-navy">
                  {uploading ? (
                    <svg className="w-5 h-5 animate-spin" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                    </svg>
                  ) : <UploadIcon />}
                </div>
                <div>
                  <p className="text-sm font-medium text-navy">{uploading ? "Wird gespeichert..." : "Mietvertrag hochladen"}</p>
                  <p className="text-xs text-text-light">PDF, DOC — optional, können Sie später nachholen</p>
                </div>
              </div>
              <input type="file" className="hidden" accept=".pdf,.doc,.docx" onChange={handleFile} disabled={uploading} />
            </label>
          )}
        </div>
      </div>
    </OnboardingShell>
  );
}
