const button = document.getElementById("button")
const diceImage = document.getElementById("diceImage")
console.log(diceImage)

button.addEventListener("click", () => {
    console.log("Does it work????")
    const randValue = Math.round(Math.random()*6)
    console.log(randValue)
    if (randValue == 1){
        diceImage.src="img/dice1.png"
    } else if (randValue == 2){
        diceImage.src="img/dice2.png"
    } else if (randValue == 3){
        diceImage.src="img/dice3.png"
    } else if (randValue == 4){
        diceImage.src="img/dice4.png"
    } else if (randValue == 5){
        diceImage.src="img/dice5.png"
    } else if (randValue == 6){
        diceImage.src="img/dice6.png"
    }
})