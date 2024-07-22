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
    <html lang="en" className="bg-background/90">
      <body className={`${inter.className} bg-background/90`}>
        <DynamicBanner />
        {children}
        <Nav />
      </body>
    </html>
  );
}
