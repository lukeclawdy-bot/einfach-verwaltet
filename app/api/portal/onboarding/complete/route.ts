import { NextRequest, NextResponse } from "next/server";
import { db } from "@/lib/db";
import { landlords, onboardingSessions } from "@/lib/db/schema";
import { eq } from "drizzle-orm";
import { createToken } from "@/lib/auth/jwt";
import { Resend } from "resend";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const {
      email,
      type,
      name,
      firma,
      kommunikation,
      aiAutonomy,
      // v7 wizard fields
      portfolioGroesse,
      struktur,
      verwaltungstyp,
      einheitenAnzahl,
      vorname,
      nachname,
      telefon,
      unternehmen,
      strasse,
      plz,
      stadt,
      mieterOption,
      mieter,
    } = body;

    // Derive email from body — wizard may pass it or it may be empty (magic-link flow)
    const rawEmail = email || body.emailAdresse || "";
    const normalised = rawEmail.toLowerCase().trim();

    // Build display name from wizard fields or fallback
    const displayName = name || (vorname && nachname ? `${vorname} ${nachname}` : null) || firma || unternehmen || null;

    let landlordId: string;

    if (normalised) {
      // Check if landlord already exists
      const existing = await db
        .select()
        .from(landlords)
        .where(eq(landlords.email, normalised))
        .limit(1);

      if (existing.length > 0) {
        landlordId = existing[0].id;
        // Update name/company if provided
        if (displayName || vorname || nachname || telefon || unternehmen || firma) {
          await db
            .update(landlords)
            .set({
              name: displayName ?? existing[0].name,
              companyName: (unternehmen || firma) ?? existing[0].companyName,
              type: type === "profi" ? "professional" : "private",
              onboardingCompleted: true,
            })
            .where(eq(landlords.id, landlordId));
        }
      } else {
        const [newLandlord] = await db
          .insert(landlords)
          .values({
            email: normalised,
            name: displayName,
            companyName: unternehmen || firma || null,
            type: type === "profi" ? "professional" : "private",
            communicationChannel: kommunikation || "email",
            aiAutonomyLevel: aiAutonomy || "supervised",
            onboardingCompleted: true,
          })
          .returning();
        landlordId = newLandlord.id;
      }

      // Persist onboarding session with wizard fields
      await db.insert(onboardingSessions).values({
        landlordId,
        currentStep: 7,
        totalSteps: 7,
        type: type === "profi" ? "profi" : "privat",
        portfolioGroesse: portfolioGroesse ?? null,
        struktur: struktur ?? null,
        verwaltungstyp: verwaltungstyp ?? null,
        einheitenAnzahl: einheitenAnzahl ? Number(einheitenAnzahl) : null,
        vorname: vorname ?? null,
        nachname: nachname ?? null,
        telefon: telefon ?? null,
        unternehmen: (unternehmen || firma) ?? null,
        data: {
          strasse: strasse ?? null,
          plz: plz ?? null,
          stadt: stadt ?? null,
          mieterOption: mieterOption ?? null,
          mieter: mieter ?? [],
        },
        completedAt: new Date(),
      }).onConflictDoNothing();
    } else {
      // No email provided — create anonymous session placeholder
      // This path is used when email is collected separately (magic-link)
      const [tempLandlord] = await db
        .insert(landlords)
        .values({
          email: `tmp-${Date.now()}@onboarding.ev`,
          name: displayName,
          companyName: unternehmen || firma || null,
          type: type === "profi" ? "professional" : "private",
          communicationChannel: "email",
          aiAutonomyLevel: "supervised",
          onboardingCompleted: false,
        })
        .returning();
      landlordId = tempLandlord.id;

      await db.insert(onboardingSessions).values({
        landlordId,
        currentStep: 7,
        totalSteps: 7,
        type: type === "profi" ? "profi" : "privat",
        portfolioGroesse: portfolioGroesse ?? null,
        struktur: struktur ?? null,
        verwaltungstyp: verwaltungstyp ?? null,
        einheitenAnzahl: einheitenAnzahl ? Number(einheitenAnzahl) : null,
        vorname: vorname ?? null,
        nachname: nachname ?? null,
        telefon: telefon ?? null,
        unternehmen: (unternehmen || firma) ?? null,
        data: {
          strasse: strasse ?? null,
          plz: plz ?? null,
          stadt: stadt ?? null,
          mieterOption: mieterOption ?? null,
          mieter: mieter ?? [],
        },
        completedAt: new Date(),
      });

      return NextResponse.json({
        success: true,
        landlordId,
        message: "Onboarding-Daten gespeichert. Keine E-Mail versandt (kein E-Mail-Feld ausgefüllt).",
      });
    }

    // Generate magic link
    const token = await createToken({ landlordId, email: normalised });
    const baseUrl = process.env.NEXT_PUBLIC_APP_URL || "https://einfach-verwaltet.de";
    const magicLink = `${baseUrl}/api/portal/auth/verify?token=${token}`;

    // Send via Resend
    if (!process.env.RESEND_API_KEY) {
      console.error("[onboarding/complete] RESEND_API_KEY not set");
      return NextResponse.json({
        success: true,
        landlordId,
        message: "Konto erstellt. E-Mail-Versand nicht konfiguriert.",
        debug: "RESEND_API_KEY missing",
      });
    }

    const resend = new Resend(process.env.RESEND_API_KEY);
    const { error: sendError } = await resend.emails.send({
      from: "einfach verwaltet. <portal@immo.einfach-verwaltet.de>",
      to: normalised,
      subject: "Ihr Portal ist bereit — einfach verwaltet.",
      html: `
<!DOCTYPE html>
<html lang="de">
<head><meta charset="UTF-8"></head>
<body style="margin:0;padding:0;background:#f1f5f9;font-family:system-ui,-apple-system,sans-serif">
  <table width="100%" cellpadding="0" cellspacing="0" style="padding:40px 20px">
    <tr><td align="center">
      <table width="480" cellpadding="0" cellspacing="0" style="background:#ffffff;border-radius:16px;overflow:hidden;box-shadow:0 2px 12px rgba(0,0,0,0.08)">
        <tr>
          <td style="background:#1e3a5f;padding:28px 32px;text-align:center">
            <span style="font-size:20px;font-weight:700;color:#ffffff">
              einfach <span style="color:#0d9488">verwaltet.</span>
            </span>
          </td>
        </tr>
        <tr>
          <td style="padding:32px">
            <h1 style="margin:0 0 12px;font-size:22px;font-weight:700;color:#0f172a">Willkommen${displayName ? `, ${displayName}` : ""}!</h1>
            <p style="margin:0 0 24px;font-size:15px;color:#475569;line-height:1.6">
              Ihr Portal ist eingerichtet. Klicken Sie auf den Button, um sich anzumelden — kein Passwort notwendig.
            </p>
            <table width="100%" cellpadding="0" cellspacing="0">
              <tr>
                <td align="center">
                  <a href="${magicLink}" style="display:inline-block;background:#0d9488;color:white;font-weight:600;padding:14px 32px;border-radius:10px;text-decoration:none;font-size:16px">
                    Portal öffnen →
                  </a>
                </td>
              </tr>
            </table>
            <p style="margin:24px 0 0;font-size:13px;color:#94a3b8;text-align:center">
              Dieser Link ist 24 Stunden gültig.
            </p>
          </td>
        </tr>
      </table>
    </td></tr>
  </table>
</body>
</html>`,
      text: `Willkommen bei einfach verwaltet.\n\nIhr Portal-Link:\n${magicLink}\n\nGültig für 24 Stunden.`,
    });

    if (sendError) {
      console.error("[onboarding/complete] Resend error:", sendError);
      return NextResponse.json({
        success: true,
        landlordId,
        message: "Konto erstellt, aber E-Mail konnte nicht gesendet werden.",
        emailError: sendError.message,
      });
    }

    return NextResponse.json({
      success: true,
      landlordId,
      message: "Konto erstellt. Magic Link wurde gesendet.",
    });
  } catch (e) {
    console.error("[onboarding/complete] Error:", e);
    return NextResponse.json({ error: String(e) }, { status: 500 });
  }
}
