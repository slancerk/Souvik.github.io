"use client"; // Ensure this is at the top

import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import "./globals.css";

// Load Google Fonts
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// Page Metadata
// export const metadata: Metadata = {
//   title: "Souvik's Portfolio",
//   description: "DevOps Engineer | AWS & Terraform Certified",
// };

// Cursor Animation Effect
function CursorEffect() {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <motion.div
      className="fixed top-0 left-0 w-6 h-6 bg-blue-500 rounded-full pointer-events-none opacity-50 mix-blend-difference"
      animate={{ x: position.x - 12, y: position.y - 12 }}
      transition={{ type: "spring", stiffness: 100, damping: 10 }}
    />
  );
}

// Root Layout Component
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable}`}>
      <body className="bg-gray-900 text-white font-sans">
        <CursorEffect />
        {children}
      </body>
    </html>
  );
}
