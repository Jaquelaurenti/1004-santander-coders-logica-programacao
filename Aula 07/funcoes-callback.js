function processarDados(dados, callback) {
  // Simular uma operação assíncrona, para simular uma requisição de rede
  setTimeout(function () {
    const resultado = dados.toUpperCase();
    //callback(resultado); // aguardar um segundo antes de executar o callback
    exibirResultado(resultado);
  },1000)
}

function exibirResultados(res) {
  console.log("Resultado:" + res);
}


const dados = "exemplo";

processarDados(dados)

