/**
 * Como fazer um programa que sorteia um número entre
 *  dois inteiros e mantém o
 *  usuário respondendo até que ele
acerte, provendo um feedback se o número chutado 
foi maior ou menor que o sorteado?
 */

const numeroSorteado = Math.floor(Math.random() * 100) + 1; // Sorteia um número entre 1 e 100
let tentativas = 0;

while (true) {
  const chute = parseInt(prompt("Chute um número:"));

  if (isNaN(chute)) {
    alert("Por favor, digite um número válido.");
    continue;
  }

  tentativas++;

  if (chute === numeroSorteado) {
    alert(`Parabéns, você acertou em ${tentativas} tentativa(s)!`);
    break; // caso tenha acertado faço um break para parar a condição do while, uma vez que ele executa enquanto for true
  } else if (chute < numeroSorteado) {
    alert("Tente um número maior.");
  } else {
    alert("Tente um número menor.");
  }
}
