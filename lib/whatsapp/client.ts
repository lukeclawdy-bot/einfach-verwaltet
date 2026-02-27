/**
 * 360dialog WhatsApp Business API Client
 *
 * 360dialog is a WhatsApp Business API partner that provides:
 * - Direct API access (not via Meta's Cloud API)
 * - €50/month minimum + €0.02-0.05/message
 * - Webhook delivery with HMAC-SHA256 signature verification
 *
 * Docs: https://docs.360dialog.com/
 * API endpoint: https://waba.360dialog.io/v1/messages
 */

import crypto from "crypto";

const DIALOG_BASE_URL = "https://waba.360dialog.io/v1";

export interface WhatsAppTextMessage {
  messaging_product: "whatsapp";
  to: string;
  type: "text";
  text: { body: string };
}

export interface WhatsAppTemplateMessage {
  messaging_product: "whatsapp";
  to: string;
  type: "template";
  template: {
    name: string;
    language: { code: string };
    components?: Array<{
      type: "header" | "body" | "button";
      parameters: Array<{ type: "text"; text: string }>;
    }>;
  };
}

export interface Dialog360Response {
  messages?: Array<{ id: string }>;
  contacts?: Array<{ input: string; wa_id: string }>;
  error?: {
    code: number;
    title: string;
    message?: string;
  };
}

export interface IncomingWhatsAppMessage {
  object: "whatsapp_business_account";
  entry: Array<{
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
          type: "text" | "image" | "audio" | "document" | "video" | "location" | "interactive";
          text?: { body: string };
          image?: { caption?: string; mime_type: string; sha256: string; id: string };
          audio?: { mime_type: string; sha256: string; id: string };
          document?: { filename?: string; mime_type: string; sha256: string; id: string };
        }>;
        statuses?: Array<{
          id: string;
          status: "sent" | "delivered" | "read" | "failed";
          timestamp: string;
          recipient_id: string;
        }>;
      };
      field: "messages";
    }>;
  }>;
}

export class WhatsAppClient {
  private apiKey: string;
  private phoneNumberId: string;

  constructor(apiKey?: string, phoneNumberId?: string) {
    this.apiKey = apiKey || process.env.WHATSAPP_API_KEY || "";
    this.phoneNumberId = phoneNumberId || process.env.WHATSAPP_PHONE_NUMBER_ID || "";

    if (!this.apiKey) {
      console.warn("[whatsapp/client] WHATSAPP_API_KEY not set — messages will fail");
    }
  }

  /**
   * Send a plain text WhatsApp message via 360dialog
   *
   * @param to - Recipient phone in international format (e.g., "4915123456789")
   * @param message - Message text (max 4096 chars)
   */
  async sendMessage(to: string, message: string): Promise<string> {
    const normalizedTo = this.normalizePhone(to);

    const payload: WhatsAppTextMessage = {
      messaging_product: "whatsapp",
      to: normalizedTo,
      type: "text",
      text: { body: message.substring(0, 4096) },
    };

    const response = await this.request("messages", "POST", payload);
    const messageId = response.messages?.[0]?.id;

    if (!messageId) {
      throw new Error(`[whatsapp] No message ID in response: ${JSON.stringify(response)}`);
    }

    console.log(`[whatsapp] Message sent to ${to}, ID: ${messageId}`);
    return messageId;
  }

  /**
   * Send a WhatsApp template message (for approved templates)
   *
   * Templates must be approved by Meta before use.
   * Use templates for: automated notifications, replies after 24h window
   *
   * @param to - Recipient phone
   * @param template - Approved template name
   * @param params - Template body parameters (in order)
   * @param languageCode - Template language (default: "de")
   */
  async sendTemplate(
    to: string,
    template: string,
    params: string[],
    languageCode: string = "de"
  ): Promise<string> {
    const normalizedTo = this.normalizePhone(to);

    const payload: WhatsAppTemplateMessage = {
      messaging_product: "whatsapp",
      to: normalizedTo,
      type: "template",
      template: {
        name: template,
        language: { code: languageCode },
        components:
          params.length > 0
            ? [
                {
                  type: "body",
                  parameters: params.map((p) => ({ type: "text" as const, text: p })),
                },
              ]
            : undefined,
      },
    };

    const response = await this.request("messages", "POST", payload);
    const messageId = response.messages?.[0]?.id;

    if (!messageId) {
      throw new Error(`[whatsapp] No message ID in template response: ${JSON.stringify(response)}`);
    }

    console.log(`[whatsapp] Template "${template}" sent to ${to}, ID: ${messageId}`);
    return messageId;
  }

  /**
   * Verify webhook signature from 360dialog
   *
   * 360dialog signs webhooks with HMAC-SHA256 using the API key.
   * Signature is in the X-Hub-Signature-256 header.
   *
   * @param rawBody - Raw request body (Buffer or string)
   * @param signature - Value of X-Hub-Signature-256 header
   */
  verifyWebhookSignature(rawBody: string | Buffer, signature: string): boolean {
    if (!signature || !this.apiKey) return false;

    const sigHeader = signature.startsWith("sha256=")
      ? signature.slice(7)
      : signature;

    const expected = crypto
      .createHmac("sha256", this.apiKey)
      .update(rawBody)
      .digest("hex");

    // Timing-safe comparison
    try {
      return crypto.timingSafeEqual(
        Buffer.from(expected, "hex"),
        Buffer.from(sigHeader, "hex")
      );
    } catch {
      return false;
    }
  }

  /**
   * Send a "typing" indicator (message_read + typing)
   */
  async markAsRead(messageId: string): Promise<void> {
    await this.request("messages", "POST", {
      messaging_product: "whatsapp",
      status: "read",
      message_id: messageId,
    });
  }

  private normalizePhone(phone: string): string {
    // Remove spaces, dashes, parentheses, plus sign
    return phone.replace(/[\s\-+()]/g, "");
  }

  private async request(
    endpoint: string,
    method: "GET" | "POST" | "PUT" | "DELETE",
    body?: unknown
  ): Promise<Dialog360Response> {
    const url = `${DIALOG_BASE_URL}/${endpoint}`;

    const res = await fetch(url, {
      method,
      headers: {
        "D360-API-KEY": this.apiKey,
        "Content-Type": "application/json",
      },
      body: body ? JSON.stringify(body) : undefined,
    });

    const data: Dialog360Response = await res.json();

    if (!res.ok || data.error) {
      const errorMsg = data.error
        ? `${data.error.code}: ${data.error.title} — ${data.error.message || ""}`
        : `HTTP ${res.status}`;
      console.error(`[whatsapp/client] API error at ${endpoint}:`, errorMsg);
      throw new Error(`WhatsApp API error: ${errorMsg}`);
    }

    return data;
  }
}

// Singleton instance
let _client: WhatsAppClient | null = null;

export function getWhatsAppClient(): WhatsAppClient {
  if (!_client) {
    _client = new WhatsAppClient();
  }
  return _client;
}

// Pre-approved template names for einfach verwaltet.
export const WHATSAPP_TEMPLATES = {
  TICKET_ACKNOWLEDGED: "ticket_eingang_bestaetigung",     // "Ihre Anfrage ({{1}}) ist eingegangen. Wir melden uns innerhalb von 15 Minuten."
  TICKET_RESOLVED: "ticket_abgeschlossen",                // "Ihr Anliegen '{{1}}' wurde erledigt. Bei Fragen melden Sie sich gerne."
  RENT_REMINDER: "miete_erinnerung",                      // "Erinnerung: Ihre Miete für {{1}} ist am {{2}} fällig."
  MAHNUNG: "mahnung_freundlich",                          // "Ihre Miete für {{1}} ist überfällig. Bitte überweisen Sie {{2}} bis {{3}}."
  DOCUMENT_READY: "dokument_bereit",                      // "Ihr Dokument '{{1}}' steht im Mieterportal zur Verfügung."
  WELCOME: "mieter_willkommen",                           // "Willkommen bei einfach verwaltet. Ihr Mieterportal: {{1}}"
} as const;
