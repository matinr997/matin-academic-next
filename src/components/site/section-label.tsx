import * as React from "react";
import { cn } from "@/lib/utils";

interface SectionLabelProps extends React.HTMLAttributes<HTMLDivElement> {
  index?: string;
  title: string;
}

/**
 * Editorial section label: a monospaced index, an accent tick,
 * and an uppercase title. Used to anchor every major section.
 */
export function SectionLabel({
  index,
  title,
  className,
  ...props
}: SectionLabelProps) {
  return (
    <div
      className={cn(
        "flex items-center gap-3 text-muted-foreground",
        className
      )}
      {...props}
    >
      {index && (
        <span className="eyebrow text-scholar tabular-nums">{index}</span>
      )}
      <span className="h-px w-6 bg-scholar/50" aria-hidden />
      <span className="eyebrow">{title}</span>
    </div>
  );
}
