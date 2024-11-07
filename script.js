function generateRandomNumber() {
    let randomNumber = Math.floor(Math.random() * 100) + 1;
    return randomNumber;
}

function getPlayerGuess() {
    let playerGuess;
    while (true) {
        playerGuess = prompt("Guess a number between 1 and 100! Type 'bye' to exit.");
        if (playerGuess == null || playerGuess.toLocaleLowerCase() === "bye") {
            return "bye";
        } else if (!isNaN(playerGuess) && playerGuess.trim() !== "" && Number.isInteger(parseFloat(playerGuess)) && playerGuess >= 1 && playerGuess <= 100) {
            return parseInt(playerGuess, 10);
        }
        alert("Can you not read? Guess a number between 1 and 100, or type 'bye' to exit...")
    }
}




