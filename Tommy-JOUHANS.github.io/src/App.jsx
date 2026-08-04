import './App.css'
import ErrorBoundary from './components/ErrorBoundary'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Welcome from './components/Welcome'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Resume from './components/Resume'
import Contact from './components/Contact'
import Footer from './components/Footer'

/**
 * App.jsx n'assemble QUE des composants — toute la donnée vit dans src/data/,
 * toute la logique vit dans chaque composant. Chaque section est isolée
 * dans sa propre <ErrorBoundary> : si une section plante, le reste du site
 * (navigation, autres sections, footer) continue de s'afficher normalement.
 */
export default function App() {
  return (
    <>
      <ErrorBoundary name="Navigation">
        <Navbar />
      </ErrorBoundary>

      <main>
        <ErrorBoundary name="Accueil">
          <Hero />
        </ErrorBoundary>

        <ErrorBoundary name="Présentation">
          <Welcome />
        </ErrorBoundary>

        <ErrorBoundary name="À propos">
          <About />
        </ErrorBoundary>

        <ErrorBoundary name="Compétences">
          <Skills />
        </ErrorBoundary>

        <ErrorBoundary name="Projets">
          <Projects />
        </ErrorBoundary>

        <ErrorBoundary name="Parcours & CV">
          <Resume />
        </ErrorBoundary>

        <ErrorBoundary name="Contact">
          <Contact />
        </ErrorBoundary>
      </main>

      <ErrorBoundary name="Footer">
        <Footer />
      </ErrorBoundary>
    </>
  )
}
