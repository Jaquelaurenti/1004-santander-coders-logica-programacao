import { createLettersElements } from './createLettersElements.function.js';
import { getWord } from './getWord.function.js';
import { setAttempts } from './setAttempts.functions.js';

export function createGame() {
    const word = getWord();
    if (!word) {
        throw new Error('Could not get a word from the API');
    }

    const letters = createLettersElements(word);
    if(word.length !== letters.childElementCount) {
        throw new Error('Error generating letters');
    }

    const attempts = setAttempts();

    return true;
}