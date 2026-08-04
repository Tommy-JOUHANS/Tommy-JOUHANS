import { memo } from 'react'
import SectionTitle from './SectionTitle'
import { SKILLS } from '../data/skills'

function Skills() {
  return (
    <section id="skills" className="section section-alt">
      <div className="container">
        <SectionTitle number="02" title="Compétences" />
        <div className="skills-grid">
          {Object.entries(SKILLS).map(([category, items]) => (
            <div key={category} className="skill-card">
              <h3 className="skill-category">{category}</h3>
              <div className="skill-tags">
                {items.map(skill => (
                  <span key={skill} className="skill-tag">{skill}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default memo(Skills)
