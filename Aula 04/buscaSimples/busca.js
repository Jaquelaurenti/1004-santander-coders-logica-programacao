/**
 * Como fazer uma busca simples em um vetor de tamanho N?
 */



export function buscaSimples(vetor, valorProcurado) { 
  let indice = undefined;

  for(let i = 0; i< vetor.length; i++) {
    if(vetor[i] === valorProcurado) {
      indice = i;
    }
  }
  return indice;

}

const vetor = [4,8,15,16,25,32];
const valorProcurado = 50;

const indiceProcurado = buscaSimples(vetor, valorProcurado);

if(indiceProcurado !== undefined) {
  console.log(`O valor ${valorProcurado} foi encontrado no indice ${indiceProcurado}`);
} else {
  console.log(`O valor ${valorProcurado} não foi encontrado no vetor`);
}