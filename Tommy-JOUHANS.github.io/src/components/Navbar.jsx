import { memo, useEffect, useState } from 'react'
import { NAV_LINKS, SITE } from '../data/site'

/**
 * Navbar autonome : gère elle-même le scroll-spy (IntersectionObserver sur
 * les <section id="...">) et le menu mobile. Aucune dépendance à App.jsx,
 * conformément au découpage "App.jsx assemble, les composants gèrent leur
 * propre état".
 */
function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('hero')

  useEffect(() => {
    const sections = document.querySelectorAll('section[id]')
    if (sections.length === 0) return undefined

    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) setActiveSection(entry.target.id)
        })
      },
      { rootMargin: '-40% 0px -40% 0px' }
    )

    sections.forEach(section => observer.observe(section))
    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    if (!menuOpen) return undefined

    function handleKeyDown(event) {
      if (event.key === 'Escape') setMenuOpen(false)
    }

    document.addEventListener('keydown', handleKeyDown)
    return () => document.removeEventListener('keydown', handleKeyDown)
  }, [menuOpen])

  return (
    <nav className="navbar" aria-label="Navigation principale">
      <div className="navbar-inner">
        <a href="#hero" className="navbar-logo">
          <span className="mono">&lt;</span>
          {SITE.name}
          <span className="mono">/&gt;</span>
        </a>

        <button
          type="button"
          className={`menu-toggle ${menuOpen ? 'open' : ''}`}
          onClick={() => setMenuOpen(prev => !prev)}
          aria-label={menuOpen ? 'Fermer le menu' : 'Ouvrir le menu'}
          aria-expanded={menuOpen}
          aria-controls="navbar-links"
        >
          <span /><span /><span />
        </button>

        <ul id="navbar-links" className={`navbar-links ${menuOpen ? 'open' : ''}`}>
          {NAV_LINKS.map(({ href, label }) => {
            const isActive = activeSection === href.slice(1)
            return (
              <li key={href}>
                <a
                  href={href}
                  className={isActive ? 'active' : ''}
                  aria-current={isActive ? 'true' : undefined}
                  onClick={() => setMenuOpen(false)}
                >
                  {label}
                </a>
              </li>
            )
          })}
        </ul>
      </div>
    </nav>
  )
}

export default memo(Navbar)
