/**
 * `file`, quand présent, référence un justificatif dans public/ (PDF)
 * consultable en un clic — s'appuie sur le fichier déjà fourni
 * public/certificate-agile.pdf.
 */
export const CERTIFICATIONS = [
  { id: 'agile', label: 'IBM – Agile Fundamentals', file: 'certificate-agile.pdf' },
  { id: 'sql', label: 'IBM – SQL', file: null },
  { id: 'project-mgmt', label: 'IBM – Project Management', file: null },
  { id: 'cloud', label: 'IBM – Cloud Computing', file: null },
  { id: 'cybersec-fundamentals', label: 'IBM – Cybersecurity Fundamentals', file: null },
  { id: 'open-source', label: 'IBM – Open-Source Software', file: null },
  { id: 'cybersec', label: 'IBM – Cybersecurity', file: null },
  { id: 'docker', label: 'IBM - Containerization with Docker', file: null },
  { id: 'kubernetes', label: 'IBM - Kubernetes', file: null },
]

export default CERTIFICATIONS
