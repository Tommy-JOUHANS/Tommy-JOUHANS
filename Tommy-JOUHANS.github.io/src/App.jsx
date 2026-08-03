import { useState, useEffect } from 'react'
import './App.css'
import { Lock, Phone } from 'lucide-react'
import { Home } from 'lucide-react'
import { Computer } from 'lucide-react'
import { Grape } from 'lucide-react'
import { Briefcase } from 'lucide-react'
import { GraduationCap } from 'lucide-react'
import { Download } from 'lucide-react'
import { Locate } from 'lucide-react'
import { Car } from 'lucide-react'
import { Dumbbell } from 'lucide-react'


// ─── DONNÉES ─────────────────────────────────────────────────────────────────

const SKILLS = {
  'Langages': ['C', 'C#', 'C++', 'Python', 'PHP', 'Java', 'JavaScript'],
  'Web': ['HTML', 'CSS', 'React', 'TypeScript', 'Node.js'],
  'Frameworks': ['Flask', 'Django', 'Tailwind CSS'],
  'Bases de données': ['PostgreSQL', 'MySQL', 'SQLite', 'MongoDB'],
  'DevOps & Outils': ['Docker', 'Git', 'GitHub', 'Linux', 'VS Code'],
  'Méthodes': ['Agile / Scrum', 'MVP', 'REST API', 'JWT Auth'],
}

const PROJECTS = [
  {
    title: 'CyberAudit & Solutions',
    emoji: <Lock size={20} />,
    description:
      'Plateforme web de gestion d\'audits cybersécurité pour PME/TPE. Authentification JWT, dashboards interactifs et génération automatique de rapports PDF.',
    stack: ['React', 'Django', 'PostgreSQL', 'Python', 'Tailwind CSS', 'Redis', 'Celery'],
    github: 'https://github.com/Tommy-JOUHANS/portfolio',
    demo: null,
  },
  {
    title: 'HBnB – Clone AirBnB',
    emoji: <Home size={20} />,
    description:
      'Application web complète inspirée d\'AirBnB, développée en Python. Modèle OOP, persistance JSON, API REST Flask-JWT, frontend HTML/CSS/JS. Projet d\'équipe (3 devs).',
    stack: ['Python', 'Flask', 'JWT', 'HTML', 'CSS', 'JavaScript'],
    github: 'https://github.com/Tommy-JOUHANS/holbertonschool-hbnb',
    demo: null,
  },
  {
    title: 'Simple Shell – Interpréteur UNIX',
    emoji: <Computer size={20} />,
    description:
      'Mini-shell UNIX développé en C : parsing de commandes, gestion des processus (fork/exec), pipes et redirections. Livré en 2 sprints Agile.',
    stack: ['C', 'UNIX', 'Agile'],
    github: 'https://github.com/Thorgalix/holbertonschool-simple_shell',
    demo: null,
  },
  {
    title: 'Monitoring Viticole IoT',
    emoji: <Grape size={20} />,
    description:
      'Système IoT de collecte de températures et d\'humidité dans 10 caves viticoles. Tableau de bord PHP/Java permettant aux vignerons de réduire les pertes thermiques.',
    stack: ['IoT', 'PHP', 'Java', 'Capteurs'],
    github: null,
    demo: null,
    note: 'Projet BTS – 2014',
  },
]

const CERTIFICATIONS = [
  'IBM – Agile Fundamentals',
  'IBM – SQL',
  'IBM – Project Management',
  'IBM – Cloud Computing',
  'IBM – Cybersecurity Fundamentals',
  'IBM – Open-Source Software',
  'IBM – Cybersecurity',
  'IBM - Containerization with Docker',
  'IBM - Kubernetes',
  
  
]

const QR_API =
  'https://tommy-jouhans-production.up.railway.app/api/qr-stats/'

const STATS = [
  { label: 'Projets réalisés', value: '4+' },
  { label: 'Technologies utilisées', value: '20+' },
  { label: 'Projet validé', value: '87%' },
  { label: 'Certifications IBM', value: '9' },
]

const ACHIEVEMENTS = [
  'Projet CyberAudit & Solutions validé à 87% à Holberton School',
  'Développement complet d’une application full-stack React + Django',
  'Mise en place d’authentification JWT et génération de rapports PDF',
  'Travail en équipe sur plusieurs projets Agile / Scrum',
]
// ─── COMPOSANTS ──────────────────────────────────────────────────────────────

function Navbar({ activeSection }) {
  const [menuOpen, setMenuOpen] = useState(false)

  const links = [
    {href: '#article', label: 'Présentation' },
    { href: '#about', label: 'À propos' },
    { href: '#skills', label: 'Compétences' },
    { href: '#projects', label: 'Projets' },
    { href: '#resume', label: 'CV' },
    { href: '#contact', label: 'Contact' },
  ]

  return (
    <nav className="navbar">
      <div className="navbar-inner">
        <a href="#hero" className="navbar-logo">
          <span className="mono">&lt;</span>Tommy JOUHANS<span className="mono">/&gt;</span>
        </a>
        <button
          className={`menu-toggle ${menuOpen ? 'open' : ''}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Menu"
        >
          <span /><span /><span />
        </button>
        <ul className={`navbar-links ${menuOpen ? 'open' : ''}`}>
          {links.map(({ href, label }) => (
            <li key={href}>
              <a
                href={href}
                className={activeSection === href.slice(1) ? 'active' : ''}
                onClick={() => setMenuOpen(false)}
              >
                {label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  )
}

function Hero() {
  const [typed, setTyped] = useState('')
  const fullText = 'Technicien Informatique et Réseaux (Compétences Dev Junior)'

  useEffect(() => {
    let i = 0
    const timer = setInterval(() => {
      if (i < fullText.length) {
        setTyped(fullText.slice(0, i + 1))
        i++
      } else {
        clearInterval(timer)
      }
    }, 60)
    return () => clearInterval(timer)
  }, [])

  return (
    <section id="hero" className="hero">
      <div className="hero-bg-grid" />
      <div className="hero-content">
        {/* Photo placeholder — remplace src par ton image */}
        <div className="hero-avatar">
          <img
            src={`${import.meta.env.BASE_URL}profile.jpg`}
            alt="Tommy JOUHANS"
            onError={e => {
              e.target.style.display = 'none'
              e.target.nextSibling.style.display = 'flex'
            }}
          />
          <div className="avatar-placeholder" style={{ display: 'none' }}>TommyJOUHANS</div>
        </div>

        <div className="hero-text">
          <p className="hero-greeting mono">Bonjour, je suis</p>
          <h1 className="hero-name">Tommy <span className="accent">JOUHANS</span></h1>
          <h2 className="hero-role">
            <span className="typed">{typed}</span>
            <span className="cursor">|</span>
          </h2>
          <p className="hero-tagline">
            En formé à <span className="accent">Holberton School France</span> · Disponible dès <strong>maintenant</strong>
          </p>



          <div className="hero-cta">
            <a href="#projects" className="btn btn-primary">Voir mes projets</a>
            <a href="#contact" className="btn btn-outline">Me contacter</a>
          </div>
          <div className="hero-socials">
            <a href="https://github.com/Tommy-JOUHANS" target="_blank" rel="noopener" aria-label="GitHub">
              <GitHubIcon />
            </a>
            <a href="https://linkedin.com/in/tommy-jouhans-pro" target="_blank" rel="noopener" aria-label="LinkedIn">
              <LinkedInIcon />
            </a>
            <a href="mailto:tommy.jouhans@outlook.com" aria-label="Email">
              <EmailIcon />
            </a>
          </div>
        </div>
      </div>

    </section>
  )
}

function QrStats() {
  const [qrData, setQrData] = useState(null)
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const controller = new AbortController()

    async function loadQrStats() {
      try {
        console.log('API QR utilisée :', QR_API)

        const response = await fetch(QR_API, {
          method: 'GET',
          headers: {
            Accept: 'application/json',
          },
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
        if (err.name !== 'AbortError') {
          console.error('Erreur QR :', err)
          setError(err.message)
        }
      } finally {
        setLoading(false)
      }
    }

    loadQrStats()

    return () => controller.abort()
  }, [])

  if (loading) {
    return (
      <div className="qr-stats-grid">
        <div className="stat-card">
          <span className="stat-value">...</span>
          <span className="stat-label">Chargement des statistiques</span>
        </div>
      </div>
    )
  }

  if (error) {
    return (
      <div className="qr-stats-grid">
        <div className="stat-card stat-card-error">
          <span className="stat-label">
            Statistiques temporairement indisponibles
          </span>
        </div>
      </div>
    )
  }

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

function About() {
  return (
    <section id="about" className="section">
      <div className="container">
        <SectionTitle number="01" title="À propos" />
        <div className="about-grid">
          <div className="about-text">
            <p>
              Développeur web et mobile en formation à <strong>Holberton School France</strong> (Dijon),
              je possède de solides bases en programmation  C, JavaScript ES6, Python, Shell  et
              un fort intérêt pour le domaine de la <span className="accent">Cybersecurité</span> et du <span className="accent">Full-Stack</span>.
            </p>
            <p>
              Rigoureux et motivé, j'oriente mon parcours vers le développement de modèles
              d'apprentissage automatique, l'analyse de données et l'intégration de solutions
              intelligentes.
            </p>
            <p>
              Je recherche une <strong>alternance de deux ans</strong> (dès septembre 2026) pour renforcer
              mes compétences en Full-Stack et en Cybersecurité, en traitement de données et en déploiement de modèles
              au sein d'un environnement professionnel innovant. Afin d'avoir une opportunité de travailler au sein d'une équipe dynamique.
            </p>

            <div className="about-details">
              <div className="detail-item">
                <span className="mono accent"><Locate /></span>
                <span>Chevigny-Saint-Sauveur (21)</span>
              </div>
                            
              <div className="detail-item">
                <span className="mono accent"><GraduationCap /></span>
                <span>Holberton School France : Titre RNCP niv. 5</span>
              </div>
              <div className="detail-item">
                <span className="mono accent"><Car /></span>
                <span>Permis B</span>
              </div>
              <div className="detail-item">
                <span className="mono accent"><Dumbbell /></span>
                <span>Musculation · Randonnée · Jeux vidéo</span>
              </div>
            </div>
            
          </div>
          {/* Résultats chiffrés */}
              <div className="profile-stats">
                <h3 className="subsection-title">Résultats chiffrés</h3>
                <div className="stats-grid">
                  {STATS.map(stat => (
                    <div key={stat.label} className="stat-card">
                      <span className="stat-value">{stat.value}</span>
                      <span className="stat-label">{stat.label}</span>
                    </div>
                    
                  ))}
                  
                </div>
                <QrStats />
              </div>

              {/* Réalisations concrètes */}
              <div className="profile-achievements">
                <h3 className="subsection-title">Réalisations concrètes</h3>
                <ul className="achievement-list">
                  {ACHIEVEMENTS.map(item => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>

          <div className="about-langs">
            <h3 className="subsection-title">Langues</h3>
            <div className="lang-item">
              <span>🇫🇷 Français</span>
              <div className="lang-bar">
                <div className="lang-fill" style={{ width: '100%' }}>C2 – Natif</div>
              </div>
            </div>
            <div className="lang-item">
              <span>🇬🇧 Anglais</span>
              <div className="lang-bar">
                <div className="lang-fill" style={{ width: '75%' }}>B2 – Courant</div>
              </div>
            </div>

            <h3 className="subsection-title" style={{ marginTop: '2rem' }}>Certifications IBM 2026</h3>
            <ul className="cert-list">
              {CERTIFICATIONS.map(c => (
                <li key={c}>
                  <span className="cert-badge">IBM</span> {c.replace('IBM – ', '')}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}

function Welcome() {
  return (
    <section id="article" className="section section-alt">
      <div className="container">
        <SectionTitle number="00" title="Présentation" />
        <div className="article-content">
          <p>
            Bienvenue à tous! Je m'appelle Tommy JOUHANS, je suis technicien en informatique et développeur web et mobile! Ici, vous trouverez un aperçu de mes compétences, de mes projets et de mon parcours professionnel. 
            Je suis passionné par le développement web et mobile, et je cherche constamment à améliorer mes compétences et à relever de nouveaux défis.
          </p>
          <p>
            N'hésitez pas à parcourir les différentes sections pour en savoir plus sur moi et mes réalisations. 
            Si vous avez des questions ou souhaitez collaborer, n'hésitez pas à me contacter !
          </p>
          <p>
            Par exemple, je suis fier de partager que notre portfolio CyberAudit & Solutions vient d'être validé à 87% à Holberton School Dijon !
          </p>
          <p>
            Un projet full-stack de A à Z : backend Django/DRF, authentification JWT, génération de rapports PDF avec WeasyPrint + Celery, interface React connectée à une vraie API REST.
            Un grand merci à <a href="https://www.linkedin.com/in/james-roussel-7311592b9/" target="_blank" rel="noopener">James</a> (mon coéquipier) qui a porté ce projet avec moi du début à la fin, ainsi qu'à <a href="https://www.linkedin.com/in/fchavonet/" target="_blank" rel="noopener">Fabien</a> (SWE),  
            <a href="https://www.linkedin.com/in/ornella-tobiet/" target="_blank" rel="noopener"> Ornela</a> (Directrice campus) et <a href="https://www.linkedin.com/in/maneh21/" target="_blank" rel="noopener">Maneh</a> (SSM) pour leur accompagnement tout au long de la formation.
          </p>
          <p>
            Ce diplôme Holberton ouvre la voie au Titre RNCP 5 dans 3 mois, la suite commence maintenant.
            
          </p>
          
          <p>
            Vous pouvez consulter mon application web sur <a href="https://portfolio-kappa-dun-65.vercel.app/" target="_blank" rel="noopener">CyberAudit & Solutions</a>,
            et le code source du projet sur <a href="https://github.com/Tommy-JOUHANS/portfolio" target="_blank" rel="noopener">Github</a> et découvrir le résultat final ci-dessous.
          </p>
          
          <p>
            <b>#Holberton #Python #Django #React #CyberSecurity #Portfolio #Dev</b>
          </p>
          <img src={`${import.meta.env.BASE_URL}portfolio.png`} 
          alt="Resultat Portfolio"
          style={{
          width: "100%",
          borderRadius: "10px",
          margin: "20px 0",
        }} />
        <p>Resultats officiels de notre portfolio à Holberton School Dijon.</p>
          
        </div>
      </div>
    </section>
  )
}

function Skills() {
  return (
    <section id="skills" className="section section-alt">
      <div className="container">
        <SectionTitle number="02" title="Compétences" />
        <div className="skills-grid">
          {Object.entries(SKILLS).map(([category, items]) => (
            <div key={category} className="skill-card">
              <h3 className="skill-category">{category}</h3>
              <div className="skill-tags">
                {items.map(skill => (
                  <span key={skill} className="skill-tag">{skill}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function Projects() {
  return (
    <section id="projects" className="section">
      <div className="container">
        <SectionTitle number="03" title="Projets" />
        <div className="projects-grid">
          {PROJECTS.map(project => (
            <ProjectCard key={project.title} project={project} />
          ))}
        </div>
      </div>
    </section>
  )
}

function ProjectCard({ project }) {
  return (
    <div className="project-card">
      <div className="project-header">
        <span className="project-emoji">{project.emoji}</span>
        <div className="project-links">
          {project.github && (
            <a href={project.github} target="_blank" rel="noopener" aria-label="GitHub" title="Voir sur GitHub">
              <GitHubIcon size={18} />
            </a>
          )}
          {project.demo && (
            <a href={project.demo} target="_blank" rel="noopener" aria-label="Démo" title="Voir la démo">
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



function Resume() {
  return (
    <section id="resume" className="section section-alt">
      <div className="container">
        <SectionTitle number="04" title="Parcours & CV" />
        <div className="resume-grid">
          <div className="timeline-col">
            <h3 className="timeline-heading"><GraduationCap size={20} /> Formation</h3>
            <div className="timeline">
              <TimelineItem
                date="2025 – Présent"
                title="Titre RNCP niveau 5 : Développeur web et web mobile"
                place="Holberton School France, Dijon"
                accent
              />

              <TimelineItem
                date="2012 – 2015"
                title="BTS IRIS : Informatique et Réseaux pour l'Industrie"
                place="Lycée Fénelon Sainte-Marie, Lons-le-Saunier"
                image={`${import.meta.env.BASE_URL}bts_iris.jpg`}
              />
              <TimelineItem
                date="2009 – 2012"
                title="Bac Pro SEN : Systèmes Électroniques et Numériques"
                place="Lycée professionnel Saint-Joseph, Bourg-en-Bresse"
                image={`${import.meta.env.BASE_URL}bac_pro_sen.jpg`}
              />
            </div>
          </div>

          <div className="timeline-col">
            <h3 className="timeline-heading"><Briefcase size={20} /> Expériences</h3>
            <div className="timeline">
              <TimelineItem
                date="Oct. 2025 – Présent"
                title="Développeur web et web mobile en formation"
                place="Holberton School France, Dijon"
                accent
              />
              <TimelineItem
                date="Jul. – Sept. 2025"
                title="Technicien maintenance et recyclage informatique"
                place="Micronov, Bourg-en-Bresse"
              />
              <TimelineItem
                date="Sept. 2015 - Juin 2025"
                title="Technicien informatique à distance (Support et maintenance)"
                place="Autogrill au site d’Arlay (A39), rattaché au siège social de Marseille (télétravail)"
              />
              <TimelineItem
                date="2010 – 2013"
                title="Technicien support et maintenance (Stages Bac Pro)"
                place="Grand Bourg Habitat, Préfecture de l'Ain, SDIS 01, Dynacité, Centre Hospitalier de Bourg-en-Bresse"
              />
            </div>
          </div>
        </div>

        <div className="resume-download">
          <p>Besoin d'une version complète ?</p>
          {/* Place ton CV PDF dans /public/cv-tommy-jouhans.pdf */}
          <a href={`${import.meta.env.BASE_URL}cv-tommy-jouhans.pdf`} download className="btn btn-primary">
            <Download /> Télécharger mon CV (PDF)
          </a>
        </div>
      </div>
    </section>
  )
}


function TimelineItem({ date, title, place, accent, image }) {
  const [zoom, setZoom] = useState(false)

  return (
    <div className={`timeline-item ${accent ? 'timeline-accent' : ''}`}>
      <span className="timeline-date mono">{date}</span>
      <strong className="timeline-title">{title}</strong>
      <span className="timeline-place">{place}</span>

      {image && (
        <img
          src={image}
          alt={title}
          onClick={() => setZoom(true)}
          style={{
            width: 200,
            transform: 'rotate(90deg)',
            marginLeft: 40,
            cursor: 'zoom-in',
          }}
        />
      )}

      {zoom && (
        <div
          onClick={() => setZoom(false)}
          style={{
            position: 'fixed',
            inset: 0,
            background: 'rgba(0,0,0,0.85)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            zIndex: 1000,
            cursor: 'zoom-out',
          }}
        >
          <img
            src={image}
            alt={title}
            style={{
              maxWidth: '90vw',
              maxHeight: '90vh',
              transform: 'rotate(90deg)',
            }}
          />
        </div>
      )}
    </div>
  )
}

function Contact() {
  return (
    <section id="contact" className="section">
      <div className="container">
        <SectionTitle number="05" title="Contact" />
        <div className="contact-wrapper">
          <p className="contact-intro">
            Tu as un projet, une opportunité d'alternance ou simplement envie d'échanger ?
            N'hésite pas à me contacter !
          </p>
          <div className="contact-cards">
            <a href="mailto:tommy.jouhans@outlook.com" className="contact-card">
              <EmailIcon size={28} />
              <div>
                <strong>Email</strong>
                <span>tommy.jouhans@outlook.com</span>
              </div>
            </a>
            <a href="tel:0641260266" className="contact-card">
              <Phone size={28} />
              <div>
                <strong>Téléphone</strong>
                <span>06.41.26.02.66</span>
              </div>
            </a>
            <a href="https://github.com/Tommy-JOUHANS" target="_blank" rel="noopener" className="contact-card">
              <GitHubIcon size={28} />
              <div>
                <strong>GitHub</strong>
                <span>github.com/Tommy-JOUHANS</span>
              </div>
            </a>
            <a href="https://linkedin.com/in/tommy-jouhans-pro" target="_blank" rel="noopener" className="contact-card">
              <LinkedInIcon size={28} />
              <div>
                <strong>LinkedIn</strong>
                <span>linkedin.com/in/tommy-jouhans-pro</span>
              </div>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

function Footer() {
  const [date, setDate] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setDate(new Date());
    }, 1000); // Mise à jour chaque seconde

    return () => clearInterval(interval);
  }, []);
  return (
    
    <footer className="footer">
      <p className="mono" >
       Copyright ©{" "}
      {date.getDate()}/
      {date.getMonth() + 1}/
      {date.getFullYear()}{" "}
      {String(date.getHours()).padStart(2, "0")}:
      {String(date.getMinutes()).padStart(2, "0")}:
      {String(date.getSeconds()).padStart(2, "0")},
      Tommy JOUHANS. Tous droits réservés.

      </p>

    </footer>
  )
}

// ─── HELPERS ─────────────────────────────────────────────────────────────────

function SectionTitle({ number, title }) {
  return (
    <div className="section-title">
      <span className="section-number mono">{number}.</span>
      <h2>{title}</h2>
      <div className="title-line" />
    </div>
  )
}

function GitHubIcon({ size = 20 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z"/>
    </svg>
  )
}

function LinkedInIcon({ size = 20 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
    </svg>
  )
}

function EmailIcon({ size = 20 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="4" width="20" height="16" rx="2"/>
      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>
    </svg>
  )
}

function ExternalIcon({ size = 18 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/>
      <polyline points="15 3 21 3 21 9"/>
      <line x1="10" y1="14" x2="21" y2="3"/>
    </svg>
  )
}

// ─── APP ─────────────────────────────────────────────────────────────────────

export default function App() {
  const [activeSection, setActiveSection] = useState('hero')

  useEffect(() => {
    const sections = document.querySelectorAll('section[id]')
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) setActiveSection(entry.target.id)
        })
      },
      { rootMargin: '-40% 0px -40% 0px' }
    )
    sections.forEach(s => observer.observe(s))
    return () => observer.disconnect()
  }, [])

  return (
    <>
      <Navbar activeSection={activeSection} />
      <main>
        <Hero />
        <Welcome />
        <About />
        <Skills />
        <Projects />
        <Resume />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
