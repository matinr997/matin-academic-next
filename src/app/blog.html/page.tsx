import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight, PenLine } from "lucide-react";
import { Header } from "@/components/site/header";
import { Footer } from "@/components/site/footer";
import { ScrollToTop } from "@/components/site/scroll-to-top";
import { Reveal } from "@/components/site/reveal";
import { SectionLabel } from "@/components/site/section-label";
import { blogPage, blogPosts } from "@/lib/data/content";

export const metadata: Metadata = {
  title: "Blog | Matin Roosta",
  description:
    "Essays and reflections on nursing practice, education, and research by Matin Roosta.",
};

export default function BlogPage() {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <Header variant="en-blog" />
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
              <SectionLabel index="§ Blog" title="Notes" />
            </Reveal>
            <Reveal delay={80}>
              <h1 className="display mt-6 text-balance text-4xl leading-[1.05] text-foreground sm:text-5xl lg:text-6xl">
                {blogPage.titlePre}{" "}
                <span className="italic font-normal text-scholar">
                  {blogPage.titleAccent}
                </span>
              </h1>
            </Reveal>
            <Reveal delay={140}>
              <p className="mt-6 max-w-2xl text-pretty text-base leading-relaxed text-muted-foreground sm:text-lg">
                {blogPage.intro}
              </p>
            </Reveal>
          </div>
        </section>

        {/* Post list */}
        <section className="py-20 sm:py-28">
          <div className="mx-auto max-w-3xl px-5 sm:px-8">
            <div className="flex flex-col gap-5">
              {blogPosts.map((post, i) => (
                <Reveal key={post.slug} delay={i * 60}>
                  <Link
                    href={`/blog.html/${post.slug}`}
                    className="group relative block overflow-hidden rounded-2xl border border-border bg-card p-6 elevate transition-all duration-500 hover:-translate-y-1 hover:border-foreground/15 hover:shadow-[0_22px_50px_-28px_rgba(0,0,0,0.25)] focus-ring sm:p-8"
                  >
                    <span
                      className="pointer-events-none absolute inset-x-0 top-0 h-px origin-left scale-x-0 bg-scholar transition-transform duration-500 ease-out-soft group-hover:scale-x-100"
                      aria-hidden
                    />
                    <div className="flex items-center gap-3 text-xs text-muted-foreground">
                      <span className="inline-flex h-7 w-7 items-center justify-center rounded-full border border-border transition-colors duration-300 group-hover:border-scholar/40 group-hover:text-scholar">
                        <PenLine className="h-3.5 w-3.5" />
                      </span>
                      <time dateTime={post.date}>{post.date}</time>
                      <span aria-hidden>·</span>
                      <span>{post.readingTime}</span>
                      <ArrowUpRight className="ml-auto h-4 w-4 transition-all duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-scholar" />
                    </div>
                    <h2 className="mt-4 text-balance text-xl font-semibold leading-snug tracking-tight text-foreground transition-colors duration-300 group-hover:text-scholar sm:text-2xl">
                      {post.title}
                    </h2>
                    <p className="mt-3 max-w-2xl text-pretty text-sm leading-relaxed text-muted-foreground sm:text-[0.95rem]">
                      {post.excerpt}
                    </p>
                    <div className="mt-5 flex flex-wrap gap-2">
                      {post.tags.map((t) => (
                        <span
                          key={t}
                          className="rounded-full border border-border bg-background px-3 py-1 text-xs font-medium text-muted-foreground transition-colors duration-300 group-hover:border-scholar/30 group-hover:text-foreground"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </Link>
                </Reveal>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer variant="en-blog" />
      <ScrollToTop />
    </div>
  );
}
