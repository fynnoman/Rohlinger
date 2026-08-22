"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { nav, site } from "@/lib/site";

export function Nav() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => setOpen(false), [pathname]);

  return (
    <header className="fixed inset-x-0 top-0 z-50 pointer-events-none">
      <div className="mx-auto flex max-w-[1440px] items-center justify-center px-4 pt-4 sm:px-8 sm:pt-6">
        <motion.nav
          initial={false}
          animate={{
            width: scrolled ? "min(920px, 94vw)" : "min(1240px, 96vw)",
            paddingTop: scrolled ? 10 : 14,
            paddingBottom: scrolled ? 10 : 14,
          }}
          transition={{ type: "spring", stiffness: 260, damping: 32 }}
          className="glass pointer-events-auto flex items-center justify-between rounded-full px-5 sm:px-7"
        >
          <Link href="/" className="group flex items-center gap-3">
            <span aria-hidden className="relative grid h-8 w-8 place-items-center overflow-hidden rounded-full bg-ink text-canvas">
              <span className="display text-[14px] leading-none tracking-tight">SR</span>
              <span className="absolute inset-x-0 bottom-0 h-1 bg-signal" />
            </span>
            <span className="hidden sm:block">
              <span className="block text-[13.5px] font-semibold leading-none tracking-tight text-ink">
                Susanne Rohlinger
              </span>
              <span className="mt-1 block text-[10px] font-medium uppercase tracking-[0.22em] text-smoke">
                Steuerberatung · Wadgassen
              </span>
            </span>
          </Link>

          <ul className="hidden items-center gap-1 lg:flex">
            {nav.map((item) => {
              const active = pathname === item.href;
              return (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className={`relative rounded-full px-3.5 py-2 text-[13px] font-medium transition-colors ${
                      active ? "text-ink" : "text-ink-3 hover:text-ink"
                    }`}
                  >
                    {active && (
                      <motion.span
                        layoutId="nav-pill"
                        transition={{ type: "spring", stiffness: 340, damping: 34 }}
                        className="absolute inset-0 -z-10 rounded-full bg-canvas-2"
                      />
                    )}
                    {item.label}
                  </Link>
                </li>
              );
            })}
          </ul>

          <div className="hidden items-center gap-4 lg:flex">
            <a
              href={`tel:${site.phone.replace(/\s+/g, "")}`}
              className="flex items-center gap-2 text-[13px] text-ink-3 hover:text-ink"
            >
              <span className="red-dot" aria-hidden />
              {site.phone}
            </a>
            <Link
              href="/beratung"
              className="rounded-full bg-signal px-4 py-2 text-[13px] font-medium text-white transition-colors hover:bg-signal-deep"
            >
              Termin
            </Link>
          </div>

          <button
            onClick={() => setOpen((v) => !v)}
            className="grid h-9 w-9 place-items-center rounded-full hover:bg-canvas-2 lg:hidden"
            aria-label="Menü"
          >
            <span className="relative block h-3 w-4">
              <span
                className={`absolute inset-x-0 top-0 h-px bg-ink transition-transform ${
                  open ? "translate-y-1.5 rotate-45" : ""
                }`}
              />
              <span
                className={`absolute inset-x-0 bottom-0 h-px bg-ink transition-transform ${
                  open ? "-translate-y-1 -rotate-45" : ""
                }`}
              />
            </span>
          </button>
        </motion.nav>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="mx-auto mt-3 max-w-[96vw] px-4 pointer-events-auto lg:hidden"
          >
            <div className="glass-strong rounded-[28px] p-6">
              <ul className="flex flex-col gap-1">
                {nav.map((item, i) => (
                  <li key={item.href} className="flex items-center justify-between border-b border-line py-3 last:border-b-0">
                    <Link href={item.href} className="display text-2xl text-ink transition-colors hover:text-signal">
                      {item.label}
                    </Link>
                    <span className="index-label">0{i + 1}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-6 grid grid-cols-2 gap-2">
                <a
                  href={`tel:${site.phone.replace(/\s+/g, "")}`}
                  className="btn-ghost justify-center text-[13px]"
                >
                  Anrufen
                </a>
                <Link
                  href="/beratung"
                  className="btn-primary justify-center text-[13px]"
                >
                  Termin
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
