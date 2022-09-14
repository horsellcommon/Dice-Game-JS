const button = document.getElementById("button")
const diceImage = document.getElementById("diceImage")
let score = 0
console.log(diceImage)

button.addEventListener("click", () => {
    const randValue = Math.round(Math.random()*6)
    if (randValue == 1){ //if 1 is rolled - reset score
        diceImage.src="img/dice1.png"
        score = score + randValue
    } else if (randValue == 2){
        diceImage.src="img/dice2.png"
        score = score + randValue
    } else if (randValue == 3){
        diceImage.src="img/dice3.png"
        score = score + randValue
    } else if (randValue == 4){
        diceImage.src="img/dice4.png"
        score = score + randValue
    } else if (randValue == 5){
        diceImage.src="img/dice5.png"
        score = score + randValue
    } else if (randValue == 6){
        diceImage.src="img/dice6.png"
        score = score + randValue
    }
 

    console.log(randValue)
    console.log(score)
})