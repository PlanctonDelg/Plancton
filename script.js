document.addEventListener('DOMContentLoaded', function() {
    const bubbles = document.querySelectorAll('.bubble');
    const speed = 2;  // Vitesse de déplacement des bulles
    const directions = [];

    bubbles.forEach((bubble, index) => {
        // Position de départ aléatoire pour chaque bulle
        let x = Math.random() * (window.innerWidth - bubble.offsetWidth);
        let y = Math.random() * (window.innerHeight - bubble.offsetHeight);

        // Vitesse de déplacement (aléatoire)
        let dx = (Math.random() * speed) + 1; // Vitesse sur l'axe X
        let dy = (Math.random() * speed) + 1; // Vitesse sur l'axe Y

        // Appliquer la position initiale
        bubble.style.left = `${x}px`;
        bubble.style.top = `${y}px`;

        // Enregistrer la direction et la vitesse de chaque bulle
        directions[index] = { x, y, dx, dy };
    });

    // Fonction pour mettre à jour la position des bulles
    function moveBubbles() {
        bubbles.forEach((bubble, index) => {
            let { x, y, dx, dy } = directions[index];

            // Mettre à jour la position
            x += dx;
            y += dy;

            // Rebondir lorsque la bulle touche les bords de l'écran
            if (x + bubble.offsetWidth >= window.innerWidth || x <= 0) {
                dx = -dx;  // Inverser la direction sur l'axe X
            }

            if (y + bubble.offsetHeight >= window.innerHeight || y <= 0) {
                dy = -dy;  // Inverser la direction sur l'axe Y
            }

            // Appliquer la nouvelle position
            bubble.style.left = `${x}px`;
            bubble.style.top = `${y}px`;

            // Mettre à jour la direction dans le tableau
            directions[index] = { x, y, dx, dy };
        });

        // Répéter l'animation
        requestAnimationFrame(moveBubbles);
    }

    // Démarrer l'animation
    moveBubbles();
});
