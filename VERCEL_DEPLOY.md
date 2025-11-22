# 🚀 Guide de Déploiement sur Vercel

## Méthode 1 : Via l'interface web (Recommandé - Le plus simple)

### Étape 1 : Créer un compte Vercel
1. Allez sur [vercel.com](https://vercel.com)
2. Cliquez sur **"Sign Up"** (en haut à droite)
3. Choisissez **"Continue with GitHub"**
4. Autorisez Vercel à accéder à votre compte GitHub

### Étape 2 : Importer votre projet
1. Une fois connecté, cliquez sur **"Add New..."** puis **"Project"**
2. Vous verrez la liste de vos repositories GitHub
3. Trouvez **"sitemariageum"** dans la liste
4. Cliquez sur **"Import"** à côté de votre projet

### Étape 3 : Configurer le projet
Vercel détecte automatiquement que c'est un projet Vite/React, donc :
- **Framework Preset** : Vite (détecté automatiquement)
- **Root Directory** : `./` (par défaut)
- **Build Command** : `npm run build` (détecté automatiquement)
- **Output Directory** : `dist` (détecté automatiquement)

**Vous n'avez rien à changer !** Cliquez simplement sur **"Deploy"**

### Étape 4 : Attendre le déploiement
- Le déploiement prend environ 1-2 minutes
- Vous verrez les logs en temps réel
- Une fois terminé, vous aurez une URL : `https://sitemariageum.vercel.app`

### Étape 5 : C'est fait ! 🎉
Votre site est maintenant en ligne !

---

## Méthode 2 : Via la ligne de commande

Si vous préférez utiliser le terminal :

```bash
# Installer Vercel CLI globalement
npm i -g vercel

# Dans votre projet
cd /Users/lena/Desktop/sitemaries

# Lancer le déploiement
vercel

# Suivez les instructions :
# - ? Set up and deploy? Y
# - ? Which scope? (votre compte)
# - ? Link to existing project? N (première fois)
# - ? What's your project's name? sitemariageum
# - ? In which directory is your code located? ./
```

---

## ✨ Déploiement automatique

Une fois connecté à GitHub, **chaque fois que vous poussez du code** :
- Vercel détecte automatiquement les changements
- Redéploie votre site automatiquement
- Vous recevez une notification par email

**C'est magique !** 🪄

---

## 🔗 URLs générées

Après le déploiement, vous aurez :
- **URL de production** : `https://sitemariageum.vercel.app`
- **URL de preview** : Pour chaque commit (optionnel)

---

## 🎨 Personnaliser le domaine (Optionnel)

1. Allez dans les **Settings** de votre projet sur Vercel
2. Section **"Domains"**
3. Ajoutez votre propre domaine si vous en avez un

---

## 📝 Notes importantes

- ✅ Vercel est **gratuit** pour les projets personnels
- ✅ **HTTPS** inclus automatiquement
- ✅ **CDN global** pour des performances optimales
- ✅ Déploiement en **quelques secondes**
- ✅ **Pas de configuration** nécessaire pour Vite/React

---

## 🆘 Besoin d'aide ?

Si vous rencontrez un problème :
1. Vérifiez les logs de build sur Vercel
2. Assurez-vous que `npm run build` fonctionne localement
3. Vérifiez que tous les fichiers sont bien sur GitHub

