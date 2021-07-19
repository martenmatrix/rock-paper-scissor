let selectionComputer = "none";
let selectionPlayer = "none";

function computerPlay(){
    //returns a random number between 0 and 2
    randomNumber = Math.floor(Math.random()*3);

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
            userIsWinner = true;
    } else {
            userIsWinner = false;
    }

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

selectionComputer = computerPlay();
console.log(playRound("rock", "scissors"));