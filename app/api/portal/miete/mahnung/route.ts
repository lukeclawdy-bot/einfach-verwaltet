import { NextRequest, NextResponse } from "next/server";
import { db } from "@/lib/db";
import { documents, tenants, units, properties, aiActions } from "@/lib/db/schema";
import { eq } from "drizzle-orm";
import { put } from "@vercel/blob";

// Verzugszinsen rate: 6.27% p.a. (Basiszinssatz 1.27% + 5%)
const VERZUGSZINS_RATE = 0.0627;

function calculateVerzugszinsen(amountCents: number, daysOverdue: number): number {
  return Math.round((amountCents * daysOverdue * VERZUGSZINS_RATE) / 365);
}

// Generate Mahnung letter content
function generateMahnungLetter(params: {
  tenantName: string;
  propertyAddress: string;
  unitDesignation: string;
  coldRentCents: number;
  daysOverdue: number;
  mahnungLevel: number;
  lastMahnungDate?: string;
}): string {
  const { tenantName, propertyAddress, unitDesignation, coldRentCents, daysOverdue, mahnungLevel, lastMahnungDate } = params;
  const verzugszinsen = calculateVerzugszinsen(coldRentCents, daysOverdue);
  const totalAmount = coldRentCents + verzugszinsen;
  const today = new Date().toLocaleDateString("de-DE");
  const lastDate = lastMahnungDate ? new Date(lastMahnungDate).toLocaleDateString("de-DE") : today;

  const letterHead = `einfach verwaltet. GmbH
Singapurstr. 19
20457 Hamburg

Datum: ${today}

${tenantName}
${unitDesignation}
${propertyAddress}

Betreff: ${mahnungLevel === 1 ? "Zahlungserinnerung" : mahnungLevel === 2 ? "1. Mahnung" : mahnungLevel === 3 ? "2. Mahnung" : "Übergabe an Inkasso"}

`;

  const erinnerungText = `${letterHead}Sehr geehrte/r ${tenantName},

wir möchten Sie daran erinnern, dass die Miete für Ihre Wohnung ${unitDesignation} in ${propertyAddress} in Höhe von ${(coldRentCents / 100).toFixed(2).replace(".", ",")} € zum 3. des Monats fällig war.

Bisher haben wir Ihre Zahlung noch nicht erhalten. Bitte überweisen Sie den fälligen Betrag umgehend.

Bei bereits erfolgter Zahlung betrachten Sie dieses Schreiben als gegenstandslos.

Mit freundlichen Grüßen
Ihr Team von einfach verwaltet.

--
einfach verwaltet. GmbH
Singapurstr. 19
20457 Hamburg
E-Mail: miete@einfach-verwaltet.de
Tel.: +49 40 123456789

Steuernummer: DE123456789
Handelsregister: Amtsgericht Hamburg HRB XXXXX`;

  const mahnung1Text = `${letterHead}Sehr geehrte/r ${tenantName},

trotz unserer Zahlungserinnerung vom ${lastDate} haben wir Ihre Mietzahlung für die Wohnung ${unitDesignation} in ${propertyAddress} nicht erhalten.

Hiermit mahnen wir die fällige Miete in Höhe von ${(coldRentCents / 100).toFixed(2).replace(".", ",")} € unter Androhung der kürzungslosen Kündigung gemäß § 543 Abs. 2 Nr. 3 BGB an.

Bitte überweisen Sie den fälligen Betrag innerhalb von 7 Tagen auf folgendes Konto:

Empfänger: einfach verwaltet. GmbH
IBAN: DE00 0000 0000 0000 0000 00
BIC: XXXXXXXX
Verwendungszweck: Miete ${unitDesignation}

Nach § 286 BGB sind Sie mit dem 3. des Monats in Verzug geraten. Gemäß § 288 BGB schulden Sie Verzugszinsen in Höhe von 6,27% p.a. (${(verzugszinsen / 100).toFixed(2).replace(".", ",")} € für ${daysOverdue} Tage).

Gesamtforderung: ${(totalAmount / 100).toFixed(2).replace(".", ",")} €

Mit freundlichen Grüßen
Ihr Team von einfach verwaltet.

--
einfach verwaltet. GmbH
Singapurstr. 19
20457 Hamburg
E-Mail: miete@einfach-verwaltet.de
Tel.: +49 40 123456789

Steuernummer: DE123456789
Handelsregister: Amtsgericht Hamburg HRB XXXXX

Rechtsgrundlagen: § 286 BGB (Verzug), § 288 BGB (Verzugszinsen), § 543 Abs. 2 Nr. 3 BGB (Kündigungsrecht)`;

  const mahnung2Text = `${letterHead}Sehr geehrte/r ${tenantName},

wir weisen Sie erneut darauf hin, dass Sie trotz unserer Mahnung vom ${lastDate} Ihre Mietverpflichtungen für die Wohnung ${unitDesignation} in ${propertyAddress} nicht erfüllt haben.

Fälliger Mietbetrag: ${(coldRentCents / 100).toFixed(2).replace(".", ",")} €
Verzugszinsen (${daysOverdue} Tage, 6,27% p.a.): ${(verzugszinsen / 100).toFixed(2).replace(".", ",")} €
Gesamtforderung: ${(totalAmount / 100).toFixed(2).replace(".", ",")} €

Dies ist unsere letzte Mahnung. Sollten wir den Gesamtbetrag nicht innerhalb von 7 Tagen erhalten, werden wir leider gezwungen sein:

1. Eine Kündigung des Mietverhältnisses auszusprechen (§ 543 Abs. 2 Nr. 3 BGB)
2. Rechtsanwaltschaftliche Inkassomaßnahmen einzuleiten
3. Eine Meldung an die SCHUFA vorzunehmen

Bitte vermeiden Sie unnötige Kosten und überweisen Sie umgehend auf:

Empfänger: einfach verwaltet. GmbH
IBAN: DE00 0000 0000 0000 0000 00
Verwendungszweck: Miete ${unitDesignation}

Mit freundlichen Grüßen
Ihr Team von einfach verwaltet.

--
einfach verwaltet. GmbH
Singapurstr. 19
20457 Hamburg
E-Mail: miete@einfach-verwaltet.de
Tel.: +49 40 123456789

Steuernummer: DE123456789
Handelsregister: Amtsgericht Hamburg HRB XXXXX

Rechtsgrundlagen: § 286 BGB (Verzug), § 288 BGB (Verzugszinsen), § 543 Abs. 2 Nr. 3 BGB (Kündigungsrecht)`;

  const inkassoText = `${letterHead}Sehr geehrte/r ${tenantName},

trotz mehrfacher Mahnungen haben Sie Ihre Mietzahlungen für die Wohnung ${unitDesignation} in ${propertyAddress} weiterhin nicht geleistet.

Gesamtforderung: ${(totalAmount / 100).toFixed(2).replace(".", ",")} €
inkl. Verzugszinsen (${daysOverdue} Tage, 6,27% p.a.): ${(verzugszinsen / 100).toFixed(2).replace(".", ",")} €

Wir haben heute die Forderung an unseren Rechtsanwalt zur Einleitung des gerichtlichen Mahnverfahrens übergeben.

Darüber hinaus wird eine Meldung an die SCHUFA vorgenommen.

Um weitere Kosten zu vermeiden, raten wir Ihnen dringend, noch heute den fälligen Betrag zu überweisen:

Empfänger: einfach verwaltet. GmbH
IBAN: DE00 0000 0000 0000 0000 00
Verwendungszweck: Miete ${unitDesignation}

Mit freundlichen Grüßen
Ihr Team von einfach verwaltet.

--
einfach verwaltet. GmbH
Singapurstr. 19
20457 Hamburg
E-Mail: miete@einfach-verwaltet.de
Tel.: +49 40 123456789

Steuernummer: DE123456789
Handelsregister: Amtsgericht Hamburg HRB XXXXX

Rechtsgrundlagen: § 286 BGB (Verzug), § 288 BGB (Verzugszinsen), § 543 Abs. 2 Nr. 3 BGB (Kündigungsrecht), § 35a BDSG (SCHUFA-Meldung)`;

  switch (mahnungLevel) {
    case 1:
      return erinnerungText;
    case 2:
      return mahnung1Text;
    case 3:
      return mahnung2Text;
    case 4:
      return inkassoText;
    default:
      return erinnerungText;
  }
}

// POST handler for creating Mahnung (form action)
export async function POST(req: NextRequest) {
  try {
    const formData = await req.formData();
    const tenantId = formData.get("tenantId") as string;
    const mahnungLevel = parseInt(formData.get("mahnungLevel") as string, 10) || 1;
    const redirect = (formData.get("redirect") as string) || "/portal/miete/mahnung";

    if (!tenantId) {
      return NextResponse.json({ error: "tenantId required" }, { status: 400 });
    }

    // Get tenant info
    const [tenant] = await db.select().from(tenants).where(eq(tenants.id, tenantId));
    if (!tenant) {
      return NextResponse.json({ error: "Tenant not found" }, { status: 404 });
    }

    // Get unit info
    const [unit] = await db.select().from(units).where(eq(units.id, tenant.unitId));
    if (!unit || !unit.coldRentCents) {
      return NextResponse.json({ error: "Unit not found or no rent set" }, { status: 404 });
    }

    // Get property
    const [property] = await db.select().from(properties).where(eq(properties.id, unit.propertyId));
    if (!property) {
      return NextResponse.json({ error: "Property not found" }, { status: 404 });
    }

    const coldRentCents = Number(unit.coldRentCents) * 100;

    // Calculate days overdue (assuming due date is 3rd of month)
    const today = new Date();
    const dueDate = new Date(today.getFullYear(), today.getMonth(), 3);
    const daysOverdue = Math.max(0, Math.floor((today.getTime() - dueDate.getTime()) / (1000 * 60 * 60 * 24)));

    // Generate letter content
    const letterContent = generateMahnungLetter({
      tenantName: `${tenant.firstName} ${tenant.lastName}`,
      propertyAddress: property.address,
      unitDesignation: unit.designation,
      coldRentCents,
      daysOverdue,
      mahnungLevel,
    });

    // Generate PDF filename
    const dateStr = today.toISOString().split("T")[0];
    const fileName = `mahnung-${mahnungLevel}-${tenant.firstName.toLowerCase()}-${tenant.lastName.toLowerCase()}-${dateStr}.txt`;

    // Upload to Vercel Blob (as text for now - PDF generation would be separate)
    let blobUrl: string;
    try {
      const blob = await put(fileName, letterContent, {
        access: "public",
        contentType: "text/plain; charset=utf-8",
      });
      blobUrl = blob.url;
    } catch (blobError) {
      console.warn("Blob upload failed, storing locally:", blobError);
      // Fallback: store without URL (will need manual handling)
      blobUrl = "";
    }

    // Store as document
    const [document] = await db
      .insert(documents)
      .values({
        landlordId: property.landlordId,
        propertyId: unit.propertyId,
        unitId: unit.id,
        tenantId: tenant.id,
        type: "mahnung",
        name: `${mahnungLevel === 1 ? "Zahlungserinnerung" : mahnungLevel === 2 ? "1. Mahnung" : mahnungLevel === 3 ? "2. Mahnung" : "Inkasso-Übergabe"} - ${tenant.firstName} ${tenant.lastName}`,
        url: blobUrl || `/documents/${fileName}`,
        mimeType: "text/plain",
        metadata: {
          mahnungLevel,
          daysOverdue,
          amountCents: coldRentCents,
          verzugszinsenCents: calculateVerzugszinsen(coldRentCents, daysOverdue),
          letterContent,
          sentVia: "portal",
          status: "pending_review", // Lukas needs to review and actually send
        },
      })
      .returning();

    // Create AI action for review
    await db.insert(aiActions).values({
      landlordId: property.landlordId,
      propertyId: unit.propertyId,
      unitId: unit.id,
      tenantId: tenant.id,
      type: "mahnung",
      title: `${mahnungLevel === 1 ? "Zahlungserinnerung" : mahnungLevel === 2 ? "1. Mahnung" : mahnungLevel === 3 ? "2. Mahnung" : "Inkasso"} erstellt für ${tenant.firstName} ${tenant.lastName}`,
      body: `Eine ${mahnungLevel === 1 ? "Zahlungserinnerung" : mahnungLevel === 2 ? "1. Mahnung" : mahnungLevel === 3 ? "2. Mahnung" : "Inkasso-Übergabe"} wurde für ${tenant.firstName} ${tenant.lastName} (${unit.designation}) erstellt. Bitte prüfen und versenden.`,
      actionLabel: "Dokument ansehen",
      dismissLabel: "Erledigt",
      urgency: mahnungLevel >= 3 ? 5 : 4,
      status: "pending",
      metadata: {
        documentId: document.id,
        mahnungLevel,
        daysOverdue,
      },
    });

    // Redirect back to the page
    return NextResponse.redirect(new URL(`${redirect}?success=mahnung-created`, req.url));
  } catch (error) {
    console.error("Error creating Mahnung:", error);
    return NextResponse.json({ error: "Failed to create Mahnung" }, { status: 500 });
  }
}

// API handler for programmatic creation
export async function PUT(req: NextRequest) {
  try {
    const body = await req.json();
    const { tenantId, mahnungLevel = 1, daysOverdue, coldRentCents, sendImmediately = false } = body;

    if (!tenantId) {
      return NextResponse.json({ error: "tenantId required" }, { status: 400 });
    }

    // Get tenant info
    const [tenant] = await db.select().from(tenants).where(eq(tenants.id, tenantId));
    if (!tenant) {
      return NextResponse.json({ error: "Tenant not found" }, { status: 404 });
    }

    // Get unit info
    const [unit] = await db.select().from(units).where(eq(units.id, tenant.unitId));
    if (!unit || !unit.coldRentCents) {
      return NextResponse.json({ error: "Unit not found or no rent set" }, { status: 404 });
    }

    // Get property
    const [property] = await db.select().from(properties).where(eq(properties.id, unit.propertyId));
    if (!property) {
      return NextResponse.json({ error: "Property not found" }, { status: 404 });
    }

    const rentCents = coldRentCents || Number(unit.coldRentCents) * 100;
    const overdueDays = daysOverdue || 0;

    // Generate letter content
    const letterContent = generateMahnungLetter({
      tenantName: `${tenant.firstName} ${tenant.lastName}`,
      propertyAddress: property.address,
      unitDesignation: unit.designation,
      coldRentCents: rentCents,
      daysOverdue: overdueDays,
      mahnungLevel,
    });

    // Generate PDF filename
    const today = new Date();
    const dateStr = today.toISOString().split("T")[0];
    const fileName = `mahnung-${mahnungLevel}-${tenant.firstName.toLowerCase()}-${tenant.lastName.toLowerCase()}-${dateStr}.txt`;

    // Upload to Vercel Blob
    let blobUrl: string;
    try {
      const blob = await put(fileName, letterContent, {
        access: "public",
        contentType: "text/plain; charset=utf-8",
      });
      blobUrl = blob.url;
    } catch (blobError) {
      console.warn("Blob upload failed:", blobError);
      blobUrl = "";
    }

    // Store as document
    const [document] = await db
      .insert(documents)
      .values({
        landlordId: property.landlordId,
        propertyId: unit.propertyId,
        unitId: unit.id,
        tenantId: tenant.id,
        type: "mahnung",
        name: `${mahnungLevel === 1 ? "Zahlungserinnerung" : mahnungLevel === 2 ? "1. Mahnung" : mahnungLevel === 3 ? "2. Mahnung" : "Inkasso-Übergabe"} - ${tenant.firstName} ${tenant.lastName}`,
        url: blobUrl || `/documents/${fileName}`,
        mimeType: "text/plain",
        metadata: {
          mahnungLevel,
          daysOverdue: overdueDays,
          amountCents: rentCents,
          verzugszinsenCents: calculateVerzugszinsen(rentCents, overdueDays),
          letterContent,
          sentVia: sendImmediately ? "email" : "portal",
          status: sendImmediately ? "sent" : "pending_review",
        },
      })
      .returning();

    return NextResponse.json({
      success: true,
      message: "Mahnung created successfully",
      data: {
        documentId: document.id,
        mahnungLevel,
        tenantId,
        status: sendImmediately ? "sent" : "pending_review",
      },
    });
  } catch (error) {
    console.error("Error creating Mahnung via API:", error);
    return NextResponse.json({ error: "Failed to create Mahnung" }, { status: 500 });
  }
}
