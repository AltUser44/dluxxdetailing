"use client"

import type React from "react"
import { useState } from "react"

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const [submitted, setSubmitted] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    const subject = encodeURIComponent(`Contact Form - ${formData.name}`)
    const body = encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
    )
    const mailtoUrl = `mailto:dluxxdetailing.sa@gmail.com?subject=${subject}&body=${body}`

    // Show "Sending...", then success state on submit click, then open mail client
    setTimeout(() => {
      setFormData({ name: "", email: "", message: "" })
      setIsSubmitting(false)
      setSubmitted(true)
      setTimeout(() => { window.location.href = mailtoUrl }, 400)
    }, 400)
  }

  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8" style={{backgroundColor: '#1a1a2e'}}>
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left Section - Contact Information */}
          <div className="text-white">
            <h2 className="text-4xl sm:text-5xl font-bold mb-4" style={{color: '#ff8c00'}}>Get in Touch</h2>
            <p className="text-lg mb-12">Reach out to us for a free quote or to schedule your detailing.</p>
            
            {/* Phone Contact */}
            <div className="mb-8">
              <div className="flex items-center justify-center w-16 h-16 bg-yellow-400 rounded-full mb-4">
                <svg className="w-8 h-8 text-primary" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
                </svg>
              </div>
              <p className="text-xl font-semibold mb-1">(830) 475-5744</p>
              <p className="text-sm">Give Us A Call!</p>
            </div>

            {/* Email Contact */}
            <div>
              <div className="flex items-center justify-center w-16 h-16 bg-yellow-400 rounded-full mb-4">
                <svg className="w-8 h-8 text-primary" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
                </svg>
              </div>
              <p className="text-xl font-semibold mb-1">dluxxdetailing.sa@gmail.com</p>
              <p className="text-sm">Send Us An Email!</p>
            </div>
          </div>

          {/* Right Section - Contact Form */}
          <div className="border-2 border-yellow-400 p-8" style={{backgroundColor: '#1a1a2e'}}>
            {submitted ? (
              <div className="text-center py-8 animate-in fade-in duration-300">
                <div className="flex justify-center mb-4">
                  <div className="w-16 h-16 rounded-full bg-green-500/20 border-2 border-green-500 flex items-center justify-center">
                    <svg className="w-8 h-8 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                </div>
                <h3 className="text-xl font-bold text-white mb-2">Message Sent!</h3>
                <p className="text-white/90 text-base mb-2">Thank you for reaching out. Your email client has opened with your message.</p>
                <p className="text-white/70 text-sm mb-6">Please click Send in your email to complete the delivery. We&apos;ll get back to you soon!</p>
                <button
                  type="button"
                  onClick={() => setSubmitted(false)}
                  className="px-6 py-3 rounded font-semibold text-white border-2 border-yellow-400 hover:bg-yellow-400/10 transition-colors"
                >
                  Send Another Message
                </button>
              </div>
            ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Name Field */}
              <div>
                <label className="block text-yellow-400 font-medium mb-2">Name *</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Enter your name"
                  className="w-full px-4 py-3 border border-gray-600 rounded text-white placeholder-gray-400 focus:outline-none focus:border-yellow-400"
                  style={{backgroundColor: '#1a1a2e'}}
                  required
                />
              </div>

              {/* Email Field */}
              <div>
                <label className="block text-yellow-400 font-medium mb-2">Email *</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Enter your email"
                  className="w-full px-4 py-3 border border-gray-600 rounded text-white placeholder-gray-400 focus:outline-none focus:border-yellow-400"
                  style={{backgroundColor: '#1a1a2e'}}
                  required
                />
              </div>

              {/* Message Field */}
              <div>
                <label className="block text-yellow-400 font-medium mb-2">Message *</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Type your message"
                  rows={6}
                  className="w-full px-4 py-3 border border-gray-600 rounded text-white placeholder-gray-400 focus:outline-none focus:border-yellow-400 resize-none"
                  style={{backgroundColor: '#1a1a2e'}}
                  required
                ></textarea>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="contact-submit-btn w-full border-2 border-white text-white font-semibold py-3 px-6 rounded disabled:opacity-70 disabled:cursor-not-allowed transition-opacity flex items-center justify-center gap-2"
              >
                {isSubmitting ? (
                  <>
                    <svg className="animate-spin h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                    </svg>
                    Sending...
                  </>
                ) : (
                  "Submit"
                )}
              </button>

              {/* Disclaimer */}
              <p className="text-sm text-white text-center mt-4">
                We will reach out to you as soon as possible! Feel free to call us.
              </p>
            </form>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
