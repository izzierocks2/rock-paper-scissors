const rockButton = document.getElementById('rock-button');
const paperButton = document.getElementById('paper-button');
const scissorsButton = document.getElementById('scissors-button');
const display = document.getElementById('display');

rockButton.addEventListener("click", () =>{
    display.textContent = 'rock';
});