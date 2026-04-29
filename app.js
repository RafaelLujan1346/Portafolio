// ===== SMOOTH SCROLL PARA EL MENÚ ORIGINAL (DESKTOP) =====
document.querySelectorAll('.nav-menu a').forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();

        const targetId = this.getAttribute('href');
        const target = document.querySelector(targetId);

        if (target) {
            const yOffset = -80; // 🔥 ajuste para el navbar fijo
            const y = target.getBoundingClientRect().top + window.pageYOffset + yOffset;

            window.scrollTo({
                top: y,
                behavior: 'smooth'
            });
        }
    });
});

// ===== MENÚ HAMBURGUESA PARA MÓVIL =====
document.addEventListener('DOMContentLoaded', function() {
    const menuToggle = document.getElementById('menuToggle');
    const mobileMenuOverlay = document.getElementById('mobileMenuOverlay');
    const closeMenuBtn = document.getElementById('closeMenu');
    const mobileLinks = document.querySelectorAll('.mobile-nav-menu a');

    // Abrir menú
    if (menuToggle) {
        menuToggle.addEventListener('click', function() {
            mobileMenuOverlay.classList.add('active');
            document.body.style.overflow = 'hidden'; // Prevenir scroll del fondo
        });
    }

    // Cerrar menú
    function closeMenu() {
        mobileMenuOverlay.classList.remove('active');
        document.body.style.overflow = ''; // Restaurar scroll
    }

    if (closeMenuBtn) {
        closeMenuBtn.addEventListener('click', closeMenu);
    }

    // Cerrar menú al hacer click en el overlay
    if (mobileMenuOverlay) {
        mobileMenuOverlay.addEventListener('click', function(e) {
            if (e.target === mobileMenuOverlay) {
                closeMenu();
            }
        });
    }

    // Cerrar menú al hacer click en un enlace del menú móvil
    mobileLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            closeMenu();
            
            // Smooth scroll al elemento destino (con el mismo offset que tu código original)
            const targetId = this.getAttribute('href');
            if (targetId && targetId !== '#') {
                e.preventDefault();
                const targetElement = document.querySelector(targetId);
                if (targetElement) {
                    const yOffset = -80; // 🔥 mismo offset que usas en tu código
                    const y = targetElement.getBoundingClientRect().top + window.pageYOffset + yOffset;
                    
                    window.scrollTo({
                        top: y,
                        behavior: 'smooth'
                    });
                }
            }
        });
    });

    // Cerrar menú al presionar la tecla ESC
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && mobileMenuOverlay.classList.contains('active')) {
            closeMenu();
        }
    });
});