const produtos = [
    { nome: "notebook", preco: 2499, fragil: true},
    { nome: "iPad Pro", preco: 4199, fragil: true},
    { nome: "Copo de Vidro", preco: 12.00, fragil: true},
    { nome: "Copo de Plastico", preco: 4.00, fragil: false }
]

let names = item => item.nome
const produtoNomes = produtos.map(names)

let moneyd = item => `R$${parseFloat(item.preco).toFixed(2).replace('.',',')}`
const produtoReal = produtos.map(moneyd)

let fragil = item => item.fragil
let resists = item => !item.fragil

const produtoFragil = produtos.filter(fragil)
const produtoResistente = produtos.filter(resists)

console.log([produtoNomes, produtoReal])
console.log([produtoFragil, produtoResistente])