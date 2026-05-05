# 🌟 Fedya Glow - Boutique E-Commerce avec WhatsApp Checkout

Une boutique e-commerce élégante et moderne spécialisée dans les produits de beauté, avec système de commande via WhatsApp intégré.

![Fedya Glow](https://img.shields.io/badge/Version-1.0.0-success)
![License](https://img.shields.io/badge/License-MIT-blue)
![HTML5](https://img.shields.io/badge/HTML5-E34F26?logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?logo=javascript&logoColor=black)

## ✨ Caractéristiques

- ✅ **Design moderne et élégant** - Style inspiré de Sephora/Zara Beauty
- ✅ **100% Responsive** - Mobile First Design
- ✅ **Panier fonctionnel** - Utilise LocalStorage du navigateur
- ✅ **WhatsApp Checkout** - Système de commande automatique via WhatsApp
- ✅ **Galerie d'images** - Slider interactif pour les produits
- ✅ **Variantes produits** - Sélection de couleur et finition
- ✅ **Animations fluides** - Transitions et effets professionnels
- ✅ **Boutons flottants** - Liens vers réseaux sociaux
- ✅ **Sans backend** - 100% Frontend, facile à héberger
- ✅ **SEO optimisé** - Meta tags et structure sémantique

## 📁 Structure du Projet

```
Fedya-Glow/
│
├── index.html                              # Page d'accueil
├── products.html                           # Catalogue produits
├── about.html                              # À propos
├── contact.html                            # Contact
├── README.md                               # Documentation
├── GUIDE-DEMARRAGE.md                      # Guide rapide
│
├── assets/
│   ├── css/
│   │   ├── style.css                      # Styles principaux
│   │   └── responsive.css                 # Styles responsive
│   │
│   ├── js/
│   │   ├── cart.js                        # Gestion du panier
│   │   ├── ui.js                          # Interface utilisateur
│   │   ├── whatsapp.js                    # WhatsApp checkout
│   │   └── product.js                     # Page produit
│   │
│   ├── images/
│   │   └── products/                       # Images produits
│   │
│   └── categories/
│       └── maquillage/
│           └── levres/
│               ├── lipstick-rose.html     # Produit 1
│               └── lipstick-nude.html     # Produit 2
```

## 🚀 Installation

### Option 1: Utilisation Locale

1. Téléchargez tous les fichiers
2. Ouvrez `index.html` dans votre navigateur
3. Le site fonctionne immédiatement sans serveur !

### Option 2: Hébergement Gratuit

#### GitHub Pages
```bash
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/votre-username/fedya-glow.git
git push -u origin main
```
Puis activez GitHub Pages dans Settings > Pages

#### Netlify (Le plus simple)
1. Allez sur [netlify.com](https://netlify.com)
2. Glissez-déposez le dossier `Fedya-Glow`
3. Votre site est en ligne en 30 secondes !

#### Vercel
```bash
npm i -g vercel
vercel
```

## ⚙️ Configuration Rapide

### 1. Modifier le Numéro WhatsApp

Dans `assets/js/whatsapp.js`, ligne 11:
```javascript
this.phoneNumber = '33123456789'; // Remplacez par votre numéro
```

**Format:** Code pays + numéro (sans +, sans espaces)
- France: `33612345678`
- Maroc: `212612345678`
- Belgique: `32470123456`

### 2. Personnaliser les Couleurs

Dans `assets/css/style.css`, lignes 3-10:
```css
:root {
    --primary: #000000;      /* Noir */
    --secondary: #F5E6D3;    /* Beige */
    --accent: #C9A876;       /* Rose Gold */
    --white: #FFFFFF;
    --gray: #F8F8F8;
    --text: #333333;
}
```

### 3. Ajouter des Produits

Dans `assets/js/ui.js`, ligne 6:
```javascript
const products = [
    {
        id: 1,
        name: 'Nom du Produit',
        category: 'maquillage', // ou 'parfums', 'soins', 'accessoires'
        price: 24.90,
        oldPrice: 32.00,
        image: 'assets/images/products/mon-produit.jpg',
        url: 'chemin/vers/page-produit.html',
        description: 'Description courte'
    },
    // Ajoutez vos produits ici
];
```

### 4. Modifier les Réseaux Sociaux

Remplacez les liens dans tous les fichiers HTML:
```html
<a href="https://wa.me/VOTRE_NUMERO">WhatsApp</a>
<a href="https://instagram.com/VOTRE_COMPTE">Instagram</a>
<a href="https://tiktok.com/@VOTRE_COMPTE">TikTok</a>
<a href="https://facebook.com/VOTRE_PAGE">Facebook</a>
```

## 📱 Fonctionnalités WhatsApp

### Message Automatique Généré

Le système génère automatiquement un message formaté:

```
🛍️ NOUVELLE COMMANDE FEDYA GLOW

━━━━━━━━━━━━━━━━━━━━

📦 Produit 1
▫️ Rouge à Lèvres Rose
▫️ Couleur: Rose Pétale
▫️ Finition: Mat Velours
▫️ Quantité: 2
▫️ Prix unitaire: 24.90 €
▫️ Sous-total: 49.80 €

━━━━━━━━━━━━━━━━━━━━
💰 TOTAL: 49.80 €

📍 Merci de confirmer votre adresse de livraison.
```

### Deux Types de Commande

1. **Commande Panier** - Tous les produits du panier
2. **Commande Rapide** - Un seul produit depuis sa page

## 🎨 Personnalisation Avancée

### Ajouter une Nouvelle Page Produit

1. Copiez `assets/categories/maquillage/levres/lipstick-rose.html`
2. Renommez-le (ex: `mascara-noir.html`)
3. Modifiez:
   - Titre du produit (balise `<h1>`)
   - Prix (`.current-price` et `.old-price`)
   - Description (`.product-description`)
   - Images (chemins `src`)
   - Variantes (couleurs et finitions)

### Changer les Images

1. Placez vos images dans `assets/images/products/`
2. Format recommandé: JPG ou PNG
3. Taille recommandée: 800x800px minimum
4. Nommez: `produit-nom-1.jpg`, `produit-nom-2.jpg`, etc.

## 🌐 SEO & Analytics

### Ajouter Google Analytics

Avant `</head>` dans chaque fichier HTML:
```html
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'GA_ID');
</script>
```

### Optimiser les Meta Tags

```html
<meta name="description" content="Votre description">
<meta name="keywords" content="beauté, cosmétiques, maquillage">
<meta property="og:title" content="Fedya Glow">
<meta property="og:description" content="Description">
<meta property="og:image" content="URL de votre image">
```

## 🔧 Dépannage

### Le panier ne fonctionne pas
- Vérifiez que JavaScript est activé
- Ouvrez la console (F12) pour voir les erreurs
- Videz le cache du navigateur

### Les images ne s'affichent pas
- Vérifiez les chemins (relatifs vs absolus)
- Assurez-vous que les fichiers existent
- Les images ont des placeholders SVG par défaut

### WhatsApp ne s'ouvre pas
- Vérifiez le format du numéro (pas de +)
- Testez avec un autre numéro
- WhatsApp doit être installé sur l'appareil

## 📱 Compatibilité

✅ **Navigateurs:**
- Chrome, Firefox, Safari, Edge (dernières versions)
- iOS Safari
- Android Chrome

✅ **Appareils:**
- Desktop (1920px+)
- Laptop (1024px - 1919px)
- Tablette (768px - 1023px)
- Mobile (320px - 767px)

## 🎯 Checklist Avant Lancement

- [ ] Numéro WhatsApp configuré et testé
- [ ] Images produits ajoutées (800x800px min)
- [ ] Prix mis à jour
- [ ] Liens réseaux sociaux configurés
- [ ] Email de contact modifié
- [ ] Test sur mobile réussi
- [ ] Test commande WhatsApp réussi
- [ ] Google Analytics ajouté (optionnel)
- [ ] Meta tags SEO complétés

## 📈 Conseils Marketing

### 1. Partage Social
- Ajoutez le lien dans votre bio Instagram
- Partagez sur Stories avec sticker "Swipe Up"
- Créez des posts TikTok avec le lien
- Envoyez à vos contacts WhatsApp

### 2. Contenu
- Prenez des photos professionnelles
- Créez des descriptions détaillées
- Ajoutez des avis clients
- Mettez à jour régulièrement

### 3. Engagement
- Répondez rapidement sur WhatsApp
- Offrez des promotions exclusives
- Créez un programme de fidélité
- Demandez des retours clients

## 🆘 Support

Pour toute question:
- 📧 Email: contact@fedyaglow.com
- 💬 WhatsApp: +33 1 23 45 67 89

## 📄 Licence

Ce projet est libre d'utilisation pour usage commercial ou personnel.

## 🙏 Remerciements

Créé avec ❤️ pour Fedya Glow

---

**Version:** 1.0.0  
**Dernière mise à jour:** 2024  
**Développé par:** Claude AI Assistant

## 🔗 Liens Utiles

- [Guide de Démarrage Rapide](GUIDE-DEMARRAGE.md)
- [Documentation WhatsApp API](https://wa.me/)
- [GitHub Pages Guide](https://pages.github.com/)
- [Netlify Docs](https://docs.netlify.com/)

---

**Bon succès avec votre boutique Fedya Glow! 🌟**
