import type { Metadata } from "next";
import { Cormorant_Garamond, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import { BRAND_CONSTANTS } from "@/data/constants";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-serif",
  display: "swap",
});

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: "--font-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: `${BRAND_CONSTANTS.name} — Artisanal Evening Roastery & Kitchen | Karachi`,
  description: `${BRAND_CONSTANTS.tagline} Located at Faisal Cantonment, Karachi. Serving precision espresso, slow pour-overs, gourmet smashed burgers, and evening ambiance from 5:00 PM to 2:00 AM daily.`,
  keywords: [
    "Coffee RUNaWAY",
    "Specialty Coffee Karachi",
    "Faisal Cantonment Cafe",
    "Karachi Evening Cafe",
    "V60 Pour Over Karachi",
    "Artisanal Coffee Studio",
    "Late Night Coffee Karachi",
    "Smashed Burgers Karachi"
  ],
  authors: [{ name: "Coffee RUNaWAY" }],
  openGraph: {
    title: `${BRAND_CONSTANTS.name} — Late Nights. Precision Pours.`,
    description: "Boutique open-air artisanal evening cafe in Faisal Cantonment, Karachi.",
    url: "https://coffeerunaway.com",
    siteName: BRAND_CONSTANTS.name,
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${cormorant.variable} ${plusJakarta.variable} dark`}>
      <body className="min-h-screen bg-canvas-dark text-text-primary antialiased flex flex-col relative selection:bg-accent-amber selection:text-canvas-dark">
        {/* Inline SVG noise filter texture overlay for tactile, editorial film grain effect */}
        <div className="noise-overlay" aria-hidden="true">
          <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
            <filter id="noiseFilter">
              <feTurbulence
                type="fractalNoise"
                baseFrequency="0.8"
                numOctaves="3"
                stitchTiles="stitch"
              />
              <feColorMatrix
                type="matrix"
                values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 0.8 0"
              />
            </filter>
            <rect width="100%" height="100%" filter="url(#noiseFilter)" />
          </svg>
        </div>

        {/* Global Navigation */}
        <Navbar />

        {/* Main Content */}
        <main className="flex-grow">{children}</main>

        {/* Global Footer */}
        <Footer />

        {/* Persistent Floating Reservation Bar */}
        <FloatingWhatsApp />
      </body>
    </html>
  );
}
