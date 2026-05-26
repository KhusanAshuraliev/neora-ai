'use client'

import { useTranslation } from '@/lib/LanguageProvider'
import { cn } from '@/lib/utils'

export default function LanguageSwitcher({ className }: { className?: string }) {
  const { lang, setLang } = useTranslation()

  return (
    <div
      className={cn(
        'glass rounded-full p-1 flex items-center text-[11px] font-semibold tracking-[0.08em]',
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
            ? 'bg-white/[0.12] text-white'
            : 'text-white/45 hover:text-white/75'
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
            ? 'bg-white/[0.12] text-white'
            : 'text-white/45 hover:text-white/75'
        )}
      >
        RU
      </button>
    </div>
  )
}
