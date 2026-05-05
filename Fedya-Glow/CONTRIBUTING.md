# 🤝 Guide de Contribution - Fedya Glow

Merci de votre intérêt pour contribuer à Fedya Glow ! Ce document vous guidera dans le processus de contribution.

## 📋 Table des Matières

- [Comment Contribuer](#comment-contribuer)
- [Standards de Code](#standards-de-code)
- [Structure des Commits](#structure-des-commits)
- [Processus de Pull Request](#processus-de-pull-request)
- [Rapport de Bugs](#rapport-de-bugs)
- [Suggestions de Fonctionnalités](#suggestions-de-fonctionnalités)

## 🚀 Comment Contribuer

### 1. Fork le Projet
```bash
# Cliquez sur "Fork" sur GitHub
# Puis clonez votre fork
git clone https://github.com/votre-username/fedya-glow.git
cd fedya-glow
```

### 2. Créez une Branche
```bash
git checkout -b feature/ma-nouvelle-fonctionnalite
# ou
git checkout -b fix/correction-bug
```

### 3. Faites vos Modifications
- Suivez les [Standards de Code](#standards-de-code)
- Testez vos modifications
- Assurez-vous que tout fonctionne sur mobile

### 4. Commitez vos Changements
```bash
git add .
git commit -m "✨ Ajout: Description de la fonctionnalité"
```

### 5. Poussez vers GitHub
```bash
git push origin feature/ma-nouvelle-fonctionnalite
```

### 6. Créez une Pull Request
- Allez sur GitHub
- Cliquez sur "New Pull Request"
- Décrivez vos modifications

## 📝 Standards de Code

### HTML
```html
<!-- ✅ BON -->
<div class="product-card">
    <h3>Titre Produit</h3>
    <p>Description</p>
</div>

<!-- ❌ MAUVAIS -->
<div class=product-card>
<h3>Titre Produit</h3><p>Description</p></div>
```

- Utilisez des indentations de 4 espaces
- Noms de classes en kebab-case
- Fermez toutes les balises
- Ajoutez des attributs `alt` aux images
- Utilisez des attributs `aria-label` pour l'accessibilité

### CSS
```css
/* ✅ BON */
.product-card {
    padding: 1rem;
    margin-bottom: 2rem;
    border-radius: 10px;
}

/* ❌ MAUVAIS */
.product-card{padding:1rem;margin-bottom:2rem;border-radius:10px;}
```

- Une propriété par ligne
- Utilisez des variables CSS (`:root`)
- Commentez les sections importantes
- Évitez `!important` sauf nécessité absolue

### JavaScript
```javascript
// ✅ BON
function addToCart(product) {
    if (!product || !product.id) {
        console.error('Invalid product');
        return;
    }
    
    cart.addItem(product);
}

// ❌ MAUVAIS
function addToCart(p){cart.addItem(p)}
```

- Utilisez `const` et `let`, pas `var`
- Noms de fonctions en camelCase
- Commentez les fonctions complexes
- Gérez les erreurs avec try/catch

## 📦 Structure des Commits

Utilisez des emojis et messages clairs:

```
✨ Ajout: Nouvelle fonctionnalité
🔧 Modif: Changement dans code existant
🐛 Fix: Correction de bug
🎨 Design: Changement visuel
📝 Docs: Mise à jour documentation
⚡ Perf: Amélioration performance
🔒 Sécu: Correction sécurité
♻️ Refactor: Refactorisation code
✅ Test: Ajout de tests
```

Exemples:
```bash
git commit -m "✨ Ajout: Système de wishlist"
git commit -m "🐛 Fix: Erreur calcul total panier"
git commit -m "🎨 Design: Nouveau style boutons"
git commit -m "📝 Docs: Guide installation mis à jour"
```

## 🔄 Processus de Pull Request

### Avant de Soumettre
- [ ] Code testé sur Chrome, Firefox, Safari
- [ ] Testé sur mobile (responsive)
- [ ] Pas de console.log() oubliés
- [ ] Documentation mise à jour si nécessaire
- [ ] Commentaires ajoutés pour code complexe

### Description de PR
```markdown
## Description
Brève description de la modification

## Type de Changement
- [ ] Nouvelle fonctionnalité
- [ ] Correction de bug
- [ ] Amélioration design
- [ ] Documentation

## Captures d'Écran
(Si applicable)

## Checklist
- [ ] Code testé
- [ ] Responsive vérifié
- [ ] Documentation à jour
```

## 🐛 Rapport de Bugs

### Format de Rapport
```markdown
**Titre:** Description courte du bug

**Description:**
Description détaillée du problème

**Étapes pour Reproduire:**
1. Allez sur...
2. Cliquez sur...
3. Voyez l'erreur...

**Comportement Attendu:**
Ce qui devrait se passer

**Comportement Actuel:**
Ce qui se passe réellement

**Environnement:**
- Navigateur: Chrome 120
- OS: Windows 11
- Appareil: Desktop

**Captures d'Écran:**
(Si applicable)
```

## 💡 Suggestions de Fonctionnalités

### Format de Suggestion
```markdown
**Titre:** Nom de la fonctionnalité

**Problème à Résoudre:**
Quel problème cette fonctionnalité résout-elle?

**Solution Proposée:**
Comment fonctionnerait cette fonctionnalité?

**Alternatives Considérées:**
Quelles autres solutions avez-vous envisagées?

**Captures/Mockups:**
(Si applicable)
```

## 🎯 Domaines de Contribution

### Développement
- Nouvelles fonctionnalités
- Corrections de bugs
- Amélioration performance
- Refactorisation code

### Design
- Amélioration UI/UX
- Nouvelles animations
- Thèmes alternatifs
- Icônes et illustrations

### Documentation
- Amélioration README
- Nouveaux tutoriels
- Traductions
- Vidéos explicatives

### Tests
- Tests unitaires
- Tests d'intégration
- Tests de compatibilité
- Tests d'accessibilité

## 🏆 Reconnaissance

Tous les contributeurs seront ajoutés à la section CONTRIBUTORS.md

## 📞 Questions?

- Ouvrez une Issue sur GitHub
- Contactez via contact@fedyaglow.com

## 📜 Code de Conduite

### Nos Standards
- Utiliser un langage accueillant et inclusif
- Respecter les différents points de vue
- Accepter les critiques constructives
- Se concentrer sur ce qui est le mieux pour la communauté

### Ce qui N'est Pas Acceptable
- Commentaires insultants ou dégradants
- Harcèlement public ou privé
- Publication d'informations privées sans permission
- Comportement non professionnel

---

**Merci de contribuer à Fedya Glow! 🌟**
