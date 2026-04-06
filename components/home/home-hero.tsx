"use client"

import { Award, ChevronRight, Star, TrendingUp } from "lucide-react"

type Props = {
  onContactClick: () => void
}

export default function HomeHero({ onContactClick }: Props) {
  return (
    <section className="container mx-auto px-4 py-16 md:py-24 relative">
      <div className="absolute top-0 right-0 w-64 h-64 bg-[#e2d42c]/10 rounded-full blur-3xl -z-10"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#e2d42c]/5 rounded-full blur-3xl -z-10"></div>

      <div className="max-w-4xl relative">
        <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-4 relative z-10">
          Build a Predictable Pipeline of{" "}
          <span className="bg-[#e2d42c] text-black px-3 py-1.5 rounded-md text-[calc(100%-10px)] inline-block">
            Commercial Jobs
          </span>
        </h2>
        <p className="text-xl md:text-2xl font-semibold text-[#e2d42c] mb-6 max-w-3xl">
          More Qualified Appointments. More Bids. More Revenue.
        </p>
        <p className="text-lg text-gray-600 dark:text-gray-400 mb-8 max-w-2xl">
          We help commercial asphalt, cleaning, HVAC, and painting companies generate qualified leads, book more sales
          appointments, and grow revenue with a proven lead generation system.
        </p>
        <div className="flex flex-col sm:flex-row gap-4">
          <button
            onClick={onContactClick}
            className="bg-gradient-to-r from-[#e2d42c] to-[#d4c628] text-black px-8 py-4 rounded-md flex items-center justify-center gap-2 font-medium shadow-lg shadow-[#e2d42c]/20 hover:shadow-xl hover:shadow-[#e2d42c]/30 transition-all duration-300 transform hover:-translate-y-1 w-full sm:w-auto"
          >
            Book a Growth Call <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </div>

      <div className="mt-16">
        <div className="inline-block bg-gray-100 dark:bg-[#111] px-8 py-4 rounded-2xl border border-[#e2d42c] font-medium shadow-md hover:shadow-lg transition-shadow duration-300">
          <span className="font-bold text-[#e2d42c]">500+</span> sales conversations generated for service businesses
        </div>
      </div>

      <div className="mt-16 flex flex-wrap justify-center gap-4 md:gap-8 items-center">
        <div className="flex items-center gap-2 bg-gray-50 dark:bg-[#0a0a0a] px-4 py-2 rounded-full">
          <Star className="w-5 h-5 text-[#e2d42c]" />
          <span className="text-sm font-medium">Qualified Lead Generation</span>
        </div>
        <div className="flex items-center gap-2 bg-gray-50 dark:bg-[#0a0a0a] px-4 py-2 rounded-full">
          <Award className="w-5 h-5 text-[#e2d42c]" />
          <span className="text-sm font-medium">Booked Sales Appointments</span>
        </div>
        <div className="flex items-center gap-2 bg-gray-50 dark:bg-[#0a0a0a] px-4 py-2 rounded-full">
          <TrendingUp className="w-5 h-5 text-[#e2d42c]" />
          <span className="text-sm font-medium">Commercial Growth System</span>
        </div>
      </div>
    </section>
  )
}

