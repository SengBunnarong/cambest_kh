import { Link } from 'react-router-dom'
import { useLanguage } from '../context/LanguageContext'
import PageHero from '../components/ui/PageHero'

function Contact() {
  const { t } = useLanguage()

  return (
    <>
      <PageHero title={t('contactHeroTitle')} subtitle={t('contactHeroSubtitle')} />

      <div className="contact-layout">
        {/* LEFT: INFO CARD */}
        <div className="contact-info-card">
          <h2><i className="fa-solid fa-address-book"></i> {t('contactGetInTouch')}</h2>

          <div className="contact-row">
            <i className="fa-solid fa-envelope"></i>
            <div>
              <div className="contact-row-label">{t('contactEmailLabel')}</div>
              <span>{t('footerEmail')}</span>
            </div>
          </div>

          <hr className="divider-line" />

          <div className="contact-row">
            <i className="fa-solid fa-phone"></i>
            <div>
              <div className="contact-row-label">{t('contactPhoneLabel')}</div>
              <div>{t('contactPhoneMetfone1')}</div>
              <div>{t('contactPhoneCellcard')}</div>
              <div>{t('contactPhoneMetfone2')}</div>
            </div>
          </div>

          <hr className="divider-line" />

          <div className="contact-row">
            <i className="fa-brands fa-telegram"></i>
            <div>
              <div className="contact-row-label">{t('contactTelegramLabel')}</div>
              <div style={{ fontWeight: 700 }}>{t('contactTelegramHandle')}</div>
              <div style={{ fontSize: 13, color: '#888', marginTop: 2 }}>{t('contactTelegramNote')}</div>
              <a href="https://t.me/Cambest99" target="_blank" rel="noreferrer" className="tg-btn">
                <i className="fa-brands fa-telegram"></i> {t('contactTelegramButton')}
              </a>
            </div>
          </div>

          <hr className="divider-line" />

          <div className="contact-row">
            <i className="fa-solid fa-clock"></i>
            <div>
              <div className="contact-row-label">{t('contactHoursLabel')}</div>
              <div>{t('contactHoursValue')}</div>
            </div>
          </div>

          <hr className="divider-line" />

          <div className="contact-row">
            <i className="fa-solid fa-location-dot"></i>
            <div>
              <div className="contact-row-label">{t('contactAddressLabel')}</div>
              <div>{t('contactAddressValue')}</div>
            </div>
          </div>
        </div>

        {/* RIGHT: LOGO + MESSAGE CARD */}
        <div className="contact-logo-card">
          <img src="/image/iconlogo.png" alt="CamBest Logo" loading="lazy" />
          <p>{t('contactLogoCardText')}</p>
          <Link
            to="/programs"
            style={{ display: 'inline-flex', alignItems: 'center', gap: 7, background: 'var(--navy)', color: '#fff', padding: '11px 24px', borderRadius: 8, fontWeight: 700, fontSize: 14 }}
          >
            <i className="fa-solid fa-list"></i> {t('contactViewPrograms')}
          </Link>
        </div>
      </div>

      {/* MAP */}
      <div className="map-section">
        <div className="map-section-title">
          <i className="fa-solid fa-location-dot"></i> {t('contactMapTitle')}
        </div>
        <iframe
          title="CamBest School map"
          src="https://www.google.com/maps/embed?pb=!1m13!1m8!1m3!1d821.5038040184002!2d104.86850438029792!3d11.640965347104697!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMTHCsDM4JzI2LjkiTiAxMDTCsDUyJzA2LjgiRQ!5e0!3m2!1sen!2skh!4v1782403180157!5m2!1sen!2skh"
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </div>
    </>
  )
}

export default Contact