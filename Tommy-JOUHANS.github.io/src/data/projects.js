/**
 * Chaque projet référence une icône par son NOM (string) plutôt que par un
 * élément JSX : ce fichier reste ainsi une donnée pure (.js), sans JSX,
 * et la résolution icône -> composant se fait dans Projects.jsx.
 */
export const PROJECTS = [
  {
    id: 'cyberaudit',
    title: 'CyberAudit & Solutions',
    icon: 'Lock',
    description:
      "Plateforme web de gestion d'audits cybersécurité pour PME/TPE. Authentification JWT, dashboards interactifs et génération automatique de rapports PDF.",
    stack: ['React', 'Django', 'PostgreSQL', 'Python', 'Tailwind CSS', 'Redis', 'Celery'],
    github: 'https://github.com/Tommy-JOUHANS/portfolio',
    demo: null,
    note: null,
  },
  {
    id: 'hbnb',
    title: 'HBnB – Clone AirBnB',
    icon: 'Home',
    description:
      "Application web complète inspirée d'AirBnB, développée en Python. Modèle OOP, persistance JSON, API REST Flask-JWT, frontend HTML/CSS/JS. Projet d'équipe (3 devs).",
    stack: ['Python', 'Flask', 'JWT', 'HTML', 'CSS', 'JavaScript'],
    github: 'https://github.com/Tommy-JOUHANS/holbertonschool-hbnb',
    demo: null,
    note: null,
  },
  {
    id: 'simple-shell',
    title: 'Simple Shell – Interpréteur UNIX',
    icon: 'Computer',
    description:
      'Mini-shell UNIX développé en C : parsing de commandes, gestion des processus (fork/exec), pipes et redirections. Livré en 2 sprints Agile.',
    stack: ['C', 'UNIX', 'Agile'],
    github: 'https://github.com/Thorgalix/holbertonschool-simple_shell',
    demo: null,
    note: null,
  },
  {
    id: 'iot-viticole',
    title: 'Monitoring Viticole IoT',
    icon: 'Grape',
    description:
      "Système IoT de collecte de températures et d'humidité dans 10 caves viticoles. Tableau de bord PHP/Java permettant aux vignerons de réduire les pertes thermiques.",
    stack: ['IoT', 'PHP', 'Java', 'Capteurs'],
    github: null,
    demo: null,
    note: 'Projet BTS – 2014',
  },
]

export default PROJECTS
