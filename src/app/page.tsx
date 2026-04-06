import Navigation from '@/components/sections/Navigation'
import Hero from '@/components/sections/Hero'
import Problem from '@/components/sections/Problem'
import Solution from '@/components/sections/Solution'
import HowItWorks from '@/components/sections/HowItWorks'
import Technology from '@/components/sections/Technology'
import FutureVision from '@/components/sections/FutureVision'
import Waitlist from '@/components/sections/Waitlist'
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
        <HowItWorks />
        <Technology />
        <FutureVision />
        <Waitlist />
      </main>
      <Footer />
    </SmoothScroll>
  )
}
