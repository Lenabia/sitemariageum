# 📱 Breakpoints du Projet

## Breakpoints Personnalisés (définis dans tailwind.config.js)

```javascript
xs: "375px"   // Petits mobiles (iPhone SE, etc.)
xs2: "430px"  // Mobiles moyens (iPhone 12/13, etc.)
```

## Breakpoints Tailwind par Défaut

```javascript
sm: "640px"   // Petites tablettes / grands mobiles
md: "768px"   // Tablettes (iPad portrait)
lg: "1024px"  // Tablettes paysage / petits ordinateurs
xl: "1280px"  // Ordinateurs moyens
2xl: "1536px" // Grands écrans
```

## 📊 Résumé des Breakpoints

| Breakpoint | Taille | Usage |
|------------|--------|-------|
| **xs** | 375px | Petits mobiles |
| **xs2** | 430px | Mobiles moyens |
| **sm** | 640px | Grands mobiles / petites tablettes |
| **md** | 768px | Tablettes (point de bascule pour 2 colonnes) |
| **lg** | 1024px | Tablettes paysage / petits ordinateurs |
| **xl** | 1280px | Ordinateurs moyens |
| **2xl** | 1536px | Grands écrans |

## 🎯 Utilisation dans le Projet

### Exemple d'utilisation :
```jsx
// Mobile d'abord, puis tablette, puis desktop
className="text-sm xs:text-base md:text-lg lg:text-xl"

// Grille : 1 colonne mobile, 2 colonnes à partir de md
className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3"

// Padding responsive
className="px-3 xs:px-4 sm:px-6 lg:px-8 xl:px-10"
```

## 💡 Points Clés

- **xs (375px)** : Design mobile-first
- **xs2 (430px)** : Ajustements pour mobiles moyens
- **md (768px)** : Point de bascule pour les grilles à 2 colonnes
- **lg (1024px)** : Design desktop
- **xl (1280px+)** : Grands écrans avec padding supplémentaire

## 📐 Logique Responsive

1. **Mobile** (< 768px) : 1 colonne, textes compacts
2. **Tablette** (768px - 1023px) : 2 colonnes, espacement moyen
3. **Desktop** (1024px+) : 3+ colonnes, espacement large
4. **Grand écran** (1280px+) : Padding supplémentaire, largeurs max

