import type { Metadata } from 'next'
import SubPageLayout from '@/components/ui/SubPageLayout'
import Problem from '@/components/sections/Problem'
import Solution from '@/components/sections/Solution'

export const metadata: Metadata = {
  title: 'Story — Neora AI',
  description:
    'Why we built Neora AI. Every mind is irreplaceable. Here is what we are building to change that.',
}

export default function StoryPage() {
  return (
    <SubPageLayout>
      <Problem />
      <Solution />
    </SubPageLayout>
  )
}
