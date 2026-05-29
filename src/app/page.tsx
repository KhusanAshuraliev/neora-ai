import Navigation from '@/components/sections/Navigation'
import Hero from '@/components/sections/Hero'
import Bento from '@/components/sections/Bento'
import Testimonials from '@/components/sections/Testimonials'
import FinalCta from '@/components/sections/FinalCta'
import Waitlist from '@/components/sections/Waitlist'
import Footer from '@/components/sections/Footer'
import SmoothScroll from '@/components/ui/SmoothScroll'

export default function HomePage() {
  return (
    <SmoothScroll>
      <Navigation />
      <main>
        <Hero />
        <Bento />
        <Testimonials />
        <FinalCta />
        <Waitlist />
      </main>
      <Footer />
    </SmoothScroll>
  )
}
