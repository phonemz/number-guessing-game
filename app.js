const submit = document.querySelector("#submit-btn")
const restart = document.querySelector("#restart")
const guessInput = document.querySelector("#guessInput") 
const guessOutput = document.querySelector("#guess-output")
const hintText = document.querySelector('.hint')
const alertMessage = document.querySelector('#alert-message')
const previousGuessesAre = document.querySelector('.previous-guesses-are')

let guessCount = 1

function getRandom(a,b) {
    a = Math.ceil(a)
    b = Math.floor(b)
    return Math.floor(Math.random() * (b - a + 1) + a);
}

const answer = getRandom(0, 100)
console.log(answer)

submit.addEventListener('click', () => {

    const value = parseInt(guessInput.value)

    if (guessCount === 1) {
        previousGuessesAre.textContent = 'Your previous guesses are '
    }
    previousGuessesAre.textContent += guessInput.value + ' '     

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

    guessCount++
})

