"use client"
import {
  Monitor,
  Smartphone,
  Sun,
  Moon,
  ChevronRight,
  Star,
  Award,
  TrendingUp,
  Zap,
  Target,
  Rocket,
} from "lucide-react"
import { useState, useEffect } from "react"
import { useTheme } from "next-themes"
import CalendarModal from "@/components/ui/calendar-modal"
import ClientShowcase from "@/components/ui/client-showcase"
import BeforeAfterShowcase from "@/components/ui/before-after-showcase"
import Link from "next/link"

export default function Home() {
  const [isCalendarOpen, setIsCalendarOpen] = useState(false)
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  // After mounting, we can safely show the UI
  useEffect(() => {
    setMounted(true)
  }, [])

  const handleContactClick = () => {
    window.location.href =
      "mailto:info@localbloom.io?subject=Business Growth Package Inquiry&body=Hi LocalBloom team,%0D%0A%0D%0AI'm interested in learning more about your complete business growth package for local businesses.%0D%0A%0D%0APlease contact me to discuss how you can help me build, grow, and scale my business.%0D%0A%0D%0AThank you!"
  }

  return (
    <div className="min-h-screen bg-white dark:bg-[#0d0d0d] text-black dark:text-white">
      {/* Navigation */}
      <header className="container mx-auto py-6 px-4 flex items-center justify-between relative z-10">
        <div className="flex items-center gap-2">
          {/* Clickable logo that links to homepage */}
          <Link href="/">
            <img
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/LB-bppf7mCV465zdBWhrKoy2K6V5DGfqa.png"
              alt="LocalBloom Logo"
              className="h-10 w-auto cursor-pointer"
            />
          </Link>
        </div>
        <div className="flex items-center gap-4">
          {mounted && (
            <button
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              className="p-2 rounded-full bg-gray-100 dark:bg-[#111] hover:bg-gray-200 dark:hover:bg-gray-900 transition-colors shadow-sm"
              aria-label="Toggle theme"
            >
              {theme === "dark" ? (
                <Sun className="w-5 h-5 text-[#e2d42c]" />
              ) : (
                <Moon className="w-5 h-5 text-[#e2d42c]" />
              )}
            </button>
          )}
          <button
            onClick={handleContactClick}
            className="bg-gradient-to-r from-[#e2d42c] to-[#d4c628] text-black px-5 py-2.5 rounded-md flex items-center gap-2 font-medium hover:shadow-lg hover:shadow-[#e2d42c]/20 transition-all duration-300 transform hover:-translate-y-0.5"
          >
            Get Started <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="container mx-auto px-4 py-16 md:py-24 relative">
        {/* Decorative element */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-[#e2d42c]/10 rounded-full blur-3xl -z-10"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#e2d42c]/5 rounded-full blur-3xl -z-10"></div>

        <div className="max-w-4xl relative">
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6 relative z-10">
            Build, Grow &{" "}
            <span className="bg-[#e2d42c] text-black px-3 py-1.5 rounded-md text-[calc(100%-10px)] inline-block">
              Scale Your Business
            </span>{" "}
            from Local to Empire
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 mb-8 max-w-2xl">
            Complete business growth package: Professional websites, review management, local marketing, and franchise
            expansion strategies. Everything you need to dominate your market and scale nationwide.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <button
              onClick={handleContactClick}
              className="bg-gradient-to-r from-[#e2d42c] to-[#d4c628] text-black px-8 py-4 rounded-md flex items-center justify-center gap-2 font-medium shadow-lg shadow-[#e2d42c]/20 hover:shadow-xl hover:shadow-[#e2d42c]/30 transition-all duration-300 transform hover:-translate-y-1 w-full sm:w-auto"
            >
              Start Your Growth Journey <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        <div className="mt-16">
          <div className="inline-block bg-gray-100 dark:bg-[#111] px-8 py-4 rounded-2xl border border-[#e2d42c] font-medium shadow-md hover:shadow-lg transition-shadow duration-300">
            <span className="font-bold text-[#e2d42c]">500+</span> local businesses scaled to multi-location success
          </div>
        </div>

        {/* Trust badges */}
        <div className="mt-16 flex flex-wrap justify-center gap-8 items-center">
          <div className="flex items-center gap-2 bg-gray-50 dark:bg-[#0a0a0a] px-4 py-2 rounded-full">
            <Star className="w-5 h-5 text-[#e2d42c]" />
            <span className="text-sm font-medium">Complete Growth System</span>
          </div>
          <div className="flex items-center gap-2 bg-gray-50 dark:bg-[#0a0a0a] px-4 py-2 rounded-full">
            <Award className="w-5 h-5 text-[#e2d42c]" />
            <span className="text-sm font-medium">Franchise Ready</span>
          </div>
          <div className="flex items-center gap-2 bg-gray-50 dark:bg-[#0a0a0a] px-4 py-2 rounded-full">
            <TrendingUp className="w-5 h-5 text-[#e2d42c]" />
            <span className="text-sm font-medium">Proven Scale Strategy</span>
          </div>
        </div>
      </section>

      {/* Before/After Section */}
      <BeforeAfterShowcase />

      {/* Client Showcase Section */}
      <ClientShowcase />

      {/* Services Section */}
      <section className="container mx-auto px-4 py-16 md:py-24 relative">
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#e2d42c]/5 rounded-full blur-3xl -z-10"></div>

        <div className="text-center mb-16">
          <div className="text-[#e2d42c] uppercase text-sm tracking-wider mb-2 font-semibold">
            COMPLETE GROWTH PACKAGE
          </div>
          <h2 className="text-4xl md:text-5xl font-bold">
            Everything You Need to <span className="text-[#e2d42c]">Build & Scale</span> Your Empire
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
              Professional Website & Branding
            </h3>
            <p className="text-gray-600 dark:text-gray-400 mb-4">
              High-converting websites with professional branding that establishes credibility and drives customers to
              choose you over competitors.
            </p>
            <div className="mt-6 pt-6 border-t border-gray-200 dark:border-gray-800">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-[#e2d42c]"></div>
                <span className="text-sm">Custom design & branding</span>
              </div>
              <div className="flex items-center gap-2 mt-2">
                <div className="w-2 h-2 rounded-full bg-[#e2d42c]"></div>
                <span className="text-sm">Mobile-optimized & fast</span>
              </div>
              <div className="flex items-center gap-2 mt-2">
                <div className="w-2 h-2 rounded-full bg-[#e2d42c]"></div>
                <span className="text-sm">Lead capture systems</span>
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
              Automated review generation, reputation monitoring, and crisis management to build trust and attract more
              customers through social proof.
            </p>
            <div className="mt-6 pt-6 border-t border-gray-200 dark:border-gray-800">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-[#e2d42c]"></div>
                <span className="text-sm">Automated review requests</span>
              </div>
              <div className="flex items-center gap-2 mt-2">
                <div className="w-2 h-2 rounded-full bg-[#e2d42c]"></div>
                <span className="text-sm">Multi-platform monitoring</span>
              </div>
              <div className="flex items-center gap-2 mt-2">
                <div className="w-2 h-2 rounded-full bg-[#e2d42c]"></div>
                <span className="text-sm">Crisis response system</span>
              </div>
            </div>
          </div>

          <div className="bg-gray-100 dark:bg-[#111] p-8 rounded-2xl border border-[#e2d42c] shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 group">
            <div className="bg-gradient-to-br from-[#e2d42c] to-[#d4c628] text-black p-4 rounded-full w-16 h-16 flex items-center justify-center mb-6 shadow-md group-hover:shadow-lg group-hover:scale-110 transition-all duration-300">
              <Target className="w-8 h-8" />
            </div>
            <h3 className="text-xl font-bold mb-4 group-hover:text-[#e2d42c] transition-colors">
              Local Marketing & Traction
            </h3>
            <p className="text-gray-600 dark:text-gray-400 mb-4">
              Comprehensive local SEO, Google Ads management, and social media marketing to dominate your local market
              and generate consistent leads.
            </p>
            <div className="mt-6 pt-6 border-t border-gray-200 dark:border-gray-800">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-[#e2d42c]"></div>
                <span className="text-sm">Local SEO domination</span>
              </div>
              <div className="flex items-center gap-2 mt-2">
                <div className="w-2 h-2 rounded-full bg-[#e2d42c]"></div>
                <span className="text-sm">Google Ads management</span>
              </div>
              <div className="flex items-center gap-2 mt-2">
                <div className="w-2 h-2 rounded-full bg-[#e2d42c]"></div>
                <span className="text-sm">Social media growth</span>
              </div>
            </div>
          </div>
        </div>

        {/* Additional Services Row */}
        <div className="grid md:grid-cols-2 gap-8 mt-8">
          <div className="bg-gray-100 dark:bg-[#111] p-8 rounded-2xl border border-[#e2d42c] shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 group">
            <div className="bg-gradient-to-br from-[#e2d42c] to-[#d4c628] text-black p-4 rounded-full w-16 h-16 flex items-center justify-center mb-6 shadow-md group-hover:shadow-lg group-hover:scale-110 transition-all duration-300">
              <Rocket className="w-8 h-8" />
            </div>
            <h3 className="text-xl font-bold mb-4 group-hover:text-[#e2d42c] transition-colors">
              Franchise Development
            </h3>
            <p className="text-gray-600 dark:text-gray-400 mb-4">
              Complete franchise system development including operations manuals, training programs, and scalable
              business models for rapid expansion.
            </p>
            <div className="mt-6 pt-6 border-t border-gray-200 dark:border-gray-800">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-[#e2d42c]"></div>
                <span className="text-sm">Franchise documentation</span>
              </div>
              <div className="flex items-center gap-2 mt-2">
                <div className="w-2 h-2 rounded-full bg-[#e2d42c]"></div>
                <span className="text-sm">Training systems</span>
              </div>
              <div className="flex items-center gap-2 mt-2">
                <div className="w-2 h-2 rounded-full bg-[#e2d42c]"></div>
                <span className="text-sm">Legal compliance</span>
              </div>
            </div>
          </div>

          <div className="bg-gray-100 dark:bg-[#111] p-8 rounded-2xl border border-[#e2d42c] shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 group">
            <div className="bg-gradient-to-br from-[#e2d42c] to-[#d4c628] text-black p-4 rounded-full w-16 h-16 flex items-center justify-center mb-6 shadow-md group-hover:shadow-lg group-hover:scale-110 transition-all duration-300">
              <Zap className="w-8 h-8" />
            </div>
            <h3 className="text-xl font-bold mb-4 group-hover:text-[#e2d42c] transition-colors">
              Business Automation & Systems
            </h3>
            <p className="text-gray-600 dark:text-gray-400 mb-4">
              Streamlined operations with CRM integration, automated workflows, and performance tracking to scale
              efficiently without losing quality.
            </p>
            <div className="mt-6 pt-6 border-t border-gray-200 dark:border-gray-800">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-[#e2d42c]"></div>
                <span className="text-sm">CRM & automation</span>
              </div>
              <div className="flex items-center gap-2 mt-2">
                <div className="w-2 h-2 rounded-full bg-[#e2d42c]"></div>
                <span className="text-sm">Performance analytics</span>
              </div>
              <div className="flex items-center gap-2 mt-2">
                <div className="w-2 h-2 rounded-full bg-[#e2d42c]"></div>
                <span className="text-sm">Scalable workflows</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonial Section */}
      <section className="container mx-auto px-4 py-16 md:py-24">
        <div className="bg-gray-100 dark:bg-[#111] p-10 rounded-3xl border border-[#e2d42c] shadow-xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-40 h-40 bg-[#e2d42c]/20 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-40 h-40 bg-[#e2d42c]/10 rounded-full blur-3xl"></div>

          <div className="relative z-10 flex flex-col md:flex-row gap-10 items-center">
            <div className="w-24 h-24 rounded-full bg-[#e2d42c] flex items-center justify-center">
              <span className="text-2xl font-black text-black">15X</span>
            </div>
            <div className="flex-1">
              <p className="text-xl md:text-2xl italic mb-6">
                "
                <span className="font-bold">
                  <span className="text-white dark:text-white">Local</span>
                  <span className="text-[#e2d42c]">Bloom</span>
                </span>{" "}
                didn't just build us a website - they built us an empire. We went from 1 location to 15 franchises in 18
                months. Their complete growth system handles everything from our online presence to franchise
                operations. Best investment we ever made."
              </p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-[#3d3a10] flex items-center justify-center text-2xl">🏢</div>
                <div>
                  <h4 className="font-bold">Sarah Chen</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">CEO, CleanPro Franchise Network</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="container mx-auto px-4 py-16 md:py-24">
        <div className="bg-gradient-to-br from-gray-100 to-gray-200 dark:from-[#111] dark:to-[#0a0a0a] p-10 md:p-16 rounded-3xl border border-[#e2d42c] text-center shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-[#e2d42c]/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#e2d42c]/10 rounded-full blur-3xl"></div>

          <div className="relative z-10">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
              Ready to{" "}
              <span className="bg-[#e2d42c] text-black px-3 py-1.5 rounded-md text-[calc(100%-10px)] inline-block">
                Scale Your Empire?
              </span>{" "}
              Let's Build Your Business Dynasty
            </h2>
            <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto mb-10 text-lg">
              Join 500+ local businesses who transformed from single locations to multi-million dollar franchises with
              our complete growth system. Your empire starts here.
            </p>
            <button
              onClick={handleContactClick}
              className="bg-gradient-to-r from-[#e2d42c] to-[#d4c628] text-black px-8 py-4 rounded-md inline-flex items-center gap-2 font-medium shadow-lg shadow-[#e2d42c]/20 hover:shadow-xl hover:shadow-[#e2d42c]/30 transition-all duration-300 transform hover:-translate-y-1"
            >
              Start Your Empire Today <ChevronRight className="w-5 h-5" />
            </button>

            <div className="mt-10 flex flex-wrap justify-center gap-6">
              <div className="flex items-center gap-2">
                <div className="w-6 h-6 rounded-full bg-[#e2d42c] flex items-center justify-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4 text-black"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <span className="text-sm font-medium">Complete growth package</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-6 h-6 rounded-full bg-[#e2d42c] flex items-center justify-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4 text-black"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <span className="text-sm font-medium">Franchise-ready systems</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-6 h-6 rounded-full bg-[#e2d42c] flex items-center justify-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4 text-black"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <span className="text-sm font-medium">Proven scale strategy</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-gray-300 dark:border-gray-800 py-12">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div>
              {/* Clickable logo in footer */}
              <div className="mb-2">
                <Link href="/">
                  <img
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/LB-bppf7mCV465zdBWhrKoy2K6V5DGfqa.png"
                    alt="LocalBloom Logo"
                    className="h-10 w-auto cursor-pointer"
                  />
                </Link>
              </div>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Building business empires since 2020 - From local to franchise success
              </p>
            </div>

            <div className="flex gap-6">
              <a
                href="mailto:info@localbloom.io"
                className="text-gray-600 dark:text-gray-400 hover:text-[#e2d42c] transition-colors"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-mail"
                >
                  <rect width="20" height="16" x="2" y="4" rx="2" />
                  <path d="m22 7-10 5L2 7" />
                </svg>
              </a>
              <a href="#" className="text-gray-600 dark:text-gray-400 hover:text-[#e2d42c] transition-colors">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-linkedin"
                >
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                  <rect width="4" height="12" x="2" y="9"></rect>
                  <circle cx="4" cy="4" r="2"></circle>
                </svg>
              </a>
            </div>
          </div>

          <div className="border-t border-gray-200 dark:border-gray-800 mt-8 pt-8 text-center">
            <p className="text-sm">
              © 2025{" "}
              <span className="font-bold">
                <span className="text-white dark:text-white">Local</span>
                <span className="text-[#e2d42c]">Bloom</span>
              </span>{" "}
              LLC. All rights reserved. Part of{" "}
              <a
                href="https://socialbloom.io"
                className="hover:underline transition-colors font-bold"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="text-white dark:text-white">Social</span>
                <span className="text-blue-500">Bloom</span>
              </a>
            </p>
          </div>
        </div>
      </footer>

      {/* Calendar Modal */}
      {isCalendarOpen && <CalendarModal onClose={() => setIsCalendarOpen(false)} />}
    </div>
  )
}