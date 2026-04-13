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
    <div className="min-h-screen bg-background text-foreground">
      <div className="bg-brand-navy text-white">
        <HomeHeader onContactClick={handleContactClick} />
        <HomeHero onContactClick={handleContactClick} />
      </div>

      <section className="bg-brand-cloud py-20 md:py-28 lg:py-[120px]">
        <BeforeAfterShowcase />
      </section>

      <section id="results" className="bg-white py-20 md:py-28 lg:py-[120px] scroll-mt-24">
        <ClientShowcase />
      </section>

      <section className="bg-brand-cloud py-20 md:py-28 lg:py-[120px]">
        <HomeServices />
      </section>

      <section className="bg-white py-20 md:py-28 lg:py-[120px]">
        <HomeTestimonial />
      </section>

      <section className="bg-brand-cloud py-20 md:py-28 lg:py-[120px]">
        <HomeFinalCTA onContactClick={handleContactClick} />
      </section>

      <div className="bg-brand-navy text-white">
        <HomeFooter />
      </div>
    </div>
  )
}
