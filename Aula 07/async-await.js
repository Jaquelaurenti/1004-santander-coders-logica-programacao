
function minhaFuncaoAssincrona() {
  return new Promise((resolve) => {
    setTimeout(() => {
      const resultado = "Operação concluída";
      resolve(resultado); // resolvendo a promisse       
    }, 4000);
  });
}

function Clovis() {
  return new Promise((resolve) => {
    setTimeout(() => {
      const resultado = "Estou falanodo com o Clovis";
      resolve(resultado); // resolvendo a promisse       
    }, 6000);
  });
}

async function f1() {
  console.log("Comecei a executar a minha função")
  var x = await minhaFuncaoAssincrona();
  console.log(x);
  var y = await Clovis();
  console.log(y); // 10 
  console.log("Teste isa");
  
}


f1();


 