import React from "react";
import Link from "next/link";
import { Coffee, MessageCircle, MapPin, Clock, Phone, ArrowUpRight } from "lucide-react";
import { BRAND_CONSTANTS } from "@/data/constants";

export const Footer = () => {
  return (
    <footer className="relative bg-surface-card border-t border-white/5 pt-16 pb-28 md:pb-16 text-text-primary overflow-hidden">
      {/* Subtle radial background glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-32 bg-accent-amber/5 blur-3xl pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-white/5">
          {/* Brand Col (5 cols) */}
          <div className="lg:col-span-5 space-y-4">
            <Link href="/" className="inline-flex items-center gap-3">
              <div className="w-10 h-10 rounded-full border border-accent-amber/40 bg-canvas-dark flex items-center justify-center shadow-[0_0_15px_rgba(212,141,59,0.15)]">
                <Coffee className="w-5 h-5 text-accent-amber" />
              </div>
              <span className="font-serif text-2xl font-bold tracking-tight text-text-primary">
                Coffee <span className="text-accent-amber font-light italic">RUNaWAY</span>
              </span>
            </Link>

            <p className="text-text-muted text-sm leading-relaxed max-w-md font-sans">
              An artisanal open-air evening coffee roastery and kitchen in Faisal Cantonment, Karachi.
              Escape the mundane, embrace late-night brews, and experience precision extraction.
            </p>

            <div className="pt-2">
              <span className="text-xs uppercase tracking-widest text-accent-gold font-medium block mb-1">
                Philosophy
              </span>
              <p className="text-xs text-text-muted italic">
                &ldquo;{BRAND_CONSTANTS.tagline}&rdquo;
              </p>
            </div>
          </div>

          {/* Quick Navigation (2 cols) */}
          <div className="lg:col-span-2 space-y-4">
            <h3 className="text-xs font-semibold uppercase tracking-widest text-text-primary">
              Navigation
            </h3>
            <ul className="space-y-2.5 text-xs tracking-wider uppercase">
              <li>
                <Link href="/" className="text-text-muted hover:text-accent-gold transition-colors inline-flex items-center gap-1">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/menu" className="text-text-muted hover:text-accent-gold transition-colors inline-flex items-center gap-1">
                  The Menu
                </Link>
              </li>
              <li>
                <Link href="/visit" className="text-text-muted hover:text-accent-gold transition-colors inline-flex items-center gap-1">
                  Visit & Hours
                </Link>
              </li>
              <li>
                <a
                  href={BRAND_CONSTANTS.googleMapsLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-text-muted hover:text-accent-gold transition-colors inline-flex items-center gap-1"
                >
                  Location Pin <ArrowUpRight className="w-3 h-3" />
                </a>
              </li>
            </ul>
          </div>

          {/* Operating Schedule & Contact (5 cols) */}
          <div className="lg:col-span-5 space-y-4">
            <h3 className="text-xs font-semibold uppercase tracking-widest text-text-primary">
              Evening Roastery & Kitchen
            </h3>

            <div className="space-y-3 bg-canvas-dark/60 p-4 rounded-xl border border-white/5">
              <div className="flex items-start gap-3 text-xs">
                <Clock className="w-4 h-4 text-accent-amber shrink-0 mt-0.5" />
                <div>
                  <span className="font-semibold text-text-primary block">Operating Hours</span>
                  <span className="text-text-muted">{BRAND_CONSTANTS.operatingHours}</span>
                </div>
              </div>

              <div className="flex items-start gap-3 text-xs">
                <MapPin className="w-4 h-4 text-accent-amber shrink-0 mt-0.5" />
                <div>
                  <span className="font-semibold text-text-primary block">Cantonment Location</span>
                  <span className="text-text-muted">{BRAND_CONSTANTS.address}</span>
                </div>
              </div>

              <div className="flex items-start gap-3 text-xs">
                <Phone className="w-4 h-4 text-accent-amber shrink-0 mt-0.5" />
                <div className="w-full flex items-center justify-between">
                  <div>
                    <span className="font-semibold text-text-primary block">One-Tap Inquiries</span>
                    <a
                      href={`tel:${BRAND_CONSTANTS.phone.replace(/\s+/g, '')}`}
                      className="text-text-muted hover:text-accent-gold transition-colors"
                    >
                      {BRAND_CONSTANTS.displayPhone}
                    </a>
                  </div>
                  <a
                    href={BRAND_CONSTANTS.whatsAppLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-accent-amber/20 hover:bg-accent-amber text-accent-gold hover:text-canvas-dark border border-accent-amber/30 text-[11px] font-bold tracking-wider transition-all"
                  >
                    <MessageCircle className="w-3 h-3" />
                    <span>WhatsApp</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Sub-footer Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-text-muted">
          <p>© {new Date().getFullYear()} Coffee RUNaWAY. All rights reserved.</p>
          <div className="flex items-center gap-6 text-[11px] tracking-widest uppercase">
            <span>Faisal Cantonment</span>
            <span>•</span>
            <span>Artisanal Specialty Coffee</span>
            <span>•</span>
            <span>Karachi</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
