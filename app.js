const submit = document.querySelector("#submit-btn")
const restart = document.querySelector("#restart")
const guessInput = document.querySelector("#guessInput") 
const guessOutput = document.querySelector("#guess-output")
const hintText = document.querySelector('.hint')
const alertMessage = document.querySelector('#alert-message')

submit.addEventListener('click', () => {
    /* const newText = document.createElement("p") //create new p element to display the hint text
    newText.classList.add("hint-text") // add a class to new p
    hintText.appendChild(newText) // move the hint text under hint text div
    newText.textContent = "Your previous guesses are" // hint text 
    hintText.insertBefore(newText, hintText.firstChild)*/ // move the hint text before the guess number

    guessOutput.innerHTML = guessInput.value // add the inner text of guess-output p with input value
    if (guessInput.value === '40') {
        alertMessage.textContent = "Congratulations! Your guess is correct."
    }
    if (guessInput.value > '40') {
        alertMessage.textContent = 'Your guess is higher than the answer.'
    }
    else {
        alertMessage.textContent = 'Your guess is lower than the answer.'
    }

    if (guessInput.value > 100) {
        alertMessage.textContent = 'Please enter numbers between 0 and 100'
    }

    if (guessInput.value === '') {
        alertMessage.textContent = 'Please ener a number'
    }
})