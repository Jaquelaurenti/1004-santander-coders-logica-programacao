import { createGame } from '/ProjetoFinal/js/createGame.function.js';

let isGameRunning = false;

window.addEventListener('load', () => {
    if (!isGameRunning) {
        try {
            isGameRunning = createGame()   
        } catch (error) {
            console.error(error);
        };
    }
});

/* document.querySelectorAll('.letter-button').forEach(button => {
    button.addEventListener('click', () => {
        button.disabled = true;

        const isLetterFound = document.querySelector('.letter').textContent === button.id;
        if (!isLetterFound) {
            attempts++;
            document.querySelector('.attempts').textContent = attempts;
        } 

        const letters = document.querySelectorAll('.letter');
        letters.forEach(letter => {
            if (letter.textContent === button.id) {
                letter.classList.remove('hidden');
            } 
        });
    });
}); */