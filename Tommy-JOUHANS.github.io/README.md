# 🚀 Tommy JOUHANS — Portfolio personnel

> Site portfolio déployé sur **GitHub Pages** : [https://Tommy-JOUHANS.github.io](https://Tommy-JOUHANS.github.io)

Stack : **React 18 + Vite** — Style dark & tech

---

## 📦 Installation locale

```bash
# 1. Cloner le repo
git clone https://github.com/Tommy-JOUHANS/Tommy-JOUHANS.github.io.git
cd Tommy-JOUHANS.github.io

# 2. Installer les dépendances
npm install

# 3. Lancer en développement
npm run dev
# → http://localhost:5173
```

---

## 🌍 Déploiement sur GitHub Pages

### Étape 1 — Créer le repo GitHub

Sur GitHub, crée un nouveau dépôt nommé exactement : **`Tommy-JOUHANS.github.io`**

### Étape 2 — Pousser le code

```bash
git init
git add .
git commit -m "feat: portfolio initial"
git branch -M main
git remote add origin https://github.com/Tommy-JOUHANS/Tommy-JOUHANS.github.io.git
git push -u origin main
```

### Étape 3 — Déployer (méthode automatique)

```bash
# Déploie le build dans la branche gh-pages
npm run deploy
```

Cela exécute `vite build` puis pousse le dossier `dist/` vers la branche `gh-pages`.

### Étape 4 — Activer GitHub Pages

1. Va dans **Settings → Pages** de ton repo
2. Source : **Deploy from a branch**
3. Branch : **`gh-pages`** / `/ (root)`
4. Cliquer **Save**

⏱️ Ton site sera en ligne sous **quelques minutes** à l'adresse :
`https://Tommy-JOUHANS.github.io`

---

## 📸 Ajouter ta photo de profil

Copie ta photo dans `/public/` sous le nom **`profile.jpg`** :

```
public/
  profile.jpg   ← ta photo ici (recommandé : 400x400px, format carré)
  favicon.svg
```

---

## 📄 Ajouter ton CV PDF

Copie ton CV dans `/public/` sous le nom **`cv-tommy-jouhans.pdf`** :

```
public/
  cv-tommy-jouhans.pdf   ← ton CV ici
```

Le bouton "Télécharger mon CV" dans la section CV pointe automatiquement vers ce fichier.

---

## 🗂️ Structure du projet

```
Tommy-JOUHANS.github.io/
├── public/
│   ├── favicon.svg
│   ├── profile.jpg        ← à ajouter
│   └── cv-tommy-jouhans.pdf  ← à ajouter
├── src/
│   ├── App.jsx            ← composant principal (toutes les sections)
│   ├── App.css            ← styles du portfolio
│   ├── main.jsx
│   └── index.css          ← variables CSS globales
├── index.html
├── vite.config.js
└── package.json
```

---

## ✏️ Personnaliser le contenu

Tout le contenu est dans **`src/App.jsx`** en haut du fichier :

- `SKILLS` → tes compétences par catégorie
- `PROJECTS` → tes projets (ajouter `github` et `demo` quand dispo)
- Les sections `About`, `Resume`, `Contact` → directement dans les composants

---

## 📚 Ressources

- [Vite Docs](https://vitejs.dev/)
- [React Docs](https://react.dev/)
- [GitHub Pages Docs](https://docs.github.com/en/pages)
- [gh-pages npm package](https://www.npmjs.com/package/gh-pages)
