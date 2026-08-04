import { memo } from 'react'
import { Phone } from 'lucide-react'
import SectionTitle from './SectionTitle'
import { GitHubIcon, LinkedInIcon, EmailIcon } from './icons'
import { CONTACT_CARDS } from '../data/site'

const CONTACT_ICONS = {
  Email: EmailIcon,
  Phone,
  GitHub: GitHubIcon,
  LinkedIn: LinkedInIcon,
}

function Contact() {
  return (
    <section id="contact" className="section">
      <div className="container">
        <SectionTitle number="05" title="Contact" />

        <div className="contact-wrapper">
          <p className="contact-intro">
            Tu as un projet, une opportunité d'alternance ou simplement envie
            d'échanger ? N'hésite pas à me contacter !
          </p>

          <div className="contact-cards">
            {CONTACT_CARDS.map(card => {
              const Icon = CONTACT_ICONS[card.icon]
              return (
                <a
                  key={card.key}
                  href={card.href}
                  target={card.external ? '_blank' : undefined}
                  rel={card.external ? 'noopener noreferrer' : undefined}
                  className="contact-card"
                >
                  <Icon size={28} aria-hidden="true" />
                  <div>
                    <strong>{card.label}</strong>
                    <span>{card.value}</span>
                  </div>
                </a>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}

export default memo(Contact)
