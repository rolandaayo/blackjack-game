
let firstCard = 10
let secondCard = 30
let sum = firstCard + secondCard
let isAlive = false

let messageEl = document.getElementById("message-el")
let sumEl = document.getElementById("sum-el")
let cardsEl = document.getElementById("cards-el")
let message = ""

function startGame() {
    cardsEl.textContent = "Cards: " + firstCard + " " + secondCard
    sumEl.textContent = "Sum: " + sum
    if (sum <= 20) {
        message = "Do you want to draw a new card?"
    } else if (sum === 21) {
        message = "You've got Blackjack!"
    } else {
        message = "You're out of the game!"
    }
    messageEl.textContent = message 
}

function newCard() {
    let card = 6
    sum += card
    startGame()
}