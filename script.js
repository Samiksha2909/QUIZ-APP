const quizzes = [
    {
        question: "What is the capital of France?",
        options: ["Berlin", "Madrid", "Paris", "Lisbon"],
        answer: "Paris"
    },
    {
        question: "Which planet is known as the Red Planet?",
        options: ["Earth", "Mars", "Jupiter", "Saturn"],
        answer: "Mars"
    },
    {
        question: "What is the largest ocean on Earth?",
        options: ["Atlantic Ocean", "Indian Ocean", "Arctic Ocean", "Pacific Ocean"],
        answer: "Pacific Ocean"
    }
];

let currentQuestionIndex = 0;
let score = 0;

document.getElementById('start-quiz').addEventListener('click', startQuiz);
document.getElementById('submit-answer').addEventListener('click', submitAnswer);
document.getElementById('restart-quiz').addEventListener('click', restartQuiz);

function startQuiz() {
    document.getElementById('home-screen').classList.add('hidden');
    document.getElementById('quiz-screen').classList.remove('hidden');
    currentQuestionIndex = 0;
    score = 0;
    showQuestion();
}

function showQuestion() {
    const questionData = quizzes[currentQuestionIndex];
    
    document.getElementById('question').innerText = questionData.question;
    
    const optionsContainer = document.getElementById('options');
    optionsContainer.innerHTML = '';
    
    questionData.options.forEach(option => {
        const button = document.createElement('button');
        button.innerText = option;
        button.onclick = () => selectOption(option);
        optionsContainer.appendChild(button);
    });
}

function selectOption(selectedOption) {
    const correctAnswer = quizzes[currentQuestionIndex].answer;

    if (selectedOption === correctAnswer) {
        score++;
        alert("Correct!");
    } else {
        alert("Incorrect! The correct answer was " + correctAnswer);
    }

    currentQuestionIndex++;
    
    if (currentQuestionIndex < quizzes.length) {
        showQuestion();
    } else {
        showResult();
    }
}

function showResult() {
    document.getElementById('quiz-screen').classList.add('hidden');
    document.getElementById('result-screen').classList.remove('hidden');
    
    document.getElementById('final-score').innerText = `${score} out of ${quizzes.length}`;
}

function restartQuiz() {
    document.getElementById('result-screen').classList.add('hidden');
    document.getElementById('home-screen').classList.remove('hidden');
}