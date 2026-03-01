import { NextRequest, NextResponse } from "next/server";
import { db } from "@/lib/db";
import { freelancers } from "@/lib/db/schema";
import { eq } from "drizzle-orm";
import { generateFreelancerPin, storeFreelancerPin } from "@/lib/auth/freelancer-pin-store";
import { Resend } from "resend";

let _resend: InstanceType<typeof Resend> | null = null;
function getResend() {
  if (!_resend) _resend = new Resend(process.env.RESEND_API_KEY);
  return _resend;
}

const GENERIC_MSG = "Wenn Sie registriert sind, erhalten Sie in Kürze Ihren Code.";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json().catch(() => ({}));
    const { email } = body as { email?: string };

    if (!email) {
      return NextResponse.json(
        { error: "E-Mail-Adresse ist erforderlich." },
        { status: 400 }
      );
    }

    const normalizedEmail = email.trim().toLowerCase();

    // Look up freelancer by email
    let freelancerRecord: typeof freelancers.$inferSelect | undefined;
    try {
      const [found] = await db
        .select()
        .from(freelancers)
        .where(eq(freelancers.email, normalizedEmail));
      freelancerRecord = found;
    } catch {
      // DB not available — create demo freelancer for MVP
      freelancerRecord = {
        id: "demo-freelancer-1",
        name: "Demo Freelancer",
        email: normalizedEmail,
        phone: null,
        skills: ["handover", "inspection"],
        rating: "4.80",
        jobsCompleted: 12,
        status: "active",
        createdAt: new Date(),
      };
    }

    if (!freelancerRecord) {
      // Generic response — don't reveal if email is registered
      return NextResponse.json({ message: GENERIC_MSG });
    }

    const pin = generateFreelancerPin();
    storeFreelancerPin(normalizedEmail, pin, freelancerRecord.id, freelancerRecord.name ?? undefined);

    // Send PIN via email
    if (process.env.RESEND_API_KEY) {
      try {
        await getResend().emails.send({
          from: "einfach verwaltet. <noreply@einfach-verwaltet.de>",
          to: normalizedEmail,
          subject: `Ihr Login-Code: ${pin}`,
          html: `
            <div style="font-family: sans-serif; max-width: 500px; margin: 0 auto; padding: 24px;">
              <h2 style="color: #1a2e4a;">Ihr Handwerker-Portal Login</h2>
              <p>Guten Tag${freelancerRecord.name ? ` ${freelancerRecord.name}` : ""},</p>
              <p>Ihr 6-stelliger Zugangscode:</p>
              <div style="background: #f0fafa; border: 2px solid #00b8a9; border-radius: 12px; padding: 24px; text-align: center; margin: 24px 0;">
                <span style="font-size: 36px; font-weight: bold; letter-spacing: 8px; color: #00b8a9;">${pin}</span>
              </div>
              <p style="color: #666; font-size: 14px;">Dieser Code ist 10 Minuten gültig.</p>
              <p style="color: #666; font-size: 14px;">einfach verwaltet.</p>
            </div>
          `,
        });
      } catch {
        // Email sending failed — log but don't fail the request
        console.error("Failed to send freelancer login email");
      }
    }

    // Return pin in dev mode (no RESEND_API_KEY)
    const devMode = !process.env.RESEND_API_KEY;
    return NextResponse.json({
      message: GENERIC_MSG,
      ...(devMode ? { pin, freelancerId: freelancerRecord.id } : {}),
    });
  } catch (err) {
    console.error("Freelancer magic-link error:", err);
    return NextResponse.json(
      { error: "Interner Serverfehler." },
      { status: 500 }
    );
  }
}
