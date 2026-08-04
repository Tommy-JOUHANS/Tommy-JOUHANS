import { Component } from 'react'

/**
 * Filet de sécurité React : si un composant enfant plante au rendu,
 * seul le fragment protégé par CETTE instance affiche un message
 * de repli — le reste du site (Navbar, autres sections, Footer...)
 * continue de fonctionner normalement.
 *
 * Usage : chaque section de App.jsx est entourée de sa propre
 * <ErrorBoundary>, donc une erreur dans "Projets" n'affecte jamais
 * "Contact" ou "Footer".
 */
class ErrorBoundary extends Component {
  constructor(props) {
    super(props)
    this.state = { hasError: false }
    this.handleRetry = this.handleRetry.bind(this)
  }

  static getDerivedStateFromError() {
    return { hasError: true }
  }

  componentDidCatch(error, info) {
    if (import.meta.env.DEV) {
      // Visible uniquement en développement, jamais en production.
      // eslint-disable-next-line no-console
      console.error(`[ErrorBoundary${this.props.name ? `:${this.props.name}` : ''}]`, error, info)
    }
  }

  handleRetry() {
    this.setState({ hasError: false })
  }

  render() {
    if (this.state.hasError) {
      if (this.props.fallback) return this.props.fallback

      return (
        <div role="alert" className="error-boundary-fallback">
          <p>
            {this.props.name
              ? `La section « ${this.props.name} » n'a pas pu s'afficher.`
              : "Cette section n'a pas pu s'afficher."}
          </p>
          <button type="button" className="btn btn-outline" onClick={this.handleRetry}>
            Réessayer
          </button>
        </div>
      )
    }

    return this.props.children
  }
}

export default ErrorBoundary
