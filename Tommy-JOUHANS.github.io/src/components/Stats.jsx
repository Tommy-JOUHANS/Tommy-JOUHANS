import { memo } from 'react'

/**
 * Grille de statistiques génériques (label + valeur).
 * @param {{ stats: Array<{ label: string, value: string }> }} props
 */
function Stats({ stats }) {
  return (
    <div className="stats-grid">
      {stats.map(stat => (
        <div key={stat.label} className="stat-card">
          <span className="stat-value">{stat.value}</span>
          <span className="stat-label">{stat.label}</span>
        </div>
      ))}
    </div>
  )
}

export default memo(Stats)
