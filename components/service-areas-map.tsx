"use client"

import { useState } from "react"

const SAN_ANTONIO_REGIONS = [
  { name: "Downtown", lon: -98.4936, lat: 29.4241, zoom: 12 },
  { name: "Alamo Heights", lon: -98.465, lat: 29.475, zoom: 13 },
  { name: "Stone Oak", lon: -98.478, lat: 29.564, zoom: 13 },
  { name: "Medical Center", lon: -98.579, lat: 29.509, zoom: 13 },
  { name: "Southtown", lon: -98.487, lat: 29.415, zoom: 14 },
  { name: "The Pearl", lon: -98.477, lat: 29.448, zoom: 15 },
  { name: "North Central", lon: -98.51, lat: 29.52, zoom: 12 },
  { name: "Westside", lon: -98.53, lat: 29.43, zoom: 12 },
]

const DEFAULT_VIEW = { lon: -98.4936, lat: 29.4241, zoom: 11 }

function getMapEmbedUrl(lon: number, lat: number, zoom: number) {
  const buffer = Math.max(0.01, 0.08 - zoom * 0.005)
  const bbox = `${lon - buffer},${lat - buffer},${lon + buffer},${lat + buffer}`
  return `https://www.openstreetmap.org/export/embed.html?bbox=${encodeURIComponent(bbox)}&layer=mapnik`
}

export default function ServiceAreasMap() {
  const [mapView, setMapView] = useState(DEFAULT_VIEW)
  const mapEmbedUrl = getMapEmbedUrl(mapView.lon, mapView.lat, mapView.zoom)

  return (
    <section
      id="service-areas"
      className="py-20 px-4 sm:px-6 lg:px-8"
      style={{ backgroundColor: "#0a0a0a" }}
    >
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-10">
          <h2
            className="text-4xl sm:text-5xl font-bold mb-4"
            style={{ color: "#ff8c00" }}
          >
            Service Areas & Interactive Map
          </h2>
          <p className="text-white text-base lg:text-lg max-w-3xl mx-auto mb-6">
            DLUXX Detailing proudly serves the following areas in and around San Antonio. Click a
            region to see its location on the map.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <button
              type="button"
              onClick={() => setMapView(DEFAULT_VIEW)}
              className="px-5 py-2.5 rounded border-2 bg-transparent text-white font-medium transition-all hover:bg-[#ff8c00]/10"
              style={{ borderColor: "#ff8c00" }}
            >
              All San Antonio
            </button>
            {SAN_ANTONIO_REGIONS.map((region) => (
              <button
                key={region.name}
                type="button"
                onClick={() => setMapView({ lon: region.lon, lat: region.lat, zoom: region.zoom })}
                className="px-5 py-2.5 rounded border-2 bg-transparent text-white font-medium transition-all hover:bg-[#ff8c00]/10"
                style={{ borderColor: "#ff8c00" }}
              >
                {region.name}
              </button>
            ))}
          </div>
          <p className="text-white/80 text-sm mt-6">
            Use the interactive map below to zoom and explore our service area.
          </p>
        </div>

        <div className="rounded-lg overflow-hidden border-2 shadow-xl" style={{ borderColor: "rgba(255, 140, 0, 0.4)" }}>
          <iframe
            src={mapEmbedUrl}
            width="100%"
            height="450"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="San Antonio Service Areas Map"
          />
        </div>
      </div>
    </section>
  )
}
