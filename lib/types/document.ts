// Document types for AI extraction

export interface ExtractedDocumentData {
  documentType: "invoice" | "mietvertrag" | "mahnung" | "nebenkostenabrechnung" | "protokoll" | "behoerdenpost" | "sonstiges";
  date: string | null;
  amount: number | null;
  currency: string;
  parties: {
    sender: string;
    recipient: string;
  };
  address: string;
  dueDate: string | null;
  referenceNumber: string | null;
  summary: string;
  urgency: number; // 1-5
  requiredAction: string | null;
  confidence: number; // 0-100
}

// Document with AI extraction results (for UI)
export interface DocumentWithExtraction {
  id: string;
  name: string;
  type: string;
  typeLabel: string;
  ocrStatus: "pending" | "processing" | "done" | "failed";
  ocrText: string | null;
  extractedData: ExtractedDocumentData | Record<string, unknown>;
  documentClassification: string | null;
  confidence: string | null;
  linkedTicketId: string | null;
  propertyId: string | null;
  propertyAddress: string | null;
  unitId: string | null;
  unitDesignation: string | null;
  tenantId: string | null;
  tenantName: string | null;
  url: string;
  mimeType: string | null;
  sizeBytes: number | null;
  sizeFormatted: string;
  createdAt: string;
}
