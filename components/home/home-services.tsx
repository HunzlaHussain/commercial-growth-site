"use client"

import { BarChart3, Briefcase, GitBranch, Rocket, Target } from "lucide-react"

export default function HomeServices() {
  return (
    <section className="container mx-auto px-4 relative">
      <div className="text-center mb-16">
        <div className="text-brand-slate uppercase text-xs tracking-widest mb-3 font-semibold">
          Commercial growth system
        </div>
        <h2 className="cg-section-h2 max-w-4xl mx-auto">
          Everything You Need to Generate More Commercial Leads
        </h2>
      </div>

      <div className="grid md:grid-cols-3 gap-8">
        <div className="bg-white p-8 rounded-2xl border border-brand-border shadow-sm transition-shadow">
          <div className="bg-brand-signal text-white p-4 rounded-full w-16 h-16 flex items-center justify-center mb-6">
            <Target className="w-8 h-8" />
          </div>
          <h3 className="text-xl font-bold mb-4 text-brand-navy">
            Targeting &amp; Market Positioning
          </h3>
          <p className="cg-body-lead mb-4">
            We help commercial asphalt, commercial cleaning, commercial HVAC, and commercial painting companies identify
            the right buyers, sharpen their targeting, and build messaging that speaks directly to real commercial
            opportunities.
          </p>
          <div className="mt-6 pt-6 border-t border-brand-border">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-brand-signal" />
              <span className="text-sm text-brand-slate">Ideal buyer targeting</span>
            </div>
            <div className="flex items-center gap-2 mt-2">
              <div className="w-2 h-2 rounded-full bg-brand-signal" />
              <span className="text-sm text-brand-slate">Market-specific messaging</span>
            </div>
            <div className="flex items-center gap-2 mt-2">
              <div className="w-2 h-2 rounded-full bg-brand-signal" />
              <span className="text-sm text-brand-slate">Positioning built for qualified demand</span>
            </div>
          </div>
        </div>

        <div className="bg-white p-8 rounded-2xl border border-brand-border shadow-sm transition-shadow">
          <div className="bg-brand-signal text-white p-4 rounded-full w-16 h-16 flex items-center justify-center mb-6">
            <Rocket className="w-8 h-8" />
          </div>
          <h3 className="text-xl font-bold mb-4 text-brand-navy">
            Tailored Lead Generation Engine
          </h3>
          <p className="cg-body-lead mb-4">
            We plug your company into a tailored lead generation engine designed to consistently create qualified
            commercial opportunities in your market. The focus is on building predictable pipeline, not just generating
            random leads.
          </p>
          <div className="mt-6 pt-6 border-t border-brand-border">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-brand-signal" />
              <span className="text-sm text-brand-slate">Customized outreach strategy</span>
            </div>
            <div className="flex items-center gap-2 mt-2">
              <div className="w-2 h-2 rounded-full bg-brand-signal" />
              <span className="text-sm text-brand-slate">Qualified opportunity generation</span>
            </div>
            <div className="flex items-center gap-2 mt-2">
              <div className="w-2 h-2 rounded-full bg-brand-signal" />
              <span className="text-sm text-brand-slate">Built for consistency and scale</span>
            </div>
          </div>
        </div>

        <div className="bg-white p-8 rounded-2xl border border-brand-border shadow-sm transition-shadow">
          <div className="bg-brand-signal text-white p-4 rounded-full w-16 h-16 flex items-center justify-center mb-6">
            <Briefcase className="w-8 h-8" />
          </div>
          <h3 className="text-xl font-bold mb-4 text-brand-navy">
            Sales Assistance &amp; Conversion Support
          </h3>
          <p className="cg-body-lead mb-4">
            Generating leads is only part of the equation. We help strengthen the sales process so opportunities move
            forward, deals close more effectively, and revenue becomes more predictable.
          </p>
          <div className="mt-6 pt-6 border-t border-brand-border">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-brand-signal" />
              <span className="text-sm text-brand-slate">Sales process support</span>
            </div>
            <div className="flex items-center gap-2 mt-2">
              <div className="w-2 h-2 rounded-full bg-brand-signal" />
              <span className="text-sm text-brand-slate">Better lead handling</span>
            </div>
            <div className="flex items-center gap-2 mt-2">
              <div className="w-2 h-2 rounded-full bg-brand-signal" />
              <span className="text-sm text-brand-slate">Improved close-rate execution</span>
            </div>
          </div>
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-8 mt-8 max-w-5xl mx-auto">
        <div className="bg-white p-8 rounded-2xl border border-brand-border shadow-sm transition-shadow">
          <div className="bg-brand-signal text-white p-4 rounded-full w-16 h-16 flex items-center justify-center mb-6">
            <GitBranch className="w-8 h-8" />
          </div>
          <h3 className="text-xl font-bold mb-4 text-brand-navy">
            Follow-Up &amp; Pipeline Systems
          </h3>
          <p className="cg-body-lead mb-4">
            We help put the right follow-up and pipeline process in place so opportunities do not slip through the
            cracks. This creates a smoother path from lead to closed business.
          </p>
          <div className="mt-6 pt-6 border-t border-brand-border">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-brand-signal" />
              <span className="text-sm text-brand-slate">Structured follow-up process</span>
            </div>
            <div className="flex items-center gap-2 mt-2">
              <div className="w-2 h-2 rounded-full bg-brand-signal" />
              <span className="text-sm text-brand-slate">Pipeline visibility</span>
            </div>
            <div className="flex items-center gap-2 mt-2">
              <div className="w-2 h-2 rounded-full bg-brand-signal" />
              <span className="text-sm text-brand-slate">More consistent conversion</span>
            </div>
          </div>
        </div>

        <div className="bg-white p-8 rounded-2xl border border-brand-border shadow-sm transition-shadow">
          <div className="bg-brand-signal text-white p-4 rounded-full w-16 h-16 flex items-center justify-center mb-6">
            <BarChart3 className="w-8 h-8" />
          </div>
          <h3 className="text-xl font-bold mb-4 text-brand-navy">
            Scale &amp; Optimization
          </h3>
          <p className="cg-body-lead mb-4">
            Once the system is working, we help refine and optimize it so your company can keep growing without relying on
            guesswork. The goal is a repeatable engine that can scale over time.
          </p>
          <div className="mt-6 pt-6 border-t border-brand-border">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-brand-signal" />
              <span className="text-sm text-brand-slate">Ongoing performance improvement</span>
            </div>
            <div className="flex items-center gap-2 mt-2">
              <div className="w-2 h-2 rounded-full bg-brand-signal" />
              <span className="text-sm text-brand-slate">System refinement</span>
            </div>
            <div className="flex items-center gap-2 mt-2">
              <div className="w-2 h-2 rounded-full bg-brand-signal" />
              <span className="text-sm text-brand-slate">Scalable growth foundation</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
