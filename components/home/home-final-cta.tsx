"use client"

import { ChevronRight } from "lucide-react"

type Props = {
  onContactClick: () => void
}

export default function HomeFinalCTA({ onContactClick }: Props) {
  return (
    <section className="container mx-auto px-4 py-16 md:py-24">
      <div className="bg-gradient-to-br from-gray-100 to-gray-200 dark:from-[#111] dark:to-[#0a0a0a] p-10 md:p-16 rounded-3xl border border-[#e2d42c] text-center shadow-2xl relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-[#e2d42c]/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#e2d42c]/10 rounded-full blur-3xl"></div>

        <div className="relative z-10">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            Ready to{" "}
            <span className="bg-[#e2d42c] text-black px-3 py-1.5 rounded-md text-[calc(100%-10px)] inline-block">
              Generate More Commercial Leads?
            </span>
          </h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto mb-10 text-lg">
            If you want more qualified appointments, more bid opportunities, and a more predictable sales pipeline,
            we&apos;ll help you build the system to make it happen.
          </p>
          <button
            onClick={onContactClick}
            className="bg-gradient-to-r from-[#e2d42c] to-[#d4c628] text-black px-8 py-4 rounded-md inline-flex items-center gap-2 font-medium shadow-lg shadow-[#e2d42c]/20 hover:shadow-xl hover:shadow-[#e2d42c]/30 transition-all duration-300 transform hover:-translate-y-1"
          >
            Book Your Growth Call <ChevronRight className="w-5 h-5" />
          </button>

          <div className="mt-10 flex flex-wrap justify-center gap-6">
            <div className="flex items-center gap-2">
              <div className="w-6 h-6 rounded-full bg-[#e2d42c] flex items-center justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4 text-black"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              <span className="text-sm font-medium">Qualified lead generation</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-6 h-6 rounded-full bg-[#e2d42c] flex items-center justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4 text-black"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              <span className="text-sm font-medium">Booked sales appointments</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-6 h-6 rounded-full bg-[#e2d42c] flex items-center justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4 text-black"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              <span className="text-sm font-medium">Revenue-focused pipeline</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

