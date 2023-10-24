do {
    let random = Math.random() * 6;
    let random2 = Math.random() * 6;
    let diceThrowUser = Math.floor(random) + 1;
    let diceThrowBot = Math.floor(random2) + 1;
    
    alert("Your result is " + diceThrowUser + " the opponent's result is " + diceThrowBot);
    
    if(diceThrowUser > diceThrowBot) {
        alert("You won")
        userWin = userWin ++;
    } else if(diceThrowUser === diceThrowBot) {
        alert("You tie")
        botWin = botWin ++;
    } else {
        alert("You lose")
    }

    let nextRoundReply = prompt('Play next round?');
    if (nextRoundReply === 'No') {
        break;
    }
} while (true);

//
