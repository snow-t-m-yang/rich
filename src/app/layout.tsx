import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Nav from "./components/nav";
import DynamicBanner from "./components/dynamic-banner";
import Sheet from "./components/sheet";
import { ThemeProvider } from "next-themes";

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
      <ThemeProvider
        attribute="class"
        defaultTheme="dark"
        enableSystem
        disableTransitionOnChange
      >
        <body className={`${inter.className} h-[100dvh]`}>
          <Sheet />
          <DynamicBanner />
          {children}
          <Nav />
        </body>
      </ThemeProvider>
    </html>
  );
}
