// Demo data service — hardcoded data for public demo mode
// No database calls, used when isDemo: true in session

export interface DemoLandlord {
  id: string;
  name: string;
  plan: string;
}

export interface DemoProperty {
  id: string;
  name: string;
  units: number;
  city: string;
}

export interface DemoStats {
  totalUnits: number;
  occupancyRate: number;
  openTickets: number;
  monthlyRent: number;
}

export interface DemoData {
  landlord: DemoLandlord;
  properties: DemoProperty[];
  stats: DemoStats;
}

export function getDemoData(): DemoData {
  return {
    landlord: {
      id: "demo",
      name: "Max Mustermann",
      plan: "standard"
    },
    properties: [
      { id: "p1", name: "Musterstraße 12", units: 8, city: "Hamburg" },
      { id: "p2", name: "Alsterblick 5", units: 5, city: "Hamburg" },
    ],
    stats: {
      totalUnits: 13,
      occupancyRate: 92,
      openTickets: 2,
      monthlyRent: 11700
    }
  };
}

// Dashboard stats derived from demo data
export function getDemoDashboardData() {
  const demo = getDemoData();
  
  return {
    propertiesCount: demo.properties.length,
    totalUnits: demo.stats.totalUnits,
    occupiedUnits: Math.round(demo.stats.totalUnits * (demo.stats.occupancyRate / 100)),
    occupancyRate: demo.stats.occupancyRate,
    openTicketsCount: demo.stats.openTickets,
    pendingActionsCount: 3,
    rentThisMonthCents: demo.stats.monthlyRent * 100,
    topAiActions: [
      {
        id: "demo-1",
        urgency: 4,
        title: "Mieter Wohnung 3 hat seit 5 Tagen nicht auf Nebenkostenabrechnung reagiert.",
        actionLabel: "Erinnerung senden",
        dismissLabel: "Ignorieren",
      },
      {
        id: "demo-2",
        urgency: 3,
        title: "Mieterhöhung Wohnung 1 möglich — §558 BGB, letzte Erhöhung vor 19 Monaten (+4,2% möglich).",
        actionLabel: "Berechnen",
        dismissLabel: "Später",
      },
      {
        id: "demo-3",
        urgency: 2,
        title: "Heizungswartung Wohnung 2 — Angebot Müller Heizung: €340. Beauftragen?",
        actionLabel: "Beauftragen",
        dismissLabel: "Ablehnen",
      },
    ],
  };
}

// Demo tickets
export function getDemoTickets() {
  return [
    {
      id: "demo-t-1",
      urgency: 4,
      title: "Heizung ausgefallen",
      tenantName: "M. Richter",
      unitDesignation: "Whg. 3",
      status: "open",
      createdAt: new Date().toISOString(),
    },
    {
      id: "demo-t-2",
      urgency: 2,
      title: "Briefkasten defekt",
      tenantName: "S. Müller",
      unitDesignation: "Whg. 1",
      status: "open",
      createdAt: new Date(Date.now() - 86400000).toISOString(),
    },
  ];
}
