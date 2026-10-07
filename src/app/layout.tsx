import type { Metadata } from "next";
import { Bodoni_Moda, Inter } from "next/font/google";
import { BrandNav } from "@/components/brand-nav";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

const bodoni = Bodoni_Moda({
  variable: "--font-bodoni",
  subsets: ["latin"],
  weight: "700",
});

export const metadata: Metadata = {
  title: "Mana Hubs",
  description:
    "Miami's only community-led coworking ecosystem. Book a tour, visit Mana Hubs curated by Mana Tech, or the Biscayne Showroom by Mana Fashion.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${inter.variable} ${bodoni.variable} h-full antialiased`}>
      <body className="min-h-full">
        <BrandNav />
        {children}
      </body>
    </html>
  );
}
