// const OptionRight = document.querySelector(".OptionRight");
// OptionRight.style.color = "blue";

// const rightAnswer = document.querySelector("#AnswerRight");
// rightAnswer.style.color = "green";

const questions = [
  {
    question: "Who is the President of Nigeria?",
    correctAnswer: "Muhammadu Buhari",
    options: [
      "Jonathan Goodluck",
      "TB Joshua",
      "Ibrahim Babaginda",
      "Muhammadu Buhari",
    ],
  },
  {
    question: "What date is Nigeria independence?",
    correctAnswer: "Oct 1",
    options: ["Oct 1", "Dec 2nd", "March 21"],
  },
];

const QuizApp = document.querySelector('#app');

const Questiontext = document.createElement('p')
Questiontext.innerText = questions[0].question;

// ------The whole options display-------

const optionsDiv = document.createElement('div');
for (let index = 0; index < questions[0].options.length; index++) {
    const option = document.createElement('div')
    option.innerText = questions[0].options[index]
    optionsDiv.appendChild(options)
}
QuizApp.appendChild(QuestionText)
QuizApp.appendChild(optionsDiv)

// ---My own additon---

const results = document.getElementById('result')
const result = document.createElement('p')

function resultOptions() {
    if (questions = correctAnswer) {
        console.log("Correct!") 
 }
 else if (questions != correctAnswer) {
 console.log("Wrong!")
 };

}


QuizApp.appendChild('result')