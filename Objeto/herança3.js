const pai = { nome: 'Partola', corCabelo: 'Ruivo', corOlhos: 'Castanho'}

const filha1 = Object.create(pai)
filha1.nome = 'Anildads'
filha1.corCabelo = 'Castanho'
console.log(filha1, filha1.corCabelo)

const filha2 = Object.create(pai, {
    nome: { value: 'Moanda', writable: false, enumerable: true }
})

console.log(filha2.nome)
filha2.nome = 'Ana'
console.log(filha2.nome)

for (let key in filha1) {
    filha1.hasOwnProperty(key) ? // Operador ternario
        console.log(`Atributo Próprio -> ${key}: "${filha1[key]}"`) : console.log(`Por herança -> ${key}: "${filha1[key]}"`)
} console.log('')

for (let key in filha2) {
    filha2.hasOwnProperty(key) ? // Operador ternario
        console.log(`Atributo Próprio -> ${key}: "${filha2[key]}"`) : console.log(`Por herança -> ${key}: "${filha2[key]}"`)
}