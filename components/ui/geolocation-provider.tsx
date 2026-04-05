"use client"

import { createContext, useContext, useState, useEffect, type ReactNode } from "react"

interface GeolocationContextType {
  location: string
  isLoading: boolean
}

const GeolocationContext = createContext<GeolocationContextType>({
  location: "your area",
  isLoading: true,
})

export const useGeolocationContext = () => useContext(GeolocationContext)

export const GeolocationProvider = ({ children }: { children: ReactNode }) => {
  const [geolocation, setGeolocation] = useState<GeolocationContextType>({
    location: "your area",
    isLoading: true,
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

            setGeolocation({
              location: city,
              isLoading: false,
            })
          } catch (error) {
            setGeolocation({
              location: "your area",
              isLoading: false,
            })
          }
        },
        () => {
          setGeolocation({
            location: "your area",
            isLoading: false,
          })
        },
      )
    } else {
      setGeolocation({
        location: "your area",
        isLoading: false,
      })
    }
  }, [])

  return <GeolocationContext.Provider value={geolocation}>{children}</GeolocationContext.Provider>
}