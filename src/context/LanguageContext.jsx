import { createContext, useContext, useEffect, useState } from 'react'
import { translations } from '../translations'

const LanguageContext = createContext(null)

const LanguageProvider = ({ children }) => {
  const [lang, setLang] = useState(() => {
    return localStorage.getItem('cambest_lang') || 'en'
  })

  useEffect(() => {
    localStorage.setItem('cambest_lang', lang)
    document.documentElement.lang = lang
  }, [lang])

  const t = (key) => translations[lang][key] || key

  const switchLang = (value) => setLang(value)

  return (
    <LanguageContext.Provider value={{ lang, t, switchLang }}>
      {children}
    </LanguageContext.Provider>
  )
}

const useLanguage = () => {
  const context = useContext(LanguageContext)
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider')
  }
  return context
}

export { LanguageProvider, useLanguage }