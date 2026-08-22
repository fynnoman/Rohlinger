"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Reveal } from "./Reveal";
import { SectionHeader } from "./SectionHeader";

const steps = [
  {
    n: "01",
    title: "Verstehen",
    body:
      "Ein persönliches Erstgespräch mit Susanne Rohlinger. Wir hören zu, klären Rahmen und Ziele.",
  },
  {
    n: "02",
    title: "Analysieren",
    body:
      "Wir prüfen Unterlagen, Zahlen und die aktuelle Struktur. Was liegt vor, was fehlt, wo ist Handlungsbedarf.",
  },
  {
    n: "03",
    title: "Beraten",
    body:
      "Sie erhalten klare Empfehlungen. Steuerlich, betriebswirtschaftlich, organisatorisch. In verständlichen Sätzen.",
  },
  {
    n: "04",
    title: "Begleiten",
    body:
      "Dauerhafte Mandatsbetreuung mit fester Ansprechpartnerin. Wir bleiben an Ihrer Seite, Jahr für Jahr.",
  },
];

export function Approach() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const line = useTransform(scrollYProgress, [0.15, 0.85], ["0%", "100%"]);

  return (
    <section className="relative bg-canvas-2 py-24 sm:py-40">
      <div className="mx-auto max-w-[1440px] px-6 sm:px-10">
        <div className="grid gap-12 lg:grid-cols-12 lg:items-end">
          <div className="lg:col-span-8">
            <SectionHeader
              index="APPROACH · 01/04"
              eyebrow="Wie wir arbeiten"
              title={
                <>
                  Vier Schritte, ein
                  <br />
                  konsequenter <span className="italic-display text-signal">Anspruch</span>.
                </>
              }
              size="lg"
            />
          </div>
          <div className="lg:col-span-4">
            <Reveal delay={0.2}>
              <p className="max-w-md text-[15px] leading-[1.7] text-ink-3">
                Unsere Arbeit folgt einer klaren Reihenfolge. Kein Schnellschuss, keine
                Standardprozesse. Sondern strukturierte Beratung, die sich Zeit nimmt,
                weil sie sich Zeit verdient.
              </p>
            </Reveal>
          </div>
        </div>

        <div ref={ref} className="relative mt-20">
          {/* Vertical progress line on left */}
          <div className="pointer-events-none absolute left-0 top-0 hidden h-full w-px bg-line md:block">
            <motion.div
              style={{ height: line }}
              className="w-px bg-signal origin-top"
            />
          </div>

          <ol className="grid gap-14 md:grid-cols-2 md:gap-x-16 md:gap-y-24 md:pl-16 lg:grid-cols-4 lg:gap-x-8">
            {steps.map((s, i) => (
              <Reveal key={s.n} delay={i * 0.08}>
                <li className="group relative">
                  <div className="flex items-center gap-3">
                    <span className="display text-6xl leading-none text-signal">{s.n}</span>
                    <span className="mt-3 h-px w-10 bg-ink" />
                  </div>
                  <h3 className="display mt-6 text-3xl leading-tight text-ink">{s.title}</h3>
                  <p className="mt-4 text-[14.5px] leading-[1.7] text-ink-3">{s.body}</p>
                </li>
              </Reveal>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
