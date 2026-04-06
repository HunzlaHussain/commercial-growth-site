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
        <p className="text-gray-500 dark:text-gray-500 text-sm mt-6">Click an image to view the site transformation in detail</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {beforeAfter.map((item) => (
          <div
            key={item.id}
            className="relative cursor-pointer rounded-[25px] overflow-hidden transition-all duration-300 group"
            onClick={() => setActiveImage(item.id)}
          >
            <div className="relative h-[300px] w-full overflow-hidden rounded-[25px] border-2 border-transparent transition-all duration-300 group-hover:border-[#e2d42c] group-hover:shadow-lg group-hover:shadow-[#e2d42c]/30">
              <Image
                src={item.image || "/placeholder.svg"}
                alt={item.title}
                fill
                style={{ objectFit: "cover", objectPosition: "top" }}
                className="transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4">
                <h4 className="text-white font-bold text-lg">{item.title}</h4>
                <p className="text-[#e2d42c] text-sm">Click to view details</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Popup Image */}
      {activeImage && (
        <div className="fixed inset-0 z-40 flex items-center justify-center bg-black bg-opacity-90 p-4">
          <div className="relative max-w-5xl w-full">
            <button
              className="absolute -top-12 right-0 text-white hover:text-[#e2d42c] text-xl font-bold"
              onClick={() => setActiveImage(null)}
            >
              Close ×
            </button>
            <div className="bg-[#111] rounded-[25px] overflow-hidden">
              <div className="relative h-[500px] w-full">
                <Image
                  src={beforeAfter.find((c) => c.id === activeImage)?.image || ""}
                  alt={beforeAfter.find((c) => c.id === activeImage)?.title || ""}
                  fill
                  style={{ objectFit: "contain" }}
                  className="rounded-t-[25px]"
                />
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-2 text-[#e2d42c]">
                  {beforeAfter.find((c) => c.id === activeImage)?.title}
                </h3>
                <p className="text-white text-lg">{beforeAfter.find((c) => c.id === activeImage)?.description}</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  )
}