import { createContext, useContext } from 'react'

export type Lang = 'zh' | 'en'

const LanguageContext = createContext<Lang>('zh')

export const LanguageProvider = LanguageContext.Provider

export function useLanguage() {
  return useContext(LanguageContext)
}

export function pick<T>(lang: Lang, values: Record<Lang, T>) {
  return values[lang]
}
