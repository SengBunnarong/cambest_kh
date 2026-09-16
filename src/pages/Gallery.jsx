import { useLanguage } from '../context/LanguageContext'
import PageHero from '../components/ui/PageHero'

function Gallery() {
  const { t } = useLanguage()

  const schoolPhotos = [
    { src: '/school_locations/front.jpg', alt: 'School photo 1' },
    { src: '/school_locations/gate.jpg', alt: 'School photo 2' },
    { src: '/school_locations/wide.jpg', alt: 'School photo 3' },
    { src: '/school_locations/wewe.jpg', alt: 'School photo 4' },
  ]

  const teacherPhotos = [
    { src: '/teacher/1.png', alt: 'Teacher photo 1' },
    { src: '/teacher/2.jpg', alt: 'Teacher photo 2' },
    { src: '/teacher/3.jpg', alt: 'Teacher photo 3' },
    { src: '/teacher/4.jpg', alt: 'Teacher photo 4' },
  ]

  const studentPhotos = [
    { src: '/student_images/02 (3).png', alt: 'Student photo 1' },
    { src: '/student_images/Untitled-2.jpg', alt: 'Student photo 2' },
    { src: '/student_images/student2.png', alt: 'Student photo 3' },
    { src: '/student_images/4.png', alt: 'Student photo 4' },
  ]

  const eventPhotos = [
    { src: '/image/iconlogo.png', alt: 'Event photo 1' },
    { src: '/image/iconlogo.png', alt: 'Event photo 2' },
    { src: '/image/iconlogo.png', alt: 'Event photo 3' },
    { src: '/image/iconlogo.png', alt: 'Event photo 4' },
  ]

  const videos = [
    { label: t('videoIntroLabel') },
    { label: t('videoClassroomLabel') },
    { label: t('videoEventsLabel') },
  ]

  const sections = [
    { icon: 'fa-school', title: t('galleryOurSchool'), photos: schoolPhotos },
    { icon: 'fa-chalkboard-user', title: t('galleryOurTeachers'), photos: teacherPhotos },
    { icon: 'fa-users', title: t('galleryStudentLife'), photos: studentPhotos },
    { icon: 'fa-star', title: t('galleryActivities'), photos: eventPhotos },
  ]

  return (
    <>
      <PageHero title={t('galleryHeroTitle')} subtitle={t('galleryHeroSubtitle')} />

      {sections.map((section, idx) => (
        <div key={idx}>
          <section className="gallery-section">
            <div className="gallery-section-title">
              <i className={`fa-solid ${section.icon}`}></i> {section.title}
            </div>
            <div className="photo-grid">
              {section.photos.map((photo, i) => (
                <div className="photo-placeholder" key={i}>
                  <img src={photo.src} alt={photo.alt} loading="lazy" />
                </div>
              ))}
            </div>
          </section>
          <hr className="section-divider" />
        </div>
      ))}

      <section className="gallery-section" style={{ marginBottom: 48 }}>
        <div className="gallery-section-title">
          <i className="fa-solid fa-circle-play"></i> {t('galleryVideos')}
        </div>
        <div className="video-grid">
          {videos.map((video, i) => (
            <div className="video-placeholder" key={i}>
              <img src="/image/iconlogo.png" alt={video.label} loading="lazy" />
              <div className="play-overlay">
                <i className="fa-solid fa-circle-play"></i>
                <span>{video.label}</span>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  )
}

export default Gallery