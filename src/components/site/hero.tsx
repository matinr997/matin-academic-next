"use client";

import * as React from "react";
import Image from "next/image";
import { ArrowUpRight, FileText } from "lucide-react";
import { profile } from "@/lib/data/content";
import { Magnetic } from "@/components/site/magnetic";
import { OrcidIcon, ScholarIcon } from "@/components/site/brand-icons";

export function Hero() {
  const imgRef = React.useRef<HTMLDivElement>(null);

  // Subtle parallax on the portrait — pointer-driven, restrained.
  React.useEffect(() => {
    const el = imgRef.current;
    if (!el) return;
    const fine = window.matchMedia("(pointer: fine)").matches;
    const reduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (!fine || reduced) return;

    let raf = 0;
    const onMove = (e: MouseEvent) => {
      const rect = el.getBoundingClientRect();
      const relX = (e.clientX - rect.left) / rect.width - 0.5;
      const relY = (e.clientY - rect.top) / rect.height - 0.5;
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {
        el.style.setProperty("--px", `${relX * 12}px`);
        el.style.setProperty("--py", `${relY * 12}px`);
      });
    };
    window.addEventListener("mousemove", onMove);
    return () => {
      window.removeEventListener("mousemove", onMove);
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <section
      id="top"
      className="relative overflow-hidden border-b border-border pt-28 pb-16 sm:pt-36 lg:pt-40 lg:pb-24"
    >
      <div
        className="pointer-events-none absolute inset-0 bg-grid opacity-[0.5] [mask-image:radial-gradient(ellipse_at_top_left,black,transparent_70%)]"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute inset-x-0 top-0 h-px accent-line opacity-50"
        aria-hidden
      />

      <div className="relative mx-auto grid max-w-6xl gap-12 px-5 sm:px-8 lg:grid-cols-12 lg:gap-16">
        {/* Left: identity */}
        <div className="lg:col-span-7">
          <span className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-3.5 py-1.5 text-xs font-medium text-muted-foreground opacity-0 [animation:hero-fade_0.7s_cubic-bezier(0.16,1,0.3,1)_0.05s_forwards]">
            <span className="h-1.5 w-1.5 rounded-full bg-scholar" aria-hidden />
            {profile.badge}
          </span>

          <h1 className="display mt-7 text-[2.75rem] leading-[1.04] tracking-tight text-foreground sm:text-6xl lg:text-[4.5rem]">
            <span className="block overflow-hidden">
              <span className="inline-block opacity-0 [animation:hero-rise_0.8s_cubic-bezier(0.16,1,0.3,1)_0.12s_forwards]">
                {profile.heroHeadlinePre}{" "}
                <span className="italic font-normal text-scholar">
                  {profile.heroHeadlineAccent}
                </span>
              </span>
            </span>
            <span className="block overflow-hidden">
              <span className="inline-block opacity-0 [animation:hero-rise_0.8s_cubic-bezier(0.16,1,0.3,1)_0.22s_forwards]">
                {profile.heroHeadlinePost}
              </span>
            </span>
          </h1>

          <p className="mt-7 max-w-xl text-pretty text-base leading-relaxed text-muted-foreground opacity-0 [animation:hero-fade_0.8s_cubic-bezier(0.16,1,0.3,1)_0.42s_forwards] sm:text-lg">
            {profile.shortBio}
          </p>

          <div className="mt-9 flex flex-wrap items-center gap-3 opacity-0 [animation:hero-fade_0.8s_cubic-bezier(0.16,1,0.3,1)_0.54s_forwards]">
            <Magnetic strength={8}>
              <a
                href={profile.scholarUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Google Scholar profile"
                title="Google Scholar"
                className="group inline-flex h-11 items-center gap-2 rounded-full bg-foreground px-6 text-sm font-medium text-background transition-all duration-300 hover:-translate-y-0.5 hover:bg-scholar hover:text-scholar-foreground hover:shadow-[0_12px_30px_-12px_rgba(66,133,244,0.55)] focus-ring"
              >
                <ScholarIcon className="h-4 w-4 shrink-0" />
                Google Scholar
                <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>
            </Magnetic>
            <Magnetic strength={8}>
              <a
                href={profile.orcidUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="ORCID profile"
                title="ORCID"
                className="group inline-flex h-11 items-center gap-2 rounded-full border border-border bg-transparent px-6 text-sm font-medium text-foreground transition-all duration-300 hover:-translate-y-0.5 hover:border-[#A6CE39]/60 hover:bg-[#A6CE39]/10 hover:shadow-[0_12px_30px_-12px_rgba(166,206,57,0.55)] focus-ring"
              >
                <OrcidIcon className="h-4 w-4 shrink-0" />
                ORCID
                <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>
            </Magnetic>
            <Magnetic strength={8}>
              <a
                href={profile.cvUrl}
                target="_blank"
                className="group inline-flex h-11 items-center gap-2 rounded-full border border-border bg-transparent px-6 text-sm font-medium text-foreground transition-all duration-300 hover:-translate-y-0.5 hover:border-foreground/40 hover:bg-muted hover:shadow-[0_12px_30px_-12px_rgba(0,0,0,0.25)] focus-ring"
              >
                <FileText className="h-4 w-4" />
                CV
              </a>
            </Magnetic>
          </div>
        </div>

        {/* Right: real portrait (grayscale, preserved treatment) */}
        <div className="lg:col-span-5">
          <div
            ref={imgRef}
            className="group relative h-[360px] overflow-hidden rounded-2xl border border-border bg-card sm:h-[440px] lg:h-full lg:min-h-[480px]"
            style={{
              transform: "translate3d(var(--px,0), var(--py,0), 0)",
              transition: "transform 0.6s cubic-bezier(0.16,1,0.3,1)",
            }}
          >
            <Image
              src="/images/profile.jpg"
              alt="Matin Roosta-ye Abkenar"
              fill
              priority
              sizes="(max-width: 1024px) 100vw, 42vw"
              className="object-cover object-top grayscale transition-transform duration-[1.2s] ease-out-soft group-hover:scale-[1.03]"
            />
            {/* Accent corner frame */}
            <span
              className="pointer-events-none absolute left-4 top-4 z-10 h-8 w-8 rounded-tl-md border-l-2 border-t-2 border-scholar/70 transition-all duration-500 group-hover:h-10 group-hover:w-10"
              aria-hidden
            />
            {/* Caption — preserved verbatim */}
            <div className="absolute inset-x-0 bottom-0 z-10 border-t border-white/10 bg-[rgba(30,30,35,0.92)] px-5 py-3">
              <p className="text-xs leading-snug text-white">
                {profile.imageCaption}
              </p>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes hero-rise {
          from { opacity: 0; transform: translateY(110%); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes hero-fade {
          from { opacity: 0; transform: translateY(12px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @media (prefers-reduced-motion: reduce) {
          [style*="hero-rise"], [style*="hero-fade"] {
            animation: none !important;
            opacity: 1 !important;
            transform: none !important;
          }
        }
      `}</style>
    </section>
  );
}
