// FUNÇÕES DE CALLBACK 
function callback () {
function executarComDelay(mensagem, callback) {

  console.log("Aguardando a conclusão da execução da nossa função de callback");
  setTimeout(function(){
    console.log("Oba, processou o nosso dado" + mensagem);
    callback() // chamando a função de callback após o delay que vamos setar no timeout
  }, 6000) // delay de 2 segundos
}

function minhaFuncaoDeCallback() {
  console.log(2+2)
}
// chamar a função executar com delay
executarComDelay("Olá mundo, ", minhaFuncaoDeCallback);
}

// promisse
function promisse () {
  console.log("Aguardando a conclusão da execução da nossa Promisse");
  function  executarComDelayPromise(intervalo) {
    return new Promise(function (resolve, reject) {
      setTimeout(function(){
        console.log("Oba, processou o nosso dado" + mensagem);        
        // A RESOLVE SÓ SERÁ CHAMADA APÓS OS 4 SEGUNDOS DO TIMEOUT

        resolve() // chamando a função a reoslução da minha promisse
      }, 4000) // delay de 2 segundos
    });    
  }
  executarComDelayPromise("Parametro")
    .then(function (soma) {
      console.log("A promisse foi resolvida")
    })
    .catch(function (error) {
      console.log("Aconteceu algum erro ao executar a promisse: "+ error)
    });
}

function asyncAwait () {

  async function  executarComDelayAwait(intervalo) {
    console.log("Aguardando a conclusão da execução do async");
    await new Promise (resolve => setTimeout(resolve, intervalo));
    console.log(" Delay Concluido em: " + intervalo + "milisegundos");
  }

  async function main () {
    await executarComDelayAwait(2000);
    console.log("Operação concluída com sucesso");
  }

  main()

}

asyncAwait()