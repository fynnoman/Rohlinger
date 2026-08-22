import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { Reveal } from "@/components/Reveal";
import { StickyExpand } from "@/components/StickyExpand";
import { ParallaxImage } from "@/components/ParallaxImage";
import { images } from "@/lib/site";

export const metadata: Metadata = {
  title: "Leistungen",
  description:
    "Steuerliche und betriebswirtschaftliche Beratung für Unternehmen, Privatpersonen und Existenzgründer im Saarland.",
};

const groups = [
  {
    id: "unternehmen",
    n: "01",
    label: "Unternehmen",
    title: "Für Unternehmen",
    lead:
      "Mehr Ertrag, langfristiger Erfolg. Wir denken die steuerliche Perspektive mit der betriebswirtschaftlichen zusammen.",
    img: images.boardroom,
    items: [
      "Finanz- und Lohnbuchführung",
      "Erstellung von Jahresabschlüssen und Steuererklärungen",
      "Steuerliche Beratung",
      "Betriebswirtschaftliche Beratung: Investitions- und Finanzierungsplanung, Controlling",
      "Rechtsformwahl",
      "Unternehmensnachfolge",
      "Begleitung zu Bankgesprächen und Kreditverhandlungen",
      "Begleitung bei steuerlichen und sozialversicherungsrechtlichen Außenprüfungen",
    ],
  },
  {
    id: "privatpersonen",
    n: "02",
    label: "Privatpersonen",
    title: "Für Privatpersonen",
    lead:
      "Steuerthemen betreffen Menschen in jeder Lebensphase. Wir sortieren, ordnen ein, übersetzen Paragrafen in Antworten.",
    img: images.window,
    items: [
      "Erstellung von Einkommensteuererklärungen",
      "Erstellung von Erbschaft- und Schenkungsteuererklärungen",
      "Einkommensteuerrechtliche Beratung",
      "Lohnsteuerrechtliche Beratung",
    ],
  },
  {
    id: "existenzgruender",
    n: "03",
    label: "Existenzgründer",
    title: "Für Existenzgründer",
    lead:
      "Wir waren selbst dort. Und geben unsere Erfahrung heute weiter an Menschen, die den gleichen Schritt planen.",
    img: images.laptop,
    items: [
      "Existenzgründerberatung",
      "Erstellung von Businessplänen",
      "Begleitung zu Bankgesprächen und Kreditverhandlungen",
      "Steuerliche Beratung",
      "Betriebswirtschaftliche Beratung",
      "Rechtsformwahl",
    ],
  },
];

export default function Leistungen() {
  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden pt-32 sm:pt-40">
        <div className="mx-auto max-w-[1440px] px-6 sm:px-10">
          <Reveal>
            <div className="flex flex-wrap items-center justify-between gap-3 border-b border-line pb-4 text-[11px] uppercase tracking-[0.24em] text-smoke">
              <div className="flex items-center gap-3">
                <span className="red-dot" aria-hidden />
                Leistungsfelder · Kompetenz
              </div>
              <span className="index-label">03 / 06</span>
            </div>
          </Reveal>

          <div className="mt-14 grid gap-12 lg:grid-cols-12 lg:items-end">
            <div className="lg:col-span-8">
              <Reveal>
                <p className="eyebrow">Was wir leisten</p>
              </Reveal>
              <Reveal delay={0.1}>
                <h1 className="display mt-8 h-hero text-ink">
                  Ertrag und
                  <br />
                  Erleichterung.
                  <br />
                  <span className="italic-display text-signal">Zusammen</span> gedacht.
                </h1>
              </Reveal>
            </div>
            <div className="lg:col-span-4">
              <Reveal delay={0.22}>
                <p className="max-w-md text-[16.5px] leading-[1.7] text-ink-3">
                  Ob Bilanz, Businessplan oder Erbschaftsteuer: Wir kombinieren
                  handwerkliche Präzision mit dem Blick fürs Ganze. Damit Sie
                  entscheiden können, statt reagieren zu müssen.
                </p>
                <div className="mt-6 flex flex-wrap gap-2">
                  {groups.map((g) => (
                    <a
                      key={g.id}
                      href={`#${g.id}`}
                      className="rounded-full border border-line px-4 py-2 text-[12.5px] font-medium text-ink transition-colors hover:border-ink hover:bg-canvas-2"
                    >
                      {g.label}
                    </a>
                  ))}
                </div>
              </Reveal>
            </div>
          </div>

          <div className="mt-20">
            <Reveal>
              <div className="relative aspect-[16/8] overflow-hidden rounded-[24px] bg-canvas-3">
                <Image
                  src={images.desk}
                  alt="Ordentlicher Kanzleitisch"
                  fill
                  priority
                  sizes="100vw"
                  className="object-cover"
                />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-ink/35 via-transparent to-transparent" />
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* GROUPS */}
      {groups.map((g, gi) => (
        <section
          key={g.id}
          id={g.id}
          className="mx-auto max-w-[1440px] scroll-mt-32 px-6 py-24 sm:px-10 sm:py-40"
        >
          <div className="grid gap-12 lg:grid-cols-12">
            <div className="lg:col-span-5 lg:sticky lg:top-32 lg:self-start">
              <Reveal>
                <div className="flex items-center gap-4">
                  <span className="display text-6xl text-signal">{g.n}</span>
                  <span className="h-px w-16 bg-ink" />
                  <span className="eyebrow-plain">{g.label}</span>
                </div>
                <h2 className="display mt-8 h-hero-md text-ink">{g.title}</h2>
                <p className="mt-6 max-w-md text-[16px] leading-[1.7] text-ink-3">{g.lead}</p>
              </Reveal>
              <Reveal delay={0.15}>
                <div className="mt-10 overflow-hidden rounded-[20px]">
                  <ParallaxImage
                    src={g.img}
                    alt={g.title}
                    aspect="aspect-[4/5]"
                    intensity={80}
                  />
                </div>
              </Reveal>
            </div>

            <div className="lg:col-span-7">
              <ul className="divide-y divide-line">
                {g.items.map((item, i) => (
                  <Reveal key={item} delay={i * 0.04}>
                    <li className="group flex items-start gap-8 py-7">
                      <span className="index-label mt-2 min-w-[3rem] shrink-0 tabular-nums">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <div className="flex-1">
                        <p className="display text-2xl leading-tight text-ink transition-transform group-hover:translate-x-1 sm:text-3xl">
                          {item}
                        </p>
                      </div>
                      <span
                        aria-hidden
                        className="mt-2 shrink-0 text-line-2 transition-colors group-hover:text-signal"
                      >
                        →
                      </span>
                    </li>
                  </Reveal>
                ))}
              </ul>

              <Reveal delay={0.1}>
                <div className="mt-12 flex flex-wrap items-center gap-4">
                  <Link href="/beratung" className="btn-primary">
                    Beratung anfragen
                    <span aria-hidden>→</span>
                  </Link>
                  {gi < groups.length - 1 && (
                    <a
                      href={`#${groups[gi + 1].id}`}
                      className="text-[13.5px] text-ink-3 link-draw hover:text-ink"
                    >
                      Weiter zu {groups[gi + 1].title}
                    </a>
                  )}
                </div>
              </Reveal>
            </div>
          </div>
        </section>
      ))}

      {/* STICKY EXPAND */}
      <StickyExpand
        src={images.documents}
        alt="Sauber sortierte Unterlagen"
        eyebrow="Handwerk"
        index="STANDARD · QUALITÄT"
        title={
          <>
            Sauber gebucht.
            <br />
            Klar <span className="italic-display text-signal">erklärt</span>.
          </>
        }
        tone="dark"
      >
        Buchhaltung, Abschlüsse, Erklärungen. Wir arbeiten sorgfältig und legen
        Rechenschaft ab. In Sätzen, die Sie verstehen und die belegen, warum wir was
        empfehlen.
      </StickyExpand>

      {/* CTA */}
      <section className="mx-auto max-w-[1440px] px-6 py-24 sm:px-10 sm:py-32">
        <div className="glass-strong rounded-[28px] px-8 py-14 sm:px-16 sm:py-20">
          <div className="flex flex-col items-start justify-between gap-8 lg:flex-row lg:items-end">
            <div>
              <p className="eyebrow">Ihr Anliegen</p>
              <h2 className="display mt-4 h-section text-ink">Klingt nach uns?</h2>
              <p className="mt-4 max-w-xl text-[16px] leading-[1.7] text-ink-3">
                Erzählen Sie kurz, worum es geht. Ein erstes Gespräch klärt oft mehr
                als viele Mails.
              </p>
            </div>
            <Link href="/beratung" className="btn-primary">
              Erstgespräch vereinbaren
              <span aria-hidden>→</span>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
