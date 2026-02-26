import { NextRequest, NextResponse } from 'next/server';
import { del } from '@vercel/blob';
import { db } from '@/lib/db';
import { documents } from '@/lib/db/schema';
import { eq, and } from 'drizzle-orm';

// Lazy initialization check for Vercel Blob
function getBlobToken(): string | null {
  return process.env.BLOB_READ_WRITE_TOKEN || null;
}

export async function DELETE(
  req: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;
    const { searchParams } = req.nextUrl;
    const landlordId = searchParams.get('landlordId');

    if (!landlordId) {
      return NextResponse.json(
        { error: 'landlordId is required' },
        { status: 400 }
      );
    }

    // Fetch document to verify ownership and get blob path
    const [doc] = await db
      .select()
      .from(documents)
      .where(and(
        eq(documents.id, id),
        eq(documents.landlordId, landlordId)
      ));

    if (!doc) {
      return NextResponse.json(
        { error: 'Document not found or access denied' },
        { status: 404 }
      );
    }

    // Delete from Vercel Blob if token is configured
    const blobToken = getBlobToken();
    if (blobToken) {
      try {
        await del(doc.url, { token: blobToken });
      } catch (blobError) {
        console.warn('Failed to delete from blob storage:', blobError);
        // Continue with DB deletion even if blob deletion fails
      }
    }

    // Hard delete from database
    await db.delete(documents).where(eq(documents.id, id));

    return NextResponse.json({ 
      success: true,
      message: 'Document deleted successfully'
    });

  } catch (error) {
    console.error('Document delete error:', error);
    return NextResponse.json(
      { error: 'Delete failed', details: String(error) },
      { status: 500 }
    );
  }
}