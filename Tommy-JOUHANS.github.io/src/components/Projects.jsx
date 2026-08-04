import { memo } from 'react'
import { Lock, Home, Computer, Grape } from 'lucide-react'
import SectionTitle from './SectionTitle'
import { GitHubIcon, ExternalIcon } from './icons'
import { PROJECTS } from '../data/projects'

const PROJECT_ICONS = { Lock, Home, Computer, Grape }

function ProjectCard({ project }) {
  const Icon = PROJECT_ICONS[project.icon]

  return (
    <div className="project-card">
      <div className="project-header">
        <span className="project-emoji" aria-hidden="true">
          {Icon && <Icon size={20} />}
        </span>
        <div className="project-links">
          {project.github && (
            <a href={project.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub" title="Voir sur GitHub">
              <GitHubIcon size={18} />
            </a>
          )}
          {project.demo && (
            <a href={project.demo} target="_blank" rel="noopener noreferrer" aria-label="Démo" title="Voir la démo">
              <ExternalIcon size={18} />
            </a>
          )}
        </div>
      </div>
      <h3 className="project-title">{project.title}</h3>
      {project.note && <span className="project-note">{project.note}</span>}
      <p className="project-desc">{project.description}</p>
      <div className="project-stack">
        {project.stack.map(tech => (
          <span key={tech} className="stack-tag">{tech}</span>
        ))}
      </div>
    </div>
  )
}

function Projects() {
  return (
    <section id="projects" className="section">
      <div className="container">
        <SectionTitle number="03" title="Projets" />
        <div className="projects-grid">
          {PROJECTS.map(project => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default memo(Projects)
