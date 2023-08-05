console.log(`Coerção Implícita: A coerção 
implícita acontece quando JavaScript 
realiza automaticamente a conversão de 
tipos durante a execução de uma operação. 
Isso pode ocorrer em expressões aritméticas, 
concatenação de strings, comparações e operações 
lógicas. `)


// Coerção implícita em operações aritméticas
const x = 5 + "10"; // Resultado: "510"
const y = 5 - "2";  // Resultado: 3

// Coerção implícita em concatenação de strings
const name = "Alice";
const message = "Olá, " + name; // Resultado: "Olá, Alice"

// Coerção implícita em comparações
const a = 10;
const b = "5";
console.log(a > b); // Resultado: true (b é convertido para o número 5)

// Coerção implícita em operações lógicas
const value = "Hello";
if (value) {
  console.log("A expressão é verdadeira"); // Será executado
}



console.log(`Coerção Explícita: A coerção explícita
 ocorre quando você explicitamente converte um 
 valor de um tipo para outro usando funções ou 
 operadores de conversão de tipo.
`)


// Coerção explícita usando funções de conversão de tipo
const strNumber = "10";
const number = Number(strNumber); // Converte para número

const boolValue = true;
const stringValue = String(boolValue); // Converte para string

const num = 5;
const str = num.toString(); // Converte para string

// Coerção explícita usando operador de conversão de tipo
const result = +"5"; // Converte para número

const value1 = "10";
const value2 = "5";
const sum = +value1 + +value2; // Converte ambos para números antes da soma
