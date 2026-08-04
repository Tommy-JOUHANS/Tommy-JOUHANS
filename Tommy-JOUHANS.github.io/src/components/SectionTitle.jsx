import { memo } from 'react'

function SectionTitle({ number, title }) {
  return (
    <div className="section-title">
      <span className="section-number mono">{number}.</span>
      <h2>{title}</h2>
      <div className="title-line" />
    </div>
  )
}

export default memo(SectionTitle)
