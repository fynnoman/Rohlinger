"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

const topics = [
  "Erstgespräch",
  "Steuererklärung",
  "Buchhaltung",
  "Existenzgründung",
  "Nachfolge",
  "Sonstiges",
] as const;

export function ContactForm() {
  const [status, setStatus] = useState<"idle" | "sending" | "sent">("idle");
  const [topic, setTopic] = useState<string>(topics[0]);
  const [consent, setConsent] = useState(false);

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        if (!consent) return;
        setStatus("sending");
        setTimeout(() => setStatus("sent"), 1200);
      }}
      className="grid gap-6"
    >
      <div>
        <label className="eyebrow-plain">Thema</label>
        <div className="mt-4 flex flex-wrap gap-2">
          {topics.map((t) => {
            const active = topic === t;
            return (
              <button
                key={t}
                type="button"
                onClick={() => setTopic(t)}
                className={`rounded-full border px-4 py-2 text-[13px] font-medium transition-colors ${
                  active
                    ? "border-ink bg-ink text-white"
                    : "border-line bg-canvas text-ink-3 hover:border-ink hover:bg-canvas-2"
                }`}
              >
                {t}
              </button>
            );
          })}
        </div>
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <FieldInput label="Ihr Name" name="name" required />
        <FieldInput label="Unternehmen (optional)" name="company" />
        <FieldInput label="E-Mail" name="email" type="email" required />
        <FieldInput label="Telefon" name="phone" type="tel" />
      </div>

      <FieldArea label="Ihre Nachricht" name="message" required />

      <label className="flex items-start gap-3 text-[13px] text-ink-3">
        <input
          type="checkbox"
          checked={consent}
          onChange={(e) => setConsent(e.target.checked)}
          className="mt-1 h-4 w-4 accent-signal"
          required
        />
        <span>
          Ich habe die <a href="/datenschutz" className="link-draw text-ink">Datenschutzerklärung</a> gelesen und willige in die
          Verarbeitung meiner Angaben zur Bearbeitung der Anfrage ein.
        </span>
      </label>

      <div className="flex items-center gap-4">
        <button
          type="submit"
          disabled={!consent || status === "sending"}
          className="btn-primary disabled:cursor-not-allowed disabled:opacity-40"
        >
          {status === "sending" ? "Wird gesendet …" : "Anfrage senden"}
          <span aria-hidden>→</span>
        </button>
        <AnimatePresence>
          {status === "sent" && (
            <motion.span
              initial={{ opacity: 0, y: 4 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              className="flex items-center gap-2 text-[13px] text-signal"
            >
              <span className="red-dot" /> Danke, wir melden uns zeitnah zurück.
            </motion.span>
          )}
        </AnimatePresence>
      </div>
    </form>
  );
}

function FieldInput({
  label,
  name,
  type = "text",
  required = false,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
}) {
  return (
    <label className="block">
      <span className="eyebrow-plain">{label}</span>
      <input
        type={type}
        name={name}
        required={required}
        className="mt-3 block w-full border-0 border-b border-line bg-transparent px-0 py-3 text-[16px] text-ink outline-none transition-colors focus:border-signal"
      />
    </label>
  );
}

function FieldArea({ label, name, required }: { label: string; name: string; required?: boolean }) {
  return (
    <label className="block">
      <span className="eyebrow-plain">{label}</span>
      <textarea
        name={name}
        rows={5}
        required={required}
        className="mt-3 block w-full resize-none border-0 border-b border-line bg-transparent px-0 py-3 text-[16px] text-ink outline-none transition-colors focus:border-signal"
      />
    </label>
  );
}
