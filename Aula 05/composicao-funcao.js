function dobrar(numero) {
  console.log("Estou no dobrar e o parametro e " + numero )
  return numero *2;
}

function somarDois(numero) {
  console.log("Estou no somardois e o parametro e " + numero )
  return numero +2;
}

function quadrado(numero) {
  console.log("Estou no quadrado e o parametro e " + numero )
  return numero * numero;
}
// composição das funcoes 
function transformar(numero){
  return(quadrado(somarDois(dobrar(numero))));
}

console.log(transformar(5)) //s