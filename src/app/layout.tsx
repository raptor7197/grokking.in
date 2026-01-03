import type { Metadata } from "next";
import { Geist, Geist_Mono, Meow_Script } from "next/font/google"; // already there
import { Cursor } from "@/components/ui/Cursor";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const meowScript = Meow_Script({
  variable: "--font-meow",
  weight: "400",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Grokking.in",
  description: "made with love by vamsi",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${meowScript.variable} antialiased`}
      >
        <div suppressHydrationWarning>
          {/* Global Cursor */}
          {children}
          <Cursor />
        </div>
      </body>
    </html>
  );
}
