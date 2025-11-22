# Site de Mariage - Sitemaries

Un site web élégant et moderne pour raconter l'histoire des mariés, de leur rencontre jusqu'au grand jour et au-delà.

## 🚀 Fonctionnalités

- **Animation d'ouverture de porte** : Effet visuel impressionnant à l'arrivée sur le site
- **Timeline interactive** : Parcours chronologique de l'histoire des mariés avec navigation au clavier
- **Sections extensibles** : Structure modulaire pour ajouter facilement de nouvelles sections (invitations, galerie, etc.)
- **Design responsive** : Adapté à tous les écrans (mobile, tablette, desktop)
- **Animations fluides** : Transitions et effets visuels soignés

## 📦 Installation

```bash
# Installer les dépendances
npm install

# Lancer le serveur de développement
npm run dev

# Construire pour la production
npm run build

# Prévisualiser la version de production
npm run preview
```

## 🎨 Personnalisation

### Modifier les informations des mariés

Éditez le fichier `src/components/WeddingSite.jsx` :

- **Noms** : Remplacez "Emma & Louis" par les noms des mariés
- **Photos** : Remplacez les URLs Unsplash par vos propres images
- **Histoires** : Modifiez le tableau `timelineStories` avec vos propres dates et récits
- **Couleurs** : Ajustez les classes Tailwind pour changer la palette de couleurs

### Ajouter une section Invitations

Pour ajouter une section invitations, créez un nouveau composant dans `src/components/` et importez-le dans `WeddingSite.jsx`.

Exemple de structure :

```jsx
// src/components/InvitationsSection.jsx
const InvitationsSection = () => {
  return (
    <div className="py-20 bg-white">
      {/* Votre contenu d'invitations ici */}
    </div>
  );
};
```

Puis ajoutez-le dans `WeddingSite.jsx` après la section Timeline.

## 🛠️ Technologies utilisées

- **React 18** : Framework JavaScript
- **Vite** : Build tool rapide
- **Tailwind CSS** : Framework CSS utilitaire
- **Lucide React** : Icônes modernes

## 📝 Structure du projet

```
sitemaries/
├── src/
│   ├── components/
│   │   └── WeddingSite.jsx    # Composant principal
│   ├── App.jsx                 # Point d'entrée de l'application
│   ├── main.jsx                # Rendu React
│   └── index.css               # Styles globaux + Tailwind
├── index.html                  # HTML de base
├── package.json                # Dépendances
├── vite.config.js              # Configuration Vite
├── tailwind.config.js          # Configuration Tailwind
└── postcss.config.js           # Configuration PostCSS
```

## 🎯 Prochaines étapes suggérées

1. **Section Invitations** : Formulaire RSVP et détails de l'événement
2. **Galerie Photos** : Lightbox pour afficher les photos du mariage
3. **Intégration Vidéo** : Lecteur vidéo pour le film du mariage
4. **Section Cadeaux** : Liste de mariage ou liens vers des registres
5. **Carte Interactive** : Localisation de la cérémonie et réception
6. **Formulaire de Contact** : Pour les invités

## 📄 Licence

Projet privé - Tous droits réservés

