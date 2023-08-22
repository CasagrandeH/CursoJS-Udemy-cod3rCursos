// pessoa --> 123(ENDEREÇO NA MEMORIA) --> {...} 
// pessoa mantem endereço que recebe novo objeto

const pessoa = { nome: 'Jãum'}
pessoa.nome = 'Pedrola'
console.log(pessoa)

// pessoa --> 456 --> {...} 
// pessoa recebe novo endereço que aponta pra novo objeto

/* 
pessoa = { nome: 'Marcquins'} // GERA ERRO! 
*/


// Como fazer com que o objeto em seja constante tambem?
// Assim ó vvvvv

Object.freeze(pessoa)

pessoa.nome = 'Mario...'
pessoa.idade = 40
console.log(pessoa.nome)
console.log(pessoa)

const pessoaConstante = Object.freeze({ nome: 'Paola'} )
console.log(pessoaConstante)