const palavraDiv = document.querySelector('#palavra');
for (let i = 0; i < palavra.length; i++) {
    const letraDiv = document.createElement('div');
    letraDiv.classList.add('letra');
    letraDiv.id = `letra-${i}`;
    letraDiv.textContent = palavra[i];
    palavraDiv.appendChild(letraDiv);
}
