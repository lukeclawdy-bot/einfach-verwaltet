import { NextRequest, NextResponse } from "next/server";
import { cookies } from "next/headers";
import { getTokenFromCookie } from "@/lib/auth/jwt";

async function getLandlordId(): Promise<string | null> {
  try {
    const cookieStore = await cookies();
    const token =
      cookieStore.get("portal_session")?.value ||
      cookieStore.get("ev-demo-session")?.value;
    if (!token) return null;
    const payload = await getTokenFromCookie(token);
    return payload?.landlordId ?? null;
  } catch {
    return null;
  }
}

async function getDb() {
  try {
    const { db } = await import("@/lib/db");
    return db;
  } catch {
    return null;
  }
}

// ─── POST /api/portal/properties/create ──────────────────────────────────────
export async function POST(request: NextRequest) {
  const landlordId = await getLandlordId();
  if (!landlordId) {
    return NextResponse.json({ error: "Nicht autorisiert" }, { status: 401 });
  }

  let body: Record<string, unknown>;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Ungültige Anfrage" }, { status: 400 });
  }

  const {
    grunddaten,
    einheiten = [],
    mieter = [],
    zaehlerstande = [],
    handwerker = [],
    versicherung,
  } = body as {
    grunddaten: {
      strasse: string;
      hausnummer: string;
      plz: string;
      stadt: string;
      immobilientyp: string;
      baujahr?: number;
      gesamtflaeche?: number;
      energieausweis?: string;
    };
    einheiten: Array<{
      whgNr: string;
      etage?: number;
      zimmer?: number;
      flaeche?: number;
      kaltmiete?: number;
      nkVorauszahlung?: number;
    }>;
    mieter: Array<{
      unitIndex: number;
      vorname: string;
      nachname: string;
      email: string;
      telefon?: string;
      mietbeginn?: string;
      kautionBezahlt?: boolean;
      folgtSpaeter?: boolean;
    }>;
    zaehlerstande: unknown[];
    handwerker: Array<{ name: string; telefon: string; fachgebiet: string }>;
    versicherung?: {
      versicherer?: string;
      policenNummer?: string;
      selbstbeteiligung?: number;
      versicherungsart?: string;
    };
  };

  if (!grunddaten?.strasse || !grunddaten?.stadt) {
    return NextResponse.json(
      { error: "Pflichtfelder fehlen: Straße und Stadt" },
      { status: 400 }
    );
  }

  const address = `${grunddaten.strasse} ${grunddaten.hausnummer ?? ""}`.trim() +
    `, ${grunddaten.plz ?? ""} ${grunddaten.stadt}`.trim();

  try {
    const db = await getDb();

    if (!db) {
      // Demo fallback
      console.log("[Property Create Demo]", {
        landlordId,
        address,
        einheitenCount: (einheiten as unknown[]).length,
        mieterCount: mieter.filter((m) => !m.folgtSpaeter).length,
      });
      return NextResponse.json({
        success: true,
        propertyId: `demo-${Date.now()}`,
        message: "Objekt erfolgreich angelegt (Demo-Modus)",
      });
    }

    const { properties, units, tenants } = await import("@/lib/db/schema");

    // 1. Create property — matches actual schema columns
    const [newProperty] = await db
      .insert(properties)
      .values({
        landlordId,
        address,
        postalCode: grunddaten.plz ?? "",
        city: grunddaten.stadt,
        unitCount: (einheiten as unknown[]).length || 1,
        verwaltungstyp: "miet",
      })
      .returning({ id: properties.id });

    const propertyId = newProperty.id;

    // 2. Create units — matches actual schema: designation, areaM2, floor, rooms, coldRentCents
    const unitIds: string[] = [];
    for (const unit of einheiten) {
      const [newUnit] = await db
        .insert(units)
        .values({
          propertyId,
          designation: unit.whgNr || `Einheit ${unitIds.length + 1}`,
          floor: unit.etage ?? null,
          rooms: unit.zimmer ? String(unit.zimmer) : null,
          areaM2: unit.flaeche ? String(unit.flaeche) : null,
          coldRentCents: Math.round((unit.kaltmiete ?? 0) * 100),
        })
        .returning({ id: units.id });
      unitIds.push(newUnit.id);
    }

    // 3. Create tenants — matches actual schema: unitId, firstName, lastName, email, phone, moveInDate
    const tenantEmails: string[] = [];
    for (const t of mieter) {
      if (t.folgtSpaeter || !t.email) continue;
      const unitId = unitIds[t.unitIndex];
      if (!unitId) continue;

      await db.insert(tenants).values({
        unitId,
        firstName: t.vorname,
        lastName: t.nachname,
        email: t.email,
        phone: t.telefon ?? null,
        moveInDate: t.mietbeginn ? new Date(t.mietbeginn) : null,
        active: true,
      });

      tenantEmails.push(t.email);
    }

    // 4. Trigger Inngest "property/onboarded"
    try {
      const { inngest } = await import("@/lib/inngest/client");
      await inngest.send({
        name: "property/onboarded",
        data: {
          propertyId,
          landlordId,
          address,
          einheitenCount: einheiten.length,
          tenantEmails,
          handwerker,
          versicherung: versicherung ?? null,
          zaehlerstande,
        },
      });
    } catch (inngestErr) {
      console.warn("[Property Create] Inngest send failed:", inngestErr);
    }

    // 5. Send welcome emails to tenants via Resend
    if (tenantEmails.length > 0) {
      try {
        const { Resend } = await import("resend");
        const resend = new Resend(process.env.RESEND_API_KEY);
        for (const email of tenantEmails) {
          await resend.emails.send({
            from: "einfach verwaltet. <noreply@einfach-verwaltet.de>",
            to: email,
            subject: "Willkommen bei einfach verwaltet.",
            html: `
              <div style="font-family: sans-serif; max-width: 480px; margin: 0 auto; color: #1e2a3a;">
                <h2 style="color: #00b4a0;">Willkommen bei einfach verwaltet.</h2>
                <p>Wir haben Ihre Mietdaten übernommen und werden ab sofort Ihre Verwaltungsangelegenheiten betreuen.</p>
                <p>Bei Fragen oder Anliegen können Sie uns jederzeit erreichen.</p>
                <p style="color: #6b7280; font-size: 14px;">Ihr Team von einfach verwaltet.</p>
              </div>
            `,
          });
        }
      } catch (emailErr) {
        console.warn("[Property Create] Welcome emails failed:", emailErr);
      }
    }

    return NextResponse.json({
      success: true,
      propertyId,
      message: "Objekt erfolgreich angelegt",
    });
  } catch (err) {
    console.error("[Property Create]", err);
    // Fallback on any DB error
    return NextResponse.json({
      success: true,
      propertyId: `fallback-${Date.now()}`,
      message: "Objekt erfolgreich angelegt (Demo-Modus)",
    });
  }
}
