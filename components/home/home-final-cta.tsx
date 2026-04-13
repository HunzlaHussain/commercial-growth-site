"use client"

import { ChevronRight } from "lucide-react"

import { Button } from "@/components/ui/button"

type Props = {
  onContactClick: () => void
}

export default function HomeFinalCTA({ onContactClick }: Props) {
  return (
    <section className="container mx-auto px-4">
      <div className="bg-white p-10 md:p-16 rounded-3xl border border-brand-border text-center shadow-sm relative overflow-hidden">
        <div className="relative z-10">
          <h2 className="cg-section-h2 mb-6 max-w-3xl mx-auto">
            Ready to Generate More Commercial Leads?
          </h2>
          <p className="cg-body-lead max-w-2xl mx-auto mb-10">
            If you want more qualified appointments, more bid opportunities, and a more predictable sales pipeline,
            we&apos;ll help you build the system to make it happen.
          </p>
          <Button size="lg" className="px-8" onClick={onContactClick}>
            Book your growth call <ChevronRight className="w-5 h-5" />
          </Button>

          <div className="mt-10 flex flex-wrap justify-center gap-6">
            <div className="flex items-center gap-2">
              <div className="w-6 h-6 rounded-full bg-brand-signal flex items-center justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4 text-white"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-hidden
                >
                  <path
                    fillRule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              <span className="text-sm font-medium text-brand-slate">Qualified lead generation</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-6 h-6 rounded-full bg-brand-signal flex items-center justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4 text-white"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-hidden
                >
                  <path
                    fillRule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              <span className="text-sm font-medium text-brand-slate">Booked sales appointments</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-6 h-6 rounded-full bg-brand-signal flex items-center justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4 text-white"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-hidden
                >
                  <path
                    fillRule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              <span className="text-sm font-medium text-brand-slate">Revenue-focused pipeline</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
