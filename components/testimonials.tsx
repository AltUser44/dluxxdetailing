"use client"

import { Card } from "@/components/ui/card"

// Update this URL with your Google Business page link
const GOOGLE_BUSINESS_URL = "https://www.google.com/search?q=DLUXX+Detailing+San+Antonio"

const testimonials = [
  {
    name: "Sarah M.",
    location: "San Antonio",
    rating: 5,
    text: "My SUV looks brand new! The team was professional, quick, and incredibly detailed. Highly recommend!",
  },
  {
    name: "James T.",
    location: "San Antonio",
    rating: 5,
    text: "Best detailing service I've used. They came to my office and my car looked showroom-ready. Worth every penny.",
  },
  {
    name: "Maria L.",
    location: "San Antonio",
    rating: 5,
    text: "The ceramic coating service is amazing. My car stays cleaner longer and looks absolutely stunning.",
  },
  {
    name: "David K.",
    location: "San Antonio",
    rating: 5,
    text: "Professional, punctual, and thorough. They treated my car like it was their own. Booking again soon!",
  },
]

export default function Testimonials() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8" style={{backgroundColor: '#1a1a2e'}}>
      <div className="max-w-7xl mx-auto">
        {/* Google Reviews - above What Our Clients Say */}
        <div className="flex flex-col items-center justify-center mb-16 p-6 rounded-xl" style={{ backgroundColor: 'rgba(255, 255, 255, 0.05)' }}>
          <div className="flex items-center justify-center gap-2 mb-2">
            <span className="text-2xl font-bold tracking-tight">
              <span style={{ color: '#4285F4' }}>G</span>
              <span style={{ color: '#EA4335' }}>o</span>
              <span style={{ color: '#FBBC05' }}>o</span>
              <span style={{ color: '#4285F4' }}>g</span>
              <span style={{ color: '#34A853' }}>l</span>
              <span style={{ color: '#EA4335' }}>e</span>
            </span>
            <span className="text-2xl font-bold text-white">Reviews</span>
          </div>
          <div className="flex items-center justify-center gap-2 mb-4">
            <span className="text-2xl font-bold text-white">5.0</span>
            <div className="flex gap-0.5">
              {[...Array(5)].map((_, i) => (
                <span key={i} className="text-xl" style={{ color: '#ffd700' }}>★</span>
              ))}
            </div>
            <span className="text-lg text-gray-400">(43)</span>
          </div>
          <a
            href={GOOGLE_BUSINESS_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 rounded-lg font-semibold text-white transition-opacity hover:opacity-90"
            style={{ backgroundColor: '#4285F4' }}
          >
            Review us on Google
          </a>
        </div>

        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold mb-4" style={{color: '#ff8c00'}}>What Our Clients Say</h2>
          <p className="text-lg text-white">Join hundreds of satisfied customers across San Antonio</p>
        </div>

        <div className="review-grid grid md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="review-card p-8 border-border hover:border-accent/50 transition-all duration-300">
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <span key={i} className="text-xl" style={{ color: '#ffd700' }}>
                    ★
                  </span>
                ))}
              </div>
              <p className="text-foreground mb-6 leading-relaxed italic">"{testimonial.text}"</p>
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <img src="/google.png" alt="Google Review" className="w-6 h-6 object-contain" />
                  <p className="font-semibold text-foreground">{testimonial.name}</p>
                </div>
                <p className="text-sm text-muted-foreground">{testimonial.location}</p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
