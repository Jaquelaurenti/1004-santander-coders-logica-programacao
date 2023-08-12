export function createLettersElements(word) {
    const wordDiv = document.querySelector('#word');
    
    for (let i = 0; i < word.length; i++) {
        const letterDiv = document.createElement('div')
            
        letterDiv.classList.add('letter')
        letterDiv.classList.add('hidden')
        letterDiv.id = `letter-${i}`
        letterDiv.textContent = word[i]
        
        wordDiv.appendChild(letterDiv)
    }

    return wordDiv;
}