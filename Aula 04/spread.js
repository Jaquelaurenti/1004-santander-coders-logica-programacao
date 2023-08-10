const arrayOriginal = [1,2,3];
const arrayOriginal1 = [5,6,7];
const copiaArray = [...arrayOriginal, ...arrayOriginal1];
const copiaArrayIsa = [];
copiaArrayIsa.concat(arrayOriginal,arrayOriginal1);

console.log(arrayOriginal);
console.log(copiaArray);

const pessoa = { nome: 'Ionar', idade: 25};
const pessoaSigno = { ...pessoa, signo: 'gemeos'};

console.log(pessoaSigno);
{}
[]

let lista = [{ nome:'jaque', idade: 28},
{ nome:'jaque', idade: 28},
{ nome:'jaque', idade: 28},
{ nome:'jaque', idade: 28},
{ nome:'jaque', idade: 28},
{ nome:'jaque', idade: 28}
]

let copiaLista = [...lista]
console.log(copiaLista);


