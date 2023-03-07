import './globals.css'
import React from "react";

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
      <body>{children}</body>
    </html>
  )
}
