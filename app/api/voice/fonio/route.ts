import { NextRequest, NextResponse } from "next/server";
import { inngest } from "@/lib/inngest/client";

/**
 * Fonio AI Webhook Handler — Kai Voice Agent
 *
 * Receives POST events from Fonio AI after inbound voice calls.
 * Endpoint: https://einfach-verwaltet.de/api/voice/fonio
 *
 * Flow:
 *   Tenant calls → Fonio AI (Kai answers) → call ends
 *   → POST /api/voice/fonio (this file)
 *   → fire Inngest event tenant/voice-call-received
 *   → Inngest handler: classify, create ticket, notify landlord
 *   → return 200 OK to Fonio
 */

// ─── Types ────────────────────────────────────────────────────────────────────

interface FonioWebhookPayload {
  callId: string;
  phoneNumber: string;
  transcript: string;
  duration: number;
  summary?: string;
}

// ─── Route Handler ────────────────────────────────────────────────────────────

export async function POST(request: NextRequest) {
  try {
    const payload: FonioWebhookPayload = await request.json();

    // Validate required fields
    if (!payload.callId || !payload.phoneNumber || !payload.transcript) {
      return NextResponse.json(
        { error: "Missing required fields: callId, phoneNumber, transcript" },
        { status: 400 }
      );
    }

    // Fire Inngest event for async processing
    // The existing voiceCallHandler in tenant.message.ts handles:
    // - AI re-classification of transcript
    // - Logging voice conversation
    // - Emergency escalation (if urgency >= 4)
    // - Ticket creation (if needed)
    // - Tenant confirmation email (if tenant ID resolved)
    await inngest.send({
      name: "tenant/voice-call-received",
      data: {
        callId: payload.callId,
        phoneNumber: payload.phoneNumber,
        transcript: payload.transcript,
        summary: payload.summary || payload.transcript.substring(0, 200),
        durationSeconds: payload.duration,
        intent: "general", // Fonio doesn't classify, we do in Inngest
        urgency: 3, // Default urgency, re-classified by Inngest
        landlordId: null, // Resolved later by phone number lookup in Inngest
        tenantId: null,
        propertyId: null,
        escalated: false,
      },
    });

    // Return 200 OK to Fonio
    return NextResponse.json({
      status: "received",
      callId: payload.callId,
      message: "Voice call event queued for processing",
    });
  } catch (err) {
    console.error("[voice/fonio] Unhandled error:", err);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}

// Health check — Fonio uses GET to verify webhook URL
export async function GET() {
  return NextResponse.json({
    status: "ok",
    service: "kai-fonio-webhook",
    version: "1.0",
  });
}
