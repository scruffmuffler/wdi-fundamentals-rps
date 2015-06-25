////////////////////////////////////////////////
/*   Provided Code - Please Don't Edit   */
////////////////////////////////////////////////
// 'use strict';

function getInput() {
    console.log("Please choose either 'rock', 'paper', or 'scissors'.");
    return prompt();
}
function randomPlay() {
    var randomNumber = Math.random();
    if (randomNumber < 0.33) {
        return "rock";
    } else if (randomNumber < 0.66) {
        return "paper";
    } else {
        return "scissors";
    }
}
////////////////////////////////////////////////
/*           Write Your Code Below            */
////////////////////////////////////////////////

function getPlayerMove(move) {
    // Write an expression that operates on a variable called `move`
    // If a `move` has a value, your expression should evaluate to that value.
    // However, if `move` is not specified / is null, your expression should equal `getInput()`.
    return move || getInput();
}

function getComputerMove(move) {
    // Write an expression that operates on a variable called `move`
    // If a `move` has a value, your expression should evaluate to that value.
    // However, if `move` is not specified / is null, your expression should equal `randomPlay()`.
    return move || randomPlay();
}

function getWinner(playerMove,computerMove) {
    var winner = null;
    // Write code that will set winner to either 'player', 'computer', or 'tie' based on the values of playerMove and computerMove.
    // Assume that the only values playerMove and computerMove can have are 'rock', 'paper', and 'scissors'.
    // The rules of the game are that 'rock' beats 'scissors', 'scissors' beats 'paper', and 'paper' beats 'rock'.
    /* YOUR CODE HERE */
    // rock beats scissors
    // paper beats rock
    // scissors beats paper
    // use the playerMove and computerMove functions to determine winner
    
    //rock 
    if (playerMove === 'rock') {
        if (computerMove === 'scissors') {
            winner = 'player';
        }   else if (computerMove === 'paper') {
            winner = 'computer';
        }   else { 
            winner = 'tie'; 
        }
    //paper
    } else if (playerMove === 'paper') {
        if (computerMove === 'scissors') {
            winner = 'computer';
        }   else if (computerMove === 'paper') {
            winner = 'tie';
        }   else {
            winner = 'player';
        }

    // scissors
    } else if (playerMove === 'scissors') {
        if (computerMove === 'scissors') {
            winner = 'tie';
        }   else if (computerMove === 'rock') {
            winner = 'computer';
        }   else {
            winner = 'player';
        }
    } else if (playerMove === 'exit') {
        return;
    }
    
    

    console.log('Player chose ' + playerMove + ' and computer chose ' + computerMove)
    return winner;
}


function playTo(x) {
    console.log("Let's play Rock, Paper, Scissors");
    var playerWins = 0;
    var computerWins = 0;
    while (playerWins < x && computerWins < x) {
        winner = getWinner(getPlayerMove(), getComputerMove());
        if (winner === 'player') {
            playerWins++;
            console.log('Player won!');
        }   else if (winner === 'computer') {
            computerWins++;
            console.log('Computer won!');
        }   else {
            console.log('The result is a tie!');
        }
        console.log('Player chose ' + getPlayerMove() + ' while Computer chose ' + getComputerMove());
        console.log('The score is currently ' + playerWins + ' to ' + computerWins + '\n');get
    }

    // Write code that plays 'Rock, Paper, Scissors' until either the player or the computer has won five times.
    /* YOUR CODE HERE */
    if (playerWins > ComputerWins) {
        console.log('Player wins the set!');
    } else {
        console.log('Computer wins the set');
    }
    return [playerWins, computerWins];
    
}

