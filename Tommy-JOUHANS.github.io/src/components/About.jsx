import { memo } from 'react'
import { Locate, GraduationCap, Car, Dumbbell } from 'lucide-react'
import SectionTitle from './SectionTitle'
import SafeHtml from './SafeHtml'
import Stats from './Stats'
import QrStats from './QrStats'
import Certificates from './Certificates'
import { ABOUT_HTML, ABOUT_DETAILS, LANGUAGES } from '../data/site'
import { STATS } from '../data/stats'
import { ACHIEVEMENTS } from '../data/achievements'
import { CERTIFICATIONS } from '../data/certifications'

const DETAIL_ICONS = { Locate, GraduationCap, Car, Dumbbell }

function About() {
  return (
    <section id="about" className="section">
      <div className="container">
        <SectionTitle number="01" title="À propos" />
        <div className="about-grid">
          <div className="about-text">
            {ABOUT_HTML.map((html, index) => (
              <SafeHtml key={index} as="p" html={html} />
            ))}

            <div className="about-details">
              {ABOUT_DETAILS.map(detail => {
                const Icon = DETAIL_ICONS[detail.icon]
                return (
                  <div key={detail.text} className="detail-item">
                    <span className="mono accent">
                      <Icon aria-hidden="true" />
                    </span>
                    <span>{detail.text}</span>
                  </div>
                )
              })}
            </div>
          </div>

          <div className="profile-stats">
            <h3 className="subsection-title">Résultats chiffrés</h3>
            <Stats stats={STATS} />
            <QrStats />
          </div>

          <div className="profile-achievements">
            <h3 className="subsection-title">Réalisations concrètes</h3>
            <ul className="achievement-list">
              {ACHIEVEMENTS.map(item => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>

          <div className="about-langs">
            <h3 className="subsection-title">Langues</h3>
            {LANGUAGES.map(lang => (
              <div key={lang.name} className="lang-item">
                <span>
                  {lang.flag} {lang.name}
                </span>
                <div className="lang-bar">
                  <div className="lang-fill" style={{ width: `${lang.percent}%` }}>
                    {lang.level}
                  </div>
                </div>
              </div>
            ))}

            <h3 className="subsection-title" style={{ marginTop: '2rem' }}>
              Certifications IBM 2026
            </h3>
            <Certificates certifications={CERTIFICATIONS} />
          </div>
        </div>
      </div>
    </section>
  )
}

export default memo(About)
