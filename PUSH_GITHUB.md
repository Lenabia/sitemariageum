# Guide pour pousser sur GitHub

## ✅ Étapes déjà faites :
1. ✅ Git initialisé
2. ✅ Fichiers ajoutés
3. ✅ Commit initial créé

## 📋 Prochaines étapes :

### 1. Ajouter le remote GitHub

Remplacez `VOTRE_URL_GITHUB` par l'URL de votre repository :

```bash
git remote add origin VOTRE_URL_GITHUB
```

**Exemples d'URL :**
- `https://github.com/votre-username/sitemaries.git`
- `git@github.com:votre-username/sitemaries.git`

### 2. Vérifier le remote

```bash
git remote -v
```

### 3. Pousser vers GitHub

```bash
# Si votre branche principale s'appelle "main"
git branch -M main
git push -u origin main

# OU si votre branche principale s'appelle "master"
git branch -M master
git push -u origin master
```

## 🔍 Comment trouver l'URL de votre repository ?

1. Allez sur votre repository GitHub
2. Cliquez sur le bouton vert "Code"
3. Copiez l'URL HTTPS ou SSH

## ⚠️ Si vous avez déjà des fichiers sur GitHub :

Si votre repository GitHub n'est pas vide, vous devrez peut-être faire :

```bash
git pull origin main --allow-unrelated-histories
```

Puis résoudre les conflits si nécessaire, et ensuite :

```bash
git push -u origin main
```

