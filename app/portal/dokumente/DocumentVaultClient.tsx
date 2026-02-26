"use client";

import { useState, useMemo } from "react";
import { UploadModal } from "./UploadModal";

type Document = {
  id: string;
  name: string;
  type: string;
  typeLabel: string;
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
};

type Property = {
  id: string;
  address: string;
  unitCount: number;
};

type DocumentVaultClientProps = {
  initialDocuments: Document[];
  properties: Property[];
  landlordId: string;
};

const TYPE_GROUPS = [
  { key: 'vertraege', label: 'Verträge', types: ['mietvertrag'] },
  { key: 'abrechnungen', label: 'Abrechnungen', types: ['abrechnung', 'energieausweis'] },
  { key: 'protokolle', label: 'Protokolle', types: ['protokoll'] },
  { key: 'sonstiges', label: 'Sonstiges', types: ['mahnung', 'sonstiges'] },
];

export function DocumentVaultClient({ 
  initialDocuments, 
  properties,
  landlordId 
}: DocumentVaultClientProps) {
  const [documents, setDocuments] = useState<Document[]>(initialDocuments);
  const [isUploadModalOpen, setIsUploadModalOpen] = useState(false);
  const [selectedProperty, setSelectedProperty] = useState<string>("all");
  const [selectedType, setSelectedType] = useState<string>("all");
  const [deletingId, setDeletingId] = useState<string | null>(null);

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
    const groups: Record<string, Document[]> = {
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

  const handleUploadSuccess = (newDoc: Document) => {
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

  const hasDocuments = documents.length > 0;

  return (
    <div className="max-w-5xl mx-auto px-8 py-8">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-navy">Dokumente</h1>
        <p className="text-text-light text-sm mt-0.5">
          Verwalten Sie alle Ihre Verträge, Abrechnungen und Protokolle an einem Ort.
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
            Laden Sie jetzt Ihr erstes Dokument hoch.
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
                <table className="w-full">
                  <thead>
                    <tr className="text-xs text-text-light uppercase tracking-wide bg-gray-50/50">
                      <th className="px-6 py-3 text-left font-medium">Name</th>
                      <th className="px-6 py-3 text-left font-medium">Typ</th>
                      <th className="px-6 py-3 text-left font-medium">Objekt</th>
                      <th className="px-6 py-3 text-left font-medium">Datum</th>
                      <th className="px-6 py-3 text-left font-medium">Größe</th>
                      <th className="px-6 py-3 text-left font-medium">Aktionen</th>
                    </tr>
                  </thead>
                  <tbody>
                    {docs.map((doc) => (
                      <tr
                        key={doc.id}
                        className="border-t border-gray-50 hover:bg-gray-50/50 transition-colors"
                      >
                        <td className="px-6 py-4">
                          <div className="flex items-center gap-3">
                            <div className="w-8 h-8 bg-teal/10 rounded-lg flex items-center justify-center flex-shrink-0">
                              <svg className="w-4 h-4 text-teal" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                              </svg>
                            </div>
                            <span className="text-sm text-navy font-medium truncate max-w-[200px]">
                              {doc.name}
                            </span>
                          </div>
                        </td>
                        <td className="px-6 py-4">
                          <span className="text-sm text-text-main">{doc.typeLabel}</span>
                        </td>
                        <td className="px-6 py-4">
                          <span className="text-sm text-text-light">
                            {doc.propertyAddress || "—"}
                          </span>
                        </td>
                        <td className="px-6 py-4">
                          <span className="text-sm text-text-light">
                            {formatDate(doc.createdAt)}
                          </span>
                        </td>
                        <td className="px-6 py-4">
                          <span className="text-sm text-text-light">{doc.sizeFormatted}</span>
                        </td>
                        <td className="px-6 py-4">
                          <div className="flex items-center gap-2">
                            <a
                              href={doc.url}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="p-1.5 text-teal hover:bg-teal/10 rounded-lg transition-colors"
                              title="Herunterladen"
                            >
                              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                              </svg>
                            </a>
                            <button
                              onClick={() => handleDelete(doc.id)}
                              disabled={deletingId === doc.id}
                              className="p-1.5 text-red-500 hover:bg-red-50 rounded-lg transition-colors disabled:opacity-50"
                              title="Löschen"
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
                            </button>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
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