import { createLettersElements } from './createLettersElements.function.js';
import { getWord } from './getWord.function.js';
import { setAttempts } from './setAttempts.functions.js';
import { setCookie, getCookie } from './setGameRecords.function.js';


/** This function creates the game, when the page finishs the DOM loading
 * @return {boolean} true if the game was created successfully
 */
export function createGame() {
    const word = getWord();
    if (!word) {
        throw new Error('Could not get a word from the API');
    }

    const letters = createLettersElements(word);
    if(word.length !== letters.childElementCount) {
        throw new Error('Error generating letters');
    }

    let maxScore = getCookie('score');

    if (maxScore) {
        document.getElementById('max-score').innerText = maxScore;
    } else {
        maxScore = setCookie('score', 0, 1)
        document.getElementById('max-score').innerText = getCookie('score');
    }

    const attempts = setAttempts(letters);

    return true;
}