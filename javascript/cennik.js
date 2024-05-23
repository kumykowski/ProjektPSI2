document.addEventListener('DOMContentLoaded', function () {
    function initAnimations() {
        const elements = document.querySelectorAll('[data-animate]');
        elements.forEach(element => {
            const animationClass = element.getAttribute('data-animate');
            const offset = element.getAttribute('data-offset') || 100;
            const duration = element.getAttribute('data-duration') || '0.6s';
            const easing = element.getAttribute('data-easing') || 'ease';

            element.style.transition = `opacity ${duration} ${easing}, transform ${duration} ${easing}`;
            element.style.opacity = 0;
            element.style.transform = 'translateY(20px)';
            element.dataset.offset = offset;
        });
    }

    function animateElements() {
        const elements = document.querySelectorAll('[data-animate]');
        elements.forEach(element => {
            const rect = element.getBoundingClientRect();
            const offset = element.dataset.offset || 100;

            if (rect.top <= (window.innerHeight - offset) && rect.bottom >= 0) {
                element.style.opacity = 1;
                element.style.transform = 'translateY(0)';
            } else {
                element.style.opacity = 0;
                element.style.transform = 'translateY(20px)';
            }
        });
    }

    initAnimations();
    animateElements();

    window.addEventListener('scroll', animateElements);
    window.addEventListener('resize', animateElements);
});
