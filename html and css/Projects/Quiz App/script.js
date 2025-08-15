const questions =[
    {
        question: "What the full form of HTML?",
        options: [
     "Hyper Text Markup Language",
            "Home Tool Markup Language",
            "Hyperlinks and Text Markup Language",
            "Hyper Text Makeup Language" 
        ],
        answer: "Hyper Text Makeup Language" 
    
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

const questionElement= document.getElementById("question");
const options=document.getElementById("options");
const next_btn =document.getElementById("next-btn");
const result = document.getElementById("result");
const score = document.getElementById("score");
const total_qustions= document.getElementById("total-questions");

let current_question= 0;
let scoreValue=0;
let selectedOption =null;
//initialize the quiz
function startQuiz(){
    current_question=0;
    scoreValue=0;
    total_qustions.textContent=questions.length;
    showQuestion();
}
function showQuestion(){
    resetState();
    const current_question= questions[current_question];
    questionElement.textContent = current_question.question;
    current_question.options.forEach((option, index) => {
        const button = document.createElement("button");
        button.textContent = option;
        button.classList.add("option-btn");
        options.appendChild(button);
        button.addEventListener("click", () => {
            selectedOption (option);
            
        });
    });
}