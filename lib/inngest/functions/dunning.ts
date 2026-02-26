import { inngest } from "../client";
import { db } from "@/lib/db";
import { units, financialTransactions, aiActions, tenants, properties, documents } from "@/lib/db/schema";
import { eq, and, gte, isNull, desc, sql } from "drizzle-orm";

// Mahnung levels according to BGB §286
const MAHNUNG_THRESHOLDS = {
  ERINNERUNG: { min: 1, max: 7, level: 1 },
  MAHNUNG_1: { min: 8, max: 30, level: 2 },
  MAHNUNG_2: { min: 31, max: 60, level: 3 },
  INKASSO: { min: 61, max: Infinity, level: 4 },
};

// Verzugszinsen rate: 6.27% p.a. (Basiszinssatz 1.27% + 5% per §288 BGB)
const VERZUGSZINS_RATE = 0.0627;

function calculateMahnungLevel(daysOverdue: number): number {
  if (daysOverdue >= MAHNUNG_THRESHOLDS.INKASSO.min) return MAHNUNG_THRESHOLDS.INKASSO.level;
  if (daysOverdue >= MAHNUNG_THRESHOLDS.MAHNUNG_2.min) return MAHNUNG_THRESHOLDS.MAHNUNG_2.level;
  if (daysOverdue >= MAHNUNG_THRESHOLDS.MAHNUNG_1.min) return MAHNUNG_THRESHOLDS.MAHNUNG_1.level;
  if (daysOverdue >= MAHNUNG_THRESHOLDS.ERINNERUNG.min) return MAHNUNG_THRESHOLDS.ERINNERUNG.level;
  return 0;
}

function getMahnungLabel(level: number): string {
  const labels: Record<number, string> = {
    1: "Zahlungserinnerung",
    2: "1. Mahnung",
    3: "2. Mahnung",
    4: "Inkasso-Übergabe",
  };
  return labels[level] || "Zahlungserinnerung";
}

export const rentDunning = inngest.createFunction(
  { id: "rent-dunning", name: "Rent Dunning Automation (§286 BGB)" },
  { cron: "30 8 * * *" }, // Daily at 08:30
  async ({ step, logger }) => {
    const today = new Date();
    const firstOfMonth = new Date(today.getFullYear(), today.getMonth(), 1);
    const dueDate = new Date(today.getFullYear(), today.getMonth(), 3); // Rent due on 3rd

    logger.info(`Starting rent dunning check at ${today.toISOString()}`);

    // Step 1: Find all overdue rent payments
    const overdueRentals = await step.run("find-overdue-rentals", async () => {
      // Get all active tenants with their units and properties
      const rentals = await db
        .select({
          tenant: tenants,
          unit: units,
          property: properties,
        })
        .from(tenants)
        .innerJoin(units, eq(units.id, tenants.unitId))
        .innerJoin(properties, eq(properties.id, units.propertyId))
        .where(eq(tenants.active, true));

      const overdue: Array<{
        tenantId: string;
        tenantName: string;
        unitId: string;
        propertyId: string;
        landlordId: string;
        coldRentCents: number;
        daysOverdue: number;
        propertyAddress: string;
        unitDesignation: string;
      }> = [];

      for (const { tenant, unit, property } of rentals) {
        if (!unit.coldRentCents) continue;

        // Check if rent was received this month
        const [payment] = await db
          .select()
          .from(financialTransactions)
          .where(
            and(
              eq(financialTransactions.tenantId, tenant.id),
              eq(financialTransactions.type, "rent_received"),
              gte(financialTransactions.paidAt, firstOfMonth)
            )
          )
          .limit(1);

        if (!payment && today > dueDate) {
          const daysOverdue = Math.floor((today.getTime() - dueDate.getTime()) / (1000 * 60 * 60 * 24));

          if (daysOverdue > 0) {
            overdue.push({
              tenantId: tenant.id,
              tenantName: `${tenant.firstName} ${tenant.lastName}`,
              unitId: unit.id,
              propertyId: unit.propertyId,
              landlordId: property.landlordId,
              coldRentCents: Number(unit.coldRentCents) * 100,
              daysOverdue,
              propertyAddress: property.address,
              unitDesignation: unit.designation,
            });
          }
        }
      }

      logger.info(`Found ${overdue.length} overdue rentals`);
      return overdue;
    });

    // Step 2: Check existing Mahnungen and determine escalation
    const escalationNeeded = await step.run("check-escalation", async () => {
      const toEscalate: typeof overdueRentals = [];

      for (const rental of overdueRentals) {
        // Get the latest Mahnung for this tenant
        const [latestMahnung] = await db
          .select()
          .from(documents)
          .where(and(eq(documents.tenantId, rental.tenantId), eq(documents.type, "mahnung")))
          .orderBy(desc(documents.createdAt))
          .limit(1);

        const requiredLevel = calculateMahnungLevel(rental.daysOverdue);
        const currentLevel = latestMahnung ? ((latestMahnung.metadata as any)?.mahnungLevel || 0) : 0;

        // Only escalate if the required level is higher than current
        if (requiredLevel > currentLevel) {
          toEscalate.push({
            ...rental,
            requiredLevel,
            currentLevel,
          } as any);
        }
      }

      logger.info(`${toEscalate.length} rentals need escalation`);
      return toEscalate;
    });

    // Step 3: Create AI actions for review (do NOT auto-send)
    const actionsCreated = await step.run("create-review-actions", async () => {
      const results = [];

      for (const rental of escalationNeeded) {
        const level = (rental as any).requiredLevel;
        const label = getMahnungLabel(level);

        // Create AI action for landlord review
        const [action] = await db
          .insert(aiActions)
          .values({
            landlordId: rental.landlordId,
            propertyId: rental.propertyId,
            unitId: rental.unitId,
            tenantId: rental.tenantId,
            type: "mahnung",
            title: `${label} erforderlich für ${rental.tenantName}`,
            body: `${rental.tenantName} (${rental.unitDesignation}) ist seit ${rental.daysOverdue} Tagen mit der Miete von ${(rental.coldRentCents / 100).toFixed(2).replace(".", ",")} € im Verzug. Eine ${label} ist nach §286 BGB erforderlich.`,
            actionLabel: "Mahnung erstellen",
            dismissLabel: "Bereits bezahlt",
            urgency: level >= 3 ? 5 : level === 2 ? 4 : 3,
            status: "pending",
            metadata: {
              mahnungLevel: level,
              daysOverdue: rental.daysOverdue,
              amountCents: rental.coldRentCents,
              verzugszinsenRate: VERZUGSZINS_RATE,
              source: "rent-dunning-cron",
            },
          })
          .returning();

        results.push({
          actionId: action.id,
          tenantId: rental.tenantId,
          level,
          daysOverdue: rental.daysOverdue,
        });
      }

      logger.info(`Created ${results.length} AI actions for review`);
      return results;
    });

    // Step 4: Send Zahlungserinnerung for level 1 (day 4, automated)
    const erinnerungenSent = await step.run("send-erinnerungen", async () => {
      const erinnerungen = overdueRentals.filter((r) => r.daysOverdue === 4);
      const results = [];

      for (const rental of erinnerungen) {
        // Check if we already sent an Erinnerung
        const [existing] = await db
          .select()
          .from(documents)
          .where(
            and(
              eq(documents.tenantId, rental.tenantId),
              eq(documents.type, "mahnung"),
              sql`${documents.metadata}->>'mahnungLevel' = '1'`
            )
          )
          .limit(1);

        if (!existing) {
          // Create a "soft" AI action for Erinnerung (can be auto-sent in future)
          await db.insert(aiActions).values({
            landlordId: rental.landlordId,
            propertyId: rental.propertyId,
            unitId: rental.unitId,
            tenantId: rental.tenantId,
            type: "mahnung",
            title: `Zahlungserinnerung für ${rental.tenantName}`,
            body: `${rental.tenantName} ist seit 4 Tagen mit der Miete im Verzug. Eine freundliche Zahlungserinnerung wurde vorbereitet.`,
            actionLabel: "Erinnerung senden",
            dismissLabel: "Überspringen",
            urgency: 2,
            status: "pending",
            metadata: {
              mahnungLevel: 1,
              daysOverdue: rental.daysOverdue,
              amountCents: rental.coldRentCents,
              autoSendEligible: true,
              source: "rent-dunning-cron",
            },
          });

          results.push({
            tenantId: rental.tenantId,
            action: "erinnerung_prepared",
          });
        }
      }

      logger.info(`Prepared ${results.length} Zahlungserinnerungen`);
      return results;
    });

    // Step 5: Audit log entry
    await step.run("audit-log", async () => {
      logger.info("Rent dunning cron completed", {
        date: today.toISOString(),
        overdueCount: overdueRentals.length,
        escalationsRequired: escalationNeeded.length,
        actionsCreated: actionsCreated.length,
        erinnerungenPrepared: erinnerungenSent.length,
      });

      // Store audit entry in DB
      await db.insert(documents).values({
        landlordId: "00000000-0000-0000-0000-000000000000", // System
        type: "sonstiges",
        name: `Rent Dunning Audit - ${today.toISOString().split("T")[0]}`,
        url: "",
        metadata: {
          type: "rent-dunning-audit",
          date: today.toISOString(),
          overdueCount: overdueRentals.length,
          escalationsRequired: escalationNeeded.length,
          actionsCreated: actionsCreated.length,
          erinnerungenPrepared: erinnerungenSent.length,
          source: "inngest-cron",
        },
      });
    });

    return {
      success: true,
      date: today.toISOString(),
      stats: {
        overdueRentals: overdueRentals.length,
        escalationsRequired: escalationNeeded.length,
        actionsCreated: actionsCreated.length,
        erinnerungenPrepared: erinnerungenSent.length,
      },
    };
  }
);

// Keep the old rentMonitoring function for backwards compatibility
export const rentMonitoring = inngest.createFunction(
  { id: "rent-monitoring", name: "Rent Monitoring & Mahnwesen" },
  { cron: "0 8 * * *" }, // Daily at 08:00 (kept for compatibility)
  async ({ step }) => {
    const today = new Date();
    const firstOfMonth = new Date(today.getFullYear(), today.getMonth(), 1);

    // Step 1: Check all units for overdue rent
    const overdueUnits = await step.run("check-overdue", async () => {
      try {
        // Get all active units
        const allUnits = await db.select().from(units).where(eq(units.occupied, true));

        const overdue: Array<{
          unitId: string;
          propertyId: string;
          landlordId: string;
          tenantId: string;
          coldRentCents: number;
          daysOverdue: number;
        }> = [];

        for (const unit of allUnits) {
          // Check if rent was received this month for this unit
          const rentReceived = await db
            .select()
            .from(financialTransactions)
            .where(
              and(
                eq(financialTransactions.unitId, unit.id),
                eq(financialTransactions.type, "rent_received"),
                gte(financialTransactions.paidAt, firstOfMonth)
              )
            )
            .limit(1);

          if (rentReceived.length === 0) {
            // Check when the rent was due (typically 3rd of month)
            const dueDate = new Date(today.getFullYear(), today.getMonth(), 3);
            const daysOverdue = Math.floor((today.getTime() - dueDate.getTime()) / (1000 * 60 * 60 * 24));

            // Only consider overdue if past due date
            if (daysOverdue > 0) {
              overdue.push({
                unitId: unit.id,
                propertyId: unit.propertyId,
                landlordId: "", // Will be populated from property lookup
                tenantId: "", // Will be populated from tenant lookup
                coldRentCents: unit.coldRentCents ? Number(unit.coldRentCents) * 100 : 0,
                daysOverdue: daysOverdue,
              });
            }
          }
        }

        return overdue;
      } catch (error) {
        console.error("Database error checking overdue rent:", error);
        return [];
      }
    });

    // Step 2: Send Zahlungserinnerung (day 4)
    await step.run("send-erinnerung", async () => {
      const unitsDay4 = overdueUnits.filter((u) => u.daysOverdue === 4);
      // TODO: Send email reminder
      return { sent: unitsDay4.length };
    });

    // Step 3: Send formal Mahnung (day 10) and create actions
    const mahnungResult = await step.run("send-mahnung", async () => {
      const unitsDay10 = overdueUnits.filter((u) => u.daysOverdue >= 10);

      try {
        for (const unit of unitsDay10) {
          // Create financial transaction for Mahnung
          await db.insert(financialTransactions).values({
            landlordId: (unit as any).landlordId || "00000000-0000-0000-0000-000000000000",
            unitId: unit.unitId,
            propertyId: unit.propertyId,
            type: "mahnung",
            amountCents: unit.coldRentCents || 0,
            currency: "EUR",
            status: "pending",
            description: `Mahnung für Miete - ${unit.daysOverdue} Tage überfällig`,
            dueDate: new Date(),
          });
        }

        return { sent: unitsDay10.length };
      } catch (error) {
        console.error("Database error creating Mahnung:", error);
        return { sent: 0, error: error instanceof Error ? error.message : "Unknown DB error" };
      }
    });

    // Step 4: Create AI actions for overdue payments
    await step.run("create-ai-actions", async () => {
      const unitsOverdue7Days = overdueUnits.filter((u) => u.daysOverdue >= 7);

      try {
        for (const unit of unitsOverdue7Days) {
          await db.insert(aiActions).values({
            landlordId: (unit as any).landlordId || "00000000-0000-0000-0000-000000000000",
            propertyId: unit.propertyId,
            unitId: unit.unitId,
            type: "mahnung",
            title: `Mietrückstand - ${unit.daysOverdue} Tage überfällig`,
            body: `Die Miete für Einheit ${unit.unitId} ist seit ${unit.daysOverdue} Tagen überfällig. Betrag: ${(unit.coldRentCents / 100).toFixed(2).replace(".", ",")} €`,
            actionLabel: "Mahnung senden",
            urgency: unit.daysOverdue >= 14 ? 5 : 4,
            status: "pending",
          });
        }
        return { actionsCreated: unitsOverdue7Days.length };
      } catch (error) {
        console.error("Database error creating AI actions:", error);
        return { actionsCreated: 0, error: error instanceof Error ? error.message : "Unknown DB error" };
      }
    });

    // Step 5: Escalate to landlord (day 20)
    await step.run("escalate", async () => {
      const unitsDay20 = overdueUnits.filter((u) => u.daysOverdue >= 20);
      // TODO: Flag for Rechtsanwalt intervention, notify landlord
      return { escalated: unitsDay20.length };
    });

    return { checkedAt: today.toISOString(), overdue: overdueUnits.length };
  }
);
