/* 1- Escreva um programa que calcule a área de um retângulo com base no comprimento e largura fornecidos pelo usuário. */
function calculaAreaRetangulo(comprimento, largura) {
    return comprimento * largura;
}
// console.log(calculaAreaRetangulo(10, 20)); //200

/* 2- Crie um programa que determine se um número é par ou ímpar utilizando o operador de módulo (%). */
function parOuImpar(numero) {
    return numero % 2 === 0 ? 'par' : 'ímpar'
}
// console.log(parOuImpar(2)); //par
// console.log(parOuImpar(3)); //ímpar

/* 3- Escreva uma função que verifique se uma string fornecida pelo usuário contém a palavra "JavaScript". */
function includesJavaScriptWord(string) {
    return string.includes('JavaScript');
}
// console.log(includesJavaScriptWord('JavaScript é uma linguagem de programação')); //true

/* 4- Implemente um programa que compare duas strings e determine se elas são iguais, ignorando maiúsculas e minúsculas. */
function compareStringsLowercase(string1, string2) {
    return string1.toLowerCase() === string2.toLowerCase();
}
// console.log(compareStringsLowercase('JavaScript', 'javascript')); //true

/* 5- Crie uma função que concatene duas listas (arrays) e retorne a lista resultante. */
function concatenaListas(lista1, lista2) {
    return [...lista1, ...lista2];
}
// console.log(concatenaListas([1, 2, 3], [4, 5, 6])); //[1, 2, 3, 4, 5, 6]

/* 6- Escreva um programa que calcule a média dos valores em um array utilizando a função reduce() e length. */
function calculaMedia(lista) {
    return lista.reduce((acumulador, total) => acumulador + total, 0) / lista.length;
}
// console.log(calculaMedia([1, 2, 3, 4, 5, 6]));  //3.5

/* 7- Crie uma função que retorne a data e hora atuais no formato legível: "Dia/Mês/Ano Hora:Minuto:Segundo". */
function dataHoraAtual() {
    const data = new Date();
    const dia = data.getDate();
    const mes = data.getMonth() + 1; // Janeiro [0]
    const ano = data.getFullYear();
    const hora = data.getHours();
    const minuto = data.getMinutes();
    const segundo = data.getSeconds();
    return `${dia}/${mes}/${ano} ${hora}:${minuto}:${segundo}`;
}
// console.log(dataHoraAtual());

/* 8- Implemente um programa que encontre o maior valor em um array usando a função Math.max(). */
function listaMaiorValor(lista) {
    return Math.max(...lista);
}
// console.log(listaMaiorValor([16, 2, 4, 64, 8, 32])); //64

/* 9- Escreva uma função que gere um número inteiro aleatório entre dois valores dados como argumentos. */
function numeroAleatorio(min, max) {
    return Math.round(
        (Math.random() * (max - min)) + min
    ); 
}
// console.log(numeroAleatorio(1, 3)); // (1 || 2 || 3)

/* 10- Crie um programa que verifique se um número dado pelo usuário é um número primo usando uma função. */
function isNumeroPrimo(numero) {
    let divisores = 0;
    for (let i = 1; i <= numero && divisores < 3; i++) {
        if (numero % i == 0) { divisores++ } 
    }
    return divisores === 2;
}
// console.log(isNumeroPrimo(0)); // { 0: false; 1: false; 2: true }

/* 11- Declare uma variável com valor "5" (string) e outra variável com valor 2 (número). Multiplique as duas variáveis e explique o resultado. */
function multiplicaStringPorNumero() {
    const string = '5';
    const numero = 2;
    const resultado = string * numero;
    
    return `
        Mesmo que "${string}" seja do tipo ${typeof string} e ${numero} seja do tipo ${typeof numero},
        o JavaScript converte a string em número e realiza a multiplicação.
        Por isso que "5" * 2 é igual a ${resultado} (do tipo ${typeof resultado})`;
}
// console.log(multiplicaStringPorNumero()); //Explicação e resultado

/* 12- Converta a string "123" em um número inteiro e armazene-o em uma variável. */
let numero = parseInt('123');
// console.log(numero, typeof numero); //number 123

/* 13- Escreva um programa que adicione um número e uma string. */
function somaNumeroString(numero, string) {
    return numero + string;
}
// console.log(somaNumeroString(2, '2')); //22

/* 14- Explique o resultado e discuta a coerção que ocorre. */
// Enquanto na multiplicação do item 11 o JavaScript converte a string em número,
// na adição ele converte o número em uma string e concatena a outra.

/* 15- Declare uma variável com o valor null e outra variável com o valor undefined. Verifique se são iguais em valor e tipo. */
function compareNullUndefined() {
    const variavelNull = null;
    const variavelUndefined = undefined;
    return variavelNull === variavelUndefined;
}
// console.log(compareNullUndefined()); //false

/* 16- Crie um programa que determine se uma variável é do tipo função usando o operador typeof. */
function isFuncao(variable) {
    return typeof variable === 'function';
}
// console.log(isFuncao(isFuncao)); //true
// console.log(isFuncao(numero)); //false

/* 17 ? */

/* 18- Escreva um programa que calcule o resultado da expressão: (10 + 5) * 3 / 20. */
function calculaExpressao() {
    return (10 + 5) * 3 / 20;
}
// console.log(calculaExpressao()); //2.25, parenteses (soma) > multiplicação > divisão

/* 19- Crie uma função que verifique se um número é positivo e ímpar ao mesmo tempo. */
function isPositivoImpar(numero) {
    return numero > 0 && numero % 2 !== 0;
}
// console.log(isPositivoImpar(0)); //false

/* 20- Implemente um programa que determine se um ano fornecido pelo usuário é bissexto ou não, considerando as regras: (a) Anos divisíveis por 4 são bissextos; (b) Anos divisíveis por 100 não são bissextos, a menos que também sejam divisíveis por 400. */
function isAnoBissexto(ano) {
    return ano % 4 === 0 && (ano % 100 !== 0 || ano % 400 === 0);
}
// console.log(isAnoBissexto(300)); //false

/* 21- Escreva uma função que determine se uma pessoa tem permissão para entrar em um clube: idade mínima de 18 anos e não estar na lista de membros banidos (use operadores lógicos). */
function isPermitidoEntrar(pessoa, idade, listaBanidos) {
    return idade >= 18 && !listaBanidos.includes(pessoa);
}
// console.log(isPermitidoEntrar('Tiago', 18, ['Pedro','Tiago','João'])); //false

/* 22- Crie um programa que simule um sistema de login. Peça ao usuário um nome de usuário e uma senha, e verifique se correspondem aos valores esperados. */
function login(nomeDeUsuario, senha) {
    const usuarios = [{
        nomeDeUsuario: 'gleidsonlm',
        senha: 'Uma-Senha-Segura-Com-N7m3r05'
    }];
    const usuarioEncontrado = usuarios.find(usuario => usuario.nomeDeUsuario === nomeDeUsuario);
    const usuarioValido = usuarioEncontrado && usuarioEncontrado.senha === senha;
    
    return usuarioValido ? 'Login efetuado com sucesso!' : 'Usuário ou senha inválidos.';
}
// console.log(login('gleidsonlm', 'Uma-Senha-Segura-Com-N7m3r05')); //true
// console.log(login('gleidsonlm', 'gleidsonlm')); //false