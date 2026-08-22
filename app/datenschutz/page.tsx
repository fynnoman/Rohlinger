import type { Metadata } from "next";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Datenschutz",
  description: "Datenschutzhinweise der Steuerkanzlei Susanne Rohlinger.",
};

export default function Datenschutz() {
  return (
    <section className="mx-auto max-w-3xl px-6 pt-40 pb-24 sm:px-10">
      <p className="eyebrow">Rechtliches</p>
      <h1 className="display mt-6 h-hero-md text-ink">Datenschutzerklärung</h1>

      <div className="mt-14 space-y-10 text-[15.5px] leading-[1.75] text-ink-3">
        <p>
          Der Schutz Ihrer persönlichen Daten ist uns wichtig. Wir behandeln Ihre
          personenbezogenen Daten vertraulich und entsprechend den gesetzlichen
          Datenschutzvorschriften sowie dieser Datenschutzerklärung.
        </p>

        <div>
          <h2 className="display text-2xl text-ink">1. Verantwortliche Stelle</h2>
          <p className="mt-3">
            {site.legal}<br />
            {site.address.street}, {site.address.zip} {site.address.city}<br />
            Telefon {site.phone} · E-Mail {site.email}
          </p>
        </div>

        <div>
          <h2 className="display text-2xl text-ink">2. Erhebung und Speicherung personenbezogener Daten</h2>
          <p className="mt-3">
            Wenn Sie uns über das Kontaktformular oder per E-Mail eine Anfrage senden,
            werden die von Ihnen mitgeteilten Daten (Name, Kontaktdaten, Anliegen) zum
            Zweck der Bearbeitung der Anfrage gespeichert. Rechtsgrundlage ist Art. 6
            Abs. 1 lit. b DSGVO (Anbahnung eines Vertragsverhältnisses) bzw. lit. f
            DSGVO (berechtigtes Interesse an der Beantwortung).
          </p>
        </div>

        <div>
          <h2 className="display text-2xl text-ink">3. Server-Logs</h2>
          <p className="mt-3">
            Beim Besuch der Website werden automatisch Informationen (IP-Adresse,
            Browser, Uhrzeit) in sogenannten Server-Log-Dateien erhoben. Diese Daten
            sind nicht bestimmten Personen zuordenbar und dienen der technischen
            Sicherheit und Stabilität.
          </p>
        </div>

        <div>
          <h2 className="display text-2xl text-ink">4. Karten und externe Dienste</h2>
          <p className="mt-3">
            Auf der Kontaktseite ist ein Kartenausschnitt eingebettet. Beim Aufruf werden
            technisch notwendige Daten an den Kartenanbieter übermittelt. Näheres regeln
            die Datenschutzhinweise des jeweiligen Anbieters.
          </p>
        </div>

        <div>
          <h2 className="display text-2xl text-ink">5. Ihre Rechte</h2>
          <p className="mt-3">
            Sie haben jederzeit das Recht auf Auskunft, Berichtigung, Löschung,
            Einschränkung der Verarbeitung, Datenübertragbarkeit sowie Widerspruch
            gegen die Verarbeitung. Zudem können Sie sich bei der zuständigen
            Aufsichtsbehörde beschweren.
          </p>
        </div>

        <p className="text-[13px] text-smoke">
          Diese Erklärung ist ein rechtsverbindlicher Entwurf und wird vor
          Veröffentlichung final geprüft und ergänzt.
        </p>
      </div>
    </section>
  );
}
