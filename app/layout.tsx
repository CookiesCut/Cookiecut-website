import "./globals.css"
import type React from "react"
import { Inter } from "next/font/google"
import Header from "../components/Header"
import Footer from "../components/Footer"
import { GoogleAnalytics } from '@next/third-parties/google'
import { rootMetadata } from "@/lib/root-metadata"

const inter = Inter({ subsets: ["latin"] })

export const metadata = rootMetadata;

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const gaId: string = process.env.GOOGLE_SEARCH_CONSOLE || "G-BZRYXRH8HW";
  return (
    <html lang="en" dir="ltr" className="h-full bg-amber-950">
      <GoogleAnalytics gaId={gaId} />
      <body className={`${inter.className} `}>
        <Header />
        <main className="mx-auto px-2 py-3 bg-amber-950">{children}</main>
        <Footer />
      </body>
    </html>
  )
}

