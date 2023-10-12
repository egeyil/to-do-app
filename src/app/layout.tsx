import "./globals.css";
import type { Metadata } from "next";

import { ThemeProvider } from "@components/ThemeProvider";
import * as React from "react";
import { Header } from "@components/Header";

export const metadata: Metadata = {
  title: "Frontend Mentor | Todo app",
  description:
    "A Frontend Mentor challenge, made with Next.js, TypeScript, Tailwind CSS, Zustand, Prisma, and MySQL.",
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
          <main className={"py-20 mx-auto w-5/12 h-screen overflow-y-hidden "}>
            <Header />
            {children}
          </main>
        </ThemeProvider>
      </body>
    </html>
  );
}
