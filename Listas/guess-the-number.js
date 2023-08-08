
function guessTheNumber() {
    const theNumber = Math.floor(Math.random() * 100) + 1;
    console.log(theNumber)
    let guess = Number(prompt("Guess a number between 1 and 100"));

    do {
        switch(guess) {
            case (!guess):
                break;
            case (guess <= 0 || guess > 100):
                guess = Number(prompt("You need to guess a number between 1 and 100"));
                break;
            case (guess > theNumber):
                guess = Number(prompt(guess + " is too high. Guess again!"));
                break;
            case (guess < theNumber):
                guess = Number(prompt(guess + " is too low. Guess again!"));
                break;
            default:
                break;
        }
    } while (guess !== theNumber)
    
    if (guess === theNumber) {
        return alert("You got it: " + theNumber);
    }
}

guessTheNumber()