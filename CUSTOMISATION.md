# Guide de Personnalisation

Ce guide vous explique comment personnaliser le site pour chaque couple de mariés.

## 🎨 Modifications Rapides

### 1. Changer les noms des mariés

**Fichier :** `src/components/WeddingSite.jsx`

Recherchez et remplacez toutes les occurrences de :
- `"Emma & Louis"` → Vos noms
- `"Emma"` → Prénom de la mariée
- `"Louis"` → Prénom du marié

### 2. Modifier les photos

**Fichier :** `src/components/WeddingSite.jsx`

Dans le tableau `timelineStories`, remplacez les URLs `image` :

```jsx
{
  title: "La Rencontre",
  date: "15 Mars 2019",
  image: "VOTRE_URL_IMAGE_ICI", // ← Remplacez ici
  story: "...",
  color: "from-rose-400 to-pink-500"
}
```

**Pour la photo d'ouverture :**
- Ligne avec `backgroundImage: 'url(...)'` → Remplacez par votre photo principale

**Conseil :** Utilisez des images optimisées (WebP, max 2MB) pour de meilleures performances.

### 3. Personnaliser les histoires

**Fichier :** `src/components/WeddingSite.jsx`

Modifiez le tableau `timelineStories` :

```jsx
const timelineStories = [
  {
    title: "Votre titre",        // Ex: "Notre Première Rencontre"
    date: "Votre date",           // Ex: "14 Juillet 2020"
    image: "URL_IMAGE",
    story: "Votre histoire...",   // Votre texte personnalisé
    color: "from-rose-400 to-pink-500" // Couleur du gradient
  },
  // Ajoutez autant d'étapes que vous voulez
];
```

### 4. Changer les couleurs

**Fichier :** `src/components/WeddingSite.jsx`

Les couleurs utilisent les classes Tailwind. Exemples :

- **Ambre/Doré** : `amber-400`, `amber-500` (actuel)
- **Rose** : `rose-400`, `rose-500`
- **Bleu** : `blue-400`, `blue-500`
- **Violet** : `violet-400`, `violet-500`
- **Vert** : `emerald-400`, `emerald-500`

Recherchez `amber-` et remplacez par votre couleur préférée.

## ➕ Ajouter de nouvelles sections

### Exemple : Ajouter la section Invitations

1. **Le composant existe déjà** : `src/components/InvitationsSection.jsx`

2. **Importez-le dans WeddingSite.jsx** :

```jsx
import InvitationsSection from './InvitationsSection';
```

3. **Ajoutez-le dans le JSX**, par exemple après la section Timeline :

```jsx
{/* Timeline Section */}
<div className="relative py-20...">
  {/* ... contenu timeline ... */}
</div>

{/* Invitations Section - NOUVEAU */}
<InvitationsSection />

{/* Future Sections */}
<div className="py-20...">
  {/* ... */}
</div>
```

### Créer une nouvelle section

1. **Créez un nouveau fichier** : `src/components/MaNouvelleSection.jsx`

```jsx
import React from 'react';

const MaNouvelleSection = () => {
  return (
    <div className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="font-serif text-5xl text-center mb-8">
          Ma Nouvelle Section
        </h2>
        {/* Votre contenu ici */}
      </div>
    </div>
  );
};

export default MaNouvelleSection;
```

2. **Importez et utilisez** dans `WeddingSite.jsx`

## 📸 Section Galerie Photos

Pour ajouter une galerie avec lightbox, vous pouvez utiliser une bibliothèque comme `react-image-gallery` ou créer votre propre composant.

## 🎬 Intégrer une vidéo

Pour le film du mariage, vous pouvez :

1. **YouTube/Vimeo** : Utiliser un iframe
2. **Fichier vidéo local** : Utiliser la balise `<video>`

Exemple dans le bouton "Voir le Film" :

```jsx
<button onClick={() => {
  // Ouvrir une modal avec la vidéo
  window.open('URL_VIDEO_YOUTUBE', '_blank');
}}>
  <Video className="w-5 h-5" />
  Voir le Film
</button>
```

## 🔧 Personnalisations avancées

### Changer la police

**Fichier :** `index.html`

Remplacez la ligne Google Fonts :

```html
<link href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;600;700&display=swap" rel="stylesheet">
```

Puis dans `tailwind.config.js`, modifiez :

```js
fontFamily: {
  serif: ['VotrePolice', 'Georgia', 'serif'],
}
```

### Modifier les durées d'animation

**Fichier :** `src/components/WeddingSite.jsx`

- Porte : `duration-[4000ms]` → Changez 4000 pour plus rapide/lent
- Affichage du contenu : `setTimeout(() => setShowContent(true), 4500)` → Changez 4500

## 📝 Checklist de personnalisation

- [ ] Noms des mariés modifiés
- [ ] Photo d'ouverture remplacée
- [ ] Toutes les photos de la timeline remplacées
- [ ] Histoires personnalisées
- [ ] Dates mises à jour
- [ ] Couleurs adaptées au thème
- [ ] Section invitations ajoutée (si nécessaire)
- [ ] Informations de contact dans le footer
- [ ] Vidéo du mariage intégrée (si disponible)
- [ ] Galerie photos ajoutée (si nécessaire)

## 🚀 Déploiement

Une fois personnalisé, construisez pour la production :

```bash
npm run build
```

Les fichiers seront dans le dossier `dist/` que vous pouvez déployer sur :
- Netlify
- Vercel
- GitHub Pages
- Votre propre serveur

