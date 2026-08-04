import { memo, useEffect, useState } from 'react'
import { QR_API } from '../data/site'

function QrStats() {
  const [qrData, setQrData] = useState(null)
  const [error, setError] = useState('')

  useEffect(() => {
    const controller = new AbortController()

    async function loadQrStats() {
      try {
        const response = await fetch(QR_API, {
          method: 'GET',
          headers: { Accept: 'application/json' },
          signal: controller.signal,
        })

        if (!response.ok) {
          throw new Error(`Erreur API HTTP ${response.status}`)
        }

        const data = await response.json()

        setQrData({
          scans: data.scans ?? 0,
          uniqueScans: data.uniqueScans ?? 0,
        })
      } catch (err) {
        // En StrictMode (dev), React monte l'effet, le nettoie (abort), puis
        // le remonte : la 1re requête est annulée par design. Si CETTE
        // requête est celle qui a été annulée, on ne touche à aucun état —
        // sinon on écraserait le résultat de la 2e requête, encore en vol.
        if (err.name === 'AbortError') return

        if (import.meta.env.DEV) {
          // Aide au diagnostic en dev uniquement (jamais en prod) : un échec
          // ici vient quasi toujours d'un blocage CORS côté API tant que
          // l'origine locale (http://localhost:5173) n'est pas autorisée
          // dans CORS_ALLOWED_ORIGINS côté backend Django.
          // eslint-disable-next-line no-console
          console.warn(
            "[QrStats] Échec de récupération des stats QR — si l'erreur mentionne CORS, vérifie que l'origine locale est bien dans CORS_ALLOWED_ORIGINS du backend.",
            err
          )
        }

        setError(err.message)
      }
    }

    loadQrStats()

    return () => controller.abort()
  }, [])

  // On se base sur la présence réelle des données (qrData / error) plutôt
  // que sur un flag "loading" séparé : impossible d'atteindre qrData.scans
  // sur une valeur null, quel que soit l'ordre des mises à jour d'état.
  if (qrData) {
    return (
      <div className="qr-stats-grid">
        <div className="stat-card">
          <span className="stat-value">{qrData.scans}</span>
          <span className="stat-label">Scans QR Code</span>
        </div>

        <div className="stat-card">
          <span className="stat-value">{qrData.uniqueScans}</span>
          <span className="stat-label">Visiteurs uniques</span>
        </div>
      </div>
    )
  }

  if (error) {
    return (
      <div className="qr-stats-grid">
        <div className="stat-card stat-card-error">
          <span className="stat-label">Statistiques temporairement indisponibles</span>
        </div>
      </div>
    )
  }

  return (
    <div className="qr-stats-grid">
      <div className="stat-card">
        <span className="stat-value">...</span>
        <span className="stat-label">Chargement des statistiques</span>
      </div>
    </div>
  )
}

export default memo(QrStats)
