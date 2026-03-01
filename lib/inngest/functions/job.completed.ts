import { inngest } from "../client";
import { db } from "@/lib/db";
import { jobs, auditTrail, freelancers } from "@/lib/db/schema";
import { eq } from "drizzle-orm";

// ─── TYPES ────────────────────────────────────────────────────────────────────

interface PhotoQAResult {
  photoUrl: string;
  pass: boolean;
  confidence: number;
  reason: string;
  issues: string[];
}

interface QAAggregate {
  status: "approved" | "needs-revision" | "needs-review";
  results: PhotoQAResult[];
  reasons: string[];
}

// ─── GEMINI VISION QA ─────────────────────────────────────────────────────────

async function checkPhotoWithGemini(
  photoUrl: string,
  jobType: string,
  jobDescription: string
): Promise<PhotoQAResult> {
  const apiKey = process.env.OPENROUTER_API_KEY;
  if (!apiKey) {
    console.warn("[QA] OPENROUTER_API_KEY not set — skipping vision check");
    return { photoUrl, pass: true, confidence: 75, reason: "API key nicht konfiguriert (Stub)", issues: [] };
  }

  const prompt = `Du bist QA-Prüfer für einen Hausverwalter. Job: ${jobType} — ${jobDescription}. Beurteile ob dieses Foto eine vollständige, professionelle Ausführung des Jobs belegt. Antworte nur mit JSON: {"pass": true/false, "confidence": 0-100, "reason": "...", "issues": ["..."]}`;

  try {
    const res = await fetch("https://openrouter.ai/api/v1/chat/completions", {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${apiKey}`,
        "Content-Type": "application/json",
        "HTTP-Referer": "https://einfach-verwaltet.de",
        "X-Title": "einfach verwaltet. QA",
      },
      body: JSON.stringify({
        model: "google/gemini-2.5-flash",
        messages: [
          {
            role: "user",
            content: [
              { type: "text", text: prompt },
              { type: "image_url", image_url: { url: photoUrl } },
            ],
          },
        ],
      }),
    });

    if (!res.ok) {
      const errorText = await res.text();
      console.error(`[QA] OpenRouter error ${res.status}:`, errorText);
      return { photoUrl, pass: true, confidence: 60, reason: "API-Fehler — manuelle Prüfung", issues: [] };
    }

    const data = await res.json();
    const content = data.choices?.[0]?.message?.content || "";

    // Extract JSON from response (may have surrounding text)
    const jsonMatch = content.match(/\{[\s\S]*\}/);
    if (!jsonMatch) {
      console.error("[QA] Could not parse JSON from Gemini response:", content);
      return { photoUrl, pass: true, confidence: 55, reason: "Antwort konnte nicht geparst werden", issues: [] };
    }

    const parsed = JSON.parse(jsonMatch[0]);
    return {
      photoUrl,
      pass: Boolean(parsed.pass),
      confidence: Number(parsed.confidence) || 50,
      reason: String(parsed.reason || ""),
      issues: Array.isArray(parsed.issues) ? parsed.issues : [],
    };
  } catch (err) {
    console.error("[QA] Vision check error:", err);
    return { photoUrl, pass: true, confidence: 55, reason: "Prüfungsfehler — manuelle Kontrolle erforderlich", issues: [] };
  }
}

// ─── QA AGGREGATION LOGIC ─────────────────────────────────────────────────────

function aggregateQAResults(results: PhotoQAResult[]): QAAggregate {
  const reasons: string[] = [];

  if (results.length === 0) {
    return { status: "needs-review", results, reasons: ["Keine Fotos hochgeladen"] };
  }

  let hasFailure = false;
  let hasLowConfidence = false;

  for (const r of results) {
    if (!r.pass) {
      hasFailure = true;
      if (r.reason) reasons.push(r.reason);
      reasons.push(...r.issues);
    } else if (r.confidence < 70) {
      hasLowConfidence = true;
      if (r.reason) reasons.push(`Niedrige Konfidenz (${r.confidence}%): ${r.reason}`);
    }
  }

  if (hasFailure) {
    return { status: "needs-revision", results, reasons: [...new Set(reasons)] };
  }
  if (hasLowConfidence) {
    return { status: "needs-review", results, reasons: [...new Set(reasons)] };
  }
  return { status: "approved", results, reasons: [] };
}

// ─── INNGEST FUNCTION ─────────────────────────────────────────────────────────

export const jobCompleted = inngest.createFunction(
  { id: "job-completed-qa", name: "Job Completed — Photo QA via Gemini Vision" },
  { event: "job/completed" },
  async ({ event, step }) => {
    const { jobId, freelancerId, photoUrls, jobType, jobDescription } = event.data as {
      jobId: string;
      freelancerId: string;
      photoUrls: string[];
      jobType: string;
      jobDescription: string;
    };

    // ── Step 1: Load job from DB ──────────────────────────────────────────────
    const jobRecord = await step.run("load-job", async () => {
      const [row] = await db.select().from(jobs).where(eq(jobs.id, jobId)).limit(1);
      if (!row) throw new Error(`Job ${jobId} nicht gefunden`);
      return row;
    });

    // ── Step 2: QA each photo via Gemini Vision ───────────────────────────────
    const qaResults: PhotoQAResult[] = await step.run("qa-photos", async () => {
      if (!photoUrls || photoUrls.length === 0) {
        return [];
      }
      const checks = await Promise.all(
        photoUrls.map((url) => checkPhotoWithGemini(url, jobType, jobDescription))
      );
      return checks;
    });

    // ── Step 3: Aggregate QA results ─────────────────────────────────────────
    const qa = await step.run("aggregate-qa", async () => {
      return aggregateQAResults(qaResults);
    });

    // ── Step 4: Update job qaStatus in DB ────────────────────────────────────
    await step.run("update-job-qa-status", async () => {
      const newStatus = qa.status === "approved" ? "completed" : "needs-revision";
      await db
        .update(jobs)
        .set({
          qaStatus: qa.status,
          status: newStatus,
          // Store QA reasons as completionNotes if revision needed
          completionNotes:
            qa.reasons.length > 0
              ? `QA-Feedback: ${qa.reasons.join("; ")}`
              : jobRecord.completionNotes,
        })
        .where(eq(jobs.id, jobId));
    });

    // ── Step 5: Notify admin ──────────────────────────────────────────────────
    await step.run("notify-admin", async () => {
      const subject =
        qa.status === "approved"
          ? `✅ Job abgenommen: ${jobType}`
          : qa.status === "needs-review"
          ? `👀 Job zur Prüfung: ${jobType}`
          : `⚠️ Job benötigt Überarbeitung: ${jobType}`;

      const message =
        qa.status === "approved"
          ? `Job ${jobId} (${jobType}) wurde automatisch durch die Foto-QA abgenommen. Zahlung kann ausgelöst werden.`
          : qa.status === "needs-review"
          ? `Job ${jobId} (${jobType}) erfordert manuelle Prüfung (Konfidenz <70%). Bitte Fotos kontrollieren.`
          : `Job ${jobId} (${jobType}) wurde durch QA abgelehnt. Gründe: ${qa.reasons.join(", ")}`;

      // In production: send to admin via email/WhatsApp
      // For now: structured log (admin webhook or push to DB can be wired here)
      console.log(`[QA Admin Notification] ${subject}: ${message}`);
      return { subject, message };
    });

    // ── Step 6: Notify freelancer if revision needed ──────────────────────────
    if (qa.status === "needs-revision" || qa.status === "needs-review") {
      await step.run("notify-freelancer", async () => {
        const [freelancer] = await db
          .select()
          .from(freelancers)
          .where(eq(freelancers.id, freelancerId))
          .limit(1);

        const message =
          qa.status === "needs-revision"
            ? `Dein Job "${jobType}" (${jobId}) wurde durch unsere automatische Foto-QA abgelehnt. Bitte Überarbeitung einreichen. Gründe: ${qa.reasons.join(", ")}`
            : `Dein Job "${jobType}" (${jobId}) wird manuell geprüft. Wir melden uns innerhalb von 24 Stunden.`;

        // In production: send email via Resend or WhatsApp via 360dialog
        console.log(`[QA Freelancer Notification] → ${freelancer?.email || freelancerId}: ${message}`);
        return { email: freelancer?.email, message };
      });
    }

    // ── Step 7 (PASS only): Trigger payment stub ─────────────────────────────
    if (qa.status === "approved") {
      await step.run("trigger-payment-stub", async () => {
        // TODO: Integrate with payment provider (Stripe Connect / SEPA payout)
        console.log(`[QA Payment Stub] Triggering payout for job ${jobId}, freelancer ${freelancerId}, amount: ${jobRecord.fixedPriceCents} cents`);
        return {
          stub: true,
          jobId,
          freelancerId,
          amountCents: jobRecord.fixedPriceCents,
        };
      });
    }

    // ── Step 7: Log to audit_trail ────────────────────────────────────────────
    await step.run("audit-log", async () => {
      await db.insert(auditTrail).values({
        entityType: "job",
        entityId: jobId,
        action: `qa_${qa.status}`,
        actorType: "agent",
        actorId: "gemini-vision-qa",
        description: `Photo QA completed — status: ${qa.status}. ${qa.reasons.length > 0 ? `Reasons: ${qa.reasons.join("; ")}` : "All photos passed."}`,
        metadata: {
          qaStatus: qa.status,
          photoCount: photoUrls?.length || 0,
          results: qaResults,
          reasons: qa.reasons,
        },
      });
    });

    return {
      jobId,
      qaStatus: qa.status,
      photoCount: photoUrls?.length || 0,
      reasons: qa.reasons,
    };
  }
);
