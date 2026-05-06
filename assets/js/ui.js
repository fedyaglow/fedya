// Fedya Glow - UI Management
// ui.js - Gestion de l'interface utilisateur

// ===== DONNÉES DES PRODUITS =====
// IMPORTANT: Ajoutez vos propres produits ici
const products = [
    {
        id: 1,
        name: 'Triumph - Recharge parfum homme(Formato:15 ml)',
        category: 'parfums',
        price: 1.00,
        oldPrice: 00,
        image: 'assets/images/products/parfum1.jpeg',
        url: '#',
        description:'Cod(T061) Un parfum frais, sensuel et sportif qui cherche à incarner une vision moderne de la virilité. '
    },
    {
        id: 2,
        name: 'Rouge à Lèvres Nude',
        category: 'parfums',
        price: 24.90,
        oldPrice: 32.00,
        image: 'assets/images/products/parfum1.jpeg',
        url: '#',
        description: 'Teinte nude naturelle'
    },
    {
        id: 3,
        name: 'Parfum Élégance',
        category: 'parfums',
        price: 59.90,
        oldPrice: 75.00,
        image: 'assets/images/products/image.webp',
        url: '#',
        description: 'Fragrance florale orientale'
    },
    {
        id: 4,
        name: 'Sérum Visage Éclat',
        category: 'soins',
        price: 34.90,
        oldPrice: 45.00,
        image: 'assets/images/products/parfum1.jpeg',
        url: '#',
        description: 'Anti-âge et hydratant'
    },
    {
        id: 5,
        name: 'Set Pinceaux Pro',
        category: 'accessoires',
        price: 39.90,
        oldPrice: 55.00,
        image: 'assets/images/products/parfum1.jpeg',
        url: '#',
        description: '12 pinceaux professionnels'
    },
    {
        id: 6,
        name: 'Palette Yeux Nude',
        category: 'maquillage',
        price: 44.90,
        oldPrice: 60.00,
        image: 'assets/images/products/parfum1.jpeg',
        url: '#',
        description: '18 teintes harmonieuses'
    },
    {
        id: 7,
        name: 'Fond de Teint Lumineux',
        category: 'maquillage',
        price: 29.90,
        oldPrice: 38.00,
        image: 'assets/images/products/parfum1.jpeg',
        url: '#',
        description: 'Couvrance moyenne, fini naturel'
    },
    {
        id: 8,
        name: 'Mascara Volume Intense',
        category: 'maquillage',
        price: 19.90,
        oldPrice: 26.00,
        image: 'assets/images/products/parfum1.jpeg',
        url: '#',
        description: 'Volume xxl sans paquets'
    },
{
    id: 9,
    name: "Wild Bloom",
    category: "parfums-femme",
    price: 39.90,
    oldPrice: 55.00,
    image: "assets/images/products/parfum1.jpeg",
    url: "assets/categories/parfums/femme/wild-bloom.html",
    description: "Parfum féminin intense et élégant"
},


{
    id: 10,
    name: "Parfum femme essence(006)(70ml)",
    category: "parfums",
    price: 35.00,
    oldPrice: 00,
    image: "assets/images/products/f1.jpeg",
    url: "assets/categories/parfums/femme/wild-bloom.html",
    description: "Plus qu’un parfum : un sillage opulent, séduisant et inimitable. Un billet aller simple vers un ailleurs symbolique et énigmatique. Un voyage imaginaire dans une terre de rêve au charme inattendu. Une fragrance qui permet de vivre la vie à son apogée, de franchir une porte ouverte vers un univers imaginaire, extraordinaire, mystérieux, riche en sensations et en émotions.\n\nRÉFÉRENCE CPNP : 5040539\n\nPyramide olfactive :\nNote de tête : Bergamote, Mandarine, Muguet\nNote de cœur : Jasmin, Myrrhe\nNote de fond : Ambre, Opoponax somalien, Patchouli, Vanille"
}

];

// ===== INITIALISATION AU CHARGEMENT DE LA PAGE =====
document.addEventListener('DOMContentLoaded', function() {
    initializeUI();
});

function initializeUI() {
    // Menu mobile
    setupMobileMenu();
    
    // Panier sidebar
    setupCartSidebar();
    
    // Charger les produits
    loadFeaturedProducts();
    loadAllProducts();
    
    // Filtres de produits
    setupProductFilters();
    
    // Smooth scroll
    setupSmoothScroll();
    
    // Animation au scroll
    setupScrollAnimations();
}

// ===== MENU MOBILE =====
function setupMobileMenu() {
    const menuToggle = document.getElementById('menuToggle');
    const navMenu = document.getElementById('navMenu');
    
    if (menuToggle && navMenu) {
        menuToggle.addEventListener('click', () => {
            navMenu.classList.toggle('active');
            menuToggle.classList.toggle('active');
            document.body.style.overflow = navMenu.classList.contains('active') ? 'hidden' : '';
        });

        // Fermer le menu en cliquant sur un lien
        navMenu.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                navMenu.classList.remove('active');
                menuToggle.classList.remove('active');
                document.body.style.overflow = '';
            });
        });

        // Fermer le menu en cliquant à l'extérieur
        document.addEventListener('click', (e) => {
            if (!navMenu.contains(e.target) && !menuToggle.contains(e.target)) {
                navMenu.classList.remove('active');
                menuToggle.classList.remove('active');
                document.body.style.overflow = '';
            }
        });
    }
}

// ===== PANIER SIDEBAR =====
function setupCartSidebar() {
    const cartBtn = document.getElementById('cartBtn');
    const cartSidebar = document.getElementById('cartSidebar');
    const closeCart = document.getElementById('closeCart');
    
    if (cartBtn && cartSidebar) {
        cartBtn.addEventListener('click', () => {
            cartSidebar.classList.add('active');
            document.body.style.overflow = 'hidden';
        });
    }
    
    if (closeCart && cartSidebar) {
        closeCart.addEventListener('click', () => {
            cartSidebar.classList.remove('active');
            document.body.style.overflow = '';
        });
    }

    // Fermer en cliquant à l'extérieur
    document.addEventListener('click', (e) => {
        if (cartSidebar && cartSidebar.classList.contains('active')) {
            if (!cartSidebar.contains(e.target) && !cartBtn.contains(e.target)) {
                cartSidebar.classList.remove('active');
                document.body.style.overflow = '';
            }
        }
    });
}

// ===== CHARGER LES PRODUITS VEDETTES =====
function loadFeaturedProducts() {
    const container = document.getElementById('featuredProducts');
    if (container) {
        const featured = products.slice(0, 6);
        renderProducts(featured, container);
    }
}

// ===== CHARGER TOUS LES PRODUITS =====
function loadAllProducts() {
    const container = document.getElementById('productsGrid');
    if (container) {
        renderProducts(products, container);
    }
}

// ===== AFFICHER LES PRODUITS =====
function renderProducts(productsArray, container) {
    container.innerHTML = productsArray.map(product => {
        const discount = product.oldPrice ? Math.round(((product.oldPrice - product.price) / product.oldPrice) * 100) : 0;
        
        return `
        <div class="product-card" data-category="${product.category}">
            <a href="${product.url}" style="text-decoration: none; color: inherit;">
                <img src="${product.image}" 
                     alt="${product.name}" 
                     class="product-image" 
                     onerror="this.src='data:image/svg+xml,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 width=%22300%22 height=%22300%22%3E%3Crect fill=%22%23f5e6d3%22 width=%22300%22 height=%22300%22/%3E%3Ctext fill=%22%23c9a876%22 font-family=%22Arial%22 font-size=%2220%22 x=%2250%25%22 y=%2250%25%22 text-anchor=%22middle%22 dy=%22.3em%22%3EFEDYA GLOW%3C/text%3E%3C/svg%3E'">
                <div class="product-card-content">
                    <h3>${product.name}</h3>
                    <p>${product.description}</p>
                    <div class="product-card-price">
                        <span class="price">${product.price.toFixed(2)} €</span>
                        ${product.oldPrice ? `
                            <span class="old-price">${product.oldPrice.toFixed(2)} €</span>
                            ${discount > 0 ? `<span class="discount">-${discount}%</span>` : ''}
                        ` : ''}
                    </div>
                </div>
            </a>
            <button class="btn btn-primary" onclick="addToCartQuick(${product.id})" style="width: calc(100% - 3rem); margin: 0 1.5rem 1.5rem;">
                <i class="fas fa-shopping-bag"></i> Ajouter
            </button>
        </div>
        `;
    }).join('');
}

// ===== AJOUT RAPIDE AU PANIER =====
function addToCartQuick(productId) {
    const product = products.find(p => p.id === productId);
    if (product) {
        cart.addItem({
            id: product.id,
            name: product.name,
            price: product.price,
            image: product.image,
            quantity: 1
        });
    }
}

// ===== FILTRES DE PRODUITS =====
function setupProductFilters() {
    const filterBtns = document.querySelectorAll('.filter-btn');
    const productCards = document.querySelectorAll('.product-card');

    filterBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            const filter = btn.dataset.filter;
            
            // Mettre à jour le bouton actif
            filterBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');

            // Filtrer les produits
            productCards.forEach(card => {
                if (filter === 'all' || card.dataset.category === filter) {
                    card.style.display = 'block';
                    card.style.animation = 'fadeIn 0.5s';
                } else {
                    card.style.display = 'none';
                }
            });
        });
    });
}

// ===== SMOOTH SCROLL =====
function setupSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const href = this.getAttribute('href');
            if (href === '#') return;
            
            e.preventDefault();
            const target = document.querySelector(href);
            if (target) {
                target.scrollIntoView({ 
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
}

// ===== ANIMATIONS AU SCROLL =====
function setupScrollAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, observerOptions);

    // Observer les éléments à animer
    document.querySelectorAll('.category-card, .product-card, .value-card').forEach(el => {
        observer.observe(el);
    });
}

// ===== UTILITAIRES =====

// Formater le prix
function formatPrice(price) {
    return price.toFixed(2).replace('.', ',') + ' €';
}

// Calculer la réduction
function calculateDiscount(price, oldPrice) {
    if (!oldPrice || oldPrice <= price) return 0;
    return Math.round(((oldPrice - price) / oldPrice) * 100);
}

// Générer une image de placeholder
function getPlaceholderImage(text = 'FEDYA GLOW') {
    return `data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='300' height='300'%3E%3Crect fill='%23f5e6d3' width='300' height='300'/%3E%3Ctext fill='%23c9a876' font-family='Arial' font-size='20' x='50%25' y='50%25' text-anchor='middle' dy='.3em'%3E${text}%3C/text%3E%3C/svg%3E`;
}

// ===== GESTION DES ERREURS D'IMAGES =====
document.addEventListener('error', function(e) {
    if (e.target.tagName === 'IMG') {
        e.target.src = getPlaceholderImage();
    }
}, true);

// ===== EXPORT =====
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        products,
        addToCartQuick,
        formatPrice,
        calculateDiscount
    };
}