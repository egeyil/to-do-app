import "./globals.css";
import React from "react";
import Image from "next/image";
import bgDark from "../../public/bg-desktop-dark.jpg";
import bgMobileDark from "../../public/bg-mobile-dark.jpg";
import bgLight from "../../public/bg-desktop-light.jpg";
import bgMobileLight from "../../public/bg-mobile-light.jpg";
import ReduxProvider from "@/lib/reduxProvider";

export const metadata = {
  title: "To Do App",
  description:
    "Frontend Mentor Challenge: A todo app built with React, Next.js 13, TypeScript, Tailwind CSS, Redux toolkit."
};

export default function RootLayout({
                                     children
                                   }: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
    <body
      className="overflow-y-hidden bg-lmVeryLightGray text-lmVeryDarkGrayishBlue dark:bg-dmVeryDarkBlue dark:text-dmLightGrayishBlue">
    <main className={"w-full"}>
      {/* Background images */}
      <div className="fixed top-0 left-0 -z-50 w-screen">
        <div className="-z-50 dark:hidden">
          <Image
            src={bgLight}
            alt={"Background image"}
            className="-z-50 hidden w-full sm:block"
          />
          <Image
            src={bgMobileLight}
            alt={"Background image"}
            className="-z-50 block w-full sm:hidden"
          />
        </div>
        <div className="hidden dark:block">
          <Image
            src={bgDark}
            alt={"Background image"}
            className="-z-50 hidden w-full sm:block"
          />
          <Image
            src={bgMobileDark}
            alt={"Background image"}
            className="-z-50 block w-full sm:hidden"
          />
        </div>
      </div>
      <ReduxProvider>
        {children}
      </ReduxProvider>
    </main>
    </body>
    </html>
  );
}
