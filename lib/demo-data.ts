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

// Rent collection demo data
export function getDemoRentCollectionData() {
  const today = new Date();
  const dueDate = new Date(today.getFullYear(), today.getMonth(), 3);
  
  return {
    items: [
      {
        tenantId: "demo-t1",
        tenantName: "Maria Schmidt",
        propertyAddress: "Musterstraße 12",
        unitDesignation: "Whg. 2",
        coldRentCents: 120000, // €1,200
        dueDate: dueDate.toISOString(),
        paymentStatus: "paid" as const,
        daysOverdue: 0,
        mahnungLevel: 0,
        mahnungCount: 0,
      },
      {
        tenantId: "demo-t2",
        tenantName: "Hans Müller",
        propertyAddress: "Musterstraße 12",
        unitDesignation: "Whg. 3",
        coldRentCents: 98000, // €980
        dueDate: dueDate.toISOString(),
        paymentStatus: "overdue" as const,
        daysOverdue: 12,
        mahnungLevel: 2,
        mahnungCount: 1,
      },
      {
        tenantId: "demo-t3",
        tenantName: "Lisa Weber",
        propertyAddress: "Alsterblick 5",
        unitDesignation: "Whg. 1",
        coldRentCents: 145000, // €1,450
        dueDate: dueDate.toISOString(),
        paymentStatus: "paid" as const,
        daysOverdue: 0,
        mahnungLevel: 0,
        mahnungCount: 0,
      },
      {
        tenantId: "demo-t4",
        tenantName: "Thomas Klein",
        propertyAddress: "Alsterblick 5",
        unitDesignation: "Whg. 2",
        coldRentCents: 110000, // €1,100
        dueDate: dueDate.toISOString(),
        paymentStatus: "pending" as const,
        daysOverdue: 0,
        mahnungLevel: 0,
        mahnungCount: 0,
      },
      {
        tenantId: "demo-t5",
        tenantName: "Sarah Fischer",
        propertyAddress: "Musterstraße 12",
        unitDesignation: "Whg. 5",
        coldRentCents: 87500, // €875
        dueDate: dueDate.toISOString(),
        paymentStatus: "overdue" as const,
        daysOverdue: 25,
        mahnungLevel: 2,
        mahnungCount: 2,
      },
      {
        tenantId: "demo-t6",
        tenantName: "Michael Bauer",
        propertyAddress: "Alsterblick 5",
        unitDesignation: "Whg. 4",
        coldRentCents: 132000, // €1,320
        dueDate: dueDate.toISOString(),
        paymentStatus: "overdue" as const,
        daysOverdue: 5,
        mahnungLevel: 1,
        mahnungCount: 0,
      },
    ],
    stats: {
      totalRentRollCents: 692500, // €6,925 total monthly rent
      collectedThisMonthCents: 365000, // €3,650 collected (52.7%)
      outstandingCents: 327500, // €3,275 outstanding
      collectionRate: 53,
      overdueCount: 3,
    },
  };
}

// Mahnung management demo data
export function getDemoMahnungData() {
  const today = new Date();
  const dueDate = new Date(today.getFullYear(), today.getMonth(), 3);
  
  return {
    items: [
      {
        tenantId: "demo-t2",
        tenantName: "Hans Müller",
        propertyAddress: "Musterstraße 12",
        unitDesignation: "Whg. 3",
        coldRentCents: 98000,
        dueDate: dueDate.toISOString(),
        daysOverdue: 12,
        mahnungLevel: 2,
        lastMahnungDate: new Date(Date.now() - 5 * 24 * 60 * 60 * 1000).toISOString(),
        mahnungCount: 1,
      },
      {
        tenantId: "demo-t5",
        tenantName: "Sarah Fischer",
        propertyAddress: "Musterstraße 12",
        unitDesignation: "Whg. 5",
        coldRentCents: 87500,
        dueDate: dueDate.toISOString(),
        daysOverdue: 25,
        mahnungLevel: 2,
        lastMahnungDate: new Date(Date.now() - 10 * 24 * 60 * 60 * 1000).toISOString(),
        mahnungCount: 2,
      },
      {
        tenantId: "demo-t6",
        tenantName: "Michael Bauer",
        propertyAddress: "Alsterblick 5",
        unitDesignation: "Whg. 4",
        coldRentCents: 132000,
        dueDate: dueDate.toISOString(),
        daysOverdue: 5,
        mahnungLevel: 1,
        lastMahnungDate: undefined,
        mahnungCount: 0,
      },
    ],
  };
}
