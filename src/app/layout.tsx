import type { Metadata } from "next";
import { Geist, Geist_Mono, Newsreader, Vazirmatn } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";
import { ThemeProvider } from "@/components/providers";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

const newsreader = Newsreader({
  variable: "--font-serif",
  subsets: ["latin"],
  display: "swap",
  style: ["normal", "italic"],
  weight: ["400", "500", "600"],
});

const vazirmatn = Vazirmatn({
  variable: "--font-fa",
  subsets: ["arabic", "latin"],
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://matin-academic-next-nkah.vercel.app"),
  title: "Matin Roosta | Academic Portfolio",
  description:
    "Matin Roosta — nurse, educator, and researcher. Faculty member at Hormozgan University of Medical Sciences working on critical care, geriatric nursing, diabetes self-care, and AI in healthcare.",
  keywords: [
    "Matin Roosta",
    "nursing research",
    "critical care nursing",
    "gerontology",
    "diabetes self-care",
    "Peplau theory",
    "health informatics",
    "AI in nursing",
    "Hormozgan University of Medical Sciences",
  ],
  authors: [{ name: "Matin Roosta", url: "https://matin-academic-next-nkah.vercel.app" }],
  creator: "Matin Roosta",
  alternates: {
    canonical: "/",
    languages: {
      en: "/",
      fa: "/index-fa.html",
    },
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "c470622fe7671ca5",
  },
  icons: {
    icon: "/images/favicon.jpg",
    shortcut: "/images/favicon.jpg",
    apple: "/images/favicon.jpg",
  },
  openGraph: {
    title: "Matin Roosta | Academic Portfolio",
    description:
      "Nurse, educator, and researcher. Publications, research, and teaching in nursing care, aging, AI in healthcare, and chronic disease management.",
    url: "/",
    siteName: "Matin Roosta — Academic Portfolio",
    locale: "en_US",
    alternateLocale: "fa_IR",
    type: "profile",
    images: [
      {
        url: "/images/profile.jpg",
        width: 1200,
        height: 630,
        alt: "Matin Roosta-ye Abkenar — Faculty Member of Nursing and Midwifery",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Matin Roosta | Academic Portfolio",
    description:
      "Nurse, educator, and researcher. Publications, research, and teaching in nursing care and AI in healthcare.",
    images: ["/images/profile.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${newsreader.variable} ${vazirmatn.variable} antialiased bg-background text-foreground`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem={false}
          disableTransitionOnChange
        >
          {children}
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}
