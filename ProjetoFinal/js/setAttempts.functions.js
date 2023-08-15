import {setGameEnd} from './setGameEnd.function.js';

let attemptsCount = parseInt(document.getElementById('attempts').textContent);
let letterFound = false;

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

function handleLetterNotFound() {
    attemptsCount--;
    document.getElementById('attempts').textContent = attemptsCount;

    const bodyParts = document.querySelectorAll('.forca-parte');
    bodyParts[attemptsCount].classList.remove('hidden')
}

function handleLetterFound(letter) {
    letterFound = true;
    letter.classList.remove('hidden');

}
