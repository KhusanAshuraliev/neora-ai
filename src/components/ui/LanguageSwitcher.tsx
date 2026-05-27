'use client'

import { useTranslation } from '@/lib/LanguageProvider'
import { cn } from '@/lib/utils'

export default function LanguageSwitcher({
  className,
  dark,
}: {
  className?: string
  dark?: boolean
}) {
  const { lang, setLang } = useTranslation()

  return (
    <div
      className={cn(
        'rounded-full p-1 flex items-center text-[11px] font-semibold tracking-[0.08em] border transition-colors',
        dark ? 'bg-black/30 border-white/10' : 'bg-white/60 border-[#E5DECB]',
        className
      )}
    >
      <button
        type="button"
        onClick={() => setLang('en')}
        aria-pressed={lang === 'en'}
        className={cn(
          'px-2.5 py-1 rounded-full transition-all duration-200',
          lang === 'en'
            ? dark
              ? 'bg-white/15 text-white'
              : 'bg-[#1F1F1F] text-white'
            : dark
              ? 'text-white/55 hover:text-white/80'
              : 'text-warm hover:text-slate'
        )}
      >
        EN
      </button>
      <button
        type="button"
        onClick={() => setLang('ru')}
        aria-pressed={lang === 'ru'}
        className={cn(
          'px-2.5 py-1 rounded-full transition-all duration-200',
          lang === 'ru'
            ? dark
              ? 'bg-white/15 text-white'
              : 'bg-[#1F1F1F] text-white'
            : dark
              ? 'text-white/55 hover:text-white/80'
              : 'text-warm hover:text-slate'
        )}
      >
        RU
      </button>
    </div>
  )
}
