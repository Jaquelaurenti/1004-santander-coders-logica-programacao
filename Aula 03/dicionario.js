let dicionario = {};

// Adicionar elementos ao dicionario
dicionario["chave1"] = "valor01"
dicionario["chave2"] = "valor02"
dicionario["chave3"] = "valor03"

console.log(dicionario["chave1"]);

// verificar se uma chave existe no dicionario
console.log("chave1" in dicionario); // output boolean TRUE or FALSE


// percorrer o dicionario
console.log(dicionario)
for(const chave in dicionario) {
  console.log("Resultado da chave:   " + chave);
  console.log("Resultado do elemento do dicionario:    " + dicionario[chave])
}

// verificar o tamanho do dicionário
let tamanho = Object.keys(dicionario).length;

console.log(tamanho);

// Outra forma de declar dicionarios/objeto

const frutas = {
  maca: 2,
  banana: 5,
  laranja: 3
}

console.log(frutas);