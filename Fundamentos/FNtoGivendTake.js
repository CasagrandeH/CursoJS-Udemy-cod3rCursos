console.log(typeof Object)

class Product {}
console.log(typeof Product)

console.log('')

// Função sem retorno.

function imprimirSoma(a, b) {
    console.log(`${a + b}`)
}

imprimirSoma(2, 4)
imprimirSoma(2)
imprimirSoma(2, 4, 0, 9, 99, 22) // Vai pegar apenas os dois primeiros neste caso.
imprimirSoma()
imprimirSoma
console.log(imprimirSoma())
console.log(imprimirSoma)
console.log('')


function soma(a, b=0) {
    return a + b
}

soma(2, 4)
soma(2)
soma(2, 4, 0, 9, 99, 22) // Vai pegar apenas os dois primeiros neste caso.
soma()
soma
console.log(soma())
console.log(soma)
console.log(soma(2, 4))
console.log('')

// Armazenando uma função em uma variavel.
const imprimirSubtrac = function (a, b) {
    console.log(`${a - b}`)
}

imprimirSubtrac(2,5)

// Armazenando uma função Arrow em uma variavel.
const subtrac = (a, b) => {
    return a - b
}
console.log(subtrac(2,5))

// Retorno/return implicito.
const soma = (a, b) => a + b
console.log(soma(-5, 2))

// Redução

const imprimir = a => console.log(a)
imprimir('-3')
