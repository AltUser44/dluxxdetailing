import Link from "next/link"
import Navigation from "@/components/navigation"
import Footer from "@/components/footer"

export default function AboutPage() {
  return (
    <main className="min-h-screen" style={{ backgroundColor: "#0a0a0a" }}>
      <Navigation />
      <section className="pt-24 pb-20 px-4 sm:px-6 lg:px-8" style={{ backgroundColor: "#1a1a2e" }}>
        <div className="max-w-7xl mx-auto">
          <Link
            href="/"
            className="text-sm text-white/70 hover:text-[#ff8c00] transition-colors inline-flex items-center gap-1 mb-8"
          >
            ← Back to Home
          </Link>
          <div className="text-center mb-16">
            <h1 className="text-4xl sm:text-5xl font-bold mb-4" style={{ color: "#ff8c00" }}>
              About DLUXX Detailing
            </h1>
            <p className="text-lg text-white max-w-2xl mx-auto">
              Excellence in automotive care, delivered with precision and integrity
            </p>
          </div>

          <div
            className="rounded-xl p-8 sm:p-12 border-2"
            style={{ backgroundColor: "#1a1a2e", borderColor: "#ff8c00" }}
          >
            <div className="max-w-4xl mx-auto">
              <div className="text-white space-y-6 leading-relaxed">
                <p>
                  DLUXX Detailing represents the highest standard in mobile automotive care. Founded on principles
                  of excellence, reliability, and unwavering commitment to customer satisfaction, we have
                  established ourselves as a trusted partner for vehicle owners throughout San Antonio and
                  surrounding communities.
                </p>

                <p>
                  Our organization is built on a foundation of industry-leading practices, cutting-edge
                  techniques, and premium products. Every service we deliver reflects our core values: precision,
                  integrity, and an uncompromising dedication to quality. From executive vehicles to family
                  automobiles, we treat each client engagement with the same level of professionalism and
                  attention to detail.
                </p>

                <p>
                  At DLUXX Detailing, we believe that exceptional service begins with exceptional standards.
                  Our team operates with a customer-centric approach, ensuring that every interaction exceeds
                  expectations. We are fully licensed and insured, and our commitment to continuous improvement
                  drives us to deliver results that speak for themselves.
                </p>

                <p>
                  As we continue to expand our presence across the greater San Antonio region, we remain
                  focused on our mission: to provide world-class automotive detailing services that set the
                  industry benchmark for excellence, reliability, and customer satisfaction.
                </p>
              </div>

              <div className="mt-8 pt-6 border-t border-gray-600">
                <p className="text-white text-right italic">
                  — <strong style={{ color: "#ff8c00" }}>Kester Rayne</strong>
                  <br />
                  <span className="text-gray-300">Founder & CEO, DLUXX Detailing</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  )
}
