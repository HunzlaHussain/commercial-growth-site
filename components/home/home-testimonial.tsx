"use client"

export default function HomeTestimonial() {
  return (
    <section className="container mx-auto px-4 py-16 md:py-24">
      <div className="bg-gray-100 dark:bg-[#111] p-10 rounded-3xl border border-[#e2d42c] shadow-xl relative overflow-hidden">
        <div className="absolute top-0 right-0 w-40 h-40 bg-[#e2d42c]/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-40 h-40 bg-[#e2d42c]/10 rounded-full blur-3xl"></div>

        <div className="relative z-10 flex flex-col md:flex-row gap-10 items-start md:items-center">
          <div className="flex flex-col gap-3 shrink-0 w-full md:w-auto">
            <div className="rounded-full bg-[#e2d42c] text-black px-5 py-2.5 text-sm font-bold text-center">
              3X Qualified Opportunities
            </div>
            <div className="rounded-full bg-[#e2d42c]/15 border border-[#e2d42c]/40 px-5 py-2.5 text-sm font-semibold text-center">
              More Booked Sales Calls
            </div>
            <div className="rounded-full bg-[#e2d42c]/15 border border-[#e2d42c]/40 px-5 py-2.5 text-sm font-semibold text-center">
              Stronger Commercial Pipeline
            </div>
          </div>
          <div className="flex-1">
            <p className="text-xl md:text-2xl italic mb-6">
              &ldquo;
              <span className="font-bold">
                <span className="text-white dark:text-white">Local</span>
                <span className="text-[#e2d42c]">Bloom</span>
              </span>{" "}
              helped us create a more consistent flow of qualified commercial opportunities. We started getting better
              conversations with the right buyers, and our team had a much stronger sales pipeline to work from.&rdquo;
            </p>
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-[#3d3a10] flex items-center justify-center text-2xl">🏢</div>
              <div>
                <h4 className="font-bold">Operations Director</h4>
                <p className="text-sm text-gray-600 dark:text-gray-400">Commercial Services Company</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

