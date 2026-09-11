import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, MapPin, Clock, Flame, Sparkles, MessageCircle, Compass, Award } from "lucide-react";
import { BRAND_CONSTANTS } from "@/data/constants";
import { ASSETS } from "@/data/assets";
import LiveStatusBadge from "@/components/LiveStatusBadge";
import MenuHighlightsCarousel from "@/components/MenuHighlightsCarousel";

export default function HomePage() {
  return (
    <div className="relative min-h-screen bg-canvas-dark">
      {/* 1. HERO SECTION */}
      <section className="relative min-h-[92vh] flex items-center justify-center pt-24 pb-16 overflow-hidden">
        {/* Cinematic Background Image with Gradient Overlay */}
        <div className="absolute inset-0 z-0">
          <Image
            src={ASSETS.hero}
            alt="Coffee RUNaWAY Artisan Brew Bar"
            fill
            priority
            quality={90}
            className="object-cover object-center scale-105 animate-pulse-slow"
          />
          {/* Multi-layered cinematic gradients */}
          <div className="absolute inset-0 bg-gradient-to-t from-canvas-dark via-canvas-dark/80 to-black/60" />
          <div className="absolute inset-0 bg-gradient-to-r from-canvas-dark/90 via-transparent to-canvas-dark/70" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-transparent via-canvas-dark/50 to-canvas-dark" />
        </div>

        {/* Hero Content Container */}
        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center">
          {/* Live Status Badge */}
          <div className="mb-6 transform hover:scale-105 transition-transform duration-300">
            <LiveStatusBadge showHoursDetail={true} />
          </div>

          {/* Micro Brand Pill */}
          <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-white/5 border border-white/10 text-[11px] uppercase tracking-widest text-accent-gold mb-6 backdrop-blur-md">
            <Flame className="w-3.5 h-3.5 text-accent-amber" />
            <span>Faisal Cantonment &bull; Artisanal Evening Studio</span>
          </div>

          {/* Main Headline */}
          <h1 className="font-serif text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-normal tracking-tight text-text-primary leading-[1.05] max-w-4xl">
            Late Nights. <br />
            <span className="italic font-light text-accent-gold">Precision Pours.</span>
          </h1>

          {/* Subheading / Tagline */}
          <p className="mt-6 text-base sm:text-lg md:text-xl text-text-muted font-sans font-normal max-w-2xl leading-relaxed">
            {BRAND_CONSTANTS.tagline} An intimate open-air sanctuary in Karachi dedicated to high-altitude single origins, layered cold brews, and gourmet evening bites.
          </p>

          {/* Dual CTAs */}
          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4 w-full max-w-md">
            <Link
              href="/menu"
              className="w-full sm:w-auto px-8 py-4 rounded-full bg-accent-amber text-canvas-dark text-xs sm:text-sm uppercase tracking-widest font-bold transition-all duration-300 hover:bg-accent-gold hover:shadow-[0_0_30px_rgba(212,141,59,0.5)] active:scale-95 flex items-center justify-center gap-2 group"
            >
              <span>Explore Menu</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>

            <Link
              href="/visit"
              className="w-full sm:w-auto px-8 py-4 rounded-full bg-surface-card/80 hover:bg-surface-elevated text-text-primary text-xs sm:text-sm uppercase tracking-widest font-semibold transition-all duration-300 border border-white/15 hover:border-accent-amber/50 backdrop-blur-md flex items-center justify-center gap-2 active:scale-95"
            >
              <MapPin className="w-4 h-4 text-accent-amber" />
              <span>Visit Us</span>
            </Link>
          </div>

          {/* Quick Metrics Strip */}
          <div className="mt-16 pt-8 border-t border-white/10 grid grid-cols-2 sm:grid-cols-3 gap-6 sm:gap-12 text-center">
            <div>
              <div className="font-serif text-2xl sm:text-3xl font-medium text-text-primary">5 PM – 2 AM</div>
              <div className="text-[10px] sm:text-xs uppercase tracking-widest text-text-muted mt-1">Daily Night Brews</div>
            </div>
            <div>
              <div className="font-serif text-2xl sm:text-3xl font-medium text-accent-gold">Open-Air</div>
              <div className="text-[10px] sm:text-xs uppercase tracking-widest text-text-muted mt-1">Cantonment Terrace</div>
            </div>
            <div className="col-span-2 sm:col-span-1">
              <div className="font-serif text-2xl sm:text-3xl font-medium text-text-primary">0300 1234567</div>
              <div className="text-[10px] sm:text-xs uppercase tracking-widest text-text-muted mt-1">Direct WhatsApp</div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. EXPERIENCE BENTO GRID */}
      <section className="py-24 relative overflow-hidden bg-surface-card/40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-xs uppercase tracking-widest text-accent-amber font-semibold">
              The Philosophy
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-medium tracking-tight text-text-primary mt-2">
              Boutique Roastery Experience
            </h2>
            <p className="text-text-muted text-sm sm:text-base mt-3">
              Crafted for those who refuse to settle for commercial beans and rushed cups.
            </p>
          </div>

          {/* Bento Grid Layout */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
            {/* Tile 1 (Large - 8 Cols): Open-Air Evenings */}
            <div className="md:col-span-12 lg:col-span-8 group relative rounded-3xl overflow-hidden min-h-[380px] sm:min-h-[460px] bg-surface-card border border-white/10 hover:border-accent-amber/40 transition-all duration-500 shadow-2xl flex flex-col justify-end p-6 sm:p-10">
              <Image
                src={ASSETS.outdoorAmbience}
                alt="Open-Air Evenings at Coffee RUNaWAY"
                fill
                sizes="(max-width: 1024px) 100vw, 66vw"
                className="object-cover object-center group-hover:scale-105 transition-transform duration-1000 ease-out"
              />
              {/* Gradient Scrim */}
              <div className="absolute inset-0 bg-gradient-to-t from-canvas-dark via-canvas-dark/60 to-transparent" />

              <div className="relative z-10 max-w-lg">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent-amber/20 border border-accent-amber/30 text-[10px] uppercase tracking-widest text-accent-gold mb-3 backdrop-blur-md">
                  <Compass className="w-3 h-3" />
                  <span>Atmosphere</span>
                </div>
                <h3 className="font-serif text-2xl sm:text-3xl md:text-4xl text-text-primary font-medium">
                  Open-Air Evenings Under the Karachi Sky
                </h3>
                <p className="text-text-muted text-xs sm:text-sm mt-3 leading-relaxed">
                  Step away from crowded enclosed malls. Our ambient outdoor patio in Faisal Cantonment offers gentle evening breezes, vintage warm filament lighting, and calm lo-fi soundscapes designed for conversations that run past midnight.
                </p>
                <div className="mt-5 flex items-center gap-4 text-xs font-semibold uppercase tracking-wider text-accent-gold">
                  <span className="flex items-center gap-1.5">
                    <Clock className="w-3.5 h-3.5 text-accent-amber" /> 5 PM to 2 AM
                  </span>
                  <span>&bull;</span>
                  <span className="flex items-center gap-1.5">
                    <MapPin className="w-3.5 h-3.5 text-accent-amber" /> ASF Rd, Faisal Cantt
                  </span>
                </div>
              </div>
            </div>

            {/* Tile 2 (4 Cols): Signature Crema */}
            <div className="md:col-span-6 lg:col-span-4 group relative rounded-3xl overflow-hidden min-h-[340px] sm:min-h-[460px] bg-surface-card border border-white/10 hover:border-accent-amber/40 transition-all duration-500 shadow-2xl flex flex-col justify-between p-6 sm:p-8">
              <Image
                src={ASSETS.v60Brew}
                alt="Signature Crema & Slow Pours"
                fill
                sizes="(max-width: 1024px) 50vw, 33vw"
                className="object-cover object-center group-hover:scale-105 transition-transform duration-1000 ease-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-canvas-dark via-canvas-dark/70 to-black/40" />

              <div className="relative z-10">
                <span className="inline-block px-3 py-1 rounded-full bg-white/10 border border-white/10 text-[10px] uppercase tracking-widest text-text-primary backdrop-blur-md">
                  Slow Bar & Espresso
                </span>
              </div>

              <div className="relative z-10">
                <h3 className="font-serif text-2xl sm:text-3xl text-text-primary font-medium">
                  Signature Crema
                </h3>
                <p className="text-text-muted text-xs sm:text-sm mt-2 leading-relaxed">
                  Dual-boiler temperature precision, calibrated grind distribution, and specialty roasted beans extracted with thick golden tiger-stripe crema.
                </p>
                <div className="mt-4 pt-4 border-t border-white/10 flex items-center justify-between text-xs text-accent-gold font-medium">
                  <span>9 Bar Extraction</span>
                  <span>100% Specialty Arabica</span>
                </div>
              </div>
            </div>

            {/* Tile 3 (Large - 12 Cols / Split View): Gourmet Bites */}
            <div className="md:col-span-12 group relative rounded-3xl overflow-hidden min-h-[320px] bg-surface-card border border-white/10 hover:border-accent-amber/40 transition-all duration-500 shadow-2xl p-6 sm:p-10 flex flex-col lg:flex-row items-center justify-between gap-8">
              <div className="relative z-10 max-w-xl">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent-amber/20 border border-accent-amber/30 text-[10px] uppercase tracking-widest text-accent-gold mb-3 backdrop-blur-md">
                  <Award className="w-3 h-3" />
                  <span>Artisanal Kitchen</span>
                </div>
                <h3 className="font-serif text-2xl sm:text-3xl md:text-4xl text-text-primary font-medium">
                  Gourmet Bites & Smashed Burgers
                </h3>
                <p className="text-text-muted text-xs sm:text-sm mt-3 leading-relaxed">
                  We believe great coffee deserves uncompromised food. Pair your cold brew with our Hawaiian beef burgers, hickory smoked patties, crispy wraps, and oven-fresh flaky croissants baked with European cultured butter.
                </p>
                <div className="mt-6 flex flex-wrap gap-3">
                  <span className="px-3 py-1 rounded-lg bg-canvas-dark border border-white/10 text-xs text-text-primary">
                    Hawaiian Beef Burgers
                  </span>
                  <span className="px-3 py-1 rounded-lg bg-canvas-dark border border-white/10 text-xs text-text-primary">
                    Chilli Cheese Dogs
                  </span>
                  <span className="px-3 py-1 rounded-lg bg-canvas-dark border border-white/10 text-xs text-text-primary">
                    Butter Croissants
                  </span>
                </div>
              </div>

              {/* Side Images Showcase */}
              <div className="relative w-full lg:w-96 h-56 sm:h-64 rounded-2xl overflow-hidden border border-white/10 shrink-0">
                <Image
                  src={ASSETS.burger}
                  alt="Gourmet Smashed Burger"
                  fill
                  sizes="(max-width: 1024px) 100vw, 400px"
                  className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-canvas-dark/80 via-transparent to-transparent" />
                <div className="absolute bottom-3 left-3 px-3 py-1 rounded-full bg-canvas-dark/80 backdrop-blur-md text-xs font-serif text-accent-gold border border-white/10">
                  Smashed to Order
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. SIGNATURE HIGHLIGHTS CAROUSEL */}
      <MenuHighlightsCarousel />

      {/* 4. DIRECT WHATSAPP RESERVATION CALLOUT BANNER */}
      <section className="py-20 relative overflow-hidden">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="relative rounded-3xl bg-gradient-to-b from-surface-card to-surface-elevated border border-accent-amber/30 p-8 sm:p-14 text-center overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.8)]">
            {/* Background Ambient Glow */}
            <div className="absolute top-0 right-1/4 w-96 h-96 bg-accent-amber/10 blur-[100px] rounded-full pointer-events-none" />

            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-accent-amber/10 border border-accent-amber/30 text-xs uppercase tracking-widest text-accent-amber font-semibold mb-4">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Evening Reservations & Inquiries</span>
            </div>

            <h2 className="font-serif text-3xl sm:text-5xl font-medium tracking-tight text-text-primary max-w-2xl mx-auto">
              Ready to Escape the Ordinary?
            </h2>

            <p className="text-text-muted text-sm sm:text-base mt-4 max-w-xl mx-auto leading-relaxed">
              Whether you are planning a late-night coffee date, a group gathering, or want a customized slow pour, our baristas are ready to welcome you.
            </p>

            <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href={BRAND_CONSTANTS.whatsAppLink}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-8 py-4 rounded-full bg-accent-amber text-canvas-dark text-xs sm:text-sm uppercase tracking-widest font-bold transition-all duration-300 hover:bg-accent-gold hover:shadow-[0_0_25px_rgba(212,141,59,0.5)] active:scale-95 flex items-center justify-center gap-2"
              >
                <MessageCircle className="w-4 h-4 fill-canvas-dark" />
                <span>WhatsApp: {BRAND_CONSTANTS.displayPhone}</span>
              </a>

              <Link
                href="/visit"
                className="w-full sm:w-auto px-8 py-4 rounded-full bg-white/5 hover:bg-white/10 text-text-primary text-xs sm:text-sm uppercase tracking-widest font-semibold transition-all border border-white/10 flex items-center justify-center gap-2"
              >
                <MapPin className="w-4 h-4 text-accent-amber" />
                <span>View Map Coordinates</span>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
