export function createLettersElements(word) {
    const wordDiv = document.getElementById('word');
    
    for (let i = 0; i < word.length; i++) {
        const letterDiv = document.createElement('div')    
        letterDiv.classList.add('letter-container')
        wordDiv.appendChild(letterDiv)

        const letterSpan = document.createElement('span')
        letterSpan.id = `letter-${i}`
        letterSpan.classList.add('letter')
        letterSpan.classList.add('hidden')
        letterSpan.textContent = word[i]
        
        letterDiv.appendChild(letterSpan)
    }

    return wordDiv;
}