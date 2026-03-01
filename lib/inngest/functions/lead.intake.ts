import { inngest } from "../client";
import { db } from "@/lib/db";
import { leads, landlords, aiActions } from "@/lib/db/schema";
import { eq } from "drizzle-orm";

// Pricing logic — matches einfach-verwaltet.de/preise
function calcPrice(einheiten: string, typ: string): { monthly: number; setup: number; label: string } {
  const units = einheiten?.includes("+") ? 35
    : einheiten?.includes("30") ? 35
    : einheiten?.includes("11") ? 20
    : einheiten?.includes("4") ? 7
    : 2;

  const baseRate = typ === "weg" ? 29 : 27; // €/unit/month
  const monthly = units * baseRate;
  const setup = 149;
  const label = einheiten || "Ihre Einheiten";
  return { monthly, setup, label };
}

function buildAngebotHtml(lead: {
  name?: string;
  email?: string;
  einheiten?: string;
  typ?: string;
  standort?: string;
  telefon?: string;
}): string {
  const { monthly, setup, label } = calcPrice(lead.einheiten || "", lead.typ || "miet");
  const typLabel = lead.typ === "weg" ? "WEG-Verwaltung" : lead.typ === "beides" ? "Miet- & WEG-Verwaltung" : "Mietverwaltung";
  const firstName = lead.name?.split(" ")[0] || "da";

  return `<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
</head>
<body style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; line-height: 1.6; color: #1a1a1a; max-width: 600px; margin: 0 auto; padding: 20px;">

  <div style="border-bottom: 3px solid #0f172a; padding-bottom: 16px; margin-bottom: 24px;">
    <span style="font-size: 18px; font-weight: 700; color: #0f172a;">einfach verwaltet.</span>
  </div>

  <p style="font-size: 16px;">Hallo ${firstName},</p>

  <p style="font-size: 16px;">vielen Dank für Ihre Anfrage. Hier ist Ihr persönliches Angebot für <strong>${label}</strong> in der ${typLabel}:</p>

  <!-- Angebot Box -->
  <div style="background: #f8fafc; border: 2px solid #0f172a; border-radius: 12px; padding: 24px; margin: 24px 0;">
    <div style="font-size: 13px; font-weight: 600; color: #64748b; text-transform: uppercase; letter-spacing: 0.05em; margin-bottom: 8px;">Ihr Angebot</div>
    <div style="font-size: 32px; font-weight: 700; color: #0f172a;">${monthly.toLocaleString("de-DE")} €<span style="font-size: 16px; font-weight: 400; color: #64748b;">/Monat</span></div>
    <div style="font-size: 14px; color: #64748b; margin-top: 4px;">Einmalige Einrichtung: ${setup} €</div>

    <hr style="border: none; border-top: 1px solid #e2e8f0; margin: 16px 0;">

    <div style="font-size: 14px; color: #1a1a1a;">
      <div style="margin-bottom: 8px;">✓ &nbsp;24/7 Erreichbarkeit für Ihre Mieter</div>
      <div style="margin-bottom: 8px;">✓ &nbsp;Reaktionszeit unter 15 Minuten</div>
      <div style="margin-bottom: 8px;">✓ &nbsp;Echtzeit-Dashboard für Sie</div>
      <div style="margin-bottom: 8px;">✓ &nbsp;Jährliche Nebenkostenabrechnung (§556 BGB)</div>
      <div style="margin-bottom: 8px;">✓ &nbsp;Automatisches Mahnwesen (§286 BGB)</div>
      <div style="margin-bottom: 0;">✓ &nbsp;DSGVO-konformes Dokumentenportal</div>
    </div>
  </div>

  <p style="font-size: 16px;">Schauen Sie sich unser Portal direkt an — keine Registrierung nötig:</p>

  <p style="margin: 24px 0;">
    <a href="https://einfach-verwaltet.de/demo" style="background-color: #14b8a6; color: #ffffff; padding: 14px 28px; text-decoration: none; border-radius: 8px; display: inline-block; font-weight: 600; font-size: 16px;">Demo jetzt starten →</a>
  </p>

  <p style="font-size: 14px; color: #64748b;">Oder antworten Sie einfach auf diese E-Mail — ich melde mich persönlich.</p>

  <p style="font-size: 16px; margin-top: 32px;">
    Mit freundlichen Grüßen<br>
    <strong>Lukas Schmitz</strong><br>
    Gründer, einfach verwaltet.<br>
    <a href="mailto:lukas@einfach-verwaltet.de" style="color: #0f172a;">lukas@einfach-verwaltet.de</a>
  </p>

  <hr style="border: none; border-top: 1px solid #e5e5e5; margin: 32px 0;">
  <p style="font-size: 12px; color: #94a3b8;">
    einfach verwaltet. | Singapurstr. 19 | 20457 Hamburg<br>
    <a href="https://einfach-verwaltet.de" style="color: #94a3b8;">einfach-verwaltet.de</a> &nbsp;·&nbsp;
    <a href="https://einfach-verwaltet.de/datenschutz" style="color: #94a3b8;">Datenschutz</a> &nbsp;·&nbsp;
    <a href="https://einfach-verwaltet.de/impressum" style="color: #94a3b8;">Impressum</a>
  </p>
</body>
</html>`;
}

export const leadIntake = inngest.createFunction(
  { id: "lead-intake", name: "Lead Intake & Qualification" },
  { event: "lead/submitted" },
  async ({ event, step }) => {
    const lead = event.data;

    // Step 1: Score lead quality
    const score = await step.run("score-lead", async () => {
      const einheiten = lead.einheiten || "";
      const units = einheiten.includes("+") ? 35
        : einheiten.includes("30") ? 35
        : einheiten.includes("11") ? 20
        : einheiten.includes("4") ? 7
        : 2;
      const locationScore = ["Hamburg", "Berlin", "München"].some((c) =>
        lead.standort?.includes(c)
      ) ? 30 : 10;
      const unitScore = units >= 20 ? 40 : units >= 5 ? 25 : 10;
      return { score: locationScore + unitScore, units, location: lead.standort };
    });

    // Step 2: Wait 3 minutes, then send personalized Angebot
    await step.sleep("wait-before-angebot", "3m");

    await step.run("send-angebot-email", async () => {
      if (!process.env.RESEND_API_KEY) return { skipped: true };
      const { Resend } = await import("resend");
      const resend = new Resend(process.env.RESEND_API_KEY);

      await resend.emails.send({
        from: "Lukas Schmitz <anfrage@immo.einfach-verwaltet.de>",
        to: lead.email,
        replyTo: "lukas@einfach-verwaltet.de",
        subject: `Ihr persönliches Angebot — einfach verwaltet.`,
        html: buildAngebotHtml(lead),
      });
    });

    // Step 3: Notify Lukas of new lead (all leads, instant)
    await step.run("notify-admin", async () => {
      if (!process.env.RESEND_API_KEY) return { skipped: true };
      const { Resend } = await import("resend");
      const resend = new Resend(process.env.RESEND_API_KEY);
      const adminEmail = process.env.ADMIN_EMAIL || "lukas@einfach-verwaltet.de";
      const { calcPrice: _calc } = { calcPrice: calcPrice };
      const { monthly } = calcPrice(lead.einheiten || "", lead.typ || "miet");

      await resend.emails.send({
        from: "einfach verwaltet. System <anfrage@immo.einfach-verwaltet.de>",
        to: adminEmail,
        subject: `🔔 Neuer Lead: ${lead.name} — ${lead.einheiten || "?"} Einheiten | Score ${score.score}/70`,
        text: `Neuer Lead eingegangen:

Name: ${lead.name}
E-Mail: ${lead.email}
Telefon: ${lead.telefon || "—"}
Einheiten: ${lead.einheiten || "—"}
Typ: ${lead.typ || "—"}
Standort: ${lead.standort || "—"}
Score: ${score.score}/70

Kalkulierter Monatsbeitrag: ${monthly.toLocaleString("de-DE")} €

Angebot wurde in 3 Min automatisch rausgeschickt.

---
einfach verwaltet. CRM`,
      });
    });

    // Step 4: Persist to database
    await step.run("persist-lead", async () => {
      try {
        const existingLead = await db
          .select()
          .from(leads)
          .where(eq(leads.email, lead.email))
          .limit(1);

        if (existingLead.length > 0) {
          return { leadId: existingLead[0].id, skipped: "Lead already exists" };
        }

        const [newLead] = await db
          .insert(leads)
          .values({
            verwaltungstyp: lead.verwaltungstyp || lead.typ,
            einheiten: lead.einheiten,
            standort: lead.standort,
            situation: lead.situation || lead.nachricht,
            prioritaet: lead.prioritaet,
            name: lead.name,
            email: lead.email,
            telefon: lead.telefon,
            status: score.score >= 50 ? "qualified" : "new",
          })
          .returning();

        const [newLandlord] = await db
          .insert(landlords)
          .values({
            email: lead.email,
            name: lead.name,
            phone: lead.telefon,
            type: "private",
            communicationChannel: "email",
            aiAutonomyLevel: "supervised",
            onboardingCompleted: false,
          })
          .returning();

        await db.insert(aiActions).values({
          landlordId: newLandlord.id,
          type: "onboarding",
          title: "Onboarding abschließen",
          body: "Willkommen! Bitte schließen Sie Ihr Onboarding ab.",
          actionLabel: "Jetzt starten",
          dismissLabel: "Später",
          urgency: 3,
          status: "pending",
        });

        return { leadId: newLead.id, landlordId: newLandlord.id };
      } catch (error) {
        console.error("Database error in lead intake:", error);
        return { error: error instanceof Error ? error.message : "Unknown DB error" };
      }
    });

    return { leadId: lead.id, score: score.score };
  }
);
