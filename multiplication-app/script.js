const num1 = Math.ceil(Math.random() * 10)
const num2 = Math.ceil(Math.random() * 10)

let score = JSON.parse(localStorage.getItem("score"))

if (!score) {
    score = 0;
}

const scoreEL = document.getElementById("score")
scoreEL.innerText = `Score: ${score}`

const questionEL = document.getElementById("question")
const inputEL = document.getElementById("input")
questionEL.innerText = `What is ${num1} multiply by ${num2}?`

const correctAns = num1 * num2

const formEL = document.getElementById("form")
formEL.addEventListener("submit", () => {
    const userAns = +inputEL.value
    if (userAns === correctAns) {
        score++
        updateLocalStorage()
    } else {
        score--
        updateLocalStorage()
    }


})

function updateLocalStorage() {
    localStorage.setItem("score", JSON.stringify(score))
}