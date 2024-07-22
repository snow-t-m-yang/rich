import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Nav from "./components/nav";
import DynamicBanner from "./components/dynamic-banner";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Rich",
  description: "Your personalized financial assistant",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className}`}>
        <DynamicBanner />
        {children}
        <Nav />
      </body>
    </html>
  );
}
