/* ## Callback */
/* Exercício 1: Callback Básico
Crie uma função chamada executarCallback que recebe uma função de callback como argumento e a executa. */
function executarCallback(message,callback) {
    console.log(message);
    callback();
}
function meuCallback() {
    console.log('Callback executado');
}
// executarCallback('Executando callback',meuCallback);

/* Exercício 2: Manipulação de Array
Crie uma função chamada dobrarNumeros que recebe um array de números e uma função de callback. A função dobrarNumeros deve aplicar a função de callback a cada elemento do array e retornar um novo array com os elementos dobrados. */
function dobrarNumeros(array,callback) {
    let newArray = [];
    
    array.forEach(
        element => newArray.push(
            callback(element)
        )
    );

    return newArray;
}
function operador(element) {
    return element *= 2;
}
// console.log(dobrarNumeros([1,2,3,4,5],operador));

/* Exercício 3: Filtragem com Callback
Crie uma função chamada filtrarPalavras que recebe um array de palavras e uma função de callback. A função filtrarPalavras deve retornar um novo array contendo apenas as palavras que atendem ao critério da função de callback. */
function filtrarPalavras(array,callback) {
    let newArray = [];

    array.filter(word => {
        if(callback(word)) {
            newArray.push(word);
        }
    })

    return newArray;
}
function isPalindrome(word) {
    return word.split('').reverse().join('') === word;
}
// console.log(filtrarPalavras(['arara','casa','carro','ovo','sol'],isPalindrome));

/* Exercício 4: Ordenação com Callback
Crie uma função chamada ordenarNumeros que recebe um array de números e uma função de callback para determinar a ordem de ordenação. A função ordenarNumeros deve retornar um novo array com os números ordenados de acordo com o critério da função de callback. */
function ordenarNumerosPor(array) {
    return (array.length > 10) ? (a,b) => a - b : (a,b) => b - a;
}
function ordenarNumeros(array,callback) {
    const criterio = callback(array)
    return array.sort(criterio);
}
// console.log(ordenarNumeros([1, 89, 2, 3, 5, 144, 13, 21, -1, 34, 55, 8],ordenarNumerosPor));

/* Exercício 5: Timer com Callback
Crie uma função chamada executarAposTempo que recebe uma função de callback e um tempo em milissegundos. A função executarAposTempo deve agendar a execução da função de callback após o tempo especificado. */
function dizTchauLilica() {
    console.log('Tchau Lilica!')
}
function executarAposTempo(callback, tempo) {
    console.log('Diga tchau, Lilica.')
    const message = setTimeout(
        callback,
        tempo
    );
}
// executarAposTempo(dizTchauLilica, 2000);
    
/* ## Promise */
/* Exercício 1: Criando uma Promise Simples
Crie uma Promise simples que retorna uma mensagem de sucesso após 2 segundos. Use a função setTimeout para simular um atraso. */
function promiseSimples() {
    console.log('A espera de uma Promise')
    const resolucao = new Promise((resolve, reject) => {
        try {
            setTimeout(() => {
                resolve('Promise resolvida');
            }, 2000);    
        } catch (error) {
            console.error(error);
        }
    });
    console.log('Promise criada')
    return resolucao;
}
// promiseSimples()
// .then(message => console.log(message))
// .finally(() => console.log('Promise finalizada'));

/* Exercício 2: Tratamento de Erro em Promise
Crie uma Promise que simula uma operação que pode falhar. Se a operação for bem-sucedida, resolva a Promise com uma mensagem de sucesso. Caso contrário, rejeite-a com uma mensagem de erro. (Lembre-se de usar o reject) */
function promiseRejeitada(isRejeitada) {
    console.log('A espera de uma Promise')
    
    new Promise((resolve, reject) => {
        isRejeitada ? reject('Promise rejeitada') : resolve('Promise resolvida');
    })
        .then(message => console.log(message))
        .catch(error => console.error(error))
        .finally(() => console.log('Promise finalizada'));
    
    console.log('Promise criada')
}
// promiseRejeitada(true);
// promiseRejeitada(false);

/* Exercício 4: Encadeamento de Promises
Crie um encadeamento de Promises que realiza uma sequência de operações assíncronas. Por exemplo, faça uma requisição a uma API, processe os dados e, em seguida, realize outra operação. */
async function encadeamentoDePromises(username) {
    const githubUserResponse = await fetch(`https://api.github.com/users/${username}`)
        .then(response => response.json())
        .catch(error => console.error(error))
        .finally(() => console.log('Start game'));

    const {id} = await githubUserResponse;
    
    return new Promise((resolve, reject) => {
        
        (id === 20400508) ? resolve(`It's-a me, Mario!`) : reject(`Mario who?`)
    })
        .then(message => console.log(message))
        .catch(error => console.error(error))
        .finally(() => console.log('Game over'));
}
// encadeamentoDePromises('gleidsonlm');
// encadeamentoDePromises('mario');

/* Exercício 1: Promessa com Atraso Aleatório
Crie uma função que retorna uma Promise que será resolvida após um tempo aleatório entre 1 e 5 segundos. Use a função setTimeout e Math.random() para criar esse atraso variável. */
async function promiseComAtrasoEntre(min,max) {
    const tempo = Math.floor(Math.random() * max) + min; // 1 > random > 0
    console.log(`Promise resolvida em ${tempo}`)
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('Promise resolvida');
        }, tempo * 1000);
    })
        .then(message => console.log(message))
        .catch(error => console.error(error))
        .finally(() => console.log('Promise finalizada'));
}
// promiseComAtrasoEntre(1,5);

/* Exercício 2: Rejeição de Promessa
Crie uma função que retorna uma Promise que será rejeitada após um tempo aleatório entre 1 e 3 segundos. */
async function promiseRejeitadaEntre(min,max) {
    const tempo = Math.floor(Math.random() * max) + min; // 1 > random > 0
    console.log(`Promise rejeitada em ${tempo}`)
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            reject('Promise rejeitada');
        }, tempo * 1000);
    })
        .then(message => console.log(message))
        .catch(error => console.error(error))
        .finally(() => console.log('Promise finalizada'));
}
// promiseRejeitadaEntre(1,3);

/* ## async e await  */
/* Exercício 1: Função Assíncrona Simples
Crie uma função assíncrona que retorna uma mensagem após um atraso de 2 segundos. */
function simplesAsync(mensagem,segundos){
    console.log(`Aguarde ${segundos} segundos`)

    setTimeout(() => {
        console.log(mensagem);
    }, segundos * 1000);
}
// simplesAsync('Obrigado por aguardar, tenha um bom dia!',2);

/* Exercício 2: Tratamento de Erros com async/await
Crie uma função assíncrona que simula uma operação que pode falhar. Use try e catch para lidar com erros. */
async function isResolvidaRandom() {
    const random = Math.round(Math.random() * 2); // 50/50
    try {
        if (random) {
            return true;
        } else {
            throw new Error('Deu ruim');
        }            
    } catch (error) {
        return false;
    }
}
// isResolvidaRandom().then(message => console.log(message));

/* Exercício 3: Encadeamento com async/await
Crie uma série de funções assíncronas que dependem dos resultados anteriores. */
async function getPokemonAbilities(pokemon) {        
    const pokemonResponse = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`)
    .then(response => response.json())
    .catch(error => console.error(error))
    
    const {abilities} = await pokemonResponse;

    const lista = []
    abilities.forEach(item => {
        lista.push({ability: item.ability.name, url: item.ability.url})
    })     
    
    const abilitiesResponse = await Promise.all(
        lista.map(async ability => {
            const abilityResponse = fetch(ability.url)
                .then(response => response.json())
                .catch(error => console.error(error))

            const {effect_entries} = await abilityResponse;
            effect_entries.forEach(entry => {
                if (entry.language.name === 'en') {
                    ability.effect = entry.short_effect;
                }
            })
        })
    )
    .then(() => lista)
    .catch(error => console.error(error))
        
    return lista;
}
// getPokemonAbilities('pikachu').then(lista => lista.forEach(item => console.log(item)));
// getPokemonAbilities('ditto').then(lista => lista.forEach(item => console.log(item)));

/* Exercício 5: Consumindo API com async/await
Crie uma função que utiliza fetch com async e await para buscar dados de uma API. */
async function fetchGithubUserAvatar(username) {
    const githubUser = await fetch(`https://api.github.com/users/${username}`)
        .then(response => response.json())
        .catch(error => console.error(error))

    return await githubUser.avatar_url
}
// fetchGithubUserAvatar('gleidsonlm').then(avatar_url => console.log(avatar_url));