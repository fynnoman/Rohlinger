"use client";

import { motion } from "framer-motion";

export function Marquee({ items, speed = 45 }: { items: string[]; speed?: number }) {
  const doubled = [...items, ...items];
  return (
    <div className="relative overflow-hidden py-8">
      <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-32 bg-gradient-to-r from-canvas to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-32 bg-gradient-to-l from-canvas to-transparent" />
      <motion.div
        className="flex gap-16 whitespace-nowrap"
        animate={{ x: ["0%", "-50%"] }}
        transition={{ duration: speed, repeat: Infinity, ease: "linear" }}
      >
        {doubled.map((item, i) => (
          <span
            key={i}
            className="display flex items-center gap-16 text-[44px] leading-none text-ink-2"
          >
            {item}
            <span aria-hidden className="text-signal text-3xl">✱</span>
          </span>
        ))}
      </motion.div>
    </div>
  );
}
