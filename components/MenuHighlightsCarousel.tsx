"use client";

import React, { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight, MessageCircle, Sparkles, ArrowRight } from "lucide-react";
import { SIGNATURE_DRINKS, MenuItem } from "@/data/menu";
import { getWhatsAppOrderLink } from "@/data/constants";

export const MenuHighlightsCarousel = () => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (scrollContainerRef.current) {
      const scrollAmount = direction === "left" ? -340 : 340;
      scrollContainerRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" });
    }
  };

  return (
    <section className="relative py-20 overflow-hidden">
      {/* Background glow element */}
      <div className="absolute top-1/2 left-0 w-80 h-80 bg-accent-amber/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-accent-amber font-semibold mb-3">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Curated Selection</span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-medium tracking-tight text-text-primary">
              Signature Highlights
            </h2>
            <p className="text-text-muted text-sm sm:text-base mt-2 max-w-xl font-sans">
              Hand-pulled espresso shots, slow cold drips, and botanical refreshers balanced to perfection every evening.
            </p>
          </div>

          <div className="flex items-center gap-3">
            <Link
              href="/menu"
              className="inline-flex items-center gap-1.5 text-xs uppercase tracking-widest text-accent-gold hover:text-text-primary transition-colors font-semibold mr-2 group"
            >
              <span>View Full Menu</span>
              <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
            </Link>

            <button
              type="button"
              onClick={() => scroll("left")}
              aria-label="Previous items"
              className="w-10 h-10 rounded-full border border-white/10 bg-surface-card flex items-center justify-center text-text-muted hover:text-text-primary hover:border-accent-amber/50 hover:bg-surface-elevated transition-all"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              type="button"
              onClick={() => scroll("right")}
              aria-label="Next items"
              className="w-10 h-10 rounded-full border border-white/10 bg-surface-card flex items-center justify-center text-text-muted hover:text-text-primary hover:border-accent-amber/50 hover:bg-surface-elevated transition-all"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Horizontal Drag/Scroll Carousel */}
        <div
          ref={scrollContainerRef}
          className="flex gap-6 overflow-x-auto pb-8 pt-2 scrollbar-none snap-x snap-mandatory cursor-grab active:cursor-grabbing no-scrollbar -mx-4 px-4 sm:mx-0 sm:px-0"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          {SIGNATURE_DRINKS.map((item: MenuItem, index: number) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="flex-shrink-0 w-[280px] sm:w-[320px] snap-start group"
            >
              <div className="h-full flex flex-col rounded-2xl bg-surface-card border border-white/5 hover:border-accent-amber/30 transition-all duration-500 overflow-hidden hover:shadow-[0_15px_30px_rgba(0,0,0,0.5)] group-hover:-translate-y-1">
                {/* Image Container */}
                <div className="relative h-48 sm:h-52 w-full overflow-hidden bg-canvas-dark">
                  {item.image && (
                    <Image
                      src={item.image}
                      alt={item.name}
                      fill
                      sizes="(max-width: 768px) 280px, 320px"
                      className="object-cover object-center group-hover:scale-108 transition-transform duration-700 ease-out"
                    />
                  )}
                  {/* Subtle vignette */}
                  <div className="absolute inset-0 bg-gradient-to-t from-surface-card via-transparent to-black/30" />

                  {/* Badge */}
                  {item.badge && (
                    <div className="absolute top-3 left-3 px-2.5 py-1 rounded-full bg-accent-amber text-canvas-dark text-[10px] font-bold uppercase tracking-wider shadow-md">
                      {item.badge}
                    </div>
                  )}

                  {/* Price Tag */}
                  <div className="absolute bottom-3 right-3 px-3 py-1 rounded-full bg-canvas-dark/80 backdrop-blur-md border border-white/10 text-accent-gold font-serif text-sm font-semibold">
                    Rs. {item.price}
                  </div>
                </div>

                {/* Content */}
                <div className="p-5 flex flex-col flex-grow justify-between">
                  <div>
                    <span className="text-[10px] uppercase tracking-widest text-text-muted font-medium block mb-1">
                      {item.category.replace("-", " ")}
                    </span>
                    <h3 className="font-serif text-lg sm:text-xl font-medium text-text-primary group-hover:text-accent-gold transition-colors">
                      {item.name}
                    </h3>
                    {item.desc && (
                      <p className="text-text-muted text-xs leading-relaxed mt-2 line-clamp-2">
                        {item.desc}
                      </p>
                    )}
                  </div>

                  {/* Card Footer: WhatsApp Order Trigger */}
                  <div className="pt-5 mt-4 border-t border-white/5 flex items-center justify-between">
                    <span className="text-[11px] text-text-muted uppercase tracking-wider">
                      Prepared Fresh
                    </span>
                    <a
                      href={getWhatsAppOrderLink(item.name, item.category)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/5 hover:bg-accent-amber text-text-primary hover:text-canvas-dark text-xs font-semibold tracking-wide transition-all border border-white/10 hover:border-accent-amber"
                    >
                      <MessageCircle className="w-3.5 h-3.5" />
                      <span>Order</span>
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MenuHighlightsCarousel;
