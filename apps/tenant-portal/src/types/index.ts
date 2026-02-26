// ─────────────────────────────────────────────
// PropOS Tenant Portal — Type Definitions
// ─────────────────────────────────────────────

export type TicketStatus = "open" | "in_progress" | "resolved" | "closed";

export type TicketCategory =
  | "repair"
  | "billing"
  | "noise"
  | "cleanliness"
  | "emergency"
  | "contract"
  | "neighbor"
  | "general"
  | "other";

export type TicketPriority = "low" | "normal" | "high" | "emergency";

export interface Ticket {
  id: string;
  title: string;
  description: string;
  category: TicketCategory;
  priority: TicketPriority;
  status: TicketStatus;
  propertyId?: string;
  unitId?: string;
  createdAt: string;
  updatedAt: string;
  resolvedAt?: string;
  resolutionNote?: string;
  tenantId?: string;
}

export interface CreateTicketPayload {
  title: string;
  description: string;
  category: TicketCategory;
  priority: TicketPriority;
  propertyId?: string;
  unitId?: string;
}

export interface User {
  id: string;
  email: string;
  name: string;
  role: "tenant" | "admin" | "agent" | "owner";
  organizationId: string;
}

export interface AuthToken {
  accessToken: string;
  expiresIn: number;
  tokenType: string;
  user: User;
}

export interface DashboardSummary {
  kpis: {
    totalUnits: number;
    occupiedUnits: number;
    openTickets: number;
    highPriorityTickets: number;
    propertiesCount: number;
    activeTenantsCount: number;
  };
  alerts: Array<{
    id: string;
    severity: "info" | "warning" | "critical";
    type: string;
    title: string;
    description: string;
    actionUrl?: string;
  }>;
}

// German UI labels
export const CATEGORY_LABELS: Record<TicketCategory, string> = {
  repair: "Reparatur",
  billing: "Abrechnung",
  noise: "Lärmbelästigung",
  cleanliness: "Sauberkeit",
  emergency: "Notfall",
  contract: "Mietvertrag",
  neighbor: "Nachbar",
  general: "Allgemein",
  other: "Sonstiges",
};

export const STATUS_LABELS: Record<TicketStatus, string> = {
  open: "Offen",
  in_progress: "In Bearbeitung",
  resolved: "Erledigt",
  closed: "Geschlossen",
};

export const PRIORITY_LABELS: Record<TicketPriority, string> = {
  low: "Niedrig",
  normal: "Normal",
  high: "Hoch",
  emergency: "Notfall",
};

// Repair categories for the form (subset + mapped to API categories)
export const REPAIR_CATEGORIES: Array<{
  value: TicketCategory;
  label: string;
  icon: string;
}> = [
  { value: "repair", label: "Heizung", icon: "🔥" },
  { value: "repair", label: "Wasser / Sanitär", icon: "💧" },
  { value: "repair", label: "Elektrik", icon: "⚡" },
  { value: "repair", label: "Türen / Fenster", icon: "🚪" },
  { value: "other", label: "Sonstiges", icon: "🔧" },
];
