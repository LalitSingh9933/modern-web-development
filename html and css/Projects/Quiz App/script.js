document.addEventListener('DOMContentLoaded', function() {
const questions = [
    {
        question: "What the full form of HTML?",
        options: [
            "Hyper Text Markup Language",
            "Home Tool Markup Language",
            "Hyperlinks and Text Markup Language",
            "Hyper Text Makeup Language"
        ],
        answer: "Hyper Text Markup Language"

    },
    {
        question: "What does CSS stand for?",
        options: [
            "Cascading Style Sheets",
            "Creative Style Sheets",
            "Computer Style Sheets",
            "Colorful Style Sheets"
        ],
        answer: "Cascading Style Sheets"
    },
    {
        question: "Which HTML tag is used to define an internal style sheet?",
        options: [
            "<style>",
            "<css>",
            "<script>",
            "<link>"
        ],
        answer: "<style>"
    },
    {
        question: "Which property is used to change the background color in CSS?",
        options: [
            "bgcolor",
            "background-color",
            "color",
            "background"
        ],
        answer: "background-color"
    },
    {
        question: "Which HTML attribute is used to define inline styles?",
        options: [
            "style",
            "class",
            "font",
            "styles"
        ],
        answer: "style"
    }
];
//dom

const questionElement = document.getElementById("question");
const options = document.getElementById("options");
const next_btn = document.getElementById("next_btn");
const result = document.getElementById("result");
const score = document.getElementById("score");
const total_questions = document.getElementById("total-question");

let current_question = 0;
let scoreValue = 0;
let selectedOption = null;
//initialize the quiz
function startQuiz() {
    current_question = 0;
    scoreValue = 0;
    total_questions.textContent = `Total Questions: ${questions.length}`;
    score.textContent = scoreValue;    
    showQuestion();
}
function showQuestion() {
    resetState();
    const currentQuestionObj = questions[current_question];
    questionElement.textContent = currentQuestionObj.question;

    currentQuestionObj.options.forEach((option) => {
        const button = document.createElement("button");
        button.textContent = option;
        button.classList.add("option-btn");
        options.appendChild(button);
        button.addEventListener("click", () => {
            selectOption(option);

        });
    });
}
  function resetState() {
    if(next_btn) {
 next_btn.style.display = "none";
    }
    result.textContent = "";
    options.innerHTML = "";
}

function selectOption(option) {
    selectedOption = option;
    const currentQuestionObj = questions[current_question];
    const optionButtons = document.querySelectorAll(".option-btn");
    
    optionButtons.forEach(button => {
        button.disabled = true;
        if (button.textContent === selectedOption) {
            button.style.backgroundColor = '#4CAF50';
            button.style.color = 'white';
        } else {
            button.style.backgroundColor = '#f0f0f0';
            button.style.color = 'black';
        }
    });
    
    // Check if answer is correct
    const isCorrect = selectedOption === currentQuestionObj.answer;
    if (isCorrect) {
        result.textContent = 'Correct!';
        result.style.color = 'green';
        scoreValue++;
        score.textContent = scoreValue;
    } else {
        result.textContent = 'Wrong!';
        result.style.color = 'red';
    }
    
    next_btn.style.display = 'block';
}

function nextQuestion() {
    current_question++;
    if (current_question < questions.length) {
        showQuestion();
    } else {
        // Quiz completed
        questionElement.textContent = `Quiz completed! Your score: ${scoreValue}/${questions.length}`;
        options.innerHTML = "";
        result.textContent = "";
        next_btn.style.display = "none";
    }
}

 if (next_btn) {
        next_btn.addEventListener("click", nextQuestion);
    }

// Start the quiz
startQuiz();
});