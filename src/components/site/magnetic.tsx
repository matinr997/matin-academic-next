"use client";

import * as React from "react";
import { cn } from "@/lib/utils";

interface MagneticProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Strength of the magnetic pull in px at the element edge */
  strength?: number;
}

/**
 * Magnetic wrapper — a very subtle pointer-follow effect.
 * Movement is capped and eased for a premium, restrained feel.
 * Disabled on touch devices and when prefers-reduced-motion is set.
 */
export function Magnetic({
  children,
  className,
  strength = 10,
  ...props
}: MagneticProps) {
  const ref = React.useRef<HTMLDivElement>(null);
  const [offset, setOffset] = React.useState({ x: 0, y: 0 });
  const [enabled, setEnabled] = React.useState(false);

  React.useEffect(() => {
    const finePointer = window.matchMedia("(pointer: fine)").matches;
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    setEnabled(finePointer && !reduced);
  }, []);

  const handleMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!enabled || !ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const relX = e.clientX - (rect.left + rect.width / 2);
    const relY = e.clientY - (rect.top + rect.height / 2);
    // Normalize by half-size so pull is consistent regardless of element size
    const nx = relX / (rect.width / 2);
    const ny = relY / (rect.height / 2);
    setOffset({ x: nx * strength, y: ny * strength });
  };

  const reset = () => setOffset({ x: 0, y: 0 });

  return (
    <div
      ref={ref}
      onMouseMove={handleMove}
      onMouseLeave={reset}
      className={cn("inline-block will-change-transform", className)}
      style={{
        transform: `translate3d(${offset.x}px, ${offset.y}px, 0)`,
        transition: enabled
          ? "transform 0.45s cubic-bezier(0.16, 1, 0.3, 1)"
          : "none",
      }}
      {...props}
    >
      {children}
    </div>
  );
}
