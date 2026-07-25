import type { Metadata } from "next";
import { Hanken_Grotesk, JetBrains_Mono } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SmoothScroll from "@/components/SmoothScroll";
import "@/styles/globals.css";

const hanken = Hanken_Grotesk({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-heading",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-mono",
  display: "swap",
});

const SITE_URL = "https://achaltiwari.com";
const TITLE = "Achal Tiwari — AI Product Manager & 0→1 Builder";
const DESCRIPTION =
  "I take ideas 0→1 and ship real AI products, fast — by directing AI, not just writing specs. Product Manager at Infinity Learn. 10K+ users, profitable in five weeks, multiple live products across domains. Open to Senior / AI-PM roles (UK + India).";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: TITLE,
    template: "%s · Achal Tiwari",
  },
  description: DESCRIPTION,
  alternates: { canonical: "/" },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: SITE_URL,
    siteName: "Achal Tiwari",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description: DESCRIPTION,
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Person",
      "@id": `${SITE_URL}/#achal`,
      name: "Achal Tiwari",
      url: SITE_URL,
      jobTitle: "Product Manager",
      worksFor: { "@type": "Organization", name: "Infinity Learn" },
      alumniOf: [
        "BITS Pilani",
        "Dr. A.P.J. Abdul Kalam Technical University",
      ],
      knowsAbout: [
        "AI product management",
        "LLM and agent products",
        "0-to-1 product development",
        "Growth",
        "Product strategy",
      ],
      sameAs: [
        "https://www.linkedin.com/in/achal-tiwari-7701131b6/",
        "https://github.com/TheAchal",
        "https://www.geeksforgeeks.org/profile/achal11sp?tab=posts",
      ],
    },
    {
      "@type": "WebSite",
      "@id": `${SITE_URL}/#website`,
      url: SITE_URL,
      name: "Achal Tiwari",
      description: DESCRIPTION,
      publisher: { "@id": `${SITE_URL}/#achal` },
    },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${hanken.variable} ${jetbrainsMono.variable}`}
    >
      <body className="min-h-screen flex flex-col">
        <SmoothScroll />
        <div className="aurora" aria-hidden="true" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <Navbar />
        <main className="flex-1 w-full max-w-[1728px] mx-auto px-5 sm:px-8 lg:px-12 py-10">
          {children}
        </main>
        <Footer />
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
