let userChoice = Number(prompt("Select the highest number to guess"));

let random = Math.random() * userChoice;
let randomNumber = Math.floor(random) + 1;
let userGuess = prompt("Guess a number from 1-" + userChoice);

console.log(randomNumber)

if(userGuess > randomNumber) {
    alert("Your number is too high");
} else if (userGuess < randomNumber){
    alert("Your number is too low");
} else if (userGuess === randomNumber){
    alert("You guessed it");
}

