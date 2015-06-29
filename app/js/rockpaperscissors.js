////////////////////////////////////////////////
/*   Provided Code - Please Don't Edit   */
////////////////////////////////////////////////
// 'use strict';

var rockCount = 0;
var scissorsCount = 0; 
var paperCount = 0;
var totalMoves = null;

var playerMove = null;
var computerMove = null;

var rProb = 0.33;
var pProb = 0.66;

function getInput() {
    console.log("Please choose either 'rock', 'paper', or 'scissors'.");
    return prompt();
}

/* function mostCommonPlay() {
    var largest = rockCount;
    var second = rockCount;
    var third = rockCount;
    var mostCommon = 'rock';

    if (paperCount > largest) {
        third = second;
        second = largest;
        largest= paperCount;
        mostCommon = 'paper';
    } else if (scissorsCount > largest) {
        third = second;
        second = largest;
        largest = scissorsCount;
        mostCommon = 'scissors'
    }
    return mostCommon;
} */

// need function to play opposite of player's move to win
// getStrategy()?????
// need to inverse move

function getProbability() {
    count();
    totalMoves = (rockCount + paperCount + scissorsCount);
    var probs = [];
    rProb = scissorsCount / totalMoves;
    pProb = rProb + (rockCount / totalMoves);
    
    
    console.log([rProb, rockCount / totalMoves, (1 - (rProb + pProb))]);
}
    

function count() {
    if (playerMove == 'rock') {
        rockCount += 1;
    } else if (playerMove == 'paper') {
        paperCount += 1;
    } else if (playerMove == 'scissors') {
        scissorsCount += 1;
    }    
}

function randomPlay() {
    var randomNumber = Math.random();
    if (randomNumber < rProb ) {
        return 'rock';
    } else if (randomNumber < pProb) {
        return 'paper';
    } else {
        return 'scissors';
    }
 }

/* function randomPlay() {
    var randomNumber = Math.random();
    if (randomNumber < 0.33) {
        return "rock";
    } else if (randomNumber < 0.66) {
        return "paper";
    } else {
        return "scissors";
    }
} */
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
    // Write code that will set winner to either 'player', 'computer', or 'tie' based on the values of playerMove and computerMove.
    // Assume that the only values playerMove and computerMove can have are 'rock', 'paper', and 'scissors'.
    // The rules of the game are that 'rock' beats 'scissors', 'scissors' beats 'paper', and 'paper' beats 'rock'.
    /* YOUR CODE HERE */
    // rock beats scissors
    // paper beats rock
    // scissors beats paper
    // use the playerMove and computerMove functions to determine winner
    
    if (playerMove == computerMove) {
       return 'tie';
    } else if ((playerMove == 'rock' && computerMove == 'scissors') ||
                (playerMove == 'scissors' && computerMove =='paper') || 
                (playerMove == 'paper' && computerMove == 'rock')) 
        {
            return 'player';

    } else {
        return 'computer';
    } 
      
}


function playTo(x) {
    console.log("Let's play Rock, Paper, Scissors");
    var playerWins = 0;
    var computerWins = 0;
    var winner = null;
    while (playerWins < x && computerWins < x) {
        getProbability();
        playerMove = getPlayerMove();
        computerMove = getComputerMove();
        count();
        winner = getWinner(playerMove, computerMove);
        if (winner == 'player') {
            playerWins++;
        }   else if (winner == 'computer') {
            computerWins++;
        }
        console.log("Player chose " + playerMove + " while Computer chose " + computerMove);
        console.log("The score is currently " + playerWins + " to " + computerWins + "\n");
    }

    // Write code that plays 'Rock, Paper, Scissors' until either the player or the computer has won five times.
    /* YOUR CODE HERE */
    return [playerWins, computerWins];
    
}

/*  What if the computer could learn the player's moves? 
    The computer could track which option ('rock', 'paper', or 'scissors') is chosen. 
    The computer then decides which option is most commonly chosen by the player. 
    Based on this information, the computer more often than not chooses the superior option. 
    i.e. ('rock' correlates 'paper', 'paper' correlates 'scissors', and 'scissors' correlates 'rock')
    The computer incorporates a random factor into this decision, to match the arbitrary choices the player could make. */