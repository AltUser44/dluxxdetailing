"use client"
import { useState, useEffect } from "react"
import { Card } from "@/components/ui/card"

const galleryItems = [
  {
    title: "Interior Deep Clean",
    category: "Full Detail",
    image: "/car-interior-detailing-before-after-clean.png",
  },
  {
    title: "Paint Correction",
    category: "Premium Detail",
    image: "/car-paint-correction-shine-glossy.jpg",
  },
  {
    title: "Exterior Wash",
    category: "Express Detail",
    image: "/car-exterior-wash-clean-shiny.jpg",
  },
  {
    title: "Ceramic Coating",
    category: "Premium Detail",
    image: "/car-ceramic-coating-glossy-protection.jpg",
  },
  {
    title: "Wheel Restoration",
    category: "Add-On Service",
    image: "/car-wheels-shine-detail-restoration.jpg",
  },
  {
    title: "Full Transformation",
    category: "Showroom Detail",
    image: "/luxury-car-detailing-transformation-showroom.jpg",
  },
  {
    title: "Ceramic Coating Application",
    category: "Premium Service",
    image: "/car-ceramic-coating-glossy.jpg",
  },
  {
    title: "Exterior Detail",
    category: "Express Service",
    image: "/car-exterior-wash-clean.jpg",
  },
  {
    title: "Interior Detailing",
    category: "Full Service",
    image: "/car-interior-detailing-before-after.jpg",
  },
  {
    title: "Paint Enhancement",
    category: "Premium Detail",
    image: "/car-paint-correction-shine.jpg",
  },
  {
    title: "Wheel Shine",
    category: "Add-On Service",
    image: "/car-wheels-shine-detail.jpg",
  },
  {
    title: "Luxury Transformation",
    category: "Showroom Detail",
    image: "/luxury-car-detailing-transformation.jpg",
  },
]

export default function Gallery() {
  const [isVisible, setIsVisible] = useState(true)

  useEffect(() => {
    const interval = setInterval(() => {
      setIsVisible((prev) => !prev)
    }, 5000) // Toggle every 5 seconds

    return () => clearInterval(interval)
  }, [])

  return (
    <section id="gallery" className="py-20 px-4 sm:px-6 lg:px-8" style={{backgroundColor: '#1a1a2e'}}>
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold mb-4" style={{color: '#ff8c00'}}>Our Work</h2>
          <p className="text-lg text-white font-bold max-w-2xl mx-auto">
            Before & after transformations that speak for themselves
          </p>
          <p 
            className={`text-sm text-white/70 mt-4 transition-opacity duration-500 ${
              isVisible ? 'opacity-100' : 'opacity-0'
            }`}
          >
            All photos posted with customer permission
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {galleryItems.map((item, index) => (
            <div
              key={index}
              className="relative h-64 overflow-hidden bg-muted border border-border hover:border-accent/50 transition-all duration-300 group cursor-pointer rounded-lg"
            >
              <img
                src={item.image || "/placeholder.svg"}
                alt={item.title}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4">
                <h3 className="text-white font-bold">{item.title}</h3>
                <p className="text-white/80 text-sm">{item.category}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
