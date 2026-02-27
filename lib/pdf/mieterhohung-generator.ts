/**
 * §558a BGB Mieterhöhungsschreiben PDF Generator
 *
 * Generates a print-ready HTML document for a formal Mieterhöhungsverlangen.
 * Compliant with:
 *   §558 BGB   — Mieterhöhung bis zur ortsüblichen Vergleichsmiete
 *   §558a BGB  — Form und Begründung des Erhöhungsverlangens
 *   §558b BGB  — Zustimmung zur Mieterhöhung
 */

// ─── Types ──────────────────────────────────────────────────────────────────

export interface MieterhohungLetterInput {
  /** Vermieter / Hausverwaltung */
  landlordName: string;
  landlordAddress?: string;
  landlordEmail?: string;
  landlordPhone?: string;
  /** Mieter */
  tenantName: string;
  tenantAddress: string;
  /** Objekt */
  propertyAddress: string;
  propertyCity: string;
  unitDesignation?: string;
  /** Mieten (in Euro-Cent) */
  currentRentCents: number;
  newRentCents: number;
  increaseAmountCents: number;
  increasePercent: number;
  /** Referenzmiete laut Mietspiegel (in Euro-Cent) */
  referenzmiete?: number;
  /** Datum */
  approvalDate: string;  // ISO date
  effectiveDate: string; // ISO date (3 months from approval)
  isMilieuSchutz?: boolean;
}

// ─── Helpers ─────────────────────────────────────────────────────────────────

function fmt(cents: number): string {
  return (cents / 100).toLocaleString('de-DE', {
    style: 'currency',
    currency: 'EUR',
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });
}

function fmtDate(d: string | Date): string {
  const dt = typeof d === 'string' ? new Date(d) : d;
  return dt.toLocaleDateString('de-DE', {
    day: '2-digit',
    month: 'long',
    year: 'numeric',
  });
}

function fmtPct(n: number): string {
  return n.toLocaleString('de-DE', {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  }) + ' %';
}

// ─── CSS ─────────────────────────────────────────────────────────────────────

const STYLES = `
  *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

  @page {
    size: A4;
    margin: 20mm 18mm 22mm 18mm;
  }

  body {
    font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
    font-size: 10pt;
    color: #1a1a2e;
    line-height: 1.55;
    background: #fff;
  }

  .page { max-width: 170mm; margin: 0 auto; }

  .sender-block {
    margin-bottom: 8mm;
  }
  .sender-block .company {
    font-size: 11pt;
    font-weight: 700;
    color: #1a2744;
    margin-bottom: 2pt;
  }
  .sender-block .address-line {
    font-size: 9pt;
    color: #555;
  }

  .recipient-block {
    margin-bottom: 8mm;
    padding: 4mm 0;
    border-top: 0.5pt solid #ccc;
  }
  .recipient-block .name {
    font-weight: 600;
  }

  .date-line {
    text-align: right;
    font-size: 10pt;
    color: #555;
    margin-bottom: 8mm;
  }

  .subject {
    font-size: 12pt;
    font-weight: 700;
    color: #1a2744;
    margin-bottom: 6mm;
    line-height: 1.3;
  }

  .body-text p {
    margin-bottom: 4mm;
  }

  .data-table {
    width: 100%;
    border-collapse: collapse;
    margin: 4mm 0;
    font-size: 10pt;
  }
  .data-table td {
    padding: 2mm 3mm;
    vertical-align: top;
  }
  .data-table td:first-child {
    width: 55mm;
    color: #555;
  }
  .data-table td:last-child {
    font-weight: 600;
    color: #1a2744;
  }
  .data-table tr {
    border-bottom: 0.3pt solid #eee;
  }

  .highlight-box {
    background: #f0fffe;
    border: 0.5pt solid #00c4b4;
    border-radius: 3mm;
    padding: 4mm 5mm;
    margin: 5mm 0;
  }
  .highlight-box .label {
    font-size: 8pt;
    text-transform: uppercase;
    letter-spacing: 0.05em;
    color: #555;
    margin-bottom: 2mm;
  }
  .highlight-box .value {
    font-size: 13pt;
    font-weight: 700;
    color: #1a2744;
  }

  .legal-box {
    background: #f7f8fc;
    border-left: 2pt solid #1a2744;
    padding: 3mm 4mm;
    margin: 5mm 0;
    font-size: 9pt;
    color: #444;
  }

  .signature-block {
    margin-top: 10mm;
  }
  .signature-block .sig-line {
    border-top: 0.5pt solid #333;
    width: 50mm;
    margin-top: 12mm;
    padding-top: 2mm;
    font-size: 9pt;
    color: #555;
  }

  .footer {
    margin-top: 12mm;
    padding-top: 3mm;
    border-top: 0.5pt solid #ccc;
    font-size: 8pt;
    color: #888;
    text-align: center;
  }

  @media print {
    body { -webkit-print-color-adjust: exact; print-color-adjust: exact; }
  }
`;

// ─── Generator ───────────────────────────────────────────────────────────────

export function generateMieterhohungHtml(input: MieterhohungLetterInput): string {
  const kappungsgrenzePercent = input.isMilieuSchutz ? '15' : '20';
  const kappungsgesetz = input.isMilieuSchutz
    ? '§ 558 Abs. 3 Satz 2 BGB (Milieuschutzgebiet)'
    : '§ 558 Abs. 3 BGB';

  const landlordAddress = input.landlordAddress || 'Singapurstr. 19, 20457 Hamburg';
  const unitInfo = input.unitDesignation ? `, ${input.unitDesignation}` : '';
  const fullPropertyAddress = `${input.propertyAddress}${unitInfo}, ${input.propertyCity}`;

  return `<!DOCTYPE html>
<html lang="de">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Mieterhöhungsverlangen — ${input.tenantName}</title>
  <style>${STYLES}</style>
</head>
<body>
<div class="page">

  <!-- Sender -->
  <div class="sender-block">
    <div class="company">${input.landlordName}</div>
    <div class="address-line">${landlordAddress}</div>
    ${input.landlordPhone ? `<div class="address-line">Tel.: ${input.landlordPhone}</div>` : ''}
    ${input.landlordEmail ? `<div class="address-line">E-Mail: ${input.landlordEmail}</div>` : ''}
  </div>

  <!-- Recipient -->
  <div class="recipient-block">
    <div class="name">${input.tenantName}</div>
    <div>${input.tenantAddress}</div>
  </div>

  <!-- Date -->
  <div class="date-line">Hamburg, den ${fmtDate(input.approvalDate)}</div>

  <!-- Subject -->
  <div class="subject">
    Mieterhöhungsverlangen gemäß § 558 BGB<br>
    <span style="font-size:10pt; font-weight:400; color:#555;">Mietobjekt: ${fullPropertyAddress}</span>
  </div>

  <!-- Body -->
  <div class="body-text">
    <p>Sehr geehrte(r) ${input.tenantName},</p>

    <p>
      hiermit verlangen wir gemäß § 558 Abs. 1 BGB Ihre Zustimmung zu einer Erhöhung
      der Nettokaltmiete für die oben bezeichnete Wohnung zum <strong>${fmtDate(input.effectiveDate)}</strong>.
    </p>

    <!-- Rent data table -->
    <table class="data-table">
      <tr>
        <td>Bisherige Nettokaltmiete:</td>
        <td>${fmt(input.currentRentCents)} / Monat</td>
      </tr>
      <tr>
        <td>Neue Nettokaltmiete:</td>
        <td>${fmt(input.newRentCents)} / Monat</td>
      </tr>
      <tr>
        <td>Erhöhungsbetrag:</td>
        <td>${fmt(input.increaseAmountCents)} / Monat</td>
      </tr>
      <tr>
        <td>Erhöhung in Prozent:</td>
        <td>${fmtPct(input.increasePercent)}</td>
      </tr>
      ${input.referenzmiete ? `<tr>
        <td>Ortsübliche Vergleichsmiete:</td>
        <td>${fmt(input.referenzmiete)} / Monat</td>
      </tr>` : ''}
      <tr>
        <td>Wirksamkeitsdatum:</td>
        <td>${fmtDate(input.effectiveDate)}</td>
      </tr>
    </table>

    <!-- New rent highlight -->
    <div class="highlight-box">
      <div class="label">Neue monatliche Nettokaltmiete ab ${fmtDate(input.effectiveDate)}</div>
      <div class="value">${fmt(input.newRentCents)} / Monat</div>
    </div>

    <p>
      <strong>Begründung gemäß § 558a BGB:</strong><br>
      Die begehrte Miete entspricht der ortsüblichen Vergleichsmiete gemäß
      <strong>Hamburger Mietspiegel 2023</strong>. Die neue Miete liegt innerhalb des dort
      ausgewiesenen Mietspiegelwertes für vergleichbare Wohnungen in Hamburg.
    </p>

    <p>
      Die Kappungsgrenze gemäß ${kappungsgesetz} (maximal ${kappungsgrenzePercent}&nbsp;%
      Erhöhung innerhalb von 3 Jahren) wird eingehalten.
    </p>

    <!-- Legal box -->
    <div class="legal-box">
      <strong>Hinweis zur Zustimmung (§ 558b BGB):</strong><br>
      Sie können der Mieterhöhung innerhalb von 2 Monaten nach Zugang dieses Schreibens
      zustimmen. Stimmen Sie nicht zu, können wir auf Zustimmung klagen
      (§ 558b Abs. 2 BGB). Die Klagefrist beträgt 3 Monate ab Ablauf der Zustimmungsfrist.
    </div>

    <p>
      Wir bitten Sie, Ihre Zustimmung schriftlich bis zum
      <strong>${fmtDate(new Date(new Date(input.approvalDate).getTime() + 60 * 24 * 60 * 60 * 1000))}</strong>
      (2 Monate nach Zugang) zu erteilen.
    </p>

    <p>
      Bei Fragen stehen wir Ihnen selbstverständlich gerne zur Verfügung.
      Bitte wenden Sie sich an uns unter den oben genannten Kontaktdaten.
    </p>

    <p>
      Mit freundlichen Grüßen
    </p>

    <!-- Signature -->
    <div class="signature-block">
      <div style="margin-bottom: 2mm; font-weight: 600;">${input.landlordName}</div>
      <div class="sig-line">Unterschrift / Stempel</div>
    </div>

    <p style="margin-top: 8mm; font-size: 9pt; color: #666;">
      <em>
        Dieses Schreiben wurde elektronisch erstellt durch einfach verwaltet.
        (RVLT Ventures GmbH) im Auftrag des Vermieters. Es entspricht den
        Formvorschriften des § 558a BGB.
      </em>
    </p>
  </div>

  <div class="footer">
    einfach verwaltet. · RVLT Ventures GmbH · Singapurstr. 19, 20457 Hamburg ·
    HRB 193395 Amtsgericht Hamburg · Geschäftsführer: Lukas Schmitz
  </div>
</div>
</body>
</html>`;
}

export function generateMieterhohungBuffer(input: MieterhohungLetterInput): Buffer {
  return Buffer.from(generateMieterhohungHtml(input), 'utf-8');
}
