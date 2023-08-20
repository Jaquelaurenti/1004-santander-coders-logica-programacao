import {setGameEnd} from './setGameEnd.function.js';

let attemptsCount = parseInt(document.getElementById('attempts').textContent);
let letterFound = false;
let foundLetterArray = [];
let notFoundLetterArray = [];

/**
 * Set the attempts count and the event listener for the letter buttons
 * @param {HTMLElement} letters - The letters container
 * @returns {number} {@link attemptsCount} - The number of attempts
 */
export function setAttempts(letters) {
    letters.querySelectorAll('.letter').forEach(
        letter => {
            const {id, textContent} = letter;
            const letterObject = {id ,textContent, found: false};
            foundLetterArray.push(letterObject)
        }
    );
    // letters.querySelectorAll('.letter').forEach(letter => console.log(letter.textContent));
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
 * 1) Receives a letter button;
 * 2) checks if word includes it or not and:
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
        handleLetterNotFound(button.id)
    }

    setGameEnd(attemptsCount)
}
/** Decreases the attempts count, unhidden the body part,
 * and pushes the letter to the {@link notFoundLetterArray}
 * @param {HTMLElement} letter - The letter element
 */
function handleLetterNotFound(letter) {
    attemptsCount--;
    document.getElementById('attempts').textContent = attemptsCount;

    const bodyParts = document.querySelectorAll('.forca-parte');
    bodyParts[attemptsCount].classList.remove('hidden')

    notFoundLetterArray.push(letter)
    console.log(notFoundLetterArray)
}

/**
 * Shows the found letter text element in the word container,
 * and changes its {@link foundLetterArray} property to true
 * @param {HTMLElement} letter - The letter element
 */
function handleLetterFound(letter) {
    letterFound = true;
    letter.classList.remove('hidden');
    foundLetterArray.forEach(letterObject => {
        if (letterObject.textContent === letter.textContent) {
            letterObject.found = true;
        }
    })
    console.log(foundLetterArray)
}