/**
 * Dashboard Routes
 * GET /api/dashboard/summary — Portfolio KPIs for the owner dashboard
 * 
 * Returns: total units, occupancy rate, monthly contracted income, open tickets,
 *          properties count, active tenants, high-priority alerts
 * 
 * Data Sources (mock): MockDB.getDashboardSummary()
 * Production: matches query from Owner Dashboard spec section 10.1
 */

import { Hono } from 'hono';
import { MockDB } from '../../mock/db.js';
import { authMiddleware } from '../../middleware/auth.js';
import { serverError } from '../../lib/errors.js';

const dashboard = new Hono();

// Apply JWT auth
dashboard.use('/*', authMiddleware);

// ─── GET /api/dashboard/summary ───────────────────────────────────────────────

dashboard.get('/summary', async (c) => {
  try {
    const user = c.get('user');
    const summary = await MockDB.getDashboardSummary(user.org);

    // Monthly income in euros (cents → euros for display)
    const monthlyContractedEur = summary.monthlyContractedCents / 100;

    // Build alert list
    const alerts = buildAlerts(summary);

    return c.json({
      // KPI Cards (matches Owner Dashboard spec section 2.1)
      kpis: {
        totalUnits: summary.totalUnits,
        occupiedUnits: summary.occupiedUnits,
        vacantUnits: summary.vacantUnits,
        maintenanceUnits: summary.maintenanceUnits,
        occupancyRate: summary.occupancyRate, // percentage e.g. 83.3
        monthlyContractedCents: summary.monthlyContractedCents,
        monthlyContractedEur,
        openTickets: summary.openTickets,
        highPriorityTickets: summary.highPriorityTickets,
        propertiesCount: summary.propertiesCount,
        activeTenantsCount: summary.activeTenantsCount,
      },

      // Alerts (pre-computed; in production sourced from Redis cache)
      alerts,

      // Metadata
      generatedAt: new Date().toISOString(),
      // ⚠️ MOCK: In production, data is sourced from PostgreSQL with RLS + Redis cache (TTL 5min)
      dataSource: process.env.DATABASE_URL ? 'postgresql' : 'mock_in_memory',
    });
  } catch (err) {
    return serverError(c, err);
  }
});

// ─── GET /api/dashboard/properties ───────────────────────────────────────────

dashboard.get('/properties', async (c) => {
  try {
    const user = c.get('user');
    const propertiesList = await MockDB.listProperties(user.org);

    const enriched = await Promise.all(
      propertiesList.map(async (p) => {
        const units = await MockDB.listUnitsByProperty(p.id);
        const tenancies = await MockDB.listActiveTenanciesByOrg(user.org);
        const propTenancies = tenancies.filter(t =>
          units.some(u => u.id === t.unitId)
        );
        const monthlyIncomeCents = propTenancies.reduce((sum, t) => sum + t.rentColdCents, 0);
        const occupiedUnits = units.filter(u => u.status === 'occupied').length;

        return {
          id: p.id,
          name: p.name,
          address: `${p.addressStreet}, ${p.addressZip} ${p.addressCity}`,
          propertyType: p.propertyType,
          totalUnits: units.length,
          occupiedUnits,
          occupancyRate: units.length > 0 ? Math.round((occupiedUnits / units.length) * 1000) / 10 : 0,
          monthlyIncomeCents,
          energyClass: p.energyClass,
        };
      })
    );

    return c.json({ properties: enriched });
  } catch (err) {
    return serverError(c, err);
  }
});

// ─── Helpers ──────────────────────────────────────────────────────────────────

function buildAlerts(summary: Awaited<ReturnType<typeof MockDB.getDashboardSummary>>) {
  const alerts: Array<{
    id: string;
    severity: 'critical' | 'warning' | 'info';
    type: string;
    title: string;
    description: string;
    actionUrl?: string;
  }> = [];

  if (summary.highPriorityTickets > 0) {
    alerts.push({
      id: 'alert_high_prio_tickets',
      severity: 'critical',
      type: 'high_priority_tickets',
      title: `${summary.highPriorityTickets} dringende${summary.highPriorityTickets === 1 ? 's Ticket' : ' Tickets'}`,
      description: `${summary.highPriorityTickets} Ticket${summary.highPriorityTickets > 1 ? 's' : ''} mit hoher Priorität oder Notfall-Status erfordern sofortige Aufmerksamkeit.`,
      actionUrl: '/maintenance?status=open&priority=high',
    });
  }

  if (summary.vacantUnits > 0) {
    const vacancyRate = summary.totalUnits > 0
      ? Math.round((summary.vacantUnits / summary.totalUnits) * 100)
      : 0;
    if (vacancyRate > 10) {
      alerts.push({
        id: 'alert_vacancy',
        severity: 'warning',
        type: 'high_vacancy',
        title: `${summary.vacantUnits} leere Einheit${summary.vacantUnits > 1 ? 'en' : ''}`,
        description: `Leerstandsquote: ${vacancyRate}%. Einnahmeausfall: ca. ${formatEur(
          estimateVacancyLoss(summary)
        )}/Monat.`,
        actionUrl: '/properties',
      });
    }
  }

  if (summary.openTickets > 5) {
    alerts.push({
      id: 'alert_open_tickets',
      severity: 'warning',
      type: 'many_open_tickets',
      title: `${summary.openTickets} offene Tickets`,
      description: 'Überdurchschnittlich viele offene Wartungsanfragen. Bitte prüfen.',
      actionUrl: '/maintenance',
    });
  }

  return alerts;
}

function estimateVacancyLoss(summary: { vacantUnits: number; monthlyContractedCents: number; occupiedUnits: number }): number {
  if (summary.occupiedUnits === 0) return 0;
  const avgRentCents = summary.monthlyContractedCents / summary.occupiedUnits;
  return Math.round(avgRentCents * summary.vacantUnits);
}

function formatEur(cents: number): string {
  return new Intl.NumberFormat('de-DE', { style: 'currency', currency: 'EUR' }).format(cents / 100);
}

export default dashboard;
