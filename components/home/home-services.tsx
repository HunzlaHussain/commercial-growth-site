"use client"

import { Award, Monitor, Rocket, Smartphone, Star, Target, TrendingUp, Zap } from "lucide-react"

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
            <div className="flex">
              <Monitor className="w-6 h-6" />
              <Smartphone className="w-5 h-5 -ml-1" />
            </div>
          </div>
          <h3 className="text-xl font-bold mb-4 group-hover:text-[#e2d42c] transition-colors">
            Website & Landing Pages That Convert
          </h3>
          <p className="text-gray-600 dark:text-gray-400 mb-4">
            Professional websites and landing pages built to turn traffic into calls, form fills, and qualified
            commercial opportunities.
          </p>
          <div className="mt-6 pt-6 border-t border-gray-200 dark:border-gray-800">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-[#e2d42c]"></div>
              <span className="text-sm">Built for lead conversion</span>
            </div>
            <div className="flex items-center gap-2 mt-2">
              <div className="w-2 h-2 rounded-full bg-[#e2d42c]"></div>
              <span className="text-sm">Mobile-optimized and fast</span>
            </div>
            <div className="flex items-center gap-2 mt-2">
              <div className="w-2 h-2 rounded-full bg-[#e2d42c]"></div>
              <span className="text-sm">Quote request and form capture systems</span>
            </div>
          </div>
        </div>

        <div className="bg-gray-100 dark:bg-[#111] p-8 rounded-2xl border border-[#e2d42c] shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 group">
          <div className="bg-gradient-to-br from-[#e2d42c] to-[#d4c628] text-black p-4 rounded-full w-16 h-16 flex items-center justify-center mb-6 shadow-md group-hover:shadow-lg group-hover:scale-110 transition-all duration-300">
            <Star className="w-8 h-8" />
          </div>
          <h3 className="text-xl font-bold mb-4 group-hover:text-[#e2d42c] transition-colors">
            Review & Reputation Management
          </h3>
          <p className="text-gray-600 dark:text-gray-400 mb-4">
            Build trust with property managers, facility teams, and commercial buyers through stronger reviews,
            reputation monitoring, and social proof.
          </p>
          <div className="mt-6 pt-6 border-t border-gray-200 dark:border-gray-800">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-[#e2d42c]"></div>
              <span className="text-sm">Automated review requests</span>
            </div>
            <div className="flex items-center gap-2 mt-2">
              <div className="w-2 h-2 rounded-full bg-[#e2d42c]"></div>
              <span className="text-sm">Reputation monitoring</span>
            </div>
            <div className="flex items-center gap-2 mt-2">
              <div className="w-2 h-2 rounded-full bg-[#e2d42c]"></div>
              <span className="text-sm">Trust-building social proof</span>
            </div>
          </div>
        </div>

        <div className="bg-gray-100 dark:bg-[#111] p-8 rounded-2xl border border-[#e2d42c] shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 group">
          <div className="bg-gradient-to-br from-[#e2d42c] to-[#d4c628] text-black p-4 rounded-full w-16 h-16 flex items-center justify-center mb-6 shadow-md group-hover:shadow-lg group-hover:scale-110 transition-all duration-300">
            <Target className="w-8 h-8" />
          </div>
          <h3 className="text-xl font-bold mb-4 group-hover:text-[#e2d42c] transition-colors">Local SEO & Google Ads</h3>
          <p className="text-gray-600 dark:text-gray-400 mb-4">
            Get found by high-intent buyers searching for commercial asphalt, cleaning, HVAC, and painting services in
            your market.
          </p>
          <div className="mt-6 pt-6 border-t border-gray-200 dark:border-gray-800">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-[#e2d42c]"></div>
              <span className="text-sm">Local SEO strategy</span>
            </div>
            <div className="flex items-center gap-2 mt-2">
              <div className="w-2 h-2 rounded-full bg-[#e2d42c]"></div>
              <span className="text-sm">Google Ads management</span>
            </div>
            <div className="flex items-center gap-2 mt-2">
              <div className="w-2 h-2 rounded-full bg-[#e2d42c]"></div>
              <span className="text-sm">High-intent lead capture</span>
            </div>
          </div>
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-8 mt-8 max-w-5xl mx-auto">
        <div className="bg-gray-100 dark:bg-[#111] p-8 rounded-2xl border border-[#e2d42c] shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 group">
          <div className="bg-gradient-to-br from-[#e2d42c] to-[#d4c628] text-black p-4 rounded-full w-16 h-16 flex items-center justify-center mb-6 shadow-md group-hover:shadow-lg group-hover:scale-110 transition-all duration-300">
            <Rocket className="w-8 h-8" />
          </div>
          <h3 className="text-xl font-bold mb-4 group-hover:text-[#e2d42c] transition-colors">
            Outbound Lead Generation
          </h3>
          <p className="text-gray-600 dark:text-gray-400 mb-4">
            We help you proactively reach property managers, general contractors, facility directors, and other
            decision-makers to create qualified sales conversations.
          </p>
          <div className="mt-6 pt-6 border-t border-gray-200 dark:border-gray-800">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-[#e2d42c]"></div>
              <span className="text-sm">Targeted prospect lists</span>
            </div>
            <div className="flex items-center gap-2 mt-2">
              <div className="w-2 h-2 rounded-full bg-[#e2d42c]"></div>
              <span className="text-sm">Cold email and outreach systems</span>
            </div>
            <div className="flex items-center gap-2 mt-2">
              <div className="w-2 h-2 rounded-full bg-[#e2d42c]"></div>
              <span className="text-sm">Appointment booking support</span>
            </div>
          </div>
        </div>

        <div className="bg-gray-100 dark:bg-[#111] p-8 rounded-2xl border border-[#e2d42c] shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 group">
          <div className="bg-gradient-to-br from-[#e2d42c] to-[#d4c628] text-black p-4 rounded-full w-16 h-16 flex items-center justify-center mb-6 shadow-md group-hover:shadow-lg group-hover:scale-110 transition-all duration-300">
            <Zap className="w-8 h-8" />
          </div>
          <h3 className="text-xl font-bold mb-4 group-hover:text-[#e2d42c] transition-colors">
            CRM & Follow-Up Automation
          </h3>
          <p className="text-gray-600 dark:text-gray-400 mb-4">
            Stop losing deals due to slow follow-up. We help automate lead handling, follow-ups, reminders, and pipeline
            tracking so more opportunities turn into revenue.
          </p>
          <div className="mt-6 pt-6 border-t border-gray-200 dark:border-gray-800">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-[#e2d42c]"></div>
              <span className="text-sm">CRM setup and automation</span>
            </div>
            <div className="flex items-center gap-2 mt-2">
              <div className="w-2 h-2 rounded-full bg-[#e2d42c]"></div>
              <span className="text-sm">Lead follow-up workflows</span>
            </div>
            <div className="flex items-center gap-2 mt-2">
              <div className="w-2 h-2 rounded-full bg-[#e2d42c]"></div>
              <span className="text-sm">Pipeline visibility and tracking</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

