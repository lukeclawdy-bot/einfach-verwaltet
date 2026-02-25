/**
 * ⚠️  MOCK IN-MEMORY DATABASE
 * 
 * This module provides a fully functional in-memory mock of the PostgreSQL database
 * described in the DB Schema spec (MC note cmm2h7bvg001p2tmimjei12u7).
 * 
 * Replace with real Drizzle ORM + Neon PostgreSQL when DATABASE_URL is set.
 * All data resets on server restart — for demo purposes only.
 * 
 * Production path:
 *   import { db } from '../lib/db'; // Drizzle + Neon
 *   Replace each mock query with equivalent Drizzle query
 */

import bcrypt from 'bcryptjs';

// ─── Types (mirror DB schema) ───────────────────────────────────────────────

export type UserRole = 'admin' | 'owner' | 'tenant' | 'agent' | 'system';

export interface User {
  id: string;
  email: string;
  emailVerified: boolean;
  name: string; // decrypted for mock; in prod: name_encrypted BYTEA
  phone?: string;
  passwordHash: string;
  role: UserRole;
  organizationId: string;
  locale: string;
  timezone: string;
  mfaEnabled: boolean;
  lastLoginAt?: Date;
  failedLoginCount: number;
  lockedUntil?: Date;
  createdAt: Date;
  updatedAt: Date;
  deletedAt?: Date;
}

export interface Organization {
  id: string;
  name: string;
  slug: string;
  plan: 'starter' | 'growth' | 'enterprise';
  unitLimit?: number;
  settings: Record<string, unknown>;
  createdAt: Date;
  updatedAt: Date;
  deletedAt?: Date;
}

export type PropertyType = 'weg' | 'miet' | 'mixed';

export interface Property {
  id: string;
  organizationId: string;
  name: string;
  addressStreet: string;
  addressCity: string;
  addressZip: string;
  addressCountry: string;
  propertyType: PropertyType;
  yearBuilt?: number;
  totalUnits: number;
  energyClass?: string;
  settings: Record<string, unknown>;
  createdAt: Date;
  updatedAt: Date;
  deletedAt?: Date;
}

export type UnitStatus = 'occupied' | 'vacant' | 'maintenance';

export interface Unit {
  id: string;
  propertyId: string;
  organizationId: string;
  unitNumber: string;
  floor?: number;
  areaSqm?: number;
  rooms?: number;
  unitType: 'apartment' | 'commercial' | 'parking' | 'storage' | 'other';
  status: UnitStatus;
  settings: Record<string, unknown>;
  createdAt: Date;
  updatedAt: Date;
  deletedAt?: Date;
}

export type TicketCategory = 'repair' | 'billing' | 'noise' | 'cleanliness' | 'emergency' | 'contract' | 'neighbor' | 'general' | 'other';
export type TicketPriority = 'low' | 'normal' | 'high' | 'emergency';
export type TicketStatus = 'open' | 'ai_processing' | 'waiting_tenant' | 'waiting_partner' | 'in_progress' | 'resolved' | 'closed' | 'escalated';

export interface Ticket {
  id: string;
  organizationId: string;
  propertyId?: string;
  unitId?: string;
  tenancyId?: string;
  reporterId?: string;
  title: string;
  description?: string;
  category: TicketCategory;
  priority: TicketPriority;
  status: TicketStatus;
  assignedTo?: string;
  aiSummary?: string;
  resolutionNote?: string;
  slaDueAt?: Date;
  resolvedAt?: Date;
  createdAt: Date;
  updatedAt: Date;
  deletedAt?: Date;
}

export interface Tenancy {
  id: string;
  unitId: string;
  organizationId: string;
  tenantName: string; // decrypted for mock
  tenantEmail: string; // decrypted for mock
  tenantPhone?: string;
  rentColdCents: number;
  rentWarmCents: number;
  depositCents?: number;
  leaseStart: Date;
  leaseEnd?: Date;
  noticePeriodMonths: number;
  leaseType: 'unbefristet' | 'befristet' | 'gewerblich';
  status: 'active' | 'notice' | 'ended' | 'archived';
  userId?: string;
  createdAt: Date;
  updatedAt: Date;
  deletedAt?: Date;
}

export interface RefreshToken {
  id: string;
  userId: string;
  tokenHash: string;
  family: string;
  expiresAt: Date;
  usedAt?: Date;
  revokedAt?: Date;
  createdAt: Date;
}

// ─── Seed Data ───────────────────────────────────────────────────────────────

const ORG_ID = 'org_demo001';
const ADMIN_USER_ID = 'usr_admin001';
const OWNER_USER_ID = 'usr_owner001';
const TENANT_USER_ID = 'usr_tenant001';

const PROP_A_ID = 'prop_musterstr12';
const PROP_B_ID = 'prop_hamburgallee5';

// bcrypt hash of "demo1234" — pre-computed to avoid startup delay
const DEMO_PASSWORD_HASH = '$2a$10$tYxQv5PKIKO6d2o6T/7Hx.jc7oWMc94NBQRo6LqSdWfWrEEnXcWoy'; // "demo1234"

export const mockDB = {
  organizations: new Map<string, Organization>([
    [ORG_ID, {
      id: ORG_ID,
      name: 'Muster Hausverwaltung GmbH',
      slug: 'muster-hausverwaltung',
      plan: 'growth',
      unitLimit: 500,
      settings: { defaultLocale: 'de-DE', timezone: 'Europe/Berlin' },
      createdAt: new Date('2026-01-01'),
      updatedAt: new Date('2026-01-01'),
    }],
  ]),

  users: new Map<string, User>([
    [ADMIN_USER_ID, {
      id: ADMIN_USER_ID,
      email: 'admin@einfachverwaltet.de',
      emailVerified: true,
      name: 'Admin User',
      passwordHash: DEMO_PASSWORD_HASH,
      role: 'admin',
      organizationId: ORG_ID,
      locale: 'de-DE',
      timezone: 'Europe/Berlin',
      mfaEnabled: false,
      failedLoginCount: 0,
      createdAt: new Date('2026-01-01'),
      updatedAt: new Date('2026-01-01'),
    }],
    [OWNER_USER_ID, {
      id: OWNER_USER_ID,
      email: 'thomas.mueller@example.de',
      emailVerified: true,
      name: 'Thomas Müller',
      passwordHash: DEMO_PASSWORD_HASH,
      role: 'owner',
      organizationId: ORG_ID,
      locale: 'de-DE',
      timezone: 'Europe/Berlin',
      mfaEnabled: false,
      failedLoginCount: 0,
      createdAt: new Date('2026-01-15'),
      updatedAt: new Date('2026-01-15'),
    }],
    [TENANT_USER_ID, {
      id: TENANT_USER_ID,
      email: 'julia.klein@example.de',
      emailVerified: true,
      name: 'Julia Klein',
      passwordHash: DEMO_PASSWORD_HASH,
      role: 'tenant',
      organizationId: ORG_ID,
      locale: 'de-DE',
      timezone: 'Europe/Berlin',
      mfaEnabled: false,
      failedLoginCount: 0,
      createdAt: new Date('2026-01-20'),
      updatedAt: new Date('2026-01-20'),
    }],
  ]),

  properties: new Map<string, Property>([
    [PROP_A_ID, {
      id: PROP_A_ID,
      organizationId: ORG_ID,
      name: 'Musterstraße 12',
      addressStreet: 'Musterstraße 12',
      addressCity: 'Hamburg',
      addressZip: '20095',
      addressCountry: 'DE',
      propertyType: 'miet',
      yearBuilt: 1975,
      totalUnits: 12,
      energyClass: 'D',
      settings: {},
      createdAt: new Date('2026-01-01'),
      updatedAt: new Date('2026-01-01'),
    }],
    [PROP_B_ID, {
      id: PROP_B_ID,
      organizationId: ORG_ID,
      name: 'Hamburger Allee 5',
      addressStreet: 'Hamburger Allee 5',
      addressCity: 'Hamburg',
      addressZip: '22085',
      addressCountry: 'DE',
      propertyType: 'weg',
      yearBuilt: 1990,
      totalUnits: 8,
      energyClass: 'C',
      settings: {},
      createdAt: new Date('2026-01-15'),
      updatedAt: new Date('2026-01-15'),
    }],
  ]),

  units: new Map<string, Unit>([
    ['unit_ms12_1a', { id: 'unit_ms12_1a', propertyId: PROP_A_ID, organizationId: ORG_ID, unitNumber: '1A', floor: 1, areaSqm: 65.5, rooms: 3, unitType: 'apartment', status: 'occupied', settings: {}, createdAt: new Date('2026-01-01'), updatedAt: new Date('2026-01-01') }],
    ['unit_ms12_1b', { id: 'unit_ms12_1b', propertyId: PROP_A_ID, organizationId: ORG_ID, unitNumber: '1B', floor: 1, areaSqm: 78.0, rooms: 3.5, unitType: 'apartment', status: 'occupied', settings: {}, createdAt: new Date('2026-01-01'), updatedAt: new Date('2026-01-01') }],
    ['unit_ms12_2a', { id: 'unit_ms12_2a', propertyId: PROP_A_ID, organizationId: ORG_ID, unitNumber: '2A', floor: 2, areaSqm: 55.0, rooms: 2, unitType: 'apartment', status: 'vacant', settings: {}, createdAt: new Date('2026-01-01'), updatedAt: new Date('2026-01-01') }],
    ['unit_ms12_2b', { id: 'unit_ms12_2b', propertyId: PROP_A_ID, organizationId: ORG_ID, unitNumber: '2B', floor: 2, areaSqm: 82.0, rooms: 4, unitType: 'apartment', status: 'occupied', settings: {}, createdAt: new Date('2026-01-01'), updatedAt: new Date('2026-01-01') }],
    ['unit_ms12_3a', { id: 'unit_ms12_3a', propertyId: PROP_A_ID, organizationId: ORG_ID, unitNumber: '3A', floor: 3, areaSqm: 68.5, rooms: 3, unitType: 'apartment', status: 'occupied', settings: {}, createdAt: new Date('2026-01-01'), updatedAt: new Date('2026-01-01') }],
    ['unit_ms12_3b', { id: 'unit_ms12_3b', propertyId: PROP_A_ID, organizationId: ORG_ID, unitNumber: '3B', floor: 3, areaSqm: 72.0, rooms: 3.5, unitType: 'apartment', status: 'maintenance', settings: {}, createdAt: new Date('2026-01-01'), updatedAt: new Date('2026-01-01') }],
    ['unit_ha5_1', { id: 'unit_ha5_1', propertyId: PROP_B_ID, organizationId: ORG_ID, unitNumber: '1', floor: 0, areaSqm: 90.0, rooms: 4, unitType: 'apartment', status: 'occupied', settings: {}, createdAt: new Date('2026-01-15'), updatedAt: new Date('2026-01-15') }],
    ['unit_ha5_2', { id: 'unit_ha5_2', propertyId: PROP_B_ID, organizationId: ORG_ID, unitNumber: '2', floor: 1, areaSqm: 85.0, rooms: 3.5, unitType: 'apartment', status: 'occupied', settings: {}, createdAt: new Date('2026-01-15'), updatedAt: new Date('2026-01-15') }],
    ['unit_ha5_3', { id: 'unit_ha5_3', propertyId: PROP_B_ID, organizationId: ORG_ID, unitNumber: '3', floor: 2, areaSqm: 95.0, rooms: 4.5, unitType: 'apartment', status: 'vacant', settings: {}, createdAt: new Date('2026-01-15'), updatedAt: new Date('2026-01-15') }],
  ]),

  tenancies: new Map<string, Tenancy>([
    ['ten_1a', { id: 'ten_1a', unitId: 'unit_ms12_1a', organizationId: ORG_ID, tenantName: 'Anna Schulz', tenantEmail: 'anna.schulz@example.de', rentColdCents: 87500, rentWarmCents: 105500, depositCents: 262500, leaseStart: new Date('2022-03-01'), noticePeriodMonths: 3, leaseType: 'unbefristet', status: 'active', userId: TENANT_USER_ID, createdAt: new Date('2022-03-01'), updatedAt: new Date('2022-03-01') }],
    ['ten_1b', { id: 'ten_1b', unitId: 'unit_ms12_1b', organizationId: ORG_ID, tenantName: 'Klaus Becker', tenantEmail: 'k.becker@example.de', rentColdCents: 105000, rentWarmCents: 125000, depositCents: 315000, leaseStart: new Date('2020-06-01'), noticePeriodMonths: 3, leaseType: 'unbefristet', status: 'active', createdAt: new Date('2020-06-01'), updatedAt: new Date('2020-06-01') }],
    ['ten_2b', { id: 'ten_2b', unitId: 'unit_ms12_2b', organizationId: ORG_ID, tenantName: 'Maria Weber', tenantEmail: 'm.weber@example.de', rentColdCents: 112000, rentWarmCents: 132000, depositCents: 336000, leaseStart: new Date('2023-09-01'), noticePeriodMonths: 3, leaseType: 'unbefristet', status: 'active', createdAt: new Date('2023-09-01'), updatedAt: new Date('2023-09-01') }],
    ['ten_3a', { id: 'ten_3a', unitId: 'unit_ms12_3a', organizationId: ORG_ID, tenantName: 'Julia Klein', tenantEmail: 'julia.klein@example.de', rentColdCents: 92000, rentWarmCents: 110000, depositCents: 276000, leaseStart: new Date('2019-04-01'), noticePeriodMonths: 3, leaseType: 'unbefristet', status: 'active', createdAt: new Date('2019-04-01'), updatedAt: new Date('2019-04-01') }],
    ['ten_ha5_1', { id: 'ten_ha5_1', unitId: 'unit_ha5_1', organizationId: ORG_ID, tenantName: 'Peter Hoffmann', tenantEmail: 'p.hoffmann@example.de', rentColdCents: 135000, rentWarmCents: 158000, depositCents: 405000, leaseStart: new Date('2021-01-01'), noticePeriodMonths: 3, leaseType: 'unbefristet', status: 'active', createdAt: new Date('2021-01-01'), updatedAt: new Date('2021-01-01') }],
    ['ten_ha5_2', { id: 'ten_ha5_2', unitId: 'unit_ha5_2', organizationId: ORG_ID, tenantName: 'Sandra Fischer', tenantEmail: 's.fischer@example.de', rentColdCents: 122000, rentWarmCents: 145000, depositCents: 366000, leaseStart: new Date('2024-02-01'), noticePeriodMonths: 3, leaseType: 'unbefristet', status: 'active', createdAt: new Date('2024-02-01'), updatedAt: new Date('2024-02-01') }],
  ]),

  tickets: new Map<string, Ticket>([
    ['tkt_001', { id: 'tkt_001', organizationId: ORG_ID, propertyId: PROP_A_ID, unitId: 'unit_ms12_1a', tenancyId: 'ten_1a', reporterId: TENANT_USER_ID, title: 'Heizung ausgefallen — Wohnung kalt', description: 'Seit gestern Abend funktioniert die Heizung nicht mehr. Außentemperatur unter 0°C.', category: 'repair', priority: 'emergency', status: 'in_progress', slaDueAt: new Date(Date.now() + 2 * 60 * 60 * 1000), createdAt: new Date(Date.now() - 5 * 60 * 60 * 1000), updatedAt: new Date(Date.now() - 2 * 60 * 60 * 1000) }],
    ['tkt_002', { id: 'tkt_002', organizationId: ORG_ID, propertyId: PROP_A_ID, unitId: 'unit_ms12_2b', tenancyId: 'ten_2b', title: 'Wasserhahn im Bad tropft', description: 'Der Wasserhahn im Badezimmer tropft seit ca. 3 Tagen. Bitte um schnelle Reparatur.', category: 'repair', priority: 'normal', status: 'open', slaDueAt: new Date(Date.now() + 5 * 24 * 60 * 60 * 1000), createdAt: new Date(Date.now() - 3 * 24 * 60 * 60 * 1000), updatedAt: new Date(Date.now() - 3 * 24 * 60 * 60 * 1000) }],
    ['tkt_003', { id: 'tkt_003', organizationId: ORG_ID, propertyId: PROP_B_ID, unitId: 'unit_ha5_1', tenancyId: 'ten_ha5_1', title: 'Lärmbelästigung durch Nachbarn', description: 'Nachbar in Wohnung 2 macht täglich bis 23:30 Uhr laute Musik.', category: 'noise', priority: 'normal', status: 'open', createdAt: new Date(Date.now() - 1 * 24 * 60 * 60 * 1000), updatedAt: new Date(Date.now() - 1 * 24 * 60 * 60 * 1000) }],
    ['tkt_004', { id: 'tkt_004', organizationId: ORG_ID, propertyId: PROP_A_ID, unitId: 'unit_ms12_3a', tenancyId: 'ten_3a', title: 'Schimmelflecken im Badezimmer', description: 'Im Badezimmer sind Schimmelflecken hinter der Dusche entdeckt worden.', category: 'repair', priority: 'high', status: 'waiting_partner', slaDueAt: new Date(Date.now() + 24 * 60 * 60 * 1000), createdAt: new Date(Date.now() - 7 * 24 * 60 * 60 * 1000), updatedAt: new Date(Date.now() - 1 * 24 * 60 * 60 * 1000) }],
    ['tkt_005', { id: 'tkt_005', organizationId: ORG_ID, propertyId: PROP_B_ID, unitId: 'unit_ha5_2', tenancyId: 'ten_ha5_2', title: 'Frage zur Nebenkostenabrechnung 2025', description: 'Ich verstehe die Position "Aufzugwartung" in meiner Nebenkostenabrechnung nicht.', category: 'billing', priority: 'low', status: 'resolved', resolvedAt: new Date(Date.now() - 2 * 24 * 60 * 60 * 1000), createdAt: new Date(Date.now() - 10 * 24 * 60 * 60 * 1000), updatedAt: new Date(Date.now() - 2 * 24 * 60 * 60 * 1000) }],
  ]),

  refreshTokens: new Map<string, RefreshToken>(),
};

// ─── Helper: generate simple IDs ─────────────────────────────────────────────

let counter = 1000;
export function generateId(prefix: string): string {
  return `${prefix}_${Date.now()}_${(counter++).toString(36)}`;
}

// ─── Query helpers ────────────────────────────────────────────────────────────

export const MockDB = {
  // Users
  async findUserByEmail(email: string): Promise<User | undefined> {
    for (const user of mockDB.users.values()) {
      if (user.email === email && !user.deletedAt) return user;
    }
    return undefined;
  },

  async findUserById(id: string): Promise<User | undefined> {
    const user = mockDB.users.get(id);
    return user && !user.deletedAt ? user : undefined;
  },

  async verifyPassword(password: string, hash: string): Promise<boolean> {
    return bcrypt.compare(password, hash);
  },

  // Properties (org-scoped)
  async listProperties(organizationId: string): Promise<Property[]> {
    const result: Property[] = [];
    for (const p of mockDB.properties.values()) {
      if (p.organizationId === organizationId && !p.deletedAt) result.push(p);
    }
    return result.sort((a, b) => a.createdAt.getTime() - b.createdAt.getTime());
  },

  async findPropertyById(id: string, organizationId: string): Promise<Property | undefined> {
    const p = mockDB.properties.get(id);
    return p && p.organizationId === organizationId && !p.deletedAt ? p : undefined;
  },

  async createProperty(data: Omit<Property, 'id' | 'createdAt' | 'updatedAt'>): Promise<Property> {
    const property: Property = {
      ...data,
      id: generateId('prop'),
      createdAt: new Date(),
      updatedAt: new Date(),
    };
    mockDB.properties.set(property.id, property);
    return property;
  },

  // Units
  async listUnitsByProperty(propertyId: string): Promise<Unit[]> {
    const result: Unit[] = [];
    for (const u of mockDB.units.values()) {
      if (u.propertyId === propertyId && !u.deletedAt) result.push(u);
    }
    return result;
  },

  async listUnitsByOrg(organizationId: string): Promise<Unit[]> {
    const result: Unit[] = [];
    for (const u of mockDB.units.values()) {
      if (u.organizationId === organizationId && !u.deletedAt) result.push(u);
    }
    return result;
  },

  // Tenancies
  async listActiveTenanciesByOrg(organizationId: string): Promise<Tenancy[]> {
    const result: Tenancy[] = [];
    for (const t of mockDB.tenancies.values()) {
      if (t.organizationId === organizationId && t.status === 'active' && !t.deletedAt) result.push(t);
    }
    return result;
  },

  // Tickets
  async listTickets(filters: {
    organizationId: string;
    propertyId?: string;
    unitId?: string;
    status?: string;
    priority?: string;
    category?: string;
    page?: number;
    limit?: number;
  }): Promise<{ tickets: Ticket[]; total: number }> {
    let result: Ticket[] = [];
    for (const t of mockDB.tickets.values()) {
      if (t.organizationId !== filters.organizationId || t.deletedAt) continue;
      if (filters.propertyId && t.propertyId !== filters.propertyId) continue;
      if (filters.unitId && t.unitId !== filters.unitId) continue;
      if (filters.status && t.status !== filters.status) continue;
      if (filters.priority && t.priority !== filters.priority) continue;
      if (filters.category && t.category !== filters.category) continue;
      result.push(t);
    }
    result.sort((a, b) => b.createdAt.getTime() - a.createdAt.getTime());
    const total = result.length;
    const page = filters.page ?? 1;
    const limit = filters.limit ?? 20;
    result = result.slice((page - 1) * limit, page * limit);
    return { tickets: result, total };
  },

  async findTicketById(id: string, organizationId: string): Promise<Ticket | undefined> {
    const t = mockDB.tickets.get(id);
    return t && t.organizationId === organizationId && !t.deletedAt ? t : undefined;
  },

  async createTicket(data: Omit<Ticket, 'id' | 'createdAt' | 'updatedAt'>): Promise<Ticket> {
    const ticket: Ticket = {
      ...data,
      id: generateId('tkt'),
      createdAt: new Date(),
      updatedAt: new Date(),
    };
    mockDB.tickets.set(ticket.id, ticket);
    return ticket;
  },

  // Dashboard summary
  async getDashboardSummary(organizationId: string): Promise<{
    totalUnits: number;
    occupiedUnits: number;
    vacantUnits: number;
    maintenanceUnits: number;
    occupancyRate: number;
    monthlyContractedCents: number;
    openTickets: number;
    highPriorityTickets: number;
    propertiesCount: number;
    activeTenantsCount: number;
  }> {
    const units = await MockDB.listUnitsByOrg(organizationId);
    const tenancies = await MockDB.listActiveTenanciesByOrg(organizationId);
    const properties = await MockDB.listProperties(organizationId);

    const occupiedUnits = units.filter(u => u.status === 'occupied').length;
    const vacantUnits = units.filter(u => u.status === 'vacant').length;
    const maintenanceUnits = units.filter(u => u.status === 'maintenance').length;
    const totalUnits = units.length;

    let openTickets = 0;
    let highPriorityTickets = 0;
    for (const t of mockDB.tickets.values()) {
      if (t.organizationId === organizationId && !t.deletedAt && !['resolved', 'closed'].includes(t.status)) {
        openTickets++;
        if (['high', 'emergency'].includes(t.priority)) highPriorityTickets++;
      }
    }

    const monthlyContractedCents = tenancies.reduce((sum, t) => sum + t.rentColdCents, 0);

    return {
      totalUnits,
      occupiedUnits,
      vacantUnits,
      maintenanceUnits,
      occupancyRate: totalUnits > 0 ? Math.round((occupiedUnits / totalUnits) * 1000) / 10 : 0,
      monthlyContractedCents,
      openTickets,
      highPriorityTickets,
      propertiesCount: properties.length,
      activeTenantsCount: tenancies.length,
    };
  },

  // Refresh tokens
  async storeRefreshToken(token: RefreshToken): Promise<void> {
    mockDB.refreshTokens.set(token.id, token);
  },

  async findRefreshToken(tokenHash: string): Promise<RefreshToken | undefined> {
    for (const rt of mockDB.refreshTokens.values()) {
      if (rt.tokenHash === tokenHash && !rt.revokedAt) return rt;
    }
    return undefined;
  },

  async revokeRefreshTokenFamily(family: string): Promise<void> {
    for (const [id, rt] of mockDB.refreshTokens.entries()) {
      if (rt.family === family) {
        mockDB.refreshTokens.set(id, { ...rt, revokedAt: new Date() });
      }
    }
  },
};
