import { NextRequest, NextResponse } from 'next/server';

export async function POST(req: NextRequest) {
  try {
    const { tenantMessage, category } = await req.json();
    if (!tenantMessage) return NextResponse.json({ error: 'tenantMessage required' }, { status: 400 });

    if (!process.env.OPENROUTER_API_KEY) {
      return NextResponse.json({ draft: 'KI-Entwurf nicht verfügbar (API-Key fehlt).' });
    }

    const res = await fetch('https://openrouter.ai/api/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${process.env.OPENROUTER_API_KEY}`,
        'Content-Type': 'application/json',
        'HTTP-Referer': 'https://einfach-verwaltet.de',
        'X-Title': 'einfach verwaltet. — Reply Drafter',
      },
      body: JSON.stringify({
        model: 'google/gemini-2.5-flash',
        messages: [
          {
            role: 'system',
            content: `Du bist Mitarbeiter einer Hausverwaltung (einfach verwaltet., Hamburg). Formuliere eine professionelle, freundliche Antwort auf die Mieteranfrage. Kategorie: ${category || 'allgemein'}. Max 150 Wörter. Auf Deutsch. Beginne direkt mit der Anrede "Sehr geehrte/r...".`,
          },
          { role: 'user', content: tenantMessage },
        ],
      }),
    });

    const data = await res.json();
    const draft = data.choices?.[0]?.message?.content || 'Entwurf konnte nicht erstellt werden.';
    return NextResponse.json({ draft });
  } catch (e) {
    return NextResponse.json({ error: String(e) }, { status: 500 });
  }
}
