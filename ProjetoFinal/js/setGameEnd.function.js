import { setMaxScore } from "./setGameRecords.function.js";

export function setGameEnd(attempts) {
    if (document.querySelectorAll('.letter.hidden').length === 0) {
        handleButtons()

        let maxScore = setMaxScore(attempts)
        document.getElementById('max-score').innerText = maxScore;

        alert('Acertoooô Miserávi!')
    }

    if (attempts < 1) {
        handleButtons()

        alert('Perdeeeeeeeeu!')
    }
}

function handleButtons() {
    document.querySelectorAll('.letter-button').forEach(
        button => button.disabled = true
    );

    document.getElementById('reset').disabled = false;

}