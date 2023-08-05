// capturar os elementos do HTML

const pesoInput = document.getElementById('peso');
const alturaInput = document.getElementById('altura');
const calcularBtn = document.getElementById('calcular');
const resultadoDiv = document.getElementById('resultado');

// adicionar um ouvinte de evento ao botão de cálculo


calcularBtn.addEventListener('click', () => {
  // Garantir que os valores de entrada sejam convertidos para númerois
  const peso = parseFloat(pesoInput.value);
  const altura = parseFloat(alturaInput.value);

  // Verificar se os valores são valores válidos
  if(isNaN(peso) || isNaN(altura)) {
    resultadoDiv.textContent = "Por favor, insira um valor válido."
    return;
  }

  // calcular o imc

  const imc = peso / (altura ** 2); // exponenciação Math.pow() // exponenciação
  
  // Exibe o resultado
  resultadoDiv.textContent =  `Seu IMC é: ${imc.toFixed(2)}`

});