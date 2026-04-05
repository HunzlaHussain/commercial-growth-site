"use client"

import { useState, useEffect } from "react"

interface GeolocationState {
  location: string
  isLoading: boolean
  error: string | null
}

export function useGeolocation() {
  const [state, setState] = useState<GeolocationState>({
    location: "your area",
    isLoading: true,
    error: null,
  })

  useEffect(() => {
    if (typeof window !== "undefined" && "geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition(
        async (position) => {
          try {
            const { latitude, longitude } = position.coords
            // Use a reverse geocoding service to get the city name
            const response = await fetch(
              `https://nominatim.openstreetmap.org/reverse?format=json&lat=${latitude}&lon=${longitude}&zoom=10`,
            )
            const data = await response.json()

            // Extract city name from the response
            const city =
              data.address?.city || data.address?.town || data.address?.village || data.address?.county || "your area"

            setState({
              location: city,
              isLoading: false,
              error: null,
            })
          } catch (error) {
            setState({
              location: "your area",
              isLoading: false,
              error: "Failed to get location",
            })
          }
        },
        (error) => {
          setState({
            location: "your area",
            isLoading: false,
            error: error.message,
          })
        },
      )
    } else {
      setState({
        location: "your area",
        isLoading: false,
        error: "Geolocation not supported",
      })
    }
  }, [])

  return state
}