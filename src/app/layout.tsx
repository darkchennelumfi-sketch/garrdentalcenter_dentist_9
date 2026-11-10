import type { Metadata, Viewport } from "next";
import { Fraunces, JetBrains_Mono, Manrope } from "next/font/google";

import { MobileCallBar } from "@/components/mobile-call-bar";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { siteConfig } from "@/lib/site";
import "./globals.css";

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
  display: "swap",
  axes: ["SOFT", "WONK", "opsz"],
});

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
  display: "swap",
});

const jetbrains = JetBrains_Mono({
  variable: "--font-jetbrains",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.garrdental.com"),
  title: {
    default:
      "Garr Dental Center | Cosmetic Dentistry & Dental Implants in Carrington, ND",
    template: "%s | Garr Dental Center",
  },
  description: siteConfig.description,
  applicationName: siteConfig.name,
  keywords: [
    "Carrington dentist",
    "Garr Dental Center",
    "dental implants Carrington ND",
    "cosmetic dentistry",
    "supra-gingival dentistry",
    "sleep apnea treatment",
    "full mouth reconstruction",
    "Jamestown ND dentist",
    "Cooperstown ND dentist",
  ],
  authors: [{ name: siteConfig.name }],
  creator: siteConfig.name,
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://www.garrdental.com",
    siteName: siteConfig.name,
    title:
      "Garr Dental Center | Cosmetic Dentistry & Dental Implants in Carrington, ND",
    description: siteConfig.description,
    images: [
      {
        url: "/art/smile-orb.svg",
        width: 900,
        height: 1120,
        alt: "Garr Dental Center",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Garr Dental Center",
    description: siteConfig.description,
    images: ["/art/smile-orb.svg"],
  },
  icons: {
    icon: [{ url: "/brand/favicon.svg", type: "image/svg+xml" }],
  },
};

export const viewport: Viewport = {
  themeColor: "#061713",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${fraunces.variable} ${manrope.variable} ${jetbrains.variable}`}
    >
      <body>
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:rounded-full focus:bg-pine-900 focus:px-5 focus:py-3 focus:text-sm focus:text-cream"
        >
          Skip to content
        </a>
        <SiteHeader />
        <main id="main-content" className="pb-16 md:pb-0">
          {children}
        </main>
        <SiteFooter />
        <MobileCallBar />
      </body>
    </html>
  );
}
