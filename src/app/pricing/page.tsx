import type { Metadata } from 'next'
import SubPageLayout from '@/components/ui/SubPageLayout'
import Pricing from '@/components/sections/Pricing'

export const metadata: Metadata = {
  title: 'Pricing — Neora AI',
  description: 'For every legacy. Free, Personal, and Family Legacy tiers.',
}

export default function PricingPage() {
  return (
    <SubPageLayout>
      <Pricing />
    </SubPageLayout>
  )
}
