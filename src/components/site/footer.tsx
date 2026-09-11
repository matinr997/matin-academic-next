"use client";

import * as React from "react";
import Link from "next/link";
import {
  Mail,
  Linkedin,
  Youtube,
  ArrowUp,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { profile, profileFa } from "@/lib/data/content";
import { OrcidIcon, ScholarIcon } from "@/components/site/brand-icons";

type Variant = "en-home" | "en-about" | "en-blog" | "fa-home";

function socialLinks(variant: Variant) {
  const isFa = variant === "fa-home";
  const p = isFa ? profileFa : profile;
  return [
    { label: "Email", href: `mailto:${profile.email}` },
    { label: "LinkedIn", href: p.linkedinUrl },
    { label: "YouTube", href: p.youtubeUrl },
    { label: "Google Scholar", href: p.scholarUrl },
    { label: "ORCID", href: p.orcidUrl },
  ];
}

const navByVariant: Record<Variant, { label: string; href: string }[]> = {
  "en-home": [
    { label: "About", href: "/about.html" },
    { label: "Publications", href: "/#publications" },
    { label: "Teaching", href: "/#teaching" },
    { label: "Blog", href: "/blog.html" },
  ],
  // about.html footer nav includes Home
  "en-about": [
    { label: "Home", href: "/" },
    { label: "About", href: "/about.html" },
    { label: "Publications", href: "/#publications" },
    { label: "Teaching", href: "/#teaching" },
    { label: "Blog", href: "/blog.html" },
  ],
  // blog.html footer nav includes Home
  "en-blog": [
    { label: "Home", href: "/" },
    { label: "About", href: "/about.html" },
    { label: "Publications", href: "/#publications" },
    { label: "Teaching", href: "/#teaching" },
    { label: "Blog", href: "/blog.html" },
  ],
  "fa-home": [
    { label: "پژوهش‌ها", href: "#" },
    { label: "مقالات", href: "/index-fa.html#publications" },
    { label: "سوابق تدریس", href: "/index-fa.html#teaching" },
    { label: "وبلاگ", href: "/blog.html" },
  ],
};

const socialIcons: Record<
  string,
  React.ComponentType<{ className?: string }>
> = {
  Email: Mail,
  LinkedIn: Linkedin,
  YouTube: Youtube,
  "Google Scholar": ScholarIcon,
  ORCID: OrcidIcon,
};

export function Footer({ variant }: { variant: Variant }) {
  const isFa = variant === "fa-home";
  const brand = isFa ? profileFa.name : profile.name.toUpperCase();
  const bio = isFa
    ? profileFa.footerBio
    : variant === "en-about"
    ? profile.footerBioResearch
    : profile.footerBioHome;
  const nav = navByVariant[variant];
  const socials = socialLinks(variant);
  const navHeading = isFa ? profileFa.footerNavHeading : "Navigate";
  const socialHeading = isFa ? profileFa.footerSocialHeading : "Elsewhere";

  return (
    <footer className="mt-auto border-t border-border bg-background">
      <div className="mx-auto max-w-6xl px-5 py-16 sm:px-8 sm:py-20">
        <div className="grid gap-12 lg:grid-cols-12">
          {/* Brand */}
          <div className="lg:col-span-6">
            <Link
              href={isFa ? profileFa.englishUrl : profile.homeUrl}
              className={cn(
                "group inline-flex items-baseline gap-2 rounded-sm focus-ring",
                isFa && "font-fa"
              )}
            >
              <span
                className={cn(
                  "text-xl font-bold tracking-tight text-foreground",
                  isFa ? "font-fa" : "font-serif"
                )}
              >
                {brand}
              </span>
              {!isFa && (
                <span className="text-sm text-muted-foreground transition-colors group-hover:text-scholar">
                  / Research
                </span>
              )}
            </Link>
            <p
              className={cn(
                "mt-5 max-w-md text-pretty text-sm leading-relaxed text-muted-foreground",
                isFa && "font-fa text-right"
              )}
            >
              {bio}
            </p>
          </div>

          {/* Navigation */}
          <div className="lg:col-span-3">
            <span
              className={cn(
                "eyebrow text-muted-foreground",
                isFa && "font-fa text-base normal-case tracking-normal"
              )}
            >
              {navHeading}
            </span>
            <ul className="mt-5 space-y-3">
              {nav.map((item) => (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    className={cn(
                      "link-underline rounded-sm text-sm text-muted-foreground transition-colors hover:text-foreground focus-ring",
                      isFa && "font-fa text-[0.95rem]"
                    )}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Elsewhere */}
          <div className="lg:col-span-3">
            <span
              className={cn(
                "eyebrow text-muted-foreground",
                isFa && "font-fa text-base normal-case tracking-normal"
              )}
            >
              {socialHeading}
            </span>
            <ul className="mt-5 space-y-3">
              {socials.map(({ label, href }) => {
                const Icon = socialIcons[label] ?? Mail;
                const isMail = href.startsWith("mailto:");
                return (
                  <li key={label}>
                    <Link
                      href={href}
                      target={isMail ? undefined : "_blank"}
                      rel={isMail ? undefined : "noopener noreferrer"}
                      className="group inline-flex items-center gap-2.5 rounded-sm text-sm text-muted-foreground transition-colors hover:text-foreground focus-ring"
                    >
                      <span className="inline-flex h-7 w-7 items-center justify-center rounded-full border border-border text-muted-foreground transition-all duration-300 group-hover:-translate-y-0.5 group-hover:border-scholar/40 group-hover:text-scholar">
                        <Icon className="h-3.5 w-3.5" />
                      </span>
                      <span
                        className="link-underline"
                        style={{
                          fontFamily:
                            "var(--font-geist-sans), Arial, sans-serif",
                        }}
                      >
                        {label}
                      </span>
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>

        {/* Sub-footer */}
        <div className="mt-14 flex flex-col-reverse items-start justify-between gap-6 border-t border-border pt-8 sm:flex-row sm:items-center">
          <p
            className={cn(
              "text-xs text-muted-foreground",
              isFa && "font-fa"
            )}
          >
            {isFa ? (
              <>
                © {new Date().getFullYear()} {profileFa.name}
              </>
            ) : (
              <>
                {profile.subFooterLeft} · {profile.subFooterRight}
              </>
            )}
          </p>

          <button
            type="button"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className={cn(
              "group inline-flex h-9 items-center gap-2 rounded-full border border-border px-4 text-xs font-medium text-foreground",
              "transition-all duration-300 hover:border-foreground/30 hover:bg-muted focus-ring",
              isFa && "font-fa"
            )}
          >
            {isFa ? "بازگشت به بالا" : "Back to top"}
            <ArrowUp className="h-3.5 w-3.5 transition-transform duration-300 group-hover:-translate-y-0.5" />
          </button>
        </div>
      </div>
    </footer>
  );
}
