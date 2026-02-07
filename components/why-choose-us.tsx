"use client"

import { Card } from "@/components/ui/card"

const reasons = [
  {
    icon: "⚡",
    title: "Mobile Convenience",
    description: "We come to your home or office. No need to drive anywhere.",
  },
  {
    icon: "⭐",
    title: "Quality Guarantee",
    description: "Top-tier products and expert detailing for perfect results.",
  },
  {
    icon: "🛡️",
    title: "Professional & Insured",
    description: "Peace of mind for every job with full coverage.",
  },
  {
    icon: "📍",
    title: "Local & Trusted",
    description: "Proudly serving San Antonio communities with authentic care.",
  },
  {
    icon: "👥",
    title: "Authentic Results",
    description: "25+ verified 5-star reviews and growing every day.",
  },
]

export default function WhyChooseUs() {
  return (
    <section id="why-choose" className="relative py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Background with gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary/80 to-primary/60">
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-20 right-10 w-72 h-72 bg-accent rounded-full mix-blend-multiply filter blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 left-10 w-72 h-72 bg-secondary rounded-full mix-blend-multiply filter blur-3xl animate-pulse delay-2000"></div>
        </div>
      </div>
      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold mb-4" style={{color: '#ff8c00'}}>Why Choose DLUXX</h2>
          <p className="text-lg text-primary-foreground/90 max-w-2xl mx-auto">
            We're passionate about cars, committed to excellence, and driven by your satisfaction
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6">
          {reasons.map((reason, index) => (
            <div
              key={index}
              className="p-6 backdrop-blur-md bg-white/10 border border-white/20 rounded-xl hover:bg-white/20 hover:border-white/30 transition-all duration-300 group shadow-lg"
            >
              <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-lg flex items-center justify-center mb-4 group-hover:bg-white/30 transition-colors text-2xl">
                {reason.icon}
              </div>
              <h3 className="font-bold text-primary-foreground mb-2">{reason.title}</h3>
              <p className="text-sm text-primary-foreground/80">{reason.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
