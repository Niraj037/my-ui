import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "MyUI Design System - Dark, Minimalist UI Components",
  description: "A mysterious, elegant design system built on shadcn/ui with the Quintet color palette. Made by Niraj for WithinBrackets.",
  keywords: ["design system", "ui components", "dark theme", "minimalist", "shadcn", "tailwind css", "next.js"],
  authors: [{ name: "Niraj" }],
  creator: "Niraj",
  openGraph: {
    title: "MyUI Design System",
    description: "Dark, minimalist UI components built on the Quintet palette",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
