/**
 * AI Routes — Tenant Communication Engine (Claude API)
 * POST /api/ai/chat — tenant message → AI response via Claude
 * 
 * Implements the Tenant Communication Engine spec (MC note cmm2i4kca004v2tmi6pedjzon):
 * - Intent classification (Haiku) → Response generation (Sonnet)
 * - 7 intents: repair_request, noise_complaint, payment_question,
 *   document_request, lease_question, emergency, other
 * - German-language responses, always polite Sie-form
 * - Emergency → escalation flag
 * - AI confidence check (< 0.7 → human review flag)
 */

import { Hono } from 'hono';
import { z } from 'zod';
import Anthropic from '@anthropic-ai/sdk';
import { authMiddleware } from '../../middleware/auth.js';
import { validationError, serverError, errorResponse } from '../../lib/errors.js';

const ai = new Hono();

// Apply JWT auth
ai.use('/*', authMiddleware);

// ─── Schema ───────────────────────────────────────────────────────────────────

const ChatSchema = z.object({
  message: z.string().min(1, 'Nachricht ist erforderlich').max(5000),
  conversationId: z.string().optional(),
  context: z.object({
    propertyAddress: z.string().optional(),
    unitNumber: z.string().optional(),
    tenantName: z.string().optional(),
  }).optional(),
});

// ─── Intent types ─────────────────────────────────────────────────────────────

type Intent =
  | 'repair_request'
  | 'noise_complaint'
  | 'payment_question'
  | 'document_request'
  | 'lease_question'
  | 'emergency'
  | 'other';

interface Classification {
  intent: Intent;
  confidence: number;
  urgency: 'low' | 'medium' | 'high' | 'critical';
  requiresHumanReview: boolean;
  suggestedAction: string;
}

// ─── POST /api/ai/chat ────────────────────────────────────────────────────────

ai.post('/chat', async (c) => {
  try {
    const body = await c.req.json();
    const parsed = ChatSchema.safeParse(body);
    if (!parsed.success) return validationError(c, parsed.error);

    const { message, context } = parsed.data;

    // Check if Anthropic API key is configured
    if (!process.env.ANTHROPIC_API_KEY) {
      // Return mock response for demo purposes when no API key
      return c.json(getMockAIResponse(message, context));
    }

    const client = new Anthropic({
      apiKey: process.env.ANTHROPIC_API_KEY,
    });

    // Step 1: Classify intent with Claude Haiku (fast, cheap)
    const classification = await classifyIntent(client, message);

    // Step 2: Handle emergency immediately
    if (classification.intent === 'emergency') {
      return c.json({
        response: EMERGENCY_RESPONSE,
        intent: classification.intent,
        confidence: classification.confidence,
        urgency: 'critical',
        requiresHumanReview: true,
        escalated: true,
        ticketPriority: 'emergency',
        suggestedAction: 'EMERGENCY: Sofortige Weiterleitung an Notdienst-Mitarbeiter',
      });
    }

    // Step 3: Generate contextual response with Claude Sonnet
    const response = await generateResponse(client, message, classification, context);

    return c.json({
      response: response.text,
      intent: classification.intent,
      confidence: classification.confidence,
      urgency: classification.urgency,
      requiresHumanReview: classification.requiresHumanReview,
      escalated: false,
      ticketPriority: mapIntentToPriority(classification.intent),
      suggestedAction: classification.suggestedAction,
      // In production: ticketId would be created here via MockDB.createTicket()
    });

  } catch (err) {
    // Graceful degradation — if AI fails, return a human handoff message
    if (err instanceof Anthropic.APIError) {
      console.error('[AI API Error]', err.status, err.message);
      return c.json({
        response: FALLBACK_RESPONSE,
        intent: 'other',
        confidence: 0,
        urgency: 'medium',
        requiresHumanReview: true,
        escalated: true,
        error: 'AI service temporarily unavailable',
      });
    }
    return serverError(c, err);
  }
});

// ─── GET /api/ai/intents ──────────────────────────────────────────────────────

ai.get('/intents', async (c) => {
  return c.json({
    intents: [
      { key: 'repair_request', label: 'Reparaturanfrage', autoResolve: true, examples: ['Heizung kaputt', 'Wasserhahn tropft', 'Schimmel'] },
      { key: 'noise_complaint', label: 'Lärmbeschwerde', autoResolve: true, examples: ['Nachbar zu laut', 'Ruhestörung'] },
      { key: 'payment_question', label: 'Zahlungsfrage', autoResolve: true, examples: ['Nebenkosten-Frage', 'Miete wann fällig'] },
      { key: 'document_request', label: 'Dokumentenanfrage', autoResolve: true, examples: ['Mietbescheinigung', 'Wohnungsgeberbestätigung'] },
      { key: 'lease_question', label: 'Mietvertragsfrage', autoResolve: false, examples: ['Kündigungsfrist', 'Untervermietung', 'Haustier'] },
      { key: 'emergency', label: 'Notfall', autoResolve: false, examples: ['Wasserrohrbruch', 'kein Strom', 'Feuer'] },
      { key: 'other', label: 'Sonstiges', autoResolve: false, examples: ['Alles andere'] },
    ],
  });
});

// ─── AI Functions ──────────────────────────────────────────────────────────────

async function classifyIntent(client: Anthropic, message: string): Promise<Classification> {
  const classificationPrompt = `Du bist ein Klassifizierungs-KI für Mieterkommunikation. Analysiere die folgende Nachricht und klassifiziere sie.

Nachricht: "${message}"

Antworte NUR mit einem JSON-Objekt (kein Markdown):
{
  "intent": "<repair_request|noise_complaint|payment_question|document_request|lease_question|emergency|other>",
  "confidence": <0.0-1.0>,
  "urgency": "<low|medium|high|critical>",
  "requiresHumanReview": <true|false>,
  "suggestedAction": "<kurze Aktionsbeschreibung auf Deutsch>"
}`;

  const response = await client.messages.create({
    model: 'claude-haiku-4-5',
    max_tokens: 256,
    messages: [{ role: 'user', content: classificationPrompt }],
  });

  const text = response.content[0].type === 'text' ? response.content[0].text : '{}';

  try {
    const classification = JSON.parse(text) as Classification;
    // Validate and clamp confidence
    classification.confidence = Math.max(0, Math.min(1, classification.confidence ?? 0.5));
    classification.requiresHumanReview = classification.requiresHumanReview || classification.confidence < 0.7;
    return classification;
  } catch {
    return {
      intent: 'other',
      confidence: 0.5,
      urgency: 'medium',
      requiresHumanReview: true,
      suggestedAction: 'Manuell prüfen',
    };
  }
}

async function generateResponse(
  client: Anthropic,
  message: string,
  classification: Classification,
  context?: { propertyAddress?: string; unitNumber?: string; tenantName?: string }
): Promise<{ text: string }> {
  const systemPrompt = `Du bist der KI-Assistent von einfach verwaltet. Hausverwaltung. Du kommunizierst professionell, freundlich und klar auf Deutsch. Du siezt den Mieter immer. Bei Unsicherheit sagst du ehrlich, dass du die Anfrage an einen Mitarbeiter weiterleitest. Du gibst niemals rechtliche Zusagen oder Versprechen ab, die nicht durch den Mietvertrag gedeckt sind.

${context?.tenantName ? `Mieter: ${context.tenantName}` : ''}
${context?.propertyAddress ? `Objekt: ${context.propertyAddress}${context.unitNumber ? `, Wohnung ${context.unitNumber}` : ''}` : ''}

Erkannter Intent: ${classification.intent}
Dringlichkeit: ${classification.urgency}

Antworte auf die Mieter-Nachricht angemessen. Halte die Antwort prägnant (max. 200 Wörter).`;

  const intentGuidance: Record<Intent, string> = {
    repair_request: 'Bestätige den Eingang, nenne eine Ticketnummer (falls erstellt), und teile die voraussichtliche Reaktionszeit mit (24h Standard, 4h Notfall). Frage nach: genauer Ort, seit wann, ggf. Fotos.',
    noise_complaint: 'Empathie zeigen. Verweise auf Hausordnung und Ruhezeiten (22-7 Uhr). Bei Wiederholung: Hinweis auf Protokollführung.',
    payment_question: 'Beantworte die Frage sachlich. Verweise auf §§ BetrKV bei Betriebskosten-Fragen. Keine Zahlungspflicht relativieren.',
    document_request: 'Bestätige die Anfrage und erkläre den nächsten Schritt (Bearbeitung innerhalb von 1-2 Werktagen).',
    lease_question: 'Zitiere relevante §§ BGB soweit bekannt. Bei komplexen Fragen: an Mitarbeiter weiterleiten.',
    emergency: EMERGENCY_RESPONSE,
    other: 'Beantworte hilfreich oder leite an einen Mitarbeiter weiter.',
  };

  const userPrompt = `Mieter-Nachricht: "${message}"

Hinweis für deine Antwort: ${intentGuidance[classification.intent]}`;

  const response = await client.messages.create({
    model: 'claude-sonnet-4-5',
    max_tokens: 512,
    system: systemPrompt,
    messages: [{ role: 'user', content: userPrompt }],
  });

  const text = response.content[0].type === 'text' ? response.content[0].text : FALLBACK_RESPONSE;
  return { text };
}

// ─── Mock response (when no API key) ─────────────────────────────────────────

function getMockAIResponse(
  message: string,
  context?: { propertyAddress?: string; unitNumber?: string; tenantName?: string }
) {
  const lowerMsg = message.toLowerCase();
  let intent: Intent = 'other';
  let response = '';

  if (lowerMsg.match(/heizung|warm|kalt|heizkörper|radiator/)) {
    intent = 'repair_request';
    response = `Vielen Dank für Ihre Meldung zur Heizungsanlage. Wir haben Ihre Anfrage erfasst (Ticket-Nr: DEMO-001) und werden uns innerhalb von 4 Stunden bei Ihnen melden. Bitte teilen Sie uns mit: In welchem Raum ist das Problem? Seit wann besteht es? Wenn möglich, machen Sie gerne ein Foto. Unser Wartungsteam wird sich so schnell wie möglich darum kümmern.`;
  } else if (lowerMsg.match(/lärm|laut|musik|ruhestörung|nachbar/)) {
    intent = 'noise_complaint';
    response = `Wir verstehen Ihre Situation sehr gut. Gemäß unserer Hausordnung gelten Ruhezeiten von 22:00 bis 07:00 Uhr sowie von 13:00 bis 15:00 Uhr. Wir werden Ihren Nachbarn auf die Einhaltung der Ruhezeiten hinweisen. Sollten die Störungen anhalten, empfehlen wir, eine kurze schriftliche Notiz mit Datum und Uhrzeit zu führen.`;
  } else if (lowerMsg.match(/wasser|rohr|tropf|feucht|schimmel/)) {
    intent = 'repair_request';
    response = `Vielen Dank für Ihre Meldung. Wir haben Ihre Anfrage (Ticket-Nr: DEMO-002) sofort erfasst. Feuchtigkeits- und Wasserprobleme werden von uns priorisiert behandelt. Bitte achten Sie auf Ihre Sicherheit. Ein Handwerker wird sich innerhalb von 24 Stunden bei Ihnen melden. Bitte fotografieren Sie das Problem, falls möglich.`;
  } else if (lowerMsg.match(/notfall|feuer|flut|ausfall|strom|gas|einbruch|gefahr/)) {
    intent = 'emergency';
    response = EMERGENCY_RESPONSE;
  } else if (lowerMsg.match(/nebenkost|abrechnung|miete|zahlung|rechnung|kosten/)) {
    intent = 'payment_question';
    response = `Gerne helfen wir Ihnen bei Ihrer Frage zur Abrechnung. Für detaillierte Informationen zu Ihrer persönlichen Nebenkostenabrechnung prüfen wir Ihre Unterlagen und melden uns innerhalb von 1-2 Werktagen bei Ihnen. Bitte geben Sie an, auf welches Abrechnungsjahr sich Ihre Frage bezieht.`;
  } else if (lowerMsg.match(/bescheinigung|bestätigung|dokument|vertrag|mietvertrag/)) {
    intent = 'document_request';
    response = `Vielen Dank für Ihre Anfrage. Das gewünschte Dokument wird innerhalb von 1-2 Werktagen für Sie bereitgestellt. Sie erhalten es per E-Mail oder über Ihr Mieterportal.`;
  } else {
    response = `Vielen Dank für Ihre Nachricht. Wir haben Ihre Anfrage erhalten und werden uns innerhalb von 24 Stunden bei Ihnen melden. Falls es sich um eine dringende Angelegenheit handelt, stehen wir Ihnen unter unserer Notfallnummer zur Verfügung.`;
  }

  return {
    response,
    intent,
    confidence: 0.85,
    urgency: intent === 'emergency' ? 'critical' : intent === 'repair_request' ? 'high' : 'medium',
    requiresHumanReview: intent === 'emergency',
    escalated: intent === 'emergency',
    ticketPriority: mapIntentToPriority(intent),
    suggestedAction: `Ticket erstellen: ${intent}`,
    // ⚠️ MOCK: No ANTHROPIC_API_KEY set — using rule-based mock responses
    dataSource: 'mock_rules',
  };
}

// ─── Constants ────────────────────────────────────────────────────────────────

const EMERGENCY_RESPONSE = `🚨 Wir haben Ihre Notfallmeldung erhalten und leiten sofort Maßnahmen ein.

Ein Notdienst-Mitarbeiter wird sich innerhalb von 30 Minuten bei Ihnen melden.

Bei unmittelbarer Lebensgefahr rufen Sie sofort:
• Feuerwehr/Notfall: 112
• Polizei: 110
• Gas-Notfall: 0800 0172217 (Netze Hamburg)

Ihr Sicherheit hat oberste Priorität.`;

const FALLBACK_RESPONSE = `Vielen Dank für Ihre Nachricht. Unser KI-Assistent steht gerade nicht zur Verfügung. Ein Mitarbeiter von einfach verwaltet. wird sich so schnell wie möglich bei Ihnen melden.

Bei dringenden Angelegenheiten wenden Sie sich bitte direkt an unsere Notfallnummer.`;

function mapIntentToPriority(intent: Intent): string {
  const map: Record<Intent, string> = {
    emergency: 'emergency',
    repair_request: 'high',
    noise_complaint: 'normal',
    payment_question: 'normal',
    document_request: 'low',
    lease_question: 'normal',
    other: 'low',
  };
  return map[intent];
}

export default ai;
