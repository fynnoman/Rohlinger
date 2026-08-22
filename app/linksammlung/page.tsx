import type { Metadata } from "next";
import Image from "next/image";
import { Reveal } from "@/components/Reveal";
import { images } from "@/lib/site";

export const metadata: Metadata = {
  title: "Ressourcen",
  description:
    "Kuratierte Verweise auf Gesetzesgrundlagen, Verbände und nützliche Ressourcen rund um Steuern und Recht.",
};

const groups = [
  {
    title: "Gesetzesgrundlagen",
    intro: "Amtliche Quellen zu Steuern, Recht und Wirtschaft.",
    links: [
      { label: "Bundeszentralamt für Steuern", href: "https://www.bzst.de" },
      { label: "Bundesfinanzministerium", href: "https://www.bundesfinanzministerium.de" },
      { label: "Bundesministerium für Wirtschaft", href: "https://www.bmwk.de" },
      { label: "Bundesfinanzhof", href: "https://www.bundesfinanzhof.de" },
      { label: "Bundesarbeitsgericht", href: "https://www.bundesarbeitsgericht.de" },
      { label: "Bundesverfassungsgericht", href: "https://www.bundesverfassungsgericht.de" },
      { label: "Bundessozialgericht", href: "https://www.bsg.bund.de" },
      { label: "Bundesgerichtshof", href: "https://www.bundesgerichtshof.de" },
      { label: "Landesarbeitsgericht Saarland", href: "https://www.saarland.de/lag" },
      { label: "Deutsche Bundesbank", href: "https://www.bundesbank.de" },
    ],
  },
  {
    title: "Verbände und Vereine",
    intro: "Berufsständische Vertretungen und Interessengemeinschaften.",
    links: [
      { label: "Steuerberaterkammer Saarland", href: "https://www.stbk-saarland.de" },
      { label: "Deutscher Steuerberaterverband", href: "https://www.dstv.de" },
      { label: "Industrie- und Handelskammer Saarland", href: "https://www.saarland.ihk.de" },
      { label: "Handwerkskammer Saarland", href: "https://www.hwk-saarland.de" },
      { label: "Haus- und Grundbesitzerverein", href: "https://www.haus-und-grund.net" },
      { label: "Bund der Steuerzahler", href: "https://www.steuerzahler.de" },
    ],
  },
  {
    title: "Nützliches",
    intro: "Alltagshilfen und regionale Ansprechpartner.",
    links: [
      { label: "Bürgerdienste Saar", href: "https://www.buergerdienste-saar.de" },
      { label: "Saarländische Investitionskreditbank", href: "https://www.sikb.de" },
    ],
  },
];

export default function Linksammlung() {
  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden pt-32 sm:pt-40">
        <div className="mx-auto max-w-[1440px] px-6 sm:px-10">
          <Reveal>
            <div className="flex flex-wrap items-center justify-between gap-3 border-b border-line pb-4 text-[11px] uppercase tracking-[0.24em] text-smoke">
              <div className="flex items-center gap-3">
                <span className="red-dot" aria-hidden />
                Ressourcen · Kuratiert
              </div>
              <span className="index-label">04 / 06</span>
            </div>
          </Reveal>

          <div className="mt-14 grid gap-12 lg:grid-cols-12 lg:items-end">
            <div className="lg:col-span-8">
              <Reveal>
                <p className="eyebrow">Nachschlagen und weiterlesen</p>
              </Reveal>
              <Reveal delay={0.1}>
                <h1 className="display mt-8 h-hero text-ink">
                  Wo Sie
                  <br />
                  <span className="italic-display text-signal">weiterlesen</span>
                  <br />
                  können.
                </h1>
              </Reveal>
            </div>
            <div className="lg:col-span-4">
              <Reveal delay={0.22}>
                <p className="max-w-md text-[16.5px] leading-[1.7] text-ink-3">
                  Ein Verzeichnis von Behörden, Verbänden und Nachschlagewerken, das
                  wir regelmäßig prüfen. Für Recherchen, für Neugier, für den zweiten
                  Blick.
                </p>
              </Reveal>
            </div>
          </div>

          <div className="mt-20">
            <Reveal>
              <div className="relative aspect-[16/7] overflow-hidden rounded-[24px] bg-canvas-3">
                <Image
                  src={images.city}
                  alt="Städtische Kulisse"
                  fill
                  priority
                  sizes="100vw"
                  className="object-cover"
                />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-ink/45 via-transparent to-transparent" />
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* GROUPS */}
      <section className="mx-auto max-w-[1440px] px-6 py-24 sm:px-10 sm:py-32">
        <div className="space-y-24 sm:space-y-32">
          {groups.map((g, gi) => (
            <div key={g.title} className="grid gap-12 lg:grid-cols-12">
              <div className="lg:col-span-4 lg:sticky lg:top-32 lg:self-start">
                <Reveal>
                  <div className="flex items-center gap-4">
                    <span className="display text-6xl text-signal">
                      {String(gi + 1).padStart(2, "0")}
                    </span>
                    <span className="h-px w-16 bg-ink" />
                  </div>
                  <h2 className="display mt-8 text-4xl leading-tight text-ink sm:text-5xl">
                    {g.title}
                  </h2>
                  <p className="mt-5 max-w-sm text-[15px] leading-[1.7] text-ink-3">
                    {g.intro}
                  </p>
                </Reveal>
              </div>
              <div className="lg:col-span-8">
                <ul className="divide-y divide-line">
                  {g.links.map((l, i) => (
                    <Reveal key={l.href} delay={i * 0.03}>
                      <li>
                        <a
                          href={l.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="group flex items-baseline justify-between gap-6 py-6 transition-transform hover:translate-x-1"
                        >
                          <span className="display text-2xl leading-tight text-ink sm:text-3xl">
                            {l.label}
                          </span>
                          <span
                            aria-hidden
                            className="shrink-0 text-[12.5px] uppercase tracking-[0.22em] text-smoke transition-colors group-hover:text-signal"
                          >
                            {new URL(l.href).hostname.replace(/^www\./, "")} ↗
                          </span>
                        </a>
                      </li>
                    </Reveal>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
