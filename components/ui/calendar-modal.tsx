"use client"

import { useEffect, useRef } from "react"
import { X } from "lucide-react"

import { BOOKING_CALL_CAL_LINK } from "@/components/home/constants"

interface CalendarModalProps {
  onClose: () => void
}

export default function CalendarModal({ onClose }: CalendarModalProps) {
  const modalRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleEscKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onClose()
      }
    }

    const handleClickOutside = (event: MouseEvent) => {
      if (modalRef.current && !modalRef.current.contains(event.target as Node)) {
        onClose()
      }
    }

    document.addEventListener("keydown", handleEscKey)
    document.addEventListener("mousedown", handleClickOutside)
    document.body.style.overflow = "hidden"

    const calDiv = document.getElementById("my-cal-inline")
    if (calDiv) {
      const script = document.createElement("script")
      script.innerHTML = `
        (function (C, A, L) {
          let p = function (a, ar) { a.q.push(ar); };
          let d = C.document;
          C.Cal = C.Cal || function () {
            let cal = C.Cal;
            let ar = arguments;
            if (!cal.loaded) {
              cal.ns = {};
              cal.q = cal.q || [];
              d.head.appendChild(d.createElement("script")).src = A;
              cal.loaded = true;
            }
            if (ar[0] === L) {
              const api = function () { p(api, arguments); };
              const namespace = ar[1];
              api.q = api.q || [];
              if(typeof namespace === "string"){
                cal.ns[namespace] = cal.ns[namespace] || api;
                p(cal.ns[namespace], ar);
                p(cal, ["initNamespace", namespace]);
              } else p(cal, ar);
              return;
            }
            p(cal, ar);
          };
        })(window, "https://app.cal.com/embed/embed.js", "init");

        Cal("init", "jaafar-from-commercial-growth", { origin: "https://cal.com" });

        Cal.ns["jaafar-from-commercial-growth"]("inline", {
          elementOrSelector: "#my-cal-inline",
          config: { "layout": "month_view" },
          calLink: "${BOOKING_CALL_CAL_LINK}",
        });

        Cal.ns["jaafar-from-commercial-growth"]("ui", {
          "hideEventTypeDetails": false,
          "layout": "month_view"
        });
      `
      document.body.appendChild(script)
    }

    return () => {
      document.removeEventListener("keydown", handleEscKey)
      document.removeEventListener("mousedown", handleClickOutside)
      document.body.style.overflow = "auto"
    }
  }, [onClose])

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-70 backdrop-blur-sm">
      <div ref={modalRef} className="relative w-full max-w-4xl h-[80vh] bg-white rounded-lg shadow-xl overflow-hidden">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 p-2 rounded-full bg-gray-200 hover:bg-gray-300 transition-colors"
        >
          <X className="w-5 h-5 text-gray-800" />
        </button>
        <div id="my-cal-inline" className="w-full h-full overflow-auto"></div>
      </div>
    </div>
  )
}