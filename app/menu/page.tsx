"use client";

import React, { useState, useMemo, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Search, MessageCircle, X, Sparkles, SlidersHorizontal, Utensils, Coffee } from "lucide-react";
import { MENU_ITEMS, MENU_CATEGORIES, MenuCategoryId, MenuItem } from "@/data/menu";
import { BRAND_CONSTANTS, getWhatsAppOrderLink } from "@/data/constants";

export default function MenuPage() {
  const [selectedCategory, setSelectedCategory] = useState<MenuCategoryId>("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [debouncedQuery, setDebouncedQuery] = useState("");

  // Debounce search query
  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedQuery(searchQuery);
    }, 250);
    return () => clearTimeout(handler);
  }, [searchQuery]);

  // Filter items based on active category and search string
  const filteredItems = useMemo(() => {
    return MENU_ITEMS.filter((item) => {
      const matchesCategory =
        selectedCategory === "all" || item.category === selectedCategory;

      const query = debouncedQuery.toLowerCase().trim();
      const matchesSearch =
        query === "" ||
        item.name.toLowerCase().includes(query) ||
        (item.desc && item.desc.toLowerCase().includes(query)) ||
        (item.badge && item.badge.toLowerCase().includes(query));

      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, debouncedQuery]);

  const activeCategoryMeta = MENU_CATEGORIES.find(
    (cat) => cat.id === selectedCategory
  );

  return (
    <div className="min-h-screen bg-canvas-dark pt-28 pb-24 relative overflow-hidden">
      {/* Background glow atmosphere */}
      <div className="absolute top-20 right-10 w-96 h-96 bg-accent-amber/5 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-40 left-10 w-96 h-96 bg-accent-gold/5 blur-[140px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Page Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent-amber/10 border border-accent-amber/20 text-xs uppercase tracking-widest text-accent-amber font-semibold mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Artisanal Kitchen & Roastery</span>
          </div>
          <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl font-medium tracking-tight text-text-primary">
            The Full Menu
          </h1>
          <p className="text-text-muted text-sm sm:text-base mt-3 max-w-xl mx-auto">
            From calibrated espresso shots to late-night smashed burgers and chilled botanical mocktails. Freshly prepared to order.
          </p>
        </div>

        {/* Real-Time Search & Stats Bar */}
        <div className="max-w-2xl mx-auto mb-8">
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-text-muted">
              <Search className="w-4 h-4 text-accent-amber" />
            </div>
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search drinks, burgers, shakes, or ingredients..."
              className="w-full pl-11 pr-10 py-3.5 rounded-full bg-surface-card border border-white/10 text-text-primary placeholder:text-text-muted/60 text-sm focus:outline-none focus:border-accent-amber/60 focus:ring-1 focus:ring-accent-amber/60 shadow-[0_4px_20px_rgba(0,0,0,0.4)] transition-all"
            />
            {searchQuery && (
              <button
                type="button"
                onClick={() => setSearchQuery("")}
                aria-label="Clear search"
                className="absolute inset-y-0 right-0 pr-3.5 flex items-center text-text-muted hover:text-text-primary transition-colors"
              >
                <X className="w-4 h-4" />
              </button>
            )}
          </div>
        </div>

        {/* Sticky Sub-Navigation Category Filter */}
        <div className="sticky top-[68px] z-30 py-3 bg-canvas-dark/90 backdrop-blur-xl border-y border-white/5 -mx-4 px-4 sm:mx-0 sm:px-0 mb-10">
          <div className="flex items-center gap-2 overflow-x-auto pb-1 scrollbar-none no-scrollbar">
            {MENU_CATEGORIES.map((category) => {
              const isSelected = selectedCategory === category.id;
              return (
                <button
                  key={category.id}
                  type="button"
                  onClick={() => setSelectedCategory(category.id)}
                  className={`relative px-4 py-2 rounded-full text-xs font-medium uppercase tracking-wider whitespace-nowrap transition-colors flex-shrink-0 ${
                    isSelected
                      ? "text-canvas-dark font-bold"
                      : "text-text-muted hover:text-text-primary bg-surface-card/60 hover:bg-surface-elevated border border-white/5"
                  }`}
                >
                  {isSelected && (
                    <motion.div
                      layoutId="menu-category-active-pill"
                      className="absolute inset-0 bg-accent-amber rounded-full shadow-[0_0_15px_rgba(212,141,59,0.4)]"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                  <span className="relative z-10">{category.label}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Current Category Info & Count */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-8 pb-4 border-b border-white/5">
          <div>
            <h2 className="font-serif text-2xl text-text-primary font-medium">
              {activeCategoryMeta?.label}
            </h2>
            {activeCategoryMeta?.description && (
              <p className="text-text-muted text-xs sm:text-sm mt-0.5">
                {activeCategoryMeta.description}
              </p>
            )}
          </div>
          <div className="text-xs uppercase tracking-widest text-text-muted font-medium">
            Showing <span className="text-accent-gold font-bold">{filteredItems.length}</span> items
          </div>
        </div>

        {/* Empty State */}
        {filteredItems.length === 0 && (
          <div className="py-20 text-center rounded-3xl bg-surface-card/40 border border-white/5 p-8 max-w-md mx-auto">
            <Coffee className="w-10 h-10 text-accent-amber/50 mx-auto mb-3" />
            <h3 className="font-serif text-xl text-text-primary">No items found</h3>
            <p className="text-text-muted text-xs mt-1">
              We couldn&apos;t find any offerings matching &ldquo;{searchQuery}&rdquo;.
            </p>
            <button
              type="button"
              onClick={() => {
                setSearchQuery("");
                setSelectedCategory("all");
              }}
              className="mt-5 px-5 py-2 rounded-full bg-accent-amber text-canvas-dark text-xs uppercase font-bold tracking-wider hover:bg-accent-gold transition-colors"
            >
              Reset Filters
            </button>
          </div>
        )}

        {/* Menu Items Editorial Grid (2 or 3 columns) */}
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          <AnimatePresence>
            {filteredItems.map((item: MenuItem, index: number) => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.35, delay: index * 0.03 }}
                className="group relative flex flex-col justify-between rounded-2xl bg-surface-card border border-white/5 hover:border-accent-amber/40 p-5 sm:p-6 transition-all duration-300 hover:shadow-[0_10px_25px_rgba(0,0,0,0.5)] hover:-translate-y-1"
              >
                <div>
                  {/* Top Bar: Category pill & Badge */}
                  <div className="flex items-center justify-between gap-2 mb-3">
                    <span className="text-[10px] uppercase tracking-widest text-text-muted">
                      {item.category.replace("-", " ")}
                    </span>
                    {item.badge && (
                      <span className="px-2 py-0.5 rounded-md bg-accent-amber/20 border border-accent-amber/40 text-accent-gold text-[10px] font-bold uppercase tracking-wider">
                        {item.badge}
                      </span>
                    )}
                  </div>

                  {/* Item Name & Price */}
                  <div className="flex items-start justify-between gap-3">
                    <h3 className="font-serif text-xl sm:text-2xl font-medium text-text-primary group-hover:text-accent-gold transition-colors">
                      {item.name}
                    </h3>
                    <div className="text-right shrink-0">
                      <span className="font-serif text-lg sm:text-xl font-semibold text-accent-gold">
                        Rs. {item.price}
                      </span>
                    </div>
                  </div>

                  {/* Description note */}
                  {item.desc ? (
                    <p className="text-text-muted text-xs leading-relaxed mt-2.5">
                      {item.desc}
                    </p>
                  ) : (
                    <p className="text-text-muted/60 text-xs italic mt-2.5">
                      Crafted daily in our open-air Cantonment roastery kitchen.
                    </p>
                  )}
                </div>

                {/* Bottom Action: WhatsApp to Order */}
                <div className="pt-5 mt-5 border-t border-white/5 flex items-center justify-between">
                  <span className="text-[10px] uppercase tracking-wider text-text-muted">
                    Order at Counter / Table
                  </span>

                  <a
                    href={getWhatsAppOrderLink(item.name, item.category)}
                    target="_blank"
                    rel="noopener noreferrer"
                    title={`Inquire or order ${item.name} on WhatsApp`}
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-surface-elevated hover:bg-accent-amber text-accent-gold hover:text-canvas-dark text-xs font-semibold tracking-wide transition-all border border-white/10 hover:border-accent-amber shadow-sm group/btn"
                  >
                    <MessageCircle className="w-3.5 h-3.5" />
                    <span>WhatsApp</span>
                  </a>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Bottom Notice */}
        <div className="mt-16 p-6 rounded-2xl bg-surface-card/60 border border-white/5 text-center max-w-2xl mx-auto text-xs text-text-muted">
          <p>
            Prices are in Pakistani Rupees (Rs.). All espresso beverages are brewed double-shot as standard unless requested single. For custom milk alternatives or syrup modifications, inquire directly on WhatsApp.
          </p>
        </div>
      </div>
    </div>
  );
}
