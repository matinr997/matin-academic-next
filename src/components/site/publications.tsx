"use client";

import * as React from "react";
import { ArrowUpRight, BookOpen, FileText, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { publications, type Publication } from "@/lib/data/content";
import { SectionLabel } from "@/components/site/section-label";
import { Reveal } from "@/components/site/reveal";

export function Publications() {
  const [active, setActive] = React.useState<Publication | null>(null);

  return (
    <section
      id="publications"
      className="relative scroll-mt-24 border-t border-border bg-muted/30 py-24 sm:py-32"
    >
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <Reveal className="flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <SectionLabel index="§ 02" title="Publications" />
            <h2 className="display mt-5 max-w-2xl text-balance text-4xl text-foreground sm:text-5xl">
              Research Papers
            </h2>
          </div>
          <p className="max-w-sm text-pretty text-sm leading-relaxed text-muted-foreground">
            A representative selection. The complete record is maintained on
            Google Scholar.
          </p>
        </Reveal>

        <div className="mt-12 flex flex-col gap-4">
          {publications.map((pub, i) => (
            <Reveal key={pub.id} delay={i * 50}>
              <PublicationCard pub={pub} onAbstract={() => setActive(pub)} />
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-12 flex items-center justify-between border-t border-border pt-8">
          <p className="text-sm text-muted-foreground">
            Full publication list maintained on Google Scholar.
          </p>
          <a
            href="https://scholar.google.com/citations?hl=en&user=ZGdhd8QAAAAJ"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-1.5 rounded-sm text-sm font-medium text-foreground transition-colors hover:text-scholar focus-ring"
          >
            Complete bibliography
            <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>
        </Reveal>
      </div>

      <AbstractModal pub={active} onClose={() => setActive(null)} />
    </section>
  );
}

function PublicationCard({
  pub,
  onAbstract,
}: {
  pub: Publication;
  onAbstract: () => void;
}) {
  return (
    <article
      className={cn(
        "group relative overflow-hidden rounded-2xl border border-border bg-card p-6 sm:p-8",
        "elevate hover:-translate-y-0.5 hover:border-foreground/15 hover:shadow-[0_18px_40px_-24px_rgba(0,0,0,0.18)]"
      )}
    >
      <span
        className="pointer-events-none absolute inset-x-0 top-0 h-px origin-left scale-x-0 bg-scholar transition-transform duration-500 ease-out-soft group-hover:scale-x-100"
        aria-hidden
      />

      <div className="flex flex-col gap-6 lg:flex-row lg:items-start lg:justify-between">
        <div className="min-w-0 flex-1">
          <div className="flex flex-wrap items-center gap-x-3 gap-y-2 text-xs">
            <span className="inline-flex items-center gap-1.5 font-medium text-foreground">
              <BookOpen className="h-3.5 w-3.5 text-scholar" />
              <span className="italic">{pub.citation}</span>
            </span>
            <span className="text-muted-foreground">·</span>
            <span className="font-mono text-[0.7rem] text-muted-foreground">
              DOI: {pub.doi}
            </span>
          </div>

          <h3 className="mt-3 max-w-2xl text-balance font-serif text-xl font-medium leading-snug tracking-tight text-foreground sm:text-[1.5rem]">
            {pub.title}
          </h3>

          <div className="mt-4 flex flex-wrap gap-2">
            {pub.abstract.map((seg) => (
              <span
                key={seg.label}
                className="rounded-full border border-border px-2.5 py-0.5 text-[0.7rem] font-medium text-muted-foreground"
              >
                {seg.label}
              </span>
            ))}
          </div>
        </div>

        <div className="flex shrink-0 flex-col items-stretch gap-2 lg:items-end lg:pl-6">
          <button
            type="button"
            onClick={onAbstract}
            className="inline-flex h-9 items-center gap-1.5 rounded-full border border-border px-4 text-sm font-medium text-foreground transition-all duration-300 hover:border-foreground/30 hover:bg-muted focus-ring"
          >
            <FileText className="h-3.5 w-3.5" />
            Abstract
          </button>
          <a
            href={pub.doiUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="group/btn inline-flex h-9 items-center gap-1.5 rounded-full bg-foreground px-4 text-sm font-medium text-background transition-colors duration-300 hover:bg-scholar hover:text-scholar-foreground focus-ring"
          >
            Read Paper
            <ArrowUpRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5" />
          </a>
        </div>
      </div>
    </article>
  );
}

/**
 * Abstract modal — editorial academic reading view.
 * Preserves the structured abstract (Objective / Methods / Results / Conclusion)
 * with bold lead-in labels, reading-progress indicator, and sticky close.
 */
function AbstractModal({
  pub,
  onClose,
}: {
  pub: Publication | null;
  onClose: () => void;
}) {
  const scrollRef = React.useRef<HTMLDivElement>(null);
  const [progress, setProgress] = React.useState(0);
  const open = pub !== null;

  React.useEffect(() => {
    if (!open) return;
    document.body.style.overflow = "hidden";
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [open, onClose]);

  React.useEffect(() => {
    const el = scrollRef.current;
    if (!el || !open) return;
    const onScroll = () => {
      const max = el.scrollHeight - el.clientHeight;
      setProgress(max > 0 ? Math.min(el.scrollTop / max, 1) : 0);
    };
    el.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => el.removeEventListener("scroll", onScroll);
  }, [open]);

  return (
    <div
      className={cn(
        "fixed inset-0 z-[60] transition-opacity duration-300",
        open ? "visible opacity-100" : "invisible opacity-0"
      )}
      aria-hidden={!open}
    >
      <div
        className="absolute inset-0 bg-background/70 backdrop-blur-md"
        onClick={onClose}
      />

      <div className="absolute inset-0 flex items-stretch justify-center p-0 sm:items-center sm:p-6">
        <div
          role="dialog"
          aria-modal="true"
          aria-labelledby="abstract-title"
          className={cn(
            "relative flex h-full w-full max-w-3xl flex-col overflow-hidden border-border bg-card shadow-2xl transition-all duration-500 ease-out-soft sm:h-auto sm:max-h-[88vh] sm:rounded-2xl sm:border",
            open
              ? "translate-y-0 scale-100 opacity-100"
              : "translate-y-4 scale-[0.99] opacity-0"
          )}
        >
          <div
            className="absolute inset-x-0 top-0 z-10 h-0.5 bg-transparent"
            aria-hidden
          >
            <div
              className="h-full origin-left bg-scholar"
              style={{
                transform: `scaleX(${progress})`,
                transition: "transform 0.12s linear",
              }}
            />
          </div>

          <div className="sticky top-0 z-10 flex items-center justify-between border-b border-border bg-card/95 px-6 py-4 backdrop-blur sm:px-10 sm:py-5">
            <span className="inline-flex items-center gap-2 eyebrow text-muted-foreground">
              <FileText className="h-3.5 w-3.5 text-scholar" />
              Structured Abstract
            </span>
            <button
              type="button"
              onClick={onClose}
              aria-label="Close abstract"
              className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-border text-muted-foreground transition-all duration-300 hover:rotate-90 hover:border-foreground/30 hover:text-foreground focus-ring"
            >
              <X className="h-4 w-4" />
            </button>
          </div>

          <div
            ref={scrollRef}
            className="flex-1 overflow-y-auto px-6 py-8 sm:px-10 sm:py-12"
          >
            {pub && (
              <>
                <div className="flex flex-wrap items-center gap-x-3 gap-y-2 text-xs">
                  <span className="inline-flex items-center gap-1.5 font-medium text-foreground">
                    <BookOpen className="h-3.5 w-3.5 text-scholar" />
                    <span className="italic">{pub.citation}</span>
                  </span>
                  <span className="text-muted-foreground">·</span>
                  <span className="font-mono text-[0.7rem] text-muted-foreground">
                    {pub.doi}
                  </span>
                </div>

                <h2
                  id="abstract-title"
                  className="mt-4 text-balance font-serif text-2xl font-medium leading-snug tracking-tight text-foreground sm:text-3xl"
                >
                  {pub.title}
                </h2>

                <div className="mt-10 space-y-6">
                  {pub.abstract.map((seg) => (
                    <p
                      key={seg.label}
                      className="text-pretty font-serif text-[1.05rem] leading-[1.8] text-foreground/85"
                    >
                      <strong className="mr-1.5 font-semibold text-foreground">
                        {seg.label}.
                      </strong>
                      {seg.text}
                    </p>
                  ))}
                </div>

                <div className="mt-10 flex flex-wrap gap-3 border-t border-border pt-8">
                  <a
                    href={pub.doiUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group inline-flex h-10 items-center gap-2 rounded-full bg-foreground px-5 text-sm font-medium text-background transition-colors duration-300 hover:bg-scholar hover:text-scholar-foreground focus-ring"
                  >
                    Read full paper
                    <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </a>
                  <a
                    href={`https://doi.org/${pub.doi}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex h-10 items-center gap-2 rounded-full border border-border px-5 text-sm font-medium text-foreground transition-colors duration-300 hover:border-foreground/30 focus-ring"
                  >
                    View DOI record
                  </a>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
