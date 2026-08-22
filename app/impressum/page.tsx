import type { Metadata } from "next";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Impressum",
  description: "Impressum der Steuerkanzlei Susanne Rohlinger.",
};

export default function Impressum() {
  return (
    <section className="mx-auto max-w-3xl px-6 pt-40 pb-24 sm:px-10">
      <p className="eyebrow">Rechtliches</p>
      <h1 className="display mt-6 h-hero-md text-ink">Impressum</h1>

      <div className="mt-14 space-y-10 text-[15.5px] leading-[1.75] text-ink-3">
        <div>
          <h2 className="display text-2xl text-ink">Angaben gemäß § 5 TMG</h2>
          <p className="mt-3">
            {site.legal}<br />
            {site.address.street}<br />
            {site.address.zip} {site.address.city}<br />
            Deutschland
          </p>
        </div>

        <div>
          <h2 className="display text-2xl text-ink">Kontakt</h2>
          <p className="mt-3">
            Telefon: {site.phone}<br />
            Telefax: {site.fax}<br />
            E-Mail: {site.email}
          </p>
        </div>

        <div>
          <h2 className="display text-2xl text-ink">Berufsrechtliche Angaben</h2>
          <p className="mt-3">
            Berufsbezeichnung: Steuerberaterin<br />
            Verliehen in: Bundesrepublik Deutschland<br />
            Zuständige Aufsichts- und Berufskammer: Steuerberaterkammer Saarland<br />
            Berufsrechtliche Regelungen: Steuerberatungsgesetz (StBerG), Berufsordnung der
            Bundessteuerberaterkammer (BOStB), Steuerberatervergütungsverordnung (StBVV).
          </p>
        </div>

        <div>
          <h2 className="display text-2xl text-ink">Berufshaftpflichtversicherung</h2>
          <p className="mt-3">
            Namen und Sitz des Versicherers sowie Geltungsraum werden auf Anfrage
            mitgeteilt.
          </p>
        </div>

        <div>
          <h2 className="display text-2xl text-ink">Verantwortlich für den Inhalt nach § 55 Abs. 2 RStV</h2>
          <p className="mt-3">
            {site.name}<br />
            {site.address.street}, {site.address.zip} {site.address.city}
          </p>
        </div>

        <div>
          <h2 className="display text-2xl text-ink">Bildnachweise</h2>
          <p className="mt-3">
            Beispielbilder von Unsplash-Fotografinnen und -Fotografen (Platzhalter).
            Rechte an den Aufnahmen liegen bei den jeweiligen Urheberinnen und
            Urhebern. Endgültige Bildauswahl und Rechte werden vor Veröffentlichung
            final geklärt.
          </p>
        </div>

        <div>
          <h2 className="display text-2xl text-ink">Haftungsausschluss</h2>
          <p className="mt-3">
            Die Inhalte dieser Website wurden mit größter Sorgfalt erstellt. Für die
            Richtigkeit, Vollständigkeit und Aktualität kann jedoch keine Gewähr
            übernommen werden. Verweise auf externe Websites erfolgen ohne inhaltliche
            Verantwortung für die verlinkten Angebote.
          </p>
        </div>
      </div>
    </section>
  );
}
