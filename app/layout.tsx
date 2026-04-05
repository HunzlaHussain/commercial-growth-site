import type React from "react"
import "./globals.css"
import { Inter } from "next/font/google"
import { ThemeProvider } from "@/components/ui/theme-provider"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "LocalBloom - Web Design for Local Businesses | High-Converting Websites",
  description:
    "Get affordable web design in your area. LocalBloom helps local businesses generate 8X more leads with high-converting websites. Book a call today!",
  icons: {
    icon: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/fav-2Wz7iwrmp7qWAoAJZ0rWYgggSfnsW6.png",
    apple: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/fav-2Wz7iwrmp7qWAoAJZ0rWYgggSfnsW6.png",
    shortcut: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/fav-2Wz7iwrmp7qWAoAJZ0rWYgggSfnsW6.png",
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
        <link
          rel="icon"
          href="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/fav-2Wz7iwrmp7qWAoAJZ0rWYgggSfnsW6.png"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              name: "LocalBloom",
              description: "Web design agency specializing in high-converting websites for local businesses",
              url: "https://localbloom.com",
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
                "https://www.facebook.com/localbloom",
                "https://www.instagram.com/localbloom",
                "https://twitter.com/localbloom",
              ],
            }),
          }}
        />
      </head>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}