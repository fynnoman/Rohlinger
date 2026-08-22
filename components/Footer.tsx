import Link from "next/link";
import { site, nav } from "@/lib/site";

export function Footer() {
  return (
    <footer className="relative mt-32 overflow-hidden bg-ink text-canvas">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-signal to-transparent" />

      <div className="relative mx-auto max-w-[1440px] px-6 pt-24 pb-10 sm:px-10">
        {/* Top block */}
        <div className="grid gap-14 md:grid-cols-12">
          <div className="md:col-span-6">
            <p className="eyebrow eyebrow-red text-white">Kontakt aufnehmen</p>
            <h3 className="display mt-6 text-5xl leading-[1.02] text-white sm:text-7xl">
              Bereit für ein
              <br />
              <span className="italic-display text-signal">präzises</span> Gespräch?
            </h3>
            <p className="mt-8 max-w-md text-[15px] leading-[1.7] text-mist">
              Rufen Sie an, schreiben Sie oder besuchen Sie uns in Wadgassen. Ein
              erstes Kennenlernen bleibt selbstverständlich unverbindlich.
            </p>
            <div className="mt-10 flex flex-wrap gap-3">
              <Link href="/beratung" className="btn-primary">
                Termin vereinbaren
                <span aria-hidden>→</span>
              </Link>
              <a
                href={`tel:${site.phone.replace(/\s+/g, "")}`}
                className="btn-ghost border-white/20 text-white hover:border-white hover:bg-white/5"
              >
                {site.phone}
              </a>
            </div>
          </div>

          <div className="md:col-span-3">
            <p className="eyebrow-plain text-mist">Kanzlei</p>
            <address className="mt-5 not-italic text-[14.5px] leading-[1.7] text-white/90">
              {site.legal}<br />
              {site.address.street}<br />
              {site.address.zip} {site.address.city}
            </address>
            <div className="mt-4 space-y-1 text-[13.5px] text-mist">
              <span className="block">Tel {site.phone}</span>
              <span className="block">Fax {site.fax}</span>
              <a href={`mailto:${site.email}`} className="block link-draw hover:text-white">
                {site.email}
              </a>
            </div>
          </div>

          <div className="md:col-span-3">
            <p className="eyebrow-plain text-mist">Bürozeiten</p>
            <ul className="mt-5 space-y-3 text-[14px]">
              {site.hours.map((h) => (
                <li key={h.day} className="flex items-center justify-between border-b border-white/10 pb-2">
                  <span className="text-white/90">{h.day}</span>
                  <span className="tabular-nums text-mist">{h.time}</span>
                </li>
              ))}
            </ul>

            <p className="eyebrow-plain mt-8 text-mist">Sitemap</p>
            <ul className="mt-5 space-y-2 text-[13.5px] text-white/80">
              <li><Link href="/" className="link-draw hover:text-white">Start</Link></li>
              {nav.map((n) => (
                <li key={n.href}>
                  <Link href={n.href} className="link-draw hover:text-white">{n.label}</Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Memberships strip */}
        <div className="mt-20 grid gap-3 border-y border-white/10 py-8 md:grid-cols-4">
          {site.memberships.map((m) => (
            <div key={m} className="flex items-center gap-3 text-[12.5px] uppercase tracking-[0.14em] text-mist">
              <span className="red-dot" aria-hidden />
              {m}
            </div>
          ))}
        </div>

        {/* Bottom line */}
        <div className="mt-8 flex flex-col gap-4 text-[12px] uppercase tracking-[0.18em] text-mist sm:flex-row sm:items-center sm:justify-between">
          <span>© {new Date().getFullYear()} {site.legal} · Steuerberatung Wadgassen</span>
          <div className="flex flex-wrap gap-6">
            <Link href="/impressum" className="link-draw hover:text-white">Impressum</Link>
            <Link href="/datenschutz" className="link-draw hover:text-white">Datenschutz</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
