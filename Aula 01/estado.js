let modalAberto = false // Representa o estado de um modal

function abrirModal() {
  console.log("Antes de abrir o modal");
  console.log("Valor da variável", modalAberto);
  modalAberto = true; // atualizando o ESTADO do modal para verdadeiro, ou seja modal abnerto

  console.log("Depois de abrir o modal");
  console.log("Valor da variável", modalAberto);

}

console.log("Fora da função");
console.log("Valor da variável", modalAberto); /

function fecharModal() {
  modalAberto = false; // atualizandoo ESTADO do modal para falso ou seja, modal fechado
}

abrirModal()
// IMplementar um controle de estado que determina se o Ken vai abrir o coração ou não de acordo com o amor da barbie