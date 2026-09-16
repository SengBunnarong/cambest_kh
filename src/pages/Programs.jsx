import { Link } from 'react-router-dom'
import { useLanguage } from '../context/LanguageContext'
import PageHero from '../components/ui/PageHero'

function Programs() {
  const { t } = useLanguage()

  const programs = [
    { icon: 'fa-school', title: t('programItemPrimarySchool'), img: '/image/fee1.png', alt: 'Primary School Fee List' },
    { icon: 'fa-language', title: t('programItemLanguage'), img: '/image/fee2.png', alt: 'Language Program Fee List' },
    { icon: 'fa-book-open', title: t('programItemExtraClasses'), img: '/image/fee3.png', alt: 'Extra Classes Fee List' },
  ]

  return (
    <>
      <PageHero title={t('programsHeroTitle')} subtitle={t('programsHeroSubtitle')} />

      <section className="programs-page-section">
        {programs.map((p, i) => (
          <div className="program-item" key={i}>
            <div className="program-item-header">
              <i className={`fa-solid ${p.icon}`}></i>
              <h2>{p.title}</h2>
            </div>
            <img src={p.img} alt={p.alt} loading="lazy" />
          </div>
        ))}
      </section>

      <section className="enroll-section">
        <h2>{t('enrollHeading')}</h2>
        <p>{t('enrollText')}</p>
        <Link to="/contact" className="enroll-btn">
          <i className="fa-solid fa-paper-plane"></i> &nbsp;{t('enrollButton')}
        </Link>
      </section>
    </>
  )
}

export default Programs