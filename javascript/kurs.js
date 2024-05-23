AOS.init();
let count = 0;
const userCountElement = document.getElementById('userCount');

function animateNumber() {
    const speed = 150;
    const step = 20; 

    const interval = Math.floor(speed / count);
    const intervalId = setInterval(() => {
        count += step;
        userCountElement.textContent = count;
        if (count >= 1678) {
            clearInterval(intervalId);
        }
    }, interval);
}

animateNumber(); 