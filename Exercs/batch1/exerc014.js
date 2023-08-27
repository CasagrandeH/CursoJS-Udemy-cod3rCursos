function produto(fruit) {
    let fruta = fruit
    fruta = String(fruta).toLowerCase()
    switch (fruta) {
        case 'maçã': 
            console.log('Não vendemos maçã aqui.')
            break
        case 'kiwi':
            console.log('Estamos com escasses de kiwis.')
            break
        case 'melancia':
            console.log('Aqui está, são 3 reais o kg.')
            break
        default:
            console.log('ERROR!')
    }
}
produto('KIWI')
produto('MaçÃ')
produto('Melão')
produto('MelanCIA')