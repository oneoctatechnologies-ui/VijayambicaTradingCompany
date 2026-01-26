import type { Metadata } from "next";
import { Inter, Outfit, Manrope } from "next/font/google"; // Updated imports
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
});

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Vijayambica Trading Co. | Reliable Raw Material Supply",
  description: "Reliable carton box raw material supplier for paper mills. 20+ years of experience ensuring timely delivery and consistent volume.",
};

import ChatAssistant from "@/components/ChatAssistant";
import Navbar from "@/components/Navbar";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${outfit.variable} ${manrope.variable} antialiased text-white`}
      >
        <Navbar />
        {children}
        <ChatAssistant />
      </body>
    </html>
  );
}
