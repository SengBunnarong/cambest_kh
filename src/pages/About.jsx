import { useLanguage } from '../context/LanguageContext'
import Carousel from '../components/ui/Carousel'
import PageHero from '../components/ui/PageHero'

const teacherSlides = [
  { src: '/teacher/1.png', alt: 'Teacher 1' },
  { src: '/teacher/2.jpg', alt: 'Teacher 2' },
  { src: '/teacher/3.jpg', alt: 'Teacher 3' },
  { src: '/teacher/4.jpg', alt: 'Teacher 4' },
]

function About() {
  const { t } = useLanguage()

  return (
    <>
      <PageHero title={t('aboutHeroTitle')} subtitle={t('aboutHeroSubtitle')} />

      {/* OUR STORY */}
      <div className="about-section">
        <h2 className="section-heading">{t('aboutStoryHeading')}</h2>
        <span className="section-underline"></span>
        <div className="story-grid">
          <div className="story-text">
            <p>{t('aboutStoryP1')}</p>
            <p>{t('aboutStoryP2')}</p>
            <p>{t('aboutStoryP3')}</p>
          </div>
          <div className="story-img">
            <img src="/school_locations/front.jpg" alt="Our School" loading="lazy" />
          </div>
        </div>

        <div className="feature-cards">
          <div className="feature-card">
            <i className="fa-solid fa-chalkboard-user"></i>
            <h3>{t('aboutFeatureTeacherTitle')}</h3>
            <p>{t('aboutFeatureTeacherDesc')}</p>
          </div>
          <div className="feature-card">
            <i className="fa-solid fa-shield-halved"></i>
            <h3>{t('aboutFeatureSafetyTitle')}</h3>
            <p>{t('aboutFeatureSafetyDesc')}</p>
          </div>
          <div className="feature-card">
            <i className="fa-solid fa-globe"></i>
            <h3>{t('aboutFeatureCurriculumTitle')}</h3>
            <p>{t('aboutFeatureCurriculumDesc')}</p>
          </div>
        </div>
      </div>

      {/* FOUNDER */}
      <div className="about-section">
        <h2 className="section-heading">{t('aboutFounderHeading')}</h2>
        <span className="section-underline"></span>
        <div className="founder-card">
          <img src="/teacher/we.png" alt="Founder" loading="lazy" />
          <div className="founder-info">
            <h3>{t('aboutFounderName')}</h3>
            <div className="founder-title">{t('aboutFounderTitle')}</div>
            <p>{t('aboutFounderP')}</p>
          </div>
        </div>
      </div>

      {/* MEET THE TEACHERS */}
      <div className="about-section">
        <h2 className="section-heading">{t('aboutTeachersHeading')}</h2>
        <span className="section-underline"></span>
        <Carousel
          items={teacherSlides}
          interval={4000}
          arrows
          containerClass="teacher-carousel-wrapper"
          trackClass="teacher-track"
          slideWrapperClass="teacher-slide"
          dotClass="teacher-dot"
          dotsClass="teacher-dots"
          btnClass="teacher-btn"
          ariaLabel="Meet our teachers"
        />
      </div>

      {/* CERTIFICATE */}
      <div className="about-section">
        <h2 className="section-heading">{t('aboutCertHeading')}</h2>
        <span className="section-underline"></span>
        <div className="cert-card">
          <div className="cert-img-wrapper">
            <img src="/image/cer.jpg" alt="Certificate" loading="lazy" />
          </div>
          <p className="cert-label"><i className="fa-solid fa-award"></i> &nbsp;{t('aboutCertLabel')}</p>
        </div>
      </div>

      {/* LOCATION */}
      <div className="about-section">
        <h2 className="section-heading">{t('aboutLocationHeading')}</h2>
        <span className="section-underline"></span>
        <div className="map-wrapper">
          <iframe
            title="CamBest School location"
            src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3909.0!2d104.8706!3d11.6406!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2s!5e0!3m2!1sen!2skh!4v1700000000000!5m2!1sen!2skh"
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
        <div className="map-img-wrapper">
          <img src="/school_locations/MAP SCHOOL.png" alt="School Map" loading="lazy" />
        </div>
        <div className="location-info">
          <div className="location-item"><i className="fa-solid fa-location-dot"></i> {t('aboutLocationAddress')}</div>
          <div className="location-item"><i className="fa-solid fa-clock"></i> {t('aboutLocationHours')}</div>
          <div className="location-item"><i className="fa-solid fa-phone"></i> {t('aboutLocationPhone')}</div>
        </div>
      </div>
    </>
  )
}

export default About