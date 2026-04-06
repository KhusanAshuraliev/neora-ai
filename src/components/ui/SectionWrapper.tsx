import { cn } from '@/lib/utils'

interface SectionWrapperProps {
  children: React.ReactNode
  id?: string
  className?: string
  innerClassName?: string
}

export default function SectionWrapper({
  children,
  id,
  className,
  innerClassName,
}: SectionWrapperProps) {
  return (
    <section
      id={id}
      className={cn('relative w-full py-28 md:py-36 overflow-hidden', className)}
    >
      <div className={cn('max-w-7xl mx-auto px-6 md:px-12', innerClassName)}>
        {children}
      </div>
    </section>
  )
}
