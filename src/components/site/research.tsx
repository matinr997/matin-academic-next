"use client";

import * as React from "react";
import { Plus, Minus } from "lucide-react";
import { cn } from "@/lib/utils";
import { researchAreas } from "@/lib/data/content";
import { SectionLabel } from "@/components/site/section-label";
import { Reveal } from "@/components/site/reveal";

export function Research() {
  const [open, setOpen] = React.useState<string | null>(researchAreas[0].id);

  return (
    <section id="research" className="relative scroll-mt-24 py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <Reveal className="flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <SectionLabel index="§ 01" title="Research" />
            <h2 className="display mt-5 max-w-2xl text-balance text-4xl text-foreground sm:text-5xl">
              Four directions, one discipline.
            </h2>
          </div>
          <p className="max-w-sm text-pretty text-sm leading-relaxed text-muted-foreground">
            Lines of inquiry spanning critical care, aging, intelligent
            systems, and chronic disease management.
          </p>
        </Reveal>

        <div className="mt-12 divide-y divide-border border-y border-border">
          {researchAreas.map((area, i) => {
            const isOpen = open === area.id;
            return (
              <Reveal key={area.id} delay={i * 60}>
                <ResearchRow
                  area={area}
                  isOpen={isOpen}
                  onToggle={() => setOpen(isOpen ? null : area.id)}
                />
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function ResearchRow({
  area,
  isOpen,
  onToggle,
}: {
  area: (typeof researchAreas)[number];
  isOpen: boolean;
  onToggle: () => void;
}) {
  const [hovered, setHovered] = React.useState(false);

  return (
    <div
      className="group relative"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <span
        className={cn(
          "absolute left-0 top-0 h-full w-px origin-top bg-scholar transition-transform duration-500 ease-out-soft",
          hovered || isOpen ? "scale-y-100" : "scale-y-0"
        )}
        aria-hidden
      />

      <button
        type="button"
        onClick={onToggle}
        aria-expanded={isOpen}
        aria-controls={`research-detail-${area.id}`}
        className="focus-ring relative flex w-full items-start gap-6 py-8 pl-6 text-left sm:py-10 sm:pl-8"
      >
        <span className="mt-1 shrink-0">
          <span className="block font-mono text-xs font-medium tabular-nums text-muted-foreground transition-colors duration-300 group-hover:text-scholar">
            {area.index}
          </span>
          <span className="mt-1 block eyebrow text-muted-foreground">
            {area.kicker}
          </span>
        </span>

        <div className="flex-1">
          <h3 className="font-serif text-2xl font-medium tracking-tight text-foreground sm:text-[1.75rem]">
            {area.title}
          </h3>
          <p className="mt-3 max-w-2xl text-pretty text-[0.95rem] leading-relaxed text-muted-foreground">
            {area.summary}
          </p>
        </div>

        <span
          className={cn(
            "mt-1 inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-full border transition-all duration-300",
            isOpen
              ? "border-scholar bg-scholar text-scholar-foreground"
              : "border-border text-muted-foreground group-hover:border-foreground/30 group-hover:text-foreground"
          )}
          aria-hidden
        >
          {isOpen ? (
            <Minus className="h-4 w-4" />
          ) : (
            <Plus className="h-4 w-4" />
          )}
        </span>
      </button>

      <div
        id={`research-detail-${area.id}`}
        className={cn(
          "grid overflow-hidden pl-6 transition-all duration-500 ease-out-soft sm:pl-8",
          isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
        )}
      >
        <div className="min-h-0">
          <div className="flex flex-wrap gap-2 pb-10">
            {area.tags.map((t, idx) => (
              <span
                key={t}
                className={cn(
                  "rounded-full border border-border bg-card px-3 py-1.5 text-xs font-medium text-foreground transition-all duration-500",
                  isOpen
                    ? "translate-y-0 opacity-100"
                    : "translate-y-2 opacity-0"
                )}
                style={{ transitionDelay: isOpen ? `${idx * 70}ms` : "0ms" }}
              >
                {t}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
