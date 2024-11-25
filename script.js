const rockButton = document.getElementById('rock-button');
const paperButton = document.getElementById('paper-button');
const scissorsButton = document.getElementById('scissors-button');
const display = document.getElementById('display');

const choices = ["Rock", "Paper", "Scissors"];
const randomIndex = Math.floor(Math.random() * choices.length);
const computerChoice = choices[randomIndex];

document.getElementById("computer-choice").innerText = "Computer's choice: " + computerChoice;

document.getElementById("rock-button").addEventListener("click", () =>{
    document.getElementById("player-choice").innerText = "Player's choice: Rock";
});

document.getElementById("paper-button").addEventListener("click", () =>{
    document.getElementById("player-choice").innerText = "Player's choice: Paper";
});

document.getElementById("scissors-button").addEventListener("click", () =>{
    document.getElementById("player-choice").innerText = "Player's choice: Scissors";
});

document.getElementById("rock-button").addEventListener("click", () => {
    document.getElementById("player-choice").innerHTML = '<img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQYKDxVCDnbHAalbHXiwbPD5lP6qTLl8JHOtg&s" alt="Rock">';
});

document.getElementById("paper-button").addEventListener("click", () => {
    document.getElementById("player-choice").innerHTML = '<img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTva4CkAMq-prLxeljuSOYXh1gXzyGs8D7e0Q&s" alt="Paper">';
});

document.getElementById("scissors-button").addEventListener("click", () => {
    document.getElementById("player-choice").innerHTML = '<img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQDgGm25cxlzsijnPSy5SQJVwG-TYMuKc4nOQ&s" alt="Paper">';
});


let playerChoice;
document.getElementById("rock-button").addEventListener("click", () =>{
    playerChoice = "Rock";
    playGame();
});
document.getElementById("paper-button").addEventListener("click", () =>{
    playerChoice = "Paper";
    playGame();
});
document.getElementById("scissors-button").addEventListener("click", () =>{
    playerChoice = "Scissors";
    playGame();
});

function playGame() {
    const choices = ["Rock", "Paper", "Scissors"];
    const randomIndex = Math.floor(Math.random() * choices.length);
    const computerChoice = choices[randomIndex];

    let result;
    if (playerChoice === computerChoice) {
        result = "It's a draw!";
    } else if (
        (playerChoice === "Rock" && computerChoice === "Scissors") ||
        (playerChoice === "Paper" && computerChoice === "Rock") ||
        (playerChoice === "Scissors" && computerChoice === "Paper")
    ) {
        result = "Player wins!";
    } else {
        result = "Computer wins!";
    }

    document.getElementById("winner").innerText = "Winner: " + result;
    document.getElementById("computer-choice").innerText = "Computer's choice: " + computerChoice;
}

let playerScore = 0;
let computerScore = 0;

if (playerChoice === computerChoice) {
    result = "It's a draw!";
} else if (
    (playerChoice === "Rock" && computerChoice === "Scissors") ||
    (playerChoice === "Paper" && computerChoice === "Rock") ||
    (playerChoice === "Scissors" && computerChoice === "Paper")
) {
    result = "Player wins!";
    playerScore += 1;
} else {
    result = "Computer wins!";
    computerScore += 1;
}

document.getElementById("player-score").innerText = "Player Score: " + playerScore;
document.getElementById("computer-score").innerText = "Computer Score: " + computerScore;

