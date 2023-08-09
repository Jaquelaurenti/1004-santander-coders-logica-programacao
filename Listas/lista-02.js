/* 1- Crie um objeto que represente um estudante com propriedades como nome, idade, curso e notas. Acesse e exiba essas propriedades. */
const estudante = {
    nome:'Fulano da Silva',
    idade:'18',
    curso:'Front-end Angular',
    notas: [10, 9, 8, 8.5, 9],
}
// console.log(`O ${estudante.nome}, ${estudante.idade >= 18 ? 'maior de idade' : 'menor de idade'}, está matriculado no curso de ${estudante['curso']}.`);

/* 2- Crie um dicionário que mapeie nomes de países a suas respectivas capitais. Crie uma função que receba o nome de um país e retorne a capital correspondente. */
function getCapitalDoPais(pais) {
    const capitais = {
        Brasil: 'Brasília',
        Portugal: 'Lisboa',
        França: 'Paris',
        Itália: 'Roma',
        Espanha: 'Madrid',
        Alemanha: 'Berlim',
        Inglaterra: 'Londres',
        EstadosUnidos: 'Washington',
        Argentina: 'Buenos Aires',
        Uruguai: 'Montevidéu',
    }
    if (!capitais.hasOwnProperty(pais)) {
        return 'País não encontrado';
    } else {
        return capitais[pais];
    }
}
// console.log(capitalDoPais('Brasil')); // Brasília
// console.log(capitalDoPais('Nárnia')); // País não encontrado

/* 3- Crie um dicionário com nomes de frutas e seus preços. Escreva uma função que calcule o preço total de uma cesta de frutas. */
function calcPrecoDaCesta(cesta) {
    const precos = {
        banana: 1.50,
        maçã: 2.00,
        laranja: 2.50,
        pera: 3.00,
        uva: 4.00,
    }
    let total = 0;
    for (let fruta in cesta) {
        if (precos.hasOwnProperty(fruta)) {
            total += precos[fruta] * cesta[fruta];
        }
    }
    return total;
}
// console.log(calcPrecoDaCesta({ banana: 2, laranja: 1, maçã: 3 })); // 11.5 = (2 * 1.5) + (1 * 2.5) + (3 * 2)

/* 4-   Crie um objeto que represente um livro com propriedades como título, autor, ano de publicação, etc.
        Crie uma função que imprima as informações do livro em um formato legível. */
const oLivro = {
    titulo: 'Silmarilion',
    autor: 'J. R. R. Tolkien',
    anoDePublicacao: 1977,
};
function printLivro(livro) {
    return `O livro ${livro.titulo}, escrito por ${livro.autor}, foi publicado em ${livro.anoDePublicacao}.`;
}
// console.log(printLivro(oLivro));

/* ### Map: */

/* 5- Dado um array de números, crie um novo array onde cada número seja elevado ao quadrado. */
function quadrado(arr) {
    return arr.map((num) => Math.pow(num, 2));
}
// console.log(quadrado([1, 2, 3, 4, 5])); // [1, 4, 9, 16, 25]

/* 6- Dado um array de palavras, crie um novo array com a primeira letra de cada palavra em maiúscula. */
function capitalize(arr) {
    return arr.map((palavra) => palavra[0].toUpperCase() + palavra.slice(1));
}
// console.log(capitalize(['javaScript', 'reactJS', 'nodeJS', 'angularJS', 'vueJS'])); // ['JavaScript', 'ReactJS', 'NodeJS', 'AngularJS', 'VueJS']

/* 7- Crie um array de objetos representando produtos com propriedades como nome, preço e quantidade.
    Use o método map() para calcular o valor total de cada produto (preço * quantidade). */
const refrigerantes = [
    { nome: 'Cajuína', preco: 8.00, quantidade: 2 },
    { nome: 'Tubaína', preco: 9.00, quantidade: 1 },
    { nome: 'Guaraná Jesus', preco: 12.00, quantidade: 1 },
]
function addValorTotal(arr) {
    return arr.map((produto) => {
        return {
            ...produto,
            valorTotal: produto.preco * produto.quantidade,
        }
    });
}
// calcValorTotal(refrigerantes).map((produto) => console.log(produto));

/* 8- Converta um array de temperaturas em graus Celsius para Fahrenheit usando a fórmula (C * 9/5) + 32. */
const temperaturasCelsius = [0, 12, 24, 36, 48, 60, 72, 84, 96, 108];
function celsiusToFahrenheit(arr) {
    return arr.map((temp) => (temp * 9 / 5) + 32);
}
// console.log(celsiusToFahrenheit(temperaturasCelsius)); //[32, 53.6, 75.2, 96.8, 118.4, 140, 161.6, 183.2, 204.8, 226.4]

/* ### Reduce: */

/* 9- Dado um array de números, use o método reduce() para calcular a soma de todos os elementos. */
function somaListaNumeros(arr) {
    return arr.reduce((acc, num, arr) => acc + num);
}
// console.log(soma([10, 9, 8, 7, 6, 5])); // 45

/* 10- Crie um array de strings e use o método reduce() para concatenar todas as strings em uma única string. */
function concatenaListaPalavras(arr) {
    return arr.reduce((acc, palavra) => acc + palavra);
}
// console.log(concatenaListaPalavras(['k','a','t','á',' ','M','a','t','t','h','a','i','o','n'])); // katá Matthaion

/* 11- Dado um array de objetos representando despesas com propriedades como valor e categoria, use o método reduce() para calcular o total de despesas de uma categoria específica. */
const despesas = [
    { valor: 500, categoria: 'Alimentação' },
    { valor: 500, categoria: 'Alimentação' },
    { valor: 500, categoria: 'Alimentação' },
    { valor: 500, categoria: 'Alimentação' },
    { valor: 500, categoria: 'Alimentação' },
    { valor: 500, categoria: 'Transporte' },
    { valor: 300, categoria: 'Lazer' },
    { valor: 2200, categoria: 'Saúde' },
]
function somaDespesasPorCategoria(arr, categoria) {
    return arr.reduce((acc, despesa) => {
        if (despesa.categoria === categoria) {
            acc += despesa.valor;
        }
        return acc;
    }, 0);
}
// console.log(somaDespesasPorCategoria(despesas, 'Alimentação')); // 2500

/* 12- Dado um array de números, use o método reduce() para encontrar o maior número no array. */
function findMaiorNumero(arr) {
    return arr.reduce((acc, num) => acc > num ? acc : num);
}
// console.log(findMaiorNumero([420, 0o7, 42, 12, 6, 4])); // 420

/* ### Laços de Repetiçoes */

/* 13- Imprima os números de 1 a 10 utilizando um loop for. */
function printNumeros(min, max) {
    for (let i = min; i <= max; i++) {
        console.log(i);
    }
    return;
}
// imprimeNumeros(1,10); // 1, 2, 3, 4, 5, 6, 7, 8, 9, 10

/* 14- Imprima os números pares de 1 a 20 utilizando um loop for. */
function printNumerosPares(min, max) {
    for (let i = min; i <= max; i++) {
        if (i % 2 === 0) {
            console.log(i);
        }
    }
    return;
}
// imprimeNumerosPares(1,20); // 2, 4, 6, 8, 10, 12, 14, 16, 18, 20

/* 15- Calcule a soma dos números de 1 a 50 utilizando um loop for. */
function somaNumeros(min, max) {
    let soma = 0;
    for (let i = min; i <= max; i++) {
        soma += i;
    }
    return soma;
}
// console.log(somaNumeros(1, 50)); // 1275

/* 16- Imprima a tabuada do 7 utilizando um loop for. */
function getTabuada(number) {
    for (let i = 1; i <= 10; i++) {
        console.log(`${number} x ${i} = ${number * i}`);
    }
    return;
}
// getTabuada(7);

/* 17- Escreva um programa que solicite ao usuário um número e imprima a sequência de números de 1 até o número inserido, utilizando um loop for. */
function printNumerosAte(number) {
    for (let i = 1; i <= number; i++) {
        console.log(i);
    }
    return;
}
// printNumerosAte(prompt("Digite um número:")); //Precisa executar no console do navegador em index.html

/* 18- Escreva um programa que solicite ao usuário um número e verifique se ele é primo.  */
function isPrimo() {
    const number = parseInt(prompt("Digite um número:"));
    
    if(number < 2 || number === undefined || number === null || number === NaN) {
        return 'Obrigado!';
    }

    /*
        A definição de número primo diz que primo é todo número natural que é divisível por 1 e por ele mesmo e maior ou igual a dois.
        Logo, um não pode ser primo. https://www.laboratoriosustentaveldematematica.com/2019/04/por-que-1-nao-e-primo-por-prof-daniela.html
    */
    let divisores = 0;
    for (let i = 2; i <= number; i++) {
        if (number % i === 0) {
            divisores++;
        }
    }

    return divisores === 1 
}
// alert(isPrimo() ? `É um número primo`: `Não é um número primo`); //Precisa executar no console do navegador em index.html

/* 19- Crie um programa que gere a sequência de Fibonacci até o décimo termo. (Dica: o próximo termo é a soma dos dois termos anteriores) */
function getFibonacci(number) {
    let fibonacci = [0, 1];
    for (let i = 2; i <= number; i++) {
        fibonacci.push(fibonacci[i - 1] + fibonacci[i - 2]);
    }
    return fibonacci;
}
// console.log(getFibonacci(10)); // [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]

/* 20- Crie um programa que solicite ao usuário um número e calcule o fatorial desse número. */
function getFatorial() {
    const number = parseInt(prompt("Digite um número:"));
    if(number < 0 || number === undefined || number === null || number === NaN) {
        return 'Obrigado!';
    }

    /*
        O fatorial (!) de um número n, representado por n!, é a multiplicação de n por seus antecessores maiores ou iguais a 1.
        Essa operação é muito comum em análise combinatória.
        https://brasilescola.uol.com.br/matematica/fatorial.htm
    */
    let fatorial = 1;
    for (let i = 1; i <= number; i++) {
        fatorial *= i;
    }
    return fatorial;
}
// alert("Fatorial igual a " + getFatorial()); // Precisa executar no console do navegador em index.html

/* 21- Escreva um programa que imprima a seguinte série: 1, 3, 6, 10, 15, 21, ..., onde cada número é a soma dos números naturais consecutivos.*/
function calcListaSomaConsecutivo(number) {
    let lista = [1];
    for (let i = 2; i <= number; i++) {
        lista.push(i + lista[lista.length - 1]);
    }
    return lista;
}
// console.log(calcListaSomaConsecutivo(6)); // [1, 3, 6, 10, 15, 21]

/* 22- Crie um programa que encontre e imprima todos os números perfeitos de 1 a 1000. Um número perfeito é aquele cuja soma de seus divisores (excluindo ele mesmo) é igual ao próprio número. */
function getNumerosPerfeitos(min,max) {
    let numerosPerfeitos = []
    for (let numero = min; numero <= max; numero++) {
        
        // se a soma dos divisores...
        let somaDivisores = 0;
        for (let i = 1; i < numero; i++) {
            if (numero % i === 0) {
                somaDivisores += i;
            }
        }
        // for igual ao numero, adicione ao array
        if (somaDivisores === numero) {
            numerosPerfeitos.push(numero);
        }
    }
    // imprima o resultado
    return numerosPerfeitos;
}
// console.log(getNumerosPerfeitos(1,1000)); // [6, 28, 496]

/* 23- Crie um jogo em que o computador escolhe um número aleatório entre 1 e 100, e o jogador deve adivinhar qual é esse número. O jogo deve fornecer dicas informando se o número a ser adivinhado é maior ou menor do que o palpite do jogador, e o jogo deve continuar até que o jogador acerte o número.  */
function getAdvinheONumero() {
    const numero = Math.floor(Math.random() * 100) + 1; // random vai de 0 a .999^
    console.log(numero)
    let palpite = parseInt(prompt("Advinhe o número entre 1 e 100:"));
    
    let tentativas = 1;
    do { //todo: refactor if for switch
        if (palpite < 1 || palpite > 100 || palpite === undefined || palpite === null || palpite === NaN) {
            palpite = numero; // força saída do loop
            return 'Obrigado!';
        } else if (palpite > numero) {
            palpite = parseInt(prompt(`O número é menor que "${palpite}". Tente novamente:`));
        } else if (palpite < numero) {
            palpite = parseInt(prompt(`O número é maior que "${palpite}". Tente novamente:`));
        } else if (palpite === numero) {
            return `Parabéns, você acertou o número ${numero} na primeira tentativa!`;
        }
        tentativas++;
    } while (palpite !== numero);

    return `Parabéns, você acertou o número ${numero} em ${tentativas} tentativas!`;
}
// window.addEventListener('load', alert(getAdvinheONumero())); // Precisa executar no console do navegador em index.html

/* 24- Crie um programa que gere a sequência de números de Fibonacci usando um loop while até que o próximo termo seja maior que 1000. */
function getFibonacciWhile(number) {
    let fibonacci = [0, 1];
    let i = 2;
    while (fibonacci[i - 1] + fibonacci[i - 2] <= number) { // confiando nos indices do array...
        fibonacci.push(fibonacci[i - 1] + fibonacci[i - 2]);
        i++;
    }
    return fibonacci;
}
// console.log(getFibonacciWhile(1000)); // [0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, 377, 610, 987]

/* 25- Escreva um programa que calcule a média de uma lista de números.
O usuário deve fornecer quantos números deseja inserir, e em seguida, inserir os números.  */
function calcMediaLista() {
    const quantidade = parseInt(prompt("Quantos números deseja inserir?"));
    if(quantidade < 1 || quantidade === undefined || quantidade === null || quantidade === NaN) {
        return 'Obrigado!';
    }

    let numeros = [];
    /* 
        for (let i = 0; i < quantidade; i++) { // ou um while com numeros.length < quantidade
            numeros.push(parseInt(prompt(`Insira o número ${i + 1}:`)));
        }
    */
    while (numeros.length < quantidade) {
        numeros.push(parseInt(prompt(`Insira o número ${numeros.length + 1}:`)));
    }

    const soma = numeros.reduce((acumulador, numero) => acumulador + numero);
    const media = soma / numeros.length;
    
    console.log(numeros, media);
    return media;
}
// alert(calcMediaLista()); // Precisa executar no console do navegador em index.html

/* 26- Escreva um programa que peça ao usuário para adivinhar um número secreto entre 1 e 100. O programa deve fornecer dicas como "maior" ou "menor" até que o jogador adivinhe corretamente. */
// window.addEventListener('load', alert(getAdvinheONumero())); // Precisa executar no console do navegador em index.html

/* 27- Crie um programa que gere a sequência de números primos até um número fornecido pelo usuário. */
function getPrimosAte(number) {
    const start = performance.now(); // abre o cronometro
    let primos = [];

    for (let i = 2; i <= number; i++) {
        let divisores = 0;
        primos.forEach((primo) => { // Todo número inteiro é composto por fatores primos...
            if (divisores < 1 && i % primo === 0) { 
                divisores++;
            }
        });

        if (divisores === 0) { // ... ou ele mesmo é primo
            primos.push(i);
        }
    }

    const end = performance.now(); // fecha o cronometro
    console.log(`Execution time: ${Math.round(end - start)} ms`); // imprime o tempo de execução
    
    return primos;
}
// console.log(getPrimosAte(100000)); //Execution time: 1325 ms

/* 28- Escreva um código JavaScript que utilize um laço de repetição while para imprimir os números pares de 0 a 10.  */
function printNumerosParesWhile(min, max) {
    let numerosPares = [];
    let i = min;
    while (i <= max) {
        if (i % 2 === 0) {
            numerosPares.push(i);
        }
        i++;
    }
    return numerosPares;
}
// console.log(printNumerosParesWhile(0, 10)); // [0, 2, 4, 6, 8, 10]

/* 29- Escreva um código JavaScript que solicite ao usuário um número e utilize um laço de repetição do-while para verificar se o número inserido é uma potência de 2. */
function isPotenciaDeDois() {
    let numero = parseInt(prompt("Digite um número:"));
    if(numero < 1 || numero === undefined || numero === null || numero === NaN) {
        return 'Obrigado!';
    }

    let potenciaDeDois = 1;
    do {
        potenciaDeDois *= 2;
    } while (potenciaDeDois < numero);

    return potenciaDeDois === numero;
}
// window.addEventListener('load', alert(isPotenciaDeDois() ? `Potência de dois`: `Não é potência de dois`)); // Precisa executar no console do navegador em index.html

/* 30- Escreva um código JavaScript que utilize um laço de repetição while para calcular a soma dos números de 1 a 100 e exiba o resultado. */
function sumNumerosWhile(min,max) {
    let soma = 0;
    let i = min;
    while (i <= max) {
        soma += i;
        i++;
    }
    return soma;
}
// console.log(sumNumerosWhile(1, 100)); // 5050

/* ### Condicionais */

/* 31- Verificação de vogal ou consoante
Peça ao usuário para digitar uma letra.
Use uma estrutura condicional para verificar se a letra é uma vogal ou uma consoante.
Exiba uma mensagem indicando se a letra é uma vogal ou consoante. */
function isVogal() {
    const letra = prompt("Digite uma letra:").toLowerCase();
    if(letra === undefined || letra === null || letra === NaN) {
        return 'Obrigado!';
    }

    const vogais = ['a', 'e', 'i', 'o', 'u'];
    return vogais.includes(letra);
}
// window.addEventListener('load', alert(isVogal() ? `É uma vogal`: `Não é uma vogal`)); // Precisa executar no console do navegador em index.html

/* 32- Calculadora simples
Peça ao usuário para digitar dois números e uma operação matemática (+, -, *, /).
Use uma estrutura condicional para realizar a operação selecionada nos números dados.
Exiba o resultado da operação. */
function calcOperacaoMatematica() {
    const prompt1 = prompt("Digite um número (ex.: 2):");
    const numero1 = prompt1 ? parseInt(prompt1) : prompt1;
    const prompt2 = prompt("Digite outro número (ex.: 5) :");
    const numero2 = prompt2 ? parseInt(prompt2) : prompt2;
    const prompt3 = prompt("Digite uma operação matemática ( + , - , * ou / ):");
    const operacao = ['+', '-', '*', '/'].includes(prompt3) ? prompt3 : undefined;

    if(numero1 === undefined || numero2 === undefined || operacao === undefined) {
        return 'Obrigado!';
    }
    switch (operacao) {
        case '+':
            return numero1 + numero2;
        case '-':
            return numero1 - numero2;
        case '*':
            return numero1 * numero2;
        case '/':
            if (numero2 === 0) {
                return 'Divisão por zero!';
            }
            return numero1 / numero2;
        default:
            return 'Operação inválida!';
    }
}
// window.addEventListener('load', alert(calcOperacaoMatematica())); // Precisa executar no console do navegador em index.html


/* 33- Verificação de número primoalmoço
Peça ao usuário para digitar um número.
Use uma estrutura condicional para verificar se o número é primo (divisível apenas por 1 e por ele mesmo).
Exiba uma mensagem indicando se o número é primo ou não. */
function getPrimoOrNot() {
    const number = parseInt(prompt("Digite um número:"));

    let divisores = 0;
    for (let i = 2; i <= number && divisores < 2; i++) {
        if (number % i === 0) {
            divisores++;
        }
    }

    let mensagem = ''
    if (divisores === 1) {
        mensagem = `${number} é um número primo`;
    } else {
        mensagem = `${number} *não* é um número primo`;
    }

    return mensagem;
}
// window.addEventListener('load', alert(getPrimoOrNot())); // Precisa executar no console do navegador em index.html

/* 34- Conversão de temperatura
Peça ao usuário para digitar uma temperatura em graus Celsius.
Use uma estrutura condicional para converter a temperatura para Fahrenheit ou Kelvin, de acordo com a escolha do usuário.
Exiba o resultado da conversão. */
function getTemperatura() {
    const temperatura = parseInt(prompt("Digite uma temperatura em graus Celsius:"));
    const escala = parseInt(prompt("Digite uma escala de temperatura (1 Fahrenheit ou 2 Kelvin):"));
    if (![1, 2].includes(escala)) {
        return 'Escala inválida!';
    }

    let temperaturaConvertida = 0;
    if (escala === 1) {
        temperaturaConvertida = (temperatura * 9 / 5) + 32;
    } else if (escala === 2) {
        temperaturaConvertida = temperatura + 273.15;
    }

    return `${temperatura}°C equivale a ${temperaturaConvertida}°${escala === 1 ? 'F' : 'K'}`;
}
// window.addEventListener('load', alert(getTemperatura())); // Precisa executar no console do navegador em index.html

/* 35- Dia da semana por extenso
Peça ao usuário para digitar um número de 1 a 7 representando um dia da semana.
Use uma estrutura condicional switch para exibir o nome completo do dia da semana correspondente ao número digitado. */
function getDiaDaSemana() {
    const dia = parseInt(prompt("Digite um número de 1 a 7 representando um dia da semana:"));

    switch(dia) {
        case 1:
            return 'Domingo';
        case 2:
            return 'Segunda-feira';
        case 3:
            return 'Terça-feira';
        case 4:
            return 'Quarta-feira';
        case 5:
            return 'Quinta-feira';
        case 6:
            return 'Sexta-feira';
        case 7:
            return 'Sábado';
        default:
            return 'Dia inválido!';
    }
}
// window.addEventListener('load', alert(getDiaDaSemana())); // Precisa executar no console do navegador em index.html

/* 36- Verificação de ano bissexto
Peça ao usuário para digitar um ano.
Use uma estrutura condicional para verificar se o ano é bissexto (divisível por 4 e não por 100, exceto se for divisível por 400).
Exiba uma mensagem indicando se o ano é bissexto ou não. */
function isBissexto() {
    const ano = parseInt(prompt("Digite um ano:"));
    if(!ano) {
        return 'Obrigado!';
    }

    if (ano % 100 === 0) {  
        return `${ano} não é um ano bissexto`;
    } else if (ano % 100 === 0 && ano % 400 === 0) {
        return `${ano} é um ano bissexto`;
    } else if (ano % 4 === 0) {
        return `${ano} é um ano bissexto`;
    }
}
// window.addEventListener('load', alert(isBissexto())); // Precisa executar no console do navegador em index.html

/* 37- Contador de vogais e consoantes
Peça ao usuário para digitar uma palavra ou frase.
Use uma estrutura condicional para contar o número de vogais e consoantes na entrada.
Exiba os resultados separadamente. */
function countVogaisEConsoantes() {
    const palavra = prompt("Digite uma palavra ou frase:").toLowerCase();
    if(!palavra) {
        return 'Obrigado!';
    }
    const consoantes = ['b', 'c', 'd', 'f', 'g', 'h', 'j', 'k', 'l', 'm','n','p','q','r','s','t','v','w','x','y','z'];
    let consoantesCount = 0;
    const vogais = ['a', 'e', 'i', 'o', 'u'];
    let vogaisCount = 0;
    for (let letra of palavra) {
        if (vogais.includes(letra)) {
            vogaisCount++;
        } else if (consoantes.includes(letra)) {
            consoantesCount++;
        }
    }

    return `
        A palavra/frase "${palavra}" tem:
            * ${vogaisCount} vogais;
            * ${consoantesCount} consoantes.        
    `;
}
// window.addEventListener('load', alert(countVogaisEConsoantes())); // Precisa executar no console do navegador em index.html

/* 38- Verificação de número positivo, negativo ou zero
Peça ao usuário para digitar um número.
Use uma estrutura condicional para verificar se o número é positivo, negativo ou zero.
Exiba uma mensagem indicando a natureza do número. */
function getNumberMode(number) {
    if (number > 0) {
        return 'positivo';
    } else if (number < 0) {
        return 'negativo';
    } else if (number === 0) {
        return 'zero';
    } else {
        return 'Número inválido!';
    }
}
// window.addEventListener('load', alert(getNumberMode(parseInt(prompt("Digite um número:"))))); // Precisa executar no console do navegador em index.html

/* 39- Sistema de bilhete de cinema
Peça ao usuário para digitar sua idade e se tem cartão de estudante (responda com "sim" ou "não").
Use uma estrutura condicional para determinar o preço do bilhete de cinema de acordo com as regras: menores de 18 anos pagam $5, estudantes pagam $8 e os demais pagam $10.
Exiba o preço do bilhete. */
function getPrecoCinema() {
    const idade = parseInt(prompt("Digite sua idade:"));
    const promptEstudante = parseInt(prompt("Tem cartão de estudante? (digite 1 para Sim ou 2 para Não):"));
    
    const estudante = [1,2].includes(promptEstudante) ? promptEstudante : undefined;
    if(!idade || !estudante) {
        return 'Obrigado!';
    }

    let preco = 0;
    if (idade < 18) {
        preco = 5;
    } else if (estudante === 1) {
        preco = 8;
    } else {
        preco = 10;
    }

    return `O preço do bilhete é R$ ${preco}`;
}
// window.addEventListener('load', alert(getPrecoCinema())); // Precisa executar no console do navegador em index.html

/* 40- Verificação de palíndromo
Peça ao usuário para digitar uma palavra ou frase.
Use uma estrutura condicional para verificar se a entrada é um palíndromo (lê-se igual de trás para frente e de frente para trás).
Exiba uma mensagem indicando se a entrada é um palíndromo ou não. */
function isPalindromo() {
    const palavra = prompt("Digite uma palavra ou frase:").toLowerCase();
    if(!palavra) {
        return 'Obrigado!';
    }

    const palavraReversa = palavra.split('').reverse().join('');

    return palavra === palavraReversa ? `${palavra} é um palíndromo` : `${palavra} *não* é um palíndromo`;
}
// window.addEventListener('load', alert(isPalindromo())); // Precisa executar no console do navegador em index.html