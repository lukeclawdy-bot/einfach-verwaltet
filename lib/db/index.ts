import { neon } from '@neondatabase/serverless';
import { drizzle } from 'drizzle-orm/neon-http';
import * as schema from './schema';

// Lazy DB initialization — safe for build-time (DATABASE_URL only required at runtime)
function createDb() {
  const databaseUrl = process.env.DATABASE_URL;
  if (!databaseUrl) {
    throw new Error('DATABASE_URL is not configured. Add it to your Vercel environment variables.');
  }
  const sql = neon(databaseUrl);
  return drizzle(sql, { schema });
}

let _db: ReturnType<typeof createDb> | null = null;

export const db = new Proxy({} as ReturnType<typeof createDb>, {
  get(_target, prop) {
    if (!_db) {
      _db = createDb();
    }
    return (_db as any)[prop];
  },
});

export type DB = ReturnType<typeof createDb>;
