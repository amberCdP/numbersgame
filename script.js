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

function checkGuess(randomNumber, playerGuess) {
    if (randomNumber > playerGuess) {
        return "That's too high!";
    } else if (randomNumber < playerGuess) {
        return "That's too low!";
    } else {
        return "Victory!";
    }
}

function game() {
    let attempts = 0;
    const maxAttempts = 10;
    const correctNumber = generateRandomNumber();
    while (attempts < maxAttempts) {
        const playerNumber = getPlayerGuess();
        if (playerNumber === "bye") {
            alert("You have chosen to exit the game. If you want to play again, make sure to refresh the page!");
            return;
        }
        attempts++;

        const comparisson = checkGuess(playerNumber, correctNumber);
        alert(comparisson);
        if (comparisson === "Victory!") {
            alert(`Congrats! You have guessed the correct number in ${attempts} attempts! Refresh the page to start over.`);
            break;
        } else {
            alert(`Try again! Attempts left: ${maxAttempts - attempts}`);
        }
    }

    if (attempts === maxAttempts) {
        alert(`Defeat! You have used all ${maxAttempts} attempts. The correct answer was ${correctNumber}. Refresh the page to start over or give up.`);
    }
    return;
}

alert("Welcome to the Number Guessing game! Let's play!");
game();



