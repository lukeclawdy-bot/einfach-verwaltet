"use client";

import { useState, useRef, useCallback } from "react";

type Property = {
  id: string;
  address: string;
  unitCount: number;
};

type UploadModalProps = {
  isOpen: boolean;
  onClose: () => void;
  onSuccess: (doc: any) => void;
  properties: Property[];
  landlordId: string;
};

const DOCUMENT_TYPES = [
  { value: "mietvertrag", label: "Mietvertrag" },
  { value: "energieausweis", label: "Energieausweis" },
  { value: "protokoll", label: "Protokoll" },
  { value: "abrechnung", label: "Betriebskostenabrechnung" },
  { value: "mahnung", label: "Mahnung" },
  { value: "sonstiges", label: "Sonstiges" },
];

const MAX_FILE_SIZE = 10 * 1024 * 1024; // 10MB
const ALLOWED_TYPES = [
  "application/pdf",
  "image/jpeg",
  "image/png",
  "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
];

export function UploadModal({
  isOpen,
  onClose,
  onSuccess,
  properties,
  landlordId,
}: UploadModalProps) {
  const [file, setFile] = useState<File | null>(null);
  const [documentName, setDocumentName] = useState("");
  const [documentType, setDocumentType] = useState("");
  const [selectedPropertyId, setSelectedPropertyId] = useState("");
  const [isUploading, setIsUploading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [dragActive, setDragActive] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const resetForm = () => {
    setFile(null);
    setDocumentName("");
    setDocumentType("");
    setSelectedPropertyId("");
    setError(null);
    if (fileInputRef.current) {
      fileInputRef.current.value = "";
    }
  };

  const handleClose = () => {
    resetForm();
    onClose();
  };

  const validateFile = (file: File): string | null => {
    if (file.size > MAX_FILE_SIZE) {
      return "Datei zu groß. Maximale Größe: 10MB";
    }
    if (!ALLOWED_TYPES.includes(file.type)) {
      return "Ungültiger Dateityp. Erlaubt: PDF, JPG, PNG, DOCX";
    }
    return null;
  };

  const handleFileSelect = (selectedFile: File) => {
    const validationError = validateFile(selectedFile);
    if (validationError) {
      setError(validationError);
      return;
    }
    setFile(selectedFile);
    setDocumentName(selectedFile.name.replace(/\.[^/.]+$/, "")); // Remove extension
    setError(null);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      handleFileSelect(e.target.files[0]);
    }
  };

  const handleDrag = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === "dragenter" || e.type === "dragover") {
      setDragActive(true);
    } else if (e.type === "dragleave") {
      setDragActive(false);
    }
  }, []);

  const handleDrop = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      handleFileSelect(e.dataTransfer.files[0]);
    }
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!file || !documentType) {
      setError("Bitte wählen Sie eine Datei und einen Dokumententyp aus");
      return;
    }

    setIsUploading(true);
    setError(null);

    try {
      const formData = new FormData();
      formData.append("file", file);
      formData.append("landlordId", landlordId);
      formData.append("type", documentType);
      formData.append("name", documentName || file.name);
      if (selectedPropertyId) {
        formData.append("propertyId", selectedPropertyId);
      }

      const res = await fetch("/portal/api/documents/upload", {
        method: "POST",
        body: formData,
      });

      if (!res.ok) {
        const data = await res.json();
        throw new Error(data.error || "Upload fehlgeschlagen");
      }

      const result = await res.json();
      onSuccess({
        ...result,
        typeLabel: DOCUMENT_TYPES.find((t) => t.value === documentType)?.label || documentType,
        propertyAddress: selectedPropertyId
          ? properties.find((p) => p.id === selectedPropertyId)?.address
          : null,
        sizeFormatted: formatFileSize(file.size),
        createdAt: new Date().toISOString(),
      });
      resetForm();
    } catch (err) {
      setError(err instanceof Error ? err.message : "Upload fehlgeschlagen");
    } finally {
      setIsUploading(false);
    }
  };

  const formatFileSize = (bytes: number): string => {
    if (bytes < 1024) return `${bytes} B`;
    if (bytes < 1024 * 1024) return `${(bytes / 1024).toFixed(1)} KB`;
    return `${(bytes / (1024 * 1024)).toFixed(1)} MB`;
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/50 backdrop-blur-sm"
        onClick={handleClose}
      />

      {/* Modal */}
      <div className="relative bg-white rounded-2xl shadow-xl w-full max-w-lg max-h-[90vh] overflow-hidden">
        {/* Header */}
        <div className="px-6 py-4 border-b border-gray-100 flex items-center justify-between">
          <h2 className="text-lg font-semibold text-navy">Dokument hochladen</h2>
          <button
            onClick={handleClose}
            className="p-2 text-gray-400 hover:text-gray-600 hover:bg-gray-100 rounded-lg transition-colors"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="p-6 overflow-y-auto max-h-[calc(90vh-120px)]">
          {/* File Upload Area */}
          <div className="mb-6">
            <label className="block text-sm font-medium text-navy mb-2">
              Datei <span className="text-red-500">*</span>
            </label>
            {!file ? (
              <div
                onDragEnter={handleDrag}
                onDragLeave={handleDrag}
                onDragOver={handleDrag}
                onDrop={handleDrop}
                onClick={() => fileInputRef.current?.click()}
                className={`
                  border-2 border-dashed rounded-xl p-8 text-center cursor-pointer
                  transition-colors duration-200
                  ${dragActive 
                    ? "border-teal bg-teal/5" 
                    : "border-gray-200 hover:border-gray-300 hover:bg-gray-50"
                  }
                `}
              >
                <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-3">
                  <svg className="w-6 h-6 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
                  </svg>
                </div>
                <p className="text-sm text-navy font-medium mb-1">
                  Datei hierher ziehen oder klicken
                </p>
                <p className="text-xs text-text-light">
                  PDF, JPG, PNG, DOCX (max. 10MB)
                </p>
                <input
                  ref={fileInputRef}
                  type="file"
                  accept=".pdf,.jpg,.jpeg,.png,.docx"
                  onChange={handleInputChange}
                  className="hidden"
                />
              </div>
            ) : (
              <div className="flex items-center gap-3 p-4 bg-gray-50 rounded-xl">
                <div className="w-10 h-10 bg-teal/10 rounded-lg flex items-center justify-center">
                  <svg className="w-5 h-5 text-teal" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-medium text-navy truncate">{file.name}</p>
                  <p className="text-xs text-text-light">{formatFileSize(file.size)}</p>
                </div>
                <button
                  type="button"
                  onClick={() => {
                    setFile(null);
                    setDocumentName("");
                  }}
                  className="p-1.5 text-gray-400 hover:text-red-500 hover:bg-red-50 rounded-lg transition-colors"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
            )}
          </div>

          {/* Document Name */}
          <div className="mb-4">
            <label htmlFor="name" className="block text-sm font-medium text-navy mb-1.5">
              Name
            </label>
            <input
              type="text"
              id="name"
              value={documentName}
              onChange={(e) => setDocumentName(e.target.value)}
              placeholder="Dokumentname"
              className="w-full px-3 py-2 bg-white border border-gray-200 rounded-lg text-sm text-navy placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-teal/20 focus:border-teal"
            />
          </div>

          {/* Document Type */}
          <div className="mb-4">
            <label htmlFor="type" className="block text-sm font-medium text-navy mb-1.5">
              Typ <span className="text-red-500">*</span>
            </label>
            <select
              id="type"
              value={documentType}
              onChange={(e) => setDocumentType(e.target.value)}
              required
              className="w-full px-3 py-2 bg-white border border-gray-200 rounded-lg text-sm text-navy focus:outline-none focus:ring-2 focus:ring-teal/20 focus:border-teal"
            >
              <option value="">Typ auswählen</option>
              {DOCUMENT_TYPES.map((type) => (
                <option key={type.value} value={type.value}>
                  {type.label}
                </option>
              ))}
            </select>
          </div>

          {/* Property */}
          <div className="mb-4">
            <label htmlFor="property" className="block text-sm font-medium text-navy mb-1.5">
              Objekt
            </label>
            <select
              id="property"
              value={selectedPropertyId}
              onChange={(e) => setSelectedPropertyId(e.target.value)}
              className="w-full px-3 py-2 bg-white border border-gray-200 rounded-lg text-sm text-navy focus:outline-none focus:ring-2 focus:ring-teal/20 focus:border-teal"
            >
              <option value="">Objekt auswählen (optional)</option>
              {properties.map((prop) => (
                <option key={prop.id} value={prop.id}>
                  {prop.address}
                </option>
              ))}
            </select>
          </div>

          {/* Error Message */}
          {error && (
            <div className="mb-4 p-3 bg-red-50 border border-red-100 rounded-lg">
              <p className="text-sm text-red-600">{error}</p>
            </div>
          )}

          {/* Submit Button */}
          <div className="flex gap-3 pt-2">
            <button
              type="button"
              onClick={handleClose}
              className="flex-1 px-4 py-2.5 border border-gray-200 text-navy rounded-lg text-sm font-medium hover:bg-gray-50 transition-colors"
            >
              Abbrechen
            </button>
            <button
              type="submit"
              disabled={isUploading || !file || !documentType}
              className="flex-1 px-4 py-2.5 bg-navy text-white rounded-lg text-sm font-medium hover:bg-navy/90 transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
            >
              {isUploading ? (
                <>
                  <svg className="w-4 h-4 animate-spin" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                  </svg>
                  Wird hochgeladen...
                </>
              ) : (
                "Hochladen"
              )}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}