// par nome/valor
const salutations = 'Hemlo'

function exec() {
    const salutations = 'Hey boyo'
    return salutations
}

const cliente = {
    'name': 'Pedrinho',
    'age': 32,
    'weight/kg': 60, 
    'adress': {
        'logradouro': 'Rua do meu Juvenal',
        'number': 22,
    }
}

console.log(salutations)
console.log(exec())
console.log(cliente.adress.logradouro)