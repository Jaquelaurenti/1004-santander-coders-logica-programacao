// formatação do uso
/*const resultado = array.reduce((acumulador, elemento, indice, array) =>{
  // logica para acumular o valor
  return novoAcumulador
}, valorInicial);*/

const numeros = [1,2,3,4,5];
console.log(numeros)
const soma = numeros.reduce((acumulador, numero, indice, array) => {
  console.log(`Acumulador: ${acumulador}, Elemento Atual: ${numero}
  Indice: ${indice}`);
  return acumulador + numero;
}, 10)

console.log(soma);


let total = numeros.reduce((total, numero) => total + numero, 0);
console.log(total);