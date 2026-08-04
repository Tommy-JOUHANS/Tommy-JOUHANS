/**
 * Données globales du site : identité, navigation, réseaux sociaux,
 * contenu de présentation, bio, etc.
 * Centraliser ces valeurs ici évite les chaînes en dur dispersées dans
 * les composants et facilite toute mise à jour future.
 */

export const SITE = {
  name: 'Tommy JOUHANS',
  greeting: 'Bonjour, je suis',
  role: 'Technicien Informatique et Réseaux (Compétences Dev Junior)',
  tagline:
    "Formé à Holberton School France · Disponible dès maintenant",
  email: 'tommy.jouhans@outlook.com',
  phone: '06.41.26.02.66',
  phoneHref: '+33641260266',
  github: 'https://github.com/Tommy-JOUHANS',
  linkedin: 'https://linkedin.com/in/tommy-jouhans-pro',
  cvFile: 'cv-tommy-jouhans.pdf',
}

// QR_API par défaut si la variable d'environnement VITE_QR_API n'est pas
// définie (elle doit être placée dans un fichier .env à la RACINE du
// projet, jamais dans src/, sinon Vite ne la charge jamais).
export const QR_API =
  import.meta.env.VITE_QR_API ||
  'https://tommy-jouhans-production.up.railway.app/api/qr-stats/'

export const NAV_LINKS = [
  { href: '#article', label: 'Présentation' },
  { href: '#about', label: 'À propos' },
  { href: '#skills', label: 'Compétences' },
  { href: '#projects', label: 'Projets' },
  { href: '#resume', label: 'CV' },
  { href: '#contact', label: 'Contact' },
]

export const SOCIALS = [
  { key: 'github', href: 'https://github.com/Tommy-JOUHANS', label: 'GitHub' },
  { key: 'linkedin', href: 'https://linkedin.com/in/tommy-jouhans-pro', label: 'LinkedIn' },
  { key: 'email', href: 'mailto:tommy.jouhans@outlook.com', label: 'Email' },
]

export const CONTACT_CARDS = [
  {
    key: 'email',
    icon: 'Email',
    href: 'mailto:tommy.jouhans@outlook.com',
    label: 'Email',
    value: 'tommy.jouhans@outlook.com',
    external: false,
  },
  {
    key: 'phone',
    icon: 'Phone',
    href: 'tel:+33641260266',
    label: 'Téléphone',
    value: '06.41.26.02.66',
    external: false,
  },
  {
    key: 'github',
    icon: 'GitHub',
    href: 'https://github.com/Tommy-JOUHANS',
    label: 'GitHub',
    value: 'github.com/Tommy-JOUHANS',
    external: true,
  },
  {
    key: 'linkedin',
    icon: 'LinkedIn',
    href: 'https://linkedin.com/in/tommy-jouhans-pro',
    label: 'LinkedIn',
    value: 'linkedin.com/in/tommy-jouhans-pro',
    external: true,
  },
]

// Contenu riche (liens, gras) rendu via <SafeHtml> + DOMPurify.
export const WELCOME_HTML = [
  `Bienvenue à tous! Je m'appelle Tommy JOUHANS, je suis technicien en informatique et développeur web et mobile! Ici, vous trouverez un aperçu de mes compétences, de mes projets et de mon parcours professionnel. Je suis passionné par le développement web et mobile, et je cherche constamment à améliorer mes compétences et à relever de nouveaux défis.`,
  `N'hésitez pas à parcourir les différentes sections pour en savoir plus sur moi et mes réalisations. Si vous avez des questions ou souhaitez collaborer, n'hésitez pas à me contacter !`,
  `Par exemple, je suis fier de partager que notre portfolio CyberAudit & Solutions vient d'être validé à 87% à Holberton School Dijon !`,
  `Un projet full-stack de A à Z : backend Django/DRF, authentification JWT, génération de rapports PDF avec WeasyPrint + Celery, interface React connectée à une vraie API REST. Un grand merci à <a href="https://www.linkedin.com/in/james-roussel-7311592b9/" target="_blank" rel="noopener noreferrer">James</a> (mon coéquipier) qui a porté ce projet avec moi du début à la fin, ainsi qu'à <a href="https://www.linkedin.com/in/fchavonet/" target="_blank" rel="noopener noreferrer">Fabien</a> (SWE), <a href="https://www.linkedin.com/in/ornella-tobiet/" target="_blank" rel="noopener noreferrer">Ornela</a> (Directrice campus) et <a href="https://www.linkedin.com/in/maneh21/" target="_blank" rel="noopener noreferrer">Maneh</a> (SSM) pour leur accompagnement tout au long de la formation.`,
  `Ce diplôme Holberton ouvre la voie au Titre RNCP 5 dans 3 mois, la suite commence maintenant.`,
  `Vous pouvez consulter mon application web sur <a href="https://portfolio-kappa-dun-65.vercel.app/" target="_blank" rel="noopener noreferrer">CyberAudit & Solutions</a>, et le code source du projet sur <a href="https://github.com/Tommy-JOUHANS/portfolio" target="_blank" rel="noopener noreferrer">Github</a> et découvrir le résultat final ci-dessous.`,
  `<b>#Holberton #Python #Django #React #CyberSecurity #Portfolio #Dev</b>`,
]

export const WELCOME_IMAGE = {
  src: 'portfolio.png',
  alt: 'Resultat Portfolio',
  caption: 'Resultats officiels de notre portfolio à Holberton School Dijon.',
}

// Bio (About) : paragraphes riches (gras + accent) rendus via SafeHtml.
export const ABOUT_HTML = [
  `Développeur web et mobile en formation à <strong>Holberton School France</strong> (Dijon), je possède de solides bases en programmation C, JavaScript ES6, Python, Shell et un fort intérêt pour le domaine de la <span class="accent">Cybersecurité</span> et du <span class="accent">Full-Stack</span>.`,
  `Rigoureux et motivé, j'oriente mon parcours vers le développement de modèles d'apprentissage automatique, l'analyse de données et l'intégration de solutions intelligentes.`,
  `Je recherche une <strong>alternance de deux ans</strong> (dès septembre 2026) pour renforcer mes compétences en Full-Stack et en Cybersecurité, en traitement de données et en déploiement de modèles au sein d'un environnement professionnel innovant. Afin d'avoir une opportunité de travailler au sein d'une équipe dynamique.`,
]

export const ABOUT_DETAILS = [
  { icon: 'Locate', text: 'Chevigny-Saint-Sauveur (21)' },
  { icon: 'GraduationCap', text: 'Holberton School France : Titre RNCP niv. 5' },
  { icon: 'Car', text: 'Permis B' },
  { icon: 'Dumbbell', text: 'Musculation · Randonnée · Jeux vidéo' },
]

export const LANGUAGES = [
  { flag: '🇫🇷', name: 'Français', level: 'C2 – Natif', percent: 100 },
  { flag: '🇬🇧', name: 'Anglais', level: 'B2 – Courant', percent: 75 },
]
