"use client";

import { useState, useCallback, useEffect } from "react";

// --- Types ---
interface CostCategory {
  id: string;
  name: string;
  description?: string;
  betrkvRef?: string;
  value: string;
  isCustom?: boolean;
}

interface CalculationResult {
  totalYearly: number;
  perSqmYearly: number;
  perSqmMonthly: number;
  perUnitYearly: number;
  perUnitMonthly: number;
  categoryBreakdown: Array<{
    name: string;
    value: number;
    percentage: number;
  }>;
}

// --- Icons ---
function CalculatorIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
    </svg>
  );
}

function PlusIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
    </svg>
  );
}

function TrashIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
    </svg>
  );
}

function PrinterIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M17 17h2a2 2 0 002-2v-4a2 2 0 00-2-2H5a2 2 0 00-2 2v4a2 2 0 002 2h2m2 4h6a2 2 0 002-2v-4a2 2 0 00-2-2H9a2 2 0 00-2 2v4a2 2 0 002 2zm8-12V5a2 2 0 00-2-2H9a2 2 0 00-2 2v4h10z" />
    </svg>
  );
}

function ChevronDownIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
    </svg>
  );
}

function ChevronUpIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M5 15l7-7 7 7" />
    </svg>
  );
}

function BuildingIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
    </svg>
  );
}

function HomeIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
    </svg>
  );
}

function CalendarIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
    </svg>
  );
}

function InfoIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
  );
}

// --- Default Categories based on §2 BetrKV ---
const defaultCategories: Omit<CostCategory, "value" | "id">[] = [
  { name: "Grundsteuer", description: "Grunderwerbsteuer und Grundsteuer", betrkvRef: "§2 Nr. 1 BetrKV" },
  { name: "Wasser/Abwasser", description: "Versorgung mit Wasser und Entsorgung", betrkvRef: "§2 Nr. 2 BetrKV" },
  { name: "Heizung/Warmwasser", description: "Heizung und Warmwasserbereitung", betrkvRef: "§2 Nr. 3 BetrKV" },
  { name: "Straßenreinigung/Müllabfuhr", description: "Schmutz- und Schmutzwasserbeseitigung", betrkvRef: "§2 Nr. 4, 5 BetrKV" },
  { name: "Gebäudereinigung", description: "Reinigung der Gemeinschaftsflächen", betrkvRef: "§2 Nr. 6 BetrKV" },
  { name: "Gartenpflege", description: "Pflege von Gärten und Höfen", betrkvRef: "§2 Nr. 7 BetrKV" },
  { name: "Beleuchtung", description: "Strom für Gemeinschaftsflächen", betrkvRef: "§2 Nr. 8 BetrKV" },
  { name: "Aufzug", description: "Betrieb und Wartung des Aufzugs (falls vorhanden)", betrkvRef: "§2 Nr. 9 BetrKV" },
  { name: "Schornsteinreinigung", description: "Kehrung und Überprüfung", betrkvRef: "§2 Nr. 10 BetrKV" },
  { name: "Versicherungen", description: "Gebäude-, Haftpflicht und Rechtsschutz", betrkvRef: "§2 Nr. 11 BetrKV" },
  { name: "Hauswart/Hausmeister", description: "Hauswart- und Hausmeisterleistungen", betrkvRef: "§2 Nr. 12 BetrKV" },
  { name: "Gemeinschaftsantenne/Internet", description: "Antennenanlage und Kabelanschluss", betrkvRef: "§2 Nr. 13 BetrKV" },
  { name: "Sicherheit", description: "Wach- und Sicherheitsleistungen", betrkvRef: "§2 Nr. 14 BetrKV" },
  { name: "Sachverständige", description: "Kosten für Sachverständige", betrkvRef: "§2 Nr. 15, 16 BetrKV" },
  { name: "Sonstiges", description: "Weitere Betriebskosten nach §2 Nr. 17 BetrKV", betrkvRef: "§2 Nr. 17 BetrKV" },
];

// --- Component ---
export function BKACalculator() {
  const [categories, setCategories] = useState<CostCategory[]>(() =>
    defaultCategories.map((cat, i) => ({
      ...cat,
      id: `default-${i}`,
      value: "",
    }))
  );
  
  const [totalArea, setTotalArea] = useState<string>("");
  const [unitCount, setUnitCount] = useState<string>("");
  const [year, setYear] = useState<string>(new Date().getFullYear().toString());
  const [showAllCategories, setShowAllCategories] = useState(true);
  const [expandedCategories, setExpandedCategories] = useState<Set<string>>(new Set());
  const [result, setResult] = useState<CalculationResult | null>(null);
  const [showComparison, setShowComparison] = useState(false);
  const [customCatCounter, setCustomCatCounter] = useState(0);

  // Calculate on every change
  useEffect(() => {
    const area = parseFloat(totalArea) || 0;
    const units = parseInt(unitCount) || 0;
    
    const validCategories = categories
      .filter(cat => !expandedCategories.has(cat.id))
      .map(cat => ({
        ...cat,
        numValue: parseFloat(cat.value) || 0,
      }));

    const totalYearly = validCategories.reduce((sum, cat) => sum + cat.numValue, 0);
    
    const perSqmYearly = area > 0 ? totalYearly / area : 0;
    const perSqmMonthly = perSqmYearly / 12;
    const perUnitYearly = units > 0 ? totalYearly / units : 0;
    const perUnitMonthly = perUnitYearly / 12;

    const breakdown = totalYearly > 0 
      ? validCategories
          .filter(cat => cat.numValue > 0)
          .map(cat => ({
            name: cat.name,
            value: cat.numValue,
            percentage: (cat.numValue / totalYearly) * 100,
          }))
          .sort((a, b) => b.value - a.value)
      : [];

    setResult({
      totalYearly,
      perSqmYearly,
      perSqmMonthly,
      perUnitYearly,
      perUnitMonthly,
      categoryBreakdown: breakdown,
    });

    setShowComparison(area > 0 && totalYearly > 0);
  }, [categories, totalArea, unitCount, expandedCategories]);

  const updateCategoryValue = useCallback((id: string, value: string) => {
    setCategories(prev => prev.map(cat => 
      cat.id === id ? { ...cat, value } : cat
    ));
  }, []);

  const updateCategoryName = useCallback((id: string, name: string) => {
    setCategories(prev => prev.map(cat => 
      cat.id === id ? { ...cat, name } : cat
    ));
  }, []);

  const addCustomCategory = useCallback(() => {
    setCategories(prev => [
      ...prev,
      {
        id: `custom-${customCatCounter}`,
        name: "",
        value: "",
        isCustom: true,
        description: "Zusätzliche Betriebskosten",
      },
    ]);
    setCustomCatCounter(c => c + 1);
  }, [customCatCounter]);

  const removeCategory = useCallback((id: string) => {
    setCategories(prev => prev.filter(cat => cat.id !== id));
  }, []);

  const toggleCategoryVisibility = useCallback((id: string) => {
    setExpandedCategories(prev => {
      const next = new Set(prev);
      if (next.has(id)) {
        next.delete(id);
      } else {
        next.add(id);
      }
      return next;
    });
  }, []);

  const handlePrint = useCallback(() => {
    window.print();
  }, []);

  const formatCurrency = (value: number) => {
    return new Intl.NumberFormat("de-DE", {
      style: "currency",
      currency: "EUR",
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    }).format(value);
  };

  const visibleCategories = showAllCategories ? categories : categories.slice(0, 6);
  const expandedIds = expandedCategories;

  // Hamburg average: ~2.80 €/m²/Monat (empirica 2024)
  const hamburgAverageMonthly = 2.80;
  const currentMonthly = result?.perSqmMonthly || 0;
  const comparisonPercent = currentMonthly > 0 
    ? ((currentMonthly - hamburgAverageMonthly) / hamburgAverageMonthly) * 100 
    : 0;

  return (
    <div className="space-y-8">
      {/* Input Section */}
      <div className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden print:shadow-none">
        <div className="p-6 border-b border-gray-100 bg-gradient-to-r from-navy/5 to-transparent print:bg-none print:border-none">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-navy flex items-center justify-center">
              <CalculatorIcon className="w-5 h-5 text-white" />
            </div>
            <div>
              <h2 className="text-xl font-bold text-navy font-serif">Ihre Betriebskosten</h2>
              <p className="text-sm text-text-light">Geben Sie die Kosten nach §2 BetrKV ein</p>
            </div>
          </div>
        </div>

        <div className="p-6 space-y-6">
          {/* Building Info */}
          <div className="grid sm:grid-cols-3 gap-4 p-4 bg-gray-50 rounded-xl print:bg-white print:border print:border-gray-200">
            <div>
              <label className="block text-sm font-medium text-navy mb-2 flex items-center gap-1.5">
                <BuildingIcon className="w-4 h-4 text-teal" />
                Gesamtwohnfläche
              </label>
              <div className="relative">
                <input
                  type="number"
                  value={totalArea}
                  onChange={(e) => setTotalArea(e.target.value)}
                  placeholder="500"
                  className="w-full px-4 py-3 pr-12 rounded-xl border-2 border-gray-200 bg-white text-navy text-sm focus:outline-none focus:border-teal focus:ring-2 focus:ring-teal/20 transition-all"
                />
                <span className="absolute right-4 top-1/2 -translate-y-1/2 text-text-light text-sm">m²</span>
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-navy mb-2 flex items-center gap-1.5">
                <HomeIcon className="w-4 h-4 text-teal" />
                Anzahl Einheiten
              </label>
              <div className="relative">
                <input
                  type="number"
                  value={unitCount}
                  onChange={(e) => setUnitCount(e.target.value)}
                  placeholder="10"
                  className="w-full px-4 py-3 pr-12 rounded-xl border-2 border-gray-200 bg-white text-navy text-sm focus:outline-none focus:border-teal focus:ring-2 focus:ring-teal/20 transition-all"
                />
                <span className="absolute right-4 top-1/2 -translate-y-1/2 text-text-light text-sm">Stk</span>
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-navy mb-2 flex items-center gap-1.5">
                <CalendarIcon className="w-4 h-4 text-teal" />
                Abrechnungsjahr
              </label>
              <select
                value={year}
                onChange={(e) => setYear(e.target.value)}
                className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 bg-white text-navy text-sm focus:outline-none focus:border-teal focus:ring-2 focus:ring-teal/20 transition-all"
              >
                <option value="2026">2026</option>
                <option value="2025">2025</option>
                <option value="2024">2024</option>
                <option value="2023">2023</option>
              </select>
            </div>
          </div>

          {/* Toggle visibility */}
          <div className="flex items-center justify-between">
            <span className="text-sm text-text-light">
              {visibleCategories.filter(c => !expandedIds.has(c.id)).length} aktive Kategorien
            </span>
            <button
              onClick={() => setShowAllCategories(!showAllCategories)}
              className="text-sm text-teal font-medium hover:text-navy transition-colors flex items-center gap-1"
            >
              {showAllCategories ? (
                <>Weniger anzeigen <ChevronUpIcon className="w-4 h-4" /></>
              ) : (
                <>Alle anzeigen <ChevronDownIcon className="w-4 h-4" /></>
              )}
            </button>
          </div>

          {/* Categories Grid */}
          <div className="grid sm:grid-cols-2 gap-4">
            {visibleCategories.map((category) => {
              const isHidden = expandedIds.has(category.id);
              return (
                <div
                  key={category.id}
                  className={`relative group rounded-xl border-2 transition-all ${
                    isHidden
                      ? "border-dashed border-gray-200 bg-gray-50/50 opacity-60"
                      : "border-gray-200 bg-white hover:border-teal/30 hover:shadow-sm"
                  }`}
                >
                  <div className="p-4">
                    <div className="flex items-start justify-between gap-2 mb-2">
                      {category.isCustom ? (
                        <input
                          type="text"
                          value={category.name}
                          onChange={(e) => updateCategoryName(category.id, e.target.value)}
                          placeholder="Kostenbezeichnung"
                          className="flex-1 text-sm font-medium text-navy bg-transparent border-b border-gray-300 focus:border-teal focus:outline-none px-0 py-1"
                        />
                      ) : (
                        <div className="flex-1">
                          <span className="text-sm font-medium text-navy block">{category.name}</span>
                          {category.description && (
                            <span className="text-xs text-text-light">{category.description}</span>
                          )}
                        </div>
                      )}
                      <div className="flex items-center gap-1">
                        <button
                          onClick={() => toggleCategoryVisibility(category.id)}
                          className={`p-1.5 rounded-lg transition-colors ${
                            isHidden 
                              ? "text-gray-400 hover:bg-gray-200" 
                              : "text-gray-400 hover:bg-teal/10 hover:text-teal"
                          }`}
                          title={isHidden ? "Kategorie einblenden" : "Kategorie ausblenden"}
                        >
                          {isHidden ? <ChevronDownIcon className="w-4 h-4" /> : <ChevronUpIcon className="w-4 h-4" />}
                        </button>
                        {category.isCustom && (
                          <button
                            onClick={() => removeCategory(category.id)}
                            className="p-1.5 rounded-lg text-gray-400 hover:bg-red-100 hover:text-red-500 transition-colors"
                            title="Kategorie entfernen"
                          >
                            <TrashIcon className="w-4 h-4" />
                          </button>
                        )}
                      </div>
                    </div>
                    {!isHidden && (
                      <div className="relative">
                        <input
                          type="number"
                          value={category.value}
                          onChange={(e) => updateCategoryValue(category.id, e.target.value)}
                          placeholder="0,00"
                          step="0.01"
                          disabled={isHidden}
                          className="w-full px-3 py-2 pr-10 rounded-lg border border-gray-200 bg-white text-navy text-sm focus:outline-none focus:border-teal focus:ring-2 focus:ring-teal/20 transition-all disabled:bg-gray-100 disabled:cursor-not-allowed"
                        />
                        <span className="absolute right-3 top-1/2 -translate-y-1/2 text-text-light text-xs">€/Jahr</span>
                      </div>
                    )}
                    {isHidden && (
                      <div className="text-xs text-text-light py-2">Ausgeblendet — wird nicht berechnet</div>
                    )}
                  </div>
                  {category.betrkvRef && (
                    <div className="px-4 pb-3">
                      <span className="text-[10px] text-gray-400 uppercase tracking-wider">{category.betrkvRef}</span>
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {/* Add Custom Category */}
          <button
            onClick={addCustomCategory}
            className="w-full py-3 rounded-xl border-2 border-dashed border-gray-300 text-text-light hover:border-teal hover:text-teal hover:bg-teal/5 transition-all flex items-center justify-center gap-2"
          >
            <PlusIcon className="w-4 h-4" />
            Weitere Kategorie hinzufügen
          </button>
        </div>
      </div>

      {/* Results Section */}
      {result && (
        <div className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden print:shadow-none">
          <div className="p-6 border-b border-gray-100 bg-gradient-to-r from-teal/5 to-transparent print:bg-none print:border-none">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
              <div>
                <h2 className="text-xl font-bold text-navy font-serif">Ergebnis</h2>
                <p className="text-sm text-text-light">Berechnung für {year}</p>
              </div>
              <button
                onClick={handlePrint}
                className="flex items-center justify-center gap-2 px-4 py-2 rounded-lg bg-navy text-white text-sm font-medium hover:bg-navy/85 transition-all print:hidden"
              >
                <PrinterIcon className="w-4 h-4" />
                Ergebnis drucken / PDF
              </button>
            </div>
          </div>

          <div className="p-6 space-y-8">
            {/* Main Result Cards */}
            <div className="grid sm:grid-cols-3 gap-4">
              <div className="bg-navy/5 rounded-xl p-5 text-center">
                <div className="text-sm text-text-light mb-1">Summe Betriebskosten</div>
                <div className="text-3xl font-bold text-navy font-serif">{formatCurrency(result.totalYearly)}</div>
                <div className="text-xs text-text-light mt-1">pro Jahr</div>
              </div>
              <div className="bg-teal/10 rounded-xl p-5 text-center">
                <div className="text-sm text-text-light mb-1">Kosten pro m²</div>
                <div className="text-3xl font-bold text-navy font-serif">{formatCurrency(result.perSqmMonthly)}</div>
                <div className="text-xs text-text-light mt-1">
                  monatlich ({formatCurrency(result.perSqmYearly)}/Jahr)
                </div>
              </div>
              <div className="bg-amber/10 rounded-xl p-5 text-center">
                <div className="text-sm text-text-light mb-1">Kosten pro Einheit</div>
                <div className="text-3xl font-bold text-navy font-serif">{formatCurrency(result.perUnitMonthly)}</div>
                <div className="text-xs text-text-light mt-1">
                  monatlich ({formatCurrency(result.perUnitYearly)}/Jahr)
                </div>
              </div>
            </div>

            {/* Hamburg Comparison */}
            {showComparison && comparisonPercent !== 0 && (
              <div className={`rounded-xl p-4 flex items-start gap-3 ${
                comparisonPercent > 20 
                  ? "bg-red-50 border border-red-200" 
                  : comparisonPercent > 0 
                    ? "bg-amber-50 border border-amber-200" 
                    : "bg-green-50 border border-green-200"
              }`}>
                <InfoIcon className={`w-5 h-5 flex-shrink-0 mt-0.5 ${
                  comparisonPercent > 20 ? "text-red-500" : comparisonPercent > 0 ? "text-amber-500" : "text-green-600"
                }`} />
                <div className="flex-1">
                  <p className="text-sm font-medium text-navy">
                    Vergleich mit Hamburger Durchschnitt
                  </p>
                  <p className="text-sm text-text-light mt-1">
                    Ihre Betriebskosten ({formatCurrency(currentMonthly)}/m²/Monat) liegen{" "}
                    {Math.abs(comparisonPercent).toFixed(0)}% {" "}
                    {comparisonPercent > 0 ? "über" : "unter"} dem Hamburger Durchschnitt von ~2,80 €/m²/Monat
                    <span className="text-xs text-text-light block mt-0.5">Quelle: empirica 2024</span>
                  </p>
                </div>
              </div>
            )}

            {/* Category Breakdown */}
            {result.categoryBreakdown.length > 0 && (
              <div>
                <h3 className="text-lg font-semibold text-navy mb-4 font-serif">Kostenaufstellung</h3>
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="border-b border-gray-200">
                        <th className="text-left py-2 px-3 text-xs font-semibold text-text-light uppercase tracking-wider">Kategorie</th>
                        <th className="text-right py-2 px-3 text-xs font-semibold text-text-light uppercase tracking-wider">Betrag (€/Jahr)</th>
                        <th className="text-right py-2 px-3 text-xs font-semibold text-text-light uppercase tracking-wider">Anteil</th>
                      </tr>
                    </thead>
                    <tbody>
                      {result.categoryBreakdown.map((item, i) => (
                        <tr key={i} className="border-b border-gray-100 last:border-0 hover:bg-gray-50">
                          <td className="py-3 px-3 text-sm text-navy">{item.name}</td>
                          <td className="py-3 px-3 text-sm text-navy text-right font-medium">{formatCurrency(item.value)}</td>
                          <td className="py-3 px-3 text-sm text-right">
                            <span className="inline-flex items-center gap-2">
                              <span className="w-16 h-2 bg-gray-200 rounded-full overflow-hidden">
                                <span 
                                  className="h-full bg-teal rounded-full block"
                                  style={{ width: `${Math.min(item.percentage, 100)}%` }}
                                />
                              </span>
                              <span className="text-text-light text-xs w-12">{item.percentage.toFixed(1)}%</span>
                            </span>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                    <tfoot>
                      <tr className="border-t-2 border-gray-200 bg-gray-50">
                        <td className="py-3 px-3 text-sm font-semibold text-navy">Gesamt</td>
                        <td className="py-3 px-3 text-sm font-bold text-navy text-right">{formatCurrency(result.totalYearly)}</td>
                        <td className="py-3 px-3 text-right text-sm font-semibold text-navy">100%</td>
                      </tr>
                    </tfoot>
                  </table>
                </div>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
