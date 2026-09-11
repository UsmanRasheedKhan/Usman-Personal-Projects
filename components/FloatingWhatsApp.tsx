"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageCircle, X, ChevronRight } from "lucide-react";
import { BRAND_CONSTANTS } from "@/data/constants";

export const FloatingWhatsApp = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isDismissed, setIsDismissed] = useState(false);

  useEffect(() => {
    // Reveal pill after user scrolls slightly or after 1.5 seconds
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 1200);

    const onScroll = () => {
      if (window.scrollY > 150) {
        setIsVisible(true);
      }
    };

    window.addEventListener("scroll", onScroll);
    return () => {
      clearTimeout(timer);
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  if (isDismissed) return null;

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, y: 30, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 20, scale: 0.95 }}
          transition={{ type: "spring", stiffness: 300, damping: 25 }}
          className="fixed bottom-6 right-4 sm:right-6 z-40 max-w-sm"
        >
          <div className="relative group">
            {/* Ambient Glow */}
            <div className="absolute -inset-1 rounded-full bg-gradient-to-r from-accent-amber/40 to-emerald-500/30 blur-md opacity-70 group-hover:opacity-100 transition-opacity" />

            <div className="relative flex items-center gap-3 bg-surface-card/90 backdrop-blur-xl border border-white/15 px-4 py-2.5 rounded-full shadow-[0_10px_35px_rgba(0,0,0,0.6)]">
              {/* WhatsApp Icon with Status dot */}
              <div className="relative flex-shrink-0">
                <div className="w-10 h-10 rounded-full bg-emerald-500 flex items-center justify-center text-canvas-dark shadow-[0_0_15px_rgba(16,185,129,0.4)]">
                  <MessageCircle className="w-5 h-5 fill-canvas-dark" />
                </div>
                <span className="absolute bottom-0 right-0 w-3 h-3 rounded-full bg-white border-2 border-surface-card flex items-center justify-center">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                </span>
              </div>

              {/* Link CTA */}
              <a
                href={BRAND_CONSTANTS.whatsAppLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col text-left pr-1 hover:opacity-90 transition-opacity"
              >
                <div className="flex items-center gap-1.5">
                  <span className="text-xs font-bold text-text-primary uppercase tracking-wider">
                    Reserve & Order
                  </span>
                  <ChevronRight className="w-3.5 h-3.5 text-accent-amber group-hover:translate-x-0.5 transition-transform" />
                </div>
                <span className="text-[11px] text-accent-gold font-medium">
                  {BRAND_CONSTANTS.displayPhone}
                </span>
              </a>

              {/* Dismiss Button */}
              <button
                type="button"
                onClick={() => setIsDismissed(true)}
                aria-label="Dismiss WhatsApp pill"
                className="p-1 rounded-full text-text-muted hover:text-text-primary hover:bg-white/10 transition-colors ml-1"
              >
                <X className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default FloatingWhatsApp;
