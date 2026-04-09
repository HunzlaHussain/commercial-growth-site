"use client"

export default function ClientShowcase() {
  const results = [
    {
      id: "blacktop",
      name: "Blacktop Growth Co.",
      body: "Helped generate 34 qualified opportunities in 90 days and supported the sales process to create $412,000 in quoted commercial asphalt work.",
      metric: "34 qualified opportunities",
      timeframe: "90 days",
    },
    {
      id: "cleanflow",
      name: "CleanFlow Facility Services",
      body: "Generated 27 qualified meetings in 60 days and helped build a tighter follow-up process that contributed to $96,000 in new recurring contract value.",
      metric: "27 qualified meetings",
      timeframe: "60 days",
    },
    {
      id: "northpeak",
      name: "NorthPeak Commercial HVAC",
      body: "Created 41 qualified opportunities in 4 months and supported sales conversion across service agreements, retrofit discussions, and replacements, influencing $685,000 in pipeline.",
      metric: "41 qualified opportunities",
      timeframe: "4 months",
    },
    {
      id: "summit",
      name: "Summit Edge Painting",
      body: "Generated 22 qualified commercial opportunities in 75 days and helped improve bid follow-up, contributing to $238,000 in won and active proposal value.",
      metric: "22 qualified opportunities",
      timeframe: "75 days",
    },
  ] as const

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

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {results.map((r) => (
          <div
            key={r.id}
            className="rounded-2xl border border-[#e2d42c]/40 bg-white/70 dark:bg-[#111]/60 backdrop-blur-sm p-6 sm:p-7 shadow-sm hover:shadow-lg hover:shadow-[#e2d42c]/10 transition-all duration-300"
          >
            <div className="flex flex-wrap items-center gap-2 mb-4">
              <span className="inline-flex items-center rounded-full bg-[#e2d42c]/15 text-[#6b5f00] dark:text-[#e2d42c] border border-[#e2d42c]/30 px-3 py-1 text-xs font-semibold">
                {r.metric}
              </span>
              <span className="inline-flex items-center rounded-full bg-gray-100 text-gray-700 dark:bg-white/5 dark:text-gray-200 border border-gray-200 dark:border-white/10 px-3 py-1 text-xs font-medium">
                {r.timeframe}
              </span>
            </div>
            <h4 className="text-lg sm:text-xl font-bold tracking-tight">{r.name}</h4>
            <p className="mt-3 text-sm sm:text-[15px] leading-relaxed text-gray-600 dark:text-gray-400">{r.body}</p>
          </div>
        ))}
      </div>
    </section>
  )
}