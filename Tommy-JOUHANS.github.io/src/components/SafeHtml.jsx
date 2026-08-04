import { memo, useMemo } from 'react'
import { sanitizeHtml } from '../utils/sanitize'

/**
 * Rend un fragment HTML de façon sûre.
 * TOUTE utilisation de dangerouslySetInnerHTML dans ce projet doit passer
 * par ce composant : le HTML est systématiquement nettoyé par DOMPurify
 * avant d'être injecté dans le DOM, ce qui élimine tout risque d'injection
 * XSS (balises <script>, gestionnaires on*, liens javascript:, etc.).
 *
 * @param {{ html: string, as?: keyof JSX.IntrinsicElements, className?: string }} props
 */
function SafeHtml({ html, as: Tag = 'div', className }) {
  const clean = useMemo(() => sanitizeHtml(html), [html])

  return <Tag className={className} dangerouslySetInnerHTML={{ __html: clean }} />
}

export default memo(SafeHtml)
