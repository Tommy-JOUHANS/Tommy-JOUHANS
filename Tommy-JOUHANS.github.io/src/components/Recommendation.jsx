import { memo } from 'react'
import { Briefcase } from 'lucide-react'
import TimelineItem from './TimelineItem'
import { RECOMMENDATION } from '../data/recommendation'

function Recommendation() {
  return (
    <div className="recommendation-section">
      <h3 className="timeline-heading">
        <Briefcase size={20} aria-hidden="true" />
        Recommandation professionnelle
      </h3>

      <TimelineItem
        title={RECOMMENDATION.title}
        place={RECOMMENDATION.place}
        image={RECOMMENDATION.image}
        imageAlt={RECOMMENDATION.imageAlt}
      />
    </div>
  )
}

export default memo(Recommendation)
