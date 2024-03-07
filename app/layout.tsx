import { Toaster } from "@/providers/toaster";
import type { Metadata } from "next";
import { Hanken_Grotesk } from "next/font/google";

import "./globals.css";

const font = Hanken_Grotesk({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Wordle",
  description: "A wordle clone made with NextJS",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="text-white" style={font.style}>
        {children}
        <Toaster />
      </body>
    </html>
  );
}
