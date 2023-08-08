// ESTRUTURA
/*if(condicao) {
  // bloco de codigo a ser executando quando a CONDIÇÃO for verdadeira
} else {
  // bloco de codigo a ser executando quando a condição for FALSA
}*/


// Exemplo
const idade = 18;

if (idade >= 18) {
  console.log("Maior de idade");
} else {
  console.log("Menor de idade")
}

/*// estrutura
// else if 
if(condicao) {
  // bloco de codigo
} else if (condicao2) {
  // bloco de codigo
} else {
  // bloco de codigo
}*/

if (idade == 18) {
  console.log("Acabou de se tornar maior de idade");
} else if (idade > 18) {
  console.log("Maior de idade")
} else {
  console.log("Menor de idade")
}


const nota = 68

if (nota >= 90) {
  console.log("Nota A");
} else if (nota >= 80) {
  console.log("Nota B");
} else if (nota >= 70) {
  // SO ENTRA SE MAIOR QUE 70
  if(nota > 70 || nota < 75) {
    console.log("Nota C+");
  } else {
    console.log("Nota C-");
  }  
} else {
  console.log("Nota D");
}


//switch

const diaSemana = "sexta";

switch (diaSemana) {
  case "segunda":
  case "terça":
  case "quarta":
  case "quinta":
    // executa o que eu preciso de acordo copm a condi'ao verdadeira
    console.log("Dia de trabalhar");
    break;
  case "sexta":
  case "sabado":
  case "domingo":
    console.log("Fim de semana");
    break;
  default:
    console.log("Dia inválido")
  
}

// ESTRUTURa

/*switch(expressao) {
  case valor1:
    // o que ele precisa fazer no caso do valor1 ser igual a expressao
    break;
  case valor2:
    // o que ele precisa fazer no caso do valor2 ser igual a expressao
    break;
  default:
    // bloco de codigo que é executado se nenhuma condicao for verdadeira
}*/