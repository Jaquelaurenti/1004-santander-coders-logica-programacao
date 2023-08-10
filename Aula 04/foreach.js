const frutas = ['maçã', 'banana', 'laranja'];

frutas.forEach(function(elemento) {
  console.log("eu preciso da fruta" + elemento)
  console.log(elemento)
});

const frutas1 = ['maçã', 'banana', 'laranja'];


frutas1.forEach(fruta => console.log(fruta));

// acessar o indice


const frutas2 = ['maçã', 'banana', 'laranja'];

frutas2.forEach(function (fruta, indice, array){
  console.log("Indice " + indice);
  console.log("Array completo: " + array);
  console.log("Elemento " + fruta);
});


