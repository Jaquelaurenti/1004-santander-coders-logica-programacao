/* 1. Crie uma função que calcule a soma de dois números. */
function somaDoisNumeros (numero1, numero2) {
    return numero1 + numero2;
}
// console.log(somaDoisNumeros(42, 13));

/* 2. Escreva uma função que calcule o produto de três números. */
function calculaProdutoTresNumeros(numero1, numero2, numero3) {
    return numero1 * numero2 * numero3;
}
// console.log(calculaProdutoTresNumeros(2, 3, 4)); // 24

/* 3. Crie uma função que verifique se um número é par ou ímpar.*/
function isPar(numero) {
    return numero % 2 === 0;
}
// console.log(isPar(9999)); // false

/* 4. Escreva uma função que inverta uma string (por exemplo, "hello" se torna "olleh"). */
function inverteString(string) {
    return string.split('').reverse().join('');
}
// console.log(inverteString('hello')); // olleh

/* 5. Crie uma função que retorne o maior valor de um array de números. */
function maiorValorArray(array) {
    return Math.max(...array);
}
// console.log(maiorValorArray([12, 42, 999, '9999'])); // 9999

/* 6. Escreva uma função que calcule a média de um array de números. */
function mediaArray(array) {
    return array.reduce((acumulador, indice) => acumulador + indice) / array.length;
}
// console.log(mediaArray([9, 99, 999, 9999, 99999])); // 22221

/* 7. Crie uma função que verifique se uma palavra é um palíndromo (lê-se igual de trás para frente). */
function isPalindromo(string) {
    return string === inverteString(string);
}
// console.log(isPalindromo('arara')); // true

/* 8. Escreva uma função que conte quantas vezes uma determinada letra aparece em uma string. */
function contaLetra(string, letra) {
    return string.split(letra).length - 1;
}
// console.log(contaLetra('inconstitucionalíssisimamente', 'i')); // 5 (i !== í)

/* 9. Crie uma função que calcule o fatorial de um número. */
function fatorial(numero) {
    let resultado = 1;
    for (let i = 1; i <= numero; i++) {
        resultado *= i;
    }
    return resultado;
}
// console.log(fatorial(7)); // 5040

/* 10. Escreva uma função que converta graus Celsius para Fahrenheit. */
function celsiusToFahrenheit(celsius) {
    return (celsius * 1.8) + 32;
}
// console.log(celsiusToFahrenheit(-40)); // -40

/* 11. Crie uma função que encontre o valor mínimo e máximo em um array de números. */
function minimoMaximoLista(lista) {
    return { mínimo: Math.min(...lista), máximo: Math.max(...lista)};
}
// console.log(minimoMaximoLista(['-273', 0, 42])); // { mínimo: -273, máximo: 42 }

/* 12. Escreva uma função que calcule a sequência de Fibonacci até um determinado número de termos. */
function fibonacci(termos) {
    let resultado = [1];
    let anterior = 0;
    let atual = 1;
    
    do {
        atual += anterior;
        anterior = atual - anterior;
        resultado.push(atual);
    } while (resultado.length < termos)

    return resultado;
}
// console.log(fibonacci(12)); // [1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144]

/* 13. Crie uma função que verifique se um número é primo. */
function isPrimo(numero) {
    if (numero < 2) { return false };
    
    for (let i = 2; i < numero ; i++) {
        if (numero % i === 0) { return false };
    }

    return true;
}
// console.log(isPrimo(9973)); // true
// console.log(isPrimo(9977)); // false, divisível por 11

/* 14. Escreva uma função que remova os elementos duplicados de um array. */
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set
function removeDuplicadosListaSet(lista) {
    return [...new Set(lista)];
}
// console.log(removeDuplicadosListaSet([0, '1', 1, 2, 3, 0, 'zero', 'um', 'um', 'dois', 'três', 'zero']));
function removeDuplicadosLista(lista) {
    return lista.filter((elemento, indice) => lista.indexOf(elemento) === indice);
}
// console.log(removeDuplicadosLista([0, '1', 1, 2, 3, 0, 'zero', 'um', 'um', 'dois', 'três', 'zero']));

/* 15. Crie uma função que ordene um array de números em ordem crescente. */
function ordenarListaNumerica(lista) {
    // https://www.freecodecamp.org/news/how-does-the-javascript-sort-function-work/
    return lista.sort((a,b) => a - b);
}
console.log(ordenarListaNumerica([1, 89, 2, 3, 5, 144, 13, 21, -1, 34, 55, 8]));

/* 16. Escreva uma função que retorne o número de dias entre duas datas. */
/* 17. Crie uma função que calcule o raio de um círculo com base em sua área. */
/* 18. Escreva uma função que encontre o segundo maior valor em um array de números. */
/* 19. Crie uma função que converta um valor em dólares para outra moeda com base em uma taxa de câmbio. */
/* 20. Escreva uma função que verifique se duas strings são anagramas (contêm as mesmas letras, mas em ordens diferentes). */