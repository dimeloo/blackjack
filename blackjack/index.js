// Check if the person is old enough to enter the nightclub (21)
// Log a suitable message to the console in both cases

// let age = 20

// if less than 21 -> "You can not enter the club!"
// else            -> "Welcome!"

// if (age >= 21) {
//     console.log('Welcome to the club')
// } else {
//     console.log('You are not allowed in, sorry')
// }
/* ***************************************************************** */

// Check if the person is elegible for a birthday card from the King! (100)

// let age = 101

// if less than 100    -> "Not elegible"
// else if exactly 100 -> "Here is your birthday card from the King!"
// else                -> "Not elegible, you have already gotten one"

// if (age < 100){
//     console.log('Not eligible')
// } else if (age === 100) {
//     console.log('Here is your birthday card from the King')
// } else {
//     console.log('Not elegible, you have already gotten one')
// }

// Write the conditional according to these rules:

// if less than or equal to 20 -> "Do you want to draw a new card? 🙂"
// else if exactly 21 -> "Wohoo! You've got Blackjack! 🥳"
// else -> "You're out of the game! 😭"
// 1. Create a variable called isAlive and assign it to true
// 2. Flip its value to false in the appropriate code block
// 3. Log it out to check that you're doing it right
// 4. Declare a variable called message and assign its value to an empty string
// 5. Reassign the message variable to the string we're logging out
// 6. Log it out!

let firstCard = 21
let secondCard = 7
let sum = firstCard + secondCard
let hasBlackJack = false
let isAlive = true
let message = ' '
let messageEl = document.getElementById('message-el')
let sumEl = document.getElementById('sum-el')

function startGame() {
  if (sum <= 20) {
    message = 'Do you want to draw a new card?'
  } else if (sum === 21) {
    message = "Wohoo! You've got a Blackjack!"
    hasBlackJack = true
  } else {
    message = "You're out of the game"
    isAlive = false
  }

  sumEl.textContent = 'Sum: ' + sum
  messageEl.textContent = message
}
