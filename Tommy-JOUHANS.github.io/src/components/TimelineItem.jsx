import { memo } from 'react'
import ModalImage from './ModalImage'

/**
 * Un élément de timeline (formation, expérience ou recommandation).
 * La logique d'agrandissement d'image est déléguée à <ModalImage>,
 * réutilisée partout où une image doit s'ouvrir en grand.
 */
function TimelineItem({
  date,
  title,
  place,
  accent = false,
  image = null,
  imageAlt = '',
  imageRotate = 0,
}) {
  return (
    <div className={`timeline-item ${accent ? 'timeline-accent' : ''}`}>
      {date && <span className="timeline-date mono">{date}</span>}

      <strong className="timeline-title">{title}</strong>

      {place && <span className="timeline-place">{place}</span>}

      {image && <ModalImage src={image} alt={imageAlt || title} rotate={imageRotate} />}
    </div>
  )
}

export default memo(TimelineItem)
