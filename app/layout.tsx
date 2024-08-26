import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import React from "react";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Robust Boat",
  description: "Robust Boat - リアルタイムで結果が更新されるオンライン投票システム",
};

export default function RootLayout({
   children,
  }: Readonly<{
  children: React.ReactNode;
}>) {
  return (
      <html lang="ja">
      <body className={inter.className}>{children}</body>
      </html>
  );
}
