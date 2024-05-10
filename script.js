document.addEventListener('DOMContentLoaded', function() {
    // Efekt przejrzystości dla paska nawigacji po przewinięciu strony
    const navbar = document.querySelector('.navbar');
    window.onscroll = () => {
        if (window.scrollY > 50) {
            navbar.classList.remove('transparent');
            navbar.style.background = 'rgba(0, 0, 0, 0.8)';
        } else {
            navbar.classList.add('transparent');
            navbar.style.background = 'rgba(0, 0, 0, 0)';
        }
    };
});
