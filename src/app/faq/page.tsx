import type { Metadata } from 'next'
import SubPageLayout from '@/components/ui/SubPageLayout'
import FAQ from '@/components/sections/FAQ'

export const metadata: Metadata = {
  title: 'FAQ — Neora AI',
  description: 'Honest answers to the questions most people ask before joining.',
}

export default function FAQPage() {
  return (
    <SubPageLayout>
      <FAQ />
    </SubPageLayout>
  )
}
