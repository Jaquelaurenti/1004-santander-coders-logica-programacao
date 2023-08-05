// Como fazer um programa que calcule médias 
// e médias ponderadas, de três notas a 
// partir das entradas do usuário (sem laço)?



// Obter as notas do usuario

let nota1 = parseFloat(prompt("Digite a primeira nota: "))
let nota2 = parseFloat(prompt("Digite a segunda nota: "))
let nota3 = parseFloat(prompt("Digite a terceira nota: "))

// Obter os pesoas das notas
let peso1 = parseFloat(prompt("Digite o peso da primeira nota: "))
let peso2 = parseFloat(prompt("Digite o peso da segunda nota: "))
let peso3 = parseFloat(prompt("Digite o peso da terceira nota: "))


let media = (nota1 + nota2 + nota3) / 3;
let somaPeso = (peso1 + peso2 + peso3);
let mediaPonderada = (nota1 * peso1 + nota2 * peso2 + nota3 * peso3) / somaPeso;

// Exibindo os resultados
console.log("Média: " + media.toFixed(2));
console.log("Média Ponderada: " + mediaPonderada.toFixed(2));