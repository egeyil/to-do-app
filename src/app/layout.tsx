import "./globals.css";
import type { Metadata } from "next";

import { ThemeProvider } from "@components/ThemeProvider";
import * as React from "react";
import { Header } from "@components/Header";

import { Josefin_Sans } from "next/font/google";
import { Tabs } from "@components/Tabs";
import { Navbar } from "@components/Navbar";

// If loading a variable font, you don't need to specify the font weight
const josefinSans = Josefin_Sans({
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Todo app",
  description:
    "A Frontend Mentor challenge, made with Next.js, TypeScript, Tailwind CSS, Zustand",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={josefinSans.className}>
      <body
        className={
          "text-lmMainText dark:text-dmMainText overflow-y-hidden bg-lmVeryLightGray bg-mobile-light bg-contain bg-no-repeat transition-all dark:bg-dmVeryDarkBlue dark:bg-mobile-dark sm:bg-desktop-light sm:dark:bg-desktop-dark"
        }
      >
        <ThemeProvider>
          <main
            className={
              "mx-auto flex h-screen w-full flex-col overflow-y-hidden px-10 py-10 sm:w-10/12 sm:px-0 sm:py-20 md:w-6/12 xl:w-4/12"
            }
          >
            <Header />
            {children}
            <Navbar />
          </main>
        </ThemeProvider>
      </body>
    </html>
  );
}
