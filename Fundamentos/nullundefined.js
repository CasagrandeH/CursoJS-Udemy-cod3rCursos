let valor // não inicializada
console.log(valor)

valor = null // ausência de valor
console.log(valor)
// console.log(valor.toString()) // Erro!

/*
Basicamente, não é uma boa prática utilizar o 'undefined' pois ele ja é algo que aconteceria sem sua 
intervenção, você pode testar isto fazendo algo como 'console.log(valores)'. Você vera que a variavel não foi
declarada.
Neste caso, sempre que você precisar que uma variavel pare de apontar para um endereço na memoria, seja ela 
um objeto ou um tipo primitivo, o recomendado é utilizar o 'null' pois ele é uma variavel declarada e não é 
ideal atribuir "não inicializada" aka 'undefined' a uma variavel que ja foi inicializada.
*/

const produto = {}
console.log(produto)
console.log(produto.price)
// console.log(produto.price.discount) // Erro!

produto.price = 3.50

produto.price = undefined // Evite! Deixe para a linguagem.
console.log(!!produto.price)
console.log(produto)

delete produto.price // Melhor do que setar pra undefined!
console.log(produto)

produto.price = null // Sem preço!
console.log(produto)

const a = {name: 'lmao'}
a['funky?'] = true
let b = a
b['funky?'] = false
console.log(a, b)
