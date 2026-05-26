import { cn } from '@/lib/utils'

interface Props {
  children: React.ReactNode
  className?: string
  light?: boolean
}

export default function SectionLabel({ children, className }: Props) {
  return (
    <p
      className={cn(
        'inline-flex items-center gap-3 text-[11px] font-semibold tracking-[0.2em] uppercase text-violet-300/90 mb-5',
        className
      )}
    >
      <span className="w-6 h-px bg-gradient-to-r from-transparent to-violet-400/60" />
      {children}
      <span className="w-6 h-px bg-gradient-to-l from-transparent to-violet-400/60" />
    </p>
  )
}
