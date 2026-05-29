import Navigation from '@/components/sections/Navigation'
import Footer from '@/components/sections/Footer'
import SmoothScroll from '@/components/ui/SmoothScroll'

export default function SubPageLayout({ children }: { children: React.ReactNode }) {
  return (
    <SmoothScroll>
      <Navigation />
      <main className="section-light pt-16">{children}</main>
      <Footer />
    </SmoothScroll>
  )
}
