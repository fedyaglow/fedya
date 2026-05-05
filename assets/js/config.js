// Fedya Glow - Configuration Centrale
// config.js - Modifiez ce fichier pour personnaliser votre boutique

const FEDYA_CONFIG = {

    // ================================================
    // 1. INFORMATIONS BOUTIQUE
    // ================================================
    shop: {
        name: 'FEDYA GLOW',
        tagline: 'Beauté Authentique',
        description: 'Votre destination beauté premium pour révéler votre éclat naturel.',
        email: 'contact@fedyaglow.com',
        currency: '€',
        currencySymbol: '€',
        locale: 'fr-FR'
    },

    // ================================================
    // 2. WHATSAPP (OBLIGATOIRE)
    // ================================================
    whatsapp: {
        // Format: code pays + numéro SANS + ni espaces
        // France:   33605821519
        // Maroc:    212612345678
        // Belgique: 32470123456
        number: '33605821519',
        
        // Messages personnalisables
        messages: {
            cartHeader: '🛍️ *NOUVELLE COMMANDE FEDYA GLOW*',
            quickOrderHeader: '🛍️ *COMMANDE RAPIDE FEDYA GLOW*',
            separator: '━━━━━━━━━━━━━━━━━━━━',
            footer: '📍 Merci de confirmer votre adresse de livraison.',
            emptyCart: 'Votre panier est vide',
            addedToCart: '✓ Produit ajouté au panier !'
        }
    },

    // ================================================
    // 3. RÉSEAUX SOCIAUX
    // ================================================
    social: {
        instagram: 'https://instagram.com/fedyaglow',
        facebook:  'https://facebook.com/fedyaglow',
        tiktok:    'https://tiktok.com/@fedyaglow',
        youtube:   '',  // Laissez vide si pas de chaîne
        pinterest: ''   // Laissez vide si pas de compte
    },

    // ================================================
    // 4. LIVRAISON
    // ================================================
    shipping: {
        freeShippingThreshold: 50,  // Livraison gratuite à partir de (€)
        standardCost: 5,            // Coût livraison standard (€)
        expressCost: 10,            // Coût livraison express (€)
        standardDays: '2-3',        // Délai standard (jours ouvrables)
        expressDays: '24h'          // Délai express
    },

    // ================================================
    // 5. HORAIRES
    // ================================================
    hours: {
        weekdays: { open: '9h00', close: '20h00', label: 'Lun - Sam' },
        weekend:  { open: '10h00', close: '18h00', label: 'Dimanche' }
    },

    // ================================================
    // 6. PANIER
    // ================================================
    cart: {
        maxQuantityPerItem: 10,     // Quantité max par produit
        storageKey: 'fedyaGlowCart' // Clé LocalStorage
    },

    // ================================================
    // 7. SEO
    // ================================================
    seo: {
        defaultTitle: 'Fedya Glow - Beauté & Élégance',
        defaultDescription: 'Boutique de beauté premium avec produits cosmétiques de luxe. Commandez via WhatsApp !',
        defaultKeywords: 'beauté, cosmétiques, maquillage, parfums, soins, rouge à lèvres',
        ogImage: 'assets/images/og-image.jpg',
        siteUrl: 'https://votresite.com'
    },

    // ================================================
    // 8. DESIGN
    // ================================================
    design: {
        colors: {
            primary:   '#000000',
            secondary: '#F5E6D3',
            accent:    '#C9A876',
            white:     '#FFFFFF',
            gray:      '#F8F8F8',
            text:      '#333333'
        },
        animations: true,          // Activer/désactiver les animations
        floatingButtons: true      // Afficher les boutons flottants réseaux sociaux
    },

    // ================================================
    // 9. CATÉGORIES
    // ================================================
    categories: [
        { id: 'maquillage',   label: 'Maquillage',   icon: 'fa-palette',   desc: 'Lèvres, Yeux, Teint' },
        { id: 'parfums',      label: 'Parfums',       icon: 'fa-spray-can', desc: 'Fragrances Exclusives' },
        { id: 'soins',        label: 'Soins',         icon: 'fa-spa',       desc: 'Visage & Corps' },
        { id: 'accessoires',  label: 'Accessoires',   icon: 'fa-gem',       desc: 'Pinceaux & Outils' }
    ],

    // ================================================
    // 10. FONCTIONNALITÉS
    // ================================================
    features: {
        ratings: true,             // Afficher les étoiles
        discount: true,            // Afficher les réductions
        wishlist: false,           // Liste de souhaits (à venir)
        search: false,             // Recherche (à venir)
        reviews: false,            // Avis clients (à venir)
        newsletter: false          // Newsletter (à venir)
    }
};

// ================================================
// FONCTIONS UTILITAIRES (ne pas modifier)
// ================================================

// Obtenir le numéro WhatsApp formaté
function getWhatsAppNumber() {
    return FEDYA_CONFIG.whatsapp.number;
}

// Formater le prix
function formatPrice(price) {
    return new Intl.NumberFormat(FEDYA_CONFIG.shop.locale, {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2
    }).format(price) + ' ' + FEDYA_CONFIG.shop.currencySymbol;
}

// Calculer si livraison gratuite
function isFreeShipping(total) {
    return total >= FEDYA_CONFIG.shipping.freeShippingThreshold;
}

// Calculer le coût de livraison
function getShippingCost(total, express = false) {
    if (isFreeShipping(total)) return 0;
    return express ? FEDYA_CONFIG.shipping.expressCost : FEDYA_CONFIG.shipping.standardCost;
}

// Calculer le pourcentage de réduction
function getDiscountPercent(price, oldPrice) {
    if (!oldPrice || oldPrice <= price) return 0;
    return Math.round(((oldPrice - price) / oldPrice) * 100);
}

// Générer un ID unique
function generateId() {
    return Date.now().toString(36) + Math.random().toString(36).substr(2);
}

// Placeholder image SVG
function getPlaceholderSVG(text = 'FEDYA GLOW', bgColor = '#f5e6d3', textColor = '#c9a876') {
    return `data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='800' height='800'%3E%3Crect fill='${encodeURIComponent(bgColor)}' width='800' height='800'/%3E%3Ctext fill='${encodeURIComponent(textColor)}' font-family='Arial' font-size='40' x='50%25' y='50%25' text-anchor='middle' dy='.3em'%3E${encodeURIComponent(text)}%3C/text%3E%3C/svg%3E`;
}

// Export pour utilisation dans d'autres fichiers
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        FEDYA_CONFIG,
        getWhatsAppNumber,
        formatPrice,
        isFreeShipping,
        getShippingCost,
        getDiscountPercent,
        generateId,
        getPlaceholderSVG
    };
}
