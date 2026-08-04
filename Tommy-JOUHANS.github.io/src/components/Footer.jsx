import { memo, useEffect, useState } from 'react'
import { SITE } from '../data/site'

function Footer() {
  const [date, setDate] = useState(() => new Date())

  useEffect(() => {
    const interval = setInterval(() => setDate(new Date()), 1000)
    return () => clearInterval(interval)
  }, [])

  return (
    <footer className="footer">
      <p className="mono">
        Copyright © {date.getDate()}/{date.getMonth() + 1}/{date.getFullYear()}{' '}
        {String(date.getHours()).padStart(2, '0')}:{String(date.getMinutes()).padStart(2, '0')}:
        {String(date.getSeconds()).padStart(2, '0')}, {SITE.name}. Tous droits réservés.
      </p>
    </footer>
  )
}

export default memo(Footer)
