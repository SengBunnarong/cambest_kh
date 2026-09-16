import { Link } from 'react-router-dom'
import { useLanguage } from '../context/LanguageContext'
import Carousel from '../components/ui/Carousel'

const heroSlides = [
  { src: '/student_images/01 (3).png', alt: 'Slide 1' },
  { src: '/student_images/4.jpg', alt: 'Slide 2' },
  { src: '/student_images/03 (3).png', alt: 'Slide 3' },
  { src: '/student_images/photo_2026-04-24_11-25-58.jpg', alt: 'Slide 5' },
  { src: '/student_images/02 (3).png', alt: 'Slide 6' },
]

const schoolSlides = [
  { src: '/school_locations/front.jpg', alt: 'School Photo 1' },
  { src: '/school_locations/gate.jpg', alt: 'School Photo 2' },
  { src: '/school_locations/wide.jpg', alt: 'School Photo 3' },
  { src: '/school_locations/ok.jpg', alt: 'School Photo 4' },
]

function Home() {
  const { t } = useLanguage()

  const programs = [
    {
      img: '/student_images/03 (3).png',
      title: t('programPrimaryTitle'),
      desc: t('programPrimaryDesc'),
    },
    {
      img: '/image/en_cn.png',
      title: t('programLanguagesTitle'),
      desc: t('programLanguagesDesc'),
    },
    {
      img: '/image/edu.png',
      title: t('programAcademicTitle'),
      desc: t('programAcademicDesc'),
    },
    {
      img: '/image/a03b6e264f0cf13cd2ef2aa8d97e0d8b.jpg',
      title: t('programComputerTitle'),
      desc: t('programComputerDesc'),
    },
  ]

  return (
    <>
      {/* HERO CAROUSEL */}
      <Carousel
        items={heroSlides}
        interval={3000}
        containerClass="carousel"
        trackClass="carousel-track"
        dotClass="dot"
        dotsClass="carousel-dots"
        overlayContent={
          <div className="carousel-overlay">
            <h1>{t('heroTitle1')}<br />{t('heroTitle2')}</h1>
            <p style={{ maxWidth: 200 }}>{t('heroSubtitle')}</p>
          </div>
        }
        ariaLabel="School hero gallery"
      />

      {/* INTRO SECTION */}
      <div className="intro-section">
        <div className="intro-text">
          <h2>{t('introWelcome')} <span style={{ color: '#f8931f' }}>{t('introSchoolName')}</span> {t('introSchool')}</h2>
          <div className="intro-underline"></div>
          <p>{t('introP1')}</p>
          <p>{t('introP2')}</p>
          <Link to="/about" style={{ display: 'inline-flex', alignItems: 'center', gap: 8, marginTop: 8, fontWeight: 800, fontSize: 14, color: 'var(--orange)' }}>
            {t('introLearnMore')} <i className="fa-solid fa-arrow-right"></i>
          </Link>
        </div>
        <div className="intro-visual">
          <img src="/school_locations/front.jpg" alt="CamBest School" />
          <div className="intro-badge">
            <span><i className="fa-solid fa-graduation-cap"></i></span>
            {t('introBadge')}
          </div>
        </div>
      </div>

      {/* PROGRAMS / CLASSES */}
      <div className="programs">
        <div className="programs-inner">
          <h2 className="section-heading">{t('ourProgramsHeading')}</h2>
          <span className="section-underline"></span>
          <div className="program-grid">
            {programs.map((p, i) => (
              <div className="program-card" key={i}>
                <img src={p.img} alt={p.title} loading="lazy" />
                <div className="program-card-body">
                  <h3>{p.title}</h3>
                  <p>{p.desc}</p>
                  <Link to="/programs" className="program-card-link">
                    {t('seeDetails')} <i className="fa-solid fa-arrow-right"></i>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* SCHOOL PHOTOS CAROUSEL */}
      <div className="school-carousel-wrapper">
        <h2 className="school-carousel-title">{t('ourSchoolTitle')}</h2>
        <span className="section-underline"></span>
        <Carousel
          items={schoolSlides}
          interval={4500}
          arrows
          containerClass="school-carousel"
          trackClass="school-track"
          dotClass="school-dot"
          dotsClass="school-dots"
          btnClass="school-btn"
          ariaLabel="School photo gallery"
        />
      </div>

      {/* ADMISSION CTA */}
      <div className="admission">
        <h2>{t('admissionTitle')}</h2>
        <p>{t('admissionText')}</p>
        <div className="admission-btn-wrapper">
          <Link to="/contact" className="admission-btn">{t('enrollNow')}</Link>
          <Link to="/programs" className="admission-btn outline">{t('viewPrograms')}</Link>
        </div>
      </div>
    </>
  )
}

export default Home