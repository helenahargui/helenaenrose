const questions = [
    {
      question: 'What is the capital of France?',
      a: 'a) London',
      b: 'b) Berlin',
      c: 'c) Paris',
      d: 'd) Madrid',
      correct: 'c',
    },
    {
      question: 'Which planet is known as the Red Planet?',
      a: 'a) Venus',
      b: 'b) Mars',
      c: 'c) Jupiter',
      d: 'd) Saturn',
      correct: 'b',
    },
    {
      question: 'What is the chemical symbol for gold?',
      a: 'a) Ag',
      b: 'b) Ge',
      c: 'c) Go',
      d: 'd) Au',
      correct: 'd',
    },
    {
      question: 'What is the largest mammal on Earth?',
      a: 'a) Elephant',
      b: 'b) Blue whale',
      c: 'c) Giraffe',
      d: 'd) Lion',
      correct: 'b',
    },
    {
      question: 'Which gas do plants absorb from the atmosphere?',
      a: 'a) Carbon dioxide',
      b: 'b) Oxygen',
      c: 'c) Nitrogen',
      d: 'd) Hydrogen',
      correct: 'a',
    },
  ];

const quiz = document.getElementById("quiz");
const answerEls = document.querySelectorAll(".answer");
const question = document.getElementById("question");
const a_text = document.getElementById('a_text');
const b_text = document.getElementById('b_text');
const c_text = document.getElementById('c_text');
const d_text = document.getElementById('d_text');
const submitBtn = document.getElementById("submit");

let currentQuiz = 0;
let score = 0;

loadQuiz();

function loadQuiz() {
    deselectAnswers();
    const currentQuizData = questions[currentQuiz];
    question.innerText = currentQuizData.question;
    a_text.innerText = currentQuizData.a;
    b_text.innerText = currentQuizData.b;
    c_text.innerText = currentQuizData.c;
    d_text.innerText = currentQuizData.d;

}

function deselectAnswers() {
    answerEls.forEach(answerEl => answerEl.checked = false);
}

function getSelected() {
    let answer;
    answerEls.forEach(answerEl => {
        if(answerEl.checked) {
            answer = answerEl.id;
        }
    });
    return answer;
}

submitBtn.addEventListener("click", () => {
    const answer = getSelected();
    if(answer) {
        if(answer === questions[currentQuiz].correct) {
            score++;
        }
        currentQuiz++;
        if(currentQuiz < questions.length) {
            loadQuiz();
        } else {
            quiz.innerHTML = `<h2>You answered correctly at ${score}/${questions.length} questions.</h2>
            <button onclick="location.reload()">Reload</button>`;
        }
    }
});