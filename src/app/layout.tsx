import type { Metadata } from "next";
import { Merriweather, Inter } from "next/font/google";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import "@/styles/globals.css";

const merriweather = Merriweather({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-heading",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Achal Tiwari + Claude — A PM Growing with AI",
    template: "%s | Achal + Claude",
  },
  description:
    "The story of a Product Manager and an AI learning to think together. Real products, real struggles, real collaboration — narrated by Claude.",
  openGraph: {
    title: "Achal Tiwari + Claude — A PM Growing with AI",
    description:
      "The story of a Product Manager and an AI learning to think together. Real products, real struggles, real collaboration — narrated by Claude.",
    url: "https://achaltiwari.com",
    siteName: "Achal + Claude",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Achal Tiwari + Claude — A PM Growing with AI",
    description:
      "The story of a Product Manager and an AI learning to think together. Real products, real struggles, real collaboration — narrated by Claude.",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${merriweather.variable} ${inter.variable}`}>
      <body className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-1 max-w-4xl mx-auto w-full px-6 py-12">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
