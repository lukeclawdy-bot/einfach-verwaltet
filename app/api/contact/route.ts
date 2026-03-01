import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";
import { inngest } from "@/lib/inngest/client";

const resend = new Resend(process.env.RESEND_API_KEY ?? "re_placeholder");

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { name, email, telefon, einheiten, typ, nachricht, website } = body;

    // Honeypot check
    if (website) {
      return NextResponse.json({ success: true });
    }

    if (!name || !email) {
      return NextResponse.json({ error: "Name und E-Mail sind Pflichtfelder." }, { status: 400 });
    }

    // Fire Inngest pipeline — handles Angebot in 3min + admin notification + DB persist
    try {
      await inngest.send({
        name: "lead/submitted",
        data: {
          name,
          email,
          telefon: telefon || "",
          einheiten: einheiten || "",
          typ: typ || "miet",
          standort: "Hamburg", // /kontakt doesn't ask standort, default Hamburg
          nachricht: nachricht || "",
          source: "kontakt",
        },
      });
    } catch (inngestErr) {
      // Non-blocking — don't fail the request if Inngest is down
      console.error("Inngest send error:", inngestErr);
    }

    // Immediate confirmation to visitor (Inngest also sends Angebot in 3min)
    await resend.emails.send({
      from: "Lukas Schmitz <anfrage@immo.einfach-verwaltet.de>",
      to: [email],
      replyTo: "lukas@einfach-verwaltet.de",
      subject: "Ihre Anfrage bei einfach verwaltet. — Angebot folgt in Kürze",
      text: `Hallo ${name},

vielen Dank für Ihre Anfrage! Wir haben Ihre Nachricht erhalten.

Sie erhalten in wenigen Minuten Ihr persönliches Angebot per E-Mail.

Bei dringenden Fragen erreichen Sie uns unter kontakt@einfach-verwaltet.de.

Mit freundlichen Grüßen
Lukas Schmitz
einfach verwaltet. | Hausverwaltung Hamburg

---
einfach verwaltet. | Singapurstr. 19, 20457 Hamburg
kontakt@einfach-verwaltet.de | einfach-verwaltet.de`,
    }).catch((e) => console.error("Confirmation email error:", e));

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("Contact route error:", err);
    return NextResponse.json({ error: "Interner Fehler. Bitte versuchen Sie es erneut." }, { status: 500 });
  }
}
