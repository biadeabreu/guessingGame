

const screen1 = document.querySelector(".screen1")
const screen2 = document.querySelector(".screen2")
const btnTry = document.querySelector("#btnTry")
const btnReset = document.querySelector("#btnReset")
const randomNumber = Math.round(Math.random() * 10)
let xAttemps = 1




btnTry.addEventListener('click', handleTryClick )
btnReset.addEventListener('click', handleTryClick)
document.addEventListener('keydown', function(e){
    if(e.key == 'Enter') {
        handleResetClick()
    }
})




function handleTryClick(event) {
    event.preventDefault()
    

    const inputNumber = document.querySelector("#inputNumber")

    if(Number(inputNumber.value) == randomNumber) {
        toggleScreen()

        document
            .querySelector(".screen2 h2")
            .innerText = `Got it right in ${xAttemps} tries`
    }

    inputNumber.value = ""
    xAttemps++

}

function handleResetClick() {
    toggleScreen()
    xAttemps = 1
}


function toggleScreen() {
    screen1.classList.toggle("hide")
    screen2.classList.toggle("hide")
}

