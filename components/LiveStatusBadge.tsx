"use client";

import React, { useEffect, useState } from "react";

interface LiveStatusBadgeProps {
  className?: string;
  showHoursDetail?: boolean;
}

export const LiveStatusBadge: React.FC<LiveStatusBadgeProps> = ({ 
  className = "",
  showHoursDetail = false
}) => {
  const [isOpen, setIsOpen] = useState<boolean | null>(null);
  const [timeString, setTimeString] = useState<string>("");

  useEffect(() => {
    const checkStatus = () => {
      const now = new Date();
      const hours = now.getHours(); // 0-23
      // Open between 17:00 (5:00 PM) and 02:00 (2:00 AM)
      const open = hours >= 17 || hours < 2;
      setIsOpen(open);

      // Formatted local time for fine-grained luxury aesthetic
      setTimeString(
        now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      );
    };

    checkStatus();
    const interval = setInterval(checkStatus, 30000);
    return () => clearInterval(interval);
  }, []);

  // Graceful fallback during server-rendering to avoid hydration mismatch
  if (isOpen === null) {
    return (
      <div className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-surface-card/80 border border-white/10 backdrop-blur-md text-xs uppercase tracking-widest text-text-muted ${className}`}>
        <span className="w-2 h-2 rounded-full bg-accent-amber/60 animate-pulse" />
        <span>Checking Bar Status...</span>
      </div>
    );
  }

  return (
    <div
      className={`inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full text-xs font-medium tracking-widest uppercase transition-all duration-300 backdrop-blur-md border ${
        isOpen
          ? "bg-emerald-950/40 text-emerald-300 border-emerald-500/30 shadow-[0_0_15px_rgba(16,185,129,0.15)]"
          : "bg-amber-950/40 text-accent-gold border-amber-500/30 shadow-[0_0_15px_rgba(212,141,59,0.15)]"
      } ${className}`}
    >
      <span className="relative flex h-2.5 w-2.5 items-center justify-center">
        {isOpen ? (
          <>
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500 shadow-[0_0_8px_#10B981]" />
          </>
        ) : (
          <span className="relative inline-flex rounded-full h-2 w-2 bg-accent-amber shadow-[0_0_8px_#D48D3B]" />
        )}
      </span>
      <span className="font-sans font-semibold">
        {isOpen ? "Brewing Live (Open until 2:00 AM)" : "Opens at 5:00 PM Tonight"}
      </span>
      {showHoursDetail && timeString && (
        <span className="hidden sm:inline-block pl-2 border-l border-white/10 text-[10px] text-text-muted normal-case tracking-normal">
          Local {timeString}
        </span>
      )}
    </div>
  );
};

export default LiveStatusBadge;
