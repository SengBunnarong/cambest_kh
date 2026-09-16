import SectionHeading from './SectionHeading'

function PageHero({ title, subtitle }) {
  return (
    <div className="page-hero">
      <SectionHeading title={title} subtitle={subtitle} light />
    </div>
  )
}

export default PageHero