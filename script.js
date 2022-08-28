
const screen1 = document.querySelector(".screen1")
const screen2 = document.querySelector(".screen2")
const btnTry = document.querySelector("#btnTry")
const btnReset = document.querySelector("#btnReset")
const secondH = document.querySelector('h2')

const inputNumber = document.querySelector("#inputNumber")
const randomNumber = Math.round(Math.random() * 10)
let xAttemps = 1




btnTry.addEventListener('click', handleTryClick )
btnReset.addEventListener('click', handleResetClick)



function handleTryClick(event) {
    event.preventDefault()
    


    if(Number(inputNumber.value) == randomNumber) {
        
        toggleScreen()

        
            secondH.innerText = `Got it right in ${xAttemps} tries and the number is ${randomNumber}`
    } else{
    
        alert("Try again")    
        inputNumber.value = ""
        xAttemps++
    }

}

function handleResetClick() {
    toggleScreen()
    location.reload()
    xAttemps = 1
}


function toggleScreen() {
    screen1.classList.toggle("hide")
    screen2.classList.toggle("hide")
}



