# 📝 Comment Changer le Nom du Site

## Endroits à modifier :

### 1. **Titre de la page (onglet navigateur)**
📁 Fichier : `index.html`
```html
<title>Site de Mariage - Emma & Louis</title>
```
➡️ Remplacez "Emma & Louis" par le nom souhaité

---

### 2. **Nom dans la navigation (en haut)**
📁 Fichier : `src/components/StickyNav.jsx`
Ligne ~65 :
```jsx
Emma & Louis
```
➡️ Remplacez par le nouveau nom

---

### 3. **Nom dans la section Hero (page d'accueil)**
📁 Fichier : `src/components/WeddingSite.jsx`
Ligne ~175 et ~245 :
```jsx
Emma & Louis
```
➡️ Remplacez par le nouveau nom

---

## 🔄 Après modification :

1. **Tester localement** :
```bash
npm run dev
```

2. **Commit et push** :
```bash
git add .
git commit -m "Changement du nom du site"
git push
```

3. **Vercel redéploiera automatiquement** ! 🚀

---

## 💡 Astuce

Si vous voulez changer le nom partout d'un coup, utilisez la fonction "Rechercher et Remplacer" de votre éditeur :
- Rechercher : `Emma & Louis`
- Remplacer par : `Votre Nouveau Nom`

