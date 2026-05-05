# 📸 Guide des Images - Fedya Glow

## 📁 Structure des Images

```
assets/images/
└── products/
    ├── lipstick-rose-1.jpg
    ├── lipstick-rose-2.jpg
    ├── lipstick-rose-3.jpg
    ├── lipstick-rose-4.jpg
    ├── lipstick-nude-1.jpg
    ├── lipstick-nude-2.jpg
    ├── lipstick-nude-3.jpg
    ├── lipstick-nude-4.jpg
    ├── perfume-1.jpg
    ├── serum-1.jpg
    ├── brushes-1.jpg
    ├── palette-1.jpg
    ├── foundation-1.jpg
    └── mascara-1.jpg
```

## 📐 Spécifications Recommandées

### Images Produits
- **Format:** JPG ou PNG
- **Dimensions:** 800x800px minimum (1200x1200px optimal)
- **Ratio:** 1:1 (carré)
- **Poids:** < 200KB par image
- **Résolution:** 72 DPI (web)

### Galerie Produit
- Image 1: Vue frontale du produit
- Image 2: Vue du produit ouvert/utilisé
- Image 3: Vue du packaging/détails
- Image 4: Vue du produit sur fond lifestyle

## 🎨 Conseils de Photographie

### Éclairage
✅ **Bon:**
- Lumière naturelle diffuse
- Fond blanc ou neutre
- Pas d'ombres dures

❌ **Mauvais:**
- Flash direct
- Fond encombré
- Sous-exposition

### Composition
✅ **Bon:**
- Produit centré
- Espace autour (20% minimum)
- Mise au point nette

❌ **Mauvais:**
- Produit coupé
- Image floue
- Angle bizarre

### Post-Production
- Ajustez la luminosité
- Corrigez les couleurs
- Supprimez les imperfections
- Compressez pour le web

## 🔧 Outils Recommandés

### Gratuits
- **Canva** - Création et retouche
- **Remove.bg** - Suppression arrière-plan
- **TinyPNG** - Compression images
- **Photopea** - Éditeur en ligne (gratuit)

### Payants
- **Adobe Lightroom** - Retouche pro
- **Adobe Photoshop** - Édition avancée
- **Capture One** - RAW processing

## 📱 Images par Appareil

### Smartphone (Budget)
1. Utilisez la lumière naturelle
2. Nettoyez l'objectif
3. Stabilisez le téléphone
4. Prenez plusieurs photos
5. Utilisez Snapseed pour retoucher

### Appareil Photo (Pro)
1. Utilisez un trépied
2. ISO bas (100-200)
3. Ouverture f/8-f/11
4. Format RAW si possible
5. Retouchez avec Lightroom

## 🖼️ Placeholders Actuels

Le site utilise des placeholders SVG par défaut:
- Fond beige (#f5e6d3)
- Texte rose gold (#c9a876)
- Nom du produit centré

### Pour Remplacer les Placeholders

1. Prenez vos photos produits
2. Retouchez-les
3. Nommez-les correctement (ex: `lipstick-rose-1.jpg`)
4. Placez-les dans `assets/images/products/`
5. Les placeholders disparaîtront automatiquement!

## 📏 Optimisation Web

### Avant Upload
```bash
# Avec ImageMagick (Terminal)
convert input.jpg -resize 1200x1200 -quality 85 output.jpg

# Avec TinyPNG (Web)
# Allez sur tinypng.com et uploadez
```

### Formats
- **JPG:** Photos produits (meilleure compression)
- **PNG:** Si fond transparent nécessaire
- **WebP:** Moderne, plus léger (optionnel)

## ✅ Checklist Images

Avant d'ajouter une image:
- [ ] Dimensions correctes (800x800 min)
- [ ] Poids < 200KB
- [ ] Nom de fichier clair
- [ ] Ratio 1:1
- [ ] Fond neutre ou blanc
- [ ] Produit centré et net
- [ ] Couleurs réalistes

## 🎯 Exemples de Noms

### Bon ✅
- `lipstick-rose-1.jpg`
- `serum-vitamin-c-front.jpg`
- `palette-nude-open.jpg`

### Mauvais ❌
- `IMG_1234.jpg`
- `photo.jpg`
- `nouvelle image (1).jpg`

## 🔄 Workflow Complet

1. **Shooting**
   - Préparez le produit
   - Installez l'éclairage
   - Prenez 10-15 photos par angle

2. **Sélection**
   - Gardez les 4 meilleures
   - Vérifiez la netteté
   - Vérifiez l'exposition

3. **Retouche**
   - Ajustez luminosité/contraste
   - Corrigez les couleurs
   - Supprimez imperfections
   - Crop en 1:1

4. **Optimisation**
   - Redimensionnez à 1200x1200
   - Compressez à ~150KB
   - Sauvegardez en JPG (85% qualité)

5. **Upload**
   - Nommez correctement
   - Placez dans le bon dossier
   - Testez l'affichage

## 🆓 Banques d'Images Gratuites

Si vous voulez des photos temporaires:
- **Unsplash** - unsplash.com
- **Pexels** - pexels.com
- **Pixabay** - pixabay.com

⚠️ **Attention:** Remplacez-les par vos vraies photos dès que possible!

## 📞 Besoin d'Aide?

Si vous avez besoin d'aide pour les photos:
- Engagez un photographe local
- Utilisez un service comme Fiverr
- Demandez à un ami avec un bon appareil

---

**Astuce Pro:** Les bonnes photos augmentent les ventes de 30-50% !

**Investissement recommandé:** 50-200€ pour un shooting professionnel de 20-30 produits.
