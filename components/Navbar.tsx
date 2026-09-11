"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Coffee, MessageCircle, Menu as MenuIcon, X, MapPin, Clock } from "lucide-react";
import { BRAND_CONSTANTS } from "@/data/constants";
import LiveStatusBadge from "./LiveStatusBadge";

export const Navbar = () => {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [pathname]);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "The Menu", href: "/menu" },
    { name: "Visit & Hours", href: "/visit" },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled
            ? "bg-canvas-dark/85 backdrop-blur-xl border-b border-white/5 py-3 shadow-[0_4px_30px_rgba(0,0,0,0.5)]"
            : "bg-transparent py-5"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Brand Logo */}
            <Link href="/" className="group flex items-center gap-3">
              <div className="w-10 h-10 rounded-full border border-accent-amber/40 bg-surface-card flex items-center justify-center transition-transform duration-300 group-hover:scale-105 group-hover:border-accent-amber shadow-[0_0_15px_rgba(212,141,59,0.15)]">
                <Coffee className="w-5 h-5 text-accent-amber transition-colors group-hover:text-accent-gold" />
              </div>
              <div className="flex flex-col">
                <span className="font-serif text-xl sm:text-2xl font-bold tracking-tight text-text-primary group-hover:text-accent-gold transition-colors">
                  Coffee <span className="text-accent-amber font-light tracking-wide italic">RUNaWAY</span>
                </span>
                <span className="text-[10px] tracking-widest uppercase text-text-muted">
                  Karachi • Open-Air Roastery
                </span>
              </div>
            </Link>

            {/* Desktop Navigation Links */}
            <nav className="hidden md:flex items-center gap-1 bg-surface-card/60 backdrop-blur-md px-3 py-1.5 rounded-full border border-white/5 shadow-inner">
              {navLinks.map((link) => {
                const isActive = pathname === link.href;
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={`relative px-4 py-1.5 rounded-full text-xs uppercase tracking-widest transition-colors font-medium ${
                      isActive
                        ? "text-text-primary font-semibold"
                        : "text-text-muted hover:text-text-primary"
                    }`}
                  >
                    {isActive && (
                      <motion.div
                        layoutId="navbar-active-pill"
                        className="absolute inset-0 bg-accent-amber/20 border border-accent-amber/40 rounded-full shadow-[0_0_12px_rgba(212,141,59,0.2)]"
                        transition={{ type: "spring", stiffness: 350, damping: 30 }}
                      />
                    )}
                    <span className="relative z-10">{link.name}</span>
                  </Link>
                );
              })}
            </nav>

            {/* Actions & WhatsApp CTA */}
            <div className="hidden lg:flex items-center gap-4">
              <LiveStatusBadge />

              <a
                href={BRAND_CONSTANTS.whatsAppLink}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent-amber text-canvas-dark text-xs uppercase tracking-wider font-bold transition-all duration-300 hover:bg-accent-gold hover:shadow-[0_0_20px_rgba(212,141,59,0.4)] active:scale-95"
              >
                <MessageCircle className="w-4 h-4 fill-canvas-dark" />
                <span>Order on WhatsApp</span>
              </a>
            </div>

            {/* Mobile Menu Trigger */}
            <div className="flex md:hidden items-center gap-3">
              <a
                href={BRAND_CONSTANTS.whatsAppLink}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Order on WhatsApp"
                className="p-2 rounded-full bg-accent-amber/15 border border-accent-amber/40 text-accent-amber hover:bg-accent-amber hover:text-canvas-dark transition-colors"
              >
                <MessageCircle className="w-4 h-4" />
              </a>

              <button
                type="button"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
                className="p-2.5 rounded-full bg-surface-card border border-white/10 text-text-primary hover:border-accent-amber/50 transition-colors"
              >
                {mobileMenuOpen ? <X className="w-5 h-5" /> : <MenuIcon className="w-5 h-5" />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Navigation */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-x-0 top-[68px] z-40 bg-canvas-dark/95 backdrop-blur-2xl border-b border-white/10 p-6 md:hidden shadow-2xl"
          >
            <div className="flex flex-col gap-4">
              <div className="pb-2">
                <LiveStatusBadge className="w-full justify-center" />
              </div>

              <div className="flex flex-col gap-1 border-y border-white/5 py-4">
                {navLinks.map((link) => {
                  const isActive = pathname === link.href;
                  return (
                    <Link
                      key={link.href}
                      href={link.href}
                      onClick={() => setMobileMenuOpen(false)}
                      className={`flex items-center justify-between px-4 py-3 rounded-lg text-sm uppercase tracking-widest transition-colors ${
                        isActive
                          ? "bg-accent-amber/15 text-accent-gold font-semibold border-l-2 border-accent-amber"
                          : "text-text-muted hover:text-text-primary hover:bg-surface-card/40"
                      }`}
                    >
                      <span>{link.name}</span>
                      {isActive && <span className="w-1.5 h-1.5 rounded-full bg-accent-amber" />}
                    </Link>
                  );
                })}
              </div>

              {/* Mobile Quick Info & WhatsApp Button */}
              <div className="space-y-3 pt-1">
                <div className="flex items-center gap-2.5 text-xs text-text-muted px-2">
                  <Clock className="w-4 h-4 text-accent-amber" />
                  <span>{BRAND_CONSTANTS.operatingHours}</span>
                </div>
                <div className="flex items-center gap-2.5 text-xs text-text-muted px-2">
                  <MapPin className="w-4 h-4 text-accent-amber" />
                  <span className="truncate">{BRAND_CONSTANTS.shortAddress}</span>
                </div>

                <a
                  href={BRAND_CONSTANTS.whatsAppLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-center gap-2.5 py-3 rounded-xl bg-accent-amber text-canvas-dark text-xs uppercase tracking-wider font-bold shadow-[0_0_20px_rgba(212,141,59,0.3)] hover:bg-accent-gold transition-colors"
                >
                  <MessageCircle className="w-4 h-4 fill-canvas-dark" />
                  <span>WhatsApp: {BRAND_CONSTANTS.displayPhone}</span>
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
