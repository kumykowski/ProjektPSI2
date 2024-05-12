document.addEventListener('DOMContentLoaded', function() {
    const header = document.querySelector('header');
    let lastScrollTop = 0;

    window.addEventListener('scroll', function() {
        let currentScroll = window.pageYOffset || document.documentElement.scrollTop;

        // Dodanie warunku dla góry strony
        if (currentScroll <= 0) {
            header.classList.add('expanded');
            header.classList.remove('hidden');
        } else if (currentScroll > lastScrollTop && currentScroll > 100) {
            // Użytkownik przewija w dół
            header.classList.add('hidden');
            header.classList.remove('expanded');
        } else if (currentScroll < lastScrollTop) {
            // Użytkownik przewija w górę
            header.classList.remove('hidden');
        }
        lastScrollTop = currentScroll <= 0 ? 0 : currentScroll; // Aktualizacja ostatniej znanej pozycji scrolla
    }, false);
});
