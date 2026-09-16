import { useEffect, useRef, useState } from 'react'

function Carousel({
  items,
  interval = 3000,
  arrows = false,
  dots = true,
  containerClass,
  trackClass,
  dotClass,
  dotsClass,
  btnClass,
  slideWrapperClass = null,
  overlayContent = null,
  onSlide = null,
  ariaLabel = 'Carousel',
}) {
  const [current, setCurrent] = useState(0)
  const trackRef = useRef(null)
  const total = items ? items.length : 0

  const goTo = (index) => {
    if (!total) return
    const idx = ((index % total) + total) % total
    setCurrent(idx)
    if (trackRef.current) {
      trackRef.current.style.transform = `translateX(-${idx * 100}%)`
    }
  }

  useEffect(() => {
    if (!total) return
    const id = setInterval(() => goTo(current + 1), interval)
    return () => clearInterval(id)
  }, [current, total, interval])

  if (!total) return null

  return (
    <div className={containerClass} role="region" aria-label={ariaLabel}>
      <div className={trackClass} ref={trackRef}>
        {items.map((item, i) => {
          const slideEl = onSlide
            ? onSlide(item, i)
            : <img src={item.src} alt={item.alt || ''} loading={i === 0 ? 'eager' : 'lazy'} />
          return slideWrapperClass
            ? <div key={i} className={slideWrapperClass}>{slideEl}</div>
            : <img key={i} src={item.src} alt={item.alt || ''} loading={i === 0 ? 'eager' : 'lazy'} />
        })}
      </div>

      {arrows && (
        <>
          <button className={`${btnClass} prev`} onClick={() => goTo(current - 1)} aria-label="Previous slide">&#10094;</button>
          <button className={`${btnClass} next`} onClick={() => goTo(current + 1)} aria-label="Next slide">&#10095;</button>
        </>
      )}

      {dots && (
        <div className={dotsClass}>
          {items.map((_, i) => (
            <button
              key={i}
              className={`${dotClass}${i === current ? ' active' : ''}`}
              onClick={() => goTo(i)}
              aria-label={`Go to slide ${i + 1}`}
            />
          ))}
        </div>
      )}

      {overlayContent}
    </div>
  )
}

export default Carousel