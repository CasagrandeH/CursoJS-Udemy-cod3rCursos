// Coleção dinâmica de pares chave/valor
const product = new Object
product.name = 'Ikea Chair'
product['marca do produto'] = 'Ikea'
product.price = 220

console.log(product)
delete product.price
console.log(product)
delete product['marca do produto']
console.log(product)

const car = {
    model: 'A4',
    pricedAt: 89000,
    OwnedBy: {
        name: 'Raul Seixas',
        age: 111,
        adress: {
            street: 'Rua ABC',
            number: 123
        }
    },
    conductors: [{
        name: 'Ana Paola',
        age: 19
    }, {
        name: 'Paulo Cinto',
        age: 21
    }, {
        name: 'Jalin Rabei',
        age: 69
    }],
    calcularValorSeguro: () => {
        // ...
    }
}

console.log(car)