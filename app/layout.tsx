import type { Metadata } from "next";
import { Manrope, Inter, Geist } from "next/font/google";
import "./globals.css";

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const geist = Geist({
  variable: "--font-geist",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Sowitech Engineering — Advanced Water Treatment & Recycling Solutions",
  description:
    "Sowitech Engineering designs and delivers advanced Water Treatment Plants (WTP), Tertiary Treatment Plants (TTP), and closed-loop Water Recycling Solutions. Zero upfront BOT model available. In association with YAHA Water Systems.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${manrope.variable} ${inter.variable} ${geist.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}

