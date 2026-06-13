import type { Metadata } from "next";
import { Cormorant_Garamond, Cormorant_SC, Jost } from "next/font/google";

import { SiteShell } from "@/components/site-shell";
import { siteUrl } from "@/lib/deployment";
import "./globals.css";

const headingFont = Cormorant_SC({
  variable: "--font-cormorant-sc",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const serifFont = Cormorant_Garamond({
  variable: "--font-cormorant-garamond",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const bodyFont = Jost({
  variable: "--font-jost",
  subsets: ["latin"],
  weight: ["300", "400", "500"],
});

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "Cello Restaurant & Bar",
  description:
    "Food, cocktails, music, and evening rhythm in one warm Accra restaurant and bar setting.",
  applicationName: "Cello Restaurant & Bar",
  openGraph: {
    title: "Cello Restaurant & Bar",
    description:
      "Food, cocktails, music, and evening rhythm in one warm Accra restaurant and bar setting.",
    siteName: "Cello Restaurant & Bar",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Cello Restaurant & Bar",
    description:
      "Food, cocktails, music, and evening rhythm in one warm Accra restaurant and bar setting.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${headingFont.variable} ${serifFont.variable} ${bodyFont.variable} h-full antialiased`}
    >
      <body className="min-h-full overflow-x-clip bg-[var(--color-bg)] text-[var(--color-ink)]">
        <SiteShell>{children}</SiteShell>
      </body>
    </html>
  );
}
