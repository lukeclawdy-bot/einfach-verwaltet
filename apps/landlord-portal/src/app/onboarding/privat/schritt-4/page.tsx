"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

const TENANT_OPTIONS = ["0", "1", "2", "3", "4", "5", "Mehr als 5"];

export default function Schritt4Page() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    tenantCount: "",
    hasProblems: false,
    problemDescription: "",
    uploadedFiles: [] as File[],
  });

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setFormData({ ...formData, uploadedFiles: Array.from(e.target.files) });
    }
  };

  const isValid = formData.tenantCount !== "";

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (isValid) {
      const existing = JSON.parse(localStorage.getItem("onboarding") || "{}");
      localStorage.setItem("onboarding", JSON.stringify({
        ...existing,
        step4: {
          tenantCount: formData.tenantCount,
          hasProblems: formData.hasProblems,
          problemDescription: formData.problemDescription,
          hasUpload: formData.uploadedFiles.length > 0,
        }
      }));
      router.push("/onboarding/privat/schritt-5");
    }
  };

  return (
    <div className="space-y-8">
      <div className="text-center space-y-3">
        <h1 className="text-3xl font-bold text-navy">
          Mieter-Informationen
        </h1>
        <p className="text-text-light">
          Ein Überblick über Ihre aktuellen Mieter
        </p>
      </div>

      <form onSubmit={handleSubmit} className="bg-white rounded-2xl p-8 border border-light-gray space-y-6">
        {/* Anzahl Mieter */}
        <div>
          <label className="block text-sm font-medium text-text-main mb-3">
            Wie viele Mieter haben Sie aktuell?
          </label>
          <div className="flex flex-wrap gap-3">
            {TENANT_OPTIONS.map((option) => (
              <button
                key={option}
                type="button"
                onClick={() => setFormData({ ...formData, tenantCount: option })}
                className={`px-5 py-2.5 rounded-lg border transition-all ${
                  formData.tenantCount === option
                    ? "border-teal bg-teal/10 text-teal font-medium"
                    : "border-light-gray hover:border-teal/50"
                }`}
              >
                {option}
              </button>
            ))}
          </div>
        </div>

        {/* Offene Probleme */}
        <div className="pt-4 border-t border-light-gray">
          <div className="flex items-center justify-between">
            <label className="text-sm font-medium text-text-main">
              Gibt es aktuell offene Probleme?
            </label>
            <button
              type="button"
              onClick={() => setFormData({ ...formData, hasProblems: !formData.hasProblems })}
              className={`relative w-14 h-8 rounded-full transition-colors ${
                formData.hasProblems ? "bg-teal" : "bg-gray-300"
              }`}
            >
              <span
                className={`absolute top-1 left-1 w-6 h-6 bg-white rounded-full transition-transform ${
                  formData.hasProblems ? "translate-x-6" : ""
                }`}
              />
            </button>
          </div>
        </div>

        {/* Problem-Beschreibung (conditional) */}
        {formData.hasProblems && (
          <div className="animate-fade-in">
            <label className="block text-sm font-medium text-text-main mb-2">
              Beschreibung des Problems
            </label>
            <textarea
              value={formData.problemDescription}
              onChange={(e) => setFormData({ ...formData, problemDescription: e.target.value })}
              placeholder="Beschreiben Sie das Problem kurz..."
              rows={4}
              className="w-full px-4 py-3 rounded-lg border border-light-gray focus:border-teal focus:ring-2 focus:ring-teal/20 outline-none transition-all resize-none"
            />
          </div>
        )}

        {/* Mietvertrag Upload */}
        <div className="pt-4 border-t border-light-gray">
          <label className="block text-sm font-medium text-text-main mb-2">
            Mietvertrag hochladen (optional)
          </label>
          <div className="border-2 border-dashed border-light-gray rounded-lg p-6 text-center hover:border-teal/50 transition-colors">
            <input
              type="file"
              accept=".pdf,.doc,.docx"
              onChange={handleFileChange}
              className="hidden"
              id="contract-upload"
            />
            <label htmlFor="contract-upload" className="cursor-pointer">
              <svg className="w-10 h-10 text-text-light mx-auto mb-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
              </svg>
              <p className="text-text-main font-medium">
                {formData.uploadedFiles.length > 0
                  ? `${formData.uploadedFiles.length} Datei(en) ausgewählt`
                  : "Datei hierher ziehen oder klicken"}
              </p>
              <p className="text-sm text-text-light mt-1">
                PDF, DOC, DOCX (max. 10MB)
              </p>
            </label>
          </div>
          <p className="text-xs text-text-light mt-2">
            Können Sie später nachholen
          </p>
        </div>

        {/* Submit */}
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
