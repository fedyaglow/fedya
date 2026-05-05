# 🚀 Guide de Démarrage Rapide - Fedya Glow

## ⚡ Lancement en 5 Minutes

### Étape 1: Configuration WhatsApp (2 minutes)

1. Ouvrez `assets/js/whatsapp.js`
2. Ligne 11, changez le numéro:
```javascript
this.phoneNumber = 'VOTRE_NUMERO'; // Ex: 212612345678
```

**IMPORTANT:** Format sans + ni espaces
- France: 33612345678
- Maroc: 212612345678
- Belgique: 32470123456
- Tunisie: 21620123456

### Étape 2: Test Local (1 minute)

1. Double-cliquez sur `index.html`
2. Naviguez dans le site
3. Testez d'ajouter un produit au panier
4. Cliquez sur "Commander sur WhatsApp"

✅ Si WhatsApp s'ouvre avec le message → Succès!

### Étape 3: Mise en Ligne GRATUITE (2 minutes)

#### Option A: Netlify (Le + Simple)
1. Allez sur [netlify.com](https://app.netlify.com/drop)
2. Glissez le dossier `Fedya-Glow` entier
3. ✅ Votre site est en ligne!

#### Option B: GitHub Pages
```bash
cd Fedya-Glow
git init
git add .
git commit -m "Ma boutique Fedya Glow"
git remote add origin https://github.com/VOTRE-USERNAME/fedya-glow.git
git push -u origin main
```
Puis: Settings > Pages > Source: main branch

---

## 🎨 Personnalisation Rapide

### Changer les Couleurs (30 secondes)

`assets/css/style.css` - lignes 3-10:
```css
:root {
    --primary: #000000;    /* Changez cette couleur */
    --accent: #C9A876;     /* Changez cette couleur */
}
```

### Ajouter Vos Produits (5 minutes)

`assets/js/ui.js` - ligne 6:
```javascript
{
    id: 9,  // Numéro unique
    name: 'Votre Produit',
    category: 'maquillage',  // ou parfums, soins, accessoires
    price: 29.90,
    oldPrice: 39.00,
    image: 'assets/images/products/mon-produit.jpg',
    url: '#',
    description: 'Description courte'
}
```

### Modifier Infos Contact (2 minutes)

Recherchez et remplacez dans TOUS les fichiers HTML:
- `+33 1 23 45 67 89` → Votre numéro
- `contact@fedyaglow.com` → Votre email
- `https://instagram.com/fedyaglow` → Votre Instagram
- `https://facebook.com/fedyaglow` → Votre Facebook

---

## 📱 Test sur Mobile

### Méthode 1: Via URL
1. Mettez en ligne (Netlify)
2. Ouvrez l'URL sur votre téléphone
3. Testez navigation + commande

### Méthode 2: Via QR Code
1. Générez un QR code de votre URL
2. Scannez avec votre téléphone
3. Testez!

---

## ✅ Checklist Essentielle

Avant de partager votre site:

- [ ] ✅ Numéro WhatsApp testé et fonctionne
- [ ] ✅ Au moins 3-4 produits ajoutés
- [ ] ✅ Photos de qualité (pas de placeholders)
- [ ] ✅ Prix corrects
- [ ] ✅ Liens sociaux mis à jour
- [ ] ✅ Test commande WhatsApp OK
- [ ] ✅ Test sur mobile réussi

---

## 🎉 Votre Site est Prêt!

### Partagez-le:
1. **Instagram:** Ajoutez le lien dans votre bio
2. **WhatsApp Status:** Partagez avec vos contacts
3. **TikTok:** Ajoutez dans votre profil
4. **Facebook:** Créez un post avec le lien

### Premiers Pas Marketing:
- Créez une Story Instagram avec le lien
- Envoyez à 10 amis pour tester
- Demandez des retours
- Ajustez selon les retours

---

## 🆘 Problèmes Fréquents

### ❌ WhatsApp ne s'ouvre pas
**Solution:** Vérifiez le format du numéro
- ✅ Bon: `33612345678`
- ❌ Mauvais: `+33 6 12 34 56 78`

### ❌ Images ne s'affichent pas
**Solution:** Vérifiez que les images sont dans `assets/images/products/`

### ❌ Le panier se vide
**Solution:** Normal si vous videz le cache. Les vrais clients ne font pas ça.

---

## 💡 Astuces Pro

### Augmenter les Ventes:
1. **Photos professionnelles** - Investissez dans de bonnes photos
2. **Descriptions détaillées** - Expliquez les bénéfices
3. **Réponse rapide** - Répondez en moins de 5 minutes sur WhatsApp
4. **Promotions** - Offrez -10% pour la première commande

### Optimiser le Site:
1. **Compressez les images** avant de les ajouter
2. **Testez sur différents appareils**
3. **Mettez à jour régulièrement** avec nouveaux produits
4. **Collectez les avis** et affichez-les

---

## 📞 Besoin d'Aide?

- 📖 Consultez le [README.md](README.md) complet
- 💬 Testez votre numéro WhatsApp
- 🔍 Cherchez sur Google si erreur

---

## 🎯 Prochaines Étapes

Après le lancement:

**Semaine 1:**
- [ ] Partagez sur tous vos réseaux
- [ ] Obtenez 10 premières commandes
- [ ] Collectez les retours

**Semaine 2:**
- [ ] Ajoutez de nouveaux produits
- [ ] Optimisez selon les retours
- [ ] Créez du contenu (photos, vidéos)

**Semaine 3:**
- [ ] Lancez une promotion
- [ ] Analysez ce qui se vend le mieux
- [ ] Réapprovisionnez les bestsellers

---

**🌟 Félicitations! Votre boutique Fedya Glow est opérationnelle! 🌟**

*Temps total de setup: ~15 minutes*
*Coût d'hébergement: 0€*
*Potentiel de ventes: Illimité!*

---

**Dernière mise à jour:** 2024  
**Version:** 1.0.0
