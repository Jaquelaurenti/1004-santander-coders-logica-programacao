async function getPalavra() {
    try {
        const response = await fetch('https://pt.wiktionary.org/wiki/Especial:Aleat%C3%B3ria');
        const url = response.url;
        const urlSplit = url.split('/');
        const palavra = urlSplit[urlSplit.length - 1];
        return palavra;
    } catch (error) {
        console.log(error);
        return null; // Handle the error gracefully
    }
}