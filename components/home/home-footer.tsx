"use client"

import Link from "next/link"

import { COMMERCIAL_GROWTH_LOGO_NAVY } from "./constants"

export default function HomeFooter() {
  return (
    <footer className="border-t border-white/10 py-12 md:py-16">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div>
            <div className="mb-2">
              <Link href="/" className="inline-block p-2 -m-2">
                <img
                  src={COMMERCIAL_GROWTH_LOGO_NAVY}
                  alt="Commercial Growth"
                  className="h-10 w-auto min-w-[180px] max-h-10 object-contain object-left cursor-pointer"
                />
              </Link>
            </div>
            <p className="text-sm text-slate-300 max-w-md">
              Helping commercial service businesses generate more leads, book more appointments, and grow revenue.
            </p>
          </div>

          <div className="flex gap-6">
            <a
              href="mailto:info@commercial-growth.com"
              className="text-slate-300 hover:text-brand-signal transition-colors"
              aria-label="Email"
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
            <a href="#" className="text-slate-300 hover:text-brand-signal transition-colors" aria-label="LinkedIn">
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

        <div className="border-t border-white/10 mt-8 pt-8 text-center">
          <p className="text-sm flex flex-col sm:flex-row flex-wrap items-center justify-center gap-x-4 gap-y-2 text-slate-300">
            <span>
              © {new Date().getFullYear()}{" "}
              <span className="font-bold text-white">
                commercial<span className="text-brand-signal">-growth</span>
              </span>{" "}
              LLC. All rights reserved. Part of{" "}
              <a
                href="https://socialbloom.io"
                className="hover:underline transition-colors font-bold text-white"
                target="_blank"
                rel="noopener noreferrer"
              >
                Social<span className="text-brand-sky">Bloom</span>
              </a>
            </span>
            <Link
              href="/terms-of-service"
              className="text-slate-300 hover:text-brand-signal transition-colors underline-offset-4 hover:underline"
            >
              Terms of Service
            </Link>
          </p>
        </div>
      </div>
    </footer>
  )
}
