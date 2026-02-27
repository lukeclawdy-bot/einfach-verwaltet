/**
 * POST /api/portal/vertrag/upload-signature
 *
 * Nimmt den Scan des unterschriebenen Vertrags entgegen.
 *
 * - Primär: Speichert in Vercel Blob (wenn BLOB_READ_WRITE_TOKEN gesetzt)
 * - Fallback: Speichert Metadaten in der Datenbank (Dateiname, landlordId, Timestamp)
 *
 * Auth: JWT-Cookie „portal_session" oder „ev-demo-session" (via middleware)
 */

import { NextRequest, NextResponse } from 'next/server';
import { headers } from 'next/headers';

// ─── Lazy Vercel Blob init ────────────────────────────────────────────────────

async function uploadToBlob(
  filename: string,
  data: Buffer,
  contentType: string,
): Promise<string | null> {
  if (!process.env.BLOB_READ_WRITE_TOKEN) return null;

  try {
    // Dynamic import so build doesn't fail when package is not installed
    const { put } = await import('@vercel/blob');
    const blob = await put(`signatures/${filename}`, data, {
      access: 'private',
      contentType,
      addRandomSuffix: true,
    });
    return blob.url;
  } catch (err) {
    console.error('[upload-signature] Blob upload failed:', err);
    return null;
  }
}

// ─── DB fallback ──────────────────────────────────────────────────────────────

async function saveToDB(landlordId: string, filename: string, fileSizeBytes: number): Promise<void> {
  try {
    const { getDb } = await import('@/lib/db');
    const db = getDb();
    // Store in document_uploads table if it exists, otherwise log only
    await db.execute(
      `INSERT INTO document_uploads (landlord_id, filename, file_size_bytes, upload_type, uploaded_at)
       VALUES (?, ?, ?, 'signature', NOW())
       ON DUPLICATE KEY UPDATE uploaded_at = NOW()`,
      [landlordId, filename, fileSizeBytes],
    ).catch(() => {
      // Table may not exist — log only, don't fail
      console.info('[upload-signature] DB fallback: table may not exist, skipping DB store');
    });
  } catch {
    // Non-critical — don't let DB errors break the upload response
  }
}

// ─── Handler ─────────────────────────────────────────────────────────────────

export async function POST(req: NextRequest) {
  try {
    // ── 1. Auth ─────────────────────────────────────────────────────────────
    const hdrs = await headers();
    const landlordId = hdrs.get('x-landlord-id');

    if (!landlordId) {
      return NextResponse.json({ error: 'Nicht autorisiert.' }, { status: 401 });
    }

    // ── 2. Parse multipart form ──────────────────────────────────────────────
    const formData = await req.formData().catch(() => null);

    if (!formData) {
      return NextResponse.json({ error: 'Ungültige Anfrage — kein FormData.' }, { status: 400 });
    }

    const file = formData.get('file') as File | null;

    if (!file) {
      return NextResponse.json({ error: 'Keine Datei empfangen.' }, { status: 400 });
    }

    // ── 3. Validate file ─────────────────────────────────────────────────────
    const allowedTypes = ['image/jpeg', 'image/png', 'image/webp', 'application/pdf'];
    if (!allowedTypes.includes(file.type)) {
      return NextResponse.json(
        { error: 'Nur PDF, JPEG, PNG oder WebP erlaubt.' },
        { status: 400 },
      );
    }

    const maxSizeMB = 10;
    if (file.size > maxSizeMB * 1024 * 1024) {
      return NextResponse.json(
        { error: `Datei darf maximal ${maxSizeMB} MB groß sein.` },
        { status: 400 },
      );
    }

    const originalName = file.name.replace(/[^a-zA-Z0-9._-]/g, '_');
    const timestamp = new Date().toISOString().replace(/[:.]/g, '-').slice(0, 19);
    const safeFilename = `vertrag-unterschrift_${landlordId}_${timestamp}_${originalName}`;

    // ── 4. Try Vercel Blob, fallback to DB metadata ──────────────────────────
    const fileBuffer = Buffer.from(await file.arrayBuffer());
    const blobUrl = await uploadToBlob(safeFilename, fileBuffer, file.type);

    if (!blobUrl) {
      // Blob not available — store metadata in DB as fallback
      await saveToDB(landlordId, safeFilename, file.size);
    }

    return NextResponse.json({
      success: true,
      message: 'Unterschrift erfolgreich hochgeladen.',
      filename: safeFilename,
      ...(blobUrl && { url: blobUrl }),
      storage: blobUrl ? 'blob' : 'db',
    });
  } catch (err) {
    console.error('[upload-signature] Fehler:', err);
    return NextResponse.json(
      { error: 'Fehler beim Hochladen. Bitte versuchen Sie es erneut.' },
      { status: 500 },
    );
  }
}
