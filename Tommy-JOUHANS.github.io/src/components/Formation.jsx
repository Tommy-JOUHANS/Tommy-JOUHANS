import { memo } from 'react'
import { GraduationCap } from 'lucide-react'
import Timeline from './Timeline'
import { FORMATIONS } from '../data/formations'

function Formation() {
  return (
    <Timeline
      heading="Formation"
      icon={<GraduationCap size={20} aria-hidden="true" />}
      items={FORMATIONS}
    />
  )
}

export default memo(Formation)
