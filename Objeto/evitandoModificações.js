// Object.preventExtensions() vvvv
// Previne adicionar novos atributos, permite deletar e modificar atributos existentes;
const produto = Object.preventExtensions({
    nome: 'Qualquer',
    promoção: 'Dois pelo preço de tres',
    preço: 3 
})
console.log('Extensivel?:', Object.isExtensible(produto))

produto.nome = 'Danonão Grosso'
produto.preço = 8
produto.descricao = 'A bebida lendária do beição.'
delete produto.promoção

console.log(produto)

// Object.seal() vvvv
// Não consegue adiciounar ou deletar atributos, mas consegue modificar
const pessoa = { nome: 'Aldebaran', idade: null }
Object.seal(pessoa)
pessoa.nome = 'Skadi'
pessoa.raça = 'Donknow'
delete pessoa.nome
console.log(pessoa)

// Object.freeze() vvvv
// Tudo é selado, sem quaisquer modificações, basicamente o 'const' dos objetos.