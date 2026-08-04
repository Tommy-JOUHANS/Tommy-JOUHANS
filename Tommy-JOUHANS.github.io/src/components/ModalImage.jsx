import { memo, useCallback, useEffect, useState } from 'react'
import { assetUrl } from '../utils/assetUrl'

/**
 * Miniature cliquable qui s'agrandit dans une modale plein écran.
 * Fond noir, fermeture via ESC, fermeture via clic à l'extérieur de
 * l'image, responsive. Utilisé pour le diplôme, la lettre de
 * recommandation et les certificats.
 *
 * @param {{ src: string, alt: string, caption?: string, rotate?: number }} props
 *   `src` est un nom de fichier dans public/ (résolu via assetUrl()).
 *   `rotate` (0, 90, 180 ou 270) corrige à l'affichage un fichier source
 *   enregistré pivoté (photo/scan mal orienté), sans jamais toucher au
 *   fichier binaire original.
 */
function ModalImage({ src, alt, caption = 'Cliquer pour agrandir', rotate = 0 }) {
  const [open, setOpen] = useState(false)
  const url = assetUrl(src)

  const close = useCallback(() => setOpen(false), [])

  useEffect(() => {
    if (!open) return undefined

    function handleKeyDown(event) {
      if (event.key === 'Escape') close()
    }

    document.addEventListener('keydown', handleKeyDown)
    document.body.style.overflow = 'hidden'

    return () => {
      document.removeEventListener('keydown', handleKeyDown)
      document.body.style.overflow = ''
    }
  }, [open, close])

  if (!src) return null

  const isRotated = rotate % 360 !== 0

  return (
    <>
      <button
        type="button"
        className="timeline-image-button"
        onClick={() => setOpen(true)}
        aria-label={`Agrandir : ${alt}`}
      >
        {isRotated ? (
          <span className="timeline-image-rotate-frame">
            <img
              src={url}
              alt={alt}
              className="timeline-image-rotate-frame-img"
              loading="lazy"
              decoding="async"
              style={{ transform: `translate(-50%, -50%) rotate(${rotate}deg)` }}
            />
          </span>
        ) : (
          <img src={url} alt={alt} className="timeline-image" loading="lazy" decoding="async" />
        )}
        <span className="timeline-image-caption">{caption}</span>
      </button>

      {open && (
        <div
          className="image-modal"
          role="dialog"
          aria-modal="true"
          aria-label={alt}
          onClick={close}
        >
          <button type="button" className="image-modal-close" onClick={close} aria-label="Fermer l'image">
            ×
          </button>

          {isRotated ? (
            <div className="image-modal-rotate-frame" onClick={event => event.stopPropagation()}>
              <img
                src={url}
                alt={alt}
                className="image-modal-rotate-frame-img"
                style={{ transform: `translate(-50%, -50%) rotate(${rotate}deg)` }}
              />
            </div>
          ) : (
            <img
              src={url}
              alt={alt}
              className="image-modal-content"
              onClick={event => event.stopPropagation()}
            />
          )}
        </div>
      )}
    </>
  )
}

export default memo(ModalImage)
