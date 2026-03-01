/**
 * DATEV Buchungsjournal Export
 *
 * Generates DATEV-compatible CSV exports for Hausverwaltung financial transactions.
 * Format: DATEV Buchungsstapel (Feldkatalog per DATEV-Format-Description v700)
 *
 * Standard account mapping for Hausverwaltung (SKR 49 / SKR 04):
 * - Mieteinnahmen:   8400 (Erlöse aus Vermietung)
 * - Nebenkosten:     4000 (Betriebskosten/Nebenkosten)
 * - Instandhaltung:  4130 (Instandhaltungsaufwendungen)
 * - Hausmeister:     4200 (Hausmeisterdienste)
 * - Versicherung:    4360 (Versicherungen)
 * - Verwaltungskosten: 4800 (Allgemeine Verwaltungskosten)
 * - Kautionen:       1590 (Mieterkautionen)
 * - Bank:            1200 (Bank laufende Konten)
 */

import { db } from "@/lib/db";
import { financialTransactions } from "@/lib/db/schema";
import { and, gte, lte, eq } from "drizzle-orm";

export interface DatevTransaction {
  umsatz: number;           // Amount in EUR (positive)
  sollHaben: "S" | "H";    // Debit/Credit indicator
  konto: string;            // Main account (Buchungskonto)
  gegenkonto: string;       // Offset account (Gegenkonto)
  belegdatum: string;       // Document date (DD.MM)
  belegfeld1: string;       // Document reference (max 12 chars)
  buchungstext: string;     // Transaction description (max 60 chars)
  kostenstelle?: string;    // Cost center (optional)
}

export interface DatevExportResult {
  header: string;
  rows: DatevTransaction[];
  csv: string;
  transactionCount: number;
  totalIncome: number;
  totalExpenses: number;
}

// DATEV account mapping for Hausverwaltung
const ACCOUNT_MAPPING: Record<string, { konto: string; gegenkonto: string; sollHaben: "S" | "H" }> = {
  rent_received: { konto: "8400", gegenkonto: "1200", sollHaben: "H" },      // Mieteinnahmen
  nebenkosten: { konto: "4000", gegenkonto: "1200", sollHaben: "S" },         // Betriebskosten
  maintenance: { konto: "4130", gegenkonto: "1200", sollHaben: "S" },         // Instandhaltung
  expense: { konto: "4800", gegenkonto: "1200", sollHaben: "S" },             // Allg. Verwaltungskosten
  deposit: { konto: "1590", gegenkonto: "1200", sollHaben: "H" },             // Kautionen
  refund: { konto: "1200", gegenkonto: "1590", sollHaben: "S" },              // Rückzahlungen
  mahnung: { konto: "4800", gegenkonto: "1200", sollHaben: "S" },             // Mahngebühren
  insurance: { konto: "4360", gegenkonto: "1200", sollHaben: "S" },           // Versicherungen
  hausmeister: { konto: "4200", gegenkonto: "1200", sollHaben: "S" },         // Hausmeisterdienste
  default: { konto: "4800", gegenkonto: "1200", sollHaben: "S" },             // Fallback
};

// Map BKV category to DATEV account
const BKV_ACCOUNT_MAPPING: Record<string, string> = {
  "wasserversorgung": "4010",
  "entwässerung": "4020",
  "heizung": "4030",
  "warmwasser": "4040",
  "aufzug": "4050",
  "strassenreinigung": "4060",
  "muellabfuhr": "4070",
  "gebäudereinigung": "4080",
  "gartenpflege": "4090",
  "beleuchtung": "4100",
  "schornstein": "4110",
  "versicherungen": "4360",
  "hausmeister": "4200",
};

function formatDate(date: Date | string | null): string {
  if (!date) return "";
  const d = new Date(date);
  const day = String(d.getDate()).padStart(2, "0");
  const month = String(d.getMonth() + 1).padStart(2, "0");
  return `${day}${month}`; // DATEV format: DDMM
}

function formatAmount(cents: number): string {
  return (Math.abs(cents) / 100).toFixed(2).replace(".", ",");
}

function sanitizeText(text: string, maxLen: number): string {
  return text
    .replace(/["\n\r;]/g, " ")
    .trim()
    .substring(0, maxLen);
}

function getAccountMapping(
  type: string,
  bkvCategory?: string | null
): { konto: string; gegenkonto: string; sollHaben: "S" | "H" } {
  // BKV category overrides type-based mapping for expense items
  if (bkvCategory && type !== "rent_received") {
    const bkvKonto = BKV_ACCOUNT_MAPPING[bkvCategory.toLowerCase()];
    if (bkvKonto) {
      return { konto: bkvKonto, gegenkonto: "1200", sollHaben: "S" };
    }
  }
  return ACCOUNT_MAPPING[type] || ACCOUNT_MAPPING.default;
}

export async function fetchTransactionsForExport(
  landlordId: string,
  from: Date,
  to: Date
) {
  const rows = await db
    .select({
      id: financialTransactions.id,
      type: financialTransactions.type,
      amountCents: financialTransactions.amountCents,
      status: financialTransactions.status,
      bkvCategory: financialTransactions.bkvCategory,
      description: financialTransactions.description,
      dueDate: financialTransactions.dueDate,
      paidAt: financialTransactions.paidAt,
      createdAt: financialTransactions.createdAt,
      propertyId: financialTransactions.propertyId,
    })
    .from(financialTransactions)
    .where(
      and(
        eq(financialTransactions.landlordId, landlordId),
        gte(financialTransactions.createdAt, from),
        lte(financialTransactions.createdAt, to)
      )
    )
    .orderBy(financialTransactions.createdAt);

  return rows;
}

export function buildDatevRows(
  transactions: Awaited<ReturnType<typeof fetchTransactionsForExport>>,
  year: number
): DatevTransaction[] {
  return transactions
    .filter((tx) => tx.status === "confirmed" || tx.status === "pending")
    .map((tx) => {
      const mapping = getAccountMapping(tx.type, tx.bkvCategory);
      const date = tx.paidAt || tx.dueDate || tx.createdAt;
      const docRef = tx.id.replace(/-/g, "").substring(0, 12).toUpperCase();
      const descriptionParts = [];
      if (tx.description) descriptionParts.push(tx.description);
      if (tx.bkvCategory) descriptionParts.push(`(${tx.bkvCategory})`);
      const buchungstext = sanitizeText(
        descriptionParts.join(" ") || `${tx.type} ${year}`,
        60
      );

      return {
        umsatz: Math.abs(tx.amountCents) / 100,
        sollHaben: mapping.sollHaben,
        konto: mapping.konto,
        gegenkonto: mapping.gegenkonto,
        belegdatum: formatDate(date),
        belegfeld1: docRef,
        buchungstext,
      };
    });
}

/**
 * Generate DATEV Buchungsstapel header block
 *
 * Format version 700 header:
 * "EXTF";700;21;"Buchungsstapel";[Formatversion];[Erstellt am];...
 */
export function buildDatevHeader(
  beraterNr: string,
  mandantNr: string,
  wirtschaftsjahrBeginn: string,
  sachkontenlänge: number,
  datumVon: string,
  datumBis: string,
  bezeichnung: string,
  diktatkürzel: string,
  buchungstyp: number, // 1=Finanzbuchhaltung
  rechnungslegungszweck: number,
  festschreibung: number
): string {
  const now = new Date();
  const erstellt = `${now.getFullYear()}${String(now.getMonth() + 1).padStart(2, "0")}${String(now.getDate()).padStart(2, "0")}${String(now.getHours()).padStart(2, "0")}${String(now.getMinutes()).padStart(2, "0")}${String(now.getSeconds()).padStart(2, "0")}000`;

  const header1 = [
    '"EXTF"',
    "700",
    "21",
    '"Buchungsstapel"',
    "12",         // Formatversion
    erstellt,
    "",           // Importiert
    "",           // Herkunft
    '"einfach verwaltet."',
    "",           // Exportiert von
    beraterNr,
    mandantNr,
    wirtschaftsjahrBeginn,
    sachkontenlänge,
    datumVon,
    datumBis,
    `"${bezeichnung}"`,
    `"${diktatkürzel}"`,
    buchungstyp,
    rechnungslegungszweck,
    festschreibung,
    "",           // WKZ (Währungskennzeichen)
    "",           // Derivatskennzeichen
    "",           // SKR
    "",           // Branchenlösungs-ID
    "",           // Anwendungsinformation
    "",           // Änderungskennung
    "EUR",
  ].join(";");

  const header2 = [
    "Umsatz (ohne Soll/Haben-Kz)",
    "Soll/Haben-Kennzeichen",
    "WKZ Umsatz",
    "Kurs",
    "Basis-Umsatz",
    "WKZ Basis-Umsatz",
    "Konto",
    "Gegenkonto (ohne BU-Schlüssel)",
    "BU-Schlüssel",
    "Belegdatum",
    "Belegfeld 1",
    "Belegfeld 2",
    "Skonto",
    "Buchungstext",
    "Postensperre",
    "Adressnummer",
    "Adressnummer",
    "Kostenstelle 1",
    "Kostenstelle 2",
    "KOST-Menge",
    "Skonto-Schlüssel",
    "Generalumkehr (GU)",
    "Steuersatz",
    "Land",
    "Abrechnungsreferenz",
    "BVV-Position (Betriebsvermögensvergleich)",
    "EU-Land u. UStID",
    "EU-Steuersatz",
  ]
    .map((h) => `"${h}"`)
    .join(";");

  return header1 + "\r\n" + header2;
}

export function buildDatevCsvRows(rows: DatevTransaction[]): string {
  return rows
    .map((row) => {
      return [
        formatAmount(row.umsatz * 100), // Convert back to format with comma
        row.sollHaben,
        "EUR",        // WKZ Umsatz
        "",           // Kurs
        "",           // Basis-Umsatz
        "",           // WKZ Basis-Umsatz
        row.konto,
        row.gegenkonto,
        "",           // BU-Schlüssel
        row.belegdatum,
        row.belegfeld1,
        "",           // Belegfeld 2
        "",           // Skonto
        `"${row.buchungstext}"`,
        "",           // Postensperre
        "",           // Adressnummer
        "",           // Adressnummer
        row.kostenstelle || "",  // Kostenstelle 1
        "",           // Kostenstelle 2
        "",           // KOST-Menge
        "",           // Skonto-Schlüssel
        "",           // Generalumkehr
        "",           // Steuersatz
        "",           // Land
      ].join(";");
    })
    .join("\r\n");
}

export async function generateDatevExport(
  landlordId: string,
  from: Date,
  to: Date,
  options: {
    beraterNr?: string;
    mandantNr?: string;
    sachkontenlänge?: number;
  } = {}
): Promise<DatevExportResult> {
  const {
    beraterNr = "00000",
    mandantNr = "00001",
    sachkontenlänge = 4,
  } = options;

  const year = from.getFullYear();
  const datumVon = `${year}${String(from.getMonth() + 1).padStart(2, "0")}01`;
  const datumBis = `${to.getFullYear()}${String(to.getMonth() + 1).padStart(2, "0")}${String(to.getDate()).padStart(2, "0")}`;
  const wirtschaftsjahrBeginn = `${year}0101`;

  const transactions = await fetchTransactionsForExport(landlordId, from, to);
  const rows = buildDatevRows(transactions, year);

  const header = buildDatevHeader(
    beraterNr,
    mandantNr,
    wirtschaftsjahrBeginn,
    sachkontenlänge,
    datumVon,
    datumBis,
    `Buchungsjournal ${from.toLocaleDateString("de-DE", { month: "long", year: "numeric" })}`,
    "EV",
    1,
    0,
    0
  );

  const dataRows = buildDatevCsvRows(rows);
  const csv = header + "\r\n" + dataRows;

  const totalIncome = transactions
    .filter((tx) => tx.type === "rent_received" || tx.type === "deposit")
    .reduce((sum, tx) => sum + Math.abs(tx.amountCents), 0);

  const totalExpenses = transactions
    .filter((tx) => tx.type !== "rent_received" && tx.type !== "deposit")
    .reduce((sum, tx) => sum + Math.abs(tx.amountCents), 0);

  return {
    header,
    rows,
    csv,
    transactionCount: rows.length,
    totalIncome,
    totalExpenses,
  };
}
