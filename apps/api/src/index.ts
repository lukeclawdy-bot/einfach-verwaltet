/**
 * einfach verwaltet. — Backend API
 * 
 * Hono.js REST API MVP
 * Built by: p3-product (PropOS Product & Tech Architect)
 * Version: 1.0.0-mvp
 * 
 * Stack: Hono.js + TypeScript + Zod + jose JWT
 * DB: In-memory mock (swap for Drizzle ORM + Neon when DATABASE_URL is set)
 * 
 * Endpoints:
 *   POST   /api/auth/login              — JWT login
 *   GET    /api/auth/me                 — current user
 *   POST   /api/auth/logout             — invalidate session
 *   POST   /api/properties              — create property
 *   GET    /api/properties              — list properties
 *   GET    /api/properties/:id          — property detail + units
 *   GET    /api/properties/:id/units    — list units
 *   POST   /api/tickets                 — create ticket
 *   GET    /api/tickets                 — list tickets (filterable)
 *   GET    /api/tickets/:id             — ticket detail
 *   PATCH  /api/tickets/:id             — update ticket
 *   GET    /api/dashboard/summary       — portfolio KPIs
 *   GET    /api/dashboard/properties    — property summary list
 *   POST   /api/ai/chat                 — AI tenant response (Claude)
 *   GET    /api/ai/intents              — available intent types
 *   GET    /api/health                  — health check
 */

import 'dotenv/config';
import { Hono } from 'hono';
import { cors } from 'hono/cors';
import { logger } from 'hono/logger';
import { prettyJSON } from 'hono/pretty-json';
import { HTTPException } from 'hono/http-exception';
import { serve } from '@hono/node-server';

// Route handlers
import authRoutes from './routes/auth/auth.routes.js';
import propertiesRoutes from './routes/properties/properties.routes.js';
import ticketsRoutes from './routes/tickets/tickets.routes.js';
import dashboardRoutes from './routes/dashboard/dashboard.routes.js';
import aiRoutes from './routes/ai/ai.routes.js';

const app = new Hono();

// ─── Global Middleware ────────────────────────────────────────────────────────

// Request logging
app.use('*', logger());

// Pretty JSON in development
if (process.env.NODE_ENV !== 'production') {
  app.use('*', prettyJSON());
}

// CORS configuration
const corsOrigins = (process.env.CORS_ORIGINS ?? 'http://localhost:3000').split(',');
app.use('/api/*', cors({
  origin: corsOrigins,
  allowMethods: ['GET', 'POST', 'PUT', 'PATCH', 'DELETE', 'OPTIONS'],
  allowHeaders: ['Content-Type', 'Authorization'],
  exposeHeaders: ['X-Request-Id'],
  credentials: true,
  maxAge: 86400,
}));

// ─── Health Check ─────────────────────────────────────────────────────────────

app.get('/api/health', (c) => {
  return c.json({
    status: 'ok',
    service: 'einfach verwaltet. API',
    version: '1.0.0-mvp',
    timestamp: new Date().toISOString(),
    environment: process.env.NODE_ENV ?? 'development',
    // ⚠️ MOCK: Flag when using in-memory database
    dataSource: process.env.DATABASE_URL ? 'postgresql' : 'mock_in_memory',
    endpoints: {
      auth: '/api/auth',
      properties: '/api/properties',
      tickets: '/api/tickets',
      dashboard: '/api/dashboard',
      ai: '/api/ai',
    },
  });
});

// ─── API Routes ───────────────────────────────────────────────────────────────

app.route('/api/auth', authRoutes);
app.route('/api/properties', propertiesRoutes);
app.route('/api/tickets', ticketsRoutes);
app.route('/api/dashboard', dashboardRoutes);
app.route('/api/ai', aiRoutes);

// ─── 404 Handler ──────────────────────────────────────────────────────────────

app.notFound((c) => {
  return c.json({
    error: 'Route not found',
    code: 'NOT_FOUND',
    path: c.req.path,
    availableRoutes: [
      'GET  /api/health',
      'POST /api/auth/login',
      'GET  /api/auth/me',
      'POST /api/properties',
      'GET  /api/properties',
      'POST /api/tickets',
      'GET  /api/tickets',
      'GET  /api/dashboard/summary',
      'POST /api/ai/chat',
    ],
  }, 404);
});

// ─── Global Error Handler ─────────────────────────────────────────────────────

app.onError((err, c) => {
  if (err instanceof HTTPException) {
    return c.json({
      error: err.message,
      code: 'HTTP_ERROR',
      status: err.status,
    }, err.status);
  }

  console.error('[Unhandled Error]', err);
  return c.json({
    error: 'Internal server error',
    code: 'INTERNAL_ERROR',
  }, 500);
});

// ─── Start Server ─────────────────────────────────────────────────────────────

const PORT = parseInt(process.env.PORT ?? '3001', 10);

console.log(`
╔═══════════════════════════════════════════════════╗
║   einfach verwaltet.  —  Backend API               ║
║   Version: 1.0.0-mvp                              ║
╠═══════════════════════════════════════════════════╣
║   Port:        ${PORT.toString().padEnd(34)} ║
║   Environment: ${(process.env.NODE_ENV ?? 'development').padEnd(34)} ║
║   Database:    ${(process.env.DATABASE_URL ? 'PostgreSQL (Neon)' : '⚠️  MOCK in-memory').padEnd(34)} ║
║   Claude API:  ${(process.env.ANTHROPIC_API_KEY ? '✓ configured' : '⚠️  not set (mock mode)').padEnd(34)} ║
╚═══════════════════════════════════════════════════╝

Demo credentials:
  Admin:  admin@einfachverwaltet.de / demo1234
  Owner:  thomas.mueller@example.de / demo1234
  Tenant: julia.klein@example.de / demo1234
`);

serve({
  fetch: app.fetch,
  port: PORT,
});

export default app;
