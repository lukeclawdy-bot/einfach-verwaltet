import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";
import { db, hasDatabase } from "../../db";
import { leads } from "../../db/schema";

interface PartnerRegistrationBody {
  name: string;
  firma?: string;
  telefon: string;
  email: string;
  kategorie: string;
  beschreibung?: string;
  standort: string;
  dsgvo: boolean;
}

let resendClient: Resend | null = null;
function getResendClient(): Resend {
  if (!resendClient) {
    const apiKey = process.env.RESEND_API_KEY;
    if (!apiKey) throw new Error("RESEND_API_KEY is not configured");
    resendClient = new Resend(apiKey);
  }
  return resendClient;
}

export async function POST(request: NextRequest) {
  try {
    const body: PartnerRegistrationBody = await request.json();

    // Validate required fields
    if (!body.name || !body.email || !body.telefon || !body.kategorie || !body.standort) {
      return NextResponse.json(
        { success: false, error: "Pflichtfelder fehlen: Name, E-Mail, Telefon, Kategorie und Standort sind erforderlich." },
        { status: 400 }
      );
    }
    if (!body.dsgvo) {
      return NextResponse.json(
        { success: false, error: "Bitte bestätigen Sie die Datenschutzerklärung." },
        { status: 400 }
      );
    }

    // Save to database if available (use leads table with quelle='partner')
    if (hasDatabase && db) {
      try {
        await db.insert(leads).values({
          name: body.name,
          email: body.email,
          telefon: body.telefon || null,
          verwaltungstyp: body.kategorie || null,
          standort: body.standort || null,
          notizen: [
            body.firma ? `Firma: ${body.firma}` : null,
            body.beschreibung ? `Beschreibung: ${body.beschreibung}` : null,
          ]
            .filter(Boolean)
            .join("\n") || null,
          quelle: "partner",
        });
      } catch (dbError) {
        console.error("Database error (continuing with email):", dbError);
      }
    }

    // Build email
    const htmlContent = `
      <div style="font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 32px; background: #ffffff;">
        <div style="text-align: center; margin-bottom: 32px;">
          <div style="display: inline-flex; align-items: center; gap: 8px; background: #1a2744; border-radius: 12px; padding: 8px 16px;">
            <span style="color: #00c4b4; font-weight: bold; font-size: 14px;">ev</span>
            <span style="color: #ffffff; font-weight: bold; font-size: 14px;">einfach verwaltet.</span>
          </div>
        </div>

        <h2 style="color: #1a2744; font-size: 22px; margin-bottom: 8px;">Neue Partner-Bewerbung 🤝</h2>
        <p style="color: #718096; margin-bottom: 24px;">Ein Dienstleister hat sich als Partner beworben.</p>

        <div style="background: #f0fffe; border: 1px solid #00c4b4; border-radius: 12px; padding: 20px; margin-bottom: 24px;">
          <h3 style="margin-top: 0; color: #1a2744; font-size: 14px; text-transform: uppercase; letter-spacing: 0.05em;">Kontakt</h3>
          <table style="width: 100%; border-collapse: collapse;">
            <tr>
              <td style="padding: 6px 0; color: #718096; width: 130px;">Name:</td>
              <td style="padding: 6px 0; font-weight: 600; color: #1a2744;">${body.name}</td>
            </tr>
            ${body.firma ? `
            <tr>
              <td style="padding: 6px 0; color: #718096;">Firma:</td>
              <td style="padding: 6px 0; font-weight: 500; color: #1a2744;">${body.firma}</td>
            </tr>` : ""}
            <tr>
              <td style="padding: 6px 0; color: #718096;">E-Mail:</td>
              <td style="padding: 6px 0;"><a href="mailto:${body.email}" style="color: #00c4b4;">${body.email}</a></td>
            </tr>
            <tr>
              <td style="padding: 6px 0; color: #718096;">Telefon:</td>
              <td style="padding: 6px 0; font-weight: 500; color: #1a2744;">${body.telefon}</td>
            </tr>
          </table>
        </div>

        <div style="background: #f7fafc; border-radius: 12px; padding: 20px; margin-bottom: 24px;">
          <h3 style="margin-top: 0; color: #1a2744; font-size: 14px; text-transform: uppercase; letter-spacing: 0.05em;">Bewerbungsdetails</h3>
          <table style="width: 100%; border-collapse: collapse;">
            <tr>
              <td style="padding: 6px 0; color: #718096; width: 130px;">Kategorie:</td>
              <td style="padding: 6px 0; font-weight: 600; color: #1a2744;">${body.kategorie}</td>
            </tr>
            <tr>
              <td style="padding: 6px 0; color: #718096;">Standort:</td>
              <td style="padding: 6px 0; font-weight: 500; color: #1a2744;">${body.standort}</td>
            </tr>
            ${body.beschreibung ? `
            <tr>
              <td style="padding: 6px 0; color: #718096; vertical-align: top;">Beschreibung:</td>
              <td style="padding: 6px 0; color: #1a2744;">${body.beschreibung.replace(/\n/g, "<br>")}</td>
            </tr>` : ""}
          </table>
        </div>

        <div style="background: #1a2744; border-radius: 12px; padding: 16px; text-align: center; margin-bottom: 24px;">
          <p style="color: #ffffff; margin: 0; font-size: 14px;">
            ✅ Bitte innerhalb von <strong>2 Werktagen</strong> antworten
          </p>
        </div>

        <div style="border-top: 1px solid #e2e8f0; padding-top: 16px; color: #718096; font-size: 12px;">
          <p style="margin: 0;">Eingegangen am ${new Date().toLocaleString("de-DE", { timeZone: "Europe/Berlin" })}</p>
          <p style="margin: 8px 0 0 0;">Quelle: einfach-verwaltet.de/partner-werden</p>
        </div>
      </div>
    `;

    // Send notification to Lukas
    try {
      const resend = getResendClient();
      await resend.emails.send({
        from: "anfrage@immo.einfach-verwaltet.de",
        to: process.env.ADMIN_EMAIL || "lukas@einfach-verwaltet.de",
        subject: `Neue Partner-Bewerbung: ${body.name} — ${body.kategorie} (${body.standort})`,
        html: htmlContent,
        replyTo: body.email,
      });
    } catch (emailError) {
      console.error("Email error (continuing):", emailError);
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Partner registration error:", error);
    const message = error instanceof Error ? error.message : "Interner Serverfehler";
    return NextResponse.json({ success: false, error: message }, { status: 500 });
  }
}
