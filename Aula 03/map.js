// formatação de um map

/*const novoArray = arrayOriginal.map((elemento, indice, array)=> {
// dentro eu faço a transformação a ser aplicada ao elemento do novoArray
// ou seja, a cada linha do novoArray eu vou aplicar a transformação descrita aqui
});*/

const numeros = [1,2,3,4,5];
const dobrados = numeros.map((numero) => {
  //console.log(`Elemento Atual: ${numero}, Indice: ${indice}`);  
  if(numero == 4) {
    return numero * 2;
  }
  else {
    return "não quero você na lista"
  }  
});

console.log(dobrados);

