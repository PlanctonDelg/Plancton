document.addEventListener('DOMContentLoaded', function() {
    const bubbles = document.querySelectorAll('.bubble');

    bubbles.forEach(bubble => {
        bubble.addEventListener('click', function() {
            // Ajoute un effet de clic en ajoutant une classe temporaire
            this.classList.add('clicked');
            setTimeout(() => {
                this.classList.remove('clicked');
            }, 300);
        });
    });
});
