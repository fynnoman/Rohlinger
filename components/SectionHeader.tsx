"use client";

import { motion, useInView } from "framer-motion";
import { useRef, type ReactNode } from "react";

export function SectionHeader({
  index,
  eyebrow,
  title,
  description,
  align = "left",
  size = "md",
}: {
  index?: string;
  eyebrow?: string;
  title: ReactNode;
  description?: ReactNode;
  align?: "left" | "center";
  size?: "md" | "lg";
}) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  const alignCls = align === "center" ? "text-center items-center" : "";

  return (
    <div
      ref={ref}
      className={`flex flex-col gap-6 ${alignCls}`}
    >
      {(index || eyebrow) && (
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className={`flex items-center gap-4 ${align === "center" ? "justify-center" : ""}`}
        >
          {index && <span className="index-label">{index}</span>}
          {eyebrow && <span className="eyebrow">{eyebrow}</span>}
        </motion.div>
      )}

      <motion.h2
        initial={{ opacity: 0, y: 16 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1], delay: 0.05 }}
        className={`display text-ink ${size === "lg" ? "h-hero-md" : "h-section"} ${align === "center" ? "max-w-4xl" : "max-w-4xl"}`}
      >
        {title}
      </motion.h2>

      {description && (
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1], delay: 0.15 }}
          className={`max-w-xl text-[16.5px] leading-[1.7] text-ink-3 ${align === "center" ? "mx-auto" : ""}`}
        >
          {description}
        </motion.div>
      )}
    </div>
  );
}
