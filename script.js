const button = document.getElementById("button")
const diceImage = document.getElementById("diceImage")
const scoreElement = document.getElementById("score")
const winLoseElement = document.getElementById("winlose")
const p2button = document.getElementById("p2-button")
const p2diceImage = document.getElementById("p2-diceImage")
const p2scoreElement = document.getElementById("p2-score")
const p2winLoseElement = document.getElementById("p2-winlose")
const newGame = document.getElementById("newgame")
const holdScore = document.getElementById("hold")
const p2holdScore = document.getElementById("p2-hold")
const totalScore = document.getElementById("totalscore")
const p2totalScore = document.getElementById("p2totalscore")
let score = 0
let p2score = 0
totalScore.textContent = 0
p2totalScore.textContent = 0
scoreElement.textContent = 0
p2scoreElement.textContent = 0
button.disabled = true
p2button.disabled = true
holdScore.disabled = true
p2holdScore.disabled = true

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

newGame.addEventListener("click", () => {
    if (score >= 20){
        button.disabled = true
        p2button.disabled = false
        holdScore.disabled = true
        p2holdScore.disabled = false
    } else if (p2score >= 20){
        button.disabled = false
        p2button.disabled = true
        holdScore.disabled = false
        p2holdScore.disabled = true
    } else if (score < 20 && p2score < 20){
        button.disabled = false
        p2button.disabled = true
        holdScore.disabled = false
        p2holdScore.disabled = true
    }
    score = 0
    p2score = 0
    diceImage.src=""
    p2diceImage.src=""
    scoreElement.textContent="0"
    totalScore.textContent="0"
    p2scoreElement.textContent="0"
    winLoseElement.textContent=""
    p2winLoseElement.textContent=""
})

let accumulatedScore = 0
let p2accumulatedScore = 0
holdScore.addEventListener("click", () => {
    button.disabled = true
    holdScore.disabled = true
    p2button.disabled = false
    p2holdScore.disabled = false
    accumulatedScore = accumulatedScore+score
    totalScore.textContent = accumulatedScore
    score = 0
    scoreElement.textContent=0
    if (accumulatedScore >= 20){
        elementUpdater()
        winUpdater()
        p2lossUpdater()
        button.disabled = true
        p2button.disabled = true
        holdScore.disabled = true
        p2holdScore.disabled = true
    }
})
p2holdScore.addEventListener("click", () => {
    p2button.disabled = true
    button.disabled = false
    p2holdScore.disabled = true
    holdScore.disabled = false
    p2accumulatedScore = p2accumulatedScore+p2score
    p2totalScore.textContent = p2accumulatedScore
    p2score = 0
    p2scoreElement.textContent=0
    if (p2accumulatedScore >= 20){
        p2elementUpdater()
        p2winUpdater()
        lossUpdater()
        button.disabled = true
        p2button.disabled = true
        holdScore.disabled = true
        p2holdScore.disabled = true
    }
})

button.addEventListener("click", () => {
    winLoseElement.textContent = ""
    const randValue = Math.round(Math.random()*6)
    if (randValue <= 1){
        diceImage.src=""
        score = 0
        button.disabled = true
        holdScore.disabled = true
        p2button.disabled = false
        p2holdScore.disabled = false
        elementUpdater()
        if (score >= 20){
            elementUpdater()
            winUpdater()
            p2lossUpdater()
            button.disabled = true
            p2button.disabled = true
            holdScore.disabled = true
            p2holdScore.disabled = true
        }
    } else if (randValue == 2){
        diceImage.src="img/dice2.png"
        score = score + randValue
        elementUpdater()
        if (score >= 20){
            elementUpdater()
            winUpdater()
            p2lossUpdater()
            button.disabled = true
            p2button.disabled = true
            holdScore.disabled = true
            p2holdScore.disabled = true
        }
    } else if (randValue == 3){
        diceImage.src="img/dice3.png"
        score = score + randValue
        elementUpdater()
        if (score >= 20){
            elementUpdater()
            winUpdater()
            p2lossUpdater()
            button.disabled = true
            p2button.disabled = true
            holdScore.disabled = true
            p2holdScore.disabled = true
        }
    } else if (randValue == 4){
        diceImage.src="img/dice4.png"
        score = score + randValue
        elementUpdater()
        if (score >= 20){
            elementUpdater()
            winUpdater()
            p2lossUpdater()
            button.disabled = true
            p2button.disabled = true
            holdScore.disabled = true
            p2holdScore.disabled = true
        }
    } else if (randValue == 5){
        diceImage.src="img/dice5.png"
        score = score + randValue
        elementUpdater()
        if (score >= 20){
            elementUpdater()
            winUpdater()
            p2lossUpdater()
            button.disabled = true
            p2button.disabled = true
            holdScore.disabled = true
            p2holdScore.disabled = true
        }
    } else if (randValue == 6){
        diceImage.src="img/dice6.png"
        score = score + randValue
        elementUpdater()
        if (score >= 20){
            elementUpdater()
            winUpdater()
            p2lossUpdater()
            button.disabled = true
            p2button.disabled = true
            holdScore.disabled = true
            p2holdScore.disabled = true
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
        p2button.disabled = true
        button.disabled = false
        p2holdScore.disabled = true
        holdScore.disabled = false
        p2score = 0
        p2elementUpdater()
        if (p2score >= 20){
            p2elementUpdater()
            p2winUpdater()
            lossUpdater()
            button.disabled = true
            p2button.disabled = true
            holdScore.disabled = true
            p2holdScore.disabled = true
        }
    } else if (p2randValue == 2){
        p2diceImage.src="img/dice2.png"
        p2score = p2score + p2randValue
        p2elementUpdater()
        if (p2score >= 20){
            p2elementUpdater()
            p2winUpdater()
            lossUpdater()
            button.disabled = true
            p2button.disabled = true
            holdScore.disabled = true
            p2holdScore.disabled = true
        }
    } else if (p2randValue == 3){
        p2diceImage.src="img/dice3.png"
        p2score = p2score + p2randValue
        p2elementUpdater()
        if (p2score >= 20){
            p2elementUpdater()
            p2winUpdater()
            lossUpdater()
            button.disabled = true
            p2button.disabled = true
            holdScore.disabled = true
            p2holdScore.disabled = true
        }
    } else if (p2randValue == 4){
        p2diceImage.src="img/dice4.png"
        p2score = p2score + p2randValue
        p2elementUpdater()
        if (p2score >= 20){
            p2elementUpdater()
            p2winUpdater()
            lossUpdater()
            button.disabled = true
            p2button.disabled = true
            holdScore.disabled = true
            p2holdScore.disabled = true
        }
    } else if (p2randValue == 5){
        p2diceImage.src="img/dice5.png"
        p2score = p2score + p2randValue
        p2elementUpdater()
        if (p2score >= 20){
            p2elementUpdater()
            p2winUpdater()
            lossUpdater()
            button.disabled = true
            p2button.disabled = true
            holdScore.disabled = true
            p2holdScore.disabled = true
        }
    } else if (p2randValue == 6){
        p2diceImage.src="img/dice6.png"
        p2score = p2score + p2randValue
        p2elementUpdater()
        if (p2score >= 20){
            p2elementUpdater()
            p2winUpdater()
            lossUpdater()
            button.disabled = true
            p2button.disabled = true
            holdScore.disabled = true
            p2holdScore.disabled = true
        }
    }
    console.log(p2randValue)
    console.log(p2score)
})