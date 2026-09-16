import { NavLink, Link } from 'react-router-dom'
import { useLanguage } from '../../context/LanguageContext'
import LanguageSwitcher from './LanguageSwitcher'

function Header() {
  const { t } = useLanguage()

  const links = [
    { to: '/', label: t('navHome'), end: true },
    { to: '/about', label: t('navAbout') },
    { to: '/programs', label: t('navPrograms') },
    { to: '/gallery', label: t('navGallery') },
    { to: '/contact', label: t('navContact') },
  ]

  return (
    <>
      <div className="logo-bar">
        <Link to="/">
          <img src="/image/logo_home.png" alt="CamBest Logo" />
        </Link>
        <div className="header-controls">
          <LanguageSwitcher />
        </div>
      </div>

      <nav>
        <ul>
          {links.map((link) => (
            <li key={link.to}>
              <NavLink to={link.to} end={link.end} className={({ isActive }) => (isActive ? 'active' : undefined)}>
                {link.label}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
    </>
  )
}

export default Header