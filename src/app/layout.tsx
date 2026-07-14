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
  title: "Matin Roosta | Academic Portfolio",
  description:
    "Nurse, educator, and researcher in patient care, nursing education, and the application of artificial intelligence to advance healthcare and improve patient outcomes.",
  keywords: [
    "nursing research",
    "critical care",
    "gerontology",
    "health informatics",
    "diabetes self-care",
    "Peplau theory",
    "Matin Roosta",
  ],
  authors: [{ name: "Matin Roosta" }],
  icons: {
    icon: "/images/favicon.jpg",
    shortcut: "/images/favicon.jpg",
  },
  openGraph: {
    title: "Matin Roosta | Academic Portfolio",
    description:
      "Nurse, educator, and researcher. Publications, research, and teaching in nursing care, aging, AI in healthcare, and chronic disease management.",
    siteName: "Matin Roosta — Academic Portfolio",
    type: "profile",
  },
  twitter: {
    card: "summary_large_image",
    title: "Matin Roosta | Academic Portfolio",
    description:
      "Nurse, educator, and researcher. Publications, research, and teaching in nursing care and AI in healthcare.",
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
