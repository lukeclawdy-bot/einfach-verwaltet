import { NextRequest, NextResponse } from "next/server";
import { inngest } from "@/lib/inngest/client";

/**
 * WhatsApp Business API Webhook Handler
 *
 * Meta/WhatsApp Business sends webhooks for incoming messages.
 * Endpoint: https://einfach-verwaltet.de/api/webhooks/whatsapp
 *
 * GET  — Webhook verification (Meta requires this for setup)
 * POST — Incoming message handler
 */

// Types for Meta webhook payload
interface MetaWebhookEntry {
  id: string;
  changes: Array<{
    value: {
      messaging_product: "whatsapp";
      metadata: {
        display_phone_number: string;
        phone_number_id: string;
      };
      contacts?: Array<{
        profile: { name: string };
        wa_id: string;
      }>;
      messages?: Array<{
        from: string;
        id: string;
        timestamp: string;
        type: string;
        text?: { body: string };
        image?: { id: string; mime_type: string };
        audio?: { id: string; mime_type: string };
        voice?: { id: string; mime_type: string };
        document?: { id: string; filename: string; mime_type: string };
        location?: { latitude: number; longitude: number };
      }>;
    };
    field: string;
  }>;
}

interface MetaWebhookPayload {
  object: "whatsapp_business_account";
  entry: MetaWebhookEntry[];
}

/**
 * GET handler — Webhook verification
 * Meta sends: ?hub.mode=subscribe&hub.verify_token=YOUR_TOKEN&hub.challenge=CHALLENGE
 * We must return the challenge string if token matches
 */
export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams;
  const mode = searchParams.get("hub.mode");
  const verifyToken = searchParams.get("hub.verify_token");
  const challenge = searchParams.get("hub.challenge");

  // Validate required parameters
  if (mode !== "subscribe" || !verifyToken || !challenge) {
    return NextResponse.json({ error: "Missing parameters" }, { status: 400 });
  }

  // Verify token against environment variable
  const expectedToken = process.env.WHATSAPP_VERIFY_TOKEN;
  if (!expectedToken) {
    console.error("[whatsapp/webhook] WHATSAPP_VERIFY_TOKEN not configured");
    return NextResponse.json({ error: "Server configuration error" }, { status: 500 });
  }

  if (verifyToken !== expectedToken) {
    console.error("[whatsapp/webhook] Verify token mismatch");
    return NextResponse.json({ error: "Verify token mismatch" }, { status: 403 });
  }

  // Token matches — return challenge for webhook verification
  console.log("[whatsapp/webhook] Webhook verified successfully");
  return new NextResponse(challenge, {
    status: 200,
    headers: { "Content-Type": "text/plain" },
  });
}

/**
 * POST handler — Incoming messages
 * Parses Meta webhook payload and fires Inngest event
 */
export async function POST(request: NextRequest) {
  try {
    const payload: MetaWebhookPayload = await request.json();

    // Validate this is a WhatsApp business account webhook
    if (payload.object !== "whatsapp_business_account") {
      return NextResponse.json({ status: "ignored", reason: "not_whatsapp" }, { status: 200 });
    }

    // Process each entry and change
    const processedMessages: Array<{ waId: string; from: string; status: string }> = [];

    for (const entry of payload.entry) {
      for (const change of entry.changes) {
        const value = change.value;

        // Skip if no messages (could be status updates)
        if (!value.messages || value.messages.length === 0) {
          continue;
        }

        for (const message of value.messages) {
          const from = message.from; // Sender's phone number
          const waId = message.id;   // WhatsApp message ID
          const timestamp = message.timestamp;

          // Extract message text (or indicate other types)
          let messageText = "";
          if (message.type === "text" && message.text) {
            messageText = message.text.body;
          } else if (message.type === "image") {
            messageText = "[Bild empfangen]";
          } else if (message.type === "voice" || message.type === "audio") {
            messageText = "[Sprachnachricht empfangen]";
          } else if (message.type === "document") {
            messageText = "[Dokument empfangen]";
          } else if (message.type === "location") {
            messageText = "[Standort empfangen]";
          } else {
            messageText = `[${message.type} Nachricht empfangen]`;
          }

          // Fire Inngest event for async processing
          // The existing tenantMessage function handles classification + ticket creation
          await inngest.send({
            name: "tenant/message.received",
            data: {
              message: messageText,
              tenantId: null,        // Resolved later via phone lookup
              propertyId: null,      // Resolved later
              landlordId: null,      // Resolved later
              landlordEmail: null,   // Resolved later
              channel: "whatsapp",
              phoneNumber: from,     // Sender's WhatsApp number
              waId: waId,            // WhatsApp message ID for deduplication
              timestamp: new Date(parseInt(timestamp) * 1000).toISOString(),
            },
          });

          processedMessages.push({ waId, from, status: "queued" });
          console.log(`[whatsapp/webhook] Message ${waId} from ${from} queued for processing`);
        }
      }
    }

    // Return 200 OK immediately — Meta requires fast response
    // Async processing happens via Inngest
    return NextResponse.json({
      status: "ok",
      processed: processedMessages.length,
      messages: processedMessages,
    });
  } catch (err) {
    console.error("[whatsapp/webhook] Error processing webhook:", err);
    // Still return 200 to prevent Meta from retrying
    // Log error for monitoring
    return NextResponse.json({ status: "error_logged" }, { status: 200 });
  }
}
