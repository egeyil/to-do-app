import './globals.css'
import React from "react";
import Image from "next/image";
import bgDark from "../../public/bg-desktop-dark.jpg";
import bgMobileDark from "../../public/bg-mobile-dark.jpg";
import bgLight from "../../public/bg-desktop-light.jpg";
import bgMobileLight from "../../public/bg-mobile-light.jpg";

export const metadata = {
  title: 'To Do App',
  description: 'Frontend Mentor Challenge: A todo app built with React, Next.js 13, TypeScript, Tailwind CSS, Redux toolkit.',
}

export default function RootLayout({
                                     children,
                                   }: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
    <body>
    <main className={"w-full"}>
      {/* Background images */}
      <div className="fixed top-0 left-0 w-screen">
        <div className="dark:hidden -z-50">
          <Image src={bgLight} alt={"Background image"} className="hidden sm:block -z-50 w-full"/>
          <Image src={bgMobileLight} alt={"Background image"} className="sm:hidden block -z-50 w-full"/>
        </div>
        <div className="dark:block hidden">
          <Image src={bgDark} alt={"Background image"} className="sm:block hidden -z-50 w-full"/>
          <Image src={bgMobileDark} alt={"Background image"} className="sm:hidden block -z-50 w-full"/>
        </div>
      </div>
      {children}
    </main>
    </body>
    </html>
  )
}
