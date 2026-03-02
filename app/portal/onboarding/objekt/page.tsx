"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import { useRouter } from "next/navigation";
import type { ExtractedObjektData, ExtractedUnit } from "@/app/api/portal/onboarding/extract-objekt/route";

// ─── Types ────────────────────────────────────────────────────────────────────
interface Unit {
  whgNr: string;
  etage: number;
  zimmer: number;
  flaeche: number;
  kaltmiete: number;
  nkVorauszahlung: number;
}

interface Tenant {
  unitIndex: number;
  vorname: string;
  nachname: string;
  email: string;
  telefon: string;
  mietbeginn: string;
  kautionBezahlt: boolean;
  folgtSpaeter: boolean;
}

interface UploadedFile {
  name: string;
  size: number;
  type: string;
  dataUrl?: string;
}

interface Zaehlerstand {
  unitIndex: number;
  stromNummer: string;
  stromStand: number;
  gasNummer: string;
  gasStand: number;
  wasserNummer: string;
  wasserStand: number;
  ablesedatum: string;
}

interface Handwerker {
  name: string;
  telefon: string;
  fachgebiet: string;
}

interface WizardData {
  // Step 1
  strasse: string;
  hausnummer: string;
  plz: string;
  stadt: string;
  immobilientyp: string;
  baujahr: number;
  gesamtflaeche: number;
  energieausweis: string;
  // Step 2
  einheiten: Unit[];
  // Step 3
  mieter: Tenant[];
  // Step 4
  dokumente: {
    mietvertraege: UploadedFile[];
    energieausweis: UploadedFile | null;
    nka: UploadedFile | null;
    grundrisse: UploadedFile[];
  };
  // Step 5
  zaehlerstande: Zaehlerstand[];
  // Step 6
  handwerker: Handwerker[];
  // Step 7
  versicherung: {
    versicherer: string;
    policenNummer: string;
    selbstbeteiligung: number;
    versicherungsart: string;
  };
  // Step 8
  confirmed: boolean;
}

const DRAFT_KEY = "ev-onboarding-objekt-draft";
const TOTAL_STEPS = 8;

const ENERGIEAUSWEIS_OPTIONS = ["A+", "A", "B", "C", "D", "E", "F", "G", "H"];
const IMMOBILIENTYP_OPTIONS = ["Mehrfamilienhaus", "Einfamilienhaus", "Gewerbe"];
const FACHGEBIET_OPTIONS = ["Heizung", "Elektro", "Sanitär", "Schlüssel", "Sonstiges"];
const VERSICHERUNGSART_OPTIONS = ["Wohngebäude", "Haftpflicht", "Beides"];

function defaultUnit(): Unit {
  return { whgNr: "", etage: 0, zimmer: 2, flaeche: 60, kaltmiete: 0, nkVorauszahlung: 150 };
}

function defaultTenant(unitIndex: number): Tenant {
  return {
    unitIndex,
    vorname: "",
    nachname: "",
    email: "",
    telefon: "",
    mietbeginn: "",
    kautionBezahlt: false,
    folgtSpaeter: false,
  };
}

function defaultZaehlerstand(unitIndex: number): Zaehlerstand {
  return {
    unitIndex,
    stromNummer: "",
    stromStand: 0,
    gasNummer: "",
    gasStand: 0,
    wasserNummer: "",
    wasserStand: 0,
    ablesedatum: new Date().toISOString().split("T")[0],
  };
}

function defaultData(): WizardData {
  return {
    strasse: "",
    hausnummer: "",
    plz: "",
    stadt: "",
    immobilientyp: "Mehrfamilienhaus",
    baujahr: 1970,
    gesamtflaeche: 0,
    energieausweis: "C",
    einheiten: [defaultUnit()],
    mieter: [defaultTenant(0)],
    dokumente: { mietvertraege: [], energieausweis: null, nka: null, grundrisse: [] },
    zaehlerstande: [defaultZaehlerstand(0)],
    handwerker: [],
    versicherung: { versicherer: "", policenNummer: "", selbstbeteiligung: 0, versicherungsart: "Wohngebäude" },
    confirmed: false,
  };
}

// ─── Onboarding Score ─────────────────────────────────────────────────────────
function calcScore(data: WizardData): number {
  let filled = 0;
  let total = 0;

  const check = (v: unknown) => {
    total++;
    if (v && String(v).trim() !== "" && v !== 0) filled++;
  };

  check(data.strasse);
  check(data.hausnummer);
  check(data.plz);
  check(data.stadt);
  check(data.immobilientyp);
  check(data.baujahr);
  check(data.gesamtflaeche); // optional bonus
  check(data.energieausweis);

  data.einheiten.forEach((u) => {
    check(u.whgNr);
    check(u.kaltmiete);
    check(u.flaeche); // optional
  });

  const realTenants = data.mieter.filter((t) => !t.folgtSpaeter);
  realTenants.forEach((t) => {
    check(t.vorname);
    check(t.nachname);
    check(t.email);
    check(t.mietbeginn); // optional bonus
  });

  if (data.dokumente.energieausweis) filled++; total++;
  if (data.dokumente.mietvertraege.length > 0) filled++; total++;

  data.handwerker.forEach((h) => {
    check(h.name);
    check(h.telefon);
  });

  check(data.versicherung.versicherer); // optional
  check(data.versicherung.policenNummer); // optional

  return total > 0 ? Math.round((filled / total) * 100) : 0;
}

// ─── Progress Bar ─────────────────────────────────────────────────────────────
function ProgressBar({ step }: { step: number }) {
  const pct = Math.round(((step) / TOTAL_STEPS) * 100);
  return (
    <div className="mb-8">
      <div className="flex items-center justify-between mb-2">
        <span className="text-xs text-text-light">
          Schritt {step} von {TOTAL_STEPS}
        </span>
        <span className="text-xs text-text-light">{pct}%</span>
      </div>
      <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
        <div
          className="h-full bg-teal rounded-full transition-all duration-300"
          style={{ width: `${pct}%` }}
        />
      </div>
    </div>
  );
}

// ─── Step Headings ─────────────────────────────────────────────────────────────
const STEP_TITLES = [
  "Objekt-Grunddaten",
  "Einheiten erfassen",
  "Mieter zuordnen",
  "Dokumente hochladen",
  "Zählerstände",
  "Handwerkerkontakte",
  "Versicherung",
  "Review + Freigabe",
];

// ─── Step 1: Grunddaten ───────────────────────────────────────────────────────
function Step1({ data, update }: { data: WizardData; update: (d: Partial<WizardData>) => void }) {
  return (
    <div className="space-y-5">
      <div className="grid grid-cols-3 gap-4">
        <div className="col-span-2">
          <label className="block text-sm font-medium text-navy mb-1">Straße</label>
          <input
            type="text"
            value={data.strasse}
            onChange={(e) => update({ strasse: e.target.value })}
            placeholder="Musterstraße"
            className="w-full border border-gray-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-teal/30"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-navy mb-1">Hausnummer</label>
          <input
            type="text"
            value={data.hausnummer}
            onChange={(e) => update({ hausnummer: e.target.value })}
            placeholder="12a"
            className="w-full border border-gray-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-teal/30"
          />
        </div>
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium text-navy mb-1">PLZ</label>
          <input
            type="text"
            value={data.plz}
            onChange={(e) => update({ plz: e.target.value })}
            placeholder="20095"
            maxLength={5}
            className="w-full border border-gray-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-teal/30"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-navy mb-1">Stadt</label>
          <input
            type="text"
            value={data.stadt}
            onChange={(e) => update({ stadt: e.target.value })}
            placeholder="Hamburg"
            className="w-full border border-gray-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-teal/30"
          />
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium text-navy mb-1">Immobilientyp</label>
        <div className="flex gap-3 flex-wrap">
          {IMMOBILIENTYP_OPTIONS.map((opt) => (
            <button
              key={opt}
              type="button"
              onClick={() => update({ immobilientyp: opt })}
              className={`px-4 py-2 rounded-lg text-sm font-medium border transition-colors ${
                data.immobilientyp === opt
                  ? "bg-teal text-white border-teal"
                  : "bg-white text-gray-600 border-gray-200 hover:border-teal/50"
              }`}
            >
              {opt}
            </button>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-3 gap-4">
        <div>
          <label className="block text-sm font-medium text-navy mb-1">Baujahr</label>
          <input
            type="number"
            value={data.baujahr || ""}
            onChange={(e) => update({ baujahr: parseInt(e.target.value) || 0 })}
            min={1800}
            max={new Date().getFullYear()}
            className="w-full border border-gray-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-teal/30"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-navy mb-1">Gesamtfläche m²</label>
          <input
            type="number"
            value={data.gesamtflaeche || ""}
            onChange={(e) => update({ gesamtflaeche: parseFloat(e.target.value) || 0 })}
            min={0}
            className="w-full border border-gray-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-teal/30"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-navy mb-1">Energieausweis-Klasse</label>
          <select
            value={data.energieausweis}
            onChange={(e) => update({ energieausweis: e.target.value })}
            className="w-full border border-gray-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-teal/30"
          >
            {ENERGIEAUSWEIS_OPTIONS.map((o) => (
              <option key={o} value={o}>{o}</option>
            ))}
          </select>
        </div>
      </div>
    </div>
  );
}

// ─── Step 2: Einheiten ────────────────────────────────────────────────────────
function Step2({ data, update }: { data: WizardData; update: (d: Partial<WizardData>) => void }) {
  const [expanded, setExpanded] = useState<number | null>(0);

  function addUnit() {
    update({ einheiten: [...data.einheiten, defaultUnit()] });
  }

  function updateUnit(idx: number, patch: Partial<Unit>) {
    const arr = [...data.einheiten];
    arr[idx] = { ...arr[idx], ...patch };
    update({ einheiten: arr });
  }

  function removeUnit(idx: number) {
    if (data.einheiten.length <= 1) return;
    const arr = data.einheiten.filter((_, i) => i !== idx);
    update({ einheiten: arr });
  }

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <p className="text-sm text-text-light">
          {data.einheiten.length} Einheit{data.einheiten.length !== 1 ? "en" : ""} erfasst
        </p>
        {data.einheiten.length < 50 && (
          <button
            type="button"
            onClick={addUnit}
            className="px-3 py-1.5 text-xs font-semibold bg-teal text-white rounded-lg hover:bg-teal/90 transition-colors"
          >
            + Einheit hinzufügen
          </button>
        )}
      </div>

      {data.einheiten.map((unit, idx) => (
        <div key={idx} className="border border-gray-200 rounded-xl overflow-hidden">
          <button
            type="button"
            className="w-full flex items-center justify-between px-4 py-3 bg-gray-50 hover:bg-gray-100 transition-colors text-left"
            onClick={() => setExpanded(expanded === idx ? null : idx)}
          >
            <span className="text-sm font-medium text-navy">
              {unit.whgNr ? `Whg. ${unit.whgNr}` : `Einheit ${idx + 1}`}
              {unit.kaltmiete > 0 && (
                <span className="ml-2 text-xs text-text-light">
                  {unit.kaltmiete.toLocaleString("de-DE")} €/Monat
                </span>
              )}
            </span>
            <span className="text-gray-400 text-xs">{expanded === idx ? "▲" : "▼"}</span>
          </button>

          {expanded === idx && (
            <div className="p-4 space-y-4">
              <div className="grid grid-cols-3 gap-3">
                <div>
                  <label className="block text-xs font-medium text-navy mb-1">Whg-Nr.</label>
                  <input
                    type="text"
                    value={unit.whgNr}
                    onChange={(e) => updateUnit(idx, { whgNr: e.target.value })}
                    placeholder="1a"
                    className="w-full border border-gray-200 rounded-lg px-3 py-2 text-sm"
                  />
                </div>
                <div>
                  <label className="block text-xs font-medium text-navy mb-1">Etage</label>
                  <input
                    type="number"
                    value={unit.etage}
                    onChange={(e) => updateUnit(idx, { etage: parseInt(e.target.value) || 0 })}
                    min={-1}
                    max={20}
                    className="w-full border border-gray-200 rounded-lg px-3 py-2 text-sm"
                  />
                </div>
                <div>
                  <label className="block text-xs font-medium text-navy mb-1">Zimmer</label>
                  <input
                    type="number"
                    value={unit.zimmer}
                    onChange={(e) => updateUnit(idx, { zimmer: parseFloat(e.target.value) || 0 })}
                    min={1}
                    step={0.5}
                    className="w-full border border-gray-200 rounded-lg px-3 py-2 text-sm"
                  />
                </div>
              </div>
              <div className="grid grid-cols-3 gap-3">
                <div>
                  <label className="block text-xs font-medium text-navy mb-1">Fläche m²</label>
                  <input
                    type="number"
                    value={unit.flaeche}
                    onChange={(e) => updateUnit(idx, { flaeche: parseFloat(e.target.value) || 0 })}
                    min={0}
                    className="w-full border border-gray-200 rounded-lg px-3 py-2 text-sm"
                  />
                </div>
                <div>
                  <label className="block text-xs font-medium text-navy mb-1">Kaltmiete €</label>
                  <input
                    type="number"
                    value={unit.kaltmiete}
                    onChange={(e) => updateUnit(idx, { kaltmiete: parseFloat(e.target.value) || 0 })}
                    min={0}
                    step={50}
                    className="w-full border border-gray-200 rounded-lg px-3 py-2 text-sm"
                  />
                </div>
                <div>
                  <label className="block text-xs font-medium text-navy mb-1">NK-Vorauszahlung €</label>
                  <input
                    type="number"
                    value={unit.nkVorauszahlung}
                    onChange={(e) => updateUnit(idx, { nkVorauszahlung: parseFloat(e.target.value) || 0 })}
                    min={0}
                    step={10}
                    className="w-full border border-gray-200 rounded-lg px-3 py-2 text-sm"
                  />
                </div>
              </div>
              {data.einheiten.length > 1 && (
                <div className="flex justify-end">
                  <button
                    type="button"
                    onClick={() => removeUnit(idx)}
                    className="text-xs text-red-500 hover:text-red-700 transition-colors"
                  >
                    Einheit entfernen
                  </button>
                </div>
              )}
            </div>
          )}
        </div>
      ))}
    </div>
  );
}

// ─── Step 3: Mieter ────────────────────────────────────────────────────────────
function Step3({ data, update }: { data: WizardData; update: (d: Partial<WizardData>) => void }) {
  // Sync mieter array length to einheiten
  useEffect(() => {
    const count = data.einheiten.length;
    const current = data.mieter;
    if (current.length === count) return;
    if (current.length < count) {
      const added = Array.from({ length: count - current.length }, (_, i) =>
        defaultTenant(current.length + i)
      );
      update({ mieter: [...current, ...added] });
    } else {
      update({ mieter: current.slice(0, count) });
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data.einheiten.length]);

  function updateTenant(idx: number, patch: Partial<Tenant>) {
    const arr = [...data.mieter];
    arr[idx] = { ...arr[idx], ...patch };
    update({ mieter: arr });
  }

  return (
    <div className="space-y-5">
      {data.einheiten.map((unit, idx) => {
        const tenant = data.mieter[idx] ?? defaultTenant(idx);
        return (
          <div key={idx} className="bg-white border border-gray-200 rounded-xl p-5">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-sm font-semibold text-navy">
                {unit.whgNr ? `Whg. ${unit.whgNr}` : `Einheit ${idx + 1}`}
              </h3>
              <label className="flex items-center gap-2 text-xs text-text-light cursor-pointer">
                <input
                  type="checkbox"
                  checked={tenant.folgtSpaeter}
                  onChange={(e) => updateTenant(idx, { folgtSpaeter: e.target.checked })}
                  className="accent-teal"
                />
                Mieter folgt später
              </label>
            </div>

            {!tenant.folgtSpaeter && (
              <div className="space-y-3">
                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="block text-xs font-medium text-navy mb-1">Vorname</label>
                    <input
                      type="text"
                      value={tenant.vorname}
                      onChange={(e) => updateTenant(idx, { vorname: e.target.value })}
                      className="w-full border border-gray-200 rounded-lg px-3 py-2 text-sm"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-medium text-navy mb-1">Nachname</label>
                    <input
                      type="text"
                      value={tenant.nachname}
                      onChange={(e) => updateTenant(idx, { nachname: e.target.value })}
                      className="w-full border border-gray-200 rounded-lg px-3 py-2 text-sm"
                    />
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="block text-xs font-medium text-navy mb-1">E-Mail</label>
                    <input
                      type="email"
                      value={tenant.email}
                      onChange={(e) => updateTenant(idx, { email: e.target.value })}
                      className="w-full border border-gray-200 rounded-lg px-3 py-2 text-sm"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-medium text-navy mb-1">Telefon</label>
                    <input
                      type="tel"
                      value={tenant.telefon}
                      onChange={(e) => updateTenant(idx, { telefon: e.target.value })}
                      className="w-full border border-gray-200 rounded-lg px-3 py-2 text-sm"
                    />
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="block text-xs font-medium text-navy mb-1">Mietbeginn</label>
                    <input
                      type="date"
                      value={tenant.mietbeginn}
                      onChange={(e) => updateTenant(idx, { mietbeginn: e.target.value })}
                      className="w-full border border-gray-200 rounded-lg px-3 py-2 text-sm"
                    />
                  </div>
                  <div className="flex items-end pb-2">
                    <label className="flex items-center gap-2 text-sm text-navy cursor-pointer">
                      <input
                        type="checkbox"
                        checked={tenant.kautionBezahlt}
                        onChange={(e) => updateTenant(idx, { kautionBezahlt: e.target.checked })}
                        className="accent-teal"
                      />
                      Kaution bezahlt
                    </label>
                  </div>
                </div>
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}

// ─── File Upload Component ────────────────────────────────────────────────────
function FileUploadZone({
  label,
  accept,
  multiple,
  files,
  onChange,
}: {
  label: string;
  accept: string;
  multiple?: boolean;
  files: UploadedFile[];
  onChange: (files: UploadedFile[]) => void;
}) {
  const inputRef = useRef<HTMLInputElement>(null);

  function handleFiles(fileList: FileList) {
    const newFiles: UploadedFile[] = Array.from(fileList).map((f) => ({
      name: f.name,
      size: f.size,
      type: f.type,
    }));
    onChange(multiple ? [...files, ...newFiles] : newFiles.slice(0, 1));
  }

  function formatSize(bytes: number) {
    if (bytes < 1024) return `${bytes} B`;
    if (bytes < 1024 * 1024) return `${(bytes / 1024).toFixed(1)} KB`;
    return `${(bytes / (1024 * 1024)).toFixed(1)} MB`;
  }

  return (
    <div className="space-y-2">
      <p className="text-sm font-medium text-navy">{label}</p>
      <div
        className="border-2 border-dashed border-gray-200 rounded-xl p-6 text-center hover:border-teal/40 transition-colors cursor-pointer"
        onClick={() => inputRef.current?.click()}
        onDragOver={(e) => e.preventDefault()}
        onDrop={(e) => {
          e.preventDefault();
          if (e.dataTransfer.files.length > 0) handleFiles(e.dataTransfer.files);
        }}
      >
        <svg className="w-8 h-8 text-gray-300 mx-auto mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
        </svg>
        <p className="text-sm text-text-light">
          Datei hierher ziehen oder{" "}
          <span className="text-teal font-medium">auswählen</span>
        </p>
        <p className="text-xs text-gray-400 mt-1">{accept.replace(/,/g, ", ")}</p>
        <input
          ref={inputRef}
          type="file"
          accept={accept}
          multiple={multiple}
          className="hidden"
          onChange={(e) => e.target.files && handleFiles(e.target.files)}
        />
      </div>

      {files.length > 0 && (
        <div className="space-y-1">
          {files.map((f, i) => (
            <div key={i} className="flex items-center justify-between bg-gray-50 rounded-lg px-3 py-2">
              <div className="flex items-center gap-2">
                <svg className="w-4 h-4 text-teal" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                <span className="text-xs text-navy font-medium truncate max-w-[200px]">{f.name}</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-xs text-text-light">{formatSize(f.size)}</span>
                <button
                  type="button"
                  onClick={(e) => { e.stopPropagation(); onChange(files.filter((_, j) => j !== i)); }}
                  className="text-gray-400 hover:text-red-500 transition-colors text-xs"
                >
                  ✕
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

// ─── Step 4: Dokumente ────────────────────────────────────────────────────────
function Step4({ data, update }: { data: WizardData; update: (d: Partial<WizardData>) => void }) {
  function updateDok(patch: Partial<WizardData["dokumente"]>) {
    update({ dokumente: { ...data.dokumente, ...patch } });
  }

  return (
    <div className="space-y-6">
      <FileUploadZone
        label="Mietverträge (PDF pro Einheit)"
        accept=".pdf"
        multiple
        files={data.dokumente.mietvertraege}
        onChange={(files) => updateDok({ mietvertraege: files })}
      />
      <FileUploadZone
        label="Letzter Energieausweis (PDF)"
        accept=".pdf"
        files={data.dokumente.energieausweis ? [data.dokumente.energieausweis] : []}
        onChange={(files) => updateDok({ energieausweis: files[0] ?? null })}
      />
      <FileUploadZone
        label="Letzte NKA (PDF, optional)"
        accept=".pdf"
        files={data.dokumente.nka ? [data.dokumente.nka] : []}
        onChange={(files) => updateDok({ nka: files[0] ?? null })}
      />
      <FileUploadZone
        label="Grundrisse (PDF/Bild, optional)"
        accept=".pdf,.png,.jpg,.jpeg,.webp"
        multiple
        files={data.dokumente.grundrisse}
        onChange={(files) => updateDok({ grundrisse: files })}
      />
    </div>
  );
}

// ─── Step 5: Zählerstände ──────────────────────────────────────────────────────
function Step5({ data, update }: { data: WizardData; update: (d: Partial<WizardData>) => void }) {
  useEffect(() => {
    const count = data.einheiten.length;
    const current = data.zaehlerstande;
    if (current.length === count) return;
    if (current.length < count) {
      const added = Array.from({ length: count - current.length }, (_, i) =>
        defaultZaehlerstand(current.length + i)
      );
      update({ zaehlerstande: [...current, ...added] });
    } else {
      update({ zaehlerstande: current.slice(0, count) });
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data.einheiten.length]);

  function updateZ(idx: number, patch: Partial<Zaehlerstand>) {
    const arr = [...data.zaehlerstande];
    arr[idx] = { ...arr[idx], ...patch };
    update({ zaehlerstande: arr });
  }

  return (
    <div className="space-y-5">
      {data.einheiten.map((unit, idx) => {
        const z = data.zaehlerstande[idx] ?? defaultZaehlerstand(idx);
        return (
          <div key={idx} className="bg-white border border-gray-200 rounded-xl p-5">
            <h3 className="text-sm font-semibold text-navy mb-4">
              {unit.whgNr ? `Whg. ${unit.whgNr}` : `Einheit ${idx + 1}`}
            </h3>

            <div className="space-y-4">
              <div className="grid grid-cols-3 gap-3">
                <div className="col-span-3">
                  <label className="block text-xs font-medium text-gray-500 mb-1">Ablesedatum</label>
                  <input
                    type="date"
                    value={z.ablesedatum}
                    onChange={(e) => updateZ(idx, { ablesedatum: e.target.value })}
                    className="border border-gray-200 rounded-lg px-3 py-2 text-sm"
                  />
                </div>
              </div>

              {/* Strom */}
              <div>
                <p className="text-xs font-semibold text-amber-600 mb-2">⚡ Strom</p>
                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="block text-xs font-medium text-navy mb-1">Zählernummer</label>
                    <input
                      type="text"
                      value={z.stromNummer}
                      onChange={(e) => updateZ(idx, { stromNummer: e.target.value })}
                      className="w-full border border-gray-200 rounded-lg px-3 py-2 text-sm"
                      placeholder="1234567890"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-medium text-navy mb-1">Stand (kWh)</label>
                    <input
                      type="number"
                      value={z.stromStand}
                      onChange={(e) => updateZ(idx, { stromStand: parseFloat(e.target.value) || 0 })}
                      className="w-full border border-gray-200 rounded-lg px-3 py-2 text-sm"
                      min={0}
                    />
                  </div>
                </div>
              </div>

              {/* Gas */}
              <div>
                <p className="text-xs font-semibold text-blue-600 mb-2">🔥 Gas (falls vorhanden)</p>
                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="block text-xs font-medium text-navy mb-1">Zählernummer</label>
                    <input
                      type="text"
                      value={z.gasNummer}
                      onChange={(e) => updateZ(idx, { gasNummer: e.target.value })}
                      className="w-full border border-gray-200 rounded-lg px-3 py-2 text-sm"
                      placeholder="Optional"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-medium text-navy mb-1">Stand (m³)</label>
                    <input
                      type="number"
                      value={z.gasStand}
                      onChange={(e) => updateZ(idx, { gasStand: parseFloat(e.target.value) || 0 })}
                      className="w-full border border-gray-200 rounded-lg px-3 py-2 text-sm"
                      min={0}
                    />
                  </div>
                </div>
              </div>

              {/* Wasser */}
              <div>
                <p className="text-xs font-semibold text-cyan-600 mb-2">💧 Wasser</p>
                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="block text-xs font-medium text-navy mb-1">Zählernummer</label>
                    <input
                      type="text"
                      value={z.wasserNummer}
                      onChange={(e) => updateZ(idx, { wasserNummer: e.target.value })}
                      className="w-full border border-gray-200 rounded-lg px-3 py-2 text-sm"
                      placeholder="Optional"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-medium text-navy mb-1">Stand (m³)</label>
                    <input
                      type="number"
                      value={z.wasserStand}
                      onChange={(e) => updateZ(idx, { wasserStand: parseFloat(e.target.value) || 0 })}
                      className="w-full border border-gray-200 rounded-lg px-3 py-2 text-sm"
                      min={0}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

// ─── Step 6: Handwerker ────────────────────────────────────────────────────────
function Step6({ data, update }: { data: WizardData; update: (d: Partial<WizardData>) => void }) {
  function addHandwerker() {
    if (data.handwerker.length >= 5) return;
    update({ handwerker: [...data.handwerker, { name: "", telefon: "", fachgebiet: "Heizung" }] });
  }

  function updateH(idx: number, patch: Partial<Handwerker>) {
    const arr = [...data.handwerker];
    arr[idx] = { ...arr[idx], ...patch };
    update({ handwerker: arr });
  }

  function removeH(idx: number) {
    update({ handwerker: data.handwerker.filter((_, i) => i !== idx) });
  }

  return (
    <div className="space-y-4">
      <p className="text-sm text-text-light">
        Bis zu 5 bevorzugte Handwerkerkontakte für dieses Objekt.
      </p>

      {data.handwerker.map((h, idx) => (
        <div key={idx} className="bg-white border border-gray-200 rounded-xl p-4">
          <div className="grid grid-cols-3 gap-3">
            <div className="col-span-3 sm:col-span-1">
              <label className="block text-xs font-medium text-navy mb-1">Name / Firma</label>
              <input
                type="text"
                value={h.name}
                onChange={(e) => updateH(idx, { name: e.target.value })}
                placeholder="Müller Heizungstechnik"
                className="w-full border border-gray-200 rounded-lg px-3 py-2 text-sm"
              />
            </div>
            <div>
              <label className="block text-xs font-medium text-navy mb-1">Telefon</label>
              <input
                type="tel"
                value={h.telefon}
                onChange={(e) => updateH(idx, { telefon: e.target.value })}
                placeholder="040 123 4567"
                className="w-full border border-gray-200 rounded-lg px-3 py-2 text-sm"
              />
            </div>
            <div>
              <label className="block text-xs font-medium text-navy mb-1">Fachgebiet</label>
              <div className="flex items-center gap-2">
                <select
                  value={h.fachgebiet}
                  onChange={(e) => updateH(idx, { fachgebiet: e.target.value })}
                  className="flex-1 border border-gray-200 rounded-lg px-3 py-2 text-sm"
                >
                  {FACHGEBIET_OPTIONS.map((o) => (
                    <option key={o} value={o}>{o}</option>
                  ))}
                </select>
                <button
                  type="button"
                  onClick={() => removeH(idx)}
                  className="text-gray-400 hover:text-red-500 transition-colors p-1"
                >
                  ✕
                </button>
              </div>
            </div>
          </div>
        </div>
      ))}

      {data.handwerker.length < 5 && (
        <button
          type="button"
          onClick={addHandwerker}
          className="w-full border-2 border-dashed border-gray-200 rounded-xl py-3 text-sm text-teal font-medium hover:border-teal/40 transition-colors"
        >
          + Handwerker hinzufügen
        </button>
      )}

      {data.handwerker.length === 0 && (
        <p className="text-xs text-text-light text-center py-2">
          Optional — kann auch später hinzugefügt werden.
        </p>
      )}
    </div>
  );
}

// ─── Step 7: Versicherung ─────────────────────────────────────────────────────
function Step7({ data, update }: { data: WizardData; update: (d: Partial<WizardData>) => void }) {
  function updateV(patch: Partial<WizardData["versicherung"]>) {
    update({ versicherung: { ...data.versicherung, ...patch } });
  }

  return (
    <div className="space-y-5">
      <p className="text-sm text-text-light">
        Versicherungsdaten sind optional, werden aber für die automatische Schadensabwicklung benötigt.
      </p>

      <div className="grid grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium text-navy mb-1">Versicherer</label>
          <input
            type="text"
            value={data.versicherung.versicherer}
            onChange={(e) => updateV({ versicherer: e.target.value })}
            placeholder="Allianz / HDI / ..."
            className="w-full border border-gray-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-teal/30"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-navy mb-1">Policen-Nummer</label>
          <input
            type="text"
            value={data.versicherung.policenNummer}
            onChange={(e) => updateV({ policenNummer: e.target.value })}
            placeholder="WGV-12345678"
            className="w-full border border-gray-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-teal/30"
          />
        </div>
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium text-navy mb-1">Selbstbeteiligung €</label>
          <input
            type="number"
            value={data.versicherung.selbstbeteiligung || ""}
            onChange={(e) => updateV({ selbstbeteiligung: parseFloat(e.target.value) || 0 })}
            min={0}
            step={100}
            className="w-full border border-gray-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-teal/30"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-navy mb-1">Versicherungsart</label>
          <div className="flex flex-col gap-2 mt-1">
            {VERSICHERUNGSART_OPTIONS.map((opt) => (
              <label key={opt} className="flex items-center gap-2 text-sm text-navy cursor-pointer">
                <input
                  type="radio"
                  name="versicherungsart"
                  value={opt}
                  checked={data.versicherung.versicherungsart === opt}
                  onChange={() => updateV({ versicherungsart: opt })}
                  className="accent-teal"
                />
                {opt}
              </label>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

// ─── Step 8: Review + Freigabe ────────────────────────────────────────────────
function Step8({
  data,
  update,
  score,
  onSubmit,
  submitting,
  submitError,
}: {
  data: WizardData;
  update: (d: Partial<WizardData>) => void;
  score: number;
  onSubmit: () => void;
  submitting: boolean;
  submitError: string | null;
}) {
  const scoreColor =
    score >= 80 ? "bg-green-500" : score >= 50 ? "bg-amber-400" : "bg-red-400";
  const scoreLabel =
    score >= 80 ? "Sehr vollständig" : score >= 50 ? "Gut" : "Bitte ergänzen";

  return (
    <div className="space-y-6">
      {/* Onboarding Score */}
      <div className="bg-gray-50 rounded-xl p-5">
        <div className="flex items-center justify-between mb-2">
          <span className="text-sm font-semibold text-navy">Onboarding-Score</span>
          <span
            className={`text-xs px-2 py-0.5 rounded-full text-white font-medium ${scoreColor}`}
          >
            {score}% — {scoreLabel}
          </span>
        </div>
        <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
          <div
            className={`h-full rounded-full transition-all ${scoreColor}`}
            style={{ width: `${score}%` }}
          />
        </div>
        <p className="text-xs text-text-light mt-2">
          Je vollständiger die Daten, desto schneller können wir loslegen.
        </p>
      </div>

      {/* Summary */}
      <div className="space-y-3">
        <SummaryRow
          label="Adresse"
          value={`${data.strasse} ${data.hausnummer}, ${data.plz} ${data.stadt}`}
        />
        <SummaryRow label="Typ" value={data.immobilientyp} />
        <SummaryRow label="Baujahr" value={data.baujahr ? String(data.baujahr) : "—"} />
        <SummaryRow label="Fläche" value={data.gesamtflaeche ? `${data.gesamtflaeche} m²` : "—"} />
        <SummaryRow label="Energieausweis" value={data.energieausweis} />
        <SummaryRow label="Einheiten" value={`${data.einheiten.length}`} />
        <SummaryRow
          label="Mieter"
          value={`${data.mieter.filter((m) => !m.folgtSpaeter && m.email).length} zugeordnet, ${data.mieter.filter((m) => m.folgtSpaeter).length} folgen später`}
        />
        <SummaryRow
          label="Dokumente"
          value={`${data.dokumente.mietvertraege.length} Mietvertrag/ä, ${data.dokumente.energieausweis ? "Energieausweis ✓" : "kein Energieausweis"}`}
        />
        <SummaryRow label="Handwerker" value={`${data.handwerker.length} Kontakt(e)`} />
        <SummaryRow
          label="Versicherung"
          value={data.versicherung.versicherer || "Nicht angegeben"}
        />
      </div>

      {/* Confirmation checkbox */}
      <label className="flex items-start gap-3 cursor-pointer bg-white border border-gray-200 rounded-xl p-4">
        <input
          type="checkbox"
          checked={data.confirmed}
          onChange={(e) => update({ confirmed: e.target.checked })}
          className="mt-0.5 accent-teal flex-shrink-0"
        />
        <span className="text-sm text-navy">
          Ich bestätige die Vollständigkeit und Richtigkeit der Angaben und bin damit einverstanden, dass einfach verwaltet. diese Daten für die Hausverwaltung verwendet.
        </span>
      </label>

      {submitError && (
        <div className="bg-red-50 border border-red-200 rounded-xl p-4 text-sm text-red-600">
          {submitError}
        </div>
      )}

      <button
        type="button"
        disabled={!data.confirmed || submitting}
        onClick={onSubmit}
        className="w-full py-3 bg-teal text-white font-semibold rounded-xl hover:bg-teal/90 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {submitting ? "Wird angelegt…" : "Objekt jetzt hinzufügen →"}
      </button>
    </div>
  );
}

function SummaryRow({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex items-start justify-between gap-4 py-2 border-b border-gray-50 last:border-0">
      <span className="text-sm text-text-light flex-shrink-0">{label}</span>
      <span className="text-sm text-navy font-medium text-right">{value || "—"}</span>
    </div>
  );
}

// ─── AI Upload Flow: helpers ───────────────────────────────────────────────────

function fileTypeIcon(type: string) {
  if (type.startsWith("image/")) {
    return (
      <svg className="w-5 h-5 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
      </svg>
    );
  }
  return (
    <svg className="w-5 h-5 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
    </svg>
  );
}

function formatFileSize(bytes: number): string {
  if (bytes < 1024) return `${bytes} B`;
  if (bytes < 1024 * 1024) return `${(bytes / 1024).toFixed(1)} KB`;
  return `${(bytes / (1024 * 1024)).toFixed(1)} MB`;
}

function confidenceDot(score: number) {
  if (score === 0) {
    return <span className="inline-block w-2 h-2 rounded-full bg-gray-300 flex-shrink-0" title="Nicht gefunden" />;
  }
  if (score >= 80) {
    return <span className="inline-block w-2 h-2 rounded-full bg-green-500 flex-shrink-0" title={`Sicher (${score}%)`} />;
  }
  return <span className="inline-block w-2 h-2 rounded-full bg-amber-400 flex-shrink-0" title={`Unsicher (${score}%)`} />;
}

function inputClass(fieldName: string, confidence: Record<string, number>) {
  const c = confidence[fieldName] ?? 0;
  const base = "w-full rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 border";
  if (c > 0 && c < 80) {
    return `${base} border-amber-300 focus:ring-amber-200`;
  }
  return `${base} border-gray-200 focus:ring-teal/30`;
}

// ─── AI Upload: Step 0 — Mode Selection ───────────────────────────────────────
function UploadModeSelect({
  onSelectUpload,
  onSelectManual,
}: {
  onSelectUpload: () => void;
  onSelectManual: () => void;
}) {
  return (
    <div className="space-y-5">
      {/* Card A — AI Upload (recommended) */}
      <button
        type="button"
        onClick={onSelectUpload}
        className="w-full text-left border-2 border-teal rounded-2xl p-5 bg-teal/5 hover:bg-teal/10 transition-colors focus:outline-none focus:ring-2 focus:ring-teal/40 relative"
      >
        <div className="flex items-start gap-4">
          {/* Sparkle icon */}
          <div className="flex-shrink-0 w-11 h-11 rounded-xl bg-teal flex items-center justify-center">
            <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
            </svg>
          </div>
          <div className="flex-1 min-w-0">
            <div className="flex items-center gap-2 flex-wrap mb-1">
              <span className="font-semibold text-navy text-base">Dokumente hochladen</span>
              <span className="inline-block bg-teal text-white text-[10px] font-bold px-2 py-0.5 rounded-full leading-tight">
                Empfohlen · Spart ~5 Minuten
              </span>
            </div>
            <p className="text-sm text-text-light mb-2">
              KI liest Ihre Unterlagen und füllt die Felder automatisch aus
            </p>
            <p className="text-xs text-gray-400">
              Mietvertrag · Energieausweis · Grundriss · Letzte NKA · Übergabeprotokoll
            </p>
          </div>
          <div className="flex-shrink-0 ml-2">
            <svg className="w-5 h-5 text-teal" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </div>
        </div>
      </button>

      {/* Card B — Manual */}
      <button
        type="button"
        onClick={onSelectManual}
        className="w-full text-left border border-gray-200 rounded-2xl p-5 bg-white hover:border-gray-300 hover:bg-gray-50 transition-colors focus:outline-none focus:ring-2 focus:ring-gray-200"
      >
        <div className="flex items-start gap-4">
          {/* Pencil icon */}
          <div className="flex-shrink-0 w-11 h-11 rounded-xl bg-gray-100 flex items-center justify-center">
            <svg className="w-6 h-6 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
            </svg>
          </div>
          <div className="flex-1 min-w-0">
            <p className="font-semibold text-navy text-base mb-1">Manuell eingeben</p>
            <p className="text-sm text-text-light">Felder direkt ausfüllen</p>
          </div>
          <div className="flex-shrink-0 ml-2">
            <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </div>
        </div>
      </button>
    </div>
  );
}

// ─── AI Upload: Upload Screen ─────────────────────────────────────────────────
function UploadScreen({
  files,
  setFiles,
  onAnalyze,
  extractError,
  onManual,
}: {
  files: File[];
  setFiles: (f: File[]) => void;
  onAnalyze: () => void;
  extractError: string | null;
  onManual: () => void;
}) {
  const inputRef = useRef<HTMLInputElement>(null);
  const [dragOver, setDragOver] = useState(false);

  function handleFileList(list: FileList) {
    const incoming = Array.from(list);
    const combined = [...files, ...incoming].slice(0, 5);
    setFiles(combined);
  }

  return (
    <div className="space-y-5">
      {/* Drag & drop zone */}
      <div
        className={`border-2 border-dashed rounded-2xl p-8 text-center transition-colors cursor-pointer ${
          dragOver ? "border-teal bg-teal/5" : "border-gray-200 hover:border-teal/40"
        }`}
        onClick={() => inputRef.current?.click()}
        onDragOver={(e) => { e.preventDefault(); setDragOver(true); }}
        onDragLeave={() => setDragOver(false)}
        onDrop={(e) => {
          e.preventDefault();
          setDragOver(false);
          if (e.dataTransfer.files.length > 0) handleFileList(e.dataTransfer.files);
        }}
      >
        <div className="w-14 h-14 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-3">
          <svg className="w-7 h-7 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
          </svg>
        </div>
        <p className="text-sm text-navy font-medium mb-1">
          Dateien hierher ziehen oder{" "}
          <span className="text-teal">auswählen</span>
        </p>
        <p className="text-xs text-gray-400">
          PDF, JPG, PNG · max. 10 MB pro Datei · max. 5 Dateien
        </p>
        <input
          ref={inputRef}
          type="file"
          accept=".pdf,.jpg,.jpeg,.png"
          multiple
          className="hidden"
          onChange={(e) => e.target.files && handleFileList(e.target.files)}
        />
      </div>

      {/* File list */}
      {files.length > 0 && (
        <div className="space-y-2">
          {files.map((f, i) => (
            <div key={i} className="flex items-center gap-3 bg-gray-50 rounded-xl px-4 py-3">
              {fileTypeIcon(f.type)}
              <div className="flex-1 min-w-0">
                <p className="text-sm text-navy font-medium truncate">{f.name}</p>
                <p className="text-xs text-gray-400">{formatFileSize(f.size)}</p>
              </div>
              <button
                type="button"
                onClick={() => setFiles(files.filter((_, j) => j !== i))}
                className="flex-shrink-0 text-gray-400 hover:text-red-500 transition-colors p-1"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
          ))}

          {files.length < 5 && (
            <button
              type="button"
              onClick={() => inputRef.current?.click()}
              className="text-sm text-teal font-medium hover:underline"
            >
              + Weitere Dateien hinzufügen
            </button>
          )}
        </div>
      )}

      {/* Error */}
      {extractError && (
        <div className="bg-red-50 border border-red-200 rounded-xl p-4 text-sm text-red-600">
          {extractError}
          <button
            type="button"
            onClick={onManual}
            className="block mt-2 text-teal font-medium hover:underline text-xs"
          >
            Stattdessen manuell eingeben →
          </button>
        </div>
      )}

      {/* CTA */}
      <button
        type="button"
        disabled={files.length === 0}
        onClick={onAnalyze}
        className="w-full py-3 bg-teal text-white font-semibold rounded-xl hover:bg-teal/90 transition-colors disabled:opacity-40 disabled:cursor-not-allowed"
      >
        Weiter &amp; KI analysieren →
      </button>

      <p className="text-xs text-center text-gray-400">
        Ihre Dokumente werden nicht dauerhaft gespeichert — nur zur einmaligen Datenextraktion verwendet.
      </p>
    </div>
  );
}

// ─── AI Upload: Review Screen ─────────────────────────────────────────────────

// Map MFH/EFH/Gewerbe → WizardData immobilientyp values
function mapImmobilientyp(v: string | null): string {
  if (!v) return "Mehrfamilienhaus";
  if (v === "MFH") return "Mehrfamilienhaus";
  if (v === "EFH") return "Einfamilienhaus";
  if (v === "Gewerbe") return "Gewerbe";
  return "Mehrfamilienhaus";
}

function ReviewScreen({
  extracted,
  confidence,
  onAccept,
  onManual,
}: {
  extracted: ExtractedObjektData;
  confidence: Record<string, number>;
  onAccept: (data: ExtractedObjektData) => void;
  onManual: () => void;
}) {
  const [local, setLocal] = useState<ExtractedObjektData>({ ...extracted });
  const [einheitenOpen, setEinheitenOpen] = useState(true);

  function patch(p: Partial<ExtractedObjektData>) {
    setLocal((prev) => ({ ...prev, ...p }));
  }

  function updateUnit(idx: number, p: Partial<ExtractedUnit>) {
    const arr = [...local.einheiten];
    arr[idx] = { ...arr[idx], ...p };
    patch({ einheiten: arr });
  }

  function addUnit() {
    patch({
      einheiten: [
        ...local.einheiten,
        { whgNr: "", etage: 0, zimmer: 2, flaeche: 60, kaltmiete: 0, nkVorauszahlung: 150 },
      ],
    });
  }

  function removeUnit(idx: number) {
    if (local.einheiten.length <= 1) return;
    patch({ einheiten: local.einheiten.filter((_, i) => i !== idx) });
  }

  const ic = (field: string) => inputClass(field, confidence);

  return (
    <div className="space-y-6">
      {/* Section: Objekt-Grunddaten */}
      <div>
        <h3 className="text-sm font-semibold text-navy mb-3">Objekt-Grunddaten</h3>
        <div className="space-y-4">
          {/* Straße + Hausnummer */}
          <div className="grid grid-cols-3 gap-3">
            <div className="col-span-2">
              <div className="flex items-center gap-1.5 mb-1">
                {confidenceDot(confidence.strasse ?? 0)}
                <label className="text-xs font-medium text-navy">Straße</label>
              </div>
              <input
                type="text"
                value={local.strasse ?? ""}
                onChange={(e) => patch({ strasse: e.target.value || null })}
                className={ic("strasse")}
                placeholder="Musterstraße"
              />
            </div>
            <div>
              <div className="flex items-center gap-1.5 mb-1">
                {confidenceDot(confidence.hausnummer ?? 0)}
                <label className="text-xs font-medium text-navy">Hausnummer</label>
              </div>
              <input
                type="text"
                value={local.hausnummer ?? ""}
                onChange={(e) => patch({ hausnummer: e.target.value || null })}
                className={ic("hausnummer")}
                placeholder="12a"
              />
            </div>
          </div>

          {/* PLZ + Stadt */}
          <div className="grid grid-cols-2 gap-3">
            <div>
              <div className="flex items-center gap-1.5 mb-1">
                {confidenceDot(confidence.plz ?? 0)}
                <label className="text-xs font-medium text-navy">PLZ</label>
              </div>
              <input
                type="text"
                value={local.plz ?? ""}
                onChange={(e) => patch({ plz: e.target.value || null })}
                className={ic("plz")}
                placeholder="20095"
                maxLength={5}
              />
            </div>
            <div>
              <div className="flex items-center gap-1.5 mb-1">
                {confidenceDot(confidence.stadt ?? 0)}
                <label className="text-xs font-medium text-navy">Stadt</label>
              </div>
              <input
                type="text"
                value={local.stadt ?? ""}
                onChange={(e) => patch({ stadt: e.target.value || null })}
                className={ic("stadt")}
                placeholder="Hamburg"
              />
            </div>
          </div>

          {/* Immobilientyp */}
          <div>
            <div className="flex items-center gap-1.5 mb-2">
              {confidenceDot(confidence.immobilientyp ?? 0)}
              <label className="text-xs font-medium text-navy">Immobilientyp</label>
            </div>
            <div className="flex gap-2 flex-wrap">
              {(["MFH", "EFH", "Gewerbe"] as const).map((opt) => (
                <button
                  key={opt}
                  type="button"
                  onClick={() => patch({ immobilientyp: opt })}
                  className={`px-4 py-2 rounded-lg text-sm font-medium border transition-colors ${
                    local.immobilientyp === opt
                      ? "bg-teal text-white border-teal"
                      : "bg-white text-gray-600 border-gray-200 hover:border-teal/50"
                  }`}
                >
                  {opt}
                </button>
              ))}
            </div>
          </div>

          {/* Baujahr + Wohnfläche + Energieausweis */}
          <div className="grid grid-cols-3 gap-3">
            <div>
              <div className="flex items-center gap-1.5 mb-1">
                {confidenceDot(confidence.baujahr ?? 0)}
                <label className="text-xs font-medium text-navy">Baujahr</label>
              </div>
              <input
                type="number"
                value={local.baujahr ?? ""}
                onChange={(e) => patch({ baujahr: parseInt(e.target.value) || null })}
                className={ic("baujahr")}
                placeholder="1972"
                min={1800}
                max={new Date().getFullYear()}
              />
            </div>
            <div>
              <div className="flex items-center gap-1.5 mb-1">
                {confidenceDot(confidence.gesamtflaeche ?? 0)}
                <label className="text-xs font-medium text-navy">Wohnfläche m²</label>
              </div>
              <input
                type="number"
                value={local.gesamtflaeche ?? ""}
                onChange={(e) => patch({ gesamtflaeche: parseFloat(e.target.value) || null })}
                className={ic("gesamtflaeche")}
                placeholder="350"
                min={0}
              />
            </div>
            <div>
              <div className="flex items-center gap-1.5 mb-1">
                {confidenceDot(confidence.energieausweis ?? 0)}
                <label className="text-xs font-medium text-navy">Energieausweis</label>
              </div>
              <select
                value={local.energieausweis ?? ""}
                onChange={(e) => patch({ energieausweis: (e.target.value as ExtractedObjektData["energieausweis"]) || null })}
                className={ic("energieausweis")}
              >
                <option value="">— unbekannt —</option>
                {ENERGIEAUSWEIS_OPTIONS.map((o) => (
                  <option key={o} value={o}>{o}</option>
                ))}
              </select>
            </div>
          </div>
        </div>
      </div>

      {/* Section: Einheiten (collapsible, only if extracted) */}
      {local.einheiten.length > 0 && (
        <div className="border border-gray-200 rounded-xl overflow-hidden">
          <button
            type="button"
            className="w-full flex items-center justify-between px-4 py-3 bg-gray-50 hover:bg-gray-100 transition-colors text-left"
            onClick={() => setEinheitenOpen(!einheitenOpen)}
          >
            <span className="text-sm font-semibold text-navy">
              Einheiten ({local.einheiten.length})
            </span>
            <span className="text-gray-400 text-xs">{einheitenOpen ? "▲" : "▼"}</span>
          </button>

          {einheitenOpen && (
            <div className="p-4 space-y-4">
              {local.einheiten.map((unit, idx) => (
                <div key={idx} className="bg-gray-50 rounded-xl p-3 space-y-3">
                  <div className="grid grid-cols-3 gap-2">
                    <div>
                      <label className="block text-xs font-medium text-navy mb-1">Whg-Nr.</label>
                      <input
                        type="text"
                        value={unit.whgNr}
                        onChange={(e) => updateUnit(idx, { whgNr: e.target.value })}
                        className="w-full border border-gray-200 rounded-lg px-2 py-1.5 text-sm"
                        placeholder="1a"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-medium text-navy mb-1">Etage</label>
                      <input
                        type="number"
                        value={unit.etage}
                        onChange={(e) => updateUnit(idx, { etage: parseInt(e.target.value) || 0 })}
                        className="w-full border border-gray-200 rounded-lg px-2 py-1.5 text-sm"
                        min={-1}
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-medium text-navy mb-1">Zimmer</label>
                      <input
                        type="number"
                        value={unit.zimmer}
                        onChange={(e) => updateUnit(idx, { zimmer: parseFloat(e.target.value) || 0 })}
                        className="w-full border border-gray-200 rounded-lg px-2 py-1.5 text-sm"
                        step={0.5}
                        min={1}
                      />
                    </div>
                  </div>
                  <div className="grid grid-cols-3 gap-2">
                    <div>
                      <label className="block text-xs font-medium text-navy mb-1">Fläche m²</label>
                      <input
                        type="number"
                        value={unit.flaeche}
                        onChange={(e) => updateUnit(idx, { flaeche: parseFloat(e.target.value) || 0 })}
                        className="w-full border border-gray-200 rounded-lg px-2 py-1.5 text-sm"
                        min={0}
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-medium text-navy mb-1">Kaltmiete €</label>
                      <input
                        type="number"
                        value={unit.kaltmiete}
                        onChange={(e) => updateUnit(idx, { kaltmiete: parseFloat(e.target.value) || 0 })}
                        className="w-full border border-gray-200 rounded-lg px-2 py-1.5 text-sm"
                        min={0}
                        step={50}
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-medium text-navy mb-1">NK-Voraus. €</label>
                      <input
                        type="number"
                        value={unit.nkVorauszahlung}
                        onChange={(e) => updateUnit(idx, { nkVorauszahlung: parseFloat(e.target.value) || 0 })}
                        className="w-full border border-gray-200 rounded-lg px-2 py-1.5 text-sm"
                        min={0}
                        step={10}
                      />
                    </div>
                  </div>
                  {local.einheiten.length > 1 && (
                    <div className="flex justify-end">
                      <button
                        type="button"
                        onClick={() => removeUnit(idx)}
                        className="text-xs text-red-500 hover:text-red-700 transition-colors"
                      >
                        Einheit entfernen
                      </button>
                    </div>
                  )}
                </div>
              ))}

              <button
                type="button"
                onClick={addUnit}
                className="w-full border border-dashed border-gray-300 rounded-xl py-2 text-xs text-teal font-medium hover:border-teal/50 transition-colors"
              >
                + Einheit hinzufügen
              </button>
            </div>
          )}
        </div>
      )}

      {/* Confidence legend */}
      <div className="flex items-center gap-4 text-xs text-gray-500 bg-gray-50 rounded-xl px-4 py-3">
        <span className="font-medium text-navy">Zuverlässigkeit:</span>
        <span className="flex items-center gap-1.5"><span className="inline-block w-2 h-2 rounded-full bg-green-500" /> Hoch (&gt;80%)</span>
        <span className="flex items-center gap-1.5"><span className="inline-block w-2 h-2 rounded-full bg-amber-400" /> Prüfen (&lt;80%)</span>
        <span className="flex items-center gap-1.5"><span className="inline-block w-2 h-2 rounded-full bg-gray-300" /> Nicht gefunden</span>
      </div>

      {/* Actions */}
      <button
        type="button"
        onClick={() => onAccept(local)}
        className="w-full py-3 bg-teal text-white font-semibold rounded-xl hover:bg-teal/90 transition-colors"
      >
        Daten übernehmen &amp; weiter →
      </button>

      <div className="text-center">
        <button
          type="button"
          onClick={onManual}
          className="text-sm text-gray-500 hover:text-teal transition-colors underline underline-offset-2"
        >
          Lieber manuell eingeben
        </button>
      </div>
    </div>
  );
}

// ─── Loading Overlay ──────────────────────────────────────────────────────────
function LoadingOverlay() {
  return (
    <div className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-white/90 backdrop-blur-sm">
      <div className="flex flex-col items-center gap-4">
        {/* Spinner */}
        <svg
          className="w-12 h-12 text-teal animate-spin"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
        >
          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
          <path
            className="opacity-75"
            fill="currentColor"
            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
          />
        </svg>
        <div className="text-center">
          <p className="text-navy font-semibold text-lg">KI liest Ihre Dokumente&hellip;</p>
          <p className="text-text-light text-sm mt-1">Das dauert in der Regel 10–30 Sekunden.</p>
        </div>
      </div>
    </div>
  );
}

// ─── Main Wizard Component ────────────────────────────────────────────────────
export default function ObjektOnboardingPage() {
  const router = useRouter();
  const [step, setStep] = useState(1);
  const [data, setData] = useState<WizardData>(defaultData());
  const [submitting, setSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);

  // ── Upload flow state ──────────────────────────────────────────────────────
  const [uploadMode, setUploadMode] = useState<"select" | "uploading" | "review" | "manual">("select");
  const [extractedData, setExtractedData] = useState<ExtractedObjektData | null>(null);
  const [extractedConfidence, setExtractedConfidence] = useState<Record<string, number>>({});
  const [uploadFiles, setUploadFiles] = useState<File[]>([]);
  const [extracting, setExtracting] = useState(false);
  const [extractError, setExtractError] = useState<string | null>(null);

  // Load draft from localStorage
  useEffect(() => {
    try {
      const saved = localStorage.getItem(DRAFT_KEY);
      if (saved) {
        const parsed = JSON.parse(saved) as Partial<WizardData>;
        setData((prev) => ({ ...prev, ...parsed }));
      }
    } catch {
      // ignore
    }
  }, []);

  // Save draft on every data change
  const saveDraft = useCallback((d: WizardData) => {
    try {
      // Don't persist file dataUrls (too large)
      const toSave = {
        ...d,
        dokumente: {
          ...d.dokumente,
          mietvertraege: d.dokumente.mietvertraege.map((f) => ({ ...f, dataUrl: undefined })),
          grundrisse: d.dokumente.grundrisse.map((f) => ({ ...f, dataUrl: undefined })),
          energieausweis: d.dokumente.energieausweis
            ? { ...d.dokumente.energieausweis, dataUrl: undefined }
            : null,
          nka: d.dokumente.nka ? { ...d.dokumente.nka, dataUrl: undefined } : null,
        },
      };
      localStorage.setItem(DRAFT_KEY, JSON.stringify(toSave));
    } catch {
      // ignore quota errors
    }
  }, []);

  function update(patch: Partial<WizardData>) {
    setData((prev) => {
      const next = { ...prev, ...patch };
      saveDraft(next);
      return next;
    });
  }

  function next() {
    if (step < TOTAL_STEPS) setStep((s) => s + 1);
  }

  function back() {
    if (step > 1) setStep((s) => s - 1);
  }

  // ── Convert File → base64 dataUrl ─────────────────────────────────────────
  function fileToDataUrl(file: File): Promise<string> {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onload = () => resolve(reader.result as string);
      reader.onerror = reject;
      reader.readAsDataURL(file);
    });
  }

  // ── Trigger AI extraction ─────────────────────────────────────────────────
  async function handleAnalyze() {
    if (uploadFiles.length === 0) return;
    setExtracting(true);
    setExtractError(null);

    try {
      const converted = await Promise.all(
        uploadFiles.map(async (f) => ({
          name: f.name,
          type: f.type,
          dataUrl: await fileToDataUrl(f),
        }))
      );

      const res = await fetch("/api/portal/onboarding/extract-objekt", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ files: converted }),
      });

      const json = await res.json();

      if (!res.ok) {
        throw new Error(json.error ?? "KI-Extraktion fehlgeschlagen.");
      }

      setExtractedData(json.extracted);
      setExtractedConfidence(json.confidence ?? {});
      setUploadMode("review");
    } catch (err) {
      setExtractError(
        err instanceof Error
          ? err.message
          : "Unbekannter Fehler — bitte erneut versuchen."
      );
    } finally {
      setExtracting(false);
    }
  }

  // ── Accept extracted data → populate WizardData → jump to Step 2 ──────────
  function handleAcceptExtracted(reviewed: ExtractedObjektData) {
    // Map extracted fields → WizardData
    const patch: Partial<WizardData> = {
      strasse: reviewed.strasse ?? "",
      hausnummer: reviewed.hausnummer ?? "",
      plz: reviewed.plz ?? "",
      stadt: reviewed.stadt ?? "",
      immobilientyp: mapImmobilientyp(reviewed.immobilientyp),
      baujahr: reviewed.baujahr ?? 1970,
      gesamtflaeche: reviewed.gesamtflaeche ?? 0,
      energieausweis: reviewed.energieausweis ?? "C",
    };

    // Map extracted einheiten → WizardData units
    if (reviewed.einheiten && reviewed.einheiten.length > 0) {
      patch.einheiten = reviewed.einheiten.map((u) => ({
        whgNr: u.whgNr ?? "",
        etage: u.etage ?? 0,
        zimmer: u.zimmer ?? 2,
        flaeche: u.flaeche ?? 0,
        kaltmiete: u.kaltmiete ?? 0,
        nkVorauszahlung: u.nkVorauszahlung ?? 150,
      }));
    }

    update(patch);
    setUploadMode("manual");
    setStep(2); // Skip Step 1 (Grunddaten already filled), go to Einheiten
  }

  // ── "Lieber manuell eingeben" from review — pre-fill Step 1 ───────────────
  function handleReviewManual() {
    if (extractedData) {
      update({
        strasse: extractedData.strasse ?? "",
        hausnummer: extractedData.hausnummer ?? "",
        plz: extractedData.plz ?? "",
        stadt: extractedData.stadt ?? "",
        immobilientyp: mapImmobilientyp(extractedData.immobilientyp),
        baujahr: extractedData.baujahr ?? 1970,
        gesamtflaeche: extractedData.gesamtflaeche ?? 0,
        energieausweis: extractedData.energieausweis ?? "C",
      });
    }
    setUploadMode("manual");
    setStep(1);
  }

  async function handleSubmit() {
    setSubmitting(true);
    setSubmitError(null);

    try {
      const payload = {
        grunddaten: {
          strasse: data.strasse,
          hausnummer: data.hausnummer,
          plz: data.plz,
          stadt: data.stadt,
          immobilientyp: data.immobilientyp,
          baujahr: data.baujahr,
          gesamtflaeche: data.gesamtflaeche,
          energieausweis: data.energieausweis,
        },
        einheiten: data.einheiten,
        mieter: data.mieter,
        zaehlerstande: data.zaehlerstande,
        handwerker: data.handwerker,
        versicherung: data.versicherung,
      };

      const res = await fetch("/api/portal/properties/create", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (!res.ok) {
        const err = await res.json().catch(() => ({}));
        throw new Error(err.error ?? "Fehler beim Anlegen");
      }

      // Clear draft
      try { localStorage.removeItem(DRAFT_KEY); } catch { /* ignore */ }

      // Redirect to dashboard with success param
      router.push("/portal/dashboard?onboarded=1");
    } catch (err) {
      setSubmitError(
        err instanceof Error ? err.message : "Unbekannter Fehler — bitte erneut versuchen"
      );
    } finally {
      setSubmitting(false);
    }
  }

  const score = calcScore(data);

  // ── Upload mode screens (replace entire step content) ─────────────────────
  if (uploadMode !== "manual") {
    return (
      <div className="flex-1">
        {extracting && <LoadingOverlay />}

        <div className="max-w-2xl mx-auto px-6 py-8">
          {/* Header */}
          <div className="mb-6">
            <h1 className="text-2xl font-bold text-navy">Ihr Objekt erfassen</h1>
            <p className="text-text-light text-sm mt-0.5">
              {uploadMode === "select"
                ? "Wie möchten Sie vorgehen?"
                : uploadMode === "uploading"
                ? "Laden Sie ein oder mehrere Dokumente hoch — die KI extrahiert die Daten automatisch."
                : "Bitte prüfen und ggf. korrigieren — dann weiter."}
            </p>
          </div>

          {/* Back arrow on upload/review screens */}
          {uploadMode !== "select" && (
            <button
              type="button"
              onClick={() =>
                uploadMode === "uploading"
                  ? setUploadMode("select")
                  : setUploadMode("uploading")
              }
              className="flex items-center gap-1.5 text-sm text-gray-500 hover:text-navy transition-colors mb-6"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              Zurück
            </button>
          )}

          {/* Card */}
          <div className="bg-white border border-gray-100 rounded-2xl p-6 shadow-sm">
            {uploadMode === "select" && (
              <>
                <h2 className="font-bold text-navy text-lg mb-5">Wie möchten Sie vorgehen?</h2>
                <UploadModeSelect
                  onSelectUpload={() => setUploadMode("uploading")}
                  onSelectManual={() => { setUploadMode("manual"); setStep(1); }}
                />
              </>
            )}

            {uploadMode === "uploading" && (
              <>
                <h2 className="font-bold text-navy text-lg mb-5">Dokumente hochladen</h2>
                <UploadScreen
                  files={uploadFiles}
                  setFiles={setUploadFiles}
                  onAnalyze={handleAnalyze}
                  extractError={extractError}
                  onManual={() => { setUploadMode("manual"); setStep(1); }}
                />
              </>
            )}

            {uploadMode === "review" && extractedData && (
              <>
                <h2 className="font-bold text-navy text-lg mb-1">KI hat folgende Daten gefunden</h2>
                <p className="text-text-light text-sm mb-5">Bitte prüfen und ggf. korrigieren — dann weiter.</p>
                <ReviewScreen
                  extracted={extractedData}
                  confidence={extractedConfidence}
                  onAccept={handleAcceptExtracted}
                  onManual={handleReviewManual}
                />
              </>
            )}
          </div>
        </div>
      </div>
    );
  }

  // ── Normal wizard (uploadMode === "manual") ───────────────────────────────
  return (
    <div className="flex-1">
      <div className="max-w-2xl mx-auto px-6 py-8">
        {/* Header */}
        <div className="mb-6">
          <h1 className="text-2xl font-bold text-navy">Neues Objekt hinzufügen</h1>
          <p className="text-text-light text-sm mt-0.5">
            {STEP_TITLES[step - 1]}
          </p>
        </div>

        {/* Progress */}
        <ProgressBar step={step} />

        {/* Step content */}
        <div className="bg-white border border-gray-100 rounded-2xl p-6 shadow-sm mb-6">
          <h2 className="font-bold text-navy text-lg mb-5">{STEP_TITLES[step - 1]}</h2>

          {step === 1 && <Step1 data={data} update={update} />}
          {step === 2 && <Step2 data={data} update={update} />}
          {step === 3 && <Step3 data={data} update={update} />}
          {step === 4 && <Step4 data={data} update={update} />}
          {step === 5 && <Step5 data={data} update={update} />}
          {step === 6 && <Step6 data={data} update={update} />}
          {step === 7 && <Step7 data={data} update={update} />}
          {step === 8 && (
            <Step8
              data={data}
              update={update}
              score={score}
              onSubmit={handleSubmit}
              submitting={submitting}
              submitError={submitError}
            />
          )}
        </div>

        {/* Navigation */}
        <div className="flex items-center justify-between">
          <button
            type="button"
            onClick={back}
            disabled={step === 1}
            className="px-5 py-2.5 text-sm font-medium text-gray-600 bg-gray-100 rounded-xl hover:bg-gray-200 transition-colors disabled:opacity-30 disabled:cursor-not-allowed"
          >
            ← Zurück
          </button>

          <div className="flex items-center gap-2">
            {Array.from({ length: TOTAL_STEPS }, (_, i) => (
              <div
                key={i}
                className={`w-2 h-2 rounded-full transition-colors ${
                  i + 1 === step
                    ? "bg-teal"
                    : i + 1 < step
                    ? "bg-teal/40"
                    : "bg-gray-200"
                }`}
              />
            ))}
          </div>

          {step < TOTAL_STEPS ? (
            <button
              type="button"
              onClick={next}
              className="px-5 py-2.5 text-sm font-semibold bg-teal text-white rounded-xl hover:bg-teal/90 transition-colors"
            >
              Weiter →
            </button>
          ) : (
            <div className="w-24" /> /* spacer so back button stays left */
          )}
        </div>

        {/* Draft indicator */}
        <p className="text-center text-xs text-gray-400 mt-4">
          Entwurf wird automatisch gespeichert
        </p>
      </div>
    </div>
  );
}
