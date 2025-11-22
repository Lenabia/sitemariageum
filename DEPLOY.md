# Guide de Déploiement - Site Mariage

## 🚀 Option 1 : Vercel (Recommandé - Le plus simple)

### Méthode 1 : Via l'interface web (Sans code)

1. **Créer un compte** sur [vercel.com](https://vercel.com) (gratuit avec GitHub/Google)

2. **Préparer votre projet** :

   ```bash
   # Assurez-vous que votre code est sur GitHub
   git add .
   git commit -m "Ready for deployment"
   git push origin main
   ```

3. **Déployer** :
   - Allez sur vercel.com
   - Cliquez sur "Add New Project"
   - Importez votre repository GitHub
   - Vercel détecte automatiquement Vite/React
   - Cliquez sur "Deploy"
   - Votre site sera en ligne en 2 minutes ! 🎉

### Méthode 2 : Via la ligne de commande

```bash
# Installer Vercel CLI
npm i -g vercel

# Dans votre projet
cd /Users/lena/Desktop/sitemaries
vercel

# Suivez les instructions
# Votre site sera déployé sur : https://votre-projet.vercel.app
```

### Avantages Vercel :

- ✅ Gratuit pour les projets personnels
- ✅ Déploiement automatique à chaque push Git
- ✅ HTTPS inclus
- ✅ CDN global (rapide partout)
- ✅ URL personnalisée : `votre-site.vercel.app`
- ✅ Domaine personnalisé possible (gratuit)

---

## 🌐 Option 2 : Netlify (Alternative simple)

### Via l'interface web :

1. **Créer un compte** sur [netlify.com](https://netlify.com)

2. **Déployer** :
   - Glisser-déposer le dossier `dist` (après `npm run build`)
   - Ou connecter votre repo GitHub pour déploiement automatique

### Avantages Netlify :

- ✅ Gratuit
- ✅ Très simple
- ✅ Déploiement continu

---

## 📦 Option 3 : GitHub Pages

### Configuration nécessaire :

1. **Installer le plugin** :

   ```bash
   npm install --save-dev gh-pages
   ```

2. **Ajouter dans package.json** :

   ```json
   "scripts": {
     "predeploy": "npm run build",
     "deploy": "gh-pages -d dist"
   }
   ```

3. **Configurer vite.config.js** :

   ```js
   export default defineConfig({
     plugins: [react()],
     base: "/sitemaries/", // Remplacez par le nom de votre repo
   });
   ```

4. **Déployer** :
   ```bash
   npm run deploy
   ```

### Avantages GitHub Pages :

- ✅ Gratuit
- ✅ Intégré à GitHub
- ✅ URL : `votre-username.github.io/sitemaries`

---

## 🔧 Préparation avant déploiement

### 1. Vérifier que tout fonctionne localement :

```bash
# Build de production
npm run build

# Tester le build
npm run preview
```

### 2. Vérifier les variables d'environnement (si nécessaire)

### 3. Optimiser les images (optionnel mais recommandé)

---

## 📝 Checklist avant déploiement

- [ ] Tester le site en local (`npm run dev`)
- [ ] Faire un build (`npm run build`)
- [ ] Tester le build (`npm run preview`)
- [ ] Vérifier que toutes les images se chargent
- [ ] Vérifier les liens externes
- [ ] Tester sur mobile
- [ ] Vérifier la mention "Site de démo" si nécessaire

---

## 🎯 Ma Recommandation

**Utilisez Vercel** car :

1. C'est le plus simple (2 clics)
2. Optimisé pour React/Vite
3. Déploiement automatique
4. Gratuit et performant
5. Support excellent

**URL après déploiement** : `https://votre-projet.vercel.app`

---

## 🔗 Liens utiles

- [Vercel](https://vercel.com)
- [Netlify](https://netlify.com)
- [Documentation Vite - Déploiement](https://vitejs.dev/guide/static-deploy.html)
