"use client"

export default function BeforeAfterShowcase() {
  return (
    <section className="container mx-auto px-4">
      <div className="text-center mb-8">
        <h2 className="cg-section-h2 max-w-3xl mx-auto">Recent Client Growth Wins</h2>
        <p className="cg-body-lead max-w-2xl mx-auto mt-2">
          See how we help service businesses improve positioning, increase lead flow, and create more sales
          opportunities.
        </p>
        <div className="flex flex-wrap justify-center gap-3 mt-6 max-w-3xl mx-auto">
          {["Better positioning", "Stronger trust", "Higher conversion", "More inbound and outbound opportunity capture"].map(
            (label) => (
              <span
                key={label}
                className="text-xs sm:text-sm font-medium px-3 py-1.5 rounded-full bg-white border border-brand-border text-brand-slate shadow-sm"
              >
                {label}
              </span>
            ),
          )}
        </div>
      </div>
    </section>
  )
}
