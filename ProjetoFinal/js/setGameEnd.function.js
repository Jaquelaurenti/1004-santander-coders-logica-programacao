let resetGameButton = document.getElementById('reset');

export function setGameEnd(attempts) {
    if (document.querySelectorAll('.letter.hidden').length === 0) {
        resetGameButton.disabled = false;
        alert('Acertoooô Miserávi!')
    }

    if (attempts < 1) {
        resetGameButton.disabled = false;
        alert('Perdeeeeeeeeu!')
    }
}