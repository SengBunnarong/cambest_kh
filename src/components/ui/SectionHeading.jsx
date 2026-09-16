function SectionHeading({ title, underline = true, subtitle = null, light = false }) {
  return (
    <>
      <h1 className="section-heading" style={light ? { color: '#fff' } : undefined}>
        {title}
      </h1>
      {subtitle && (
        <p className="section-sub" style={light ? { color: 'rgba(255,255,255,.8)' } : undefined}>
          {subtitle}
        </p>
      )}
      {underline && <span className="section-underline" />}
    </>
  )
}

export default SectionHeading