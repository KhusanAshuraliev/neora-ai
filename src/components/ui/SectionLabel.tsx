import { cn } from '@/lib/utils'

interface SectionLabelProps {
  children: React.ReactNode
  className?: string
  light?: boolean
}

// Apple-style eyebrow — simple colored text, no pill or badge
export default function SectionLabel({ children, className, light }: SectionLabelProps) {
  return (
    <p
      className={cn(
        'text-sm font-semibold tracking-wide mb-4',
        light ? 'text-[#a78bfa]' : 'text-[#7c3aed]',
        className
      )}
    >
      {children}
    </p>
  )
}
