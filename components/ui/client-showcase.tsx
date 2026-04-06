"use client"

import { useState } from "react"
import Image from "next/image"

export default function ClientShowcase() {
  const [activeImage, setActiveImage] = useState<number | null>(null)

  const clients = [
    {
      id: 1,
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/sfdf22ggbp-w-jfscFL6d2Zw3EMBxuJhi1hZhL7udXT.png",
      title: "Plumbing Geeks",
      description: "Increased leads by 8X with a modern, conversion-focused website redesign",
    },
    {
      id: 2,
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/2114134fdadsarf-BiYzm0jMwWcN0XJ4Pnv6lipTFO1rwI.png",
      title: "WCC Plumbing",
      description: "Doubled monthly bookings with a professional website and lead capture system",
    },
    {
      id: 3,
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/123232531fgs-nXc2rNsegfjLkJ7oLCG4kfloAdIeuA.png",
      title: "ProRooter & Septic",
      description: "Achieved 300% ROI within 3 months of website launch",
    },
  ]

  return (
    <section className="container mx-auto px-4 py-8 md:py-16">
      <div className="text-center mb-8">
        <h3 className="text-2xl md:text-3xl font-bold mb-4">
          More Commercial <span className="text-[#e2d42c]">Growth</span> Results
        </h3>
        <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
          Examples of how we help service businesses turn their online presence and outreach into booked opportunities.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {clients.map((client) => (
          <div
            key={client.id}
            className="relative cursor-pointer rounded-[25px] overflow-hidden transition-all duration-300 group"
            onClick={() => setActiveImage(client.id)}
          >
            <div className="relative h-[220px] w-full overflow-hidden rounded-[25px] border-2 border-transparent transition-all duration-300 group-hover:border-[#e2d42c] group-hover:shadow-lg group-hover:shadow-[#e2d42c]/30">
              <Image
                src={client.image || "/placeholder.svg"}
                alt={client.title}
                fill
                style={{ objectFit: "cover", objectPosition: "top" }}
                className="transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4">
                <h4 className="text-white font-bold text-lg">{client.title}</h4>
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
                  src={clients.find((c) => c.id === activeImage)?.image || ""}
                  alt="Client Website"
                  fill
                  style={{ objectFit: "contain" }}
                  className="rounded-t-[25px]"
                />
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-2 text-[#e2d42c]">
                  {clients.find((c) => c.id === activeImage)?.title}
                </h3>
                <p className="text-white text-lg">{clients.find((c) => c.id === activeImage)?.description}</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  )
}