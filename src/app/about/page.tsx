import type { Metadata } from 'next'
import SubPageLayout from '@/components/ui/SubPageLayout'
import About from '@/components/sections/About'

export const metadata: Metadata = {
  title: 'About — Neora AI',
  description:
    'Why we built Neora AI. Meet the founders behind the digital legacy platform.',
}

export default function AboutPage() {
  return (
    <SubPageLayout>
      <About />
    </SubPageLayout>
  )
}
