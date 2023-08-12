export function setAttempts() {
    let attemptsCount = 0;
    let errorCount = 0;

    document.querySelectorAll('.letter-button').forEach(button => {
        button.addEventListener('click', () => {
            button.disabled = true;
            
            attemptsCount++;
            document.querySelector('.attempts').textContent = attemptsCount;

            const isLetterFound = (document.querySelector('.letter').textContent === button.id);
            if (!isLetterFound) {
                errorCount++;
                document.querySelector('.errors').textContent = errorCount;
            } 

            const letters = document.querySelectorAll('.letter');
            letters.forEach(letter => {
                if (letter.textContent === button.id) {
                    letter.classList.remove('hidden');
                } 
            });
        });
    });

    return { attempts: attemptsCount, errors: errorCount };
}