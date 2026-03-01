import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: NextRequest) {
  try {
    const { name, telefon, email, uhrzeit, nachricht } = await req.json();

    if (!name || !telefon) {
      return NextResponse.json({ error: "Name und Telefonnummer sind Pflichtfelder." }, { status: 400 });
    }

    const adminEmail = process.env.ADMIN_EMAIL || "lukas@einfach-verwaltet.de";

    const zeitLabel: Record<string, string> = {
      morning: "09:00–12:00 Uhr",
      afternoon: "12:00–17:00 Uhr",
      evening: "17:00–19:00 Uhr",
      anytime: "Jederzeit",
    };

    // Notify Lukas immediately
    await resend.emails.send({
      from: "einfach verwaltet. <anfrage@immo.einfach-verwaltet.de>",
      to: adminEmail,
      subject: `📞 Rückruf-Anfrage: ${name} — ${telefon}`,
      text: `Neue Rückruf-Anfrage:

Name: ${name}
Telefon: ${telefon}
E-Mail: ${email || "—"}
Gewünschte Zeit: ${zeitLabel[uhrzeit] || uhrzeit || "—"}
Nachricht: ${nachricht || "—"}

Eingegangen: ${new Date().toLocaleString("de-DE", { timeZone: "Europe/Berlin" })} Uhr

---
einfach verwaltet. CRM`,
    });

    // Confirmation to person (if email provided)
    if (email) {
      await resend.emails.send({
        from: "Lukas Schmitz <anfrage@immo.einfach-verwaltet.de>",
        to: [email],
        replyTo: "lukas@einfach-verwaltet.de",
        subject: "Rückruf bestätigt — einfach verwaltet.",
        text: `Hallo ${name},

Ihre Rückruf-Anfrage ist bei uns eingegangen. Wir rufen Sie unter ${telefon} zurück${uhrzeit && uhrzeit !== "anytime" ? ` (${zeitLabel[uhrzeit]})` : ""}.

Mit freundlichen Grüßen
Lukas Schmitz
einfach verwaltet. | Hamburg`,
      }).catch(() => null);
    }

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("Rückruf route error:", err);
    return NextResponse.json({ error: "Fehler. Bitte versuchen Sie es erneut." }, { status: 500 });
  }
}
