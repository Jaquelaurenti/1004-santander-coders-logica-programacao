async function startGame() {
    const palavra = await getPalavra();
    if (palavra) {
        console.log('Random word:', palavra);
        // Now you can continue with your Hangman game logic using the fetched word
    } else {
        console.log('Failed to fetch a random word.');
    }
}

startGame();