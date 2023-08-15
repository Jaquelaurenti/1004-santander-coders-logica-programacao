function contagemRegressivaDoClovis(numero) {

  if(numero <= 0) {
    console.log("Obaaa, deu certo a contagem regressiva do Clovis")
  } else {
    console.log(numero);
    contagemRegressivaDoClovis(numero - 1);
  }
}

//setInterval()
//contagemRegressivaDoClovis(5);

setInterval(contagemRegressivaDoClovis(5), 1000)

// PARA CASA CONSTRUIR UMA CONTAGEMREGRESSIVADOJULIO utilizando o setInterval