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
              About the Founder
            </h1>
            <p className="text-lg text-white max-w-2xl mx-auto">
              Meet the visionary behind{" "}
              <img src="/dluxx-logo.png" alt="DLUXX Detailing" className="inline h-20 w-auto mx-3" />
            </p>
          </div>

          <div
            className="rounded-xl p-8 sm:p-12 border-2"
            style={{ backgroundColor: "#1a1a2e", borderColor: "#ff8c00" }}
          >
            <div className="max-w-4xl mx-auto">
              <div className="text-white space-y-6 leading-relaxed">
                <p>
                  I&apos;m the founder of DLUXX Detailing — a business I built from the ground up at just 20
                  years old. I started DLUXX with one clear mission: to refuse to be average. I&apos;ve always
                  believed that success comes from mindset, consistency, and the willingness to do what most
                  people won&apos;t.
                </p>

                <p>
                  When I created DLUXX, I wanted more than just a car wash — I wanted to build something that
                  represented discipline, ownership, and pride in quality. Every job is a reflection of that
                  mindset. From the moment we arrive at a client&apos;s driveway to the final shine, our focus is
                  simple: exceed expectations and make people say, &quot;Wow.&quot;
                </p>

                <p>
                  This company is my vision of what hard work and purpose look like. DLUXX isn&apos;t about
                  shortcuts or easy wins — it&apos;s about doing things the right way, treating every vehicle with
                  care, and treating every client like family.
                </p>

                <p>
                  I built this business with the same drive I live by: never settle, never stop improving, and
                  always deliver excellence. DLUXX Detailing is just the beginning — and I&apos;m proud to bring
                  this passion and service to the people of San Antonio.
                </p>
              </div>

              <div className="mt-8 pt-6 border-t border-gray-600">
                <p className="text-white text-right italic">
                  — <strong style={{ color: "#ff8c00" }}>Kester Rayne</strong>
                  <br />
                  <span className="text-gray-300">Founder & Owner, DLUXX Detailing</span>
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
