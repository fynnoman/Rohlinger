"use client";

import { motion } from "framer-motion";

const items = [
  "Steuerberaterkammer Saarland",
  "Deutscher Steuerberaterverband",
  "DATEV",
  "Saarland Offensive für Gründer",
  "BMWi · FRAUEN unternehmen",
  "IHK Saarland",
  "Handwerkskammer Saarland",
];

export function TrustBar() {
  const doubled = [...items, ...items];
  return (
    <section className="border-y border-line bg-canvas py-8">
      <div className="mx-auto flex max-w-[1440px] items-center gap-6 px-6 sm:px-10">
        <span className="hidden shrink-0 items-center gap-3 text-[11px] uppercase tracking-[0.24em] text-smoke sm:flex">
          <span className="red-dot" aria-hidden />
          Vernetzt in
        </span>
        <div className="relative flex-1 overflow-hidden">
          <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-20 bg-gradient-to-r from-canvas to-transparent" />
          <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-20 bg-gradient-to-l from-canvas to-transparent" />
          <motion.div
            className="flex gap-12 whitespace-nowrap"
            animate={{ x: ["0%", "-50%"] }}
            transition={{ duration: 55, repeat: Infinity, ease: "linear" }}
          >
            {doubled.map((item, i) => (
              <span
                key={i}
                className="flex shrink-0 items-center gap-12 text-[13px] uppercase tracking-[0.22em] text-ink-3"
              >
                {item}
                <span aria-hidden className="text-signal">◆</span>
              </span>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
