function primeiraOpcao() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Isabella");
    },1500)
  });
}

function segundaOpcao(resultado) {
  console.log("printando o resultado que é o argumento passado; " + resultado)
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(resultado + " Segunda opção concluída");
    },1500)
  });
}

primeiraOpcao()
  .then((resultado) => {
    return segundaOpcao(resultado);
  }).then((resultadoFinal) => {
    console.log(resultadoFinal);
  });


