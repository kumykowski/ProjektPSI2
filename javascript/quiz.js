document.addEventListener("DOMContentLoaded", function() {
    const quizOptions = document.querySelectorAll('.quiz-option');
    const quizQuestions = document.querySelectorAll('.quiz-question');
    let correctAnswers = 0;
    let totalQuestions = quizQuestions.length;
    let currentQuestionIndex = 0;

    function isElementInViewport(el) {
        const rect = el.getBoundingClientRect();
        return (
            rect.top >= 0 &&
            rect.left >= 0 &&
            rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
            rect.right <= (window.innerWidth || document.documentElement.clientWidth)
        );
    }

    function handleScroll() {
        quizQuestions.forEach(question => {
            if (isElementInViewport(question)) {
                question.classList.add('in-view');
            } else {
                question.classList.remove('in-view');
            }
        });
    }

    quizOptions.forEach(option => {
        option.addEventListener('click', function() {
            const isCorrect = this.dataset.correct === 'true';
            const questionId = this.parentElement.parentElement.dataset.questionId;

            if (!this.parentElement.parentElement.classList.contains('answered')) {
                this.parentElement.parentElement.classList.add('answered');

                if (isCorrect) {
                    this.style.backgroundColor = 'green';
                    correctAnswers++;
                    launchConfetti();
                } else {
                    this.style.backgroundColor = 'red';
                    document.querySelector(`.quiz-question[data-question-id="${questionId}"] .quiz-option[data-correct="true"]`).style.backgroundColor = 'green';
                }

                setTimeout(() => {
                    goToNextQuestion();
                }, 1000);
            }
        });
    });

    function goToNextQuestion() {
        quizQuestions[currentQuestionIndex].classList.add('slide-out');
        setTimeout(() => {
            quizQuestions[currentQuestionIndex].style.display = 'none';
            currentQuestionIndex++;
            if (currentQuestionIndex < totalQuestions) {
                const nextQuestion = quizQuestions[currentQuestionIndex];
                nextQuestion.classList.add('slide-in');
                nextQuestion.style.display = 'block';
                handleScroll(); 
            } else {
                showSummary();
            }
        }, 500);
    }

    function launchConfetti() {
        const duration = 2 * 1000;
        const animationEnd = Date.now() + duration;
        const defaults = { startVelocity: 30, spread: 360, ticks: 60, zIndex: 0 };

        function randomInRange(min, max) {
            return Math.random() * (max - min) + min;
        }

        const interval = setInterval(() => {
            const timeLeft = animationEnd - Date.now();

            if (timeLeft <= 0) {
                return clearInterval(interval);
            }

            const particleCount = 50 * (timeLeft / duration);
            confetti(Object.assign({}, defaults, { particleCount, origin: { x: randomInRange(0.1, 0.3), y: Math.random() - 0.2 } }));
            confetti(Object.assign({}, defaults, { particleCount, origin: { x: randomInRange(0.7, 0.9), y: Math.random() - 0.2 } }));
        }, 250);
    }

    function showSummary() {
        const summarySection = document.getElementById('quiz-summary');
        const results = document.querySelector('.summary-results');
        results.textContent = `Twój wynik: ${correctAnswers} z ${totalQuestions}`;
        summarySection.style.display = 'block';
    }

    function retryQuiz() {
        correctAnswers = 0;
        currentQuestionIndex = 0;
        quizQuestions.forEach(question => {
            question.classList.remove('answered', 'slide-in', 'slide-out', 'in-view');
            question.querySelectorAll('.quiz-option').forEach(option => {
                option.style.backgroundColor = '';
            });
            question.style.display = 'none';
        });
        quizQuestions[0].style.display = 'block';
        document.getElementById('quiz-summary').style.display = 'none';
        handleScroll();
    }

    quizQuestions.forEach((question, index) => {
        if (index !== 0) question.style.display = 'none';
    });

    window.addEventListener('scroll', handleScroll);
    handleScroll(); 
    quizQuestions[0].classList.add('in-view'); 
});
