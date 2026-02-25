# einfach verwaltet. — Backend API

> **PropOS Platform | Hono.js REST API MVP**  
> Built by p3-product | Version 1.0.0-mvp

A production-ready Hono.js REST API for the *einfach verwaltet.* property management platform. JWT-authenticated, Zod-validated, Claude-powered AI tenant communication.

---

## Quick Start

```bash
cd apps/api
cp .env.example .env
npm install
npm run dev
```

Server starts at `http://localhost:3001`

**Demo credentials (mock DB, resets on restart):**
| Role | Email | Password |
|------|-------|----------|
| Admin | admin@einfachverwaltet.de | demo1234 |
| Owner | thomas.mueller@example.de | demo1234 |
| Tenant | julia.klein@example.de | demo1234 |

---

## API Reference

### Health Check

```
GET /api/health
```

No auth required. Returns service status and data source (mock vs PostgreSQL).

---

### Authentication

#### Login
```http
POST /api/auth/login
Content-Type: application/json

{
  "email": "thomas.mueller@example.de",
  "password": "demo1234"
}
```

**Response 200:**
```json
{
  "accessToken": "eyJ...",
  "expiresIn": 900,
  "tokenType": "Bearer",
  "user": {
    "id": "usr_owner001",
    "email": "thomas.mueller@example.de",
    "name": "Thomas Müller",
    "role": "owner",
    "organizationId": "org_demo001"
  }
}
```

Use the `accessToken` as `Authorization: Bearer <token>` on all subsequent requests.

#### Get Current User
```http
GET /api/auth/me
Authorization: Bearer <token>
```

#### Logout
```http
POST /api/auth/logout
Authorization: Bearer <token>
```

---

### Properties

All endpoints require `Authorization: Bearer <token>`.

#### Create Property
```http
POST /api/properties
Authorization: Bearer <token>
Content-Type: application/json

{
  "name": "Musterstraße 12",
  "addressStreet": "Musterstraße 12",
  "addressCity": "Hamburg",
  "addressZip": "20095",
  "propertyType": "miet",
  "yearBuilt": 1975,
  "totalUnits": 12,
  "energyClass": "D"
}
```

**Required roles:** `admin`, `agent`

**Fields:**
| Field | Type | Required | Notes |
|-------|------|----------|-------|
| name | string | ✅ | |
| addressStreet | string | ✅ | |
| addressCity | string | ✅ | |
| addressZip | string | ✅ | Must be 5 digits (German PLZ) |
| propertyType | enum | ✅ | `weg` \| `miet` \| `mixed` |
| yearBuilt | number | ❌ | 1800–2100 |
| totalUnits | number | ❌ | Default: 1 |
| energyClass | enum | ❌ | `A+` \| `A` \| ... \| `H` |

#### List Properties
```http
GET /api/properties
Authorization: Bearer <token>
```

Returns all properties for the authenticated user's organization, enriched with unit occupancy counts.

#### Get Property Detail
```http
GET /api/properties/:id
Authorization: Bearer <token>
```

Returns property + all units with their current status.

#### List Units for Property
```http
GET /api/properties/:id/units
Authorization: Bearer <token>
```

---

### Tickets (Maintenance / Support)

#### Create Ticket
```http
POST /api/tickets
Authorization: Bearer <token>
Content-Type: application/json

{
  "title": "Heizung ausgefallen",
  "description": "Keine Heizung seit gestern Abend. Außentemperatur -5°C.",
  "category": "repair",
  "priority": "emergency",
  "propertyId": "prop_musterstr12",
  "unitId": "unit_ms12_1a"
}
```

**Categories:** `repair` | `billing` | `noise` | `cleanliness` | `emergency` | `contract` | `neighbor` | `general` | `other`

**Priorities:** `low` | `normal` | `high` | `emergency`

**SLA assignment by priority:**
| Priority | SLA |
|----------|-----|
| emergency | 2 hours |
| high | 24 hours |
| normal | 5 business days |
| low | 30 days |

#### List Tickets (with filters)
```http
GET /api/tickets?status=open&priority=high&propertyId=prop_musterstr12&page=1&limit=20
Authorization: Bearer <token>
```

**Query params:** `status`, `priority`, `category`, `propertyId`, `unitId`, `page`, `limit`

#### Get Ticket Detail
```http
GET /api/tickets/:id
Authorization: Bearer <token>
```

#### Update Ticket
```http
PATCH /api/tickets/:id
Authorization: Bearer <token>
Content-Type: application/json

{
  "status": "resolved",
  "resolutionNote": "Heizungstechniker vor Ort — defektes Thermostat ausgetauscht."
}
```

---

### Dashboard (KPIs)

#### Portfolio Summary
```http
GET /api/dashboard/summary
Authorization: Bearer <token>
```

**Response:**
```json
{
  "kpis": {
    "totalUnits": 9,
    "occupiedUnits": 6,
    "vacantUnits": 2,
    "maintenanceUnits": 1,
    "occupancyRate": 66.7,
    "monthlyContractedCents": 653500,
    "monthlyContractedEur": 6535,
    "openTickets": 4,
    "highPriorityTickets": 2,
    "propertiesCount": 2,
    "activeTenantsCount": 6
  },
  "alerts": [
    {
      "id": "alert_high_prio_tickets",
      "severity": "critical",
      "type": "high_priority_tickets",
      "title": "2 dringende Tickets",
      "description": "...",
      "actionUrl": "/maintenance?status=open&priority=high"
    }
  ],
  "generatedAt": "2026-02-26T...",
  "dataSource": "mock_in_memory"
}
```

#### Properties Summary
```http
GET /api/dashboard/properties
Authorization: Bearer <token>
```

---

### AI Chat (Tenant Communication Engine)

```http
POST /api/ai/chat
Authorization: Bearer <token>
Content-Type: application/json

{
  "message": "Die Heizung in meiner Wohnung funktioniert seit gestern nicht mehr.",
  "context": {
    "propertyAddress": "Musterstraße 12",
    "unitNumber": "1A",
    "tenantName": "Anna Schulz"
  }
}
```

**Response:**
```json
{
  "response": "Vielen Dank für Ihre Meldung...",
  "intent": "repair_request",
  "confidence": 0.95,
  "urgency": "high",
  "requiresHumanReview": false,
  "escalated": false,
  "ticketPriority": "high",
  "suggestedAction": "Ticket erstellen und Handwerker beauftragen"
}
```

**Intents detected:**
- `repair_request` — Reparaturanfragen (auto-resolved)
- `noise_complaint` — Lärmbesch­werden (auto-resolved)
- `payment_question` — Zahlungsfragen (auto-resolved)
- `document_request` — Dokument­anfragen (auto-resolved)
- `lease_question` — Mietvertragsfragen (partial)
- `emergency` — Notfälle → immediate human escalation
- `other` — Alles andere

**Without `ANTHROPIC_API_KEY`:** Returns rule-based mock responses (clearly flagged with `dataSource: "mock_rules"`).

#### List Intents
```http
GET /api/ai/intents
```

---

## Environment Variables

Copy `.env.example` to `.env`:

```bash
# Server
PORT=3001
NODE_ENV=development

# JWT (generate: openssl rand -base64 64)
JWT_SECRET=your_64_char_secret_here
JWT_EXPIRES_IN=15m

# Database — leave empty to use mock in-memory DB
DATABASE_URL=postgresql://user:pass@host/propos?sslmode=require

# AI — leave empty for rule-based mock responses
ANTHROPIC_API_KEY=sk-ant-...

# CORS
CORS_ORIGINS=http://localhost:3000
```

---

## Tech Stack

| Layer | Technology |
|-------|-----------|
| Framework | [Hono.js](https://hono.dev) v4 |
| Language | TypeScript 5 |
| Validation | [Zod](https://zod.dev) v3 |
| Auth | JWT via [jose](https://github.com/panva/jose) |
| Passwords | bcryptjs (argon2id in prod) |
| AI | [Anthropic Claude](https://anthropic.com) (Sonnet 4.5 + Haiku 4.5) |
| DB (prod) | PostgreSQL 16 via [Neon](https://neon.tech) + Drizzle ORM |
| DB (dev) | In-memory mock (this repo) |
| Queue | BullMQ on Redis (not yet implemented in MVP) |
| Runtime | Node.js ≥ 20 |

---

## Database

### Mock Mode (default)
No database required. In-memory mock with pre-seeded demo data:
- 2 properties (Musterstraße 12, Hamburger Allee 5)
- 9 units, 6 active tenancies
- 5 sample tickets

**Data resets on every server restart.**

### PostgreSQL (Production)
Set `DATABASE_URL` in `.env`. The API uses the schema designed in:
- DB Schema spec: MC note `cmm2h7bvg001p2tmimjei12u7`

Production migration path:
```bash
# Install Drizzle ORM
npm install drizzle-orm @neondatabase/serverless
npm install -D drizzle-kit

# Generate migrations
npx drizzle-kit generate

# Run migrations
npx drizzle-kit migrate
```

Replace mock imports with Drizzle queries — the route handlers are already structured for this swap.

---

## Architecture

```
apps/api/
├── src/
│   ├── index.ts              # App entry point, middleware, server
│   ├── routes/
│   │   ├── auth/
│   │   │   └── auth.routes.ts      # POST /api/auth/login|logout, GET /api/auth/me
│   │   ├── properties/
│   │   │   └── properties.routes.ts # CRUD /api/properties
│   │   ├── tickets/
│   │   │   └── tickets.routes.ts    # CRUD /api/tickets
│   │   ├── dashboard/
│   │   │   └── dashboard.routes.ts  # GET /api/dashboard/summary
│   │   └── ai/
│   │       └── ai.routes.ts         # POST /api/ai/chat
│   ├── middleware/
│   │   └── auth.ts           # JWT verification, role check, org isolation
│   ├── lib/
│   │   ├── jwt.ts            # Token sign/verify utilities
│   │   └── errors.ts         # Standardized error responses
│   └── mock/
│       └── db.ts             # ⚠️ In-memory mock DB + seed data
├── .env.example
├── package.json
├── tsconfig.json
└── README.md
```

---

## RBAC — Role-Based Access Control

| Endpoint | admin | agent | owner | tenant |
|----------|-------|-------|-------|--------|
| POST /api/properties | ✅ | ✅ | ❌ | ❌ |
| GET /api/properties | ✅ | ✅ | ✅ | ❌ |
| POST /api/tickets | ✅ | ✅ | ❌ | ✅ |
| GET /api/tickets | ✅ | ✅ | ✅ | own only |
| PATCH /api/tickets (resolve) | ✅ | ✅ | ❌ | ❌ |
| GET /api/dashboard/summary | ✅ | ✅ | ✅ | ❌ |
| POST /api/ai/chat | ✅ | ✅ | ❌ | ✅ |

---

## Error Format

All errors follow this shape:
```json
{
  "error": "Human-readable message",
  "code": "ERROR_CODE",
  "details": [...]  // optional, validation errors
}
```

**HTTP Status Codes:**
- `200` — Success
- `201` — Created
- `401` — Unauthorized / token expired
- `403` — Forbidden (role/org)
- `404` — Not found
- `422` — Validation error
- `423` — Account locked
- `500` — Server error

---

## Development Notes

### ⚠️ Mock Sections
All mock behavior is clearly marked with:
```typescript
// ⚠️ MOCK: [description]
```

Or in API responses:
```json
"dataSource": "mock_in_memory"
"dataSource": "mock_rules"
```

### Production Readiness Checklist
- [ ] Set `DATABASE_URL` to Neon PostgreSQL
- [ ] Set `ANTHROPIC_API_KEY`
- [ ] Generate strong `JWT_SECRET` (min 64 chars)
- [ ] Configure `CORS_ORIGINS` for your domain
- [ ] Switch password hashing to argon2id (`argon2` npm package)
- [ ] Implement Drizzle ORM query layer (replace `src/mock/db.ts`)
- [ ] Add Redis + BullMQ for async AI job processing
- [ ] Enable RLS in PostgreSQL (see DB Schema spec)
- [ ] Add rate limiting (`hono/rate-limiter`)
- [ ] Add request ID middleware for distributed tracing

---

## References

- **DB Schema Spec:** MC note `cmm2h7bvg001p2tmimjei12u7`
- **Tenant Comms Engine Spec:** MC note `cmm2i4kca004v2tmi6pedjzon`
- **Owner Dashboard Spec:** MC note `cmm2isixq005v2tmiic3x1pv9`
- **Hono.js Docs:** https://hono.dev
- **Drizzle ORM:** https://orm.drizzle.team
- **Neon PostgreSQL:** https://neon.tech

---

*einfach verwaltet. GmbH — Hamburg, Germany*  
*Günstigere, bessere Hausverwaltung durch KI.*
