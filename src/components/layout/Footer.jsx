import { Link } from 'react-router-dom'
import { useLanguage } from '../../context/LanguageContext'

function Footer() {
  const { t } = useLanguage()

  const quickLinks = [
    { to: '/', label: t('navHome') },
    { to: '/about', label: t('navAbout') },
    { to: '/programs', label: t('navPrograms') },
    { to: '/gallery', label: t('navGallery') },
    { to: '/contact', label: t('navContact') },
  ]

  return (
    <footer className="footer">
      <div className="footer-top">
        <div className="footer-brand">
          <img src="/image/logo_footer.png" alt="CamBest Logo" className="footer-logo" />
          <p>{t('footerBrandText')}</p>
        </div>
        <div className="footer-box">
          <h3>{t('footerQuickLinks')}</h3>
          {quickLinks.map((link) => (
            <Link key={link.to} to={link.to}>
              <i className="fa-solid fa-chevron-right"></i> {link.label}
            </Link>
          ))}
        </div>
        <div className="footer-box">
          <h3>{t('footerContact')}</h3>
          <p><i className="fa-solid fa-location-dot"></i> {t('footerAddress')}</p>
          <p><i className="fa-solid fa-phone"></i> {t('footerPhone1')}</p>
          <p><i className="fa-solid fa-phone"></i> {t('footerPhone2')}</p>
          <p><i className="fa-solid fa-phone"></i> {t('footerPhone3')}</p>
          <p><i className="fa-solid fa-envelope"></i> {t('footerEmail')}</p>
        </div>
      </div>
      <div className="footer-bottom">
        <p>{t('footerCopyright')}</p>
      </div>
    </footer>
  )
}

export default Footer