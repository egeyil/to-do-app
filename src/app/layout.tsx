import "./globals.css";
import type { Metadata } from "next";

import { ThemeProvider } from "@components/ThemeProvider";
import * as React from "react";
import { Header } from "@components/Header";

import { Josefin_Sans } from "next/font/google";
import { Tabs } from "@components/Tabs";
import { MobileTabs } from "@components/MobileTabs";

// If loading a variable font, you don't need to specify the font weight
const josefinSans = Josefin_Sans({
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Frontend Mentor | Todo app",
  description:
    "A Frontend Mentor challenge, made with Next.js, TypeScript, Tailwind CSS, Zustand",
};

export default function RootLayout({
                                     children,
                                   }: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
    <body
      className={
        "sm:dark:bg-desktop-dark transition-all sm:bg-desktop-light dark:bg-mobile-dark bg-mobile-light bg-no-repeat bg-contain overflow-y-hidden bg-lmVeryLightGray text-lmVeryLightGray dark:bg-dmVeryDarkBlue dark:text-dmLightGrayishBlue"
      }
    >
    <ThemeProvider>
    <main
      className={
        "py-10 sm:py-20 px-10 sm:px-0 mx-auto w-full sm:w-4/5 md:w-3/5 xl:w-5/12 h-screen overflow-y-hidden flex flex-col"
      }
    >
      <Header/>
      {children}
      <MobileTabs/>
    </main>
    </ThemeProvider>
    </body>
    </html>
  );
}
