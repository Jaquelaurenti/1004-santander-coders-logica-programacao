let errorCount = parseInt(document.querySelector('.errors').textContent);
let attemptsCount = parseInt(document.querySelector('.attempts').textContent);

export function setAttempts() {
    document.querySelectorAll('.letter-button').forEach(button => {
        button.addEventListener('click', () => {
            button.disabled = true;

            attemptsCount++
            document.querySelector('.attempts').textContent = attemptsCount;

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
        errorCount++;
        document.querySelector('.errors').textContent = errorCount;
    }

    if (errorCount > 5) {
        console.log('Lost game')
    }

    /* if no longer hidden letters */
    if (document.querySelectorAll('.letter.hidden').length === 0) {
        console.log('Win game')
    }
}