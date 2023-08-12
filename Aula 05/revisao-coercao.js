// coerção implicita em operações aritméticas

const x = 5 + "10"; //resultado 510
const y = 5 - "10"; // resultado 5 

console.log(y);

// coerção implicita em concateção de trings

const nome = "Jaque";
const mensagem = "Olá" + nome;
console.log(mensagem);

// coerção implicta em comparações

const a = 10 ;
const b = "5";

console.log(a > 5);

// coerção explicita que nos forçamos acontecer

const stringNumero = "10";
const numero = Number(stringNumero);

console.log(typeof(numero));
console.log(stringNumero);
