import { createGame } from './createGame.function.js';

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

let resetGameButton = document.getElementById('reset');
resetGameButton.addEventListener('click', () => {
    window.location.reload();
});