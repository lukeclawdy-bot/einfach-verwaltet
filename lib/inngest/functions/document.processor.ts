import { inngest } from "../client";
import { db } from "@/lib/db";
import { documents, properties, tenants, tickets, landlords } from "@/lib/db/schema";
import { eq, like, or, and, desc } from "drizzle-orm";
import type { ExtractedDocumentData } from "@/lib/types/document";

// Document processor — handles OCR, extraction, auto-linking via Inngest
export const documentProcessor = inngest.createFunction(
  { id: "document-processor", name: "Document OCR & Intelligence" },
  { event: "document/uploaded" },
  async ({ event, step }) => {
    const { documentId, landlordId, url, mimeType, name } = event.data;

    // Step 1: Fetch and OCR via Gemini Vision
    const ocrResult = await step.run("fetch-and-ocr", async () => {
      try {
        // Update status to processing
        await db.update(documents)
          .set({ ocrStatus: "processing", updatedAt: new Date() })
          .where(eq(documents.id, documentId));

        // Determine if this is a PDF or image
        const isImage = mimeType?.startsWith("image/");
        
        // For images: fetch and convert to base64
        // For PDFs: Gemini can handle PDF URLs directly
        let imageUrl = url;
        
        if (isImage) {
          // Fetch image and convert to base64 data URL
          const imageRes = await fetch(url);
          if (!imageRes.ok) {
            throw new Error(`Failed to fetch image: ${imageRes.status}`);
          }
          const imageBuffer = await imageRes.arrayBuffer();
          const base64 = Buffer.from(imageBuffer).toString("base64");
          const contentType = mimeType || "image/jpeg";
          imageUrl = `data:${contentType};base64,${base64}`;
        }

        // Call OpenRouter with Gemini Vision
        if (!process.env.OPENROUTER_API_KEY) {
          throw new Error("OPENROUTER_API_KEY not configured");
        }

        const res = await fetch("https://openrouter.ai/api/v1/chat/completions", {
          method: "POST",
          headers: {
            "Authorization": `Bearer ${process.env.OPENROUTER_API_KEY}`,
            "Content-Type": "application/json",
            "HTTP-Referer": "https://einfach-verwaltet.de",
            "X-Title": "einfach verwaltet. — Document OCR",
          },
          body: JSON.stringify({
            model: "google/gemini-2.5-flash",
            messages: [
              {
                role: "user",
                content: [
                  {
                    type: "image_url",
                    image_url: { url: imageUrl }
                  },
                  {
                    type: "text",
                    text: "Extrahiere den gesamten Text aus diesem Dokument. Wenn es ein Formular oder strukturiertes Dokument ist, erhalte alle sichtbaren Daten.",
                  }
                ]
              }
            ],
            temperature: 0.1,
          }),
        });

        if (!res.ok) {
          const errorText = await res.text();
          throw new Error(`OpenRouter error: ${res.status} - ${errorText}`);
        }

        const data = await res.json();
        const ocrText = data.choices?.[0]?.message?.content || "";

        return { ocrText, error: null };
      } catch (error) {
        console.error("OCR error:", error);
        return { 
          ocrText: "", 
          error: error instanceof Error ? error.message : "Unknown OCR error" 
        };
      }
    });

    // Step 2: Extract structured data from OCR text
    const extractionResult = await step.run("extract-structured-data", async () => {
      try {
        if (!process.env.OPENROUTER_API_KEY) {
          throw new Error("OPENROUTER_API_KEY not configured");
        }

        const extractionPrompt = `Analysiere dieses deutsche Immobilien-Dokument und extrahiere folgende Informationen im JSON-Format:

{
  "documentType": "invoice|mietvertrag|mahnung|nebenkostenabrechnung|protokoll|behoerdenpost|sonstiges",
  "date": "YYYY-MM-DD oder null",
  "amount": number oder null,
  "currency": "EUR",
  "parties": {
    "sender": "Absender/Firma/Rechnungssteller oder leer",
    "recipient": "Empfänger/Kunde oder leer"
  },
  "address": "Immobilienadresse falls erkennbar oder leer",
  "dueDate": "YYYY-MM-DD oder null",
  "referenceNumber": "Aktenzeichen/Rechnungsnummer/BetrKNr oder null",
  "summary": "1-2 Satz Zusammenfassung auf Deutsch",
  "urgency": 1-5,
  "requiredAction": "Was muss der Vermieter tun? oder null",
  "confidence": 0-100
}

Skala fuer urgency:
1-2: Keine Eile, rein informativ
3: Standard-Dokument, normal bearbeiten
4: Zeitdruck, Frist beachten
5: SOFORT handeln (Mahnung, Gerichtspost, Fristablauf heute)

Dokumenttext:
${ocrResult.ocrText.substring(0, 8000)}`;

        const res = await fetch("https://openrouter.ai/api/v1/chat/completions", {
          method: "POST",
          headers: {
            "Authorization": `Bearer ${process.env.OPENROUTER_API_KEY}`,
            "Content-Type": "application/json",
            "HTTP-Referer": "https://einfach-verwaltet.de",
            "X-Title": "einfach verwaltet. — Document Extraction",
          },
          body: JSON.stringify({
            model: "google/gemini-2.5-flash",
            messages: [
              {
                role: "system",
                content: "Du bist ein KI-Assistent fuer eine deutsche Hausverwaltung. Extrahiere strukturierte Daten aus Dokumenten. Antworte NUR mit gueltigem JSON, keine Markdown-Formatierung."
              },
              {
                role: "user",
                content: extractionPrompt,
              }
            ],
            temperature: 0.1,
          })
        });

        if (!res.ok) {
          const errorText = await res.text();
          throw new Error(`OpenRouter error: ${res.status} - ${errorText}`);
        }

        const data = await res.json();
        const content = data.choices?.[0]?.message?.content || "";

        // Parse JSON from response
        let parsedData: ExtractedDocumentData;
        try {
          // Try to find JSON in markdown code blocks
          const jsonMatch = content.match(/```(?:json)?\s*([\s\S]*?)```/);
          const jsonString = jsonMatch ? jsonMatch[1].trim() : content.trim();
          parsedData = JSON.parse(jsonString);
        } catch (parseError) {
          console.error("Failed to parse extraction JSON:", parseError);
          parsedData = {
            documentType: "sonstiges",
            date: null,
            amount: null,
            currency: "EUR",
            parties: { sender: "", recipient: "" },
            address: "",
            dueDate: null,
            referenceNumber: null,
            summary: content.substring(0, 200),
            urgency: 2,
            requiredAction: null,
            confidence: 0,
          };
        }

        return { data: parsedData, error: null };
      } catch (error) {
        console.error("Extraction error:", error);
        return { 
          data: null as unknown as ExtractedDocumentData, 
          error: error instanceof Error ? error.message : "Unknown extraction error" 
        };
      }
    });

    const extracted = extractionResult.data;

    // Step 3: Auto-link document to property, tenant, or ticket
    const linkingResult = await step.run("auto-link", async () => {
      const links = {
        propertyId: null as string | null,
        tenantId: null as string | null,
        ticketId: null as string | null,
      };

      try {
        // Try to match property by address
        if (extracted?.address) {
          const propertyRows = await db
            .select()
            .from(properties)
            .where(
              and(
                eq(properties.landlordId, landlordId),
                like(properties.address, `%${extracted.address.replace(/[^a-zA-Z0-9aeoeueAEOEUEss\s-]/gi, "")}%`),
              )
            )
            .limit(1);
          
          if (propertyRows.length > 0) {
            links.propertyId = propertyRows[0].id;
          }
        }

        // Try to match tenant by name in document
        if (extracted?.parties?.sender || extracted?.parties?.recipient) {
          const partiesText = `${extracted.parties.sender} ${extracted.parties.recipient}`;
          // Extract potential names and search
          const nameParts = partiesText.split(/\s+/).filter(w => w.length > 2);
          
          for (const part of nameParts.slice(0, 5)) {
            if (part.length < 3) continue;
            const tenantRows = await db
              .select()
              .from(tenants)
              .where(
                or(
                  like(tenants.firstName, `%${part}%`),
                  like(tenants.lastName, `%${part}%`)
                )
              )
              .limit(1);
            
            if (tenantRows.length > 0) {
              links.tenantId = tenantRows[0].id;
              break;
            }
          }
        }

        // Check for existing tickets that this document might be related to
        if (extracted?.referenceNumber) {
          const ticketRows = await db
            .select()
            .from(tickets)
            .where(
              and(
                eq(tickets.landlordId, landlordId),
                or(
                  like(tickets.title, `%${extracted.referenceNumber}%`),
                  like(tickets.description || "", `%${extracted.referenceNumber}%`)
                )
              )
            )
            .orderBy(desc(tickets.createdAt))
            .limit(1);
          
          if (ticketRows.length > 0) {
            links.ticketId = ticketRows[0].id;
          }
        }

        return links;
      } catch (error) {
        console.error("Auto-link error:", error);
        return links;
      }
    });

    // Step 4: Create ticket if urgent
    const ticketResult = await step.run("create-ticket-if-urgent", async () => {
      const isUrgent = extracted?.urgency >= 4 || 
                       extracted?.documentType === "mahnung" ||
                       extracted?.documentType === "behoerdenpost";

      if (!isUrgent) {
        return { ticketId: null, created: false };
      }

      try {
        const slaDeadline = new Date();
        slaDeadline.setHours(slaDeadline.getHours() + 24);

        const [newTicket] = await db
          .insert(tickets)
          .values({
            propertyId: linkingResult.propertyId || event.data.propertyId,
            tenantId: linkingResult.tenantId,
            landlordId: landlordId,
            title: extracted?.summary?.substring(0, 100) || `Dringend: ${extracted?.documentType || "Dokument"}`,
            description: `Automatisch erstellt aus Dokument ${name}.\n\nZusammenfassung: ${extracted?.summary || "Keine Zusammenfassung verfuegbar"}\nAbsender: ${extracted?.parties?.sender || "Unbekannt"}\nBetrag: ${extracted?.amount ? `${extracted.amount} EUR` : "Nicht angegeben"}\nFaelligkeitsdatum: ${extracted?.dueDate || "Nicht angegeben"}\nReferenz: ${extracted?.referenceNumber || "N/A"}`,
            category: "other",
            priority: "urgent",
            status: "open",
            urgency: extracted?.urgency || 4,
            slaDeadline,
            aiTriage: {
              source: "document",
              documentId,
              documentType: extracted?.documentType,
              urgency: extracted?.urgency,
              summary: extracted?.summary,
            },
          })
          .returning();

        return { ticketId: newTicket.id, created: true };
      } catch (error) {
        console.error("Ticket creation error:", error);
        return { ticketId: null, created: false, error: String(error) };
      }
    });

    // Step 5: Update document record with all extracted data
    await step.run("update-document-record", async () => {
      try {
        await db.update(documents)
          .set({
            ocrStatus: ocrResult.error ? "failed" : "done",
            ocrText: ocrResult.ocrText.substring(0, 100000), // Limit storage
            extractedData: extracted || {},
            documentClassification: extracted?.documentType || null,
            confidence: extracted?.confidence?.toString() || null,
            linkedTicketId: ticketResult.ticketId,
            propertyId: linkingResult.propertyId || event.data.propertyId,
            tenantId: linkingResult.tenantId || event.data.tenantId,
            processingError: ocrResult.error || extractionResult.error || null,
            updatedAt: new Date(),
          })
          .where(eq(documents.id, documentId));

        return { success: true };
      } catch (error) {
        console.error("Document update error:", error);
        return { success: false, error: String(error) };
      }
    });

    // Step 6: Notify landlord if urgent
    await step.run("notify-landlord", async () => {
      if (!extracted || extracted.urgency < 4) {
        return { notified: false, reason: "Not urgent" };
      }

      if (!process.env.RESEND_API_KEY) {
        return { notified: false, reason: "No Resend API key" };
      }

      try {
        // Get landlord email
        const { Resend } = await import("resend");
        const resend = new Resend(process.env.RESEND_API_KEY);

        const landlordRows = await db
          .select()
          .from(landlords)
          .where(eq(landlords.id, landlordId))
          .limit(1);
        
        const landlordEmail = landlordRows[0]?.email || process.env.EMERGENCY_EMAIL || "kontakt@einfach-verwaltet.de";

        const urgencyLabels: Record<number, string> = {
          4: "Dringend",
          5: "SOFORT",
        };

        await resend.emails.send({
          from: "system@einfach-verwaltet.de",
          to: landlordEmail,
          subject: `${urgencyLabels[extracted.urgency] || "Dringend"}: ${extracted.documentType?.toUpperCase()} — ${extracted.summary?.substring(0, 50) || "Dokument"}`,
          html: `
            <div style="font-family:sans-serif;max-width:600px;margin:0 auto;border:2px solid #dc2626;padding:20px;border-radius:8px">
              <h2 style="color:#dc2626;margin-top:0">Achtung: Dringendes Dokument eingegangen</h2>
              <p><strong>Dokument:</strong> ${name}</p>
              <p><strong>Typ:</strong> ${extracted.documentType || "Unbekannt"}</p>
              <p><strong>Zusammenfassung:</strong> ${extracted.summary || "Keine Zusammenfassung"}</p>
              <p><strong>Absender:</strong> ${extracted.parties?.sender || "Unbekannt"}</p>
              ${extracted.amount ? `<p><strong>Betrag:</strong> ${extracted.amount} EUR</p>` : ""}
              ${extracted.dueDate ? `<p><strong>Faellig bis:</strong> ${extracted.dueDate}</p>` : ""}
              ${extracted.requiredAction ? `<p><strong>Erforderliche Aktion:</strong> ${extracted.requiredAction}</p>` : ""}
              ${ticketResult.ticketId ? `<p><strong>Ticket erstellt:</strong> ${ticketResult.ticketId}</p>` : ""}
              <p style="margin-top:20px">
                <a href="https://einfach-verwaltet.de/portal/dokumente" style="background:#0369a1;color:white;padding:10px 20px;text-decoration:none;border-radius:4px">
                  Im Portal ansehen
                </a>
              </p>
            </div>
          `,
        });

        return { notified: true };
      } catch (error) {
        console.error("Notification error:", error);
        return { notified: false, error: String(error) };
      }
    });

    return {
      documentId,
      ocrSuccess: !ocrResult.error,
      extractionSuccess: !extractionResult.error,
      ...linkingResult,
      ticketId: ticketResult.ticketId,
    };
  }
);
