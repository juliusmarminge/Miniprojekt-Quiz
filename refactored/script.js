import {data} from "./data.js";

const NQUESTIONS = Object.keys(data).length;
let id = 1, score = 0;

const questionText = document.querySelector("#question-text");
const image = document.querySelector("img");
const option1Text = document.querySelector("#option1-text");
const option2Text = document.querySelector("#option2-text");
const option3Text = document.querySelector("#option3-text");
const errorText = document.querySelector("#error-text");


const loadQuestion = () => {
    questionText.innerText = data[id].question;
    image.src = `/img/${data[id].img}`;
    option1Text.innerHTML = data[id].option1;
    option2Text.innerHTML = data[id].option2;
    option3Text.innerHTML = data[id].option3;
}

const loadEnd = () => {
    alert(`Quiz Finished! Score: ${score} / ${NQUESTIONS}`);
    id = 1;
    score = 0;
    loadQuestion(id);
}

loadQuestion(id);

document.querySelector("#submit").addEventListener("click", () => {
    const radio = document.querySelector("input[type='radio']:checked");
    console.log(radio);

    if (!radio) {
        errorText.style.opacity = 1;
        return;
    }
    errorText.style.opacity = 0;

    radio.id === `option${data[id].answer}` && score++;

    id++;
    id <= NQUESTIONS ? loadQuestion() : loadEnd();

    radio.checked = false;
});