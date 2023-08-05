//console.log("Operadores Lógicos")

// and
console.log("Retorna verdadeiro SE AMBAS as condições forem verdadeiras");

const idade = 18;
const temCarteira = false;

if(idade >= 18 || temCarteira) {
  console.log("Pode Dirigir!")
} else {
  console.log("Não pode dirigir!");
}

// Operador NOT

console.log("Operador not ele INVERTE o valor de uma expressao booleana")


const choveAgora = true;

if(!choveAgora){
  console.log("Não preciso de guardachuva")
} else {
  console.log("Preciso de um guardachuva")
}