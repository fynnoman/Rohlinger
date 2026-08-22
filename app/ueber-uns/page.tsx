import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Reveal } from "@/components/Reveal";
import { StickyExpand } from "@/components/StickyExpand";
import { ParallaxImage } from "@/components/ParallaxImage";
import { SectionHeader } from "@/components/SectionHeader";
import { Counter } from "@/components/BigStat";
import { images, site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Kanzlei",
  description:
    "Susanne Rohlinger — Steuerberaterin in Wadgassen. Persönliche Beratung mit einem Team von fünf.",
};

const values = [
  {
    n: "01",
    title: "Sorgfalt",
    body:
      "Sauber gebuchte Belege, korrekt gestellte Fragen, präzise Ergebnisse. Handwerk vor Effekt.",
  },
  {
    n: "02",
    title: "Verlässlichkeit",
    body:
      "Nahezu alle Mandate begleiten wir langfristig. Diese Treue ist unser Ansporn.",
  },
  {
    n: "03",
    title: "Nähe",
    body:
      "Feste Ansprechpartner, kurze Wege, direkte Kommunikation. Kein Callcenter, kein Ticketsystem.",
  },
];

const numbers = [
  { n: 20, s: "+", label: "Jahre Praxis" },
  { n: 5, s: "", label: "Mitarbeitende" },
  { n: 100, s: "%", label: "DATEV, aktuell" },
  { n: 4, s: "", label: "Kernbereiche" },
];

export default function UeberUns() {
  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden pt-32 sm:pt-40">
        <div className="mx-auto max-w-[1440px] px-6 sm:px-10">
          <Reveal>
            <div className="flex flex-wrap items-center justify-between gap-3 border-b border-line pb-4 text-[11px] uppercase tracking-[0.24em] text-smoke">
              <div className="flex items-center gap-3">
                <span className="red-dot" aria-hidden />
                Kanzlei · Wadgassen
              </div>
              <span className="index-label">02 / 06</span>
            </div>
          </Reveal>

          <div className="mt-14 grid gap-12 lg:grid-cols-12 lg:items-end">
            <div className="lg:col-span-8">
              <Reveal>
                <p className="eyebrow">Über die Kanzlei</p>
              </Reveal>
              <Reveal delay={0.1}>
                <h1 className="display mt-8 h-hero text-ink">
                  Kanzlei mit
                  <br />
                  <span className="italic-display text-signal">Haltung</span>.
                  <br />
                  Team mit Handschlag.
                </h1>
              </Reveal>
              <Reveal delay={0.22}>
                <p className="mt-10 max-w-xl text-[17.5px] leading-[1.6] text-ink-3">
                  Vor der Selbstständigkeit standen zwanzig Jahre Praxis in derselben
                  Steuerberatungskanzlei. Heute führe ich das Haus Rohlinger in Wadgassen
                  mit fünf Mitarbeitenden und dem gleichen Anspruch wie am ersten Tag.
                </p>
              </Reveal>
            </div>

            <div className="lg:col-span-4">
              <Reveal delay={0.35}>
                <div className="relative aspect-[4/5] overflow-hidden rounded-[24px] bg-canvas-3">
                  <Image
                    src={images.advisor}
                    alt="Susanne Rohlinger"
                    fill
                    priority
                    sizes="(max-width: 1024px) 90vw, 500px"
                    className="object-cover"
                  />
                  <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-ink/85 via-ink/30 to-transparent p-6">
                    <span className="text-[11px] uppercase tracking-[0.24em] text-white">
                      <span className="mr-2 inline-block h-1.5 w-1.5 bg-signal align-middle" />
                      Inhaberin
                    </span>
                    <p className="display mt-3 text-2xl text-white">Susanne Rohlinger</p>
                    <p className="mt-1 text-[12px] uppercase tracking-[0.2em] text-white/70">
                      Steuerberaterin
                    </p>
                  </div>
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* NUMBERS STRIP */}
      <section className="mx-auto mt-24 max-w-[1440px] px-6 sm:mt-32 sm:px-10">
        <div className="grid gap-px border border-line bg-line md:grid-cols-4">
          {numbers.map((s, i) => (
            <Reveal key={s.label} delay={i * 0.06}>
              <div className="flex h-full flex-col justify-between bg-canvas p-8 sm:p-10">
                <span className="index-label">{String(i + 1).padStart(2, "0")} / 04</span>
                <div className="mt-8">
                  <span className="display text-6xl leading-none text-ink sm:text-7xl">
                    <Counter to={s.n} suffix={s.s} />
                  </span>
                  <span className="mt-4 block text-[12.5px] uppercase tracking-[0.22em] text-smoke">
                    {s.label}
                  </span>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* VALUES */}
      <section className="mx-auto mt-24 max-w-[1440px] px-6 sm:mt-32 sm:px-10">
        <SectionHeader
          index="WERTE"
          eyebrow="Was uns leitet"
          title={
            <>
              Drei Grundsätze, an denen wir uns <span className="italic-display text-signal">messen</span> lassen.
            </>
          }
          size="lg"
        />

        <div className="mt-16 grid gap-px border border-line bg-line md:grid-cols-3">
          {values.map((v, i) => (
            <Reveal key={v.n} delay={i * 0.08}>
              <div className="h-full bg-canvas p-8 sm:p-10">
                <div className="flex items-center justify-between">
                  <span className="display text-5xl text-signal">{v.n}</span>
                  <span aria-hidden className="text-signal">✱</span>
                </div>
                <h3 className="display mt-8 text-4xl text-ink">{v.title}</h3>
                <p className="mt-5 text-[15px] leading-[1.7] text-ink-3">{v.body}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* STICKY EXPAND */}
      <div className="mt-24 sm:mt-32">
        <StickyExpand
          src={images.cityGlass}
          alt="Modernes Bürogebäude"
          eyebrow="Standort"
          index="KANZLEI · WADGASSEN"
          title={
            <>
              Verwurzelt im Saarland.
              <br />
              Wirksam <span className="italic-display text-signal">darüber hinaus</span>.
            </>
          }
        >
          Unsere Mandanten kennen den Ort, unser Anspruch kennt keine Grenze. Wir
          arbeiten dort, wo unsere Mandanten Zuhause sind und begleiten sie in jede
          Richtung, in die sie sich entwickeln.
        </StickyExpand>
      </div>

      {/* PERSONAL STORY */}
      <section className="mx-auto max-w-[1440px] px-6 py-24 sm:px-10 sm:py-32">
        <div className="grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <Reveal>
              <ParallaxImage
                src={images.workingLate}
                alt="Arbeit am späten Abend"
                aspect="aspect-[4/5] rounded-[20px]"
              />
            </Reveal>
          </div>
          <div className="lg:col-span-7 lg:pl-8">
            <SectionHeader
              index="PERSÖNLICH"
              eyebrow="Susannes Geschichte"
              title={
                <>
                  Als Mutter jeden Tag <span className="italic-display text-signal">erreichbar</span>. Als Beraterin ebenso.
                </>
              }
              size="lg"
            />
            <Reveal delay={0.15}>
              <div className="mt-10 space-y-5 text-[16.5px] leading-[1.75] text-ink-3">
                <p>
                  Selbstständigkeit bedeutet Verantwortung. Seit der Geburt meines Sohnes
                  weiß ich, wie viel Organisation dahintersteckt und wie wichtig es ist,
                  für Mandanten erreichbar zu bleiben. Beides geht.
                </p>
                <p>
                  Es geht dann, wenn man ein Team aufbaut, das trägt, Prozesse hat, die
                  laufen, und ein System wie DATEV, das für einen arbeitet. Genau das
                  haben wir. Und geben es Ihnen jeden Tag.
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* MEMBERSHIPS */}
      <section className="mx-auto max-w-[1440px] px-6 py-24 sm:px-10 sm:py-32">
        <SectionHeader
          index="NETZWERK"
          eyebrow="Verbunden"
          title={
            <>
              Rückenwind aus starken
              <br />
              <span className="italic-display text-signal">Netzwerken</span>.
            </>
          }
        />
        <div className="mt-14 grid gap-px border border-line bg-line sm:grid-cols-2">
          {site.memberships.map((m, i) => (
            <Reveal key={m} delay={i * 0.05}>
              <div className="flex items-center gap-5 bg-canvas px-7 py-6">
                <span className="index-label">{String(i + 1).padStart(2, "0")}</span>
                <span className="h-6 w-px bg-line-2" />
                <span className="text-[15px] font-medium text-ink">{m}</span>
                <span aria-hidden className="ml-auto text-signal">◆</span>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-[1440px] px-6 py-16 sm:px-10 sm:py-24">
        <div className="glass-strong rounded-[28px] px-8 py-14 sm:px-16 sm:py-20">
          <div className="flex flex-col items-start justify-between gap-8 lg:flex-row lg:items-end">
            <div>
              <p className="eyebrow">Kennenlernen</p>
              <h2 className="display mt-4 h-section text-ink">
                Machen wir den ersten <span className="italic-display text-signal">Schritt</span>.
              </h2>
            </div>
            <Link href="/beratung" className="btn-primary">
              Termin vereinbaren
              <span aria-hidden>→</span>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
