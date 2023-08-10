import { createGame } from '/ProjetoFinal/js/createGame.function.js';

let isGameRunning = false;

window.addEventListener('load', () => {
    if (isGameRunning) {
        return;
    } else {
        isGameRunning = true;
        createGame();
    }
});