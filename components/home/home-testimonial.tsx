"use client"

export default function HomeTestimonial() {
  return (
    <section className="container mx-auto px-4">
      <div className="bg-white p-10 rounded-3xl border border-brand-border shadow-sm relative overflow-hidden">
        <div className="relative z-10 flex flex-col md:flex-row gap-10 items-start md:items-center">
          <div className="flex flex-col gap-3 shrink-0 w-full md:w-auto">
            <div className="rounded-full bg-brand-signal text-white px-5 py-2.5 text-sm font-bold text-center">
              3× qualified opportunities
            </div>
            <div className="rounded-full bg-brand-cloud border border-brand-border px-5 py-2.5 text-sm font-semibold text-center text-brand-navy">
              More booked sales calls
            </div>
            <div className="rounded-full bg-brand-cloud border border-brand-border px-5 py-2.5 text-sm font-semibold text-center text-brand-navy">
              Stronger commercial pipeline
            </div>
          </div>
          <div className="flex-1">
            <p className="cg-body-lead italic mb-6 md:text-2xl md:leading-relaxed">
              &ldquo;
              <span className="font-bold not-italic text-brand-navy">Commercial Growth</span> helped us create a more
              consistent flow of qualified commercial opportunities. We started getting better conversations with the
              right buyers, and our team had a much stronger sales pipeline to work from.&rdquo;
            </p>
            <div className="flex items-center gap-4">
              <div
                className="w-12 h-12 rounded-full bg-brand-navy flex items-center justify-center text-2xl"
                aria-hidden
              >
                🏢
              </div>
              <div>
                <h4 className="font-bold text-brand-navy">Operations Director</h4>
                <p className="text-sm text-brand-slate">Commercial services company</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
