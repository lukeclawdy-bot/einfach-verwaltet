import { inngest } from "../client";
import { db } from "@/lib/db";
import { leads, landlords, aiActions } from "@/lib/db/schema";
import { eq } from "drizzle-orm";

export const leadIntake = inngest.createFunction(
  { id: "lead-intake", name: "Lead Intake & Qualification" },
  { event: "lead/submitted" },
  async ({ event, step }) => {
    const lead = event.data;

    // Step 1: Score lead quality
    const score = await step.run("score-lead", async () => {
      const units = Number(lead.einheiten) || 0;
      const locationScore = ["Hamburg", "Berlin"].some((c) =>
        lead.standort?.includes(c)
      )
        ? 30
        : 10;
      const unitScore = units >= 20 ? 40 : units >= 5 ? 25 : 10;
      return { score: locationScore + unitScore, units, location: lead.standort };
    });

    // Step 2: Send welcome email via Resend
    await step.run("send-welcome-email", async () => {
      if (!process.env.RESEND_API_KEY) return { skipped: true };
      const { Resend } = await import("resend");
      const resend = new Resend(process.env.RESEND_API_KEY);
      await resend.emails.send({
        from: "anfrage@einfach-verwaltet.de",
        to: lead.email,
        subject: "Willkommen bei einfach verwaltet.",
        html: `<p>Hallo ${lead.name},</p><p>vielen Dank für Ihre Anfrage. Wir melden uns innerhalb von 24 Stunden bei Ihnen.</p><p>Ihr Team von einfach verwaltet.</p>`,
      });
    });

    // Step 3: Notify admin of high-quality lead
    await step.run("notify-admin", async () => {
      if (score.score >= 50 && process.env.RESEND_API_KEY) {
        const { Resend } = await import("resend");
        const resend = new Resend(process.env.RESEND_API_KEY);
        await resend.emails.send({
          from: "system@einfach-verwaltet.de",
          to: "kontakt@einfach-verwaltet.de",
          subject: `🔥 High-quality lead: ${lead.name} — ${score.units} Einheiten (${lead.standort})`,
          html: `<p><strong>Score: ${score.score}/70</strong></p><pre>${JSON.stringify(lead, null, 2)}</pre>`,
        });
      }
    });

    // Step 4: Persist to database
    await step.run("persist-lead", async () => {
      try {
        // Check if lead already exists by email
        const existingLead = await db
          .select()
          .from(leads)
          .where(eq(leads.email, lead.email))
          .limit(1);

        if (existingLead.length > 0) {
          return { 
            leadId: existingLead[0].id, 
            landlordId: null,
            actionId: null,
            skipped: "Lead already exists" 
          };
        }

        // Insert lead
        const [newLead] = await db
          .insert(leads)
          .values({
            verwaltungstyp: lead.verwaltungstyp,
            einheiten: lead.einheiten,
            standort: lead.standort,
            situation: lead.situation,
            prioritaet: lead.prioritaet,
            name: lead.name,
            email: lead.email,
            telefon: lead.telefon,
            status: score.score >= 50 ? "qualified" : "new",
          })
          .returning();

        // Create landlord record
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

        // Create onboarding action for landlord
        const [newAction] = await db
          .insert(aiActions)
          .values({
            landlordId: newLandlord.id,
            type: "onboarding",
            title: "Onboarding abschließen",
            body: "Willkommen bei einfach verwaltet.! Bitte schließen Sie Ihr Onboarding ab, um alle Funktionen nutzen zu können.",
            actionLabel: "Jetzt starten",
            dismissLabel: "Später",
            urgency: 3,
            status: "pending",
          })
          .returning();

        return { 
          leadId: newLead.id, 
          landlordId: newLandlord.id,
          actionId: newAction.id,
          skipped: null
        };
      } catch (error) {
        // Inngest functions should not crash if DB is unreachable
        console.error("Database error in lead intake:", error);
        return { 
          leadId: null, 
          landlordId: null,
          actionId: null,
          error: error instanceof Error ? error.message : "Unknown DB error"
        };
      }
    });

    return { leadId: lead.id, score: score.score };
  }
);
