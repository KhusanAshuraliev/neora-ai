'use client'

import { createContext, useContext, useEffect, useState } from 'react'
import { translations, type Lang, type Translation } from './i18n'

interface Ctx {
  lang: Lang
  setLang: (l: Lang) => void
  t: Translation
}

const LanguageContext = createContext<Ctx>({
  lang: 'en',
  setLang: () => {},
  t: translations.en,
})

const STORAGE_KEY = 'neora-lang'

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLangState] = useState<Lang>('en')
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    try {
      const stored = localStorage.getItem(STORAGE_KEY)
      if (stored === 'en' || stored === 'ru') {
        setLangState(stored)
        document.documentElement.lang = stored
        return
      }
    } catch {}
    const browserLang = navigator.language?.toLowerCase() ?? ''
    if (browserLang.startsWith('ru')) {
      setLangState('ru')
      document.documentElement.lang = 'ru'
    }
  }, [])

  const setLang = (l: Lang) => {
    setLangState(l)
    try {
      localStorage.setItem(STORAGE_KEY, l)
    } catch {}
    if (mounted) document.documentElement.lang = l
  }

  return (
    <LanguageContext.Provider value={{ lang, setLang, t: translations[lang] }}>
      {children}
    </LanguageContext.Provider>
  )
}

export const useTranslation = () => useContext(LanguageContext)
