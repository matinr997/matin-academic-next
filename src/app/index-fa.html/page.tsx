import type { Metadata } from "next";
import { Header } from "@/components/site/header";
import { Footer } from "@/components/site/footer";
import { PersianHome } from "@/components/site/persian-home";

export const metadata: Metadata = {
  title: "متین روستا | پورتفولیوی آکادمیک",
  description:
    "متین روستا — پژوهشگر حوزه پرستاری مراقبت‌های ویژه، طب اورژانس و نوآوری در سیستم‌های مراقبت بهداشتی. عضو هیئت علمی دانشگاه علوم پزشکی هرمزگان.",
  keywords: [
    "متین روستا",
    "متین روستای آبکنار",
    "Matin Roosta",
    "پرستاری مراقبت‌های ویژه",
    "پرستاری سالمندی",
    "خودمراقبتی دیابت",
    "تئوری پپلاو",
    "دانشگاه علوم پزشکی هرمزگان",
    "هوش مصنوعی در پرستاری",
  ],
  alternates: {
    canonical: "/index-fa.html",
    languages: { fa: "/index-fa.html", en: "/" },
  },
  openGraph: {
    title: "متین روستا | پورتفولیوی آکادمیک",
    description:
      "متین روستا — پژوهشگر حوزه پرستاری مراقبت‌های ویژه، طب اورژانس و نوآوری در سیستم‌های مراقبت بهداشتی. عضو هیئت علمی دانشگاه علوم پزشکی هرمزگان.",
    url: "/index-fa.html",
    locale: "fa_IR",
    type: "profile",
  },
};

function PersonJsonLdFa() {
  const data = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "متین روستا",
    givenName: "متین",
    familyName: "روستا",
    additionalName: "روستای آبکنار",
    alternateName: [
      "Matin Roosta",
      "متین روستای آبکنار",
      "Matin Roosta-ye Abkenar",
    ],
    jobTitle: ["عضو هیئت علمی", "پژوهشگر", "پرستار"],
    description:
      "متین روستا — پژوهشگر حوزه پرستاری مراقبت‌های ویژه، طب اورژانس و نوآوری در سیستم‌های مراقبت بهداشتی. عضو هیئت علمی دانشگاه علوم پزشکی هرمزگان.",
    image: "https://matin-academic-next-nkah.vercel.app/images/profile.jpg",
    url: "https://matin-academic-next-nkah.vercel.app/index-fa.html",
    affiliation: {
      "@type": "Organization",
      name: "دانشگاه علوم پزشکی هرمزگان",
      alternateName: "Hormozgan University of Medical Sciences",
    },
    sameAs: [
      "https://scholar.google.com/citations?hl=en&user=ZGdhd8QAAAAJ",
      "https://orcid.org/0000-0001-9121-0000",
      "https://www.linkedin.com/in/matin-roosta-ye-abkenar",
      "https://www.youtube.com/@coffee.nursing",
    ],
    knowsAbout: [
      "Nursing Research",
      "Critical Care Nursing",
      "Geriatric Nursing",
      "Diabetes Self-Care",
      "Peplau Theory",
      "Artificial Intelligence in Healthcare",
    ],
  };
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

export default function PersianPage() {
  return (
    <div dir="rtl" lang="fa" className="flex min-h-screen flex-col bg-background font-fa">
      <PersonJsonLdFa />
      <Header variant="fa-home" />
      <main className="flex-1 font-fa">
        <PersianHome />
      </main>
      <Footer variant="fa-home" />
    </div>
  );
}
