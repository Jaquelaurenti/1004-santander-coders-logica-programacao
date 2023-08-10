import { getWord } from './getWord.function.js';

function createGame() {
    const palavra = getWord();
    if (palavra) {
        console.log('Random word:', palavra);
        // Now you can continue with your Hangman game logic using the fetched word
    } else {
        console.log('Failed to fetch a random word.');
    }
}

export { createGame };