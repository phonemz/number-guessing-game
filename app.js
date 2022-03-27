const submit = document.querySelector("#submit-btn")
const restart = document.querySelector("#restart")
const guessInput = document.querySelector("#guessInput") 
const guessOutput = document.querySelector("#guess-output")
const hintText = document.querySelector('.hint')
const alertMessage = document.querySelector('#alert-message')

function getRandom(a,b) {
    a = Math.ceil(a)
    b = Math.floor(b)
    return Math.floor(Math.random() * (b - a + 1) + a);
}

const answer = getRandom(0, 100)
console.log(answer)

submit.addEventListener('click', () => {
    /* const newText = document.createElement("p") //create new p element to display the hint text
    newText.classList.add("hint-text") // add a class to new p
    hintText.appendChild(newText) // move the hint text under hint text div
    newText.textContent = "Your previous guesses are" // hint text 
    guessOutput.innerHTML = guessInput.value // add the inner text of guess-output p with input value
    hintText.insertBefore(newText, hintText.firstChild)*/ // move the hint text before the guess number
    const value = parseInt(guessInput.value)
    console.log(value)

    if (value === answer) {
        alertMessage.textContent = "Congratulations! Your guess is correct."
    } 
    else if (value > answer) {
        alertMessage.textContent = "Your guess is higher than the answer"
    }
    else if (value < answer) {
        alertMessage.textContent = "Your guess is lower than the answer"
    }
    
    

    if (value > 100) {
        alertMessage.textContent = 'Please enter numbers between 0 and 100'
    }

    if (value === '') {
        alertMessage.textContent = 'Please ener a number'
    }
})

