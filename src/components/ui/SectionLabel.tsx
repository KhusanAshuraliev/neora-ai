import { cn } from '@/lib/utils'

interface SectionLabelProps {
  children: React.ReactNode
  className?: string
}

export default function SectionLabel({ children, className }: SectionLabelProps) {
  return (
    <div
      className={cn(
        'inline-flex items-center gap-2 mb-5',
        'px-3.5 py-1.5 rounded-full',
        'border border-[rgba(124,58,237,0.25)] bg-[rgba(124,58,237,0.07)]',
        'text-[#a855f7] text-xs font-medium tracking-[0.15em] uppercase',
        className
      )}
    >
      <span className="w-1 h-1 rounded-full bg-[#a855f7] animate-pulse" />
      {children}
    </div>
  )
}
