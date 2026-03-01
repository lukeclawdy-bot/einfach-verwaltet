"use client";

import { useState, useRef, useEffect } from "react";

interface Message {
  role: "user" | "assistant";
  text: string;
}

const SYSTEM_KNOWLEDGE = `Du bist der digitale Assistent von einfach verwaltet., einer modernen Hausverwaltung aus Hamburg. 
Du beantwortest Fragen zu Preisen, Leistungen und Ablauf.

PREISE (immer genau):
- Mietverwaltung: ab 27 €/Einheit/Monat
- WEG-Verwaltung: ab 29 €/Einheit/Monat  
- Einmalige Einrichtung: 149 €
- Beispiel: 10 Einheiten Mietverwaltung = 270 €/Monat

LEISTUNGEN:
- 24/7 Erreichbarkeit für Mieter
- Reaktionszeit unter 15 Minuten
- Echtzeit-Dashboard für Eigentümer
- Jährliche Nebenkostenabrechnung (§556 BGB)
- Automatisches Mahnwesen (§286 BGB)
- DSGVO-konformes Dokumentenportal
- Wartung & Handwerker-Koordination
- WEG: Eigentümerversammlungen, Beschlussprotokoll, Jahresabrechnung

STANDORTE: Hamburg und Berlin (weitere Städte auf Anfrage)

KONTAKT: kontakt@einfach-verwaltet.de | lukas@einfach-verwaltet.de
ADRESSE: Singapurstr. 19, 20457 Hamburg

WICHTIG: 
- Erwähne NIEMALS KI, Bots, Automatisierung oder Technologie
- Bleib professionell, freundlich, konkret
- Bei Vertragsdetails und rechtlichen Fragen: empfehle ein persönliches Gespräch
- Max 3 Sätze pro Antwort — kurz und klar
- Auf Deutsch antworten`;

export function ChatWidget() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      role: "assistant",
      text: "Hallo! Ich helfe Ihnen gerne weiter. Was möchten Sie wissen — Preise, Leistungen oder wie der Wechsel zu uns funktioniert?",
    },
  ]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [showCallback, setShowCallback] = useState(false);
  const [callbackData, setCallbackData] = useState({ name: "", telefon: "", uhrzeit: "anytime" });
  const [callbackSent, setCallbackSent] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (open) {
      setTimeout(() => inputRef.current?.focus(), 100);
    }
  }, [open]);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, loading]);

  async function send() {
    const text = input.trim();
    if (!text || loading) return;
    setInput("");
    setMessages((prev) => [...prev, { role: "user", text }]);
    setLoading(true);

    try {
      const history = messages.map((m) => ({
        role: m.role,
        content: m.text,
      }));

      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: text, history, system: SYSTEM_KNOWLEDGE }),
      });

      const data = await res.json();
      const reply = data.reply || "Entschuldigung, ich konnte keine Antwort generieren. Bitte schreiben Sie uns an kontakt@einfach-verwaltet.de.";
      setMessages((prev) => [...prev, { role: "assistant", text: reply }]);
    } catch {
      setMessages((prev) => [
        ...prev,
        { role: "assistant", text: "Verbindungsfehler. Bitte versuchen Sie es erneut oder schreiben Sie uns direkt an kontakt@einfach-verwaltet.de." },
      ]);
    } finally {
      setLoading(false);
    }
  }

  async function submitCallback() {
    if (!callbackData.name || !callbackData.telefon) return;
    try {
      await fetch("/api/rueckruf", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(callbackData),
      });
      setCallbackSent(true);
    } catch {
      setCallbackSent(true); // show success anyway
    }
  }

  return (
    <>
      {/* Floating button */}
      <button
        onClick={() => setOpen((v) => !v)}
        aria-label="Chat öffnen"
        className="fixed bottom-6 right-6 z-50 w-14 h-14 bg-navy rounded-full shadow-lg flex items-center justify-center hover:bg-navy/90 transition-all hover:scale-105"
      >
        {open ? (
          <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        ) : (
          <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
          </svg>
        )}
      </button>

      {/* Chat window */}
      {open && (
        <div className="fixed bottom-24 right-6 z-50 w-[360px] max-w-[calc(100vw-24px)] bg-white rounded-2xl shadow-2xl border border-gray-100 flex flex-col overflow-hidden"
          style={{ height: "480px" }}>

          {/* Header */}
          <div className="bg-navy px-4 py-3 flex items-center justify-between flex-shrink-0">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 bg-teal rounded-full flex items-center justify-center">
                <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                </svg>
              </div>
              <div>
                <div className="text-white text-sm font-semibold">einfach verwaltet.</div>
                <div className="flex items-center gap-1.5">
                  <div className="w-1.5 h-1.5 bg-green-400 rounded-full"></div>
                  <span className="text-white/60 text-xs">Jetzt erreichbar</span>
                </div>
              </div>
            </div>
            <button
              onClick={() => setShowCallback((v) => !v)}
              className="text-white/60 hover:text-white text-xs flex items-center gap-1 transition-colors"
              title="Rückruf anfordern"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              Rückruf
            </button>
          </div>

          {/* Callback form overlay */}
          {showCallback && (
            <div className="absolute inset-0 bg-white z-10 flex flex-col" style={{ top: "56px" }}>
              <div className="p-4 flex-1">
                {callbackSent ? (
                  <div className="text-center py-8">
                    <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-3">
                      <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <p className="text-navy font-semibold">Rückruf angefordert!</p>
                    <p className="text-text-light text-sm mt-1">Wir rufen Sie zurück.</p>
                    <button onClick={() => { setShowCallback(false); setCallbackSent(false); }} className="mt-4 text-teal text-sm font-medium">
                      Zurück zum Chat
                    </button>
                  </div>
                ) : (
                  <>
                    <h3 className="font-semibold text-navy mb-1">Rückruf anfordern</h3>
                    <p className="text-text-light text-sm mb-4">Wir rufen Sie innerhalb von 2 Stunden zurück.</p>
                    <div className="space-y-3">
                      <input
                        type="text"
                        placeholder="Ihr Name *"
                        value={callbackData.name}
                        onChange={(e) => setCallbackData((d) => ({ ...d, name: e.target.value }))}
                        className="w-full px-3 py-2.5 border border-gray-200 rounded-lg text-sm focus:outline-none focus:border-teal"
                      />
                      <input
                        type="tel"
                        placeholder="Telefonnummer *"
                        value={callbackData.telefon}
                        onChange={(e) => setCallbackData((d) => ({ ...d, telefon: e.target.value }))}
                        className="w-full px-3 py-2.5 border border-gray-200 rounded-lg text-sm focus:outline-none focus:border-teal"
                      />
                      <select
                        value={callbackData.uhrzeit}
                        onChange={(e) => setCallbackData((d) => ({ ...d, uhrzeit: e.target.value }))}
                        className="w-full px-3 py-2.5 border border-gray-200 rounded-lg text-sm bg-white focus:outline-none focus:border-teal"
                      >
                        <option value="anytime">Jederzeit</option>
                        <option value="morning">09:00–12:00 Uhr</option>
                        <option value="afternoon">12:00–17:00 Uhr</option>
                        <option value="evening">17:00–19:00 Uhr</option>
                      </select>
                      <button
                        onClick={submitCallback}
                        disabled={!callbackData.name || !callbackData.telefon}
                        className="w-full bg-navy text-white py-2.5 rounded-lg text-sm font-semibold disabled:opacity-40 hover:bg-navy/90 transition-colors"
                      >
                        Rückruf anfordern
                      </button>
                    </div>
                    <button onClick={() => setShowCallback(false)} className="mt-3 text-text-light text-xs w-full text-center">
                      Abbrechen
                    </button>
                  </>
                )}
              </div>
            </div>
          )}

          {/* Messages */}
          <div className="flex-1 overflow-y-auto px-4 py-4 space-y-3">
            {messages.map((m, i) => (
              <div key={i} className={`flex ${m.role === "user" ? "justify-end" : "justify-start"}`}>
                <div
                  className={`max-w-[80%] px-3.5 py-2.5 rounded-2xl text-sm leading-relaxed ${
                    m.role === "user"
                      ? "bg-navy text-white rounded-br-sm"
                      : "bg-gray-100 text-navy rounded-bl-sm"
                  }`}
                >
                  {m.text}
                </div>
              </div>
            ))}
            {loading && (
              <div className="flex justify-start">
                <div className="bg-gray-100 px-3.5 py-3 rounded-2xl rounded-bl-sm">
                  <div className="flex gap-1">
                    <span className="w-1.5 h-1.5 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: "0ms" }} />
                    <span className="w-1.5 h-1.5 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: "150ms" }} />
                    <span className="w-1.5 h-1.5 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: "300ms" }} />
                  </div>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Quick replies */}
          {messages.length === 1 && (
            <div className="px-4 pb-2 flex gap-2 flex-wrap flex-shrink-0">
              {["Was kostet das?", "Wie läuft der Wechsel?", "WEG-Verwaltung?"].map((q) => (
                <button
                  key={q}
                  onClick={() => { setInput(q); setTimeout(() => send(), 50); }}
                  className="text-xs bg-gray-50 border border-gray-200 text-navy px-3 py-1.5 rounded-full hover:bg-gray-100 transition-colors"
                >
                  {q}
                </button>
              ))}
            </div>
          )}

          {/* Input */}
          <div className="border-t border-gray-100 px-3 py-3 flex gap-2 flex-shrink-0">
            <input
              ref={inputRef}
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && send()}
              placeholder="Ihre Frage …"
              className="flex-1 px-3 py-2 text-sm border border-gray-200 rounded-xl focus:outline-none focus:border-teal bg-gray-50"
            />
            <button
              onClick={send}
              disabled={!input.trim() || loading}
              className="w-9 h-9 bg-teal rounded-xl flex items-center justify-center disabled:opacity-40 hover:bg-teal/90 transition-colors flex-shrink-0"
            >
              <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
              </svg>
            </button>
          </div>
        </div>
      )}
    </>
  );
}
