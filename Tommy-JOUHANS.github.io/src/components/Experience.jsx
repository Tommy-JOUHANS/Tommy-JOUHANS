import { memo } from 'react'
import { Briefcase } from 'lucide-react'
import Timeline from './Timeline'
import { EXPERIENCES } from '../data/experiences'

function Experience() {
  return (
    <Timeline
      heading="Expériences"
      icon={<Briefcase size={20} aria-hidden="true" />}
      items={EXPERIENCES}
    />
  )
}

export default memo(Experience)
