import type { Metadata } from "next";
import { Header } from "@/components/site/header";
import { Hero } from "@/components/site/hero";
import { Research } from "@/components/site/research";
import { Publications } from "@/components/site/publications";
import { Teaching } from "@/components/site/teaching";
import { Footer } from "@/components/site/footer";
import { ScrollToTop } from "@/components/site/scroll-to-top";
import { profile } from "@/lib/data/content";

export const metadata: Metadata = {
  alternates: {
    canonical: "/",
    languages: { en: "/", fa: "/index-fa.html" },
  },
  openGraph: { url: "/" },
};

/** Structured data: academic profile — helps Google show a rich result. */
function PersonJsonLd() {
  const data = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Matin Roosta-ye Abkenar",
    alternateName: "Matin Roosta",
    jobTitle: ["Nurse", "Researcher", "Faculty Member"],
    description: profile.shortBio,
    image: "https://matin-academic-next.vercel.app/images/profile.jpg",
    url: "https://matin-academic-next.vercel.app/",
    email: `mailto:${profile.email}`,
    affiliation: {
      "@type": "Organization",
      name: "Hormozgan University of Medical Sciences",
    },
    sameAs: [
      profile.scholarUrl,
      profile.orcidUrl,
      profile.linkedinUrl,
      profile.youtubeUrl,
    ],
  };
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <PersonJsonLd />
      <Header variant="en-home" />
      <main className="flex-1">
        <Hero />
        <Research />
        <Publications />
        <Teaching />
      </main>
      <Footer variant="en-home" />
      <ScrollToTop />
    </div>
  );
}
