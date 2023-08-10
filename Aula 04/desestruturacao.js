const numeros = [1,2,3,4,5];

// Atribuir 
const [batata, chocolate, cocacola, goiabada, caju, livro] = numeros;

console.log(batata);
console.log(chocolate);
console.log(cocacola);
console.log(goiabada);
console.log(caju);
console.log(livro);


// Desestruturação de objeto


const pessoa = { nome: "Jaque", idade: 28};

const { nome, idade } = pessoa

console.log(nome);
console.log(idade);

