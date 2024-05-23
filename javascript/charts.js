document.addEventListener('DOMContentLoaded', function () {
    const userGrowthCtx = document.getElementById('userGrowthChart').getContext('2d');
    const teachingLevelCtx = document.getElementById('teachingLevelChart').getContext('2d');

    const userGrowthChart = new Chart(userGrowthCtx, {
        type: 'bar',
        data: {
            labels: ['Styczeń', 'Luty', 'Marzec', 'Kwiecień', 'Maj', 'Czerwiec', 'Lipiec', 'Sierpień', 'Wrzesień', 'Październik', 'Listopad', 'Grudzień'],
            datasets: [{
                label: 'Poziom Nauczania',
                data: [10, 15, 20, 25, 30, 35, 40, 45, 50, 55, 60, 65],
                backgroundColor: 'rgba(110, 67, 255, 0.2)',
                borderColor: 'rgba(110, 67, 255, 1)',
                borderWidth: 2,
                fill: true,
            }]
        },
        options: {
            responsive: true,
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });

    const teachingLevelChart = new Chart(teachingLevelCtx, {
        type: 'line',
        data: {
            labels: ['Styczeń', 'Luty', 'Marzec', 'Kwiecień', 'Maj', 'Czerwiec', 'Lipiec', 'Sierpień', 'Wrzesień', 'Październik', 'Listopad', 'Grudzień'],
            datasets: [{
                label: 'Ilość Użytkowników',
                data: [100, 150, 200, 250, 300, 350, 400, 450, 500, 550, 600, 650],
                backgroundColor: 'rgba(255, 89, 120, 0.2)',
                borderColor: 'rgba(255, 89, 120, 1)',
                borderWidth: 2,
                fill: true,
            }]
        },
        options: {
            responsive: true,
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });
});
