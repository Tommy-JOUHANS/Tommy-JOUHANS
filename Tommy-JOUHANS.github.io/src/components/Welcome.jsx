import { memo } from 'react'
import SectionTitle from './SectionTitle'
import SafeHtml from './SafeHtml'
import { WELCOME_HTML, WELCOME_IMAGE } from '../data/site'
import { assetUrl } from '../utils/assetUrl'

function Welcome() {
  return (
    <section id="article" className="section section-alt">
      <div className="container">
        <SectionTitle number="00" title="Présentation" />
        <div className="article-content">
          {WELCOME_HTML.map((html, index) => (
            <SafeHtml key={index} as="p" html={html} />
          ))}

          <img
            src={assetUrl(WELCOME_IMAGE.src)}
            alt={WELCOME_IMAGE.alt}
            loading="lazy"
            decoding="async"
            style={{ width: '100%', borderRadius: '10px', margin: '20px 0' }}
          />
          <p>{WELCOME_IMAGE.caption}</p>
        </div>
      </div>
    </section>
  )
}

export default memo(Welcome)
