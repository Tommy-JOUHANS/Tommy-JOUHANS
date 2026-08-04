/**
 * `image` référence un fichier du dossier public/ (résolu via assetUrl()
 * dans le composant qui consomme cette donnée) — jamais un chemin en dur.
 */
export const FORMATIONS = [
  {
    id: 'holberton',
    date: '2025 – Présent',
    title: 'Titre RNCP niveau 5 : Développeur web et web mobile',
    place: 'Holberton School France, Dijon',
    image: 'holberton.jpeg',
    imageAlt: 'Certificat Holberton Foundations of Computer Science',
    accent: true,
  },
  {
    id: 'bts-iris',
    date: '2012 – 2015',
    title: "BTS IRIS : Informatique et Réseaux pour l'Industrie",
    place: 'Lycée Fénelon Sainte-Marie, Lons-le-Saunier',
    image: 'bts-iris.jpg',
    imageAlt: 'Diplôme BTS IRIS',
    accent: false,
    // Le fichier source est enregistré pivoté à 90° (portrait) alors que
    // le diplôme est un document paysage : on corrige l'affichage en CSS.
    rotate: 90,
  },
  {
    id: 'bac-pro-sen',
    date: '2009 – 2012',
    title: 'Bac Pro SEN : Systèmes Électroniques et Numériques',
    place: 'Lycée professionnel Saint-Joseph, Bourg-en-Bresse',
    image: 'bac-pro-sen.jpg',
    imageAlt: 'Diplôme Bac Pro SEN',
    accent: false,
    // Même correction : fichier source pivoté à 90°.
    rotate: 90,
  },
]

export default FORMATIONS
