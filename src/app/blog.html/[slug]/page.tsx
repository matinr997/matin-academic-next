import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { ArrowLeft, CalendarDays, Clock } from "lucide-react";
import { Header } from "@/components/site/header";
import { Footer } from "@/components/site/footer";
import { ScrollToTop } from "@/components/site/scroll-to-top";
import { Reveal } from "@/components/site/reveal";
import { blogPosts } from "@/lib/data/content";

export function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);
  if (!post) return { title: "Post not found | Matin Roosta" };
  const url = `/blog.html/${post.slug}`;
  return {
    title: `${post.title} | Matin Roosta`,
    description: post.excerpt,
    keywords: post.tags,
    authors: [{ name: "Matin Roosta" }],
    alternates: { canonical: url },
    openGraph: {
      title: post.title,
      description: post.excerpt,
      url,
      type: "article",
      publishedTime: post.date,
      authors: ["Matin Roosta"],
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.excerpt,
    },
  };
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);
  if (!post) notFound();

  const related = blogPosts.filter((p) => p.slug !== post.slug).slice(0, 2);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.excerpt,
    datePublished: post.date,
    author: {
      "@type": "Person",
      name: "Matin Roosta-ye Abkenar",
      url: "https://matin-academic-next-nkah.vercel.app/",
    },
    mainEntityOfPage: `https://matin-academic-next-nkah.vercel.app/blog.html/${post.slug}`,
    keywords: post.tags.join(", "),
  };

  return (
    <div className="flex min-h-screen flex-col bg-background">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Header variant="en-blog" />
      <main className="flex-1">
        <article className="relative mx-auto max-w-3xl px-5 pt-36 pb-16 sm:px-8 sm:pt-44">
          <Reveal>
            <Link
              href="/blog.html"
              className="group inline-flex items-center gap-2 rounded-full border border-border px-4 py-2 text-xs font-medium text-muted-foreground transition-all duration-300 hover:border-foreground/30 hover:text-foreground focus-ring"
            >
              <ArrowLeft className="h-3.5 w-3.5 transition-transform duration-300 group-hover:-translate-x-0.5" />
              All posts
            </Link>
          </Reveal>

          <Reveal delay={70}>
            <div className="mt-8 flex flex-wrap items-center gap-x-4 gap-y-2 text-xs text-muted-foreground">
              <span className="inline-flex items-center gap-1.5">
                <CalendarDays className="h-3.5 w-3.5" />
                <time dateTime={post.date}>{post.date}</time>
              </span>
              <span className="inline-flex items-center gap-1.5">
                <Clock className="h-3.5 w-3.5" />
                {post.readingTime}
              </span>
            </div>
            <h1 className="display mt-5 text-balance text-3xl leading-[1.1] tracking-tight text-foreground sm:text-5xl">
              {post.title}
            </h1>
            <div className="mt-5 flex flex-wrap gap-2">
              {post.tags.map((t) => (
                <span
                  key={t}
                  className="rounded-full border border-border bg-card px-3 py-1 text-xs font-medium text-muted-foreground"
                >
                  {t}
                </span>
              ))}
            </div>
          </Reveal>

          {post.image && (
            <Reveal delay={100}>
              <span className="relative mt-10 block h-64 w-full overflow-hidden rounded-2xl border border-border sm:h-96">
                <Image
                  src={post.image}
                  alt={post.imageAlt ?? post.title}
                  fill
                  priority
                  sizes="(max-width: 768px) 100vw, 768px"
                  className="object-cover"
                />
              </span>
            </Reveal>
          )}

          <Reveal delay={130}>
            <div className="mt-10 space-y-6 border-t border-border pt-10">
              {post.paragraphs.map((p, i) => (
                <p
                  key={i}
                  className={
                    i === 0
                      ? "text-pretty font-serif text-xl leading-[1.8] text-foreground"
                      : "text-pretty font-serif text-lg leading-[1.8] text-foreground/80"
                  }
                >
                  {p}
                </p>
              ))}
            </div>
          </Reveal>

          {related.length > 0 && (
            <Reveal delay={100}>
              <div className="mt-16 border-t border-border pt-10">
                <span className="eyebrow text-muted-foreground">
                  Keep reading
                </span>
                <div className="mt-5 grid gap-4 sm:grid-cols-2">
                  {related.map((r) => (
                    <Link
                      key={r.slug}
                      href={`/blog.html/${r.slug}`}
                      className="group rounded-2xl border border-border bg-card p-5 transition-all duration-300 hover:-translate-y-0.5 hover:border-scholar/40 focus-ring"
                    >
                      <p className="text-xs text-muted-foreground">{r.date}</p>
                      <p className="mt-2 text-pretty text-sm font-semibold leading-snug text-foreground transition-colors group-hover:text-scholar">
                        {r.title}
                      </p>
                    </Link>
                  ))}
                </div>
              </div>
            </Reveal>
          )}
        </article>
      </main>
      <Footer variant="en-blog" />
      <ScrollToTop />
    </div>
  );
}
