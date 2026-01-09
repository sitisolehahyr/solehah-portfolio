import type { Metadata, Viewport } from "next";
import { Poppins } from "next/font/google";
import siteData from "@/data/siteData.json";
import { getSiteUrl } from "@/lib/siteUrl";
import "./globals.css";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-poppins"
});

export const metadata: Metadata = {
  title: {
    default: siteData.personal.name,
    template: `%s | ${siteData.personal.name}`
  },
  description: siteData.personal.bio ?? siteData.personal.tagline,
  applicationName: "Siti Solehah Portfolio",
  authors: [{ name: "Siti Solehah Yunita Rahmawati" }],
  keywords: [
    "AI Engineer",
    "Software Engineer",
    "Portfolio",
    "Machine Learning",
    "Next.js",
    "Kuala Lumpur"
  ],
  metadataBase: getSiteUrl(),
  alternates: {
    canonical: "/"
  },
  openGraph: {
    type: "website",
    title: `${siteData.personal.name} | ${siteData.personal.title}`,
    description: siteData.personal.tagline,
    images: [{ url: "/opengraph-image" }]
  },
  twitter: {
    card: "summary_large_image",
    title: `${siteData.personal.name} | ${siteData.personal.title}`,
    description: siteData.personal.tagline,
    images: ["/twitter-image"]
  }
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#FFFFFF" },
    { media: "(prefers-color-scheme: dark)", color: "#0F172A" }
  ]
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${poppins.variable} scroll-smooth`} suppressHydrationWarning>
      <body className="bg-white text-slate-900 antialiased dark:bg-slate-950 dark:text-slate-100">
        <div className="min-h-screen bg-gradient-to-br from-[#ffffff] via-white to-[#f0fdfa] dark:from-[#020617] dark:via-[#030712] dark:to-[#0f172a]">
          <a
            href="#main"
            className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:rounded-full focus:bg-white focus:px-4 focus:py-2 focus:text-sm focus:font-semibold focus:text-slate-900 focus:shadow-lg focus:outline-none focus:ring-2 focus:ring-brand/60 dark:focus:bg-slate-950 dark:focus:text-slate-100"
          >
            Skip to content
          </a>
          {children}
        </div>
      </body>
    </html>
  );
}
