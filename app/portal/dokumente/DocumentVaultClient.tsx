"use client";

import { useState, useMemo } from "react";
import { UploadModal } from "./UploadModal";
import type { DocumentWithExtraction } from "@/lib/types/document";

type Property = {
  id: string;
  address: string;
  unitCount: number;
};

type DocumentVaultClientProps = {
  initialDocuments: DocumentWithExtraction[];
  properties: Property[];
  landlordId: string;
  isDemo?: boolean;
};

const TYPE_GROUPS = [
  { key: 'vertraege', label: 'Verträge', types: ['mietvertrag'] },
  { key: 'abrechnungen', label: 'Abrechnungen', types: ['abrechnung', 'energieausweis'] },
  { key: 'protokolle', label: 'Protokolle', types: ['protokoll'] },
  { key: 'sonstiges', label: 'Sonstiges', types: ['mahnung', 'sonstiges'] },
];

const STATUS_CONFIG: Record<string, { label: string; color: string; dot: string }> = {
  pending: { label: "Ausstehend", color: "bg-gray-100 text-gray-600", dot: "bg-gray-400" },
  processing: { label: "Verarbeitung", color: "bg-blue-50 text-blue-600", dot: "bg-blue-500 animate-pulse" },
  done: { label: "Fertig", color: "bg-green-50 text-green-600", dot: "bg-green-500" },
  failed: { label: "Fehler", color: "bg-red-50 text-red-600", dot: "bg-red-500" },
};

const DOCUMENT_TYPE_LABELS: Record<string, string> = {
  invoice: "Rechnung",
  mietvertrag: "Mietvertrag",
  mahnung: "Mahnung",
  nebenkostenabrechnung: "Nebenkostenabrechnung",
  protokoll: "Protokoll",
  behoerdenpost: "Behördenpost",
  sonstiges: "Sonstiges",
};

const CLASSIFICATION_COLORS: Record<string, string> = {
  invoice: "bg-purple-100 text-purple-700",
  mietvertrag: "bg-indigo-100 text-indigo-700",
  mahnung: "bg-red-100 text-red-700",
  nebenkostenabrechnung: "bg-orange-100 text-orange-700",
  protokoll: "bg-teal-100 text-teal-700",
  behoerdenpost: "bg-amber-100 text-amber-700",
  sonstiges: "bg-gray-100 text-gray-600",
};

export function DocumentVaultClient({ 
  initialDocuments, 
  properties,
  landlordId,
  isDemo = false,
}: DocumentVaultClientProps) {
  const [documents, setDocuments] = useState<DocumentWithExtraction[]>(initialDocuments);
  const [isUploadModalOpen, setIsUploadModalOpen] = useState(false);
  const [selectedProperty, setSelectedProperty] = useState<string>("all");
  const [selectedType, setSelectedType] = useState<string>("all");
  const [deletingId, setDeletingId] = useState<string | null>(null);
  const [expandedDocId, setExpandedDocId] = useState<string | null>(null);

  const filteredDocuments = useMemo(() => {
    return documents.filter((doc) => {
      if (selectedProperty !== "all" && doc.propertyId !== selectedProperty) {
        return false;
      }
      if (selectedType !== "all" && doc.type !== selectedType) {
        return false;
      }
      return true;
    });
  }, [documents, selectedProperty, selectedType]);

  const groupedDocuments = useMemo(() => {
    const groups: Record<string, DocumentWithExtraction[]> = {
      vertraege: [],
      abrechnungen: [],
      protokolle: [],
      sonstiges: [],
    };

    filteredDocuments.forEach((doc) => {
      for (const group of TYPE_GROUPS) {
        if (group.types.includes(doc.type)) {
          groups[group.key].push(doc);
          break;
        }
      }
    });

    return groups;
  }, [filteredDocuments]);

  const handleUploadSuccess = (newDoc: DocumentWithExtraction) => {
    setDocuments((prev) => [newDoc, ...prev]);
    setIsUploadModalOpen(false);
  };

  const handleDelete = async (docId: string) => {
    if (!confirm("Möchten Sie dieses Dokument wirklich löschen?")) {
      return;
    }

    setDeletingId(docId);
    try {
      const res = await fetch(
        `/portal/api/documents/${docId}?landlordId=${landlordId}`,
        { method: "DELETE" }
      );

      if (res.ok) {
        setDocuments((prev) => prev.filter((d) => d.id !== docId));
      } else {
        alert("Fehler beim Löschen des Dokuments");
      }
    } catch (error) {
      alert("Fehler beim Löschen des Dokuments");
    } finally {
      setDeletingId(null);
    }
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString("de-DE", {
      day: "2-digit",
      month: "2-digit",
      year: "numeric",
    });
  };

  const formatCurrency = (amount: number | null | undefined) => {
    if (amount == null) return null;
    return new Intl.NumberFormat("de-DE", {
      style: "currency",
      currency: "EUR",
    }).format(amount);
  };

  const getClassificationBadge = (classification: string | null) => {
    if (!classification) return null;
    const label = DOCUMENT_TYPE_LABELS[classification] || classification;
    const colorClass = CLASSIFICATION_COLORS[classification] || "bg-gray-100 text-gray-600";
    return (
      <span className={`inline-flex items-center px-2 py-0.5 rounded text-xs font-medium ${colorClass}`}>
        {label}
      </span>
    );
  };

  const getStatusBadge = (status: string) => {
    const config = STATUS_CONFIG[status] || STATUS_CONFIG.pending;
    return (
      <span className={`inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full text-xs font-medium ${config.color}`}>
        <span className={`w-1.5 h-1.5 rounded-full ${config.dot}`} />
        {config.label}
      </span>
    );
  };

  const hasDocuments = documents.length > 0;

  return (
    <div className="max-w-6xl mx-auto px-8 py-8">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-navy">Dokumente</h1>
        <p className="text-text-light text-sm mt-0.5">
          Verwalten Sie alle Ihre Verträge, Abrechnungen und Protokolle an einem Ort.
          KI analysiert und kategorisiert automatisch.
        </p>
      </div>

      {/* Filters and Upload */}
      <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
        <div className="flex items-center gap-3">
          <select
            value={selectedProperty}
            onChange={(e) => setSelectedProperty(e.target.value)}
            className="px-3 py-2 bg-white border border-gray-200 rounded-lg text-sm text-navy focus:outline-none focus:ring-2 focus:ring-teal/20 focus:border-teal"
          >
            <option value="all">Alle Objekte</option>
            {properties.map((prop) => (
              <option key={prop.id} value={prop.id}>
                {prop.address}
              </option>
            ))}
          </select>

          <select
            value={selectedType}
            onChange={(e) => setSelectedType(e.target.value)}
            className="px-3 py-2 bg-white border border-gray-200 rounded-lg text-sm text-navy focus:outline-none focus:ring-2 focus:ring-teal/20 focus:border-teal"
          >
            <option value="all">Alle Typen</option>
            <option value="mietvertrag">Mietvertrag</option>
            <option value="energieausweis">Energieausweis</option>
            <option value="protokoll">Protokoll</option>
            <option value="abrechnung">Betriebskostenabrechnung</option>
            <option value="mahnung">Mahnung</option>
            <option value="sonstiges">Sonstiges</option>
          </select>
        </div>

        <button
          onClick={() => setIsUploadModalOpen(true)}
          className="flex items-center gap-2 px-4 py-2 bg-navy text-white rounded-lg text-sm font-medium hover:bg-navy/90 transition-colors"
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
          </svg>
          Dokument hochladen
        </button>
      </div>

      {/* Documents List */}
      {!hasDocuments ? (
        <div className="bg-white rounded-2xl border border-gray-100 p-12 text-center">
          <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <svg className="w-8 h-8 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
          </div>
          <h3 className="text-lg font-semibold text-navy mb-2">
            Noch keine Dokumente
          </h3>
          <p className="text-text-light text-sm mb-6">
            Laden Sie jetzt Ihr erstes Dokument hoch. Die KI analysiert es automatisch.
          </p>
          <button
            onClick={() => setIsUploadModalOpen(true)}
            className="px-4 py-2 bg-teal text-white rounded-lg text-sm font-medium hover:bg-teal/90 transition-colors"
          >
            Dokument hochladen
          </button>
        </div>
      ) : filteredDocuments.length === 0 ? (
        <div className="bg-white rounded-2xl border border-gray-100 p-12 text-center">
          <p className="text-text-light text-sm">
            Keine Dokumente für die ausgewählten Filter gefunden.
          </p>
        </div>
      ) : (
        <div className="space-y-6">
          {TYPE_GROUPS.map((group) => {
            const docs = groupedDocuments[group.key];
            if (docs.length === 0) return null;

            return (
              <div key={group.key} className="bg-white rounded-2xl border border-gray-100 overflow-hidden">
                <div className="px-6 py-4 border-b border-gray-50 bg-gray-50/50">
                  <h2 className="font-semibold text-navy">{group.label}</h2>
                  <p className="text-xs text-text-light mt-0.5">
                    {docs.length} {docs.length === 1 ? 'Dokument' : 'Dokumente'}
                  </p>
                </div>
                <div className="divide-y divide-gray-50">
                  {docs.map((doc) => {
                    const extracted = doc.extractedData as Record<string, unknown> | null;
                    const isExpanded = expandedDocId === doc.id;
                    const amount = extracted?.amount as number | undefined;
                    const docDate = extracted?.date as string | undefined;
                    const summary = extracted?.summary as string | undefined;
                    const urgency = extracted?.urgency as number | undefined;

                    return (
                      <div key={doc.id} className="group">
                        <div
                          className="px-6 py-4 hover:bg-gray-50/50 transition-colors cursor-pointer"
                          onClick={() => setExpandedDocId(isExpanded ? null : doc.id)}
                        >
                          <div className="flex items-start gap-4">
                            {/* File Icon */}
                            <div className="w-10 h-10 bg-teal/10 rounded-lg flex items-center justify-center flex-shrink-0">
                              <svg className="w-5 h-5 text-teal" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                              </svg>
                            </div>

                            {/* Main Content */}
                            <div className="flex-1 min-w-0">
                              <div className="flex items-start justify-between gap-4">
                                <div>
                                  <h3 className="text-sm font-medium text-navy truncate max-w-[300px]">
                                    {doc.name}
                                  </h3>
                                  <div className="flex items-center gap-2 mt-1 flex-wrap">
                                    {getStatusBadge(doc.ocrStatus || 'pending')}
                                    {doc.documentClassification && getClassificationBadge(doc.documentClassification)}
                                    {doc.linkedTicketId && (
                                      <span className="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-blue-50 text-blue-600">
                                        Ticket erstellt
                                      </span>
                                    )}
                                  </div>
                                </div>
                                <div className="flex items-center gap-4 text-right">
                                  <div>
                                    {amount != null && (
                                      <p className={`text-sm font-semibold ${amount > 0 ? 'text-navy' : 'text-red-600'}`}>
                                        {formatCurrency(amount)}
                                      </p>
                                    )}
                                    {docDate && (
                                      <p className="text-xs text-text-light">
                                        {new Date(docDate).toLocaleDateString("de-DE")}
                                      </p>
                                    )}
                                  </div>
                                  <svg className={`w-5 h-5 text-gray-400 transition-transform ${isExpanded ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                  </svg>
                                </div>
                              </div>

                              {/* Summary Row */}
                              {doc.ocrStatus === 'done' && summary && (
                                <p className="text-sm text-text-light mt-2 line-clamp-2">
                                  {summary}
                                </p>
                              )}

                              {/* Urgency Indicator */}
                              {urgency && urgency >= 4 && (
                                <div className="mt-2 flex items-center gap-2">
                                  <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded text-xs font-medium bg-red-100 text-red-700">
                                    <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                                    </svg>
                                    Dringend ({urgency}/5)
                                  </span>
                                  {extracted?.dueDate && (
                                    <span className="text-xs text-red-600">
                                      Fällig: {new Date(extracted.dueDate as string).toLocaleDateString("de-DE")}
                                    </span>
                                  )}
                                </div>
                              )}
                            </div>
                          </div>
                        </div>

                        {/* Expanded Details */}
                        {isExpanded && (
                          <div className="px-6 pb-4 bg-gray-50/30">
                            <div className="pt-4 border-t border-gray-100">
                              {/* AI Extraction Results */}
                              {doc.ocrStatus === 'done' && extracted && (
                                <div className="space-y-3">
                                  <h4 className="text-xs font-semibold text-navy uppercase tracking-wide">
                                    KI-Extraktion
                                  </h4>
                                  
                                  <div className="grid grid-cols-2 md:grid-cols-3 gap-4 text-sm">
                                    {extracted.sender && (
                                      <div>
                                        <span className="text-text-light">Absender:</span>
                                        <p className="text-navy font-medium">{String(extracted.sender)}</p>
                                      </div>
                                    )}
                                    {extracted.recipient && (
                                      <div>
                                        <span className="text-text-light">Empfänger:</span>
                                        <p className="text-navy font-medium">{String(extracted.recipient)}</p>
                                      </div>
                                    )}
                                    {extracted.address && (
                                      <div>
                                        <span className="text-text-light">Adresse:</span>
                                        <p className="text-navy font-medium">{String(extracted.address)}</p>
                                      </div>
                                    )}
                                    {extracted.referenceNumber && (
                                      <div>
                                        <span className="text-text-light">Referenz:</span>
                                        <p className="text-navy font-medium">{String(extracted.referenceNumber)}</p>
                                      </div>
                                    )}
                                    {doc.confidence && (
                                      <div>
                                        <span className="text-text-light">KI-Vertrauen:</span>
                                        <p className="text-navy font-medium">{doc.confidence}%</p>
                                      </div>
                                    )}
                                  </div>

                                  {extracted.requiredAction && (
                                    <div className="p-3 bg-amber-50 rounded-lg">
                                      <span className="text-xs text-amber-700 font-medium">Erforderliche Aktion:</span>
                                      <p className="text-sm text-amber-800 mt-1">{String(extracted.requiredAction)}</p>
                                    </div>
                                  )}
                                </div>
                              )}

                              {doc.ocrStatus === 'failed' && doc.processingError && (
                                <div className="p-3 bg-red-50 rounded-lg">
                                  <span className="text-xs text-red-700 font-medium">Verarbeitungsfehler:</span>
                                  <p className="text-sm text-red-800 mt-1">{doc.processingError}</p>
                                </div>
                              )}

                              {/* Actions */}
                              <div className="flex items-center gap-3 mt-4 pt-4 border-t border-gray-100">
                                <a
                                  href={doc.url}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="flex items-center gap-1.5 px-3 py-1.5 bg-teal text-white rounded text-sm font-medium hover:bg-teal/90 transition-colors"
                                  onClick={(e) => e.stopPropagation()}
                                >
                                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                                  </svg>
                                  Herunterladen
                                </a>
                                {doc.linkedTicketId && (
                                  <a
                                    href={`/portal/tickets/${doc.linkedTicketId}`}
                                    className="flex items-center gap-1.5 px-3 py-1.5 bg-blue-50 text-blue-600 rounded text-sm font-medium hover:bg-blue-100 transition-colors"
                                    onClick={(e) => e.stopPropagation()}
                                  >
                                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 5v2m0 4v2m0 4v2M5 5a2 2 0 00-2 2v3a2 2 0 110 4v3a2 2 0 002 2h14a2 2 0 002-2v-3a2 2 0 110-4V7a2 2 0 00-2-2H5z" />
                                    </svg>
                                    Ticket öffnen
                                  </a>
                                )}
                                <button
                                  onClick={(e) => {
                                    e.stopPropagation();
                                    handleDelete(doc.id);
                                  }}
                                  disabled={deletingId === doc.id}
                                  className="flex items-center gap-1.5 px-3 py-1.5 text-red-600 hover:bg-red-50 rounded text-sm font-medium transition-colors ml-auto"
                                >
                                  {deletingId === doc.id ? (
                                    <svg className="w-4 h-4 animate-spin" fill="none" viewBox="0 0 24 24">
                                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                                    </svg>
                                  ) : (
                                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                                    </svg>
                                  )}
                                  Löschen
                                </button>
                              </div>
                            </div>
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>
      )}

      {/* Upload Modal */}
      <UploadModal
        isOpen={isUploadModalOpen}
        onClose={() => setIsUploadModalOpen(false)}
        onSuccess={handleUploadSuccess}
        properties={properties}
        landlordId={landlordId}
      />
    </div>
  );
}
