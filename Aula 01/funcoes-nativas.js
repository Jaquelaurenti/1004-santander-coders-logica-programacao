/*console.log("Exemplo de uso de funções nativas para entrada e saída com o usuário")

// Leitura de entrada do usuário usando prompt()
const name = prompt("Qual é o seu nome?");
console.log("Olá, " + name + "! Bem-vindo ao JavaScript!");

// Exibição de saída usando alert()
alert("Esta é uma mensagem de alerta!");

// Exibição de saída usando console.log()
console.log("Isso é exibido no console");

*/
console.log("Funcções nativas - String");

let str = "Olá, mundo Santander       !";

console.log(str.lengt); // retorna o comprimento da string
console.log(str.toUpperCase()); // transforma tudo em caixa alta
console.log(str.toLocaleLowerCase()); // transforma tudo em caixa baixa

console.log('Funcções de Array');

let numeros = [1,2,3,4,5];

console.log(numeros.length); // retorna o tamanho do array
console.log(numeros.push('Clovis')) // adicona um elemento após a ultima posição do array
console.log(numeros.pop()) // remove uma posição do array
console.log(numeros)

console.log('Funções Matemáticas');

console.log(Math.sqrt(25)); // retorna a raiz quadrada de um numero
console.log(Math.random()); // retorna um numero randomico

console.log('Funcões de data');

let dataAtual = new Date ();
console.log(dataAtual);
console.log(dataAtual.getDay());

console.log('Funções de COnversão');

let numero = "42";
let numeroTransformado = parseInt(numero);

console.log(numero)
console.log(typeof(numeroTransformado))