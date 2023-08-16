const minhaPromise = new Promise((resolve, reject) => {
  // simular uma operação ASSÍNCRONA bem sucedida
  setTimeout(() => {
    const resultado = "Operação concluída";
    resolve(resultado); // resolvendo a promisse 
    // se eu quisesse simular um reject 
    // reject(new Error("Algo deu errado"));
  }, 6000)
});

// manipular promisse
// trabalhar com encademanto de funcções
minhaPromise
  .then(resultado => {
    console.log(resultado); // tratar a promisse no caso de sucesso
  })
  .catch(erro => {
    console.log(erro) // tratar a promisse no caso de reject
  });

console.log("Ola tudo bem");