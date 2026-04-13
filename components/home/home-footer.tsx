"use client"

import Link from "next/link"

import { LOCALBLOOM_LOGO_URL } from "./constants"

export default function HomeFooter() {
  return (
    <footer className="border-t border-gray-300 dark:border-gray-800 py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div>
            <div className="mb-2">
              <Link href="/">
                <img src={LOCALBLOOM_LOGO_URL} alt="commercial-growth Logo" className="h-10 w-auto cursor-pointer" />
              </Link>
            </div>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              Helping commercial service businesses generate more leads, book more appointments, and grow revenue.
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
          <p className="text-sm flex flex-col sm:flex-row flex-wrap items-center justify-center gap-x-4 gap-y-2">
            <span>
              © 2025{" "}
              <span className="font-bold">
                <span className="text-white dark:text-white">commercial</span>
                <span className="text-[#e2d42c]">-growth</span>
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
            </span>
            <Link
              href="/terms-of-service"
              className="text-gray-600 dark:text-gray-400 hover:text-[#e2d42c] transition-colors underline-offset-4 hover:underline"
            >
              Terms of Service
            </Link>
          </p>
        </div>
      </div>
    </footer>
  )
}

