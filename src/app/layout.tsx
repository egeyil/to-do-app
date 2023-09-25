"use client";

import './globals.css'
import type { Metadata } from 'next'
import Image from 'next/image'

import { useAppStore } from "@lib/store";

// export const metadata: Metadata = {
//   title: 'Frontend Mentor | Todo app',
//   description: 'A Frontend Mentor challenge, made with Next.js, TypeScript, Tailwind CSS, Zustand, Prisma, and PostgreSQL.',
// }

export default function RootLayout({
                                     children,
                                   }: {
  children: React.ReactNode
}) {
  const darkMode = useAppStore(state => state.darkMode);

  const bgDesktop = darkMode ? "bg-desktop-dark" : "bg-desktop-light";
  const bgMobile = darkMode ? "bg-mobile-dark" : "bg-mobile-light";

  return (
    <html lang="en" className={"dark"}>
    <body
      className={`md:${bgDesktop} ${bgMobile} ` + "overflow-y-hidden bg-lmVeryLightGray text-lmVeryDarkGrayishBlue dark:bg-dmVeryDarkBlue dark:text-dmLightGrayishBlue"}>
    <main className={"w-full"}>
      {children}
    </main>
    </body>
    </html>
  )
}
