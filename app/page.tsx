import Link from "next/link";
import Image from "next/image";
import { Reveal } from "@/components/Reveal";
import { StickyExpand } from "@/components/StickyExpand";
import { TrustBar } from "@/components/TrustBar";
import { Approach } from "@/components/Approach";
import { BigStat } from "@/components/BigStat";
import { Marquee } from "@/components/Marquee";
import { images, site } from "@/lib/site";
import {
  HeroPlate,
  Pillars,
  ServiceGrid,
  Statement,
  PortraitBlock,
} from "@/components/Home";

export default function Home() {
  return (
    <>
      {/* ————————————————— HERO ————————————————— */}
      <section className="relative overflow-hidden pt-32 sm:pt-40">
        <div className="mx-auto max-w-[1440px] px-6 sm:px-10">
          {/* Top meta bar */}
          <Reveal>
            <div className="flex flex-wrap items-center justify-between gap-4 border-b border-line pb-4 text-[11px] uppercase tracking-[0.24em] text-smoke">
              <div className="flex items-center gap-3">
                <span className="red-dot" aria-hidden />
                <span>Steuerkanzlei · Wadgassen · Saarland</span>
              </div>
              <div className="hidden items-center gap-6 sm:flex">
                <span>DATEV-Kanzlei</span>
                <span>seit 20+ Jahren</span>
                <span>Steuerberaterkammer Saarland</span>
              </div>
            </div>
          </Reveal>

          <div className="mt-14 grid gap-12 lg:grid-cols-12 lg:items-end">
            {/* Title */}
            <div className="lg:col-span-8">
              <Reveal>
                <p className="eyebrow">Steuerberatung nach Maß</p>
              </Reveal>
              <Reveal delay={0.1}>
                <h1 className="display mt-8 h-hero text-ink">
                  Steuerberatung.
                  <br />
                  Auf <span className="italic-display text-signal">Präzision</span>
                  <br />
                  geprüft.
                </h1>
              </Reveal>
              <Reveal delay={0.22}>
                <p className="mt-10 max-w-xl text-[17.5px] leading-[1.6] text-ink-3">
                  Wir beraten Unternehmen, Freiberufler und Privatpersonen im Saarland.
                  Persönlich geführt, digital organisiert, konsequent verlässlich. Seit
                  über zwei Jahrzehnten.
                </p>
              </Reveal>
              <Reveal delay={0.32}>
                <div className="mt-10 flex flex-wrap items-center gap-3">
                  <Link href="/beratung" className="btn-primary">
                    Erstgespräch vereinbaren
                    <span aria-hidden>→</span>
                  </Link>
                  <Link href="/leistungen" className="btn-ghost">
                    Leistungen ansehen
                  </Link>
                </div>
              </Reveal>
            </div>

            {/* Plate */}
            <div className="lg:col-span-4">
              <Reveal delay={0.4}>
                <HeroPlate />
              </Reveal>
            </div>
          </div>

          {/* Big scroll image */}
          <div className="mt-24">
            <Reveal>
              <div className="relative aspect-[16/8] overflow-hidden rounded-[24px] bg-canvas-3">
                <Image
                  src={images.heroOffice}
                  alt="Modernes Büro mit warmem Licht"
                  fill
                  priority
                  sizes="(max-width: 1440px) 100vw, 1440px"
                  className="object-cover"
                />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-ink/40 via-transparent to-transparent" />
                <div className="absolute inset-x-6 bottom-6 flex items-end justify-between sm:inset-x-10 sm:bottom-10">
                  <div className="flex items-center gap-3 text-[11px] uppercase tracking-[0.24em] text-white">
                    <span className="red-dot" aria-hidden />
                    Kanzleiportrait
                  </div>
                  <span className="index-label text-white/80">01 / 08</span>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ————————————————— TRUST BAR ————————————————— */}
      <div className="mt-24 sm:mt-32">
        <TrustBar />
      </div>

      {/* ————————————————— PILLARS ————————————————— */}
      <Pillars />

      {/* ————————————————— APPROACH ————————————————— */}
      <Approach />

      {/* ————————————————— BIG STAT ————————————————— */}
      <BigStat
        image={images.buildingLookUp}
        stat={20}
        suffix="+"
        label="Jahre Praxis · Wadgassen"
        caption="Zwanzig Jahre in derselben Steuerberatungskanzlei, gefolgt vom Schritt in die Selbstständigkeit. Erfahrung, die man nicht ersetzen, sondern nur aufbauen kann."
      />

      {/* ————————————————— MARQUEE ————————————————— */}
      <div className="py-8">
        <Marquee
          items={[
            "Jahresabschluss",
            "Lohnbuchführung",
            "Existenzgründung",
            "Nachfolge",
            "Betriebsprüfung",
            "Businessplan",
            "Rechtsformwahl",
            "DATEV",
          ]}
        />
      </div>

      {/* ————————————————— STICKY EXPAND #1 ————————————————— */}
      <StickyExpand
        src={images.meeting}
        alt="Beratungssituation in modernem Büro"
        eyebrow="Beratungsqualität"
        index="APPROACH · IN DER PRAXIS"
        title={
          <>
            Wir denken in Zahlen.
            <br />
            Wir sprechen in <span className="italic-display text-signal">Klartext</span>.
          </>
        }
        tone="dark"
      >
        Ergebnisse gehören nicht in Fachjargon versteckt, sondern in klare Empfehlungen
        übersetzt. Jede Zahl bekommt bei uns einen Satz, den Sie mitnehmen können.
      </StickyExpand>

      {/* ————————————————— SERVICES ————————————————— */}
      <ServiceGrid />

      {/* ————————————————— STATEMENT ————————————————— */}
      <Statement />

      {/* ————————————————— STICKY EXPAND #2 ————————————————— */}
      <StickyExpand
        src={images.boardroom}
        alt="Team im Meeting"
        eyebrow="Kanzlei Rohlinger"
        index="TEAM · WADGASSEN"
        title={
          <>
            Fünf Menschen, ein
            <br />
            <span className="italic-display text-signal">gemeinsamer</span> Anspruch.
          </>
        }
      >
        Ein eingespieltes Team, das DATEV aktuell hält, Weiterbildung selbstverständlich
        lebt und den leisen Standard oben hält: Wir hören zu, bevor wir rechnen.
      </StickyExpand>

      {/* ————————————————— PORTRAIT ————————————————— */}
      <PortraitBlock />

      {/* ————————————————— FINAL CTA ————————————————— */}
      <section className="mx-auto max-w-[1440px] px-6 py-24 sm:px-10 sm:py-32">
        <div className="relative overflow-hidden rounded-[32px] bg-ink px-8 py-16 text-white sm:px-16 sm:py-24">
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0"
            style={{
              background:
                "radial-gradient(ellipse at 90% 10%, rgba(200,16,46,0.45), transparent 55%), radial-gradient(ellipse at 10% 100%, rgba(200,16,46,0.20), transparent 55%)",
            }}
          />
          <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-signal to-transparent" />

          <div className="relative grid gap-12 lg:grid-cols-12 lg:items-end">
            <div className="lg:col-span-8">
              <p className="eyebrow eyebrow-red text-white">Ihr nächster Schritt</p>
              <h2 className="display mt-6 h-section text-white">
                Ein Termin. Ein
                <br />
                <span className="italic-display text-signal">Gespräch</span>. Ein Anfang.
              </h2>
              <p className="mt-8 max-w-xl text-[16.5px] leading-[1.7] text-white/80">
                Erzählen Sie, was Sie beschäftigt. Wir hören zu, ordnen ein und sagen
                ehrlich, wie wir helfen können.
              </p>
            </div>
            <div className="lg:col-span-4">
              <div className="flex flex-col gap-3">
                <a
                  href={`tel:${site.phone.replace(/\s+/g, "")}`}
                  className="group flex items-center justify-between border border-white/20 bg-white/5 px-6 py-5 transition-colors hover:bg-white/10"
                >
                  <div>
                    <div className="text-[11px] uppercase tracking-[0.24em] text-white/60">
                      Telefon
                    </div>
                    <div className="display mt-1 text-2xl text-white">{site.phone}</div>
                  </div>
                  <span aria-hidden className="text-signal transition-transform group-hover:translate-x-1">→</span>
                </a>
                <Link
                  href="/beratung"
                  className="group flex items-center justify-between bg-signal px-6 py-5 text-white transition-colors hover:bg-signal-deep"
                >
                  <div>
                    <div className="text-[11px] uppercase tracking-[0.24em] text-white/80">
                      Anfrage
                    </div>
                    <div className="display mt-1 text-2xl">Termin vereinbaren</div>
                  </div>
                  <span aria-hidden className="transition-transform group-hover:translate-x-1">→</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
