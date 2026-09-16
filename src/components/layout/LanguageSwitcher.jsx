import { useLanguage } from '../../context/LanguageContext'

function LanguageSwitcher() {
  const { lang, switchLang } = useLanguage()

  const flagSrc = lang === 'en' ? '/eng.jpg' : '/kh.jpg'
  const flagAlt = lang === 'en' ? 'English Flag' : 'Khmer Flag'

  return (
    <div className="lang-switcher">
      <img src={flagSrc} alt={flagAlt} />
      <select value={lang} onChange={(e) => switchLang(e.target.value)} aria-label="Language">
        <option value="en">English</option>
        <option value="km">ខ្មែរ</option>
      </select>
    </div>
  )
}

export default LanguageSwitcher