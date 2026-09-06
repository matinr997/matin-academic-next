import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, FileText } from "lucide-react";
import { publicationsPage } from "@/lib/data/content";
import { Reveal } from "@/components/site/reveal";
import { SectionLabel } from "@/components/site/section-label";

export const metadata: Metadata = {
  title: "Publications | Matin Roosta",
  description:
    "Publications by Matin Roosta — peer-reviewed nursing research on diabetes self-care, Peplau's theory, and evidence-based practice.",
  alternates: { canonical: "/publications.html" },
  openGraph: {
    title: "Publications | Matin Roosta",
    description: "Publications by Matin Roosta.",
    url: "/publications.html",
    type: "article",
  },
};

export default function PublicationsPage() {
  return (
    <main className="relative mx-auto min-h-screen max-w-3xl px-5 pt-36 pb-24 sm:px-8 sm:pt-44">
      <Reveal>
        <SectionLabel index="§ Publications" title="Index" />
      </Reveal>
      <Reveal delay={80}>
        <h1 className="display mt-6 text-balance text-4xl leading-[1.05] text-foreground sm:text-5xl lg:text-6xl">
          {publicationsPage.title}
        </h1>
      </Reveal>

      <Reveal delay={140}>
        <ul className="mt-14 divide-y divide-border border-y border-border">
          {publicationsPage.items.map((item, i) => (
            <li
              key={item}
              className="group flex items-center gap-5 py-6 transition-colors duration-300 hover:bg-muted/40"
            >
              <span className="font-mono text-sm font-medium tabular-nums text-scholar">
                {String(i + 1).padStart(2, "0")}
              </span>
              <span className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-border text-muted-foreground transition-colors duration-300 group-hover:border-scholar/40 group-hover:text-scholar">
                <FileText className="h-4 w-4" />
              </span>
              <span className="font-serif text-xl font-medium tracking-tight text-foreground">
                {item}
              </span>
            </li>
          ))}
        </ul>
      </Reveal>

      <Reveal delay={200}>
        <Link
          href="/"
          className="group mt-12 inline-flex items-center gap-2 rounded-full border border-border px-5 py-2.5 text-sm font-medium text-foreground transition-all duration-300 hover:border-foreground/30 hover:bg-muted focus-ring"
        >
          <ArrowLeft className="h-4 w-4 transition-transform duration-300 group-hover:-translate-x-0.5" />
          {publicationsPage.backLink}
        </Link>
      </Reveal>
    </main>
  );
}
