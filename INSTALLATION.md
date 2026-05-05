# 🚀 Guide d'Installation Complet - Fedya Glow

## 📋 Prérequis

### Minimum Requis
- ✅ Un navigateur web moderne (Chrome, Firefox, Safari, Edge)
- ✅ Un éditeur de texte (VS Code, Sublime Text, Notepad++)
- ✅ Un numéro WhatsApp actif

### Optionnel (pour développement)
- Node.js (pour serveur local)
- Git (pour versioning)
- Compte GitHub/Netlify/Vercel (pour hébergement)

---

## 📥 Installation

### Méthode 1: Téléchargement Direct

1. **Téléchargez les fichiers**
   - Téléchargez le dossier `Fedya-Glow` complet
   - Extrayez le ZIP si nécessaire

2. **Vérifiez la structure**
   ```
   Fedya-Glow/
   ├── index.html
   ├── products.html
   ├── about.html
   ├── contact.html
   ├── assets/
   │   ├── css/
   │   ├── js/
   │   └── images/
   └── ...
   ```

3. **Ouvrez le site**
   - Double-cliquez sur `index.html`
   - Le site s'ouvre dans votre navigateur par défaut

✅ **C'est tout! Le site fonctionne sans serveur.**

---

### Méthode 2: Avec Git (Recommandé)

```bash
# Cloner le projet
git clone https://github.com/votre-username/fedya-glow.git

# Aller dans le dossier
cd fedya-glow

# Ouvrir dans votre éditeur
code .

# Ouvrir index.html dans le navigateur
# Double-clic ou:
open index.html  # Mac
start index.html # Windows
xdg-open index.html # Linux
```

---

### Méthode 3: Avec Serveur Local (Développeurs)

#### Option A: Live Server (VS Code)

1. **Installer l'extension Live Server**
   - Ouvrir VS Code
   - Extensions (Ctrl+Shift+X)
   - Rechercher "Live Server"
   - Installer

2. **Lancer le serveur**
   - Clic droit sur `index.html`
   - "Open with Live Server"
   - Site ouvert sur `http://localhost:5500`

#### Option B: Python

```bash
# Python 3
cd Fedya-Glow
python -m http.server 8080

# Python 2
python -m SimpleHTTPServer 8080

# Ouvrir: http://localhost:8080
```

#### Option C: Node.js

```bash
# Installer http-server globalement
npm install -g http-server

# Lancer le serveur
cd Fedya-Glow
http-server -p 8080

# Ouvrir: http://localhost:8080
```

#### Option D: PHP

```bash
cd Fedya-Glow
php -S localhost:8080

# Ouvrir: http://localhost:8080
```

---

## ⚙️ Configuration Initiale

### 1. Configurer WhatsApp (OBLIGATOIRE)

**Fichier:** `assets/js/whatsapp.js`

```javascript
// Ligne 11
this.phoneNumber = 'VOTRE_NUMERO';
```

**Format du numéro:**
- ✅ Bon: `33612345678` (Code pays + numéro, sans +)
- ❌ Mauvais: `+33 6 12 34 56 78`

**Exemples par pays:**
```javascript
// France
this.phoneNumber = '33612345678';

// Maroc
this.phoneNumber = '212612345678';

// Belgique
this.phoneNumber = '32470123456';

// Tunisie
this.phoneNumber = '21620123456';

// Algérie
this.phoneNumber = '213550123456';

// Suisse
this.phoneNumber = '41791234567';
```

### 2. Personnaliser les Informations

#### Modifier le Nom et Email

Recherchez et remplacez dans **TOUS** les fichiers HTML:

```html
<!-- Rechercher -->
contact@fedyaglow.com

<!-- Remplacer par -->
votre-email@votredomaine.com
```

#### Modifier les Liens Sociaux

Dans **TOUS** les fichiers HTML:

```html
<!-- Instagram -->
<a href="https://instagram.com/VOTRE_COMPTE">

<!-- Facebook -->
<a href="https://facebook.com/VOTRE_PAGE">

<!-- TikTok -->
<a href="https://tiktok.com/@VOTRE_COMPTE">
```

### 3. Personnaliser les Couleurs (Optionnel)

**Fichier:** `assets/css/style.css` (lignes 3-10)

```css
:root {
    --primary: #000000;      /* Couleur principale */
    --secondary: #F5E6D3;    /* Couleur secondaire */
    --accent: #C9A876;       /* Couleur accent (Rose Gold) */
    --white: #FFFFFF;
    --gray: #F8F8F8;
    --text: #333333;
}
```

**Exemples de palettes:**

```css
/* Palette Bleu Élégant */
:root {
    --primary: #1a237e;
    --accent: #64b5f6;
}

/* Palette Rose Moderne */
:root {
    --primary: #880e4f;
    --accent: #f48fb1;
}

/* Palette Vert Naturel */
:root {
    --primary: #1b5e20;
    --accent: #81c784;
}
```

### 4. Ajouter vos Produits

**Fichier:** `assets/js/ui.js` (ligne 6)

```javascript
const products = [
    {
        id: 1,                                    // Numéro unique
        name: 'Nom du Produit',                   // Nom affiché
        category: 'maquillage',                   // Catégorie
        price: 24.90,                             // Prix actuel
        oldPrice: 32.00,                          // Ancien prix (optionnel)
        image: 'assets/images/products/img.jpg',  // Chemin image
        url: '#',                                 // Lien page produit
        description: 'Description courte'         // Description
    },
    // Ajoutez vos produits ici...
];
```

**Catégories disponibles:**
- `maquillage`
- `parfums`
- `soins`
- `accessoires`

---

## 📸 Ajouter des Images

### 1. Préparer les Images

**Spécifications:**
- Format: JPG ou PNG
- Dimensions: 800x800px minimum (carré)
- Poids: < 200KB par image
- Nom: descriptif (ex: `rouge-levres-rose-1.jpg`)

### 2. Placer les Images

```
assets/
└── images/
    └── products/
        ├── votre-produit-1.jpg
        ├── votre-produit-2.jpg
        └── votre-produit-3.jpg
```

### 3. Référencer dans le Code

```javascript
// Dans assets/js/ui.js
image: 'assets/images/products/votre-produit-1.jpg'
```

**Outils de compression recommandés:**
- https://tinypng.com
- https://squoosh.app
- https://imageoptim.com

---

## 🌐 Mise en Ligne

### Option 1: Netlify (Le Plus Simple)

1. **Via l'interface web:**
   - Allez sur https://app.netlify.com/drop
   - Glissez le dossier `Fedya-Glow`
   - Site en ligne instantanément!

2. **Via Git:**
   ```bash
   # Installer Netlify CLI
   npm install -g netlify-cli
   
   # Se connecter
   netlify login
   
   # Déployer
   cd Fedya-Glow
   netlify deploy --prod
   ```

### Option 2: Vercel

```bash
# Installer Vercel CLI
npm install -g vercel

# Se connecter
vercel login

# Déployer
cd Fedya-Glow
vercel --prod
```

### Option 3: GitHub Pages

```bash
# Initialiser Git
cd Fedya-Glow
git init

# Ajouter les fichiers
git add .

# Premier commit
git commit -m "Initial commit - Fedya Glow"

# Créer une branche main
git branch -M main

# Ajouter le remote (créez d'abord le repo sur GitHub)
git remote add origin https://github.com/VOTRE-USERNAME/fedya-glow.git

# Push
git push -u origin main
```

Puis sur GitHub:
- Settings > Pages
- Source: main branch
- Save

Site disponible sur: `https://VOTRE-USERNAME.github.io/fedya-glow/`

### Option 4: Hébergement Traditionnel (FTP)

1. **Via FileZilla ou autre client FTP:**
   - Connectez-vous à votre hébergeur
   - Uploadez tous les fichiers dans `public_html/` ou `www/`
   - Respectez la structure des dossiers

---

## 🧪 Tests

### 1. Test Local

#### Vérifier la Navigation
- [ ] Accueil charge correctement
- [ ] Navigation entre pages fonctionne
- [ ] Menu mobile s'ouvre/ferme
- [ ] Liens footer fonctionnent

#### Vérifier le Panier
- [ ] Ajout produit au panier
- [ ] Modification quantité
- [ ] Suppression produit
- [ ] Calcul total correct
- [ ] Compteur panier s'actualise

#### Vérifier WhatsApp
- [ ] Bouton WhatsApp cliquable
- [ ] Message bien formaté
- [ ] Numéro correct
- [ ] Détails commande complets

### 2. Test sur Différents Navigateurs

- [ ] Chrome
- [ ] Firefox
- [ ] Safari
- [ ] Edge
- [ ] Mobile Safari (iOS)
- [ ] Chrome Mobile (Android)

### 3. Test Responsive

```
Tailles à tester:
- 320px (Mobile petit)
- 375px (iPhone)
- 414px (iPhone Plus)
- 768px (iPad portrait)
- 1024px (iPad landscape)
- 1440px (Desktop)
- 1920px (Full HD)
```

### 4. Test Performance

**Outils:**
- https://pagespeed.web.dev
- https://gtmetrix.com
- https://webpagetest.org

**Objectifs:**
- Temps de chargement < 2 secondes
- Score PageSpeed > 90
- Poids total < 3 MB

---

## 🐛 Dépannage

### Le site ne s'affiche pas

**Solution 1:** Vérifier la console du navigateur
- F12 > Console
- Chercher les erreurs en rouge

**Solution 2:** Vérifier les chemins des fichiers
```html
<!-- Bon -->
<link rel="stylesheet" href="assets/css/style.css">

<!-- Mauvais -->
<link rel="stylesheet" href="/assets/css/style.css">
```

### WhatsApp ne s'ouvre pas

**Vérifications:**
1. Format du numéro correct?
   ```javascript
   // ✅ Bon
   '33612345678'
   
   // ❌ Mauvais
   '+33 6 12 34 56 78'
   ```

2. WhatsApp installé sur l'appareil?

3. Navigateur autorise les popups?

### Images ne s'affichent pas

**Vérifications:**
1. Fichiers présents dans `assets/images/products/`?
2. Noms de fichiers corrects (sensible à la casse)?
3. Extensions correctes (.jpg, .png)?

**Note:** Les placeholders SVG s'affichent automatiquement si l'image est manquante.

### Le panier se vide

**Normal!** Le panier utilise localStorage:
- Se vide si on vide le cache du navigateur
- Se vide en mode navigation privée
- Persiste en navigation normale

---

## 📚 Ressources Complémentaires

### Documentation
- [README.md](README.md) - Documentation complète
- [GUIDE-DEMARRAGE.md](GUIDE-DEMARRAGE.md) - Guide rapide
- [FAQ.md](FAQ.md) - Questions fréquentes

### Tutoriels Vidéo (à créer)
- Installation pas à pas
- Configuration WhatsApp
- Ajout de produits
- Mise en ligne

### Support
- 📧 Email: contact@fedyaglow.com
- 💬 GitHub Issues
- 📱 WhatsApp: +33 1 23 45 67 89

---

## ✅ Checklist Installation Complète

### Configuration
- [ ] Numéro WhatsApp configuré et testé
- [ ] Email modifié
- [ ] Liens réseaux sociaux mis à jour
- [ ] Couleurs personnalisées (optionnel)

### Contenu
- [ ] Au moins 3 produits ajoutés
- [ ] Photos de qualité uploadées
- [ ] Descriptions complétées
- [ ] Prix vérifiés

### Tests
- [ ] Navigation testée
- [ ] Panier fonctionnel
- [ ] WhatsApp teste et opérationnel
- [ ] Test mobile réussi
- [ ] Test sur 2+ navigateurs

### Mise en Ligne
- [ ] Site déployé
- [ ] URL fonctionnelle
- [ ] SSL actif (HTTPS)
- [ ] Partage sur réseaux sociaux

---

## 🎉 Félicitations!

Votre boutique Fedya Glow est maintenant installée et configurée!

**Prochaines étapes:**
1. Testez tout en détail
2. Partagez sur vos réseaux
3. Commencez à vendre! 💰

---

**Version:** 1.0.0  
**Dernière mise à jour:** 2024  
**Support:** contact@fedyaglow.com
