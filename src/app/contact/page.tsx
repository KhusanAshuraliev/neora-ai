import type { Metadata } from 'next'
import SubPageLayout from '@/components/ui/SubPageLayout'
import Contact from '@/components/sections/Contact'

export const metadata: Metadata = {
  title: 'Contact — Neora AI',
  description: 'Have a question? Send us a message — we typically respond within 24 hours.',
}

export default function ContactPage() {
  return (
    <SubPageLayout>
      <Contact />
    </SubPageLayout>
  )
}
