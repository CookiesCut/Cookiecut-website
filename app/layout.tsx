import "./globals.css"
import { Inter } from "next/font/google"
import Header from "./components/Header"
import type React from "react" // Added import for React
import Footer from "./components/Footer"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "CookiesCut - Delicious Cookie and Cake Recipes",
  description: "Learn how to bake amazing cookies and cakes with CookiesCut YouTube channel",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} `}>
        <Header />
        <main className="mx-auto px-2 py-3 bg-amber-800">{children}</main>
        <Footer />
      </body>
    </html>
  )
}

