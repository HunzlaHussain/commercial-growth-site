"use client"
import { useState, useEffect } from "react"
import { useTheme } from "next-themes"
import CalendarModal from "@/components/ui/calendar-modal"
import ClientShowcase from "@/components/ui/client-showcase"
import BeforeAfterShowcase from "@/components/ui/before-after-showcase"
import HomeHeader from "@/components/home/home-header"
import HomeHero from "@/components/home/home-hero"
import HomeServices from "@/components/home/home-services"
import HomeTestimonial from "@/components/home/home-testimonial"
import HomeFinalCTA from "@/components/home/home-final-cta"
import HomeFooter from "@/components/home/home-footer"

export default function Home() {
  const [isCalendarOpen, setIsCalendarOpen] = useState(false)
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  // After mounting, we can safely show the UI
  useEffect(() => {
    setMounted(true)
  }, [])

  const handleContactClick = () => {
    window.location.href =
      "mailto:info@localbloom.io?subject=Commercial Lead Generation Inquiry&body=Hi LocalBloom team,%0D%0A%0D%0AI'm interested in learning more about your commercial lead generation and growth system.%0D%0A%0D%0APlease contact me to discuss qualified appointments, pipeline growth, and revenue.%0D%0A%0D%0AThank you!"
  }

  const handleToggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark")
  }

  return (
    <div className="min-h-screen bg-white dark:bg-[#0d0d0d] text-black dark:text-white">
      <HomeHeader
        mounted={mounted}
        theme={theme}
        onToggleTheme={handleToggleTheme}
        onContactClick={handleContactClick}
      />

      <HomeHero onContactClick={handleContactClick} />

      {/* Before/After Section */}
      <BeforeAfterShowcase />

      {/* Client Showcase Section */}
      <ClientShowcase />

      <HomeServices />

      <HomeTestimonial />

      <HomeFinalCTA onContactClick={handleContactClick} />

      <HomeFooter />

      {/* Calendar Modal */}
      {isCalendarOpen && <CalendarModal onClose={() => setIsCalendarOpen(false)} />}
    </div>
  )
}