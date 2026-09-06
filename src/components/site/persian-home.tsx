"use client";

import * as React from "react";
import Image from "next/image";
import { ArrowUpLeft } from "lucide-react";
import { cn } from "@/lib/utils";
import {
  profileFa,
  researchAreasFa,
  publicationsFa,
  coursesFa,
  faSectionTitles,
} from "@/lib/data/content";
import { Reveal } from "@/components/site/reveal";
import { OrcidIcon, ScholarIcon } from "@/components/site/brand-icons";

export function PersianHome() {
  return (
    <>
      <PersianHero />
      <PersianResearch />
      <PersianPublications />
      <PersianTeaching />
    </>
  );
}

function PersianHero() {
  const imgRef = React.useRef<HTMLDivElement>(null);

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
        className="pointer-events-none absolute inset-0 bg-grid opacity-[0.5] [mask-image:radial-gradient(ellipse_at_top_right,black,transparent_70%)]"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute inset-x-0 top-0 h-px accent-line opacity-50"
        aria-hidden
      />

      <div className="relative mx-auto grid max-w-6xl gap-12 px-5 sm:px-8 lg:grid-cols-12 lg:gap-16">
        {/* Identity (right in RTL) */}
        <div className="lg:col-span-7">
          <span className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-3.5 py-1.5 text-xs font-medium text-muted-foreground opacity-0 [animation:hero-fade_0.7s_cubic-bezier(0.16,1,0.3,1)_0.05s_forwards]">
            <span className="h-1.5 w-1.5 rounded-full bg-scholar" aria-hidden />
            {profileFa.badge}
          </span>

          <h1 className="display-fa mt-7 text-[2.75rem] text-foreground sm:text-6xl lg:text-[4.25rem]">
            <span className="block overflow-hidden">
              <span className="inline-block opacity-0 [animation:hero-rise_0.8s_cubic-bezier(0.16,1,0.3,1)_0.12s_forwards]">
                {profileFa.heroHeadlinePre}{" "}
                <span className="text-scholar">
                  {profileFa.heroHeadlineAccent}
                </span>
              </span>
            </span>
            <span className="block overflow-hidden">
              <span className="inline-block opacity-0 [animation:hero-rise_0.8s_cubic-bezier(0.16,1,0.3,1)_0.22s_forwards]">
                {profileFa.heroHeadlinePost}
              </span>
            </span>
          </h1>

          <p className="mt-7 max-w-xl text-justify text-base leading-loose text-muted-foreground opacity-0 [animation:hero-fade_0.8s_cubic-bezier(0.16,1,0.3,1)_0.42s_forwards] sm:text-lg">
            {profileFa.shortBio}
          </p>

          <div className="mt-9 flex flex-wrap items-center gap-3 opacity-0 [animation:hero-fade_0.8s_cubic-bezier(0.16,1,0.3,1)_0.54s_forwards]">
            <a
              href={profileFa.scholarUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="پروفایل گوگل اسکالر"
              title="Google Scholar"
              className="group inline-flex h-11 items-center gap-2 rounded-full bg-foreground px-6 text-sm font-medium text-background transition-all duration-300 hover:-translate-y-0.5 hover:bg-scholar hover:text-scholar-foreground hover:shadow-[0_12px_30px_-12px_rgba(66,133,244,0.55)] focus-ring"
            >
              <ScholarIcon className="h-4 w-4 shrink-0" />
              {profileFa.buttons.scholar}
              <ArrowUpLeft className="h-4 w-4 transition-transform duration-300 group-hover:-translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
            <a
              href={profileFa.orcidUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="پروفایل ORCID"
              title="ORCID"
              className="group inline-flex h-11 items-center gap-2 rounded-full border border-border bg-transparent px-6 text-sm font-medium text-foreground transition-all duration-300 hover:-translate-y-0.5 hover:border-[#A6CE39]/60 hover:bg-[#A6CE39]/10 hover:shadow-[0_12px_30px_-12px_rgba(166,206,57,0.55)] focus-ring"
            >
              <OrcidIcon className="h-4 w-4 shrink-0" />
              ORCID
              <ArrowUpLeft className="h-4 w-4 transition-transform duration-300 group-hover:-translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
            <a
              href="#publications"
              onClick={(e) => {
                e.preventDefault();
                const el = document.getElementById("publications");
                if (el)
                  window.scrollTo({
                    top: el.getBoundingClientRect().top + window.scrollY - 80,
                    behavior: "smooth",
                  });
              }}
              className="inline-flex h-11 items-center gap-2 rounded-full border border-border bg-transparent px-6 text-sm font-medium text-foreground transition-colors duration-300 hover:border-foreground/40 hover:bg-muted focus-ring"
            >
              {profileFa.buttons.viewPubs}
            </a>
          </div>
        </div>

        {/* Portrait (left in RTL) */}
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
              alt="متین روستای آبکنار"
              fill
              priority
              sizes="(max-width: 1024px) 100vw, 42vw"
              className="object-cover object-top grayscale transition-transform duration-[1.2s] ease-out-soft group-hover:scale-[1.03]"
            />
            <span
              className="pointer-events-none absolute right-4 top-4 z-10 h-8 w-8 rounded-tr-md border-r-2 border-t-2 border-scholar/70 transition-all duration-500 group-hover:h-10 group-hover:w-10"
              aria-hidden
            />
            <div className="absolute inset-x-0 bottom-0 z-10 border-t border-white/10 bg-[rgba(30,30,35,0.92)] px-5 py-3">
              <p className="text-right text-xs leading-snug text-white">
                {profileFa.imageCaption}
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

function PersianResearch() {
  return (
    <section id="research" className="relative scroll-mt-24 py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <Reveal className="flex items-center gap-3">
          <span className="font-mono text-xs font-medium tabular-nums text-scholar">
            § 01
          </span>
          <span className="h-px w-8 bg-scholar/50" aria-hidden />
          <span className="eyebrow text-muted-foreground">Research</span>
        </Reveal>

        <div className="mt-10 divide-y divide-border border-y border-border">
          {researchAreasFa.map((area, i) => (
            <Reveal key={area.id} delay={i * 60}>
              <div className="group relative py-9 pr-6 sm:py-11 sm:pr-8">
                <span className="absolute right-0 top-0 h-full w-px origin-top scale-y-0 bg-scholar transition-transform duration-500 ease-out-soft group-hover:scale-y-100" aria-hidden />
                <div className="flex items-start gap-6">
                  <span className="mt-1 shrink-0 text-left">
                    <span className="block font-mono text-xs font-medium tabular-nums text-muted-foreground transition-colors duration-300 group-hover:text-scholar">
                      {area.index}
                    </span>
                    <span className="mt-1 block eyebrow text-muted-foreground">
                      {area.kicker}
                    </span>
                  </span>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold tracking-tight text-foreground sm:text-[1.75rem]">
                      {area.title}
                    </h3>
                    <p className="mt-3 max-w-2xl text-justify text-[0.95rem] leading-loose text-muted-foreground">
                      {area.summary}
                    </p>
                    <div className="mt-5 flex flex-wrap gap-2">
                      {area.tags.map((t) => (
                        <span
                          key={t}
                          className="rounded-full border border-border bg-card px-3 py-1.5 text-xs font-medium text-foreground transition-colors duration-300 group-hover:border-scholar/30"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function PersianPublications() {
  return (
    <section
      id="publications"
      className="relative scroll-mt-24 border-t border-border bg-muted/30 py-24 sm:py-32"
    >
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <Reveal className="flex items-center gap-3">
          <span className="font-mono text-xs font-medium tabular-nums text-scholar">
            § 02
          </span>
          <span className="h-px w-8 bg-scholar/50" aria-hidden />
          <span className="eyebrow text-muted-foreground">Publications</span>
        </Reveal>
        <Reveal delay={60}>
          <h2 className="mt-5 text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
            {faSectionTitles.research}
          </h2>
        </Reveal>

        <div className="mt-12 flex flex-col gap-4">
          {publicationsFa.map((pub, i) => (
            <Reveal key={pub.id} delay={i * 50}>
              <article className="group relative overflow-hidden rounded-2xl border border-border bg-card p-6 elevate hover:-translate-y-0.5 hover:border-foreground/15 hover:shadow-[0_18px_40px_-24px_rgba(0,0,0,0.18)] sm:p-8">
                <span className="pointer-events-none absolute inset-x-0 top-0 h-px origin-right scale-x-0 bg-scholar transition-transform duration-500 ease-out-soft group-hover:scale-x-100" aria-hidden />
                <h3 className="max-w-2xl text-balance text-xl font-semibold leading-loose text-foreground sm:text-[1.4rem]">
                  {pub.title}
                </h3>
                <p
                  dir="ltr"
                  className="mt-4 text-left text-sm text-muted-foreground"
                  style={{ fontFamily: "var(--font-geist-sans), sans-serif" }}
                >
                  DOI:{" "}
                  <a
                    href={pub.doiUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-medium text-scholar transition-opacity duration-300 hover:opacity-70"
                  >
                    {pub.doi}
                  </a>
                </p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function PersianTeaching() {
  return (
    <section id="teaching" className="relative scroll-mt-24 py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <Reveal className="flex items-center gap-3">
          <span className="font-mono text-xs font-medium tabular-nums text-scholar">
            § 03
          </span>
          <span className="h-px w-8 bg-scholar/50" aria-hidden />
          <span className="eyebrow text-muted-foreground">Teaching</span>
        </Reveal>
        <Reveal delay={60}>
          <h2 className="mt-5 text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
            {faSectionTitles.teaching}
          </h2>
        </Reveal>

        <div className="mt-12 grid gap-5 md:grid-cols-3">
          {coursesFa.map((course, i) => (
            <Reveal key={course.id} delay={i * 70}>
              <article className="group relative h-full overflow-hidden rounded-2xl border border-border bg-card p-7 elevate hover:-translate-y-1 hover:shadow-[0_22px_50px_-28px_rgba(0,0,0,0.22)]">
                <span className="pointer-events-none absolute right-0 top-0 h-10 w-10 rounded-tr-2xl border-r-2 border-t-2 border-scholar opacity-0 transition-all duration-500 ease-out-soft group-hover:opacity-100 group-hover:h-full group-hover:w-full" aria-hidden />
                <div className="relative flex items-center justify-between">
                  <span className="eyebrow tabular-nums text-muted-foreground">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="h-1.5 w-1.5 rounded-full bg-scholar" aria-hidden />
                </div>
                <h3 className="relative mt-6 text-xl font-bold leading-snug tracking-tight text-foreground">
                  {course.title}
                </h3>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
