// Fedya Glow - Animations System
// animations.js - Système d'animations avancées

document.addEventListener('DOMContentLoaded', () => {
    initAnimations();
});

function initAnimations() {
    setupScrollReveal();
    setupHoverEffects();
    setupHeaderScroll();
    setupParallax();
    setupCounters();
    setupLoadingScreen();
}

// ===== SCROLL REVEAL =====
function setupScrollReveal() {
    const elements = document.querySelectorAll(
        '.category-card, .product-card, .value-card, .contact-method, .feature, .about-text, .footer-section'
    );

    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry, index) => {
            if (entry.isIntersecting) {
                // Délai en cascade pour chaque élément
                setTimeout(() => {
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateY(0)';
                }, index * 80);
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1 });

    elements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });
}

// ===== HEADER SCROLL =====
function setupHeaderScroll() {
    const header = document.querySelector('.header');
    if (!header) return;

    let lastScroll = 0;

    window.addEventListener('scroll', () => {
        const currentScroll = window.pageYOffset;

        // Ajouter ombre au scroll
        if (currentScroll > 50) {
            header.style.boxShadow = '0 4px 20px rgba(0,0,0,0.15)';
        } else {
            header.style.boxShadow = '0 2px 10px rgba(0,0,0,0.1)';
        }

        // Masquer/Afficher header au scroll (optionnel)
        // if (currentScroll > lastScroll && currentScroll > 200) {
        //     header.style.transform = 'translateY(-100%)';
        // } else {
        //     header.style.transform = 'translateY(0)';
        // }

        lastScroll = currentScroll;
    });
}

// ===== PARALLAX HERO =====
function setupParallax() {
    const hero = document.querySelector('.hero');
    if (!hero) return;

    window.addEventListener('scroll', () => {
        const scrolled = window.pageYOffset;
        const rate = scrolled * 0.4;
        hero.style.backgroundPositionY = `${rate}px`;
    });
}

// ===== HOVER EFFECTS =====
function setupHoverEffects() {
    // Effet magnétique sur les boutons
    document.querySelectorAll('.btn-primary, .float-btn').forEach(btn => {
        btn.addEventListener('mousemove', function(e) {
            const rect = this.getBoundingClientRect();
            const x = e.clientX - rect.left - rect.width / 2;
            const y = e.clientY - rect.top - rect.height / 2;
            this.style.transform = `translate(${x * 0.1}px, ${y * 0.1}px)`;
        });

        btn.addEventListener('mouseleave', function() {
            this.style.transform = '';
        });
    });

    // Effet ripple sur les boutons
    document.querySelectorAll('.btn').forEach(btn => {
        btn.addEventListener('click', function(e) {
            const ripple = document.createElement('div');
            const rect = this.getBoundingClientRect();
            const size = Math.max(rect.width, rect.height);
            const x = e.clientX - rect.left - size / 2;
            const y = e.clientY - rect.top - size / 2;

            ripple.style.cssText = `
                position: absolute;
                width: ${size}px;
                height: ${size}px;
                left: ${x}px;
                top: ${y}px;
                background: rgba(255,255,255,0.3);
                border-radius: 50%;
                transform: scale(0);
                animation: ripple 0.6s ease-out;
                pointer-events: none;
            `;

            this.style.position = 'relative';
            this.style.overflow = 'hidden';
            this.appendChild(ripple);

            setTimeout(() => ripple.remove(), 600);
        });
    });
}

// ===== COUNTERS =====
function setupCounters() {
    const counters = document.querySelectorAll('[data-count]');
    if (counters.length === 0) return;

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                animateCounter(entry.target);
                observer.unobserve(entry.target);
            }
        });
    });

    counters.forEach(counter => observer.observe(counter));
}

function animateCounter(el) {
    const target = parseInt(el.dataset.count);
    const duration = 2000;
    const step = target / (duration / 16);
    let current = 0;

    const timer = setInterval(() => {
        current += step;
        if (current >= target) {
            el.textContent = target;
            clearInterval(timer);
        } else {
            el.textContent = Math.floor(current);
        }
    }, 16);
}

// ===== LOADING SCREEN =====
function setupLoadingScreen() {
    const loader = document.getElementById('loader');
    if (!loader) return;

    window.addEventListener('load', () => {
        setTimeout(() => {
            loader.style.opacity = '0';
            loader.style.transition = 'opacity 0.5s ease';
            setTimeout(() => loader.remove(), 500);
        }, 500);
    });
}

// ===== IMAGE LAZY LOADING =====
function setupLazyLoading() {
    const images = document.querySelectorAll('img[data-src]');
    
    const imageObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.removeAttribute('data-src');
                img.classList.add('loaded');
                imageObserver.unobserve(img);
            }
        });
    });

    images.forEach(img => imageObserver.observe(img));
}

// ===== STYLES ANIMATIONS =====
const animationStyles = document.createElement('style');
animationStyles.textContent = `
    @keyframes ripple {
        to {
            transform: scale(4);
            opacity: 0;
        }
    }

    @keyframes slideInLeft {
        from {
            opacity: 0;
            transform: translateX(-50px);
        }
        to {
            opacity: 1;
            transform: translateX(0);
        }
    }

    @keyframes slideInRight {
        from {
            opacity: 0;
            transform: translateX(50px);
        }
        to {
            opacity: 1;
            transform: translateX(0);
        }
    }

    @keyframes zoomIn {
        from {
            opacity: 0;
            transform: scale(0.8);
        }
        to {
            opacity: 1;
            transform: scale(1);
        }
    }

    @keyframes rotateIn {
        from {
            opacity: 0;
            transform: rotate(-10deg) scale(0.9);
        }
        to {
            opacity: 1;
            transform: rotate(0) scale(1);
        }
    }

    .animate-left  { animation: slideInLeft  0.6s ease both; }
    .animate-right { animation: slideInRight 0.6s ease both; }
    .animate-zoom  { animation: zoomIn       0.6s ease both; }
    .animate-spin  { animation: rotateIn     0.6s ease both; }

    img.loaded {
        animation: fadeIn 0.5s ease;
    }

    .header {
        transition: box-shadow 0.3s ease, transform 0.3s ease;
    }
`;
document.head.appendChild(animationStyles);
