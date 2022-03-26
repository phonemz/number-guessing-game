const submit = document.querySelector("#btn")
const restart = document.querySelector("#restart")
const guess = document.querySelector("#guessInput") 
const guessOutput = document.querySelector("#previous")

submit.addEventListener('click',()=> {
    guessOutput.innerHTML = guess.value 
})