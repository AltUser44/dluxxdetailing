import Navigation from "@/components/navigation"
import Hero from "@/components/hero"
import Services from "@/components/services"
import WhyChooseUs from "@/components/why-choose-us"
import Testimonials from "@/components/testimonials"
import Gallery from "@/components/gallery"
import QuoteForm from "@/components/quote-form"
import ServiceAreasMap from "@/components/service-areas-map"
import Contact from "@/components/contact"
import Footer from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Navigation />
      <Hero />
      <Services />
      <WhyChooseUs />
      <Testimonials />
      <Gallery />
      <QuoteForm />
      <ServiceAreasMap />
      <Contact />
      <Footer />
    </main>
  )
}
