import "./globals.css";

import { TrackingConsent } from "@/components/trackers/TrackingConsent";
import { Suspense } from "react";
import { DataBanner, Footer, SiteHeader } from "@/components/sections";

import type { Metadata } from "next";
import { TrackingConsentProvider } from "@/context/TrackingConsentContext";
import { PageViewTracker } from "@/components/trackers/PageViewTracker";
export const metadata: Metadata = {
  title: "Corey Collins M. - Full Stack Developer | Typescript & Mern",
  description:
    "Corey Collins is a full stack developer and product-minded systems builder who specializes in designing and delivering scalable digital platforms. With a background in operational strategy and over a decade of experience improving business systems, he focuses on building technology that eliminates inefficiencies, automates workflows, and unlocks measurable growth.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <TrackingConsentProvider>
          <TrackingConsent />
          <Suspense fallback={null}>
            <PageViewTracker />
          </Suspense>
          <SiteHeader />
          {children}
          <Footer />
          <DataBanner />
        </TrackingConsentProvider>
      </body>
    </html>
  );
}
