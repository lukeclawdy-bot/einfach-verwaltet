/**
 * WhatsApp Business API — Outbound Message Helper
 *
 * Sends WhatsApp messages via Meta Cloud API
 * Requires: WHATSAPP_PHONE_ID and WHATSAPP_ACCESS_TOKEN env vars
 */

interface WhatsAppApiResponse {
  messaging_product: string;
  contacts?: Array<{ input: string; wa_id: string }>;
  messages?: Array<{ id: string }>;
  error?: {
    code: number;
    message: string;
    type: string;
  };
}

/**
 * Send a WhatsApp message via Meta Cloud API
 *
 * @param to - Recipient's WhatsApp phone number (international format, e.g., "4915123456789")
 * @param message - Message text to send (max 4096 characters)
 * @throws Error if the API call fails
 */
export async function sendWhatsAppMessage(to: string, message: string): Promise<void> {
  const phoneId = process.env.WHATSAPP_PHONE_ID;
  const accessToken = process.env.WHATSAPP_ACCESS_TOKEN;

  if (!phoneId || !accessToken) {
    throw new Error("WHATSAPP_PHONE_ID or WHATSAPP_ACCESS_TOKEN not configured");
  }

  // Normalize phone number: remove spaces, dashes, and leading +
  const normalizedTo = to.replace(/[\s\-+]/g, "");

  const url = `https://graph.facebook.com/v18.0/${phoneId}/messages`;

  const payload = {
    messaging_product: "whatsapp",
    recipient_type: "individual",
    to: normalizedTo,
    type: "text",
    text: {
      body: message.substring(0, 4096), // Meta's max length
    },
  };

  const res = await fetch(url, {
    method: "POST",
    headers: {
      "Authorization": `Bearer ${accessToken}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify(payload),
  });

  if (!res.ok) {
    const errorText = await res.text();
    console.error("[whatsapp/send] API error:", res.status, errorText);
    throw new Error(`WhatsApp API error: ${res.status} — ${errorText}`);
  }

  const data: WhatsAppApiResponse = await res.json();

  if (data.error) {
    console.error("[whatsapp/send] API error response:", data.error);
    throw new Error(`WhatsApp API error: ${data.error.code} — ${data.error.message}`);
  }

  console.log(`[whatsapp/send] Message sent to ${to}, ID: ${data.messages?.[0]?.id}`);
}

/**
 * Send a WhatsApp template message (for approved templates)
 *
 * @param to - Recipient's phone number
 * @param templateName - Name of the approved template
 * @param languageCode - Language code (default: "de")
 * @param parameters - Template parameters
 */
export async function sendWhatsAppTemplate(
  to: string,
  templateName: string,
  languageCode: string = "de",
  parameters?: Array<{ type: string; parameter_name: string; text: string }>
): Promise<void> {
  const phoneId = process.env.WHATSAPP_PHONE_ID;
  const accessToken = process.env.WHATSAPP_ACCESS_TOKEN;

  if (!phoneId || !accessToken) {
    throw new Error("WHATSAPP_PHONE_ID or WHATSAPP_ACCESS_TOKEN not configured");
  }

  const normalizedTo = to.replace(/[\s\-+]/g, "");
  const url = `https://graph.facebook.com/v18.0/${phoneId}/messages`;

  const payload: Record<string, unknown> = {
    messaging_product: "whatsapp",
    recipient_type: "individual",
    to: normalizedTo,
    type: "template",
    template: {
      name: templateName,
      language: { code: languageCode },
    },
  };

  // Add parameters if provided (for templates with variables)
  if (parameters && parameters.length > 0) {
    payload.template = {
      ...payload.template as Record<string, unknown>,
      components: [
        {
          type: "body",
          parameters,
        },
      ],
    };
  }

  const res = await fetch(url, {
    method: "POST",
    headers: {
      "Authorization": `Bearer ${accessToken}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify(payload),
  });

  if (!res.ok) {
    const errorText = await res.text();
    console.error("[whatsapp/sendTemplate] API error:", res.status, errorText);
    throw new Error(`WhatsApp API error: ${res.status} — ${errorText}`);
  }

  const data: WhatsAppApiResponse = await res.json();

  if (data.error) {
    console.error("[whatsapp/sendTemplate] API error response:", data.error);
    throw new Error(`WhatsApp API error: ${data.error.code} — ${data.error.message}`);
  }

  console.log(`[whatsapp/sendTemplate] Template "${templateName}" sent to ${to}`);
}
