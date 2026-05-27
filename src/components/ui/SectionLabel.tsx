import { cn } from '@/lib/utils'

interface Props {
  children: React.ReactNode
  className?: string
  light?: boolean
}

export default function SectionLabel({ children, className, light }: Props) {
  if (light) {
    return (
      <p
        className={cn(
          'inline-flex items-center gap-3 text-[11px] font-semibold tracking-[0.22em] uppercase text-clay mb-5',
          className
        )}
      >
        <span className="w-6 h-px bg-gradient-to-r from-transparent to-[#CC785C]/50" />
        {children}
        <span className="w-6 h-px bg-gradient-to-l from-transparent to-[#CC785C]/50" />
      </p>
    )
  }
  return (
    <p
      className={cn(
        'inline-flex items-center gap-3 text-[11px] font-semibold tracking-[0.22em] uppercase text-[#F2D4BE]/90 mb-5',
        className
      )}
    >
      <span className="w-6 h-px bg-gradient-to-r from-transparent to-[#F2D4BE]/60" />
      {children}
      <span className="w-6 h-px bg-gradient-to-l from-transparent to-[#F2D4BE]/60" />
    </p>
  )
}
