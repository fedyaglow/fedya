// Fedya Glow - Product Page Management
// product.js - Gestion des pages produits individuelles

document.addEventListener('DOMContentLoaded', function() {
    initializeProductPage();
});

function initializeProductPage() {
    setupImageGallery();
    setupColorSelection();
    setupFinishSelection();
    setupQuantityControls();
    setupAddToCart();
    setupProductTabs();
}

// ===== GALERIE D'IMAGES =====
function setupImageGallery() {
    const thumbnails = document.querySelectorAll('.thumbnail');
    const mainImage = document.getElementById('mainImage');

    if (!mainImage || thumbnails.length === 0) return;

    thumbnails.forEach(thumb => {
        thumb.addEventListener('click', () => {
            // Retirer la classe active de toutes les miniatures
            thumbnails.forEach(t => t.classList.remove('active'));
            
            // Ajouter la classe active à la miniature cliquée
            thumb.classList.add('active');
            
            // Changer l'image principale
            mainImage.src = thumb.src;
            mainImage.style.animation = 'none';
            
            // Réinitialiser l'animation
            setTimeout(() => {
                mainImage.style.animation = 'fadeIn 0.3s';
            }, 10);
        });

        // Gestion du clavier pour l'accessibilité
        thumb.addEventListener('keypress', (e) => {
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                thumb.click();
            }
        });
    });
}

// ===== SÉLECTION DE COULEUR =====
function setupColorSelection() {
    const colorOptions = document.querySelectorAll('.color-option');
    const selectedColor = document.getElementById('selectedColor');

    if (colorOptions.length === 0) return;

    colorOptions.forEach(option => {
        option.addEventListener('click', () => {
            // Retirer la classe active
            colorOptions.forEach(o => o.classList.remove('active'));
            
            // Ajouter la classe active
            option.classList.add('active');
            
            // Mettre à jour le texte
            if (selectedColor) {
                const colorName = option.dataset.color || 'Non spécifiée';
                selectedColor.textContent = `Teinte sélectionnée: ${colorName}`;
            }
            
            // Animation
            option.style.animation = 'none';
            setTimeout(() => {
                option.style.animation = 'pulse 0.3s';
            }, 10);
        });

        // Accessibilité clavier
        option.addEventListener('keypress', (e) => {
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                option.click();
            }
        });
    });
}

// ===== SÉLECTION DE FINITION =====
function setupFinishSelection() {
    const finishOptions = document.querySelectorAll('.finish-option');
    const selectedFinish = document.getElementById('selectedFinish');

    if (finishOptions.length === 0) return;

    finishOptions.forEach(option => {
        option.addEventListener('click', () => {
            // Retirer la classe active
            finishOptions.forEach(o => o.classList.remove('active'));
            
            // Ajouter la classe active
            option.classList.add('active');
            
            // Mettre à jour le texte
            if (selectedFinish) {
                const finishName = option.dataset.finish || 'Non spécifiée';
                selectedFinish.textContent = `Finition: ${finishName}`;
            }
        });
    });
}

// ===== CONTRÔLES DE QUANTITÉ =====
function setupQuantityControls() {
    const decreaseQty = document.getElementById('decreaseQty');
    const increaseQty = document.getElementById('increaseQty');
    const quantityInput = document.getElementById('quantityInput');

    if (!decreaseQty || !increaseQty || !quantityInput) return;

    // Diminuer la quantité
    decreaseQty.addEventListener('click', () => {
        const current = parseInt(quantityInput.value);
        if (current > 1) {
            quantityInput.value = current - 1;
            animateQuantityChange();
        }
    });

    // Augmenter la quantité
    increaseQty.addEventListener('click', () => {
        const current = parseInt(quantityInput.value);
        if (current < 10) {
            quantityInput.value = current + 1;
            animateQuantityChange();
        } else {
            showNotification('⚠️ Quantité maximale: 10');
        }
    });

    // Valider la saisie manuelle
    quantityInput.addEventListener('input', () => {
        let value = parseInt(quantityInput.value);
        if (isNaN(value) || value < 1) {
            quantityInput.value = 1;
        } else if (value > 10) {
            quantityInput.value = 10;
            showNotification('⚠️ Quantité maximale: 10');
        }
    });
}

// Animation du changement de quantité
function animateQuantityChange() {
    const quantityInput = document.getElementById('quantityInput');
    if (quantityInput) {
        quantityInput.style.transform = 'scale(1.1)';
        setTimeout(() => {
            quantityInput.style.transform = 'scale(1)';
        }, 200);
    }
}

// ===== AJOUTER AU PANIER =====
function setupAddToCart() {
    const addToCartBtn = document.getElementById('addToCart');
    
    if (!addToCartBtn) return;

    addToCartBtn.addEventListener('click', () => {
        // Récupérer les informations du produit
        const productData = getProductData();
        
        // Validation
        if (!validateProductData(productData)) {
            return;
        }

        // Ajouter au panier
        if (typeof cart !== 'undefined') {
            cart.addItem(productData);
            
            // Animation du bouton
            animateAddToCart(addToCartBtn);
        } else {
            console.error('Cart object not found');
            showNotification('❌ Erreur lors de l\'ajout au panier');
        }
    });
}

// Récupérer les données du produit
function getProductData() {
    const productTitle = document.querySelector('.product-title');
    const currentPrice = document.querySelector('.current-price');
    const mainImage = document.getElementById('mainImage');
    const quantityInput = document.getElementById('quantityInput');
    const activeColor = document.querySelector('.color-option.active');
    const activeFinish = document.querySelector('.finish-option.active');

    return {
        id: Date.now(), // ID unique basé sur le timestamp
        name: productTitle?.textContent || 'Produit',
        price: parseFloat(currentPrice?.textContent.replace('€', '').replace(',', '.').trim()) || 0,
        image: mainImage?.src || '',
        quantity: parseInt(quantityInput?.value) || 1,
        color: activeColor?.dataset.color || '',
        finish: activeFinish?.dataset.finish || ''
    };
}

// Valider les données du produit
function validateProductData(data) {
    if (!data.name || data.name === 'Produit') {
        showNotification('❌ Nom du produit invalide');
        return false;
    }
    
    if (data.price <= 0) {
        showNotification('❌ Prix du produit invalide');
        return false;
    }
    
    if (data.quantity < 1 || data.quantity > 10) {
        showNotification('❌ Quantité invalide (1-10)');
        return false;
    }
    
    return true;
}

// Animation du bouton Ajouter au panier
function animateAddToCart(button) {
    const originalText = button.innerHTML;
    
    button.innerHTML = '<i class="fas fa-check"></i> Ajouté !';
    button.style.background = '#25D366';
    button.disabled = true;
    
    setTimeout(() => {
        button.innerHTML = originalText;
        button.style.background = '';
        button.disabled = false;
    }, 2000);
}

// ===== ONGLETS PRODUIT =====
function setupProductTabs() {
    const tabBtns = document.querySelectorAll('.tab-btn');
    const tabContents = document.querySelectorAll('.tab-content');

    if (tabBtns.length === 0 || tabContents.length === 0) return;

    tabBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            const tabId = btn.dataset.tab;
            
            // Retirer toutes les classes active
            tabBtns.forEach(b => b.classList.remove('active'));
            tabContents.forEach(content => content.classList.remove('active'));
            
            // Ajouter la classe active
            btn.classList.add('active');
            const targetContent = document.getElementById(tabId);
            if (targetContent) {
                targetContent.classList.add('active');
            }
        });
    });
}

// ===== UTILITAIRES =====

// Afficher une notification
function showNotification(message) {
    const notification = document.createElement('div');
    notification.className = 'product-notification';
    notification.textContent = message;
    document.body.appendChild(notification);

    setTimeout(() => notification.classList.add('show'), 10);

    setTimeout(() => {
        notification.classList.remove('show');
        setTimeout(() => notification.remove(), 300);
    }, 3000);
}

// Ajouter les styles pour les notifications
const styles = document.createElement('style');
styles.textContent = `
    .product-notification {
        position: fixed;
        top: 100px;
        right: -400px;
        background: #333;
        color: white;
        padding: 1rem 2rem;
        border-radius: 50px;
        box-shadow: 0 10px 30px rgba(0,0,0,0.2);
        z-index: 9999;
        font-weight: 600;
        transition: right 0.3s ease;
    }
    
    .product-notification.show {
        right: 20px;
    }
    
    @keyframes pulse {
        0%, 100% { transform: scale(1); }
        50% { transform: scale(1.05); }
    }
    
    @media (max-width: 768px) {
        .product-notification {
            right: -100%;
            width: calc(100% - 40px);
            max-width: 300px;
        }
        
        .product-notification.show {
            right: 20px;
        }
    }
`;
document.head.appendChild(styles);

// ===== EXPORT =====
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        getProductData,
        validateProductData
    };
}
