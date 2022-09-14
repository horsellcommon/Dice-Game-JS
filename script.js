const button = document.getElementById("button")
const diceImage = document.getElementById("diceImage")
const scoreElement = document.getElementById("score")
const winLoseElement = document.getElementById("winlose")
const p2button = document.getElementById("p2-button")
const p2diceImage = document.getElementById("p2-diceImage")
const p2scoreElement = document.getElementById("p2-score")
const p2winLoseElement = document.getElementById("p2-winlose")
let score = 0
let p2score = 0
scoreElement.textContent = 0
p2scoreElement.textContent = 0

const winUpdater = () => {
    winLoseElement.textContent = "YOU WIN"
}
const lossUpdater = () => {
    winLoseElement.textContent = "YOU LOSE"
}
const elementUpdater = () => {
    scoreElement.textContent = score
}
const p2winUpdater = () => {
    p2winLoseElement.textContent = "YOU WIN"
}
const p2lossUpdater = () => {
    p2winLoseElement.textContent = "YOU LOSE"
}
const p2elementUpdater = () => {
    p2scoreElement.textContent = p2score
}

button.addEventListener("click", () => {
    winLoseElement.textContent = ""
    const randValue = Math.round(Math.random()*6)
    if (randValue <= 1){
        diceImage.src=""
        elementUpdater()
        lossUpdater()
        p2winUpdater()
        score = 0
        p2score = 0
    } else if (randValue == 2){
        diceImage.src="img/dice2.png"
        score = score + randValue
        elementUpdater()
        if (score >= 20){
            elementUpdater()
            winUpdater()
            diceImage.src=""
            score = 0
            p2lossUpdater()
            p2diceImage.src=""
            p2score = 0
        }
    } else if (randValue == 3){
        diceImage.src="img/dice3.png"
        score = score + randValue
        elementUpdater()
        if (score >= 20){
            elementUpdater()
            winUpdater()
            diceImage.src=""
            score = 0
            p2lossUpdater()
            p2diceImage.src=""
            p2score = 0
        }
    } else if (randValue == 4){
        diceImage.src="img/dice4.png"
        score = score + randValue
        elementUpdater()
        if (score >= 20){
            elementUpdater()
            winUpdater()
            diceImage.src=""
            score = 0
            p2lossUpdater()
            p2diceImage.src=""
            p2score = 0
        }
    } else if (randValue == 5){
        diceImage.src="img/dice5.png"
        score = score + randValue
        elementUpdater()
        if (score >= 20){
            elementUpdater()
            winUpdater()
            diceImage.src=""
            score = 0
            p2lossUpdater()
            p2diceImage.src=""
            p2score = 0
        }
    } else if (randValue == 6){
        diceImage.src="img/dice6.png"
        score = score + randValue
        elementUpdater()
        if (score >= 20){
            elementUpdater()
            winUpdater()
            diceImage.src=""
            score = 0
            p2lossUpdater()
            p2diceImage.src=""
            p2score = 0
        }
    }
    console.log(randValue)
    console.log(score)
})

p2button.addEventListener("click", () => {
    p2winLoseElement.textContent = ""
    const p2randValue = Math.round(Math.random()*6)
    if (p2randValue <= 1){
        p2diceImage.src=""
        p2elementUpdater()
        p2lossUpdater()
        p2score = 0
        winUpdater()
        diceImage.src=""
        score = 0
    } else if (p2randValue == 2){
        p2diceImage.src="img/dice2.png"
        p2score = p2score + p2randValue
        p2elementUpdater()
        if (p2score >= 20){
            p2elementUpdater()
            p2winUpdater()
            p2diceImage.src=""
            p2score = 0
            lossUpdater()
            diceImage.src=""
            score = 0
        }
    } else if (p2randValue == 3){
        p2diceImage.src="img/dice3.png"
        p2score = p2score + p2randValue
        p2elementUpdater()
        if (p2score >= 20){
            p2elementUpdater()
            p2winUpdater()
            p2diceImage.src=""
            p2score = 0
            lossUpdater()
            diceImage.src=""
            score = 0
        }
    } else if (p2randValue == 4){
        p2diceImage.src="img/dice4.png"
        p2score = p2score + p2randValue
        p2elementUpdater()
        if (p2score >= 20){
            p2elementUpdater()
            p2winUpdater()
            p2diceImage.src=""
            p2score = 0
            lossUpdater()
            diceImage.src=""
            score = 0
        }
    } else if (p2randValue == 5){
        p2diceImage.src="img/dice5.png"
        p2score = p2score + p2randValue
        p2elementUpdater()
        if (p2score >= 20){
            p2elementUpdater()
            p2winUpdater()
            p2diceImage.src=""
            p2score = 0
            lossUpdater()
            diceImage.src=""
            score = 0
        }
    } else if (p2randValue == 6){
        p2diceImage.src="img/dice6.png"
        p2score = p2score + p2randValue
        p2elementUpdater()
        if (p2score >= 20){
            p2elementUpdater()
            p2winUpdater()
            p2diceImage.src=""
            p2score = 0
            lossUpdater()
            diceImage.src=""
            score = 0
        }
    }
    console.log(p2randValue)
    console.log(p2score)
})