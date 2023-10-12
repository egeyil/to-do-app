import './globals.css'
import type { Metadata } from 'next'
import Image from 'next/image'

import { ThemeProvider } from "@components/ThemeProvider";
import { ThemeSwitcher } from "@components/ThemeSwitcher";
import * as React from "react";

export const metadata: Metadata = {
  title: 'Frontend Mentor | Todo app',
  description: 'A Frontend Mentor challenge, made with Next.js, TypeScript, Tailwind CSS, Zustand, Prisma, and MySQL.',
}

export default function RootLayout({ children }: {
  children: React.ReactNode
}) {
  // const darkMode = useAppStore(state => state.darkMode);

  // const bgDesktop = darkMode ? "bg-desktop-dark" : "bg-desktop-light";
  // const bgMobile = darkMode ? "bg-mobile-dark" : "bg-mobile-light";



  return (
    <html lang="en">
    <body className={"md:bg-desktop-dark overflow-y-hidden bg-lmVeryLightGray text-lmVeryDarkGrayishBlue dark:bg-dmVeryDarkBlue dark:text-dmLightGrayishBlue"}>
    <ThemeProvider>
      <main className={"w-full dark:bg-amber-200"}>
        <ThemeSwitcher/>
        {children}
      </main>
    </ThemeProvider>
    </body>
    </html>
  )
}
