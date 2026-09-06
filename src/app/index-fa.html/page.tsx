import type { Metadata } from "next";
import { Header } from "@/components/site/header";
import { Footer } from "@/components/site/footer";
import { PersianHome } from "@/components/site/persian-home";

export const metadata: Metadata = {
  title: "متین روستا | پورتفولیوی آکادمیک",
  description:
    "متین روستا — پژوهشگر حوزه پرستاری مراقبت‌های ویژه، طب اورژانس و نوآوری در سیستم‌های مراقبت بهداشتی. عضو هیئت علمی دانشگاه علوم پزشکی هرمزگان.",
  alternates: {
    canonical: "/index-fa.html",
    languages: { fa: "/index-fa.html", en: "/" },
  },
  openGraph: {
    title: "متین روستا | پورتفولیوی آکادمیک",
    description:
      "پژوهشگر حوزه پرستاری مراقبت‌های ویژه، طب اورژانس و نوآوری در سیستم‌های مراقبت بهداشتی.",
    url: "/index-fa.html",
    locale: "fa_IR",
    type: "profile",
  },
};

export default function PersianPage() {
  return (
    <div dir="rtl" lang="fa" className="flex min-h-screen flex-col bg-background font-fa">
      <Header variant="fa-home" />
      <main className="flex-1 font-fa">
        <PersianHome />
      </main>
      <Footer variant="fa-home" />
    </div>
  );
}
