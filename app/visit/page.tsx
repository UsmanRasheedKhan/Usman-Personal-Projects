import React from "react";
import { Metadata } from "next";
import { MapPin, Clock, Phone, MessageCircle, Navigation, ExternalLink, ShieldCheck, Car, Wind, Sparkles } from "lucide-react";
import { BRAND_CONSTANTS } from "@/data/constants";
import LiveStatusBadge from "@/components/LiveStatusBadge";

export const metadata: Metadata = {
  title: `Visit & Hours — ${BRAND_CONSTANTS.name} | Faisal Cantonment Karachi`,
  description: `Find us at V4XQ+CC7, ASF Rd, Faisal Cantonment, Karachi. Open daily 5:00 PM – 2:00 AM. Get directions, view maps, and connect on WhatsApp.`,
};

export default function VisitPage() {
  const daysOfWeek = [
    { day: "Monday", hours: "5:00 PM – 2:00 AM" },
    { day: "Tuesday", hours: "5:00 PM – 2:00 AM" },
    { day: "Wednesday", hours: "5:00 PM – 2:00 AM" },
    { day: "Thursday", hours: "5:00 PM – 2:00 AM" },
    { day: "Friday", hours: "5:00 PM – 2:00 AM" },
    { day: "Saturday", hours: "5:00 PM – 2:00 AM" },
    { day: "Sunday", hours: "5:00 PM – 2:00 AM" },
  ];

  return (
    <div className="min-h-screen bg-canvas-dark pt-28 pb-24 relative overflow-hidden">
      {/* Ambient background glows */}
      <div className="absolute top-28 left-1/4 w-96 h-96 bg-accent-amber/5 blur-[130px] rounded-full pointer-events-none" />
      <div className="absolute bottom-20 right-1/4 w-96 h-96 bg-accent-gold/5 blur-[150px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent-amber/10 border border-accent-amber/20 text-xs uppercase tracking-widest text-accent-amber font-semibold mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Evening Destination</span>
          </div>

          <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl font-medium tracking-tight text-text-primary">
            Visit & Hours
          </h1>

          <p className="text-text-muted text-sm sm:text-base mt-3 max-w-xl mx-auto">
            Escape to our tranquil open-air courtyard in Faisal Cantonment. We brew every evening until 2:00 AM.
          </p>

          <div className="mt-5">
            <LiveStatusBadge showHoursDetail={true} />
          </div>
        </div>

        {/* Main Grid: Details + Interactive Map */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column (5 Cols): Address Card, Hours Table & Action Buttons */}
          <div className="lg:col-span-5 space-y-6">
            {/* Exact Address Card */}
            <div className="rounded-3xl bg-surface-card border border-white/10 p-6 sm:p-8 shadow-xl relative overflow-hidden">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-2xl bg-accent-amber/15 border border-accent-amber/30 flex items-center justify-center shrink-0">
                  <MapPin className="w-6 h-6 text-accent-amber" />
                </div>
                <div>
                  <span className="text-[10px] uppercase tracking-widest text-accent-gold font-semibold block">
                    Exact Location & Plus Code
                  </span>
                  <h2 className="font-serif text-2xl text-text-primary font-medium mt-0.5">
                    Faisal Cantonment
                  </h2>
                  <p className="text-text-muted text-sm mt-2 leading-relaxed">
                    {BRAND_CONSTANTS.address}
                  </p>
                  <div className="mt-3 inline-block px-3 py-1 rounded-md bg-canvas-dark border border-white/10 font-mono text-xs text-accent-gold">
                    Coordinates: {BRAND_CONSTANTS.coordinates}
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-3">
                <a
                  href={BRAND_CONSTANTS.googleMapsLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex flex-col items-center justify-center gap-1.5 p-3 rounded-2xl bg-white/5 hover:bg-accent-amber/20 border border-white/10 hover:border-accent-amber/40 text-text-primary text-xs font-semibold tracking-wide transition-all group"
                >
                  <Navigation className="w-4 h-4 text-accent-amber group-hover:scale-110 transition-transform" />
                  <span>Google Maps</span>
                </a>

                <a
                  href={`tel:${BRAND_CONSTANTS.phone.replace(/\s+/g, '')}`}
                  className="flex flex-col items-center justify-center gap-1.5 p-3 rounded-2xl bg-white/5 hover:bg-accent-amber/20 border border-white/10 hover:border-accent-amber/40 text-text-primary text-xs font-semibold tracking-wide transition-all group"
                >
                  <Phone className="w-4 h-4 text-accent-amber group-hover:scale-110 transition-transform" />
                  <span>Call Us</span>
                </a>

                <a
                  href={BRAND_CONSTANTS.whatsAppLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex flex-col items-center justify-center gap-1.5 p-3 rounded-2xl bg-emerald-950/40 hover:bg-emerald-900/50 border border-emerald-500/30 hover:border-emerald-500 text-emerald-300 text-xs font-semibold tracking-wide transition-all group"
                >
                  <MessageCircle className="w-4 h-4 text-emerald-400 group-hover:scale-110 transition-transform" />
                  <span>WhatsApp</span>
                </a>
              </div>
            </div>

            {/* Operating Hours Table */}
            <div className="rounded-3xl bg-surface-card border border-white/10 p-6 sm:p-8 shadow-xl">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-xl bg-surface-elevated border border-white/10 flex items-center justify-center">
                  <Clock className="w-5 h-5 text-accent-amber" />
                </div>
                <div>
                  <h3 className="font-serif text-xl text-text-primary font-medium">
                    Weekly Schedule
                  </h3>
                  <span className="text-[10px] uppercase tracking-widest text-text-muted">
                    Open Every Single Evening
                  </span>
                </div>
              </div>

              <div className="space-y-3 divide-y divide-white/5 text-sm">
                {daysOfWeek.map((item) => (
                  <div key={item.day} className="pt-3 first:pt-0 flex items-center justify-between">
                    <span className="text-text-muted font-medium">{item.day}</span>
                    <span className="font-serif text-text-primary font-medium tracking-wide">
                      {item.hours}
                    </span>
                  </div>
                ))}
              </div>

              <div className="mt-6 pt-4 border-t border-white/5 flex items-center justify-between text-xs text-accent-gold">
                <span>Last Call for Espresso & Kitchen</span>
                <span className="font-semibold">1:30 AM</span>
              </div>
            </div>

            {/* Guest Experience Amenities */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              <div className="p-4 rounded-2xl bg-surface-card/60 border border-white/5 flex items-center gap-3">
                <Car className="w-5 h-5 text-accent-amber shrink-0" />
                <span className="text-xs text-text-muted">Spacious Street Parking</span>
              </div>
              <div className="p-4 rounded-2xl bg-surface-card/60 border border-white/5 flex items-center gap-3">
                <Wind className="w-5 h-5 text-accent-amber shrink-0" />
                <span className="text-xs text-text-muted">Open-Air Seating</span>
              </div>
              <div className="p-4 rounded-2xl bg-surface-card/60 border border-white/5 flex items-center gap-3">
                <ShieldCheck className="w-5 h-5 text-accent-amber shrink-0" />
                <span className="text-xs text-text-muted">Secure Cantonment</span>
              </div>
            </div>
          </div>

          {/* Right Column (7 Cols): Interactive Google Maps Iframe */}
          <div className="lg:col-span-7 space-y-4">
            <div className="rounded-3xl bg-surface-card border border-white/10 overflow-hidden shadow-2xl relative min-h-[480px] sm:min-h-[580px] flex flex-col">
              {/* Map Header bar */}
              <div className="p-4 sm:p-5 bg-surface-elevated/80 backdrop-blur-md border-b border-white/10 flex items-center justify-between">
                <div className="flex items-center gap-2.5">
                  <span className="w-3 h-3 rounded-full bg-accent-amber animate-pulse" />
                  <span className="text-xs uppercase tracking-widest text-text-primary font-bold">
                    Satellite & Street Navigation
                  </span>
                </div>

                <a
                  href={BRAND_CONSTANTS.googleMapsLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs text-accent-gold hover:text-text-primary uppercase tracking-wider transition-colors font-medium"
                >
                  <span>Open Fullscreen</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>

              {/* Map Iframe */}
              <div className="relative flex-grow w-full h-[400px] sm:h-[500px]">
                <iframe
                  title="Coffee RUNaWAY Google Maps Location"
                  src="https://maps.google.com/maps?q=V4XQ%2BCC7%2C%20ASF%20Rd%2C%20Faisal%20Cantonment%2C%20Karachi&t=&z=16&ie=UTF8&iwloc=&output=embed"
                  width="100%"
                  height="100%"
                  style={{ border: 0, filter: "invert(90%) hue-rotate(180deg) contrast(90%)" }}
                  allowFullScreen={false}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="absolute inset-0 w-full h-full"
                />
              </div>

              {/* Driving Directions Helper */}
              <div className="p-5 bg-surface-card border-t border-white/5">
                <h4 className="text-xs font-semibold uppercase tracking-widest text-text-primary mb-1">
                  Directions to Faisal Cantonment
                </h4>
                <p className="text-xs text-text-muted leading-relaxed">
                  Located along ASF Road in Faisal Cantonment. If you are navigating via Shahrah-e-Faisal or Airport Road, follow directions toward ASF Headquarters / Faisal Cantt. Use Plus Code <span className="text-accent-gold font-mono font-medium">V4XQ+CC7</span> in Google Maps for pin-point accuracy.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
