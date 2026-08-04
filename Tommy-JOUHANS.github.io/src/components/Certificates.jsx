import { memo } from 'react'
import { assetUrl } from '../utils/assetUrl'
import { ExternalIcon } from './icons'

/**
 * Liste des certifications IBM. Quand une certification possède un
 * justificatif (`file`), un lien permet de l'ouvrir dans un nouvel onglet.
 */
function Certificates({ certifications }) {
  return (
    <ul className="cert-list">
      {certifications.map(cert => (
        <li key={cert.id}>
          <span className="cert-badge">IBM</span> {cert.label.replace('IBM – ', '').replace('IBM - ', '')}
          {cert.file && (
            <a
              href={assetUrl(cert.file)}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Voir le justificatif : ${cert.label}`}
              title="Voir le certificat"
              style={{ marginLeft: '0.5rem', display: 'inline-flex', verticalAlign: 'middle' }}
            >
              <ExternalIcon size={14} />
            </a>
          )}
        </li>
      ))}
    </ul>
  )
}

export default memo(Certificates)
