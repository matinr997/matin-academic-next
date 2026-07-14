"use client";

import * as React from "react";
import { ArrowUp } from "lucide-react";
import { cn } from "@/lib/utils";

const CIRCUMFERENCE = 2 * Math.PI * 22; // r = 22

/**
 * Floating scroll-to-top button with a circular reading-progress ring.
 * Preserves the original site's functionality, refined into the editorial
 * design language. Appears after the user scrolls, fills as they progress.
 */
export function ScrollToTop() {
  const [visible, setVisible] = React.useState(false);
  const [progress, setProgress] = React.useState(0);

  React.useEffect(() => {
    const onScroll = () => {
      const y =
        document.documentElement.scrollTop || document.body.scrollTop;
      const h =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;
      const ratio = h > 0 ? Math.min(y / h, 1) : 0;
      setProgress(ratio);
      setVisible(y > 150);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  const offset = CIRCUMFERENCE * (1 - progress);

  return (
    <button
      type="button"
      aria-label="Scroll to top"
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      className={cn(
        "fixed bottom-6 right-6 z-40 flex h-12 w-12 items-center justify-center rounded-full",
        "border border-border bg-card/90 text-foreground shadow-lg backdrop-blur",
        "transition-all duration-400 ease-out-soft hover:-translate-y-1 hover:text-scholar hover:shadow-xl focus-ring",
        "md:bottom-8 md:right-8",
        visible
          ? "translate-y-0 scale-100 opacity-100"
          : "pointer-events-none translate-y-4 scale-90 opacity-0"
      )}
      style={{ transitionTimingFunction: "cubic-bezier(0.16, 1, 0.3, 1)" }}
    >
      <svg
        className="absolute inset-0 h-full w-full -rotate-90"
        viewBox="0 0 50 50"
        aria-hidden
      >
        <circle
          cx="25"
          cy="25"
          r="22"
          fill="none"
          stroke="var(--border)"
          strokeWidth="2"
        />
        <circle
          cx="25"
          cy="25"
          r="22"
          fill="none"
          stroke="var(--scholar)"
          strokeWidth="2"
          strokeLinecap="round"
          strokeDasharray={CIRCUMFERENCE}
          strokeDashoffset={offset}
          style={{ transition: "stroke-dashoffset 0.1s linear" }}
        />
      </svg>
      <ArrowUp className="relative h-4 w-4" />
    </button>
  );
}
