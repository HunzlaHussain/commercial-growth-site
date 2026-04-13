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
    <section className="container mx-auto px-4">
      <div className="text-center mb-8">
        <h2 className="cg-section-h2 mb-4 max-w-3xl mx-auto">More Commercial Growth Results</h2>
        <p className="cg-body-lead max-w-2xl mx-auto">
          Examples of how we help service businesses turn their online presence and outreach into booked opportunities.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {results.map((r) => (
          <div
            key={r.id}
            className="rounded-2xl border border-brand-border bg-white shadow-sm transition-shadow overflow-hidden"
          >
            <div className="h-1 bg-brand-signal" aria-hidden />
            <div className="p-6 sm:p-7">
              <div className="flex flex-wrap items-center gap-2 mb-4">
                <span className="inline-flex items-center rounded-full bg-brand-cloud text-brand-navy border border-brand-border px-3 py-1 text-xs font-semibold">
                  {r.metric}
                </span>
                <span className="inline-flex items-center rounded-full bg-brand-cloud text-brand-slate border border-brand-border px-3 py-1 text-xs font-medium">
                  {r.timeframe}
                </span>
              </div>
              <h3 className="text-lg sm:text-xl font-bold tracking-tight text-brand-navy">{r.name}</h3>
              <p className="mt-3 text-sm sm:text-[15px] leading-relaxed text-brand-slate">{r.body}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
