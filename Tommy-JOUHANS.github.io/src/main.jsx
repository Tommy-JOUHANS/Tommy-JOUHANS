import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import ErrorBoundary from './components/ErrorBoundary.jsx'

const rootElement = document.getElementById('root')

if (!rootElement) {
  throw new Error('Élément #root introuvable dans index.html')
}

const fallback = (
  <div className="error-boundary-page" role="alert">
    <h1>Une erreur est survenue</h1>
    <p>Merci de recharger la page. Si le problème persiste, contactez-moi directement.</p>
    <a className="btn btn-primary" href="mailto:tommy.jouhans@outlook.com">Me contacter</a>
  </div>
)

createRoot(rootElement).render(
  <StrictMode>
    <ErrorBoundary name="Application" fallback={fallback}>
      <App />
    </ErrorBoundary>
  </StrictMode>,
)
