"use client"
import ClientShowcase from "@/components/ui/client-showcase"
import BeforeAfterShowcase from "@/components/ui/before-after-showcase"
import HomeHeader from "@/components/home/home-header"
import HomeHero from "@/components/home/home-hero"
import HomeServices from "@/components/home/home-services"
import HomeTestimonial from "@/components/home/home-testimonial"
import HomeFinalCTA from "@/components/home/home-final-cta"
import HomeFooter from "@/components/home/home-footer"
import { BOOKING_CALL_URL } from "@/components/home/constants"

export default function Home() {
  const handleContactClick = () => {
    window.open(BOOKING_CALL_URL, "_blank", "noopener,noreferrer")
  }

  return (
    <div className="min-h-screen bg-white dark:bg-[#0d0d0d] text-black dark:text-white">
      <HomeHeader onContactClick={handleContactClick} />

      <HomeHero onContactClick={handleContactClick} />

      {/* Before/After Section */}
      <BeforeAfterShowcase />

      {/* Client Showcase Section */}
      <ClientShowcase />

      <HomeServices />

      <HomeTestimonial />

      <HomeFinalCTA onContactClick={handleContactClick} />

      <HomeFooter />
    </div>
  )
}