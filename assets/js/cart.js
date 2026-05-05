// Fedya Glow - Shopping Cart System
// cart.js - Gestion du panier avec LocalStorage

class ShoppingCart {
    constructor() {
        this.items = this.loadCart();
        this.updateCartUI();
    }

    // Charger le panier depuis LocalStorage
    loadCart() {
        const saved = localStorage.getItem('fedyaGlowCart');
        return saved ? JSON.parse(saved) : [];
    }

    // Sauvegarder le panier dans LocalStorage
    saveCart() {
        localStorage.setItem('fedyaGlowCart', JSON.stringify(this.items));
        this.updateCartUI();
    }

    // Ajouter un produit au panier
    addItem(product) {
        // Vérifier si le produit existe déjà avec les mêmes variantes
        const existingIndex = this.items.findIndex(item => 
            item.id === product.id && 
            item.color === product.color && 
            item.finish === product.finish
        );

        if (existingIndex > -1) {
            // Produit existe, augmenter la quantité
            this.items[existingIndex].quantity += product.quantity;
        } else {
            // Nouveau produit, l'ajouter
            this.items.push(product);
        }

        this.saveCart();
        this.showNotification('✓ Produit ajouté au panier !');
    }

    // Supprimer un produit du panier
    removeItem(index) {
        this.items.splice(index, 1);
        this.saveCart();
        this.showNotification('Produit retiré du panier');
    }

    // Mettre à jour la quantité d'un produit
    updateQuantity(index, quantity) {
        if (quantity <= 0) {
            this.removeItem(index);
        } else if (quantity > 10) {
            this.showNotification('Quantité maximale: 10');
        } else {
            this.items[index].quantity = quantity;
            this.saveCart();
        }
    }

    // Calculer le total du panier
    getTotal() {
        return this.items.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    }

    // Obtenir le nombre total d'articles
    getItemCount() {
        return this.items.reduce((sum, item) => sum + item.quantity, 0);
    }

    // Vider le panier
    clearCart() {
        this.items = [];
        this.saveCart();
        this.showNotification('Panier vidé');
    }

    // Mettre à jour l'interface du panier
    updateCartUI() {
        const cartCount = document.getElementById('cartCount');
        const cartItems = document.getElementById('cartItems');
        const totalAmount = document.getElementById('totalAmount');

        // Mettre à jour le compteur
        if (cartCount) {
            const count = this.getItemCount();
            cartCount.textContent = count;
            cartCount.style.display = count > 0 ? 'flex' : 'none';
        }

        // Mettre à jour la liste des articles
        if (cartItems) {
            if (this.items.length === 0) {
                cartItems.innerHTML = `
                    <div class="empty-cart">
                        <i class="fas fa-shopping-bag"></i>
                        <p>Votre panier est vide</p>
                    </div>
                `;
            } else {
                cartItems.innerHTML = this.items.map((item, index) => `
                    <div class="cart-item">
                        <img src="${item.image}" alt="${item.name}" class="cart-item-image" onerror="this.src='data:image/svg+xml,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 width=%22100%22 height=%22100%22%3E%3Crect fill=%22%23f5e6d3%22 width=%22100%22 height=%22100%22/%3E%3Ctext fill=%22%23c9a876%22 font-family=%22Arial%22 font-size=%2212%22 x=%2250%25%22 y=%2250%25%22 text-anchor=%22middle%22 dy=%22.3em%22%3EFedya%3C/text%3E%3C/svg%3E'">
                        <div class="cart-item-details">
                            <div class="cart-item-title">${item.name}</div>
                            ${item.color ? `<div class="cart-item-variant">Couleur: ${item.color}</div>` : ''}
                            ${item.finish ? `<div class="cart-item-variant">Finition: ${item.finish}</div>` : ''}
                            <div class="cart-item-price">${item.price.toFixed(2)} €</div>
                            <div class="cart-item-actions">
                                <div class="qty-control">
                                    <button onclick="cart.updateQuantity(${index}, ${item.quantity - 1})" aria-label="Diminuer quantité">−</button>
                                    <span>${item.quantity}</span>
                                    <button onclick="cart.updateQuantity(${index}, ${item.quantity + 1})" aria-label="Augmenter quantité">+</button>
                                </div>
                                <button class="remove-item" onclick="cart.removeItem(${index})" aria-label="Supprimer produit">
                                    <i class="fas fa-trash"></i>
                                </button>
                            </div>
                        </div>
                    </div>
                `).join('');
            }
        }

        // Mettre à jour le total
        if (totalAmount) {
            totalAmount.textContent = `${this.getTotal().toFixed(2)} €`;
        }
    }

    // Afficher une notification
    showNotification(message) {
        // Supprimer les notifications existantes
        const existing = document.querySelector('.cart-notification');
        if (existing) {
            existing.remove();
        }

        const notification = document.createElement('div');
        notification.className = 'cart-notification';
        notification.textContent = message;
        document.body.appendChild(notification);

        // Animation d'entrée
        setTimeout(() => notification.classList.add('show'), 10);

        // Supprimer après 3 secondes
        setTimeout(() => {
            notification.classList.remove('show');
            setTimeout(() => notification.remove(), 300);
        }, 3000);
    }

    // Obtenir les données du panier pour WhatsApp
    getCartData() {
        return {
            items: this.items,
            total: this.getTotal(),
            itemCount: this.getItemCount()
        };
    }
}

// Initialiser le panier
const cart = new ShoppingCart();

// Ajouter les styles pour les notifications
const style = document.createElement('style');
style.textContent = `
    .cart-notification {
        position: fixed;
        top: 100px;
        right: -400px;
        background: #25D366;
        color: white;
        padding: 1rem 2rem;
        border-radius: 50px;
        box-shadow: 0 10px 30px rgba(0,0,0,0.2);
        z-index: 9999;
        font-weight: 600;
        transition: right 0.3s ease;
    }
    
    .cart-notification.show {
        right: 20px;
    }
    
    @media (max-width: 768px) {
        .cart-notification {
            right: -100%;
            left: auto;
            width: calc(100% - 40px);
            max-width: 300px;
        }
        
        .cart-notification.show {
            right: 20px;
        }
    }
`;
document.head.appendChild(style);

// Export pour utilisation dans d'autres fichiers
if (typeof module !== 'undefined' && module.exports) {
    module.exports = ShoppingCart;
}
