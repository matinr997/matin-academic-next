import { Header } from "@/components/site/header";
import { Hero } from "@/components/site/hero";
import { Research } from "@/components/site/research";
import { Publications } from "@/components/site/publications";
import { Teaching } from "@/components/site/teaching";
import { Footer } from "@/components/site/footer";
import { ScrollToTop } from "@/components/site/scroll-to-top";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-background">
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
