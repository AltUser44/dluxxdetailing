"use client"

import type React from "react"
import { useState } from "react"
import Link from "next/link"
import { ChevronDownIcon } from "lucide-react"
import Navigation from "@/components/navigation"
import Footer from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"

const COMPANY_EMAIL = "dluxxdetailing.sa@gmail.com"

const MAIN_SERVICES = [
  "Express Wash & Quick Detail",
  "Full Detail (Interior + Exterior)",
  "Premium / Showroom Detail",
]

const ADDON_OPTIONS = [
  "Pet Hair Removal",
  "Odor Treatment",
  "Headlight Restoration",
  "Ceramic Coating",
  "Plastic Trim Restoration",
  "Paint Polishing/Correction",
  "Spot Stain Removal",
]

export default function QuotePage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    services: [] as string[],
    addons: [] as string[],
    notes: "",
  })
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const toggleService = (service: string) => {
    setFormData((prev) => ({
      ...prev,
      services: prev.services.includes(service)
        ? prev.services.filter((s) => s !== service)
        : [...prev.services, service],
    }))
  }

  const toggleAddon = (addon: string) => {
    setFormData((prev) => ({
      ...prev,
      addons: prev.addons.includes(addon)
        ? prev.addons.filter((a) => a !== addon)
        : [...prev.addons, addon],
    }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    const servicesList = formData.services.length ? formData.services.join(", ") : "None selected"
    const addonsList = formData.addons.length ? formData.addons.join(", ") : "None"

    const subject = encodeURIComponent(`Quote Request - ${formData.name}`)
    const body = encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\nPhone: ${formData.phone}\nAddress: ${formData.address}\n\n` +
        `Services Requested: ${servicesList}\n\n` +
        `Add-On Services: ${addonsList}\n\n` +
        `Additional Notes: ${formData.notes || "None"}`
    )

    window.location.href = `mailto:${COMPANY_EMAIL}?subject=${subject}&body=${body}`
    setSubmitted(true)
  }

  return (
    <main className="min-h-screen bg-background">
      <Navigation />
      <section className="pt-24 pb-20 px-4 sm:px-6 lg:px-8" style={{ backgroundColor: "#1a1a2e" }}>
        <div className="max-w-2xl mx-auto">
          <div className="mb-8">
            <Link
              href="/"
              className="text-sm text-white/70 hover:text-[#ff8c00] transition-colors inline-flex items-center gap-1 mb-6"
            >
              ← Back to Home
            </Link>
            <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4">Request a Free Quote</h1>
            <p className="text-white/90 text-base leading-relaxed">
              Fill out the form below and we&apos;ll get back to you within 24 hours with pricing and
              availability. Fields marked with * are required. After you submit, I&apos;ll text you
              for a couple quick photos so I can confirm the condition and give you an accurate quote.
            </p>
          </div>

          {submitted ? (
            <div className="border-2 border-[#ff8c00] rounded-lg p-8 text-center" style={{ backgroundColor: "#1a1a2e" }}>
              <p className="text-white text-lg mb-2">Your email client is opening with a draft.</p>
              <p className="text-white/80 text-sm">Please send the email to complete your quote request.</p>
              <Button
                onClick={() => setSubmitted(false)}
                className="mt-6 bg-[#ff8c00] hover:bg-[#e67d00] text-white font-semibold"
              >
                Submit Another Request
              </Button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-8">
              {/* Personal Info */}
              <div className="grid sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-[#ff8c00] font-medium mb-2">Name *</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded border-2 border-[#ff8c00]/50 bg-[#1a1a2e] text-white placeholder-gray-500 focus:outline-none focus:border-[#ff8c00]"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label className="block text-[#ff8c00] font-medium mb-2">Email *</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded border-2 border-[#ff8c00]/50 bg-[#1a1a2e] text-white placeholder-gray-500 focus:outline-none focus:border-[#ff8c00]"
                    placeholder="your@email.com"
                  />
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-[#ff8c00] font-medium mb-2">Phone *</label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded border-2 border-[#ff8c00]/50 bg-[#1a1a2e] text-white placeholder-gray-500 focus:outline-none focus:border-[#ff8c00]"
                    placeholder="(210) 555-0123"
                  />
                </div>
                <div>
                  <label className="block text-[#ff8c00] font-medium mb-2">Address *</label>
                  <input
                    type="text"
                    name="address"
                    value={formData.address}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded border-2 border-[#ff8c00]/50 bg-[#1a1a2e] text-white placeholder-gray-500 focus:outline-none focus:border-[#ff8c00]"
                    placeholder="123 Main St, San Antonio, TX"
                  />
                </div>
              </div>

              {/* Services */}
              <div>
                <label className="block text-[#ff8c00] font-medium mb-4">Select Services *</label>
                <div className="grid sm:grid-cols-2 gap-3">
                  {MAIN_SERVICES.map((service) => (
                    <label
                      key={service}
                      className="flex items-center gap-3 px-4 py-3 rounded border-2 border-[#ff8c00]/50 bg-[#1a1a2e] cursor-pointer hover:border-[#ff8c00]/80 transition-colors"
                    >
                      <Checkbox
                        checked={formData.services.includes(service)}
                        onCheckedChange={() => toggleService(service)}
                        className="border-[#ff8c00] data-[state=checked]:bg-[#ff8c00] data-[state=checked]:border-[#ff8c00]"
                      />
                      <span className="text-white text-sm">{service}</span>
                    </label>
                  ))}
                </div>
                <p className="text-white/70 text-sm mt-2">
                  Not sure which to pick? Choose the closest option — I&apos;ll confirm everything with you by text.
                </p>
              </div>

              {/* Add-ons */}
              <div>
                <label className="block text-[#ff8c00] font-medium mb-4">Add-On Services (Optional)</label>
                <Popover>
                  <PopoverTrigger asChild>
                    <button
                      type="button"
                      className="w-full flex items-center justify-between px-4 py-3 rounded border-2 border-[#ff8c00]/50 bg-[#1a1a2e] text-left text-white placeholder-gray-500 focus:outline-none focus:border-[#ff8c00]"
                    >
                      <span className={formData.addons.length === 0 ? "text-gray-500" : ""}>
                        {formData.addons.length > 0
                          ? formData.addons.join(", ")
                          : "Select optional add-ons"}
                      </span>
                      <ChevronDownIcon className="w-4 h-4 shrink-0 opacity-70" />
                    </button>
                  </PopoverTrigger>
                  <PopoverContent
                    className="w-[var(--radix-popover-trigger-width)] p-0 bg-[#1a1a2e] border-[#ff8c00]/50"
                    align="start"
                  >
                    <div className="p-3 space-y-2 max-h-64 overflow-y-auto">
                      {ADDON_OPTIONS.map((addon) => (
                        <label
                          key={addon}
                          className="flex items-center gap-3 px-3 py-2 rounded cursor-pointer hover:bg-white/5 transition-colors"
                        >
                          <Checkbox
                            checked={formData.addons.includes(addon)}
                            onCheckedChange={() => toggleAddon(addon)}
                            className="border-[#ff8c00] data-[state=checked]:bg-[#ff8c00] data-[state=checked]:border-[#ff8c00]"
                          />
                          <span className="text-white text-sm">{addon}</span>
                        </label>
                      ))}
                    </div>
                  </PopoverContent>
                </Popover>
              </div>

              {/* Notes */}
              <div>
                <label className="block text-[#ff8c00] font-medium mb-2">Additional Notes</label>
                <textarea
                  name="notes"
                  value={formData.notes}
                  onChange={handleChange}
                  rows={5}
                  className="w-full px-4 py-3 rounded border-2 border-[#ff8c00]/50 bg-[#1a1a2e] text-white placeholder-gray-500 focus:outline-none focus:border-[#ff8c00] resize-none"
                  placeholder="Tell me about the vehicle, how dirty it is, pet hair, stains, etc."
                />
              </div>

              {/* Validation: require at least one service */}
              <Button
                type="submit"
                disabled={formData.services.length === 0}
                className="w-full bg-[#ff8c00] hover:bg-[#e67d00] text-white font-semibold py-4 text-lg rounded-lg transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              >
                Submit Request
              </Button>
              {formData.services.length === 0 && (
                <p className="text-amber-400/90 text-sm text-center">
                  Please select at least one service to continue.
                </p>
              )}
            </form>
          )}
        </div>
      </section>
      <Footer />
    </main>
  )
}
