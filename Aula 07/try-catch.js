function dividir(a,b) { 
  try {  
    console.log("Estou no ") 
    if(b === 0) {
      throw new Error("Divisão por zero não é permitida");
    } 
    return a/b;
  } catch(error) {
    console.log("caiu no catch")
    console.log(error)
    console.error(error);
  }
  
}

console.log(dividir(10,0))

//console.error("teste")

function divisao(a,b) {
  try {
    let resultado = a/b;
    return console.log("O resultado é " + resultado);
  } catch(error) {
    console.error(error);
    console.log("Ocorreu uma exceçao: ", error);
  } finally { 
    console.log("Esse cara será executado por default")
  } 

}

//divisao(5,0)