import { memo } from 'react'
import { Download } from 'lucide-react'
import SectionTitle from './SectionTitle'
import Formation from './Formation'
import Experience from './Experience'
import Recommendation from './Recommendation'
import { SITE } from '../data/site'
import { assetUrl } from '../utils/assetUrl'

/**
 * Section "Parcours & CV" : assemble Formation, Experience,
 * Recommendation et le bouton de téléchargement du CV.
 */
function Resume() {
  return (
    <section id="resume" className="section section-alt">
      <div className="container">
        <SectionTitle number="04" title="Parcours & CV" />

        <div className="resume-grid">
          <Formation />
          <Experience />
        </div>

        <Recommendation />

        <div className="resume-download">
          <p>Besoin d'une version complète ?</p>

          <a href={assetUrl(SITE.cvFile)} download className="btn btn-primary">
            <Download size={20} aria-hidden="true" />
            Télécharger mon CV (PDF)
          </a>
        </div>
      </div>
    </section>
  )
}

export default memo(Resume)
