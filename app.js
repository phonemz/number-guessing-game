const submit = document.querySelector("#btn")
const restart = document.querySelector("#restart")
const guess = document.querySelector("#guessInput") 
const guessOutput = document.querySelector("#previous")

submit.addEventListener('click', () => {
    const newText = document.createElement("div")
    newText.classList.add("previousGuess")
    document.body.appendChild(newText)
    newText.textContent = "Your previous guesses are"
    console.log("Hello")
    guessOutput.innerHTML = guess.value 
})