import Header from '@/components/Header'
import Hero from '@/components/Hero'
import DefenseGlobe from '@/components/DefenseGlobe'
import DefenseProducts from '@/components/DefenseProducts'
import Services from '@/components/Services'
import Process from '@/components/Process'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <>
      <a href="#main" className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-blue-600 text-white px-4 py-2 rounded-md z-50">
        Skip to main content
      </a>
      <Header />
      <main id="main">
        <section id="hero" aria-label="Hero section">
          <Hero />
        </section>
        <section id="market-map" aria-label="Defence market opportunities">
          <DefenseGlobe />
        </section>
        <section id="products" aria-label="Defence products categories">
          <DefenseProducts />
        </section>
        <section id="services" aria-label="DGDP services">
          <Services />
        </section>
        <section id="process" aria-label="Process steps">
          <Process />
        </section>
        <section id="contact" aria-label="Contact information">
          <Contact />
        </section>
      </main>
      <Footer />
    </>
  )
}