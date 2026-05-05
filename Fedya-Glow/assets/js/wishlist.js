// Fedya Glow - Wishlist System
// wishlist.js - Système de liste de souhaits

class WishlistSystem {
    constructor() {
        this.items = this.load();
        this.init();
    }

    // Charger depuis LocalStorage
    load() {
        const saved = localStorage.getItem('fedyaGlowWishlist');
        return saved ? JSON.parse(saved) : [];
    }

    // Sauvegarder
    save() {
        localStorage.setItem('fedyaGlowWishlist', JSON.stringify(this.items));
        this.updateUI();
    }

    // Initialiser
    init() {
        this.addWishlistButtons();
        this.updateUI();
    }

    // Ajouter/Supprimer un produit
    toggle(productId) {
        const index = this.items.indexOf(productId);
        if (index === -1) {
            this.items.push(productId);
            this.showNotification('❤️ Ajouté aux favoris!');
        } else {
            this.items.splice(index, 1);
            this.showNotification('💔 Retiré des favoris');
        }
        this.save();
    }

    // Vérifier si un produit est dans la wishlist
    has(productId) {
        return this.items.includes(productId);
    }

    // Vider la wishlist
    clear() {
        this.items = [];
        this.save();
    }

    // Obtenir le nombre d'items
    count() {
        return this.items.length;
    }

    // Mettre à jour l'interface
    updateUI() {
        document.querySelectorAll('[data-wishlist-id]').forEach(btn => {
            const id = parseInt(btn.dataset.wishlistId);
            if (this.has(id)) {
                btn.classList.add('active');
                btn.querySelector('i').className = 'fas fa-heart';
                btn.title = 'Retirer des favoris';
            } else {
                btn.classList.remove('active');
                btn.querySelector('i').className = 'far fa-heart';
                btn.title = 'Ajouter aux favoris';
            }
        });
    }

    // Ajouter les boutons wishlist aux cartes produits
    addWishlistButtons() {
        document.querySelectorAll('.product-card').forEach(card => {
            const productId = card.dataset.productId;
            if (!productId) return;

            const btn = document.createElement('button');
            btn.className = 'wishlist-btn';
            btn.dataset.wishlistId = productId;
            btn.innerHTML = '<i class="far fa-heart"></i>';
            btn.title = 'Ajouter aux favoris';
            btn.addEventListener('click', (e) => {
                e.preventDefault();
                e.stopPropagation();
                this.toggle(parseInt(productId));
            });

            card.style.position = 'relative';
            card.appendChild(btn);
        });

        this.addStyles();
    }

    // Notification
    showNotification(message) {
        const notif = document.createElement('div');
        notif.className = 'wishlist-notification';
        notif.textContent = message;
        document.body.appendChild(notif);
        setTimeout(() => notif.classList.add('show'), 10);
        setTimeout(() => {
            notif.classList.remove('show');
            setTimeout(() => notif.remove(), 300);
        }, 2500);
    }

    // Styles
    addStyles() {
        const style = document.createElement('style');
        style.textContent = `
            .wishlist-btn {
                position: absolute;
                top: 15px;
                right: 15px;
                width: 40px;
                height: 40px;
                border-radius: 50%;
                border: none;
                background: white;
                cursor: pointer;
                box-shadow: 0 3px 10px rgba(0,0,0,0.15);
                font-size: 1.1rem;
                color: #ccc;
                transition: all 0.3s ease;
                display: flex;
                align-items: center;
                justify-content: center;
                z-index: 10;
            }

            .wishlist-btn:hover,
            .wishlist-btn.active {
                color: #ff4466;
                transform: scale(1.15);
                box-shadow: 0 5px 15px rgba(255,68,102,0.3);
            }

            .wishlist-btn.active {
                background: #fff0f3;
            }

            .wishlist-btn.active i {
                animation: heartBeat 0.4s ease;
            }

            @keyframes heartBeat {
                0% { transform: scale(1); }
                50% { transform: scale(1.4); }
                100% { transform: scale(1); }
            }

            .wishlist-notification {
                position: fixed;
                top: 100px;
                right: -400px;
                background: #ff4466;
                color: white;
                padding: 1rem 2rem;
                border-radius: 50px;
                box-shadow: 0 10px 30px rgba(0,0,0,0.2);
                z-index: 9999;
                font-weight: 600;
                transition: right 0.3s ease;
            }

            .wishlist-notification.show {
                right: 20px;
            }
        `;
        document.head.appendChild(style);
    }
}

// Initialiser
const wishlist = new WishlistSystem();
