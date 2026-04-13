import type React from "react"
import "./globals.css"
import { Inter, Manrope } from "next/font/google"
import { ThemeProvider } from "@/components/ui/theme-provider"

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" })
const manrope = Manrope({ subsets: ["latin"], variable: "--font-manrope" })

export const metadata = {
  title: "Commercial Growth — Commercial Lead Generation | Predictable Pipeline of Jobs",
  description:
    "Commercial Growth helps commercial asphalt, cleaning, HVAC, and painting companies generate qualified leads, book more sales appointments, and grow revenue with a proven lead generation system.",
  icons: {
    icon: [
      { url: "/Commercial_Growth_Logo_Assets/icon.svg", type: "image/svg+xml" },
      { url: "/Commercial_Growth_Logo_Assets/icon.png", type: "image/png" },
    ],
    apple: "/Commercial_Growth_Logo_Assets/icon.png",
    shortcut: "/Commercial_Growth_Logo_Assets/icon.png",
  },
  generator: "v0.dev",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "ProfessionalService",
              name: "Commercial Growth",
              description:
                "Commercial lead generation system helping service businesses generate qualified leads, book more sales appointments, and grow revenue with a predictable pipeline.",
              url: "https://commercial-growth.com",
              telephone: "+1-555-123-4567",
              address: {
                "@type": "PostalAddress",
                streetAddress: "123 Main Street",
                addressLocality: "Anytown",
                addressRegion: "CA",
                postalCode: "12345",
                addressCountry: "US",
              },
              geo: {
                "@type": "GeoCoordinates",
                latitude: "37.7749",
                longitude: "-122.4194",
              },
              openingHoursSpecification: {
                "@type": "OpeningHoursSpecification",
                dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
                opens: "09:00",
                closes: "17:00",
              },
              sameAs: [
                "https://www.facebook.com/commercialgrowth",
                "https://www.instagram.com/commercialgrowth",
                "https://twitter.com/commercialgrowth",
              ],
            }),
          }}
        />
      </head>
      <body className={`${inter.variable} ${manrope.variable} font-sans`}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
