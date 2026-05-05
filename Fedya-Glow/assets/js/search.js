// Fedya Glow - Search System
// search.js - Système de recherche produits

class SearchSystem {
    constructor() {
        this.searchData = [];
        this.isOpen = false;
        this.init();
    }

    init() {
        this.buildSearchIndex();
        this.createSearchUI();
        this.setupEventListeners();
    }

    // Construire l'index de recherche depuis les produits
    buildSearchIndex() {
        if (typeof products !== 'undefined') {
            this.searchData = products.map(p => ({
                ...p,
                searchText: `${p.name} ${p.description} ${p.category}`.toLowerCase()
            }));
        }
    }

    // Créer l'interface de recherche
    createSearchUI() {
        // Bouton de recherche dans le header
        const headerActions = document.querySelector('.header-actions');
        if (headerActions) {
            const searchBtn = document.createElement('button');
            searchBtn.className = 'search-btn';
            searchBtn.id = 'searchBtn';
            searchBtn.innerHTML = '<i class="fas fa-search"></i>';
            headerActions.insertBefore(searchBtn, headerActions.firstChild);
        }

        // Modal de recherche
        const modal = document.createElement('div');
        modal.id = 'searchModal';
        modal.className = 'search-modal';
        modal.innerHTML = `
            <div class="search-overlay" id="searchOverlay"></div>
            <div class="search-container">
                <div class="search-input-wrapper">
                    <i class="fas fa-search search-icon"></i>
                    <input 
                        type="text" 
                        id="searchInput" 
                        placeholder="Rechercher un produit..." 
                        autocomplete="off"
                    >
                    <button class="search-close" id="searchClose">
                        <i class="fas fa-times"></i>
                    </button>
                </div>
                <div class="search-results" id="searchResults">
                    <p class="search-hint">Tapez pour rechercher...</p>
                </div>
            </div>
        `;
        document.body.appendChild(modal);

        // Ajouter les styles
        this.addStyles();
    }

    // Gérer les événements
    setupEventListeners() {
        const searchBtn    = document.getElementById('searchBtn');
        const searchClose  = document.getElementById('searchClose');
        const searchOverlay = document.getElementById('searchOverlay');
        const searchInput  = document.getElementById('searchInput');

        searchBtn?.addEventListener('click', () => this.open());
        searchClose?.addEventListener('click', () => this.close());
        searchOverlay?.addEventListener('click', () => this.close());

        searchInput?.addEventListener('input', (e) => {
            this.search(e.target.value);
        });

        // Raccourci clavier Ctrl+K ou /
        document.addEventListener('keydown', (e) => {
            if ((e.ctrlKey && e.key === 'k') || (e.key === '/' && !this.isOpen)) {
                e.preventDefault();
                this.open();
            }
            if (e.key === 'Escape' && this.isOpen) {
                this.close();
            }
        });
    }

    // Ouvrir la recherche
    open() {
        const modal = document.getElementById('searchModal');
        const input = document.getElementById('searchInput');
        modal?.classList.add('active');
        document.body.style.overflow = 'hidden';
        this.isOpen = true;
        setTimeout(() => input?.focus(), 100);
    }

    // Fermer la recherche
    close() {
        const modal = document.getElementById('searchModal');
        const input = document.getElementById('searchInput');
        modal?.classList.remove('active');
        document.body.style.overflow = '';
        this.isOpen = false;
        if (input) input.value = '';
        this.showHint();
    }

    // Effectuer la recherche
    search(query) {
        const resultsContainer = document.getElementById('searchResults');
        if (!resultsContainer) return;

        query = query.trim().toLowerCase();

        if (query.length < 2) {
            this.showHint();
            return;
        }

        const results = this.searchData.filter(p => 
            p.searchText.includes(query)
        );

        if (results.length === 0) {
            resultsContainer.innerHTML = `
                <div class="search-no-results">
                    <i class="fas fa-search"></i>
                    <p>Aucun résultat pour "<strong>${query}</strong>"</p>
                    <p>Essayez avec d'autres mots-clés</p>
                </div>
            `;
            return;
        }

        resultsContainer.innerHTML = `
            <p class="search-count">${results.length} résultat(s) pour "${query}"</p>
            <div class="search-results-grid">
                ${results.map(product => `
                    <a href="${product.url}" class="search-result-item" onclick="searchSystem.close()">
                        <img src="${product.image}" alt="${product.name}" onerror="this.src='data:image/svg+xml,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 width=%22100%22 height=%22100%22%3E%3Crect fill=%22%23f5e6d3%22 width=%22100%22 height=%22100%22/%3E%3C/svg%3E'">
                        <div class="search-result-info">
                            <h4>${this.highlight(product.name, query)}</h4>
                            <p>${product.description}</p>
                            <div class="search-result-price">
                                <span class="price">${product.price.toFixed(2)} €</span>
                                ${product.oldPrice ? `<span class="old-price">${product.oldPrice.toFixed(2)} €</span>` : ''}
                            </div>
                        </div>
                        <button class="search-add-cart" onclick="event.preventDefault(); event.stopPropagation(); addToCartQuick(${product.id}); searchSystem.close();" title="Ajouter au panier">
                            <i class="fas fa-shopping-bag"></i>
                        </button>
                    </a>
                `).join('')}
            </div>
        `;
    }

    // Afficher l'astuce initiale
    showHint() {
        const resultsContainer = document.getElementById('searchResults');
        if (resultsContainer) {
            resultsContainer.innerHTML = '<p class="search-hint">Tapez pour rechercher...</p>';
        }
    }

    // Mettre en évidence le texte recherché
    highlight(text, query) {
        const regex = new RegExp(`(${query})`, 'gi');
        return text.replace(regex, '<mark>$1</mark>');
    }

    // Ajouter les styles CSS
    addStyles() {
        const style = document.createElement('style');
        style.textContent = `
            /* Bouton Recherche */
            .search-btn {
                background: none;
                border: none;
                font-size: 1.3rem;
                cursor: pointer;
                color: var(--primary);
                transition: all 0.3s ease;
                padding: 0.3rem;
            }

            .search-btn:hover {
                color: var(--accent);
                transform: scale(1.1);
            }

            /* Modal Recherche */
            .search-modal {
                display: none;
                position: fixed;
                inset: 0;
                z-index: 9000;
                align-items: flex-start;
                justify-content: center;
                padding-top: 100px;
            }

            .search-modal.active {
                display: flex;
            }

            .search-overlay {
                position: absolute;
                inset: 0;
                background: rgba(0,0,0,0.7);
                backdrop-filter: blur(4px);
            }

            .search-container {
                position: relative;
                width: 90%;
                max-width: 700px;
                background: white;
                border-radius: 20px;
                overflow: hidden;
                box-shadow: 0 30px 60px rgba(0,0,0,0.3);
                animation: zoomIn 0.2s ease;
                max-height: 80vh;
                display: flex;
                flex-direction: column;
            }

            .search-input-wrapper {
                display: flex;
                align-items: center;
                padding: 1.5rem 2rem;
                border-bottom: 1px solid var(--border, #E8E8E8);
                gap: 1rem;
            }

            .search-icon {
                font-size: 1.3rem;
                color: var(--accent, #C9A876);
            }

            #searchInput {
                flex: 1;
                border: none;
                outline: none;
                font-size: 1.2rem;
                color: var(--text, #333);
                background: transparent;
            }

            #searchInput::placeholder {
                color: #999;
            }

            .search-close {
                background: none;
                border: none;
                font-size: 1.3rem;
                cursor: pointer;
                color: #999;
                transition: all 0.3s ease;
            }

            .search-close:hover {
                color: var(--accent, #C9A876);
                transform: rotate(90deg);
            }

            .search-results {
                overflow-y: auto;
                padding: 1.5rem 2rem;
                max-height: calc(80vh - 80px);
            }

            .search-hint,
            .search-count {
                color: #999;
                font-size: 0.9rem;
                margin-bottom: 1rem;
            }

            .search-count {
                color: var(--accent, #C9A876);
                font-weight: 600;
            }

            .search-no-results {
                text-align: center;
                padding: 2rem;
                color: #999;
            }

            .search-no-results i {
                font-size: 3rem;
                margin-bottom: 1rem;
                opacity: 0.3;
            }

            .search-results-grid {
                display: flex;
                flex-direction: column;
                gap: 1rem;
            }

            .search-result-item {
                display: flex;
                align-items: center;
                gap: 1rem;
                padding: 1rem;
                border-radius: 12px;
                text-decoration: none;
                color: inherit;
                transition: all 0.3s ease;
                border: 1px solid var(--border, #E8E8E8);
            }

            .search-result-item:hover {
                background: var(--gray, #F8F8F8);
                transform: translateX(5px);
                border-color: var(--accent, #C9A876);
            }

            .search-result-item img {
                width: 70px;
                height: 70px;
                object-fit: cover;
                border-radius: 10px;
                flex-shrink: 0;
            }

            .search-result-info {
                flex: 1;
            }

            .search-result-info h4 {
                font-size: 1rem;
                margin-bottom: 0.3rem;
                color: var(--primary, #000);
            }

            .search-result-info p {
                font-size: 0.85rem;
                color: #666;
                margin-bottom: 0.5rem;
            }

            .search-result-price {
                display: flex;
                align-items: center;
                gap: 0.5rem;
            }

            .search-result-price .price {
                font-weight: 700;
                color: var(--primary, #000);
            }

            .search-result-price .old-price {
                text-decoration: line-through;
                color: #999;
                font-size: 0.85rem;
            }

            .search-add-cart {
                background: var(--accent, #C9A876);
                color: white;
                border: none;
                width: 40px;
                height: 40px;
                border-radius: 50%;
                cursor: pointer;
                font-size: 1rem;
                transition: all 0.3s ease;
                flex-shrink: 0;
            }

            .search-add-cart:hover {
                background: var(--primary, #000);
                transform: scale(1.1);
            }

            mark {
                background: rgba(201, 168, 118, 0.3);
                color: inherit;
                border-radius: 3px;
                padding: 0 2px;
            }

            @media (max-width: 768px) {
                .search-modal {
                    padding-top: 60px;
                    align-items: flex-start;
                }

                .search-container {
                    width: 95%;
                    border-radius: 15px;
                }

                .search-input-wrapper {
                    padding: 1rem 1.5rem;
                }

                #searchInput {
                    font-size: 1rem;
                }
            }
        `;
        document.head.appendChild(style);
    }
}

// Initialiser le système de recherche
const searchSystem = new SearchSystem();
