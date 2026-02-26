import { inngest } from "../client";
import { db } from "@/lib/db";
import { documents, aiActions, units, financialTransactions } from "@/lib/db/schema";
import { eq, and, lt, gte, sql } from "drizzle-orm";

export const complianceChecks = inngest.createFunction(
  { id: "compliance-checks", name: "Weekly Compliance Monitor" },
  { cron: "0 9 * * 1" }, // Every Monday at 09:00
  async ({ step }) => {
    const today = new Date();
    const sixMonthsFromNow = new Date(today);
    sixMonthsFromNow.setMonth(sixMonthsFromNow.getMonth() + 6);

    // Step 1: Check Energieausweis expiry (10yr validity)
    const energieausweisResult = await step.run("check-energieausweis", async () => {
      try {
        const expiringDocs = await db
          .select()
          .from(documents)
          .where(
            and(
              eq(documents.type, "energieausweis"),
              lt(documents.expiresAt, sixMonthsFromNow),
              gte(documents.expiresAt, today)
            )
          );

        // Create AI actions for each expiring Energieausweis
        for (const doc of expiringDocs) {
          await db.insert(aiActions).values({
            landlordId: doc.landlordId,
            propertyId: doc.propertyId,
            unitId: doc.unitId,
            type: "energieausweis",
            title: "Energieausweis läuft ab",
            body: `Der Energieausweis "${doc.name}" läuft am ${doc.expiresAt?.toLocaleDateString("de-DE")} ab. Ein neuer Ausweis muss beantragt werden.`,
            actionLabel: "Neuen Ausweis beantragen",
            urgency: 3,
            status: "pending",
            expiresAt: doc.expiresAt,
          });
        }

        return { expiringSoon: expiringDocs };
      } catch (error) {
        console.error("Database error checking Energieausweis:", error);
        return { expiringSoon: [], error: error instanceof Error ? error.message : "Unknown DB error" };
      }
    });

    // Step 2: Check Mieterhöhung eligibility (§558 BGB — 15 months since last increase)
    const mieterhoehungResult = await step.run("check-mieterhoehung", async () => {
      try {
        const fifteenMonthsAgo = new Date(today);
        fifteenMonthsAgo.setMonth(fifteenMonthsAgo.getMonth() - 15);

        // Find units where last rent increase was more than 15 months ago or never
        const unitsWithLastIncrease = await db
          .select({
            unitId: financialTransactions.unitId,
            propertyId: financialTransactions.propertyId,
            lastIncrease: sql<Date>`MAX(${financialTransactions.createdAt})`,
          })
          .from(financialTransactions)
          .where(eq(financialTransactions.type, "rent_received"))
          .groupBy(financialTransactions.unitId, financialTransactions.propertyId);

        const eligibleUnits = [];
        
        // Get all units to check eligibility
        const allUnits = await db.select().from(units);
        
        for (const unit of allUnits) {
          const lastIncrease = unitsWithLastIncrease.find((u) => u.unitId === unit.id);
          
          if (!lastIncrease || lastIncrease.lastIncrease <= fifteenMonthsAgo) {
            eligibleUnits.push({
              unitId: unit.id,
              propertyId: unit.propertyId,
              daysSinceIncrease: lastIncrease 
                ? Math.floor((today.getTime() - lastIncrease.lastIncrease.getTime()) / (1000 * 60 * 60 * 24))
                : null,
            });
          }
        }

        // Create AI actions for eligible units
        for (const eligible of eligibleUnits.slice(0, 20)) { // Limit to 20 to avoid spam
          // TODO: Look up landlordId from property
          await db.insert(aiActions).values({
            propertyId: eligible.propertyId,
            unitId: eligible.unitId,
            type: "mieterhoehung",
            title: "Mieterhöhung möglich",
            body: eligible.daysSinceIncrease 
              ? `Seit ${Math.floor(eligible.daysSinceIncrease / 30)} Monaten keine Mieterhöhung. §558 BGB erlaubt Erhöhung.`
              : "Keine Mieterhöhung im letzten Jahr. Prüfung nach §558 BGB empfohlen.",
            actionLabel: "Mieterhöhung prüfen",
            urgency: 2,
            status: "pending",
          });
        }

        return { eligible: eligibleUnits };
      } catch (error) {
        console.error("Database error checking Mieterhöhung eligibility:", error);
        return { eligible: [], error: error instanceof Error ? error.message : "Unknown DB error" };
      }
    });

    // Step 3: Check WEG Eigentümerversammlung dates (§24 WEG — annual)
    // Note: This is a placeholder - we'd need a WEG properties table with last ETV date
    const etvResult = await step.run("check-etv", async () => {
      // TODO: Implement once we have WEG-specific tables
      return { overdue: [] };
    });

    // Step 4: DSGVO data retention check
    const dsgvoResult = await step.run("check-dsgvo-retention", async () => {
      try {
        const threeYearsAgo = new Date(today);
        threeYearsAgo.setFullYear(threeYearsAgo.getFullYear() - 3);

        // Check for old tenant data of inactive tenants
        // Flag for review (actual deletion requires human approval)
        const flaggedOldData = await db
          .select()
          .from(financialTransactions)
          .where(
            and(
              lt(financialTransactions.createdAt, threeYearsAgo),
              isNull(financialTransactions.paidAt)
            )
          )
          .limit(100);

        return { flagged: flaggedOldData.length };
      } catch (error) {
        console.error("Database error in DSGVO check:", error);
        return { flagged: 0, error: error instanceof Error ? error.message : "Unknown DB error" };
      }
    });

    return {
      energieausweisExpiring: energieausweisResult.expiringSoon.length,
      mieterhoehungEligible: mieterhoehungResult.eligible.length,
      etvOverdue: etvResult.overdue.length,
      dsgvoFlagged: dsgvoResult.flagged,
    };
  }
);
