import { NextResponse } from "next/server";
import { db, hasDatabase } from "@/app/db";
import { sql } from "drizzle-orm";

export const dynamic = "force-dynamic";

export async function GET() {
  const timestamp = new Date().toISOString();
  const version = "1.0.0";

  // If no DATABASE_URL is set, return early without crashing
  if (!hasDatabase || !db) {
    return NextResponse.json({
      status: "ok",
      timestamp,
      version,
      db: "no_database_url",
    });
  }

  try {
    // Test database connection with a simple query
    await db.execute(sql`SELECT 1`);
    
    return NextResponse.json({
      status: "ok",
      timestamp,
      version,
      db: "connected",
    });
  } catch (error) {
    console.error("Health check database error:", error);
    
    return NextResponse.json({
      status: "ok",
      timestamp,
      version,
      db: "error",
    }, { status: 503 });
  }
}
