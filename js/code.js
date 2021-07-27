function computerPlay(){
    //returns a random number between 0 and 2
    let randomNumber = Math.floor(Math.random()*3);
    let selectionComputer = undefined;

    //based of the number, it selects, rock, paper or scissors
    switch(randomNumber) {
        case 0:
            selectionComputer = "rock";
            break;
        case 1:
            selectionComputer = "paper";
            break;
        case 2:
            selectionComputer = "scissors";
            break;
    }

    return selectionComputer;
}

function playRound(selectionPlayer, selectionComputer) {
    //if selection from both players is the same, return draw
    //if pc rock and player scissors, return pc won
    //if pc paper and player rock, return pc won
    //if pc scissor and player paper, return pc won
    //else player won

    let userIsWinner = undefined;

    if (selectionPlayer === selectionComputer) {}
    else if (
            (selectionComputer === "rock" && selectionPlayer === "scissors") ||
            (selectionComputer === "paper" && selectionPlayer === "rock") ||
            (selectionComputer === "scissors" && selectionPlayer === "paper")
    ) 
    {
            userIsWinner = false;
    } else {
            userIsWinner = true;
    }

    return userIsWinner;
}

function getWinnerMessage(userIsWinner, selectionPlayer, selectionComputer) {
    //returns a string, which states who won and because of what reason
    switch (userIsWinner) {
        case true:
            return `You won! ${selectionPlayer} beats ${selectionComputer}`;
        case false:
            return `You lost! ${selectionComputer} beats ${selectionPlayer}`;
        default:
            return "Draw!";
    }
}

function getSelectionPlayer() {
    //shows an alert box where to user can enter his selelction for the next play
    //converts the selection to lowercase

    let selectionPlayer = prompt("Please enter your selection for the next round. [Scissors, Rock, Paper]")
    selectionPlayer = selectionPlayer.toLowerCase();

    return selectionPlayer;
}

function hasUserWon (userPoint, computerPoint) {
    if (userPoint > computerPoint) {
        return true
    } else if (userPoint < computerPoint) {
        return false
    }
}

