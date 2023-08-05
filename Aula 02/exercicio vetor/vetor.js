// Dado um vetor de números, 
// escreva um programa que calcule a soma 
// de todos os elementos e exiba o resultado.

let vetor = [1,2,3,4,5];
let soma = 0;
console.log(vetor.length)

for (let contador = 0; contador < vetor.length; contador++) {
  console.log("Antes: " + contador);
  console.log("Antes: " + soma);
  soma += vetor[contador] // adicionando o incremento na var soma
  console.log("Depois: " + soma);

}