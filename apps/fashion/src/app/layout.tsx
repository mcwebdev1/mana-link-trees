import type { Metadata } from "next";
import { Bodoni_Moda, Inter } from "next/font/google";
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
  title: "Mana Fashion Services",
  description: "The heart of South Florida's fashion community.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${inter.variable} ${bodoni.variable} h-full antialiased`}>
      <body className="min-h-full">{children}</body>
    </html>
  );
}
