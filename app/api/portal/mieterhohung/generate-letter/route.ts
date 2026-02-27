/**
 * POST /api/portal/mieterhohung/generate-letter
 *
 * Generates a formal §558a BGB Mieterhöhungsschreiben as a downloadable HTML
 * document (print-to-PDF via browser). Optionally stores to Vercel Blob.
 */

import { NextRequest, NextResponse } from 'next/server';
import { generateMieterhohungHtml } from '@/lib/pdf/mieterhohung-generator';

export const runtime = 'edge';

export interface GenerateLetterRequest {
  landlordName: string;
  landlordAddress?: string;
  landlordEmail?: string;
  landlordPhone?: string;
  tenantName: string;
  tenantAddress: string;
  propertyAddress: string;
  propertyCity?: string;
  unitDesignation?: string;
  currentRentCents: number;
  newRentCents: number;
  increaseAmountCents: number;
  increasePercent: number;
  referenzmiete?: number;
  isMilieuSchutz?: boolean;
  /** Optional: ISO date string. Defaults to today */
  approvalDate?: string;
  /** Optional: ISO date string. Defaults to 3 months from today */
  effectiveDate?: string;
}

export async function POST(req: NextRequest) {
  try {
    const body: GenerateLetterRequest = await req.json();

    // Validate required fields
    if (
      !body.tenantName ||
      !body.propertyAddress ||
      !body.currentRentCents ||
      !body.newRentCents
    ) {
      return NextResponse.json(
        { error: 'Fehlende Pflichtfelder: tenantName, propertyAddress, currentRentCents, newRentCents' },
        { status: 400 }
      );
    }

    const now = new Date();
    const approvalDate = body.approvalDate || now.toISOString().split('T')[0];

    // Effective date: 3 months from approval
    let effectiveDate = body.effectiveDate;
    if (!effectiveDate) {
      const eff = new Date(now);
      eff.setMonth(eff.getMonth() + 3);
      effectiveDate = eff.toISOString().split('T')[0];
    }

    const html = generateMieterhohungHtml({
      landlordName: body.landlordName || 'einfach verwaltet. GmbH',
      landlordAddress: body.landlordAddress,
      landlordEmail: body.landlordEmail,
      landlordPhone: body.landlordPhone,
      tenantName: body.tenantName,
      tenantAddress: body.tenantAddress,
      propertyAddress: body.propertyAddress,
      propertyCity: body.propertyCity || 'Hamburg',
      unitDesignation: body.unitDesignation,
      currentRentCents: body.currentRentCents,
      newRentCents: body.newRentCents,
      increaseAmountCents: body.increaseAmountCents,
      increasePercent: body.increasePercent,
      referenzmiete: body.referenzmiete,
      approvalDate,
      effectiveDate,
      isMilieuSchutz: body.isMilieuSchutz ?? false,
    });

    // Build a safe filename
    const safeTenant = body.tenantName.replace(/[^a-zA-Z0-9\-_äöüÄÖÜß]/g, '-');
    const dateStr = approvalDate.replace(/-/g, '');
    const filename = `Mieterhoehungsverlangen_${safeTenant}_${dateStr}.html`;

    // If Vercel Blob is configured, store the letter
    let blobUrl: string | null = null;
    if (process.env.BLOB_READ_WRITE_TOKEN) {
      try {
        const { put } = await import('@vercel/blob');
        const blob = await put(`dokumente/mieterhohung/${filename}`, html, {
          contentType: 'text/html; charset=utf-8',
          access: 'public',
        });
        blobUrl = blob.url;
      } catch (blobErr) {
        console.warn('Blob storage failed (non-fatal):', blobErr);
      }
    }

    return NextResponse.json({
      success: true,
      html,
      filename,
      blobUrl,
    });
  } catch (err) {
    console.error('generate-letter error:', err);
    return NextResponse.json({ error: String(err) }, { status: 500 });
  }
}
