"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { Reveal } from "./Reveal";

export function Counter({
  from = 0,
  to,
  suffix = "",
  duration = 1.4,
  className,
}: {
  from?: number;
  to: number;
  suffix?: string;
  duration?: number;
  className?: string;
}) {
  const [n, setN] = useState(from);
  const ref = useRef<HTMLSpanElement>(null);
  const started = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !started.current) {
            started.current = true;
            const start = performance.now();
            const tick = (t: number) => {
              const p = Math.min((t - start) / (duration * 1000), 1);
              const eased = 1 - Math.pow(1 - p, 3);
              setN(Math.round(from + (to - from) * eased));
              if (p < 1) requestAnimationFrame(tick);
            };
            requestAnimationFrame(tick);
          }
        });
      },
      { threshold: 0.4 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [from, to, duration]);

  return <span ref={ref} className={className}>{n}{suffix}</span>;
}

export function BigStat({
  image,
  stat,
  suffix = "",
  label,
  caption,
}: {
  image: string;
  stat: number;
  suffix?: string;
  label: string;
  caption: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], [-80, 80]);
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [1.08, 1, 1.08]);

  return (
    <section ref={ref} className="relative overflow-hidden bg-ink text-white">
      <motion.div style={{ y, scale }} className="absolute inset-0 -z-0 opacity-45">
        <Image src={image} alt="" fill sizes="100vw" className="object-cover" />
      </motion.div>
      <div
        className="pointer-events-none absolute inset-0 -z-0"
        style={{
          background:
            "radial-gradient(ellipse at 50% 60%, rgba(200,16,46,0.35), transparent 55%), linear-gradient(180deg, rgba(10,10,10,0.6), rgba(10,10,10,0.85))",
        }}
      />
      <div className="relative mx-auto max-w-[1440px] px-6 py-32 sm:px-10 sm:py-48">
        <div className="grid gap-16 lg:grid-cols-12 lg:items-end">
          <div className="lg:col-span-7">
            <Reveal>
              <p className="eyebrow eyebrow-red text-white">Kanzlei in Zahlen</p>
            </Reveal>
            <Reveal delay={0.1}>
              <div className="mt-8 flex items-baseline gap-4">
                <span className="display text-[clamp(6rem,18vw,15rem)] leading-[0.85] tracking-[-0.05em] text-white">
                  <Counter to={stat} suffix={suffix} />
                </span>
                <span className="hidden text-[15px] uppercase tracking-[0.22em] text-mist sm:inline-block">
                  {label}
                </span>
              </div>
              <span className="mt-2 block text-[13px] uppercase tracking-[0.22em] text-mist sm:hidden">
                {label}
              </span>
            </Reveal>
          </div>
          <div className="lg:col-span-5">
            <Reveal delay={0.15}>
              <p className="text-[17px] leading-[1.7] text-white/90">{caption}</p>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
