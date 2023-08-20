import {setGameEnd} from './setGameEnd.function.js';

let attemptsCount = parseInt(document.getElementById('attempts').textContent);
let letterFound = false;

/**
 * Set the attempts count and the event listener for the letter buttons
 * @returns {number} {@link attemptsCount} - The number of attempts
*/
export function setAttempts() {
    document.querySelectorAll('.letter-button').forEach(button => {
        button.addEventListener('click', () => {
            button.disabled = true;
            letterFound = false;

            handleLetter(button);
        });
    });

    return attemptsCount;
}

/** 
 * 1) Receives a letter button; 2) checks if word includes it or not and:
 * 2a) invokes {@link handleLetterFound()} if includes, or 2b) invokes {@link handleLetterNotFound()} if not;
 * 3) finishes invoking the {@link setGameEnd()} function.
 * @param {HTMLElement} button - The letter button
 */
function handleLetter(button) { 
    document.querySelectorAll('.letter').forEach(letter => {
        switch (letter.textContent) {
            case 'a':
            case 'á':
            case 'ã':
            case 'â':
                if (button.id === 'a') {
                    handleLetterFound(letter)
                }
                break;
            case 'e':
            case 'é':
            case 'ê':
                if (button.id === 'e') {
                    handleLetterFound(letter)
                }
                break;
            case 'i':
            case 'í':
                if (button.id === 'i') {
                    handleLetterFound(letter)
                }
                break;
            case 'o':
            case 'ó':
            case 'ô':
            case 'õ':
                if (button.id === 'o') {
                    handleLetterFound(letter)
                }
                break;
            case 'u':
            case 'ú':
            case 'ü':
                if (button.id === 'u') {
                    handleLetterFound(letter)
                }
                break;
            default:
                if (letter.textContent === button.id) {
                    handleLetterFound(letter)
                }
                break;
        }
    });

    if (!letterFound) {
        handleLetterNotFound()
    }

    setGameEnd(attemptsCount)
}
/** Decreases the attempts count and shows the body part */
function handleLetterNotFound() {
    attemptsCount--;
    document.getElementById('attempts').textContent = attemptsCount;

    const bodyParts = document.querySelectorAll('.forca-parte');
    bodyParts[attemptsCount].classList.remove('hidden')
}

/**
 * Shows the found letter text element in the word container
 * @param {HTMLElement} letter - The letter element
 */
function handleLetterFound(letter) {
    letterFound = true;
    letter.classList.remove('hidden');
}