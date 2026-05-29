import type { Metadata } from 'next'
import SubPageLayout from '@/components/ui/SubPageLayout'
import HowItWorks from '@/components/sections/HowItWorks'
import UseCases from '@/components/sections/UseCases'

export const metadata: Metadata = {
  title: 'How It Works — Neora AI',
  description:
    'Four steps to forever. How Neora builds a living digital twin of your mind — and who it is for.',
}

export default function HowItWorksPage() {
  return (
    <SubPageLayout>
      <HowItWorks />
      <UseCases />
    </SubPageLayout>
  )
}
