function modelo(car) {
    let carro = String(car).toLowerCase()
    switch (carro) {
        case 'hatch':
            return 'Compra efetuada com sucesso.'
        case 'sedan':
        case 'motocicleta':
        case 'caminhonete':
            return 'Tem certeza sobre a compra deste modelo?'
        default:
            return 'Não trabalhamos com esse modelo.'
    }
}
console.log(modelo('HATCH'))
console.log(modelo('caminhonete'))
console.log(modelo('motocicleta'))
console.log(modelo('sedan'))
console.log(modelo('amarok'))
console.log(modelo('Subaru'))