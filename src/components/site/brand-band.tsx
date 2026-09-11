import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Youtube } from "lucide-react";
import { brandBand, profile } from "@/lib/data/content";
import { Reveal } from "@/components/site/reveal";
import { AnimatedCounter } from "@/components/site/animated-counter";

/**
 * Personal-brand band — dark navy, gold stats, circular portrait.
 * Fixed colors (not theme vars) so it looks the same in light/dark mode.
 */
export function BrandBand() {
  return (
    <section
      aria-label="About Matin Roosta"
      className="relative overflow-hidden bg-[#0a1730]"
    >
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.35] [background-image:radial-gradient(ellipse_at_center,rgba(229,181,77,0.14),transparent_65%)]"
        aria-hidden
      />
      <div className="relative mx-auto grid max-w-6xl items-center gap-12 px-5 py-20 sm:px-8 sm:py-28 lg:grid-cols-12">
        {/* Text */}
        <div className="text-center lg:col-span-8 lg:text-center">
          <Reveal>
            <p className="text-sm font-semibold tracking-wide text-[#e5b54d]">
              {brandBand.badge}
            </p>
          </Reveal>
          <Reveal delay={70}>
            <h2 className="mt-4 text-4xl font-bold tracking-tight text-white sm:text-5xl">
              {brandBand.name}
            </h2>
          </Reveal>
          <Reveal delay={130}>
            <p className="mx-auto mt-6 max-w-2xl text-pretty text-base leading-relaxed text-white/75 sm:text-lg">
              {brandBand.bio}
            </p>
          </Reveal>
          <Reveal delay={190}>
            <div className="mt-10 flex items-start justify-center gap-10 sm:gap-16">
              {brandBand.stats.map((s) => (
                <div key={s.label}>
                  <p className="text-3xl font-bold tabular-nums text-[#e5b54d] sm:text-4xl">
                    <AnimatedCounter value={s.value} suffix={s.suffix} />
                  </p>
                  <p className="mt-2 max-w-[10rem] text-xs leading-snug text-white/60 sm:text-sm">
                    {s.label}
                  </p>
                </div>
              ))}
            </div>
          </Reveal>
          <Reveal delay={250}>
            <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
              <a
                href={`${profile.youtubeUrl}?sub_confirmation=1`}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex h-11 items-center gap-2 rounded-full bg-[#ff0033] px-6 text-sm font-semibold text-white transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_12px_30px_-12px_rgba(255,0,51,0.6)]"
              >
                <Youtube className="h-4 w-4" />
                Subscribe on YouTube
              </a>
              <Link
                href={profile.aboutUrl}
                className="group inline-flex h-11 items-center gap-2 rounded-full border border-white/20 px-6 text-sm font-medium text-white transition-all duration-300 hover:-translate-y-0.5 hover:border-[#e5b54d]/60 hover:text-[#e5b54d]"
              >
                More about me
                <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </Link>
            </div>
          </Reveal>
        </div>

        {/* Circular portrait */}
        <Reveal
          delay={150}
          className="mx-auto w-fit lg:col-span-4"
        >
          <span className="relative block h-56 w-56 overflow-hidden rounded-full ring-4 ring-[#e5b54d]/70 ring-offset-4 ring-offset-[#0a1730] sm:h-72 sm:w-72">
            <Image
              src="/images/profile.jpg"
              alt="Matin Roosta-ye Abkenar"
              fill
              sizes="(max-width: 640px) 224px, 288px"
              className="object-cover object-top"
            />
          </span>
        </Reveal>
      </div>
    </section>
  );
}
