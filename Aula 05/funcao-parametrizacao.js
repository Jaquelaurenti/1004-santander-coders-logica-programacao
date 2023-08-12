function soma(...numero) {
  return numero.reduce((accumulator, index) => accumulator + index);
};

console.log(soma(1, 2, 3, 4, 5, 6, "JAque"))
