"use client";

import { useState, useRef, useCallback } from "react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

function DocumentIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Z" />
    </svg>
  );
}

function PlusIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
    </svg>
  );
}

function TrashIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0" />
    </svg>
  );
}

function PrinterIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M6.72 13.829c-.24.03-.48.062-.72.096m.72-.096a42.415 42.415 0 0 1 10.56 0m-10.56 0L6.34 18m10.94-4.171c.24.03.48.062.72.096m-.72-.096L17.66 18m0 0 .229 2.523a1.125 1.125 0 0 1-1.12 1.227H7.231c-.662 0-1.18-.568-1.12-1.227L6.34 18m11.318 0h1.091A2.25 2.25 0 0 0 21 15.75V9.456c0-1.081-.768-2.015-1.837-2.175a48.055 48.055 0 0 0-1.913-.247M6.34 18H5.25A2.25 2.25 0 0 1 3 15.75V9.456c0-1.081.768-2.015 1.837-2.175a48.041 48.041 0 0 1 1.913-.247m10.5 0a48.536 48.536 0 0 0-10.5 0m10.5 0V3.375c0-.621-.504-1.125-1.125-1.125h-8.25c-.621 0-1.125.504-1.125 1.125v3.659M18 10.5h.008v.008H18V10.5Zm-3 0h.008v.008H15V10.5Z" />
    </svg>
  );
}

function SparklesIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904 9 18.75l-.813-2.846a4.5 4.5 0 0 0-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 0 0 3.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 0 0 3.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 0 0-3.09 3.09ZM18.259 8.715 18 9.75l-.259-1.035a3.375 3.375 0 0 0-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 0 0 2.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 0 0 2.455 2.456L21.75 6l-1.036.259a3.375 3.375 0 0 0-2.455 2.456ZM16.894 20.567 16.5 21.75l-.394-1.183a2.25 2.25 0 0 0-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 0 0 1.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 0 0 1.423 1.423l1.183.394-1.183.394a2.25 2.25 0 0 0-1.423 1.423Z" />
    </svg>
  );
}

interface BeschlussItem {
  id: string;
  tagesordnungspunkt: string;
  beschluss: string;
  ja: number;
  nein: number;
  enthaltung: number;
}

const EMPTY_BESCHLUSS: () => BeschlussItem = () => ({
  id: crypto.randomUUID(),
  tagesordnungspunkt: "",
  beschluss: "",
  ja: 0,
  nein: 0,
  enthaltung: 0,
});

export default function BeschlussprotokollPage() {
  // Versammlungsdaten
  const [gemeinschaft, setGemeinschaft] = useState("");
  const [adresse, setAdresse] = useState("");
  const [datum, setDatum] = useState("");
  const [uhrzeit, setUhrzeit] = useState("19:00");
  const [ort, setOrt] = useState("");
  const [verwalter, setVerwalter] = useState("einfach verwaltet. GmbH");
  const [vorsitzender, setVorsitzender] = useState("");
  const [anwesende, setAnwesende] = useState("");
  const [gesamtmiteigentuemer, setGesamtmiteigentuemer] = useState(10);
  const [vertreteneAnteile, setVertreteneAnteile] = useState(600);
  const [gesamtanteile, setGesamtanteile] = useState(1000);
  const [sonstiges, setSonstiges] = useState("");

  // Beschlüsse
  const [beschluesse, setBeschluesse] = useState<BeschlussItem[]>([
    { ...EMPTY_BESCHLUSS(), tagesordnungspunkt: "Genehmigung der Jahresabrechnung", beschluss: "" },
    { ...EMPTY_BESCHLUSS(), tagesordnungspunkt: "Entlastung des Verwalters", beschluss: "" },
    { ...EMPTY_BESCHLUSS(), tagesordnungspunkt: "Wirtschaftsplan", beschluss: "" },
  ]);

  // Output
  const [protokoll, setProtokoll] = useState("");
  const [isGenerating, setIsGenerating] = useState(false);
  const [error, setError] = useState("");
  const resultRef = useRef<HTMLDivElement>(null);

  const addBeschluss = useCallback(() => {
    setBeschluesse((prev) => [...prev, EMPTY_BESCHLUSS()]);
  }, []);

  const removeBeschluss = useCallback((id: string) => {
    setBeschluesse((prev) => prev.filter((b) => b.id !== id));
  }, []);

  const updateBeschluss = useCallback(
    (id: string, field: keyof BeschlussItem, value: string | number) => {
      setBeschluesse((prev) =>
        prev.map((b) => (b.id === id ? { ...b, [field]: value } : b))
      );
    },
    []
  );

  async function handleGenerate() {
    if (!gemeinschaft || !adresse || !datum) {
      setError("Bitte füllen Sie mindestens Gemeinschaft, Adresse und Datum aus.");
      return;
    }

    setIsGenerating(true);
    setError("");
    setProtokoll("");

    try {
      const res = await fetch("/api/tools/beschlussprotokoll", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          gemeinschaft,
          adresse,
          datum,
          uhrzeit,
          ort: ort || "Gemeinschaftsraum",
          verwalter,
          vorsitzender: vorsitzender || "wird in der Versammlung gewählt",
          anwesende: anwesende || "siehe Anwesenheitsliste",
          gesamtmiteigentuemer,
          vertreteneAnteile,
          gesamtanteile,
          tagesordnung: beschluesse.map((b) => ({
            tagesordnungspunkt: b.tagesordnungspunkt,
            beschluss: b.beschluss || `Der Antrag zu "${b.tagesordnungspunkt}" wird zur Abstimmung gestellt.`,
            abstimmung: {
              ja: b.ja,
              nein: b.nein,
              enthaltung: b.enthaltung,
            },
            ergebnis:
              b.ja > b.nein ? "angenommen" : "abgelehnt",
          })),
          sonstiges,
        }),
      });

      const data = await res.json();

      if (data.error) throw new Error(data.error);

      setProtokoll(data.protokoll);
      setTimeout(() => resultRef.current?.scrollIntoView({ behavior: "smooth" }), 200);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Ein Fehler ist aufgetreten.");
    } finally {
      setIsGenerating(false);
    }
  }

  function handlePrint() {
    const printWindow = window.open("", "_blank");
    if (!printWindow) return;
    printWindow.document.write(`
      <!DOCTYPE html>
      <html lang="de">
      <head>
        <meta charset="utf-8" />
        <title>Beschlussprotokoll — ${gemeinschaft}</title>
        <style>
          body { font-family: "Times New Roman", serif; max-width: 700px; margin: 40px auto; line-height: 1.6; font-size: 12pt; color: #1a1a1a; }
          h1 { font-size: 16pt; text-align: center; margin-bottom: 24px; }
          h2 { font-size: 13pt; margin-top: 20px; border-bottom: 1px solid #ccc; padding-bottom: 4px; }
          pre { white-space: pre-wrap; font-family: inherit; }
          .footer { margin-top: 60px; font-size: 10pt; color: #666; text-align: center; border-top: 1px solid #ccc; padding-top: 12px; }
          @media print { .footer { display: none; } body { margin: 20px; } }
        </style>
      </head>
      <body>
        <pre>${protokoll.replace(/</g, "&lt;").replace(/>/g, "&gt;")}</pre>
        <div class="footer">Erstellt mit einfach-verwaltet.de/beschlussprotokoll</div>
      </body>
      </html>
    `);
    printWindow.document.close();
    printWindow.print();
  }

  function handleCopy() {
    navigator.clipboard.writeText(protokoll);
  }

  const beschlussfaehigkeit =
    gesamtanteile > 0 ? ((vertreteneAnteile / gesamtanteile) * 100).toFixed(1) : "0.0";

  return (
    <>
      <Navbar />
      <main className="pt-20 min-h-screen bg-warm-white">
        {/* Hero */}
        <section className="bg-gradient-to-b from-navy to-navy/90 text-white py-16">
          <div className="max-w-3xl mx-auto px-6 text-center">
            <div className="inline-flex items-center gap-2 bg-teal/20 text-teal border border-teal/30 rounded-full px-4 py-1.5 text-sm font-medium mb-6">
              <SparklesIcon className="w-4 h-4" />
              WEG-Tool
            </div>
            <h1 className="text-3xl md:text-4xl font-bold mb-4">
              Beschlussprotokoll Generator
            </h1>
            <p className="text-lg text-white/80 max-w-xl mx-auto">
              Erstellen Sie rechtssichere Beschlussprotokolle für Ihre
              Eigentümerversammlung — in Minuten statt Stunden.
            </p>
          </div>
        </section>

        <div className="max-w-3xl mx-auto px-6 py-12 space-y-10">
          {/* Versammlungsdaten */}
          <section className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 md:p-8">
            <h2 className="text-xl font-bold text-navy mb-6 flex items-center gap-2">
              <DocumentIcon className="w-5 h-5 text-teal" />
              Versammlungsdaten
            </h2>
            <div className="grid md:grid-cols-2 gap-5">
              <div className="md:col-span-2">
                <label className="block text-sm font-medium text-navy mb-1.5">
                  WEG / Gemeinschaft *
                </label>
                <input
                  type="text"
                  value={gemeinschaft}
                  onChange={(e) => setGemeinschaft(e.target.value)}
                  placeholder="z.B. WEG Alsterstraße 42, 20354 Hamburg"
                  className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 bg-white text-navy text-sm focus:outline-none focus:border-teal focus:ring-2 focus:ring-teal/20 transition-all"
                />
              </div>
              <div className="md:col-span-2">
                <label className="block text-sm font-medium text-navy mb-1.5">
                  Adresse der Liegenschaft *
                </label>
                <input
                  type="text"
                  value={adresse}
                  onChange={(e) => setAdresse(e.target.value)}
                  placeholder="Alsterstraße 42, 20354 Hamburg"
                  className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 bg-white text-navy text-sm focus:outline-none focus:border-teal focus:ring-2 focus:ring-teal/20 transition-all"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-navy mb-1.5">
                  Datum der Versammlung *
                </label>
                <input
                  type="date"
                  value={datum}
                  onChange={(e) => setDatum(e.target.value)}
                  className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 bg-white text-navy text-sm focus:outline-none focus:border-teal focus:ring-2 focus:ring-teal/20 transition-all"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-navy mb-1.5">
                  Uhrzeit
                </label>
                <input
                  type="time"
                  value={uhrzeit}
                  onChange={(e) => setUhrzeit(e.target.value)}
                  className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 bg-white text-navy text-sm focus:outline-none focus:border-teal focus:ring-2 focus:ring-teal/20 transition-all"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-navy mb-1.5">
                  Versammlungsort
                </label>
                <input
                  type="text"
                  value={ort}
                  onChange={(e) => setOrt(e.target.value)}
                  placeholder="Gemeinschaftsraum / Videokonferenz"
                  className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 bg-white text-navy text-sm focus:outline-none focus:border-teal focus:ring-2 focus:ring-teal/20 transition-all"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-navy mb-1.5">
                  Verwalter
                </label>
                <input
                  type="text"
                  value={verwalter}
                  onChange={(e) => setVerwalter(e.target.value)}
                  className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 bg-white text-navy text-sm focus:outline-none focus:border-teal focus:ring-2 focus:ring-teal/20 transition-all"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-navy mb-1.5">
                  Versammlungsleiter
                </label>
                <input
                  type="text"
                  value={vorsitzender}
                  onChange={(e) => setVorsitzender(e.target.value)}
                  placeholder="Name des Vorsitzenden"
                  className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 bg-white text-navy text-sm focus:outline-none focus:border-teal focus:ring-2 focus:ring-teal/20 transition-all"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-navy mb-1.5">
                  Anwesende Eigentümer
                </label>
                <input
                  type="text"
                  value={anwesende}
                  onChange={(e) => setAnwesende(e.target.value)}
                  placeholder="Namen oder 'siehe Anwesenheitsliste'"
                  className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 bg-white text-navy text-sm focus:outline-none focus:border-teal focus:ring-2 focus:ring-teal/20 transition-all"
                />
              </div>
            </div>

            {/* Beschlussfähigkeit */}
            <div className="mt-6 pt-6 border-t border-gray-100">
              <h3 className="text-sm font-semibold text-navy mb-4">
                Beschlussfähigkeit (§ 25 WEG)
              </h3>
              <div className="grid grid-cols-3 gap-4">
                <div>
                  <label className="block text-xs text-text-light mb-1">
                    Miteigentümer gesamt
                  </label>
                  <input
                    type="number"
                    min={1}
                    value={gesamtmiteigentuemer}
                    onChange={(e) => setGesamtmiteigentuemer(Number(e.target.value))}
                    className="w-full px-3 py-2.5 rounded-lg border-2 border-gray-200 text-navy text-sm focus:outline-none focus:border-teal"
                  />
                </div>
                <div>
                  <label className="block text-xs text-text-light mb-1">
                    Vertretene Anteile
                  </label>
                  <input
                    type="number"
                    min={0}
                    value={vertreteneAnteile}
                    onChange={(e) => setVertreteneAnteile(Number(e.target.value))}
                    className="w-full px-3 py-2.5 rounded-lg border-2 border-gray-200 text-navy text-sm focus:outline-none focus:border-teal"
                  />
                </div>
                <div>
                  <label className="block text-xs text-text-light mb-1">
                    Gesamtanteile (MEA)
                  </label>
                  <input
                    type="number"
                    min={1}
                    value={gesamtanteile}
                    onChange={(e) => setGesamtanteile(Number(e.target.value))}
                    className="w-full px-3 py-2.5 rounded-lg border-2 border-gray-200 text-navy text-sm focus:outline-none focus:border-teal"
                  />
                </div>
              </div>
              <div className="mt-3 text-sm">
                <span className="text-text-light">Beschlussfähigkeit: </span>
                <span
                  className={`font-semibold ${
                    Number(beschlussfaehigkeit) > 50
                      ? "text-green-600"
                      : "text-amber-600"
                  }`}
                >
                  {beschlussfaehigkeit}%
                </span>
                <span className="text-text-light text-xs ml-2">
                  {Number(beschlussfaehigkeit) > 50
                    ? "(Mehrheit der MEA vertreten)"
                    : "(§ 25 Abs. 4 WEG n.F.: auch ohne Mehrheit beschlussfähig)"}
                </span>
              </div>
            </div>
          </section>

          {/* Tagesordnung & Beschlüsse */}
          <section className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 md:p-8">
            <h2 className="text-xl font-bold text-navy mb-6 flex items-center gap-2">
              <DocumentIcon className="w-5 h-5 text-teal" />
              Tagesordnungspunkte & Beschlüsse
            </h2>

            <div className="space-y-6">
              {beschluesse.map((b, i) => (
                <div
                  key={b.id}
                  className="border border-gray-100 rounded-xl p-5 bg-gray-50/50"
                >
                  <div className="flex items-start justify-between mb-3">
                    <span className="inline-flex items-center justify-center w-7 h-7 rounded-full bg-navy text-white text-xs font-bold">
                      {i + 1}
                    </span>
                    {beschluesse.length > 1 && (
                      <button
                        type="button"
                        onClick={() => removeBeschluss(b.id)}
                        className="text-gray-400 hover:text-red-500 transition-colors p-1"
                        title="Entfernen"
                      >
                        <TrashIcon className="w-4 h-4" />
                      </button>
                    )}
                  </div>

                  <div className="space-y-3">
                    <div>
                      <label className="block text-xs font-medium text-navy mb-1">
                        Tagesordnungspunkt
                      </label>
                      <input
                        type="text"
                        value={b.tagesordnungspunkt}
                        onChange={(e) =>
                          updateBeschluss(b.id, "tagesordnungspunkt", e.target.value)
                        }
                        placeholder="z.B. Genehmigung der Jahresabrechnung 2025"
                        className="w-full px-3 py-2.5 rounded-lg border-2 border-gray-200 text-navy text-sm focus:outline-none focus:border-teal"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-medium text-navy mb-1">
                        Beschlusstext (optional — wird automatisch formuliert)
                      </label>
                      <textarea
                        value={b.beschluss}
                        onChange={(e) =>
                          updateBeschluss(b.id, "beschluss", e.target.value)
                        }
                        rows={2}
                        placeholder="Exakter Beschlusstext, oder leer lassen für automatische Formulierung"
                        className="w-full px-3 py-2.5 rounded-lg border-2 border-gray-200 text-navy text-sm focus:outline-none focus:border-teal resize-none"
                      />
                    </div>
                    <div className="grid grid-cols-3 gap-3">
                      <div>
                        <label className="block text-xs text-green-700 font-medium mb-1">
                          Ja-Stimmen
                        </label>
                        <input
                          type="number"
                          min={0}
                          value={b.ja}
                          onChange={(e) =>
                            updateBeschluss(b.id, "ja", Number(e.target.value))
                          }
                          className="w-full px-3 py-2 rounded-lg border-2 border-green-200 bg-green-50 text-navy text-sm text-center focus:outline-none focus:border-green-400"
                        />
                      </div>
                      <div>
                        <label className="block text-xs text-red-700 font-medium mb-1">
                          Nein-Stimmen
                        </label>
                        <input
                          type="number"
                          min={0}
                          value={b.nein}
                          onChange={(e) =>
                            updateBeschluss(b.id, "nein", Number(e.target.value))
                          }
                          className="w-full px-3 py-2 rounded-lg border-2 border-red-200 bg-red-50 text-navy text-sm text-center focus:outline-none focus:border-red-400"
                        />
                      </div>
                      <div>
                        <label className="block text-xs text-gray-600 font-medium mb-1">
                          Enthaltungen
                        </label>
                        <input
                          type="number"
                          min={0}
                          value={b.enthaltung}
                          onChange={(e) =>
                            updateBeschluss(b.id, "enthaltung", Number(e.target.value))
                          }
                          className="w-full px-3 py-2 rounded-lg border-2 border-gray-200 bg-gray-50 text-navy text-sm text-center focus:outline-none focus:border-gray-400"
                        />
                      </div>
                    </div>
                    <div className="text-xs text-text-light">
                      Ergebnis:{" "}
                      <span
                        className={`font-semibold ${
                          b.ja > b.nein ? "text-green-600" : b.ja === b.nein && b.ja === 0 ? "text-gray-400" : "text-red-600"
                        }`}
                      >
                        {b.ja > b.nein
                          ? "ANGENOMMEN"
                          : b.ja === b.nein && b.ja === 0
                          ? "—"
                          : "ABGELEHNT"}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <button
              type="button"
              onClick={addBeschluss}
              className="mt-4 flex items-center gap-2 text-teal text-sm font-medium hover:text-teal/80 transition-colors"
            >
              <PlusIcon className="w-4 h-4" />
              Tagesordnungspunkt hinzufügen
            </button>
          </section>

          {/* Sonstiges */}
          <section className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 md:p-8">
            <h2 className="text-lg font-bold text-navy mb-4">Sonstiges / Anmerkungen</h2>
            <textarea
              value={sonstiges}
              onChange={(e) => setSonstiges(e.target.value)}
              rows={3}
              placeholder="Zusätzliche Anmerkungen, die im Protokoll erwähnt werden sollen..."
              className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 bg-white text-navy text-sm focus:outline-none focus:border-teal focus:ring-2 focus:ring-teal/20 transition-all resize-none"
            />
          </section>

          {/* Generate Button */}
          {error && (
            <div className="bg-red-50 border border-red-200 rounded-xl p-4 text-sm text-red-700">
              {error}
            </div>
          )}

          <button
            onClick={handleGenerate}
            disabled={isGenerating}
            className="w-full flex items-center justify-center gap-3 bg-navy text-white py-4 px-6 rounded-xl font-semibold text-lg hover:bg-navy/85 transition-all hover:shadow-lg disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isGenerating ? (
              <>
                <svg
                  className="animate-spin h-5 w-5"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
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
                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                  />
                </svg>
                Protokoll wird erstellt...
              </>
            ) : (
              <>
                <SparklesIcon className="w-5 h-5" />
                Beschlussprotokoll erstellen
              </>
            )}
          </button>

          {/* Result */}
          {protokoll && (
            <div ref={resultRef} className="space-y-4">
              <div className="flex items-center justify-between">
                <h2 className="text-xl font-bold text-navy">
                  Ihr Beschlussprotokoll
                </h2>
                <div className="flex gap-2">
                  <button
                    onClick={handleCopy}
                    className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg border border-gray-200 text-sm font-medium text-navy hover:bg-gray-50 transition-colors"
                  >
                    <DocumentIcon className="w-4 h-4" />
                    Kopieren
                  </button>
                  <button
                    onClick={handlePrint}
                    className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg bg-teal text-white text-sm font-medium hover:bg-teal/90 transition-colors"
                  >
                    <PrinterIcon className="w-4 h-4" />
                    Drucken / PDF
                  </button>
                </div>
              </div>
              <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 md:p-8">
                <pre className="whitespace-pre-wrap text-sm text-navy leading-relaxed font-[system-ui]">
                  {protokoll}
                </pre>
              </div>
            </div>
          )}

          {/* SEO Content */}
          <section className="mt-16 space-y-8 text-sm text-text-light leading-relaxed">
            <div>
              <h2 className="text-lg font-bold text-navy mb-3">
                Was ist ein Beschlussprotokoll?
              </h2>
              <p>
                Ein Beschlussprotokoll (auch Ergebnisprotokoll) dokumentiert die
                gefassten Beschlüsse einer Eigentümerversammlung nach dem
                Wohnungseigentumsgesetz (WEG). Es ist die Mindestanforderung
                nach § 24 Abs. 6 WEG und dient als rechtliche Grundlage für alle
                Beschlüsse der Wohnungseigentümergemeinschaft. Im Gegensatz zum
                Verlaufsprotokoll werden nur die Ergebnisse der Abstimmungen
                festgehalten — nicht der Diskussionsverlauf.
              </p>
            </div>
            <div>
              <h2 className="text-lg font-bold text-navy mb-3">
                Was muss ein Beschlussprotokoll enthalten?
              </h2>
              <ul className="list-disc list-inside space-y-1">
                <li>Ort, Datum und Uhrzeit der Versammlung</li>
                <li>Name des Versammlungsleiters und des Protokollführers</li>
                <li>Feststellung der Beschlussfähigkeit (§ 25 WEG)</li>
                <li>Vollständige Tagesordnung</li>
                <li>Exakter Wortlaut jedes Beschlusses</li>
                <li>Abstimmungsergebnis (Ja / Nein / Enthaltung)</li>
                <li>Unterschrift des Versammlungsleiters (§ 24 Abs. 6 WEG)</li>
                <li>Gegenzeichnung durch einen anwesenden Eigentümer</li>
              </ul>
            </div>
            <div>
              <h2 className="text-lg font-bold text-navy mb-3">
                Beschlussfähigkeit nach WEG-Reform 2020
              </h2>
              <p>
                Seit der WEG-Reform 2020 ist die Eigentümerversammlung
                grundsätzlich immer beschlussfähig, unabhängig von der Anzahl der
                anwesenden oder vertretenen Miteigentumsanteile (§ 25 Abs. 1 WEG
                n.F.). Die alte Regelung, wonach mehr als die Hälfte der MEA
                vertreten sein mussten, wurde abgeschafft. Dies erleichtert die
                Beschlussfassung erheblich — besonders bei WEGs mit vielen
                Eigentümern, die häufig unter geringer Beteiligung litten.
              </p>
            </div>
          </section>
        </div>
      </main>
      <Footer />
    </>
  );
}
