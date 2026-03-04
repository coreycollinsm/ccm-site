import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  // TODO Update this with GPT
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
      <body>{children}</body>
    </html>
  );
}
