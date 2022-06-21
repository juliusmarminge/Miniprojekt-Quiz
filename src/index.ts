import { data } from "./questions";

const N_QUESTIONS = data.length;
let currentQuestion = 0,
  score = 0;

const questionText = document.getElementById("question-text");
const image = document.getElementById("image") as HTMLImageElement;
const option1Text = document.getElementById("option1-text");
const option2Text = document.getElementById("option2-text");
const option3Text = document.getElementById("option3-text");
const errorText = document.getElementById("error-text");

const loadQuestion = () => {
  if (!questionText || !image || !option1Text || !option2Text || !option3Text)
    return;

  questionText.innerHTML = data[currentQuestion].question;
  image.src = `${data[currentQuestion].img}`;
  option1Text.innerHTML = data[currentQuestion].option1;
  option2Text.innerHTML = data[currentQuestion].option2;
  option3Text.innerHTML = data[currentQuestion].option3;
};

const loadEnd = () => {
  alert(`Quiz Finished! Score: ${score} / ${N_QUESTIONS}`);
  currentQuestion = 0;
  score = 0;
  loadQuestion();
};

document.querySelector("#submit")!.addEventListener("click", () => {
  const radio = document.querySelector(
    "input[type='radio']:checked"
  ) as HTMLInputElement;

  if (!radio) {
    errorText!.style.opacity = "1";
    return;
  }
  errorText!.style.opacity = "0";

  if (radio.id === `option${data[currentQuestion].answer}`) score++;

  currentQuestion++;
  if (currentQuestion <= N_QUESTIONS - 1) {
    loadQuestion();
  } else {
    loadEnd();
  }

  radio.checked = false;
});

loadQuestion();
