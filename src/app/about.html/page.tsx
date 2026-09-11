import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Download, Mail, Youtube } from "lucide-react";
import { Header } from "@/components/site/header";
import { Footer } from "@/components/site/footer";
import { ScrollToTop } from "@/components/site/scroll-to-top";
import { Reveal } from "@/components/site/reveal";
import { SectionLabel } from "@/components/site/section-label";
import { Research } from "@/components/site/research";
import { aboutPage, profile } from "@/lib/data/content";

export const metadata: Metadata = {
  title: "About | Matin Roosta",
  description:
    "About Matin Roosta — nurse, educator, and researcher at Hormozgan University of Medical Sciences, creator of Coffee and Nursing on YouTube. Research, CV, and collaboration.",
  alternates: { canonical: "/about.html" },
  openGraph: {
    title: "About | Matin Roosta",
    description:
      "Nurse, educator, and researcher — and creator of Coffee and Nursing on YouTube.",
    url: "/about.html",
    type: "profile",
  },
};

export default function AboutPage() {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <Header variant="en-about" />
      <main className="flex-1">
        {/* Hero */}
        <section className="relative overflow-hidden border-b border-border pt-36 pb-16 sm:pt-44 lg:pt-48">
          <div
            className="pointer-events-none absolute inset-0 bg-grid opacity-[0.5] [mask-image:radial-gradient(ellipse_at_top,black,transparent_70%)]"
            aria-hidden
          />
          <div className="relative mx-auto max-w-6xl px-5 sm:px-8">
            <div className="grid items-center gap-12 lg:grid-cols-12">
              <div className="lg:col-span-7">
                <Reveal>
                  <SectionLabel index="§ About" title="Profile" />
                </Reveal>
                <Reveal delay={80}>
                  <h1 className="display mt-6 text-balance text-4xl leading-[1.05] text-foreground sm:text-5xl lg:text-6xl">
                    {aboutPage.titlePre}{" "}
                    <span className="italic font-normal text-scholar">
                      {aboutPage.titleAccent}
                    </span>
                  </h1>
                </Reveal>
                <Reveal delay={140}>
                  <div className="mt-8 space-y-5">
                    {aboutPage.story.map((p, i) => (
                      <p
                        key={i}
                        className="max-w-2xl text-pretty text-base leading-relaxed text-muted-foreground sm:text-lg"
                      >
                        {p}
                      </p>
                    ))}
                  </div>
                </Reveal>
                <Reveal delay={200}>
                  <div className="mt-9 flex flex-wrap items-center gap-3">
                    <a
                      href={profile.cvUrl}
                      target="_blank"
                      className="group inline-flex h-11 items-center gap-2 rounded-full bg-foreground px-6 text-sm font-medium text-background transition-all duration-300 hover:-translate-y-0.5 hover:bg-scholar hover:text-scholar-foreground hover:shadow-[0_12px_30px_-12px_rgba(66,133,244,0.55)] focus-ring"
                    >
                      <Download className="h-4 w-4" />
                      Download CV
                    </a>
                    <a
                      href={`${profile.youtubeUrl}?sub_confirmation=1`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group inline-flex h-11 items-center gap-2 rounded-full bg-[#ff0033] px-6 text-sm font-semibold text-white transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_12px_30px_-12px_rgba(255,0,51,0.6)] focus-ring"
                    >
                      <Youtube className="h-4 w-4" />
                      Coffee and Nursing
                    </a>
                    <a
                      href={`mailto:${profile.email}`}
                      className="group inline-flex h-11 items-center gap-2 rounded-full border border-border px-6 text-sm font-medium text-foreground transition-all duration-300 hover:-translate-y-0.5 hover:border-foreground/40 hover:bg-muted focus-ring"
                    >
                      <Mail className="h-4 w-4" />
                      Contact me
                    </a>
                  </div>
                </Reveal>
              </div>
              <Reveal delay={150} className="lg:col-span-5">
                <div className="relative mx-auto h-[380px] w-full max-w-sm overflow-hidden rounded-2xl border border-border bg-card sm:h-[460px]">
                  <Image
                    src="/images/profile.jpg"
                    alt="Matin Roosta-ye Abkenar"
                    fill
                    priority
                    sizes="(max-width: 1024px) 100vw, 40vw"
                    className="object-cover object-top"
                  />
                  <div className="absolute inset-x-0 bottom-0 border-t border-white/10 bg-[rgba(30,30,35,0.92)] px-5 py-3">
                    <p className="text-xs leading-snug text-white">
                      {profile.imageCaption}
                    </p>
                  </div>
                </div>
              </Reveal>
            </div>
          </div>
        </section>

        {/* Timeline */}
        <section className="border-b border-border py-20 sm:py-28">
          <div className="mx-auto max-w-6xl px-5 sm:px-8">
            <Reveal>
              <SectionLabel index="§ Path" title="Journey" />
            </Reveal>
            <div className="mt-10 grid gap-4 md:grid-cols-2">
              {aboutPage.timeline.map((t, i) => (
                <Reveal key={t.title} delay={i * 60}>
                  <div className="group h-full rounded-2xl border border-border bg-card p-6 transition-all duration-300 hover:-translate-y-0.5 hover:border-scholar/40 sm:p-7">
                    <p className="font-mono text-xs font-medium tabular-nums text-scholar">
                      {t.period}
                    </p>
                    <h3 className="mt-3 text-lg font-semibold tracking-tight text-foreground">
                      {t.title}
                    </h3>
                    <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">
                      {t.place}
                    </p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* Research (moved here from /research.html) */}
        <Research />

        {/* Collaboration */}
        <section className="border-t border-border bg-muted/30 py-20 sm:py-28">
          <div className="mx-auto max-w-3xl px-5 text-center sm:px-8">
            <Reveal>
              <SectionLabel index="§ Contact" title="Collaborate" />
            </Reveal>
            <Reveal delay={80}>
              <h2 className="display mt-6 text-balance text-3xl text-foreground sm:text-4xl">
                Let&apos;s work together.
              </h2>
            </Reveal>
            <Reveal delay={140}>
              <div className="mt-6 flex flex-wrap justify-center gap-2">
                {aboutPage.collab.map((c) => (
                  <span
                    key={c}
                    className="rounded-full border border-border bg-card px-4 py-2 text-sm text-muted-foreground"
                  >
                    {c}
                  </span>
                ))}
              </div>
            </Reveal>
            <Reveal delay={200}>
              <div className="mt-9 flex flex-wrap items-center justify-center gap-3">
                <a
                  href={`mailto:${profile.email}`}
                  className="group inline-flex h-11 items-center gap-2 rounded-full bg-foreground px-6 text-sm font-medium text-background transition-all duration-300 hover:-translate-y-0.5 hover:bg-scholar hover:text-scholar-foreground focus-ring"
                >
                  <Mail className="h-4 w-4" />
                  {profile.email}
                </a>
                <Link
                  href={profile.linkedinUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex h-11 items-center gap-2 rounded-full border border-border px-6 text-sm font-medium text-foreground transition-all duration-300 hover:-translate-y-0.5 hover:border-foreground/40 hover:bg-muted focus-ring"
                >
                  LinkedIn
                  <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </Link>
              </div>
            </Reveal>
          </div>
        </section>
      </main>
      <Footer variant="en-about" />
      <ScrollToTop />
    </div>
  );
}
