/**
 * WhatsApp Webhook Handler — 360dialog
 *
 * POST /api/webhooks/whatsapp — receives incoming messages from 360dialog
 * GET /api/webhooks/whatsapp — webhook verification (hub.challenge)
 *
 * Flow:
 * 1. Verify signature (HMAC-SHA256 with WHATSAPP_API_KEY)
 * 2. Parse incoming message
 * 3. Fire Inngest event: tenant/whatsapp.received
 * 4. Return 200 immediately (Inngest handles async processing)
 */

import { NextRequest, NextResponse } from "next/server";
import { WhatsAppClient, type IncomingWhatsAppMessage } from "@/lib/whatsapp/client";
import { inngest } from "@/lib/inngest/client";

// GET: 360dialog webhook verification
export async function GET(req: NextRequest) {
  const { searchParams } = req.nextUrl;
  const mode = searchParams.get("hub.mode");
  const token = searchParams.get("hub.verify_token");
  const challenge = searchParams.get("hub.challenge");

  const verifyToken = process.env.WHATSAPP_WEBHOOK_VERIFY_TOKEN || "einfach-verwaltet-whatsapp";

  if (mode === "subscribe" && token === verifyToken) {
    console.log("[whatsapp/webhook] Webhook verified");
    return new NextResponse(challenge, { status: 200 });
  }

  console.warn("[whatsapp/webhook] Webhook verification failed", { mode, token });
  return NextResponse.json({ error: "Forbidden" }, { status: 403 });
}

// POST: Receive incoming WhatsApp messages
export async function POST(req: NextRequest) {
  const rawBody = await req.text();
  const signature = req.headers.get("x-hub-signature-256") || "";

  // Verify signature
  const client = new WhatsAppClient();
  if (!client.verifyWebhookSignature(rawBody, signature)) {
    // In dev mode without a key, log but proceed
    if (process.env.WHATSAPP_API_KEY) {
      console.error("[whatsapp/webhook] Invalid signature — rejecting");
      return NextResponse.json({ error: "Invalid signature" }, { status: 401 });
    }
    console.warn("[whatsapp/webhook] Signature check skipped (no API key configured)");
  }

  let body: IncomingWhatsAppMessage;
  try {
    body = JSON.parse(rawBody);
  } catch {
    console.error("[whatsapp/webhook] Failed to parse body");
    return NextResponse.json({ error: "Invalid JSON" }, { status: 400 });
  }

  // 360dialog sends object: "whatsapp_business_account"
  if (body.object !== "whatsapp_business_account") {
    return NextResponse.json({ status: "ignored" }, { status: 200 });
  }

  const events: Promise<unknown>[] = [];

  for (const entry of body.entry || []) {
    for (const change of entry.changes || []) {
      if (change.field !== "messages") continue;

      const { value } = change;
      const messages = value.messages || [];
      const contacts = value.contacts || [];

      // Process each incoming message
      for (const message of messages) {
        if (!message.from) continue;

        // Find sender's display name from contacts array
        const contact = contacts.find((c) => c.wa_id === message.from);
        const senderName = contact?.profile?.name || message.from;

        // Extract message text
        let messageText = "";
        if (message.type === "text" && message.text) {
          messageText = message.text.body;
        } else if (message.type === "image" && message.image) {
          messageText = `[Bild${message.image.caption ? ": " + message.image.caption : ""}]`;
        } else if (message.type === "audio") {
          messageText = "[Sprachnachricht]";
        } else if (message.type === "document" && message.document) {
          messageText = `[Dokument: ${message.document.filename || "unbenannt"}]`;
        } else {
          messageText = `[${message.type}]`;
        }

        console.log(`[whatsapp/webhook] Message from ${message.from} (${senderName}): "${messageText.substring(0, 100)}"`);

        // Fire Inngest event for async processing
        events.push(
          inngest.send({
            name: "tenant/whatsapp.received",
            data: {
              from: message.from,
              senderName,
              messageId: message.id,
              messageText,
              messageType: message.type,
              timestamp: message.timestamp,
              phoneNumberId: value.metadata.phone_number_id,
            },
          })
        );

        // Mark message as read (fire and forget)
        try {
          await client.markAsRead(message.id);
        } catch (e) {
          console.warn("[whatsapp/webhook] Failed to mark as read:", e);
        }
      }

      // Handle status updates (delivery receipts)
      for (const status of value.statuses || []) {
        console.log(`[whatsapp/webhook] Status update: ${status.id} → ${status.status}`);
      }
    }
  }

  // Fire all Inngest events concurrently
  if (events.length > 0) {
    await Promise.allSettled(events);
  }

  // Always return 200 to 360dialog to acknowledge receipt
  return NextResponse.json({ status: "ok" }, { status: 200 });
}
