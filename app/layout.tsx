import type { Metadata } from "next";
import { Instrument_Serif, Manrope } from "next/font/google";
import "./globals.css";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { CursorGlow } from "@/components/CursorGlow";
import { site } from "@/lib/site";

const instrumentSerif = Instrument_Serif({
  variable: "--font-instrument-serif",
  subsets: ["latin"],
  weight: ["400"],
  style: ["normal", "italic"],
  display: "swap",
});

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://stb-rohlinger.de"),
  title: {
    default: `${site.legal} · Steuerberatung Wadgassen`,
    template: `%s · ${site.legal}`,
  },
  description:
    "Steuerkanzlei in Wadgassen für Unternehmen, Freiberufler, Existenzgründer und Privatpersonen. Präzise. Persönlich. Verlässlich.",
  applicationName: site.legal,
  authors: [{ name: site.name }],
  keywords: [
    "Steuerberater Wadgassen",
    "Steuerberatung Saarland",
    "Susanne Rohlinger",
    "Jahresabschluss",
    "Lohnbuchführung",
    "Unternehmensnachfolge",
    "Existenzgründerberatung Saarland",
    "DATEV Kanzlei",
  ],
  openGraph: {
    type: "website",
    locale: "de_DE",
    title: `${site.legal} · Steuerberatung Wadgassen`,
    description:
      "Steuerkanzlei in Wadgassen für Unternehmen, Freiberufler und Existenzgründer. Präzise. Persönlich. Verlässlich.",
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="de" className={`${instrumentSerif.variable} ${manrope.variable}`}>
      <body className="antialiased">
        <CursorGlow />
        <Nav />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
