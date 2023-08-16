const lanchonete = function (code, qnt) {
    let preco = 0

    if (code === 100) {
        preco = 3
    } else if (code === 200) {
        preco = 4
    } else if (code === 300) {
        preco = 5.50
    } else if (code === 400) {
        preco = 7.50
    } else if (code === 500) {
        preco = 3.50
    } else if (code === 600) {
        preco = 2.80
    }

    let total = preco * qnt

    switch (code) {
        case 100:
            return `Hot Dog x ${qnt} = R$${total.toFixed(2).replace('.',',')}`
        case 200:
            return `Hamburguer x ${qnt} = R$${total.toFixed(2).replace('.',',')}`
        case 300:
            return `Cheeseburger x ${qnt} = R$${total.toFixed(2).replace('.',',')}`
        case 400:
            return `Bauru x ${qnt} = R$${total.toFixed(2).replace('.',',')}`
        case 500:
            return `Refrigerante x ${qnt} = R$${total.toFixed(2).replace('.',',')}`
        case 600:
            return `Suco x ${qnt} = R$${total.toFixed(2).replace('.',',')}`
        default:
            return 'Item não encontrado no menu, tente novamente.'
    }
}

console.log(lanchonete(100, 2))
console.log(lanchonete(200, 3))
console.log(lanchonete(300, 1))
console.log(lanchonete(400, 10))
console.log(lanchonete(500, 7))
console.log(lanchonete(600, 4))
console.log(lanchonete(700, 3))