//Implemente um programa que compare duas strings e 
//determine se elas são iguais, 
//ignorando maiúsculas e minúsculas.

function verificaString(string1, string2) {
  // garanti que todos os parametros sejam maisculos
  let str1 = string1.toUpperCase();
  let str2 = string2.toUpperCase();

  if(str1 === str2) {
    console.log("Oba, são iguais!")
  } else {
    console.log("Que pena, são diferentes!")
  }
  //if(string1.toUpperCase() === string2.toUpperCase())
  // return string1.toUpperCase() === string2.toUpperCase() ?
  // console.log("Oba, são iguais!"): console.log("Que pena, são diferentes!");
}

verificaString("exemplO", "exemPLO");


// Crie uma função que retorne a data e hora 
// atuais no formato legível: "Dia/Mês/Ano Hora:Minuto:Segundo".


function obterDataHoraFormatada() {

  const dataAtual = new Date();

  const dia = String(dataAtual.getDate()).padStart(2,"0");
  const mes = String(dataAtual.getMonth() + 1).padStart(2, "0");
  const ano = dataAtual.getFullYear();

  const hora =  String(dataAtual.getHours() + 1).padStart(2, "0");
  const minuto =  String(dataAtual.getUTCMinutes() + 1).padStart(2, "0");
  const segundo =  String(dataAtual.getSeconds() + 1).padStart(2, "0");
  const dataHoraFormatada = `${dia}/${mes}/${ano}:${hora}:${minuto}:${segundo}`
  return dataHoraFormatada;
}

console.log(obterDataHoraFormatada())


function data2() {
  const date = new Date();
  console.log(new Intl.DateTimeFormat('pt-BR', { dateStyle: 'full', timeStyle: 'long', timeZone: 'America/Sao_Paulo' }).format(date));
};

console.log(data2());


//Dado um array de objetos representando despesas com
// propriedades como valor e categoria, use o método reduce()
// para calcular o total de despesas de uma categoria específica.

const despesas = [
  {valor: 100, categoria: "Lazer"},
  {valor: 100, categoria: "Alimentação"},
  {valor: 100, categoria: "Saúde"},
  {valor: 100, categoria: "Lazer"},
  {valor: 100, categoria: "Lazer"},
  {valor: 100, categoria: "Alimentação"},
  {valor: 100, categoria: "Alimentação"},
  {valor: 100, categoria: "Transporte"},
  {valor: 100, categoria: "Educação"},
  {valor: 100, categoria: "Estética"}
];

const categoriaAlvo = "Alimentação"

const totalDespesaCategoria = despesas.reduce((acumuladorTotal, arrayDeObjetos) => {
  if(arrayDeObjetos.categoria === categoriaAlvo) {
    return acumuladorTotal + arrayDeObjetos.valor;
  }
  return acumuladorTotal;
},0);

// 
//console.log('O total de despenas na categoria: ' + categoriaAlvo + ' é de: ' + totalDespesaCategoria );

function funcaoDaIsa(listaObjetos, categoriaDeDespesa) {
  // o valor acumulado
  const totalDespesaCategoria = listaObjetos.reduce((acumuladorTotal, arrayDeObjetos) => {
    
    if(arrayDeObjetos.categoria === categoriaDeDespesa) {
      return acumuladorTotal + arrayDeObjetos.valor;
    }
    return acumuladorTotal;
  },0);

  //return totalDespesaCategoria;
  return 'O total de despesas na categoria: ' + categoriaDeDespesa + 
  ' é de: ' + totalDespesaCategoria;
}

console.log(funcaoDaIsa(despesas, "Estética"));


const refrigerantes = [
  { nome: 'Cajuína', preco: 8.00, quantidade: 2 },
  { nome: 'Tubaína', preco: 9.00, quantidade: 1 },
  { nome: 'Guaraná Jesus', preco: 12.00, quantidade: 1 },
]
function addValorTotal(arr) {
  return arr.map((produto) => {
      return {
          ...produto,
          valorTotal: produto.preco * produto.quantidade,
      }
  });
}
addValorTotal(refrigerantes).map((produto) => console.log(produto));

//  programa em JavaScript que gera a sequência
// de números de Fibonacci usando um loop while até que o próximo
// termo seja maior que 1000

let termoAtual = 1;
let proximoTermo = 1;

console.log("Sequencia Fibonacci");

while (termoAtual <= 1000) {
  console.log(termoAtual);
  const temp = termoAtual + proximoTermo;
  termoAtual = proximoTermo;
  proximoTermo = temp;
}


function getFibonacciWhile(number) {
  let fibonacci = [0, 1];
  let i = 2;
  while (fibonacci[i - 1] + fibonacci[i - 2] <= number) { // confiando nos indices do array...
      fibonacci.push(fibonacci[i - 1] + fibonacci[i - 2]);
      i++;
  }
  return fibonacci;
}
console.log(getFibonacciWhile(1000)); // [0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, 377, 610, 987]


function getPrimosAte(number) {
  const start = performance.now(); // abre o cronometro
  let primos = [];

  for (let i = 2; i <= number; i++) {
      let divisores = 0;
      primos.forEach((primo) => { // Todo número inteiro é composto por fatores primos...
          if (divisores < 1 && i % primo === 0) { 
              divisores++;
          }
      });

      if (divisores === 0) { // ... ou ele mesmo é primo
          primos.push(i);
      }
  }

  const end = performance.now(); // fecha o cronometro
  console.log(`Execution time: ${Math.round(end - start)} ms`); // imprime o tempo de execução
  
  return primos;
}
console.log(getPrimosAte(1000)); //Execution time: 1325 ms