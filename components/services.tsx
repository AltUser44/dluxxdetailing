"use client"

import Link from "next/link"
import { Card } from "@/components/ui/card"

const servicePackages = [
  {
    label: "DEEP INTERIOR CLEAN",
    name: "Basic Interior Detail",
    features: [
      "Deep vacuum & dust removal",
      "Vinyl & dashboard clean",
      "Floor mat shampoo & clean",
      "Steam cleaning & window clean",
      "UV protection shine",
    ],
    description: "A thorough interior clean including vacuuming, vinyl treatment, and a UV-protective finish.",
    price: "Starting at $100",
    time: "~2 hours",
  },
  {
    label: "BEST BUDGET",
    name: "Basic Exterior Detail",
    features: [
      "Foam/contact wash",
      "Bug & tar removal",
      "Wheel cleaning + tire dressing",
      "Window cleaning",
      "Door jamb wipe-down",
      "Full dry",
    ],
    description: "A solid exterior refresh to restore shine and cleanliness without breaking the bank.",
    price: "Starting at $90",
    time: "~1 hour",
  },
  {
    label: "BEST VALUE",
    name: "Basic Detailing Package",
    features: [
      "Basic Interior + Basic Exterior",
      "Floor mat shampoo/clean",
      "Vinyl & dash cleaning",
      "Light steam cleaning",
      "UV protectant",
      "Full exterior wash & dry",
    ],
    description: "Combines our Basic Interior and Basic Exterior services into one value-packed package.",
    price: "Starting at $190",
    time: "~3 hours",
  },
  {
    label: "MOST POPULAR",
    name: "Premium Detailing Package",
    features: [
      "Full interior deep clean",
      "Steam cleaning & stain treatment",
      "Exterior wash, decontamination & protection",
      "Wheel & tire treatment",
      "Glass & trim detailing",
    ],
    description: "Our most complete interior and exterior package for vehicles that deserve the works.",
    price: "Starting at $275",
    time: "~3-4 hours",
  },
]

export default function Services() {
  return (
    <section id="services" className="py-20 px-4 sm:px-6 lg:px-8" style={{ backgroundColor: "#0a0a0a" }}>
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold mb-4 text-white">Services & Packages</h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            Choose the package that&apos;s right for your vehicle. All prices listed are the current starting rates.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {servicePackages.map((pkg, index) => (
            <div
              key={index}
              className="rounded-lg p-6 flex flex-col border transition-all hover:border-[#ff8c00]/50"
              style={{ backgroundColor: "#1a1a1a", borderColor: "rgba(255, 140, 0, 0.3)" }}
            >
              <div
                className="text-xs font-bold tracking-wider mb-3 py-1 px-2 w-fit rounded"
                style={{ color: "#ff8c00", backgroundColor: "rgba(255, 140, 0, 0.1)" }}
              >
                {pkg.label}
              </div>
              <h3 className="text-xl font-bold mb-4" style={{ color: "#ff8c00" }}>
                {pkg.name}
              </h3>
              <ul className="space-y-2 mb-4 flex-1">
                {pkg.features.map((feature, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm text-white">
                    <span className="mt-1.5 w-1.5 h-1.5 rounded-full shrink-0" style={{ backgroundColor: "#ff8c00" }} />
                    {feature}
                  </li>
                ))}
              </ul>
              <p className="text-sm text-gray-400 mb-4">{pkg.description}</p>
              <p className="text-white font-semibold mb-1">{pkg.price}</p>
              <p className="text-gray-400 text-sm mb-6">{pkg.time}</p>
              <Link
                href="/#quote"
                className="w-full py-3 rounded text-center font-semibold transition-colors border-2"
                style={{ color: "#ff8c00", borderColor: "#ff8c00" }}
              >
                Get a Quote for This Service
              </Link>
            </div>
          ))}
        </div>

        <div className="flex justify-center mt-10">
          <Link
            href="/services"
            className="px-8 py-3 rounded font-semibold transition-colors border-2"
            style={{ color: "#ff8c00", borderColor: "#ff8c00" }}
          >
            View All Services
          </Link>
        </div>

        {/* Add-ons Section */}
        <div className="mt-20">
          <div className="text-center mb-12">
            <h3 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Add-On Services
            </h3>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-accent/20 via-accent/15 to-accent/20 border-2 border-accent/30 shadow-sm">
              <svg className="w-4 h-4" style={{color: '#ff8c00'}} fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
              </svg>
              <span className="text-sm font-bold" style={{color: '#ff8c00'}}>Price may vary</span>
            </div>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { name: "Pet Hair Removal", icon: "🐾", description: "Deep removal of pet hair from all surfaces" },
              { name: "Odor Treatment", icon: "🌿", description: "Professional odor elimination service" },
              { name: "Headlight Restoration", icon: "💡", description: "Restore clarity to foggy headlights" },
              { name: "Ceramic Coating", icon: "✨", description: "Long-lasting paint protection" },
            ].map((addon, i) => (
              <Card
                key={i}
                className="group relative overflow-hidden p-6 border-2 border-gray-200 hover:border-accent transition-all duration-300 hover:shadow-xl hover:-translate-y-2 bg-gradient-to-br from-white to-gray-50"
              >
                <div className="flex flex-col items-center text-center">
                  <div className="text-5xl mb-4 transform group-hover:scale-110 transition-transform duration-300">
                    {addon.icon}
                  </div>
                  <h4 className="text-lg font-bold text-foreground mb-2 group-hover:text-accent transition-colors">
                    {addon.name}
                  </h4>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {addon.description}
                  </p>
                </div>
                <div className="absolute top-0 right-0 w-20 h-20 bg-accent/10 rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
