import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { useLanguage } from '../context/LanguageContext'

const titles = {
  '/': { en: 'CamBest School | Home', km: 'CamBest School | ទំព័រដើម' },
  '/about': { en: 'CamBest School | About', km: 'CamBest School | អំពី' },
  '/programs': { en: 'CamBest School | Programs', km: 'CamBest School | វគ្គសិក្សា' },
  '/gallery': { en: 'CamBest School | Gallery', km: 'CamBest School | រូបភាព' },
  '/contact': { en: 'CamBest School | Contact', km: 'CamBest School | ទាក់ទង' },
}

function usePageTitle() {
  const { pathname } = useLocation()
  const { lang } = useLanguage()

  useEffect(() => {
    const entry = titles[pathname] || titles['/']
    document.title = entry[lang]
  }, [pathname, lang])
}

export default usePageTitle