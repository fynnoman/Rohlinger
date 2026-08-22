import type { Metadata } from "next";
import { Reveal } from "@/components/Reveal";
import { StickyExpand } from "@/components/StickyExpand";
import { ParallaxImage } from "@/components/ParallaxImage";
import { SectionHeader } from "@/components/SectionHeader";
import { images, site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Karriere",
  description:
    "Aktuelle Stellenangebote in der Kanzlei Rohlinger in Wadgassen. Wir suchen Verstärkung.",
};

const perks = [
  { n: "01", title: "Ein starkes Team", body: "Fünf Kolleginnen und Kollegen, die zusammenhalten und einander tragen." },
  { n: "02", title: "Moderne Kanzlei", body: "DATEV aktuell, digitale Prozesse, papierarm dort, wo es Sinn ergibt." },
  { n: "03", title: "Weiterbildung", body: "Fortbildung ist Alltag. Wir investieren in Ihr Können." },
  { n: "04", title: "Verlässliche Zeiten", body: "Geregelte Bürozeiten, planbar, familienfreundlich." },
];

const tasks = [
  "Erstellung von Finanzbuchhaltungen für unterschiedliche Rechtsformen",
  "Lohn- und Gehaltsabrechnungen inklusive Melde- und Bescheinigungswesen",
  "Vorbereitung und Erstellung von Jahresabschlüssen",
  "Steuererklärungen für Unternehmen und Privatpersonen",
  "Kommunikation mit Finanzamt, Sozialversicherungsträgern und Mandanten",
];

const profile = [
  "Abgeschlossene Ausbildung als Steuerfachangestellte:r (m/w/d)",
  "Gerne Weiterqualifikation als Steuerfachwirt:in oder Bilanzbuchhalter:in",
  "Freude an sorgfältiger Arbeit und persönlicher Mandatsbetreuung",
  "Berufsanfängerinnen und Berufsanfänger sind ausdrücklich willkommen",
];

export default function Karriere() {
  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden pt-32 sm:pt-40">
        <div className="mx-auto max-w-[1440px] px-6 sm:px-10">
          <Reveal>
            <div className="flex flex-wrap items-center justify-between gap-3 border-b border-line pb-4 text-[11px] uppercase tracking-[0.24em] text-smoke">
              <div className="flex items-center gap-3">
                <span className="red-dot" aria-hidden />
                Karriere · Wir suchen Verstärkung
              </div>
              <span className="index-label">06 / 06</span>
            </div>
          </Reveal>

          <div className="mt-14 grid gap-12 lg:grid-cols-12 lg:items-end">
            <div className="lg:col-span-8">
              <Reveal>
                <p className="eyebrow">Offene Position</p>
              </Reveal>
              <Reveal delay={0.1}>
                <h1 className="display mt-8 h-hero text-ink">
                  Steuern sind
                  <br />
                  Ihr <span className="italic-display text-signal">Fach</span>?
                </h1>
              </Reveal>
              <Reveal delay={0.22}>
                <p className="mt-10 max-w-xl text-[17.5px] leading-[1.6] text-ink-3">
                  Dann steuern Sie gemeinsam mit uns unsere Mandate sicher durch die
                  Tiefen des Fiskus. Mit dem nötigen Wissen, mit gutem Werkzeug und
                  mit einem Team, das zusammenhält.
                </p>
              </Reveal>
              <Reveal delay={0.32}>
                <div className="mt-10 flex flex-wrap items-center gap-3">
                  <a
                    href={`mailto:${site.email}?subject=Bewerbung%20Steuerfachangestellte`}
                    className="btn-primary"
                  >
                    Jetzt bewerben
                    <span aria-hidden>→</span>
                  </a>
                  <a
                    href={`tel:${site.phone.replace(/\s+/g, "")}`}
                    className="btn-ghost"
                  >
                    Rückfragen? Rufen Sie an
                  </a>
                </div>
              </Reveal>
            </div>

            <div className="lg:col-span-4">
              <Reveal delay={0.4}>
                <div className="border border-line bg-canvas-2 p-8">
                  <div className="flex items-center gap-3">
                    <span className="red-dot" aria-hidden />
                    <span className="eyebrow-plain">Aktuell offen</span>
                  </div>
                  <h2 className="display mt-6 text-3xl leading-tight text-ink">
                    Steuerfachangestellte:r
                    <br />
                    <span className="italic-display text-signal">(m/w/d)</span>
                  </h2>
                  <p className="mt-4 text-[14px] leading-[1.7] text-ink-3">
                    Gerne auch mit Qualifikation als Steuerfachwirt:in oder
                    Bilanzbuchhalter:in.
                  </p>
                  <div className="mt-6 grid grid-cols-2 gap-3 border-t border-line pt-4 text-[12.5px]">
                    <div>
                      <div className="eyebrow-plain">Ort</div>
                      <div className="mt-1 text-ink">Wadgassen</div>
                    </div>
                    <div>
                      <div className="eyebrow-plain">Umfang</div>
                      <div className="mt-1 text-ink">Voll- oder Teilzeit</div>
                    </div>
                  </div>
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* STICKY EXPAND */}
      <div className="mt-24 sm:mt-32">
        <StickyExpand
          src={images.team}
          alt="Team im Austausch"
          eyebrow="Was Sie erwartet"
          index="KANZLEI · KULTUR"
          title={
            <>
              Ein Ort, an dem Sie
              <br />
              <span className="italic-display text-signal">wachsen</span> können.
            </>
          }
          tone="dark"
        >
          Wir sind fünf Menschen mit einem Anspruch: gute Arbeit für gute Mandate. Sie
          werden Teil eines Teams, in dem Weiterbildung, Verantwortung und Vertrauen
          keine leeren Worte sind.
        </StickyExpand>
      </div>

      {/* PERKS */}
      <section className="mx-auto max-w-[1440px] px-6 py-24 sm:px-10 sm:py-32">
        <SectionHeader
          index="RAHMEN"
          eyebrow="Was wir bieten"
          title={
            <>
              Bedingungen, die
              <br />
              <span className="italic-display text-signal">passen</span>.
            </>
          }
        />
        <div className="mt-14 grid gap-px border border-line bg-line md:grid-cols-2 lg:grid-cols-4">
          {perks.map((p, i) => (
            <Reveal key={p.n} delay={i * 0.06}>
              <div className="h-full bg-canvas p-8">
                <span className="display text-5xl text-signal">{p.n}</span>
                <h3 className="display mt-8 text-2xl text-ink">{p.title}</h3>
                <p className="mt-3 text-[14px] leading-[1.7] text-ink-3">{p.body}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* TASKS + PROFILE */}
      <section className="mx-auto max-w-[1440px] px-6 py-24 sm:px-10 sm:py-32">
        <div className="grid gap-16 lg:grid-cols-12">
          <div className="lg:col-span-6">
            <SectionHeader
              index="POSITION"
              eyebrow="Ihre Aufgaben"
              title={<>Was Sie <span className="italic-display text-signal">mitgestalten</span>.</>}
            />
            <ul className="mt-10 divide-y divide-line">
              {tasks.map((t, i) => (
                <Reveal key={t} delay={i * 0.05}>
                  <li className="flex items-start gap-5 py-5">
                    <span className="index-label mt-1 min-w-[2.5rem] shrink-0">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span className="text-[16px] leading-[1.6] text-ink">{t}</span>
                  </li>
                </Reveal>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-6">
            <SectionHeader
              index="PROFIL"
              eyebrow="Ihr Profil"
              title={<>Was Sie <span className="italic-display text-signal">mitbringen</span>.</>}
            />
            <ul className="mt-10 divide-y divide-line">
              {profile.map((t, i) => (
                <Reveal key={t} delay={i * 0.05}>
                  <li className="flex items-start gap-5 py-5">
                    <span className="index-label mt-1 min-w-[2.5rem] shrink-0">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span className="text-[16px] leading-[1.6] text-ink">{t}</span>
                  </li>
                </Reveal>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* PARALLAX */}
      <section className="mt-24 sm:mt-32">
        <div className="mx-auto max-w-[1440px] px-6 sm:px-10">
          <Reveal>
            <ParallaxImage
              src={images.window}
              alt="Blick aus dem Kanzleifenster"
              aspect="aspect-[16/8] rounded-[24px]"
            />
          </Reveal>
        </div>
      </section>

      {/* APPLY CTA */}
      <section className="mx-auto max-w-[1440px] px-6 py-24 sm:px-10 sm:py-32">
        <div className="relative overflow-hidden rounded-[28px] bg-ink px-8 py-16 text-white sm:px-16 sm:py-20">
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0"
            style={{
              background:
                "radial-gradient(ellipse at 90% 20%, rgba(200,16,46,0.35), transparent 55%)",
            }}
          />
          <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-signal to-transparent" />

          <div className="relative grid gap-12 lg:grid-cols-12 lg:items-end">
            <div className="lg:col-span-8">
              <p className="eyebrow eyebrow-red text-white">Bewerbung</p>
              <h2 className="display mt-6 h-section text-white">
                Wir freuen uns, Sie <span className="italic-display text-signal">kennenzulernen</span>.
              </h2>
              <p className="mt-6 max-w-xl text-[16.5px] leading-[1.7] text-white/80">
                Senden Sie Ihre Unterlagen per E-Mail oder rufen Sie an. Ein
                Kennenlernen sagt oft mehr als das schönste Anschreiben.
              </p>
            </div>
            <div className="lg:col-span-4 flex flex-col gap-3">
              <a
                href={`mailto:${site.email}?subject=Bewerbung%20Steuerfachangestellte`}
                className="group flex items-center justify-between border border-white/20 bg-white/5 px-6 py-5 transition-colors hover:bg-white/10"
              >
                <div>
                  <div className="text-[11px] uppercase tracking-[0.24em] text-white/60">
                    E-Mail
                  </div>
                  <div className="display mt-1 text-xl text-white">{site.email}</div>
                </div>
                <span aria-hidden className="text-signal">→</span>
              </a>
              <a
                href={`tel:${site.phone.replace(/\s+/g, "")}`}
                className="group flex items-center justify-between bg-signal px-6 py-5 text-white transition-colors hover:bg-signal-deep"
              >
                <div>
                  <div className="text-[11px] uppercase tracking-[0.24em] text-white/80">
                    Telefon
                  </div>
                  <div className="display mt-1 text-xl">{site.phone}</div>
                </div>
                <span aria-hidden>→</span>
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
