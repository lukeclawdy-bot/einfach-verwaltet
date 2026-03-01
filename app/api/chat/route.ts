import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const { message, history = [], system } = await req.json();

    if (!message) {
      return NextResponse.json({ error: "message required" }, { status: 400 });
    }

    if (!process.env.OPENROUTER_API_KEY) {
      return NextResponse.json({
        reply: "Aktuell nicht verfügbar. Schreiben Sie uns direkt: kontakt@einfach-verwaltet.de",
      });
    }

    const messages = [
      {
        role: "system",
        content: system || "Du bist Assistent von einfach verwaltet., einer Hausverwaltung in Hamburg. Antworte kurz und professionell auf Deutsch.",
      },
      // Include last 6 messages for context (keep token cost low)
      ...history.slice(-6).map((m: { role: string; content: string }) => ({
        role: m.role,
        content: m.content,
      })),
      { role: "user", content: message },
    ];

    const res = await fetch("https://openrouter.ai/api/v1/chat/completions", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${process.env.OPENROUTER_API_KEY}`,
        "Content-Type": "application/json",
        "HTTP-Referer": "https://einfach-verwaltet.de",
        "X-Title": "einfach verwaltet. — Chat Widget",
      },
      body: JSON.stringify({
        model: "google/gemini-2.5-flash",
        messages,
        max_tokens: 200,
        temperature: 0.4,
      }),
    });

    if (!res.ok) {
      console.error("OpenRouter error:", res.status, await res.text());
      return NextResponse.json({
        reply: "Momentan nicht erreichbar. Schreiben Sie uns: kontakt@einfach-verwaltet.de",
      });
    }

    const data = await res.json();
    const reply = data.choices?.[0]?.message?.content?.trim() || "Bitte kontaktieren Sie uns direkt: kontakt@einfach-verwaltet.de";

    return NextResponse.json({ reply });
  } catch (err) {
    console.error("Chat route error:", err);
    return NextResponse.json({
      reply: "Verbindungsfehler. Bitte schreiben Sie uns: kontakt@einfach-verwaltet.de",
    });
  }
}
