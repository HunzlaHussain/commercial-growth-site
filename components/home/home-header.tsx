"use client"

import Link from "next/link"
import { Moon, Sun, ChevronRight } from "lucide-react"

import { LOCALBLOOM_LOGO_URL } from "./constants"

type Props = {
  mounted: boolean
  theme: string | undefined
  onToggleTheme: () => void
  onContactClick: () => void
}

export default function HomeHeader({ mounted, theme, onToggleTheme, onContactClick }: Props) {
  return (
    <header className="container mx-auto py-6 px-4 flex items-center justify-between relative z-10">
      <div className="flex items-center gap-2">
        <Link href="/">
          <img src={LOCALBLOOM_LOGO_URL} alt="LocalBloom Logo" className="h-10 w-auto cursor-pointer" />
        </Link>
      </div>
      <div className="flex items-center gap-4">
        {mounted && (
          <button
            onClick={onToggleTheme}
            className="p-2 rounded-full bg-gray-100 dark:bg-[#111] hover:bg-gray-200 dark:hover:bg-gray-900 transition-colors shadow-sm"
            aria-label="Toggle theme"
          >
            {theme === "dark" ? (
              <Sun className="w-5 h-5 text-[#e2d42c]" />
            ) : (
              <Moon className="w-5 h-5 text-[#e2d42c]" />
            )}
          </button>
        )}
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

