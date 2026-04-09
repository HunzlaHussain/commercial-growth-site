"use client"

import { BarChart3, Briefcase, GitBranch, Rocket, Target } from "lucide-react"

export default function HomeServices() {
  return (
    <section className="container mx-auto px-4 py-16 md:py-24 relative">
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#e2d42c]/5 rounded-full blur-3xl -z-10"></div>

      <div className="text-center mb-16">
        <div className="text-[#e2d42c] uppercase text-sm tracking-wider mb-2 font-semibold">
          COMMERCIAL GROWTH SYSTEM
        </div>
        <h2 className="text-4xl md:text-5xl font-bold">
          Everything You Need to <span className="text-[#e2d42c]">Generate More</span> Commercial Leads
        </h2>
      </div>

      <div className="grid md:grid-cols-3 gap-8">
        <div className="bg-gray-100 dark:bg-[#111] p-8 rounded-2xl border border-[#e2d42c] shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 group">
          <div className="bg-gradient-to-br from-[#e2d42c] to-[#d4c628] text-black p-4 rounded-full w-16 h-16 flex items-center justify-center mb-6 shadow-md group-hover:shadow-lg group-hover:scale-110 transition-all duration-300">
            <Target className="w-8 h-8" />
          </div>
          <h3 className="text-xl font-bold mb-4 group-hover:text-[#e2d42c] transition-colors">
            Targeting &amp; Market Positioning
          </h3>
          <p className="text-gray-600 dark:text-gray-400 mb-4">
            We help commercial asphalt, commercial cleaning, commercial HVAC, and commercial painting companies identify
            the right buyers, sharpen their targeting, and build messaging that speaks directly to real commercial
            opportunities.
          </p>
          <div className="mt-6 pt-6 border-t border-gray-200 dark:border-gray-800">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-[#e2d42c]"></div>
              <span className="text-sm">Ideal buyer targeting</span>
            </div>
            <div className="flex items-center gap-2 mt-2">
              <div className="w-2 h-2 rounded-full bg-[#e2d42c]"></div>
              <span className="text-sm">Market-specific messaging</span>
            </div>
            <div className="flex items-center gap-2 mt-2">
              <div className="w-2 h-2 rounded-full bg-[#e2d42c]"></div>
              <span className="text-sm">Positioning built for qualified demand</span>
            </div>
          </div>
        </div>

        <div className="bg-gray-100 dark:bg-[#111] p-8 rounded-2xl border border-[#e2d42c] shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 group">
          <div className="bg-gradient-to-br from-[#e2d42c] to-[#d4c628] text-black p-4 rounded-full w-16 h-16 flex items-center justify-center mb-6 shadow-md group-hover:shadow-lg group-hover:scale-110 transition-all duration-300">
            <Rocket className="w-8 h-8" />
          </div>
          <h3 className="text-xl font-bold mb-4 group-hover:text-[#e2d42c] transition-colors">
            Tailored Lead Generation Engine
          </h3>
          <p className="text-gray-600 dark:text-gray-400 mb-4">
            We plug your company into a tailored lead generation engine designed to consistently create qualified
            commercial opportunities in your market. The focus is on building predictable pipeline, not just generating
            random leads.
          </p>
          <div className="mt-6 pt-6 border-t border-gray-200 dark:border-gray-800">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-[#e2d42c]"></div>
              <span className="text-sm">Customized outreach strategy</span>
            </div>
            <div className="flex items-center gap-2 mt-2">
              <div className="w-2 h-2 rounded-full bg-[#e2d42c]"></div>
              <span className="text-sm">Qualified opportunity generation</span>
            </div>
            <div className="flex items-center gap-2 mt-2">
              <div className="w-2 h-2 rounded-full bg-[#e2d42c]"></div>
              <span className="text-sm">Built for consistency and scale</span>
            </div>
          </div>
        </div>

        <div className="bg-gray-100 dark:bg-[#111] p-8 rounded-2xl border border-[#e2d42c] shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 group">
          <div className="bg-gradient-to-br from-[#e2d42c] to-[#d4c628] text-black p-4 rounded-full w-16 h-16 flex items-center justify-center mb-6 shadow-md group-hover:shadow-lg group-hover:scale-110 transition-all duration-300">
            <Briefcase className="w-8 h-8" />
          </div>
          <h3 className="text-xl font-bold mb-4 group-hover:text-[#e2d42c] transition-colors">
            Sales Assistance &amp; Conversion Support
          </h3>
          <p className="text-gray-600 dark:text-gray-400 mb-4">
            Generating leads is only part of the equation. We help strengthen the sales process so opportunities move
            forward, deals close more effectively, and revenue becomes more predictable.
          </p>
          <div className="mt-6 pt-6 border-t border-gray-200 dark:border-gray-800">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-[#e2d42c]"></div>
              <span className="text-sm">Sales process support</span>
            </div>
            <div className="flex items-center gap-2 mt-2">
              <div className="w-2 h-2 rounded-full bg-[#e2d42c]"></div>
              <span className="text-sm">Better lead handling</span>
            </div>
            <div className="flex items-center gap-2 mt-2">
              <div className="w-2 h-2 rounded-full bg-[#e2d42c]"></div>
              <span className="text-sm">Improved close-rate execution</span>
            </div>
          </div>
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-8 mt-8 max-w-5xl mx-auto">
        <div className="bg-gray-100 dark:bg-[#111] p-8 rounded-2xl border border-[#e2d42c] shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 group">
          <div className="bg-gradient-to-br from-[#e2d42c] to-[#d4c628] text-black p-4 rounded-full w-16 h-16 flex items-center justify-center mb-6 shadow-md group-hover:shadow-lg group-hover:scale-110 transition-all duration-300">
            <GitBranch className="w-8 h-8" />
          </div>
          <h3 className="text-xl font-bold mb-4 group-hover:text-[#e2d42c] transition-colors">
            Follow-Up &amp; Pipeline Systems
          </h3>
          <p className="text-gray-600 dark:text-gray-400 mb-4">
            We help put the right follow-up and pipeline process in place so opportunities do not slip through the
            cracks. This creates a smoother path from lead to closed business.
          </p>
          <div className="mt-6 pt-6 border-t border-gray-200 dark:border-gray-800">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-[#e2d42c]"></div>
              <span className="text-sm">Structured follow-up process</span>
            </div>
            <div className="flex items-center gap-2 mt-2">
              <div className="w-2 h-2 rounded-full bg-[#e2d42c]"></div>
              <span className="text-sm">Pipeline visibility</span>
            </div>
            <div className="flex items-center gap-2 mt-2">
              <div className="w-2 h-2 rounded-full bg-[#e2d42c]"></div>
              <span className="text-sm">More consistent conversion</span>
            </div>
          </div>
        </div>

        <div className="bg-gray-100 dark:bg-[#111] p-8 rounded-2xl border border-[#e2d42c] shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 group">
          <div className="bg-gradient-to-br from-[#e2d42c] to-[#d4c628] text-black p-4 rounded-full w-16 h-16 flex items-center justify-center mb-6 shadow-md group-hover:shadow-lg group-hover:scale-110 transition-all duration-300">
            <BarChart3 className="w-8 h-8" />
          </div>
          <h3 className="text-xl font-bold mb-4 group-hover:text-[#e2d42c] transition-colors">Scale &amp; Optimization</h3>
          <p className="text-gray-600 dark:text-gray-400 mb-4">
            Once the system is working, we help refine and optimize it so your company can keep growing without relying on
            guesswork. The goal is a repeatable engine that can scale over time.
          </p>
          <div className="mt-6 pt-6 border-t border-gray-200 dark:border-gray-800">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-[#e2d42c]"></div>
              <span className="text-sm">Ongoing performance improvement</span>
            </div>
            <div className="flex items-center gap-2 mt-2">
              <div className="w-2 h-2 rounded-full bg-[#e2d42c]"></div>
              <span className="text-sm">System refinement</span>
            </div>
            <div className="flex items-center gap-2 mt-2">
              <div className="w-2 h-2 rounded-full bg-[#e2d42c]"></div>
              <span className="text-sm">Scalable growth foundation</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
