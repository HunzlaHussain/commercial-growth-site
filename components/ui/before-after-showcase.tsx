"use client"

import { useState } from "react"
import Image from "next/image"

export default function BeforeAfterShowcase() {
  const [activeImage, setActiveImage] = useState<number | null>(null)

  const beforeAfter = [
    {
      id: 1,
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Before.png-rOcFSN6IC1vHrL8KRfIM5lok59HO13.jpeg",
      title: "Before",
      description:
        "Low-converting website with poor user experience, resulting in only 5-10 leads per month despite high traffic.",
    },
    {
      id: 2,
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-04-05%20at%2012.08.00-OmLdKn2LROusFoAPo98GAZZxG3B7jj.png",
      title: "After",
      description:
        "Redesigned with conversion in mind, now generating 40-80 qualified leads monthly - an 8X increase in lead generation.",
    },
  ]

  return (
    <section className="container mx-auto px-4 py-8 md:py-16">
      <div className="text-center mb-8">
        <h3 className="text-2xl md:text-3xl font-bold">
          Recent <span className="text-[#e2d42c]">Client Growth</span> Wins
        </h3>
        <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto mt-2">
          See how we help service businesses improve positioning, increase lead flow, and create more sales
          opportunities.
        </p>
        <div className="flex flex-wrap justify-center gap-3 mt-6 max-w-3xl mx-auto">
          {["Better positioning", "Stronger trust", "Higher conversion", "More inbound and outbound opportunity capture"].map(
            (label) => (
              <span
                key={label}
                className="text-xs sm:text-sm font-medium px-3 py-1.5 rounded-full bg-gray-100 dark:bg-[#111] border border-[#e2d42c]/40 text-gray-800 dark:text-gray-200"
              >
                {label}
              </span>
            ),
          )}
        </div>
        {/* <p className="text-gray-500 dark:text-gray-500 text-sm mt-6">Click an image to view the site transformation in detail</p> */}
      </div>

      

     
    </section>
  )
}