let selectionComputer = "none";

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

    return selectionComputer;
}

selectionComputer = computerPlay();