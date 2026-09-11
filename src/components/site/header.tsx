"use client";

import * as React from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { profile, profileFa } from "@/lib/data/content";
import { ThemeToggle } from "@/components/site/theme-toggle";

type Variant = "en-home" | "en-about" | "en-blog" | "fa-home";

const navByVariant: Record<
  Variant,
  { label: string; href: string }[]
> = {
  "en-home": [
    { label: "About", href: "/about.html" },
    { label: "Publications", href: "/#publications" },
    { label: "Teaching", href: "/#teaching" },
    { label: "Blog", href: "/blog.html" },
  ],
  "en-about": [
    { label: "About", href: "/about.html" },
    { label: "Publications", href: "/#publications" },
    { label: "Teaching", href: "/#teaching" },
    { label: "Blog", href: "/blog.html" },
  ],
  "en-blog": [
    { label: "About", href: "/about.html" },
    { label: "Publications", href: "/#publications" },
    { label: "Teaching", href: "/#teaching" },
    { label: "Blog", href: "/blog.html" },
  ],
  "fa-home": profileFa.nav,
};

export function Header({ variant }: { variant: Variant }) {
  const [scrolled, setScrolled] = React.useState(false);
  const [progress, setProgress] = React.useState(0);
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const isFa = variant === "fa-home";
  const logoText = isFa ? profileFa.name : profile.name;
  const logoHref = isFa ? profileFa.englishUrl : profile.homeUrl;
  const nav = navByVariant[variant];
  const activePath = isFa
    ? null
    : variant === "en-about"
    ? "/about.html"
    : variant === "en-blog"
    ? "/blog.html"
    : "/";

  React.useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY;
      setScrolled(y > 24);
      const docH =
        document.documentElement.scrollHeight - window.innerHeight;
      setProgress(docH > 0 ? Math.min(y / docH, 1) : 0);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  React.useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  const go = (e: React.MouseEvent, href: string) => {
    if (href === "#") return; // FA placeholder
    if (href.startsWith("#")) {
      e.preventDefault();
      setMobileOpen(false);
      const el = document.getElementById(href.slice(1));
      if (el) {
        const top = el.getBoundingClientRect().top + window.scrollY - 80;
        window.scrollTo({ top, behavior: "smooth" });
      }
      return;
    }
    // allow next/link to handle route nav, just close mobile
    setMobileOpen(false);
  };

  return (
    <>
      <header className="fixed inset-x-0 top-0 z-50 transition-all duration-500 ease-out-soft">
        {/* Reading progress bar */}
        <div
          className="absolute inset-x-0 top-0 h-px origin-left bg-scholar"
          style={{ transform: `scaleX(${progress})` }}
          aria-hidden
        />

        <div
          className={cn(
            "mx-auto flex h-16 max-w-6xl items-center justify-between px-5 transition-all duration-500 ease-out-soft sm:px-8",
            scrolled
              ? "border-b border-border/70 bg-background/80 backdrop-blur-xl"
              : "border-b border-transparent bg-transparent"
          )}
        >
          {/* Wordmark */}
          <Link
            href={logoHref}
            className={cn(
              "group flex items-baseline gap-2 rounded-sm focus-ring",
              isFa && "font-fa"
            )}
            aria-label="Home"
          >
            <span
              className={cn(
                "text-[15px] font-semibold tracking-tight text-foreground",
                isFa ? "font-fa text-base" : "font-serif"
              )}
            >
              {logoText}
            </span>
            {!isFa && (
              <span className="hidden text-xs text-muted-foreground transition-colors duration-300 group-hover:text-scholar sm:inline">
                / Research
              </span>
            )}
          </Link>

          {/* Desktop nav */}
          <nav
            className="hidden items-center gap-1 md:flex"
            aria-label="Primary"
          >
            {nav.map((item) => {
              const isActive = activePath && item.href === activePath;
              return (
                <Link
                  key={item.label}
                  href={item.href}
                  onClick={(e) => go(e, item.href)}
                  className={cn(
                    "relative rounded-full px-4 py-2 text-sm transition-colors duration-300 focus-ring",
                    isFa && "font-fa text-[0.95rem]",
                    isActive
                      ? "text-foreground"
                      : "text-muted-foreground hover:text-foreground"
                  )}
                >
                  {item.label}
                  <span
                    className={cn(
                      "absolute inset-x-4 -bottom-0.5 h-px origin-left bg-scholar transition-transform duration-300 ease-out-soft",
                      isActive ? "scale-x-100" : "scale-x-0"
                    )}
                    aria-hidden
                  />
                </Link>
              );
            })}
          </nav>

          <div className="flex items-center gap-1.5">
            {/* Language toggle */}
            {variant === "en-home" && (
              <Link
                href={profile.persianUrl}
                title="Persian"
                className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-border text-xs font-bold text-muted-foreground transition-all duration-300 hover:border-foreground/30 hover:text-foreground focus-ring"
              >
                FA
              </Link>
            )}
            {variant === "fa-home" && (
              <Link
                href={profileFa.englishUrl}
                title="English"
                className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-border text-xs font-bold text-muted-foreground transition-all duration-300 hover:border-foreground/30 hover:text-foreground focus-ring"
                style={{ fontFamily: "var(--font-geist-sans), Arial, sans-serif" }}
              >
                EN
              </Link>
            )}

            {/* Theme toggle (EN pages only — FA page has none in original) */}
            {!isFa && <ThemeToggle />}

            {/* Mobile trigger */}
            <button
              type="button"
              aria-label={isFa ? "باز کردن منو" : "Open menu"}
              aria-expanded={mobileOpen}
              onClick={() => setMobileOpen((v) => !v)}
              className="inline-flex h-9 w-9 items-center justify-center rounded-full text-foreground transition-colors hover:bg-muted focus-ring md:hidden"
            >
              {mobileOpen ? (
                <X className="h-5 w-5" />
              ) : (
                <Menu className="h-5 w-5" />
              )}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile sheet menu */}
      <div
        className={cn(
          "fixed inset-0 z-40 transition-all duration-500 ease-out-soft md:hidden",
          mobileOpen ? "visible opacity-100" : "invisible opacity-0"
        )}
        aria-hidden={!mobileOpen}
      >
        <div
          className="absolute inset-0 bg-background/95 backdrop-blur-xl"
          onClick={() => setMobileOpen(false)}
        />
        <nav
          className="relative flex h-full flex-col justify-center px-8"
          aria-label="Mobile"
        >
          {nav.map((item, i) => (
            <Link
              key={item.label}
              href={item.href}
              onClick={(e) => go(e, item.href)}
              className={cn(
                "group flex items-baseline gap-4 border-b border-border/60 py-5 transition-all duration-500 ease-out-soft",
                mobileOpen
                  ? "translate-y-0 opacity-100"
                  : "translate-y-4 opacity-0",
                isFa && "font-fa"
              )}
              style={{ transitionDelay: mobileOpen ? `${120 + i * 70}ms` : "0ms" }}
            >
              <span className="eyebrow tabular-nums text-scholar">
                {String(i + 1).padStart(2, "0")}
              </span>
              <span
                className={cn(
                  "text-3xl font-medium tracking-tight text-foreground transition-colors group-hover:text-scholar",
                  isFa ? "font-fa" : "font-serif"
                )}
              >
                {item.label}
              </span>
            </Link>
          ))}
        </nav>
      </div>
    </>
  );
}
