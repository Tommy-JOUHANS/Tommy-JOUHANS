import { memo, useEffect, useState } from 'react'
import { SITE, SOCIALS } from '../data/site'
import { assetUrl } from '../utils/assetUrl'
import { GitHubIcon, LinkedInIcon, EmailIcon } from './icons'

const SOCIAL_ICONS = {
  github: GitHubIcon,
  linkedin: LinkedInIcon,
  email: EmailIcon,
}

function Hero() {
  const [typed, setTyped] = useState('')

  useEffect(() => {
    let i = 0
    const timer = setInterval(() => {
      if (i < SITE.role.length) {
        setTyped(SITE.role.slice(0, i + 1))
        i++
      } else {
        clearInterval(timer)
      }
    }, 60)
    return () => clearInterval(timer)
  }, [])

  return (
    <section id="hero" className="hero">
      <div className="hero-bg-grid" />
      <div className="hero-content">
        <div className="hero-avatar">
          <img
            src={assetUrl('profile.jpg')}
            alt={SITE.name}
            onError={event => {
              event.target.style.display = 'none'
              event.target.nextSibling.style.display = 'flex'
            }}
          />
          <div className="avatar-placeholder" style={{ display: 'none' }}>
            {SITE.name.replace(/\s+/g, '')}
          </div>
        </div>

        <div className="hero-text">
          <p className="hero-greeting mono">{SITE.greeting}</p>
          <h1 className="hero-name">
            Tommy <span className="accent">JOUHANS</span>
          </h1>
          <h2 className="hero-role">
            <span className="typed">{typed}</span>
            <span className="cursor" aria-hidden="true">|</span>
          </h2>
          <p className="hero-tagline">
            En formé à <span className="accent">Holberton School France</span> · Disponible dès <strong>maintenant</strong>
          </p>

          <div className="hero-cta">
            <a href="#projects" className="btn btn-primary">Voir mes projets</a>
            <a href="#contact" className="btn btn-outline">Me contacter</a>
          </div>

          <div className="hero-socials">
            {SOCIALS.map(social => {
              const Icon = SOCIAL_ICONS[social.key]
              return (
                <a
                  key={social.key}
                  href={social.href}
                  target={social.key === 'email' ? undefined : '_blank'}
                  rel={social.key === 'email' ? undefined : 'noopener noreferrer'}
                  aria-label={social.label}
                >
                  <Icon />
                </a>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}

export default memo(Hero)
