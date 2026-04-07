'use client'

import { forwardRef } from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { cn } from '@/lib/utils'

interface ButtonProps {
  children: React.ReactNode
  href?: string
  onClick?: () => void
  variant?: 'primary' | 'ghost' | 'outline'
  size?: 'sm' | 'md' | 'lg'
  disabled?: boolean
  loading?: boolean
  className?: string
  type?: 'button' | 'submit' | 'reset'
}

// Apple-style: clean fills, no heavy glow — restrained and premium
const variantStyles = {
  primary:
    'bg-[#7c3aed] text-white hover:bg-[#6d28d9] active:bg-[#5b21b6]',
  ghost:
    'text-[#7c3aed] hover:text-[#6d28d9] font-medium',
  outline:
    'border border-[#d2d2d7] text-[#1d1d1f] hover:border-[#7c3aed] hover:text-[#7c3aed] bg-transparent',
}

const sizeStyles = {
  sm: 'text-sm px-4 py-2',
  md: 'text-sm px-5 py-2.5',
  lg: 'text-base px-7 py-3.5',
}

function Spinner() {
  return (
    <svg className="animate-spin h-4 w-4" viewBox="0 0 24 24" fill="none">
      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
    </svg>
  )
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ children, href, onClick, variant = 'primary', size = 'md', disabled = false, loading = false, className, type = 'button' }, ref) => {
    const classes = cn(
      'inline-flex items-center justify-center gap-2 font-medium rounded-full transition-all duration-150 cursor-pointer select-none',
      variantStyles[variant],
      sizeStyles[size],
      (disabled || loading) && 'opacity-50 cursor-not-allowed',
      className
    )
    const content = loading ? <Spinner /> : children

    if (href) {
      return (
        <motion.div whileTap={{ scale: 0.98 }}>
          <Link href={href} className={classes}>{content}</Link>
        </motion.div>
      )
    }
    return (
      <motion.button
        ref={ref} type={type} onClick={onClick}
        disabled={disabled || loading} className={classes}
        whileTap={{ scale: disabled || loading ? 1 : 0.98 }}
      >
        {content}
      </motion.button>
    )
  }
)

Button.displayName = 'Button'
export default Button
