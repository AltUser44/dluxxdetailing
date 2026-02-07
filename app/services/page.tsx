"use client"

import { useState } from "react"
import Link from "next/link"
import Navigation from "@/components/navigation"
import Footer from "@/components/footer"

const CATEGORIES = ["Interior", "Exterior", "Packages", "Add-Ons"] as const

const INTERIOR_SERVICES = [
  {
    name: "Basic Interior",
    features: [
      "Deep vacuum",
      "Vinyl & dashboard clean",
      "Floor mat shampoo & clean",
      "Steam cleaning",
      "Window clean",
      "UV protection shine",
    ],
    price: "From $100",
  },
  {
    name: "Premium Interior",
    features: [
      "Deep vacuum",
      "Vinyl & dashboard clean",
      "Floor & carpet shampoo & clean",
      "Seat shampoo & clean",
      "UV protection shine",
      "Deodorize",
      "Steam cleaning",
      "Window clean",
    ],
    price: "From $150",
  },
]

const EXTERIOR_SERVICES = [
  {
    name: "Basic Exterior",
    features: [
      "Window cleaning",
      "Wheel cleaning & dressing",
      "Bug & tar removal",
      "Door jamb cleaning",
      "Foam wash & contact wash",
      "Full dry",
    ],
    price: "From $90",
  },
  {
    name: "Premium Exterior",
    features: [
      "Contact wash & clean",
      "Window clean & wax",
      "Bug & tar removal",
      "Wheel cleaning & dressing",
      "Door jamb cleaning",
      "Foam wash & clay bar",
      "Long-lasting wax coating",
      "Full dry",
    ],
    price: "From $150",
  },
]

const PACKAGE_SERVICES = [
  {
    name: "Premium Package",
    features: [
      "Premium Interior + Premium Exterior",
      "Clay bar & wax coating",
      "Deep vacuum",
      "Vinyl & dashboard clean",
      "Carpet & floor mat shampoo & clean",
      "Pet hair removal",
      "Steam cleaning & deodorize",
      "UV protection shine",
      "Leather conditioning",
    ],
    price: "From $275",
  },
  {
    name: "Basic Package",
    features: [
      "Basic Interior + Basic Exterior",
      "Floor mat shampoo/clean",
      "Vinyl & dash cleaning",
      "Steam cleaning",
      "UV protection shine",
      "Full dry",
    ],
    price: "From $190",
  },
]

const ADDON_SERVICES = [
  {
    name: "Plastic Trim Restoration",
    features: ["Revitalises faded plastic trim", "Restores deep, rich colour", "Prices vary: $40-$70"],
    price: "From $40",
  },
  {
    name: "Ceramic & Graphene Coatings",
    features: ["Advanced, long-lasting protection", "Hydrophobic & UV resistant finish", "Prices vary: $250-$500"],
    price: "From $250",
  },
  {
    name: "Paint Polishing/Correction",
    features: ["Restores depth & gloss", "Removes swirl marks & oxidation", "Requires in-person quote"],
    price: "Contact for Quote",
  },
  {
    name: "Spot Stain Removal",
    features: ["Targeted stain treatment", "Ideal for isolated problem areas", "Prices vary: $40-$60"],
    price: "From $40",
  },
]

function ServiceCard({
  name,
  features,
  price,
}: {
  name: string
  features: string[]
  price: string
}) {
  return (
    <div
      className="rounded-lg p-6 flex flex-col border"
      style={{ backgroundColor: "#1a1a1a", borderColor: "rgba(255, 140, 0, 0.4)" }}
    >
      <h3 className="text-xl font-bold mb-4" style={{ color: "#ff8c00" }}>
        {name}
      </h3>
      <ul className="space-y-2 mb-6 flex-1">
        {features.map((feature, i) => (
          <li key={i} className="flex items-start gap-2 text-sm text-white">
            <span className="mt-1.5 w-1.5 h-1.5 rounded-full shrink-0" style={{ backgroundColor: "#ff8c00" }} />
            {feature}
          </li>
        ))}
      </ul>
      <p className="text-white font-semibold mb-6">{price}</p>
      <Link
        href="/#quote"
        className="w-full py-3 rounded text-center font-semibold transition-colors border-2"
        style={{ color: "#ff8c00", borderColor: "#ff8c00" }}
      >
        Get Quote
      </Link>
    </div>
  )
}

export default function ServicesPage() {
  const [activeCategory, setActiveCategory] = useState<(typeof CATEGORIES)[number]>("Interior")

  const getServices = () => {
    switch (activeCategory) {
      case "Interior":
        return INTERIOR_SERVICES
      case "Exterior":
        return EXTERIOR_SERVICES
      case "Packages":
        return PACKAGE_SERVICES
      case "Add-Ons":
        return ADDON_SERVICES
      default:
        return INTERIOR_SERVICES
    }
  }

  return (
    <main className="min-h-screen" style={{ backgroundColor: "#0a0a0a" }}>
      <Navigation />
      <section className="pt-24 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <Link
            href="/"
            className="text-sm text-white/70 hover:text-[#ff8c00] transition-colors inline-flex items-center gap-1 mb-8"
          >
            ← Back to Home
          </Link>

          <div className="text-center mb-12">
            <h1 className="text-4xl sm:text-5xl font-bold mb-4" style={{ color: "#ff8c00" }}>
              Our Detailing Services
            </h1>
            <p className="text-white/90 text-lg max-w-3xl mx-auto">
              Select from a variety of services designed to revitalise, protect and enhance your vehicle.
              Whether you&apos;re looking for a quick interior tidy, a meticulous exterior treatment or a full
              showroom overhaul, DLUXX Detailing has you covered.
            </p>
          </div>

          {/* Category Tabs */}
          <div className="flex flex-wrap justify-center gap-2 mb-12">
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className="px-6 py-3 rounded-lg font-semibold transition-colors"
                style={{
                  backgroundColor: activeCategory === cat ? "#ff8c00" : "#1a1a1a",
                  color: activeCategory === cat ? "#0a0a0a" : "white",
                  borderWidth: activeCategory === cat ? 0 : 2,
                  borderColor: "rgba(255, 140, 0, 0.5)",
                }}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Service Cards */}
          <div className="grid sm:grid-cols-2 gap-6">
            {getServices().map((service, i) => (
              <ServiceCard
                key={i}
                name={service.name}
                features={service.features}
                price={service.price}
              />
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </main>
  )
}
