"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center pt-16 overflow-hidden">
      {/* Background with gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary/80 to-primary/60">
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-20 right-10 w-72 h-72 bg-accent rounded-full mix-blend-multiply filter blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 left-10 w-72 h-72 bg-secondary rounded-full mix-blend-multiply filter blur-3xl animate-pulse delay-2000"></div>
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="animate-fade-in-up">
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold mb-6 leading-tight tracking-tight relative">
            <span 
              className="relative inline-block"
              style={{
                background: 'linear-gradient(135deg, #ff8c00 0%, #ffaa00 50%, #ff8c00 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
                backgroundSize: '200% 200%',
                animation: 'gradient-x 3s ease infinite',
                filter: 'drop-shadow(0 0 20px rgba(255, 140, 0, 0.6)) drop-shadow(0 0 40px rgba(255, 140, 0, 0.4))',
                letterSpacing: '-0.03em',
                textShadow: '0 0 30px rgba(255, 140, 0, 0.8), 0 0 60px rgba(255, 140, 0, 0.5)'
              }}
            >
              We Bring the Shine to You
            </span>
          </h1>
          <p className="text-lg sm:text-xl text-primary-foreground/90 mb-8 max-w-2xl mx-auto leading-relaxed">
            Premium mobile car detailing across San Antonio. Professional, insured, and dedicated to making your vehicle look
            showroom-ready.
          </p>

          {/* Quick Highlights */}
          <div className="flex flex-wrap justify-center gap-4 mb-12 text-sm sm:text-base text-primary-foreground/80">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-accent rounded-full"></div>
              <span>Fully Mobile</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-accent rounded-full"></div>
              <span>Licensed & Insured</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-accent rounded-full"></div>
              <span>Serving San Antonio & Surrounding Areas</span>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/#quote">
              <Button
                size="lg"
                className="bg-accent hover:bg-[#ff8c00] text-accent-foreground font-semibold text-base px-8 transition-colors duration-300"
              >
                Request a Free Quote
                <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </Button>
            </Link>
            <a href="tel:+18304755744">
              <Button
                size="lg"
                variant="outline"
                className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground/10 font-semibold text-base px-8 bg-transparent"
              >
                Call/Text
              </Button>
            </a>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10">
        <div className="animate-bounce">
          <svg className="w-6 h-6 text-primary-foreground" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </div>
    </section>
  )
}
