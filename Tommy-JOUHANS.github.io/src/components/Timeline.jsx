import { memo } from 'react'
import TimelineItem from './TimelineItem'

/**
 * Colonne de timeline générique (titre + icône + liste d'items).
 * Réutilisée par Formation.jsx et Experience.jsx.
 */
function Timeline({ heading, icon, items }) {
  return (
    <div className="timeline-col">
      <h3 className="timeline-heading">
        {icon}
        {heading}
      </h3>

      <div className="timeline">
        {items.map(item => (
          <TimelineItem
            key={item.id}
            date={item.date}
            title={item.title}
            place={item.place}
            image={item.image}
            imageAlt={item.imageAlt}
            accent={item.accent}
            imageRotate={item.rotate}
          />
        ))}
      </div>
    </div>
  )
}

export default memo(Timeline)
