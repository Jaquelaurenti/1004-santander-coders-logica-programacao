// declaração

const quadrado = x => x*x;

//console.log(quadrado(8))


// Exemplo de função

function funcaoNormal(){
  this.valor = 42;

  this.mostraValor = function() {
    console.log(this.valor)
  }
}


const arrowFunction = () => {
  this.valor = 24;
  console.log(this.valor);
}

//const instanciaNormal = funcaoNormal();
//console.log(instanciaNormal);
//instanciaNormal.mostraValor();

const instanciaNormal = new funcaoNormal();
console.log(instanciaNormal);
instanciaNormal.mostraValor();


const instanciaArrow = arrowFunction();