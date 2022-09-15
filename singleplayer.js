const button = document.getElementById("button")
const diceImage = document.getElementById("diceImage")
const scoreElement = document.getElementById("score")
const winLoseElement = document.getElementById("winlose")
let score = 0
scoreElement.textContent = 0
console.log(diceImage)

const winUpdater = () => {
    winLoseElement.textContent = "YOU WIN"
}
const lossUpdater = () => {
    winLoseElement.textContent = "YOU LOSE"
}
const elementUpdater = () => {
    scoreElement.textContent = score
}

button.addEventListener("click", () => {
    winLoseElement.textContent = ""
    const randValue = Math.round(Math.random()*6)
    if (randValue <= 1){
        diceImage.src=""
        diceImage.src=""
        scoreElement.textContent = 0
        lossUpdater()
        score = 0
    } else if (randValue == 2){
        diceImage.src="img/dice2.png"
        score = score + randValue
        elementUpdater()
        if (score >= 20){
            scoreElement.textContent = "YOU WIN"
            elementUpdater()
            winUpdater()
            diceImage.src=""
            score = 0
        }
    } else if (randValue == 3){
        diceImage.src="img/dice3.png"
        score = score + randValue
        elementUpdater()
        if (score >= 20){
            scoreElement.textContent = "YOU WIN"
            elementUpdater()
            winUpdater()
            diceImage.src=""
            score = 0
        }
    } else if (randValue == 4){
        diceImage.src="img/dice4.png"
        score = score + randValue
        elementUpdater()
        if (score >= 20){
            scoreElement.textContent = "YOU WIN"
            elementUpdater()
            winUpdater()
            diceImage.src=""
            score = 0
        }
    } else if (randValue == 5){
        diceImage.src="img/dice5.png"
        score = score + randValue
        elementUpdater()
        if (score >= 20){
            scoreElement.textContent = "YOU WIN"
            elementUpdater()
            winUpdater()
            diceImage.src=""
            score = 0
        }
    } else if (randValue == 6){
        diceImage.src="img/dice6.png"
        score = score + randValue
        elementUpdater()
        if (score >= 20){
            scoreElement.textContent = "YOU WIN"
            elementUpdater()
            winUpdater()
            diceImage.src=""
            score = 0
        }
    }
    console.log(randValue)
    console.log(score)
})