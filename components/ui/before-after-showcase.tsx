"use client"

export default function BeforeAfterShowcase() {
  return (
    <section className="container mx-auto px-4">
      <div className="mb-8 text-center">
        <h2 className="cg-section-h2 mx-auto max-w-3xl">Our Results</h2>
        <div className="mx-auto mt-3 h-0.5 w-16 rounded-full bg-brand-red" />
        <p className="mt-2 text-xs font-semibold tracking-[0.18em] text-brand-slate">
          AVERAGE MONTHLY STATISTICS FOR OUR CAMPAIGNS
        </p>

        <div className="mx-auto mt-8 grid max-w-5xl grid-cols-1 gap-6 sm:grid-cols-3">
          <div className="rounded-xl border border-brand-border bg-white px-6 py-8 shadow-sm">
            <div className="text-4xl font-semibold tracking-tight text-brand-red">10</div>
            <div className="mx-auto mt-4 max-w-[22ch] text-xs font-semibold uppercase leading-relaxed tracking-wide text-brand-slate">
              Interested leads-ready for quotes now
            </div>
          </div>

          <div className="rounded-xl border border-brand-border bg-white px-6 py-8 shadow-sm">
            <div className="text-4xl font-semibold tracking-tight text-brand-red">1000+</div>
            <div className="mx-auto mt-4 max-w-[28ch] text-xs font-semibold uppercase leading-relaxed tracking-wide text-brand-slate">
              New exposure to the direct decision makers in your service area
            </div>
          </div>

          <div className="rounded-xl border border-brand-border bg-white px-6 py-8 shadow-sm">
            <div className="text-4xl font-semibold tracking-tight text-brand-red">20-30</div>
            <div className="mx-auto mt-4 max-w-[30ch] text-xs font-semibold uppercase leading-relaxed tracking-wide text-brand-slate">
              Future buyers—no current needs but will need quotes later
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
