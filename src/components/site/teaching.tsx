"use client";

import * as React from "react";
import { BookMarked } from "lucide-react";
import { cn } from "@/lib/utils";
import { courses } from "@/lib/data/content";
import { SectionLabel } from "@/components/site/section-label";
import { Reveal } from "@/components/site/reveal";

export function Teaching() {
  return (
    <section id="teaching" className="relative scroll-mt-24 py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <Reveal className="flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <SectionLabel index="§ 03" title="Teaching" />
            <h2 className="display mt-5 max-w-2xl text-balance text-4xl text-foreground sm:text-5xl">
              Courses &amp; clinical instruction.
            </h2>
          </div>
          <p className="max-w-sm text-pretty text-sm leading-relaxed text-muted-foreground">
            Clinical teaching across critical care and prehospital emergency
            practice.
          </p>
        </Reveal>

        <div className="mt-12 grid gap-5 md:grid-cols-3">
          {courses.map((course, i) => (
            <Reveal key={course.id} delay={i * 70}>
              <CourseCard course={course} index={i + 1} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function CourseCard({
  course,
  index,
}: {
  course: (typeof courses)[number];
  index: number;
}) {
  return (
    <article
      className={cn(
        "group relative h-full overflow-hidden rounded-2xl border border-border bg-card p-7",
        "elevate hover:-translate-y-1 hover:shadow-[0_22px_50px_-28px_rgba(0,0,0,0.22)]"
      )}
    >
      <span
        className="pointer-events-none absolute left-0 top-0 h-10 w-10 rounded-tl-2xl border-l-2 border-t-2 border-scholar opacity-0 transition-all duration-500 ease-out-soft group-hover:opacity-100 group-hover:h-full group-hover:w-full"
        aria-hidden
      />

      <div className="relative flex items-center justify-between">
        <span className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-border text-muted-foreground transition-colors duration-300 group-hover:border-scholar/40 group-hover:text-scholar">
          <BookMarked className="h-5 w-5" />
        </span>
        <span className="eyebrow tabular-nums text-muted-foreground">
          {String(index).padStart(2, "0")}
        </span>
      </div>

      <h3 className="relative mt-6 font-serif text-xl font-medium leading-snug tracking-tight text-foreground">
        {course.title}
      </h3>

      <div className="relative mt-6 flex items-center gap-2 border-t border-border pt-5 text-xs text-muted-foreground">
        <span className="h-1.5 w-1.5 rounded-full bg-scholar" aria-hidden />
        Clinical instruction
      </div>
    </article>
  );
}
