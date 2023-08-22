const pessoa = {
    name: 'Ratalia',
    age: 11,
    weight: 73
}

console.log(Object.keys(pessoa))
console.log(Object.values(pessoa))
console.log(Object.entries(pessoa))

Object.entries(pessoa).forEach( e => {
    console.log(`${e[0]}: "${e[1]}"`)
})

console.log('')

Object.entries(pessoa).forEach( ([chave, valor]) => {
    console.log(`${chave}: "${valor}"`)
}) // usando um destruct

Object.defineProperty(pessoa, 'dataNascimento', {
    enumerable: true, // Define se ele aparecera na: Object.keys(pessoa)
    writable: false,
    value: '17/01/2002',
}) 
// ^^^^ Pode ser usado para criar um objeto com caracteristicas customizadas.

pessoa['dataNascimento'] = '01/01/2001'
console.log(pessoa.dataNascimento)
console.log(Object.keys(pessoa))

const dest = { a: 1, } // terá seu valor sobreescrito neste exemplo vvv
const o1 = { b: 2, }
const o2 = { c: 3, a: 4} // o ultimo valor reina

const obj = Object.assign(dest, o1, o2) // concatena todos objetos no primeiro listado
console.log(obj)
