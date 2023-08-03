/*function exemploVar()
{  
  if(true) {
    var x = 10;
  }  
  console.log(x); // neste cenário o x ele é acessível fora do IF onde ele foi declarado
}

function exemploLet()
{

  if(true) {
    let j = 150;
    console.log("Dentro do contexto do if")
   
  }
  console.log("Fora do contexto do IF")
  //console.log(j); // neste cenário o j não fica acessível pois estamos trabalhando
}

exemploVar();

//exemploLet()*/

console.log("Exemplo de uso de constante");
const nome = prompt("Qual é o seu nome?");
console.log("Olá " + nome + " seja bem vindo");

nome = "Jaque" // não é possível ser atribuído pois constantes são imutáveis dentro da javscript