// ==== Navegación por scroll suave ====
const buttons = document.querySelectorAll('.navbar button');

buttons.forEach(btn => {
    btn.addEventListener('click', () => {
        const target = document.getElementById(btn.dataset.section);
        target.scrollIntoView({ behavior: 'smooth' });
    });
});

// ==== Expansión de tarjetas en PROYECTOS ====
const cards = document.querySelectorAll('#proyectos .card');

cards.forEach(card => {
    card.addEventListener('click', () => {
        const infoBox = card.querySelector('.extra-info');
        const text = card.dataset.info;

        // Cierra tarjeta abierta
        if (card.classList.contains('expanded')) {
            card.classList.remove('expanded');
            infoBox.textContent = "";
            return;
        }

        // Cierra otras tarjetas
        cards.forEach(c => {
            c.classList.remove('expanded');
            c.querySelector('.extra-info').textContent = "";
        });

        // Muestra información
        card.classList.add('expanded');
        infoBox.textContent = text;
    });
});
