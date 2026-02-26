import { NextRequest, NextResponse } from 'next/server';
import { db } from '@/lib/db';
import { documents, properties, units, tenants } from '@/lib/db/schema';
import { eq, and, desc } from 'drizzle-orm';

export async function GET(req: NextRequest) {
  try {
    const { searchParams } = req.nextUrl;
    const landlordId = searchParams.get('landlordId');
    const propertyId = searchParams.get('propertyId');
    const type = searchParams.get('type');

    if (!landlordId) {
      return NextResponse.json(
        { error: 'landlordId is required' },
        { status: 400 }
      );
    }

    // Build query conditions
    const conditions = [eq(documents.landlordId, landlordId)];
    
    if (propertyId) {
      conditions.push(eq(documents.propertyId, propertyId));
    }
    
    if (type) {
      conditions.push(eq(documents.type, type));
    }

    // Fetch documents with joins for property/unit/tenant names
    const rows = await db
      .select({
        document: documents,
        property: properties,
        unit: units,
        tenant: tenants,
      })
      .from(documents)
      .leftJoin(properties, eq(documents.propertyId, properties.id))
      .leftJoin(units, eq(documents.unitId, units.id))
      .leftJoin(tenants, eq(documents.tenantId, tenants.id))
      .where(and(...conditions))
      .orderBy(desc(documents.createdAt));

    // Format response
    const formatted = rows.map((row) => ({
      id: row.document.id,
      name: row.document.name,
      type: row.document.type,
      typeLabel: getTypeLabel(row.document.type),
      ocrStatus: row.document.ocrStatus || 'pending',
      ocrText: row.document.ocrText,
      extractedData: row.document.extractedData || {},
      documentClassification: row.document.documentClassification,
      confidence: row.document.confidence,
      linkedTicketId: row.document.linkedTicketId,
      propertyId: row.document.propertyId,
      propertyAddress: row.property?.address || null,
      unitId: row.document.unitId,
      unitDesignation: row.unit?.designation || null,
      tenantId: row.document.tenantId,
      tenantName: row.tenant 
        ? `${row.tenant.firstName} ${row.tenant.lastName}` 
        : null,
      url: row.document.url,
      mimeType: row.document.mimeType,
      sizeBytes: row.document.sizeBytes,
      sizeFormatted: formatFileSize(row.document.sizeBytes),
      createdAt: row.document.createdAt,
    }));

    return NextResponse.json({ data: formatted });

  } catch (error) {
    console.error('Documents list error:', error);
    return NextResponse.json(
      { error: 'Failed to fetch documents', details: String(error) },
      { status: 500 }
    );
  }
}

function getTypeLabel(type: string): string {
  const labels: Record<string, string> = {
    mietvertrag: 'Mietvertrag',
    energieausweis: 'Energieausweis',
    protokoll: 'Protokoll',
    abrechnung: 'Betriebskostenabrechnung',
    mahnung: 'Mahnung',
    sonstiges: 'Sonstiges',
  };
  return labels[type] || type;
}

function formatFileSize(bytes: number | null): string {
  if (!bytes) return '—';
  if (bytes < 1024) return `${bytes} B`;
  if (bytes < 1024 * 1024) return `${(bytes / 1024).toFixed(1)} KB`;
  return `${(bytes / (1024 * 1024)).toFixed(1)} MB`;
}