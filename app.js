const submit = document.querySelector("#submit-btn")
const restart = document.querySelector("#restart")
const guessInput = document.querySelector("#guessInput") 
const guessOutput = document.querySelector("#guess-output")
const hintText = document.querySelector('.hint')
const alertMessage = document.querySelector('#alert-message')
const previousGuessesAre = document.querySelector('.previous-guesses-are')

guessInput.focus()

let guessCount = 1

function getRandom(a,b) {
    a = Math.ceil(a)
    b = Math.floor(b)
    return Math.floor(Math.random() * (b - a + 1) + a);
}

const answer = getRandom(0, 100)
console.log(answer)

function stopGame() {
    guessInput.disabled = 'true'
    submit.disabled = 'true'
}

function restartGame() {
    guessCount = 1
    previousGuessesAre.textContent = ''
    alertMessage.textContent = ''
    guessInput.disabled = false
    submit.disabled = false
    guessInput.focus();
}

restart.addEventListener('click', restartGame)


function mainFunction() {
    
    const value = parseInt(guessInput.value)
    const stringInput = guessInput.value

    


    if (guessCount === 1) {
        previousGuessesAre.textContent = 'Your previous guesses are '
    }
    previousGuessesAre.textContent += value +' '  

    if (value === answer) {
        alertMessage.textContent = "Congratulations! Your guess is correct."
        alertMessage.style.color = 'yellow'
        previousGuessesAre.style.color = 'azure'
        stopGame()
    } 
    else if (value > answer) {
        alertMessage.textContent = "Your guess is higher than the answer."
        previousGuessesAre.style.color = 'azure'
        alertMessage.style.color = 'azure'
    }
    else if (value < answer) {
        alertMessage.textContent = "Your guess is lower than the answer."
        previousGuessesAre.style.color = 'azure'
        alertMessage.style.color = 'azure'
    }

    if (value > 100) {
        alertMessage.textContent = 'Please enter numbers between 0 and 100.'
        previousGuessesAre.textContent = ''
        alertMessage.style.color = 'azure'
    }

    if (stringInput === '') {
        alertMessage.textContent = 'Please ener a number.'
        previousGuessesAre.textContent = ''
        alertMessage.style.color = 'azure'

    }
    
    if (guessCount > 10) {
        previousGuessesAre.textContent = 'Game Over. Please try again.'
        previousGuessesAre.style.color = 'red'
        alertMessage.textContent = ''
        stopGame()
    }

    guessCount++
    guessInput.value = ''
    
}

submit.addEventListener('click', mainFunction)

guessInput.addEventListener('keydown', function(e){
    if (e.keyCode == 13) {
        mainFunction()
    }


})


