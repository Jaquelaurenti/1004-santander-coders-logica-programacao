let vetorNumeros = [1,2,3,4,5];

console.log(vetorNumeros);

let vetorString = ["maçã", "banana", "mamão"]

console.log(vetorString);

let vetorMisto = [1, true, {nome: "Maria helena", idade: 18}];

console.log(vetorMisto[2].idade);

let vetorVazio = [];

console.log(vetorVazio);

// Usando o Construtor Array()

const vetorArray = new Array("a", "b", "c");
vetorArray.push("c");
vetorArray[0] = "Jaque";
console.log((vetorArray.findIndex(x => x.includes("b"))))
console.log(vetorArray);

// matriz

const matriz = [
  [1,2,3],
  [4,5,6],
  [7,8,9]
];

console.log(matriz);
console.log(matriz[0][1]);