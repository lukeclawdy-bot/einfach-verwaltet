/**
 * POST /api/portal/vertrag/send-email
 *
 * Sendet den Hausverwaltungsvertrag als E-Mail-Anhang an den Vermieter.
 * Subject: "Ihr Hausverwaltungsvertrag — einfach verwaltet."
 *
 * Body: { toEmail, toName, feePerUnit, startDate, ownerName, ownerAddress?, propertyAddress, units, verwaltungstyp? }
 *
 * Auth: JWT-Cookie „portal_session" oder „ev-demo-session" (via middleware)
 * — landlordId wird als x-landlord-id Header injiziert.
 */

import { NextRequest, NextResponse } from 'next/server';
import { headers } from 'next/headers';
import { Resend } from 'resend';
import { generateVertragHtml } from '@/lib/pdf/vertrag-generator';

function getResend() {
  return new Resend(process.env.RESEND_API_KEY ?? 'placeholder');
}

// ─── Handler ─────────────────────────────────────────────────────────────────

export async function POST(req: NextRequest) {
  try {
    // ── 1. Auth ─────────────────────────────────────────────────────────────
    const hdrs = await headers();
    const landlordId = hdrs.get('x-landlord-id');

    if (!landlordId) {
      return NextResponse.json({ error: 'Nicht autorisiert.' }, { status: 401 });
    }

    // ── 2. Parse body ───────────────────────────────────────────────────────
    let body: {
      toEmail?: string;
      toName?: string;
      feePerUnit?: number;
      startDate?: string;
      ownerName?: string;
      ownerAddress?: string;
      propertyAddress?: string;
      units?: number;
      verwaltungstyp?: 'WEG' | 'Miet' | 'Gewerbe';
    };

    try {
      body = await req.json();
    } catch {
      return NextResponse.json({ error: 'Ungültige Anfrage.' }, { status: 400 });
    }

    const {
      toEmail,
      toName,
      feePerUnit,
      startDate,
      ownerName,
      ownerAddress,
      propertyAddress,
      units,
      verwaltungstyp = 'Miet',
    } = body;

    // ── 3. Validate ─────────────────────────────────────────────────────────
    if (!toEmail || !feePerUnit || !startDate || !ownerName || !propertyAddress || !units) {
      return NextResponse.json(
        {
          error:
            'toEmail, feePerUnit, startDate, ownerName, propertyAddress und units sind erforderlich.',
        },
        { status: 400 },
      );
    }

    // ── 4. Generate HTML contract ────────────────────────────────────────────
    const htmlDoc = generateVertragHtml({
      ownerName,
      ownerAddress,
      propertyAddress,
      units,
      verwaltungstyp: verwaltungstyp as 'WEG' | 'Miet' | 'Gewerbe',
      feePerUnit,
      startDate: new Date(startDate),
      generatedAt: new Date(),
    });

    const monthlyFee = (feePerUnit * units).toLocaleString('de-DE', {
      style: 'currency',
      currency: 'EUR',
      minimumFractionDigits: 2,
    });

    const startDateFormatted = new Date(startDate).toLocaleDateString('de-DE', {
      day: '2-digit',
      month: '2-digit',
      year: 'numeric',
    });

    // ── 5. Send professional German email with PDF attachment ────────────────
    const resend = getResend();
    const { error } = await resend.emails.send({
      from: 'einfach verwaltet <noreply@immo.einfach-verwaltet.de>',
      to: toEmail,
      subject: 'Ihr Hausverwaltungsvertrag — einfach verwaltet.',
      html: `<!DOCTYPE html>
<html lang="de">
<head><meta charset="UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1"></head>
<body style="margin:0;padding:0;background-color:#f4f4f5;font-family:system-ui,-apple-system,sans-serif;">
  <table width="100%" cellpadding="0" cellspacing="0" style="background:#f4f4f5;padding:32px 0;">
    <tr>
      <td align="center">
        <table width="600" cellpadding="0" cellspacing="0" style="background:#ffffff;border-radius:12px;overflow:hidden;box-shadow:0 1px 3px rgba(0,0,0,0.1);">
          <!-- Header -->
          <tr>
            <td style="background:#1a1a2e;padding:24px 32px;">
              <span style="font-size:20px;font-weight:700;color:#ffffff;">einfach <span style="color:#0d9488;">verwaltet.</span></span>
            </td>
          </tr>
          <!-- Body -->
          <tr>
            <td style="padding:32px;">
              <h2 style="margin:0 0 16px;font-size:20px;color:#1a1a2e;font-weight:700;">
                Ihr Hausverwaltungsvertrag ist bereit
              </h2>
              <p style="margin:0 0 12px;color:#374151;line-height:1.65;font-size:15px;">
                Sehr geehrte${toName ? `r Herr/Frau ${toName}` : ''},
              </p>
              <p style="margin:0 0 12px;color:#374151;line-height:1.65;font-size:15px;">
                vielen Dank für Ihr Vertrauen in <strong>einfach verwaltet.</strong> Im Anhang finden Sie Ihren 
                Hausverwaltungsvertrag für <strong>${propertyAddress}</strong>.
              </p>

              <!-- Contract summary box -->
              <div style="background:#f8fafc;border:1px solid #e2e8f0;border-radius:8px;padding:20px;margin:20px 0;">
                <div style="font-size:12px;color:#6b7280;font-weight:600;text-transform:uppercase;letter-spacing:0.8px;margin-bottom:12px;">
                  Vertragsübersicht
                </div>
                <table width="100%" cellpadding="0" cellspacing="0" style="font-size:14px;">
                  <tr>
                    <td style="padding:5px 0;color:#6b7280;width:40%;">Objekt:</td>
                    <td style="padding:5px 0;font-weight:600;color:#1a1a2e;">${propertyAddress}</td>
                  </tr>
                  <tr>
                    <td style="padding:5px 0;color:#6b7280;">Einheiten:</td>
                    <td style="padding:5px 0;font-weight:600;color:#1a1a2e;">${units} Einheit${Number(units) !== 1 ? 'en' : ''}</td>
                  </tr>
                  <tr>
                    <td style="padding:5px 0;color:#6b7280;">Monatliche Vergütung:</td>
                    <td style="padding:5px 0;font-weight:600;color:#1a1a2e;">${monthlyFee} zzgl. MwSt.</td>
                  </tr>
                  <tr>
                    <td style="padding:5px 0;color:#6b7280;">Vertragsbeginn:</td>
                    <td style="padding:5px 0;font-weight:600;color:#1a1a2e;">${startDateFormatted}</td>
                  </tr>
                </table>
              </div>

              <!-- Next steps -->
              <h3 style="margin:24px 0 12px;font-size:16px;color:#1a1a2e;font-weight:700;">Nächste Schritte</h3>
              <ol style="margin:0;padding-left:20px;color:#374151;font-size:14px;line-height:1.8;">
                <li style="margin-bottom:8px;">
                  <strong>Vertrag ausdrucken</strong> — Bitte drucken Sie den beigefügten Vertrag zweimal aus.
                </li>
                <li style="margin-bottom:8px;">
                  <strong>Beide Exemplare unterschreiben</strong> — Unterzeichnen Sie beide Ausfertigungen mit Datum.
                </li>
                <li style="margin-bottom:8px;">
                  <strong>Ein Exemplar per Post zurücksenden</strong> — An unsere Adresse (siehe unten). Das zweite Exemplar behalten Sie als Ihrer Ausfertigung.
                </li>
                <li style="margin-bottom:8px;">
                  <strong>Scan hochladen (optional)</strong> — Laden Sie einen Scan des unterschriebenen Vertrags direkt in Ihr Kundenportal hoch, damit wir schneller starten können.
                </li>
              </ol>

              <!-- Return address -->
              <div style="background:#f0fdf4;border:1px solid #bbf7d0;border-radius:8px;padding:16px;margin:20px 0;font-size:14px;color:#1a1a2e;line-height:1.7;">
                <strong>Rücksendeadresse:</strong><br/>
                RVLT Ventures GmbH — einfach verwaltet.<br/>
                Singapurstr. 19<br/>
                20457 Hamburg
              </div>

              <p style="margin:16px 0 8px;color:#374151;line-height:1.65;font-size:14px;">
                Bei Fragen stehen wir Ihnen jederzeit gerne zur Verfügung. Antworten Sie einfach auf diese E-Mail oder 
                schreiben Sie uns unter 
                <a href="mailto:hallo@einfach-verwaltet.de" style="color:#0d9488;text-decoration:none;">
                  hallo@einfach-verwaltet.de
                </a>.
              </p>
              <p style="margin:20px 0 0;color:#374151;font-size:14px;line-height:1.65;">
                Wir freuen uns auf die Zusammenarbeit und darauf, Ihre Immobilie professionell für Sie zu verwalten.<br/><br/>
                Mit freundlichen Grüßen,<br/>
                <strong>Lukas Schmitz</strong><br/>
                Geschäftsführer<br/>
                einfach verwaltet. — RVLT Ventures GmbH
              </p>
            </td>
          </tr>
          <!-- Footer -->
          <tr>
            <td style="background:#f8fafc;border-top:1px solid #e2e8f0;padding:20px 32px;">
              <p style="margin:0;font-size:11px;color:#9ca3af;line-height:1.6;">
                RVLT Ventures GmbH · Singapurstr. 19 · 20457 Hamburg<br/>
                Amtsgericht Hamburg HRB 193395 · GF: Lukas Schmitz<br/>
                <a href="https://einfach-verwaltet.de" style="color:#6b7280;text-decoration:none;">einfach-verwaltet.de</a>
              </p>
            </td>
          </tr>
        </table>
      </td>
    </tr>
  </table>
</body>
</html>`,
      attachments: [
        {
          filename: 'Hausverwaltungsvertrag_einfach_verwaltet.html',
          content: Buffer.from(htmlDoc, 'utf-8').toString('base64'),
        },
      ],
    });

    if (error) {
      console.error('[Vertrag send-email] Resend error:', error);
      return NextResponse.json(
        { error: 'E-Mail konnte nicht gesendet werden. Bitte versuchen Sie es erneut.' },
        { status: 500 },
      );
    }

    return NextResponse.json({
      success: true,
      message: `Vertrag erfolgreich an ${toEmail} gesendet.`,
    });
  } catch (err) {
    console.error('[Vertrag send-email] Fehler:', err);
    return NextResponse.json(
      { error: 'Interner Serverfehler. Bitte versuchen Sie es erneut.' },
      { status: 500 },
    );
  }
}
