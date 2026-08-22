import type { Metadata } from "next";
import Link from "next/link";
import { Reveal } from "@/components/Reveal";
import { ParallaxImage } from "@/components/ParallaxImage";
import { ContactForm } from "@/components/ContactForm";
import { images, site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Kontakt",
  description:
    "Vereinbaren Sie ein persönliches Erstgespräch in unserer Kanzlei in Wadgassen.",
};

const encodedAddress = encodeURIComponent(
  `${site.address.street}, ${site.address.zip} ${site.address.city}`
);

export default function Beratung() {
  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden pt-32 sm:pt-40">
        <div className="mx-auto max-w-[1440px] px-6 sm:px-10">
          <Reveal>
            <div className="flex flex-wrap items-center justify-between gap-3 border-b border-line pb-4 text-[11px] uppercase tracking-[0.24em] text-smoke">
              <div className="flex items-center gap-3">
                <span className="red-dot" aria-hidden />
                Kontakt · Persönliche Beratung
              </div>
              <span className="index-label">05 / 06</span>
            </div>
          </Reveal>

          <div className="mt-14 grid gap-12 lg:grid-cols-12 lg:items-end">
            <div className="lg:col-span-8">
              <Reveal>
                <p className="eyebrow">Wir freuen uns auf Sie</p>
              </Reveal>
              <Reveal delay={0.1}>
                <h1 className="display mt-8 h-hero text-ink">
                  Ein Gespräch, das
                  <br />
                  wirklich <span className="italic-display text-signal">weiterführt</span>.
                </h1>
              </Reveal>
              <Reveal delay={0.22}>
                <p className="mt-10 max-w-xl text-[17.5px] leading-[1.6] text-ink-3">
                  Erzählen Sie, worum es geht. Wir hören zu, ordnen ein und sagen
                  ehrlich, wie wir helfen können. Ein Anruf, eine Nachricht, ein
                  Termin bei uns in Wadgassen.
                </p>
              </Reveal>
            </div>
            <div className="lg:col-span-4">
              <Reveal delay={0.32}>
                <div className="border border-line bg-canvas-2 p-8">
                  <span className="eyebrow-plain">Direkt erreichbar</span>
                  <a
                    href={`tel:${site.phone.replace(/\s+/g, "")}`}
                    className="display mt-4 block text-3xl leading-tight text-ink"
                  >
                    {site.phone}
                  </a>
                  <div className="mt-4 border-t border-line pt-4">
                    <a
                      href={`mailto:${site.email}`}
                      className="text-[14px] text-ink-3 link-draw hover:text-ink"
                    >
                      {site.email}
                    </a>
                  </div>
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* MAIN GRID */}
      <section className="mx-auto mt-20 max-w-[1440px] px-6 sm:mt-28 sm:px-10">
        <div className="grid gap-10 lg:grid-cols-12">
          {/* Form */}
          <div className="lg:col-span-7">
            <div className="glass-strong rounded-[24px] p-8 sm:p-12">
              <div className="flex items-center gap-4">
                <span className="display text-6xl text-signal">01</span>
                <span className="h-px w-16 bg-ink" />
                <span className="eyebrow-plain">Anfrage</span>
              </div>
              <h2 className="display mt-6 text-3xl leading-tight text-ink sm:text-5xl">
                Ihre Nachricht.
              </h2>
              <p className="mt-4 max-w-md text-[15px] leading-[1.7] text-ink-3">
                Ein paar Zeilen reichen. Sie hören innerhalb von zwei Werktagen von uns.
              </p>
              <div className="mt-10">
                <ContactForm />
              </div>
            </div>
          </div>

          {/* Info sidebar */}
          <div className="lg:col-span-5 space-y-6">
            <Reveal delay={0.08}>
              <div className="border border-line bg-canvas p-8">
                <span className="eyebrow-plain">02 · Kanzlei</span>
                <address className="mt-6 not-italic text-[16.5px] leading-[1.7] text-ink">
                  {site.legal}<br />
                  {site.address.street}<br />
                  {site.address.zip} {site.address.city}
                </address>
                <div className="mt-6 grid gap-1.5 border-t border-line pt-4 text-[14px] text-ink-3">
                  <span>Tel {site.phone}</span>
                  <span>Fax {site.fax}</span>
                </div>
              </div>
            </Reveal>

            <Reveal delay={0.14}>
              <div className="border border-line bg-canvas p-8">
                <span className="eyebrow-plain">03 · Bürozeiten</span>
                <ul className="mt-6 space-y-3 text-[15px] text-ink">
                  {site.hours.map((h) => (
                    <li
                      key={h.day}
                      className="flex items-center justify-between border-b border-line pb-2 last:border-b-0 last:pb-0"
                    >
                      <span>{h.day}</span>
                      <span className="tabular-nums text-smoke">{h.time}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>

            <Reveal delay={0.2}>
              <div className="overflow-hidden border border-line">
                <div className="aspect-[4/3] overflow-hidden">
                  <iframe
                    title="Karte der Kanzlei Rohlinger"
                    src={`https://www.google.com/maps?q=${encodedAddress}&output=embed`}
                    className="h-full w-full border-0 grayscale-[15%]"
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  />
                </div>
                <div className="flex items-center justify-between border-t border-line bg-canvas px-6 py-4">
                  <span className="eyebrow-plain">04 · Anfahrt</span>
                  <a
                    href={`https://www.google.com/maps/dir/?api=1&destination=${encodedAddress}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[13px] text-signal link-draw"
                  >
                    Route planen ↗
                  </a>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* BOTTOM IMAGE */}
      <section className="mt-24 sm:mt-32">
        <div className="mx-auto max-w-[1440px] px-6 sm:px-10">
          <Reveal>
            <ParallaxImage
              src={images.meeting}
              alt="Beratungssituation"
              aspect="aspect-[16/8] rounded-[24px]"
            />
          </Reveal>
          <div className="mt-10 flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
            <p className="max-w-xl text-[16px] leading-[1.7] text-ink-3">
              Bringen Sie mit, was Sie beschäftigt. Wir bringen Zeit, Ruhe und einen
              ehrlichen Rat. Ein erstes Treffen bleibt unverbindlich.
            </p>
            <Link href="/ueber-uns" className="text-[14px] text-ink-3 link-draw hover:text-ink">
              Über die Kanzlei →
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
