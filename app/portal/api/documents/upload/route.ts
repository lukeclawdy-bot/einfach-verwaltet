import { NextRequest, NextResponse } from 'next/server';
import { put } from '@vercel/blob';
import { db } from '@/lib/db';
import { documents } from '@/lib/db/schema';

// Lazy initialization check for Vercel Blob
function getBlobToken(): string | null {
  return process.env.BLOB_READ_WRITE_TOKEN || null;
}

// Document type mapping
const DOCUMENT_TYPES = [
  'mietvertrag',
  'energieausweis', 
  'protokoll',
  'abrechnung',
  'mahnung',
  'sonstiges'
] as const;

type DocumentType = typeof DOCUMENT_TYPES[number];

// Max file size: 10MB
const MAX_FILE_SIZE = 10 * 1024 * 1024;

// Allowed MIME types
const ALLOWED_TYPES = [
  'application/pdf',
  'image/jpeg',
  'image/png',
  'application/vnd.openxmlformats-officedocument.wordprocessingml.document'
];

export async function POST(req: NextRequest) {
  try {
    // Check Blob token (lazy init - don't crash build)
    const blobToken = getBlobToken();
    if (!blobToken) {
      console.warn('BLOB_READ_WRITE_TOKEN not configured');
      return NextResponse.json(
        { error: 'Blob storage not configured' },
        { status: 503 }
      );
    }

    // Parse multipart form data
    const formData = await req.formData();
    const file = formData.get('file') as File | null;
    const landlordId = formData.get('landlordId') as string | null;
    const type = formData.get('type') as DocumentType | null;
    const name = formData.get('name') as string | null;
    const propertyId = formData.get('propertyId') as string | null;
    const unitId = formData.get('unitId') as string | null;
    const tenantId = formData.get('tenantId') as string | null;

    // Validation
    if (!file || !landlordId || !type) {
      return NextResponse.json(
        { error: 'file, landlordId, and type are required' },
        { status: 400 }
      );
    }

    if (!DOCUMENT_TYPES.includes(type)) {
      return NextResponse.json(
        { error: `Invalid document type. Allowed: ${DOCUMENT_TYPES.join(', ')}` },
        { status: 400 }
      );
    }

    if (!ALLOWED_TYPES.includes(file.type)) {
      return NextResponse.json(
        { error: 'Invalid file type. Allowed: PDF, JPG, PNG, DOCX' },
        { status: 400 }
      );
    }

    if (file.size > MAX_FILE_SIZE) {
      return NextResponse.json(
        { error: 'File too large. Max 10MB' },
        { status: 400 }
      );
    }

    // Generate unique filename
    const timestamp = Date.now();
    const safeName = (name || file.name).replace(/[^a-zA-Z0-9.-]/g, '_');
    const blobPath = `documents/${landlordId}/${timestamp}-${safeName}`;

    // Upload to Vercel Blob
    const blob = await put(blobPath, file, {
      access: 'private',
      token: blobToken,
    });

    // Store metadata in database
    const [document] = await db.insert(documents).values({
      landlordId,
      propertyId: propertyId || null,
      unitId: unitId || null,
      tenantId: tenantId || null,
      type,
      name: name || file.name,
      url: blob.url,
      mimeType: file.type,
      sizeBytes: file.size,
      metadata: {
        originalName: file.name,
        blobPath,
      },
    }).returning();

    return NextResponse.json({
      documentId: document.id,
      url: blob.url,
      name: document.name,
      type: document.type,
    }, { status: 201 });

  } catch (error) {
    console.error('Document upload error:', error);
    return NextResponse.json(
      { error: 'Upload failed', details: String(error) },
      { status: 500 }
    );
  }
}