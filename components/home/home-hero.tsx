"use client"

import { Award, ChevronRight, Star, TrendingUp } from "lucide-react"

import { Button } from "@/components/ui/button"

type Props = {
  onContactClick: () => void
}

export default function HomeHero({ onContactClick }: Props) {
  return (
    <section className="container mx-auto px-4 pb-20 md:pb-28 pt-2 md:pt-4 relative">
      <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center relative z-10">
        <div>
          <h1 className="cg-hero-h1">Build a Predictable Pipeline of Commercial Jobs</h1>
          <p className="text-xl md:text-2xl font-semibold text-white mt-6 max-w-2xl leading-snug">
            More qualified appointments. More bids. More revenue.
          </p>
          <p className="text-lg text-slate-300 mt-4 max-w-xl leading-relaxed">
            We help commercial asphalt, cleaning, HVAC, and painting companies generate qualified leads, book more sales
            appointments, and grow revenue with a proven lead generation system.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-4">
            <Button size="lg" className="w-full sm:w-auto px-8" onClick={onContactClick}>
              Book a Growth Call <ChevronRight className="w-5 h-5" />
            </Button>
            <Button
              type="button"
              variant="brandOutline"
              size="lg"
              className="border-brand-border bg-white text-brand-navy hover:bg-brand-cloud w-full sm:w-auto px-8"
              onClick={() => document.getElementById("results")?.scrollIntoView({ behavior: "smooth" })}
            >
              See Recent Results
            </Button>
          </div>
        </div>

        <div className="space-y-5 lg:pl-4">
          <div className="rounded-2xl border border-white/15 bg-white/5 p-8">
            <p className="text-sm font-medium uppercase tracking-wider text-slate-400">Proof</p>
            <p className="mt-2 font-heading text-5xl md:text-6xl font-bold text-white tabular-nums">500+</p>
            <p className="mt-2 text-slate-200 text-lg">Sales conversations generated for service businesses</p>
          </div>
          <div className="grid gap-3 sm:grid-cols-1">
            <div className="flex items-center gap-3 rounded-full border border-white/10 bg-brand-navy/80 px-4 py-3">
              <Star className="w-5 h-5 shrink-0 text-brand-signal" aria-hidden />
              <span className="text-sm font-medium text-white">Qualified lead generation</span>
            </div>
            <div className="flex items-center gap-3 rounded-full border border-white/10 bg-brand-navy/80 px-4 py-3">
              <Award className="w-5 h-5 shrink-0 text-brand-signal" aria-hidden />
              <span className="text-sm font-medium text-white">Booked sales appointments</span>
            </div>
            <div className="flex items-center gap-3 rounded-full border border-white/10 bg-brand-navy/80 px-4 py-3">
              <TrendingUp className="w-5 h-5 shrink-0 text-brand-signal" aria-hidden />
              <span className="text-sm font-medium text-white">Commercial growth system</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
