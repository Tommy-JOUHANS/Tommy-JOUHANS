import DOMPurify from 'dompurify'

/**
 * Liste blanche stricte de balises/attributs autorisés.
 * Volontairement minimaliste : uniquement ce dont le contenu du portfolio
 * a besoin (paragraphes, emphase, liens). Tout le reste est retiré.
 */
const ALLOWED_TAGS = ['a', 'b', 'strong', 'em', 'i', 'span', 'br', 'p']
const ALLOWED_ATTR = ['href', 'target', 'rel', 'class']

/**
 * Empêche le "reverse tabnabbing" : tout lien ouvert dans un nouvel onglet
 * doit obligatoirement porter rel="noopener noreferrer".
 * Neutralise également les schémas dangereux (javascript:, data:, vbscript:).
 */
DOMPurify.addHook('afterSanitizeAttributes', node => {
  if (node.tagName === 'A') {
    if (node.getAttribute('target') === '_blank') {
      node.setAttribute('rel', 'noopener noreferrer')
    }

    const href = node.getAttribute('href') || ''
    if (/^\s*(javascript|data|vbscript):/i.test(href)) {
      node.removeAttribute('href')
    }
  }
})

/**
 * Sanitize une chaîne HTML avant tout rendu via dangerouslySetInnerHTML.
 * Retourne toujours une chaîne sûre, jamais null/undefined.
 *
 * @param {string} dirty - HTML brut, potentiellement non sûr
 * @returns {string} HTML nettoyé, prêt à être injecté dans le DOM
 */
export function sanitizeHtml(dirty) {
  if (typeof dirty !== 'string' || dirty.length === 0) return ''

  return DOMPurify.sanitize(dirty, {
    ALLOWED_TAGS,
    ALLOWED_ATTR,
    ALLOW_DATA_ATTR: false,
    USE_PROFILES: { html: true },
  })
}

export default sanitizeHtml
