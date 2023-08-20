import { setMaxScore } from "./setGameRecords.function.js";

/**
 * Check if the game is over and:
 * a) invokes {@link handleButtons()}, both if guessed or not the word.
 * b) invokes {@link setMaxScore()}, if has guessed the word;
 * @param {number} attempts - The number of attempts
 */
export function setGameEnd(attempts) {
    if (document.querySelectorAll('.letter.hidden').length === 0) {
        handleButtons()

        let maxScore = setMaxScore(attempts)
        document.getElementById('max-score').innerText = maxScore;

        alert('Parabéns, você ganhou!')
    }

    if (attempts < 1) {
        handleButtons()

        alert('Não foi dessa vez, tente novamente!')
    }
}

/**
 * Disable the letter buttons and enable the reset button
 */
function handleButtons() {
    document.querySelectorAll('.letter-button').forEach(
        button => button.disabled = true
    );

    document.getElementById('reset').disabled = false;

}