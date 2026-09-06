import type { Metadata } from "next";
import { Header } from "@/components/site/header";
import { Footer } from "@/components/site/footer";
import { ScrollToTop } from "@/components/site/scroll-to-top";
import { Reveal } from "@/components/site/reveal";
import { SectionLabel } from "@/components/site/section-label";
import { researchPage } from "@/lib/data/content";

export const metadata: Metadata = {
  title: "Research | Matin Roosta",
  description:
    "The foundation of nursing research — advancing clinical practice in critical care, emergency medicine, and chronic disease management, and its impact on human lives.",
  alternates: { canonical: "/research.html" },
  openGraph: {
    title: "Research | Matin Roosta",
    description:
      "The foundation of nursing research — advancing clinical practice and its impact on human lives.",
    url: "/research.html",
    type: "article",
  },
};

export default function ResearchPage() {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <Header variant="en-research" />
      <main className="flex-1">
        {/* Page hero */}
        <section className="relative overflow-hidden border-b border-border pt-36 pb-16 sm:pt-44 lg:pt-48">
          <div
            className="pointer-events-none absolute inset-0 bg-grid opacity-[0.5] [mask-image:radial-gradient(ellipse_at_top,black,transparent_70%)]"
            aria-hidden
          />
          <div
            className="pointer-events-none absolute inset-x-0 top-0 h-px accent-line opacity-50"
            aria-hidden
          />
          <div className="relative mx-auto max-w-3xl px-5 sm:px-8">
            <Reveal>
              <SectionLabel index="§ Research" title="Foundations" />
            </Reveal>
            <Reveal delay={80}>
              <h1 className="display mt-6 text-balance text-4xl leading-[1.05] text-foreground sm:text-5xl lg:text-6xl">
                {researchPage.titlePre}{" "}
                <span className="italic font-normal text-scholar">
                  {researchPage.titleAccent}
                </span>
              </h1>
            </Reveal>
          </div>
        </section>

        {/* Section blocks */}
        <section className="py-20 sm:py-28">
          <div className="mx-auto max-w-3xl px-5 sm:px-8">
            <div className="space-y-20">
              {researchPage.blocks.map((block, i) => (
                <Reveal key={block.heading} delay={i * 60}>
                  <article>
                    <div className="flex items-center gap-3">
                      <span className="font-mono text-xs font-medium tabular-nums text-scholar">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <span className="h-px w-8 bg-scholar/50" aria-hidden />
                      <h2 className="font-serif text-2xl font-medium tracking-tight text-foreground sm:text-3xl">
                        {block.heading}
                      </h2>
                    </div>
                    <div className="mt-6 space-y-5">
                      {block.paragraphs.map((p, idx) => (
                        <p
                          key={idx}
                          className="text-pretty font-serif text-lg leading-[1.8] text-foreground/80"
                        >
                          {p}
                        </p>
                      ))}
                    </div>
                  </article>
                </Reveal>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer variant="en-research" />
      <ScrollToTop />
    </div>
  );
}
