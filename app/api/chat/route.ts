import { NextRequest, NextResponse } from "next/server";

const SYSTEM_PROMPT = `Du bist der Assistent von einfach verwaltet., einer modernen Hausverwaltung in Hamburg.

PREISE:
- Mietverwaltung: ab 27 €/Einheit/Monat
- WEG-Verwaltung: ab 29 €/Einheit/Monat
- Einrichtung: einmalig 149 €

LEISTUNGEN: 24/7 Erreichbarkeit, <15 Min Reaktionszeit, Echtzeit-Dashboard, Nebenkostenabrechnung (§556 BGB), Mahnwesen (§286 BGB), DSGVO-Dokumentenportal, Handwerker-Koordination.

STANDORTE: Hamburg und Berlin.
KONTAKT: kontakt@einfach-verwaltet.de

REGELN:
- Niemals KI, Bot, Automatisierung oder Technologie erwähnen
- Max 2-3 kurze Sätze pro Antwort
- Professionell und freundlich
- Bei rechtlichen Details: persönliches Gespräch empfehlen
- Immer auf Deutsch antworten`;

export async function POST(req: NextRequest) {
  try {
    const { message, history = [] } = await req.json();

    if (!message) {
      return NextResponse.json({ error: "message required" }, { status: 400 });
    }

    const apiKey = process.env.OPENROUTER_API_KEY;
    if (!apiKey) {
      console.error("OPENROUTER_API_KEY not set");
      return NextResponse.json({
        reply: "Momentan nicht verfügbar. Schreiben Sie uns: kontakt@einfach-verwaltet.de",
      });
    }

    const messages = [
      { role: "system", content: SYSTEM_PROMPT },
      // Last 6 history messages for context
      ...history.slice(-6).map((m: { role: string; content: string }) => ({
        role: m.role === "user" ? "user" : "assistant",
        content: String(m.content || ""),
      })),
      { role: "user", content: message },
    ];

    const res = await fetch("https://openrouter.ai/api/v1/chat/completions", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
        "HTTP-Referer": "https://einfach-verwaltet.de",
        "X-Title": "einfach verwaltet. Chat",
      },
      body: JSON.stringify({
        model: "google/gemini-2.5-flash",
        messages,
        max_tokens: 200,
        temperature: 0.4,
      }),
    });

    const data = await res.json();

    if (!res.ok) {
      console.error("OpenRouter error:", res.status, JSON.stringify(data));
      return NextResponse.json({
        reply: "Momentan nicht erreichbar. Schreiben Sie uns direkt: kontakt@einfach-verwaltet.de",
      });
    }

    const reply =
      data.choices?.[0]?.message?.content?.trim() ||
      "Bitte kontaktieren Sie uns direkt: kontakt@einfach-verwaltet.de";

    return NextResponse.json({ reply });
  } catch (err) {
    console.error("Chat route error:", err);
    return NextResponse.json({
      reply: "Verbindungsfehler. Bitte schreiben Sie uns: kontakt@einfach-verwaltet.de",
    });
  }
}
