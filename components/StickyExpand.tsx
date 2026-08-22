"use client";

/**
 * StickyExpand — image starts small, scales up to full-bleed background
 * for a sticky text section. Corporate variant.
 */

import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { useRef, type ReactNode } from "react";

export function StickyExpand({
  src,
  alt,
  children,
  eyebrow,
  index,
  title,
  tone = "dark",
}: {
  src: string;
  alt: string;
  children?: ReactNode;
  eyebrow?: string;
  index?: string;
  title?: ReactNode;
  tone?: "light" | "dark";
}) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.88, 1.02, 1.14]);
  const radius = useTransform(scrollYProgress, [0, 0.55, 1], [24, 8, 0]);
  const brightness = useTransform(scrollYProgress, [0, 0.5, 1], [0.95, 0.75, 0.55]);
  const textOpacity = useTransform(scrollYProgress, [0.35, 0.55, 0.85, 1], [0, 1, 1, 0.9]);
  const textY = useTransform(scrollYProgress, [0.35, 0.6], [40, 0]);

  return (
    <section ref={ref} className="relative h-[220vh]">
      <div className="sticky top-0 flex h-screen items-center justify-center overflow-hidden bg-canvas-2">
        <motion.div
          style={{ scale, borderRadius: radius }}
          className="relative h-[86vh] w-[94vw] max-w-[1440px] overflow-hidden"
        >
          <motion.div
            style={{ filter: `brightness(${brightness})` as unknown as string }}
            className="absolute inset-0"
          >
            <Image src={src} alt={alt} fill priority sizes="100vw" className="object-cover" />
          </motion.div>

          <div
            className="pointer-events-none absolute inset-0"
            style={{
              background:
                tone === "dark"
                  ? "linear-gradient(180deg, rgba(10,10,10,0.15) 0%, rgba(10,10,10,0.5) 55%, rgba(10,10,10,0.9) 100%)"
                  : "linear-gradient(180deg, rgba(10,10,10,0.05) 0%, rgba(10,10,10,0.35) 55%, rgba(10,10,10,0.75) 100%)",
            }}
          />

          {/* Corner marks */}
          <div className="pointer-events-none absolute inset-6 hidden md:block">
            <span className="absolute left-0 top-0 h-4 w-4 border-l border-t border-white/40" />
            <span className="absolute right-0 top-0 h-4 w-4 border-r border-t border-white/40" />
            <span className="absolute bottom-0 left-0 h-4 w-4 border-b border-l border-white/40" />
            <span className="absolute bottom-0 right-0 h-4 w-4 border-b border-r border-white/40" />
          </div>

          <motion.div
            style={{ opacity: textOpacity, y: textY }}
            className="absolute inset-x-0 bottom-0 px-8 pb-16 sm:px-16 sm:pb-24"
          >
            <div className="mx-auto max-w-[1000px] text-white">
              <div className="flex items-center gap-4">
                {index && <span className="index-label text-white/60">{index}</span>}
                {eyebrow && <span className="eyebrow text-white before:bg-signal">{eyebrow}</span>}
              </div>
              {title && (
                <h2 className="display mt-6 text-5xl leading-[1] tracking-[-0.03em] sm:text-7xl">
                  {title}
                </h2>
              )}
              {children && (
                <div className="mt-6 max-w-[64ch] text-[16.5px] leading-[1.7] text-white/85">
                  {children}
                </div>
              )}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
