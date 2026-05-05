// Fedya Glow - WhatsApp Checkout System
// whatsapp.js - Système de commande via WhatsApp

class WhatsAppCheckout {
    constructor() {
        // IMPORTANT: Remplacez par votre numéro WhatsApp
        // Format: Code pays + numéro (sans +, sans espaces)
        // Exemples: 
        // France: 33612345678
        // Maroc: 212612345678
        // Belgique: 32470123456
        this.phoneNumber = '33123456789'; 
        
        this.setupEventListeners();
    }

    setupEventListeners() {
        // Bouton de checkout principal dans le panier
        const checkoutBtn = document.getElementById('whatsappCheckout');
        if (checkoutBtn) {
            checkoutBtn.addEventListener('click', () => this.sendCartToWhatsApp());
        }

        // Bouton de commande rapide sur les pages produit
        const quickOrderBtn = document.getElementById('quickOrder');
        if (quickOrderBtn) {
            quickOrderBtn.addEventListener('click', () => this.quickOrder());
        }
    }

    // Envoyer tout le panier vers WhatsApp
    sendCartToWhatsApp() {
        if (cart.items.length === 0) {
            alert('Votre panier est vide');
            return;
        }

        const message = this.generateCartMessage();
        this.openWhatsApp(message);
    }

    // Générer le message formaté du panier
    generateCartMessage() {
        let message = '🛍️ *NOUVELLE COMMANDE FEDYA GLOW*\n\n';
        message += '━━━━━━━━━━━━━━━━━━━━\n\n';

        // Ajouter chaque produit
        cart.items.forEach((item, index) => {
            message += `📦 *Produit ${index + 1}*\n`;
            message += `▫️ ${item.name}\n`;
            if (item.color) message += `▫️ Couleur: ${item.color}\n`;
            if (item.finish) message += `▫️ Finition: ${item.finish}\n`;
            message += `▫️ Quantité: ${item.quantity}\n`;
            message += `▫️ Prix unitaire: ${item.price.toFixed(2)} €\n`;
            message += `▫️ Sous-total: ${(item.price * item.quantity).toFixed(2)} €\n\n`;
        });

        message += '━━━━━━━━━━━━━━━━━━━━\n';
        message += `💰 *TOTAL: ${cart.getTotal().toFixed(2)} €*\n\n`;
        message += '📍 Merci de confirmer votre adresse de livraison.';

        return message;
    }

    // Commande rapide d'un seul produit (depuis la page produit)
    quickOrder() {
        // Récupérer les informations du produit depuis la page
        const productName = document.querySelector('.product-title')?.textContent || 'Produit';
        const priceText = document.querySelector('.current-price')?.textContent || '0';
        const productPrice = parseFloat(priceText.replace('€', '').replace(',', '.').trim()) || 0;
        const quantity = parseInt(document.getElementById('quantityInput')?.value) || 1;
        const color = document.querySelector('.color-option.active')?.dataset.color || '';
        const finish = document.querySelector('.finish-option.active')?.dataset.finish || '';

        // Générer le message de commande rapide
        let message = '🛍️ *COMMANDE RAPIDE FEDYA GLOW*\n\n';
        message += '━━━━━━━━━━━━━━━━━━━━\n\n';
        message += `📦 *Produit:* ${productName}\n`;
        if (color) message += `▫️ Couleur: ${color}\n`;
        if (finish) message += `▫️ Finition: ${finish}\n`;
        message += `▫️ Quantité: ${quantity}\n`;
        message += `\n💰 *Total: ${(productPrice * quantity).toFixed(2)} €*\n\n`;
        message += '━━━━━━━━━━━━━━━━━━━━\n\n';
        message += '📍 Merci de confirmer votre adresse de livraison.';

        this.openWhatsApp(message);
    }

    // Ouvrir WhatsApp avec le message
    openWhatsApp(message) {
        const encodedMessage = encodeURIComponent(message);
        const url = `https://wa.me/${this.phoneNumber}?text=${encodedMessage}`;
        
        // Ouvrir dans un nouvel onglet
        window.open(url, '_blank');
        
        // Optionnel: Afficher une confirmation
        this.showConfirmation();
    }

    // Afficher une confirmation après l'envoi
    showConfirmation() {
        const notification = document.createElement('div');
        notification.className = 'whatsapp-confirmation';
        notification.innerHTML = `
            <i class="fab fa-whatsapp"></i>
            <p>Redirection vers WhatsApp...</p>
        `;
        document.body.appendChild(notification);

        setTimeout(() => notification.classList.add('show'), 10);

        setTimeout(() => {
            notification.classList.remove('show');
            setTimeout(() => notification.remove(), 300);
        }, 2000);
    }

    // Méthode utilitaire pour formater un message personnalisé
    createCustomMessage(data) {
        let message = '🛍️ *FEDYA GLOW*\n\n';
        
        if (data.subject) {
            message += `*Sujet:* ${data.subject}\n\n`;
        }
        
        if (data.content) {
            message += `${data.content}\n\n`;
        }
        
        message += '━━━━━━━━━━━━━━━━━━━━\n';
        message += 'Merci de nous contacter !';
        
        return message;
    }

    // Obtenir le numéro WhatsApp (utile pour les liens directs)
    getWhatsAppNumber() {
        return this.phoneNumber;
    }

    // Vérifier si WhatsApp est disponible
    isWhatsAppAvailable() {
        return /Android|iPhone|iPad|iPod/i.test(navigator.userAgent);
    }
}

// Initialiser le système WhatsApp
const whatsappCheckout = new WhatsAppCheckout();

// Ajouter les styles pour la confirmation WhatsApp
const whatsappStyles = document.createElement('style');
whatsappStyles.textContent = `
    .whatsapp-confirmation {
        position: fixed;
        bottom: -100px;
        left: 50%;
        transform: translateX(-50%);
        background: #25D366;
        color: white;
        padding: 1.5rem 3rem;
        border-radius: 50px;
        box-shadow: 0 10px 30px rgba(0,0,0,0.3);
        z-index: 9999;
        display: flex;
        align-items: center;
        gap: 1rem;
        font-weight: 600;
        transition: bottom 0.3s ease;
    }
    
    .whatsapp-confirmation.show {
        bottom: 30px;
    }
    
    .whatsapp-confirmation i {
        font-size: 2rem;
        animation: pulse 1s infinite;
    }
    
    @keyframes pulse {
        0%, 100% { transform: scale(1); }
        50% { transform: scale(1.1); }
    }
    
    @media (max-width: 768px) {
        .whatsapp-confirmation {
            width: calc(100% - 40px);
            max-width: 350px;
            padding: 1rem 2rem;
        }
    }
`;
document.head.appendChild(whatsappStyles);

// Export pour utilisation dans d'autres fichiers
if (typeof module !== 'undefined' && module.exports) {
    module.exports = WhatsAppCheckout;
}
