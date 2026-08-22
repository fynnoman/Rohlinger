"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Reveal } from "./Reveal";
import { SectionHeader } from "./SectionHeader";
import { images } from "@/lib/site";

/* ————————————————————————————
   HERO PLATE — right-side card
   ———————————————————————————— */

export function HeroPlate() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.08]);
  const y = useTransform(scrollYProgress, [0, 1], [0, 60]);

  return (
    <div className="relative">
      <div ref={ref} className="relative aspect-[4/5] overflow-hidden rounded-[24px] bg-canvas-3">
        <motion.div style={{ scale, y }} className="absolute inset-0">
          <Image
            src={images.desk}
            alt="Modernes Kanzleiumfeld"
            fill
            priority
            sizes="(max-width: 1024px) 90vw, 600px"
            className="object-cover"
          />
        </motion.div>

        {/* Corner marks */}
        <div className="pointer-events-none absolute inset-4">
          <span className="absolute left-0 top-0 h-3 w-3 border-l border-t border-white/60" />
          <span className="absolute right-0 top-0 h-3 w-3 border-r border-t border-white/60" />
          <span className="absolute bottom-0 left-0 h-3 w-3 border-b border-l border-white/60" />
          <span className="absolute bottom-0 right-0 h-3 w-3 border-b border-r border-white/60" />
        </div>

        <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-ink/85 via-ink/40 to-transparent p-6 sm:p-8">
          <div className="flex items-center gap-2 text-[11px] uppercase tracking-[0.24em] text-white">
            <span className="red-dot" aria-hidden />
            Kanzlei · Wadgassen
          </div>
          <p className="display mt-4 text-2xl leading-tight text-white sm:text-3xl">
            {"„Steuerberatung wird auf Sie zugeschnitten. Nicht umgekehrt."}
          </p>
          <p className="mt-3 text-[12px] uppercase tracking-[0.2em] text-white/70">
            Susanne Rohlinger · Steuerberaterin
          </p>
        </div>
      </div>

      {/* Small credential row */}
      <div className="mt-4 grid grid-cols-3 gap-2">
        {[
          { k: "Gegründet", v: "Eigene Praxis" },
          { k: "Team", v: "5 Personen" },
          { k: "Software", v: "DATEV" },
        ].map((i) => (
          <div key={i.k} className="border border-line bg-canvas-2 px-4 py-3">
            <div className="eyebrow-plain text-[10px]">{i.k}</div>
            <div className="mt-1 text-[13.5px] font-medium text-ink">{i.v}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

/* ————————————————————————————
   PILLARS — 3 columns of value
   ———————————————————————————— */

const pillars = [
  {
    n: "01",
    title: "Präzision",
    body:
      "Wir arbeiten sorgfältig, weil Ihre Zahlen es verdienen. Belege werden geordnet, Positionen belegt, Fristen gehalten.",
  },
  {
    n: "02",
    title: "Persönlichkeit",
    body:
      "Jedes Erstgespräch führt Susanne Rohlinger. Danach begleitet Sie eine feste Ansprechpartnerin, die Ihre Situation kennt.",
  },
  {
    n: "03",
    title: "Perspektive",
    body:
      "Wir denken über den Jahresabschluss hinaus. Investitionen, Nachfolge, Struktur — wir ordnen mit Ihnen den Blick nach vorn.",
  },
];

export function Pillars() {
  return (
    <section className="mx-auto max-w-[1440px] px-6 py-24 sm:px-10 sm:py-32">
      <div className="grid gap-12 lg:grid-cols-12 lg:items-end">
        <div className="lg:col-span-8">
          <SectionHeader
            index="POSITIONIERUNG"
            eyebrow="Was uns leitet"
            title={
              <>
                Drei Prinzipien.
                <br />
                Ein <span className="italic-display text-signal">Anspruch</span>.
              </>
            }
            size="lg"
          />
        </div>
        <div className="lg:col-span-4">
          <Reveal delay={0.15}>
            <p className="max-w-md text-[15px] leading-[1.7] text-ink-3">
              Steuerberatung ist Handwerk und Vertrauensarbeit zugleich. Wir verbinden
              beides, ohne Kompromiss beim einen oder anderen.
            </p>
          </Reveal>
        </div>
      </div>

      <div className="mt-16 grid gap-px border border-line bg-line lg:grid-cols-3">
        {pillars.map((p, i) => (
          <Reveal key={p.n} delay={i * 0.08}>
            <div className="group h-full bg-canvas p-8 sm:p-10 transition-colors hover:bg-canvas-2">
              <div className="flex items-center justify-between">
                <span className="display text-5xl text-signal">{p.n}</span>
                <span aria-hidden className="text-signal opacity-0 transition-opacity group-hover:opacity-100">
                  →
                </span>
              </div>
              <h3 className="display mt-8 text-4xl text-ink">{p.title}</h3>
              <p className="mt-5 text-[15px] leading-[1.7] text-ink-3">{p.body}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

/* ————————————————————————————
   SERVICES — 3-column card grid
   ———————————————————————————— */

const services = [
  {
    slug: "unternehmen",
    n: "01",
    label: "Unternehmen",
    title: "Bilanz, Buchhaltung, Beratung",
    lead:
      "Finanz- und Lohnbuchführung, Jahresabschlüsse, betriebswirtschaftliche Beratung, Nachfolge, Bankgespräche.",
    img: images.boardroom,
  },
  {
    slug: "privatpersonen",
    n: "02",
    label: "Privatpersonen",
    title: "Einkommen, Erbe, Schenkung",
    lead:
      "Einkommensteuererklärungen, Erbschaft und Schenkung, lohnsteuerliche Beratung in Lebensphasen.",
    img: images.window,
  },
  {
    slug: "existenzgruender",
    n: "03",
    label: "Existenzgründer",
    title: "Businessplan bis Rechtsform",
    lead:
      "Existenzgründerberatung, Businessplan, Rechtsformwahl, Begleitung zu Bank und Finanzamt.",
    img: images.laptop,
  },
];

export function ServiceGrid() {
  return (
    <section className="mx-auto max-w-[1440px] px-6 py-24 sm:px-10 sm:py-32">
      <div className="flex flex-col items-start justify-between gap-6 lg:flex-row lg:items-end">
        <SectionHeader
          index="LEISTUNGEN"
          eyebrow="Drei Zielgruppen"
          title={
            <>
              Für Menschen und
              <br />
              Unternehmen, die es <span className="italic-display text-signal">ernst</span> meinen.
            </>
          }
        />
        <Reveal delay={0.15}>
          <Link href="/leistungen" className="btn-ghost">
            Alle Leistungen
            <span aria-hidden>→</span>
          </Link>
        </Reveal>
      </div>

      <div className="mt-16 grid gap-6 md:grid-cols-3">
        {services.map((s, i) => (
          <Reveal key={s.slug} delay={i * 0.08}>
            <Link href={`/leistungen#${s.slug}`} className="group block">
              <div className="relative aspect-[4/5] overflow-hidden rounded-[20px] bg-canvas-3">
                <motion.div
                  whileHover={{ scale: 1.06 }}
                  transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
                  className="relative h-full w-full"
                >
                  <Image
                    src={s.img}
                    alt={s.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover"
                  />
                </motion.div>

                {/* Overlay */}
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-ink/90 via-ink/40 to-transparent p-6 sm:p-8">
                  <div className="flex items-center justify-between">
                    <span className="text-[11px] uppercase tracking-[0.22em] text-white">
                      <span className="mr-2 inline-block h-1.5 w-1.5 bg-signal align-middle" />
                      {s.label}
                    </span>
                    <span className="index-label text-white/70">{s.n} / 03</span>
                  </div>
                  <h3 className="display mt-4 text-3xl leading-tight text-white sm:text-4xl">
                    {s.title}
                  </h3>
                  <p className="mt-3 max-w-[42ch] text-[14px] leading-[1.65] text-white/80">
                    {s.lead}
                  </p>
                  <span className="mt-6 inline-flex items-center gap-2 text-[12.5px] uppercase tracking-[0.22em] text-signal transition-transform group-hover:translate-x-1">
                    Zu den Leistungen
                    <span aria-hidden>→</span>
                  </span>
                </div>
              </div>
            </Link>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

/* ————————————————————————————
   STATEMENT / QUOTE
   ———————————————————————————— */

export function Statement() {
  return (
    <section className="relative overflow-hidden bg-canvas-2 py-32 sm:py-48">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-line" />
      <div className="mx-auto grid max-w-[1440px] gap-12 px-6 sm:px-10 lg:grid-cols-12">
        <div className="lg:col-span-2">
          <Reveal>
            <span className="display text-[220px] leading-none text-signal/15">{'"'}</span>
          </Reveal>
        </div>
        <div className="lg:col-span-10">
          <Reveal delay={0.1}>
            <p className="display text-4xl leading-[1.15] text-ink sm:text-6xl md:text-7xl">
              Genauso wie Sie keine Mode von der Stange kaufen, sollte auch Ihre
              steuerliche Beratung sein. <span className="italic-display text-signal">Individuell.</span> Mit nur einem Ziel: Sie
              muss zu Ihnen passen.
            </p>
          </Reveal>
          <Reveal delay={0.2}>
            <div className="mt-10 flex items-center gap-4">
              <div className="h-px w-20 bg-ink" />
              <div>
                <p className="text-[15px] font-semibold text-ink">Susanne Rohlinger</p>
                <p className="text-[12.5px] uppercase tracking-[0.2em] text-smoke">
                  Steuerberaterin · Inhaberin
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

/* ————————————————————————————
   PORTRAIT SECTION — Susanne
   ———————————————————————————— */

export function PortraitBlock() {
  return (
    <section className="mx-auto max-w-[1440px] px-6 py-24 sm:px-10 sm:py-32">
      <div className="grid gap-16 lg:grid-cols-12">
        <div className="lg:col-span-5">
          <Reveal>
            <div className="relative aspect-[4/5] overflow-hidden rounded-[20px]">
              <Image
                src={images.advisor}
                alt="Persönliche Beratung"
                fill
                sizes="(max-width: 1024px) 90vw, 500px"
                className="object-cover"
              />
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-ink/80 to-transparent p-6">
                <span className="text-[11px] uppercase tracking-[0.22em] text-white">
                  <span className="mr-2 inline-block h-1.5 w-1.5 bg-signal align-middle" />
                  Persönliches Wort
                </span>
              </div>
            </div>
          </Reveal>
        </div>

        <div className="lg:col-span-7 lg:pl-8">
          <SectionHeader
            index="ÜBER MICH"
            eyebrow="Susanne Rohlinger"
            title={
              <>
                Aus der Praxis für die Praxis. <br />
                Seit über <span className="italic-display text-signal">20 Jahren</span>.
              </>
            }
            size="lg"
          />
          <Reveal delay={0.15}>
            <div className="mt-10 space-y-5 text-[16.5px] leading-[1.75] text-ink-3">
              <p>
                Zwanzig Jahre als Angestellte in derselben Steuerberatungskanzlei. Dann
                der Schritt in die Selbstständigkeit. Von der Auszubildenden zur
                Unternehmerin, heute mit fünf Mitarbeitenden.
              </p>
              <p>
                Ich weiß, wie sich schlaflose Nächte anfühlen und wie viel Halt eine
                sorgfältige Beratung geben kann. Genau diesen Halt geben wir Ihnen.
                Jeden Tag, verlässlich, verständlich.
              </p>
            </div>
          </Reveal>
          <Reveal delay={0.25}>
            <div className="mt-10 flex flex-wrap gap-3">
              <Link href="/ueber-uns" className="btn-dark">
                Über die Kanzlei
                <span aria-hidden>→</span>
              </Link>
              <Link href="/beratung" className="btn-ghost">
                Erstgespräch
              </Link>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
