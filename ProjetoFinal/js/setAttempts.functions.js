let attemptsCount = parseInt(document.getElementById('attempts').textContent);

export function setAttempts() {
    document.querySelectorAll('.letter-button').forEach(button => {
        button.addEventListener('click', () => {
            button.disabled = true;

            handleLetterFound(button);
        });
    });

    return;
}

function handleLetterFound(button) { 
    let letterFound = false;
    document.querySelectorAll('.letter').forEach(letter => {
        if (letter.textContent === button.id) {
            letterFound = true;
            letter.classList.remove('hidden');
        }
    })

    if (!letterFound) {
        attemptsCount--;

        document.getElementById('attempts').textContent = attemptsCount;
    }

    if (attempts < 1) {
        alert('Perdeeeeeeeeu!')
        window.location.reload();
    }

    if (document.querySelectorAll('.letter.hidden').length === 0) {
        alert('Ganhouuuuuuu!')
    }

}