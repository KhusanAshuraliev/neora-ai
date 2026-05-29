import type { Metadata } from 'next'
import SubPageLayout from '@/components/ui/SubPageLayout'
import InteractiveDemo from '@/components/sections/InteractiveDemo'

export const metadata: Metadata = {
  title: 'Try It — Neora AI',
  description: 'Type a thought and see what Neora would learn from it.',
}

export default function TryPage() {
  return (
    <SubPageLayout>
      <InteractiveDemo />
    </SubPageLayout>
  )
}
