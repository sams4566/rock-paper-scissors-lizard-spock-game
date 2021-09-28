
document.addEventListener("DOMContentLoaded", function() {
    let outOfFive = document.getElementById("outOfFive");
    let outOfTen = document.getElementById("outOfTen");

    outOfFive.addEventListener("click", function () {
    let gameButtons = document.getElementsByClassName("gameButtons");

    outOfFive.remove();
    outOfTen.remove();
    arrowDown()

    for (let button of gameButtons) {
        button.addEventListener("click", function () {
            let userSelection1 = this.getAttribute("data-type");
            runGame1(userSelection1);
        });
    }})

    outOfTen.addEventListener("click", function () {
    let gameButtons = document.getElementsByClassName("gameButtons");

    outOfFive.remove();
    outOfTen.remove();
    arrowDown()

    for (let button of gameButtons) {
        button.addEventListener("click", function () {
            let userSelection2 = this.getAttribute("data-type");
            runGame2(userSelection2);
        });
    }})
})

function arrowDown() {
    let userImage = document.getElementById("user-selection-image");
    let computerImage = document.getElementById("computer-selection-image");
    let chooseMessage = document.getElementById("result-message")
    
    userImage.src = `assets/images/${"arrow-down"}.jpg`;
    userImage.alt = "Downward Arrow";

    computerImage.src = `assets/images/${"arrow-down"}.jpg`;
    computerImage.alt = "Downward Arrow";

    chooseMessage.innerText = `Choose Below`
}

function runGame1(userSelection1) {
    let selection = ["rock", "paper", "scissors", "lizard", "spock"];
    let userImage = document.getElementById("user-selection-image");
    let computerImage = document.getElementById("computer-selection-image");

    userImage.src = `assets/images/${selection[userSelection1]}.jpg`;
    userImage.alt = selection[userSelection1];

    let computerSelection = Math.floor(Math.random() * 5);

    computerImage.src = `assets/images/${selection[computerSelection]}.jpg`;
    computerImage.alt = selection[computerSelection];

    let result1 = findWinner(selection[userSelection1], selection[computerSelection]);

    points1(result1);
}

function runGame2(userSelection2) {
    let selection = ["rock", "paper", "scissors", "lizard", "spock"];
    let userImage = document.getElementById("user-selection-image");
    let computerImage = document.getElementById("computer-selection-image");

    userImage.src = `assets/images/${selection[userSelection2]}.jpg`;
    userImage.alt = selection[userSelection2];

    let computerSelection = Math.floor(Math.random() * 5);

    computerImage.src = `assets/images/${selection[computerSelection]}.jpg`;
    computerImage.alt = selection[computerSelection];

    let result2 = findWinner(selection[userSelection2], selection[computerSelection]);

    points2(result2);
}

function points1(result1) {
    if (result1 === "win") {
        increaseUserScore1();
    } else if (result1 === "lose") {
        increaseComputerScore1();
    } else if (result1 === "draw") {
        drawMessage1();
    } else {
        alert(`Abort`);
    }
}

function points2(result2) {
    if (result2 === "win") {
        increaseUserScore2();
    } else if (result2 === "lose") {
        increaseComputerScore2();
    } else if (result2 === "draw") {
        drawMessage2();
    } else {
        alert(`Abort`);
    }
}

function increaseUserScore1() {
    let currentScore1 = parseInt(document.getElementById("user-score").innerText);
    let currentScore2 = parseInt(document.getElementById("computer-score").innerText);

    let message = document.getElementById('result-message');
    if (currentScore2 === 5) {
        location.reload();
    } else if (currentScore1 < 4) {
        document.getElementById("user-score").innerText = ++currentScore1;
        winMessage();
    } else if (currentScore1 === 5) {
        location.reload();
    } else if (currentScore1 === 4) {
        document.getElementById("user-score").innerText = ++currentScore1;
        message.innerText = `You have won!`;
    }
}

function increaseComputerScore1() {
    let currentScore1 = parseInt(document.getElementById("user-score").innerText);
    let currentScore2 = parseInt(document.getElementById("computer-score").innerText);

    let message = document.getElementById('result-message');
    
    if (currentScore1 === 5) {
        location.reload();
    } else if (currentScore2 < 4) {
        document.getElementById("computer-score").innerText = ++currentScore2;
        loseMessage();
    } else if (currentScore2 === 5) {
        location.reload();
    } else if (currentScore2 === 4) {
        document.getElementById("computer-score").innerText = ++currentScore2;
        message.innerText = `You have lost!`;
    }
}

function drawMessage1() {
    let message = document.getElementById('result-message');
    let currentScore1 = parseInt(document.getElementById("user-score").innerText);
    let currentScore2 = parseInt(document.getElementById("computer-score").innerText);

    if (currentScore1 === 5) {
        location.reload();
    } else if (currentScore2 === 5) {
        location.reload();
    } else if (currentScore1 < 5) {
        message.innerText = `Draw!`;
    } else if (currentScore2 < 5) {
        message.innerText = `Draw!`;
    }
}

function increaseUserScore2() {
    let currentScore1 = parseInt(document.getElementById("user-score").innerText);
    let currentScore2 = parseInt(document.getElementById("computer-score").innerText);
    let message = document.getElementById('result-message');

    if (currentScore2 === 10) {
        location.reload();
    } else if (currentScore1 < 9) {
        document.getElementById("user-score").innerText = ++currentScore1;
        winMessage();
    } else if (currentScore1 === 10) {
        location.reload();
    } else if (currentScore1 === 9) {
        document.getElementById("user-score").innerText = ++currentScore1;
        message.innerText = `You have won!`;
    }
}

function increaseComputerScore2() {
    let currentScore1 = parseInt(document.getElementById("user-score").innerText);
    let currentScore2 = parseInt(document.getElementById("computer-score").innerText);
    let message = document.getElementById('result-message');
    
    if (currentScore1 === 10) {
        location.reload();
    } else if (currentScore2 < 9) {
        document.getElementById("computer-score").innerText = ++currentScore2;
        loseMessage();
    } else if (currentScore2 === 10) {
        location.reload();
    } else if (currentScore2 === 9) {
        document.getElementById("computer-score").innerText = ++currentScore2;
        message.innerText = `You have lost!`;
    }
}

function drawMessage2() {
    let message = document.getElementById('result-message');
    let currentScore1 = parseInt(document.getElementById("user-score").innerText);
    let currentScore2 = parseInt(document.getElementById("computer-score").innerText);

    if (currentScore1 === 10) {
        location.reload();
    } else if (currentScore2 === 10) {
        location.reload();
    } else if (currentScore1 < 10) {
        message.innerText = `Draw!`;
    } else if (currentScore2 < 10) {
        message.innerText = `Draw!`;
    }
}

function winMessage() {
    let message = document.getElementById('result-message');
    message.innerText = `You Win!`;
}

function loseMessage() {
    let message = document.getElementById('result-message');
    message.innerText = `You Lose!`;
}

function findWinner(userChoice, computerChoice) {
    if (userChoice === "rock") {
        if (computerChoice === "rock") {
            return "draw";
        } else if (computerChoice === "paper") {
            return "lose";
        } else if (computerChoice === "scissors") {
            return "win";
        } else if (computerChoice === "lizard") {
            return "win";
        } else if (computerChoice === "spock") {
            return "lose";
        } else {
            alert(`Abort`);
        }}
    if (userChoice === "paper") {
        if (computerChoice === "rock") {
            return "win"
        } else if (computerChoice === "paper") {
            return "draw"
        } else if (computerChoice === "scissors") {
            return "lose"
        } else if (computerChoice === "lizard") {
            return "lose"
        } else if (computerChoice === "spock") {
            return "win"
        } else {
            alert(`Abort`);
        }}
    if (userChoice === "scissors") {
        if (computerChoice === "rock") {
            return "lose";
        } else if (computerChoice === "paper") {
            return "win";
        } else if (computerChoice === "scissors") {
            return "draw";
        } else if (computerChoice === "lizard") {
            return "win";
        } else if (computerChoice === "spock") {
            return "lose";
        } else {
            alert(`Abort`);
        }}
    if (userChoice === "lizard") {
        if (computerChoice === "rock") {
            return "lose";
        } else if (computerChoice === "paper") {
            return "win";
        } else if (computerChoice === "scissors") {
            return "lose";
        } else if (computerChoice === "lizard") {
            return "draw";
        } else if (computerChoice === "spock") {
            return "win";
        } else {
            alert(`Abort`);
        }}
    if (userChoice === "spock") {
        if (computerChoice === "rock") {
            return "win";
        } else if (computerChoice === "paper") {
            return "lose";
        } else if (computerChoice === "scissors") {
            return "win";
        } else if (computerChoice === "lizard") {
            return "lose";
        } else if (computerChoice === "spock") {
            return "draw";
        } else {
            alert(`Abort`);
        }}
}