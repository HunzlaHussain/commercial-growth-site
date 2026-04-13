"use client"

import Link from "next/link"
import { ChevronRight } from "lucide-react"

import { LOCALBLOOM_LOGO_URL } from "./constants"

type Props = {
  onContactClick: () => void
}

export default function HomeHeader({ onContactClick }: Props) {
  return (
    <header className="container mx-auto py-6 px-4 flex items-center justify-between relative z-10">
      <div className="flex items-center gap-2">
        <Link href="/">
          <img src={LOCALBLOOM_LOGO_URL} alt="commercial-growth Logo" className="h-10 w-auto cursor-pointer" />
        </Link>
      </div>
      <div className="flex items-center gap-4">
        <button
          onClick={onContactClick}
          className="bg-gradient-to-r from-[#e2d42c] to-[#d4c628] text-black px-5 py-2.5 rounded-md flex items-center gap-2 font-medium hover:shadow-lg hover:shadow-[#e2d42c]/20 transition-all duration-300 transform hover:-translate-y-0.5"
        >
          Book a Growth Call <ChevronRight className="w-4 h-4" />
        </button>
      </div>
    </header>
  )
}

