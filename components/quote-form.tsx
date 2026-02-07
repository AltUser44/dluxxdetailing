"use client"

import type React from "react"
import { useState } from "react"
import { ChevronDownIcon } from "lucide-react"
import { Checkbox } from "@/components/ui/checkbox"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"

const COMPANY_EMAIL = "dluxxdetailing.sa@gmail.com"

const MAIN_SERVICES = [
  "Basic Interior Detail",
  "Basic Exterior Detail",
  "Basic Detailing Package",
  "Premium Interior Detail",
  "Premium Exterior Detail",
  "Premium Detailing Package",
]

const ADDON_OPTIONS = [
  "Plastic Trim Restoration",
  "Ceramic & Graphene Coatings",
  "Paint Polishing/Correction",
  "Spot Stain Removal",
]

export default function QuoteForm() {
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

  const inputStyle = "w-full px-4 py-3 rounded border-2 bg-gray-900 text-white placeholder-gray-500 focus:outline-none focus:border-[#ff8c00]"
  const labelStyle = "block font-medium mb-2"
  const borderStyle = { borderColor: "rgba(255, 140, 0, 0.5)" }

  return (
    <section id="quote" className="py-20 px-4 sm:px-6 lg:px-8" style={{ backgroundColor: "#0a0a0a" }}>
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-10">
          <h2 className="text-4xl sm:text-5xl font-bold mb-4" style={{ color: "#ff8c00" }}>
            Request a Free Quote
          </h2>
          <p className="text-white text-base leading-relaxed">
            Send a few details — after you submit, I&apos;ll text you for a couple quick photos so I can
            finalize your quote and give you date options.
          </p>
        </div>

        {submitted ? (
          <div
            className="border-2 rounded-lg p-8 text-center"
            style={{ backgroundColor: "#0a0a0a", borderColor: "#ff8c00" }}
          >
            <p className="text-white text-lg mb-2">Your email client is opening with a draft.</p>
            <p className="text-white/80 text-sm">Please send the email to complete your quote request.</p>
            <button
              type="button"
              onClick={() => setSubmitted(false)}
              className="mt-6 px-6 py-3 rounded-lg font-semibold text-white transition-colors"
              style={{ backgroundColor: "#ff8c00" }}
            >
              Submit Another Request
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit}>
            <div className="grid lg:grid-cols-2 gap-8 xl:gap-12">
              {/* Left column */}
              <div className="space-y-6">
                {/* Personal Info - horizontal row */}
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className={labelStyle} style={{ color: "#ff8c00" }}>Name *</label>
                    <input type="text" name="name" value={formData.name} onChange={handleChange} required className={inputStyle} style={borderStyle} placeholder="Your name" />
                  </div>
                  <div>
                    <label className={labelStyle} style={{ color: "#ff8c00" }}>Email *</label>
                    <input type="email" name="email" value={formData.email} onChange={handleChange} required className={inputStyle} style={borderStyle} placeholder="your@email.com" />
                  </div>
                  <div>
                    <label className={labelStyle} style={{ color: "#ff8c00" }}>Phone *</label>
                    <input type="tel" name="phone" value={formData.phone} onChange={handleChange} required className={inputStyle} style={borderStyle} placeholder="(210) 555-0123" />
                  </div>
                  <div>
                    <label className={labelStyle} style={{ color: "#ff8c00" }}>Address *</label>
                    <input type="text" name="address" value={formData.address} onChange={handleChange} required className={inputStyle} style={borderStyle} placeholder="123 Main St, San Antonio, TX" />
                  </div>
                </div>

                {/* Services - 2 columns */}
                <div>
                  <label className="block font-medium mb-3" style={{ color: "#ff8c00" }}>Select Services *</label>
                  <div className="grid grid-cols-2 gap-2">
                    {MAIN_SERVICES.map((service) => (
                      <label
                        key={service}
                        className="flex items-center gap-2 px-3 py-2 rounded border-2 bg-gray-900 cursor-pointer hover:opacity-90 transition-opacity"
                        style={borderStyle}
                      >
                        <Checkbox
                          checked={formData.services.includes(service)}
                          onCheckedChange={() => toggleService(service)}
                          className="border-[#ff8c00] data-[state=checked]:bg-[#ff8c00] data-[state=checked]:border-[#ff8c00] shrink-0"
                        />
                        <span className="text-white text-sm truncate">{service}</span>
                      </label>
                    ))}
                  </div>
                  <p className="text-white/70 text-xs mt-2">Not sure which to pick? Choose the closest — I&apos;ll confirm by text.</p>
                </div>
              </div>

              {/* Right column */}
              <div className="space-y-6 flex flex-col">
                {/* Add-ons */}
                <div>
                  <label className="block font-medium mb-3" style={{ color: "#ff8c00" }}>Add-On Services (Optional)</label>
                  <Popover>
                    <PopoverTrigger asChild>
                      <button
                        type="button"
                        className="w-full flex items-center justify-between px-4 py-3 rounded border-2 bg-gray-900 text-left text-white placeholder-gray-500 focus:outline-none focus:border-[#ff8c00]"
                        style={borderStyle}
                      >
                        <span className={formData.addons.length === 0 ? "text-gray-500" : ""}>
                          {formData.addons.length > 0 ? formData.addons.join(", ") : "Select optional add-ons"}
                        </span>
                        <ChevronDownIcon className="w-4 h-4 shrink-0 opacity-70" />
                      </button>
                    </PopoverTrigger>
                    <PopoverContent className="w-[var(--radix-popover-trigger-width)] p-0 bg-gray-900 border-[#ff8c00]/50" align="start">
                      <div className="p-3 space-y-2 max-h-64 overflow-y-auto">
                        {ADDON_OPTIONS.map((addon) => (
                          <label key={addon} className="flex items-center gap-3 px-3 py-2 rounded cursor-pointer hover:bg-gray-800 transition-colors">
                            <Checkbox checked={formData.addons.includes(addon)} onCheckedChange={() => toggleAddon(addon)} className="border-[#ff8c00] data-[state=checked]:bg-[#ff8c00] data-[state=checked]:border-[#ff8c00]" />
                            <span className="text-white text-sm">{addon}</span>
                          </label>
                        ))}
                      </div>
                    </PopoverContent>
                  </Popover>
                </div>

                {/* Notes */}
                <div className="flex-1 flex flex-col min-h-0">
                  <label className={labelStyle} style={{ color: "#ff8c00" }}>Additional Notes</label>
                  <textarea name="notes" value={formData.notes} onChange={handleChange} rows={6} className={`${inputStyle} flex-1 min-h-[120px]`} style={borderStyle} placeholder="Tell me about the vehicle, how dirty it is, pet hair, stains, etc." />
                </div>

                <button
                  type="submit"
                  disabled={formData.services.length === 0}
                  className="w-full py-4 text-lg font-semibold text-white rounded-lg transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                  style={{ backgroundColor: "#ff8c00" }}
                >
                  Submit Request
                </button>
                {formData.services.length === 0 && (
                  <p className="text-amber-400/90 text-sm text-center">Please select at least one service to continue.</p>
                )}
              </div>
            </div>
          </form>
        )}
      </div>
    </section>
  )
}
