const pessoa = {
    name: 'Gustavo',
    age: 21,
    job: 'Supermarket Inspector',
    adress: {
        street: 'Rua dos CCdilha', number: 123
    }
}
console.log(pessoa)

const { name, job } = pessoa

console.log(name, job)

const { name: n, job: j } = pessoa
console.log(n, j)

const { surname, jobless = false } = pessoa
console.log(surname, jobless)

const { adress: { street, number, CEP } } = pessoa

console.log(street, number, CEP)