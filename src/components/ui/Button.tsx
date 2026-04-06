'use client'

import { forwardRef } from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { cn } from '@/lib/utils'

interface ButtonProps {
  children: React.ReactNode
  href?: string
  onClick?: () => void
  variant?: 'primary' | 'secondary' | 'ghost' | 'outline'
  size?: 'sm' | 'md' | 'lg'
  disabled?: boolean
  loading?: boolean
  className?: string
  type?: 'button' | 'submit' | 'reset'
}

const variantStyles = {
  primary: [
    'bg-gradient-to-r from-[#7c3aed] to-[#a855f7] text-white',
    'hover:from-[#6d28d9] hover:to-[#9333ea]',
    'shadow-[0_0_25px_rgba(124,58,237,0.45)]',
    'hover:shadow-[0_0_40px_rgba(124,58,237,0.65)]',
  ].join(' '),
  secondary: [
    'bg-[rgba(124,58,237,0.12)] text-[#a855f7]',
    'border border-[rgba(124,58,237,0.3)]',
    'hover:bg-[rgba(124,58,237,0.22)] hover:border-[rgba(124,58,237,0.5)]',
  ].join(' '),
  ghost: 'text-[#8b8ba7] hover:text-[#f0efff] transition-colors',
  outline: [
    'border border-[rgba(255,255,255,0.1)] text-[#f0efff]',
    'hover:border-[rgba(124,58,237,0.45)] hover:bg-[rgba(124,58,237,0.08)]',
  ].join(' '),
}

const sizeStyles = {
  sm: 'text-sm px-4 py-2 gap-1.5',
  md: 'text-sm px-5 py-2.5 gap-2',
  lg: 'text-base px-8 py-3.5 gap-2',
}

function Spinner() {
  return (
    <svg className="animate-spin h-4 w-4" viewBox="0 0 24 24" fill="none">
      <circle
        className="opacity-25"
        cx="12"
        cy="12"
        r="10"
        stroke="currentColor"
        strokeWidth="4"
      />
      <path
        className="opacity-75"
        fill="currentColor"
        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
      />
    </svg>
  )
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      children,
      href,
      onClick,
      variant = 'primary',
      size = 'md',
      disabled = false,
      loading = false,
      className,
      type = 'button',
    },
    ref
  ) => {
    const base =
      'inline-flex items-center justify-center font-medium rounded-full transition-all duration-200 cursor-pointer select-none'
    const classes = cn(
      base,
      variantStyles[variant],
      sizeStyles[size],
      (disabled || loading) && 'opacity-50 cursor-not-allowed',
      className
    )

    const content = loading ? <Spinner /> : children

    if (href) {
      return (
        <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
          <Link href={href} className={classes}>
            {content}
          </Link>
        </motion.div>
      )
    }

    return (
      <motion.button
        ref={ref}
        type={type}
        onClick={onClick}
        disabled={disabled || loading}
        className={classes}
        whileHover={{ scale: disabled || loading ? 1 : 1.03 }}
        whileTap={{ scale: disabled || loading ? 1 : 0.97 }}
      >
        {content}
      </motion.button>
    )
  }
)

Button.displayName = 'Button'
export default Button
