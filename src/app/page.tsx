import Navigation from '@/components/sections/Navigation'
import Hero from '@/components/sections/Hero'
import Problem from '@/components/sections/Problem'
import Solution from '@/components/sections/Solution'
import Bento from '@/components/sections/Bento'
import InteractiveDemo from '@/components/sections/InteractiveDemo'
import HowItWorks from '@/components/sections/HowItWorks'
import UseCases from '@/components/sections/UseCases'
import Technology from '@/components/sections/Technology'
import Testimonials from '@/components/sections/Testimonials'
import About from '@/components/sections/About'
import Pricing from '@/components/sections/Pricing'
import FAQ from '@/components/sections/FAQ'
import FutureVision from '@/components/sections/FutureVision'
import FinalCta from '@/components/sections/FinalCta'
import Waitlist from '@/components/sections/Waitlist'
import Contact from '@/components/sections/Contact'
import Footer from '@/components/sections/Footer'
import SmoothScroll from '@/components/ui/SmoothScroll'

export default function HomePage() {
  return (
    <SmoothScroll>
      <Navigation />
      <main>
        <Hero />
        <Problem />
        <Solution />
        <Bento />
        <InteractiveDemo />
        <HowItWorks />
        <UseCases />
        <Technology />
        <Testimonials />
        <About />
        <Pricing />
        <FAQ />
        <FutureVision />
        <FinalCta />
        <Waitlist />
        <Contact />
      </main>
      <Footer />
    </SmoothScroll>
  )
}
