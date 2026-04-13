"use client"

import Link from "next/link"
import { ChevronRight } from "lucide-react"

import { Button } from "@/components/ui/button"
import { COMMERCIAL_GROWTH_LOGO_NAVY } from "./constants"

type Props = {
  onContactClick: () => void
}

export default function HomeHeader({ onContactClick }: Props) {
  return (
    <header className="container mx-auto py-6 px-4 flex items-center justify-between relative z-10">
      <div className="flex items-center gap-2">
        <Link href="/" className="inline-block p-2 -m-2">
          <img
            src={COMMERCIAL_GROWTH_LOGO_NAVY}
            alt="Commercial Growth"
            className="h-10 w-auto min-w-[180px] max-h-10 cursor-pointer object-contain object-left"
          />
        </Link>
      </div>
      <div className="flex items-center gap-4">
        <Button size="lg" className="px-5" onClick={onContactClick}>
          Book a Growth Call <ChevronRight className="w-4 h-4" />
        </Button>
      </div>
    </header>
  )
}
