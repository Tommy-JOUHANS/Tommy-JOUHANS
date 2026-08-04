/**
 * Construit une URL fiable vers un fichier du dossier `public/`.
 *
 * Pourquoi ce helper plutôt qu'un chemin en dur ("/profile.jpg") :
 * `import.meta.env.BASE_URL` reflète toujours le `base` configuré dans
 * vite.config.js, aussi bien en dev (`npm run dev`), qu'en build
 * (`npm run build` / `npm run preview`), sur GitHub Pages ou sur un
 * domaine personnalisé (CNAME). Un chemin en dur casse dès que le site
 * n'est pas servi à la racine ; ce helper ne casse jamais.
 *
 * @param {string} path - nom de fichier dans public/ (avec ou sans "/" initial)
 * @returns {string} URL absolue utilisable dans src=, href=, etc.
 */
export function assetUrl(path) {
  if (!path) return ''
  const base = import.meta.env.BASE_URL || '/'
  const cleanBase = base.endsWith('/') ? base : `${base}/`
  const cleanPath = path.startsWith('/') ? path.slice(1) : path
  return `${cleanBase}${cleanPath}`
}

export default assetUrl
